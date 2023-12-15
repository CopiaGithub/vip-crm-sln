///// <reference path="../../../typings/chartjs/chart.d.ts" />
var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var FavInsert1 = GCPL.Model.IFavModel;
            var Channel = GCPL.Model.ChannelPie1Model;
            var Source = GCPL.Model.ChannelPie1Model;
            var HomeComponentController = /** @class */ (function () {
                function HomeComponentController(_BaseHomeService, _AllLeadCountService, _AllOpportunityCountService, _ProductService, _ModelService, _LeadTypeService, _DivisionService, _LeadListservice, _OppListservice, _ChannelPieservice, _SourcePieservice, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    //reviews = [];
                    this.plandata = null;
                    this.Favdata = null;
                    this.RoleID = null;
                    this.DealerID = null;
                    this.BusinessEntityID = null;
                    this.UserID = null;
                    this.FavInsert = null;
                    this.getAllLeadCount = null;
                    this.OppCount = null;
                    this.LeadTypeDropDown = null;
                    this.DivisionDropDown = null;
                    this.ModelDropDown1 = null;
                    this.AllLeadChannel = null;
                    //AllLeadSource = null;
                    this.counted = null;
                    this.LeadList = null;
                    this.OppList = null;
                    this.ChannelSearch = null;
                    this.ChannelPie = null;
                    this.SourcePie = null;
                    this.ProductDropDown = null;
                    this.Cookie = null;
                    /* Bar Chart Code Started */
                    this.chan = null;
                    this.char = null;
                    this.BaseHomeService = _BaseHomeService;
                    this.AllLeadCountService = _AllLeadCountService;
                    this.AllOpportunityCountService = _AllOpportunityCountService;
                    this.FavInsert = new FavInsert1();
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.LeadTypeService = _LeadTypeService;
                    this.DivisionService = _DivisionService;
                    this.LeadListservice = _LeadListservice;
                    this.OppListservice = _OppListservice;
                    this.ChannelPieservice = _ChannelPieservice;
                    this.ChannelPie = new Channel();
                    this.AllLeadChannel = new GCPL.Model.ChannelPieSearchModel();
                    this.SourcePieservice = _SourcePieservice;
                    this.SourcePie = new Source();
                    //this.AllLeadSource = new GCPL.Model.SourcePieSearchModel();
                    this.Cookie = _cookieStore;
                    this.BusinessEntityID = this.Cookie.get('UserInfo')['BusinessEntityID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                    this.DealerID = this.Cookie.get('UserInfo')['DealerID'];
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                HomeComponentController.prototype.$onInit = function () {
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
                    //$("#txtFromDate1").datepicker({
                    //    dateFormat: 'dd M yy', changeMonth: true,
                    //    changeYear: true,
                    //    onSelect: this.selectFromDate1
                    //});
                    //$("#txtToDate1").datepicker({
                    //    dateFormat: 'dd M yy', changeMonth: true,
                    //    changeYear: true,
                    //    onSelect: this.selectToDate1
                    //});
                    /* Remove zero value chart label code started */
                    /* Remove zero value chart label code ended */
                    /* Settings Code Started */
                    var settingBtn = document.getElementById("settings-btn");
                    var settingMenu = document.getElementById("setting-menu-section");
                    var secondSettingBtn = document.getElementById("second-settings-btn");
                    var secondSettingMenu = document.getElementById("second-setting-menu-section");
                    console.log("Settings Activate");
                    settingBtn.addEventListener("click", function () {
                        settingMenu.classList.toggle("settings-menu-remove");
                        secondSettingMenu.classList.remove("settings-menu-remove");
                    });
                    secondSettingBtn.addEventListener("click", function () {
                        secondSettingMenu.classList.toggle("settings-menu-remove");
                        settingMenu.classList.remove("settings-menu-remove");
                    });
                };
                HomeComponentController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                HomeComponentController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //selectFromDate1(e) {
                //    (<HTMLInputElement>document.getElementById("txtFromDate1")).value = e;
                //}
                //selectToDate1(e) {
                //    (<HTMLInputElement>document.getElementById("txtToDate1")).value = e;
                //}
                HomeComponentController.prototype.Init = function () {
                    var _this = this;
                    this.counted = 0;
                    var n = new Date();
                    var y = n.getFullYear();
                    //var m2 = n.getMonth() + 1;
                    var d = n.getDate();
                    document.getElementById("date").innerHTML = "" + y;
                    $('#date').val(y);
                    document.getElementById("date1").innerHTML = "" + y;
                    $('#date1').val(y);
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
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.getAllLeadCount = this.AllLeadCountService.FindGrid().then((function (response) {
                        _this.getAllLeadCount = _this.AllLeadCountService.GetLeadsCountGrid(response.data.Result);
                    }));
                    this.OppCount = this.AllOpportunityCountService.FindGrid().then((function (response) {
                        _this.OppCount = _this.AllOpportunityCountService.GetOppCountGrid(response.data.Result);
                    }));
                    this.LeadList = this.LeadListservice.Find().then((function (response) {
                        _this.LeadList = _this.LeadListservice.GetDelayList(response.data.Result);
                    }));
                    this.OppList = this.OppListservice.Find().then((function (response) {
                        _this.OppList = _this.OppListservice.GetOppList(response.data.Result);
                    }));
                    this.plandata = this.BaseHomeService.Find(this.BusinessEntityID, this.RoleID).then((function (response) {
                        _this.plandata = _this.BaseHomeService.Get(response.data.Result);
                        //if (response.data.Result == true) {
                        //    $('#divvendor').show();
                        //}
                        //else {
                        //    $('#divvendor').hide();
                        //}
                    }));
                    this.Favdata = this.BaseHomeService.FindFav(this.DealerID).then((function (response) {
                        _this.Favdata = _this.BaseHomeService.GetFav(response.data.Result);
                        //if (response.data.Result == true) {
                        //    $('#divvendor').show();
                        //}
                        //else {
                        //    $('#divvendor').hide();
                        //}
                    }));
                    this.AllLeadChannel.FromDate = document.getElementById("txtFromDate").value;
                    this.AllLeadChannel.ToDate = document.getElementById("txtToDate").value;
                    this.ChannelPieservice.Find(this.AllLeadChannel).then((function (response) {
                        _this.ChannelPie = _this.ChannelPieservice.GetChannelPie(response.data.Result);
                        _this.ChannelChart();
                    }));
                    this.SourcePieservice.Find(this.AllLeadChannel).then((function (response) {
                        _this.SourcePie = _this.SourcePieservice.GetSourcePie(response.data.Result);
                        _this.SourceChart();
                    }));
                };
                HomeComponentController.prototype.ChannelChart = function () {
                    var chContainer = document.getElementById("c1-detail");
                    var cCount = document.getElementById("c-count");
                    var chList = document.getElementsByClassName("ch-list-1");
                    var chColor = document.getElementsByClassName("chart-label-color-1");
                    var chLabel = document.getElementsByClassName("chart-label-1");
                    var chVal = document.getElementsByClassName("chart-value-1");
                    var cidContainer = document.getElementById("c2-id-container");
                    var cInc = 0;
                    chContainer.innerHTML = "";
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
                        chContainer.appendChild(chContainerList);
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
                    cidContainer.appendChild(cpcCanvas);
                    var channelClass = document.getElementsByClassName("channel-class");
                    for (var i = 0; i <= channelClass.length - 2; i++) {
                        channelClass[i].classList.add('input-hide');
                    }
                    var country = document.getElementById("ChannelpieContainer" + this.counted);
                    var demo = country.getContext('2d');
                    var chan = new Chart(demo).Pie(pieData, pieOptions);
                    /* Pie chart code ended */
                };
                HomeComponentController.prototype.SourceChart = function () {
                    /* Pie chart code started */
                    var ch1Container = document.getElementById("c2-detail");
                    var lCount = document.getElementById("l-count");
                    var ch1List1 = document.getElementsByClassName("ch-list-2");
                    var chColor1 = document.getElementsByClassName("chart-label-color-2");
                    var chLabel1 = document.getElementsByClassName("chart-label-2");
                    var chVal1 = document.getElementsByClassName("chart-value-2");
                    var c1idContainer = document.getElementById("c3-id-container");
                    ;
                    var lInc = 0;
                    ch1Container.innerHTML = "";
                    //for (var k = 0; k < ch1List1.length; k++) {
                    //    ch1List1[k].remove();
                    //    chColor1[k].remove();
                    //    chLabel1[k].remove();
                    //    chVal1[k].remove();
                    //}
                    var pieData1 = [];
                    for (var i = 0; i < this.SourcePie.length; i++) {
                        pieData1.push({
                            label: this.SourcePie[i].Label,
                            value: parseInt(this.SourcePie[i].Value),
                            color: this.SourcePie[i].Color
                        });
                        lInc = lInc + parseInt(this.SourcePie[i].Value);
                        var chContainerList1 = document.createElement("li");
                        chContainerList1.classList.add("ch-list-2");
                        var chartColor1 = document.createElement("div");
                        chartColor1.classList.add('chart-label-color');
                        chartColor1.classList.add('chart-label-color-2');
                        var chartLabel1 = document.createElement("label");
                        var chartVal1 = document.createElement("span");
                        chartVal1.classList.add("chart-value");
                        chartVal1.classList.add("chart-value-2");
                        var chartValNode1 = document.createTextNode(this.SourcePie[i].Value);
                        chartVal1.appendChild(chartValNode1);
                        var chartLabelNode1 = document.createTextNode(this.SourcePie[i].Label);
                        chartLabel1.classList.add("chart-label");
                        chartLabel1.classList.add("chart-label-2");
                        chartLabel1.appendChild(chartLabelNode1);
                        chartColor1.style.background = this.SourcePie[i].Color;
                        chContainerList1.appendChild(chartColor1);
                        chContainerList1.appendChild(chartLabel1);
                        chContainerList1.appendChild(chartVal1);
                        ch1Container.appendChild(chContainerList1);
                    }
                    lCount.innerHTML = lInc.toString();
                    //console.log("pieData Array " + pieData1);
                    var pieOptions1 = {
                        segmentShowStroke: false,
                        animateScale: false,
                    };
                    this.counted = this.counted + 1;
                    var cpcCanvas = document.createElement("canvas");
                    cpcCanvas.setAttribute("id", "SourcepieContainer" + this.counted);
                    cpcCanvas.setAttribute("class", "source-class");
                    cpcCanvas.style.width = "500px";
                    c1idContainer.appendChild(cpcCanvas);
                    var sourceClass = document.getElementsByClassName("source-class");
                    for (var i = 0; i <= sourceClass.length - 2; i++) {
                        sourceClass[i].classList.add('input-hide');
                    }
                    var countries = document.getElementById("SourcepieContainer" + this.counted);
                    var demo1 = countries.getContext('2d');
                    var char = new Chart(demo1).Pie(pieData1, pieOptions1);
                    /* Pie chart code ended */
                };
                HomeComponentController.prototype.ClearChannel = function () {
                    this.AllLeadChannel.LeadTypeID = "";
                    this.AllLeadChannel.DivisionID = "";
                    this.AllLeadChannel.ModelID = "";
                    this.AllLeadChannel.ProductID = "";
                    this.ChannelPie = "";
                    this.SourcePie = "";
                    //(<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
                    //(<HTMLInputElement>document.getElementById("txtToDate")).value = "";
                };
                HomeComponentController.prototype.Search = function () {
                    var _this = this;
                    this.AllLeadChannel.FromDate = document.getElementById("txtFromDate").value;
                    this.AllLeadChannel.ToDate = document.getElementById("txtToDate").value;
                    this.ChannelPieservice.Find(this.AllLeadChannel).then((function (response) {
                        _this.ChannelPie = _this.ChannelPieservice.GetChannelPie(response.data.Result);
                        _this.ChannelChart();
                    }));
                    this.SourcePieservice.Find(this.AllLeadChannel).then((function (response) {
                        _this.SourcePie = _this.SourcePieservice.GetSourcePie(response.data.Result);
                        console.log(_this.SourcePie);
                        _this.SourceChart();
                    }));
                };
                HomeComponentController.prototype.Model1 = function () {
                    var _this = this;
                    debugger;
                    this.AllLeadChannel.ID = this.LeadTypeDropDown[0].ID;
                    this.ModelDropDown1 = this.ModelService.Find(this.AllLeadChannel).then((function (response) {
                        _this.ModelDropDown1 = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                HomeComponentController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                //Division1(): void {
                //    this.DivisionDropDown1 = this.DivisionService.Find().then((response => {
                //        this.DivisionDropDown1 = this.DivisionService.GetDivisionName(response.data.Result);
                //    }));
                //}
                HomeComponentController.prototype.Product = function () {
                    var _this = this;
                    debugger;
                    this.ProductDropDown = this.ProductService.Find(this.AllLeadChannel.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                //Product1(): void {
                //    debugger;
                //    this.ProductDropDown1 = this.ProductService.Find(this.AllLeadSource.DivisionID).then((response => {
                //        this.ProductDropDown1 = this.ProductService.GetProductName(response.data.Result);
                //    }));
                //}
                //Model2(): void {
                //    debugger;
                //    this.ModelDropDown = this.ModelService.Find(this.AllLeadSource).then((response => {
                //        this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
                //    }));
                //}
                /* Bar Chart Code Started */
                HomeComponentController.prototype.InsertFav = function () {
                    for (var i = 0; i < this.Favdata.length; i++) {
                        this.FavInsert.AccessModuleName = this.Favdata[i].Title;
                    }
                    this.FavInsert.DealerID = this.DealerID;
                    this.FavInsert.status = 'Remove';
                    this.Favdata = this.BaseHomeService.InsertTran(this.FavInsert).then(function (response) {
                        if (response.data.Result == true) {
                            alert("Successfully Remove from Favourite List");
                        }
                        else {
                            alert("Oops....!!");
                        }
                    });
                };
                HomeComponentController.$inject = ["BaseHomeService", "LeadsCountService", "OpportunityCountService", "ProductddService", "LeadTypeProductService", "LeadTypeddService", "DivisionService",
                    "LeadDelayedListService", "TopOpportunityListService",
                    "ChannelPiechartListService", "SourcePiechartListService", "$cookieStore"];
                return HomeComponentController;
            }());
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                    this.controller = HomeComponentController;
                    this.templateUrl = "/Scripts/App/Home/Template/home.html";
                }
                HomeComponent.Name = "homeComponent";
                return HomeComponent;
            }());
            app.AddComponent(HomeComponent.Name, new HomeComponent());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=HomeComponent.js.map