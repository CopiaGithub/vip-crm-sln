var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ContactMaster = GCPL.Model.InsertContactMaster;
            var QuotationListController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function QuotationListController(_Listservice, _CustomerSapAutofill, $location, _cookieStore) {
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
                    this.QuotationSearch = null;
                    this.Quotationlist = null;
                    this.CustomerID = null;
                    this.InsertContact = null;
                    this.UserID = null;
                    this.QuotationDataHeaderID = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.QuotationSearch = Array();
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.InsertContact = new ContactMaster();
                    this.QuotationDataHeaderID = $location.search().QuotationDataHeaderID;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                QuotationListController.prototype.$onInit = function () {
                    this.Init();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                QuotationListController.prototype.Init = function () {
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
                            that.QuotationSearch.CustomerID = ui.item.id;
                            that.Search1(ui.item.id);
                            console.log(that.QuotationSearch.CustomerID);
                        },
                        change: function () {
                        }
                    });
                };
                QuotationListController.prototype.SearchQuotationList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                QuotationListController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    console.log("Drpdown value text : " + that.numRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.Quotationlist = this.Listservice.Find(this.QuotationSearch).then((function (response) {
                        _this.Quotationlist = _this.Listservice.GetQuotationlist(response.data.Result);
                        $('#search-btn-loader').hide();
                        console.log(_this.Quotationlist);
                        //$('#txtID').val(this.Quotationlist.QuotationDataHeaderID);
                        if (_this.Quotationlist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.Quotationlist.forEach(function (value, key) {
                                console.log("Key : " + key);
                                that.incre = parseInt(key) + that.numRecords;
                            });
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.maxPages.toFixed();
                            console.log(" Max Page : " + _this.maxPages);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.Quotationlist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.Quotationlist.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                        //if (this.QuotationDataHeaderID > 0) {
                        //    $("#HideCreate").hide();
                        //}
                        //else {
                        //    $("#HideCreate").show();
                        //}
                    }));
                };
                QuotationListController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                QuotationListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    console.log("this page : " + this.page);
                    console.log("Max Page : " + this.maxPages);
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Quotationlist.slice(begin, end);
                    // this.ProductList.slice(begin, end);
                    if (this.page + 2 >= parseInt(this.maxPages.toFixed())) {
                        console.log("Inside this page : " + this.page);
                        this.ShowNext = false;
                    }
                };
                ;
                //sendMail() {
                //    window.open("mailto:?subject=GCPL%20Quotation");
                //}
                QuotationListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Quotationlist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                QuotationListController.prototype.Clear = function () {
                    this.QuotationSearch.CustomerID = "";
                    this.QuotationSearch.OppNumber = "";
                    this.QuotationSearch.QuotationNo = "";
                    // this.QuotationSearch.UserID = "";
                    //this.numRecords = this.NoOfRds;
                    //this.FillGrid(this.numRecords);
                    $("#txtCustomerName").val("");
                    $("#txtOppNumber").val("");
                    $("#txtQuotationNo").val("");
                };
                QuotationListController.prototype.Search1 = function (data) {
                    var _this = this;
                    this.CustomerSapAutofill.FindCustomerSAPID(data).then((function (response) {
                        _this.InsertContact.CustomerSAPID = _this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
                    }));
                };
                QuotationListController.prototype.PDF = function (data) {
                    var _this = this;
                    this.Listservice.PDFView(data).then((function (response) {
                        _this.Quotationlist = _this.Listservice.GetPDF(response.data.Result);
                    }));
                };
                QuotationListController.$inject = ["QuotationlistService", "CustomerSapIdAutoFillService", "$location", "$cookieStore"];
                return QuotationListController;
            }());
            var QuotationListComponentController = /** @class */ (function () {
                function QuotationListComponentController() {
                    this.controller = QuotationListController;
                    this.templateUrl = "/Scripts/App/QuotationList/Template/QuotationList.html";
                }
                QuotationListComponentController.Name = "quotationlistcomponent";
                return QuotationListComponentController;
            }());
            app.AddComponent(QuotationListComponentController.Name, new QuotationListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=QuotationListComponent.js.map