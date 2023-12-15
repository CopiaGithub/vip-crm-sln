var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Search = GCPL.Model.CustomerSearchModel;
            var CustomerMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function CustomerMasterController(_ListService, _cookieStore, _deleteCustomer) {
                    this._cookieStore = _cookieStore;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.CustomerMasterlist = null;
                    this.CustomerID = null;
                    this.CustomerSearch = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.CustomerSearch = new Search();
                    this.DeleteService = _deleteCustomer;
                    this.Cookie = _cookieStore;
                }
                CustomerMasterController.prototype.$onInit = function () {
                    /* Sorting */
                    //var th = document.getElementsByTagName('th')
                    //for (let c = 0; c < th.length; c++) {
                    //    th[c].addEventListener('click', item(c))
                    //}
                    //function item(c) {
                    //    return function () {
                    //        console.log(c)
                    //        sortTable(c)
                    //    }
                    //}
                    //function sortTable(c) {
                    //    var table, rows, switching, i, x, y, shouldSwitch;
                    //    table = document.getElementById("dataTable");
                    //    switching = true;
                    //    /*Make a loop that will continue until
                    //    no switching has been done:*/
                    //    while (switching) {
                    //        //start by saying: no switching is done:
                    //        switching = false;
                    //        rows = table.rows;
                    //        /*Loop through all table rows (except the
                    //        first, which contains table headers):*/
                    //        for (i = 1; i < (rows.length - 1); i++) {
                    //            //start by saying there should be no switching:
                    //            shouldSwitch = false;
                    //            /*Get the two elements you want to compare,
                    //            one from current row and one from the next:*/
                    //            x = rows[i].getElementsByTagName("TD")[c];
                    //            y = rows[i + 1].getElementsByTagName("TD")[c];
                    //            //check if the two rows should switch place:
                    //            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //                //if so, mark as a switch and break the loop:
                    //                shouldSwitch = true;
                    //                break;
                    //            }
                    //        }
                    //        if (shouldSwitch) {
                    //            /*If a switch has been marked, make the switch
                    //            and mark that a switch has been done:*/
                    //            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    //            switching = true;
                    //        }
                    //    }
                    //}
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                CustomerMasterController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#page-loader').show();
                };
                CustomerMasterController.prototype.SearchCustomerList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                CustomerMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.CustomerMasterlist = this.ListService.Find(this.CustomerSearch).then((function (response) {
                        _this.CustomerMasterlist = _this.ListService.GetCustomerlist(response.data.Result);
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.CustomerMasterlist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.CustomerMasterlist.forEach(function (value, key) {
                                debugger;
                                that.incre = parseInt(key) + 20;
                            });
                            console.log(_this.CustomerMasterlist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.CustomerMasterlist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                CustomerMasterController.prototype.DeleteCustomerPerson = function (CustomerID) {
                    var _this = this;
                    this.DeleteService.Find(CustomerID).then((function (response) {
                        _this.DeleteService.postCustomerDelete(response.data.Result);
                        _this.Init();
                        alert("Record deleted successfully..");
                    }));
                };
                CustomerMasterController.prototype.exportTableToCSV = function (filename) {
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
                CustomerMasterController.prototype.downloadCSV = function (csv, filename) {
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
                CustomerMasterController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                    this.DeleteCustomerPerson(this.CustomerID);
                };
                CustomerMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CustomerMasterlist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                CustomerMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CustomerMasterlist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                CustomerMasterController.prototype.Clear = function () {
                    this.CustomerSearch.SearchText = "";
                    this.CustomerSearch.Status = "";
                    this.CustomerSearch.SearchSAP = "";
                    this.CustomerSearch.SearchMobileNo = "";
                    this.CustomerSearch.SearchDistrict = "";
                    //this.CategorySearch = "";
                    $("#txtCustomer").val("");
                    $("#txtSAP").val("");
                    $("#txtDistrict").val("");
                    $("#txtMobile").val("");
                    $("#txtStatus").val("");
                };
                CustomerMasterController.$inject = ["CustomerListService", "$cookieStore", "DeleteCustomerService"];
                return CustomerMasterController;
            }());
            var CustomerMasterComponentController = /** @class */ (function () {
                function CustomerMasterComponentController() {
                    this.controller = CustomerMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/CustomerMaster/Template/_CustomerMaster.html";
                }
                CustomerMasterComponentController.Name = "customermastercomponent";
                return CustomerMasterComponentController;
            }());
            app.AddComponent(CustomerMasterComponentController.Name, new CustomerMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CustomerMasterComponent.js.map