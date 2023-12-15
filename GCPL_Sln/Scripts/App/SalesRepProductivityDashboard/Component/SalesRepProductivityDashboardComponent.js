var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var SalesRepProductivityDashboardController = /** @class */ (function () {
                function SalesRepProductivityDashboardController(_SalesRepProductivityService, _ZoneDDService, _ZoneWiseEMPUserService, _YearService, _ProductService, _ModelService, _Service, _DivisionService, _cookieStore) {
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
                    this.Cookie = null;
                    this.UserDropDown = null;
                    this.ZoneDD = null;
                    this.SalesRepProdSearch = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.YearDropdown = null;
                    this.DivisionDropDown = null;
                    this.LeadTypeDropDown = null;
                    this.RoleID = null;
                    this.UserID = null;
                    this.SalesRepProductivityList = null;
                    this.SalesRepProductivityService = _SalesRepProductivityService;
                    this.ZoneDDService = _ZoneDDService;
                    this.ZoneWiseEMPUserService = _ZoneWiseEMPUserService;
                    this.YearService = _YearService;
                    this.SalesRepProdSearch = new GCPL.Model.SalesRepProductHeadermodel();
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.LeadTypeService = _Service;
                    this.DivisionService = _DivisionService;
                    //this.EmpCodeDDService = _EmpCodeDDService;
                    this.Cookie = _cookieStore;
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                SalesRepProductivityDashboardController.prototype.$onInit = function () {
                    var that = this;
                    this.Init();
                    var splTab = document.getElementsByClassName("spl-tab");
                    $('#search-btn-loader').hide();
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                };
                //Page Load Define Values//
                SalesRepProductivityDashboardController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    debugger;
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.YearDropdown = this.YearService.Find().then((function (response) {
                        _this.YearDropdown = _this.YearService.GetYearDD(response.data.Result);
                    }));
                };
                SalesRepProductivityDashboardController.prototype.ZoneWiseUser = function () {
                    var _this = this;
                    debugger;
                    this.UserDropDown = this.ZoneWiseEMPUserService.Find(this.SalesRepProdSearch.ZoneID).then((function (response) {
                        _this.UserDropDown = _this.ZoneWiseEMPUserService.GetUserName(response.data.Result);
                    }));
                };
                SalesRepProductivityDashboardController.prototype.SearchSalesRepProductivityList = function () {
                    debugger;
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#search-btn-loader').show();
                };
                SalesRepProductivityDashboardController.prototype.Product = function () {
                    var _this = this;
                    debugger;
                    this.ProductDropDown = this.ProductService.Find(this.SalesRepProdSearch.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                SalesRepProductivityDashboardController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                SalesRepProductivityDashboardController.prototype.Model = function () {
                    var _this = this;
                    debugger;
                    this.SalesRepProdSearch.ID = this.LeadTypeDropDown[0].ID;
                    debugger;
                    this.ModelDropDown = this.ModelService.Find(this.SalesRepProdSearch).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                SalesRepProductivityDashboardController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.SalesRepProductivityList = this.SalesRepProductivityService.Find(this.SalesRepProdSearch).then((function (response) {
                        _this.SalesRepProductivityList = _this.SalesRepProductivityService.GetSalesRepProductivityList(response.data.Result);
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.SalesRepProductivityList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.SalesRepProductivityList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.SalesRepProductivityList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.SalesRepProductivityList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.SalesRepProductivityList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.SalesRepProductivityList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.SalesRepProductivityList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.SalesRepProductivityList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                SalesRepProductivityDashboardController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SalesRepProductivityList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                SalesRepProductivityDashboardController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SalesRepProductivityList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                SalesRepProductivityDashboardController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                SalesRepProductivityDashboardController.prototype.Clear = function () {
                    this.SalesRepProdSearch.ZoneID = "";
                    this.SalesRepProdSearch.Year = "";
                    this.SalesRepProdSearch.DivisionID = "";
                    this.SalesRepProdSearch.ProductID = "";
                    this.SalesRepProdSearch.UserID = "";
                    this.SalesRepProdSearch.ModelID = "";
                    this.SalesRepProdSearch.LeadTypeID = "";
                };
                SalesRepProductivityDashboardController.$inject = ["SalesRepProductivityListService", "ZoneDDService", "ZoneWiseEMPUserService", "YearddService", "ProductddService", "LeadTypeProductService", "LeadTypeddService", "DivisionService", "$cookieStore"];
                return SalesRepProductivityDashboardController;
            }());
            var SalesRepProductivityDashboardComponentController = /** @class */ (function () {
                function SalesRepProductivityDashboardComponentController() {
                    this.controller = SalesRepProductivityDashboardController;
                    this.templateUrl = "/Scripts/App/SalesRepProductivityDashboard/Template/SalesRepProductivityDashboard.html";
                }
                SalesRepProductivityDashboardComponentController.Name = "salesrepproductivitydashboardcomponent";
                return SalesRepProductivityDashboardComponentController;
            }());
            app.AddComponent(SalesRepProductivityDashboardComponentController.Name, new SalesRepProductivityDashboardComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesRepProductivityDashboardComponent.js.map