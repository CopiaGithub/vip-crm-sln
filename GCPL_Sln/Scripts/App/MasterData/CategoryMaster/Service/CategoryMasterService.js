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
        var CatListService = /** @class */ (function (_super) {
            __extends(CatListService, _super);
            function CatListService($http, $q, _cookieStore) {
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
            CatListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CategoryMaster";
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
            CatListService.prototype.GetCategoryList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        Description: item.Description,
                        CategoryID: item.CategoryID,
                        Category: item.Category,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            CatListService.$inject = ["$http", "$q", "$cookieStore"];
            return CatListService;
        }(GCPL.Service.BaseService));
        Service.CatListService = CatListService;
        app.AddService("CatListService", CatListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CategoryEditService = /** @class */ (function (_super) {
            __extends(CategoryEditService, _super);
            function CategoryEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillCategoryList";
                return _this;
            }
            CategoryEditService.prototype.Find = function (data) {
                var CategoryID;
                if (data == undefined) {
                    CategoryID = "";
                }
                else {
                    CategoryID = data;
                }
                var config = {
                    params: {
                        CategoryID: CategoryID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CategoryEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditCatlistModel();
                obj.CategoryID = data.CategoryID,
                    obj.Category = data.Category,
                    obj.Description = data.Description,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            CategoryEditService.$inject = ["$http", "$q"];
            return CategoryEditService;
        }(GCPL.Service.BaseService));
        Service.CategoryEditService = CategoryEditService;
        app.AddService("CategoryEditService", CategoryEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertCategoryService = /** @class */ (function (_super) {
            __extends(InsertCategoryService, _super);
            function InsertCategoryService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertCategoryMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertCategoryService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertCategoryService.prototype.PostCategory = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertCategoryService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertCategoryService;
        }(GCPL.Service.BaseService));
        Service.InsertCategoryService = InsertCategoryService;
        app.AddService("InsertCategoryService", InsertCategoryService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CategoryMasterService.js.map