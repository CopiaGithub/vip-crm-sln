var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var WinLossHeatController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function WinLossHeatController(_ProductService, _ModelService, _DivisionService, _StateService, _DistrictService, _UserDDService, DistributionChannelDDService, _SalesOfficeService, _LSService, _ZoneDDService, _WinLossService, _OppTypeService, _SalesOfficewService, _SalesRepwService) {
                    this.DivisionDropDown = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.UserDropDown = null;
                    this.WinLossHeatHeaderModel = null;
                    this.DistributionChannelDD = null;
                    this.SalesOfficeDropDown = null;
                    this.LeadSourceDropDown = null;
                    this.ZoneDD = null;
                    this.FillWinLossGrid = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.OppTypeDropDown = null;
                    this.SalesOfficewDropDown = null;
                    this.SalesRepwDropDown = null;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.DivisionService = _DivisionService;
                    this.StateService = _StateService;
                    this.DistrictService = _DistrictService;
                    this.UserDDService = _UserDDService;
                    this.DistributionChannelDDService = DistributionChannelDDService;
                    this.SalesOfficeService = _SalesOfficeService;
                    this.LSService = _LSService;
                    this.ZoneDDService = _ZoneDDService;
                    this.WinLossService = _WinLossService;
                    this.WinLossHeatHeaderModel = new GCPL.Model.WinLossHeatHeaderModel();
                    this.OppTypeService = _OppTypeService;
                    this.SalesOfficewService = _SalesOfficewService;
                    this.SalesRepwService = _SalesRepwService;
                }
                WinLossHeatController.prototype.$onInit = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
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
                WinLossHeatController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                WinLossHeatController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                WinLossHeatController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    debugger;
                    var n = new Date();
                    n.setDate(n.getDate() - 7);
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m = months[n.getMonth()];
                    var d = n.getDate();
                    var y = n.getFullYear();
                    document.getElementById("txtFromDate").innerHTML = d + "-" + m + "-" + y;
                    $('#txtFromDate').val(d + "-" + m + "-" + y);
                    document.getElementById("txtFromDate").value;
                    $("#txtFromDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    var n1 = new Date();
                    var y1 = n1.getFullYear();
                    var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m1 = months1[n1.getMonth()];
                    var d1 = n1.getDate();
                    document.getElementById("txtToDate").innerHTML = d1 + "-" + m1 + "-" + y1;
                    $('#txtToDate').val(d1 + "-" + m1 + "-" + y1);
                    document.getElementById("txtToDate").value;
                    $("#txtToDate").datepicker({
                        dateFormat: 'dd M yy',
                        changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectToDate
                    });
                    var that = this;
                    this.StateDropDown = this.StateService.Find().then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                    this.UserDropDown = this.UserDDService.Find().then((function (response) {
                        _this.UserDropDown = _this.UserDDService.GetUserDD(response.data.Result);
                    }));
                    this.DistributionChannelDD = this.DistributionChannelDDService.Find().then((function (response) {
                        _this.DistributionChannelDD = _this.DistributionChannelDDService.GetDistributionChannelDDnew(response.data.Result);
                    }));
                    this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.SalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.OppTypeDropDown = this.OppTypeService.Find().then((function (response) {
                        _this.OppTypeDropDown = _this.OppTypeService.GetOppTypeName(response.data.Result);
                    }));
                };
                WinLossHeatController.prototype.Product = function () {
                    var _this = this;
                    debugger;
                    this.ProductDropDown = this.ProductService.Find(this.WinLossHeatHeaderModel.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                WinLossHeatController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                WinLossHeatController.prototype.Model = function () {
                    var _this = this;
                    this.WinLossHeatHeaderModel.ID = this.OppTypeDropDown[0].ID;
                    this.ModelDropDown = this.ModelService.Find(this.WinLossHeatHeaderModel).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                WinLossHeatController.prototype.District = function () {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.WinLossHeatHeaderModel.StateID).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                WinLossHeatController.prototype.LeadSource = function () {
                    var _this = this;
                    this.LeadSourceDropDown = this.LSService.Find(this.WinLossHeatHeaderModel.Channel).then((function (response) {
                        _this.LeadSourceDropDown = _this.LSService.GetLeadSourceDD(response.data.Result);
                    }));
                };
                WinLossHeatController.prototype.SalesOffice = function () {
                    var _this = this;
                    this.SalesOfficewDropDown = this.SalesOfficewService.Find(this.WinLossHeatHeaderModel.Zone).then((function (response) {
                        _this.SalesOfficewDropDown = _this.SalesOfficewService.GetSalesOfficewp(response.data.Result);
                    }));
                };
                WinLossHeatController.prototype.SalesRep = function () {
                    var _this = this;
                    debugger;
                    this.SalesRepwDropDown = this.SalesRepwService.Find(this.WinLossHeatHeaderModel.SalesOffice).then((function (response) {
                        _this.SalesRepwDropDown = _this.SalesRepwService.GetUserNamewp(response.data.Result);
                    }));
                };
                WinLossHeatController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                WinLossHeatController.prototype.Search = function () {
                    debugger;
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                WinLossHeatController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.WinLossHeatHeaderModel.FromDate = document.getElementById("txtFromDate").value;
                    this.WinLossHeatHeaderModel.ToDate = document.getElementById("txtToDate").value;
                    this.FillWinLossGrid = this.WinLossService.FindGrid(this.WinLossHeatHeaderModel).then((function (response) {
                        _this.FillWinLossGrid = _this.WinLossService.GetWinLossGrid(response.data.Result);
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.FillWinLossGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillWinLossGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.FillWinLossGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillWinLossGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.FillWinLossGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillWinLossGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.FillWinLossGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillWinLossGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                WinLossHeatController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillWinLossGrid.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                WinLossHeatController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillWinLossGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                WinLossHeatController.prototype.Clear = function () {
                    this.WinLossHeatHeaderModel.LeadSource = "";
                    this.WinLossHeatHeaderModel.DivisionID = "";
                    this.WinLossHeatHeaderModel.ProductID = "";
                    this.WinLossHeatHeaderModel.ModelID = "";
                    this.WinLossHeatHeaderModel.LeadTypeID = "";
                    this.WinLossHeatHeaderModel.State = "";
                    this.WinLossHeatHeaderModel.District = "";
                    this.WinLossHeatHeaderModel.Zone = "";
                    this.WinLossHeatHeaderModel.Channel = "";
                    this.WinLossHeatHeaderModel.SalesOffice = "";
                    this.WinLossHeatHeaderModel.Salesrep = "";
                };
                WinLossHeatController.$inject = ["ProductddService", "LeadTypeProductService", "DivisionService", "StateddPService", "DistrictddService", "UserddService", "DistributionChannelDDService", "SalesOfficeService", "LeadSourceddWPService", "ZoneDDService", "WinLossReportGridService", "OpportunityTypeddService",
                    "SalesOfficeDDwpService", "UserNameDDwpService"];
                return WinLossHeatController;
            }());
            var WinLossHeatComponentController = /** @class */ (function () {
                function WinLossHeatComponentController() {
                    this.controller = WinLossHeatController;
                    this.templateUrl = "/Scripts/App/WinLossHeatReport/Template/WinLossHeatReport.html";
                }
                WinLossHeatComponentController.Name = "winlossheatcomponent";
                return WinLossHeatComponentController;
            }());
            app.AddComponent(WinLossHeatComponentController.Name, new WinLossHeatComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=WinLossHeatComponent.js.map