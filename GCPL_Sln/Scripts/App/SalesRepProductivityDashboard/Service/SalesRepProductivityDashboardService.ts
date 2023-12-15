namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesRepProductivityListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesRepProductivityList(data: any): Array<model.SalesRepProductivityGridListModel>;

    }
    export class SalesRepProductivityListService extends GCPL.Service.BaseService implements ISalesRepProductivityListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/SalesRepProductivityList";
            var ZoneID;
            var ProductID;
            var ModelID;
            var UserID;
            var Year;
            var DivisionID;
            var LeadTypeID;
            debugger;
            
            if (data.ZoneID == undefined) {
                ZoneID = '';
            }
            else {
                ZoneID = data.ZoneID;

            }

            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }

            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {
                UserID = data.UserID;

            }
           
            if (data.Year == undefined) {
                Year = '';
            }
            else {
                Year = data.Year;

            }
            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }

            let config = {
                params: {
                    ZoneID: ZoneID,
                    ProductID: ProductID,
                    ModelID: ModelID,
                    UserID: UserID,
                    Year: Year,
                    DivisionID: DivisionID,
                    LeadTypeID: LeadTypeID,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID1: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSalesRepProductivityList(data: any): Array<model.SalesRepProductivityGridListModel> {
            let list = Array<model.SalesRepProductivityGridListModel>();

            for (let item of data) {
                list.push({

                    Month: item.Month,
                    Model: item.Model,
                    Target: item.Target,
                    Won: item.Won,
                    Lost: item.Lost,
                    NoDeal: item.NoDeal,
                    Open: item.Open,
                    ModelID: item.ModelID,
                    DivisionID: item.DivisionID,
                    Division: item.Division,
                    ProductID: item.ProductID,
                    Product: item.Product,
                    LeadTypeID: item.LeadTypeID,
                    LeadType: item.LeadType,
                    UserID: item.UserID,
                    SalesRep: item.SalesRep,
                    ZoneID: item.ZoneID,
                    Zone: item.Zone,
                    Year: item.Year

                });
            }
            return list;
        }

    }
    app.AddService("SalesRepProductivityListService", SalesRepProductivityListService);
}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IYearddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetYearDD(data: any): Array<model.YearDDModel>;
    }
    export class YearddService extends GCPL.Service.BaseService implements IYearddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"YearDD"}`;
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

        GetYearDD(data: any): Array<model.YearDDModel> {
            let list = Array<model.YearDDModel>();
            for (let item of data) {
                list.push({
                    YearID: item.YearID,
                    Year: item.Year
                });
            }
            return list;
        }
    }

    app.AddService("YearddService", YearddService);
}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IMonthddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetMonthDD(data: any): Array<model.MonthDDModel>;
    }
    export class MonthddService extends GCPL.Service.BaseService implements IMonthddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"MonthDD"}`;
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

        GetMonthDD(data: any): Array<model.MonthDDModel> {
            let list = Array<model.MonthDDModel>();
            for (let item of data) {
                list.push({
                    MonthID: item.MonthID,
                    Month: item.Month
                });
            }
            return list;
        }
    }

    app.AddService("MonthddService", MonthddService);
}

//Employee dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEmployeeCodeDDService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoUser(data: any): Array<model.UserCodeAutofillDTO>;
      
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class EmployeeCodeDDService extends GCPL.Service.BaseService implements IEmployeeCodeDDService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/EmpCodeDD";
           
            let config = {
                params: {
                  
                }
            };
     
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutoUser(data: any): Array<model.UserCodeAutofillDTO> {


            let list = Array<model.UserCodeAutofillDTO>();


            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("EmployeeCodeDDService", EmployeeCodeDDService);
}