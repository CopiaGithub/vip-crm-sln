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
//List
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ActivityOverrideListService = /** @class */ (function (_super) {
            __extends(ActivityOverrideListService, _super);
            function ActivityOverrideListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.Cookie = _cookieStore;
                _this.apiUrl = "" + _this.url;
                return _this;
            }
            ActivityOverrideListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ActivityOverride";
                var SearchText;
                var LeadID;
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        LeadID: LeadID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ActivityOverrideListService.prototype.GetActivityOverrideList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CompanyName: item.CompanyName,
                        EmployeeCode: item.EmployeeCode,
                        WhenEntered: item.WhenEntered,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        CustomerID: item.CustomerID,
                        ContactID: item.ContactID,
                        LeadID: item.LeadID,
                        Title: item.Title,
                        Status: item.Status,
                        FirstName: item.FirstName,
                        MobileNo: item.MobileNo,
                        AllocatedTo: item.AllocatedTo,
                        AllocatedToID: item.AllocatedToID,
                        OpportunityAssessmentID: item.OpportunityAssessmentID,
                        Comments: item.Comments,
                        IsLess: item.IsLess,
                        IsMeet: item.IsMeet,
                        Latitude: item.Latitude,
                        Longitude: item.Longitude,
                        LeadSource: item.LeadSource
                    });
                }
                return list;
            };
            ActivityOverrideListService.$inject = ["$http", "$q", "$cookieStore"];
            return ActivityOverrideListService;
        }(GCPL.Service.BaseService));
        Service.ActivityOverrideListService = ActivityOverrideListService;
        app.AddService("ActivityOverrideListService", ActivityOverrideListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertActivityOverrideService = /** @class */ (function (_super) {
            __extends(InsertActivityOverrideService, _super);
            function InsertActivityOverrideService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertActivityOverride";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertActivityOverrideService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertActivityOverrideService.prototype.PostActivity = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                debugger;
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertActivityOverrideService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertActivityOverrideService;
        }(GCPL.Service.BaseService));
        Service.InsertActivityOverrideService = InsertActivityOverrideService;
        app.AddService("InsertActivityOverrideService", InsertActivityOverrideService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ActivityOverrideService.js.map