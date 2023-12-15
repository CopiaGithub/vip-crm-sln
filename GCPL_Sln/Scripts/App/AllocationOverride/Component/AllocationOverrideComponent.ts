namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import AllocationOverridelist = GCPL.Model.AllocationOverrideListModel;
    import Search = GCPL.Model.AllocationOverrideSearchModel;
    import CustomerValidate = GCPL.Model.CustomerViewModel;
    import InsertAllocationLead = GCPL.Model.InsertAllocationOverrideModel;
    import EmployeeCodeDetails = GCPL.Model.GetEmpCodeModel;


    interface IAllocationOverrideController {
        AllocationOverrideList: Array<Model.AllocationOverrideListModel>;
        SearchAllocationLeadList(): void;
        Validate(data: any): void;
        CustomerView: Array<Model.CustomerViewModel>;
        InsertAllocationOverride: InsertAllocationLead;
        Submit(): void;
        Search(data: any): void;
        EmpCode: EmployeeCodeDetails;

        LeadID: any;


    }
    class AllocationOverrideController implements IAllocationOverrideController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        AllocationOverrideList = null;
        AllocationSearch: GCPL.Model.AllocationOverrideSearchModel = null;
        CustomerView = null;
        InsertAllocationOverride :any;
        EmpCode = null;
        LeadID = null;

        private Cookie: any = null;
        private ListService: Service.IAllocationOverrideListService;
        private CustomerViewService: Service.ICustomerViewService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
        private InsertService: Service.IInsertAllocationOverrideService;
        private EmployeeCodeService: Service.IGetEmployeeCodeService;

        static $inject = ["AllocationOverrideListService", "CustomerViewService", "EmployeeAtofillService", "InsertAllocationOverrideService", "GetEmployeeCodeService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_ListService: Service.IAllocationOverrideListService, _CustomerViewService: Service.ICustomerViewService, _getAutoSalesrep1: Service.IEmployeeAtofillService,
            _InsertService: Service.IInsertAllocationOverrideService, _EmployeeCodeService: Service.IGetEmployeeCodeService, private _cookieStore: any) {

            this.ListService = _ListService;
            this.AllocationSearch = new Search();
            this.CustomerViewService = _CustomerViewService;
            this.CustomerView = new CustomerValidate();
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.InsertService = _InsertService;
            this.InsertAllocationOverride = new InsertAllocationLead();
            this.EmployeeCodeService = _EmployeeCodeService;
            this.Cookie = _cookieStore;
        }

        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $('#search-btn-loader').hide();
            $("#close").hide();


        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

            let that = this;
            debugger;
            $("#txtUserName").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            debugger;
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
                    debugger;

                    that.InsertAllocationOverride.UserID = ui.item.id;
                    that.Search(ui.item.id);
                    //console.log(that.InsertReallocate.RefUserName);

                },
                change: function () {

                }
            });
        }

        SearchAllocationLeadList(): void {

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
            debugger;
            this.AllocationOverrideList = this.ListService.Find(this.AllocationSearch).then((response => {
                this.AllocationOverrideList = this.ListService.GetAllocationOverList(response.data.Result);
                $('#search-btn-loader').hide();
                this.LeadID = this.AllocationOverrideList.LeadID;
                debugger;

                if (this.AllocationOverrideList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.AllocationOverrideList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.AllocationOverrideList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.AllocationOverrideList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.AllocationOverrideList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.AllocationOverrideList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.AllocationOverrideList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.AllocationOverrideList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }


            }));
        }

        Validate(data: any): void {
            debugger;
            this.CustomerViewService.Find(data).then((response => {
                this.CustomerView = this.CustomerViewService.GetCustomerView(response.data.Result);

                debugger;
                $('#txtCustName').val(this.CustomerView.CompanyName);
                $('#txtProjectName').val(this.CustomerView.ProjectName);
                $('#txtCustEmail').val(this.CustomerView.Email);
                $('#txtCustMobile').val(this.CustomerView.MobileNo);
                $('#txtCustPhone').val(this.CustomerView.PhoneNo);
                $('#txtCustAddress').val(this.CustomerView.Address1);

                $('#txtConName').val(this.CustomerView.ContactName);
                $('#txtConEmail').val(this.CustomerView.ConEmail);
                $('#txtConPhone').val(this.CustomerView.ConPhoneNo);
                $('#txtConMobile').val(this.CustomerView.ConMobileNo);
                $('#txtConAddress').val(this.CustomerView.Address);


                $('#txtmodel').val(this.CustomerView.ModelNo);
                //$('#txtpurchase').val(this.CustomerView.Quantity);
                $('#txtpurchase').val(this.CustomerView.Title);
                $('#txtcomm').val(this.CustomerView.Comments);
                $('#txtleadcat').val(this.CustomerView.LeadCategory);
                //$('#txtConName').val(this.CustomerView.LeadCategoryID);
                //$('#txtConName').val(this.CustomerView.LeadID);
                // $('#txtConName').val(this.CustomerView.CampaignName);
                $('#txtcreate').val(this.CustomerView.CreatedBy);
                $('#txtspeci').val(this.CustomerView.CreateComment);
                $('#txtsource').val(this.CustomerView.SourceID);
                //$('#txtsource').val(this.CustomerView.LeadSource);
                $('#txtwhen').val(this.CustomerView.WhenCreated);
                $('#txtvalid').val(this.CustomerView.ValidatedBy);
                $('#txtvalidcomm').val(this.CustomerView.ValidComment);
                $('#txtvaliddate').val(this.CustomerView.WhenValidated);
                $('#txtalloc').val(this.CustomerView.Allocated);
                $('#txtdateallo').val(this.CustomerView.WhenAllocated);
                $('#txtasscomments').val(this.CustomerView.AssessmentComment);
                $('#txtasses').val(this.CustomerView.AssessmentDate);
                $('#txtleadstatus').val(this.CustomerView.Status);
                $('#txtless').val(this.CustomerView.IsLess);
                $('#txtmet').val(this.CustomerView.IsMeet);

                this.InsertAllocationOverride.LeadID = this.CustomerView.LeadID;
                //this.LeadID = this.CustomerView.LeadID;

                $("reAllocateModal").show();

            }));



        }

        public Search(data: any): void {
            debugger;
            this.EmployeeCodeService.Find(data).then((response => {
                this.EmpCode = this.EmployeeCodeService.GetEmpCodeInfo(response.data.Result);
                console.log(this.EmpCode);
                debugger;
                //this.inse.EmployeeCode = this.EmpCode.EmployeeCode;

                $('#txtEmpCode').val(this.EmpCode.EmployeeCode);
            }));



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
            debugger;
            this.InsertAllocationOverride.LeadID = this.CustomerView.LeadID;
            if (this.InsertAllocationOverride.UserID != "") {

                this.InsertService.PostAllocation(this.InsertAllocationOverride).then((response => {

                    console.log(this.InsertAllocationOverride);
                    debugger;
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Lead Re-Allocated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#re-allocate').click();


                        this.InsertAllocationOverride = {};
                        $("#txtUserName").val("");
                        $("#txtEmpCode").val("");
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
            this.shownItems = this.AllocationOverrideList.slice(begin, end);
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
            this.shownItems = this.AllocationOverrideList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Clear() {

            this.AllocationSearch.SearchInput = "";
            this.AllocationSearch.LeadID = "";
            $("#txtCustomer").val("");
            $("#txtLead").val("");
        }

        Close(): void {

            location.href = "#!/AllocationOverride";

        }

        ErrorClose(): void {
            location.href = "#!/AllocationOverride";

        }

    }
    class AllocationOverrideComponentController implements ng.IComponentOptions {
        static Name: string = "allocationoverridecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = AllocationOverrideController;
            this.templateUrl = "/Scripts/App/AllocationOverride/Template/AllocationOverride.html";
        }
    }
    app.AddComponent(AllocationOverrideComponentController.Name, new AllocationOverrideComponentController());

}