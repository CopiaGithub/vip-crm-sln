//Insert Target
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
        var InsertTargetService = /** @class */ (function (_super) {
            __extends(InsertTargetService, _super);
            function InsertTargetService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertTarget";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertTargetService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertTargetService.prototype.PostTarget = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertTargetService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertTargetService;
        }(GCPL.Service.BaseService));
        Service.InsertTargetService = InsertTargetService;
        app.AddService("InsertTargetService", InsertTargetService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//TargetList
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var TargetListService = /** @class */ (function (_super) {
            __extends(TargetListService, _super);
            function TargetListService($http, $q, _cookieStore) {
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
            TargetListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/TargetList";
                var ID;
                var ZoneID;
                var DivisionID;
                var ProductID;
                var ModelID;
                var UserID;
                var Year;
                var Month;
                debugger;
                if (data.ID == undefined) {
                    ID = '';
                }
                else {
                    ID = data.ID;
                }
                if (data.ZoneID == undefined) {
                    ZoneID = '';
                }
                else {
                    ZoneID = data.ZoneID;
                }
                if (data.DivisionID == undefined) {
                    DivisionID = '';
                }
                else {
                    DivisionID = data.DivisionID;
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
                if (data.Month == undefined) {
                    Month = '';
                }
                else {
                    Month = data.Month;
                }
                var config = {
                    params: {
                        LeadTypeID: ID,
                        ZoneID: ZoneID,
                        DivisionID: DivisionID,
                        ProductID: ProductID,
                        ModelID: ModelID,
                        UserID: UserID,
                        Year: Year,
                        Month: Month
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            TargetListService.prototype.GetTargetList = function (data) {
                var list = Array();
                debugger;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        TargetID: item.TargetID,
                        LeadTypeDesc: item.LeadTypeDesc,
                        Division: item.Division,
                        Zone: item.Zone,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        FirstName: item.FirstName,
                        Year: item.Year,
                        Month: item.Month,
                        Quantity: item.Quantity,
                        EmpCode: item.EmpCode,
                        TotalCount: item.TotalCount
                        //IsActive: ((item.Status == "True") ? "Active" : "Inactive"),
                    });
                }
                return list;
            };
            TargetListService.$inject = ["$http", "$q", "$cookieStore"];
            return TargetListService;
        }(GCPL.Service.BaseService));
        Service.TargetListService = TargetListService;
        app.AddService("TargetListService", TargetListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//EditTarget
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var TargetEditService = /** @class */ (function (_super) {
            __extends(TargetEditService, _super);
            function TargetEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillTargetList";
                return _this;
            }
            TargetEditService.prototype.Find = function (data) {
                var TargetID;
                if (data == undefined) {
                    TargetID = "";
                }
                else {
                    TargetID = data;
                }
                var config = {
                    params: {
                        TargetID: TargetID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            TargetEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditTargetModel();
                obj.TargetID = data.TargetID,
                    obj.ID = data.ID,
                    obj.LeadTypeDesc = data.LeadTypeDesc,
                    obj.Division = data.Division,
                    obj.DivisionID = data.DivisionID,
                    obj.ProductID = data.ProductID,
                    obj.Product = data.Product,
                    obj.ModelID = data.ModelID,
                    obj.ModelNo = data.ModelNo,
                    obj.Zone = data.Zone,
                    obj.ZoneID = data.ZoneID,
                    obj.UserID = data.UserID,
                    obj.FirstName = data.FirstName,
                    obj.Year = data.Year,
                    obj.YearID = data.YearID,
                    obj.MonthID = data.MonthID,
                    obj.Month = data.Month,
                    obj.Quantity = data.Quantity;
                //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
                return obj;
            };
            TargetEditService.$inject = ["$http", "$q"];
            return TargetEditService;
        }(GCPL.Service.BaseService));
        Service.TargetEditService = TargetEditService;
        app.AddService("TargetEditService", TargetEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Zone Wise  User DDl
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ZoneWiseEMPUserService = /** @class */ (function (_super) {
            __extends(ZoneWiseEMPUserService, _super);
            function ZoneWiseEMPUserService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ZoneWiseEmployee";
                return _this;
            }
            ZoneWiseEMPUserService.prototype.Find = function (data) {
                var config = {
                    params: {
                        ZoneID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ZoneWiseEMPUserService.prototype.GetUserName = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        UserID: item.UserID.toString(),
                        FirstName: item.FirstName,
                    });
                }
                return list;
            };
            ZoneWiseEMPUserService.$inject = ["$http", "$q"];
            return ZoneWiseEMPUserService;
        }(GCPL.Service.BaseService));
        Service.ZoneWiseEMPUserService = ZoneWiseEMPUserService;
        app.AddService("ZoneWiseEMPUserService", ZoneWiseEMPUserService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//OpportunityType DDl
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var OpportunityTypeService = /** @class */ (function (_super) {
            __extends(OpportunityTypeService, _super);
            function OpportunityTypeService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "OpportunityTypeModel";
                return _this;
            }
            OpportunityTypeService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            OpportunityTypeService.prototype.GetopportunityType = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        ID: item.ID.toString(),
                        OpportunityType: item.OpportunityType
                    });
                }
                return list;
            };
            OpportunityTypeService.$inject = ["$http", "$q"];
            return OpportunityTypeService;
        }(GCPL.Service.BaseService));
        Service.OpportunityTypeService = OpportunityTypeService;
        app.AddService("OpportunityTypeService", OpportunityTypeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//LeadType And product wise model 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadTypeProductService = /** @class */ (function (_super) {
            __extends(LeadTypeProductService, _super);
            function LeadTypeProductService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadTypeProductModel";
                return _this;
            }
            LeadTypeProductService.prototype.Find = function (data) {
                var ID;
                var ProductID;
                var DivisionID;
                if (data.ID == ID) {
                    ID = "";
                }
                else {
                    ID = data.ID;
                }
                if (data.ProductID == undefined) {
                    ProductID = "";
                }
                else {
                    ProductID = data.ProductID;
                }
                var config = {
                    params: {
                        ID: ID,
                        ProductID: ProductID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadTypeProductService.prototype.GetLeadTypeProduct = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        ModelID: item.ModelID.toString(),
                        ModelNo: item.ModelNo
                    });
                }
                return list;
            };
            LeadTypeProductService.$inject = ["$http", "$q"];
            return LeadTypeProductService;
        }(GCPL.Service.BaseService));
        Service.LeadTypeProductService = LeadTypeProductService;
        app.AddService("LeadTypeProductService", LeadTypeProductService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//delete Target 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteTargetService = /** @class */ (function (_super) {
            __extends(DeleteTargetService, _super);
            function DeleteTargetService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteTarget";
                return _this;
            }
            DeleteTargetService.prototype.Find = function (data) {
                var config = {
                    params: {
                        TargetID: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteTargetService.prototype.postTargetDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteTargetService.$inject = ["$http", "$q"];
            return DeleteTargetService;
        }(GCPL.Service.BaseService));
        Service.DeleteTargetService = DeleteTargetService;
        app.AddService("DeleteTargetService", DeleteTargetService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//show similar
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ShowExistingTargetListService = /** @class */ (function (_super) {
            __extends(ShowExistingTargetListService, _super);
            function ShowExistingTargetListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CheckExistingTargetList";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ShowExistingTargetListService.prototype.Find = function (data) {
                // var url = this.apiUrl + "/CheckExistingTargetList";
                var ID;
                var ModelID;
                var UserID;
                var Year;
                var Month;
                if (data.ID == undefined) {
                    ID = "";
                }
                else {
                    ID = data.ID;
                }
                if (data.ModelID == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data.ModelID;
                }
                if (data.UserID == undefined) {
                    UserID = "";
                }
                else {
                    UserID = data.UserID;
                }
                if (data.Year == undefined) {
                    Year = "";
                }
                else {
                    Year = data.Year;
                }
                if (data.Month == undefined) {
                    Month = "";
                }
                else {
                    Month = data.Month;
                }
                var config = {
                    params: {
                        LeadTypeID: ID,
                        ModelID: ModelID,
                        UserID: UserID,
                        Year: Year,
                        Month: Month
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ShowExistingTargetListService.prototype.GetTarget = function (data) {
                debugger;
                return data;
            };
            ShowExistingTargetListService.$inject = ["$http", "$q", "$cookieStore"];
            return ShowExistingTargetListService;
        }(GCPL.Service.BaseService));
        Service.ShowExistingTargetListService = ShowExistingTargetListService;
        app.AddService("ShowExistingTargetListService", ShowExistingTargetListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=TargetListService.js.map