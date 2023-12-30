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
        var LeadItemListDSEditService = /** @class */ (function (_super) {
            __extends(LeadItemListDSEditService, _super);
            function LeadItemListDSEditService($http, $q, _cookieStore) {
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
            LeadItemListDSEditService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ItemListDSCreated";
                var config = {
                    params: {
                        // UserID: this.Cookie.get('UserInfo')['UserID'],
                        LeadID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadItemListDSEditService.prototype.GetLeadItemListDSEdit = function (data) {
                var List = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    List.push({
                        LeadID: item.LeadID,
                        ItemID: item.ItemID,
                        ProductDesc: item.ProductDesc,
                        Quantity: item.Quantity,
                        Status: item.Status,
                        ModelID: item.ModelID,
                        ItemStatus: item.ItemStatus,
                        ItemCode: item.ProductCode,
                        MRPUnit: item.MRPUnit,
                        GST: item.GST,
                        NetAmount: item.NetAmount,
                        DeliveryStatus: item.DeliveryStatus
                    });
                }
                return List;
            };
            LeadItemListDSEditService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadItemListDSEditService;
        }(GCPL.Service.BaseService));
        Service.LeadItemListDSEditService = LeadItemListDSEditService;
        app.AddService("LeadItemListDSEditService", LeadItemListDSEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeliveryScheduleEditService = /** @class */ (function (_super) {
            __extends(DeliveryScheduleEditService, _super);
            function DeliveryScheduleEditService($http, $q, _cookieStore) {
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
            DeliveryScheduleEditService.prototype.Find = function (data) {
                var url = this.apiUrl + "/DeliveryScheduleListCreated";
                var config = {
                    params: {
                        // UserID: this.Cookie.get('UserInfo')['UserID'],
                        ItemID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            DeliveryScheduleEditService.prototype.GetLeadItemDSEditList = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ID: item.ID,
                        ItemID: item.ItemID,
                        ProductID: item.ProductID,
                        ProductCode: item.ProductCode,
                        ProductDesc: item.ProductDesc,
                        UserID: item.UserID,
                        LeadID: item.LeadID,
                        DeliveryDate: item.DeliveryDate,
                        DeliveryQty: item.DeliveryQty,
                        EditState: item.EditState
                    });
                }
                return list;
            };
            DeliveryScheduleEditService.$inject = ["$http", "$q", "$cookieStore"];
            return DeliveryScheduleEditService;
        }(GCPL.Service.BaseService));
        Service.DeliveryScheduleEditService = DeliveryScheduleEditService;
        app.AddService("DeliveryScheduleEditService", DeliveryScheduleEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DeliveryScheduleEditService.js.map