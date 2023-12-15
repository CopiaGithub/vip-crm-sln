// Edit
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
        var model = GCPL.Model;
        var LeadOverrideEditService = /** @class */ (function (_super) {
            __extends(LeadOverrideEditService, _super);
            function LeadOverrideEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillLeadOverride";
                return _this;
            }
            LeadOverrideEditService.prototype.Find = function (data) {
                var LeadID;
                if (data == undefined) {
                    LeadID = "";
                }
                else {
                    LeadID = data;
                }
                var config = {
                    params: {
                        LeadID: LeadID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadOverrideEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditLeadOverrideModel();
                obj.LeadID = data.LeadID;
                obj.LeadStatusID = data.LeadStatusID;
                obj.LeadReason = data.LeadReason;
                obj.CompanyName = data.CompanyName;
                obj.SalesOfficeID = data.SalesOfficeID;
                obj.MobileNo = data.MobileNo;
                obj.PhoneNo = data.PhoneNo;
                obj.Fax = data.Fax;
                obj.Email = data.Email;
                obj.Address1 = data.Address1;
                obj.Address2 = data.Address2;
                obj.CountryID = data.CountryID;
                obj.StateID = data.StateID;
                obj.DistrictID = data.DistrictID;
                obj.RegionID = data.RegionID;
                obj.City = data.City;
                obj.PinCode = data.PinCode;
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
                obj.LeadType = data.LeadType;
                obj.CategoryID = data.CategoryID;
                obj.DivisionID = data.DivisionID;
                obj.ProductID = data.ProductID;
                obj.ModelID = data.ModelID;
                obj.Quantity = data.Quantity;
                obj.PurchaseTimelineID = data.PurchaseTimelineID;
                obj.LeadCategoryID = data.LeadCategoryID;
                obj.ChannelID = data.ChannelID;
                obj.SalesAreaID = data.SalesAreaID;
                obj.LeadSourceID = data.LeadSourceID;
                obj.SpecifyMore = data.SpecifyMore;
                obj.RefUserID = data.RefUserID;
                obj.RefUserName = data.RefUserName;
                obj.CampaignID = data.CampaignID;
                obj.ProjectID = data.ProjectID;
                obj.ProjectName = data.ProjectName;
                return obj;
            };
            LeadOverrideEditService.$inject = ["$http", "$q"];
            return LeadOverrideEditService;
        }(GCPL.Service.BaseService));
        Service.LeadOverrideEditService = LeadOverrideEditService;
        app.AddService("LeadOverrideEditService", LeadOverrideEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Reason for Lead dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ReasonForLeadDDService = /** @class */ (function (_super) {
            __extends(ReasonForLeadDDService, _super);
            function ReasonForLeadDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ReasonForLeadDD";
                return _this;
            }
            ReasonForLeadDDService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ReasonForLeadDDService.prototype.GetReason = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    debugger;
                    list.push({
                        ID: item.ID,
                        Reason: item.Reason
                    });
                }
                return list;
            };
            ReasonForLeadDDService.$inject = ["$http", "$q"];
            return ReasonForLeadDDService;
        }(GCPL.Service.BaseService));
        Service.ReasonForLeadDDService = ReasonForLeadDDService;
        app.AddService("ReasonForLeadDDService", ReasonForLeadDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//lead for closer
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadStatusForCloserDDService = /** @class */ (function (_super) {
            __extends(LeadStatusForCloserDDService, _super);
            function LeadStatusForCloserDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadStatusForCloser";
                return _this;
            }
            LeadStatusForCloserDDService.prototype.Find = function (data) {
                var LeadID;
                if (data == undefined) {
                    LeadID = "";
                }
                else {
                    LeadID = data;
                }
                var config = {
                    params: {
                        LeadID: LeadID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadStatusForCloserDDService.prototype.GetLeadCloser = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    debugger;
                    list.push({
                        LeadStatusID: item.LeadStatusID,
                        Status: item.Status
                    });
                }
                return list;
            };
            LeadStatusForCloserDDService.$inject = ["$http", "$q"];
            return LeadStatusForCloserDDService;
        }(GCPL.Service.BaseService));
        Service.LeadStatusForCloserDDService = LeadStatusForCloserDDService;
        app.AddService("LeadStatusForCloserDDService", LeadStatusForCloserDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UpdateLeadOverrideService = /** @class */ (function (_super) {
            __extends(UpdateLeadOverrideService, _super);
            function UpdateLeadOverrideService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UpdateSLeadOverride";
                _this.Cookie = _cookieStore;
                return _this;
            }
            UpdateLeadOverrideService.prototype.Find = function () {
                debugger;
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UpdateLeadOverrideService.prototype.PostLeadOverride = function (data) {
                debugger;
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            UpdateLeadOverrideService.$inject = ["$http", "$q", "$cookieStore"];
            return UpdateLeadOverrideService;
        }(GCPL.Service.BaseService));
        Service.UpdateLeadOverrideService = UpdateLeadOverrideService;
        app.AddService("UpdateLeadOverrideService", UpdateLeadOverrideService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadOverrideResubmitService.js.map