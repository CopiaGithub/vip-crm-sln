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
        var AddToCartDsService = /** @class */ (function (_super) {
            __extends(AddToCartDsService, _super);
            function AddToCartDsService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertDsInCart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            AddToCartDsService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            AddToCartDsService.prototype.PostDeliveryScheduleToCart = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            AddToCartDsService.$inject = ["$http", "$q", "$cookieStore"];
            return AddToCartDsService;
        }(GCPL.Service.BaseService));
        Service.AddToCartDsService = AddToCartDsService;
        app.AddService("AddToCartDsService", AddToCartDsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DScheduleService.js.map