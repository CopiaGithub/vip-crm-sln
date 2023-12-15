/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-cookies.d.ts" />



namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    import Cookies = GCPL.cookies;
    export interface ILoginPageService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLogin(data: any): model.ILoginResponse;
        ManageHeaderAfterLogin(userName: string): void;
        ManageHeaderAfterLogout(): void;
        DisplayLoginBlock(): void;
        DisplayLogoutBlock(): void;
    }
    export class LoginPageService extends GCPL.Service.BaseService implements ILoginPageService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"Loginctrl"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {


            let config = {

                params: {
                    UserName: data.UserName,
                    Password: data.Password
                }

            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config

            });
        }
        GetLogin(data: any): model.ILoginResponse {
            //user list where it is array/ object has more than one value              
            
            let objLogin = new model.ILoginResponse();
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
        }

        //Manage Header
        private LOGIN_BLOCK: string = "#login-block";
        private LOGOUT_BLOCK: string = "#logout-block";
        private LOGIN_NAME: string = "#login-name";

        public ManageHeaderAfterLogin(userName: string): void {
            this.HideLoginBlock();
            this.ShowLogoutBlock();
            this.SetLoggedInUserInfo(userName);
        }

        public ManageHeaderAfterLogout(): void {
            this.HideLogoutBlock();
            this.ShowLoginBlock();
        }

        public DisplayLoginBlock(): void {
            this.ShowLoginBlock();
        }

        public DisplayLogoutBlock(): void {
            this.ShowLogoutBlock();
        }

        private HideLoginBlock() {
            $(this.LOGIN_BLOCK).hide();
        }
        private ShowLoginBlock() {
            $(this.LOGIN_BLOCK).show();
        }
        private HideLogoutBlock() {
            $(this.LOGOUT_BLOCK).hide();
        }
        private ShowLogoutBlock() {
            $(this.LOGOUT_BLOCK).show();
        }
        private SetLoggedInUserInfo(name: string) {
            $(this.LOGIN_NAME).html(name);
        }
    }

    //inject service
    app.AddService("LoginPageService", LoginPageService);
}

