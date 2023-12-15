//search
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerDivisionService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerDivisionData(data: any): Array<model.CustomerDivisionListModel>;

    }
    export class CustomerDivisionService extends GCPL.Service.BaseService implements ICustomerDivisionService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CustomerDivision";
            var SearchText;
            var Status;
            debugger;

            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }


            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }



            let config = {
                params: {
                    SearchText: SearchText,
                    Status: Status
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCustomerDivisionData(data: any): Array<model.CustomerDivisionListModel> {
            let list = Array<model.CustomerDivisionListModel>();

            for (let item of data) {
                list.push({

                    CustomerDivisionID: item.CustomerDivisionID,
                    CustomerDivision: item.CustomerDivision,
                    SAPID: item.SAPID,
                    WhenEntered: item.WhenEntered,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("CustomerDivisionService", CustomerDivisionService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertCustomerDivisionService {
        PostCustomerDivision(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertCustomerDivisionService extends GCPL.Service.BaseService implements IInsertCustomerDivisionService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertCustomerDivision"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCustomerDivision(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertCustomerDivisionService", InsertCustomerDivisionService);
}

//edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerDivisionEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditCustomerDivisionModel;
    }
    export class CustomerDivisionEditService extends GCPL.Service.BaseService implements ICustomerDivisionEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillCustomerDivision"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CustomerDivisionID;

            if (data == undefined) {
                CustomerDivisionID = "";
            }
            else {
                CustomerDivisionID = data;
            }

            let config = {
                params: {
                    CustomerDivisionID: CustomerDivisionID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditCustomerDivisionModel {
            debugger;
            let obj = new model.EditCustomerDivisionModel();


            obj.CustomerDivisionID = data.CustomerDivisionID,
                obj.CustomerDivision = data.CustomerDivision,
                obj.SAPID = data.SAPID,
                obj.WhenEntered = data.WhenEntered,
                obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("CustomerDivisionEditService", CustomerDivisionEditService);
}