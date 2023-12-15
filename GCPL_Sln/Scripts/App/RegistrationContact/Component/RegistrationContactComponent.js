var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var RegistrationContactController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function RegistrationContactController(_RegistrationContactListService, _cookieStore) {
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
                    this.RegistrationContactDatalist = null;
                    this.RegistrationContactSearch = null;
                    this.Cookie = null;
                    this._RegistrationContactListService = _RegistrationContactListService;
                    this.RegistrationContactSearch = Array();
                }
                RegistrationContactController.prototype.$onInit = function () {
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
                    $('#search-btn-loader').hide();
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                RegistrationContactController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    debugger;
                    this.RegistrationContactDatalist = this._RegistrationContactListService.Find(this.RegistrationContactSearch).then((function (response) {
                        _this.RegistrationContactDatalist = _this._RegistrationContactListService.GetRegistrationContactData(response.data.Result);
                    }));
                };
                RegistrationContactController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.RegistrationContactDatalist = this._RegistrationContactListService.Find(this.RegistrationContactSearch).then((function (response) {
                        _this.RegistrationContactDatalist = _this._RegistrationContactListService.GetRegistrationContactData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.RegistrationContactDatalist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.RegistrationContactDatalist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.RegistrationContactDatalist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.RegistrationContactDatalist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                RegistrationContactController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                RegistrationContactController.prototype.Clear = function () {
                    this.RegistrationContactSearch.SearchInput = "";
                    this.RegistrationContactSearch.StatusID = "";
                    $("#txtsearch").val("");
                    $("#ddlstatus").val("");
                };
                RegistrationContactController.prototype.SearchRegistrationContactList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                RegistrationContactController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.RegistrationContactDatalist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                RegistrationContactController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.RegistrationContactDatalist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                RegistrationContactController.prototype.Close = function () {
                    location.href = "#!/RegistrationContact";
                };
                RegistrationContactController.prototype.ErrorClose = function () {
                    location.href = "#!/RegistrationContact";
                };
                RegistrationContactController.$inject = ["RegistrationContactListService", "$cookieStore"];
                return RegistrationContactController;
            }());
            var RegistrationContactComponentController = /** @class */ (function () {
                function RegistrationContactComponentController() {
                    this.controller = RegistrationContactController;
                    this.templateUrl = "/Scripts/App/RegistrationContact/Template/RegistrationContact.html";
                }
                RegistrationContactComponentController.Name = "registrationcontactcomponent";
                return RegistrationContactComponentController;
            }());
            app.AddComponent(RegistrationContactComponentController.Name, new RegistrationContactComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RegistrationContactComponent.js.map