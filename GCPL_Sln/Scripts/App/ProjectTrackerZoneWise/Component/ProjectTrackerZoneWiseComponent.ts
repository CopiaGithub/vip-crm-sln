namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import ProjectSearch = GCPL.Model.ProjectHeadermodel;
    import DashboardSearch = GCPL.Model.DashBoardSearch;
    interface IProjectTrackerZoneWiseController {
        ProjectTypeDD: Array<Model.GetProjectTypeDDModel>;
        CustProjectTypeDD: Array<Model.GetCustProjectTypeDDModel>;
        ProjectListSearch: ProjectSearch;
        ZoneDD: Array<Model.ZoneDDModel>
        ProjectStageDD: Array<Model.GetProjectStageDDModel>;
        ProjectSourceDD: Array<Model.GetProjectSourceModel>;
        ProjectIndustryDD: Array<Model.GetIndustryDDModel>;
        UserMasterDropDown: Array<Model.UserMasterddlModel>;
        ProjectDashboardSearch: DashboardSearch;
    }
    class ProjectTrackerZoneWiseController implements IProjectTrackerZoneWiseController {
        ProjectAssignDropdownList = [];
        ProjectDashboardData: any;
        ProjectListSearch = null;
        CustProjectTypeDD = null;
        ProjectTypeDD = null;
        ZoneDD = null;
        ProjectStageDD = null;
        ProjectSourceDD = null;
        ProjectIndustryDD = null;
        ProjectDashboardSearch = null;
        ModelGraphData: any;
        LeadStatusGraphData: any;
        OpportunityGraphData: any;
        DivisionGraphData: any;
        ProjectTypeGraphData: any;
        ProjectSourceGraphData: any;
        ProjectIndustryGraphData: any;
        ProjectStageGraphData: any;
        ProjectZoneGraphData: any;
        ProjectAssignToGraphData: any;
        OppEquipmentQuantityGraphData: any;
        counted: number = 0;
        UserMasterDropDown = null;
        Divisionchk: boolean = false;
        Equipmentchk: boolean = false;
        Leadchk: boolean = false;
        Opportunitychk: boolean = false;
        ProjectZonechk: boolean = false;
        ProjectSaleschk: boolean = false;

        private getAutoProjectName: Service.IgetAutoProjectNameService;
        private ZoneDDService: Service.IZoneDDService;
        private ProjectStageService: Service.IProjectStageService;
        private ProjectSourceService: Service.IProjectSourceService;
        private ProjectIndustryService: Service.IProjectIndustryService;
        private ProjectTypeService: Service.IProjectTypeService;
        private CustProjectTypeService: Service.ICustProjectTypeService;
        private ProjectTrackerDashboardService: Service.IProjectTrackerDashboardService;
        private MultipleUserMasterService: Service.IMultipleUserMasterService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
        private Cookie: any = null;

        static $inject = ["getAutoProjectNameService", "ZoneDDService", "ProjectStageService",
            "ProjectSourceService", "ProjectIndustryService", "ProjectTypeService",
            "CustProjectTypeService", "$cookieStore", "ProjectTrackerDashboardService",
            "MultipleUserMasterService", "EmployeeAtofillService"];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_getAutoProjectName: Service.IgetAutoProjectNameService, _ZoneDDService: Service.IZoneDDService,
            _ProjectStageService: Service.IProjectStageService, _ProjectSourceService: Service.IProjectSourceService,
            _ProjectIndustryService: Service.IProjectIndustryService, _ProjectType: Service.IProjectTypeService,
            _CustProjectTypeService: Service.ICustProjectTypeService, private _cookieStore: any,
            _ProjectTrackerDashboardService: Service.IProjectTrackerDashboardService,
            _MultipleUserMasterService: Service.IMultipleUserMasterService,
            _getAutoSalesrep1: Service.IEmployeeAtofillService) {

            this.getAutoProjectName = _getAutoProjectName;
            this.ZoneDDService = _ZoneDDService;
            this.ProjectStageService = _ProjectStageService;
            this.ProjectSourceService = _ProjectSourceService;
            this.ProjectIndustryService = _ProjectIndustryService;
            this.ProjectTrackerDashboardService = _ProjectTrackerDashboardService;
            this.ProjectDashboardSearch = new DashboardSearch();
            this.CustProjectTypeService = _CustProjectTypeService;
            this.MultipleUserMasterService = _MultipleUserMasterService;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.ProjectTypeService = _ProjectType;
            this.Cookie = _cookieStore;
        }

        $onInit() {
            this.Init();
            this.ProjectAssignDropdownList = [];
            $(".date-pick").datepicker();
        }

        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }

        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }

        Init(): void {
            $("#txtFromDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectFromDate
            });

            $("#txtToDate").datepicker({
                dateFormat: 'dd M yy',
                changeMonth: true,
                changeYear: true,
                onSelect: this.selectToDate
            });

            let that = this;
            this.counted = 0;
            $("#txtProjectName").autocomplete({
                source: function (request, res) {
                    that.getAutoProjectName.FilterAutoComplete(request).then((response => {
                        let data = that.getAutoProjectName.GetAutProjName(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.ProjectName,
                                value: item.ProjectName,
                                id: item.ProjectID
                            }
                        }));
                    }));
                },
                minLength: 2,
                focus: (event, ui) => {
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.ProjectDashboardSearch.ProjectID = ui.item.id;
                },
                change: function () {

                }
            });
            $("#txtProjectAssign").autocomplete({
                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {
                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.Name,
                                value: item.Name,
                                id: item.userid
                            }
                        }));
                    }));
                },
                minLength: 2,
                focus: (event, ui) => {
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.ProjectDashboardSearch.ProjectAssign = ui.item.id;
                },
                change: function () {

                }
            });

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));

            this.ProjectStageDD = this.ProjectStageService.FindDD().then((response => {
                this.ProjectStageDD = this.ProjectStageService.GetProjectStageDD(response.data.Result);
            }));

            this.ProjectSourceDD = this.ProjectSourceService.Find().then((response => {
                this.ProjectSourceDD = this.ProjectSourceService.GetProjectSource(response.data.Result);
            }));

            this.ProjectIndustryDD = this.ProjectIndustryService.Find().then((response => {
                this.ProjectIndustryDD = this.ProjectIndustryService.GetIndustry(response.data.Result);
            }));

            this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((response => {
                this.ProjectTypeDD = this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
            }));

            this.CustProjectTypeDD = this.CustProjectTypeService.FindCustProjectTypeDD().then((response => {
                this.CustProjectTypeDD = this.CustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
            }));
        }
        ProjectAssign(): void {
            this.UserMasterDropDown = this.MultipleUserMasterService.Find(this.ProjectDashboardSearch.ZoneID).then((response => {
                this.UserMasterDropDown = this.MultipleUserMasterService.GetUserName(response.data.Result);
            }));
        }

        addUser(abc: string, abc_name: string, checkUser): void {
            debugger;
            if (checkUser == true) {
                this.ProjectAssignDropdownList.push({ userID: abc, userName: abc_name });
            } else {
                for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                    if (abc == this.ProjectAssignDropdownList[i].userID) {
                        this.ProjectAssignDropdownList.splice(i, 1);
                    }
                }
            }
        }

        Search(): void {
            debugger;
            //this.ProjectDashboardSearch.ProjectStartDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            //this.ProjectDashboardSearch.CompletionDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            var ProjectAssignArray = [];
            for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                ProjectAssignArray.push(this.ProjectAssignDropdownList[i].userID);
            }
            this.ProjectDashboardSearch.ProjectAssignID = ProjectAssignArray.toString();
            this.ProjectAssign();
            this.ProjectTrackerDashboardService.Find(this.ProjectDashboardSearch, "2").then((response => {
                debugger;
                this.ModelGraphData = this.ProjectTrackerDashboardService.GetModelData(response.data.Result.ModelProjectList);
                this.LeadStatusGraphData = this.ProjectTrackerDashboardService.GetLeadStatusData(response.data.Result.LeadStatusProjectList);
                this.DivisionGraphData = this.ProjectTrackerDashboardService.GetDivisionData(response.data.Result.DivisionProjectList);
                this.OpportunityGraphData = this.ProjectTrackerDashboardService.GetOpportunityData(response.data.Result.OpportunityProjectList);
                this.ProjectTypeGraphData = this.ProjectTrackerDashboardService.GetProjectTypeData(response.data.Result.TypeList);
                this.ProjectSourceGraphData = this.ProjectTrackerDashboardService.GetProjectSourceData(response.data.Result.SourceList);
                this.ProjectIndustryGraphData = this.ProjectTrackerDashboardService.GetProjectIndustryData(response.data.Result.IndustryList);
                this.ProjectStageGraphData = this.ProjectTrackerDashboardService.GetProjectStageData(response.data.Result.StageList);
                this.ProjectZoneGraphData = this.ProjectTrackerDashboardService.GetProjectZoneData(response.data.Result.ZoneList);
                this.ProjectAssignToGraphData = this.ProjectTrackerDashboardService.GetProjectAssignToData(response.data.Result.AssignToList);
                this.OppEquipmentQuantityGraphData = this.ProjectTrackerDashboardService.GetOppEquipmentQuantityData(response.data.Result.OppModelList);
                debugger;
                this.ModelDataDrawGraph(this.ModelGraphData);
                this.LeadStatusDataDrawGraph(this.LeadStatusGraphData);
                this.DivisionDataDrawGraph(this.DivisionGraphData);
                this.OpportunityDataDrawGraph(this.OpportunityGraphData);
                this.TypeDataDrawGraph(this.ProjectTypeGraphData);
                this.SourceDataDrawGraph(this.ProjectSourceGraphData);
                this.IndustryDataDrawGraph(this.ProjectIndustryGraphData);
                this.StageDataDrawGraph(this.ProjectStageGraphData);
                this.ZoneDataDrawGraph(this.ProjectZoneGraphData);
                this.AssignToDataDrawGraph(this.ProjectAssignToGraphData);
                this.OppEquipmentQuantityDataDrawGraph(this.OppEquipmentQuantityGraphData);

            }))
        }

        
        ModelDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c1-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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
                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var eqipmentIDContainer = document.getElementById("equipment-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "equipment-population" + this.counted);
            cpcCanvas.setAttribute("class", "equipment-class");

            cpcCanvas.style.width = "500px";
            eqipmentIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("equipment-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("equipment-population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
        }

        LeadStatusDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }
            var chContainer = document.getElementById("c2-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var LeadIDContainer = document.getElementById("lead-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "lead-population" + this.counted);
            cpcCanvas.setAttribute("class", "lead-class");

            cpcCanvas.style.width = "500px";
            LeadIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("lead-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("lead-population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
        }

        OpportunityDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }
            var chContainer = document.getElementById("c3-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var opportunityIDContainer = document.getElementById("Opportunity-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "opportunity-population" + this.counted);
            cpcCanvas.setAttribute("class", "opportunity-class");

            cpcCanvas.style.width = "500px";
            opportunityIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("opportunity-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("opportunity-population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
        }

        DivisionDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c4-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var divisionIDContainer = document.getElementById("division-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "won-opportunities" + this.counted);
            cpcCanvas.setAttribute("class", "division-class");

            cpcCanvas.style.width = "500px";
            divisionIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("division-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("won-opportunities" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);


        }

        TypeDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c5-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var divisionIDContainer = document.getElementById("Type-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "Type-Population" + this.counted);
            cpcCanvas.setAttribute("class", "Type-class");

            cpcCanvas.style.width = "500px";
            divisionIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("Type-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("Type-Population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);


        }

        SourceDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c6-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var divisionIDContainer = document.getElementById("Source-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "source-Population" + this.counted);
            cpcCanvas.setAttribute("class", "source-class");

            cpcCanvas.style.width = "500px";
            divisionIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("source-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("source-Population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);


        }

        IndustryDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c7-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var divisionIDContainer = document.getElementById("Industry-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "industry-Population" + this.counted);
            cpcCanvas.setAttribute("class", "industry-class");

            cpcCanvas.style.width = "500px";
            divisionIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("industry-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("industry-Population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);


        }

        StageDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c8-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var divisionIDContainer = document.getElementById("stage-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "stage-Population" + this.counted);
            cpcCanvas.setAttribute("class", "stage-class");

            cpcCanvas.style.width = "500px";
            divisionIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("stage-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("stage-Population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);


        }

        ZoneDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c9-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var divisionIDContainer = document.getElementById("zone-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "zone-Population" + this.counted);
            cpcCanvas.setAttribute("class", "zone-class");

            cpcCanvas.style.width = "500px";
            divisionIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("zone-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("zone-Population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);


        }

        AssignToDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c10-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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

                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var divisionIDContainer = document.getElementById("assignto-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "assignto-Population" + this.counted);
            cpcCanvas.setAttribute("class", "assignto-class");

            cpcCanvas.style.width = "500px";
            divisionIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("assignto-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("assignto-Population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);


        }

        OppEquipmentQuantityDataDrawGraph(arrayData: any): void {
            debugger;
            var pieData = arrayData;
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true,
                legendTemplate: "run"
            }

            var chContainer = document.getElementById("c20-detail");
            chContainer.innerHTML = "";
            for (var i = 0; i < pieData.length; i++) {
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
                var chartValNode = document.createTextNode(pieData[i].value.toString());
                chartVal.appendChild(chartValNode);
                var chartLabelNode = document.createTextNode(pieData[i].label.toString());
                chartLabel.classList.add("chart-label");
                chartLabel.classList.add("chart-label-1");
                chartLabel.appendChild(chartLabelNode);
                chartColor.style.background = pieData[i].color.toString();
                chContainerList.appendChild(chartColor);
                chContainerList.appendChild(chartLabel);
                chContainerList.appendChild(chartVal);
                chContainer.appendChild(chContainerList);
            }

            var OppEquipmentQuantityIDContainer = document.getElementById("OppEquipmentQuantity-graph-container");
            this.counted = this.counted + 1;
            var cpcCanvas = document.createElement("canvas");
            cpcCanvas.setAttribute("id", "OppEquipmentQuantity-population" + this.counted);
            cpcCanvas.setAttribute("class", "OppEquipmentQuantity-class");

            cpcCanvas.style.width = "500px";
            OppEquipmentQuantityIDContainer.appendChild(cpcCanvas);

            var sourceClass = document.getElementsByClassName("OppEquipmentQuantity-class");

            for (var i = 0; i <= sourceClass.length - 2; i++) {
                sourceClass[i].classList.add('input-hide');
            }
            var Equipment = <HTMLCanvasElement>document.getElementById("OppEquipmentQuantity-population" + this.counted);
            var EquipmentPopulation = Equipment.getContext("2d");
            new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
        }


        Clear() {
            this.ProjectDashboardSearch.ProjectType = "";
            this.ProjectDashboardSearch.ProjectID = "";
            this.ProjectDashboardSearch.ProjectStage = "";
            this.ProjectDashboardSearch.ProjectSource = "";
            this.ProjectDashboardSearch.CustProjectType = "";
            this.ProjectDashboardSearch.Industry = "";
            this.ProjectDashboardSearch.ZoneID = "";

            (<HTMLInputElement>document.getElementById("txtProjectName")).value = "";
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
            (<HTMLInputElement>document.getElementById("txtToDate")).value = "";
        }

    }

    class ProjectTrackerZoneWiseComponentController implements ng.IComponentOptions {
        static Name: string = "projecttrackerzonewisecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ProjectTrackerZoneWiseController;
            this.templateUrl = "/Scripts/App/ProjectTrackerZoneWise/Template/ProjectTrackerZoneWise.html";
        }
    }
    app.AddComponent(ProjectTrackerZoneWiseComponentController.Name, new ProjectTrackerZoneWiseComponentController());

}