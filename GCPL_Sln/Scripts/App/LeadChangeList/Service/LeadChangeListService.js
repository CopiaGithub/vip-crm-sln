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
//search
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadChangeListService = /** @class */ (function (_super) {
            __extends(LeadChangeListService, _super);
            function LeadChangeListService($http, $q, _cookieStore) {
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
            LeadChangeListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/LeadChangeList";
                var LeadID;
                var CustomerName;
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.CustomerName == undefined) {
                    CustomerName = '';
                }
                else {
                    CustomerName = data.CustomerName;
                }
                var config = {
                    params: {
                        LeadID: LeadID,
                        CustomerName: CustomerName,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadChangeListService.prototype.GetLeadChangeData = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadID: item.LeadID,
                        CompanyName: item.CompanyName,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        Quantity: item.Quantity,
                        Title: item.Title,
                        FirstName: item.FirstName,
                        Status: item.Status,
                        SourceID: item.SourceID,
                        WhenEntered: item.WhenEntered,
                        LeadSource: item.LeadSource
                    });
                }
                return list;
            };
            LeadChangeListService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadChangeListService;
        }(GCPL.Service.BaseService));
        Service.LeadChangeListService = LeadChangeListService;
        app.AddService("LeadChangeListService", LeadChangeListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadChangeListService.js.map