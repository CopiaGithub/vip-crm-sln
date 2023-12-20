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
        var AssessmentListService = /** @class */ (function (_super) {
            __extends(AssessmentListService, _super);
            function AssessmentListService($http, $q, _cookieStore) {
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
            AssessmentListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/LeadAssessmentList";
                var SearchInput;
                var StatusID;
                var UserID;
                var RoleID;
                var LeadID;
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
                if (data.UserID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.UserID;
                }
                if (data.RoleID == undefined) {
                    RoleID = '';
                }
                else {
                    RoleID = data.RoleID;
                }
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                var config = {
                    params: {
                        SearchInput: SearchInput,
                        StatusID: StatusID,
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        LeadID: LeadID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            AssessmentListService.prototype.GetAssessmentList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CompanyName: item.CompanyName,
                        EmployeeCode: item.EmployeeCode,
                        WhenEntered: item.WhenEntered,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        CustomerID: item.CustomerID,
                        Title: item.Title,
                        StatusID: item.Status,
                        FirstName: item.FirstName,
                        MobileNo: item.MobileNo,
                        LeadID: item.LeadID,
                        ContactID: item.ContactID,
                        LeadSource: item.LeadSource,
                        AllocatedToID: item.AllocatedToID,
                        AllocatedTo: item.AllocatedTo,
                        OpportunityAssessmentID: item.OpportunityAssessmentID,
                        Comments: item.Comments,
                        IsLess: item.IsLess,
                        IsMeet: item.IsMeet
                    });
                }
                return list;
            };
            AssessmentListService.$inject = ["$http", "$q", "$cookieStore"];
            return AssessmentListService;
        }(GCPL.Service.BaseService));
        Service.AssessmentListService = AssessmentListService;
        app.AddService("AssessmentListService", AssessmentListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//LEadAssessment Status Dropdown
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadStatusAssessmentddService = /** @class */ (function (_super) {
            __extends(LeadStatusAssessmentddService, _super);
            function LeadStatusAssessmentddService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadStatusAssessmentDD";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadStatusAssessmentddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadStatusAssessmentddService.prototype.GetLeadStatusAssessmentName = function (data) {
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
            LeadStatusAssessmentddService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadStatusAssessmentddService;
        }(GCPL.Service.BaseService));
        Service.LeadStatusAssessmentddService = LeadStatusAssessmentddService;
        app.AddService("LeadStatusAssessmentddService", LeadStatusAssessmentddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteLeadService = /** @class */ (function (_super) {
            __extends(DeleteLeadService, _super);
            function DeleteLeadService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteLead";
                return _this;
            }
            DeleteLeadService.prototype.Find = function (data) {
                var config = {
                    params: {
                        LeadID: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteLeadService.prototype.postLeadDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteLeadService.$inject = ["$http", "$q"];
            return DeleteLeadService;
        }(GCPL.Service.BaseService));
        Service.DeleteLeadService = DeleteLeadService;
        app.AddService("DeleteLeadService", DeleteLeadService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadAssessmentListService.js.map