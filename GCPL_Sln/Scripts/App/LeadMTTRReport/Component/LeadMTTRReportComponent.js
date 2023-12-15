var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadMTTRReportController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadMTTRReportController(_CustomerSapAutofill, _getAutoSalesrep1, _LeadStatusService, _AllLeadMTTRService) {
                    this.FillAllMTTRLeadsSGrid = null;
                    this.LeadsMTTRHeaderModel = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.LeadStatusDropDown = null;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.LeadsMTTRHeaderModel = new GCPL.Model.LeadsMTTRHeaderModel();
                    this.LeadStatusService = _LeadStatusService;
                    this.AllLeadMTTRService = _AllLeadMTTRService;
                }
                LeadMTTRReportController.prototype.$onInit = function () {
                    this.Init();
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                };
                LeadMTTRReportController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                LeadMTTRReportController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                LeadMTTRReportController.prototype.addStatus = function (abc) {
                    LeadMTTRReportController.statusDropdownList.push(abc);
                };
                LeadMTTRReportController.prototype.Init = function () {
                    var _this = this;
                    var n = new Date();
                    n.setDate(n.getDate() - 7);
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
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                    $("#txtCustomer").autocomplete({
                        source: function (request, res) {
                            that.CustomerSapAutofill.FilterAutoComplete(request).then((function (response) {
                                var data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.CustomerName,
                                        value: item.CustomerName,
                                        id: item.CustomerID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.LeadsMTTRHeaderModel.CustomerID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtSalesRep1").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
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
                            that.LeadsMTTRHeaderModel.AllocatedTo = ui.item.id;
                            console.log(that.LeadsMTTRHeaderModel.AllocatedTo);
                        },
                        change: function () {
                        }
                    });
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusName(response.data.Result);
                    }));
                };
                LeadMTTRReportController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.LeadsMTTRHeaderModel.FromDate = document.getElementById("txtFromDate").value;
                    this.LeadsMTTRHeaderModel.ToDate = document.getElementById("txtToDate").value;
                    this.LeadsMTTRHeaderModel.StatusID = LeadMTTRReportController.statusDropdownList.toString();
                    this.FillAllMTTRLeadsSGrid = this.AllLeadMTTRService.FindGrid(this.LeadsMTTRHeaderModel).then((function (response) {
                        _this.FillAllMTTRLeadsSGrid = _this.AllLeadMTTRService.GetAllLeadsGrid(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.FillAllMTTRLeadsSGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillAllMTTRLeadsSGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + that.numRecords;
                            });
                            $('#search-btn-loader').hide();
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillAllMTTRLeadsSGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.FillAllMTTRLeadsSGrid.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                    }));
                };
                LeadMTTRReportController.prototype.Search = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.numRecords);
                };
                LeadMTTRReportController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                LeadMTTRReportController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillAllMTTRLeadsSGrid.slice(begin, end);
                    if (this.page + 2 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadMTTRReportController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillAllMTTRLeadsSGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadMTTRReportController.prototype.Clear = function () {
                    this.LeadsMTTRHeaderModel.CustSAPID = "";
                    this.LeadsMTTRHeaderModel.LeadID = "";
                    this.LeadsMTTRHeaderModel.StatusID = "";
                    document.getElementById("txtCustomer").value = "";
                    document.getElementById("txtSalesRep1").value = "";
                };
                LeadMTTRReportController.prototype.downloadCSV = function (csv, filename) {
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
                LeadMTTRReportController.prototype.exportTableToCSV = function (filename) {
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
                LeadMTTRReportController.statusDropdownList = [];
                LeadMTTRReportController.$inject = ["CustomerSapIdAutoFillService", "UserNameAtofillService", "LeadStatusddService", "AllLeadMTTRService"];
                return LeadMTTRReportController;
            }());
            var AllLeadComponentController = /** @class */ (function () {
                function AllLeadComponentController() {
                    this.controller = LeadMTTRReportController;
                    this.templateUrl = "/Scripts/App/LeadMTTRReport/Template/LeadMTTRReport.html";
                }
                AllLeadComponentController.Name = "leadmttrreportcomponent";
                return AllLeadComponentController;
            }());
            app.AddComponent(AllLeadComponentController.Name, new AllLeadComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadMTTRReportComponent.js.map