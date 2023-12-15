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
        var MainModuleddService = /** @class */ (function (_super) {
            __extends(MainModuleddService, _super);
            function MainModuleddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AccessModule";
                return _this;
            }
            MainModuleddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            MainModuleddService.prototype.GetMainModule = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        MainModuleID: item.MainModuleID,
                        MainModuleName: item.MainModuleName
                    });
                }
                return list;
            };
            MainModuleddService.$inject = ["$http", "$q"];
            return MainModuleddService;
        }(GCPL.Service.BaseService));
        Service.MainModuleddService = MainModuleddService;
        app.AddService("MainModuleddService", MainModuleddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SubMainModuleddService = /** @class */ (function (_super) {
            __extends(SubMainModuleddService, _super);
            function SubMainModuleddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "SubModule";
                return _this;
            }
            SubMainModuleddService.prototype.Find = function (data) {
                var MainModuleParentID;
                if (data == undefined) {
                    MainModuleParentID = "";
                }
                else {
                    MainModuleParentID = data;
                }
                var config = {
                    params: {
                        MainModuleParentID: MainModuleParentID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SubMainModuleddService.prototype.GetSubMainModule = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        SubModuleID: item.SubModuleID,
                        SubModuleName: item.SubModuleName
                    });
                }
                return list;
            };
            SubMainModuleddService.$inject = ["$http", "$q"];
            return SubMainModuleddService;
        }(GCPL.Service.BaseService));
        Service.SubMainModuleddService = SubMainModuleddService;
        app.AddService("SubMainModuleddService", SubMainModuleddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var MenuGridService = /** @class */ (function (_super) {
            __extends(MenuGridService, _super);
            function MenuGridService($http, $q, _cookieStore) {
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
            MenuGridService.prototype.FindGrid = function (ParentID, RoleID) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "/RoleAccessRelationFillGridctrl";
                //var MainModuleParentID;
                var ParentID;
                var RoleID;
                var config = {
                    params: {
                        //MainModuleParentID: MainModuleParentID,
                        ParentID: ParentID,
                        RoleID: RoleID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            MenuGridService.prototype.GetGrid = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        AccessModuleName: item.AccessModuleName,
                        AccessModuleID: item.AccessModuleID,
                        IsWeb: item.IsWeb,
                        IsMobile: item.IsMobile,
                        ParentMenuID: item.ParentMenuID,
                        SubMenuID: item.SubMenuID
                    });
                }
                return list;
            };
            MenuGridService.$inject = ["$http", "$q", "$cookieStore"];
            return MenuGridService;
        }(GCPL.Service.BaseService));
        Service.MenuGridService = MenuGridService;
        app.AddService("MenuGridService", MenuGridService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertAccessRoleService = /** @class */ (function (_super) {
            __extends(InsertAccessRoleService, _super);
            function InsertAccessRoleService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "RoleInsert";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertAccessRoleService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertAccessRoleService.prototype.PostRoleAccessRelation = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertAccessRoleService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertAccessRoleService;
        }(GCPL.Service.BaseService));
        Service.InsertAccessRoleService = InsertAccessRoleService;
        app.AddService("InsertAccessRoleService", InsertAccessRoleService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AccessModuleMasterService.js.map