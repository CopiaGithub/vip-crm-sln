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
        var ProjectListReportService = /** @class */ (function (_super) {
            __extends(ProjectListReportService, _super);
            function ProjectListReportService($http, $q, _cookieStore) {
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
            ProjectListReportService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ProjectTrackerReport";
                var ProjectID;
                var ID;
                var ProjectType;
                var ProjectStage;
                var ProjectStartDate;
                var CompletionDate;
                var ProjectSource;
                var ProjectIndustry;
                var ZoneID;
                if (data.ProjectID == undefined) {
                    ProjectID = '';
                }
                else {
                    ProjectID = data.ProjectID;
                }
                if (data.ID == undefined) {
                    ID = '';
                }
                else {
                    ID = data.ID;
                }
                if (data.ProjectType == undefined) {
                    ProjectType = '';
                }
                else {
                    ProjectType = data.ProjectType;
                }
                if (data.ProjectStage == undefined) {
                    ProjectStage = '';
                }
                else {
                    ProjectStage = data.ProjectStage;
                }
                if (data.ProjectStartDate == undefined) {
                    ProjectStartDate = '';
                }
                else {
                    ProjectStartDate = data.ProjectStartDate;
                }
                if (data.CompletionDate == undefined) {
                    CompletionDate = '';
                }
                else {
                    CompletionDate = data.CompletionDate;
                }
                if (data.ProjectSource == undefined) {
                    ProjectSource = '';
                }
                else {
                    ProjectSource = data.ProjectSource;
                }
                if (data.ProjectIndustry == undefined) {
                    ProjectIndustry = '';
                }
                else {
                    ProjectIndustry = data.ProjectIndustry;
                }
                if (data.ZoneID == undefined) {
                    ZoneID = '';
                }
                else {
                    ZoneID = data.ZoneID;
                }
                var config = {
                    params: {
                        ProjectID: ProjectID,
                        ID: ID,
                        ProjectType: ProjectType,
                        ProjectStage: ProjectStage,
                        ProjectStartDate: ProjectStartDate,
                        CompletionDate: CompletionDate,
                        ProjectSource: ProjectSource,
                        ProjectIndustry: ProjectIndustry,
                        ZoneID: ZoneID,
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ProjectListReportService.prototype.GetProjectList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ProjectID: item.ProjectID,
                        ProjectName: item.ProjectName,
                        ProjectNo: item.ProjectNo,
                        ProjectType: item.ProjectType,
                        ProjectStage: item.ProjectStage,
                        Cost: item.Cost,
                        ProjectOwnership: item.ProjectOwnership,
                        ProjectStartDate: item.ProjectStartDate,
                        CompletionDate: item.CompletionDate,
                        ProjectSource: item.ProjectSource,
                        Comments: item.Comments,
                        ProjectIndustry: item.ProjectIndustry,
                        ID: item.ID,
                        ZoneName: item.ZoneName,
                        CustomerType: item.CustomerType,
                        CompanyName: item.CompanyName,
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        MobileNo: item.MobileNo,
                        Address1: item.Address1,
                        Address2: item.Address2,
                        State: item.State,
                        District: item.District,
                        City: item.City,
                        ContactName: item.ContactName,
                        ContactSAPID: item.ContactSAPID,
                        ContactMobileNo: item.ContactMobileNo,
                        ContactAddress: item.ContactAddress,
                        Department: item.Department,
                        AssignTo: item.AssignTo,
                        ProjectOwner: item.ProjectOwner,
                        ProjectManager: item.ProjectManager
                    });
                }
                return list;
            };
            ProjectListReportService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectListReportService;
        }(GCPL.Service.BaseService));
        Service.ProjectListReportService = ProjectListReportService;
        app.AddService("ProjectListReportService", ProjectListReportService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProjectTrackerListService.js.map