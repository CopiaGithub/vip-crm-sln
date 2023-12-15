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
//LeadCategory dd
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadCategoryDDService = /** @class */ (function (_super) {
            __extends(LeadCategoryDDService, _super);
            function LeadCategoryDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadCategoryDD";
                return _this;
            }
            LeadCategoryDDService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadCategoryDDService.prototype.GetLeadCategoryName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadCategoryID: item.LeadCategoryID.toString(),
                        LeadCategory: item.LeadCategory,
                    });
                }
                return list;
            };
            LeadCategoryDDService.$inject = ["$http", "$q"];
            return LeadCategoryDDService;
        }(GCPL.Service.BaseService));
        Service.LeadCategoryDDService = LeadCategoryDDService;
        app.AddService("LeadCategoryDDService", LeadCategoryDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Search
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesAreaDeterminationListService = /** @class */ (function (_super) {
            __extends(SalesAreaDeterminationListService, _super);
            function SalesAreaDeterminationListService($http, $q, _cookieStore) {
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
            SalesAreaDeterminationListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/SalesAreaDetermination";
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
            SalesAreaDeterminationListService.prototype.GetSalesAreaDeterminationListData = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        SalesAreaDeterminationID: item.SalesAreaDeterminationID,
                        SalesOrg: item.SalesOrg,
                        DistributionChannel: item.DistributionChannel,
                        CustomerDivision: item.CustomerDivision,
                        CountryID: ((item.CountryID == "0") ? "Export" : "Domestic"),
                        Category: item.Category,
                        LeadCategory: item.LeadCategory,
                        LeadTypeDesc: item.LeadTypeDesc,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            SalesAreaDeterminationListService.$inject = ["$http", "$q", "$cookieStore"];
            return SalesAreaDeterminationListService;
        }(GCPL.Service.BaseService));
        Service.SalesAreaDeterminationListService = SalesAreaDeterminationListService;
        app.AddService("SalesAreaDeterminationListService", SalesAreaDeterminationListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertSalesAreaDeterminationService = /** @class */ (function (_super) {
            __extends(InsertSalesAreaDeterminationService, _super);
            function InsertSalesAreaDeterminationService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertSalesAreaDetermination";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertSalesAreaDeterminationService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertSalesAreaDeterminationService.prototype.PostSalesAreaDetermination = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertSalesAreaDeterminationService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertSalesAreaDeterminationService;
        }(GCPL.Service.BaseService));
        Service.InsertSalesAreaDeterminationService = InsertSalesAreaDeterminationService;
        app.AddService("InsertSalesAreaDeterminationService", InsertSalesAreaDeterminationService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var SalesAreaDeterminationEditService = /** @class */ (function (_super) {
            __extends(SalesAreaDeterminationEditService, _super);
            function SalesAreaDeterminationEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillSalesAreaDetermination";
                return _this;
            }
            SalesAreaDeterminationEditService.prototype.Find = function (data) {
                var SalesAreaDeterminationID;
                if (data == undefined) {
                    SalesAreaDeterminationID = "";
                }
                else {
                    SalesAreaDeterminationID = data;
                }
                var config = {
                    params: {
                        SalesAreaDeterminationID: SalesAreaDeterminationID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesAreaDeterminationEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditSalesAreaDeterminationModel();
                obj.SalesAreaID = data.SalesAreaID,
                    obj.SalesAreaDeterminationID = data.SalesAreaDeterminationID,
                    obj.CountryID = data.CountryID,
                    obj.CategoryID = data.CategoryID,
                    obj.LeadCategoryID = data.LeadCategoryID,
                    obj.ID = data.ID,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            SalesAreaDeterminationEditService.$inject = ["$http", "$q"];
            return SalesAreaDeterminationEditService;
        }(GCPL.Service.BaseService));
        Service.SalesAreaDeterminationEditService = SalesAreaDeterminationEditService;
        app.AddService("SalesAreaDeterminationEditService", SalesAreaDeterminationEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesAreaDeterminationService.js.map