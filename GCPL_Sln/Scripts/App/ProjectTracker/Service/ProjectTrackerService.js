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
        var ProjectDataService = /** @class */ (function (_super) {
            __extends(ProjectDataService, _super);
            function ProjectDataService($http, $q, _cookieStore) {
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
            ProjectDataService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetProjectData";
                var ProjectID;
                if (data == undefined) {
                    ProjectID = "";
                }
                else {
                    ProjectID = data;
                }
                var config = {
                    params: {
                        ProjectID: ProjectID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ProjectDataService.prototype.GetProjectData = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ProjectID: item.ProjectID,
                        ProjectName: item.ProjectName,
                        ProjectNo: item.ProjectNo,
                        ProjectTypeID: item.ProjectTypeID,
                        ProjectType: item.ProjectType,
                        ProjectStageID: item.ProjectStageID,
                        ProjectStage: item.ProjectStage,
                        Cost: item.Cost,
                        ProjectOwnershipID: item.ProjectOwnershipID,
                        ProjectOwnership: item.ProjectOwnership,
                        ProjectStartDate: item.ProjectStartDate,
                        CompletionDate: item.CompletionDate,
                        ProjectSourceID: item.ProjectSourceID,
                        ProjectSource: item.ProjectSource,
                        Comments: item.Comments,
                        ProjectIndustryID: item.ProjectIndustryID,
                        ProjectIndustry: item.ProjectIndustry,
                        CustProjectType: item.CustProjectType,
                        ProjectOwner: item.ProjectOwner,
                        ProjectManager: item.ProjectManager,
                        ProjectAssign: item.ProjectAssign,
                        ProjectManagerID: item.ProjectManagerID,
                        ProjectAssignID: item.ProjectAssignID,
                        ID: item.ID,
                        ZoneID: item.ZoneID
                    });
                }
                return list;
            };
            ProjectDataService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectDataService;
        }(GCPL.Service.BaseService));
        Service.ProjectDataService = ProjectDataService;
        app.AddService("ProjectDataService", ProjectDataService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectCustomerListService = /** @class */ (function (_super) {
            __extends(ProjectCustomerListService, _super);
            function ProjectCustomerListService($http, $q, _cookieStore) {
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
            ProjectCustomerListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetProjectCustomerData";
                var ProjectID;
                if (data == undefined) {
                    ProjectID = '';
                }
                else {
                    ProjectID = data;
                }
                var config = {
                    params: {
                        ProjectID: ProjectID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ProjectCustomerListService.prototype.GetProjectCustomerList = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ProjectID: item.ProjectID,
                        CustomerID: item.CustomerID,
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        CompanyName: item.CompanyName,
                        MobileNo: item.MobileNo,
                        Address1: item.Address1,
                        Address2: item.Address2,
                        State: item.State,
                        District: item.District,
                        City: item.City,
                        ProjectType: item.ProjectType,
                        ContactID: item.ContactID
                    });
                }
                return list;
            };
            ProjectCustomerListService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectCustomerListService;
        }(GCPL.Service.BaseService));
        Service.ProjectCustomerListService = ProjectCustomerListService;
        app.AddService("ProjectCustomerListService", ProjectCustomerListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectContactCustomerListService = /** @class */ (function (_super) {
            __extends(ProjectContactCustomerListService, _super);
            function ProjectContactCustomerListService($http, $q, _cookieStore) {
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
            ProjectContactCustomerListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetProjectContactCustomer";
                var CustomerID;
                //var ContactID;
                if (data == undefined) {
                    CustomerID = '';
                }
                else {
                    CustomerID = data;
                }
                //if (data1 == undefined) {
                //    ContactID = '';
                //}
                //else {
                //    ContactID = data1;
                //}
                var config = {
                    params: {
                        CustomerID: CustomerID
                        //ContactID: ContactID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ProjectContactCustomerListService.prototype.GetProjectContactCustomerList = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        ContactID: item.ContactID,
                        SAPID: item.SAPID,
                        ContactName: item.ContactName,
                        CustomerID: item.CustomerID,
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        MobileNo: item.MobileNo,
                        PhoneNo: item.PhoneNo,
                        Address: item.Address,
                        Email: item.Email,
                        Department: item.Department,
                        ProjectType: item.ProjectType
                    });
                }
                return list;
            };
            ProjectContactCustomerListService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectContactCustomerListService;
        }(GCPL.Service.BaseService));
        Service.ProjectContactCustomerListService = ProjectContactCustomerListService;
        app.AddService("ProjectContactCustomerListService", ProjectContactCustomerListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ProjectLeadCustomerDetailsService = /** @class */ (function (_super) {
            __extends(ProjectLeadCustomerDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function ProjectLeadCustomerDetailsService($http, $q, _cookieStore) {
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
            ProjectLeadCustomerDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetProjLeadCustomerDetails";
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
            ProjectLeadCustomerDetailsService.prototype.GetLeadCustomerInfo = function (data) {
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
            ProjectLeadCustomerDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectLeadCustomerDetailsService;
        }(GCPL.Service.BaseService));
        Service.ProjectLeadCustomerDetailsService = ProjectLeadCustomerDetailsService;
        app.AddService("ProjectLeadCustomerDetailsService", ProjectLeadCustomerDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjLeadContactDetailsService = /** @class */ (function (_super) {
            __extends(ProjLeadContactDetailsService, _super);
            //static $inject = ["$http", "$q"];
            function ProjLeadContactDetailsService($http, $q, _cookieStore) {
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
            ProjLeadContactDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetProjLeadContactDetails";
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
            ProjLeadContactDetailsService.prototype.GetLeadContactInfo = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
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
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        CustomerSAPID: item.CustomerSAPID
                    });
                }
                return list;
            };
            ProjLeadContactDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjLeadContactDetailsService;
        }(GCPL.Service.BaseService));
        Service.ProjLeadContactDetailsService = ProjLeadContactDetailsService;
        app.AddService("ProjLeadContactDetailsService", ProjLeadContactDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectCreateLeadListService = /** @class */ (function (_super) {
            __extends(ProjectCreateLeadListService, _super);
            function ProjectCreateLeadListService($http, $q, _cookieStore) {
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
            ProjectCreateLeadListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetProjectCreateLeadList";
                var config = {
                    params: {
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        ProjectID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ProjectCreateLeadListService.prototype.GetCreateLeadlist = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
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
                        CampaignName: item.CampaignName,
                        ProjectName: item.ProjectName,
                        ProjectNo: item.ProjectNo,
                        Allocated: item.Allocated,
                        ProjectType: item.ProjectType
                    });
                }
                return list;
            };
            ProjectCreateLeadListService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectCreateLeadListService;
        }(GCPL.Service.BaseService));
        Service.ProjectCreateLeadListService = ProjectCreateLeadListService;
        app.AddService("ProjectCreateLeadListService", ProjectCreateLeadListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectActivityListService = /** @class */ (function (_super) {
            __extends(ProjectActivityListService, _super);
            function ProjectActivityListService($http, $q, _cookieStore) {
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
            ProjectActivityListService.prototype.FindAct = function (data) {
                var url = this.apiUrl + "/GetProjectActivityList";
                var config = {
                    params: {
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        ProjectID: data.ProjectID,
                        ProjectStartDate: data.ProjectStartDate,
                        CompletionDate: data.CompletionDate
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ProjectActivityListService.prototype.GetUserActList = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CompanyName: item.CompanyName,
                        CustomerSAPID: item.CustomerSAPID,
                        ContactID: item.ContactID,
                        ContactName: item.ContactName,
                        ContactSAPID: item.ContactSAPID,
                        Note: item.Note,
                        ActivityID: item.ActivityID,
                        ActivityName: item.ActivityName,
                        ActivityDate: item.ActivityDate,
                        Status: item.Status,
                        IsActive: item.IsActive,
                        Purpose: item.Purpose,
                        Mode: item.Mode,
                        Location: item.Location,
                        ReferenceType: item.ReferenceType,
                        ReferenceLead: item.ReferenceLead,
                        ReferenceOpportunity: item.ReferenceOpportunity,
                        StartDate: item.StartDate.split(' ')[0],
                        EndDate: item.EndDate,
                        ActivityNumber: item.ActivityNumber,
                        ProjectID: item.ProjectID,
                        ProjectStartDate: item.ProjectStartDate,
                        CompletionDate: item.CompletionDate,
                        SalesRep: item.SalesRep
                    });
                }
                return list;
            };
            ProjectActivityListService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectActivityListService;
        }(GCPL.Service.BaseService));
        Service.ProjectActivityListService = ProjectActivityListService;
        app.AddService("ProjectActivityListService", ProjectActivityListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectInsertService = /** @class */ (function (_super) {
            __extends(ProjectInsertService, _super);
            function ProjectInsertService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ProjectInsertLeadDetails";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ProjectInsertService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ProjectInsertService.prototype.PostLead = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            ProjectInsertService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectInsertService;
        }(GCPL.Service.BaseService));
        Service.ProjectInsertService = ProjectInsertService;
        app.AddService("ProjectInsertService", ProjectInsertService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectInsertServicenew = /** @class */ (function (_super) {
            __extends(ProjectInsertServicenew, _super);
            function ProjectInsertServicenew($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "NewProjectInsertLeadDetails";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ProjectInsertServicenew.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ProjectInsertServicenew.prototype.PostLead = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            ProjectInsertServicenew.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectInsertServicenew;
        }(GCPL.Service.BaseService));
        Service.ProjectInsertServicenew = ProjectInsertServicenew;
        app.AddService("ProjectInsertServicenew", ProjectInsertServicenew);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectInsertNewContact = /** @class */ (function (_super) {
            __extends(ProjectInsertNewContact, _super);
            function ProjectInsertNewContact($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "PromotorNewContactInsert";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ProjectInsertNewContact.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ProjectInsertNewContact.prototype.PostNewPromotorContact = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            ProjectInsertNewContact.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectInsertNewContact;
        }(GCPL.Service.BaseService));
        Service.ProjectInsertNewContact = ProjectInsertNewContact;
        app.AddService("ProjectInsertNewContact", ProjectInsertNewContact);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectInsertCustomerService = /** @class */ (function (_super) {
            __extends(ProjectInsertCustomerService, _super);
            function ProjectInsertCustomerService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ProjectInsertCustomerMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ProjectInsertCustomerService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ProjectInsertCustomerService.prototype.PostCustomer = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            ProjectInsertCustomerService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectInsertCustomerService;
        }(GCPL.Service.BaseService));
        Service.ProjectInsertCustomerService = ProjectInsertCustomerService;
        app.AddService("ProjectInsertCustomerService", ProjectInsertCustomerService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteContactService = /** @class */ (function (_super) {
            __extends(DeleteContactService, _super);
            function DeleteContactService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteProjectContact";
                return _this;
            }
            DeleteContactService.prototype.Find = function (data, data1) {
                var config = {
                    params: {
                        ContactID: data,
                        ProjectID: data1
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteContactService.prototype.postContactDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteContactService.$inject = ["$http", "$q"];
            return DeleteContactService;
        }(GCPL.Service.BaseService));
        Service.DeleteContactService = DeleteContactService;
        app.AddService("DeleteContactService", DeleteContactService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectLeadCustomerGeService = /** @class */ (function (_super) {
            __extends(ProjectLeadCustomerGeService, _super);
            //static $inject = ["$http", "$q"];
            function ProjectLeadCustomerGeService($http, $q, _cookieStore) {
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
            ProjectLeadCustomerGeService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetProjectCustomerDataList";
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
            ProjectLeadCustomerGeService.prototype.GetCustomerDetails = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
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
                        DistrictID: item.DistrictID,
                        CustAddress: item.CustAddress
                    });
                }
                return list;
            };
            ProjectLeadCustomerGeService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectLeadCustomerGeService;
        }(GCPL.Service.BaseService));
        Service.ProjectLeadCustomerGeService = ProjectLeadCustomerGeService;
        app.AddService("ProjectLeadCustomerGeService", ProjectLeadCustomerGeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteProjectCustomerService = /** @class */ (function (_super) {
            __extends(DeleteProjectCustomerService, _super);
            function DeleteProjectCustomerService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteProjectCustomer";
                return _this;
            }
            DeleteProjectCustomerService.prototype.Find = function (data, data1) {
                var config = {
                    params: {
                        CustomerID: data,
                        ProjectID: data1
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteProjectCustomerService.prototype.PostCustomerDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteProjectCustomerService.$inject = ["$http", "$q"];
            return DeleteProjectCustomerService;
        }(GCPL.Service.BaseService));
        Service.DeleteProjectCustomerService = DeleteProjectCustomerService;
        app.AddService("DeleteProjectCustomerService", DeleteProjectCustomerService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProjectTrackerService.js.map