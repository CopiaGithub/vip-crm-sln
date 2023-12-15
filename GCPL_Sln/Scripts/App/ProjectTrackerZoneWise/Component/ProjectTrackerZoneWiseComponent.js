var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var DashboardSearch = GCPL.Model.DashBoardSearch;
            var ProjectTrackerZoneWiseController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ProjectTrackerZoneWiseController(_getAutoProjectName, _ZoneDDService, _ProjectStageService, _ProjectSourceService, _ProjectIndustryService, _ProjectType, _CustProjectTypeService, _cookieStore, _ProjectTrackerDashboardService, _MultipleUserMasterService, _getAutoSalesrep1) {
                    this._cookieStore = _cookieStore;
                    this.ProjectAssignDropdownList = [];
                    this.ProjectListSearch = null;
                    this.CustProjectTypeDD = null;
                    this.ProjectTypeDD = null;
                    this.ZoneDD = null;
                    this.ProjectStageDD = null;
                    this.ProjectSourceDD = null;
                    this.ProjectIndustryDD = null;
                    this.ProjectDashboardSearch = null;
                    this.counted = 0;
                    this.UserMasterDropDown = null;
                    this.Divisionchk = false;
                    this.Equipmentchk = false;
                    this.Leadchk = false;
                    this.Opportunitychk = false;
                    this.ProjectZonechk = false;
                    this.ProjectSaleschk = false;
                    this.Cookie = null;
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
                ProjectTrackerZoneWiseController.prototype.$onInit = function () {
                    this.Init();
                    this.ProjectAssignDropdownList = [];
                    $(".date-pick").datepicker();
                };
                ProjectTrackerZoneWiseController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                ProjectTrackerZoneWiseController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                ProjectTrackerZoneWiseController.prototype.Init = function () {
                    var _this = this;
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
                    var that = this;
                    this.counted = 0;
                    $("#txtProjectName").autocomplete({
                        source: function (request, res) {
                            that.getAutoProjectName.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoProjectName.GetAutProjName(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ProjectName,
                                        value: item.ProjectName,
                                        id: item.ProjectID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
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
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value: item.Name,
                                        id: item.userid
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.ProjectDashboardSearch.ProjectAssign = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.ProjectStageDD = this.ProjectStageService.FindDD().then((function (response) {
                        _this.ProjectStageDD = _this.ProjectStageService.GetProjectStageDD(response.data.Result);
                    }));
                    this.ProjectSourceDD = this.ProjectSourceService.Find().then((function (response) {
                        _this.ProjectSourceDD = _this.ProjectSourceService.GetProjectSource(response.data.Result);
                    }));
                    this.ProjectIndustryDD = this.ProjectIndustryService.Find().then((function (response) {
                        _this.ProjectIndustryDD = _this.ProjectIndustryService.GetIndustry(response.data.Result);
                    }));
                    this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((function (response) {
                        _this.ProjectTypeDD = _this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
                    }));
                    this.CustProjectTypeDD = this.CustProjectTypeService.FindCustProjectTypeDD().then((function (response) {
                        _this.CustProjectTypeDD = _this.CustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
                    }));
                };
                ProjectTrackerZoneWiseController.prototype.ProjectAssign = function () {
                    var _this = this;
                    this.UserMasterDropDown = this.MultipleUserMasterService.Find(this.ProjectDashboardSearch.ZoneID).then((function (response) {
                        _this.UserMasterDropDown = _this.MultipleUserMasterService.GetUserName(response.data.Result);
                    }));
                };
                ProjectTrackerZoneWiseController.prototype.addUser = function (abc, abc_name, checkUser) {
                    debugger;
                    if (checkUser == true) {
                        this.ProjectAssignDropdownList.push({ userID: abc, userName: abc_name });
                    }
                    else {
                        for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                            if (abc == this.ProjectAssignDropdownList[i].userID) {
                                this.ProjectAssignDropdownList.splice(i, 1);
                            }
                        }
                    }
                };
                ProjectTrackerZoneWiseController.prototype.Search = function () {
                    var _this = this;
                    debugger;
                    //this.ProjectDashboardSearch.ProjectStartDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
                    //this.ProjectDashboardSearch.CompletionDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
                    var ProjectAssignArray = [];
                    for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                        ProjectAssignArray.push(this.ProjectAssignDropdownList[i].userID);
                    }
                    this.ProjectDashboardSearch.ProjectAssignID = ProjectAssignArray.toString();
                    this.ProjectAssign();
                    this.ProjectTrackerDashboardService.Find(this.ProjectDashboardSearch, "2").then((function (response) {
                        debugger;
                        _this.ModelGraphData = _this.ProjectTrackerDashboardService.GetModelData(response.data.Result.ModelProjectList);
                        _this.LeadStatusGraphData = _this.ProjectTrackerDashboardService.GetLeadStatusData(response.data.Result.LeadStatusProjectList);
                        _this.DivisionGraphData = _this.ProjectTrackerDashboardService.GetDivisionData(response.data.Result.DivisionProjectList);
                        _this.OpportunityGraphData = _this.ProjectTrackerDashboardService.GetOpportunityData(response.data.Result.OpportunityProjectList);
                        _this.ProjectTypeGraphData = _this.ProjectTrackerDashboardService.GetProjectTypeData(response.data.Result.TypeList);
                        _this.ProjectSourceGraphData = _this.ProjectTrackerDashboardService.GetProjectSourceData(response.data.Result.SourceList);
                        _this.ProjectIndustryGraphData = _this.ProjectTrackerDashboardService.GetProjectIndustryData(response.data.Result.IndustryList);
                        _this.ProjectStageGraphData = _this.ProjectTrackerDashboardService.GetProjectStageData(response.data.Result.StageList);
                        _this.ProjectZoneGraphData = _this.ProjectTrackerDashboardService.GetProjectZoneData(response.data.Result.ZoneList);
                        _this.ProjectAssignToGraphData = _this.ProjectTrackerDashboardService.GetProjectAssignToData(response.data.Result.AssignToList);
                        _this.OppEquipmentQuantityGraphData = _this.ProjectTrackerDashboardService.GetOppEquipmentQuantityData(response.data.Result.OppModelList);
                        debugger;
                        _this.ModelDataDrawGraph(_this.ModelGraphData);
                        _this.LeadStatusDataDrawGraph(_this.LeadStatusGraphData);
                        _this.DivisionDataDrawGraph(_this.DivisionGraphData);
                        _this.OpportunityDataDrawGraph(_this.OpportunityGraphData);
                        _this.TypeDataDrawGraph(_this.ProjectTypeGraphData);
                        _this.SourceDataDrawGraph(_this.ProjectSourceGraphData);
                        _this.IndustryDataDrawGraph(_this.ProjectIndustryGraphData);
                        _this.StageDataDrawGraph(_this.ProjectStageGraphData);
                        _this.ZoneDataDrawGraph(_this.ProjectZoneGraphData);
                        _this.AssignToDataDrawGraph(_this.ProjectAssignToGraphData);
                        _this.OppEquipmentQuantityDataDrawGraph(_this.OppEquipmentQuantityGraphData);
                    }));
                };
                ProjectTrackerZoneWiseController.prototype.ModelDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("equipment-population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.LeadStatusDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("lead-population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.OpportunityDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("opportunity-population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.DivisionDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("won-opportunities" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.TypeDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("Type-Population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.SourceDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("source-Population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.IndustryDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("industry-Population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.StageDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("stage-Population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.ZoneDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("zone-Population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.AssignToDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("assignto-Population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.OppEquipmentQuantityDataDrawGraph = function (arrayData) {
                    debugger;
                    var pieData = arrayData;
                    var pieOptions = {
                        segmentShowStroke: false,
                        animateScale: true,
                        legendTemplate: "run"
                    };
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
                    var Equipment = document.getElementById("OppEquipmentQuantity-population" + this.counted);
                    var EquipmentPopulation = Equipment.getContext("2d");
                    new Chart(EquipmentPopulation).Pie(pieData, pieOptions);
                };
                ProjectTrackerZoneWiseController.prototype.Clear = function () {
                    this.ProjectDashboardSearch.ProjectType = "";
                    this.ProjectDashboardSearch.ProjectID = "";
                    this.ProjectDashboardSearch.ProjectStage = "";
                    this.ProjectDashboardSearch.ProjectSource = "";
                    this.ProjectDashboardSearch.CustProjectType = "";
                    this.ProjectDashboardSearch.Industry = "";
                    this.ProjectDashboardSearch.ZoneID = "";
                    document.getElementById("txtProjectName").value = "";
                    document.getElementById("txtFromDate").value = "";
                    document.getElementById("txtToDate").value = "";
                };
                ProjectTrackerZoneWiseController.$inject = ["getAutoProjectNameService", "ZoneDDService", "ProjectStageService",
                    "ProjectSourceService", "ProjectIndustryService", "ProjectTypeService",
                    "CustProjectTypeService", "$cookieStore", "ProjectTrackerDashboardService",
                    "MultipleUserMasterService", "EmployeeAtofillService"];
                return ProjectTrackerZoneWiseController;
            }());
            var ProjectTrackerZoneWiseComponentController = /** @class */ (function () {
                function ProjectTrackerZoneWiseComponentController() {
                    this.controller = ProjectTrackerZoneWiseController;
                    this.templateUrl = "/Scripts/App/ProjectTrackerZoneWise/Template/ProjectTrackerZoneWise.html";
                }
                ProjectTrackerZoneWiseComponentController.Name = "projecttrackerzonewisecomponent";
                return ProjectTrackerZoneWiseComponentController;
            }());
            app.AddComponent(ProjectTrackerZoneWiseComponentController.Name, new ProjectTrackerZoneWiseComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProjectTrackerZoneWiseComponent.js.map