var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ProjectTrackerListController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ProjectTrackerListController(_ProjectListReportService, _getAutoProjectName, _getAutoProjectNO, _ProjectType, _ZoneDDService, _ProjectStageService, _ProjectSourceService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.UserID = null;
                    this.RoleID = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.ProjectListReport = null;
                    this.ProjectListSearch = null;
                    this.ProjectTypeDD = null;
                    this.ZoneDD = null;
                    this.ProjectStageDD = null;
                    this.ProjectSourceDD = null;
                    this.Cookie = null;
                    this.ProjectListReportService = _ProjectListReportService;
                    this.getAutoProjectName = _getAutoProjectName;
                    this.getAutoProjectNO = _getAutoProjectNO;
                    this.ProjectTypeService = _ProjectType;
                    this.ZoneDDService = _ZoneDDService;
                    this.ProjectStageService = _ProjectStageService;
                    this.ProjectSourceService = _ProjectSourceService;
                    this.ProjectListSearch = new GCPL.Model.ProjectHeaderReportmodel();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                ProjectTrackerListController.prototype.$onInit = function () {
                    this.Init();
                };
                ProjectTrackerListController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                ProjectTrackerListController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                ProjectTrackerListController.prototype.Init = function () {
                    var _this = this;
                    $("#txtFromDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    $("#txtToDate").datepicker({
                        dateFormat: 'dd M yy',
                        changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectToDate
                    });
                    var that = this;
                    $("#txtProjectName").autocomplete({
                        source: function (request, res) {
                            that.getAutoProjectName.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoProjectName.GetAutProjName(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ProjectName,
                                        value: item.ProjectName,
                                        id: item.ProjectID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.ProjectListSearch.ProjectID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtProjectNo").autocomplete({
                        source: function (request, res) {
                            that.getAutoProjectNO.FilterProjNo(request).then((function (response) {
                                var data = that.getAutoProjectNO.GetAutProjNo(response.data.Result);
                                debugger;
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ProjectNo,
                                        value: item.ProjectNo,
                                        id: item.ID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.ProjectListSearch.ID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((function (response) {
                        _this.ProjectTypeDD = _this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.ProjectStageDD = this.ProjectStageService.FindDD().then((function (response) {
                        _this.ProjectStageDD = _this.ProjectStageService.GetProjectStageDD(response.data.Result);
                    }));
                    this.ProjectSourceDD = this.ProjectSourceService.Find().then((function (response) {
                        _this.ProjectSourceDD = _this.ProjectSourceService.GetProjectSource(response.data.Result);
                    }));
                };
                ProjectTrackerListController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                ProjectTrackerListController.prototype.SearchProject = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                ProjectTrackerListController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.ProjectListSearch.ProjectType = this.ProjectListSearch.ProjectType;
                    this.ProjectListSearch.ID = this.ProjectListSearch.ID;
                    this.ProjectListSearch.ProjectStartDate = document.getElementById("txtFromDate").value;
                    this.ProjectListSearch.CompletionDate = document.getElementById("txtToDate").value;
                    this.ProjectListReport = this.ProjectListReportService.Find(this.ProjectListSearch).then((function (response) {
                        _this.ProjectListReport = _this.ProjectListReportService.GetProjectList(response.data.Result);
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.ProjectListReport.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.ProjectListReport.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.ProjectListReport);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.ProjectListReport.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.ProjectListReport.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.ProjectListReport.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.ProjectListReport);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.ProjectListReport.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                ProjectTrackerListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ProjectListReport.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                ProjectTrackerListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ProjectListReport.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                ProjectTrackerListController.prototype.Clear = function () {
                    this.ProjectListSearch.ProjectType = "";
                    this.ProjectListSearch.ID = "";
                    this.ProjectListSearch.ProjectID = "";
                    this.ProjectListSearch.ZoneID = "";
                    this.ProjectListSearch.ProjectStage = "";
                    this.ProjectListSearch.ProjectSource = "";
                    document.getElementById("txtProjectNo").value = "";
                    document.getElementById("txtProjectName").value = "";
                    document.getElementById("txtFromDate").value = "";
                    document.getElementById("txtToDate").value = "";
                };
                ProjectTrackerListController.prototype.downloadCSV = function (csv, filename) {
                    var csvFile;
                    var downloadLink;
                    // CSV file
                    csvFile = new Blob([csv], { type: "text/csv" });
                    // Download link
                    downloadLink = document.createElement("a");
                    // File name
                    downloadLink.download = filename;
                    // Create a link to the file
                    downloadLink.href = window.URL.createObjectURL(csvFile);
                    // Hide download link
                    downloadLink.style.display = "none";
                    // Add the link to DOM
                    document.body.appendChild(downloadLink);
                    // Click download link
                    downloadLink.click();
                };
                ProjectTrackerListController.prototype.exportTableToCSV = function (filename) {
                    debugger;
                    var csv = [];
                    var rows = document.querySelectorAll("#excelDownload tr");
                    for (var i = 0; i < rows.length; i++) {
                        var row = [], cols = rows[i].querySelectorAll("td, th");
                        for (var j = 0; j < cols.length; j++)
                            row.push('"' + cols[j].innerHTML + '"');
                        csv.push(row.join(","));
                    }
                    // Download CSV file
                    this.downloadCSV(csv.join("\n"), filename);
                };
                ProjectTrackerListController.$inject = ["ProjectListReportService", "getAutoProjectNameService", "getAutoProjectNOService", "ProjectTypeService", "ZoneDDService", "ProjectStageService", "ProjectSourceService", "$cookieStore"];
                return ProjectTrackerListController;
            }());
            var ProjectTrackerListComponentController = /** @class */ (function () {
                function ProjectTrackerListComponentController() {
                    this.controller = ProjectTrackerListController;
                    this.templateUrl = "/Scripts/App/ProjectTrackerList/Template/ProjectTrackerList.html";
                }
                ProjectTrackerListComponentController.Name = "projecttrackerlist";
                return ProjectTrackerListComponentController;
            }());
            app.AddComponent(ProjectTrackerListComponentController.Name, new ProjectTrackerListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProjectTrackerListComponent.js.map