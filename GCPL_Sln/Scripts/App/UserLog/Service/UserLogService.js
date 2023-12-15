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
        var UserLogGridService = /** @class */ (function (_super) {
            __extends(UserLogGridService, _super);
            function UserLogGridService($http, $q, _cookieStore) {
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
            UserLogGridService.prototype.FindGrid = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "UserLog";
                var UserName;
                var FromDate;
                var ToDate;
                if (data.UserName == undefined) {
                    UserName = '';
                }
                else {
                    UserName = data.UserName;
                }
                if (data.FromDate == undefined) {
                    FromDate = '';
                }
                else {
                    FromDate = data.FromDate;
                }
                if (data.ToDate == undefined) {
                    ToDate = '';
                }
                else {
                    ToDate = data.ToDate;
                }
                var config = {
                    params: {
                        UserName: UserName,
                        FromDate: FromDate,
                        ToDate: ToDate
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            UserLogGridService.prototype.GetUserLogGrid = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        UserId: item.UserId,
                        EmployeeCode: item.EmployeeCode,
                        FirstName: item.FirstName,
                        LoginFrom: item.LoginFrom,
                        LoginTime: item.LoginTime,
                        LogOutTime: item.LogOutTime
                    });
                }
                return list;
            };
            UserLogGridService.$inject = ["$http", "$q", "$cookieStore"];
            return UserLogGridService;
        }(GCPL.Service.BaseService));
        Service.UserLogGridService = UserLogGridService;
        app.AddService("UserLogGridService", UserLogGridService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UserLogService.js.map