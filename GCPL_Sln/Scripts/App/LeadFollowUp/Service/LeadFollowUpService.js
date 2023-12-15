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
        var FollowUpReportService = /** @class */ (function (_super) {
            __extends(FollowUpReportService, _super);
            function FollowUpReportService($http, $q, _cookieStore) {
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
            FollowUpReportService.prototype.Find = function (data) {
                var url = this.apiUrl + "/LeadFollowUpReport";
                var FromDate;
                var ToDate;
                var LeadID;
                var BusinessPartnerNo;
                var PhoneNo;
                var StatusID;
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
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.BusinessPartnerNo == undefined) {
                    BusinessPartnerNo = '';
                }
                else {
                    BusinessPartnerNo = data.BusinessPartnerNo;
                }
                if (data.PhoneNo == undefined) {
                    PhoneNo = '';
                }
                else {
                    PhoneNo = data.PhoneNo;
                }
                if (data.StatusID == undefined) {
                    StatusID = '';
                }
                else {
                    StatusID = data.StatusID;
                }
                var config = {
                    params: {
                        FromDate: FromDate,
                        ToDate: ToDate,
                        LeadID: LeadID,
                        BusinessPartnerNo: BusinessPartnerNo,
                        StatusID: StatusID,
                        PhoneNo: PhoneNo
                        //RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        //UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            FollowUpReportService.prototype.Getlist = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadID: item.LeadID,
                        SpokeTo: item.SpokeTo,
                        PhoneNo: item.PhoneNo,
                        Question1: item.Question1,
                        Question2: item.Question2,
                        Question3: item.Question3,
                        Question4: item.Question4,
                        Question5: item.Question5,
                        Question6: item.Question6,
                        Answer1: item.Answer1,
                        Answer2: item.Answer2,
                        Answer3: item.Answer3,
                        Answer4: item.Answer4,
                        Answer5: item.Answer5,
                        Answer6: item.Answer6,
                        FollowupDate: item.FollowupDate,
                        CustomerID: item.CustomerID,
                        FollowupStatus: item.FollowupStatus,
                        AnswerText: item.AnswerText,
                        FollowupBy: item.FollowupBy,
                        BusinessPartnerNo: item.BusinessPartnerNo
                    });
                }
                return list;
            };
            FollowUpReportService.$inject = ["$http", "$q", "$cookieStore"];
            return FollowUpReportService;
        }(GCPL.Service.BaseService));
        Service.FollowUpReportService = FollowUpReportService;
        app.AddService("FollowUpReportService", FollowUpReportService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadFollowUpService.js.map