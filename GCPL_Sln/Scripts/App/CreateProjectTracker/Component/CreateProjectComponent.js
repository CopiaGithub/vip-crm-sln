var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var InsertProjectMaster = GCPL.Model.CreateNewProject;
            var CreateProjectController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function CreateProjectController(_CreateProjectService, _ProjectType, _ProjectStageService, _ProjectIndustryService, _ProjectOwnershipService, _ProjectSourceService, _CustProjectTypeService, _getAutoSalesrep1, _MultipleUserMasterService, _ZoneDDService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.ProjectAssignDropdownList = [];
                    this.ProjectIndustryDD = null;
                    this.ProjectSourceDD = null;
                    this.ProjectOwnershipDD = null;
                    this.ProjectTypeDD = null;
                    this.ProjectStageDD = null;
                    this.InsertProject = null;
                    this.CustProjectTypeDD = null;
                    this.UserMasterDropDown = null;
                    this.UserID = null;
                    this.UserName = null;
                    this.ZoneDD = null;
                    this.Cookie = null;
                    this.CreateProjectService = _CreateProjectService;
                    this.ProjectTypeService = _ProjectType;
                    this.ProjectStageService = _ProjectStageService;
                    this.ProjectIndustryService = _ProjectIndustryService;
                    this.ProjectOwnershipService = _ProjectOwnershipService;
                    this.ProjectSourceService = _ProjectSourceService;
                    this.InsertProject = new InsertProjectMaster();
                    this.CustProjectTypeService = _CustProjectTypeService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.MultipleUserMasterService = _MultipleUserMasterService;
                    this.ZoneDDService = _ZoneDDService;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.UserName = this.Cookie.get('UserInfo')['UserName'];
                }
                CreateProjectController.prototype.$onInit = function () {
                    this.Init();
                    this.ProjectAssignDropdownList = [];
                    $("#txtFromDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    $("#txtToDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectToDate
                    });
                };
                CreateProjectController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                CreateProjectController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                CreateProjectController.prototype.Init = function () {
                    var _this = this;
                    this.ProjectAssignDropdownList = [];
                    var n = new Date();
                    n.setDate(n.getDate());
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m = months[n.getMonth()];
                    var d = n.getDate();
                    var y = n.getFullYear();
                    document.getElementById("txtFromDate").innerHTML = d + " " + m + " " + y;
                    $('#txtFromDate').val(d + " " + m + " " + y);
                    document.getElementById("txtFromDate").value;
                    $("#txtFromDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    var n1 = new Date();
                    var y1 = n1.getFullYear();
                    var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m1 = months1[n1.getMonth()];
                    var d1 = n1.getDate();
                    document.getElementById("txtToDate").innerHTML = d1 + " " + m1 + " " + y1;
                    $('#txtToDate').val(d1 + " " + m1 + " " + y1);
                    document.getElementById("txtToDate").value;
                    $("#txtToDate").datepicker({
                        dateFormat: 'dd M yy',
                        changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectToDate
                    });
                    document.getElementById("txtProjectOwner").value = this.UserName;
                    this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((function (response) {
                        _this.ProjectTypeDD = _this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
                    }));
                    this.ProjectStageDD = this.ProjectStageService.FindDD().then((function (response) {
                        _this.ProjectStageDD = _this.ProjectStageService.GetProjectStageDD(response.data.Result);
                    }));
                    this.ProjectIndustryDD = this.ProjectIndustryService.Find().then((function (response) {
                        _this.ProjectIndustryDD = _this.ProjectIndustryService.GetIndustry(response.data.Result);
                    }));
                    this.ProjectOwnershipDD = this.ProjectOwnershipService.Find().then((function (response) {
                        _this.ProjectOwnershipDD = _this.ProjectOwnershipService.GetOwnership(response.data.Result);
                    }));
                    this.ProjectSourceDD = this.ProjectSourceService.Find().then((function (response) {
                        _this.ProjectSourceDD = _this.ProjectSourceService.GetProjectSource(response.data.Result);
                    }));
                    this.CustProjectTypeDD = this.CustProjectTypeService.FindCustProjectTypeDD().then((function (response) {
                        _this.CustProjectTypeDD = _this.CustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    var that = this;
                    //$("#txtProjectOwner").autocomplete({
                    //    source: function (request, res) {
                    //        that.CustomerSapAutofill.FilterAutoComplete(request).then((response => {
                    //            let data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                    //            debugger;
                    //            res($.map(data, function (item, index) {
                    //                return {
                    //                    label: item.CustomerName,
                    //                    value: item.CustomerName,
                    //                    id: item.CustomerID,
                    //                }
                    //            }));
                    //        }));
                    //    },
                    //    minLength: 2,
                    //    focus: (event, ui) => {
                    //        event.preventDefault();
                    //    },
                    //    select: function (e, ui) {
                    //        that.InsertProject.ProjectOwner = ui.item.id;
                    //    },
                    //    change: function () {
                    //    }
                    //});
                    //$("#txtProjectOwner").autocomplete({
                    //    source: function (request, res) {
                    //        that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {
                    //            let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                    //            res($.map(data, function (item, index) {
                    //                return {
                    //                    label: item.Name,
                    //                    value: item.Name,
                    //                    id: item.userid
                    //                }
                    //            }));
                    //        }));
                    //    },
                    //    minLength: 2,
                    //    focus: (event, ui) => {
                    //        event.preventDefault();
                    //    },
                    //    select: function (e, ui) {
                    //        that.InsertProject.ProjectOwner = ui.item.id;
                    //    },
                    //    change: function () {
                    //    }
                    //});
                    $("#txtProjectManager").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value: item.Name,
                                        id: item.userid
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertProject.ProjectManager = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtProjectAssign").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value: item.Name,
                                        id: item.userid
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertProject.ProjectAssign = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                };
                CreateProjectController.prototype.ProjectAssign = function () {
                    var _this = this;
                    this.UserMasterDropDown = this.MultipleUserMasterService.Find(this.InsertProject.ZoneID).then((function (response) {
                        _this.UserMasterDropDown = _this.MultipleUserMasterService.GetUserName(response.data.Result);
                    }));
                };
                CreateProjectController.prototype.addUser = function (abc, abc_name, checkUser) {
                    debugger;
                    if (checkUser == true) {
                        this.ProjectAssignDropdownList.push({ userID: abc, userName: abc_name });
                    }
                    else {
                        for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                            if (abc == this.ProjectAssignDropdownList[i].userID) {
                                this.ProjectAssignDropdownList.splice(i, 1);
                            }
                        }
                    }
                };
                //addUser(abc: string): void {
                //    debugger;
                //    CreateProjectController.ProjectAssignDropdownList.push(abc);
                //}
                CreateProjectController.prototype.Submit = function () {
                    var _this = this;
                    $("#ass-btn-loader1").show();
                    this.InsertProject.UserID = this.UserID;
                    this.InsertProject.ProjectStartDate = document.getElementById("txtFromDate").value;
                    this.InsertProject.CompletionDate = document.getElementById("txtToDate").value;
                    if (this.InsertProject.ProjectName == undefined || this.InsertProject.ProjectName == null || this.InsertProject.ProjectName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    //else if (this.InsertProject.ProjectNo == undefined || this.InsertProject.ProjectNo == null || this.InsertProject.ProjectNo == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Enter Project Number", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    else if (this.InsertProject.ProjectType == undefined || this.InsertProject.ProjectType == null || this.InsertProject.ProjectType == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.ProjectStage == undefined || this.InsertProject.ProjectStage == null || this.InsertProject.ProjectStage == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Stage", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.Cost == undefined || this.InsertProject.Cost == null || this.InsertProject.Cost == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Cost", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.ProjectStartDate == undefined || this.InsertProject.ProjectStartDate == null || this.InsertProject.ProjectStartDate == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Start Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.CompletionDate == undefined || this.InsertProject.CompletionDate == null || this.InsertProject.CompletionDate == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Completion Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.Industry == undefined || this.InsertProject.Industry == null || this.InsertProject.Industry == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Industry", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.Ownership == undefined || this.InsertProject.Ownership == null || this.InsertProject.Ownership == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Ownership", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.CustProjectType == undefined || this.InsertProject.CustProjectType == null || this.InsertProject.CustProjectType == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Project Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    //else if (this.InsertProject.ProjectOwner == undefined || this.InsertProject.ProjectOwner == null || this.InsertProject.ProjectOwner == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Enter Project Owner", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    else if (this.InsertProject.ProjectManager == undefined || this.InsertProject.ProjectManager == null || this.InsertProject.ProjectManager == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Manager", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    //else if (this.InsertProject.ProjectAssign == undefined || this.InsertProject.ProjectAssign == null || this.InsertProject.ProjectAssign == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Enter Project Assign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    else if (this.InsertProject.ZoneID == undefined || this.InsertProject.ZoneID == null || this.InsertProject.ZoneID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.ProjectSource == undefined || this.InsertProject.ProjectSource == null || this.InsertProject.ProjectSource == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertProject.Comments == undefined || this.InsertProject.Comments == null || this.InsertProject.Comments == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Comments", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else {
                        debugger;
                        this.InsertProject.ProjectOwner = this.UserID;
                        var ProjectAssignArray = [];
                        for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                            ProjectAssignArray.push(this.ProjectAssignDropdownList[i].userID);
                        }
                        this.InsertProject.ProjectAssign = ProjectAssignArray.toString();
                        //this.InsertProject.ProjectAssign = CreateProjectController.ProjectAssignDropdownList.toString();
                        this.CreateProjectService.CreateProject(this.InsertProject).then((function (response) {
                            console.log(_this.InsertProject);
                            if (response.data.Result != null) {
                                debugger;
                                $("#errorclose").hide();
                                $("#close").show();
                                $("#ass-btn-loader1").hide();
                                _this.popupMessage("Project Data " + response.data.Result + " saved Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.Clear();
                                _this.InsertProject = null;
                            }
                            else {
                                _this.HideShow();
                                $("#ass-btn-loader1").hide();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                CreateProjectController.prototype.Clear = function () {
                    // this.FillGrid(this.numRecords);
                    this.InsertProject.ProjectID = "";
                    this.InsertProject.ProjectName = "";
                    this.InsertProject.ProjectNo = "";
                    this.InsertProject.ProjectType = "";
                    this.InsertProject.ProjectStage = "";
                    this.InsertProject.Cost = "";
                    this.InsertProject.Ownership = "";
                    this.InsertProject.ProjectStartDate = "";
                    this.InsertProject.CompletionDate = "";
                    this.InsertProject.ProjectSource = "";
                    this.InsertProject.Comments = "";
                    this.InsertProject.Industry = "";
                    this.InsertProject.ZoneID = "";
                    document.getElementById("txtFromDate").value = "";
                    document.getElementById("txtToDate").value = "";
                };
                CreateProjectController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CreateProjectController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CreateProjectController.prototype.Close = function () {
                    location.href = "#!/ProjectList";
                };
                CreateProjectController.$inject = ["CreateProjectService", "ProjectTypeService", "ProjectStageService", "ProjectIndustryService", "ProjectOwnershipService",
                    "ProjectSourceService", "CustProjectTypeService", "EmployeeAtofillService", "MultipleUserMasterService", "ZoneDDService", "$cookieStore"];
                return CreateProjectController;
            }());
            var CreateProjectComponentController = /** @class */ (function () {
                function CreateProjectComponentController() {
                    this.controller = CreateProjectController;
                    this.templateUrl = "/Scripts/App/CreateProjectTracker/Template/CreateProject.html";
                }
                CreateProjectComponentController.Name = "createproject";
                return CreateProjectComponentController;
            }());
            app.AddComponent(CreateProjectComponentController.Name, new CreateProjectComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateProjectComponent.js.map