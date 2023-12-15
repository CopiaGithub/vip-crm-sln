namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import ActivityOverridelist = GCPL.Model.ActivityOverrideListModel;
    import Search = GCPL.Model.ActivityOverrideSearchModel;
    import InsertActivity = GCPL.Model.InsertActivityOverrideModel;


    interface IActivityOverrideController {
        ActivityOverrideList: Array<Model.ActivityOverrideListModel>;
        SearchActivityLeadList(): void;
        InsertActivityOverride: InsertActivity;
        Submit(): void;
        //UserID: GCPL.Model.UserIDModel
        LeadID: any;
    }
    class ActivityOverrideController implements IActivityOverrideController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        ActivityOverrideList = null;
        ActivitySearch: GCPL.Model.ActivityOverrideSearchModel = null;
        InsertActivityOverride = null;
        UserID: null;
        LeadID: null;
        IsSelected = null;

        private Cookie: any = null;
        private ListService: Service.IActivityOverrideListService;
        private InsertService: Service.IInsertActivityOverrideService;

        static $inject = ["ActivityOverrideListService", "InsertActivityOverrideService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_ListService: Service.IActivityOverrideListService, _InsertService: Service.IInsertActivityOverrideService, private _cookieStore: any) {

            this.ListService = _ListService;
            this.ActivitySearch = new Search();
            this.InsertService = _InsertService;
            this.InsertActivityOverride = new InsertActivity();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
        }

        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();
        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

            this.IsSelected = false;

        }
        SearchActivityLeadList(): void {

            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            $('#search-btn-loader').show();
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            this.ActivityOverrideList = this.ListService.Find(this.ActivitySearch).then((response => {
                this.ActivityOverrideList = this.ListService.GetActivityOverrideList(response.data.Result);
               // this.LeadID = this.ActivityOverrideList.LeadID;
                $('#search-btn-loader').hide();

                if (this.ActivityOverrideList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.ActivityOverrideList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.ActivityOverrideList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.ActivityOverrideList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }


            }));
        }

        private FindSelectedcheckbox() {
            debugger;        
            let listOfSelectedLeadID = [];
            $.each(this.ActivityOverrideList, function (key, item) {

                if (item.IsSelected == true) {
                    item.LeadID = this.LeadID;
                    listOfSelectedLeadID.push(item);
                }                                
            });
            return listOfSelectedLeadID;
        }
        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }
        popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
            $("#message-text").html(Message);
            $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
            $(ShowImg).show();
            $(HideImg).hide();
            $("#succeess-message-box").modal("show");
        }
        Submit(): void {
            if (this.UserID != null || this.UserID != "") {

               this.InsertActivityOverride.UserID = this.UserID;
            }
            if (!$("input[name=Activity]:checked").val()) {
                this.HideShow();
                this.popupMessage("Please select any Lead", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            
            
            else if (this.InsertActivityOverride.UserID != ""){
                debugger;
                debugger;
                this.InsertActivityOverride.Details = this.FindSelectedcheckbox();
                this.InsertActivityOverride.IsBypassed = "1";

                console.log("this.InsertActivityOverride = " + this.InsertActivityOverride);
                this.InsertService.PostActivity(this.InsertActivityOverride).then((response => {
                //this.InsertService.PostActivity(this.ActivityOverrideList).then((response => {
                    console.log(this.InsertActivityOverride);
                    debugger;
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Lead Ids are Bypassed.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        this.InsertActivityOverride = null;
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }                   
                }));
            }
            else {

                this.HideShow();
                this.popupMessage("Please select a user.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.ActivityOverrideList.slice(begin, end);
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
            this.shownItems = this.ActivityOverrideList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Refresh() {
            this.FillGrid(this.NoOfRds);
        }

        Clear() {

            this.ActivitySearch.SearchText = "";
            this.ActivitySearch.LeadID = "";
            $("#txtCustomer").val("");
            $("#txtLeadID").val("");
        }

        Close(): void {

            location.href = "#!/ActivityOverride";

        }

        ErrorClose(): void {
            location.href = "#!/ActivityOverride";

        }
    }
    class ActivityOverrideComponentController implements ng.IComponentOptions {
        static Name: string = "activityoverridecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ActivityOverrideController;
            this.templateUrl = "/Scripts/App/ActivityOverride/Template/ActivityOverride.html";
        }
    }
    app.AddComponent(ActivityOverrideComponentController.Name, new ActivityOverrideComponentController());

}