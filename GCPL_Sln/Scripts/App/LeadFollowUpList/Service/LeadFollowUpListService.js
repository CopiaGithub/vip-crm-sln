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
        var FollowUpListService = /** @class */ (function (_super) {
            __extends(FollowUpListService, _super);
            function FollowUpListService($http, $q, _cookieStore) {
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
            FollowUpListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/LeadFollowUpList";
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
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            FollowUpListService.prototype.Getlist = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadID: item.LeadID,
                        Status: item.Status,
                        CreatedDate: item.CreatedDate,
                        AllocatedTo: item.AllocatedTo,
                        CompanyName: item.CompanyName,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        PurchaseWithin: item.PurchaseWithin,
                        Region: item.Region,
                        CreatedBy: item.CreatedBy,
                        ValidatedBy: item.ValidatedBy,
                        ContactID: item.ContactID,
                        AssessmentDate: item.AssessmentDate,
                        CustomerID: item.CustomerID,
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
                        FollowUpCount: item.FollowUpCount
                    });
                }
                return list;
            };
            FollowUpListService.$inject = ["$http", "$q", "$cookieStore"];
            return FollowUpListService;
        }(GCPL.Service.BaseService));
        Service.FollowUpListService = FollowUpListService;
        app.AddService("FollowUpListService", FollowUpListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Question list
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadFUQuestionsService = /** @class */ (function (_super) {
            __extends(LeadFUQuestionsService, _super);
            function LeadFUQuestionsService($http, $q, _cookieStore) {
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
            LeadFUQuestionsService.prototype.Find = function () {
                var url = this.apiUrl + "/GetFollowupQuestions";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadFUQuestionsService.prototype.GetQuestion = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    //
                    list.push({
                        QuestionID: item.QuestionID,
                        Question: item.Question
                    });
                }
                return list;
            };
            LeadFUQuestionsService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadFUQuestionsService;
        }(GCPL.Service.BaseService));
        Service.LeadFUQuestionsService = LeadFUQuestionsService;
        app.AddService("LeadFUQuestionsService", LeadFUQuestionsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Answers list
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadFUAnswersService = /** @class */ (function (_super) {
            __extends(LeadFUAnswersService, _super);
            function LeadFUAnswersService($http, $q, _cookieStore) {
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
            LeadFUAnswersService.prototype.FindAns = function (data) {
                var url = this.apiUrl + "/GetFollowupAnswers";
                var config = {
                    params: {
                        QuestionID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadFUAnswersService.prototype.GetAns = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        QuestionID: item.QuestionID,
                        AnswerID: item.AnswerID,
                        Answer: item.Answer
                    });
                }
                return list;
            };
            LeadFUAnswersService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadFUAnswersService;
        }(GCPL.Service.BaseService));
        Service.LeadFUAnswersService = LeadFUAnswersService;
        app.AddService("LeadFUAnswersService", LeadFUAnswersService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadQueAnsService = /** @class */ (function (_super) {
            __extends(InsertLeadQueAnsService, _super);
            function InsertLeadQueAnsService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertLeadQueAns";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadQueAnsService.prototype.Find = function (data) {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadQueAnsService.prototype.PostQueAns = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadQueAnsService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadQueAnsService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadQueAnsService = InsertLeadQueAnsService;
        app.AddService("InsertLeadQueAnsService", InsertLeadQueAnsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//LeadFollowup Status Dropdown
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadFollupStatusService = /** @class */ (function (_super) {
            __extends(LeadFollupStatusService, _super);
            function LeadFollupStatusService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadFollupStausDD";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadFollupStatusService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadFollupStatusService.prototype.GetLeadStatusFollup = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        LeadStatusID: item.LeadStatusID.toString(),
                        Status: item.Status,
                    });
                }
                return list;
            };
            LeadFollupStatusService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadFollupStatusService;
        }(GCPL.Service.BaseService));
        Service.LeadFollupStatusService = LeadFollupStatusService;
        app.AddService("LeadFollupStatusService", LeadFollupStatusService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Lead followup History
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var FollUpHistListService = /** @class */ (function (_super) {
            __extends(FollUpHistListService, _super);
            function FollUpHistListService($http, $q, _cookieStore) {
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
            FollUpHistListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/FollUpHistList";
                var LeadNo;
                if (data == undefined) {
                    LeadNo = '';
                }
                else {
                    LeadNo = data;
                }
                var config = {
                    params: {
                        LeadID: LeadNo
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            FollUpHistListService.prototype.Getlist = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        LeadID: item.LeadID,
                        SpokeTo: item.SpokeTo,
                        PhoneNo: item.PhoneNo,
                        Question1: item.Question1,
                        Question2: item.Question2,
                        Question3: item.Question3,
                        Question4: item.Question4,
                        Question5: item.Question5,
                        Question6: item.Question6,
                        Answer1: item.Answer1,
                        Answer2: item.Answer2,
                        Answer3: item.Answer3,
                        Answer4: item.Answer4,
                        Answer5: item.Answer5,
                        Answer6: item.Answer6,
                        FollowupDate: item.FollowupDate,
                        CustomerID: item.CustomerID,
                        FollowupStatus: item.FollowupStatus,
                        AnswerText: item.AnswerText,
                        FollowupBy: item.FollowupBy,
                        BusinessPartnerNo: item.BusinessPartnerNo
                    });
                }
                return list;
            };
            FollUpHistListService.$inject = ["$http", "$q", "$cookieStore"];
            return FollUpHistListService;
        }(GCPL.Service.BaseService));
        Service.FollUpHistListService = FollUpHistListService;
        app.AddService("FollUpHistListService", FollUpHistListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadFollowUpListService.js.map