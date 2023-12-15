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
//Insert Project
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CreateProjectService = /** @class */ (function (_super) {
            __extends(CreateProjectService, _super);
            function CreateProjectService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CreateProject";
                _this.Cookie = _cookieStore;
                return _this;
            }
            CreateProjectService.prototype.CreateProject = function (data) {
                var url = this.apiUrl;
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateProjectService.$inject = ["$http", "$q", "$cookieStore"];
            return CreateProjectService;
        }(GCPL.Service.BaseService));
        Service.CreateProjectService = CreateProjectService;
        app.AddService("CreateProjectService", CreateProjectService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//ProjectType DD
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectTypeService = /** @class */ (function (_super) {
            __extends(ProjectTypeService, _super);
            function ProjectTypeService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ProjectType";
                return _this;
            }
            ProjectTypeService.prototype.FindProjectTypeDD = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProjectTypeService.prototype.GetProjectTypeDD = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ProjectTypeID: item.ProjectTypeID,
                        ProjectType: item.ProjectType
                    });
                }
                return list;
            };
            ProjectTypeService.$inject = ["$http", "$q"];
            return ProjectTypeService;
        }(GCPL.Service.BaseService));
        Service.ProjectTypeService = ProjectTypeService;
        app.AddService("ProjectTypeService", ProjectTypeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Project Stage DD
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectStageService = /** @class */ (function (_super) {
            __extends(ProjectStageService, _super);
            function ProjectStageService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ProjectStage";
                return _this;
            }
            ProjectStageService.prototype.FindDD = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProjectStageService.prototype.GetProjectStageDD = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ProjectStageID: item.ProjectStageID,
                        ProjectStage: item.ProjectStage,
                    });
                }
                return list;
            };
            ProjectStageService.$inject = ["$http", "$q"];
            return ProjectStageService;
        }(GCPL.Service.BaseService));
        Service.ProjectStageService = ProjectStageService;
        app.AddService("ProjectStageService", ProjectStageService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Project Industry DD
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectIndustryService = /** @class */ (function (_super) {
            __extends(ProjectIndustryService, _super);
            function ProjectIndustryService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ProjectIndustry";
                return _this;
            }
            ProjectIndustryService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProjectIndustryService.prototype.GetIndustry = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        ProjectIndustryID: item.ProjectIndustryID,
                        ProjectIndustry: item.ProjectIndustry,
                    });
                }
                return list;
            };
            ProjectIndustryService.$inject = ["$http", "$q"];
            return ProjectIndustryService;
        }(GCPL.Service.BaseService));
        Service.ProjectIndustryService = ProjectIndustryService;
        app.AddService("ProjectIndustryService", ProjectIndustryService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Project Ownership DD
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectOwnershipService = /** @class */ (function (_super) {
            __extends(ProjectOwnershipService, _super);
            function ProjectOwnershipService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "Ownership";
                return _this;
            }
            ProjectOwnershipService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProjectOwnershipService.prototype.GetOwnership = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        ProjectOwnershipID: item.ProjectOwnershipID,
                        ProjectOwnership: item.ProjectOwnership
                    });
                }
                return list;
            };
            ProjectOwnershipService.$inject = ["$http", "$q"];
            return ProjectOwnershipService;
        }(GCPL.Service.BaseService));
        Service.ProjectOwnershipService = ProjectOwnershipService;
        app.AddService("ProjectOwnershipService", ProjectOwnershipService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Project Source DD
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectSourceService = /** @class */ (function (_super) {
            __extends(ProjectSourceService, _super);
            function ProjectSourceService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ProjectSource";
                return _this;
            }
            ProjectSourceService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProjectSourceService.prototype.GetProjectSource = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        ProjectSourceID: item.ProjectSourceID,
                        ProjectSource: item.ProjectSource
                    });
                }
                return list;
            };
            ProjectSourceService.$inject = ["$http", "$q"];
            return ProjectSourceService;
        }(GCPL.Service.BaseService));
        Service.ProjectSourceService = ProjectSourceService;
        app.AddService("ProjectSourceService", ProjectSourceService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Customer ProjectType DD
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CustProjectTypeService = /** @class */ (function (_super) {
            __extends(CustProjectTypeService, _super);
            function CustProjectTypeService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "CustProjectType";
                return _this;
            }
            CustProjectTypeService.prototype.FindCustProjectTypeDD = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CustProjectTypeService.prototype.GetCustProjectTypeDD = function (data) {
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        ProjectID: item.ProjectID,
                        ProjectType: item.ProjectType
                    });
                }
                return list;
            };
            CustProjectTypeService.$inject = ["$http", "$q"];
            return CustProjectTypeService;
        }(GCPL.Service.BaseService));
        Service.CustProjectTypeService = CustProjectTypeService;
        app.AddService("CustProjectTypeService", CustProjectTypeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var AddCustProjectTypeService = /** @class */ (function (_super) {
            __extends(AddCustProjectTypeService, _super);
            function AddCustProjectTypeService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AddCustProjectType";
                return _this;
            }
            AddCustProjectTypeService.prototype.FindCustProjectTypeDD = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            AddCustProjectTypeService.prototype.GetCustProjectTypeDD = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        ProjectID: item.ProjectID,
                        ProjectName: item.ProjectName
                    });
                }
                return list;
            };
            AddCustProjectTypeService.$inject = ["$http", "$q"];
            return AddCustProjectTypeService;
        }(GCPL.Service.BaseService));
        Service.AddCustProjectTypeService = AddCustProjectTypeService;
        app.AddService("AddCustProjectTypeService", AddCustProjectTypeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var MultipleUserMasterService = /** @class */ (function (_super) {
            __extends(MultipleUserMasterService, _super);
            function MultipleUserMasterService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ProjectAssignDDL";
                return _this;
            }
            MultipleUserMasterService.prototype.Find = function (data) {
                var config = {
                    params: {
                        ZoneID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            MultipleUserMasterService.prototype.GetUserName = function (data) {
                var list = Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    list.push({
                        ID: item.ID,
                        UserName: item.UserName,
                        IsChecked: item.IsChecked
                    });
                }
                return list;
            };
            MultipleUserMasterService.$inject = ["$http", "$q"];
            return MultipleUserMasterService;
        }(GCPL.Service.BaseService));
        Service.MultipleUserMasterService = MultipleUserMasterService;
        app.AddService("MultipleUserMasterService", MultipleUserMasterService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//ProjectName DD
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProjectNameService = /** @class */ (function (_super) {
            __extends(ProjectNameService, _super);
            function ProjectNameService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "GetProjectNameDD";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ProjectNameService.prototype.FindProjectNameDD = function (data) {
                var config = {
                    params: {
                        UserID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ProjectNameService.prototype.GetProjectNameDD = function (data) {
                var list = Array();
                for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                    var item = data_9[_i];
                    list.push({
                        ProjectID: item.ProjectID,
                        ProjectName: item.ProjectName
                    });
                }
                return list;
            };
            ProjectNameService.$inject = ["$http", "$q"];
            return ProjectNameService;
        }(GCPL.Service.BaseService));
        Service.ProjectNameService = ProjectNameService;
        app.AddService("ProjectNameService", ProjectNameService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateProjectService.js.map