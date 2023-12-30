var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UserMasterService = /** @class */ (function (_super) {
            __extends(UserMasterService, _super);
            function UserMasterService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/";
                _this.Cookie = _cookieStore;
                return _this;
            }
            UserMasterService.prototype.FindGrid = function (data) {
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
                    SearchText = data.SearchText;
                }
                if (data.SearchEmployeeCode == undefined) {
                    SearchEmployeeCode = '';
                }
                else {
                    SearchEmployeeCode = data.SearchEmployeeCode;
                }
                if (data.SearchPhoneNo == undefined) {
                    SearchPhoneNo = '';
                }
                else {
                    SearchPhoneNo = data.SearchPhoneNo;
                }
                if (data.Status == undefined) {
                    Status = '';
                }
                else {
                    Status = data.Status;
                }
                var config = {
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
            };
            UserMasterService.prototype.GetUserGrid = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
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
            };
            UserMasterService.$inject = ["$http", "$q", "$cookieStore"];
            return UserMasterService;
        }(GCPL.Service.BaseService));
        Service.UserMasterService = UserMasterService;
        app.AddService("UserMasterService", UserMasterService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var UserMasterEditService = /** @class */ (function (_super) {
            __extends(UserMasterEditService, _super);
            function UserMasterEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "UserMasterEdit";
                return _this;
            }
            UserMasterEditService.prototype.Find = function (data) {
                var UserID;
                if (data == undefined) {
                    UserID = "";
                }
                else {
                    UserID = data;
                }
                var config = {
                    params: {
                        UserID: UserID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            UserMasterEditService.prototype.GetUserMasterEdit = function (data) {
                var obj = new model.UserMasterEditModel();
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
                    obj.Password = data.Password;
                return obj;
            };
            UserMasterEditService.$inject = ["$http", "$q"];
            return UserMasterEditService;
        }(GCPL.Service.BaseService));
        Service.UserMasterEditService = UserMasterEditService;
        app.AddService("UserMasterEditService", UserMasterEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesOfficeddService = /** @class */ (function (_super) {
            __extends(SalesOfficeddService, _super);
            function SalesOfficeddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "SalesOfficeDD";
                return _this;
            }
            SalesOfficeddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesOfficeddService.prototype.GetSalesOffice = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        SalesOfficeID: item.SalesOfficeID,
                        SalesOffice: item.SalesOffice,
                    });
                }
                return list;
            };
            SalesOfficeddService.$inject = ["$http", "$q"];
            return SalesOfficeddService;
        }(GCPL.Service.BaseService));
        Service.SalesOfficeddService = SalesOfficeddService;
        app.AddService("SalesOfficeddService", SalesOfficeddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DepartmentddService = /** @class */ (function (_super) {
            __extends(DepartmentddService, _super);
            function DepartmentddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DepartmentDD";
                return _this;
            }
            DepartmentddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DepartmentddService.prototype.GetDepartment = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        DepartmentID: item.DepartmentID,
                        Department: item.Department,
                    });
                }
                return list;
            };
            DepartmentddService.$inject = ["$http", "$q"];
            return DepartmentddService;
        }(GCPL.Service.BaseService));
        Service.DepartmentddService = DepartmentddService;
        app.AddService("DepartmentddService", DepartmentddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var RoleddService = /** @class */ (function (_super) {
            __extends(RoleddService, _super);
            function RoleddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "RoleDD";
                return _this;
            }
            RoleddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            RoleddService.prototype.GetRole = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        RoleID: item.RoleID,
                        Title: item.Title,
                    });
                }
                return list;
            };
            RoleddService.$inject = ["$http", "$q"];
            return RoleddService;
        }(GCPL.Service.BaseService));
        Service.RoleddService = RoleddService;
        app.AddService("RoleddService", RoleddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Designation Service call
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DesignationddService = /** @class */ (function (_super) {
            __extends(DesignationddService, _super);
            function DesignationddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DesignDD";
                return _this;
            }
            DesignationddService.prototype.FindDesignation = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DesignationddService.prototype.GetDesignation = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        DesignationId: item.DesignationId,
                        Designation: item.Designation,
                    });
                }
                return list;
            };
            DesignationddService.$inject = ["$http", "$q"];
            return DesignationddService;
        }(GCPL.Service.BaseService));
        Service.DesignationddService = DesignationddService;
        app.AddService("DesignationddService", DesignationddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertUserService = /** @class */ (function (_super) {
            __extends(InsertUserService, _super);
            function InsertUserService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UserMasterInsert";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertUserService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertUserService.prototype.PostUserMaster = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertUserService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertUserService;
        }(GCPL.Service.BaseService));
        Service.InsertUserService = InsertUserService;
        app.AddService("InsertUserService", InsertUserService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ResetMacService = /** @class */ (function (_super) {
            __extends(ResetMacService, _super);
            function ResetMacService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ResetMac";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ResetMacService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ResetMacService.prototype.PostReset = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            ResetMacService.$inject = ["$http", "$q", "$cookieStore"];
            return ResetMacService;
        }(GCPL.Service.BaseService));
        Service.ResetMacService = ResetMacService;
        app.AddService("ResetMacService", ResetMacService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var RegionddService = /** @class */ (function (_super) {
            __extends(RegionddService, _super);
            function RegionddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "RegionDD";
                return _this;
            }
            RegionddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            RegionddService.prototype.GetRegion = function (data) {
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        RegionID: item.RegionID,
                        Region: item.Region,
                    });
                }
                return list;
            };
            RegionddService.$inject = ["$http", "$q"];
            return RegionddService;
        }(GCPL.Service.BaseService));
        Service.RegionddService = RegionddService;
        app.AddService("RegionddService", RegionddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//region dd fill
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CheckRegionService = /** @class */ (function (_super) {
            __extends(CheckRegionService, _super);
            function CheckRegionService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                //this.apiUrl = `${this.url}/${"FillCustomerList"}`;
                _this.apiUrl = "" + _this.url;
                _this.Cookie = _cookieStore;
                return _this;
            }
            CheckRegionService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CheckRegionID";
                var StateID;
                var DistrictID;
                if (data.StateID == undefined) {
                    StateID = '';
                }
                else {
                    StateID = data.StateID;
                }
                if (data.DistrictID == undefined) {
                    DistrictID = '';
                }
                else {
                    DistrictID = data.DistrictID;
                }
                var config = {
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
            };
            CheckRegionService.prototype.GetRegion = function (data) {
                var obj = new model.CheckRegionModel();
                obj.RegionID = data.RegionID;
                obj.StateID = data.StateID;
                obj.DistrictID = data.DistrictID;
                return obj;
            };
            CheckRegionService.$inject = ["$http", "$q", "$cookieStore"];
            return CheckRegionService;
        }(GCPL.Service.BaseService));
        Service.CheckRegionService = CheckRegionService;
        app.AddService("CheckRegionService", CheckRegionService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//User department dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DepartmentDDLService = /** @class */ (function (_super) {
            __extends(DepartmentDDLService, _super);
            function DepartmentDDLService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "UserDepartmentDD";
                return _this;
            }
            DepartmentDDLService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DepartmentDDLService.prototype.GetUserDepartment = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        Id: item.Id.toString(),
                        BroadFunction: item.BroadFunction,
                    });
                }
                return list;
            };
            DepartmentDDLService.$inject = ["$http", "$q"];
            return DepartmentDDLService;
        }(GCPL.Service.BaseService));
        Service.DepartmentDDLService = DepartmentDDLService;
        app.AddService("DepartmentDDLService", DepartmentDDLService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//state dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var StateDDService = /** @class */ (function (_super) {
            __extends(StateDDService, _super);
            function StateDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "StateDD";
                return _this;
            }
            StateDDService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            StateDDService.prototype.GetState = function (data) {
                var list = Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    list.push({
                        StateID: item.StateID.toString(),
                        State: item.State,
                    });
                }
                return list;
            };
            StateDDService.$inject = ["$http", "$q"];
            return StateDDService;
        }(GCPL.Service.BaseService));
        Service.StateDDService = StateDDService;
        app.AddService("StateDDService", StateDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var GetZoneNameService = /** @class */ (function (_super) {
            __extends(GetZoneNameService, _super);
            function GetZoneNameService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/";
                _this.Cookie = _cookieStore;
                return _this;
            }
            GetZoneNameService.prototype.FindGrid = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "/GetZoneName";
                var SalesOfficeID;
                if (data.SalesOfficeID == undefined) {
                    SalesOfficeID = '';
                }
                else {
                    SalesOfficeID = data.SalesOfficeID;
                }
                var config = {
                    params: {
                        SalesOfficeID: SalesOfficeID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            GetZoneNameService.prototype.GetZone = function (data) {
                var obj = new model.ZoneModel();
                obj.ZoneID = data.ZoneID;
                obj.ZoneName = data.ZoneName;
                return obj;
            };
            GetZoneNameService.$inject = ["$http", "$q", "$cookieStore"];
            return GetZoneNameService;
        }(GCPL.Service.BaseService));
        Service.GetZoneNameService = GetZoneNameService;
        app.AddService("GetZoneNameService", GetZoneNameService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UserMasterService.js.map