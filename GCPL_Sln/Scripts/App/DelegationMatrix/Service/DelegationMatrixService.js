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
        var DeligationMasterService = /** @class */ (function (_super) {
            __extends(DeligationMasterService, _super);
            function DeligationMasterService($http, $q, _cookieStore) {
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
            DeligationMasterService.prototype.FindGrid = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "DeligationMatrix";
                var SearchInput;
                var SearchManagerName;
                var ZoneName;
                var Status;
                if (data.SearchInput == undefined) {
                    SearchInput = '';
                }
                else {
                    SearchInput = data.SearchInput;
                }
                if (data.SearchManagerName == undefined) {
                    SearchManagerName = '';
                }
                else {
                    SearchManagerName = data.SearchManagerName;
                }
                if (data.ZoneName == undefined) {
                    ZoneName = '';
                }
                else {
                    ZoneName = data.ZoneName;
                }
                if (data.Status == undefined) {
                    Status = '';
                }
                else {
                    Status = data.Status;
                }
                var config = {
                    params: {
                        SearchInput: SearchInput,
                        SearchManagerName: SearchManagerName,
                        ZoneName: ZoneName,
                        Status: Status
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            DeligationMasterService.prototype.GetDeligationGrid = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ZoneName: item.ZoneName,
                        TeamAllocationID: item.TeamAllocationID,
                        ManagerName: item.ManagerName,
                        Employee: item.Employee,
                        DateCreated: item.DateCreated,
                        IsActive: ((item.IsActive == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            DeligationMasterService.$inject = ["$http", "$q", "$cookieStore"];
            return DeligationMasterService;
        }(GCPL.Service.BaseService));
        Service.DeligationMasterService = DeligationMasterService;
        app.AddService("DeligationMasterService", DeligationMasterService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var DeligationMasterEditService = /** @class */ (function (_super) {
            __extends(DeligationMasterEditService, _super);
            function DeligationMasterEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeligationMatrixEdit";
                return _this;
            }
            DeligationMasterEditService.prototype.Find = function (data) {
                var TeamAllocationID;
                if (data == undefined) {
                    TeamAllocationID = "";
                }
                else {
                    TeamAllocationID = data;
                }
                var config = {
                    params: {
                        TeamAllocationID: TeamAllocationID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DeligationMasterEditService.prototype.GetDeligationMasterEdit = function (data) {
                var obj = new model.DeligationMasterEditModel();
                debugger;
                obj.TeamAllocationID = data.TeamAllocationID;
                obj.ManagersEmployeeCode = data.ManagerCode;
                obj.TeamLeadID = data.TeamLeadID;
                obj.EmployeeName = data.EmployeeName,
                    obj.ManagerName = data.ManagerName;
                obj.Status = data.Status;
                return obj;
            };
            DeligationMasterEditService.$inject = ["$http", "$q"];
            return DeligationMasterEditService;
        }(GCPL.Service.BaseService));
        Service.DeligationMasterEditService = DeligationMasterEditService;
        app.AddService("DeligationMasterEditService", DeligationMasterEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertDeligationService = /** @class */ (function (_super) {
            __extends(InsertDeligationService, _super);
            function InsertDeligationService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "DeligationMatrixInsert";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertDeligationService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertDeligationService.prototype.PostDeligationMatrix = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertDeligationService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertDeligationService;
        }(GCPL.Service.BaseService));
        Service.InsertDeligationService = InsertDeligationService;
        app.AddService("InsertDeligationService", InsertDeligationService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ManagerAtofillService = /** @class */ (function (_super) {
            __extends(ManagerAtofillService, _super);
            function ManagerAtofillService($http, $q, _cookieStore) {
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
            ManagerAtofillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ManagerAtofillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/ManagerAUtofill";
                var config = {
                    params: {
                        Input: data.term,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ManagerAtofillService.prototype.GetAutoManager = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        userid: item.userid,
                        ManagerEmployeeCode: item.ManagerEmployeeCode,
                        ManagerName: item.ManagerName
                    });
                }
                return list;
            };
            ManagerAtofillService.$inject = ["$http", "$q", "$cookieStore"];
            return ManagerAtofillService;
        }(GCPL.Service.BaseService));
        Service.ManagerAtofillService = ManagerAtofillService;
        //inject service
        app.AddService("ManagerAtofillService", ManagerAtofillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var EmployeeAtofillService = /** @class */ (function (_super) {
            __extends(EmployeeAtofillService, _super);
            function EmployeeAtofillService($http, $q, _cookieStore) {
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
            EmployeeAtofillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            EmployeeAtofillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/ManagerAUtofill";
                var config = {
                    params: {
                        Input: data.term,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            EmployeeAtofillService.prototype.GetAutEmployee = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        userid: item.userid,
                        EmployeeCode: item.ManagerEmployeeCode,
                        Name: item.ManagerName
                    });
                }
                return list;
            };
            EmployeeAtofillService.$inject = ["$http", "$q", "$cookieStore"];
            return EmployeeAtofillService;
        }(GCPL.Service.BaseService));
        Service.EmployeeAtofillService = EmployeeAtofillService;
        //inject service
        app.AddService("EmployeeAtofillService", EmployeeAtofillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//DELETE Delegation Matrix
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteDelegationService = /** @class */ (function (_super) {
            __extends(DeleteDelegationService, _super);
            function DeleteDelegationService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteDelegation";
                return _this;
            }
            DeleteDelegationService.prototype.Find = function (data) {
                var config = {
                    params: {
                        TeamAllocationID: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteDelegationService.prototype.postDelegationDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteDelegationService.$inject = ["$http", "$q"];
            return DeleteDelegationService;
        }(GCPL.Service.BaseService));
        Service.DeleteDelegationService = DeleteDelegationService;
        app.AddService("DeleteDelegationService", DeleteDelegationService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DelegationMatrixService.js.map