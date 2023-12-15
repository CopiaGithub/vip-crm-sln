//List
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
        var DivisionListService = /** @class */ (function (_super) {
            __extends(DivisionListService, _super);
            function DivisionListService($http, $q, _cookieStore) {
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
            DivisionListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/DivisionList";
                var SearchText;
                var Status;
                var Category;
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
                if (data.Category == undefined) {
                    Category = '';
                }
                else {
                    Category = data.Category;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        Status: Status,
                        Category: Category
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            DivisionListService.prototype.GetDivisionList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        DivisionID: item.DivisionID,
                        Division: item.Division,
                        CategoryID: item.CategoryID,
                        Category: item.Category,
                        Description: item.Description,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive"),
                        DivisionSAPID: item.DivisionSAPID,
                        QuotePrefix: item.QuotePrefix,
                        NoRangeSeries: item.NoRangeSeries
                    });
                }
                return list;
            };
            DivisionListService.$inject = ["$http", "$q", "$cookieStore"];
            return DivisionListService;
        }(GCPL.Service.BaseService));
        Service.DivisionListService = DivisionListService;
        app.AddService("DivisionListService", DivisionListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//category dropdown
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CategoryddService = /** @class */ (function (_super) {
            __extends(CategoryddService, _super);
            function CategoryddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CategoryDD";
                return _this;
            }
            CategoryddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CategoryddService.prototype.GetCategoryName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        CategoryID: item.CategoryID.toString(),
                        Category: item.Category,
                    });
                }
                return list;
            };
            CategoryddService.$inject = ["$http", "$q"];
            return CategoryddService;
        }(GCPL.Service.BaseService));
        Service.CategoryddService = CategoryddService;
        app.AddService("CategoryddService", CategoryddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertDivisionService = /** @class */ (function (_super) {
            __extends(InsertDivisionService, _super);
            function InsertDivisionService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "DivisionMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertDivisionService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertDivisionService.prototype.PostDivision = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertDivisionService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertDivisionService;
        }(GCPL.Service.BaseService));
        Service.InsertDivisionService = InsertDivisionService;
        app.AddService("InsertDivisionService", InsertDivisionService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var DivisionEditService = /** @class */ (function (_super) {
            __extends(DivisionEditService, _super);
            function DivisionEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillDivisionList";
                return _this;
            }
            DivisionEditService.prototype.Find = function (data) {
                var DivisionID;
                if (data == undefined) {
                    DivisionID = "";
                }
                else {
                    DivisionID = data;
                }
                var config = {
                    params: {
                        DivisionID: DivisionID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DivisionEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditDivisionModel();
                obj.DivisionID = data.DivisionID,
                    obj.Division = data.Division,
                    obj.CategoryID = data.CategoryID,
                    obj.Category = data.Category,
                    obj.Description = data.Description,
                    obj.Status = data.Status,
                    obj.divisionSAPID = data.divisionSAPID,
                    obj.QuotePrefix = data.QuotePrefix,
                    obj.NoRangeSeries = data.NoRangeSeries;
                //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
                return obj;
            };
            DivisionEditService.$inject = ["$http", "$q"];
            return DivisionEditService;
        }(GCPL.Service.BaseService));
        Service.DivisionEditService = DivisionEditService;
        app.AddService("DivisionEditService", DivisionEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DivisionMasterService.js.map