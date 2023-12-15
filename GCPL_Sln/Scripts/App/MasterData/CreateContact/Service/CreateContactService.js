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
//Designation dd
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DesignationService = /** @class */ (function (_super) {
            __extends(DesignationService, _super);
            function DesignationService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DesignationDD";
                return _this;
            }
            DesignationService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DesignationService.prototype.GetDesignationName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        FOPID: item.FOPID.toString(),
                        FOP: item.FOP,
                    });
                }
                return list;
            };
            DesignationService.$inject = ["$http", "$q"];
            return DesignationService;
        }(GCPL.Service.BaseService));
        Service.DesignationService = DesignationService;
        app.AddService("DesignationService", DesignationService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Department dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DepartmentService = /** @class */ (function (_super) {
            __extends(DepartmentService, _super);
            function DepartmentService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DepartmentDD";
                return _this;
            }
            DepartmentService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DepartmentService.prototype.GetDepartmentName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        DepartmentID: item.DepartmentID.toString(),
                        Department: item.Department,
                    });
                }
                return list;
            };
            DepartmentService.$inject = ["$http", "$q"];
            return DepartmentService;
        }(GCPL.Service.BaseService));
        Service.DepartmentService = DepartmentService;
        app.AddService("DepartmentService", DepartmentService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
/// autofillcustomer
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CustomerAutoFillService = /** @class */ (function (_super) {
            __extends(CustomerAutoFillService, _super);
            function CustomerAutoFillService($http, $q, _cookieStore) {
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
            CustomerAutoFillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            CustomerAutoFillService.prototype.FilterAutoComplete = function (data) {
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
            CustomerAutoFillService.prototype.GetAutoCustomer = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CompanyName: item.CompanyName
                    });
                }
                return list;
            };
            CustomerAutoFillService.$inject = ["$http", "$q", "$cookieStore"];
            return CustomerAutoFillService;
        }(GCPL.Service.BaseService));
        Service.CustomerAutoFillService = CustomerAutoFillService;
        //inject service
        app.AddService("CustomerAutoFillService", CustomerAutoFillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertContactService = /** @class */ (function (_super) {
            __extends(InsertContactService, _super);
            function InsertContactService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertContactMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertContactService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertContactService.prototype.PostContact = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertContactService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertContactService;
        }(GCPL.Service.BaseService));
        Service.InsertContactService = InsertContactService;
        app.AddService("InsertContactService", InsertContactService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ContactEditService = /** @class */ (function (_super) {
            __extends(ContactEditService, _super);
            function ContactEditService($http, $q, _cookieStore) {
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
            ContactEditService.prototype.Find = function (data) {
                var url = this.apiUrl + "/FillContactList";
                var ContactID;
                if (data == undefined) {
                    ContactID = "";
                }
                else {
                    ContactID = data;
                }
                var config = {
                    params: {
                        ContactID: ContactID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ContactEditService.prototype.GetConEdit = function (data) {
                debugger;
                var obj = new model.EditContactModel();
                obj.ContactID = data.ContactID,
                    obj.SAPID = data.SAPID,
                    obj.CustomerID = data.CustomerID,
                    obj.ContactName = data.ContactName,
                    obj.CompanyName = data.CompanyName,
                    obj.MobileNo = data.MobileNo,
                    obj.PhoneNo = data.PhoneNo,
                    obj.Email = data.Email,
                    obj.Address = data.Address,
                    obj.PostalCode = data.PostalCode,
                    obj.Status = data.Status,
                    obj.DistrictID = data.DistrictID,
                    obj.District = data.District,
                    obj.City = data.City,
                    obj.FOPID = data.FOPID,
                    obj.FOP = data.FOP,
                    obj.DepartmentID = data.DepartmentID,
                    obj.Department = data.Department,
                    obj.StateID = data.StateID,
                    obj.State = data.State,
                    obj.CountryID = data.CountryID,
                    obj.Country = data.Country,
                    obj.AssistantName = data.AssistantName,
                    obj.AssistantPhone = data.AssistantPhone,
                    obj.HomePhone = data.HomePhone,
                    obj.BirthDate = data.BirthDate,
                    obj.MaritalStatus = data.MaritalStatus,
                    obj.Spouse = data.Spouse,
                    obj.AnniversaryDate = data.AnniversaryDate,
                    obj.SpouseBirthDate = data.SpouseBirthDate,
                    obj.Children = data.Children,
                    obj.SmokingPreference = data.SmokingPreference,
                    obj.DrinkingPreference = data.DrinkingPreference,
                    obj.MealPreference = data.MealPreference,
                    obj.Comments = data.Comments,
                    obj.Language = data.Language,
                    obj.CustomerSAPID = data.CustomerSAPID;
                //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
                return obj;
            };
            ContactEditService.$inject = ["$http", "$q", "$cookieStore"];
            return ContactEditService;
        }(GCPL.Service.BaseService));
        Service.ContactEditService = ContactEditService;
        app.AddService("ContactEditService", ContactEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
/// autofillcustomersapid
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CustomerSapIdAutoFillService = /** @class */ (function (_super) {
            __extends(CustomerSapIdAutoFillService, _super);
            function CustomerSapIdAutoFillService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "FillCustomerBusinessCode";
                _this.Cookie = _cookieStore;
                return _this;
            }
            CustomerSapIdAutoFillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            CustomerSapIdAutoFillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/FillCustomerBusinessCode";
                var config = {
                    params: {
                        Input: data.term
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CustomerSapIdAutoFillService.prototype.GetAutoCustSAPID = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        CustomerID: item.CustomerID.toString(),
                        CustomerName: item.CustomerName
                    });
                }
                return list;
            };
            CustomerSapIdAutoFillService.prototype.FindCustomerSAPID = function (data) {
                var url = this.apiUrl + "/GetCustomerSAPID";
                debugger;
                var config = {
                    params: {
                        Input: data.term
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CustomerSapIdAutoFillService.prototype.GetCustomerSAPID = function (data) {
                var obj = new model.CustomerSAPIDModel;
                obj = data.CustomerSAPID;
                return obj;
            };
            CustomerSapIdAutoFillService.$inject = ["$http", "$q", "$cookieStore"];
            return CustomerSapIdAutoFillService;
        }(GCPL.Service.BaseService));
        Service.CustomerSapIdAutoFillService = CustomerSapIdAutoFillService;
        //inject service
        app.AddService("CustomerSapIdAutoFillService", CustomerSapIdAutoFillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var PrimaryContactService = /** @class */ (function (_super) {
            __extends(PrimaryContactService, _super);
            function PrimaryContactService($http, $q, _cookieStore) {
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
            PrimaryContactService.prototype.Find = function (data) {
                var url = this.apiUrl + "/PrimaryContact";
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
            PrimaryContactService.prototype.GetPrimaryContact = function (data) {
                debugger;
                var obj = new model.PrimaryContactModel();
                obj.CustomerID = data.CustomerID,
                    obj.ContactPerson = data.ContactPerson,
                    obj.Designation = data.Designation,
                    obj.PhoneNo = data.PhoneNo,
                    obj.MobileNo = data.MobileNo,
                    obj.Email = data.Email,
                    obj.Department = data.Department;
                //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
                return obj;
            };
            PrimaryContactService.$inject = ["$http", "$q", "$cookieStore"];
            return PrimaryContactService;
        }(GCPL.Service.BaseService));
        Service.PrimaryContactService = PrimaryContactService;
        app.AddService("PrimaryContactService", PrimaryContactService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertSAPContactService = /** @class */ (function (_super) {
            __extends(InsertSAPContactService, _super);
            function InsertSAPContactService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateInSAPContact";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertSAPContactService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertSAPContactService.prototype.PostCreateInSAP = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertSAPContactService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertSAPContactService;
        }(GCPL.Service.BaseService));
        Service.InsertSAPContactService = InsertSAPContactService;
        app.AddService("InsertSAPContactService", InsertSAPContactService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateContactService.js.map