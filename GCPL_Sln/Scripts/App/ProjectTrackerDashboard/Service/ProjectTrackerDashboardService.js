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
//State with region dd
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectTrackerDashboardService = /** @class */ (function (_super) {
            __extends(ProjectTrackerDashboardService, _super);
            function ProjectTrackerDashboardService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ProjectTrackerDashboard";
                return _this;
            }
            ProjectTrackerDashboardService.prototype.Find = function (data, Data1) {
                var ProjectID;
                var ProjectName;
                var ProjectType;
                var ProjectStage;
                var ProjectStartDate;
                var CompletionDate;
                var ProjectSource;
                var Industry;
                var ZoneID;
                var UserID;
                var CustProjectType;
                if (data.ProjectID == undefined) {
                    ProjectID = '';
                }
                else {
                    ProjectID = data.ProjectID;
                }
                if (data.ProjectName == undefined) {
                    ProjectName = '';
                }
                else {
                    ProjectName = data.ProjectName;
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
                if (data.Industry == undefined) {
                    Industry = '';
                }
                else {
                    Industry = data.Industry;
                }
                if (data.ZoneID == undefined) {
                    ZoneID = '';
                }
                else {
                    ZoneID = data.ZoneID;
                }
                if (data.ProjectAssignID == undefined) {
                    UserID = '';
                }
                else {
                    UserID = data.ProjectAssignID;
                }
                if (data.CustProjectType == undefined) {
                    CustProjectType = '';
                }
                else {
                    CustProjectType = data.CustProjectType;
                }
                var config = {
                    params: {
                        ProjectID: ProjectID,
                        //ProjectName: ProjectName,
                        ProjectType: ProjectType,
                        ProjectStage: ProjectStage,
                        ProjectStartDate: ProjectStartDate,
                        CompletionDate: CompletionDate,
                        ProjectSource: ProjectSource,
                        ProjectIndustry: Industry,
                        ZoneID: ZoneID,
                        UserID: UserID,
                        CustProjectType: CustProjectType,
                        Flag: Data1
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProjectTrackerDashboardService.prototype.GetModelData = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        label: item.Model,
                        value: parseInt(item.ModelCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetLeadStatusData = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        label: item.Status,
                        value: parseInt(item.CountLeadStatus),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetOpportunityData = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        label: item.Status,
                        value: parseInt(item.OpportunityStatusCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetDivisionData = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        label: item.Division,
                        value: parseInt(item.DivisionCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetProjectTypeData = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        label: item.ProjectType,
                        value: parseInt(item.ProjectTypeCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetProjectSourceData = function (data) {
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        label: item.ProjectSource,
                        value: parseInt(item.ProjectSourceCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetProjectIndustryData = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        label: item.ProjectIndustry,
                        value: parseInt(item.ProjectIndustryCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetProjectStageData = function (data) {
                var list = Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    list.push({
                        label: item.ProjectStage,
                        value: parseInt(item.ProjectStageCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetProjectZoneData = function (data) {
                var list = Array();
                for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                    var item = data_9[_i];
                    list.push({
                        label: item.ZoneName,
                        value: parseInt(item.ZoneCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetProjectAssignToData = function (data) {
                var list = Array();
                for (var _i = 0, data_10 = data; _i < data_10.length; _i++) {
                    var item = data_10[_i];
                    list.push({
                        label: item.Name,
                        value: parseInt(item.AssignToCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.prototype.GetOppEquipmentQuantityData = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_11 = data; _i < data_11.length; _i++) {
                    var item = data_11[_i];
                    debugger;
                    list.push({
                        label: item.OppModel,
                        value: parseInt(item.OppModelCount),
                        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                    });
                }
                return list;
            };
            ProjectTrackerDashboardService.$inject = ["$http", "$q"];
            return ProjectTrackerDashboardService;
        }(GCPL.Service.BaseService));
        Service.ProjectTrackerDashboardService = ProjectTrackerDashboardService;
        app.AddService("ProjectTrackerDashboardService", ProjectTrackerDashboardService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var getAutoProjectNOService = /** @class */ (function (_super) {
            __extends(getAutoProjectNOService, _super);
            function getAutoProjectNOService($http, $q, _cookieStore) {
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
            getAutoProjectNOService.prototype.FilterProjNo = function (data) {
                var url = this.apiUrl + "/ProjectNumberAUtofill";
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
            getAutoProjectNOService.prototype.GetAutProjNo = function (data) {
                var list = Array();
                for (var _i = 0, data_12 = data; _i < data_12.length; _i++) {
                    var item = data_12[_i];
                    list.push({
                        ID: item.ID,
                        ProjectNo: item.ProjectNo
                    });
                }
                return list;
            };
            getAutoProjectNOService.$inject = ["$http", "$q", "$cookieStore"];
            return getAutoProjectNOService;
        }(GCPL.Service.BaseService));
        Service.getAutoProjectNOService = getAutoProjectNOService;
        //inject service
        app.AddService("getAutoProjectNOService", getAutoProjectNOService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProjectTrackerDashboardService.js.map