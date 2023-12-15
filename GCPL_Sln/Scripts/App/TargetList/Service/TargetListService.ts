//Insert Target

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertTargetService {
        PostTarget(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertTargetService extends GCPL.Service.BaseService implements IInsertTargetService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertTarget"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostTarget(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertTargetService", InsertTargetService);
}

//TargetList

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITargetListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTargetList(data: any): Array<model.TargetGridListModel>;

    }
    export class TargetListService extends GCPL.Service.BaseService implements ITargetListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/TargetList";
            var ID;
            var ZoneID;
            var DivisionID;
            var ProductID;
            var ModelID;
            var UserID;
            var Year;
            var Month;
            debugger;

            if (data.ID == undefined) {
                ID = '';
            }
            else {
                ID = data.ID;

            }
            if (data.ZoneID == undefined) {
                ZoneID = '';
            }
            else {
                ZoneID = data.ZoneID;

            }
            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

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

            if (data.Month == undefined) {
                Month = '';
            }
            else {
                Month = data.Month;

            }

            let config = {
                params: {
                    LeadTypeID: ID,
                    ZoneID: ZoneID,
                    DivisionID: DivisionID,
                    ProductID: ProductID,
                    ModelID: ModelID,
                    UserID: UserID,
                    Year: Year,
                    Month: Month
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetTargetList(data: any): Array<model.TargetGridListModel> {
            let list = Array<model.TargetGridListModel>();
            debugger;
            for (let item of data) {
                list.push({

                    TargetID: item.TargetID,
                    LeadTypeDesc: item.LeadTypeDesc,
                    Division: item.Division,
                    Zone: item.Zone,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    FirstName: item.FirstName,
                    Year: item.Year,
                    Month: item.Month,
                    Quantity: item.Quantity,
                    EmpCode: item.EmpCode,
                    TotalCount: item.TotalCount
                    //IsActive: ((item.Status == "True") ? "Active" : "Inactive"),

                });
            }
            return list;
        }

    }
    app.AddService("TargetListService", TargetListService);
}

//EditTarget

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITargetEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditTargetModel;
    }
    export class TargetEditService extends GCPL.Service.BaseService implements ITargetEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillTargetList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var TargetID;

            if (data == undefined) {
                TargetID = "";
            }
            else {
                TargetID = data;
            }

            let config = {
                params: {
                    TargetID: TargetID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetEdit(data: any): model.EditTargetModel {
            debugger;
            let obj = new model.EditTargetModel();

            obj.TargetID = data.TargetID,
            obj.ID = data.ID,
            obj.LeadTypeDesc = data.LeadTypeDesc,
            obj.Division = data.Division,
            obj.DivisionID = data.DivisionID,
            obj.ProductID = data.ProductID,
            obj.Product = data.Product,
            obj.ModelID = data.ModelID,
            obj.ModelNo = data.ModelNo,
            obj.Zone = data.Zone,
            obj.ZoneID = data.ZoneID,
            obj.UserID = data.UserID,
            obj.FirstName = data.FirstName,
            obj.Year = data.Year,
            obj.YearID = data.YearID,
            obj.MonthID = data.MonthID,
            obj.Month = data.Month,
            obj.Quantity = data.Quantity


            //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
            return obj;
        }
    }
    app.AddService("TargetEditService", TargetEditService);
}

//Zone Wise  User DDl

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IZoneWiseEMPUserService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserName(data: any): Array<model.EmpUserDropDownModel>;
    }
    export class ZoneWiseEMPUserService extends GCPL.Service.BaseService implements IZoneWiseEMPUserService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ZoneWiseEmployee"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    ZoneID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetUserName(data: any): Array<model.EmpUserDropDownModel> {
            debugger;
            let list = Array<model.EmpUserDropDownModel>();
            for (let item of data) {

                list.push({
                    UserID: item.UserID.toString(),
                    FirstName: item.FirstName,
                });
            }
            return list;
        }
    }

    app.AddService("ZoneWiseEMPUserService", ZoneWiseEMPUserService);
}

//OpportunityType DDl

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOpportunityTypeService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetopportunityType(data: any): Array<model.OpportunityTypeDropDownModel>;
    }
    export class OpportunityTypeService extends GCPL.Service.BaseService implements IOpportunityTypeService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OpportunityTypeModel"}`;
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

        GetopportunityType(data: any): Array<model.OpportunityTypeDropDownModel> {
            let list = Array<model.OpportunityTypeDropDownModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID.toString(),
                    OpportunityType: item.OpportunityType
                });
            }
            return list;
        }
    }

    app.AddService("OpportunityTypeService", OpportunityTypeService);
}

//LeadType And product wise model 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadTypeProductService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadTypeProduct(data: any): Array<model.ModelDDwpModel>;
    }
    export class LeadTypeProductService extends GCPL.Service.BaseService implements ILeadTypeProductService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadTypeProductModel"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            var ID;
            var ProductID;
            var DivisionID;
            if (data.ID == ID) {
                ID = "";
            }
            else {
                ID = data.ID;
            }

            if (data.ProductID == undefined) {
                ProductID = "";
            }
            else {
                ProductID = data.ProductID;
            }


            let config = {
                params: {
                    ID: ID,
                    ProductID: ProductID

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetLeadTypeProduct(data: any): Array<model.ModelDDwpModel> {
            let list = Array<model.ModelDDwpModel>();
            for (let item of data) {
                list.push({
                    ModelID: item.ModelID.toString(),
                    ModelNo: item.ModelNo
                });
            }
            return list;
        }
    }

    app.AddService("LeadTypeProductService", LeadTypeProductService);
}

//delete Target 
namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteTargetService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postTargetDelete(data: any): void;
    }
    export class DeleteTargetService extends GCPL.Service.BaseService implements IDeleteTargetService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteTarget"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    TargetID: data
                }
            };
            return this.ajaXUtility.Post({

                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postTargetDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });

        }
    }

    app.AddService("DeleteTargetService", DeleteTargetService);
}

//show similar
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IShowExistingTargetListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTarget(data: any): string;

    }
    export class ShowExistingTargetListService extends GCPL.Service.BaseService implements IShowExistingTargetListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CheckExistingTargetList"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // var url = this.apiUrl + "/CheckExistingTargetList";

            var ID;
            var ModelID;
            var UserID;
            var Year;
            var Month;

            if (data.ID == undefined) {
                ID = "";
            }
            else {
                ID = data.ID;
            }
            if (data.ModelID == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.UserID == undefined) {
                UserID = "";
            }
            else {
                UserID = data.UserID;

            }
            if (data.Year == undefined) {
                Year = "";
            }
            else {
                Year = data.Year;

            }
            if (data.Month == undefined) {
                Month = "";
            }
            else {
                Month = data.Month;

            }

            let config = {
                params: {
                    LeadTypeID: ID,
                    ModelID: ModelID,
                    UserID: UserID,
                    Year: Year,
                    Month: Month
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }
        GetTarget(data: any): string {
            debugger;
            return data;
        }

    }
    app.AddService("ShowExistingTargetListService", ShowExistingTargetListService);
}