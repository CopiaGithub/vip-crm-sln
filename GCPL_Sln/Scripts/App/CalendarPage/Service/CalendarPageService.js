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
        var DeligationTypeservice = /** @class */ (function (_super) {
            __extends(DeligationTypeservice, _super);
            function DeligationTypeservice($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = "" + _this.url;
                _this.Cookie = _cookieStore;
                return _this;
            }
            DeligationTypeservice.prototype.Find = function (data) {
                var url = this.apiUrl + "/CalendarDeligationddl";
                var ManagerCode;
                var UserID;
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            DeligationTypeservice.prototype.GetCalDeldDDl = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ManagerCode: item.ManagerCode.toString(),
                        EmployeeName: item.EmployeeName
                    });
                }
                return list;
            };
            DeligationTypeservice.$inject = ["$http", "$q", "$cookieStore"];
            return DeligationTypeservice;
        }(GCPL.Service.BaseService));
        Service.DeligationTypeservice = DeligationTypeservice;
        app.AddService("DeligationTypeservice", DeligationTypeservice);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CalActListService = /** @class */ (function (_super) {
            __extends(CalActListService, _super);
            function CalActListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = "" + _this.url;
                _this.Cookie = _cookieStore;
                return _this;
            }
            CalActListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CalActivityList";
                var UserID;
                var ManagerCode;
                debugger;
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.ManagerCode == undefined) {
                    ManagerCode = '';
                }
                else {
                    ManagerCode = data.ManagerCode;
                }
                var config = {
                    params: {
                        ManagerCode: ManagerCode,
                        UserID: UserID,
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CalActListService.prototype.GetUserActList = function (data) {
                var list = Array();
                debugger;
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ActivityDate: item.ActivityDate,
                        Status: item.Status,
                        ActivityNumber: item.ActivityNumber,
                        color: item.color,
                        ManagerCode: item.ManagerCode,
                        WhenEntered: item.WhenEntered
                    });
                }
                return list;
            };
            CalActListService.$inject = ["$http", "$q", "$cookieStore"];
            return CalActListService;
        }(GCPL.Service.BaseService));
        Service.CalActListService = CalActListService;
        app.AddService("CalActListService", CalActListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CalendarPageService.js.map