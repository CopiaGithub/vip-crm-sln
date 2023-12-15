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
/// <reference path="../../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UploadImageService = /** @class */ (function (_super) {
            __extends(UploadImageService, _super);
            function UploadImageService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                return _this;
                //this.apiUrl = `${this.url}/${"APIPutProductReview"}`;
            }
            UploadImageService.prototype.UploadImage = function (data) {
                console.log(data);
                var config = {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                };
                var url = this.url + "/" + "CtrlCatProductImage";
                return this.ajaXUtility.Post({
                    Url: url,
                    data: data,
                    Config: config
                });
            };
            UploadImageService.$inject = ["$http", "$q"];
            return UploadImageService;
        }(GCPL.Service.BaseService));
        Service.UploadImageService = UploadImageService;
        //inject service
        app.AddService("UploadImageService", UploadImageService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ImageUploadService.js.map