namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserMasterService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetUserGrid(data: any): Array<model.UserMasterGridModel>;

    }
    export class UserMasterService extends GCPL.Service.BaseService implements IUserMasterService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            var url = this.apiUrl + "UserMaster";
            var SearchText;
            var SearchEmployeeCode;
            var SearchPhoneNo;
            var Status;
           

            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {

                SearchText = data.SearchText
            }
            if (data.SearchEmployeeCode == undefined) {
                SearchEmployeeCode = '';
            }
            else {

                SearchEmployeeCode = data.SearchEmployeeCode
            }
            if (data.SearchPhoneNo == undefined) {
                SearchPhoneNo = '';
            }
            else {

                SearchPhoneNo = data.SearchPhoneNo
            }

            if (data.Status == undefined) {
                Status = '';
            }
            else {

                Status = data.Status
            }
           


            let config = {
                params: {
                    SearchText: SearchText,
                    SearchEmployeeCode: SearchEmployeeCode,
                    SearchPhoneNo: SearchPhoneNo,
                    Status: Status
                   
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetUserGrid(data: any): Array<model.UserMasterGridModel> {

            let list = Array<model.UserMasterGridModel>();

            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    EmployeeCode: item.EmployeeCode,
                    FirstName: item.FirstName,
                    LastName: item.LastName,
                    Email: item.Email,
                    PhoneNo: item.PhoneNo,
                    Role: item.Role,
                    State: item.State,
                    District: item.District,
                    Region: item.Region,
                    DateCreated: item.DateCreated,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("UserMasterService", UserMasterService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserMasterEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserMasterEdit(data: any): model.UserMasterEditModel;
    }
    export class UserMasterEditService extends GCPL.Service.BaseService implements IUserMasterEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"UserMasterEdit"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var UserID;

            if (data == undefined) {
                UserID = "";
            }
            else {
                UserID = data;
            }
            let config = {
                params: {
                    UserID: UserID


                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }

            );
        }
        GetUserMasterEdit(data: any): model.UserMasterEditModel {
            let obj = new model.UserMasterEditModel();
            debugger;
            obj.UserID = data.UserID,
                obj.EmployeeCode = data.EmployeeCode,
                obj.FirstName = data.FirstName,
                obj.LastName = data.LastName,
                obj.Email = data.Email,
                obj.PhoneNo = data.PhoneNo,
                obj.RoleID = data.RoleID,
                obj.CountryID = data.CountryID,
                obj.StateID = data.StateID,
                obj.DistrictID = data.DistrictID,
                obj.DesignationId = data.DesignationId,
                obj.RegionID = data.RegionID,
                obj.DateCreated = data.DateCreated,
                obj.Status = data.Status,
                obj.UserDepartment = data.UserDepartment,
                obj.CustDivision = data.CustDivision,
                obj.SalesOfficeID = data.SalesOfficeID,
                obj.Password = data.Password
            return obj;
        }
    }


    app.AddService("UserMasterEditService", UserMasterEditService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOfficeddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesOffice(data: any): Array<model.SalesOfficeModel>;
    }
    export class SalesOfficeddService extends GCPL.Service.BaseService implements ISalesOfficeddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SalesOfficeDD"}`;
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

        GetSalesOffice(data: any): Array<model.SalesOfficeModel> {
            let list = Array<model.SalesOfficeModel>();
            for (let item of data) {
                list.push({
                    SalesOfficeID: item.SalesOfficeID,
                    SalesOffice: item.SalesOffice,
                });
            }
            return list;
        }
    }

    app.AddService("SalesOfficeddService", SalesOfficeddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDepartmentddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDepartment(data: any): Array<model.DepartmentDDModel>;
    }
    export class DepartmentddService extends GCPL.Service.BaseService implements IDepartmentddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DepartmentDD"}`;
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

        GetDepartment(data: any): Array<model.DepartmentDDModel> {
            let list = Array<model.DepartmentDDModel>();
            for (let item of data) {
                list.push({
                    DepartmentID: item.DepartmentID,
                    Department: item.Department,
                });
            }
            return list;
        }
    }

    app.AddService("DepartmentddService", DepartmentddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IRoleddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetRole(data: any): Array<model.RoleDDModel>;
    }
    export class RoleddService extends GCPL.Service.BaseService implements IRoleddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"RoleDD"}`;
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

        GetRole(data: any): Array<model.RoleDDModel> {
            let list = Array<model.RoleDDModel>();
            for (let item of data) {
                list.push({
                    RoleID: item.RoleID,
                    Title: item.Title,
                });
            }
            return list;
        }
    }

    app.AddService("RoleddService", RoleddService);
}

//Designation Service call
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDesignationddService {

        FindDesignation(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDesignation(data: any): Array<model.DesignationDDModel>;
    }
    export class DesignationddService extends GCPL.Service.BaseService implements IDesignationddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DesignDD"}`;
        }


        FindDesignation(): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetDesignation(data: any): Array<model.DesignationDDModel> {
            let list = Array<model.DesignationDDModel>();
            for (let item of data) {
                list.push({
                    DesignationId: item.DesignationId,
                    Designation: item.Designation,
                });
            }
            return list;
        }
    }

    app.AddService("DesignationddService", DesignationddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertUserService {
        PostUserMaster(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertUserService extends GCPL.Service.BaseService implements IInsertUserService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"UserMasterInsert"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostUserMaster(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertUserService", InsertUserService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IResetMacService {
        PostReset(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class ResetMacService extends GCPL.Service.BaseService implements IResetMacService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"ResetMac"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostReset(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("ResetMacService", ResetMacService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IRegionddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetRegion(data: any): Array<model.RegionDDModel>;
    }
    export class RegionddService extends GCPL.Service.BaseService implements IRegionddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"RegionDD"}`;
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

        GetRegion(data: any): Array<model.RegionDDModel> {
            let list = Array<model.RegionDDModel>();
            for (let item of data) {
                list.push({
                    RegionID: item.RegionID,
                    Region: item.Region,
                });
            }
            return list;
        }
    }

    app.AddService("RegionddService", RegionddService);
}

//region dd fill
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICheckRegionService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetRegion(data: any): model.CheckRegionModel;
    }
    export class CheckRegionService extends GCPL.Service.BaseService implements ICheckRegionService {
        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            //this.apiUrl = `${this.url}/${"FillCustomerList"}`;
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CheckRegionID";
            var StateID;
            var DistrictID;
            
            if (data.StateID == undefined) {
                StateID = '';
            }
            else {
                StateID = data.StateID
            }
            if (data.DistrictID == undefined) {
                DistrictID = '';
            }
            else {
                DistrictID = data.DistrictID;
            }

            let config = {
                params: {
                    StateID: StateID,
                    DistrictID: DistrictID
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetRegion(data: any): model.CheckRegionModel {

            let obj = new model.CheckRegionModel();

            obj.RegionID = data.RegionID;
            obj.StateID = data.StateID;
            obj.DistrictID = data.DistrictID;

            return obj;
        }
    }
    app.AddService("CheckRegionService", CheckRegionService);
}


//User department dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDepartmentDDLService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserDepartment(data: any): Array<model.UserDepartmentDDModel>;
    }
    export class DepartmentDDLService extends GCPL.Service.BaseService implements IDepartmentDDLService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"UserDepartmentDD"}`;
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

        GetUserDepartment(data: any): Array<model.UserDepartmentDDModel> {
            let list = Array<model.UserDepartmentDDModel>();
            for (let item of data) {
                list.push({
                    Id: item.Id.toString(),
                    BroadFunction: item.BroadFunction,
                });
            }
            return list;
        }
    }

    app.AddService("DepartmentDDLService", DepartmentDDLService);
}

//state dd

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IStateDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetState(data: any): Array<model.StateddlModel>;
    }
    export class StateDDService extends GCPL.Service.BaseService implements IStateDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"StateDD"}`;
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

        GetState(data: any): Array<model.StateddlModel> {
            let list = Array<model.StateddlModel>();
            for (let item of data) {
                list.push({
                    StateID: item.StateID.toString(),
                    State: item.State,
                });
            }
            return list;
        }
    }

    app.AddService("StateDDService", StateDDService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IGetZoneNameService {

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetZone(data: any): model.ZoneModel;

    }
    export class GetZoneNameService extends GCPL.Service.BaseService implements IGetZoneNameService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            
            var url = this.apiUrl + "/GetZoneName";
            var SalesOfficeID;
 
            
            if (data.SalesOfficeID == undefined) {
                SalesOfficeID = '';
            }
            else {
                SalesOfficeID = data.SalesOfficeID
            }

            let config = {
                params: {
                    SalesOfficeID: SalesOfficeID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetZone(data: any): model.ZoneModel {

            let obj = new model.ZoneModel();

            obj.ZoneID = data.ZoneID;
            obj.ZoneName = data.ZoneName;           

            return obj;
        }

    }
    app.AddService("GetZoneNameService", GetZoneNameService);
}