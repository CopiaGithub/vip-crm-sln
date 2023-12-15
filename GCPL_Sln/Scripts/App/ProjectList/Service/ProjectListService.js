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
//List Project List
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectListService = /** @class */ (function (_super) {
            __extends(ProjectListService, _super);
            function ProjectListService($http, $q, _cookieStore) {
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
            ProjectListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ProjectTracker";
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
            ProjectListService.prototype.GetProjectList = function (data) {
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
                        ID: item.ID
                        //ZoneName: item.ZoneName
                        //ProjectAssign: item.ProjectAssign
                    });
                }
                return list;
            };
            ProjectListService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectListService;
        }(GCPL.Service.BaseService));
        Service.ProjectListService = ProjectListService;
        app.AddService("ProjectListService", ProjectListService);
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
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
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
//# sourceMappingURL=ProjectListService.js.map