
//Activity List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IActListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserActList(data: any): Array<model.ActlistModel>;

    }
    export class ActListService extends GCPL.Service.BaseService implements IActListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ActivityList";
            var UserID;
            var ActivityNumber;

            
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {
                UserID = data.UserID;

            }
            if (data.ActivityNumber == undefined) {
                ActivityNumber = '';
            }
            else {
                ActivityNumber = data.ActivityNumber;

            }
            
            let config = {
                params: {

                    ActivityNumber: ActivityNumber,
                    UserID: UserID
                    // erpid: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetUserActList(data: any): Array<model.ActlistModel> {
            let list = Array<model.ActlistModel>();

            for (let item of data) {
                list.push({

                    CustomerID: item.CustomerID,
                    CompanyName: item.CompanyName,
                    CustomerSAPID: item.CustomerSAPID,
                    ContactID: item.ContactID,
                    ContactName: item.ContactName,
                    ContactSAPID: item.ContactSAPID,
                    Note: item.Note,
                    ActivityID: item.ActivityID,
                    ActivityName: item.ActivityName,
                    ActivityDate: item.ActivityDate,
                    Status: item.Status,
                    IsActive: item.IsActive,
                    Purpose: item.Purpose,
                    Mode: item.Mode,
                    Location: item.Location,
                    ReferenceType: item.ReferenceType,
                    ReferenceLead: item.ReferenceLead,
                    ReferenceOpportunity: item.ReferenceOpportunity,
                    StartDate: item.StartDate,
                    EndDate: item.EndDate,
                    ActivityNumber: item.ActivityNumber

                });
            }
            return list;
        }

    }

    app.AddService("ActListService", ActListService);
}

//Edit Activity Service

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditActlistModel;
    }
    export class EditService extends GCPL.Service.BaseService implements IEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"EditUserActivity"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var actid;
            
            if (data == undefined) {
                actid = "";
            }
            else {
                actid = data;
            }

            let config = {
                params: {
                    actid: actid
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetEdit(data: any): model.EditActlistModel {
            
            let obj = new model.EditActlistModel();

                obj.CustomerID = data.CustomerID,
                obj.CompanyName = data.CompanyName,
                obj.CustomerSAPID = data.CustomerSAPID,
                obj.CustomerMobileNo = data.CustomerMobileNo,
                obj.ContactID = data.ContactID,
                obj.ContactName = data.ContactName,
                obj.ContactSAPID = data.ContactSAPID,
                obj.ContactMobileNo = data.ContactMobileNo,
                obj.FOPID = data.FOPID,
                obj.FOP = data.FOP,
                obj.note = data.Note,
                obj.ActivityStatus = data.Status,
                obj.ptype = data.Purpose,
                obj.cate = data.Mode,
                obj.loc = data.Location,
                obj.purid = data.ReferenceType,
                obj.date = data.StartDate,
                obj.actid = data.actid,
                obj.agnst = data.Agnst,
                obj.ltter = data.ltter

            return obj;
        }
    }
    app.AddService("EditService", EditService);
}

//Insert Activity Service

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertActService {
        PostCategory(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertActService extends GCPL.Service.BaseService implements IInsertActService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertCategoryMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCategory(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertActService", InsertActService);
}

// Get User Data 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserActivityService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserActivity(data: any): model.UserInfoModel;
    }
    export class UserActivityService extends GCPL.Service.BaseService implements IUserActivityService {
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
            var url = this.apiUrl + "/UserActivityList";
            var UserID;
            
            if (data == undefined) {
                UserID = "";
            }
            else {
                UserID = data;
            }

            let config = {
                params: {
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetUserActivity(data: any): model.UserInfoModel {

            let obj = new model.UserInfoModel();

            obj.UserID = data.UserID;
            obj.EmployeeCode = data.EmployeeCode;
            obj.SalesOfficeID = data.SalesOfficeID;

            return obj
        }

    }
    app.AddService("UserActivityService", UserActivityService);
}

//Actvity Type DropDown
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IActivityType {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetActivityType(data: any): Array<model.ActivityType>;
    }
    export class ActivityType extends GCPL.Service.BaseService implements IActivityType {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ActTypeddl"}`;
            this.Cookie = _cookieStore;
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

        GetActivityType(data: any): Array<model.ActivityType> {
            let list = Array<model.ActivityType>();
            for (let item of data) {
                list.push({
                    PurposeID: item.PurposeID.toString(),
                    Purpose: item.Purpose,
                    IsActive: item.IsActive,
                });
            }
            return list;
        }
    }

    app.AddService("ActivityType", ActivityType);
}


//Create Business Activity

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICreateInSAPActivityService {

        PostCreateInSAPActivity(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class CreateInSAPActivityService extends GCPL.Service.BaseService implements ICreateInSAPActivityService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            //this.apiUrl = `${this.url}/${"CreateInSAPActivity"}`;

            this.apiUrl = `${this.url}/${"CreateBusinessActivity"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCreateInSAPActivity(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("CreateInSAPActivityService", CreateInSAPActivityService);
}


//Refresh Activity SAP List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IActSAPListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        
    }
    export class ActSAPListService extends GCPL.Service.BaseService implements IActSAPListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/UserActivitySAPList";
            var UserID;

            
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {
                UserID = data.UserID;

            }

            
            let config = {
                params: {

                    erpid: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        

    }

    app.AddService("ActSAPListService", ActSAPListService);
}