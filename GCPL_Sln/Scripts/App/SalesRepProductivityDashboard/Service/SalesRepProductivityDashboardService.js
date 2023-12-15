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
        var SalesRepProductivityListService = /** @class */ (function (_super) {
            __extends(SalesRepProductivityListService, _super);
            function SalesRepProductivityListService($http, $q, _cookieStore) {
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
            SalesRepProductivityListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/SalesRepProductivityList";
                var ZoneID;
                var ProductID;
                var ModelID;
                var UserID;
                var Year;
                var DivisionID;
                var LeadTypeID;
                debugger;
                if (data.ZoneID == undefined) {
                    ZoneID = '';
                }
                else {
                    ZoneID = data.ZoneID;
                }
                if (data.ProductID == undefined) {
                    ProductID = '';
                }
                else {
                    ProductID = data.ProductID;
                }
                if (data.ModelID == undefined) {
                    ModelID = '';
                }
                else {
                    ModelID = data.ModelID;
                }
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.Year == undefined) {
                    Year = '';
                }
                else {
                    Year = data.Year;
                }
                if (data.DivisionID == undefined) {
                    DivisionID = '';
                }
                else {
                    DivisionID = data.DivisionID;
                }
                if (data.LeadTypeID == undefined) {
                    LeadTypeID = '';
                }
                else {
                    LeadTypeID = data.LeadTypeID;
                }
                var config = {
                    params: {
                        ZoneID: ZoneID,
                        ProductID: ProductID,
                        ModelID: ModelID,
                        UserID: UserID,
                        Year: Year,
                        DivisionID: DivisionID,
                        LeadTypeID: LeadTypeID,
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID1: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            SalesRepProductivityListService.prototype.GetSalesRepProductivityList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        Month: item.Month,
                        Model: item.Model,
                        Target: item.Target,
                        Won: item.Won,
                        Lost: item.Lost,
                        NoDeal: item.NoDeal,
                        Open: item.Open,
                        ModelID: item.ModelID,
                        DivisionID: item.DivisionID,
                        Division: item.Division,
                        ProductID: item.ProductID,
                        Product: item.Product,
                        LeadTypeID: item.LeadTypeID,
                        LeadType: item.LeadType,
                        UserID: item.UserID,
                        SalesRep: item.SalesRep,
                        ZoneID: item.ZoneID,
                        Zone: item.Zone,
                        Year: item.Year
                    });
                }
                return list;
            };
            SalesRepProductivityListService.$inject = ["$http", "$q", "$cookieStore"];
            return SalesRepProductivityListService;
        }(GCPL.Service.BaseService));
        Service.SalesRepProductivityListService = SalesRepProductivityListService;
        app.AddService("SalesRepProductivityListService", SalesRepProductivityListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var YearddService = /** @class */ (function (_super) {
            __extends(YearddService, _super);
            function YearddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "YearDD";
                return _this;
            }
            YearddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            YearddService.prototype.GetYearDD = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        YearID: item.YearID,
                        Year: item.Year
                    });
                }
                return list;
            };
            YearddService.$inject = ["$http", "$q"];
            return YearddService;
        }(GCPL.Service.BaseService));
        Service.YearddService = YearddService;
        app.AddService("YearddService", YearddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var MonthddService = /** @class */ (function (_super) {
            __extends(MonthddService, _super);
            function MonthddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "MonthDD";
                return _this;
            }
            MonthddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            MonthddService.prototype.GetMonthDD = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        MonthID: item.MonthID,
                        Month: item.Month
                    });
                }
                return list;
            };
            MonthddService.$inject = ["$http", "$q"];
            return MonthddService;
        }(GCPL.Service.BaseService));
        Service.MonthddService = MonthddService;
        app.AddService("MonthddService", MonthddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Employee dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var EmployeeCodeDDService = /** @class */ (function (_super) {
            __extends(EmployeeCodeDDService, _super);
            function EmployeeCodeDDService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/";
                _this.Cookie = _cookieStore;
                return _this;
            }
            EmployeeCodeDDService.prototype.Find = function () {
                var url = this.apiUrl + "/EmpCodeDD";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            EmployeeCodeDDService.prototype.GetAutoUser = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName
                    });
                }
                return list;
            };
            EmployeeCodeDDService.$inject = ["$http", "$q", "$cookieStore"];
            return EmployeeCodeDDService;
        }(GCPL.Service.BaseService));
        Service.EmployeeCodeDDService = EmployeeCodeDDService;
        //inject service
        app.AddService("EmployeeCodeDDService", EmployeeCodeDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesRepProductivityDashboardService.js.map