
///// <reference path="../../../typings/chartjs/chart.d.ts" />

namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import FavInsert1 = GCPL.Model.IFavModel;
    import LeadCountList = GCPL.Model.LeadStatusModel;
    import OpportunityCountList = GCPL.Model.OppStatusModel;
    import ChannelSearch = GCPL.Model.LeadChannelSearchModel;
    
    import LeadDelayList = GCPL.Model.LeadDelaylistModel;
    import OpportunityList = GCPL.Model.OpplistModel;
    import Channel = GCPL.Model.ChannelPie1Model;
    import Source = GCPL.Model.ChannelPie1Model;


    interface IHomeComponentController {
        //reviews: Array<any>;
        plandata: Array<Model.IHomeModel>;
        Favdata: Array<Model.IHomeModel>;
        FavInsert: FavInsert1;
        getAllLeadCount: Array<Model.LeadStatusModel>;
        OppCount: Array<Model.OppStatusModel>;
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>;
        DivisionDropDown: Array<Model.DivisionModel>        
        ModelDropDown1: Array<Model.ModelDDModel>       
        AllLeadChannel: ChannelSearch;        
        LeadList: Array<Model.LeadDelaylistModel>;
        OppList: Array<Model.OpplistModel>;
        Search(): void;       
        ChannelPie: Array<Model.ChannelPie1Model>;
        SourcePie: Array<Model.ChannelPie1Model>;
        ProductDropDown: Array<Model.ProductddlModel>
        
    }

    class HomeComponentController implements IHomeComponentController {
        //reviews = [];
        plandata = null;
        Favdata = null;
        RoleID = null;
        DealerID = null;
        BusinessEntityID = null;
       
        UserID = null;
        FavInsert: GCPL.Model.IFavModel = null;
        getAllLeadCount = null; 
        OppCount = null; 
        LeadTypeDropDown = null;
        DivisionDropDown = null;                
        ModelDropDown1 = null;
        AllLeadChannel = null;
        //AllLeadSource = null;
        counted = null;
        LeadList = null;
        OppList = null;
        ChannelSearch = null;
        ChannelPie = null;
        SourcePie = null;
        ProductDropDown = null;
       
        private Cookie: any = null;
        private BaseHomeService: Service.IBaseHomeService;
        private AllLeadCountService: Service.ILeadsCountService;
        private AllOpportunityCountService: Service.IOpportunityCountService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService;

        private LeadTypeService: Service.ILeadTypeddService;
        private DivisionService: Service.IDivisionService;
        private LeadListservice: Service.ILeadDelayedListService;
        private OppListservice: Service.ITopOpportunityListService;
        private ChannelPieservice: Service.IChannelPiechartListService;
        private SourcePieservice: Service.ISourcePiechartListService;

        static $inject = ["BaseHomeService", "LeadsCountService", "OpportunityCountService", "ProductddService", "LeadTypeProductService", "LeadTypeddService", "DivisionService",
            "LeadDelayedListService", "TopOpportunityListService",
            "ChannelPiechartListService", "SourcePiechartListService", "$cookieStore"];

        constructor( _BaseHomeService: Service.IBaseHomeService, _AllLeadCountService: Service.ILeadsCountService, _AllOpportunityCountService: Service.IOpportunityCountService, _ProductService: Service.IProductddService,
            _ModelService: Service.ILeadTypeProductService, _LeadTypeService: Service.ILeadTypeddService, _DivisionService: Service.IDivisionService, _LeadListservice: Service.ILeadDelayedListService, _OppListservice: Service.ITopOpportunityListService,
            _ChannelPieservice: Service.IChannelPiechartListService, _SourcePieservice: Service.ISourcePiechartListService, private _cookieStore: any) {

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
            })

            secondSettingBtn.addEventListener("click", function () {
                secondSettingMenu.classList.toggle("settings-menu-remove");
                settingMenu.classList.remove("settings-menu-remove");
            })
        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }
        //selectFromDate1(e) {
        //    (<HTMLInputElement>document.getElementById("txtFromDate1")).value = e;
        //}
        //selectToDate1(e) {
        //    (<HTMLInputElement>document.getElementById("txtToDate1")).value = e;
        //}


        Init(): void {
            this.counted = 0;
            var n = new Date();
            var y = n.getFullYear();
            //var m2 = n.getMonth() + 1;
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

            
            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));
            this.getAllLeadCount = this.AllLeadCountService.FindGrid().then((response => {

                this.getAllLeadCount = this.AllLeadCountService.GetLeadsCountGrid(response.data.Result);

            }));
           
            this.OppCount = this.AllOpportunityCountService.FindGrid().then((response => {

                this.OppCount = this.AllOpportunityCountService.GetOppCountGrid(response.data.Result);

            }));

            this.LeadList = this.LeadListservice.Find().then((response => {
                this.LeadList = this.LeadListservice.GetDelayList(response.data.Result);
               
            }));
            this.OppList = this.OppListservice.Find().then((response => {
                this.OppList = this.OppListservice.GetOppList(response.data.Result);

            }));
            this.plandata = this.BaseHomeService.Find(this.BusinessEntityID, this.RoleID).then((response => {
                this.plandata = this.BaseHomeService.Get(response.data.Result);


                //if (response.data.Result == true) {
                //    $('#divvendor').show();
                //}

                //else {
                //    $('#divvendor').hide();
                //}

            }));


            this.Favdata = this.BaseHomeService.FindFav(this.DealerID).then((response => {
                this.Favdata = this.BaseHomeService.GetFav(response.data.Result);


                //if (response.data.Result == true) {
                //    $('#divvendor').show();
                //}

                //else {
                //    $('#divvendor').hide();
                //}

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
        /* Bar Chart Code Started */
        chan = null;
        private ChannelChart() {
            
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
            /* Pie chart code started */
            var ch1Container = document.getElementById("c2-detail");
            var lCount = document.getElementById("l-count");
            var ch1List1 = document.getElementsByClassName("ch-list-2");
            var chColor1 = document.getElementsByClassName("chart-label-color-2");
            var chLabel1 = document.getElementsByClassName("chart-label-2");
            var chVal1 = document.getElementsByClassName("chart-value-2");
            var c1idContainer = document.getElementById("c3-id-container");;
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

        Model1(): void {
            debugger;
            this.AllLeadChannel.ID = this.LeadTypeDropDown[0].ID;
            this.ModelDropDown1 = this.ModelService.Find(this.AllLeadChannel).then((response => {
                this.ModelDropDown1 = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }
        Division(): void {

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);

            }));
        }
        //Division1(): void {

        //    this.DivisionDropDown1 = this.DivisionService.Find().then((response => {
        //        this.DivisionDropDown1 = this.DivisionService.GetDivisionName(response.data.Result);

        //    }));
        //}
        Product(): void {
            debugger;
            this.ProductDropDown = this.ProductService.Find(this.AllLeadChannel.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
            }));
        }
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
      
        InsertFav() {


            for (var i = 0; i < this.Favdata.length; i++) {

                this.FavInsert.AccessModuleName = this.Favdata[i].Title;
            }

            this.FavInsert.DealerID = this.DealerID;
            this.FavInsert.status = 'Remove';
            this.Favdata = this.BaseHomeService.InsertTran(this.FavInsert).then(response => {

                if (response.data.Result == true) {

                    alert("Successfully Remove from Favourite List");

                }
                else {

                    alert("Oops....!!");

                }

            });
        }
    }

    
    class HomeComponent implements ng.IComponentOptions {
        static Name: string = "homeComponent"

        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;

        constructor() {
            this.controller = HomeComponentController;
            this.templateUrl = "/Scripts/App/Home/Template/home.html";
        }
    }

    app.AddComponent(HomeComponent.Name, new HomeComponent());
}