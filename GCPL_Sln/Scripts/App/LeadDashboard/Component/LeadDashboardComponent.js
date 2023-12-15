var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Search = GCPL.Model.LeadDashSearchModel;
            var Channel = GCPL.Model.ChannelPie1Model;
            var Source = GCPL.Model.ChannelPie1Model;
            var Division = GCPL.Model.DivisionPieModel;
            var Region = GCPL.Model.RegionPieModel;
            var Zone = GCPL.Model.ZonePieModel;
            var Product = GCPL.Model.ProductPieModel;
            var State = GCPL.Model.StatePieModel;
            var SalesOffice = GCPL.Model.StatePieModel;
            var SalesRep = GCPL.Model.StatePieModel;
            var SearchData = GCPL.Model.LeadDashSearchDataModel;
            var LeadDashboardController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadDashboardController(_DivisionService, _ProductService, _ModelService, _LeadTypeService, _RegionService, _StateRegionService, _DistrictService, _ChannelDDService, _LeadSourceDDService, _ZoneDDService, _SalesOfficewService, _SalesRepService, _LeadStatusService, _LeadSnapshotService, _LeadDashService, _ChannelPieservice, _SourcePieservice, _DivisionPieservice, _RegionPieservice, _ZonePieservice, _ProductPieservice, _StatePieservice, _SalesOfficePieservice, _SalesRepPieservice, _cookieStore) {
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
                    this.counted = null;
                    this.DivisionDropDown = null;
                    this.ProductDropDown = null;
                    this.LeadSearch = null;
                    this.LeadSearchData = null;
                    this.ModelDropDown = null;
                    this.LeadTypeDropDown = null;
                    this.RegionDropDown = null;
                    this.StateRegion = null;
                    this.DistrictDropDown = null;
                    this.ChannelDD = null;
                    this.LeadSourcedd = null;
                    this.ZoneDD = null;
                    this.SalesOfficewDropDown = null;
                    this.SalesRepDropDown = null;
                    this.LeadStatusDropDown = null;
                    this.LeadSnap = null;
                    this.LeadDashList = null;
                    this.ChannelPie = null;
                    this.SourcePie = null;
                    this.DivisionPie = null;
                    this.RegionPie = null;
                    this.ZonePie = null;
                    this.ProductPie = null;
                    this.StatePie = null;
                    this.SalesOffPie = null;
                    this.SalesRepPie = null;
                    this.Cookie = null;
                    this.chan = null;
                    this.char = null;
                    this.Div = null;
                    this.Reg = null;
                    this.Zone = null;
                    this.Prod = null;
                    this.Stat = null;
                    this.Salesoff = null;
                    this.Salesrep = null;
                    this.DivisionService = _DivisionService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.LeadTypeService = _LeadTypeService;
                    this.RegionService = _RegionService;
                    this.StateRegionService = _StateRegionService;
                    this.DistrictService = _DistrictService;
                    this.ChannelDDService = _ChannelDDService;
                    this.LeadSourceDDService = _LeadSourceDDService;
                    this.ZoneDDService = _ZoneDDService;
                    this.SalesOfficewService = _SalesOfficewService;
                    this.SalesRepService = _SalesRepService;
                    this.LeadStatusService = _LeadStatusService;
                    this.LeadSnapshotService = _LeadSnapshotService;
                    this.LeadDashService = _LeadDashService;
                    this.LeadSearch = new Search();
                    this.LeadSearchData = new SearchData();
                    this.ChannelPieservice = _ChannelPieservice;
                    this.ChannelPie = new Channel();
                    this.SourcePieservice = _SourcePieservice;
                    this.SourcePie = new Source();
                    this.DivisionPieservice = _DivisionPieservice;
                    this.DivisionPie = new Division();
                    this.RegionPieservice = _RegionPieservice;
                    this.RegionPie = new Region();
                    this.ZonePieservice = _ZonePieservice;
                    this.ZonePie = new Zone();
                    this.ProductPieservice = _ProductPieservice;
                    this.ProductPie = new Product();
                    this.StatePieservice = _StatePieservice;
                    this.StatePie = new State();
                    this.SalesOfficePieservice = _SalesOfficePieservice;
                    this.SalesOffPie = new SalesOffice();
                    this.SalesRepPieservice = _SalesRepPieservice;
                    this.SalesRepPie = new SalesRep();
                    this.Cookie = _cookieStore;
                }
                LeadDashboardController.prototype.$onInit = function () {
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
                    /* Table col show hide code started */
                    //var count = document.getElementsByClassName("count-col");
                    //var percentage = document.getElementsByClassName("percent-col");
                    //var region = document.getElementById("region");
                    //var regionCol = document.getElementsByClassName("region-col");
                    //var zone = document.getElementById("zone");
                    //var zoneCol = document.getElementsByClassName("zone-col");
                    //var status = document.getElementById("status-chk");
                    //var statusCol = document.getElementsByClassName("status-col");
                    //var division = document.getElementById("division");
                    //var divisionCol = document.getElementsByClassName("division-col");
                    //var product = document.getElementById("product");
                    //var productCol = document.getElementsByClassName("product-col");
                    //var model = document.getElementById("model");
                    //var modelCol = document.getElementsByClassName("model-col");
                    //var channel = document.getElementById("channel");
                    //var channelCol = document.getElementsByClassName("channel-col");
                    //var leadSource = document.getElementById("lead-source");
                    //var leadSourceCol = document.getElementsByClassName("lead-source-col");
                    //var leadType = document.getElementById("lead-type");
                    //var leadTypeCol = document.getElementsByClassName("lead-type-col");
                    //var salesOffice = document.getElementById("sales-office");
                    //var salesOfficeCol = document.getElementsByClassName("sales-office-col");
                    //var salesRep = document.getElementById("sales-rep");
                    //var salesRepCol = document.getElementsByClassName("username-col");
                    //region.addEventListener("click", function () {
                    //    region.classList.toggle('chk-test');
                    //    for (var i = 0; i < regionCol.length; i++) {
                    //        regionCol[i].classList.toggle('show-col');
                    //    }
                    //    for (var j = 0; j < count.length; j++) {
                    //        if (!count[j].classList.contains('show-col')) {
                    //            count[j].classList.toggle('show-col');
                    //        }
                    //    }
                    //    for (var k = 0; k < percentage.length; k++) {
                    //        if (!percentage[k].classList.contains('show-col')) {
                    //            percentage[k].classList.toggle('show-col');
                    //        }
                    //    }
                    //})
                    //zone.addEventListener("click", function () {
                    //    zone.classList.toggle('chk-test');
                    //    for (var i = 0; i < zoneCol.length; i++) {
                    //        zoneCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //division.addEventListener("click", function () {
                    //    division.classList.toggle('chk-test');
                    //    for (var i = 0; i < divisionCol.length; i++) {
                    //        divisionCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //status.addEventListener("click", function () {
                    //    status.classList.toggle('chk-test');
                    //    for (var i = 0; i < statusCol.length; i++) {
                    //        statusCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //product.addEventListener("click", function () {
                    //    product.classList.toggle('chk-test');
                    //    for (var i = 0; i < productCol.length; i++) {
                    //        productCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //model.addEventListener("click", function () {
                    //    model.classList.toggle('chk-test');
                    //    for (var i = 0; i < modelCol.length; i++) {
                    //        modelCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //channel.addEventListener("click", function () {
                    //    channel.classList.toggle('chk-test');
                    //    for (var i = 0; i < channelCol.length; i++) {
                    //        channelCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //leadSource.addEventListener("click", function () {
                    //    leadSource.classList.toggle('chk-test');
                    //    for (var i = 0; i < leadSourceCol.length; i++) {
                    //        leadSourceCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //leadType.addEventListener("click", function () {
                    //    leadType.classList.toggle('chk-test');
                    //    for (var i = 0; i < leadTypeCol.length; i++) {
                    //        leadTypeCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //salesOffice.addEventListener("click", function () {
                    //    salesOffice.classList.toggle('chk-test');
                    //    for (var i = 0; i < salesOfficeCol.length; i++) {
                    //        salesOfficeCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                    //salesRep.addEventListener("click", function () {
                    //    salesRep.classList.toggle('chk-test');
                    //    for (var i = 0; i < salesRepCol.length; i++) {
                    //        salesRepCol[i].classList.toggle('show-col');
                    //        for (var j = 0; j < count.length; j++) {
                    //            if (!count[j].classList.contains('show-col')) {
                    //                count[j].classList.toggle('show-col');
                    //            }
                    //        }
                    //        for (var k = 0; k < percentage.length; k++) {
                    //            if (!percentage[k].classList.contains('show-col')) {
                    //                percentage[k].classList.toggle('show-col');
                    //            }
                    //        }
                    //    }
                    //})
                };
                LeadDashboardController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                LeadDashboardController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                LeadDashboardController.prototype.Init = function () {
                    //$(function () {
                    //    $(".chkzone").click(function () {
                    //        if ($(this).is(":checked")) {
                    //            $(".dvzone").show();
                    var _this = this;
                    //        } else {
                    //            $(".dvzone").hide();
                    //        }
                    //    });
                    //});
                    $(function () {
                        $(".chkLead").click(function () {
                            if ($(this).is(":checked")) {
                                $(".dvLead").show();
                            }
                            else {
                                $(".dvLead").hide();
                            }
                        });
                    });
                    $(function () {
                        $(".chkproduct").click(function () {
                            if ($(this).is(":checked")) {
                                $(".dvproduct").show();
                            }
                            else {
                                $(".dvproduct").hide();
                            }
                        });
                    });
                    $(function () {
                        $(".chkState").click(function () {
                            if ($(this).is(":checked")) {
                                $(".dvState").show();
                            }
                            else {
                                $(".dvState").hide();
                            }
                        });
                    });
                    $(function () {
                        $(".chkSales").click(function () {
                            if ($(this).is(":checked")) {
                                $(".dvSales").show();
                            }
                            else {
                                $(".dvSales").hide();
                            }
                        });
                    });
                    $(function () {
                        $(".chkSaleoff").click(function () {
                            if ($(this).is(":checked")) {
                                $(".dvSaleoff").show();
                            }
                            else {
                                $(".dvSaleoff").hide();
                            }
                        });
                    });
                    //$(function () {
                    //    $(".chkPassport").click(function () {
                    //        if ($(this).is(":checked")) {
                    //            $(".dvPassport").show();
                    //            //$("#AddPassport").hide();
                    //        } else {
                    //            $(".dvPassport").hide();
                    //            //$("#AddPassport").show();
                    //        }
                    //    });
                    //});
                    this.counted = 0;
                    $("#errorclose").hide();
                    $("#close").hide();
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
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    //this.DivisionDropDown = this.DivisionService.Find().then((response => {
                    //    this.DivisionDropDown = this.DivisionService.GetDivision(response.data.Result);
                    //}));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.RegionDropDown = this.RegionService.Find().then((function (response) {
                        _this.RegionDropDown = _this.RegionService.GetRegion(response.data.Result);
                    }));
                    this.ChannelDD = this.ChannelDDService.Find().then((function (response) {
                        _this.ChannelDD = _this.ChannelDDService.GetChannelDDnew(response.data.Result);
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.SalesRepDropDown = this.SalesRepService.Find().then((function (response) {
                        _this.SalesRepDropDown = _this.SalesRepService.GetSalesRep(response.data.Result);
                    }));
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusName(response.data.Result);
                    }));
                    this.LeadSnap = this.LeadSnapshotService.Find().then((function (response) {
                        _this.LeadSnap = _this.LeadSnapshotService.GetSnapshot(response.data.Result);
                        $('#txtAllocated').val(_this.LeadSnap.Allocated);
                        $('#txtCreated').val(_this.LeadSnap.Created);
                        $('#txtOpportunity').val(_this.LeadSnap.Converted);
                    }));
                    this.ChannelPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.ChannelPie = _this.ChannelPieservice.GetChannelPie(response.data.Result);
                        //$('#txtSalesValue').val(this.ChannelPie[0].Sales);
                        //$('#txtMarValue').val(this.ChannelPie[0].Marketing);
                        _this.ChannelChart();
                    }));
                    this.SourcePieservice.Find(this.LeadSearch).then((function (response) {
                        _this.SourcePie = _this.SourcePieservice.GetSourcePie(response.data.Result);
                        //$('#txtAdverValue').val(this.SourcePie[0].Advertisement);
                        //$('#txtInhouseValue').val(this.SourcePie[0].Inhouse);
                        //$('#txtColdValue').val(this.SourcePie[0].ColdCall);
                        //$('#txtDealerValue').val(this.SourcePie[0].DealerSales);
                        //$('#txtFinanValue').val(this.SourcePie[0].FinancerReferral);
                        //$('#txtCustEqValue').val(this.SourcePie[0].CustomerEnquiry);
                        //$('#txtSpottersValue').val(this.SourcePie[0].Spotters);
                        //$('#txtCustRefValue').val(this.SourcePie[0].CustomerReferral);
                        //$('#txtFieldValue').val(this.SourcePie[0].FieldService);
                        //$('#txtMarketValue').val(this.SourcePie[0].MarketingCamp);
                        //$('#txtCustomerTendValue').val(this.SourcePie[0].CustomerTenders);
                        //$('#txtTeleValue').val(this.SourcePie[0].TeleMarketing);
                        //$('#txtDemoValue').val(this.SourcePie[0].Demo);
                        //$('#txtRoadValue').val(this.SourcePie[0].RoadShow);
                        //$('#txtWalkValue').val(this.SourcePie[0].WalkIn);
                        //$('#txtCATValue').val(this.SourcePie[0].CATWebsite);
                        //$('#txtProductValue').val(this.SourcePie[0].ProductSupport);
                        //$('#txtOtherValue').val(this.SourcePie[0].OtherMisc);
                        //$('#txtTIPLValue').val(this.SourcePie[0].TIPLWebsite);
                        //$('#txtTradeValue').val(this.SourcePie[0].CATTradeshow);
                        //$('#txtEventValue').val(this.SourcePie[0].Events);
                        //$('#txtAgencyValue').val(this.SourcePie[0].ThroughAgency);
                        //$('#txtLeadOnValue').val(this.SourcePie[0].CATLeadOnline);
                        //$('#txtDigitalValue').val(this.SourcePie[0].DigitalMarketing);
                        _this.SourceChart();
                        //$('.chart-value').each(function (index, value) {
                        //    if ($(this).val() == 0) {
                        //        $(this).parent().css("display", "none");
                        //    }
                        //});
                    }));
                    this.RegionPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.RegionPie = _this.RegionPieservice.GetRegionPie(response.data.Result);
                        //$('#txtEast').val(this.RegionPie[0].East);
                        //$('#txtSouthEast').val(this.RegionPie[0].SouthEast);
                        //$('#txtNorth').val(this.RegionPie[0].North);
                        //$('#txtNorthCentral').val(this.RegionPie[0].NorthCentral);
                        //$('#txtWest').val(this.RegionPie[0].West);
                        _this.RegionChart();
                        //$('.chart-value').each(function (index, value) {
                        //    if ($(this).val() == 0) {
                        //        $(this).parent().css("display", "none");
                        //    }
                        //    if ($(this).val() != 0) {
                        //        $(this).parent().css("display", "block");
                        //    }
                        //});
                    }));
                    this.DivisionPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.DivisionPie = _this.DivisionPieservice.GetDivisionPie(response.data.Result);
                        //$('#txtBCP').val(this.DivisionPie[0].BCP);
                        //$('#txtGCI').val(this.DivisionPie[0].GCI);
                        //$('#txtETCAT').val(this.DivisionPie[0].ETCAT);
                        //$('#txtMINING').val(this.DivisionPie[0].MINING);
                        //$('#txtETFGW').val(this.DivisionPie[0].ETFGW);
                        //$('#txtMARINI').val(this.DivisionPie[0].MARINI);
                        _this.DivisionChart();
                        //$('.chart-value').each(function (index, value) {
                        //    if ($(this).val() == 0) {
                        //        $(this).parent().css("display", "none");
                        //    }
                        //    if ($(this).val() != 0) {
                        //        $(this).parent().css("display", "block");
                        //    }
                        //});
                    }));
                    this.ZonePieservice.Find(this.LeadSearch).then((function (response) {
                        _this.ZonePie = _this.ZonePieservice.GetZonePie(response.data.Result);
                        //$('#txtZone1').val(this.ZonePie[0].Zone1);
                        //$('#txtZone2').val(this.ZonePie[0].Zone2);
                        //$('#txtZone3').val(this.ZonePie[0].Zone3);
                        //$('#Zone4').val(this.ZonePie[0].Zone4);
                        //$('#Zone5').val(this.ZonePie[0].Zone5);
                        //$('#Zone6').val(this.ZonePie[0].Zone6);
                        //$('#Zone7').val(this.ZonePie[0].Zone7);
                        //$('#Zone8').val(this.ZonePie[0].Zone8);
                        //$('#Zone9').val(this.ZonePie[0].Zone9);
                        //$('#Zone10').val(this.ZonePie[0].Zone10);
                        _this.ZoneChart();
                        //$('.chart-value').each(function (index, value) {
                        //    if ($(this).val() == 0) {
                        //        $(this).parent().css("display", "none");
                        //    }
                        //    if ($(this).val() != 0) {
                        //        $(this).parent().css("display", "block");
                        //    }
                        //});
                    }));
                    this.ProductPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.ProductPie = _this.ProductPieservice.GetProductPie(response.data.Result);
                        //$('#WheelLoader').val(this.ProductPie[0].WheelLoader);
                        //$('#BackHoe').val(this.ProductPie[0].BackHoe);
                        //$('#TrackType').val(this.ProductPie[0].TrackType);
                        //$('#Excavator').val(this.ProductPie[0].Excavator);
                        //$('#MotorGrader').val(this.ProductPie[0].MotorGrader);
                        //$('#OffHighway').val(this.ProductPie[0].OffHighway);
                        //$('#Wheel').val(this.ProductPie[0].Wheel);
                        //$('#DGSet').val(this.ProductPie[0].DGSet);
                        //$('#Paving').val(this.ProductPie[0].Paving);
                        //$('#SkidSteer').val(this.ProductPie[0].SkidSteer);
                        //$('#Track').val(this.ProductPie[0].Track);
                        //$('#Motor').val(this.ProductPie[0].Motor);
                        //$('#TrackTypeTractor').val(this.ProductPie[0].TrackTypeTractor);
                        //$('#Tandem').val(this.ProductPie[0].Tandem);
                        //$('#Hammer').val(this.ProductPie[0].Hammer);
                        //$('#Marini').val(this.ProductPie[0].Marini);
                        //$('#Soil').val(this.ProductPie[0].Soil);
                        _this.ProductChart();
                        //$('.chart-value').each(function (index, value) {
                        //    if ($(this).val() == 0) {
                        //        $(this).parent().css("display", "none");
                        //    }
                        //    if ($(this).val() != 0) {
                        //        $(this).parent().css("display", "block");
                        //    }
                        //});
                    }));
                    this.StatePieservice.Find(this.LeadSearch).then((function (response) {
                        _this.StatePie = _this.StatePieservice.GetStatePie(response.data.Result);
                        //$('#txtSalesValue').val(this.ChannelPie[0].Sales);
                        //$('#txtMarValue').val(this.ChannelPie[0].Marketing);
                        _this.StateChart();
                    }));
                    this.SalesOfficePieservice.Find(this.LeadSearch).then((function (response) {
                        _this.SalesOffPie = _this.SalesOfficePieservice.GetSalesOffPie(response.data.Result);
                        //$('#txtSalesValue').val(this.ChannelPie[0].Sales);
                        //$('#txtMarValue').val(this.ChannelPie[0].Marketing);
                        _this.SalesOfficeChart();
                    }));
                    this.SalesRepPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.SalesRepPie = _this.SalesRepPieservice.GetSalesRepPie(response.data.Result);
                        //$('#txtSalesValue').val(this.ChannelPie[0].Sales);
                        //$('#txtMarValue').val(this.ChannelPie[0].Marketing);
                        _this.SalesRepChart();
                    }));
                };
                //<input class="coupon_question" type = "checkbox" name = "coupon_question" value = "1" onchange = "valueChanged()" />
                LeadDashboardController.prototype.Product = function () {
                    var _this = this;
                    this.ProductDropDown = this.ProductService.Find(this.LeadSearch.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                LeadDashboardController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                LeadDashboardController.prototype.Model = function () {
                    var _this = this;
                    this.LeadSearch.ID = this.LeadTypeDropDown[0].ID;
                    this.ModelDropDown = this.ModelService.Find(this.LeadSearch).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                LeadDashboardController.prototype.State = function () {
                    var _this = this;
                    this.StateRegion = this.StateRegionService.Find(this.LeadSearch.Region).then((function (response) {
                        _this.StateRegion = _this.StateRegionService.GetStateName(response.data.Result);
                    }));
                };
                LeadDashboardController.prototype.District = function () {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.LeadSearch.State).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                LeadDashboardController.prototype.LeadSource = function () {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.LeadSearch.Channel).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                LeadDashboardController.prototype.SalesOffice = function () {
                    var _this = this;
                    this.SalesOfficewDropDown = this.SalesOfficewService.Find(this.LeadSearch.Zone).then((function (response) {
                        _this.SalesOfficewDropDown = _this.SalesOfficewService.GetSalesOfficewp(response.data.Result);
                    }));
                };
                LeadDashboardController.prototype.SearchData = function () {
                    var _this = this;
                    $('#dataTable').show();
                    if ($("#region").prop('checked') == false && $("#zone").prop('checked') == false &&
                        $("#status-chk").prop('checked') == false && $("#division").prop('checked') == false &&
                        $("#product").prop('checked') == false && $("#model").prop('checked') == false &&
                        $("#channel").prop('checked') == false && $("#lead-source").prop('checked') == false &&
                        $("#lead-type").prop('checked') == false && $("#sales-office").prop('checked') == false &&
                        $("#sales-rep").prop('checked') == false) {
                        window.alert('Please select at least one checkbox');
                        $('.count-col').hide();
                        $('.percent-col').hide();
                    }
                    else {
                        $('.count-col').show();
                        $('.percent-col').show();
                    }
                    if ($("#region").prop('checked') == true) {
                        $(".region-col").show();
                    }
                    else {
                        $(".region-col").hide();
                    }
                    if ($("#zone").prop('checked') == true) {
                        $(".zone-col").show();
                    }
                    else {
                        $(".zone-col").hide();
                    }
                    if ($("#status-chk").prop('checked') == true) {
                        $(".status-col").show();
                    }
                    else {
                        $(".status-col").hide();
                    }
                    if ($("#division").prop('checked') == true) {
                        $(".division-col").show();
                    }
                    else {
                        $(".division-col").hide();
                    }
                    if ($("#product").prop('checked') == true) {
                        $(".product-col").show();
                    }
                    else {
                        $(".product-col").hide();
                    }
                    if ($("#model").prop('checked') == true) {
                        $(".model-col").show();
                    }
                    else {
                        $(".model-col").hide();
                    }
                    if ($("#channel").prop('checked') == true) {
                        $(".channel-col").show();
                    }
                    else {
                        $(".channel-col").hide();
                    }
                    if ($("#lead-source").prop('checked') == true) {
                        $(".lead-source-col").show();
                    }
                    else {
                        $(".lead-source-col").hide();
                    }
                    if ($("#lead-type").prop('checked') == true) {
                        $(".lead-type-col").show();
                    }
                    else {
                        $(".lead-type-col").hide();
                    }
                    if ($("#sales-office").prop('checked') == true) {
                        $(".sales-office-col").show();
                    }
                    else {
                        $(".sales-office-col").hide();
                    }
                    if ($("#sales-rep").prop('checked') == true) {
                        $(".username-col").show();
                    }
                    else {
                        $(".username-col").hide();
                    }
                    this.LeadSnap = this.LeadSnapshotService.Find().then((function (response) {
                        _this.LeadSnap = _this.LeadSnapshotService.GetSnapshot(response.data.Result);
                        $('#txtAllocated').val(_this.LeadSnap.Allocated);
                        $('#txtCreated').val(_this.LeadSnap.Created);
                        $('#txtOpportunity').val(_this.LeadSnap.Converted);
                    }));
                    this.numRecords = this.NoOfRds;
                    this.FillGridData(this.numRecords);
                };
                LeadDashboardController.prototype.Search = function () {
                    var _this = this;
                    $('#region').prop('checked', false);
                    $('#zone').prop('checked', false);
                    $('#status-chk').prop('checked', false);
                    $('#division').prop('checked', false);
                    $('#product').prop('checked', false);
                    $('#model').prop('checked', false);
                    $('#channel').prop('checked', false);
                    $('#lead-source').prop('checked', false);
                    $('#lead-type').prop('checked', false);
                    $('#sales-office').prop('checked', false);
                    $('#sales-rep').prop('checked', false);
                    //if ($("#region").prop('checked') == true) {
                    //    $(".region-col").show();
                    //} else {
                    //    $(".region-col").hide();
                    //}
                    //if ($("#zone").prop('checked') == true) {
                    //    $(".zone-col").show();
                    //} else {
                    //    $(".zone-col").hide();
                    //}
                    //if ($("#status-chk").prop('checked') == true) {
                    //    $(".status-col").show();
                    //} else {
                    //    $(".status-col").hide();
                    //}
                    //if ($("#division").prop('checked') == true) {
                    //    $(".division-col").show();
                    //} else {
                    //    $(".division-col").hide();
                    //}
                    //if ($("#product").prop('checked') == true) {
                    //    $(".product-col").show();
                    //} else {
                    //    $(".product-col").hide();
                    //}
                    //if ($("#model").prop('checked') == true) {
                    //    $(".model-col").show();
                    //} else {
                    //    $(".model-col").hide();
                    //}
                    //if ($("#channel").prop('checked') == true) {
                    //    $(".channel-col").show();
                    //} else {
                    //    $(".channel-col").hide();
                    //}
                    //if ($("#lead-source").prop('checked') == true) {
                    //    $(".lead-source-col").show();
                    //} else {
                    //    $(".lead-source-col").hide();
                    //}
                    //if ($("#lead-type").prop('checked') == true) {
                    //    $(".lead-type-col").show();
                    //} else {
                    //    $(".lead-type-col").hide();
                    //}
                    //if ($("#sales-office").prop('checked') == true) {
                    //    $(".sales-office-col").show();
                    //} else {
                    //    $(".sales-office-col").hide();
                    //}
                    //if ($("#sales-rep").prop('checked') == true) {
                    //    $(".username-col").show();
                    //} else {
                    //    $(".username-col").hide();
                    //}
                    //$(".region-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".division-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".status-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".zone-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".channel-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".username-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".product-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".model-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".lead-source-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".lead-type-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".sales-office-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".count-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".percent-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    $('#dataTable').hide();
                    this.LeadSnap = this.LeadSnapshotService.Find().then((function (response) {
                        _this.LeadSnap = _this.LeadSnapshotService.GetSnapshot(response.data.Result);
                        $('#txtAllocated').val(_this.LeadSnap.Allocated);
                        $('#txtCreated').val(_this.LeadSnap.Created);
                        $('#txtOpportunity').val(_this.LeadSnap.Converted);
                    }));
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    this.ChannelPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.ChannelPie = _this.ChannelPieservice.GetChannelPie(response.data.Result);
                        //$('#txtSalesValue').val(this.ChannelPie[0].Sales);
                        //$('#txtMarValue').val(this.ChannelPie[0].Marketing);
                        _this.ChannelChart();
                    }));
                    this.SourcePieservice.Find(this.LeadSearch).then((function (response) {
                        _this.SourcePie = _this.SourcePieservice.GetSourcePie(response.data.Result);
                        //$('#txtAdverValue').val(this.SourcePie[0].Advertisement);
                        //$('#txtInhouseValue').val(this.SourcePie[0].Inhouse);
                        //$('#txtColdValue').val(this.SourcePie[0].ColdCall);
                        //$('#txtDealerValue').val(this.SourcePie[0].DealerSales);
                        //$('#txtFinanValue').val(this.SourcePie[0].FinancerReferral);
                        //$('#txtCustEqValue').val(this.SourcePie[0].CustomerEnquiry);
                        //$('#txtSpottersValue').val(this.SourcePie[0].Spotters);
                        //$('#txtCustRefValue').val(this.SourcePie[0].CustomerReferral);
                        //$('#txtFieldValue').val(this.SourcePie[0].FieldService);
                        //$('#txtMarketValue').val(this.SourcePie[0].MarketingCamp);
                        //$('#txtCustomerTendValue').val(this.SourcePie[0].CustomerTenders);
                        //$('#txtTeleValue').val(this.SourcePie[0].TeleMarketing);
                        //$('#txtDemoValue').val(this.SourcePie[0].Demo);
                        //$('#txtRoadValue').val(this.SourcePie[0].RoadShow);
                        //$('#txtWalkValue').val(this.SourcePie[0].WalkIn);
                        //$('#txtCATValue').val(this.SourcePie[0].CATWebsite);
                        //$('#txtProductValue').val(this.SourcePie[0].ProductSupport);
                        //$('#txtOtherValue').val(this.SourcePie[0].OtherMisc);
                        //$('#txtTIPLValue').val(this.SourcePie[0].TIPLWebsite);
                        //$('#txtTradeValue').val(this.SourcePie[0].CATTradeshow);
                        //$('#txtEventValue').val(this.SourcePie[0].Events);
                        //$('#txtAgencyValue').val(this.SourcePie[0].ThroughAgency);
                        //$('#txtLeadOnValue').val(this.SourcePie[0].CATLeadOnline);
                        //$('#txtDigitalValue').val(this.SourcePie[0].DigitalMarketing);
                        _this.SourceChart();
                    }));
                    this.RegionPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.RegionPie = _this.RegionPieservice.GetRegionPie(response.data.Result);
                        //$('#txtEast').val(this.RegionPie[0].East);
                        //$('#txtSouthEast').val(this.RegionPie[0].SouthEast);
                        //$('#txtNorth').val(this.RegionPie[0].North);
                        //$('#txtNorthCentral').val(this.RegionPie[0].NorthCentral);
                        //$('#txtWest').val(this.RegionPie[0].West);
                        _this.RegionChart();
                    }));
                    this.DivisionPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.DivisionPie = _this.DivisionPieservice.GetDivisionPie(response.data.Result);
                        //$('#txtBCP').val(this.DivisionPie[0].BCP);
                        //$('#txtGCI').val(this.DivisionPie[0].GCI);
                        //$('#txtETCAT').val(this.DivisionPie[0].ETCAT);
                        //$('#txtMINING').val(this.DivisionPie[0].MINING);
                        //$('#txtETFGW').val(this.DivisionPie[0].ETFGW);
                        //$('#txtMARINI').val(this.DivisionPie[0].MARINI);
                        _this.DivisionChart();
                    }));
                    this.ZonePieservice.Find(this.LeadSearch).then((function (response) {
                        _this.ZonePie = _this.ZonePieservice.GetZonePie(response.data.Result);
                        //$('#txtZone1').val(this.ZonePie[0].Zone1);
                        //$('#txtZone2').val(this.ZonePie[0].Zone2);
                        //$('#txtZone3').val(this.ZonePie[0].Zone3);
                        //$('#Zone4').val(this.ZonePie[0].Zone4);
                        //$('#Zone5').val(this.ZonePie[0].Zone5);
                        //$('#Zone6').val(this.ZonePie[0].Zone6);
                        //$('#Zone7').val(this.ZonePie[0].Zone7);
                        //$('#Zone8').val(this.ZonePie[0].Zone8);
                        //$('#Zone9').val(this.ZonePie[0].Zone9);
                        //$('#Zone10').val(this.ZonePie[0].Zone10);
                        _this.ZoneChart();
                    }));
                    this.ProductPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.ProductPie = _this.ProductPieservice.GetProductPie(response.data.Result);
                        //$('#WheelLoader').val(this.ProductPie[0].WheelLoader);
                        //$('#BackHoe').val(this.ProductPie[0].BackHoe);
                        //$('#TrackType').val(this.ProductPie[0].TrackType);
                        //$('#Excavator').val(this.ProductPie[0].Excavator);
                        //$('#MotorGrader').val(this.ProductPie[0].MotorGrader);
                        //$('#OffHighway').val(this.ProductPie[0].OffHighway);
                        //$('#Wheel').val(this.ProductPie[0].Wheel);
                        //$('#DGSet').val(this.ProductPie[0].DGSet);
                        //$('#Paving').val(this.ProductPie[0].Paving);
                        //$('#SkidSteer').val(this.ProductPie[0].SkidSteer);
                        //$('#Track').val(this.ProductPie[0].Track);
                        //$('#Motor').val(this.ProductPie[0].Motor);
                        //$('#TrackTypeTractor').val(this.ProductPie[0].TrackTypeTractor);
                        //$('#Tandem').val(this.ProductPie[0].Tandem);
                        //$('#Hammer').val(this.ProductPie[0].Hammer);
                        //$('#Marini').val(this.ProductPie[0].Marini);
                        //$('#Soil').val(this.ProductPie[0].Soil);
                        _this.ProductChart();
                    }));
                    this.StatePieservice.Find(this.LeadSearch).then((function (response) {
                        _this.StatePie = _this.StatePieservice.GetStatePie(response.data.Result);
                        //$('#txtSalesValue').val(this.ChannelPie[0].Sales);
                        //$('#txtMarValue').val(this.ChannelPie[0].Marketing);
                        _this.StateChart();
                    }));
                    this.SalesOfficePieservice.Find(this.LeadSearch).then((function (response) {
                        _this.SalesOffPie = _this.SalesOfficePieservice.GetSalesOffPie(response.data.Result);
                        //$('#txtSalesValue').val(this.ChannelPie[0].Sales);
                        //$('#txtMarValue').val(this.ChannelPie[0].Marketing);
                        _this.SalesOfficeChart();
                    }));
                    this.SalesRepPieservice.Find(this.LeadSearch).then((function (response) {
                        _this.SalesRepPie = _this.SalesRepPieservice.GetSalesRepPie(response.data.Result);
                        //$('#txtSalesValue').val(this.ChannelPie[0].Sales);
                        //$('#txtMarValue').val(this.ChannelPie[0].Marketing);
                        _this.SalesRepChart();
                    }));
                };
                LeadDashboardController.prototype.FillGridData = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.LeadSearch.FromDate = document.getElementById("txtFromDate").value;
                    this.LeadSearch.ToDate = document.getElementById("txtToDate").value;
                    this.LeadSearchData.FromDate = this.LeadSearch.FromDate;
                    this.LeadSearchData.ToDate = this.LeadSearch.ToDate;
                    this.LeadSearchData.LeadTypeID = this.LeadSearch.LeadTypeID;
                    this.LeadSearchData.DivisionID = this.LeadSearch.DivisionID;
                    this.LeadSearchData.ProductID = this.LeadSearch.ProductID;
                    this.LeadSearchData.ModelID = this.LeadSearch.ModelID;
                    this.LeadSearchData.Status = this.LeadSearch.Status;
                    this.LeadSearchData.Region = this.LeadSearch.Region;
                    this.LeadSearchData.State = this.LeadSearch.State;
                    this.LeadSearchData.District = this.LeadSearch.District;
                    this.LeadSearchData.Channel = this.LeadSearch.Channel;
                    this.LeadSearchData.LeadSource = this.LeadSearch.LeadSource;
                    this.LeadSearchData.SalesOffice = this.LeadSearch.SalesOffice;
                    this.LeadSearchData.Zone = this.LeadSearch.Zone;
                    this.LeadSearchData.SalesRep = this.LeadSearch.SalesRep;
                    if ($('#region').is(':checked')) {
                        this.LeadSearchData.ChkRegion = 1;
                    }
                    else {
                        this.LeadSearchData.ChkRegion = '';
                    }
                    if ($('#zone').is(':checked')) {
                        this.LeadSearchData.ChkZone = 1;
                    }
                    else {
                        this.LeadSearchData.ChkZone = '';
                    }
                    if ($('#division').is(':checked')) {
                        this.LeadSearchData.ChkDivision = 1;
                    }
                    else {
                        this.LeadSearchData.ChkDivision = '';
                    }
                    if ($('#product').is(':checked')) {
                        this.LeadSearchData.ChkProduct = 1;
                    }
                    else {
                        this.LeadSearchData.ChkProduct = '';
                    }
                    if ($('#model').is(':checked')) {
                        this.LeadSearchData.ChkModel = 1;
                    }
                    else {
                        this.LeadSearchData.ChkModel = '';
                    }
                    if ($('#channel').is(':checked')) {
                        this.LeadSearchData.ChkChannel = 1;
                    }
                    else {
                        this.LeadSearchData.ChkChannel = '';
                    }
                    if ($('#lead-source').is(':checked')) {
                        this.LeadSearchData.ChkLeadSource = 1;
                    }
                    else {
                        this.LeadSearchData.ChkLeadSource = '';
                    }
                    if ($('#lead-type').is(':checked')) {
                        this.LeadSearchData.ChkLeadType = 1;
                    }
                    else {
                        this.LeadSearchData.ChkLeadType = '';
                    }
                    if ($('#sales-office').is(':checked')) {
                        this.LeadSearchData.ChkSalesOffice = 1;
                    }
                    else {
                        this.LeadSearchData.ChkSalesOffice = '';
                    }
                    if ($('#sales-rep').is(':checked')) {
                        this.LeadSearchData.ChkSalesRep = 1;
                    }
                    else {
                        this.LeadSearchData.ChkSalesRep = '';
                    }
                    if ($('#status-chk').is(':checked')) {
                        this.LeadSearchData.ChkStatus = 1;
                    }
                    else {
                        this.LeadSearchData.ChkStatus = '';
                    }
                    this.LeadDashList = this.LeadDashService.FindData(this.LeadSearchData).then((function (response) {
                        _this.LeadDashList = _this.LeadDashService.GetlistData(response.data.Result);
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.LeadDashList.length > 0) {
                            $("#nullDataDiv").hide();
                            //$("#dataTable").show();
                            _this.LeadDashList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadDashList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadDashList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            //$("#dataTable").hide();
                        }
                        if (_this.LeadDashList.length > 0) {
                            $("#nullDataDiv").hide();
                            //$("#dataTable").show();
                            _this.LeadDashList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadDashList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadDashList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            //$("#dataTable").hide();
                        }
                    }));
                    setTimeout(function () {
                        var colCount = document.getElementsByClassName('count-col');
                        var totalCount = 0;
                        for (var i = 1; i < colCount.length; i++) {
                            totalCount = totalCount + parseInt(colCount[i].innerHTML);
                        }
                        //alert("Total Count is : " + totalCount);
                        var tCount = document.getElementById('t-count');
                        tCount.innerHTML = totalCount.toString();
                    }, 500);
                };
                LeadDashboardController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.LeadSearch.FromDate = document.getElementById("txtFromDate").value;
                    this.LeadSearch.ToDate = document.getElementById("txtToDate").value;
                    this.LeadDashList = this.LeadDashService.Find(this.LeadSearch).then((function (response) {
                        _this.LeadDashList = _this.LeadDashService.Getlist(response.data.Result);
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        if (_this.LeadDashList.length > 0) {
                            $("#nullDataDiv").hide();
                            //$("#dataTable").show();
                            _this.LeadDashList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadDashList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadDashList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            //$("#dataTable").hide();
                        }
                        if (_this.LeadDashList.length > 0) {
                            $("#nullDataDiv").hide();
                            //$("#dataTable").show();
                            _this.LeadDashList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadDashList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadDashList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            //$("#dataTable").hide();
                        }
                    }));
                };
                LeadDashboardController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadDashList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadDashboardController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadDashList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadDashboardController.prototype.Clear = function () {
                    $('#region').prop('checked', false);
                    $('#zone').prop('checked', false);
                    $('#status-chk').prop('checked', false);
                    $('#division').prop('checked', false);
                    $('#product').prop('checked', false);
                    $('#model').prop('checked', false);
                    $('#channel').prop('checked', false);
                    $('#lead-source').prop('checked', false);
                    $('#lead-type').prop('checked', false);
                    $('#sales-office').prop('checked', false);
                    $('#sales-rep').prop('checked', false);
                    //$(".region-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".division-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".status-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".zone-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".channel-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".username-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".product-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".model-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".lead-source-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".lead-type-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".sales-office-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".count-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    //$(".percent-col").each(function (index) {
                    //    $(this).removeClass('show-col');
                    //});
                    $('#dataTable').hide();
                    this.LeadSearch.FromDate = "";
                    this.LeadSearch.ToDate = "";
                    this.LeadSearch.DivisionID = "";
                    this.LeadSearch.ProductID = "";
                    this.LeadSearch.Status = "";
                    this.LeadSearch.ModelID = "";
                    this.LeadSearch.LeadTypeID = "";
                    this.LeadSearch.Region = "";
                    this.LeadSearch.State = "";
                    this.LeadSearch.District = "";
                    this.LeadSearch.Channel = "";
                    this.LeadSearch.LeadSource = "";
                    this.LeadSearch.Zone = "";
                    this.LeadSearch.SalesOffice = "";
                    this.LeadSearch.SalesRep = "";
                    //(<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
                    //(<HTMLInputElement>document.getElementById("txtToDate")).value = "";
                };
                LeadDashboardController.prototype.ChannelChart = function () {
                    var chContainer3 = document.getElementById("c4-detail");
                    var cCount = document.getElementById("c-count");
                    var c7idContainer = document.getElementById("c7-id-container");
                    var cInc = 0;
                    chContainer3.innerHTML = "";
                    /* Pie chart code started */
                    var pieData = [];
                    for (var i = 0; i < this.ChannelPie.length; i++) {
                        pieData.push({
                            label: this.ChannelPie[i].Label,
                            value: parseInt(this.ChannelPie[i].Value),
                            color: this.ChannelPie[i].Color
                        });
                        cInc = cInc + parseInt(this.ChannelPie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.ChannelPie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.ChannelPie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.ChannelPie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer3.appendChild(chContainerList);
                    }
                    cCount.innerHTML = cInc.toString();
                    console.log("pieData Array " + pieData);
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: false
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "ChannelpieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "channel-class");
                    cpcCanvas.style.width = "500px";
                    c7idContainer.appendChild(cpcCanvas);
                    var channelClass = document.getElementsByClassName("channel-class");
                    for (var i = 0; i <= channelClass.length - 2; i++) {
                        channelClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("ChannelpieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var chan = new Chart(demo).Pie(pieData, pieOptions);
                    /* Pie chart code ended */
                };
                LeadDashboardController.prototype.SourceChart = function () {
                    /* Pie chart code started */
                    var chContainer4 = document.getElementById("c5-detail");
                    var lCount = document.getElementById("l-count");
                    var c8idContainer = document.getElementById("c8-id-container");
                    var lInc = 0;
                    chContainer4.innerHTML = "";
                    var pieData1 = [];
                    for (var i = 0; i < this.SourcePie.length; i++) {
                        pieData1.push({
                            label: this.SourcePie[i].Label,
                            value: parseInt(this.SourcePie[i].Value),
                            color: this.SourcePie[i].Color
                        });
                        lInc = lInc + parseInt(this.SourcePie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.SourcePie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.SourcePie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.SourcePie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer4.appendChild(chContainerList);
                    }
                    lCount.innerHTML = lInc.toString();
                    console.log("pieData Array " + pieData1);
                    var pieOptions1 = {
                        segmentShowStroke: false,
                        animateScale: false,
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "SourcepieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "source-class");
                    cpcCanvas.style.width = "500px";
                    c8idContainer.appendChild(cpcCanvas);
                    var sourceClass = document.getElementsByClassName("source-class");
                    for (var i = 0; i <= sourceClass.length - 2; i++) {
                        sourceClass[i].classList.add('input-hide');
                    }
                    var countries = document.getElementById("SourcepieContainer" + this.counted);
                    var demo1 = countries.getContext('2d');
                    var char = new Chart(demo1).Pie(pieData1, pieOptions1);
                    /* Pie chart code ended */
                };
                LeadDashboardController.prototype.DivisionChart = function () {
                    var chContainer = document.getElementById("c1-detail");
                    var dCount = document.getElementById("d-count");
                    var c4idContainer = document.getElementById("c4-id-container");
                    var dInc = 0;
                    chContainer.innerHTML = "";
                    /* Pie chart code started */
                    var pieData3 = [];
                    for (var i = 0; i < this.DivisionPie.length; i++) {
                        pieData3.push({
                            label: this.DivisionPie[i].Label,
                            value: parseInt(this.DivisionPie[i].Value),
                            color: this.DivisionPie[i].Color
                        });
                        dInc = dInc + parseInt(this.DivisionPie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.DivisionPie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.DivisionPie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.DivisionPie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer.appendChild(chContainerList);
                    }
                    console.log("DINC : " + dInc);
                    dCount.innerHTML = dInc.toString();
                    console.log("pieData Array " + pieData3);
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: false
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "DivisionpieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "division-class");
                    cpcCanvas.style.width = "500px";
                    c4idContainer.appendChild(cpcCanvas);
                    var divisionClass = document.getElementsByClassName("division-class");
                    for (var i = 0; i <= divisionClass.length - 2; i++) {
                        divisionClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("DivisionpieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var Div = new Chart(demo).Pie(pieData3, pieOptions);
                    /* Pie chart code ended */
                };
                LeadDashboardController.prototype.RegionChart = function () {
                    var chContainer1 = document.getElementById("c2-detail");
                    var rCount = document.getElementById("r-count");
                    var c5idContainer = document.getElementById("c5-id-container");
                    var rInc = 0;
                    chContainer1.innerHTML = "";
                    /* Pie chart code started */
                    var pieData4 = [];
                    for (var i = 0; i < this.RegionPie.length; i++) {
                        pieData4.push({
                            label: this.RegionPie[i].Label,
                            value: parseInt(this.RegionPie[i].Value),
                            color: this.RegionPie[i].Color
                        });
                        rInc = rInc + parseInt(this.RegionPie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.RegionPie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.RegionPie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.RegionPie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer1.appendChild(chContainerList);
                    }
                    rCount.innerHTML = rInc.toString();
                    console.log("pieData Array " + pieData4);
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: false
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "RegionpieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "region-class");
                    cpcCanvas.style.width = "500px";
                    c5idContainer.appendChild(cpcCanvas);
                    var regionClass = document.getElementsByClassName("region-class");
                    for (var i = 0; i <= regionClass.length - 2; i++) {
                        regionClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("RegionpieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var Reg = new Chart(demo).Pie(pieData4, pieOptions);
                    /* Pie chart code ended */
                };
                LeadDashboardController.prototype.ZoneChart = function () {
                    var chContainer2 = document.getElementById("c3-detail");
                    var zCount = document.getElementById("z-count");
                    var c6idContainer = document.getElementById("c6-id-container");
                    var zInc = 0;
                    chContainer2.innerHTML = "";
                    /* Pie chart code started */
                    var pieData3 = [];
                    for (var i = 0; i < this.ZonePie.length; i++) {
                        pieData3.push({
                            label: this.ZonePie[i].Label,
                            value: parseInt(this.ZonePie[i].Value),
                            color: this.ZonePie[i].Color
                        });
                        zInc = zInc + parseInt(this.ZonePie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.ZonePie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.ZonePie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.ZonePie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer2.appendChild(chContainerList);
                    }
                    zCount.innerHTML = zInc.toString();
                    console.log("pieData Array " + pieData3);
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: false
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "ZonepieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "zone-class");
                    cpcCanvas.style.width = "500px";
                    c6idContainer.appendChild(cpcCanvas);
                    var zoneClass = document.getElementsByClassName("zone-class");
                    for (var i = 0; i <= zoneClass.length - 2; i++) {
                        zoneClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("ZonepieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var Zone = new Chart(demo).Pie(pieData3, pieOptions);
                    /* Pie chart code ended */
                };
                LeadDashboardController.prototype.ProductChart = function () {
                    var chContainer5 = document.getElementById("c6-detail");
                    var pCount = document.getElementById("p-count");
                    var c9idContainer = document.getElementById("c9-id-container");
                    var pInc = 0;
                    chContainer5.innerHTML = "";
                    /* Pie chart code started */
                    var pieData5 = [];
                    for (var i = 0; i < this.ProductPie.length; i++) {
                        pieData5.push({
                            label: this.ProductPie[i].Label,
                            value: parseInt(this.ProductPie[i].Value),
                            color: this.ProductPie[i].Color
                        });
                        pInc = pInc + parseInt(this.ProductPie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.ProductPie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.ProductPie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.ProductPie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer5.appendChild(chContainerList);
                    }
                    pCount.innerHTML = pInc.toString();
                    console.log("pieData Array " + pieData5);
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: false
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "ProductpieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "product-class");
                    cpcCanvas.style.width = "500px";
                    c9idContainer.appendChild(cpcCanvas);
                    var productClass = document.getElementsByClassName("product-class");
                    for (var i = 0; i <= productClass.length - 2; i++) {
                        productClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("ProductpieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var Prod = new Chart(demo).Pie(pieData5, pieOptions);
                    /* Pie chart code ended */
                };
                LeadDashboardController.prototype.StateChart = function () {
                    var chContainer6 = document.getElementById("c7-detail");
                    var swCount = document.getElementById("sw-count");
                    var c10idContainer = document.getElementById("c10-id-container");
                    var swInc = 0;
                    chContainer6.innerHTML = "";
                    /* Pie chart code started */
                    var pieData7 = [];
                    for (var i = 0; i < this.StatePie.length; i++) {
                        pieData7.push({
                            label: this.StatePie[i].Label,
                            value: parseInt(this.StatePie[i].Value),
                            color: this.StatePie[i].Color
                        });
                        swInc = swInc + parseInt(this.StatePie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.StatePie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.StatePie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.StatePie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer6.appendChild(chContainerList);
                    }
                    swCount.innerHTML = swInc.toString();
                    console.log("pieData Array " + pieData7);
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: false
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "StatepieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "stat-class");
                    cpcCanvas.style.width = "500px";
                    c10idContainer.appendChild(cpcCanvas);
                    var stateClass = document.getElementsByClassName("stat-class");
                    for (var i = 0; i <= stateClass.length - 2; i++) {
                        stateClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("StatepieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var Stat = new Chart(demo).Pie(pieData7, pieOptions);
                    /* Pie chart code ended */
                };
                LeadDashboardController.prototype.SalesOfficeChart = function () {
                    var chContainer8 = document.getElementById("c9-detail");
                    var soCount = document.getElementById("so-count");
                    var c12idContainer = document.getElementById("c12-id-container");
                    var soInc = 0;
                    chContainer8.innerHTML = "";
                    /* Pie chart code started */
                    var pieData8 = [];
                    for (var i = 0; i < this.SalesOffPie.length; i++) {
                        pieData8.push({
                            label: this.SalesOffPie[i].Label,
                            value: parseInt(this.SalesOffPie[i].Value),
                            color: this.SalesOffPie[i].Color
                        });
                        soInc = soInc + parseInt(this.SalesOffPie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.SalesOffPie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.SalesOffPie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.SalesOffPie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer8.appendChild(chContainerList);
                    }
                    soCount.innerHTML = soInc.toString();
                    console.log("pieData Array " + pieData8);
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: false
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "SalesOfficepieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "sal-off-class");
                    cpcCanvas.style.width = "500px";
                    c12idContainer.appendChild(cpcCanvas);
                    var saloffClass = document.getElementsByClassName("sal-off-class");
                    for (var i = 0; i <= saloffClass.length - 2; i++) {
                        saloffClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("SalesOfficepieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var Salesoff = new Chart(demo).Pie(pieData8, pieOptions);
                    /* Pie chart code ended */
                };
                LeadDashboardController.prototype.SalesRepChart = function () {
                    var chContainer7 = document.getElementById("c8-detail");
                    var srCount = document.getElementById("sr-count");
                    var c11idContainer = document.getElementById("c11-id-container");
                    var srInc = 0;
                    chContainer7.innerHTML = "";
                    /* Pie chart code started */
                    var pieData9 = [];
                    for (var i = 0; i < this.SalesRepPie.length; i++) {
                        pieData9.push({
                            label: this.SalesRepPie[i].Label,
                            value: parseInt(this.SalesRepPie[i].Value),
                            color: this.SalesRepPie[i].Color
                        });
                        srInc = srInc + parseInt(this.SalesRepPie[i].Value);
                        var chContainerList = document.createElement("li");
                        chContainerList.classList.add("ch-list");
                        chContainerList.classList.add("ch-list-1");
                        var chartColor = document.createElement("div");
                        chartColor.classList.add('chart-label-color');
                        chartColor.classList.add('chart-label-color-1');
                        var chartLabel = document.createElement("label");
                        var chartVal = document.createElement("span");
                        chartVal.classList.add("chart-value");
                        chartVal.classList.add("chart-value-1");
                        var chartValNode = document.createTextNode(this.SalesRepPie[i].Value);
                        chartVal.appendChild(chartValNode);
                        var chartLabelNode = document.createTextNode(this.SalesRepPie[i].Label);
                        chartLabel.classList.add("chart-label");
                        chartLabel.classList.add("chart-label-1");
                        chartLabel.appendChild(chartLabelNode);
                        chartColor.style.background = this.SalesRepPie[i].Color;
                        chContainerList.appendChild(chartColor);
                        chContainerList.appendChild(chartLabel);
                        chContainerList.appendChild(chartVal);
                        chContainer7.appendChild(chContainerList);
                    }
                    srCount.innerHTML = srInc.toString();
                    console.log("pieData Array " + pieData9);
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: false
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "SalesReppieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "sal-rep-class");
                    cpcCanvas.style.width = "500px";
                    c11idContainer.appendChild(cpcCanvas);
                    var salrepClass = document.getElementsByClassName("sal-rep-class");
                    for (var i = 0; i <= salrepClass.length - 2; i++) {
                        salrepClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("SalesReppieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var Salesrep = new Chart(demo).Pie(pieData9, pieOptions);
                    /* Pie chart code ended */
                };
                LeadDashboardController.$inject = ["DivisionService", "ProductddService", "LeadTypeProductService", "LeadTypeddService", "RegionddService", "StateRegionDDService", "DistrictddService",
                    "ChannelDDService", "LeadSourceDetailsService", "ZoneDDService", "SalesOfficeDDwpService", "SalesRepddService", "LeadStatusddService", "TodaysSnapshotService",
                    "LeadDashboardListService", "ChannelPieListService", "SourcePieListService", "DivisionPiechartListService", "RegionPiechartListService", "ZonePiechartListService",
                    "ProductPiechartListService", "StatePieListService", "SalesOfficePieListService", "SalesRepPieListService", "$cookieStore"];
                return LeadDashboardController;
            }());
            var LeadDashboardComponentController = /** @class */ (function () {
                function LeadDashboardComponentController() {
                    this.controller = LeadDashboardController;
                    this.templateUrl = "/Scripts/App/LeadDashboard/Template/LeadDashboard.html";
                }
                LeadDashboardComponentController.Name = "leaddashboardcomponent";
                return LeadDashboardComponentController;
            }());
            app.AddComponent(LeadDashboardComponentController.Name, new LeadDashboardComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadDashboardComponent.js.map