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
        var OtherMachinesGridService = /** @class */ (function (_super) {
            __extends(OtherMachinesGridService, _super);
            function OtherMachinesGridService($http, $q, _cookieStore) {
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
            OtherMachinesGridService.prototype.FindGrid = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "OtherMachine";
                var CustomerName;
                var CompetitorNameID;
                var ProductID;
                var ModelID;
                if (data.CustomerName == undefined) {
                    CustomerName = '';
                }
                else {
                    CustomerName = data.CustomerName;
                }
                if (data.CompetitorNameID == undefined) {
                    CompetitorNameID = '';
                }
                else {
                    CompetitorNameID = data.CompetitorNameID;
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
                var config = {
                    params: {
                        CustomerName: CustomerName,
                        CompetitorNameID: CompetitorNameID,
                        ProductID: ProductID,
                        ModelID: ModelID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            OtherMachinesGridService.prototype.GetOtherMachinesGrid = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        MachineId: item.MachineId,
                        CustomerId: item.CustomerId,
                        CompanyName: item.CompanyName,
                        Manufacturer: item.Manufacturer,
                        Model: item.Model,
                        SrNo: item.SrNo,
                        ProductName: item.ProductName,
                        DateOfPurchase: item.DateOfPurchase,
                        WarrentyEnded: item.WarrentyEnded,
                        NextServicesDueDate: item.NextServicesDueDate,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive"),
                        YearOfManufacture: item.YearOfManufacture,
                        Quantity: item.Quantity,
                        Type: item.Type,
                        ModelID: item.ModelID,
                        OpportunityType: item.OpportunityType,
                        CompitatorName: item.CompitatorName,
                        CompetitorNameID: item.CompetitorNameID
                    });
                }
                return list;
            };
            OtherMachinesGridService.$inject = ["$http", "$q", "$cookieStore"];
            return OtherMachinesGridService;
        }(GCPL.Service.BaseService));
        Service.OtherMachinesGridService = OtherMachinesGridService;
        app.AddService("OtherMachinesGridService", OtherMachinesGridService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var OtherMachineEditService = /** @class */ (function (_super) {
            __extends(OtherMachineEditService, _super);
            function OtherMachineEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillEditList";
                return _this;
            }
            OtherMachineEditService.prototype.Find = function (data) {
                var MachineId;
                if (data == undefined) {
                    MachineId = "";
                }
                else {
                    MachineId = data;
                }
                var config = {
                    params: {
                        MachineId: MachineId
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            OtherMachineEditService.prototype.GetOtherMachineEdit = function (data) {
                var obj = new model.OtherMachinesEditModel();
                obj.MachineId = data.MachineId,
                    obj.CustomerId = data.CustomerId,
                    obj.CompanyName = data.CompanyName,
                    obj.Manufacturer = data.Manufacturer,
                    obj.Model = data.Model,
                    obj.SrNo = data.SrNo,
                    obj.DateOfPurchase = data.DateOfPurchase,
                    obj.WarrentyEnded = data.WarrentyEnded,
                    obj.NextServicesDueDate = data.NextServicesDueDate,
                    obj.Product = data.Product,
                    obj.YearOfManufacture = data.YearOfManufacture,
                    obj.Quantity = data.Quantity,
                    obj.Type = data.Type,
                    obj.CompetitorNameID = data.CompetitorNameID,
                    obj.ModelID = data.ModelID;
                return obj;
            };
            OtherMachineEditService.$inject = ["$http", "$q"];
            return OtherMachineEditService;
        }(GCPL.Service.BaseService));
        Service.OtherMachineEditService = OtherMachineEditService;
        app.AddService("OtherMachineEditService", OtherMachineEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var OtherMachinesInsertService = /** @class */ (function (_super) {
            __extends(OtherMachinesInsertService, _super);
            function OtherMachinesInsertService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertOtherMachine";
                _this.Cookie = _cookieStore;
                return _this;
            }
            OtherMachinesInsertService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            OtherMachinesInsertService.prototype.PostMachineData = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            OtherMachinesInsertService.$inject = ["$http", "$q", "$cookieStore"];
            return OtherMachinesInsertService;
        }(GCPL.Service.BaseService));
        Service.OtherMachinesInsertService = OtherMachinesInsertService;
        app.AddService("OtherMachinesInsertService", OtherMachinesInsertService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProductdService = /** @class */ (function (_super) {
            __extends(ProductdService, _super);
            function ProductdService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "Product";
                return _this;
            }
            ProductdService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProductdService.prototype.GetProductName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ProductID: item.ProductID.toString(),
                        Product: item.Product,
                    });
                }
                return list;
            };
            ProductdService.$inject = ["$http", "$q"];
            return ProductdService;
        }(GCPL.Service.BaseService));
        Service.ProductdService = ProductdService;
        app.AddService("ProductdService", ProductdService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ModelDDService = /** @class */ (function (_super) {
            __extends(ModelDDService, _super);
            function ModelDDService($http, $q, _cookieStore) {
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
            ModelDDService.prototype.Find = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "ModelDD";
                var ProductID;
                if (data == undefined) {
                    ProductID = '';
                }
                else {
                    ProductID = data;
                }
                var config = {
                    params: {
                        ProductID: ProductID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ModelDDService.prototype.GetModelDD = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        ModelID: item.ModelID,
                        ModelNo: item.ModelNo
                    });
                }
                return list;
            };
            ModelDDService.$inject = ["$http", "$q", "$cookieStore"];
            return ModelDDService;
        }(GCPL.Service.BaseService));
        Service.ModelDDService = ModelDDService;
        app.AddService("ModelDDService", ModelDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CompetitorNameService = /** @class */ (function (_super) {
            __extends(CompetitorNameService, _super);
            function CompetitorNameService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CompetitorNameDropdown";
                return _this;
            }
            CompetitorNameService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CompetitorNameService.prototype.GetCompetitorName = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        ID: item.ID,
                        SAPID: item.SAPID,
                        CompitatorName: item.CompitatorName
                    });
                }
                return list;
            };
            CompetitorNameService.$inject = ["$http", "$q"];
            return CompetitorNameService;
        }(GCPL.Service.BaseService));
        Service.CompetitorNameService = CompetitorNameService;
        app.AddService("CompetitorNameService", CompetitorNameService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CompProductDDService = /** @class */ (function (_super) {
            __extends(CompProductDDService, _super);
            function CompProductDDService($http, $q, _cookieStore) {
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
            CompProductDDService.prototype.Find = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "CompitatorProductDD";
                var CompetitorNameID;
                if (data == undefined) {
                    CompetitorNameID = '';
                }
                else {
                    CompetitorNameID = data;
                }
                var config = {
                    params: {
                        SAPID: CompetitorNameID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CompProductDDService.prototype.GetCompProductDD = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        ID: item.ID,
                        OppCompitatorProductFamily: item.OppCompitatorProductFamily
                    });
                }
                return list;
            };
            CompProductDDService.$inject = ["$http", "$q", "$cookieStore"];
            return CompProductDDService;
        }(GCPL.Service.BaseService));
        Service.CompProductDDService = CompProductDDService;
        app.AddService("CompProductDDService", CompProductDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CompModelDDService = /** @class */ (function (_super) {
            __extends(CompModelDDService, _super);
            function CompModelDDService($http, $q, _cookieStore) {
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
            CompModelDDService.prototype.Find = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "CompitatorModelDD";
                var CompProductFamilyID;
                if (data == undefined) {
                    CompProductFamilyID = '';
                }
                else {
                    CompProductFamilyID = data;
                }
                var config = {
                    params: {
                        CompProductFamilyID: CompProductFamilyID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CompModelDDService.prototype.GetCompModelDD = function (data) {
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        ID: item.ID,
                        Model: item.Model
                    });
                }
                return list;
            };
            CompModelDDService.$inject = ["$http", "$q", "$cookieStore"];
            return CompModelDDService;
        }(GCPL.Service.BaseService));
        Service.CompModelDDService = CompModelDDService;
        app.AddService("CompModelDDService", CompModelDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CustomerNameAutoFillService = /** @class */ (function (_super) {
            __extends(CustomerNameAutoFillService, _super);
            function CustomerNameAutoFillService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CustomerNameAutoFill";
                _this.Cookie = _cookieStore;
                return _this;
            }
            CustomerNameAutoFillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            CustomerNameAutoFillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/CustomerNameAutoFill";
                debugger;
                var config = {
                    params: {
                        CustomerName: data.term
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CustomerNameAutoFillService.prototype.GetAutoCustomer = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CompanyName: item.CompanyName
                    });
                }
                return list;
            };
            CustomerNameAutoFillService.$inject = ["$http", "$q", "$cookieStore"];
            return CustomerNameAutoFillService;
        }(GCPL.Service.BaseService));
        Service.CustomerNameAutoFillService = CustomerNameAutoFillService;
        //inject service
        app.AddService("CustomerNameAutoFillService", CustomerNameAutoFillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Delete Competitor 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteCompetitorService = /** @class */ (function (_super) {
            __extends(DeleteCompetitorService, _super);
            function DeleteCompetitorService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteCompetitor";
                return _this;
            }
            DeleteCompetitorService.prototype.Find = function (data) {
                var config = {
                    params: {
                        MachineId: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteCompetitorService.prototype.postCompetitorDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteCompetitorService.$inject = ["$http", "$q"];
            return DeleteCompetitorService;
        }(GCPL.Service.BaseService));
        Service.DeleteCompetitorService = DeleteCompetitorService;
        app.AddService("DeleteCompetitorService", DeleteCompetitorService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=OtherMachineService.js.map