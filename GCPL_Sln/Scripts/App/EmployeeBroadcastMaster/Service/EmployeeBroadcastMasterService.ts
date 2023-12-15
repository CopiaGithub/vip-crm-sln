//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEmployeeBroadCastListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEmployeeBroadList(data: any): Array<model.EmployeeCastListModel>;

    }
    export class EmployeeBroadCastListService extends GCPL.Service.BaseService implements IEmployeeBroadCastListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetEmployeeBroadcastList";
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
        GetEmployeeBroadList(data: any): Array<model.EmployeeCastListModel> {
            let list = Array<model.EmployeeCastListModel>();

            for (let item of data) {
                list.push({

                    EmployeeBroadcastID: item.EmployeeBroadcastID,
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
    app.AddService("EmployeeBroadCastListService", EmployeeBroadCastListService);
}

//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertEmployeeBroadService {
        PostEmployeeBroad(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertEmployeeBroadService extends GCPL.Service.BaseService implements IInsertEmployeeBroadService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"EmployeeBroadcastMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostEmployeeBroad(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertEmployeeBroadService", InsertEmployeeBroadService);
}

//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEmployeeCastEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditEmployeeCastModel;
    }
    export class EmployeeCastEditService extends GCPL.Service.BaseService implements IEmployeeCastEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillEmployeeBroadcastList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var EmployeeBroadcastID;

            if (data == undefined) {
                EmployeeBroadcastID = "";
            }
            else {
                EmployeeBroadcastID = data;
            }

            let config = {
                params: {
                    EmployeeBroadcastID: EmployeeBroadcastID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditEmployeeCastModel {
            debugger;
            let obj = new model.EditEmployeeCastModel();

            obj.EmployeeBroadcastID = data.EmployeeBroadcastID,
                obj.Title = data.Title,
                obj.Description = data.Description,
                obj.YouTubeLink = data.YouTubeLink,
                obj.Photo = data.Photo,
                obj.Video = data.Video,
                obj.Status = data.Status

            return obj;

        }
    }

    app.AddService("EmployeeCastEditService", EmployeeCastEditService);
}