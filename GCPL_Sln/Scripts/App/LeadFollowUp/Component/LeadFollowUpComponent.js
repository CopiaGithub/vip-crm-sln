var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var SearchFollow = GCPL.Model.ReportFollowupSearchModel;
            var LeadFollowUpController = /** @class */ (function () {
                function LeadFollowUpController(_LeadListService, _LeadStatusService, _CustomerSapAutofill, _getAutoUser, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.LeadStatusDropDown = null;
                    this.SearchList = null;
                    this.Cookie = null;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.numRecords = 10;
                    this.List = null;
                    this.UserID = null;
                    this.RoleID = null;
                    this.LeadListService = _LeadListService;
                    this.LeadFollupStatusService = _LeadStatusService;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.getAutoUser = _getAutoUser;
                    this.SearchList = new SearchFollow();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                LeadFollowUpController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                LeadFollowUpController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
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
                    this.SearchList.FromDate = document.getElementById("txtFromDate").value;
                    this.SearchList.ToDate = document.getElementById("txtToDate").value;
                    this.LeadStatusDropDown = this.LeadFollupStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadFollupStatusService.GetLeadStatusFollup(response.data.Result);
                    }));
                    var that = this;
                    $("#txtAllocated").autocomplete({
                        source: function (request, res) {
                            that.getAutoUser.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoUser.GetAutoUser(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.UserName,
                                        value: item.UserName,
                                        id: item.UserID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.SearchList.AllocatedTo = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtCustomerName").autocomplete({
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
                            that.SearchList.CustomerName = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                };
                LeadFollowUpController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                LeadFollowUpController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                LeadFollowUpController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.List = this.LeadListService.Find(this.SearchList).then((function (response) {
                        _this.List = _this.LeadListService.Getlist(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.List.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.List.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.List);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.List.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                LeadFollowUpController.prototype.exportTableToCSV = function (filename) {
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
                LeadFollowUpController.prototype.downloadCSV = function (csv, filename) {
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
                LeadFollowUpController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                LeadFollowUpController.prototype.Search = function () {
                    $('#search-btn-loader').show();
                    this.SearchList.FromDate = document.getElementById("txtFromDate").value;
                    this.SearchList.ToDate = document.getElementById("txtToDate").value;
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                LeadFollowUpController.prototype.Clear = function () {
                    this.SearchList.LeadID = "";
                    this.SearchList.StatusID = "";
                    this.SearchList.CustomerName = "";
                    this.SearchList.AllocatedTo = "";
                    this.SearchList.FromDate = "";
                    this.SearchList.ToDate = "";
                    $("#txtCustomerName").val("");
                    $("#txtLead").val("");
                    $("#txtAllocated").val("");
                    $("#txtleadstatus").val("");
                    document.getElementById("txtToDate").value = "";
                    document.getElementById("txtFromDate").value = "";
                };
                LeadFollowUpController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.List.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadFollowUpController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.List.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadFollowUpController.$inject = ["FollowUpReportService", "LeadFollupStatusService", "CustomerSapIdAutoFillService", "UserCodeAutoFillService", "$cookieStore"];
                return LeadFollowUpController;
            }());
            var LeadFollowUpComponentController = /** @class */ (function () {
                function LeadFollowUpComponentController() {
                    this.controller = LeadFollowUpController;
                    this.templateUrl = "/Scripts/App/LeadFollowUp/Template/LeadFollowUp.html";
                }
                LeadFollowUpComponentController.Name = "leadfollowupcomponent";
                return LeadFollowUpComponentController;
            }());
            app.AddComponent(LeadFollowUpComponentController.Name, new LeadFollowUpComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadFollowUpComponent.js.map