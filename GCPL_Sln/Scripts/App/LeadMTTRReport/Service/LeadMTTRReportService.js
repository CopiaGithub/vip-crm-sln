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
        var AllLeadMTTRService = /** @class */ (function (_super) {
            __extends(AllLeadMTTRService, _super);
            function AllLeadMTTRService($http, $q, _cookieStore) {
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
            AllLeadMTTRService.prototype.FindGrid = function (data) {
                var url = this.apiUrl + "LeadMTTRReport";
                var FromDate;
                var ToDate;
                var CustomerID;
                var CustSAPID;
                var LeadID;
                var AllocatedTo;
                var StatusID;
                var UserID;
                var RoleID;
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
                if (data.CustomerID == undefined) {
                    CustomerID = '';
                }
                else {
                    CustomerID = data.CustomerID;
                }
                if (data.CustSAPID == undefined) {
                    CustSAPID = '';
                }
                else {
                    CustSAPID = data.CustSAPID;
                }
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.AllocatedTo == undefined) {
                    AllocatedTo = '';
                }
                else {
                    AllocatedTo = data.AllocatedTo;
                }
                if (data.StatusID == undefined) {
                    StatusID = '';
                }
                else {
                    StatusID = data.StatusID;
                }
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.RoleID == undefined) {
                    RoleID = '';
                }
                else {
                    RoleID = data.RoleID;
                }
                var config = {
                    params: {
                        FromDate: FromDate,
                        ToDate: ToDate,
                        CustomerID: CustomerID,
                        CustSAPID: CustSAPID,
                        LeadID: LeadID,
                        AllocatedTo: AllocatedTo,
                        StatusID: StatusID,
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            AllLeadMTTRService.prototype.GetAllLeadsGrid = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CompanyName: item.CompanyName,
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        LeadID: item.LeadID,
                        Status: item.Status,
                        AgeingCreationValidation: item.AgeingCreationValidation,
                        AgeingValidationAssessment: item.AgeingValidationAssessment,
                        AgeingAssessmentConversion: item.AgeingAssessmentConversion,
                        AgeingCreationConversion: item.AgeingCreationConversion,
                        AgeingCreationClosure: item.AgeingCreationClosure,
                        OpenLeadsAgeing: item.OpenLeadsAgeing,
                        UserID: item.UserID,
                        AllocatedTo: item.AllocatedTo
                    });
                }
                return list;
            };
            AllLeadMTTRService.$inject = ["$http", "$q", "$cookieStore"];
            return AllLeadMTTRService;
        }(GCPL.Service.BaseService));
        Service.AllLeadMTTRService = AllLeadMTTRService;
        app.AddService("AllLeadMTTRService", AllLeadMTTRService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadMTTRReportService.js.map