var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ProjectListController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ProjectListController(_ListService, _getAutoProjectName, _getAutoProjectNO, _CustProjectTypeService, _ProjectType, _ZoneDDService, _cookieStore) {
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
                    this.alert = null;
                    this.ProjectList = null;
                    this.CustProjectTypeDD = null;
                    this.ProjectListSearch = null;
                    this.ProjectTypeDD = null;
                    this.ZoneDD = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.getAutoProjectName = _getAutoProjectName;
                    this.getAutoProjectNO = _getAutoProjectNO;
                    this.CustProjectTypeService = _CustProjectTypeService;
                    this.ProjectTypeService = _ProjectType;
                    this.ZoneDDService = _ZoneDDService;
                    this.ProjectListSearch = new GCPL.Model.ProjectHeadermodel();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                ProjectListController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                ProjectListController.prototype.Init = function () {
                    var _this = this;
                    if (this.RoleID == "5") {
                        $("#btncreateproj").hide();
                    }
                    else {
                        $("#btncreateproj").show();
                    }
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
                            debugger;
                            that.ProjectListSearch.ID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    this.CustProjectTypeDD = this.CustProjectTypeService.FindCustProjectTypeDD().then((function (response) {
                        _this.CustProjectTypeDD = _this.CustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
                    }));
                    this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((function (response) {
                        _this.ProjectTypeDD = _this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                };
                ProjectListController.prototype.SearchProjectList = function () {
                    debugger;
                    // $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                ProjectListController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                ProjectListController.prototype.FillGrid = function (NoOfRecords) {
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
                    this.ProjectList = this.ListService.Find(this.ProjectListSearch).then((function (response) {
                        _this.ProjectList = _this.ListService.GetProjectList(response.data.Result);
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.ProjectList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.ProjectList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.ProjectList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.ProjectList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.ProjectList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.ProjectList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.ProjectList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.ProjectList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                ProjectListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ProjectList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                ProjectListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ProjectList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                ProjectListController.prototype.Clear = function () {
                    this.ProjectListSearch.ProjectType = "";
                    this.ProjectListSearch.ID = "";
                    this.ProjectListSearch.ProjectID = "";
                    this.ProjectListSearch.ZoneID = "";
                    document.getElementById("txtProjectNo").value = "";
                    document.getElementById("txtProjectName").value = "";
                };
                ProjectListController.prototype.downloadCSV = function (csv, filename) {
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
                ProjectListController.prototype.exportTableToCSV = function (filename) {
                    var csv = [];
                    var rows = document.querySelectorAll("#excelDownload tr");
                    for (var i = 0; i < rows.length; i++) {
                        var row = [], cols = rows[i].querySelectorAll("td, th");
                        for (var j = 0; j < cols.length; j++)
                            row.push(cols[j].innerHTML);
                        csv.push(row.join(","));
                    }
                    // Download CSV file
                    this.downloadCSV(csv.join("\n"), filename);
                };
                ProjectListController.$inject = ["ProjectListService", "getAutoProjectNameService", "getAutoProjectNOService", "CustProjectTypeService", "ProjectTypeService", "ZoneDDService", "$cookieStore"];
                return ProjectListController;
            }());
            var ProjectListComponentController = /** @class */ (function () {
                function ProjectListComponentController() {
                    this.controller = ProjectListController;
                    this.templateUrl = "/Scripts/App/ProjectList/Template/ProjectList.html";
                }
                ProjectListComponentController.Name = "projectlist";
                return ProjectListComponentController;
            }());
            app.AddComponent(ProjectListComponentController.Name, new ProjectListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProjectListComponent.js.map