//cookie service
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    import Cookies = GCPL.cookies;
    export interface ICookieService {
        Get(key: string): any;
        Put(key: string, data: any): void;
        Remove(key: string): void;
        IsCookieExpired(key: string): boolean;
    }
    export class CookieService extends GCPL.Service.BaseService implements ICookieService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
        }

        Get(key: string): void {
            return this._cookieStore.get(key);
        }
        Put(key: string, data: any): void {
            this._cookieStore.put(key, data);
            console.log(this._cookieStore.get(key));
        }
        Remove(key: string): void {
            this._cookieStore.remove(key);
            console.log('Should be Null:', this._cookieStore.get(key));
        }

        IsCookieExpired(key: string): boolean {
            let flag = true;
            if (typeof this.Get(key) !== "undefined") {
                flag = false;
            }
            return flag;
        }

    }

    //inject service
    app.AddService("CookieService", CookieService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    import Cookies = GCPL.cookies;
    export interface IChangePwdService {
        FindOTP(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetOTPDtls(data: any): model.IGetOTPResponse;

        FindPWDStatus(data: any, data2: any, data3: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetChangePWDStatus(data: any): string;

        FindValidCRMUser(data: any, data2: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetValidCRMUserDtls(data: any): model.IGetValidCRMResponse;

    }
    export class ChangePwdService extends GCPL.Service.BaseService implements IChangePwdService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}`;
        }
        FindOTP(data: any): ng.IPromise<Utility.Ajax.IResponse> {

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

            let config = {

                params: {

                    UserName: UserName
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetOTPDtls(data: any): model.IGetOTPResponse {

            let list = new model.IGetOTPResponse();
            if (data == null || data == undefined) {
                list.UserID = "";
                list.Email = "";
                list.PhoneNo = "";
                list.SecurityCode = "";

            } else {
                list.UserID = data.UserID;
                list.Email = data.Email;
                list.PhoneNo = data.PhoneNo;
                list.SecurityCode = data.SecurityCode;

                console.log(list);
            }
            return list;
        }

        FindPWDStatus(data, data2, data3): ng.IPromise<Utility.Ajax.IResponse> {
            
            var url = this.apiUrl + "/ChangePwd";
            let config = {
                params: {
                    UserID: data3,
                    NewPwd: data2,
                    SecurityCode: data
                }
            };
            return this.ajaXUtility.Get({ Url: url, Config: config });
        }
        GetChangePWDStatus(data: any): string {
            return data;
        }

        FindValidCRMUser(data: any, data2: any): ng.IPromise<Utility.Ajax.IResponse> {
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
            let config = {
                params: {
                    UserName: UserName,
                    Password: Password
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetValidCRMUserDtls(data: any): model.IGetValidCRMResponse {
            let list = new model.IGetValidCRMResponse();
            if (data == null || data == undefined) {
                list.UserID = "";
                list.Email = "";
                list.PhoneNo = "";
                list.SecurityCode = "";
                list.RoleID = "";

            } else {
                list.UserID = data.UserID;
                list.Email = data.Email;
                list.PhoneNo = data.PhoneNo;
                list.SecurityCode = data.SecurityCode;
                list.RoleID = data.RoleID
                console.log(list);
            }
            return list;
        }
    }

    //inject service
    app.AddService("ChangePwdService", ChangePwdService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICRMCordinatorddService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesRep(data: any): Array<model.GetCRMUserModel>;
    }
    export class CRMCordinatorddService extends GCPL.Service.BaseService implements ICRMCordinatorddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CRMUsernameDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var UserName;
            if (data == undefined) {
                UserName = '';
            }
            else {

                UserName = data;
            }
            let config = {
                params: {
                    UserName: UserName
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetSalesRep(data: any): Array<model.GetCRMUserModel> {
            let list = Array<model.GetCRMUserModel>();
            for (let item of data) {
                list.push({
                    UserID: item.UserID.toString(),
                    UserName: item.UserName,
                    Password: item.Password,
                    Comment: item.Comment
                });
            }
            return list;
        }
    }

    app.AddService("CRMCordinatorddService", CRMCordinatorddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    import Cookies = GCPL.cookies;
    export interface ICRMLoginPageService {
        FindCRM(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCRMLogin(data: any): model.ICRMLoginResponse;
        ManageHeaderAfterLogin(userName: string): void;
        ManageHeaderAfterLogout(): void;
        DisplayLoginBlock(): void;
        DisplayLogoutBlock(): void;
    }
    export class CRMLoginPageService extends GCPL.Service.BaseService implements ICRMLoginPageService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"CRMLoginctrl"}`;
        }
        FindCRM(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    UserID: data.UserID
                }
            };

            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }
        GetCRMLogin(data: any): model.ICRMLoginResponse {
            let objLogin = new model.ICRMLoginResponse();
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
        }

        //Manage Header
        private LOGIN_BLOCK: string = "#login-block";
        private LOGOUT_BLOCK: string = "#logout-block";
        private LOGIN_NAME: string = "#login-name";

        public ManageHeaderAfterLogin(userName: string): void {
            this.HideLoginBlock();
            this.ShowLogoutBlock();
            this.SetLoggedInUserInfo(userName);
        }

        public ManageHeaderAfterLogout(): void {
            this.HideLogoutBlock();
            this.ShowLoginBlock();
        }

        public DisplayLoginBlock(): void {
            this.ShowLoginBlock();
        }

        public DisplayLogoutBlock(): void {
            this.ShowLogoutBlock();
        }

        private HideLoginBlock() {
            $(this.LOGIN_BLOCK).hide();
        }
        private ShowLoginBlock() {
            $(this.LOGIN_BLOCK).show();
        }
        private HideLogoutBlock() {
            $(this.LOGOUT_BLOCK).hide();
        }
        private ShowLogoutBlock() {
            $(this.LOGOUT_BLOCK).show();
        }
        private SetLoggedInUserInfo(name: string) {
            $(this.LOGIN_NAME).html(name);
        }

    }
    app.AddService("CRMLoginPageService", CRMLoginPageService);
}
//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertCRMService {
        PostCRMUserData(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertCRMService extends GCPL.Service.BaseService implements IInsertCRMService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertLoginHistoryMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCRMUserData(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertCRMService", InsertCRMService);
}

//sales rep dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    export interface ICRMSalesRepddService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesRep(data: any): Array<model.UserNamewpModel>;
    }
    export class CRMSalesRepddService extends GCPL.Service.BaseService implements ICRMSalesRepddService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"UsernameSalesRepDD"}`;
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
        GetSalesRep(data: any): Array<model.UserNamewpModel> {
            let list = Array<model.UserNamewpModel>();
            for (let item of data) {
                list.push({
                    UserID: item.UserID.toString(),
                    UserName: item.UserName,
                });
            }
            return list;
        }
    }

    app.AddService("CRMSalesRepddService", CRMSalesRepddService);
}
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