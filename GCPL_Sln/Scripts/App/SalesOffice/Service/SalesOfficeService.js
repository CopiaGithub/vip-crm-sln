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
        var ZoneDDService = /** @class */ (function (_super) {
            __extends(ZoneDDService, _super);
            function ZoneDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ZoneDD";
                return _this;
            }
            ZoneDDService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ZoneDDService.prototype.Getzonenew = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ID: item.ID,
                        ZoneName: item.ZoneName
                    });
                }
                return list;
            };
            ZoneDDService.$inject = ["$http", "$q"];
            return ZoneDDService;
        }(GCPL.Service.BaseService));
        Service.ZoneDDService = ZoneDDService;
        app.AddService("ZoneDDService", ZoneDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//search
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesOfficeListService = /** @class */ (function (_super) {
            __extends(SalesOfficeListService, _super);
            function SalesOfficeListService($http, $q, _cookieStore) {
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
            SalesOfficeListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/SalesOffice";
                var SearchText;
                var Status;
                var Zone;
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
                if (data.Zone == undefined) {
                    Zone = '';
                }
                else {
                    Zone = data.Zone;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        Status: Status,
                        Zone: Zone
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            SalesOfficeListService.prototype.GetSalesOfficeListData = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        SalesOfficeID: item.SalesOfficeID,
                        SalesOffice: item.SalesOffice,
                        SalesOfficeEmail: item.SalesOfficeEmail,
                        ZoneName: item.ZoneName,
                        ZoneID: item.ZoneID,
                        SAPID: item.SAPID,
                        WhenEntered: item.WhenEntered,
                        SOAddress: item.SOAddress,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            SalesOfficeListService.$inject = ["$http", "$q", "$cookieStore"];
            return SalesOfficeListService;
        }(GCPL.Service.BaseService));
        Service.SalesOfficeListService = SalesOfficeListService;
        app.AddService("SalesOfficeListService", SalesOfficeListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertSalesOfficeService = /** @class */ (function (_super) {
            __extends(InsertSalesOfficeService, _super);
            function InsertSalesOfficeService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertSalesOffice";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertSalesOfficeService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertSalesOfficeService.prototype.PostSalesOffice = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertSalesOfficeService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertSalesOfficeService;
        }(GCPL.Service.BaseService));
        Service.InsertSalesOfficeService = InsertSalesOfficeService;
        app.AddService("InsertSalesOfficeService", InsertSalesOfficeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
// Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var SalesOfficeEditService = /** @class */ (function (_super) {
            __extends(SalesOfficeEditService, _super);
            function SalesOfficeEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillSalesOffice";
                return _this;
            }
            SalesOfficeEditService.prototype.Find = function (data) {
                var SalesOfficeID;
                if (data == undefined) {
                    SalesOfficeID = "";
                }
                else {
                    SalesOfficeID = data;
                }
                var config = {
                    params: {
                        SalesOfficeID: SalesOfficeID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesOfficeEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditSalesOfficeModel();
                obj.SalesOfficeID = data.SalesOfficeID,
                    obj.SalesOffice = data.SalesOffice,
                    obj.SalesOfficeEmail = data.SalesOfficeEmail,
                    obj.ZoneID = data.ZoneID,
                    obj.SAPID = data.SAPID,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status,
                    obj.SOAddress1 = data.SOAddress1,
                    obj.SOAddress2 = data.SOAddress2,
                    obj.SOAddress3 = data.SOAddress3,
                    obj.SOAddress4 = data.SOAddress4;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            SalesOfficeEditService.$inject = ["$http", "$q"];
            return SalesOfficeEditService;
        }(GCPL.Service.BaseService));
        Service.SalesOfficeEditService = SalesOfficeEditService;
        app.AddService("SalesOfficeEditService", SalesOfficeEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesOfficeService.js.map