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
        var LeadOverrideListService = /** @class */ (function (_super) {
            __extends(LeadOverrideListService, _super);
            function LeadOverrideListService($http, $q, _cookieStore) {
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
            LeadOverrideListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/LeadOverride";
                var LeadID;
                var CustomerName;
                var User;
                var StatusID;
                var SourceID;
                debugger;
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
                if (data.User == undefined) {
                    User = '';
                }
                else {
                    User = data.User;
                }
                var config = {
                    params: {
                        LeadID: LeadID,
                        CustomerName: CustomerName,
                        User: User,
                        StatusID: '',
                        SourceID: ''
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadOverrideListService.prototype.GetLeadOverrideData = function (data) {
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
            LeadOverrideListService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadOverrideListService;
        }(GCPL.Service.BaseService));
        Service.LeadOverrideListService = LeadOverrideListService;
        app.AddService("LeadOverrideListService", LeadOverrideListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadOverrideService.js.map