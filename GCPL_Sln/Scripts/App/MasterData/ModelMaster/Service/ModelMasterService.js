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
//LeadType  dd
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadTypeddService = /** @class */ (function (_super) {
            __extends(LeadTypeddService, _super);
            function LeadTypeddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadTypeDD";
                return _this;
            }
            LeadTypeddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadTypeddService.prototype.GetLeadTypeName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ID: item.ID.toString(),
                        LeadTypeDesc: item.LeadTypeDesc,
                    });
                }
                return list;
            };
            LeadTypeddService.$inject = ["$http", "$q"];
            return LeadTypeddService;
        }(GCPL.Service.BaseService));
        Service.LeadTypeddService = LeadTypeddService;
        app.AddService("LeadTypeddService", LeadTypeddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Product with division dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProductddService = /** @class */ (function (_super) {
            __extends(ProductddService, _super);
            function ProductddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ProductDDNew";
                return _this;
            }
            ProductddService.prototype.Find = function (data) {
                var config = {
                    params: {
                        ProductID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProductddService.prototype.GetProductName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ProductID: item.ProductID.toString(),
                        Product: item.Product,
                        ProductDesc: item.ProductDesc
                    });
                }
                return list;
            };
            ProductddService.$inject = ["$http", "$q"];
            return ProductddService;
        }(GCPL.Service.BaseService));
        Service.ProductddService = ProductddService;
        app.AddService("ProductddService", ProductddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//list
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ModelListService = /** @class */ (function (_super) {
            __extends(ModelListService, _super);
            function ModelListService($http, $q, _cookieStore) {
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
            ModelListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ModelMaster";
                var SearchText;
                var Status;
                var Product;
                var LeadType;
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
                if (data.Product == undefined) {
                    Product = '';
                }
                else {
                    Product = data.Product;
                }
                if (data.LeadType == undefined) {
                    LeadType = '';
                }
                else {
                    LeadType = data.LeadType;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        Status: Status,
                        Product: Product,
                        LeadType: LeadType
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ModelListService.prototype.GetModelList = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        ModelID: item.ModelID,
                        ModelNo: item.ModelNo,
                        ProductID: item.ProductID,
                        Product: item.Product,
                        Description: item.Description,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive"),
                        WhenEntered: item.WhenEntered,
                        Value: item.Value,
                        ID: item.ID,
                        LeadTypeDesc: item.LeadTypeDesc,
                        DivisionID: item.DivisionID
                    });
                }
                return list;
            };
            ModelListService.$inject = ["$http", "$q", "$cookieStore"];
            return ModelListService;
        }(GCPL.Service.BaseService));
        Service.ModelListService = ModelListService;
        app.AddService("ModelListService", ModelListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertModelService = /** @class */ (function (_super) {
            __extends(InsertModelService, _super);
            function InsertModelService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertModelMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertModelService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertModelService.prototype.PostModel = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertModelService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertModelService;
        }(GCPL.Service.BaseService));
        Service.InsertModelService = InsertModelService;
        app.AddService("InsertModelService", InsertModelService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ModelEditService = /** @class */ (function (_super) {
            __extends(ModelEditService, _super);
            function ModelEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillModelList";
                return _this;
            }
            ModelEditService.prototype.Find = function (data) {
                var ModelID;
                if (data == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data;
                }
                var config = {
                    params: {
                        ModelID: ModelID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ModelEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.InsertModelMaster();
                obj.ModelID = data.ModelID,
                    obj.ModelNo = data.ModelNo,
                    obj.ProductID = data.ProductID,
                    obj.Description = data.Description,
                    obj.Status = data.Status,
                    obj.Value = data.Value,
                    obj.leadTypeID = data.LeadTypeID,
                    obj.DivisionID = data.DivisionID,
                    obj.Eligible = data.Eligible;
                //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
                return obj;
            };
            ModelEditService.$inject = ["$http", "$q"];
            return ModelEditService;
        }(GCPL.Service.BaseService));
        Service.ModelEditService = ModelEditService;
        app.AddService("ModelEditService", ModelEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//product dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProductDDLService = /** @class */ (function (_super) {
            __extends(ProductDDLService, _super);
            function ProductDDLService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "Product";
                return _this;
            }
            ProductDDLService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProductDDLService.prototype.GetProduct = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        ProductID: item.ProductID.toString(),
                        Product: item.Product,
                    });
                }
                return list;
            };
            ProductDDLService.$inject = ["$http", "$q"];
            return ProductDDLService;
        }(GCPL.Service.BaseService));
        Service.ProductDDLService = ProductDDLService;
        app.AddService("ProductDDLService", ProductDDLService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ModelMasterService.js.map