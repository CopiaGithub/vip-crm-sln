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
//Report List 
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var QuotationReportlistService = /** @class */ (function (_super) {
            __extends(QuotationReportlistService, _super);
            function QuotationReportlistService($http, $q, _cookieStore) {
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
            QuotationReportlistService.prototype.Find = function (data) {
                var url = this.apiUrl + "/QuotationReport";
                var CustomerID;
                var ModelID;
                var CreatedBy;
                //var UserID;
                if (data.CustomerID == undefined) {
                    CustomerID = '';
                }
                else {
                    CustomerID = data.CustomerID;
                }
                if (data.ModelID == undefined) {
                    ModelID = '';
                }
                else {
                    ModelID = data.ModelID;
                }
                if (data.CreatedBy == undefined) {
                    CreatedBy = '';
                }
                else {
                    CreatedBy = data.CreatedBy;
                }
                var config = {
                    params: {
                        CustomerID: CustomerID,
                        ModelID: ModelID,
                        CreatedBy: CreatedBy,
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            QuotationReportlistService.prototype.GetQuotelist = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        OpportunityNo: item.OpportunityNo,
                        ModelID: item.ModelID,
                        CreationDate: item.CreationDate,
                        CustomerName: item.CustomerName,
                        OppStatus: item.OppStatus,
                        OppStage: item.OppStage,
                        ModelNo: item.ModelNo,
                        UserID: item.UserID,
                        CreatedBy: item.CreatedBy,
                        QuotationRefernce: item.QuotationRefernce,
                        QuotationDate: item.QuotationDate,
                        CustomerID: item.CustomerID
                    });
                }
                return list;
            };
            QuotationReportlistService.$inject = ["$http", "$q", "$cookieStore"];
            return QuotationReportlistService;
        }(GCPL.Service.BaseService));
        Service.QuotationReportlistService = QuotationReportlistService;
        app.AddService("QuotationReportlistService", QuotationReportlistService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Model No Autofill
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ModelAutoFillService = /** @class */ (function (_super) {
            __extends(ModelAutoFillService, _super);
            function ModelAutoFillService($http, $q, _cookieStore) {
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
            ModelAutoFillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ModelAutoFillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/FillModelNo";
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
            ModelAutoFillService.prototype.GetAutoModel = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ModelID: item.ModelID.toString(),
                        ModelNo: item.ModelNo
                    });
                }
                return list;
            };
            ModelAutoFillService.$inject = ["$http", "$q", "$cookieStore"];
            return ModelAutoFillService;
        }(GCPL.Service.BaseService));
        Service.ModelAutoFillService = ModelAutoFillService;
        //inject service
        app.AddService("ModelAutoFillService", ModelAutoFillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=QuotationReportService.js.map