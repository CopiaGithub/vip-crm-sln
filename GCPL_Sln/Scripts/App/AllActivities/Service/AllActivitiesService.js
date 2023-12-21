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
//ActivityType  dd
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ActivityTypeddService = /** @class */ (function (_super) {
            __extends(ActivityTypeddService, _super);
            function ActivityTypeddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ActivityTypeDD";
                return _this;
            }
            ActivityTypeddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ActivityTypeddService.prototype.GetActivityTypeName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ID: item.ID.toString(),
                        ActivityType: item.ActivityType,
                    });
                }
                return list;
            };
            ActivityTypeddService.$inject = ["$http", "$q"];
            return ActivityTypeddService;
        }(GCPL.Service.BaseService));
        Service.ActivityTypeddService = ActivityTypeddService;
        app.AddService("ActivityTypeddService", ActivityTypeddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var AllActListService = /** @class */ (function (_super) {
            __extends(AllActListService, _super);
            function AllActListService($http, $q, _cookieStore) {
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
            AllActListService.prototype.FindGrid = function (data, NoOfRds, page) {
                var url = this.apiUrl + "/AllActivitiesList";
                var LeadID;
                var OpportunityID;
                var CreatedBy;
                var ActivityType;
                var FromDate;
                var ToDate;
                var UserID;
                var ActivityID;
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.OpportunityID == undefined) {
                    OpportunityID = '';
                }
                else {
                    OpportunityID = data.OpportunityID;
                }
                if (data.CreatedBy == undefined) {
                    CreatedBy = '';
                }
                else {
                    CreatedBy = data.CreatedBy;
                }
                if (data.ActivityType == undefined) {
                    ActivityType = '';
                }
                else {
                    ActivityType = data.ActivityType;
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
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.ActivityID == undefined) {
                    ActivityID = '';
                }
                else {
                    ActivityID = data.ActivityID;
                }
                var config = {
                    params: {
                        LeadID: LeadID,
                        OpportunityID: OpportunityID,
                        CreatedBy: CreatedBy,
                        ActivityType: ActivityType,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        UserID: UserID,
                        ActivityID: ActivityID,
                        NoOfRds: NoOfRds,
                        page: page
                        // erpid: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            AllActListService.prototype.GetAllActList = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
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
                        ActivityNumber: item.ActivityNumber,
                        ActivityAgainst: item.ActivityAgainst,
                        ActivityType: item.ActivityType,
                        CreatedBy: item.CreatedBy
                    });
                }
                return list;
            };
            AllActListService.prototype.DownloadGrid = function (data) {
                var url = this.apiUrl + "/DownloadAllActivities";
                var LeadID;
                var OpportunityID;
                var CreatedBy;
                var ActivityType;
                var FromDate;
                var ToDate;
                var UserID;
                var ActivityID;
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.OpportunityID == undefined) {
                    OpportunityID = '';
                }
                else {
                    OpportunityID = data.OpportunityID;
                }
                if (data.CreatedBy == undefined) {
                    CreatedBy = '';
                }
                else {
                    CreatedBy = data.CreatedBy;
                }
                if (data.ActivityType == undefined) {
                    ActivityType = '';
                }
                else {
                    ActivityType = data.ActivityType;
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
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.ActivityID == undefined) {
                    ActivityID = '';
                }
                else {
                    ActivityID = data.ActivityID;
                }
                var config = {
                    params: {
                        LeadID: LeadID,
                        OpportunityID: OpportunityID,
                        CreatedBy: CreatedBy,
                        ActivityType: ActivityType,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        UserID: UserID,
                        ActivityID: ActivityID
                        // erpid: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            AllActListService.prototype.DownloadAllActList = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
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
                        ActivityNumber: item.ActivityNumber,
                        ActivityAgainst: item.ActivityAgainst,
                        ActivityType: item.ActivityType,
                        CreatedBy: item.CreatedBy
                    });
                }
                return list;
            };
            AllActListService.$inject = ["$http", "$q", "$cookieStore"];
            return AllActListService;
        }(GCPL.Service.BaseService));
        Service.AllActListService = AllActListService;
        app.AddService("AllActListService", AllActListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AllActivitiesService.js.map