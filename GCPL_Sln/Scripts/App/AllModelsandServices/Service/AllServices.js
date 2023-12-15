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
        var TasksService = /** @class */ (function (_super) {
            __extends(TasksService, _super);
            function TasksService($http, $q, _cookieStore) {
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
            TasksService.prototype.FindTaskList = function (data) {
                var CustomerID;
                var ProjectID;
                var StartDate;
                var EndDate;
                var TaskName;
                var TaskStatus;
                var ApplicationID;
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ProjectID != undefined) {
                    ProjectID = data.ProjectID;
                }
                else {
                    ProjectID = "";
                }
                if (data.StartDate != undefined) {
                    StartDate = data.StartDate;
                }
                else {
                    StartDate = "";
                }
                if (data.EndDate != undefined) {
                    EndDate = data.EndDate;
                }
                else {
                    EndDate = "";
                }
                if (data.TaskName != undefined) {
                    TaskName = data.TaskName;
                }
                else {
                    TaskName = "";
                }
                if (data.TaskStatus != undefined) {
                    TaskStatus = data.TaskStatus;
                }
                else {
                    TaskStatus = "";
                }
                if (data.ApplicationID != undefined) {
                    ApplicationID = data.ApplicationID;
                }
                else {
                    ApplicationID = "";
                }
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                        ProjectID: ProjectID,
                        StartDate: StartDate,
                        EndDate: EndDate,
                        TaskName: TaskName,
                        TaskStatus: TaskStatus,
                        ApplicationID: ApplicationID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/TaskList",
                    Config: config
                });
            };
            TasksService.prototype.GetTaskList = function (data) {
                var list = new Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    debugger;
                    list.push({
                        TaskID: item.TaskID,
                        ProjectID: item.ProjectID,
                        ProjectName: item.ProjectName,
                        CustomerID: item.CustomerID,
                        StartDate: item.StartDate,
                        EndDate: item.EndDate,
                        TaskName: item.TaskName,
                        TaskStatus: ((item.TaskStatus == "True") ? "Active" : "In-Active"),
                        CustomerName: item.CustomerName,
                        ApplicationName: item.ApplicationName
                    });
                }
                return list;
            };
            TasksService.prototype.FindProjDD = function (data1, data) {
                var config = {
                    params: {
                        CustomerID: data1,
                        ApplicationID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/ProjectDD",
                    Config: config
                });
            };
            TasksService.prototype.GetProjDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ProjectID: item.ProjectID,
                        ProjectName: item.ProjectName
                    });
                }
                return list;
            };
            TasksService.prototype.FindTaskEdit = function (data) {
                var config = {
                    params: {
                        TaskID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/EditTaskctrl",
                    Config: config
                });
            };
            TasksService.prototype.GetTaskEdit = function (data) {
                var obj = new model.InsertTask();
                debugger;
                obj.ProjectID = data.ProjectID;
                obj.TaskID = data.TaskID;
                obj.CustomerID = data.CustomerID;
                obj.StartDate = data.StartDate;
                obj.EndDate = data.EndDate;
                obj.TaskName = data.TaskName;
                obj.TaskStatus = ((data.TaskStatus == "True") ? "1" : "0");
                obj.ApplicationID = data.ApplicationID;
                return obj;
            };
            TasksService.prototype.InsertTask = function (data) {
                var url = this.apiUrl + "/InsertTask";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            TasksService.$inject = ["$http", "$q", "$cookieStore"];
            return TasksService;
        }(GCPL.Service.BaseService));
        Service.TasksService = TasksService;
        //inject service
        app.AddService("TasksService", TasksService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ProjectsService = /** @class */ (function (_super) {
            __extends(ProjectsService, _super);
            function ProjectsService($http, $q, _cookieStore) {
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
            ProjectsService.prototype.FindProjectList = function (data) {
                var CustomerID;
                var ProjectName;
                var StartDate;
                var EndDate;
                var ApplicationID;
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ProjectName != undefined) {
                    ProjectName = data.ProjectName;
                }
                else {
                    ProjectName = "";
                }
                if (data.StartDate != undefined) {
                    StartDate = data.StartDate;
                }
                else {
                    StartDate = "";
                }
                if (data.EndDate != undefined) {
                    EndDate = data.EndDate;
                }
                else {
                    EndDate = "";
                }
                if (data.ApplicationID != undefined) {
                    ApplicationID = data.ApplicationID;
                }
                else {
                    ApplicationID = "";
                }
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                        ProjectName: ProjectName,
                        StartDate: StartDate,
                        EndDate: EndDate,
                        ApplicationID: ApplicationID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/Project",
                    Config: config
                });
            };
            ProjectsService.prototype.GetProjectList = function (data) {
                var list = new Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    debugger;
                    list.push({
                        ProjectID: item.ProjectID,
                        ProjectName: item.ProjectName,
                        CustomerID: item.CustomerID,
                        CustomerName: item.CustomerName,
                        StartDate: item.StartDate,
                        EndDate: item.EndDate,
                        ApplicationName: item.ApplicationName
                    });
                }
                return list;
            };
            ProjectsService.prototype.FindCustDD = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/CustomerDD",
                    Config: config
                });
            };
            ProjectsService.prototype.GetCustDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CustomerName: item.CustomerName
                    });
                }
                return list;
            };
            ProjectsService.prototype.FindCustDDNew = function (data) {
                var config = {
                    params: {
                        CustomerID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/CustomerDDNew",
                    Config: config
                });
            };
            ProjectsService.prototype.GetCustDDNew = function (data) {
                var list = new Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CustomerName: item.CustomerName
                    });
                }
                return list;
            };
            ProjectsService.prototype.FindProjectEdit = function (data) {
                var config = {
                    params: {
                        ProjectID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/EditProjectctrl",
                    Config: config
                });
            };
            ProjectsService.prototype.GetProjectEdit = function (data) {
                var obj = new model.InsertProjectModel();
                obj.ProjectID = data.ProjectID;
                obj.ProjectName = data.ProjectName;
                obj.CustomerID = data.CustomerID;
                obj.StartDate = data.StartDate;
                obj.EndDate = data.EndDate;
                obj.ApplicationID = data.ApplicationID;
                return obj;
            };
            ProjectsService.prototype.InsertProject = function (data) {
                var url = this.apiUrl + "/InsertProject";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            ProjectsService.$inject = ["$http", "$q", "$cookieStore"];
            return ProjectsService;
        }(GCPL.Service.BaseService));
        Service.ProjectsService = ProjectsService;
        //inject service
        app.AddService("ProjectsService", ProjectsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var SubTasksService = /** @class */ (function (_super) {
            __extends(SubTasksService, _super);
            function SubTasksService($http, $q, _cookieStore) {
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
            SubTasksService.prototype.NewFindTicketStatusDD = function (data) {
                var config = {
                    params: {
                        CustomerID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/StatusTicket",
                    Config: config
                });
            };
            SubTasksService.prototype.NewGetTicketStatusDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        TicketStatusID: item.TicketStatusID,
                        TicketStatus: item.TicketStatus
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindUserAssignedToDD = function () {
                var config = {
                    params: {
                    //  CustomerID: this.Cookie.get('UserInfo')['CustomerID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/UserDDAssignedTo",
                    Config: config
                });
            };
            SubTasksService.prototype.GetUserAssignedToDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindSubTaskList = function (data) {
                var CustomerID;
                var ProjectID;
                var StartDate;
                var EndDate;
                var SubTaskName;
                var SubTaskStatus;
                var TaskID;
                var ApplicationID;
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ProjectID != undefined) {
                    ProjectID = data.ProjectID;
                }
                else {
                    ProjectID = "";
                }
                if (data.StartDate != undefined) {
                    StartDate = data.StartDate;
                }
                else {
                    StartDate = "";
                }
                if (data.EndDate != undefined) {
                    EndDate = data.EndDate;
                }
                else {
                    EndDate = "";
                }
                if (data.SubTaskName != undefined) {
                    SubTaskName = data.SubTaskName;
                }
                else {
                    SubTaskName = "";
                }
                if (data.SubTaskStatus != undefined) {
                    SubTaskStatus = data.SubTaskStatus;
                }
                else {
                    SubTaskStatus = "";
                }
                if (data.TaskID != undefined) {
                    TaskID = data.TaskID;
                }
                else {
                    TaskID = "";
                }
                if (data.ApplicationID != undefined) {
                    ApplicationID = data.ApplicationID;
                }
                else {
                    ApplicationID = "";
                }
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                        ProjectID: ProjectID,
                        StartDate: StartDate,
                        EndDate: EndDate,
                        SubTaskName: SubTaskName,
                        SubTaskStatus: SubTaskStatus,
                        TaskID: TaskID,
                        ApplicationID: ApplicationID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/SubTaskList",
                    Config: config
                });
            };
            SubTasksService.prototype.GetSubTaskList = function (data) {
                var list = new Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    debugger;
                    list.push({
                        SubTaskID: item.SubTaskID,
                        ProjectName: item.ProjectName,
                        CustomerID: item.CustomerID,
                        StartDate: item.StartDate,
                        EndDate: item.EndDate,
                        SubTask: item.SubTask,
                        SubTaskStatus: ((item.SubTaskStatus == "True") ? "Active" : "In-Active"),
                        CustomerName: item.CustomerName,
                        TaskName: item.TaskName,
                        ApplicationName: item.ApplicationName
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindTaskDD = function (data, data1) {
                var config = {
                    params: {
                        CustomerID: data,
                        ProjectID: data1
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/TaskDD",
                    Config: config
                });
            };
            SubTasksService.prototype.GetTaskDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                    var item = data_9[_i];
                    list.push({
                        TaskID: item.TaskID,
                        TaskName: item.TaskName
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindSubTaskEdit = function (data) {
                var config = {
                    params: {
                        SubTaskID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/EditSubTaskctrl",
                    Config: config
                });
            };
            SubTasksService.prototype.GetSubTaskEdit = function (data) {
                var obj = new model.InsertSubTask();
                debugger;
                obj.ProjectID = data.ProjectID;
                obj.TaskID = data.TaskID;
                obj.CustomerID = data.CustomerID;
                obj.StartDate = data.StartDate;
                obj.EndDate = data.EndDate;
                obj.SubTask = data.SubTask;
                obj.SubTaskStatus = ((data.SubTaskStatus == "True") ? "1" : "0");
                obj.SubTaskID = data.SubTaskID;
                obj.ApplicationID = data.ApplicationID;
                return obj;
            };
            SubTasksService.prototype.InsertSubTask = function (data) {
                var url = this.apiUrl + "/InsertSubTask";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            SubTasksService.prototype.FindSubTaskDD = function (data, data1) {
                var config = {
                    params: {
                        CustomerID: data,
                        TaskID: data1
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/SubTaskDD",
                    Config: config
                });
            };
            SubTasksService.prototype.GetSubTaskDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_10 = data; _i < data_10.length; _i++) {
                    var item = data_10[_i];
                    list.push({
                        SubTaskID: item.SubTaskID,
                        SubTask: item.SubTask
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindTicketStatusDD = function (data) {
                var config = {
                    params: {
                        CustomerID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/TicketStatus",
                    Config: config
                });
            };
            SubTasksService.prototype.GetTicketStatusDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_11 = data; _i < data_11.length; _i++) {
                    var item = data_11[_i];
                    list.push({
                        TicketStatusID: item.TicketStatusID,
                        TicketStatus: item.TicketStatus
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindPriorityDD = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/PriorityDD",
                    Config: config
                });
            };
            SubTasksService.prototype.GetPriorityDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_12 = data; _i < data_12.length; _i++) {
                    var item = data_12[_i];
                    list.push({
                        PriorityID: item.PriorityID,
                        Priority: item.Priority
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindCategoryDD = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/TicketCategoryDD",
                    Config: config
                });
            };
            SubTasksService.prototype.GetCategoryDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_13 = data; _i < data_13.length; _i++) {
                    var item = data_13[_i];
                    list.push({
                        CategoryID: item.CategoryID,
                        CategoryName: item.CategoryName
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindSubCategoryDD = function (data1) {
                var config = {
                    params: {
                        CategoryID: data1
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/SubCategoryDD",
                    Config: config
                });
            };
            SubTasksService.prototype.GetSubCategoryDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_14 = data; _i < data_14.length; _i++) {
                    var item = data_14[_i];
                    list.push({
                        SubCategoryID: item.SubCategoryID,
                        SubCategory: item.SubCategory
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindUserDD = function () {
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/UserDD",
                    Config: config
                });
            };
            SubTasksService.prototype.GetUserDD = function (data) {
                var list = new Array();
                for (var _i = 0, data_15 = data; _i < data_15.length; _i++) {
                    var item = data_15[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName
                    });
                }
                return list;
            };
            SubTasksService.prototype.FindUserDDNew = function (data) {
                var config = {
                    params: {
                        CustomerID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/UserDDNew",
                    Config: config
                });
            };
            SubTasksService.prototype.GetUserDDNew = function (data) {
                var list = new Array();
                for (var _i = 0, data_16 = data; _i < data_16.length; _i++) {
                    var item = data_16[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName
                    });
                }
                return list;
            };
            SubTasksService.$inject = ["$http", "$q", "$cookieStore"];
            return SubTasksService;
        }(GCPL.Service.BaseService));
        Service.SubTasksService = SubTasksService;
        //inject service
        app.AddService("SubTasksService", SubTasksService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UseraAtofillCreatedForService = /** @class */ (function (_super) {
            __extends(UseraAtofillCreatedForService, _super);
            function UseraAtofillCreatedForService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UserNameAutoFillGCPLCreatedFor";
                _this.Cookie = _cookieStore;
                return _this;
            }
            UseraAtofillCreatedForService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UseraAtofillCreatedForService.prototype.FilterAutoCompleteCreatedfor = function (data, data2) {
                var url = this.apiUrl + "/UserNameAutoFillGCPLCreatedFor";
                var config = {
                    params: {
                        UserName: data.term,
                        CustomerID: data2
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            UseraAtofillCreatedForService.prototype.GetAutoUserCreatedfor = function (data) {
                var list = Array();
                for (var _i = 0, data_17 = data; _i < data_17.length; _i++) {
                    var item = data_17[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName,
                    });
                }
                return list;
            };
            UseraAtofillCreatedForService.$inject = ["$http", "$q", "$cookieStore"];
            return UseraAtofillCreatedForService;
        }(GCPL.Service.BaseService));
        Service.UseraAtofillCreatedForService = UseraAtofillCreatedForService;
        //inject service
        app.AddService("UseraAtofillCreatedForService", UseraAtofillCreatedForService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var TicketUseraAtofillService = /** @class */ (function (_super) {
            __extends(TicketUseraAtofillService, _super);
            function TicketUseraAtofillService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UserNameAutoFill";
                _this.Cookie = _cookieStore;
                return _this;
            }
            TicketUseraAtofillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            TicketUseraAtofillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/UserNameAutoFill";
                var config = {
                    params: {
                        UserName: data.term,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            TicketUseraAtofillService.prototype.GetAutoUserTicket = function (data) {
                var list = Array();
                for (var _i = 0, data_18 = data; _i < data_18.length; _i++) {
                    var item = data_18[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName,
                    });
                }
                return list;
            };
            TicketUseraAtofillService.$inject = ["$http", "$q", "$cookieStore"];
            return TicketUseraAtofillService;
        }(GCPL.Service.BaseService));
        Service.TicketUseraAtofillService = TicketUseraAtofillService;
        //inject service
        app.AddService("TicketUseraAtofillService", TicketUseraAtofillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CreateTicketService = /** @class */ (function (_super) {
            __extends(CreateTicketService, _super);
            function CreateTicketService($http, $q, _cookieStore) {
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
            CreateTicketService.prototype.FindApproverProdIDEdit = function (data, data1, data2) {
                var config = {
                    params: {
                        CustomerID: data,
                        AppName: data1,
                        ProjectID: data2
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/ApproveDDProdTicket",
                    Config: config
                });
            };
            CreateTicketService.prototype.GetApproverProdIDEdit = function (data) {
                var list = Array();
                for (var _i = 0, data_19 = data; _i < data_19.length; _i++) {
                    var item = data_19[_i];
                    list.push({
                        ApproverNameID: item.ApproverNameID
                    });
                }
                return list;
            };
            CreateTicketService.prototype.InsertStatus = function (data) {
                var url = this.apiUrl + "/ManualStatus";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.FindUserFine = function (data) {
                var config = {
                    params: {
                        UserID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/UserFine",
                    Config: config
                });
            };
            CreateTicketService.prototype.GetUserFine = function (data) {
                var obj = new model.UserIDModel();
                obj.UserID = data.UserID;
                return obj;
            };
            CreateTicketService.prototype.FindCustRangeObject = function (data) {
                var config = {
                    params: {
                        CustomerID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/ObjectTypeNumber",
                    Config: config
                });
            };
            CreateTicketService.prototype.GetCustRangeObject = function (data) {
                var obj = new model.CustRangeObjectModel();
                debugger;
                obj.ObjectTypeID = data.ObjectTypeID;
                return obj;
            };
            CreateTicketService.prototype.FindChangeType = function () {
                var url = this.apiUrl + "/ChangeTypeDD";
                var config = {
                    params: {
                    //   CustomerID: this.Cookie.get('UserInfo')['CustomerID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.getChangeType = function (data) {
                var list = Array();
                for (var _i = 0, data_20 = data; _i < data_20.length; _i++) {
                    var item = data_20[_i];
                    list.push({
                        ID: item.ID,
                        ChangeType: item.ChangeType
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindClosure = function (data) {
                var url = this.apiUrl + "/ClosureDD";
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.getClosure = function (data) {
                var list = Array();
                for (var _i = 0, data_21 = data; _i < data_21.length; _i++) {
                    var item = data_21[_i];
                    list.push({
                        ID: item.ID,
                        ClosureReason: item.ClosureReason
                    });
                }
                return list;
            };
            CreateTicketService.prototype.InsertTicket = function (data) {
                var url = this.apiUrl + "/InsertTicketData";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.RemoveAttachmentData = function (data) {
                var url = this.apiUrl + "/RemoveAttachment";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.InsertTicketEdit = function (data) {
                var url = this.apiUrl + "/InsertEditTicketctrl";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.FindTicketEdit = function (data) {
                var config = {
                    params: {
                        TicketID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/TicketEditctrl",
                    Config: config
                });
            };
            CreateTicketService.prototype.GetTicketEdit = function (data) {
                var obj = new model.EditInsertModel();
                debugger;
                obj.TicketID = data.TicketID;
                obj.TicketTitle = data.TicketTitle;
                obj.CreationDate = data.CreationDate;
                obj.CreatedBy = data.CreatedBy;
                obj.CreatedFor = data.CreatedFor;
                obj.PriorityID = data.PriorityID;
                obj.CategoryID = data.CategoryID;
                obj.SubCategoryID = data.SubCategoryID;
                obj.IssueDescription = data.IssueDescription;
                obj.Attachment1 = data.Attachment1;
                obj.Attachment2 = data.Attachment2;
                obj.Attachment3 = data.Attachment3;
                obj.AssignedTo = data.AssignedTo;
                obj.EmailsTo = data.EmailsTo;
                obj.PageLink = data.PageLink;
                //obj.TestSystem = data.TestSystem;
                //obj.TestedBy = data.TestedBy;
                //obj.TestingCycleno = data.TestingCycleno;        
                //obj.Testresults1 = data.Testresults1;
                //obj.Testresults2 = data.Testresults2;
                //obj.Testresults3 = data.Testresults3;
                //obj.Testresults4 = data.Testresults4;
                //obj.Testresults5 = data.Testresults5;
                //obj.TesterComments = data.TesterComments;            
                obj.ChangeType = data.ChangeType;
                obj.UploadFileNames = data.UploadFileNames;
                obj.UploadFile1 = data.UploadFile1;
                obj.UploadFile2 = data.UploadFile2;
                obj.UploadFile3 = data.UploadFile3;
                obj.UploadFile4 = data.UploadFile4;
                obj.UploadFile5 = data.UploadFile5;
                obj.DatabaseChanges = data.DatabaseChanges;
                obj.ApprovalForQA = data.ApprovalForQA;
                obj.TargetForQA = data.TargetForQA;
                obj.QAApprovedBy = data.QAApprovedBy;
                obj.QAApprovedDate = data.QAApprovedDate;
                obj.QAApproverComments = data.QAApproverComments;
                obj.ApprovalForProd = data.ApprovalForProd;
                obj.ProdApprovalBy = data.ProdApprovalBy;
                obj.ProdApprovalDate = data.ProdApprovalDate;
                obj.CustomerTested = data.CustomerTested;
                obj.CustomerApproved = data.CustomerApproved;
                obj.ProdApproverComments = data.ProdApproverComments;
                obj.TicketClosureDate = data.TicketClosureDate;
                obj.TicketClosedBy = data.TicketClosedBy;
                obj.TicketClosedReason = data.TicketClosedReason;
                obj.TicketClosureComments = data.TicketClosureComments;
                obj.ProjectID = data.ProjectID;
                obj.TaskID = data.TaskID;
                obj.SubTaskID = data.SubTaskID;
                obj.Status = data.Status;
                obj.TicketNo = data.TicketNo;
                obj.CreatedByName = data.CreatedByName;
                obj.CreatedForName = data.CreatedForName;
                obj.CustomerID = data.CustomerID;
                obj.EmailsName = data.EmailsName;
                obj.UploadInstructions = data.UploadInstructions;
                obj.IssueUpdate = data.IssueUpdate;
                obj.ChangeRequest = data.ChangeRequest;
                obj.ChangeType = data.ChangeType;
                obj.AssignedOn = data.AssignedOn;
                obj.TicketClosedByName = data.TicketClosedByName;
                obj.ApprovalTypeID = data.ApprovalTypeID;
                obj.ApplicationID = data.ApplicationID;
                obj.IssueDescriptionHistory = data.IssueDescriptionHistory;
                obj.ApprovedfordevelopmentID = data.ApprovedfordevelopmentID;
                obj.ApprovedByID = data.ApprovedByID;
                obj.ApprovedOn = data.ApprovedOn;
                obj.DBAQAid = data.DBAQAid;
                obj.QAMigrationdate = data.QAMigrationdate;
                obj.ChangesMigrateQAID = data.ChangesMigrateQAID;
                obj.ProdMigrateDate = data.ProdMigrateDate;
                obj.QADBAApproverComments = data.QADBAApproverComments;
                obj.DBAProdid = data.DBAProdid;
                obj.UATID = data.UATID;
                obj.WorkStartedID = data.WorkStartedID;
                obj.WorkStartDate = data.WorkStartDate;
                obj.DevCompletedID = data.DevCompletedID;
                obj.ProdDBAApproverComments = data.ProdDBAApproverComments;
                obj.ChangesMigrateProdID = data.ChangesMigrateProdID;
                obj.ApprovedByName = data.ApprovedByName;
                obj.DevelopmentCompletedDate = data.DevelopmentCompletedDate;
                obj.list = data.list;
                obj.IssueDescriptionHistoryList = data.IssueDescriptionHistoryList;
                return obj;
            };
            CreateTicketService.prototype.FindEmail = function (data) {
                var config = {
                    params: {
                        Email: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/EmailLogin",
                    Config: config
                });
            };
            CreateTicketService.prototype.GetEmail = function (data) {
                var obj = new model.UserNameDDModel();
                debugger;
                obj.UserID = data.UserID;
                obj.UserName = data.UserName;
                return obj;
            };
            CreateTicketService.prototype.Find = function (SODetails) {
                var url = this.url + "/" + "SOAddToCartctrlTicket";
                //let config = {
                //    params: {
                //        dto: SODetails,
                //    }
                //};
                return this.ajaXUtility.Post({
                    Url: url,
                    data: SODetails
                    //Config: config
                });
            };
            CreateTicketService.prototype.GetSOPrice = function (data) {
                var list = new model.SODto();
                list.list = data.list;
                list.sodto = data.sodto;
                return list;
            };
            CreateTicketService.prototype.FindEdit = function (SODetails) {
                debugger;
                var url = this.url + "/" + "GetSOInlineEditctrl";
                //let config = {
                //    params: {
                //        dto: SODetails
                //    }
                //};
                return this.ajaXUtility.Post({
                    Url: url,
                    data: SODetails
                    // ,Config: config
                });
            };
            CreateTicketService.prototype.GetSOEdit = function (data) {
                var list = new model.SODto();
                list.list = data.list;
                list.sodto = data.sodto;
                return list;
            };
            CreateTicketService.prototype.FindStatusCode = function () {
                var url = this.apiUrl + "/StatusCodeList";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.getStatusCode = function (data) {
                var list = Array();
                for (var _i = 0, data_22 = data; _i < data_22.length; _i++) {
                    var item = data_22[_i];
                    list.push({
                        TicketStatusCode: item.TicketStatusCode
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindStatusCodeAssign = function () {
                var url = this.apiUrl + "/StatusCodeAssignList";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.getStatusCodeAssign = function (data) {
                var list = Array();
                for (var _i = 0, data_23 = data; _i < data_23.length; _i++) {
                    var item = data_23[_i];
                    list.push({
                        TicketStatusCode: item.TicketStatusCode
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindApplicationDD = function (data) {
                var url = this.apiUrl + "/ApplicationDD";
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.getApplicationDD = function (data) {
                var list = Array();
                for (var _i = 0, data_24 = data; _i < data_24.length; _i++) {
                    var item = data_24[_i];
                    list.push({
                        ApplicationID: item.ApplicationID,
                        AppDescription: item.AppDescription
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindApprovalTypeDD = function (data) {
                var url = this.apiUrl + "/ApprovalTypeDD";
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.getApprovalTypeDD = function (data) {
                var list = Array();
                for (var _i = 0, data_25 = data; _i < data_25.length; _i++) {
                    var item = data_25[_i];
                    list.push({
                        ID: item.ID,
                        ApprovalType: item.ApprovalType
                    });
                }
                return list;
            };
            CreateTicketService.prototype.InsertApproverMatrix = function (data) {
                var url = this.apiUrl + "/InsertApprover";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.FindApproverMatrixEdit = function (data) {
                var config = {
                    params: {
                        ID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/ApproverEditctrl",
                    Config: config
                });
            };
            CreateTicketService.prototype.GetApproverMatrixEdit = function (data) {
                var obj = new model.ApprovalMatrixInsert();
                debugger;
                obj.ID = data.ID;
                obj.CustomerID = data.CustomerID;
                obj.AppName = data.AppName;
                obj.ProjectID = data.ProjectID;
                obj.ApprovalTypeID = data.ApprovalTypeID;
                obj.ApproverName = data.ApproverName;
                obj.QAApprover = data.QAApprover;
                obj.ProdApprover = data.ProdApprover;
                obj.UserName = data.UserName;
                return obj;
            };
            CreateTicketService.prototype.FindApproverList = function (data) {
                var url = this.apiUrl + "/ApproverMatrixList";
                var CustomerID;
                var ProjectID;
                var AppID;
                var ApprovalTypeID;
                var ApproverNameID;
                var QAApproverID;
                var ProdApproverID;
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ProjectID != undefined) {
                    ProjectID = data.ProjectID;
                }
                else {
                    ProjectID = "";
                }
                if (data.AppID != undefined) {
                    AppID = data.AppID;
                }
                else {
                    AppID = "";
                }
                if (data.ApprovalTypeID != undefined) {
                    ApprovalTypeID = data.ApprovalTypeID;
                }
                else {
                    ApprovalTypeID = "";
                }
                if (data.ApproverNameID != undefined) {
                    ApproverNameID = data.ApproverNameID;
                }
                else {
                    ApproverNameID = "";
                }
                if (data.QAApproverID != undefined) {
                    QAApproverID = data.QAApproverID;
                }
                else {
                    QAApproverID = "";
                }
                if (data.ProdApproverID != undefined) {
                    ProdApproverID = data.ProdApproverID;
                }
                else {
                    ProdApproverID = "";
                }
                var config = {
                    params: {
                        CustomerID: CustomerID,
                        ProjectID: ProjectID,
                        AppID: AppID,
                        ApprovalTypeID: ApprovalTypeID,
                        ApproverNameID: ApproverNameID,
                        QAApproverID: QAApproverID,
                        ProdApproverID: ProdApproverID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.GetApproverList = function (data) {
                var list = Array();
                for (var _i = 0, data_26 = data; _i < data_26.length; _i++) {
                    var item = data_26[_i];
                    list.push({
                        ID: item.ID,
                        CustomerName: item.CustomerName,
                        AppDescription: item.AppDescription,
                        QAApprover: ((item.QAApprover == "1") ? "Yes" : "No"),
                        ProdApprover: ((item.ProdApprover == "1") ? "Yes" : "No"),
                        ApproverName: item.ApproverName,
                        ApprovalType: item.ApprovalType,
                        ProjectName: item.ProjectName
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindApplicationList = function (data) {
                var url = this.apiUrl + "/ApplicationList";
                var ApplicationName;
                var AppDescription;
                var CustomerID;
                if (data.ApplicationName != undefined) {
                    ApplicationName = data.ApplicationName;
                }
                else {
                    ApplicationName = "";
                }
                if (data.AppDescription != undefined) {
                    AppDescription = data.AppDescription;
                }
                else {
                    AppDescription = "";
                }
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                var config = {
                    params: {
                        ApplicationName: ApplicationName,
                        AppDescription: AppDescription,
                        CustomerID: CustomerID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.GetApplicationList = function (data) {
                var list = Array();
                for (var _i = 0, data_27 = data; _i < data_27.length; _i++) {
                    var item = data_27[_i];
                    list.push({
                        ApplicationID: item.ApplicationID,
                        ApplicationName: item.ApplicationName,
                        CustomerName: item.CustomerName,
                        AppDescription: item.AppDescription
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindApplicationEdit = function (data) {
                var config = {
                    params: {
                        ApplicationID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/ApplicationEditctrl",
                    Config: config
                });
            };
            CreateTicketService.prototype.GetApplicationEdit = function (data) {
                var obj = new model.InsertApplication();
                debugger;
                obj.ApplicationID = data.ApplicationID;
                obj.ApplicationName = data.ApplicationName;
                obj.AppDescription = data.AppDescription;
                obj.CustomerID = data.CustomerID;
                obj.CustomerName = data.CustomerName;
                return obj;
            };
            CreateTicketService.prototype.InsertApplication = function (data) {
                var url = this.apiUrl + "/InsertApplication";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.FindStatusCodeApproval = function () {
                var url = this.apiUrl + "/StatusCodeApprovals";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.getStatusCodeApproval = function (data) {
                var list = Array();
                for (var _i = 0, data_28 = data; _i < data_28.length; _i++) {
                    var item = data_28[_i];
                    list.push({
                        TicketStatusCode: item.TicketStatusCode
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindApprovalTypeTicketDD = function (data) {
                var url = this.apiUrl + "/ApprovalTypeDDTicket";
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                        ApprovalID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.getApprovalTypeTicketDD = function (data) {
                var list = Array();
                for (var _i = 0, data_29 = data; _i < data_29.length; _i++) {
                    var item = data_29[_i];
                    list.push({
                        ID: item.ID,
                        ApprovalType: item.ApprovalType
                    });
                }
                return list;
            };
            CreateTicketService.prototype.InsertAttachment = function (data) {
                var url = this.apiUrl + "/InsertEditAttachments";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.FindTimeSOPrice = function (SODetails) {
                debugger;
                var url = this.url + "/" + "SOAddToCartctrlTime";
                //let config = {
                //    params: {
                //        dto: SODetails,
                //    }
                //};
                return this.ajaXUtility.Post({
                    Url: url,
                    data: SODetails
                    //Config: config
                });
            };
            CreateTicketService.prototype.GetTimeSOPrice = function (data) {
                var list = new model.TimeSODto();
                list.list = data.list;
                list.sodto = data.sodto;
                return list;
            };
            CreateTicketService.prototype.InsertTimeSheet = function (data) {
                var url = this.apiUrl + "/InsertTimeSheet";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.FindEditTime = function (SODetails) {
                debugger;
                var url = this.url + "/" + "GetSOInlineEditctrlTime";
                //let config = {
                //    params: {
                //        dto: SODetails
                //    }
                //};
                return this.ajaXUtility.Post({
                    Url: url,
                    data: SODetails
                    // ,Config: config
                });
            };
            CreateTicketService.prototype.GetSOEditTime = function (data) {
                var list = new model.TimeSODto();
                list.list = data.list;
                list.sodto = data.sodto;
                return list;
            };
            CreateTicketService.prototype.FindTSApprovalList = function (data) {
                var url = this.apiUrl + "/TSApprovalList";
                var UserID;
                var FromDate;
                var ToDate;
                var CustomerID;
                var ApplicationID;
                var ProjectID;
                var TaskID;
                var SubTaskID;
                var StatusID;
                if (data.UserID != undefined) {
                    UserID = data.UserID;
                }
                else {
                    UserID = "";
                }
                if (data.FromDate != undefined) {
                    FromDate = data.FromDate;
                }
                else {
                    FromDate = "";
                }
                if (data.ToDate != undefined) {
                    ToDate = data.ToDate;
                }
                else {
                    ToDate = "";
                }
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ApplicationID != undefined) {
                    ApplicationID = data.ApplicationID;
                }
                else {
                    ApplicationID = "";
                }
                if (data.ProjectID != undefined) {
                    ProjectID = data.ProjectID;
                }
                else {
                    ProjectID = "";
                }
                if (data.TaskID != undefined) {
                    TaskID = data.TaskID;
                }
                else {
                    TaskID = "";
                }
                if (data.SubTaskID != undefined) {
                    SubTaskID = data.SubTaskID;
                }
                else {
                    SubTaskID = "";
                }
                if (data.StatusID != undefined) {
                    StatusID = data.StatusID;
                }
                else {
                    StatusID = "";
                }
                var config = {
                    params: {
                        UserID: UserID,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        CustomerID: CustomerID,
                        ApplicationID: ApplicationID,
                        ProjectID: ProjectID,
                        TaskID: TaskID,
                        SubTaskID: SubTaskID,
                        StatusID: StatusID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.GetTSApprovalList = function (data) {
                var list = Array();
                for (var _i = 0, data_30 = data; _i < data_30.length; _i++) {
                    var item = data_30[_i];
                    list.push({
                        ID: item.ID,
                        UserName: item.UserName,
                        Date: item.Date,
                        TotalTime: item.TotalTime,
                        Status: item.Status,
                        CustomerName: item.CustomerName,
                        ProjectName: item.ProjectName,
                        ApplicationName: item.ApplicationName,
                        TaskName: item.TaskName,
                        SubTask: item.SubTask,
                        FromTime: item.FromTime,
                        ToTime: item.ToTime
                    });
                }
                return list;
            };
            CreateTicketService.prototype.InsertAppRejStatus = function (data) {
                var url = this.apiUrl + "/UpdateApprove";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.FindTSAppEdit = function (data) {
                var config = {
                    params: {
                        ID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/TimeSheetEditctrl",
                    Config: config
                });
            };
            CreateTicketService.prototype.GetTSAppEdit = function (data) {
                var obj = new model.TimeSheetInsert();
                debugger;
                obj.ID = data.ID;
                obj.Date = data.Date;
                obj.CustomerID = data.CustomerID;
                obj.ApplicationID = data.ApplicationID;
                obj.ProjectID = data.ProjectID;
                obj.TaskID = data.TaskID;
                obj.SubTaskID = data.SubTaskID;
                obj.FromTime = data.FromTime;
                obj.ToTime = data.ToTime;
                obj.UserID = data.UserID;
                return obj;
            };
            CreateTicketService.prototype.InsertEditTimeSheet = function (data) {
                var url = this.apiUrl + "/InsertTimeSheetData";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            CreateTicketService.prototype.FindAttachmentEditList = function (data) {
                var url = this.apiUrl + "/AttachmentEditList";
                var config = {
                    params: {
                        TicketID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.GetAttachmentEditList = function (data) {
                var list = Array();
                for (var _i = 0, data_31 = data; _i < data_31.length; _i++) {
                    var item = data_31[_i];
                    list.push({
                        ID: item.ID,
                        imageName: item.imageName,
                        status: item.status,
                        fileType: item.fileType,
                        baseUrl: item.baseUrl
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindAttachmentEditTestList = function (data) {
                var url = this.apiUrl + "/AttachmentEditTestList";
                var config = {
                    params: {
                        TicketID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.GetAttachmentEditTestList = function (data) {
                var list = Array();
                for (var _i = 0, data_32 = data; _i < data_32.length; _i++) {
                    var item = data_32[_i];
                    list.push({
                        ID: item.ID,
                        imageName: item.imageName,
                        status: item.status,
                        fileType: item.fileType,
                        baseUrl: item.baseUrl
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindAttachmentEditDeveloperList = function (data) {
                var url = this.apiUrl + "/AttachmentEditDeveloperList";
                var config = {
                    params: {
                        TicketID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.GetAttachmentEditDeveloperList = function (data) {
                var list = Array();
                for (var _i = 0, data_33 = data; _i < data_33.length; _i++) {
                    var item = data_33[_i];
                    list.push({
                        ID: item.ID,
                        imageName: item.imageName,
                        status: item.status,
                        fileType: item.fileType,
                        baseUrl: item.baseUrl
                    });
                }
                return list;
            };
            CreateTicketService.prototype.FindTimeSheetList = function (data) {
                var url = this.apiUrl + "/TimeSheetListData";
                var UserID;
                var FromDate;
                var ToDate;
                var CustomerID;
                var ApplicationID;
                var ProjectID;
                var TaskID;
                var SubTaskID;
                var StatusID;
                if (data.UserID != undefined) {
                    UserID = data.UserID;
                }
                else {
                    UserID = "";
                }
                if (data.FromDate != undefined) {
                    FromDate = data.FromDate;
                }
                else {
                    FromDate = "";
                }
                if (data.ToDate != undefined) {
                    ToDate = data.ToDate;
                }
                else {
                    ToDate = "";
                }
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ApplicationID != undefined) {
                    ApplicationID = data.ApplicationID;
                }
                else {
                    ApplicationID = "";
                }
                if (data.ProjectID != undefined) {
                    ProjectID = data.ProjectID;
                }
                else {
                    ProjectID = "";
                }
                if (data.TaskID != undefined) {
                    TaskID = data.TaskID;
                }
                else {
                    TaskID = "";
                }
                if (data.SubTaskID != undefined) {
                    SubTaskID = data.SubTaskID;
                }
                else {
                    SubTaskID = "";
                }
                if (data.StatusID != undefined) {
                    StatusID = data.StatusID;
                }
                else {
                    StatusID = "";
                }
                var config = {
                    params: {
                        UserID: UserID,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        CustomerID: CustomerID,
                        ApplicationID: ApplicationID,
                        ProjectID: ProjectID,
                        TaskID: TaskID,
                        SubTaskID: SubTaskID,
                        StatusID: StatusID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateTicketService.prototype.GetTimeSheetList = function (data) {
                var list = Array();
                for (var _i = 0, data_34 = data; _i < data_34.length; _i++) {
                    var item = data_34[_i];
                    list.push({
                        ID: item.ID,
                        Date: item.Date,
                        CustomerName: item.CustomerName,
                        ApplicationName: item.ApplicationName,
                        ProjectName: item.ProjectName,
                        TaskName: item.TaskName,
                        SubTask: item.SubTask,
                        FromTime: item.FromTime,
                        ToTime: item.ToTime,
                        Status: item.Status
                    });
                }
                return list;
            };
            CreateTicketService.$inject = ["$http", "$q", "$cookieStore"];
            return CreateTicketService;
        }(GCPL.Service.BaseService));
        Service.CreateTicketService = CreateTicketService;
        //inject service
        app.AddService("CreateTicketService", CreateTicketService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var TicketListService = /** @class */ (function (_super) {
            __extends(TicketListService, _super);
            function TicketListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "TicketList";
                _this.Cookie = _cookieStore;
                return _this;
            }
            TicketListService.prototype.FindTicketList = function (data) {
                var CustomerID;
                var ProjectID;
                var TaskID;
                var SubTaskID;
                var StatusID;
                var CategoryID;
                var SubCategoryID;
                var ChangeType;
                var TicketNo;
                var CreatedBy;
                var FromDate;
                var ToDate;
                var ApplicationID;
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ProjectID != undefined) {
                    ProjectID = data.ProjectID;
                }
                else {
                    ProjectID = "";
                }
                if (data.TaskID != undefined) {
                    TaskID = data.TaskID;
                }
                else {
                    TaskID = "";
                }
                if (data.SubTaskID != undefined) {
                    SubTaskID = data.SubTaskID;
                }
                else {
                    SubTaskID = "";
                }
                if (data.StatusID != undefined) {
                    StatusID = data.StatusID;
                }
                else {
                    StatusID = "";
                }
                if (data.CategoryID != undefined) {
                    CategoryID = data.CategoryID;
                }
                else {
                    CategoryID = "";
                }
                if (data.SubCategoryID != undefined) {
                    SubCategoryID = data.SubCategoryID;
                }
                else {
                    SubCategoryID = "";
                }
                if (data.ChangeType != undefined) {
                    ChangeType = data.ChangeType;
                }
                else {
                    ChangeType = "";
                }
                if (data.TicketNo != undefined) {
                    TicketNo = data.TicketNo;
                }
                else {
                    TicketNo = "";
                }
                if (data.CreatedBy != undefined) {
                    CreatedBy = data.CreatedBy;
                }
                else {
                    CreatedBy = "";
                }
                if (data.FromDate != undefined) {
                    FromDate = data.FromDate;
                }
                else {
                    FromDate = "";
                }
                if (data.ToDate != undefined) {
                    ToDate = data.ToDate;
                }
                else {
                    ToDate = "";
                }
                if (data.ApplicationID != undefined) {
                    ApplicationID = data.ApplicationID;
                }
                else {
                    ApplicationID = "";
                }
                var config = {
                    params: {
                        CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                        ProjectID: ProjectID,
                        TaskID: TaskID,
                        SubTaskID: SubTaskID,
                        StatusID: StatusID,
                        CategoryID: CategoryID,
                        SubCategoryID: SubCategoryID,
                        ChangeType: ChangeType,
                        TicketNo: TicketNo,
                        CreatedBy: CreatedBy,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        ApplicationID: ApplicationID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            TicketListService.prototype.GetTicketList = function (data) {
                var list = Array();
                for (var _i = 0, data_35 = data; _i < data_35.length; _i++) {
                    var item = data_35[_i];
                    list.push({
                        TicketID: item.TicketID,
                        CustomerName: item.CustomerName,
                        ProjectName: item.ProjectName,
                        TaskName: item.TaskName,
                        SubTask: item.SubTask,
                        TicketNo: item.TicketNo,
                        TicketTitle: item.TicketTitle,
                        Createdon: item.Createdon,
                        CreatedBy: item.CreatedBy,
                        CreatedFor: item.CreatedFor,
                        AssignedTo: item.AssignedTo,
                        TicketStatus: item.TicketStatus,
                        Category: item.Category,
                        SubCategory: item.SubCategory,
                        ClosureToDate: item.ClosureToDate,
                        ApprovalTypeID: item.ApprovalTypeID,
                        ApprovalType: item.ApprovalType,
                        ApplicationName: item.ApplicationName,
                        AssignedOn: item.AssignedOn,
                        ProjectID: item.ProjectID,
                        AppID: item.AppID,
                        StatusID: item.StatusID,
                        AssignedOntime: item.AssignedOntime,
                        WorkStartDate: item.WorkStartDate,
                        WorkStarttime: item.WorkStarttime,
                        DevelopmentCompletedDate: item.DevelopmentCompletedDate,
                        DevelopmentCompletedtime: item.DevelopmentCompletedtime,
                        QAMigrationdate: item.QAMigrationdate,
                        QAMigrationtime: item.QAMigrationtime,
                        ProdMigrateDate: item.ProdMigrateDate,
                        ProdMigratetime: item.ProdMigratetime,
                        QAApprovedDate: item.QAApprovedDate,
                        QAApprovedtime: item.QAApprovedtime,
                        ProdApprovalDate: item.ProdApprovalDate,
                        ProdApprovaltime: item.ProdApprovaltime,
                        UATCompleteDate: item.UATCompleteDate,
                        UATCompletetime: item.UATCompletetime,
                        Creationtime: item.Creationtime,
                        TicketClosureDate: item.TicketClosureDate,
                        TicketClosureTime: item.TicketClosureTime
                    });
                }
                return list;
            };
            TicketListService.$inject = ["$http", "$q", "$cookieStore"];
            return TicketListService;
        }(GCPL.Service.BaseService));
        Service.TicketListService = TicketListService;
        app.AddService("TicketListService", TicketListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var MyTicketListService = /** @class */ (function (_super) {
            __extends(MyTicketListService, _super);
            function MyTicketListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "MyTicketList";
                _this.Cookie = _cookieStore;
                return _this;
            }
            MyTicketListService.prototype.FindMyTicketList = function (data) {
                var CustomerID;
                var ProjectID;
                var TaskID;
                var SubTaskID;
                var StatusID;
                var CategoryID;
                var SubCategoryID;
                var ChangeType;
                var TicketNo;
                var CreatedBy;
                var FromDate;
                var ToDate;
                var ApplicationID;
                var UserID;
                var LoginCustomerID;
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ProjectID != undefined) {
                    ProjectID = data.ProjectID;
                }
                else {
                    ProjectID = "";
                }
                if (data.TaskID != undefined) {
                    TaskID = data.TaskID;
                }
                else {
                    TaskID = "";
                }
                if (data.SubTaskID != undefined) {
                    SubTaskID = data.SubTaskID;
                }
                else {
                    SubTaskID = "";
                }
                if (data.StatusID != undefined) {
                    StatusID = data.StatusID;
                }
                else {
                    StatusID = "";
                }
                if (data.CategoryID != undefined) {
                    CategoryID = data.CategoryID;
                }
                else {
                    CategoryID = "";
                }
                if (data.SubCategoryID != undefined) {
                    SubCategoryID = data.SubCategoryID;
                }
                else {
                    SubCategoryID = "";
                }
                if (data.ChangeType != undefined) {
                    ChangeType = data.ChangeType;
                }
                else {
                    ChangeType = "";
                }
                if (data.TicketNo != undefined) {
                    TicketNo = data.TicketNo;
                }
                else {
                    TicketNo = "";
                }
                if (data.CreatedBy != undefined) {
                    CreatedBy = data.CreatedBy;
                }
                else {
                    CreatedBy = "";
                }
                if (data.FromDate != undefined) {
                    FromDate = data.FromDate;
                }
                else {
                    FromDate = "";
                }
                if (data.ToDate != undefined) {
                    ToDate = data.ToDate;
                }
                else {
                    ToDate = "";
                }
                if (data.ApplicationID != undefined) {
                    ApplicationID = data.ApplicationID;
                }
                else {
                    ApplicationID = "";
                }
                if (data.UserID != undefined) {
                    UserID = data.UserID;
                }
                else {
                    UserID = "";
                }
                if (data.LoginCustomerID != undefined) {
                    LoginCustomerID = data.LoginCustomerID;
                }
                else {
                    LoginCustomerID = "";
                }
                var config = {
                    params: {
                        CustomerID: CustomerID,
                        ProjectID: ProjectID,
                        TaskID: TaskID,
                        SubTaskID: SubTaskID,
                        StatusID: StatusID,
                        CategoryID: CategoryID,
                        SubCategoryID: SubCategoryID,
                        ChangeType: ChangeType,
                        TicketNo: TicketNo,
                        CreatedBy: CreatedBy,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        UserID: UserID,
                        ApplicationID: ApplicationID,
                        LoginCustomerID: this.Cookie.get('UserInfo')['CustomerID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            MyTicketListService.prototype.GetMyTicketList = function (data) {
                var list = Array();
                for (var _i = 0, data_36 = data; _i < data_36.length; _i++) {
                    var item = data_36[_i];
                    list.push({
                        TicketID: item.TicketID,
                        CustomerName: item.CustomerName,
                        ProjectName: item.ProjectName,
                        TaskName: item.TaskName,
                        SubTask: item.SubTask,
                        TicketNo: item.TicketNo,
                        TicketTitle: item.TicketTitle,
                        Createdon: item.Createdon,
                        CreatedBy: item.CreatedBy,
                        CreatedFor: item.CreatedFor,
                        AssignedTo: item.AssignedTo,
                        TicketStatus: item.TicketStatus,
                        Category: item.Category,
                        SubCategory: item.SubCategory,
                        ClosureToDate: item.ClosureToDate,
                        ApprovalTypeID: item.ApprovalTypeID,
                        ApprovalType: item.ApprovalType,
                        ApplicationName: item.ApplicationName,
                        AssignedOn: item.AssignedOn,
                        ProjectID: item.ProjectID,
                        AppID: item.AppID,
                        StatusID: item.StatusID,
                        AssignedOntime: item.AssignedOntime,
                        WorkStartDate: item.WorkStartDate,
                        WorkStarttime: item.WorkStarttime,
                        DevelopmentCompletedDate: item.DevelopmentCompletedDate,
                        DevelopmentCompletedtime: item.DevelopmentCompletedtime,
                        QAMigrationdate: item.QAMigrationdate,
                        QAMigrationtime: item.QAMigrationtime,
                        ProdMigrateDate: item.ProdMigrateDate,
                        ProdMigratetime: item.ProdMigratetime,
                        QAApprovedDate: item.QAApprovedDate,
                        QAApprovedtime: item.QAApprovedtime,
                        ProdApprovalDate: item.ProdApprovalDate,
                        ProdApprovaltime: item.ProdApprovaltime,
                        UATCompleteDate: item.UATCompleteDate,
                        UATCompletetime: item.UATCompletetime,
                        Creationtime: item.Creationtime,
                        TicketClosureDate: item.TicketClosureDate,
                        TicketClosureTime: item.TicketClosureTime
                    });
                }
                return list;
            };
            MyTicketListService.$inject = ["$http", "$q", "$cookieStore"];
            return MyTicketListService;
        }(GCPL.Service.BaseService));
        Service.MyTicketListService = MyTicketListService;
        app.AddService("MyTicketListService", MyTicketListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var TicketListUserService = /** @class */ (function (_super) {
            __extends(TicketListUserService, _super);
            function TicketListUserService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "TicketList";
                _this.Cookie = _cookieStore;
                return _this;
            }
            TicketListUserService.prototype.FindTicketList = function (data) {
                var CustomerID;
                var ProjectID;
                var TaskID;
                var SubTaskID;
                var StatusID;
                var CategoryID;
                var SubCategoryID;
                var ChangeType;
                var TicketNo;
                var CreatedBy;
                var FromDate;
                var ToDate;
                var ApplicationID;
                var LoginCustomerID;
                var AssignedTo;
                if (data.AssignedTo != undefined) {
                    AssignedTo = data.AssignedTo;
                }
                else {
                    AssignedTo = "";
                }
                if (data.CustomerID != undefined) {
                    CustomerID = data.CustomerID;
                }
                else {
                    CustomerID = "";
                }
                if (data.ProjectID != undefined) {
                    ProjectID = data.ProjectID;
                }
                else {
                    ProjectID = "";
                }
                if (data.TaskID != undefined) {
                    TaskID = data.TaskID;
                }
                else {
                    TaskID = "";
                }
                if (data.SubTaskID != undefined) {
                    SubTaskID = data.SubTaskID;
                }
                else {
                    SubTaskID = "";
                }
                if (data.StatusID != undefined) {
                    StatusID = data.StatusID;
                }
                else {
                    StatusID = "";
                }
                if (data.CategoryID != undefined) {
                    CategoryID = data.CategoryID;
                }
                else {
                    CategoryID = "";
                }
                if (data.SubCategoryID != undefined) {
                    SubCategoryID = data.SubCategoryID;
                }
                else {
                    SubCategoryID = "";
                }
                if (data.ChangeType != undefined) {
                    ChangeType = data.ChangeType;
                }
                else {
                    ChangeType = "";
                }
                if (data.TicketNo != undefined) {
                    TicketNo = data.TicketNo;
                }
                else {
                    TicketNo = "";
                }
                if (data.CreatedBy != undefined) {
                    CreatedBy = data.CreatedBy;
                }
                else {
                    CreatedBy = "";
                }
                if (data.FromDate != undefined) {
                    FromDate = data.FromDate;
                }
                else {
                    FromDate = "";
                }
                if (data.ToDate != undefined) {
                    ToDate = data.ToDate;
                }
                else {
                    ToDate = "";
                }
                if (data.ApplicationID != undefined) {
                    ApplicationID = data.ApplicationID;
                }
                else {
                    ApplicationID = "";
                }
                if (data.LoginCustomerID != undefined) {
                    LoginCustomerID = data.LoginCustomerID;
                }
                else {
                    LoginCustomerID = "";
                }
                var config = {
                    params: {
                        CustomerID: CustomerID,
                        ProjectID: ProjectID,
                        TaskID: TaskID,
                        SubTaskID: SubTaskID,
                        StatusID: StatusID,
                        CategoryID: CategoryID,
                        SubCategoryID: SubCategoryID,
                        ChangeType: ChangeType,
                        TicketNo: TicketNo,
                        CreatedBy: CreatedBy,
                        FromDate: FromDate,
                        ToDate: ToDate,
                        ApplicationID: ApplicationID,
                        LoginCustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                        AssignedTo: AssignedTo
                        // UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            TicketListUserService.prototype.GetTicketList = function (data) {
                var list = Array();
                for (var _i = 0, data_37 = data; _i < data_37.length; _i++) {
                    var item = data_37[_i];
                    list.push({
                        TicketID: item.TicketID,
                        CustomerName: item.CustomerName,
                        ProjectName: item.ProjectName,
                        TaskName: item.TaskName,
                        SubTask: item.SubTask,
                        TicketNo: item.TicketNo,
                        TicketTitle: item.TicketTitle,
                        Createdon: item.Createdon,
                        CreatedBy: item.CreatedBy,
                        CreatedFor: item.CreatedFor,
                        AssignedTo: item.AssignedTo,
                        TicketStatus: item.TicketStatus,
                        Category: item.Category,
                        SubCategory: item.SubCategory,
                        ClosureToDate: item.ClosureToDate,
                        ApprovalTypeID: item.ApprovalTypeID,
                        ApprovalType: item.ApprovalType,
                        ApplicationName: item.ApplicationName,
                        AssignedOn: item.AssignedOn,
                        ProjectID: item.ProjectID,
                        AppID: item.AppID,
                        StatusID: item.StatusID,
                        AssignedOntime: item.AssignedOntime,
                        WorkStartDate: item.WorkStartDate,
                        WorkStarttime: item.WorkStarttime,
                        DevelopmentCompletedDate: item.DevelopmentCompletedDate,
                        DevelopmentCompletedtime: item.DevelopmentCompletedtime,
                        QAMigrationdate: item.QAMigrationdate,
                        QAMigrationtime: item.QAMigrationtime,
                        ProdMigrateDate: item.ProdMigrateDate,
                        ProdMigratetime: item.ProdMigratetime,
                        QAApprovedDate: item.QAApprovedDate,
                        QAApprovedtime: item.QAApprovedtime,
                        ProdApprovalDate: item.ProdApprovalDate,
                        ProdApprovaltime: item.ProdApprovaltime,
                        UATCompleteDate: item.UATCompleteDate,
                        UATCompletetime: item.UATCompletetime,
                        Creationtime: item.Creationtime,
                        TicketClosureDate: item.TicketClosureDate,
                        TicketClosureTime: item.TicketClosureTime
                    });
                }
                return list;
            };
            TicketListUserService.$inject = ["$http", "$q", "$cookieStore"];
            return TicketListUserService;
        }(GCPL.Service.BaseService));
        Service.TicketListUserService = TicketListUserService;
        app.AddService("TicketListUserService", TicketListUserService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UseraAtofillService = /** @class */ (function (_super) {
            __extends(UseraAtofillService, _super);
            function UseraAtofillService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "UserNameAutoFill";
                _this.Cookie = _cookieStore;
                return _this;
            }
            UseraAtofillService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            UseraAtofillService.prototype.FilterAutoComplete = function (data) {
                var url = this.apiUrl + "/UserNameAutoFill";
                var config = {
                    params: {
                        UserName: data.term,
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            UseraAtofillService.prototype.GetAutoUser = function (data) {
                var list = Array();
                for (var _i = 0, data_38 = data; _i < data_38.length; _i++) {
                    var item = data_38[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName,
                    });
                }
                return list;
            };
            UseraAtofillService.$inject = ["$http", "$q", "$cookieStore"];
            return UseraAtofillService;
        }(GCPL.Service.BaseService));
        Service.UseraAtofillService = UseraAtofillService;
        //inject service
        app.AddService("UseraAtofillService", UseraAtofillService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AllServices.js.map