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
        var SalesOrgDDService = /** @class */ (function (_super) {
            __extends(SalesOrgDDService, _super);
            function SalesOrgDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "SalesOrgDD";
                return _this;
            }
            SalesOrgDDService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            SalesOrgDDService.prototype.GetSalesOrgnew = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    debugger;
                    list.push({
                        SalesOrgID: item.SalesOrgID,
                        SalesOrg: item.SalesOrg
                    });
                }
                return list;
            };
            SalesOrgDDService.$inject = ["$http", "$q"];
            return SalesOrgDDService;
        }(GCPL.Service.BaseService));
        Service.SalesOrgDDService = SalesOrgDDService;
        app.AddService("SalesOrgDDService", SalesOrgDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//distribution dropdown
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DistributionChannelDDService = /** @class */ (function (_super) {
            __extends(DistributionChannelDDService, _super);
            function DistributionChannelDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DistributionChannelDD";
                return _this;
            }
            DistributionChannelDDService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            DistributionChannelDDService.prototype.GetDistributionChannelDDnew = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    debugger;
                    list.push({
                        DistributionChannelID: item.DistributionChannelID,
                        DistributionChannel: item.DistributionChannel
                    });
                }
                return list;
            };
            DistributionChannelDDService.$inject = ["$http", "$q"];
            return DistributionChannelDDService;
        }(GCPL.Service.BaseService));
        Service.DistributionChannelDDService = DistributionChannelDDService;
        app.AddService("DistributionChannelDDService", DistributionChannelDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//bUSINESS/Customer dropdown
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CustomerDivisionDDService = /** @class */ (function (_super) {
            __extends(CustomerDivisionDDService, _super);
            function CustomerDivisionDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CustomerDivisionDD";
                return _this;
            }
            CustomerDivisionDDService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            CustomerDivisionDDService.prototype.GetCustomerDivisionDDnew = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    debugger;
                    list.push({
                        CustomerDivisionID: item.CustomerDivisionID,
                        CustomerDivision: item.CustomerDivision
                    });
                }
                return list;
            };
            CustomerDivisionDDService.$inject = ["$http", "$q"];
            return CustomerDivisionDDService;
        }(GCPL.Service.BaseService));
        Service.CustomerDivisionDDService = CustomerDivisionDDService;
        app.AddService("CustomerDivisionDDService", CustomerDivisionDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Search
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesAreaListService = /** @class */ (function (_super) {
            __extends(SalesAreaListService, _super);
            function SalesAreaListService($http, $q, _cookieStore) {
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
            SalesAreaListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/SalesAreaMaster";
                //var SearchText;
                var Status;
                debugger;
                //if (data.SearchText == undefined) {
                //    SearchText = '';
                //}
                //else {
                //    SearchText = data.SearchText;
                //}
                if (data.Status == undefined) {
                    Status = '';
                }
                else {
                    Status = data.Status;
                }
                var config = {
                    params: {
                        //SearchText: SearchText,
                        Status: Status
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            SalesAreaListService.prototype.GetSalesAreaListData = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        SalesAreaID: item.SalesAreaID,
                        SalesOrg: item.SalesOrg,
                        CustomerDivision: item.CustomerDivision,
                        DistributionChannel: item.DistributionChannel,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            SalesAreaListService.$inject = ["$http", "$q", "$cookieStore"];
            return SalesAreaListService;
        }(GCPL.Service.BaseService));
        Service.SalesAreaListService = SalesAreaListService;
        app.AddService("SalesAreaListService", SalesAreaListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertSalesAreaService = /** @class */ (function (_super) {
            __extends(InsertSalesAreaService, _super);
            function InsertSalesAreaService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertSalesArea";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertSalesAreaService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertSalesAreaService.prototype.PostSalesArea = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertSalesAreaService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertSalesAreaService;
        }(GCPL.Service.BaseService));
        Service.InsertSalesAreaService = InsertSalesAreaService;
        app.AddService("InsertSalesAreaService", InsertSalesAreaService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var SalesAreaEditService = /** @class */ (function (_super) {
            __extends(SalesAreaEditService, _super);
            function SalesAreaEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillSalesArea";
                return _this;
            }
            SalesAreaEditService.prototype.Find = function (data) {
                var SalesAreaID;
                if (data == undefined) {
                    SalesAreaID = "";
                }
                else {
                    SalesAreaID = data;
                }
                var config = {
                    params: {
                        SalesAreaID: SalesAreaID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesAreaEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditSalesAreaModel();
                obj.SalesAreaID = data.SalesAreaID,
                    obj.SalesOrgID = data.SalesOrgID,
                    obj.DistributionChannelID = data.DistributionChannelID,
                    obj.CustomerDivisionID = data.CustomerDivisionID,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            SalesAreaEditService.$inject = ["$http", "$q"];
            return SalesAreaEditService;
        }(GCPL.Service.BaseService));
        Service.SalesAreaEditService = SalesAreaEditService;
        app.AddService("SalesAreaEditService", SalesAreaEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesAreaDataService.js.map