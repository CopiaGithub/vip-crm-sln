namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadChangelist = GCPL.Model.LeadChangeListModel;
    import Search = GCPL.Model.LeadChangeSearchModel;

    interface ILeadChangeListController {

        LeadChangelist: Array<Model.LeadChangeListModel>;
        SearchLeadChangeList(): void;

    }



    class LeadChangeListController implements ILeadChangeListController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadChangelist = null;
        LeadChangeSearch = null;
        private LeadChangeListService: Service.ILeadChangeListService;
        private Cookie: any = null;

        static $inject = ["LeadChangeListService", "$cookieStore"];

        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_LeadChangeListService: Service.ILeadChangeListService, private _cookieStore: any) {
            this.LeadChangeListService = _LeadChangeListService;
            this.LeadChangeSearch = Array<GCPL.Model.LeadChangeSearchModel>();
            this.Cookie = _cookieStore;

        }

        $onInit() {
            let that = this;
            this.Init();
            $("#errorclose").hide();
            $('#search-btn-loader').hide();
            $("#close").hide();
        }

        //Page Load Define Values//
        Init(): void {
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();

        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.LeadChangelist = this.LeadChangeListService.Find(this.LeadChangeSearch).then((response => {
                this.LeadChangelist = this.LeadChangeListService.GetLeadChangeData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.LeadChangelist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.LeadChangelist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.LeadChangelist);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.LeadChangelist.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                // $('#search-btn-loader').hide();
                if (this.LeadChangelist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.LeadChangelist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.LeadChangelist);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.LeadChangelist.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

            }));
        }

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        SearchLeadChangeList(): void {
            $('#search-btn-loader').show();

            //  $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.LeadChangelist.slice(begin, end);
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
            this.shownItems = this.LeadChangelist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.LeadChangeSearch.LeadID = "";
            this.LeadChangeSearch.CustomerName = "";
            this.LeadChangeSearch.User = "";

            $("#txtleadId").val("");
            $("#txtCustName").val("");
            $("#txtuser").val("");


        }

        Close(): void {

            location.href = "#!/LeadChangeList";

        }
        ErrorClose(): void {
            location.href = "#!/LeadChangeList";

        }



    }
    class LeadChangeListComponentController implements ng.IComponentOptions {
        static Name: string = "leadchangelist"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadChangeListController;
            this.templateUrl = "/Scripts/App/LeadChangeList/Template/LeadChangeList.html";
        }
    }
    app.AddComponent(LeadChangeListComponentController.Name, new LeadChangeListComponentController());

}