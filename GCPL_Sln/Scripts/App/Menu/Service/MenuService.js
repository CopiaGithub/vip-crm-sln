/// <reference path="../../../typings/angularjs/angular.d.ts" />
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
        var MenuService = /** @class */ (function (_super) {
            __extends(MenuService, _super);
            function MenuService($http, $q, _cookieStore) {
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
            MenuService.prototype.Find = function (data) {
                var config = {
                    params: {
                        RoleID: data.RoleId
                        //BusinessEntityID: data.BusinessEntityID,
                        //MainModuleId: this.Cookie.get('UserInfo')['MainModuleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "MenuBindingctrl",
                    Config: config
                });
            };
            //FindSub(data: any): ng.IHttpPromise<model.MenuRequest> {
            //    let config = {
            //        params: {
            //            ModuleGroupID: data.MenuGroupID,
            //            BusinessEntityID: data.BusinessEntityID
            //        }
            //    };
            //    return this.ajaXUtility.Get({
            //        Url: this.apiUrl + "SubMenuctrl",
            //        Config: config
            //    });
            //}
            MenuService.prototype.GetMenuGroup = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        //ColorCode: item.ColorCode,
                        GroupName: item.GroupName,
                        //IsIcon: item.IsIcon,
                        MenuGroupID: item.MenuGroupID,
                        //BusinessEntityID: item.BusinessEntityID,
                        //ModuleId: item.ModuleId,
                        //MainModule: item.MainModule,
                        objSubmenu: item.objSubmenu
                    });
                }
                return list;
            };
            MenuService.$inject = ["$http", "$q", "$cookieStore"];
            return MenuService;
        }(GCPL.Service.BaseService));
        Service.MenuService = MenuService;
        app.AddService("MenuService", MenuService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=MenuService.js.map