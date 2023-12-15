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
        var RoleMasterService = /** @class */ (function (_super) {
            __extends(RoleMasterService, _super);
            function RoleMasterService($http, $q, _cookieStore) {
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
            RoleMasterService.prototype.FindGrid = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "RoleMaster";
                var SearchText;
                var Status;
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
                var config = {
                    params: {
                        SearchText: SearchText,
                        Status: Status
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            RoleMasterService.prototype.GetRoleGrid = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        RoleID: item.RoleID,
                        Title: item.Title,
                        WhenEntered: item.WhenEntered,
                        // Status: item.Status,
                        Status: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            RoleMasterService.$inject = ["$http", "$q", "$cookieStore"];
            return RoleMasterService;
        }(GCPL.Service.BaseService));
        Service.RoleMasterService = RoleMasterService;
        app.AddService("RoleMasterService", RoleMasterService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var RoleMasterEditService = /** @class */ (function (_super) {
            __extends(RoleMasterEditService, _super);
            function RoleMasterEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillRoleMaster";
                return _this;
            }
            RoleMasterEditService.prototype.Find = function (data) {
                var RoleID;
                if (data == undefined) {
                    RoleID = "";
                }
                else {
                    RoleID = data;
                }
                var config = {
                    params: {
                        RoleID: RoleID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            RoleMasterEditService.prototype.GetRoleMasterEdit = function (data) {
                var obj = new model.RoleMasterEditModel();
                debugger;
                obj.RoleID = data.RoleID,
                    obj.Title = data.Title,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status;
                return obj;
            };
            RoleMasterEditService.$inject = ["$http", "$q"];
            return RoleMasterEditService;
        }(GCPL.Service.BaseService));
        Service.RoleMasterEditService = RoleMasterEditService;
        app.AddService("RoleMasterEditService", RoleMasterEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertRoleService = /** @class */ (function (_super) {
            __extends(InsertRoleService, _super);
            function InsertRoleService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertRoleMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertRoleService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertRoleService.prototype.PostRoleMaster = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertRoleService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertRoleService;
        }(GCPL.Service.BaseService));
        Service.InsertRoleService = InsertRoleService;
        app.AddService("InsertRoleService", InsertRoleService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RoleMasterService.js.map