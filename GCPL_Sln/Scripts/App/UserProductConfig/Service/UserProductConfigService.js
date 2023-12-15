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
        var AllocationMatrixService = /** @class */ (function (_super) {
            __extends(AllocationMatrixService, _super);
            function AllocationMatrixService($http, $q, _cookieStore) {
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
            AllocationMatrixService.prototype.FindGrid = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "AllocationMatrix";
                var SearchInput;
                var StatusID;
                var LeadTypeID;
                var CategoryID;
                var DivisionID;
                var ProductID;
                var StateID;
                var DistrictID;
                if (data.SearchInput == undefined) {
                    SearchInput = '';
                }
                else {
                    SearchInput = data.SearchInput;
                }
                if (data.StatusID == undefined) {
                    StatusID = '';
                }
                else {
                    StatusID = data.StatusID;
                }
                if (data.LeadTypeID == undefined) {
                    LeadTypeID = '';
                }
                else {
                    LeadTypeID = data.LeadTypeID;
                }
                if (data.CategoryID == undefined) {
                    CategoryID = '';
                }
                else {
                    CategoryID = data.CategoryID;
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
                if (data.StateID == undefined) {
                    StateID = '';
                }
                else {
                    StateID = data.StateID;
                }
                if (data.DistrictID == undefined) {
                    DistrictID = '';
                }
                else {
                    DistrictID = data.DistrictID;
                }
                var config = {
                    params: {
                        SearchInput: SearchInput,
                        StatusID: StatusID,
                        LeadTypeID: LeadTypeID,
                        CategoryID: CategoryID,
                        DivisionID: DivisionID,
                        ProductID: ProductID,
                        StateID: StateID,
                        DistrictID: DistrictID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            AllocationMatrixService.prototype.GetAllocationGrid = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        UserProductID: item.UserProductID,
                        UserID: item.UserID,
                        UserName: item.UserName,
                        Product: item.Product,
                        District: item.District,
                        DateCreated: item.DateCreated,
                        IsActive: ((item.IsActive == "True") ? "Active" : "Inactive"),
                        LeadType: item.LeadType,
                        LeadTypeDesc: item.LeadTypeDesc,
                        Category: item.Category,
                        Division: item.Division,
                        State: item.State,
                    });
                }
                return list;
            };
            AllocationMatrixService.$inject = ["$http", "$q", "$cookieStore"];
            return AllocationMatrixService;
        }(GCPL.Service.BaseService));
        Service.AllocationMatrixService = AllocationMatrixService;
        app.AddService("AllocationMatrixService", AllocationMatrixService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var AllocationMatrixEditService = /** @class */ (function (_super) {
            __extends(AllocationMatrixEditService, _super);
            function AllocationMatrixEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AllocationMatrixEdit";
                return _this;
            }
            AllocationMatrixEditService.prototype.Find = function (data) {
                var UserProductID;
                if (data == undefined) {
                    UserProductID = "";
                }
                else {
                    UserProductID = data;
                }
                var config = {
                    params: {
                        UserProductID: UserProductID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            AllocationMatrixEditService.prototype.GetAllocationEdit = function (data) {
                var obj = new model.AllocationMatrixEditModel();
                obj.UserProductID = data.UserProductID,
                    obj.UserID = data.UserID,
                    obj.UserName = data.Name,
                    obj.ID = data.ID,
                    obj.LeadType = data.ID,
                    obj.CategoryID = data.CategoryID,
                    obj.divisionID = data.divisionID,
                    obj.ProductID = data.ProductID,
                    obj.CountryID = data.CountryID,
                    obj.StateID = data.StateID,
                    obj.DistrictID = data.DistrictID,
                    obj.Status = data.Status;
                return obj;
            };
            AllocationMatrixEditService.$inject = ["$http", "$q"];
            return AllocationMatrixEditService;
        }(GCPL.Service.BaseService));
        Service.AllocationMatrixEditService = AllocationMatrixEditService;
        app.AddService("AllocationMatrixEditService", AllocationMatrixEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var AllocationMatrixInsertService = /** @class */ (function (_super) {
            __extends(AllocationMatrixInsertService, _super);
            function AllocationMatrixInsertService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "AllocationMatrixInsert";
                _this.Cookie = _cookieStore;
                return _this;
            }
            AllocationMatrixInsertService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            AllocationMatrixInsertService.prototype.PostAllocationMatrix = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            AllocationMatrixInsertService.$inject = ["$http", "$q", "$cookieStore"];
            return AllocationMatrixInsertService;
        }(GCPL.Service.BaseService));
        Service.AllocationMatrixInsertService = AllocationMatrixInsertService;
        app.AddService("AllocationMatrixInsertService", AllocationMatrixInsertService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DivisionDDPService = /** @class */ (function (_super) {
            __extends(DivisionDDPService, _super);
            function DivisionDDPService($http, $q, _cookieStore) {
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
            DivisionDDPService.prototype.Find = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "DivisionDD";
                var CategoryID;
                if (data == undefined) {
                    CategoryID = '';
                }
                else {
                    CategoryID = data;
                }
                var config = {
                    params: {
                        CategoryID: CategoryID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            DivisionDDPService.prototype.GetDivisionDDP = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        DivisionID: item.DivisionID,
                        Division: item.Division
                    });
                }
                return list;
            };
            DivisionDDPService.$inject = ["$http", "$q", "$cookieStore"];
            return DivisionDDPService;
        }(GCPL.Service.BaseService));
        Service.DivisionDDPService = DivisionDDPService;
        app.AddService("DivisionDDPService", DivisionDDPService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UserAtofillService = /** @class */ (function (_super) {
            __extends(UserAtofillService, _super);
            function UserAtofillService($http, $q, _cookieStore) {
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
            UserAtofillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UserAtofillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/ContactNameAutoFill";
                var config = {
                    params: {
                        ContactName: data.term,
                        DealerID: this.Cookie.get('UserInfo')['DealerID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            UserAtofillService.prototype.GetAutoUser = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName
                        //DealerID: item.DealerID
                    });
                }
                return list;
            };
            UserAtofillService.$inject = ["$http", "$q", "$cookieStore"];
            return UserAtofillService;
        }(GCPL.Service.BaseService));
        Service.UserAtofillService = UserAtofillService;
        //inject service
        app.AddService("UserAtofillService", UserAtofillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UserProductConfigService.js.map