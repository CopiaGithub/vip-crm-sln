namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import ProjectSearchReport = GCPL.Model.ProjectHeaderReportmodel;

    interface IProjectTrackerListController {
        ProjectListSearch: ProjectSearchReport;
        ProjectListReport: Array<Model.ProjectGridListReportModel>
        ZoneDD: Array<Model.ZoneDDModel>
        ProjectSourceDD: Array<Model.GetProjectSourceModel>;
        ProjectStageDD: Array<Model.GetProjectStageDDModel>;
    }



    class ProjectTrackerListController implements IProjectTrackerListController {
        UserID = null;
        RoleID = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        ProjectListReport = null;
        ProjectListSearch = null;
        ProjectTypeDD = null;
        ZoneDD = null;
        ProjectStageDD = null;
        ProjectSourceDD = null;
        private ProjectListReportService: Service.IProjectListReportService;
        private getAutoProjectName: Service.IgetAutoProjectNameService;
        private getAutoProjectNO: Service.IgetAutoProjectNOService;
        private ProjectTypeService: Service.IProjectTypeService;
        private ZoneDDService: Service.IZoneDDService;
        private ProjectStageService: Service.IProjectStageService;
        private ProjectSourceService: Service.IProjectSourceService;
        private Cookie: any = null;
        static $inject = ["ProjectListReportService", "getAutoProjectNameService", "getAutoProjectNOService", "ProjectTypeService", "ZoneDDService", "ProjectStageService","ProjectSourceService","$cookieStore"];

        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_ProjectListReportService: Service.IProjectListReportService, _getAutoProjectName: Service.IgetAutoProjectNameService, _getAutoProjectNO: Service.IgetAutoProjectNOService, _ProjectType: Service.IProjectTypeService, _ZoneDDService: Service.IZoneDDService, _ProjectStageService: Service.IProjectStageService, _ProjectSourceService: Service.IProjectSourceService, private _cookieStore: any) {
            this.ProjectListReportService = _ProjectListReportService;
            this.getAutoProjectName = _getAutoProjectName;
            this.getAutoProjectNO = _getAutoProjectNO;
            this.ProjectTypeService = _ProjectType;
            this.ZoneDDService = _ZoneDDService;
            this.ProjectStageService = _ProjectStageService;
            this.ProjectSourceService = _ProjectSourceService;
            this.ProjectListSearch = new GCPL.Model.ProjectHeaderReportmodel();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
        }

        $onInit() {
            this.Init();
        }

        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }

        //Page Load Define Values//
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
                    that.ProjectListSearch.ProjectID = ui.item.id;
                },
                change: function () {

                }
            });

            $("#txtProjectNo").autocomplete({
                source: function (request, res) {
                    that.getAutoProjectNO.FilterProjNo(request).then((response => {
                        let data = that.getAutoProjectNO.GetAutProjNo(response.data.Result);
                        debugger;
                        res($.map(data, function (item, index) {
                            return {
                                label: item.ProjectNo,
                                value: item.ProjectNo,
                                id: item.ID
                            }
                        }));
                    }));
                },
                minLength: 2,
                focus: (event, ui) => {
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.ProjectListSearch.ID = ui.item.id;
                },
                change: function () {

                }
            });

            this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((response => {
                this.ProjectTypeDD = this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
            }));

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));

            this.ProjectStageDD = this.ProjectStageService.FindDD().then((response => {
                this.ProjectStageDD = this.ProjectStageService.GetProjectStageDD(response.data.Result);
            }));

            this.ProjectSourceDD = this.ProjectSourceService.Find().then((response => {
                this.ProjectSourceDD = this.ProjectSourceService.GetProjectSource(response.data.Result);
            }));
        }

        Refresh() {
            this.FillGrid(this.NoOfRds);
        }


        SearchProject(): void {
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }

        FillGrid(NoOfRecords): void {
            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            debugger;
            this.ProjectListSearch.ProjectType = this.ProjectListSearch.ProjectType;
            this.ProjectListSearch.ID = this.ProjectListSearch.ID;
            this.ProjectListSearch.ProjectStartDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.ProjectListSearch.CompletionDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.ProjectListReport = this.ProjectListReportService.Find(this.ProjectListSearch).then((response => {
                this.ProjectListReport = this.ProjectListReportService.GetProjectList(response.data.Result);
                $('#page-loader').hide();
                $('#search-btn-loader').hide();

                if (this.ProjectListReport.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.ProjectListReport.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.ProjectListReport);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.ProjectListReport.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.ProjectListReport.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.ProjectListReport.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.ProjectListReport);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.ProjectListReport.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.ProjectListReport.slice(begin, end);
            if (this.page + 1 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.ProjectListReport.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {
            this.ProjectListSearch.ProjectType = "";
            this.ProjectListSearch.ID = "";
            this.ProjectListSearch.ProjectID = "";
            this.ProjectListSearch.ZoneID = "";
            this.ProjectListSearch.ProjectStage = "";
            this.ProjectListSearch.ProjectSource = "";
            (<HTMLInputElement>document.getElementById("txtProjectNo")).value = "";
            (<HTMLInputElement>document.getElementById("txtProjectName")).value = "";
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
            (<HTMLInputElement>document.getElementById("txtToDate")).value = "";
        }

        downloadCSV(csv, filename) {
            var csvFile;
            var downloadLink;
            // CSV file
            csvFile = new Blob([csv], { type: "text/csv" });
            // Download link
            downloadLink = document.createElement("a");
            // File name
            downloadLink.download = filename;
            // Create a link to the file
            downloadLink.href = window.URL.createObjectURL(csvFile);
            // Hide download link
            downloadLink.style.display = "none";
            // Add the link to DOM
            document.body.appendChild(downloadLink);
            // Click download link
            downloadLink.click();
        }

        exportTableToCSV(filename) {
            debugger;
            var csv = [];
            var rows = document.querySelectorAll("#excelDownload tr");
            for (var i = 0; i < rows.length; i++) {
                var row = [], cols = rows[i].querySelectorAll("td, th");
                for (var j = 0; j < cols.length; j++)
                    row.push('"' + cols[j].innerHTML + '"');
                csv.push(row.join(","));

            }
            // Download CSV file
            this.downloadCSV(csv.join("\n"), filename);
        }

    }
    class ProjectTrackerListComponentController implements ng.IComponentOptions {
        static Name: string = "projecttrackerlist"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ProjectTrackerListController;
            this.templateUrl = "/Scripts/App/ProjectTrackerList/Template/ProjectTrackerList.html";
        }
    }
    app.AddComponent(ProjectTrackerListComponentController.Name, new ProjectTrackerListComponentController());

}