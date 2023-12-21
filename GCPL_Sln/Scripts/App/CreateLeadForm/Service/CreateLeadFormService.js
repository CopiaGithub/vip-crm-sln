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
//LeadSource depends on Channel
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadSourceDetailsService = /** @class */ (function (_super) {
            __extends(LeadSourceDetailsService, _super);
            function LeadSourceDetailsService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadSourceddl";
                return _this;
            }
            LeadSourceDetailsService.prototype.Find = function (data) {
                var ChannelID;
                if (data == undefined) {
                    ChannelID = "";
                }
                else {
                    ChannelID = data;
                }
                var config = {
                    params: {
                        ChannelID: ChannelID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadSourceDetailsService.prototype.GetLeadSourceDetails = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadSourceID: item.LeadSourceID.toString(),
                        LeadSource: item.LeadSource,
                    });
                }
                return list;
            };
            LeadSourceDetailsService.$inject = ["$http", "$q"];
            return LeadSourceDetailsService;
        }(GCPL.Service.BaseService));
        Service.LeadSourceDetailsService = LeadSourceDetailsService;
        app.AddService("LeadSourceDetailsService", LeadSourceDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//referred list
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ValidateReferredEmployeeService = /** @class */ (function (_super) {
            __extends(ValidateReferredEmployeeService, _super);
            function ValidateReferredEmployeeService($http, $q, _cookieStore) {
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
            ValidateReferredEmployeeService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ValidateReferedEmployee";
                var RefUserName;
                var RefUserID;
                if (data.RefUserName == undefined) {
                    RefUserName = '';
                }
                else {
                    RefUserName = data.RefUserName;
                }
                if (data.RefUserID == undefined) {
                    RefUserID = '';
                }
                else {
                    RefUserID = data.RefUserID;
                }
                var config = {
                    params: {
                        RefUserName: RefUserName,
                        RefUserID: RefUserID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ValidateReferredEmployeeService.prototype.GetReferredEmp = function (data) {
                var obj = new model.ReferredEmpModel();
                obj.UserID = data.UserID;
                return obj;
            };
            ValidateReferredEmployeeService.$inject = ["$http", "$q", "$cookieStore"];
            return ValidateReferredEmployeeService;
        }(GCPL.Service.BaseService));
        Service.ValidateReferredEmployeeService = ValidateReferredEmployeeService;
        app.AddService("ValidateReferredEmployeeService", ValidateReferredEmployeeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Campaign depends on LeadSource
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CampaignDetailsService = /** @class */ (function (_super) {
            __extends(CampaignDetailsService, _super);
            function CampaignDetailsService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CampaignDetails";
                return _this;
            }
            CampaignDetailsService.prototype.Find = function (data) {
                var LeadSourceID;
                if (data == undefined) {
                    LeadSourceID = "";
                }
                else {
                    LeadSourceID = data;
                }
                var config = {
                    params: {
                        LeadSourceID: LeadSourceID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CampaignDetailsService.prototype.GetCampaignDetails = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        CampaignID: item.CampaignID.toString(),
                        CampaignName: item.CampaignName,
                    });
                }
                return list;
            };
            CampaignDetailsService.$inject = ["$http", "$q"];
            return CampaignDetailsService;
        }(GCPL.Service.BaseService));
        Service.CampaignDetailsService = CampaignDetailsService;
        app.AddService("CampaignDetailsService", CampaignDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
/// autofill productDesc
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProductDescAutoFillService = /** @class */ (function (_super) {
            __extends(ProductDescAutoFillService, _super);
            function ProductDescAutoFillService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "FillProductDescription";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ProductDescAutoFillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/FillProductDescription";
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
            ProductDescAutoFillService.prototype.GetAutoProductDesc = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        ProductID: item.ProductID.toString(),
                        Product: item.Product,
                        ProductDesc: item.ProductDesc
                    });
                }
                return list;
            };
            ProductDescAutoFillService.prototype.FindProduct = function (data) {
                var url = this.apiUrl + "/FindProduct";
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
            ProductDescAutoFillService.prototype.GetProduct = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        ProductID: item.ProductID.toString(),
                        Product: item.Product
                    });
                }
                return list;
            };
            ProductDescAutoFillService.$inject = ["$http", "$q", "$cookieStore"];
            return ProductDescAutoFillService;
        }(GCPL.Service.BaseService));
        Service.ProductDescAutoFillService = ProductDescAutoFillService;
        //inject service
        app.AddService("ProductDescAutoFillService", ProductDescAutoFillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertItemDetailsService = /** @class */ (function (_super) {
            __extends(InsertItemDetailsService, _super);
            function InsertItemDetailsService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertItemDetails";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertItemDetailsService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertItemDetailsService.prototype.PostItem = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertItemDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertItemDetailsService;
        }(GCPL.Service.BaseService));
        Service.InsertItemDetailsService = InsertItemDetailsService;
        app.AddService("InsertItemDetailsService", InsertItemDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadDetailsService = /** @class */ (function (_super) {
            __extends(InsertLeadDetailsService, _super);
            function InsertLeadDetailsService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertLeadDetails";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadDetailsService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadDetailsService.prototype.PostLead = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadDetailsService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadDetailsService = InsertLeadDetailsService;
        app.AddService("InsertLeadDetailsService", InsertLeadDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//PurchaseTimeline dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var PurchaseTimelineService = /** @class */ (function (_super) {
            __extends(PurchaseTimelineService, _super);
            function PurchaseTimelineService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "PurchaseTimelineDD";
                return _this;
            }
            PurchaseTimelineService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            PurchaseTimelineService.prototype.GetPurchaseTimeline = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        PurchaseTimelineID: item.PurchaseTimelineID.toString(),
                        Title: item.Title,
                    });
                }
                return list;
            };
            PurchaseTimelineService.$inject = ["$http", "$q"];
            return PurchaseTimelineService;
        }(GCPL.Service.BaseService));
        Service.PurchaseTimelineService = PurchaseTimelineService;
        app.AddService("PurchaseTimelineService", PurchaseTimelineService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//GetCustomerDetails
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var LeadCustomerDetailsService = /** @class */ (function (_super) {
            __extends(LeadCustomerDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function LeadCustomerDetailsService($http, $q, _cookieStore) {
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
            LeadCustomerDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetLeadCustomerDetails";
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
            LeadCustomerDetailsService.prototype.GetLeadCustomerInfo = function (data) {
                var obj = new model.LeadCustomerListModel;
                obj.CompanyName = data.CustomerName;
                obj.BusinessPartnerNo = data.BusinessPartnerNo;
                obj.Email = data.Email;
                obj.MobileNo = data.MobileNo;
                obj.PhoneNo = data.PhoneNo;
                obj.Fax = data.Fax;
                obj.SalesOfficeID = data.SalesOfficeID;
                obj.SalesOffice = data.SalesOffice;
                obj.Address1 = data.Address1;
                obj.Address2 = data.Address2;
                obj.CountryID = data.CountryID;
                obj.StateID = data.StateID;
                obj.DistrictID = data.DistrictID;
                obj.City = data.City;
                obj.Pincode = data.Pincode;
                obj.CustomerID = data.CustomerID;
                obj.CustomerRatingID = data.CustomerRatingID;
                return obj;
            };
            LeadCustomerDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadCustomerDetailsService;
        }(GCPL.Service.BaseService));
        Service.LeadCustomerDetailsService = LeadCustomerDetailsService;
        app.AddService("LeadCustomerDetailsService", LeadCustomerDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//GetContactDetails
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadContactDetailsService = /** @class */ (function (_super) {
            __extends(LeadContactDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function LeadContactDetailsService($http, $q, _cookieStore) {
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
            LeadContactDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetLeadContactDetails";
                var CustomerID;
                debugger;
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
            LeadContactDetailsService.prototype.GetLeadContactInfo = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        ContactName: item.ContactName,
                        Email: item.Email,
                        MobileNo: item.MobileNo,
                        PhoneNo: item.PhoneNo,
                        Designation: item.Designation,
                        Department: item.Department,
                        FOP: item.FOP,
                        Address: item.Address,
                        Country: item.Country,
                        State: item.State,
                        District: item.District,
                        City: item.City,
                        PostalCode: item.PostalCode,
                        CustomerID: item.CustomerID,
                        ContactID: item.ContactID,
                        BusinessPartnerNo: item.BusinessPartnerNo
                    });
                }
                return list;
            };
            LeadContactDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadContactDetailsService;
        }(GCPL.Service.BaseService));
        Service.LeadContactDetailsService = LeadContactDetailsService;
        app.AddService("LeadContactDetailsService", LeadContactDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ContactInfoService = /** @class */ (function (_super) {
            __extends(ContactInfoService, _super);
            function ContactInfoService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = "" + _this.url;
                return _this;
            }
            ContactInfoService.prototype.Find = function (data) {
                debugger;
                var url = this.apiUrl + "/ContactDetails";
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
            ContactInfoService.prototype.GetContactName = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        ContactID: item.ContactID,
                        ContactName: item.ContactName
                    });
                }
                return list;
            };
            ContactInfoService.$inject = ["$http", "$q", "$cookieStore"];
            return ContactInfoService;
        }(GCPL.Service.BaseService));
        Service.ContactInfoService = ContactInfoService;
        app.AddService("ContactInfoService", ContactInfoService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//GetLeadDeatil
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadDetailsService = /** @class */ (function (_super) {
            __extends(LeadDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function LeadDetailsService($http, $q, _cookieStore) {
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
            LeadDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetExistingLeadDetails";
                var CustomerID;
                debugger;
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
            LeadDetailsService.prototype.GetLeadInfo = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    list.push({
                        CompanyName: item.CompanyName,
                        Email: item.Email,
                        MobileNo: item.MobileNo,
                        LeadID: item.LeadID,
                        ModelNo: item.ModelNo,
                        Status: item.Status,
                        AllocatedTO: item.AllocatedTO,
                        LeadCreationDate: item.LeadCreationDate,
                        CustomerID: item.CustomerID
                    });
                }
                return list;
            };
            LeadDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadDetailsService;
        }(GCPL.Service.BaseService));
        Service.LeadDetailsService = LeadDetailsService;
        app.AddService("LeadDetailsService", LeadDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadCustomerService = /** @class */ (function (_super) {
            __extends(InsertLeadCustomerService, _super);
            function InsertLeadCustomerService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertLeadCustomerMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadCustomerService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadCustomerService.prototype.PostCustomer = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadCustomerService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadCustomerService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadCustomerService = InsertLeadCustomerService;
        app.AddService("InsertLeadCustomerService", InsertLeadCustomerService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadCustomerGetDetailsService = /** @class */ (function (_super) {
            __extends(LeadCustomerGetDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function LeadCustomerGetDetailsService($http, $q, _cookieStore) {
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
            LeadCustomerGetDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetCustomerList";
                var CustomerName;
                var MobileNo;
                var Pincode;
                debugger;
                if (data.CompanyName == undefined) {
                    CustomerName = '';
                }
                else {
                    CustomerName = data.CompanyName;
                }
                if (data.MobileNo == undefined) {
                    MobileNo = '';
                }
                else {
                    MobileNo = data.MobileNo;
                }
                if (data.Pincode == undefined) {
                    Pincode = '';
                }
                else {
                    Pincode = data.Pincode;
                }
                var config = {
                    params: {
                        CustomerName: CustomerName,
                        MobileNo: MobileNo,
                        Pincode: Pincode
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadCustomerGetDetailsService.prototype.GetCustomerDetails = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                    var item = data_9[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CompanyName: item.CompanyName,
                        IsNational: ((item.IsNational == "True") ? "Yes" : "No"),
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        MobileNo: item.MobileNo,
                        Email: item.Email,
                        District: item.District,
                        SalesOffice: item.SalesOffice,
                        SalesArea: item.SalesArea,
                        Status: ((item.Status == "True") ? "Active" : "Inactive"),
                        PinCode: item.PinCode,
                        DistrictID: item.DistrictID
                    });
                }
                return list;
            };
            LeadCustomerGetDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadCustomerGetDetailsService;
        }(GCPL.Service.BaseService));
        Service.LeadCustomerGetDetailsService = LeadCustomerGetDetailsService;
        app.AddService("LeadCustomerGetDetailsService", LeadCustomerGetDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var GetCustomerNewDetailsService = /** @class */ (function (_super) {
            __extends(GetCustomerNewDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function GetCustomerNewDetailsService($http, $q, _cookieStore) {
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
            GetCustomerNewDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetFillCustomer";
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
            GetCustomerNewDetailsService.prototype.GetLeadCustomerNewInfo = function (data) {
                debugger;
                var obj = new model.GetCustomerNewModel;
                obj.CompanyName = data.CompanyName;
                obj.BusinessPartnerNo = data.BusinessPartnerNo;
                obj.SalesOfficeID = data.SalesOfficeID;
                obj.SalesOffice = data.SalesOffice;
                obj.Email = data.Email;
                obj.MobileNo = data.MobileNo;
                obj.Address1 = data.Address1;
                obj.Address2 = data.Address2;
                obj.Pincode = data.Pincode;
                obj.PhoneNo = data.PhoneNo;
                obj.Fax = data.Fax;
                obj.DistrictID = data.DistrictID;
                obj.StateID = data.StateID;
                obj.CountryID = data.CountryID;
                obj.City = data.City;
                obj.CustomerID = data.CustomerID;
                obj.IsNational = data.IsNational;
                obj.Area = data.Area;
                return obj;
            };
            GetCustomerNewDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return GetCustomerNewDetailsService;
        }(GCPL.Service.BaseService));
        Service.GetCustomerNewDetailsService = GetCustomerNewDetailsService;
        app.AddService("GetCustomerNewDetailsService", GetCustomerNewDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadCustomerGetDetails1Service = /** @class */ (function (_super) {
            __extends(LeadCustomerGetDetails1Service, _super);
            //static $inject = ["$http", "$q"];
            function LeadCustomerGetDetails1Service($http, $q, _cookieStore) {
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
            LeadCustomerGetDetails1Service.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetCustomerList";
                var CustomerName;
                var MobileNo;
                var Pincode;
                debugger;
                if (data.CompanyName == undefined) {
                    CustomerName = '';
                }
                else {
                    CustomerName = data.CompanyName;
                }
                if (data.MobileNo == undefined) {
                    MobileNo = '';
                }
                else {
                    MobileNo = data.MobileNo;
                }
                if (data.Pincode == undefined) {
                    Pincode = '';
                }
                else {
                    Pincode = data.Pincode;
                }
                var config = {
                    params: {
                        CustomerName: CustomerName,
                        MobileNo: MobileNo,
                        Pincode: Pincode
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadCustomerGetDetails1Service.prototype.GetCustomerDetails = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_10 = data; _i < data_10.length; _i++) {
                    var item = data_10[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CompanyName: item.CompanyName,
                        IsNational: ((item.IsNational == "True") ? "Yes" : "No"),
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        MobileNo: item.MobileNo,
                        Email: item.Email,
                        District: item.District,
                        SalesOffice: item.SalesOffice,
                        SalesArea: item.SalesArea,
                        Status: ((item.Status == "True") ? "Active" : "Inactive"),
                        PinCode: item.PinCode,
                        DistrictID: item.DistrictID
                    });
                }
                return list;
            };
            LeadCustomerGetDetails1Service.$inject = ["$http", "$q", "$cookieStore"];
            return LeadCustomerGetDetails1Service;
        }(GCPL.Service.BaseService));
        Service.LeadCustomerGetDetails1Service = LeadCustomerGetDetails1Service;
        app.AddService("LeadCustomerGetDetails1Service", LeadCustomerGetDetails1Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadCategotyWPDDService = /** @class */ (function (_super) {
            __extends(LeadCategotyWPDDService, _super);
            function LeadCategotyWPDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadCategoryWPDD";
                return _this;
            }
            LeadCategotyWPDDService.prototype.Find = function (data) {
                var LeadTypeID;
                if (data == undefined) {
                    LeadTypeID = "";
                }
                else {
                    LeadTypeID = data;
                }
                var config = {
                    params: {
                        LeadTypeID: LeadTypeID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadCategotyWPDDService.prototype.GetLeadCategoryddl = function (data) {
                var list = Array();
                for (var _i = 0, data_11 = data; _i < data_11.length; _i++) {
                    var item = data_11[_i];
                    list.push({
                        LeadCategoryID: item.LeadCategoryID.toString(),
                        LeadCategory: item.LeadCategory,
                    });
                }
                return list;
            };
            LeadCategotyWPDDService.$inject = ["$http", "$q"];
            return LeadCategotyWPDDService;
        }(GCPL.Service.BaseService));
        Service.LeadCategotyWPDDService = LeadCategotyWPDDService;
        app.AddService("LeadCategotyWPDDService", LeadCategotyWPDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadTypeProductService1 = /** @class */ (function (_super) {
            __extends(LeadTypeProductService1, _super);
            function LeadTypeProductService1($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadTypeProductModel1";
                return _this;
            }
            LeadTypeProductService1.prototype.Find = function (data) {
                var LeadType;
                var ProductID;
                var DivisionID;
                if (data.LeadType == undefined) {
                    LeadType = "";
                }
                else {
                    LeadType = data.LeadType;
                }
                if (data.ProductID == undefined) {
                    ProductID = "";
                }
                else {
                    ProductID = data.ProductID;
                }
                var config = {
                    params: {
                        LeadType: LeadType,
                        ProductID: ProductID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadTypeProductService1.prototype.GetLeadTypeProduct = function (data) {
                var list = Array();
                for (var _i = 0, data_12 = data; _i < data_12.length; _i++) {
                    var item = data_12[_i];
                    list.push({
                        ModelID: item.ModelID.toString(),
                        ModelNo: item.ModelNo
                    });
                }
                return list;
            };
            LeadTypeProductService1.$inject = ["$http", "$q"];
            return LeadTypeProductService1;
        }(GCPL.Service.BaseService));
        Service.LeadTypeProductService1 = LeadTypeProductService1;
        app.AddService("LeadTypeProductService1", LeadTypeProductService1);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateLeadFormService.js.map