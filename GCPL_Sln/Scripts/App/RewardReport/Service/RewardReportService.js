//List
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
        var RewardReportListService = /** @class */ (function (_super) {
            __extends(RewardReportListService, _super);
            function RewardReportListService($http, $q, _cookieStore) {
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
            RewardReportListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetVLERewardReportList";
                var LeadID;
                var SearchText;
                var PaidConverted;
                var PaidWon;
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                if (data.PaidConverted == undefined) {
                    PaidConverted = '';
                }
                else {
                    PaidConverted = data.PaidConverted;
                }
                if (data.PaidWon == undefined) {
                    PaidWon = '';
                }
                else {
                    PaidWon = data.PaidWon;
                }
                var config = {
                    params: {
                        LeadID: LeadID,
                        SearchText: SearchText,
                        PaidConverted: PaidConverted,
                        PaidWon: PaidWon
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            RewardReportListService.prototype.GetRewardReportList = function (data) {
                var list = Array();
                debugger;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadID: item.LeadID,
                        VLELeadID: item.VLELeadID,
                        OpportunityID: item.OpportunityID,
                        ModelNo: item.ModelNo,
                        Status: item.Status,
                        VLEID: item.VLEID,
                        VLEName: item.VLEName,
                        CustomerName: item.CustomerName,
                        CustomerSAPID: item.CustomerSAPID,
                        ConversionPoints: ((item.ConversionPoints == "0") ? "NA" : item.ConversionPoints),
                        WonPoints: ((item.WonPoints == "0") ? "NA" : item.WonPoints),
                        PaidConverted: ((item.PaidConverted == "1") ? "Due" : "Paid"),
                        PaidWon: ((item.PaidWon == "1") ? "Due" : "Paid"),
                        LeadCreatedDate: item.LeadCreatedDate,
                        OppStatus: item.OppStatus
                    });
                }
                return list;
            };
            RewardReportListService.$inject = ["$http", "$q", "$cookieStore"];
            return RewardReportListService;
        }(GCPL.Service.BaseService));
        Service.RewardReportListService = RewardReportListService;
        app.AddService("RewardReportListService", RewardReportListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//GetAUTo VLE Name
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var getAutoVLENameService = /** @class */ (function (_super) {
            __extends(getAutoVLENameService, _super);
            function getAutoVLENameService($http, $q, _cookieStore) {
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
            getAutoVLENameService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/VLENameAUtofill";
                var config = {
                    params: {
                        Input: data.term,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            getAutoVLENameService.prototype.GetAutoVLEName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        VLEID: item.VLEID,
                        ContactName: item.ContactName
                    });
                }
                return list;
            };
            getAutoVLENameService.$inject = ["$http", "$q", "$cookieStore"];
            return getAutoVLENameService;
        }(GCPL.Service.BaseService));
        Service.getAutoVLENameService = getAutoVLENameService;
        //inject service
        app.AddService("getAutoVLENameService", getAutoVLENameService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RewardReportService.js.map