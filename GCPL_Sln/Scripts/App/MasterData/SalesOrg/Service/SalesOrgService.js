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
        var SalesOrgListService = /** @class */ (function (_super) {
            __extends(SalesOrgListService, _super);
            function SalesOrgListService($http, $q, _cookieStore) {
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
            SalesOrgListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/SalesOrg";
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
            SalesOrgListService.prototype.GetSalesOrgListData = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        SalesOrgID: item.SalesOrgID,
                        SalesOrg: item.SalesOrg,
                        SAPID: item.SAPID,
                        WhenEntered: item.WhenEntered,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            SalesOrgListService.$inject = ["$http", "$q", "$cookieStore"];
            return SalesOrgListService;
        }(GCPL.Service.BaseService));
        Service.SalesOrgListService = SalesOrgListService;
        app.AddService("SalesOrgListService", SalesOrgListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertSalesOrgService = /** @class */ (function (_super) {
            __extends(InsertSalesOrgService, _super);
            function InsertSalesOrgService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertSalesOrg";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertSalesOrgService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertSalesOrgService.prototype.PostSalesOrg = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertSalesOrgService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertSalesOrgService;
        }(GCPL.Service.BaseService));
        Service.InsertSalesOrgService = InsertSalesOrgService;
        app.AddService("InsertSalesOrgService", InsertSalesOrgService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
// Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var SalesOrgEditService = /** @class */ (function (_super) {
            __extends(SalesOrgEditService, _super);
            function SalesOrgEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillSalesOrg";
                return _this;
            }
            SalesOrgEditService.prototype.Find = function (data) {
                var SalesOrgID;
                if (data == undefined) {
                    SalesOrgID = "";
                }
                else {
                    SalesOrgID = data;
                }
                var config = {
                    params: {
                        SalesOrgID: SalesOrgID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesOrgEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditSalesOrgModel();
                obj.SalesOrgID = data.SalesOrgID,
                    obj.SalesOrg = data.SalesOrg,
                    obj.SAPID = data.SAPID,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            SalesOrgEditService.$inject = ["$http", "$q"];
            return SalesOrgEditService;
        }(GCPL.Service.BaseService));
        Service.SalesOrgEditService = SalesOrgEditService;
        app.AddService("SalesOrgEditService", SalesOrgEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesOrgService.js.map