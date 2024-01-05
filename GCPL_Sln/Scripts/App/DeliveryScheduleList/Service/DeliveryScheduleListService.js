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
        var DeliveryScheduleListReportService = /** @class */ (function (_super) {
            __extends(DeliveryScheduleListReportService, _super);
            function DeliveryScheduleListReportService($http, $q, _cookieStore) {
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
            DeliveryScheduleListReportService.prototype.FindGrid = function (data) {
                var url = this.apiUrl + "/DeliveryScheduleListReport";
                //let config = {
                //    params: {
                //        // UserID: this.Cookie.get('UserInfo')['UserID'],
                //        ItemID: data
                //    }
                //};
                //return this.ajaXUtility.Get({
                //    Url: url,
                //    Config: config
                //});
                var FromDate;
                var ToDate;
                var DsID;
                var LeadID;
                var ProductID;
                var CustomerID;
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
                if (data.DsID == undefined) {
                    DsID = '';
                }
                else {
                    DsID = data.DsID;
                }
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.ProductID == undefined) {
                    ProductID = '';
                }
                else {
                    ProductID = data.ProductID;
                }
                if (data.CustomerID == undefined) {
                    CustomerID = '';
                }
                else {
                    CustomerID = data.CustomerID;
                }
                var config = {
                    params: {
                        FromDate: FromDate,
                        ToDate: ToDate,
                        DsID: DsID,
                        LeadID: LeadID,
                        ProductID: ProductID,
                        CustomerID: CustomerID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            DeliveryScheduleListReportService.prototype.GetDeliveryScheduleListReport = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ID: item.ID,
                        LeadID: item.LeadID,
                        ItemID: item.ItemID,
                        DSNO: item.DSNO,
                        CustomerName: item.CustomerName,
                        UserID: item.UserID,
                        ItemQty: item.ItemQty,
                        DeliveryDate: item.DeliveryDate,
                        DeliveryQty: item.DeliveryQty,
                        ProductID: item.ProductID,
                        ProductCode: item.ProductCode,
                        ProductDesc: item.ProductDesc
                    });
                }
                return list;
            };
            DeliveryScheduleListReportService.prototype.DownloadGrid = function (data) {
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
            DeliveryScheduleListReportService.prototype.DownloadDeliveryScheduleListReport = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ID: item.ID,
                        LeadID: item.LeadID,
                        ItemID: item.ItemID,
                        DSNO: item.DSNO,
                        CustomerName: item.CustomerName,
                        UserID: item.UserID,
                        ItemQty: item.ItemQty,
                        DeliveryDate: item.DeliveryDate,
                        DeliveryQty: item.DeliveryQty,
                        ProductID: item.ProductID,
                        ProductCode: item.ProductCode,
                        ProductDesc: item.ProductDesc
                    });
                }
                return list;
            };
            DeliveryScheduleListReportService.$inject = ["$http", "$q", "$cookieStore"];
            return DeliveryScheduleListReportService;
        }(GCPL.Service.BaseService));
        Service.DeliveryScheduleListReportService = DeliveryScheduleListReportService;
        app.AddService("DeliveryScheduleListReportService", DeliveryScheduleListReportService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DeliveryScheduleListService.js.map