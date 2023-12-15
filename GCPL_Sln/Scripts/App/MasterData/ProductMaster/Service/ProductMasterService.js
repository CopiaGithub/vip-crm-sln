//dropdown
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
        var DivisionService = /** @class */ (function (_super) {
            __extends(DivisionService, _super);
            function DivisionService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DropdownList";
                return _this;
            }
            DivisionService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DivisionService.prototype.GetDivisionName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        DivisionID: item.DivisionID.toString(),
                        Division: item.Division,
                    });
                }
                return list;
            };
            DivisionService.$inject = ["$http", "$q"];
            return DivisionService;
        }(GCPL.Service.BaseService));
        Service.DivisionService = DivisionService;
        app.AddService("DivisionService", DivisionService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//list
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProductListService = /** @class */ (function (_super) {
            __extends(ProductListService, _super);
            function ProductListService($http, $q, _cookieStore) {
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
            ProductListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ProductMaster";
                var SearchText;
                var Status;
                var Division;
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
                if (data.Division == undefined) {
                    Division = '';
                }
                else {
                    Division = data.Division;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        Status: Status,
                        Division: Division
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ProductListService.prototype.GetProductList = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ProductID: item.ProductID,
                        Product: item.Product,
                        DivisionID: item.DivisionID,
                        Division: item.Division,
                        Description: item.Description,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            ProductListService.$inject = ["$http", "$q", "$cookieStore"];
            return ProductListService;
        }(GCPL.Service.BaseService));
        Service.ProductListService = ProductListService;
        app.AddService("ProductListService", ProductListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertProductService = /** @class */ (function (_super) {
            __extends(InsertProductService, _super);
            function InsertProductService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertProductMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertProductService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertProductService.prototype.PostProduct = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertProductService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertProductService;
        }(GCPL.Service.BaseService));
        Service.InsertProductService = InsertProductService;
        app.AddService("InsertProductService", InsertProductService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ProductEditService = /** @class */ (function (_super) {
            __extends(ProductEditService, _super);
            function ProductEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillProductList";
                return _this;
            }
            ProductEditService.prototype.Find = function (data) {
                var ProductID;
                if (data == undefined) {
                    ProductID = "";
                }
                else {
                    ProductID = data;
                }
                var config = {
                    params: {
                        ProductID: ProductID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProductEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditProductModel();
                obj.ProductID = data.ProductID,
                    obj.Product = data.Product,
                    obj.DivisionID = data.DivisionID,
                    obj.Division = data.Division,
                    obj.Description = data.Description,
                    obj.Status = data.Status;
                //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
                return obj;
            };
            ProductEditService.$inject = ["$http", "$q"];
            return ProductEditService;
        }(GCPL.Service.BaseService));
        Service.ProductEditService = ProductEditService;
        app.AddService("ProductEditService", ProductEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProductMasterService.js.map