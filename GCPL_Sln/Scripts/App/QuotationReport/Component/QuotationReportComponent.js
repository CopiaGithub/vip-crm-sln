var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var QuotationReportController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function QuotationReportController(_Listservice, _CustomerSapAutofill, _getAutoSalesrep1, _getAutoModel, $location, _cookieStore) {
                    this.$location = $location;
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
                    this.QuoteSearch = null;
                    this.QuotationReport = null;
                    this.CustomerID = null;
                    this.UserID = null;
                    this.RoleID = null;
                    this.QuotationDataHeaderID = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.QuoteSearch = Array();
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.QuotationDataHeaderID = $location.search().QuotationDataHeaderID;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.getAutoModel = _getAutoModel;
                    this.Cookie = _cookieStore;
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                QuotationReportController.prototype.$onInit = function () {
                    this.Init();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                QuotationReportController.prototype.Init = function () {
                    var that = this;
                    $("#txtCustomerName").autocomplete({
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
                            that.QuoteSearch.CustomerID = ui.item.id;
                            console.log(that.QuoteSearch.CustomerID);
                        },
                        change: function () {
                        }
                    });
                    $("#txtSalesRep").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value: item.Name,
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
                            that.QuoteSearch.CreatedBy = ui.item.id;
                            console.log(that.QuoteSearch.CreatedBy);
                        },
                        change: function () {
                        }
                    });
                    $("#txtModelNo").autocomplete({
                        source: function (request, res) {
                            that.getAutoModel.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoModel.GetAutoModel(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ModelNo,
                                        value: item.ModelNo,
                                        id: item.ModelID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.QuoteSearch.ModelID = ui.item.id;
                            console.log(that.QuoteSearch.ModelID);
                        },
                        change: function () {
                        }
                    });
                };
                QuotationReportController.prototype.SearchQuoteList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                QuotationReportController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    console.log("Drpdown value text : " + that.numRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.QuotationReport = this.Listservice.Find(this.QuoteSearch).then((function (response) {
                        _this.QuotationReport = _this.Listservice.GetQuotelist(response.data.Result);
                        $('#search-btn-loader').hide();
                        console.log(_this.QuotationReport);
                        //$('#txtID').val(this.Quotationlist.QuotationDataHeaderID);
                        if (_this.QuotationReport.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.QuotationReport.forEach(function (value, key) {
                                console.log("Key : " + key);
                                that.incre = parseInt(key) + that.numRecords;
                            });
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.maxPages.toFixed();
                            console.log(" Max Page : " + _this.maxPages);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.QuotationReport.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.QuotationReport.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                    }));
                };
                QuotationReportController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                QuotationReportController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    console.log("this page : " + this.page);
                    console.log("Max Page : " + this.maxPages);
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.QuotationReport.slice(begin, end);
                    // this.ProductList.slice(begin, end);
                    if (this.page + 2 >= parseInt(this.maxPages.toFixed())) {
                        console.log("Inside this page : " + this.page);
                        this.ShowNext = false;
                    }
                };
                ;
                QuotationReportController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.QuotationReport.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                QuotationReportController.prototype.Clear = function () {
                    this.QuoteSearch.CustomerID = "";
                    this.QuoteSearch.ModelID = "";
                    this.QuoteSearch.CreatedBy = "";
                    // this.QuotationSearch.UserID = "";
                    //this.numRecords = this.NoOfRds;
                    //this.FillGrid(this.numRecords);
                    $("#txtCustomerName").val("");
                    $("#txtSalesRep").val("");
                    $("#txtModelNo").val("");
                };
                QuotationReportController.$inject = ["QuotationReportlistService", "CustomerSapIdAutoFillService", "EmployeeAtofillService", "ModelAutoFillService", "$location", "$cookieStore"];
                return QuotationReportController;
            }());
            var QuotationReportComponentController = /** @class */ (function () {
                function QuotationReportComponentController() {
                    this.controller = QuotationReportController;
                    this.templateUrl = "/Scripts/App/QuotationReport/Template/_QuotationReport.html";
                }
                QuotationReportComponentController.Name = "quotationreportcomponent";
                return QuotationReportComponentController;
            }());
            app.AddComponent(QuotationReportComponentController.Name, new QuotationReportComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=QuotationReportComponent.js.map