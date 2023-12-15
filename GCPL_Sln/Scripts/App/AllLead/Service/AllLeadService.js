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
        var AllLeadsReportGridService = /** @class */ (function (_super) {
            __extends(AllLeadsReportGridService, _super);
            function AllLeadsReportGridService($http, $q, _cookieStore) {
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
            AllLeadsReportGridService.prototype.FindGrid = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "AllLeadsReport";
                var CustomerMobile;
                var LeadID;
                var FromDate;
                var ToDate;
                var CustomerName;
                var ProductID;
                var SourceID;
                var DivisionID;
                var StatusID;
                var RegionID;
                var StateIDs;
                var UserID;
                var CampaignID;
                var DistrictID;
                var LeadSourceID;
                var Createdby;
                var AllocatedTo;
                var SubsourceID;
                var Subsource2ID;
                var ModelId;
                var ZoneID;
                var Campaign;
                var LeadOrigin;
                var SAPID;
                var UserID1;
                var LeadType;
                var CustomerID;
                var RoleID;
                var Opportunity;
                var ProjectID;
                if (data.CustomerMobile == undefined) {
                    CustomerMobile = '';
                }
                else {
                    CustomerMobile = data.CustomerMobile;
                }
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.FromDate == undefined) {
                    FromDate = '';
                }
                else {
                    FromDate = data.FromDate;
                }
                if (data.ToDate == undefined) {
                    ToDate = '';
                }
                else {
                    ToDate = data.ToDate;
                }
                if (data.CustomerName == undefined) {
                    CustomerName = '';
                }
                else {
                    CustomerName = data.CustomerName;
                }
                if (data.CustomerID == undefined) {
                    CustomerID = '';
                }
                else {
                    CustomerID = data.CustomerID;
                }
                if (data.ProductID == undefined) {
                    ProductID = '';
                }
                else {
                    ProductID = data.ProductID;
                }
                if (data.SourceID == undefined) {
                    SourceID = '';
                }
                else {
                    SourceID = data.SourceID;
                }
                if (data.DivisionID == undefined) {
                    DivisionID = '';
                }
                else {
                    DivisionID = data.DivisionID;
                }
                if (data.StatusID == undefined) {
                    StatusID = '';
                }
                else {
                    StatusID = data.StatusID;
                }
                if (data.RegionID == undefined) {
                    RegionID = '';
                }
                else {
                    RegionID = data.RegionID;
                }
                if (data.StateIDs == undefined) {
                    StateIDs = '';
                }
                else {
                    StateIDs = data.StateIDs;
                }
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.CampaignID == undefined) {
                    CampaignID = '';
                }
                else {
                    CampaignID = data.CampaignID;
                }
                if (data.DistrictID == undefined) {
                    DistrictID = '';
                }
                else {
                    DistrictID = data.DistrictID;
                }
                if (data.LeadSourceID == undefined) {
                    LeadSourceID = '';
                }
                else {
                    LeadSourceID = data.LeadSourceID;
                }
                if (data.Createdby == undefined) {
                    Createdby = '';
                }
                else {
                    Createdby = data.Createdby;
                }
                if (data.AllocatedTo == undefined) {
                    AllocatedTo = '';
                }
                else {
                    AllocatedTo = data.AllocatedTo;
                }
                if (data.SubsourceID == undefined) {
                    SubsourceID = '';
                }
                else {
                    SubsourceID = data.SubsourceID;
                }
                if (data.Subsource2ID == undefined) {
                    Subsource2ID = '';
                }
                else {
                    Subsource2ID = data.Subsource2ID;
                }
                if (data.ModelId == undefined) {
                    ModelId = '';
                }
                else {
                    ModelId = data.ModelId;
                }
                if (data.ZoneID == undefined) {
                    ZoneID = '';
                }
                else {
                    ZoneID = data.ZoneID;
                }
                if (data.Campaign == undefined) {
                    Campaign = '';
                }
                else {
                    Campaign = data.Campaign;
                }
                if (data.SAPID == undefined) {
                    SAPID = '';
                }
                else {
                    SAPID = data.SAPID;
                }
                if (data.UserID1 == undefined) {
                    UserID1 = '';
                }
                else {
                    UserID1 = data.UserID1;
                }
                if (data.LeadOrigin == undefined) {
                    LeadOrigin = '';
                }
                else {
                    LeadOrigin = data.LeadOrigin;
                }
                if (data.LeadType == undefined) {
                    LeadType = '';
                }
                else {
                    LeadType = data.LeadType;
                }
                if (data.Opportunity == undefined) {
                    Opportunity = '';
                }
                else {
                    Opportunity = data.Opportunity;
                }
                if (data.ProjectID == undefined) {
                    ProjectID = '';
                }
                else {
                    ProjectID = data.ProjectID;
                }
                var config = {
                    params: {
                        CustomerMobile: CustomerMobile,
                        LeadID: LeadID,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        CustomerName: CustomerName,
                        ProductID: ProductID,
                        SourceID: SourceID,
                        DivisionID: DivisionID,
                        StatusID: StatusID,
                        RegionID: RegionID,
                        StateIDs: StateIDs,
                        UserID: UserID,
                        CampaignID: CampaignID,
                        DistrictID: DistrictID,
                        LeadSourceID: LeadSourceID,
                        Createdby: Createdby,
                        AllocatedTo: AllocatedTo,
                        SubsourceID: SubsourceID,
                        Subsource2ID: Subsource2ID,
                        ModelId: ModelId,
                        ZoneID: ZoneID,
                        Campaign: Campaign,
                        LeadOrigin: LeadOrigin,
                        SAPID: SAPID,
                        UserID1: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        LeadType: LeadType,
                        CustomerID: CustomerID,
                        Opportunity: Opportunity,
                        ProjectID: ProjectID,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            AllLeadsReportGridService.prototype.GetAllLeadsGrid = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadID: item.LeadID,
                        CompanyName: item.CompanyName,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        PurchaseWithin: item.PurchaseWithin,
                        Region: item.Region,
                        CreatedBy: item.CreatedBy,
                        CreatedDate: item.CreatedDate,
                        ValidatedBy: item.ValidatedBy,
                        AllocatedTo: item.AllocatedTo,
                        Status: item.Status,
                        ContactID: item.ContactID,
                        CustomerID: item.CustomerID,
                        AssessmentDate: item.AssessmentDate,
                        LeadSource: item.LeadSource,
                        CustMobNo: item.CustMobNo,
                        CustPhnNo: item.CustPhnNo,
                        ContactPerName: item.ContactPerName,
                        ContactPerNo: item.ContactPerName,
                        ContactPerMob: item.ContactPerMob,
                        SAPID: item.SAPID,
                        Latitude: item.Latitude,
                        Longitude: item.Longitude,
                        LeadType: item.LeadType,
                        LeadOrigin: item.LeadOrigin,
                        Zone: item.Zone,
                        ValidateDate: item.ValidateDate,
                        Division: item.Division,
                        AssessmentComments: item.AssessmentComments,
                        OpportunityNo: item.OpportunityNo,
                        Quantity: item.Quantity,
                        RefUserName: item.RefUserName,
                        CampaignName: item.CampaignName,
                        State: item.State,
                        District: item.District,
                        EmpCode: item.EmpCode,
                        EmployeeCode: item.EmployeeCode,
                        ProjectName: item.ProjectName,
                        VLEID: item.VLEID,
                        Description: item.Description,
                        VLELeadID: item.VLELeadID,
                        VLEName: item.VLEName,
                        ProjectNo: item.ProjectNo,
                        InvalidReasonID: item.InvalidReasonID,
                        DisqualificationReasonID: item.DisqualificationReasonID,
                        SalesWithin: item.SalesWithin,
                        Que1: item.Que1,
                        QueAns1: item.QueAns1,
                        Que2: item.Que2,
                        QueAns2: item.QueAns2,
                        Que3: item.Que3,
                        QueAns3: item.QueAns3
                    });
                }
                return list;
            };
            AllLeadsReportGridService.$inject = ["$http", "$q", "$cookieStore"];
            return AllLeadsReportGridService;
        }(GCPL.Service.BaseService));
        Service.AllLeadsReportGridService = AllLeadsReportGridService;
        app.AddService("AllLeadsReportGridService", AllLeadsReportGridService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var getAutoProjectNameService = /** @class */ (function (_super) {
            __extends(getAutoProjectNameService, _super);
            function getAutoProjectNameService($http, $q, _cookieStore) {
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
            getAutoProjectNameService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/ProjectNameAUtofill";
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
            getAutoProjectNameService.prototype.GetAutProjName = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ProjectID: item.ProjectID,
                        ProjectName: item.ProjectName
                    });
                }
                return list;
            };
            getAutoProjectNameService.$inject = ["$http", "$q", "$cookieStore"];
            return getAutoProjectNameService;
        }(GCPL.Service.BaseService));
        Service.getAutoProjectNameService = getAutoProjectNameService;
        //inject service
        app.AddService("getAutoProjectNameService", getAutoProjectNameService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var StateddPService = /** @class */ (function (_super) {
            __extends(StateddPService, _super);
            function StateddPService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "StateDD";
                return _this;
            }
            StateddPService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            StateddPService.prototype.GetStateName = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        StateID: item.StateID.toString(),
                        State: item.State,
                    });
                }
                return list;
            };
            StateddPService.$inject = ["$http", "$q"];
            return StateddPService;
        }(GCPL.Service.BaseService));
        Service.StateddPService = StateddPService;
        app.AddService("StateddPService", StateddPService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadSourceddService = /** @class */ (function (_super) {
            __extends(LeadSourceddService, _super);
            function LeadSourceddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadSourceDD";
                return _this;
            }
            LeadSourceddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadSourceddService.prototype.GetLeadSource = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        LeadSourceID: item.LeadSourceID.toString(),
                        LeadSource: item.LeadSource,
                    });
                }
                return list;
            };
            LeadSourceddService.$inject = ["$http", "$q"];
            return LeadSourceddService;
        }(GCPL.Service.BaseService));
        Service.LeadSourceddService = LeadSourceddService;
        app.AddService("LeadSourceddService", LeadSourceddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var AllLeadReportService = /** @class */ (function (_super) {
            __extends(AllLeadReportService, _super);
            function AllLeadReportService($http, $q, _cookieStore) {
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
            AllLeadReportService.prototype.Find = function (data) {
                var url = this.apiUrl + "/AllLeadsReportView";
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
            AllLeadReportService.prototype.GetAllLeadReportView = function (data) {
                var obj = new model.AllLeadReportViewModel();
                debugger;
                obj.LeadID = data.LeadID;
                obj.CustName = data.CustName;
                obj.CustEmail = data.CustEmail;
                obj.CustMobNo = data.CustMobNo;
                obj.CustPhnNo = data.CustPhnNo;
                obj.CustAddress = data.CustAddress;
                obj.ContName = data.ContName;
                obj.ContEmail = data.ContEmail;
                obj.ContMobNo = data.ContMobNo;
                obj.ContPhnNo = data.ContPhnNo;
                obj.ContAddress = data.ContAddress;
                obj.LeadModel = data.LeadModel;
                obj.PurchaseWithin = data.PurchaseWithin;
                obj.SpecifyMore = data.SpecifyMore;
                obj.Quantity = data.Quantity;
                obj.CreatedBy = data.CreatedBy;
                obj.CreatedDate = data.CreatedDate;
                obj.Source = data.Source;
                obj.Campaign = data.Campaign;
                obj.LeadCreationComments = data.LeadCreationComments;
                obj.ValidatedBy = data.ValidatedBy;
                obj.DateValidated = data.DateValidated;
                obj.ValidationComment = data.ValidationComment;
                obj.AllocatedTo = data.AllocatedTo;
                obj.AllocatedDate = data.AllocatedDate;
                obj.AssessmentDate = data.AssessmentDate;
                obj.Lessthan90days = data.Lessthan90days;
                obj.MetCustomer = data.MetCustomer;
                obj.AssessmentComments = data.AssessmentComments;
                obj.LeadStatus = data.LeadStatus;
                obj.ClosedBy = data.ClosedBy;
                obj.ClosedDate = data.ClosedDate;
                obj.ClosedComments = data.ClosedComments;
                obj.RefUserName = data.RefUserName;
                obj.OpportunityNo = data.OpportunityNo;
                obj.LeadOrigin = data.LeadOrigin;
                obj.ReturnUserID = data.ReturnUserID;
                obj.ReturnComment = data.ReturnComment;
                obj.ReturnUserName = data.ReturnUserName;
                obj.DateReturn = data.DateReturn;
                obj.ProjectName = data.ProjectName;
                obj.InvalidReasonID = data.InvalidReasonID;
                obj.DisqualificationReasonID = data.DisqualificationReasonID;
                return obj;
            };
            AllLeadReportService.$inject = ["$http", "$q", "$cookieStore"];
            return AllLeadReportService;
        }(GCPL.Service.BaseService));
        Service.AllLeadReportService = AllLeadReportService;
        app.AddService("AllLeadReportService", AllLeadReportService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//validate list
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ValidateLeadInfoService = /** @class */ (function (_super) {
            __extends(ValidateLeadInfoService, _super);
            function ValidateLeadInfoService($http, $q, _cookieStore) {
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
            ValidateLeadInfoService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetDetailsToValidate";
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
            ValidateLeadInfoService.prototype.GetValidateLead = function (data) {
                var obj = new model.ValidateLeadInfoModel();
                obj.RefUserID = data.RefUserID;
                obj.RefUserName = data.RefUser;
                obj.CustomerID = data.CustomerID;
                obj.LeadStatusId = data.LeadStatusId;
                obj.ContactID = data.ContactID;
                obj.ModelID = data.ModelID;
                obj.PurchaseTimelineID = data.PurchaseTimelineID;
                obj.Comments = data.Comments;
                obj.CompanyName = data.CompanyName;
                obj.MobileNo = data.MobileNo;
                obj.Email = data.Email;
                obj.Address1 = data.Address1;
                obj.Address2 = data.Address2;
                obj.DistrictID = data.DistrictID;
                obj.Pincode = data.Pincode;
                obj.City = data.City;
                obj.ContactName = data.ContactName;
                obj.ContactMobileNo = data.ContactMobileNo;
                obj.ContactEmail = data.ContactEmail;
                obj.DepartmentID = data.DepartmentID;
                obj.Department = data.Department;
                obj.FOPID = data.FOPID;
                obj.FOP = data.FOP;
                obj.StateID = data.StateID;
                obj.State = data.State;
                obj.CountryID = data.CountryID;
                obj.Country = data.Country;
                obj.District = data.District;
                obj.ContactDistrictID = data.ContactDistrictID;
                obj.ContactStateID = data.ContactStateID;
                obj.ContactCountryID = data.ContactCountryID;
                obj.ContactCity = data.ContactCity;
                obj.Address = data.Address;
                obj.ContactState = data.ContactState;
                obj.ContactDistrict = data.ContactDistrict;
                obj.CategoryID = data.CategoryID;
                obj.DivisionID = data.DivisionID;
                obj.ProductID = data.ProductID;
                obj.PhoneNo = data.PhoneNo;
                obj.Fax = data.Fax;
                obj.ContactPhoneNo = data.ContactPhoneNo;
                obj.SalesOfficeID = data.SalesOfficeID;
                obj.SalesOffice = data.SalesOffice;
                obj.LeadCategoryID = data.LeadCategoryID;
                obj.LeadSourceID = data.LeadSourceID;
                obj.IsNational = data.IsNational;
                obj.BusinessPartnerNo = data.BusinessPartnerNo;
                obj.SAPID = data.SAPID;
                obj.Quantity = data.Quantity;
                obj.LeadType = data.LeadType;
                obj.CampaignNameID = data.CampaignNameID;
                obj.CustomerRatingID = data.CustomerRatingID;
                obj.CustomerRating = data.CustomerRating;
                obj.ChannelID = data.ChannelID;
                obj.LeadID = data.LeadID;
                obj.IndustryDivisionID = data.IndustryDivisionID;
                obj.IndustrialSegmentID = data.IndustrialSegmentID;
                obj.UserID = data.UserID;
                obj.SalesAreaID = data.SalesAreaID;
                obj.Product = data.Product;
                obj.EmployeeCode = data.EmployeeCode;
                obj.PostalCode = data.PostalCode;
                obj.ConStateSAPID = data.ConStateSAPID;
                obj.ModelNo = data.ModelNo;
                obj.ProjectID = data.ProjectID;
                return obj;
            };
            ValidateLeadInfoService.prototype.FindModel = function (data) {
                debugger;
                var url = this.apiUrl + "/GetModelProduct";
                var ModelID;
                if (data == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data;
                }
                var config = {
                    params: {
                        ModelID: data
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ValidateLeadInfoService.prototype.GetModel = function (data) {
                debugger;
                var obj = new model.Modelno();
                obj.ModelNo = data;
                return obj;
            };
            ValidateLeadInfoService.prototype.FindProduct = function (data) {
                debugger;
                var url = this.apiUrl + "/GetProduct";
                var ProductID;
                if (data == undefined) {
                    ProductID = "";
                }
                else {
                    ProductID = data;
                }
                var config = {
                    params: {
                        ProductID: data
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ValidateLeadInfoService.prototype.GetProduct = function (data) {
                debugger;
                var obj = new model.Product();
                obj.Product = data;
                return obj;
            };
            ValidateLeadInfoService.$inject = ["$http", "$q", "$cookieStore"];
            return ValidateLeadInfoService;
        }(GCPL.Service.BaseService));
        Service.ValidateLeadInfoService = ValidateLeadInfoService;
        app.AddService("ValidateLeadInfoService", ValidateLeadInfoService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CampaignAtofillService = /** @class */ (function (_super) {
            __extends(CampaignAtofillService, _super);
            function CampaignAtofillService($http, $q, _cookieStore) {
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
            CampaignAtofillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            CampaignAtofillService.prototype.FilterCampaignAutoComplete = function (data) {
                var url = this.apiUrl + "/CampaignAutofill";
                var config = {
                    params: {
                        SearchText: data.term,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CampaignAtofillService.prototype.GetCampaignAutEmployee = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        CampaignID: item.CampaignID,
                        CampaignName: item.CampaignName
                    });
                }
                return list;
            };
            CampaignAtofillService.$inject = ["$http", "$q", "$cookieStore"];
            return CampaignAtofillService;
        }(GCPL.Service.BaseService));
        Service.CampaignAtofillService = CampaignAtofillService;
        //inject service
        app.AddService("CampaignAtofillService", CampaignAtofillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UserNameAtofillService = /** @class */ (function (_super) {
            __extends(UserNameAtofillService, _super);
            function UserNameAtofillService($http, $q, _cookieStore) {
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
            UserNameAtofillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UserNameAtofillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/UserAUtofillDeligation";
                var UserID;
                var ManagerName;
                var RoleID;
                debugger;
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.term == undefined) {
                    ManagerName = '';
                }
                else {
                    ManagerName = data.term;
                }
                if (data.RoleID == undefined) {
                    RoleID = '';
                }
                else {
                    RoleID = data.RoleID;
                }
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        ManagerName: ManagerName,
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            UserNameAtofillService.prototype.GetAutEmployee = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        userid: item.userid,
                        ManagerEmployeeCode: item.ManagerEmployeeCode,
                        ManagerName: item.ManagerName
                    });
                }
                return list;
            };
            UserNameAtofillService.$inject = ["$http", "$q", "$cookieStore"];
            return UserNameAtofillService;
        }(GCPL.Service.BaseService));
        Service.UserNameAtofillService = UserNameAtofillService;
        //inject service
        app.AddService("UserNameAtofillService", UserNameAtofillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ModelwpddService = /** @class */ (function (_super) {
            __extends(ModelwpddService, _super);
            function ModelwpddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ModelwpDD";
                return _this;
            }
            ModelwpddService.prototype.Find = function (data) {
                var LeadType;
                if (data == undefined) {
                    LeadType = "";
                }
                else {
                    LeadType = data;
                }
                var config = {
                    params: {
                        LeadType: LeadType
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ModelwpddService.prototype.GetModelName = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        ModelID: item.ModelID.toString(),
                        ModelNo: item.ModelNo
                    });
                }
                return list;
            };
            ModelwpddService.$inject = ["$http", "$q"];
            return ModelwpddService;
        }(GCPL.Service.BaseService));
        Service.ModelwpddService = ModelwpddService;
        app.AddService("ModelwpddService", ModelwpddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var LeadsStatusCountService = /** @class */ (function (_super) {
            __extends(LeadsStatusCountService, _super);
            function LeadsStatusCountService($http, $q, _cookieStore) {
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
            LeadsStatusCountService.prototype.FindGrid = function (data) {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                var url = this.apiUrl + "LeadStatusCount";
                var CustomerMobile;
                var LeadID;
                var FromDate;
                var ToDate;
                var CustomerName;
                var ProductID;
                var SourceID;
                var DivisionID;
                var StatusID;
                var RegionID;
                var StateIDs;
                var UserID;
                var CampaignID;
                var DistrictID;
                var LeadSourceID;
                var Createdby;
                var AllocatedTo;
                var SubsourceID;
                var Subsource2ID;
                var ModelId;
                var Campaign;
                var LeadOrigin;
                var SAPID;
                var UserID1;
                var LeadType;
                if (data.CustomerMobile == undefined) {
                    CustomerMobile = '';
                }
                else {
                    CustomerMobile = data.CustomerMobile;
                }
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.FromDate == undefined) {
                    FromDate = '';
                }
                else {
                    FromDate = data.FromDate;
                }
                if (data.ToDate == undefined) {
                    ToDate = '';
                }
                else {
                    ToDate = data.ToDate;
                }
                if (data.CustomerName == undefined) {
                    CustomerName = '';
                }
                else {
                    CustomerName = data.CustomerName;
                }
                if (data.ProductID == undefined) {
                    ProductID = '';
                }
                else {
                    ProductID = data.ProductID;
                }
                if (data.SourceID == undefined) {
                    SourceID = '';
                }
                else {
                    SourceID = data.SourceID;
                }
                if (data.DivisionID == undefined) {
                    DivisionID = '';
                }
                else {
                    DivisionID = data.DivisionID;
                }
                if (data.StatusID == undefined) {
                    StatusID = '';
                }
                else {
                    StatusID = data.StatusID;
                }
                if (data.RegionID == undefined) {
                    RegionID = '';
                }
                else {
                    RegionID = data.RegionID;
                }
                if (data.StateIDs == undefined) {
                    StateIDs = '';
                }
                else {
                    StateIDs = data.StateIDs;
                }
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.CampaignID == undefined) {
                    CampaignID = '';
                }
                else {
                    CampaignID = data.CampaignID;
                }
                if (data.DistrictID == undefined) {
                    DistrictID = '';
                }
                else {
                    DistrictID = data.DistrictID;
                }
                if (data.LeadSourceID == undefined) {
                    LeadSourceID = '';
                }
                else {
                    LeadSourceID = data.LeadSourceID;
                }
                if (data.Createdby == undefined) {
                    Createdby = '';
                }
                else {
                    Createdby = data.Createdby;
                }
                if (data.AllocatedTo == undefined) {
                    AllocatedTo = '';
                }
                else {
                    AllocatedTo = data.AllocatedTo;
                }
                if (data.SubsourceID == undefined) {
                    SubsourceID = '';
                }
                else {
                    SubsourceID = data.SubsourceID;
                }
                if (data.Subsource2ID == undefined) {
                    Subsource2ID = '';
                }
                else {
                    Subsource2ID = data.Subsource2ID;
                }
                if (data.ModelId == undefined) {
                    ModelId = '';
                }
                else {
                    ModelId = data.ModelId;
                }
                if (data.Campaign == undefined) {
                    Campaign = '';
                }
                else {
                    Campaign = data.Campaign;
                }
                if (data.SAPID == undefined) {
                    SAPID = '';
                }
                else {
                    SAPID = data.SAPID;
                }
                if (data.UserID1 == undefined) {
                    UserID1 = '';
                }
                else {
                    UserID1 = data.UserID1;
                }
                if (data.LeadOrigin == undefined) {
                    LeadOrigin = '';
                }
                else {
                    LeadOrigin = data.LeadOrigin;
                }
                if (data.LeadType == undefined) {
                    LeadType = '';
                }
                else {
                    LeadType = data.LeadType;
                }
                var config = {
                    params: {
                        CustomerMobile: CustomerMobile,
                        LeadID: LeadID,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        CustomerName: CustomerName,
                        ProductID: ProductID,
                        SourceID: SourceID,
                        DivisionID: DivisionID,
                        StatusID: StatusID,
                        RegionID: RegionID,
                        StateIDs: StateIDs,
                        UserID: UserID,
                        CampaignID: CampaignID,
                        DistrictID: DistrictID,
                        LeadSourceID: LeadSourceID,
                        Createdby: Createdby,
                        AllocatedTo: AllocatedTo,
                        SubsourceID: SubsourceID,
                        Subsource2ID: Subsource2ID,
                        ModelId: ModelId,
                        Campaign: Campaign,
                        LeadOrigin: LeadOrigin,
                        SAPID: SAPID,
                        UserID1: UserID1,
                        LeadType: LeadType
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadsStatusCountService.prototype.GetLeadsStatusCountGrid = function (data) {
                console.log(data);
                var list = new model.LeadStatusModel();
                if (data == null || data == undefined) {
                    list.Allocated = "";
                    list.Deferred = "";
                    list.Delayed = "";
                    list.Inprocess = "";
                    list.ActivityCreated = "";
                    list.ActivityCompleted = "";
                    list.Converted = "";
                }
                else {
                    list.Allocated = data.Allocated;
                    list.Deferred = data.Deferred;
                    list.Delayed = data.Delayed;
                    list.Inprocess = data.Inprocess;
                    list.ActivityCreated = data.ActivityCreated;
                    list.ActivityCompleted = data.ActivityCompleted;
                    list.Converted = data.Converted;
                }
                return list;
            };
            LeadsStatusCountService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadsStatusCountService;
        }(GCPL.Service.BaseService));
        Service.LeadsStatusCountService = LeadsStatusCountService;
        app.AddService("LeadsStatusCountService", LeadsStatusCountService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AllLeadService.js.map