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
        var UploadVRPExcelService = /** @class */ (function (_super) {
            __extends(UploadVRPExcelService, _super);
            function UploadVRPExcelService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                return _this;
                //this.apiUrl = `${this.url}/${"APIPutProductReview"}`;
            }
            UploadVRPExcelService.prototype.UploadImage = function (data) {
                var config = {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                };
                var url = this.url + "/" + "ImageUpload";
                return this.ajaXUtility.Post({
                    Url: url,
                    data: data,
                    Config: config
                });
            };
            UploadVRPExcelService.prototype.postVRPExcelData = function (data) {
                var url = this.url + "/" + "UploadExcelCampaignData";
                return this.ajaXUtility.Post({
                    Url: url,
                    data: data
                });
            };
            //Modify Excel Data Post
            UploadVRPExcelService.prototype.PostModifyExcelData = function (data) {
                var url = this.url + "/" + "ModifyVRPExcel";
                return this.ajaXUtility.Post({
                    Url: url,
                    data: data
                });
            };
            UploadVRPExcelService.$inject = ["$http", "$q"];
            return UploadVRPExcelService;
        }(GCPL.Service.BaseService));
        Service.UploadVRPExcelService = UploadVRPExcelService;
        //inject service
        app.AddService("UploadVRPExcelService", UploadVRPExcelService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UploadExcelService.js.map