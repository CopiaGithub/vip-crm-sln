var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadChangeListController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadChangeListController(_LeadChangeListService, _cookieStore) {
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
                    this.LeadChangelist = null;
                    this.LeadChangeSearch = null;
                    this.Cookie = null;
                    this.LeadChangeListService = _LeadChangeListService;
                    this.LeadChangeSearch = Array();
                    this.Cookie = _cookieStore;
                }
                LeadChangeListController.prototype.$onInit = function () {
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $('#search-btn-loader').hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                LeadChangeListController.prototype.Init = function () {
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                LeadChangeListController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.LeadChangelist = this.LeadChangeListService.Find(this.LeadChangeSearch).then((function (response) {
                        _this.LeadChangelist = _this.LeadChangeListService.GetLeadChangeData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.LeadChangelist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.LeadChangelist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadChangelist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadChangelist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        // $('#search-btn-loader').hide();
                        if (_this.LeadChangelist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.LeadChangelist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadChangelist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadChangelist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                LeadChangeListController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                LeadChangeListController.prototype.SearchLeadChangeList = function () {
                    $('#search-btn-loader').show();
                    //  $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                LeadChangeListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadChangelist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadChangeListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadChangelist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadChangeListController.prototype.Clear = function () {
                    this.LeadChangeSearch.LeadID = "";
                    this.LeadChangeSearch.CustomerName = "";
                    this.LeadChangeSearch.User = "";
                    $("#txtleadId").val("");
                    $("#txtCustName").val("");
                    $("#txtuser").val("");
                };
                LeadChangeListController.prototype.Close = function () {
                    location.href = "#!/LeadChangeList";
                };
                LeadChangeListController.prototype.ErrorClose = function () {
                    location.href = "#!/LeadChangeList";
                };
                LeadChangeListController.$inject = ["LeadChangeListService", "$cookieStore"];
                return LeadChangeListController;
            }());
            var LeadChangeListComponentController = /** @class */ (function () {
                function LeadChangeListComponentController() {
                    this.controller = LeadChangeListController;
                    this.templateUrl = "/Scripts/App/LeadChangeList/Template/LeadChangeList.html";
                }
                LeadChangeListComponentController.Name = "leadchangelist";
                return LeadChangeListComponentController;
            }());
            app.AddComponent(LeadChangeListComponentController.Name, new LeadChangeListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadChangeListComponent.js.map