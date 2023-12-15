var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Channel = GCPL.Model.ChannelPie1Model;
            var Source = GCPL.Model.ChannelPie1Model;
            var ManagerDashboardController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ManagerDashboardController(_ManLeadCountService, _ManOppCountService, _LeadListservice, _OppListservice, _ProductService, _ModelService, _LeadTypeService, _DivisionService, _ChannelPieservice, _SourcePieservice, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.getManagerLeadCount = null;
                    this.getManagerOppCount = null;
                    this.ModelDropDown1 = null;
                    this.ModelDropDown = null;
                    this.LeadList = null;
                    this.OppList = null;
                    this.ChannelPie = null;
                    this.AllLeadChannel = null;
                    this.SourcePie = null;
                    this.counted = null;
                    this.LeadTypeDropDown = null;
                    this.DivisionDropDown = null;
                    this.ProductDropDown = null;
                    this.RoleID = null;
                    this.UserID = null;
                    this.Cookie = null;
                    this.chan = null;
                    this.char = null;
                    this.ManLeadCountService = _ManLeadCountService;
                    this.ManOppCountService = _ManOppCountService;
                    this.LeadListservice = _LeadListservice;
                    this.OppListservice = _OppListservice;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.LeadTypeService = _LeadTypeService;
                    this.DivisionService = _DivisionService;
                    this.ChannelPieservice = _ChannelPieservice;
                    this.ChannelPie = new Channel();
                    this.AllLeadChannel = new GCPL.Model.ChannelPieSearchModel();
                    this.SourcePieservice = _SourcePieservice;
                    this.SourcePie = new Source();
                    this.Cookie = _cookieStore;
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                ManagerDashboardController.prototype.$onInit = function () {
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
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                    console.log("Activate..");
                };
                ManagerDashboardController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                ManagerDashboardController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                ManagerDashboardController.prototype.Init = function () {
                    var _this = this;
                    this.counted = 0;
                    var n = new Date();
                    var y = n.getFullYear();
                    //var m = n.getMonth() + 1;
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
                    this.getManagerLeadCount = this.ManLeadCountService.FindGrid().then((function (response) {
                        _this.getManagerLeadCount = _this.ManLeadCountService.GetLeadsCountGrid(response.data.Result);
                    }));
                    this.getManagerOppCount = this.ManOppCountService.FindGrid().then((function (response) {
                        _this.getManagerOppCount = _this.ManOppCountService.GetOpportunityCountGrid(response.data.Result);
                    }));
                    this.LeadList = this.LeadListservice.Find().then((function (response) {
                        _this.LeadList = _this.LeadListservice.GetDelayList(response.data.Result);
                    }));
                    this.OppList = this.OppListservice.Find().then((function (response) {
                        _this.OppList = _this.OppListservice.GetOppList(response.data.Result);
                    }));
                    //this.DivisionDropDown = this.DivisionService.Find().then((response => {
                    //    this.DivisionDropDown = this.DivisionService.GetDivision(response.data.Result);
                    //}));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
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
                ManagerDashboardController.prototype.ChannelChart = function () {
                    var chContainer = document.getElementById("c1-detail");
                    var chList = document.getElementsByClassName("ch-list-1");
                    var chColor = document.getElementsByClassName("chart-label-color-1");
                    var chLabel = document.getElementsByClassName("chart-label-1");
                    var chVal = document.getElementsByClassName("chart-value-1");
                    var cidContainer = document.getElementById("c-id-container");
                    chContainer.innerHTML = "";
                    /* Pie chart code started */
                    var pieData = [];
                    for (var i = 0; i < this.ChannelPie.length; i++) {
                        pieData.push({
                            label: this.ChannelPie[i].Label,
                            value: parseInt(this.ChannelPie[i].Value),
                            color: this.ChannelPie[i].Color
                        });
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
                ManagerDashboardController.prototype.SourceChart = function () {
                    var ch1Container = document.getElementById("c2-detail");
                    var ch1List1 = document.getElementsByClassName("ch-list-2");
                    var chColor1 = document.getElementsByClassName("chart-label-color-2");
                    var chLabel1 = document.getElementsByClassName("chart-label-2");
                    var chVal1 = document.getElementsByClassName("chart-value-2");
                    var c1idContainer = document.getElementById("c1-id-container");
                    ;
                    ch1Container.innerHTML = "";
                    /* Pie chart code started */
                    var pieData1 = [];
                    for (var i = 0; i < this.SourcePie.length; i++) {
                        pieData1.push({
                            label: this.SourcePie[i].Label,
                            value: parseInt(this.SourcePie[i].Value),
                            color: this.SourcePie[i].Color
                        });
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
                ManagerDashboardController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                ManagerDashboardController.prototype.Model1 = function () {
                    var _this = this;
                    debugger;
                    this.AllLeadChannel.ID = this.LeadTypeDropDown[0].ID;
                    this.ModelDropDown1 = this.ModelService.Find(this.AllLeadChannel).then((function (response) {
                        _this.ModelDropDown1 = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                ManagerDashboardController.prototype.Product = function () {
                    var _this = this;
                    debugger;
                    this.ProductDropDown = this.ProductService.Find(this.AllLeadChannel.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                ManagerDashboardController.prototype.Search = function () {
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
                ManagerDashboardController.prototype.ClearChannel = function () {
                    this.AllLeadChannel.LeadTypeID = "";
                    this.AllLeadChannel.DivisionID = "";
                    this.AllLeadChannel.ModelID = "";
                    this.AllLeadChannel.ProductID = "";
                    this.ChannelPie = "";
                    this.SourcePie = "";
                    //(<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
                    //(<HTMLInputElement>document.getElementById("txtToDate")).value = "";
                };
                ManagerDashboardController.$inject = ["ManagerLeadsCountService", "ManagerOpportunityCountService", "ManagerLeadDelayedListService", "ManagerTopOpportunityListService",
                    "ProductddService", "LeadTypeProductService", "LeadTypeddService", "DivisionService", "ChannelPiechartListService", "SourcePiechartListService", "$cookieStore"];
                return ManagerDashboardController;
            }());
            var ManagerDashboardComponentController = /** @class */ (function () {
                function ManagerDashboardComponentController() {
                    this.controller = ManagerDashboardController;
                    this.templateUrl = "/Scripts/App/ManagerDashboard/Template/ManagerDashboard.html";
                }
                ManagerDashboardComponentController.Name = "managerdashboardcomponent";
                return ManagerDashboardComponentController;
            }());
            app.AddComponent(ManagerDashboardComponentController.Name, new ManagerDashboardComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ManagerDashboardComponent.js.map