namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadOverridelist = GCPL.Model.LeadOverrideListModel;
    import Search = GCPL.Model.LeadOverrideSearchModel;

    interface ILeadOverrideController {

        LeadOverridelist: Array<Model.LeadOverrideListModel>;
        SearchLeadOverrideList(): void;
    }
    class LeadOverrideController implements ILeadOverrideController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadOverridelist = null;
        LeadOverrideSearch = null;
        private LeadOverrideListService: Service.ILeadOverrideListService;
        private Cookie: any = null;

        static $inject = [ "LeadOverrideListService", "$cookieStore"];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_LeadOverrideListService: Service.ILeadOverrideListService, private _cookieStore: any) {

            this.LeadOverrideListService = _LeadOverrideListService;
            this.LeadOverrideSearch = Array<GCPL.Model.LeadOverrideSearchModel>();
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

            this.LeadOverridelist = this.LeadOverrideListService.Find(this.LeadOverrideSearch).then((response => {
                this.LeadOverridelist = this.LeadOverrideListService.GetLeadOverrideData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.LeadOverridelist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.LeadOverridelist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.LeadOverridelist);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.LeadOverridelist.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

               // $('#search-btn-loader').hide();
                if (this.LeadOverridelist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.LeadOverridelist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.LeadOverridelist);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.LeadOverridelist.slice(0, that.numRecords);
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

        SearchLeadOverrideList(): void {
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
            this.shownItems = this.LeadOverridelist.slice(begin, end);
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
            this.shownItems = this.LeadOverridelist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.LeadOverrideSearch.LeadID = "";
            this.LeadOverrideSearch.CustomerName = "";
            this.LeadOverrideSearch.User = "";

            $("#txtleadId").val("");
            $("#txtCustName").val("");
            $("#txtuser").val("");


        }

        Close(): void {

            location.href = "#!/LeadOverride";

        }
        ErrorClose(): void {
            location.href = "#!/LeadOverride";

        }


    }
    class LeadOverrideComponentController implements ng.IComponentOptions {
        static Name: string = "leadoverridecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadOverrideController;
            this.templateUrl = "/Scripts/App/LeadOverride/Template/LeadOverride.html";
        }
    }
    app.AddComponent(LeadOverrideComponentController.Name, new LeadOverrideComponentController());

}