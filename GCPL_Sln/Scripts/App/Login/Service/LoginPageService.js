/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-cookies.d.ts" />
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
        var model = GCPL.Model;
        var LoginPageService = /** @class */ (function (_super) {
            __extends(LoginPageService, _super);
            function LoginPageService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                //Manage Header
                _this.LOGIN_BLOCK = "#login-block";
                _this.LOGOUT_BLOCK = "#logout-block";
                _this.LOGIN_NAME = "#login-name";
                _this.apiUrl = _this.url + "/" + "Loginctrl";
                return _this;
            }
            LoginPageService.prototype.Find = function (data) {
                var config = {
                    params: {
                        UserName: data.UserName,
                        Password: data.Password
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LoginPageService.prototype.GetLogin = function (data) {
                //user list where it is array/ object has more than one value              
                var objLogin = new model.ILoginResponse();
                if (data != null) {
                    objLogin.UserName = data.UserName;
                    objLogin.Password = data.Password;
                    objLogin.Email = data.Email;
                    objLogin.UserID = data.UserID;
                    objLogin.RoleID = data.RoleID;
                    objLogin.RoleName = data.RoleName;
                    objLogin.SalesOfficeID = data.SalesOfficeID;
                    objLogin.Status = data.Status;
                    objLogin.UserLogId = data.UserLogId;
                }
                else {
                    objLogin = null;
                }
                console.log("objLogin");
                console.log(objLogin);
                return objLogin;
            };
            LoginPageService.prototype.ManageHeaderAfterLogin = function (userName) {
                this.HideLoginBlock();
                this.ShowLogoutBlock();
                this.SetLoggedInUserInfo(userName);
            };
            LoginPageService.prototype.ManageHeaderAfterLogout = function () {
                this.HideLogoutBlock();
                this.ShowLoginBlock();
            };
            LoginPageService.prototype.DisplayLoginBlock = function () {
                this.ShowLoginBlock();
            };
            LoginPageService.prototype.DisplayLogoutBlock = function () {
                this.ShowLogoutBlock();
            };
            LoginPageService.prototype.HideLoginBlock = function () {
                $(this.LOGIN_BLOCK).hide();
            };
            LoginPageService.prototype.ShowLoginBlock = function () {
                $(this.LOGIN_BLOCK).show();
            };
            LoginPageService.prototype.HideLogoutBlock = function () {
                $(this.LOGOUT_BLOCK).hide();
            };
            LoginPageService.prototype.ShowLogoutBlock = function () {
                $(this.LOGOUT_BLOCK).show();
            };
            LoginPageService.prototype.SetLoggedInUserInfo = function (name) {
                $(this.LOGIN_NAME).html(name);
            };
            LoginPageService.$inject = ["$http", "$q"];
            return LoginPageService;
        }(GCPL.Service.BaseService));
        Service.LoginPageService = LoginPageService;
        //inject service
        app.AddService("LoginPageService", LoginPageService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//cookie service
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CookieService = /** @class */ (function (_super) {
            __extends(CookieService, _super);
            function CookieService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                return _this;
            }
            CookieService.prototype.Get = function (key) {
                return this._cookieStore.get(key);
            };
            CookieService.prototype.Put = function (key, data) {
                this._cookieStore.put(key, data);
                console.log(this._cookieStore.get(key));
            };
            CookieService.prototype.Remove = function (key) {
                this._cookieStore.remove(key);
                console.log('Should be Null:', this._cookieStore.get(key));
            };
            CookieService.prototype.IsCookieExpired = function (key) {
                var flag = true;
                if (typeof this.Get(key) !== "undefined") {
                    flag = false;
                }
                return flag;
            };
            CookieService.$inject = ["$http", "$q", "$cookieStore"];
            return CookieService;
        }(GCPL.Service.BaseService));
        Service.CookieService = CookieService;
        //inject service
        app.AddService("CookieService", CookieService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ChangePwdService = /** @class */ (function (_super) {
            __extends(ChangePwdService, _super);
            function ChangePwdService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = "" + _this.url;
                return _this;
            }
            ChangePwdService.prototype.FindOTP = function (data) {
                var url = this.apiUrl + "/GetOTP";
                var UserName;
                if (data == undefined) {
                    UserName = '';
                }
                else {
                    UserName = data;
                }
                console.log("aaaaaaaaaaaaaaaa");
                console.log(UserName);
                var config = {
                    params: {
                        UserName: UserName
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ChangePwdService.prototype.GetOTPDtls = function (data) {
                var list = new model.IGetOTPResponse();
                if (data == null || data == undefined) {
                    list.UserID = "";
                    list.Email = "";
                    list.PhoneNo = "";
                    list.SecurityCode = "";
                }
                else {
                    list.UserID = data.UserID;
                    list.Email = data.Email;
                    list.PhoneNo = data.PhoneNo;
                    list.SecurityCode = data.SecurityCode;
                    console.log(list);
                }
                return list;
            };
            ChangePwdService.prototype.FindPWDStatus = function (data, data2, data3) {
                var url = this.apiUrl + "/ChangePwd";
                var config = {
                    params: {
                        UserID: data3,
                        NewPwd: data2,
                        SecurityCode: data
                    }
                };
                return this.ajaXUtility.Get({ Url: url, Config: config });
            };
            ChangePwdService.prototype.GetChangePWDStatus = function (data) {
                return data;
            };
            ChangePwdService.prototype.FindValidCRMUser = function (data, data2) {
                var url = this.apiUrl + "/GetValidCRMCordinator";
                var UserName;
                var Password;
                if (data == undefined) {
                    UserName = '';
                }
                else {
                    UserName = data;
                }
                if (data2 == undefined) {
                    Password = '';
                }
                else {
                    Password = data2;
                }
                var config = {
                    params: {
                        UserName: UserName,
                        Password: Password
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ChangePwdService.prototype.GetValidCRMUserDtls = function (data) {
                var list = new model.IGetValidCRMResponse();
                if (data == null || data == undefined) {
                    list.UserID = "";
                    list.Email = "";
                    list.PhoneNo = "";
                    list.SecurityCode = "";
                    list.RoleID = "";
                }
                else {
                    list.UserID = data.UserID;
                    list.Email = data.Email;
                    list.PhoneNo = data.PhoneNo;
                    list.SecurityCode = data.SecurityCode;
                    list.RoleID = data.RoleID;
                    console.log(list);
                }
                return list;
            };
            ChangePwdService.$inject = ["$http", "$q"];
            return ChangePwdService;
        }(GCPL.Service.BaseService));
        Service.ChangePwdService = ChangePwdService;
        //inject service
        app.AddService("ChangePwdService", ChangePwdService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CRMCordinatorddService = /** @class */ (function (_super) {
            __extends(CRMCordinatorddService, _super);
            function CRMCordinatorddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CRMUsernameDD";
                return _this;
            }
            CRMCordinatorddService.prototype.Find = function (data) {
                var UserName;
                if (data == undefined) {
                    UserName = '';
                }
                else {
                    UserName = data;
                }
                var config = {
                    params: {
                        UserName: UserName
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CRMCordinatorddService.prototype.GetSalesRep = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        UserID: item.UserID.toString(),
                        UserName: item.UserName,
                        Password: item.Password,
                        Comment: item.Comment
                    });
                }
                return list;
            };
            CRMCordinatorddService.$inject = ["$http", "$q"];
            return CRMCordinatorddService;
        }(GCPL.Service.BaseService));
        Service.CRMCordinatorddService = CRMCordinatorddService;
        app.AddService("CRMCordinatorddService", CRMCordinatorddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CRMLoginPageService = /** @class */ (function (_super) {
            __extends(CRMLoginPageService, _super);
            function CRMLoginPageService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                //Manage Header
                _this.LOGIN_BLOCK = "#login-block";
                _this.LOGOUT_BLOCK = "#logout-block";
                _this.LOGIN_NAME = "#login-name";
                _this.apiUrl = _this.url + "/" + "CRMLoginctrl";
                return _this;
            }
            CRMLoginPageService.prototype.FindCRM = function (data) {
                var config = {
                    params: {
                        UserID: data.UserID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CRMLoginPageService.prototype.GetCRMLogin = function (data) {
                var objLogin = new model.ICRMLoginResponse();
                if (data != null) {
                    objLogin.UserName = data.UserName;
                    objLogin.Password = data.Password;
                    objLogin.Email = data.Email;
                    objLogin.UserID = data.UserID;
                    objLogin.RoleID = data.RoleID;
                    objLogin.RoleName = data.RoleName;
                    objLogin.SalesOfficeID = data.SalesOfficeID;
                    objLogin.Status = data.Status;
                    objLogin.UserLogId = data.UserLogId;
                }
                else {
                    objLogin = null;
                }
                return objLogin;
            };
            CRMLoginPageService.prototype.ManageHeaderAfterLogin = function (userName) {
                this.HideLoginBlock();
                this.ShowLogoutBlock();
                this.SetLoggedInUserInfo(userName);
            };
            CRMLoginPageService.prototype.ManageHeaderAfterLogout = function () {
                this.HideLogoutBlock();
                this.ShowLoginBlock();
            };
            CRMLoginPageService.prototype.DisplayLoginBlock = function () {
                this.ShowLoginBlock();
            };
            CRMLoginPageService.prototype.DisplayLogoutBlock = function () {
                this.ShowLogoutBlock();
            };
            CRMLoginPageService.prototype.HideLoginBlock = function () {
                $(this.LOGIN_BLOCK).hide();
            };
            CRMLoginPageService.prototype.ShowLoginBlock = function () {
                $(this.LOGIN_BLOCK).show();
            };
            CRMLoginPageService.prototype.HideLogoutBlock = function () {
                $(this.LOGOUT_BLOCK).hide();
            };
            CRMLoginPageService.prototype.ShowLogoutBlock = function () {
                $(this.LOGOUT_BLOCK).show();
            };
            CRMLoginPageService.prototype.SetLoggedInUserInfo = function (name) {
                $(this.LOGIN_NAME).html(name);
            };
            CRMLoginPageService.$inject = ["$http", "$q"];
            return CRMLoginPageService;
        }(GCPL.Service.BaseService));
        Service.CRMLoginPageService = CRMLoginPageService;
        app.AddService("CRMLoginPageService", CRMLoginPageService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertCRMService = /** @class */ (function (_super) {
            __extends(InsertCRMService, _super);
            function InsertCRMService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertLoginHistoryMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertCRMService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertCRMService.prototype.PostCRMUserData = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertCRMService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertCRMService;
        }(GCPL.Service.BaseService));
        Service.InsertCRMService = InsertCRMService;
        app.AddService("InsertCRMService", InsertCRMService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//sales rep dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CRMSalesRepddService = /** @class */ (function (_super) {
            __extends(CRMSalesRepddService, _super);
            function CRMSalesRepddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "UsernameSalesRepDD";
                return _this;
            }
            CRMSalesRepddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CRMSalesRepddService.prototype.GetSalesRep = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        UserID: item.UserID.toString(),
                        UserName: item.UserName,
                    });
                }
                return list;
            };
            CRMSalesRepddService.$inject = ["$http", "$q"];
            return CRMSalesRepddService;
        }(GCPL.Service.BaseService));
        Service.CRMSalesRepddService = CRMSalesRepddService;
        app.AddService("CRMSalesRepddService", CRMSalesRepddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
//namespace GCPL.Service {
//    import app = GCPL.app;
//    import model = GCPL.Model;
//    export interface ILogOutService {
//        UpdateUserLog(UserID): ng.IPromise<Utility.Ajax.IResponse>;
//    }
//    export class LogOutService extends GCPL.Service.BaseService implements ILogOutService {
//        private apiUrl: string = "";
//        private Cookie: any = null;
//        static $inject = ["$http", "$q", "$cookieStore"];
//        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
//            super($http, $q);
//            this.apiUrl = `${this.url}/${"Logoutctrl"}`;
//            this.Cookie = _cookieStore;
//        }
//        Find(): ng.IPromise<Utility.Ajax.IResponse> {
//            return this.ajaXUtility.Get({ Url: this.apiUrl });
//        }
//        UpdateUserLog(UserID): ng.IPromise<Utility.Ajax.IResponse> {
//            let url = this.apiUrl;
//            // console.log(url);
//            return this.ajaXUtility.Post({ Url: url, data: UserID });
//        }
//    }
//    app.AddService("LogOutService", LogOutService);
//}
//# sourceMappingURL=LoginPageService.js.map