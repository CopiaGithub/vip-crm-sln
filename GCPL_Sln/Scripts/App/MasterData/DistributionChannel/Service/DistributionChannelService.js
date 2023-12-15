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
        var DistributionChannelService = /** @class */ (function (_super) {
            __extends(DistributionChannelService, _super);
            function DistributionChannelService($http, $q, _cookieStore) {
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
            DistributionChannelService.prototype.Find = function (data) {
                var url = this.apiUrl + "/DistributionChannel";
                var SearchText;
                var Status;
                debugger;
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                if (data.Status == undefined) {
                    Status = '';
                }
                else {
                    Status = data.Status;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        Status: Status
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            DistributionChannelService.prototype.GetDistributionChannelData = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        DistributionChannelID: item.DistributionChannelID,
                        DistributionChannel: item.DistributionChannel,
                        SAPID: item.SAPID,
                        WhenEntered: item.WhenEntered,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            DistributionChannelService.$inject = ["$http", "$q", "$cookieStore"];
            return DistributionChannelService;
        }(GCPL.Service.BaseService));
        Service.DistributionChannelService = DistributionChannelService;
        app.AddService("DistributionChannelService", DistributionChannelService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertDistributionChannelService = /** @class */ (function (_super) {
            __extends(InsertDistributionChannelService, _super);
            function InsertDistributionChannelService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertDistributionChannel";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertDistributionChannelService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertDistributionChannelService.prototype.PostDistributionChannel = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertDistributionChannelService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertDistributionChannelService;
        }(GCPL.Service.BaseService));
        Service.InsertDistributionChannelService = InsertDistributionChannelService;
        app.AddService("InsertDistributionChannelService", InsertDistributionChannelService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var DistributionChannelEditService = /** @class */ (function (_super) {
            __extends(DistributionChannelEditService, _super);
            function DistributionChannelEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillDistributionChannel";
                return _this;
            }
            DistributionChannelEditService.prototype.Find = function (data) {
                var DistributionChannelID;
                if (data == undefined) {
                    DistributionChannelID = "";
                }
                else {
                    DistributionChannelID = data;
                }
                var config = {
                    params: {
                        DistributionChannelID: DistributionChannelID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DistributionChannelEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditDistributionChannelModel();
                obj.DistributionChannelID = data.DistributionChannelID,
                    obj.DistributionChannel = data.DistributionChannel,
                    obj.SAPID = data.SAPID,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            DistributionChannelEditService.$inject = ["$http", "$q"];
            return DistributionChannelEditService;
        }(GCPL.Service.BaseService));
        Service.DistributionChannelEditService = DistributionChannelEditService;
        app.AddService("DistributionChannelEditService", DistributionChannelEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DistributionChannelService.js.map