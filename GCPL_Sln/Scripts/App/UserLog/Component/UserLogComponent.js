var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var UserLogController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function UserLogController(_ULService) {
                    this.UserLogHeaderModel = null;
                    this.FillUserLogGrid = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.UserLogHeaderModel = new GCPL.Model.UserLogHeaderModel();
                    this.ULService = _ULService;
                }
                UserLogController.prototype.$onInit = function () {
                    /* Sorting */
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
                    $('#search-btn-loader').hide();
                    var that = this;
                    this.Init();
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
                UserLogController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                UserLogController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                UserLogController.prototype.Init = function () {
                    var that = this;
                };
                UserLogController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.FillUserLogGrid = this.ULService.FindGrid(this.UserLogHeaderModel).then((function (response) {
                        _this.FillUserLogGrid = _this.ULService.GetUserLogGrid(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.FillUserLogGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillUserLogGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.FillUserLogGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillUserLogGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                UserLogController.prototype.Clear = function () {
                    this.UserLogHeaderModel.UserName = "";
                    document.getElementById("txtFromDate").value = "";
                    document.getElementById("txtToDate").value = "";
                };
                UserLogController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillUserLogGrid.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                UserLogController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillUserLogGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                UserLogController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                UserLogController.prototype.Search = function () {
                    $('#search-btn-loader').show();
                    var that = this;
                    this.UserLogHeaderModel.FromDate = document.getElementById("txtFromDate").value;
                    this.UserLogHeaderModel.ToDate = document.getElementById("txtToDate").value;
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                UserLogController.prototype.downloadCSV = function (csv, filename) {
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
                UserLogController.prototype.exportTableToCSV = function (filename) {
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
                UserLogController.$inject = ["UserLogGridService"];
                return UserLogController;
            }());
            var UserLogComponentController = /** @class */ (function () {
                function UserLogComponentController() {
                    this.controller = UserLogController;
                    this.templateUrl = "/Scripts/App/UserLog/Template/_UserLog.html";
                }
                UserLogComponentController.Name = "userlogcomponent";
                return UserLogComponentController;
            }());
            app.AddComponent(UserLogComponentController.Name, new UserLogComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UserLogComponent.js.map