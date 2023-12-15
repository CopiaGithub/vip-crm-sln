namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import ProjectSearch = GCPL.Model.ProjectHeadermodel;

    interface IProjectListController {
        ProjectListSearch: ProjectSearch;
        ProjectList: Array<Model.ProjectGridListModel>
        CustProjectTypeDD: Array<Model.GetCustProjectTypeDDModel>;
        ZoneDD: Array<Model.ZoneDDModel>
    }

    class ProjectListController implements IProjectListController {
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
        alert = null;
        ProjectList = null;
        CustProjectTypeDD = null;
        ProjectListSearch = null;
        ProjectTypeDD = null;
        ZoneDD = null;
        private Cookie: any = null;

        private ListService: Service.IProjectListService;
        private getAutoProjectName: Service.IgetAutoProjectNameService;
        private getAutoProjectNO: Service.IgetAutoProjectNOService;
        private CustProjectTypeService: Service.ICustProjectTypeService;
        private ProjectTypeService: Service.IProjectTypeService;
        private ZoneDDService: Service.IZoneDDService;
        static $inject = ["ProjectListService", "getAutoProjectNameService", "getAutoProjectNOService", "CustProjectTypeService", "ProjectTypeService","ZoneDDService","$cookieStore"];

        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_ListService: Service.IProjectListService, _getAutoProjectName: Service.IgetAutoProjectNameService, _getAutoProjectNO: Service.IgetAutoProjectNOService, _CustProjectTypeService: Service.ICustProjectTypeService, _ProjectType: Service.IProjectTypeService, _ZoneDDService: Service.IZoneDDService, private _cookieStore: any) {

            this.ListService = _ListService;
            this.getAutoProjectName = _getAutoProjectName;
            this.getAutoProjectNO = _getAutoProjectNO;
            this.CustProjectTypeService = _CustProjectTypeService;
            this.ProjectTypeService = _ProjectType;
            this.ZoneDDService = _ZoneDDService;
            this.ProjectListSearch = new GCPL.Model.ProjectHeadermodel();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
        }

        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
        }

        //Page Load Define Values//
        Init(): void {

            if (this.RoleID == "5") {
                $("#btncreateproj").hide();
            }
            else {
                $("#btncreateproj").show();
            }

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
                    debugger;
                    that.ProjectListSearch.ID = ui.item.id;
                },
                change: function () {

                }
            });

            this.CustProjectTypeDD = this.CustProjectTypeService.FindCustProjectTypeDD().then((response => {
                this.CustProjectTypeDD = this.CustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
            }));

            this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((response => {
                this.ProjectTypeDD = this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
            }));

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));
        }

        SearchProjectList(): void {
            debugger;
            // $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }
       
        Refresh() {
            this.FillGrid(this.NoOfRds);

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
            this.ProjectList = this.ListService.Find(this.ProjectListSearch).then((response => {
                this.ProjectList = this.ListService.GetProjectList(response.data.Result);
                $('#page-loader').hide();
                $('#search-btn-loader').hide();

                if (this.ProjectList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.ProjectList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.ProjectList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.ProjectList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.ProjectList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.ProjectList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.ProjectList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.ProjectList.slice(0, that.numRecords);
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
            this.shownItems = this.ProjectList.slice(begin, end);
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
            this.shownItems = this.ProjectList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {
            this.ProjectListSearch.ProjectType = "";
            this.ProjectListSearch.ID = "";
            this.ProjectListSearch.ProjectID = "";
            this.ProjectListSearch.ZoneID = "";
            (<HTMLInputElement>document.getElementById("txtProjectNo")).value = "";
            (<HTMLInputElement>document.getElementById("txtProjectName")).value = "";
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
            var csv = [];
            var rows = document.querySelectorAll("#excelDownload tr");

            for (var i = 0; i < rows.length; i++) {
                var row = [], cols = rows[i].querySelectorAll("td, th");

                for (var j = 0; j < cols.length; j++)
                    row.push(cols[j].innerHTML);

                csv.push(row.join(","));
            }

            // Download CSV file
            this.downloadCSV(csv.join("\n"), filename);
        }

    }
    class ProjectListComponentController implements ng.IComponentOptions {
        static Name: string = "projectlist"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ProjectListController;
            this.templateUrl = "/Scripts/App/ProjectList/Template/ProjectList.html";
        }
    }
    app.AddComponent(ProjectListComponentController.Name, new ProjectListComponentController());

}