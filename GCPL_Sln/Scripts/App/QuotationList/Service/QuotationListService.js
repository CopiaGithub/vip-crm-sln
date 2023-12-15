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
        var QuotationlistService = /** @class */ (function (_super) {
            __extends(QuotationlistService, _super);
            function QuotationlistService($http, $q, _cookieStore) {
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
            QuotationlistService.prototype.Find = function (data) {
                var url = this.apiUrl + "/QuatationListDetails";
                var CustomerID;
                var OppNumber;
                var QuotationNo;
                //var UserID;
                if (data.CustomerID == undefined) {
                    CustomerID = '';
                }
                else {
                    CustomerID = data.CustomerID;
                }
                if (data.OppNumber == undefined) {
                    OppNumber = '';
                }
                else {
                    OppNumber = data.OppNumber;
                }
                if (data.QuotationNo == undefined) {
                    QuotationNo = '';
                }
                else {
                    QuotationNo = data.QuotationNo;
                }
                //if (data.UserID == undefined) {
                //    UserID = '';
                //}
                //else {
                //    UserID = data.UserID;
                //}
                var config = {
                    params: {
                        CustomerID: CustomerID,
                        OppNumber: OppNumber,
                        QuotationNo: QuotationNo,
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            QuotationlistService.prototype.GetQuotationlist = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        OpportunityID: item.OpportunityID,
                        OpportunitySAPNo: item.OpportunitySAPNo,
                        OpportunityDate: item.OpportunityDate,
                        CustomerID: item.CustomerID,
                        CustomerName: item.CustomerName,
                        OppStatus: item.OppStatus,
                        OppStage: item.OppStage,
                        ModelNo: item.ModelNo,
                        UserID: item.UserID,
                        CreatedBy: item.CreatedBy,
                        QuotationRefernce: item.QuotationRefernce,
                        QuotationDate: item.QuotationDate,
                    });
                }
                return list;
            };
            QuotationlistService.prototype.PDFView = function (data) {
                var config = {
                    params: {
                        QuotationNo: data,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/QuotPDF",
                    Config: config
                });
            };
            QuotationlistService.prototype.GetPDF = function (data) {
                debugger;
                return data;
            };
            QuotationlistService.$inject = ["$http", "$q", "$cookieStore"];
            return QuotationlistService;
        }(GCPL.Service.BaseService));
        Service.QuotationlistService = QuotationlistService;
        app.AddService("QuotationlistService", QuotationlistService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=QuotationListService.js.map