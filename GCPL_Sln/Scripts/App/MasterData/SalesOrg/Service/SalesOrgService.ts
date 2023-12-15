//search
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOrgListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesOrgListData(data: any): Array<model.SalesorgListModel>;

    }
    export class SalesOrgListService extends GCPL.Service.BaseService implements ISalesOrgListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/SalesOrg";
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
        GetSalesOrgListData(data: any): Array<model.SalesorgListModel> {
            let list = Array<model.SalesorgListModel>();

            for (let item of data) {
                list.push({

                    SalesOrgID: item.SalesOrgID,
                    SalesOrg: item.SalesOrg,
                    SAPID: item.SAPID,
                    WhenEntered: item.WhenEntered,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("SalesOrgListService", SalesOrgListService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertSalesOrgService {
        PostSalesOrg(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertSalesOrgService extends GCPL.Service.BaseService implements IInsertSalesOrgService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertSalesOrg"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostSalesOrg(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertSalesOrgService", InsertSalesOrgService);
}


// Edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOrgEditService{
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditSalesOrgModel;
    }
    export class SalesOrgEditService extends GCPL.Service.BaseService implements ISalesOrgEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillSalesOrg"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var SalesOrgID;

            if (data == undefined) {
                SalesOrgID = "";
            }
            else {
                SalesOrgID = data;
            }

            let config = {
                params: {
                    SalesOrgID: SalesOrgID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditSalesOrgModel {
            debugger;
            let obj = new model.EditSalesOrgModel();


            obj.SalesOrgID = data.SalesOrgID,
                obj.SalesOrg = data.SalesOrg,
                obj.SAPID = data.SAPID,
                obj.WhenEntered = data.WhenEntered,
                obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("SalesOrgEditService", SalesOrgEditService);
}