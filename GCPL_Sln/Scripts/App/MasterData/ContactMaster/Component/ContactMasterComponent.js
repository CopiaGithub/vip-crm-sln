var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Search = GCPL.Model.ContactSearchModel;
            var ContactMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ContactMasterController(_ListService, _cookieStore, _DeleContact) {
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
                    this.Contactlist = null;
                    this.ContactID = null;
                    this.ContactSearch = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.ContactSearch = new Search();
                    this.DeleteService = _DeleContact;
                    this.Cookie = _cookieStore;
                }
                ContactMasterController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                ContactMasterController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                ContactMasterController.prototype.SearchContactList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                ContactMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.Contactlist = this.ListService.Find(this.ContactSearch).then((function (response) {
                        _this.Contactlist = _this.ListService.GetContactlist(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.Contactlist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.Contactlist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 20;
                            });
                            console.log(_this.Contactlist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.Contactlist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                ContactMasterController.prototype.DeleteContactPerson = function (ContactID) {
                    var _this = this;
                    this.DeleteService.Find(ContactID).then((function (response) {
                        _this.DeleteService.postContactDelete(response.data.Result);
                        _this.Init();
                        alert("Record deleted successfully..");
                    }));
                };
                ContactMasterController.prototype.exportTableToCSV = function (filename) {
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
                ContactMasterController.prototype.downloadCSV = function (csv, filename) {
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
                ContactMasterController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                    this.DeleteContactPerson(this.ContactID);
                };
                ContactMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Contactlist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                ContactMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Contactlist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                ContactMasterController.prototype.Clear = function () {
                    this.ContactSearch.SearchText = "";
                    this.ContactSearch.ContactSAPID = "";
                    this.ContactSearch.CustSAPID = "";
                    this.ContactSearch.SearchCompanyName = "";
                    this.ContactSearch.SearchPhoneNo = "";
                    this.ContactSearch.Status = "";
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $("#txtContact").val("");
                    $("#txtCustomer").val("");
                    $("#txtPhone").val("");
                    $("#txtStatus").val("");
                };
                ContactMasterController.$inject = ["ContactListService", "$cookieStore", "DeleteContactservice"];
                return ContactMasterController;
            }());
            var ContactMasterComponentController = /** @class */ (function () {
                function ContactMasterComponentController() {
                    this.controller = ContactMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/ContactMaster/Template/_ContactMaster.html";
                }
                ContactMasterComponentController.Name = "contactmastercomponent";
                return ContactMasterComponentController;
            }());
            app.AddComponent(ContactMasterComponentController.Name, new ContactMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ContactMasterComponent.js.map