//Insert
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
        var InsertUploadCampaignService = /** @class */ (function (_super) {
            __extends(InsertUploadCampaignService, _super);
            function InsertUploadCampaignService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UploadCampaignData";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertUploadCampaignService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertUploadCampaignService.prototype.PostUploadCamp = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertUploadCampaignService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertUploadCampaignService;
        }(GCPL.Service.BaseService));
        Service.InsertUploadCampaignService = InsertUploadCampaignService;
        app.AddService("InsertUploadCampaignService", InsertUploadCampaignService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//List
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UploadCampService = /** @class */ (function (_super) {
            __extends(UploadCampService, _super);
            function UploadCampService($http, $q, _cookieStore) {
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
            UploadCampService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetUploadCampaignList";
                var SearchText;
                debugger;
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                var config = {
                    params: {
                        SearchText: SearchText
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            UploadCampService.prototype.GetUpCampList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CampaignID: item.CampaignID,
                        CampaignName: item.CampaignName,
                        Description: item.Description,
                        SAPID: item.SAPID,
                        LeadSourceID: item.LeadSourceID,
                        StartDate: item.StartDate,
                        EndDate: item.EndDate,
                        Status: ((item.Status == "True") ? "Active" : "Inactive"),
                        LeadSource: item.LeadSource,
                        WhenEntered: item.WhenEntered
                    });
                }
                return list;
            };
            UploadCampService.$inject = ["$http", "$q", "$cookieStore"];
            return UploadCampService;
        }(GCPL.Service.BaseService));
        Service.UploadCampService = UploadCampService;
        app.AddService("UploadCampService", UploadCampService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//CampaignName dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CampaignddService = /** @class */ (function (_super) {
            __extends(CampaignddService, _super);
            function CampaignddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CampaignNameDD";
                return _this;
            }
            CampaignddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CampaignddService.prototype.GetCampaignName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        CampaignID: item.CampaignID.toString(),
                        CampaignName: item.CampaignName,
                    });
                }
                return list;
            };
            CampaignddService.$inject = ["$http", "$q"];
            return CampaignddService;
        }(GCPL.Service.BaseService));
        Service.CampaignddService = CampaignddService;
        app.AddService("CampaignddService", CampaignddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UploadCampaignDataSevice.js.map