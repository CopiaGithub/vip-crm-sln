namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOrgDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesOrgnew(data: any): Array<model.SalesOrgDDmModel>;
    }
    export class SalesOrgDDService extends GCPL.Service.BaseService implements ISalesOrgDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SalesOrgDD"}`;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }
        GetSalesOrgnew(data: any): Array<model.SalesOrgDDmModel> {
            let list = Array<model.SalesOrgDDmModel>();
            for (let item of data) {
                debugger;
                list.push({
                    SalesOrgID: item.SalesOrgID,
                    SalesOrg: item.SalesOrg
                });
            }


            return list;
        }
    }
    app.AddService("SalesOrgDDService", SalesOrgDDService);
}

//distribution dropdown
namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDistributionChannelDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDistributionChannelDDnew(data: any): Array<model.DistributionChannelDDModel>;
    }
    export class DistributionChannelDDService extends GCPL.Service.BaseService implements IDistributionChannelDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DistributionChannelDD"}`;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }
        GetDistributionChannelDDnew(data: any): Array<model.DistributionChannelDDModel> {
            let list = Array<model.DistributionChannelDDModel>();
            for (let item of data) {
                debugger;
                list.push({
                    DistributionChannelID: item.DistributionChannelID,
                    DistributionChannel: item.DistributionChannel
                });
            }


            return list;
        }
    }
    app.AddService("DistributionChannelDDService", DistributionChannelDDService);
}

//bUSINESS/Customer dropdown
namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerDivisionDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerDivisionDDnew(data: any): Array<model.CustomerDivisionDDModel>;
    }
    export class CustomerDivisionDDService extends GCPL.Service.BaseService implements ICustomerDivisionDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CustomerDivisionDD"}`;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }
        GetCustomerDivisionDDnew(data: any): Array<model.CustomerDivisionDDModel> {
            let list = Array<model.CustomerDivisionDDModel>();
            for (let item of data) {
                debugger;
                list.push({
                    CustomerDivisionID: item.CustomerDivisionID,
                    CustomerDivision: item.CustomerDivision
                });
            }


            return list;
        }
    }
    app.AddService("CustomerDivisionDDService", CustomerDivisionDDService);
}

//Search

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesAreaListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesAreaListData(data: any): Array<model.SalesAreaListModel>;

    }
    export class SalesAreaListService extends GCPL.Service.BaseService implements ISalesAreaListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/SalesAreaMaster";
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
        GetSalesAreaListData(data: any): Array<model.SalesAreaListModel> {
            let list = Array<model.SalesAreaListModel>();

            for (let item of data) {
                list.push({

                    SalesAreaID: item.SalesAreaID,
                    SalesOrg: item.SalesOrg,
                    CustomerDivision: item.CustomerDivision,
                    DistributionChannel: item.DistributionChannel,
                   
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("SalesAreaListService", SalesAreaListService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertSalesAreaService {
        PostSalesArea(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertSalesAreaService extends GCPL.Service.BaseService implements IInsertSalesAreaService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertSalesArea"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostSalesArea(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertSalesAreaService", InsertSalesAreaService);
}

//edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesAreaEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditSalesAreaModel;
    }
    export class SalesAreaEditService extends GCPL.Service.BaseService implements ISalesAreaEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillSalesArea"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var SalesAreaID;

            if (data == undefined) {
                SalesAreaID = "";
            }
            else {
                SalesAreaID = data;
            }

            let config = {
                params: {
                    SalesAreaID: SalesAreaID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditSalesAreaModel {
            debugger;
            let obj = new model.EditSalesAreaModel();


            obj.SalesAreaID = data.SalesAreaID,
                obj.SalesOrgID = data.SalesOrgID,
               
                obj.DistributionChannelID = data.DistributionChannelID,
                obj.CustomerDivisionID = data.CustomerDivisionID,
           
                 obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("SalesAreaEditService", SalesAreaEditService);
}