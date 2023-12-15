var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var insert = GCPL.Model.DeligationMasterInsertModel;
            var DelegationMatrixController = /** @class */ (function () {
                function DelegationMatrixController(_DeligationService, _EDservice, _InsertDeligationService, _getAutoSalesrep, _getAutoSalesrep1, _ZoneDDService, _deleDelegation) {
                    this.DeligationGrid = null;
                    this.ZoneDD = null;
                    this.TeamAllocationID = null;
                    this.DeligationMasterHeaderModel = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.DeligationService = _DeligationService;
                    this.ZoneDDService = _ZoneDDService;
                    this.DeleteService = _deleDelegation;
                    this.DeligationMasterHeaderModel = new Array();
                    this.EDservice = _EDservice;
                    this.InsertDeligationService = _InsertDeligationService;
                    this.InsertDeligation = new insert();
                    this.getAutoSalesrep = _getAutoSalesrep;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                }
                DelegationMatrixController.prototype.$onInit = function () {
                    /* Sorting */
                    $("#errorclose").hide();
                    $("#close").hide();
                    var th = document.getElementsByTagName('th');
                    for (var c = 0; c < th.length; c++) {
                        th[c].addEventListener('click', item(c));
                    }
                    function item(c) {
                        return function () {
                            console.log(c);
                            sortTable(c);
                        };
                    }
                    function sortTable(c) {
                        var table, rows, switching, i, x, y, shouldSwitch;
                        table = document.getElementById("dataTable");
                        switching = true;
                        /*Make a loop that will continue until
                        no switching has been done:*/
                        while (switching) {
                            //start by saying: no switching is done:
                            switching = false;
                            rows = table.rows;
                            /*Loop through all table rows (except the
                            first, which contains table headers):*/
                            for (i = 1; i < (rows.length - 1); i++) {
                                //start by saying there should be no switching:
                                shouldSwitch = false;
                                /*Get the two elements you want to compare,
                                one from current row and one from the next:*/
                                x = rows[i].getElementsByTagName("TD")[c];
                                y = rows[i + 1].getElementsByTagName("TD")[c];
                                //check if the two rows should switch place:
                                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                                    //if so, mark as a switch and break the loop:
                                    shouldSwitch = true;
                                    break;
                                }
                            }
                            if (shouldSwitch) {
                                /*If a switch has been marked, make the switch
                                and mark that a switch has been done:*/
                                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                                switching = true;
                            }
                        }
                    }
                    /*sorting end*/
                    this.Init();
                    $('#search-btn-loader').hide();
                };
                DelegationMatrixController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    $("#txtManager").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep.GetAutoManager(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ManagerName,
                                        value: item.ManagerName,
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
                            that.InsertDeligation.ManagersEmployeeCode = ui.item.id;
                            //that.InsertDeligation.ManagerName = ui.item.value;
                        },
                        change: function () {
                        }
                    });
                    $("#txtEmployee").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value1: item.Name,
                                        id1: item.userid
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertDeligation.TeamLeadID = ui.item.id1;
                            // that.InsertDeligation.EmployeeName = ui.item.value1;
                        },
                        change: function () {
                        }
                    });
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    $("#txtbysearchMN").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep.GetAutoManager(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ManagerName,
                                        value: item.ManagerName,
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
                            that.DeligationMasterHeaderModel.SearchManagerName = ui.item.id;
                            //that.InsertDeligation.ManagerName = ui.item.value;
                        },
                        change: function () {
                        }
                    });
                    $("#txtbysearchu").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value1: item.Name,
                                        id1: item.userid
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.DeligationMasterHeaderModel.SearchInput = ui.item.id1;
                            // that.InsertDeligation.EmployeeName = ui.item.value1;
                        },
                        change: function () {
                        }
                    });
                };
                DelegationMatrixController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.DeligationGrid = this.DeligationService.FindGrid(this.DeligationMasterHeaderModel).then((function (response) {
                        _this.DeligationGrid = _this.DeligationService.GetDeligationGrid(response.data.Result);
                        if (_this.DeligationGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.DeligationGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.DeligationGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.DeligationGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        $('#search-btn-loader').hide();
                        _this.maxPages = (that.incre / that.numRecords);
                        _this.ShowBack = false;
                        _this.ShowNext = that.maxPages > 1 ? true : false;
                        _this.shownItems = _this.DeligationGrid.slice(0, that.numRecords);
                    }));
                };
                DelegationMatrixController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.DeligationGrid.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                DelegationMatrixController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.DeligationGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                DelegationMatrixController.prototype.Add = function () {
                    this.InsertDeligation.ManagersEmployeeCode = "";
                    this.InsertDeligation.TeamLeadID = "";
                    this.InsertDeligation.Status = "";
                    $("#txtManager").value = "";
                    $("#txtEmployee").value = "";
                };
                DelegationMatrixController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertDeligation.ManagersEmployeeCode == undefined || this.InsertDeligation.ManagersEmployeeCode == null || this.InsertDeligation.ManagersEmployeeCode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Manager Name.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDeligation.TeamLeadID == undefined || this.InsertDeligation.TeamLeadID == null || this.InsertDeligation.TeamLeadID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Employee Name.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertDeligationService.PostDeligationMatrix(this.InsertDeligation).then(function (response) {
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Delegation Data is saved Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertDeligation = {};
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                                $("#txtManager").val("");
                                $("#txtEmployee").val("");
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        });
                    }
                };
                DelegationMatrixController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                DelegationMatrixController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                DelegationMatrixController.prototype.DeleteTeamAllocationID = function (TeamAllocationID) {
                    var _this = this;
                    this.DeleteService.Find(TeamAllocationID).then((function (response) {
                        _this.DeleteService.postDelegationDelete(response.data.Result);
                        _this.Init();
                        $("#errorclose").hide();
                        $("#close").show();
                        _this.popupMessage("Record deleted successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        _this.numRecords = _this.NoOfRds;
                        _this.FillGrid(_this.numRecords);
                    }));
                };
                DelegationMatrixController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    $("#ErrClose").show();
                    $("#submitClose").hide();
                    this.alert = Message;
                };
                DelegationMatrixController.prototype.Search = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#search-btn-loader').show();
                };
                DelegationMatrixController.prototype.EditDeligation = function (data) {
                    var _this = this;
                    this.EDservice.Find(data).then((function (response) {
                        _this.InsertDeligation = _this.EDservice.GetDeligationMasterEdit(response.data.Result);
                        $('#txtManager').val(_this.InsertDeligation.ManagerName.toString());
                        $('#txtEmployee').val(_this.InsertDeligation.EmployeeName.toString());
                        if (_this.InsertDeligation.Status == "True") {
                            _this.InsertDeligation.Status = "1";
                        }
                        else {
                            _this.InsertDeligation.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                DelegationMatrixController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                DelegationMatrixController.prototype.Clear = function () {
                    this.DeligationMasterHeaderModel.SearchInput = "";
                    this.DeligationMasterHeaderModel.SearchManagerName = "";
                    this.DeligationMasterHeaderModel.Status = "";
                    this.DeligationMasterHeaderModel.ZoneName = "";
                    $("#txtbysearchu").val("");
                    $("#txtbysearchMN").val("");
                    //this.CategorySearch = "";
                    $("#txtModel").val("");
                    $("#txtPhone").val("");
                    $("#ddlzonesearch").val("");
                    $("#ddlstatus").val("");
                };
                DelegationMatrixController.prototype.downloadCSV = function (csv, filename) {
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
                DelegationMatrixController.prototype.exportTableToCSV = function (filename) {
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
                DelegationMatrixController.$inject = ["DeligationMasterService", "DeligationMasterEditService", "InsertDeligationService", "ManagerAtofillService", "EmployeeAtofillService", "ZoneDDService", "DeleteDelegationService"];
                return DelegationMatrixController;
            }());
            var DelegationMatrixComponentController = /** @class */ (function () {
                function DelegationMatrixComponentController() {
                    this.controller = DelegationMatrixController;
                    this.templateUrl = "/Scripts/App/DelegationMatrix/Template/_DelegationMatrix.html";
                }
                DelegationMatrixComponentController.Name = "delegationmatrixcomponent";
                return DelegationMatrixComponentController;
            }());
            app.AddComponent(DelegationMatrixComponentController.Name, new DelegationMatrixComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DelegationMatrixComponent.js.map