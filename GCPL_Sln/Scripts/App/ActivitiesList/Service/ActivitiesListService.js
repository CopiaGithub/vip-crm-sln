//Activity List
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
        var ActListService = /** @class */ (function (_super) {
            __extends(ActListService, _super);
            function ActListService($http, $q, _cookieStore) {
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
            ActListService.prototype.Find = function (data) {
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
                var config = {
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
            };
            ActListService.prototype.GetUserActList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
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
            };
            ActListService.$inject = ["$http", "$q", "$cookieStore"];
            return ActListService;
        }(GCPL.Service.BaseService));
        Service.ActListService = ActListService;
        app.AddService("ActListService", ActListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit Activity Service
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var EditService = /** @class */ (function (_super) {
            __extends(EditService, _super);
            function EditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "EditUserActivity";
                return _this;
            }
            EditService.prototype.Find = function (data) {
                var actid;
                if (data == undefined) {
                    actid = "";
                }
                else {
                    actid = data;
                }
                var config = {
                    params: {
                        actid: actid
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            EditService.prototype.GetEdit = function (data) {
                var obj = new model.EditActlistModel();
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
                    obj.ltter = data.ltter;
                return obj;
            };
            EditService.$inject = ["$http", "$q"];
            return EditService;
        }(GCPL.Service.BaseService));
        Service.EditService = EditService;
        app.AddService("EditService", EditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert Activity Service
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertActService = /** @class */ (function (_super) {
            __extends(InsertActService, _super);
            function InsertActService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertCategoryMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertActService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertActService.prototype.PostCategory = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertActService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertActService;
        }(GCPL.Service.BaseService));
        Service.InsertActService = InsertActService;
        app.AddService("InsertActService", InsertActService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
// Get User Data 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var UserActivityService = /** @class */ (function (_super) {
            __extends(UserActivityService, _super);
            function UserActivityService($http, $q, _cookieStore) {
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
            UserActivityService.prototype.Find = function (data) {
                var url = this.apiUrl + "/UserActivityList";
                var UserID;
                if (data == undefined) {
                    UserID = "";
                }
                else {
                    UserID = data;
                }
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            UserActivityService.prototype.GetUserActivity = function (data) {
                var obj = new model.UserInfoModel();
                obj.UserID = data.UserID;
                obj.EmployeeCode = data.EmployeeCode;
                obj.SalesOfficeID = data.SalesOfficeID;
                return obj;
            };
            UserActivityService.$inject = ["$http", "$q", "$cookieStore"];
            return UserActivityService;
        }(GCPL.Service.BaseService));
        Service.UserActivityService = UserActivityService;
        app.AddService("UserActivityService", UserActivityService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Actvity Type DropDown
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ActivityType = /** @class */ (function (_super) {
            __extends(ActivityType, _super);
            function ActivityType($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ActTypeddl";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ActivityType.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ActivityType.prototype.GetActivityType = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        PurposeID: item.PurposeID.toString(),
                        Purpose: item.Purpose,
                        IsActive: item.IsActive,
                    });
                }
                return list;
            };
            ActivityType.$inject = ["$http", "$q", "$cookieStore"];
            return ActivityType;
        }(GCPL.Service.BaseService));
        Service.ActivityType = ActivityType;
        app.AddService("ActivityType", ActivityType);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Create Business Activity
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CreateInSAPActivityService = /** @class */ (function (_super) {
            __extends(CreateInSAPActivityService, _super);
            function CreateInSAPActivityService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                //this.apiUrl = `${this.url}/${"CreateInSAPActivity"}`;
                _this.apiUrl = _this.url + "/" + "CreateBusinessActivity";
                _this.Cookie = _cookieStore;
                return _this;
            }
            CreateInSAPActivityService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            CreateInSAPActivityService.prototype.PostCreateInSAPActivity = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateInSAPActivityService.$inject = ["$http", "$q", "$cookieStore"];
            return CreateInSAPActivityService;
        }(GCPL.Service.BaseService));
        Service.CreateInSAPActivityService = CreateInSAPActivityService;
        app.AddService("CreateInSAPActivityService", CreateInSAPActivityService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Refresh Activity SAP List
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ActSAPListService = /** @class */ (function (_super) {
            __extends(ActSAPListService, _super);
            function ActSAPListService($http, $q, _cookieStore) {
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
            ActSAPListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/UserActivitySAPList";
                var UserID;
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                var config = {
                    params: {
                        erpid: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ActSAPListService.$inject = ["$http", "$q", "$cookieStore"];
            return ActSAPListService;
        }(GCPL.Service.BaseService));
        Service.ActSAPListService = ActSAPListService;
        app.AddService("ActSAPListService", ActSAPListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ActivitiesListService.js.map