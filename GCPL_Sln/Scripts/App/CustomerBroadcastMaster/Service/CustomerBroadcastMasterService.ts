//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerBroadCastListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerBroadList(data: any): Array<model.CustomerCastListModel>;

    }
    export class CustomerBroadCastListService extends GCPL.Service.BaseService implements ICustomerBroadCastListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetCustomerBroadcastList";
            var SearchText;

            debugger;

            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }

            let config = {
                params: {
                    SearchText: SearchText
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCustomerBroadList(data: any): Array<model.CustomerCastListModel> {
            let list = Array<model.CustomerCastListModel>();

            for (let item of data) {
                list.push({

                    CustomerBroadcastID: item.CustomerBroadcastID,
                    Title: item.Title,
                    Description: item.Description,
                    YouTubeLink: item.YouTubeLink,
                    Photo: item.Photo,
                    Video: item.Video,
                    Status: ((item.Status == "True") ? "Active" : "Inactive"),
                    WhenEntered: item.WhenEntered

                   

                });
            }
            return list;
        }

    }
    app.AddService("CustomerBroadCastListService", CustomerBroadCastListService);
}

//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertCustomerBroadService {
        PostCustomerBroad(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertCustomerBroadService extends GCPL.Service.BaseService implements IInsertCustomerBroadService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CustomerBroadcastMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCustomerBroad(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertCustomerBroadService", InsertCustomerBroadService);
}

//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerCastEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditCustomerCastModel;
    }
    export class CustomerCastEditService extends GCPL.Service.BaseService implements ICustomerCastEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillCustomerBroadcastList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CustomerBroadcastID;

            if (data == undefined) {
                CustomerBroadcastID = "";
            }
            else {
                CustomerBroadcastID = data;
            }

            let config = {
                params: {
                    CustomerBroadcastID: CustomerBroadcastID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditCustomerCastModel {
            debugger;
            let obj = new model.EditCustomerCastModel();

            obj.CustomerBroadcastID = data.CustomerBroadcastID,
                obj.Title = data.Title,
                obj.Description = data.Description,
                obj.YouTubeLink = data.YouTubeLink,
                obj.Photo = data.Photo,
                obj.Video = data.Video,
                obj.Status = data.Status

            return obj;

        }
    }

    app.AddService("CustomerCastEditService", CustomerCastEditService);
}