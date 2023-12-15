namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import AllActSearch = GCPL.Model.AllActSearchModel;
    import LeadReportViewDetails = GCPL.Model.AllLeadReportViewModel;
    import getAllLeadCount = GCPL.Model.LeadStatusModel;
    import ContactMaster = GCPL.Model.InsertContactMaster;



    interface IAllActivitiesController {
        AllActSearchModel: AllActSearch;
        Search(): void;
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        DivisionDropDown: Array<Model.DivisionModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        ZoneDD: ng.IPromise<Utility.Ajax.IResponse>;
        RegionDropDown: Array<Model.RegionDDModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        LeadSourceDropDown: Array<Model.LeadSourceddModel>
        LeadReportView: Array<Model.AllLeadReportViewModel>;
        ViewDetails(data: any): void;
        ActivityTypeDropDown: Array<Model.ActivityTypeddlModel>
        InsertContact: ContactMaster;
        LeadID: any;
    }
    class AllActivitiesController implements IAllActivitiesController {
        AllStatus = null;
        FillAllActivitiesGrid = null;
        DownloadAllActListGrid = null;
        AllActSearchModel = null;
        numRecords: number = 10;
        static statusDropdownList = [];
        static activityTypeDropdownList = [];
        page: number = 1;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadStatusDropDown = null;
        DivisionDropDown = null;
        ProductDropDown = null;
        ModelDropDown = null;
        ZoneDD = null;
        RegionDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        LeadSourceDropDown = null;
        LeadReportView = null;
        ActivityTypeDropDown = null;
        CustomerID = null;
        InsertContact = null;
        LeadID = null;
        //RoleID = null;
        private Cookie: any = null;
        private getAutoProjectName: Service.IgetAutoProjectNameService;
        private AllActivitiesService: Service.IAllActListService;
        private DivisionService: Service.IDivisionService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService;
        private DistrictService: Service.IDistrictddService;
        private getAutoSalesrep2: Service.IEmployeeAtofillService;
        private AllLeadReportViewService: Service.IAllLeadReportService;
        private getAutoCampaign: Service.ICampaignAtofillService;
        private ActivityTypeService: Service.IActivityTypeddService;
        private AllLeadCountService: Service.ILeadsStatusCountService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        getAllLeadCount: GCPL.Model.LeadStatusModel = null;


        static $inject = ["AllActListService", "LeadStatusddService", "DivisionService",
            "ProductddService", "LeadTypeProductService", "ZoneDDService",
            "RegionddService", "StateddPService", "DistrictddService",
            "LeadSourceddService", "EmployeeAtofillService",
            "AllLeadReportService", "CampaignAtofillService", "ActivityTypeddService",
            "LeadsStatusCountService", "CustomerSapIdAutoFillService", "getAutoProjectNameService",
            "$cookieStore"];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_AllActivitiesService: Service.IAllActListService, _LeadStatusService: Service.ILeadStatusddService,
            _DivisionService: Service.IDivisionService, _ProductService: Service.IProductddService,
            _ModelService: Service.ILeadTypeProductService, _ZoneDDService: Service.IZoneDDService,
            _RegionService: Service.IRegionddService, _StateService: Service.IStateddPService,
            _DistrictService: Service.IDistrictddService, _LSService: Service.ILeadSourceddService,
            _getAutoSalesrep2: Service.IEmployeeAtofillService,
            _AllLeadReportViewService: Service.IAllLeadReportService, _getAutoCampaign: Service.ICampaignAtofillService,
            _ActivityTypeService: Service.IActivityTypeddService, _AllLeadCountService: Service.ILeadsStatusCountService,
            _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService,
            _getAutoProjectName: Service.IgetAutoProjectNameService, private _cookieStore: any) {
            this.AllActivitiesService = _AllActivitiesService;
            this.AllActSearchModel = new GCPL.Model.AllActSearchModel();
            this.getAutoProjectName = _getAutoProjectName;
            this.DivisionService = _DivisionService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.DistrictService = _DistrictService;
            this.getAutoSalesrep2 = _getAutoSalesrep2;
            this.AllLeadReportViewService = _AllLeadReportViewService;
            this.LeadReportView = new LeadReportViewDetails();
            this.getAutoCampaign = _getAutoCampaign;
            this.ActivityTypeService = _ActivityTypeService;
            this.AllLeadCountService = _AllLeadCountService;
            this.getAllLeadCount = new getAllLeadCount();
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.InsertContact = new ContactMaster();
            //this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
        }

        $onInit() {
            this.Init();
            $('#search-btn-loader').hide();
            $("#errorclose").hide();
            $("#close").hide();

            let that = this;
        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }

        //Page Load Define Values//
        Init(): void {


            var n = new Date();
            n.setDate(n.getDate() - 7);
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m = months[n.getMonth()];
            var d = n.getDate();
            var y = n.getFullYear();
            (<HTMLInputElement>document.getElementById("txtFromDate")).innerHTML = d + " " + m + " " + y;
            $('#txtFromDate').val(d + " " + m + " " + y);
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
            (<HTMLInputElement>document.getElementById("txtToDate")).innerHTML = d1 + " " + m1 + " " + y1;
            $('#txtToDate').val(d1 + " " + m1 + " " + y1);
            (<HTMLInputElement>document.getElementById("txtToDate")).value;
            $("#txtToDate").datepicker({
                dateFormat: 'dd M yy',
                changeMonth: true,
                changeYear: true,
                onSelect: this.selectToDate
            });


            this.AllActSearchModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllActSearchModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;



            $("#errorclose").hide();
            $("#close").hide();
            let that = this;
            
            $("#txtUserName").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep2.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep2.GetAutEmployee(response.data.Result);

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

                    that.AllActSearchModel.CreatedBy = ui.item.id;
                    console.log(that.AllActSearchModel.CreatedBy);

                },
                change: function () {

                }
            });

            
            this.ActivityTypeDropDown = this.ActivityTypeService.Find().then((response => {
                this.ActivityTypeDropDown = this.ActivityTypeService.GetActivityTypeName(response.data.Result);
            }));

        }

        //addActivityType(abc: string): void {
        //    AllActivitiesController.activityTypeDropdownList.push(abc);
        //}


        ViewDetails(data: any): void {

            this.AllLeadReportViewService.Find(data).then((response => {
                this.LeadReportView = this.AllLeadReportViewService.GetAllLeadReportView(response.data.Result);
                console.log(this.LeadReportView);


                this.LeadID = this.LeadReportView.LeadID;
                $('#LeadOrigin').val(this.LeadReportView.LeadOrigin);
                $('#txtProjectName').val(this.LeadReportView.ProjectName);
                $('#Opportunity').val(this.LeadReportView.Opportunity);
                $('#LeadID').val(this.LeadReportView.LeadID);
                $('#txtCustName').val(this.LeadReportView.CustName);
                $('#txtCustEmail').val(this.LeadReportView.CustEmail);
                $('#txtCustMobNo').val(this.LeadReportView.CustMobNo);
                $('#txtCustPhnNo').val(this.LeadReportView.CustPhnNo);
                $('#txtCustAddress').val(this.LeadReportView.CustAddress);

                $('#txtContName').val(this.LeadReportView.ContName);
                $('#txtContEmail').val(this.LeadReportView.ContEmail);
                $('#txtContMobNo').val(this.LeadReportView.ContMobNo);
                $('#txtContPhnNo').val(this.LeadReportView.ContPhnNo);
                $('#txtContAddress').val(this.LeadReportView.ContAddress);


                $('#txtLeadModel').val(this.LeadReportView.LeadModel);
                $('#txtPurchaseWithin').val(this.LeadReportView.PurchaseWithin);
                $('#txtSpecifyMore').val(this.LeadReportView.SpecifyMore);
                $('#txtQuantity').val(this.LeadReportView.Quantity);
                $('#txtCreatedBy').val(this.LeadReportView.CreatedBy);
                $('#txtCreatedDate').val(this.LeadReportView.CreatedDate);
                $('#txtSource').val(this.LeadReportView.Source);
                $('#txtRefUserName').val(this.LeadReportView.RefUserName);

                $('#txtCampaign').val(this.LeadReportView.Campaign);
                $('#txtLeadCreationComments').val(this.LeadReportView.LeadCreationComments);
                $('#txtValidatedBy').val(this.LeadReportView.ValidatedBy);
                $('#txtDateValidated').val(this.LeadReportView.DateValidated);
                $('#txtValidationComment').val(this.LeadReportView.ValidationComment);
                $('#txtAllocatedTo').val(this.LeadReportView.AllocatedTo);
                $('#txtAllocatedDate').val(this.LeadReportView.AllocatedDate);
                $('#txtAssessmentDate').val(this.LeadReportView.AssessmentDate);
                $('#txtLessthan90days').val(this.LeadReportView.Lessthan90days);

                $('#txtMetCustomer').val(this.LeadReportView.MetCustomer);
                $('#txtAssessmentComments').val(this.LeadReportView.AssessmentComments);
                $('#txtLeadStatus').val(this.LeadReportView.LeadStatus);
                $('#txtClosedBy').val(this.LeadReportView.ClosedBy);
                if (this.LeadReportView.MetCustomer == "False") {
                    this.LeadReportView.MetCustomer = "No";
                }
                else if (this.LeadReportView.MetCustomer == "True") {
                    this.LeadReportView.MetCustomer = "Yes";
                }
                if (this.LeadReportView.Lessthan90days == "False") {
                    this.LeadReportView.Lessthan90days = "No";
                }
                else if (this.LeadReportView.Lessthan90days == "True") {
                    this.LeadReportView.Lessthan90days = "Yes";
                }
                $("detailModal").show();
            }));
        }

        Division(): void {
            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);
            }));
        }
        District(): void {
            this.DistrictDropDown = this.DistrictService.Find(this.AllActSearchModel.StateIDs).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        FillGrid(NoOfRecords, page): void {

            let that = this;
            that.incre = 0;
            that.NoOfRds = parseInt(NoOfRecords);
            that.page = parseInt(page);
            //that.numRecords = NoOfRecords;
            //that.page = page;
            //that.maxPages = 0;
            that.shownItems = [];

            //this.AllActSearchModel.StatusID = AllActivitiesController.statusDropdownList.toString();
            //this.AllActSearchModel.ActivityType = AllActivitiesController.activityTypeDropdownList.toString();

            this.AllActSearchModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllActSearchModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;

            console.log(this.AllActSearchModel);

            this.FillAllActivitiesGrid = this.AllActivitiesService.FindGrid(this.AllActSearchModel, this.NoOfRds, this.page).then((response => {
                this.FillAllActivitiesGrid = this.AllActivitiesService.GetAllActList(response.data.Result);
                console.log(this.FillAllActivitiesGrid, 'AllActivity');
                $('#search-btn-loader').hide();

                

                if (this.FillAllActivitiesGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillAllActivitiesGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + that.numRecords;
                    });

                    $('#search-btn-loader').hide();
                    this.ShowBack = this.page > 1 ? true : false;
                    this.ShowNext = this.FillAllActivitiesGrid.length > 0 ? true : false;
                    this.shownItems = this.FillAllActivitiesGrid;
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                    this.ShowBack = this.page > 1 ? true : false;
                }

                if (this.FillAllActivitiesGrid.length < that.numRecords) {
                    this.ShowNext = false;
                    this.ShowBack = false;
                }

                this.AllLeadCountService.FindGrid(this.AllActSearchModel).then((response => {
                    this.getAllLeadCount = this.AllLeadCountService.GetLeadsStatusCountGrid(response.data.Result);
                }));
            }));
        }


        Search(): void {
            console.log("AllActivity123");
            $('#search-btn-loader').show();
            $('.chkBox').prop('checked', false);

            this.FillGrid(this.NoOfRds, this.page);
            AllActivitiesController.statusDropdownList = [];
            AllActivitiesController.activityTypeDropdownList = [];
        }

        ExlDownload(): void {

            let that = this;
            that.incre = 0;
            //that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];           

            this.AllActSearchModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllActSearchModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.DownloadAllActListGrid = this.AllActivitiesService.DownloadGrid(this.AllActSearchModel).then((response => {
                this.DownloadAllActListGrid = this.AllActivitiesService.DownloadAllActList(response.data.Result);
                console.log(this.DownloadAllActListGrid, 'DownloadAllActivity');
                $('#search-btn-loader').hide();

                if (this.DownloadAllActListGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.DownloadAllActListGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + that.numRecords;
                    });

                    $('#search-btn-loader').hide();
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.DownloadAllActListGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                
            }));
        }


        DownloadExl(): void {
            console.log("AllActivity123");
            $('#search-btn-loader').show();
            $('.chkBox').prop('checked', false);

            this.ExlDownload();
            AllActivitiesController.statusDropdownList = [];
            AllActivitiesController.activityTypeDropdownList = [];
        }

        Refresh() {
            this.NoOfRds = this.NoOfRds;
            this.FillGrid(this.NoOfRds, this.page);
        }

        nextPage() {
            this.ShowBack = false;
            this.ShowNext = false;
            this.page += 1;
            console.log(this.page);
            this.FillGrid(this.NoOfRds, this.page);
            this.shownItems = this.FillAllActivitiesGrid;
            if (this.FillAllActivitiesGrid.length > 0) {
                this.ShowNext = true;
            }
        }

        previousPage() {
            this.ShowBack = false;
            this.ShowNext = false;
            this.page -= 1;
            console.log(this.page);
            this.FillGrid(this.NoOfRds, this.page);
            this.shownItems = this.FillAllActivitiesGrid;
            if (this.FillAllActivitiesGrid.length > 0 && this.page > 1) {
                this.ShowBack = true;
            }
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.FillAllActivitiesGrid.slice(begin, end);
            if (this.page + 2 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.FillAllActivitiesGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();

            $("#ErrClose").show();
            $("#submitClose").hide();
            this.alert = Message;
        }

        Clear() {
            // this.FillGrid(this.numRecords);
            this.AllActSearchModel.ActivityID = "";
            this.AllActSearchModel.LeadID = "";
            this.AllActSearchModel.OpportunityID = "";
            this.AllActSearchModel.CreatedBy = "";
            this.AllActSearchModel.ActivityType = "";
            (<HTMLInputElement>document.getElementById("txtUserName")).value = "";
        }

        Close(): void {
            location.href = "#!/AllActivities";
        }
        ErrorClose(): void {
            location.href = "#!/AllActivities";
        }

        exportTableToCSV(filename) {

            let that = this;
            that.incre = 0;
            //that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.AllActSearchModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllActSearchModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.DownloadAllActListGrid = this.AllActivitiesService.DownloadGrid(this.AllActSearchModel).then((response => {
                this.DownloadAllActListGrid = this.AllActivitiesService.DownloadAllActList(response.data.Result);
                console.log(this.DownloadAllActListGrid, 'DownloadAllActivity');
                $('#search-btn-loader').hide();

                this.downloadCSVFromJson(filename, this.DownloadAllActListGrid);

            }));

        }

        downloadCSVFromJson = (filename, DownloadAllActListGrid) => {
            console.log('downloadCSVFromJson');
            // convert JSON to CSV
            const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
            const header = Object.keys(DownloadAllActListGrid[0])
            let csv = DownloadAllActListGrid.map(row => header.map(fieldName =>
                JSON.stringify(row[fieldName], replacer)).join(','))
            csv.unshift(header.join(','))
            csv = csv.join('\r\n')

            // Create link and download
            var link = document.createElement('a');
            link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        public Search1(data: any): void {
            this.CustomerSapAutofill.FindCustomerSAPID(data).then((response => {

                this.InsertContact.CustomerSAPID = this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
            }));
        }
    }
   
    class AllActivitiesComponentController implements ng.IComponentOptions {
        static Name: string = "allactivitiescomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = AllActivitiesController;
            this.templateUrl = "/Scripts/App/AllActivities/Template/AllActivities.html";
        }
    }
    app.AddComponent(AllActivitiesComponentController.Name, new AllActivitiesComponentController());


}