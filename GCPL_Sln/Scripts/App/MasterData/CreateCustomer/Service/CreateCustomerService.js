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
//Country dd
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CountryService = /** @class */ (function (_super) {
            __extends(CountryService, _super);
            function CountryService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CountryDD";
                return _this;
            }
            CountryService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CountryService.prototype.GetCountryName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CountryID: item.CountryID.toString(),
                        Country: item.Country,
                    });
                }
                return list;
            };
            CountryService.$inject = ["$http", "$q"];
            return CountryService;
        }(GCPL.Service.BaseService));
        Service.CountryService = CountryService;
        app.AddService("CountryService", CountryService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//State dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var StateService = /** @class */ (function (_super) {
            __extends(StateService, _super);
            function StateService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "StateDDWP";
                return _this;
            }
            StateService.prototype.Find = function (data) {
                var CountryID;
                if (data == undefined) {
                    CountryID = '95';
                }
                else {
                    CountryID = data;
                }
                var config = {
                    params: {
                        CountryID: '95'
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            StateService.prototype.GetStateName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        StateID: item.StateID.toString(),
                        State: item.State,
                    });
                }
                return list;
            };
            StateService.$inject = ["$http", "$q"];
            return StateService;
        }(GCPL.Service.BaseService));
        Service.StateService = StateService;
        app.AddService("StateService", StateService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertCustomerService = /** @class */ (function (_super) {
            __extends(InsertCustomerService, _super);
            function InsertCustomerService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertCustomerMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertCustomerService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertCustomerService.prototype.PostCustomer = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertCustomerService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertCustomerService;
        }(GCPL.Service.BaseService));
        Service.InsertCustomerService = InsertCustomerService;
        app.AddService("InsertCustomerService", InsertCustomerService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//District dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DistrictddService = /** @class */ (function (_super) {
            __extends(DistrictddService, _super);
            function DistrictddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DistrictDD";
                return _this;
            }
            DistrictddService.prototype.Find = function (data) {
                var StateID;
                if (data == undefined) {
                    StateID = "";
                }
                else {
                    StateID = data;
                }
                var config = {
                    params: {
                        StateID: StateID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DistrictddService.prototype.GetDistrictName = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        DistrictID: item.DistrictID.toString(),
                        District: item.District,
                    });
                }
                return list;
            };
            DistrictddService.$inject = ["$http", "$q"];
            return DistrictddService;
        }(GCPL.Service.BaseService));
        Service.DistrictddService = DistrictddService;
        app.AddService("DistrictddService", DistrictddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//IndustryDivision dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var IndustryDivisionService = /** @class */ (function (_super) {
            __extends(IndustryDivisionService, _super);
            function IndustryDivisionService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "IndustryDivisionDD";
                return _this;
            }
            IndustryDivisionService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            IndustryDivisionService.prototype.GetIndustryName = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        IndustryDivisionID: item.IndustryDivisionID.toString(),
                        IndustryDivision: item.IndustryDivision,
                    });
                }
                return list;
            };
            IndustryDivisionService.$inject = ["$http", "$q"];
            return IndustryDivisionService;
        }(GCPL.Service.BaseService));
        Service.IndustryDivisionService = IndustryDivisionService;
        app.AddService("IndustryDivisionService", IndustryDivisionService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//SalesArea dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesAreaService = /** @class */ (function (_super) {
            __extends(SalesAreaService, _super);
            function SalesAreaService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "SalesAreaDD";
                return _this;
            }
            SalesAreaService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesAreaService.prototype.GetSalesAreaName = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        SalesAreaID: item.SalesAreaID.toString(),
                        SalesArea: item.SalesArea,
                    });
                }
                return list;
            };
            SalesAreaService.$inject = ["$http", "$q"];
            return SalesAreaService;
        }(GCPL.Service.BaseService));
        Service.SalesAreaService = SalesAreaService;
        app.AddService("SalesAreaService", SalesAreaService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//AccountType dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var AccountTypeService = /** @class */ (function (_super) {
            __extends(AccountTypeService, _super);
            function AccountTypeService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AccountTypeDD";
                return _this;
            }
            AccountTypeService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            AccountTypeService.prototype.GetAccountTypeName = function (data) {
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        AccountTypeID: item.AccountTypeID.toString(),
                        AccountType: item.AccountType,
                    });
                }
                return list;
            };
            AccountTypeService.$inject = ["$http", "$q"];
            return AccountTypeService;
        }(GCPL.Service.BaseService));
        Service.AccountTypeService = AccountTypeService;
        app.AddService("AccountTypeService", AccountTypeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//IndustrialSegment dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var IndustrialSegmentService = /** @class */ (function (_super) {
            __extends(IndustrialSegmentService, _super);
            function IndustrialSegmentService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "IndustrialSegmentDD";
                return _this;
            }
            IndustrialSegmentService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            IndustrialSegmentService.prototype.GetIndustrialSegmentName = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        IndustrialSegmentID: item.IndustrialSegmentID.toString(),
                        IndustrialSegment: item.IndustrialSegment,
                    });
                }
                return list;
            };
            IndustrialSegmentService.$inject = ["$http", "$q"];
            return IndustrialSegmentService;
        }(GCPL.Service.BaseService));
        Service.IndustrialSegmentService = IndustrialSegmentService;
        app.AddService("IndustrialSegmentService", IndustrialSegmentService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//IndustrialSegment with Division dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var IndustrialDivisionSegmentService = /** @class */ (function (_super) {
            __extends(IndustrialDivisionSegmentService, _super);
            function IndustrialDivisionSegmentService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "IndustrialSegmentDivision";
                return _this;
            }
            IndustrialDivisionSegmentService.prototype.Find = function (data) {
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
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            IndustrialDivisionSegmentService.prototype.GetIndustrialSegmentName = function (data) {
                var list = Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    list.push({
                        IndustrialSegmentID: item.IndustrialSegmentID.toString(),
                        IndustrialSegment: item.IndustrialSegment,
                    });
                }
                return list;
            };
            IndustrialDivisionSegmentService.$inject = ["$http", "$q"];
            return IndustrialDivisionSegmentService;
        }(GCPL.Service.BaseService));
        Service.IndustrialDivisionSegmentService = IndustrialDivisionSegmentService;
        app.AddService("IndustrialDivisionSegmentService", IndustrialDivisionSegmentService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//SalesOffice dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesOfficeService = /** @class */ (function (_super) {
            __extends(SalesOfficeService, _super);
            function SalesOfficeService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "SalesOfficeDD";
                return _this;
            }
            SalesOfficeService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesOfficeService.prototype.GetSalesOfficeName = function (data) {
                var list = Array();
                for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                    var item = data_9[_i];
                    list.push({
                        SalesOfficeID: item.SalesOfficeID.toString(),
                        SalesOffice: item.SalesOffice,
                    });
                }
                return list;
            };
            SalesOfficeService.$inject = ["$http", "$q"];
            return SalesOfficeService;
        }(GCPL.Service.BaseService));
        Service.SalesOfficeService = SalesOfficeService;
        app.AddService("SalesOfficeService", SalesOfficeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CustomerEditService = /** @class */ (function (_super) {
            __extends(CustomerEditService, _super);
            function CustomerEditService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                //this.apiUrl = `${this.url}/${"FillCustomerList"}`;
                _this.apiUrl = "" + _this.url;
                _this.Cookie = _cookieStore;
                return _this;
            }
            CustomerEditService.prototype.Find = function (data) {
                var url = this.apiUrl + "/FillCustomerList";
                var CustomerID;
                if (data == undefined) {
                    CustomerID = "";
                }
                else {
                    CustomerID = data;
                }
                var config = {
                    params: {
                        CustomerID: CustomerID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CustomerEditService.prototype.GetCustEdit = function (data) {
                var obj = new model.EditCustomerModel();
                debugger;
                obj.CustomerID = data.CustomerID,
                    obj.SearchText = data.SearchText,
                    obj.CompanyName = data.CompanyName,
                    obj.MobileNo = data.MobileNo,
                    obj.Email = data.Email,
                    obj.Address1 = data.Address1,
                    obj.Address2 = data.Address2,
                    obj.CustomerStatusID = data.CustomerStatusID,
                    obj.CustomerStatus = data.CustomerStatus,
                    obj.DistrictID = data.DistrictID,
                    obj.District = data.District,
                    obj.IndustryDivisionID = data.IndustryDivisionID,
                    obj.IndustryDivision = data.IndustryDivision,
                    obj.CreatedBy = data.CreatedBy,
                    obj.PinCode = data.PinCode,
                    obj.AccountTypeID = data.AccountTypeID,
                    obj.AccountType = data.AccountType,
                    obj.IndustrialSegmentID = data.IndustrialSegmentID,
                    obj.IndustrialSegment = data.IndustrialSegment,
                    obj.SalesAreaID = data.SalesAreaID,
                    obj.SalesArea = data.SalesArea,
                    obj.PhoneNo = data.PhoneNo,
                    obj.Fax = data.Fax,
                    obj.SalesOfficeID = data.SalesOfficeID,
                    obj.SalesOffice = data.SalesOffice,
                    obj.BusinessPartnerNO = data.BusinessPartnerNO,
                    obj.Status = data.Status,
                    obj.IsNational = data.IsNational,
                    obj.CustomerRatingID = data.CustomerRatingID,
                    obj.CustomerRating = data.CustomerRating,
                    obj.StateID = data.StateID,
                    obj.State = data.State,
                    obj.City = data.City,
                    obj.UpdatedBy = data.UpdatedBy,
                    obj.CountryID = data.CountryID,
                    obj.Country = data.Country,
                    obj.ParentCustomerID = data.ParentCustomer,
                    obj.ParentCustomerName = data.ParentCustomerName,
                    obj.Customersize = data.Customersize,
                    obj.SiteAddress = data.SiteAddress,
                    obj.Area = data.Area,
                    obj.Comments = data.Comments,
                    obj.DivisionID = data.DivisionID,
                    obj.Division = data.Division,
                    obj.DesignationID = data.DesignationID,
                    obj.Designation = data.Designation,
                    obj.ContactName = data.ContactName,
                    obj.ConPhoneNo = data.ConPhoneNo,
                    obj.ConMobileNo = data.ConMobileNo,
                    obj.ConFax = data.ConFax,
                    obj.ConEmail = data.ConEmail,
                    obj.DepartmentID = data.DepartmentID,
                    obj.ContactID = data.ContactID,
                    obj.ConStateID = data.ConStateID,
                    obj.ConDistrictID = data.ConDistrictID,
                    obj.ConCity = data.ConCity,
                    obj.ConAddress = data.ConAddress,
                    obj.ConPincode = data.ConPincode;
                //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
                return obj;
            };
            CustomerEditService.$inject = ["$http", "$q", "$cookieStore"];
            return CustomerEditService;
        }(GCPL.Service.BaseService));
        Service.CustomerEditService = CustomerEditService;
        app.AddService("CustomerEditService", CustomerEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//sales Area dd fill
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CheckSalesAreaDataService = /** @class */ (function (_super) {
            __extends(CheckSalesAreaDataService, _super);
            function CheckSalesAreaDataService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                //this.apiUrl = `${this.url}/${"FillCustomerList"}`;
                _this.apiUrl = "" + _this.url;
                _this.Cookie = _cookieStore;
                return _this;
            }
            CheckSalesAreaDataService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetSalesAreaData";
                var CountryID;
                var CategoryID;
                var LeadCategoryID;
                debugger;
                if (data.CountryID == undefined) {
                    CountryID = '';
                }
                else {
                    CountryID = data.CountryID;
                }
                if (data.CategoryID == undefined) {
                    CategoryID = '';
                }
                else {
                    CategoryID = data.CategoryID;
                }
                if (data.LeadCategoryID == undefined) {
                    LeadCategoryID = '';
                }
                else {
                    LeadCategoryID = data.LeadCategoryID;
                }
                debugger;
                var config = {
                    params: {
                        CountryID: CountryID,
                        CategoryID: CategoryID,
                        LeadCategoryID: LeadCategoryID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CheckSalesAreaDataService.prototype.GetSales = function (data) {
                var obj = new model.GetSalesAreaModel();
                obj.SalesAreaID = data.SalesAreaID;
                return obj;
            };
            CheckSalesAreaDataService.$inject = ["$http", "$q", "$cookieStore"];
            return CheckSalesAreaDataService;
        }(GCPL.Service.BaseService));
        Service.CheckSalesAreaDataService = CheckSalesAreaDataService;
        app.AddService("CheckSalesAreaDataService", CheckSalesAreaDataService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UserCodeAutoFillService = /** @class */ (function (_super) {
            __extends(UserCodeAutoFillService, _super);
            function UserCodeAutoFillService($http, $q, _cookieStore) {
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
            UserCodeAutoFillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UserCodeAutoFillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/FillUserNameEmpCode";
                var config = {
                    params: {
                        Input: data.term,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            UserCodeAutoFillService.prototype.GetAutoUser = function (data) {
                var list = Array();
                for (var _i = 0, data_10 = data; _i < data_10.length; _i++) {
                    var item = data_10[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName
                    });
                }
                return list;
            };
            UserCodeAutoFillService.$inject = ["$http", "$q", "$cookieStore"];
            return UserCodeAutoFillService;
        }(GCPL.Service.BaseService));
        Service.UserCodeAutoFillService = UserCodeAutoFillService;
        //inject service
        app.AddService("UserCodeAutoFillService", UserCodeAutoFillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//show similar
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ShowSimilarService = /** @class */ (function (_super) {
            __extends(ShowSimilarService, _super);
            function ShowSimilarService($http, $q, _cookieStore) {
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
            ShowSimilarService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CheckExistingCustomerWithMobile";
                var MobileNo;
                if (data == undefined) {
                    MobileNo = "";
                }
                else {
                    MobileNo = data;
                }
                var config = {
                    params: {
                        MobileNo: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ShowSimilarService.prototype.GetMobile = function (data) {
                debugger;
                return data;
            };
            ShowSimilarService.$inject = ["$http", "$q", "$cookieStore"];
            return ShowSimilarService;
        }(GCPL.Service.BaseService));
        Service.ShowSimilarService = ShowSimilarService;
        app.AddService("ShowSimilarService", ShowSimilarService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//division dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DivisionDDService = /** @class */ (function (_super) {
            __extends(DivisionDDService, _super);
            function DivisionDDService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "DropdownList";
                _this.Cookie = _cookieStore;
                return _this;
            }
            DivisionDDService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DivisionDDService.prototype.GetDivision = function (data) {
                var list = Array();
                for (var _i = 0, data_11 = data; _i < data_11.length; _i++) {
                    var item = data_11[_i];
                    list.push({
                        DivisionID: item.DivisionID.toString(),
                        Division: item.Division
                    });
                }
                return list;
            };
            DivisionDDService.$inject = ["$http", "$q", "$cookieStore"];
            return DivisionDDService;
        }(GCPL.Service.BaseService));
        Service.DivisionDDService = DivisionDDService;
        app.AddService("DivisionDDService", DivisionDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//IndustryCodeDD dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var IndustryCodeService = /** @class */ (function (_super) {
            __extends(IndustryCodeService, _super);
            function IndustryCodeService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "IndustryCodeDD";
                return _this;
            }
            IndustryCodeService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            IndustryCodeService.prototype.GetIndustryCodeName = function (data) {
                var list = Array();
                for (var _i = 0, data_12 = data; _i < data_12.length; _i++) {
                    var item = data_12[_i];
                    list.push({
                        IndustryCodeID: item.IndustryCodeID.toString(),
                        IndustryCodeName: item.IndustryCodeName,
                    });
                }
                return list;
            };
            IndustryCodeService.$inject = ["$http", "$q"];
            return IndustryCodeService;
        }(GCPL.Service.BaseService));
        Service.IndustryCodeService = IndustryCodeService;
        app.AddService("IndustryCodeService", IndustryCodeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//GetCustomerSize dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CustomerSizeService = /** @class */ (function (_super) {
            __extends(CustomerSizeService, _super);
            function CustomerSizeService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CustomerSizeDD";
                return _this;
            }
            CustomerSizeService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CustomerSizeService.prototype.GetCustomerSize = function (data) {
                var list = Array();
                for (var _i = 0, data_13 = data; _i < data_13.length; _i++) {
                    var item = data_13[_i];
                    list.push({
                        CustomerSizeID: item.CustomerSizeID.toString(),
                        CustomerSize: item.CustomerSize,
                    });
                }
                return list;
            };
            CustomerSizeService.$inject = ["$http", "$q"];
            return CustomerSizeService;
        }(GCPL.Service.BaseService));
        Service.CustomerSizeService = CustomerSizeService;
        app.AddService("CustomerSizeService", CustomerSizeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
/// autofillsapid&comapanyname
//namespace GCPL.Service {
//    import app = GCPL.app;
//    import model = GCPL.Model;
//    export interface ISAPIDAutoFillService {
//        Find(): ng.IPromise<Utility.Ajax.IResponse>;
//        GetAutoSAP(data: any): Array<model.SAPAutoModel>;
//        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
//        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
//    }
//    export class SAPIDAutoFillService extends GCPL.Service.BaseService implements ISAPIDAutoFillService {
//        private apiUrl: string = "";
//        private Cookie: any = null;
//        static $inject = ["$http", "$q", "$cookieStore"];
//        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
//            super($http, $q);
//            this.apiUrl = `${this.url}/${"FillAutoCustomerId"}`;
//            this.Cookie = _cookieStore;
//        }
//        Find(): ng.IPromise<Utility.Ajax.IResponse> {
//            return this.ajaXUtility.Get({ Url: this.apiUrl });
//        }
//        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
//            var url = this.apiUrl + "/FillAutoCustomerId";
//            debugger;
//            let config = {
//                params: {
//                    Input: data.term
//                }
//            };
//            return this.ajaXUtility.Get({
//                Url: url,
//                Config: config
//            });
//        }
//        GetAutoSAP(data: any): Array<model.SAPAutoModel> {
//            let list = Array<model.SAPAutoModel>();
//            for (let item of data) {
//                list.push({
//                    SAPID: item.SAPID,
//                    ParentCustID: item.CustomerID
//                });
//            }
//            return list;
//        }
//    }
//    //inject service
//    app.AddService("SAPIDAutoFillService", SAPIDAutoFillService);
//}
//namespace GCPL.Service {
//    import app = GCPL.app;
//    import model = GCPL.Model;
//    export interface ISAPIDListService {
//        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
//        GetSAPID(data: any): model.GetSapIdModel;
//    }
//    export class SAPIDListService extends GCPL.Service.BaseService implements ISAPIDListService {
//        private apiUrl: string = "";
//        static $inject = ["$http", "$q"];
//        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
//            super($http, $q);
//            this.apiUrl = `${this.url}/${"GetSAPId"}`;
//        }
//        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
//            var ParentCustomerID;
//            if (data == undefined) {
//                ParentCustomerID = "";
//            }
//            else {
//                ParentCustomerID = data;
//            }
//            let config = {
//                params: {
//                    ParentCustomerID: ParentCustomerID
//                }
//            };
//            console.log(config);
//            return this.ajaXUtility.Get({
//                Url: this.apiUrl,
//                Config: config
//            }
//            );
//        }
//        GetSAPID(data: any): model.GetSapIdModel {
//            debugger;
//            let obj = new model.GetSapIdModel();
//            obj.BusinessPartnerNo = data.BusinessPartnerNo
//            return obj;
//        }
//    }
//    app.AddService("SAPIDListService", SAPIDListService);
//}
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CustomerStatusService = /** @class */ (function (_super) {
            __extends(CustomerStatusService, _super);
            function CustomerStatusService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CustomerStatus";
                return _this;
            }
            CustomerStatusService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CustomerStatusService.prototype.GetCustomerStatus = function (data) {
                var list = Array();
                for (var _i = 0, data_14 = data; _i < data_14.length; _i++) {
                    var item = data_14[_i];
                    list.push({
                        CustomerStatusID: item.CustomerStatusID.toString(),
                        Status: item.Status
                    });
                }
                return list;
            };
            CustomerStatusService.$inject = ["$http", "$q"];
            return CustomerStatusService;
        }(GCPL.Service.BaseService));
        Service.CustomerStatusService = CustomerStatusService;
        app.AddService("CustomerStatusService", CustomerStatusService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CustomerClassService = /** @class */ (function (_super) {
            __extends(CustomerClassService, _super);
            function CustomerClassService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CustomerRatingDD";
                return _this;
            }
            CustomerClassService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CustomerClassService.prototype.GetCustomerClass = function (data) {
                var list = Array();
                for (var _i = 0, data_15 = data; _i < data_15.length; _i++) {
                    var item = data_15[_i];
                    list.push({
                        ID: item.ID.toString(),
                        Description: item.Description
                    });
                }
                return list;
            };
            CustomerClassService.$inject = ["$http", "$q"];
            return CustomerClassService;
        }(GCPL.Service.BaseService));
        Service.CustomerClassService = CustomerClassService;
        app.AddService("CustomerClassService", CustomerClassService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertSAPCustomerService = /** @class */ (function (_super) {
            __extends(InsertSAPCustomerService, _super);
            function InsertSAPCustomerService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateInSAP";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertSAPCustomerService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertSAPCustomerService.prototype.PostCreateInSAP = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertSAPCustomerService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertSAPCustomerService;
        }(GCPL.Service.BaseService));
        Service.InsertSAPCustomerService = InsertSAPCustomerService;
        app.AddService("InsertSAPCustomerService", InsertSAPCustomerService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var StateddService = /** @class */ (function (_super) {
            __extends(StateddService, _super);
            function StateddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "StateDDWP";
                return _this;
            }
            StateddService.prototype.Find = function (data) {
                var CountryID;
                if (data == undefined) {
                    CountryID = '95';
                }
                else {
                    CountryID = data;
                }
                var config = {
                    params: {
                        CountryID: '95'
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            StateddService.prototype.GetStateName = function (data) {
                var list = Array();
                for (var _i = 0, data_16 = data; _i < data_16.length; _i++) {
                    var item = data_16[_i];
                    list.push({
                        StateID: item.StateID.toString(),
                        State: item.State,
                    });
                }
                return list;
            };
            StateddService.$inject = ["$http", "$q"];
            return StateddService;
        }(GCPL.Service.BaseService));
        Service.StateddService = StateddService;
        app.AddService("StateddService", StateddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateCustomerService.js.map