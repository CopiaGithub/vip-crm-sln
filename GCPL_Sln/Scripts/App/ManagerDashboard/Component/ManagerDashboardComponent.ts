namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import ChannelSearch = GCPL.Model.LeadChannelSearchModel;
    import SourceSearch = GCPL.Model.SourcePieSearchModel;
    import Channel = GCPL.Model.ChannelPie1Model;
    import Source = GCPL.Model.ChannelPie1Model;

    interface IManagerDashboardController {
        getManagerLeadCount: Array<Model.LeadCountModel>;
        getManagerOppCount: Array<Model.OpportunityCountModel>
        LeadList: Array<Model.LeadDelaylistModel>;
        OppList: Array<Model.OpplistModel>;
       
        AllLeadChannel: ChannelSearch;
        ChannelPie: Array<Model.ChannelPie1Model>;
        SourcePie: Array<Model.ChannelPie1Model>;
       
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>;
        DivisionDropDown: Array<Model.DivisionModel>;
        ModelDropDown1: Array<Model.ModelDDModel>
        ModelDropDown: Array<Model.ModelDDModel>
        ProductDropDown: Array<Model.ProductddlModel>
    }
    class ManagerDashboardController implements IManagerDashboardController {
       
        getManagerLeadCount = null;
        getManagerOppCount = null;
        ModelDropDown1 = null;
        ModelDropDown = null;
        LeadList = null;
        OppList = null;
        ChannelPie = null;
        AllLeadChannel = null;
        SourcePie = null;
        counted = null;
        LeadTypeDropDown = null;
        DivisionDropDown = null;
        ProductDropDown = null;
        RoleID = null;
        UserID = null;
        private Cookie: any = null;
        private ManLeadCountService: Service.IManagerLeadsCountService;
        private ManOppCountService: Service.IManagerOpportunityCountService;
        private LeadListservice: Service.IManagerLeadDelayedListService;
        private OppListservice: Service.IManagerTopOpportunityListService;
        //private ChannelPieservice: Service.IChannelPiechartListManagerService;
        //private SourcePieservice: Service.ISourcePiechartListManagerService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService;

        private LeadTypeService: Service.ILeadTypeddService;
        private DivisionService: Service.IDivisionService;
        private ChannelPieservice: Service.IChannelPiechartListService;
        private SourcePieservice: Service.ISourcePiechartListService;

        static $inject = ["ManagerLeadsCountService", "ManagerOpportunityCountService", "ManagerLeadDelayedListService", "ManagerTopOpportunityListService",
            "ProductddService", "LeadTypeProductService", "LeadTypeddService", "DivisionService", "ChannelPiechartListService", "SourcePiechartListService", "$cookieStore"];



        //constructor define with Serivce _Name:Service.IServiceName//
        constructor( _ManLeadCountService: Service.IManagerLeadsCountService, _ManOppCountService: Service.IManagerOpportunityCountService, _LeadListservice: Service.IManagerLeadDelayedListService,
            _OppListservice: Service.IManagerTopOpportunityListService, _ProductService: Service.IProductddService, _ModelService: Service.ILeadTypeProductService, _LeadTypeService: Service.ILeadTypeddService,
            _DivisionService: Service.IDivisionService, _ChannelPieservice: Service.IChannelPiechartListService, _SourcePieservice: Service.ISourcePiechartListService,
           private _cookieStore: any) {
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

        $onInit() {
            let that = this;
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
                })
            }
            console.log("Activate..");
        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }
        
        //Page Load Define Values//
        Init(): void {
            this.counted = 0;
            var n = new Date();
            var y = n.getFullYear();
            //var m = n.getMonth() + 1;
            var d = n.getDate();
            (<HTMLInputElement>document.getElementById("date")).innerHTML = "" + y;
            $('#date').val(y);
            (<HTMLInputElement>document.getElementById("date1")).innerHTML = "" + y;
            $('#date1').val(y);

           
            var n = new Date();
            n.setDate(n.getDate() - 7);
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m = months[n.getMonth()];
            var d = n.getDate();
            var y = n.getFullYear();
            (<HTMLInputElement>document.getElementById("txtFromDate")).innerHTML = d + "-" + m + "-" + y;
            $('#txtFromDate').val(d + "-" + m + "-" + y);
            (<HTMLInputElement>document.getElementById("txtFromDate")).value;
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
            (<HTMLInputElement>document.getElementById("txtToDate")).innerHTML = d1 + "-" + m1 + "-" + y1;
            $('#txtToDate').val(d1 + "-" + m1 + "-" + y1);
            (<HTMLInputElement>document.getElementById("txtToDate")).value;
            $("#txtToDate").datepicker({
                dateFormat: 'dd M yy',
                changeMonth: true,
                changeYear: true,
                onSelect: this.selectToDate
            });

            this.getManagerLeadCount = this.ManLeadCountService.FindGrid().then((response => {

                this.getManagerLeadCount = this.ManLeadCountService.GetLeadsCountGrid(response.data.Result);

            }));

            this.getManagerOppCount = this.ManOppCountService.FindGrid().then((response => {

                this.getManagerOppCount = this.ManOppCountService.GetOpportunityCountGrid(response.data.Result);

            }));
            this.LeadList = this.LeadListservice.Find().then((response => {
                this.LeadList = this.LeadListservice.GetDelayList(response.data.Result);

            }));
            this.OppList = this.OppListservice.Find().then((response => {
                this.OppList = this.OppListservice.GetOppList(response.data.Result);

            }));
            //this.DivisionDropDown = this.DivisionService.Find().then((response => {
            //    this.DivisionDropDown = this.DivisionService.GetDivision(response.data.Result);

            //}));
            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));
            
            this.AllLeadChannel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllLeadChannel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.ChannelPieservice.Find(this.AllLeadChannel).then((response => {

                this.ChannelPie = this.ChannelPieservice.GetChannelPie(response.data.Result);
                
                this.ChannelChart();

            }));


            this.SourcePieservice.Find(this.AllLeadChannel).then((response => {

                this.SourcePie = this.SourcePieservice.GetSourcePie(response.data.Result);

                this.SourceChart();

            }));
        }
        chan = null;
        private ChannelChart() {
            
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
            }

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

            var country = <HTMLCanvasElement>document.getElementById("ChannelpieContainer" + this.counted);
            var demo = country.getContext('2d');
            var chan = new Chart(demo).Pie(pieData, pieOptions);
            
            /* Pie chart code ended */

        }
        char = null;
        private SourceChart() {
            var ch1Container = document.getElementById("c2-detail");
            var ch1List1 = document.getElementsByClassName("ch-list-2");
            var chColor1 = document.getElementsByClassName("chart-label-color-2");
            var chLabel1 = document.getElementsByClassName("chart-label-2");
            var chVal1 = document.getElementsByClassName("chart-value-2")
            var c1idContainer = document.getElementById("c1-id-container");;

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

            }

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

           
            var countries = <HTMLCanvasElement>document.getElementById("SourcepieContainer" + this.counted);
            var demo1 = countries.getContext('2d');
            var char = new Chart(demo1).Pie(pieData1, pieOptions1);
            
            /* Pie chart code ended */

        }

        Division(): void {

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);

            }));
        }
       
        Model1(): void {
            debugger;
            this.AllLeadChannel.ID = this.LeadTypeDropDown[0].ID;
            this.ModelDropDown1 = this.ModelService.Find(this.AllLeadChannel).then((response => {
                this.ModelDropDown1 = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }

        
        Product(): void {
            debugger;
            this.ProductDropDown = this.ProductService.Find(this.AllLeadChannel.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
            }));
        }
        
        Search(): void {
            this.AllLeadChannel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllLeadChannel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.ChannelPieservice.Find(this.AllLeadChannel).then((response => {
                this.ChannelPie = this.ChannelPieservice.GetChannelPie(response.data.Result);
                this.ChannelChart();
            }));

            this.SourcePieservice.Find(this.AllLeadChannel).then((response => {

                this.SourcePie = this.SourcePieservice.GetSourcePie(response.data.Result);
                console.log(this.SourcePie);
                this.SourceChart();
            }));

        }
        
        ClearChannel() {
            this.AllLeadChannel.LeadTypeID = "";
            this.AllLeadChannel.DivisionID = "";
            this.AllLeadChannel.ModelID = "";
            this.AllLeadChannel.ProductID = "";
            this.ChannelPie = "";
            this.SourcePie = "";
            //(<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
            //(<HTMLInputElement>document.getElementById("txtToDate")).value = "";
        }

    }
    class ManagerDashboardComponentController implements ng.IComponentOptions {
        static Name: string = "managerdashboardcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ManagerDashboardController;
            this.templateUrl = "/Scripts/App/ManagerDashboard/Template/ManagerDashboard.html";
        }
    }
    app.AddComponent(ManagerDashboardComponentController.Name, new ManagerDashboardComponentController());

}