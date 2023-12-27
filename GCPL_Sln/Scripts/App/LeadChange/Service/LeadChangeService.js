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
        var LeadChangeEditService = /** @class */ (function (_super) {
            __extends(LeadChangeEditService, _super);
            function LeadChangeEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillLeadChange";
                return _this;
            }
            LeadChangeEditService.prototype.Find = function (data) {
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
            LeadChangeEditService.prototype.GetEdit = function (data) {
                var obj = new model.EditLeadChangeModel();
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
                obj.ID = data.ID;
                obj.SPName = data.SPName;
                obj.SPMobileNo = data.SPMobileNo;
                obj.SPEmail = data.SPEmail;
                obj.SPDesignation = data.SPDesignation;
                obj.TcDetails = data.TcDetails;
                return obj;
            };
            LeadChangeEditService.$inject = ["$http", "$q"];
            return LeadChangeEditService;
        }(GCPL.Service.BaseService));
        Service.LeadChangeEditService = LeadChangeEditService;
        app.AddService("LeadChangeEditService", LeadChangeEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadStatusForOpenDDService = /** @class */ (function (_super) {
            __extends(LeadStatusForOpenDDService, _super);
            function LeadStatusForOpenDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadStatusForOpen";
                return _this;
            }
            LeadStatusForOpenDDService.prototype.Find = function (data) {
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
            LeadStatusForOpenDDService.prototype.GetLeadOpen = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadStatusID: item.LeadStatusID,
                        Status: item.Status
                    });
                }
                return list;
            };
            LeadStatusForOpenDDService.$inject = ["$http", "$q"];
            return LeadStatusForOpenDDService;
        }(GCPL.Service.BaseService));
        Service.LeadStatusForOpenDDService = LeadStatusForOpenDDService;
        app.AddService("LeadStatusForOpenDDService", LeadStatusForOpenDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UpdateLeadChangeService = /** @class */ (function (_super) {
            __extends(UpdateLeadChangeService, _super);
            function UpdateLeadChangeService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UpdateSLeadChange";
                _this.Cookie = _cookieStore;
                return _this;
            }
            UpdateLeadChangeService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UpdateLeadChangeService.prototype.PostLeadChange = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            UpdateLeadChangeService.$inject = ["$http", "$q", "$cookieStore"];
            return UpdateLeadChangeService;
        }(GCPL.Service.BaseService));
        Service.UpdateLeadChangeService = UpdateLeadChangeService;
        app.AddService("UpdateLeadChangeService", UpdateLeadChangeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ReasonForLeadOpenDDService = /** @class */ (function (_super) {
            __extends(ReasonForLeadOpenDDService, _super);
            function ReasonForLeadOpenDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ReasonForLeadOpenDD";
                return _this;
            }
            ReasonForLeadOpenDDService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ReasonForLeadOpenDDService.prototype.GetReason = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ID: item.ID,
                        Reason: item.Reason
                    });
                }
                return list;
            };
            ReasonForLeadOpenDDService.$inject = ["$http", "$q"];
            return ReasonForLeadOpenDDService;
        }(GCPL.Service.BaseService));
        Service.ReasonForLeadOpenDDService = ReasonForLeadOpenDDService;
        app.AddService("ReasonForLeadOpenDDService", ReasonForLeadOpenDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadChangeService.js.map