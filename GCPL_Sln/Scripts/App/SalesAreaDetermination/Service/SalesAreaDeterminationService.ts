//LeadCategory dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadCategoryDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadCategoryName(data: any): Array<model.LeadCategoryddlModel>;
    }
    export class LeadCategoryDDService extends GCPL.Service.BaseService implements ILeadCategoryDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadCategoryDD"}`;
        }


        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetLeadCategoryName(data: any): Array<model.LeadCategoryddlModel> {
            let list = Array<model.LeadCategoryddlModel>();
            for (let item of data) {
                list.push({
                    LeadCategoryID: item.LeadCategoryID.toString(),
                    LeadCategory: item.LeadCategory,
                });
            }
            return list;
        }
    }

    app.AddService("LeadCategoryDDService", LeadCategoryDDService);
}

//Search

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesAreaDeterminationListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesAreaDeterminationListData(data: any): Array<model.SalesAreaDeterminationListModel>;

    }
    export class SalesAreaDeterminationListService extends GCPL.Service.BaseService implements ISalesAreaDeterminationListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/SalesAreaDetermination";
            //var SearchText;
            var Status;
            debugger;

            //if (data.SearchText == undefined) {
            //    SearchText = '';
            //}
            //else {
            //    SearchText = data.SearchText;

            //}


            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }



            let config = {
                params: {
                    //SearchText: SearchText,
                    Status: Status
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSalesAreaDeterminationListData(data: any): Array<model.SalesAreaDeterminationListModel> {
            let list = Array<model.SalesAreaDeterminationListModel>();

            for (let item of data) {
                list.push({

                    SalesAreaDeterminationID: item.SalesAreaDeterminationID,
                    SalesOrg: item.SalesOrg,
                   
                    DistributionChannel: item.DistributionChannel,
                    CustomerDivision: item.CustomerDivision,
                    CountryID: ((item.CountryID == "0") ? "Export" : "Domestic"),
                    Category: item.Category,
                    LeadCategory: item.LeadCategory,
                    LeadTypeDesc: item.LeadTypeDesc,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                  
                 

                });
            }
            return list;
        }

    }
    app.AddService("SalesAreaDeterminationListService", SalesAreaDeterminationListService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertSalesAreaDeterminationService {
        PostSalesAreaDetermination(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertSalesAreaDeterminationService extends GCPL.Service.BaseService implements IInsertSalesAreaDeterminationService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertSalesAreaDetermination"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostSalesAreaDetermination(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertSalesAreaDeterminationService", InsertSalesAreaDeterminationService);
}

//edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesAreaDeterminationEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditSalesAreaDeterminationModel;
    }
    export class SalesAreaDeterminationEditService extends GCPL.Service.BaseService implements ISalesAreaDeterminationEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillSalesAreaDetermination"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var SalesAreaDeterminationID;

            if (data == undefined) {
                SalesAreaDeterminationID = "";
            }
            else {
                SalesAreaDeterminationID = data;
            }

            let config = {
                params: {
                    SalesAreaDeterminationID: SalesAreaDeterminationID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditSalesAreaDeterminationModel {
            debugger;
            let obj = new model.EditSalesAreaDeterminationModel();


            obj.SalesAreaID = data.SalesAreaID,
                obj.SalesAreaDeterminationID = data.SalesAreaDeterminationID,

                obj.CountryID = data.CountryID,
                obj.CategoryID = data.CategoryID,
                obj.LeadCategoryID = data.LeadCategoryID,
                obj.ID = data.ID,
                obj.Status = data.Status

               //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("SalesAreaDeterminationEditService", SalesAreaDeterminationEditService);
}