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
//INSERT
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertRegistrationContactService = /** @class */ (function (_super) {
            __extends(InsertRegistrationContactService, _super);
            function InsertRegistrationContactService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertContactNew";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertRegistrationContactService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertRegistrationContactService.prototype.PostRegistrationContact = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertRegistrationContactService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertRegistrationContactService;
        }(GCPL.Service.BaseService));
        Service.InsertRegistrationContactService = InsertRegistrationContactService;
        app.AddService("InsertRegistrationContactService", InsertRegistrationContactService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//GetCustomerDetails
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ExistingCustomerDetailsService = /** @class */ (function (_super) {
            __extends(ExistingCustomerDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function ExistingCustomerDetailsService($http, $q, _cookieStore) {
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
            ExistingCustomerDetailsService.prototype.Find = function (data) {
                debugger;
                var url = this.apiUrl + "/GetCustomerDetail";
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
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ExistingCustomerDetailsService.prototype.GetCustomerDetails = function (data) {
                debugger;
                var obj = new model.ExistingCustomerDetailsListModel;
                obj.CustomerID = data.CustomerID;
                obj.CustomerName = data.CustomerName;
                obj.Email = data.Email;
                obj.MobileNo = data.MobileNo;
                obj.PhoneNo = data.PhoneNo;
                obj.Fax = data.Fax;
                obj.Address1 = data.Address1;
                obj.Address2 = data.Address2;
                obj.CountryID = data.CountryID;
                obj.StateID = data.StateID;
                obj.DistrictID = data.DistrictID;
                obj.City = data.City;
                obj.PinCode = data.PinCode;
                return obj;
            };
            ExistingCustomerDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return ExistingCustomerDetailsService;
        }(GCPL.Service.BaseService));
        Service.ExistingCustomerDetailsService = ExistingCustomerDetailsService;
        app.AddService("ExistingCustomerDetailsService", ExistingCustomerDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//GetContactDetails
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ExistingContactDetailsService = /** @class */ (function (_super) {
            __extends(ExistingContactDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function ExistingContactDetailsService($http, $q, _cookieStore) {
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
            ExistingContactDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetCon";
                var ContactID;
                debugger;
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
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ExistingContactDetailsService.prototype.GetContactDetails = function (data) {
                debugger;
                var obj = new model.ExistingContactDetailsListModel;
                obj.ContactName = data.ContactName;
                obj.ContactEmail = data.ContactEmail;
                obj.ContactMobileNo = data.ContactMobileNo;
                obj.ContactPhoneNo = data.ContactPhoneNo;
                obj.Designation = data.Designation;
                obj.DepartmentID = data.DepartmentID;
                obj.FOPID = data.FOPID;
                obj.Address = data.Address;
                obj.ContactCountryID = data.ContactCountryID;
                obj.ContactStateID = data.ContactStateID;
                obj.ContactDistrictID = data.ContactDistrictID;
                obj.ContactCity = data.ContactCity;
                obj.PostalCode = data.PostalCode;
                obj.CustomerID = data.CustomerID;
                obj.ContactID = data.ContactID;
                obj.IsActive = data.IsActive;
                return obj;
            };
            ExistingContactDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return ExistingContactDetailsService;
        }(GCPL.Service.BaseService));
        Service.ExistingContactDetailsService = ExistingContactDetailsService;
        app.AddService("ExistingContactDetailsService", ExistingContactDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ContactInfo1Service = /** @class */ (function (_super) {
            __extends(ContactInfo1Service, _super);
            function ContactInfo1Service($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = "" + _this.url;
                return _this;
            }
            ContactInfo1Service.prototype.Find = function (data) {
                debugger;
                var url = this.apiUrl + "/ContactDetails1";
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
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ContactInfo1Service.prototype.GetContactName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ContactID: item.ContactID,
                        ContactName: item.ContactName
                    });
                }
                return list;
            };
            ContactInfo1Service.$inject = ["$http", "$q", "$cookieStore"];
            return ContactInfo1Service;
        }(GCPL.Service.BaseService));
        Service.ContactInfo1Service = ContactInfo1Service;
        app.AddService("ContactInfo1Service", ContactInfo1Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var RegistrationContactEditService = /** @class */ (function (_super) {
            __extends(RegistrationContactEditService, _super);
            function RegistrationContactEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillRegistrationContact";
                return _this;
            }
            RegistrationContactEditService.prototype.Find = function (data) {
                debugger;
                var AppContactID;
                if (data == undefined) {
                    AppContactID = "";
                }
                else {
                    AppContactID = data;
                }
                var config = {
                    params: {
                        AppContactID: AppContactID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            RegistrationContactEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditRegistrationContactModel();
                obj.AppContactID = data.AppContactID,
                    obj.AppCustomerID = data.AppCustomerID,
                    obj.CompanyName = data.CompanyName,
                    obj.Email = data.Email,
                    obj.MobileNo = data.MobileNo,
                    obj.PhoneNo = data.PhoneNo,
                    obj.Fax = data.Fax,
                    obj.Address1 = data.Address1,
                    obj.Address2 = data.Address2,
                    obj.CountryID = data.CountryID,
                    obj.StateID = data.StateID,
                    obj.DistrictID = data.DistrictID,
                    obj.City = data.City,
                    obj.PinCode = data.PinCode,
                    obj.ContactID = data.ContactID,
                    obj.ContactName = data.ContactName,
                    obj.CustomerID = data.CustomerID;
                obj.ContactEmail = data.ContactEmail,
                    obj.ContactMobileNo = data.ContactMobileNo,
                    obj.ContactPhoneNo = data.ContactPhoneNo,
                    obj.Designation = data.Designation,
                    obj.DepartmentID = data.DepartmentID,
                    obj.FOPID = data.FOPID,
                    obj.Address = data.Address,
                    obj.ContactCountryID = data.ContactCountryID,
                    obj.ContactStateID = data.ContactStateID,
                    obj.ContactDistrictID = data.ContactDistrictID,
                    obj.ContactCity = data.ContactCity,
                    obj.PostalCode = data.PostalCode,
                    obj.Password = data.Password,
                    obj.IsActive = data.IsActive;
                return obj;
            };
            RegistrationContactEditService.$inject = ["$http", "$q"];
            return RegistrationContactEditService;
        }(GCPL.Service.BaseService));
        Service.RegistrationContactEditService = RegistrationContactEditService;
        app.AddService("RegistrationContactEditService", RegistrationContactEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UpdateContactNewService = /** @class */ (function (_super) {
            __extends(UpdateContactNewService, _super);
            function UpdateContactNewService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UpdateContactNew";
                _this.Cookie = _cookieStore;
                return _this;
            }
            UpdateContactNewService.prototype.Find = function (data) {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UpdateContactNewService.prototype.PostUpdateContact = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            UpdateContactNewService.$inject = ["$http", "$q", "$cookieStore"];
            return UpdateContactNewService;
        }(GCPL.Service.BaseService));
        Service.UpdateContactNewService = UpdateContactNewService;
        app.AddService("UpdateContactNewService", UpdateContactNewService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RegistrationContactNewService.js.map