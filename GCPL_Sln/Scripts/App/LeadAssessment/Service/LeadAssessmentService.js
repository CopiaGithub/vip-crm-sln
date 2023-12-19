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
        var LeadAssessmentService = /** @class */ (function (_super) {
            __extends(LeadAssessmentService, _super);
            function LeadAssessmentService($http, $q, _cookieStore) {
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
            LeadAssessmentService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetDetailsToAssessment";
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
            LeadAssessmentService.prototype.GetLeadAssessment = function (data) {
                var obj = new model.LeadAssessmentInfoModel();
                obj.RefUserID = data.RefUserID;
                obj.RefUser = data.RefUser;
                obj.CustomerID = data.CustomerID;
                obj.LeadStatusId = data.LeadStatusId;
                obj.SalesStage = data.SalesStage;
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
                obj.Description = data.Description;
                obj.Notes = data.Notes;
                return obj;
            };
            LeadAssessmentService.prototype.FindModel = function (data) {
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
            LeadAssessmentService.prototype.GetModel = function (data) {
                var obj = new model.Modelno();
                obj.ModelNo = data;
                return obj;
            };
            LeadAssessmentService.prototype.FindProduct = function (data) {
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
            LeadAssessmentService.prototype.GetProduct = function (data) {
                var obj = new model.Product();
                obj.Product = data;
                return obj;
            };
            LeadAssessmentService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadAssessmentService;
        }(GCPL.Service.BaseService));
        Service.LeadAssessmentService = LeadAssessmentService;
        app.AddService("LeadAssessmentService", LeadAssessmentService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CrtAssessmtServiceService = /** @class */ (function (_super) {
            __extends(CrtAssessmtServiceService, _super);
            function CrtAssessmtServiceService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateOpportunityAssessment";
                _this.Cookie = _cookieStore;
                return _this;
            }
            CrtAssessmtServiceService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            CrtAssessmtServiceService.prototype.PostCrtAssessmt = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CrtAssessmtServiceService.$inject = ["$http", "$q", "$cookieStore"];
            return CrtAssessmtServiceService;
        }(GCPL.Service.BaseService));
        Service.CrtAssessmtServiceService = CrtAssessmtServiceService;
        app.AddService("CrtAssessmtServiceService", CrtAssessmtServiceService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadReturnService = /** @class */ (function (_super) {
            __extends(LeadReturnService, _super);
            function LeadReturnService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadAssessmentReturn";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadReturnService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            LeadReturnService.prototype.PostReturn = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            LeadReturnService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadReturnService;
        }(GCPL.Service.BaseService));
        Service.LeadReturnService = LeadReturnService;
        app.AddService("LeadReturnService", LeadReturnService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UpdateLeadDataService = /** @class */ (function (_super) {
            __extends(UpdateLeadDataService, _super);
            function UpdateLeadDataService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UpdateLeadData";
                _this.Cookie = _cookieStore;
                return _this;
            }
            UpdateLeadDataService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UpdateLeadDataService.prototype.PostUpdateLeadData = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            UpdateLeadDataService.$inject = ["$http", "$q", "$cookieStore"];
            return UpdateLeadDataService;
        }(GCPL.Service.BaseService));
        Service.UpdateLeadDataService = UpdateLeadDataService;
        app.AddService("UpdateLeadDataService", UpdateLeadDataService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadActivityService = /** @class */ (function (_super) {
            __extends(InsertLeadActivityService, _super);
            function InsertLeadActivityService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateLeadActivity";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadActivityService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadActivityService.prototype.PostInsertLeadActivity = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadActivityService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadActivityService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadActivityService = InsertLeadActivityService;
        app.AddService("InsertLeadActivityService", InsertLeadActivityService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadQuestionsService = /** @class */ (function (_super) {
            __extends(InsertLeadQuestionsService, _super);
            function InsertLeadQuestionsService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateLeadQuesionnaire";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadQuestionsService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadQuestionsService.prototype.PostInsertLeadQuestions = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadQuestionsService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadQuestionsService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadQuestionsService = InsertLeadQuestionsService;
        app.AddService("InsertLeadQuestionsService", InsertLeadQuestionsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteItemService = /** @class */ (function (_super) {
            __extends(DeleteItemService, _super);
            function DeleteItemService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteItem";
                return _this;
            }
            DeleteItemService.prototype.Find = function (data) {
                var config = {
                    params: {
                        ItemID: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteItemService.prototype.postItemDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteItemService.$inject = ["$http", "$q"];
            return DeleteItemService;
        }(GCPL.Service.BaseService));
        Service.DeleteItemService = DeleteItemService;
        app.AddService("DeleteItemService", DeleteItemService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadOpportunity = /** @class */ (function (_super) {
            __extends(LeadOpportunity, _super);
            function LeadOpportunity($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateLeadOpp";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadOpportunity.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            LeadOpportunity.prototype.PostLeadOpp = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            LeadOpportunity.$inject = ["$http", "$q", "$cookieStore"];
            return LeadOpportunity;
        }(GCPL.Service.BaseService));
        Service.LeadOpportunity = LeadOpportunity;
        app.AddService("LeadOpportunity", LeadOpportunity);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Activity List
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadActivityListService = /** @class */ (function (_super) {
            __extends(LeadActivityListService, _super);
            function LeadActivityListService($http, $q, _cookieStore) {
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
            LeadActivityListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetLeadActivityList";
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        LeadID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadActivityListService.prototype.GetLeadActivityList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ID: item.ID,
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
                        StartDate: item.StartDate,
                        EndDate: item.EndDate,
                        ActivityNumber: item.ActivityNumber
                    });
                }
                return list;
            };
            LeadActivityListService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadActivityListService;
        }(GCPL.Service.BaseService));
        Service.LeadActivityListService = LeadActivityListService;
        app.AddService("LeadActivityListService", LeadActivityListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Ques List
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadQueAnsService = /** @class */ (function (_super) {
            __extends(LeadQueAnsService, _super);
            function LeadQueAnsService($http, $q, _cookieStore) {
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
            LeadQueAnsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetLeadQueAnsDetails";
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        LeadID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadQueAnsService.prototype.GetLeadQueAns = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        UserID: item.UserID,
                        LeadID: item.LeadID,
                        OpportunityID: item.OpportunityID,
                        OpportunityStageID: item.OpportunityStageID,
                        QueID: item.QueID,
                        Question: item.Question,
                        AnsID: item.AnsID,
                        Answer: item.Answer,
                        LeadSource: item.LeadSource
                    });
                }
                return list;
            };
            LeadQueAnsService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadQueAnsService;
        }(GCPL.Service.BaseService));
        Service.LeadQueAnsService = LeadQueAnsService;
        app.AddService("LeadQueAnsService", LeadQueAnsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Mode
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ModeActivityService = /** @class */ (function (_super) {
            __extends(ModeActivityService, _super);
            function ModeActivityService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ActCatddl";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ModeActivityService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ModeActivityService.prototype.GetModeActivity = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        ModeID: item.ModeID.toString(),
                        Mode: item.Mode,
                    });
                }
                return list;
            };
            ModeActivityService.$inject = ["$http", "$q", "$cookieStore"];
            return ModeActivityService;
        }(GCPL.Service.BaseService));
        Service.ModeActivityService = ModeActivityService;
        app.AddService("ModeActivityService", ModeActivityService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Activity Status
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadActivityStatusDDservice = /** @class */ (function (_super) {
            __extends(LeadActivityStatusDDservice, _super);
            function LeadActivityStatusDDservice($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "GetActStatus";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadActivityStatusDDservice.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadActivityStatusDDservice.prototype.LeadActivityStatus = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        StatusID: item.StatusID.toString(),
                        Status: item.Status,
                    });
                }
                return list;
            };
            LeadActivityStatusDDservice.$inject = ["$http", "$q", "$cookieStore"];
            return LeadActivityStatusDDservice;
        }(GCPL.Service.BaseService));
        Service.LeadActivityStatusDDservice = LeadActivityStatusDDservice;
        app.AddService("LeadActivityStatusDDservice", LeadActivityStatusDDservice);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Activit Purpose
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadActivityPurposeDDservice = /** @class */ (function (_super) {
            __extends(LeadActivityPurposeDDservice, _super);
            function LeadActivityPurposeDDservice($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "GetActPurpose";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadActivityPurposeDDservice.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadActivityPurposeDDservice.prototype.GetLeadActivityPurpose = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        Description: item.Description,
                        LeadSourceID: item.LeadSourceID,
                        LeadSource: item.LeadSource,
                    });
                }
                return list;
            };
            LeadActivityPurposeDDservice.$inject = ["$http", "$q", "$cookieStore"];
            return LeadActivityPurposeDDservice;
        }(GCPL.Service.BaseService));
        Service.LeadActivityPurposeDDservice = LeadActivityPurposeDDservice;
        app.AddService("LeadActivityPurposeDDservice", LeadActivityPurposeDDservice);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Activity Location
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadActivityLocationDDservice = /** @class */ (function (_super) {
            __extends(LeadActivityLocationDDservice, _super);
            function LeadActivityLocationDDservice($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "GetActLocation";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadActivityLocationDDservice.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadActivityLocationDDservice.prototype.GetLeadActivityLocation = function (data) {
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        LocationID: item.LocationID.toString(),
                        Location: item.Location,
                    });
                }
                return list;
            };
            LeadActivityLocationDDservice.$inject = ["$http", "$q", "$cookieStore"];
            return LeadActivityLocationDDservice;
        }(GCPL.Service.BaseService));
        Service.LeadActivityLocationDDservice = LeadActivityLocationDDservice;
        app.AddService("LeadActivityLocationDDservice", LeadActivityLocationDDservice);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Activity Ans1 Service
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var QAns1Service = /** @class */ (function (_super) {
            __extends(QAns1Service, _super);
            function QAns1Service($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "GetActivityAns1";
                _this.Cookie = _cookieStore;
                return _this;
            }
            QAns1Service.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            QAns1Service.prototype.GetAns1 = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        AnsID: item.AnsID.toString(),
                        QueID: item.QueID,
                        Answer: item.Answer,
                    });
                }
                return list;
            };
            QAns1Service.$inject = ["$http", "$q", "$cookieStore"];
            return QAns1Service;
        }(GCPL.Service.BaseService));
        Service.QAns1Service = QAns1Service;
        app.AddService("QAns1Service", QAns1Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Activity Ans2 Service
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var QAns2Service = /** @class */ (function (_super) {
            __extends(QAns2Service, _super);
            function QAns2Service($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "GetActivityAns2";
                _this.Cookie = _cookieStore;
                return _this;
            }
            QAns2Service.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            QAns2Service.prototype.GetAns2 = function (data) {
                var list = Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    list.push({
                        AnsID: item.AnsID.toString(),
                        QueID: item.QueID,
                        Answer: item.Answer,
                    });
                }
                return list;
            };
            QAns2Service.$inject = ["$http", "$q", "$cookieStore"];
            return QAns2Service;
        }(GCPL.Service.BaseService));
        Service.QAns2Service = QAns2Service;
        app.AddService("QAns2Service", QAns2Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead Activity Ans3 Service
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var QAns3Service = /** @class */ (function (_super) {
            __extends(QAns3Service, _super);
            function QAns3Service($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "GetActivityAns3";
                _this.Cookie = _cookieStore;
                return _this;
            }
            QAns3Service.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            QAns3Service.prototype.GetAns3 = function (data) {
                var list = Array();
                for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                    var item = data_9[_i];
                    list.push({
                        AnsID: item.AnsID.toString(),
                        QueID: item.QueID,
                        Answer: item.Answer,
                    });
                }
                return list;
            };
            QAns3Service.$inject = ["$http", "$q", "$cookieStore"];
            return QAns3Service;
        }(GCPL.Service.BaseService));
        Service.QAns3Service = QAns3Service;
        app.AddService("QAns3Service", QAns3Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var EditActivityList = /** @class */ (function (_super) {
            __extends(EditActivityList, _super);
            function EditActivityList($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "EditLeadActivityList";
                return _this;
            }
            EditActivityList.prototype.Find = function (data) {
                var ActivityNumber;
                if (data == undefined) {
                    ActivityNumber = "";
                }
                else {
                    ActivityNumber = data;
                }
                var config = {
                    params: {
                        ActivityNumber: ActivityNumber
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            EditActivityList.prototype.GetEdit = function (data) {
                var obj = new model.EditActivityModel();
                // obj.ActivityNumber = data.ActivityNumber
                // obj.CustomerID = data.CustomerID,
                // obj.CompanyName = data.CompanyName,
                // obj.CustomerSAPID = data.CustomerSAPID,
                // obj.ContactID = data.ContactID,
                // obj.ContactName = data.ContactName
                // obj.ContactSAPID = data.ContactSAPID,
                // obj.note = data.Note,
                // obj.ActivityID = data.ActivityID,
                // obj.ActivityName = data.ActivityName,
                // obj.ActivityDate = data.ActivityDate,
                // obj.ActivityStatus = data.Status,
                // obj.IsActive = data.IsActive,
                // obj.purid = data.Purpose,
                // obj.cate = data.Mode,
                // obj.loc = data.Location,
                // obj.ReferenceType = data.ReferenceType,
                // obj.ReferenceLead = data.ReferenceLead,
                // obj.ReferenceOpportunity = data.ReferenceOpportunity,
                // obj.date = data.StartDate,
                //obj.EndDate = data.EndDate
                obj.ActivityNumber = data.ActivityNumber;
                obj.CustomerID = data.CustomerID,
                    obj.CompanyName = data.CompanyName,
                    obj.CustomerSAPID = data.CustomerSAPID,
                    obj.ContactID = data.ContactID,
                    obj.ContactName = data.ContactName,
                    obj.ContactSAPID = data.ContactSAPID,
                    obj.ActivityNote = data.Note,
                    obj.ActivityID = data.ActivityID,
                    obj.ActivityName = data.ActivityName,
                    obj.ActivityDate = data.ActivityDate,
                    obj.ActivityStatus = data.Status,
                    obj.IsActive = data.IsActive,
                    obj.ActivityPurpose = data.Purpose,
                    obj.ActivityCategory = data.Mode,
                    obj.LocationID = data.Location,
                    obj.ReferenceType = data.ReferenceType,
                    obj.ReferenceLead = data.ReferenceLead,
                    obj.ReferenceOpportunity = data.ReferenceOpportunity,
                    obj.date = data.StartDate,
                    obj.EndDate = data.EndDate;
                return obj;
            };
            EditActivityList.$inject = ["$http", "$q"];
            return EditActivityList;
        }(GCPL.Service.BaseService));
        Service.EditActivityList = EditActivityList;
        app.AddService("EditActivityList", EditActivityList);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CreateInSAPLeadActivityService = /** @class */ (function (_super) {
            __extends(CreateInSAPLeadActivityService, _super);
            function CreateInSAPLeadActivityService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateInSAPLeadActivity";
                _this.Cookie = _cookieStore;
                return _this;
            }
            CreateInSAPLeadActivityService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            CreateInSAPLeadActivityService.prototype.PostCreateInSAPLeadActivity = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateInSAPLeadActivityService.$inject = ["$http", "$q", "$cookieStore"];
            return CreateInSAPLeadActivityService;
        }(GCPL.Service.BaseService));
        Service.CreateInSAPLeadActivityService = CreateInSAPLeadActivityService;
        app.AddService("CreateInSAPLeadActivityService", CreateInSAPLeadActivityService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadToOppSAPService = /** @class */ (function (_super) {
            __extends(InsertLeadToOppSAPService, _super);
            function InsertLeadToOppSAPService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateLeadToOppInSAP";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadToOppSAPService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadToOppSAPService.prototype.PostLeadToOppSAP = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadToOppSAPService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadToOppSAPService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadToOppSAPService = InsertLeadToOppSAPService;
        app.AddService("InsertLeadToOppSAPService", InsertLeadToOppSAPService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DisqualificationReasonDDService = /** @class */ (function (_super) {
            __extends(DisqualificationReasonDDService, _super);
            function DisqualificationReasonDDService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "GetLeadDisqualifiedReasons";
                _this.Cookie = _cookieStore;
                return _this;
            }
            DisqualificationReasonDDService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            DisqualificationReasonDDService.prototype.GetDisqualifiedName = function (data) {
                var list = Array();
                for (var _i = 0, data_10 = data; _i < data_10.length; _i++) {
                    var item = data_10[_i];
                    list.push({
                        DisqualificationID: item.DisqualificationID,
                        Description: item.Description
                    });
                }
                return list;
            };
            DisqualificationReasonDDService.$inject = ["$http", "$q"];
            return DisqualificationReasonDDService;
        }(GCPL.Service.BaseService));
        Service.DisqualificationReasonDDService = DisqualificationReasonDDService;
        app.AddService("DisqualificationReasonDDService", DisqualificationReasonDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadStageDDService = /** @class */ (function (_super) {
            __extends(LeadStageDDService, _super);
            function LeadStageDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "SalesStageDD";
                return _this;
            }
            LeadStageDDService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadStageDDService.prototype.GetStage = function (data) {
                var list = Array();
                for (var _i = 0, data_11 = data; _i < data_11.length; _i++) {
                    var item = data_11[_i];
                    list.push({
                        ID: item.ID,
                        Stage: item.Stage
                    });
                }
                return list;
            };
            LeadStageDDService.$inject = ["$http", "$q"];
            return LeadStageDDService;
        }(GCPL.Service.BaseService));
        Service.LeadStageDDService = LeadStageDDService;
        app.AddService("LeadStageDDService", LeadStageDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadStatusDDService = /** @class */ (function (_super) {
            __extends(LeadStatusDDService, _super);
            function LeadStatusDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadStatus";
                return _this;
            }
            LeadStatusDDService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadStatusDDService.prototype.GetStage = function (data) {
                var list = Array();
                for (var _i = 0, data_12 = data; _i < data_12.length; _i++) {
                    var item = data_12[_i];
                    list.push({
                        LeadStatusID: item.LeadStatusID,
                        Status: item.Status
                    });
                }
                return list;
            };
            LeadStatusDDService.$inject = ["$http", "$q"];
            return LeadStatusDDService;
        }(GCPL.Service.BaseService));
        Service.LeadStatusDDService = LeadStatusDDService;
        app.AddService("LeadStatusDDService", LeadStatusDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadAssessmentService.js.map