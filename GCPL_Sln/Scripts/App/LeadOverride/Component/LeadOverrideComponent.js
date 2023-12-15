var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadOverrideController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadOverrideController(_LeadOverrideListService, _cookieStore) {
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
                    this.LeadOverridelist = null;
                    this.LeadOverrideSearch = null;
                    this.Cookie = null;
                    this.LeadOverrideListService = _LeadOverrideListService;
                    this.LeadOverrideSearch = Array();
                    this.Cookie = _cookieStore;
                }
                LeadOverrideController.prototype.$onInit = function () {
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $('#search-btn-loader').hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                LeadOverrideController.prototype.Init = function () {
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                LeadOverrideController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.LeadOverridelist = this.LeadOverrideListService.Find(this.LeadOverrideSearch).then((function (response) {
                        _this.LeadOverridelist = _this.LeadOverrideListService.GetLeadOverrideData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.LeadOverridelist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.LeadOverridelist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadOverridelist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadOverridelist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        // $('#search-btn-loader').hide();
                        if (_this.LeadOverridelist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.LeadOverridelist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadOverridelist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadOverridelist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                LeadOverrideController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                LeadOverrideController.prototype.SearchLeadOverrideList = function () {
                    $('#search-btn-loader').show();
                    //  $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                LeadOverrideController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadOverridelist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadOverrideController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadOverridelist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadOverrideController.prototype.Clear = function () {
                    this.LeadOverrideSearch.LeadID = "";
                    this.LeadOverrideSearch.CustomerName = "";
                    this.LeadOverrideSearch.User = "";
                    $("#txtleadId").val("");
                    $("#txtCustName").val("");
                    $("#txtuser").val("");
                };
                LeadOverrideController.prototype.Close = function () {
                    location.href = "#!/LeadOverride";
                };
                LeadOverrideController.prototype.ErrorClose = function () {
                    location.href = "#!/LeadOverride";
                };
                LeadOverrideController.$inject = ["LeadOverrideListService", "$cookieStore"];
                return LeadOverrideController;
            }());
            var LeadOverrideComponentController = /** @class */ (function () {
                function LeadOverrideComponentController() {
                    this.controller = LeadOverrideController;
                    this.templateUrl = "/Scripts/App/LeadOverride/Template/LeadOverride.html";
                }
                LeadOverrideComponentController.Name = "leadoverridecomponent";
                return LeadOverrideComponentController;
            }());
            app.AddComponent(LeadOverrideComponentController.Name, new LeadOverrideComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadOverrideComponent.js.map