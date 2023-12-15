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
//List
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CreateLeadListService = /** @class */ (function (_super) {
            __extends(CreateLeadListService, _super);
            function CreateLeadListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.Cookie = _cookieStore;
                _this.apiUrl = "" + _this.url;
                return _this;
            }
            CreateLeadListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetCreateLeadList";
                var SearchInput;
                var StatusID;
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
                var config = {
                    params: {
                        SearchInput: SearchInput,
                        StatusID: StatusID,
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateLeadListService.prototype.GetCreateLeadlist = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CompanyName: item.CompanyName,
                        WhenEntered: item.WhenEntered,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        Title: item.Title,
                        Status: item.Status,
                        FirstName: item.FirstName,
                        MobileNo: item.MobileNo,
                        LeadID: item.LeadID,
                        CustomerID: item.CustomerID,
                        ContactID: item.ContactID,
                        LeadSource: item.LeadSource,
                        Quantity: item.Quantity,
                        Channel: item.Channel,
                        RefEmp: item.RefEmp,
                        CampaignName: item.CampaignName
                    });
                }
                return list;
            };
            CreateLeadListService.$inject = ["$http", "$q", "$cookieStore"];
            return CreateLeadListService;
        }(GCPL.Service.BaseService));
        Service.CreateLeadListService = CreateLeadListService;
        app.AddService("CreateLeadListService", CreateLeadListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//LeadStatus dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadStatusddService = /** @class */ (function (_super) {
            __extends(LeadStatusddService, _super);
            function LeadStatusddService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadStatusDD";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadStatusddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadStatusddService.prototype.GetLeadStatusName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        LeadStatusID: item.LeadStatusID.toString(),
                        Status: item.Status,
                    });
                }
                return list;
            };
            LeadStatusddService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadStatusddService;
        }(GCPL.Service.BaseService));
        Service.LeadStatusddService = LeadStatusddService;
        app.AddService("LeadStatusddService", LeadStatusddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//lead validate list
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CustomerViewService = /** @class */ (function (_super) {
            __extends(CustomerViewService, _super);
            function CustomerViewService($http, $q, _cookieStore) {
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
            CustomerViewService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetLeadViewDetails";
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
                    Url: url,
                    Config: config
                });
            };
            CustomerViewService.prototype.GetCustomerView = function (data) {
                var obj = new model.CustomerViewModel();
                obj.CompanyName = data.CompanyName;
                obj.CustomerID = data.CustomerID;
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
                obj.ContactID = data.ContactID;
                obj.ContactName = data.ContactName;
                obj.SAPID = data.SAPID;
                obj.PostalCode = data.PostalCode;
                obj.ConEmail = data.ConEmail;
                obj.ConMobileNo = data.ConMobileNo;
                obj.Address = data.Address;
                obj.ConPhoneNo = data.ConPhoneNo;
                obj.ConDistrictID = data.ConDistrictID;
                obj.ConStateID = data.ConStateID;
                obj.ConCountryID = data.ConCountryID;
                obj.ConCity = data.ConCity;
                obj.Designation = data.Designation;
                obj.Department = data.Department;
                obj.DepartmentID = data.DepartmentID;
                obj.FOPID = data.FOPID;
                obj.FOP = data.FOP;
                obj.ModelNo = data.ModelNo;
                obj.Quantity = data.Quantity;
                obj.Title = data.Title;
                obj.Comments = data.Comments;
                obj.LeadCategory = data.LeadCategory;
                obj.LeadCategoryID = data.LeadCategoryID;
                obj.LeadID = data.LeadID;
                obj.CampaignName = data.CampaignName;
                obj.CreatedBy = data.CreatedBy;
                obj.CreateComment = data.CreateComment;
                obj.SourceID = data.SourceID;
                obj.WhenCreated = data.WhenCreated;
                obj.ValidatedBy = data.ValidatedBy;
                obj.ValidComment = data.ValidComment;
                obj.WhenValidated = data.WhenValidated;
                obj.Allocated = data.Allocated;
                obj.WhenAllocated = data.WhenAllocated;
                obj.AssessmentComment = data.AssessmentComment;
                obj.AssessmentDate = data.AssessmentDate;
                obj.Status = data.Status;
                obj.IsLess = ((data.IsLess == "True") ? "Yes" : "No");
                obj.IsMeet = ((data.IsMeet == "True") ? "Yes" : "No");
                obj.LeadSource = data.LeadSource;
                obj.ReturnUserID = data.ReturnUserID;
                obj.ReturnComment = data.ReturnComment;
                obj.ReturnUserName = data.ReturnUserName;
                obj.DateReturn = data.DateReturn;
                obj.ProjectName = data.ProjectName;
                return obj;
            };
            CustomerViewService.$inject = ["$http", "$q", "$cookieStore"];
            return CustomerViewService;
        }(GCPL.Service.BaseService));
        Service.CustomerViewService = CustomerViewService;
        app.AddService("CustomerViewService", CustomerViewService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//customer validate list
//namespace GCPL.Service {
//    import app = GCPL.app;
//    import model = GCPL.Model;
//    export interface IContactViewService {
//        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
//        GetContactView(data: any): model.CustomerViewModel;
//    }
//    export class ContactViewService extends GCPL.Service.BaseService implements IContactViewService {
//        private apiUrl: string = "";
//        private Cookie: any = null;
//        static $inject = ["$http", "$q", "$cookieStore"];
//        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
//            super($http, $q);
//            //this.apiUrl = `${this.url}/${"FillCustomerList"}`;
//            this.apiUrl = `${this.url}`;
//            this.Cookie = _cookieStore;
//        }
//        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
//            var url = this.apiUrl + "/GetContactViewDetails";
//            var ContactID;
//            if (data == undefined) {
//                ContactID = "";
//            }
//            else {
//                ContactID = data;
//            }
//            let config = {
//                params: {
//                    ContactID: ContactID
//                }
//            };
//            console.log(config);
//            return this.ajaXUtility.Get({
//                Url: url,
//                Config: config
//            });
//        }
//        GetContactView(data: any): model.CustomerViewModel {
//            let obj = new model.CustomerViewModel();
//            obj.CompanyName = data.CompanyName;
//            obj.CustomerID = data.CustomerID;
//            obj.BusinessPartnerNo = data.BusinessPartnerNo;
//            obj.SalesOfficeID = data.SalesOfficeID;
//            obj.SalesOffice = data.SalesOffice;
//            obj.Email = data.Email;
//            obj.MobileNo = data.MobileNo;
//            obj.Address1 = data.Address1;
//            obj.Address2 = data.Address2;
//            obj.Pincode = data.Pincode;
//            obj.PhoneNo = data.PhoneNo;
//            obj.Fax = data.Fax;
//            obj.DistrictID = data.DistrictID;
//            obj.StateID = data.StateID;
//            obj.CountryID = data.CountryID;
//            obj.City = data.City;
//            return obj;
//        }
//    }
//    app.AddService("ContactViewService", ContactViewService);
//}
//# sourceMappingURL=CreateLeadService.js.map