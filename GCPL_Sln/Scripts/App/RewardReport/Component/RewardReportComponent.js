var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var VLERewardReportMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function VLERewardReportMasterController(_RewardListReportService, _getAutoVLEName, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.RewardListSearch = null;
                    this.RewardListReport = null;
                    this.Cookie = null;
                    this.RewardListReportService = _RewardListReportService;
                    this.getAutoVLEName = _getAutoVLEName;
                    this.Cookie = _cookieStore;
                    this.RewardListSearch = new GCPL.Model.RewardSearchModel();
                }
                VLERewardReportMasterController.prototype.$onInit = function () {
                    this.Init();
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                VLERewardReportMasterController.prototype.Init = function () {
                    var that = this;
                    $("#SearchText").autocomplete({
                        source: function (request, res) {
                            that.getAutoVLEName.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoVLEName.GetAutoVLEName(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ContactName,
                                        value: item.ContactName,
                                        id: item.VLEID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.RewardListSearch.SearchText = ui.item.value;
                        },
                        change: function () {
                        }
                    });
                };
                VLERewardReportMasterController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                VLERewardReportMasterController.prototype.SearchReward = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                VLERewardReportMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.RewardListSearch.LeadID = this.RewardListSearch.LeadID;
                    this.RewardListReport = this.RewardListReportService.Find(this.RewardListSearch).then((function (response) {
                        debugger;
                        _this.RewardListReport = _this.RewardListReportService.GetRewardReportList(response.data.Result);
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.RewardListReport.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.RewardListReport.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            $('#search-btn-loader').hide();
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.RewardListReport.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.RewardListReport.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.RewardListReport.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.RewardListReport);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.RewardListReport.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                VLERewardReportMasterController.prototype.Clear = function () {
                    this.RewardListSearch.SearchText = "";
                    this.RewardListSearch.LeadID = "";
                    this.RewardListSearch.PaidConverted = "";
                    this.RewardListSearch.WonPoints = "";
                    $("#ddlPaidConverted").val("");
                    $("#ddlPaidWon").val("");
                    $("#LeadID").val("");
                    $("#SearchText").val("");
                };
                VLERewardReportMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.RewardListReport.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                VLERewardReportMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.RewardListReport.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                VLERewardReportMasterController.prototype.downloadCSV = function (csv, filename) {
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
                VLERewardReportMasterController.prototype.exportTableToCSV = function (filename) {
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
                VLERewardReportMasterController.$inject = ["RewardReportListService", "getAutoVLENameService", "$cookieStore"];
                return VLERewardReportMasterController;
            }());
            var VLERewardReportMasterComponentController = /** @class */ (function () {
                function VLERewardReportMasterComponentController() {
                    this.controller = VLERewardReportMasterController;
                    this.templateUrl = "/Scripts/App/RewardReport/Template/RewardReport.html";
                }
                VLERewardReportMasterComponentController.Name = "vlerewardreportmastercomponent";
                return VLERewardReportMasterComponentController;
            }());
            app.AddComponent(VLERewardReportMasterComponentController.Name, new VLERewardReportMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RewardReportComponent.js.map