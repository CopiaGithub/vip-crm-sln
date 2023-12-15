var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ContactMaster = GCPL.Model.InsertContactMaster;
            var LeadAssessmentListController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadAssessmentListController(_ListService, _CustomerSapAutofill, _LeadStatusService, _cookieStore) {
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
                    this.Assessmentlist = null;
                    this.AssessmentSearch = null;
                    this.InsertContact = null;
                    this.LeadStatusDropDown = null;
                    this.UserID = null;
                    this.RoleID = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.LeadStatusService = _LeadStatusService;
                    this.Cookie = _cookieStore;
                    this.AssessmentSearch = Array();
                    this.InsertContact = new ContactMaster();
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                LeadAssessmentListController.prototype.$onInit = function () {
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
                    this.Init();
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                LeadAssessmentListController.prototype.Init = function () {
                    var _this = this;
                    $('#search-btn-loader').show();
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusAssessmentName(response.data.Result);
                    }));
                    var that = this;
                    $("#txtCustomerrName").autocomplete({
                        //  source:['1a0','anjali','archana'],
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
                            // Don't populate input field with selected value (pxid)
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.AssessmentSearch.CustomerID = ui.item.id;
                            that.Search1(ui.item.id);
                            console.log(that.AssessmentSearch.CustomerID);
                        },
                        change: function () {
                        }
                    });
                };
                LeadAssessmentListController.prototype.SearchAssessmentList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                LeadAssessmentListController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.Assessmentlist = this.ListService.Find(this.AssessmentSearch).then((function (response) {
                        _this.Assessmentlist = _this.ListService.GetAssessmentList(response.data.Result);
                        $('#search-btn-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.Assessmentlist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.Assessmentlist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.Assessmentlist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.Assessmentlist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.Assessmentlist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.Assessmentlist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.Assessmentlist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.Assessmentlist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                LeadAssessmentListController.prototype.Search1 = function (data) {
                    var _this = this;
                    this.CustomerSapAutofill.FindCustomerSAPID(data).then((function (response) {
                        _this.InsertContact.CustomerSAPID = _this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
                    }));
                };
                LeadAssessmentListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Assessmentlist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadAssessmentListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Assessmentlist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadAssessmentListController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                LeadAssessmentListController.prototype.Clear = function () {
                    this.AssessmentSearch.SearchInput = "";
                    this.AssessmentSearch.StatusID = "";
                    this.AssessmentSearch.CustomerID = "";
                    this.AssessmentSearch.LeadID = "";
                    $("#txtCustomerName").val("");
                    $("#txtLeadID").val("");
                };
                LeadAssessmentListController.$inject = ["AssessmentListService", "CustomerSapIdAutoFillService", "LeadStatusAssessmentddService", "$cookieStore"];
                return LeadAssessmentListController;
            }());
            var LeadAssessmentListComponentController = /** @class */ (function () {
                function LeadAssessmentListComponentController() {
                    this.controller = LeadAssessmentListController;
                    this.templateUrl = "/Scripts/App/LeadAssessmentList/Template/LeadAssessmentList.html";
                }
                LeadAssessmentListComponentController.Name = "leadassessmentlistcomponent";
                return LeadAssessmentListComponentController;
            }());
            app.AddComponent(LeadAssessmentListComponentController.Name, new LeadAssessmentListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadAssessmentListComponent.js.map