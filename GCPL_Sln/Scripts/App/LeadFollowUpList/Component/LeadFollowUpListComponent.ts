namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import SearchFollow = GCPL.Model.FollowupSearchModel;
    import LeadReportViewDetails = GCPL.Model.AllLeadReportViewModel;
    import ViewValidate = GCPL.Model.ValidateLeadInfoModel;
    import ChechRegionID = GCPL.Model.CheckRegionModel;
    import Search = GCPL.Model.RegionCheckModel;
    import SearchRefUser = GCPL.Model.SearchRefUserModel;
    import InsertFU = GCPL.Model.InsertFUQueAnsModel;
    import AllLeadsHeader = GCPL.Model.AllLeadsHeaderModel;
    import ContactMaster = GCPL.Model.InsertContactMaster;

    interface ILeadFollowUpListController {
        AllLeadsHeaderModel: AllLeadsHeader;
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        SearchList: SearchFollow;
        LeadSourceDropDown: Array<Model.LeadSourceddModel>
        Search(): void;
        List: Array<Model.FollowupListModel>;
        HistList: Array<Model.FolloupHistListModel>;
        ViewDetails(data: any): void;
        LeadReportView: Array<Model.AllLeadReportViewModel>;
        LeadNo: any;
        IndustrialSegmentDropDown: Array<Model.IndustrialSegmentddlModel>;
        IndustryDivisionDropDown: Array<Model.IndustryDivisionddlModel>;
        CountryDropDown: Array<Model.CountryddlModel>;
        StateDropDown: Array<Model.StateddlModel>;
        DistrictDropDown: Array<Model.DistrictddlModel>;
        ConCountryDropDown: Array<Model.CountryddlModel>;
        ConStateDropDown: Array<Model.StateddlModel>;
        ConDistrictDropDown: Array<Model.DistrictddlModel>;
        RegionDropDown: Array<Model.RegionDDModel>
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        CategoryDropDown: Array<Model.CategoryddlModel>
        DivisionDropDown: Array<Model.DivisionModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        CheckRegion: Model.CheckRegionModel;
        ChannelDD: Array<Model.ChannelDDModel>
        LeadSourcedd: Array<Model.LeadSourceDetailsModel>
        Campaigndd: Array<Model.CampaignDetailsModel>
        PurchaseTimlinedd: Array<Model.PurchaseTimelineModel>
        LeadCategoryDropDown: Array<Model.LeadCategoryddlModel>
        SalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        DepartmentDropDown: Array<Model.DepartmentddlModel>
        DesignationDropDown: Array<Model.DesignationddlModel>
        SalesAreaDropDown: Array<Model.SalesAreaddlModel>
        Quelist: Array<Model.LeadFUQuestionsModel>
        Ans1DD: Array<Model.LeadFUAnswersModel>
        Ans2DD: Array<Model.LeadFUAnswersModel>
        Ans3DD: Array<Model.LeadFUAnswersModel>
        Ans4DD: Array<Model.LeadFUAnswersModel>
        Ans5DD: Array<Model.LeadFUAnswersModel>
        QueAnsHeaderModel: InsertFU;
        UserID: GCPL.Model.UserIDModel
        InsertContact: ContactMaster;
        ZoneDD: Array<Model.ZoneDDModel>;
       
    }

    class LeadFollowUpListController implements ILeadFollowUpListController {
        LeadStatusDropDown = null;
        LeadSourceDropDown = null;
        LeadTypeDropDown = null;
        SearchList = null;
        private Cookie: any = null;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        numRecords: number = 10;
        List = null;
        HistList = null;
        ZoneDD = null;
        LeadReportView = null;
        AllLeadsHeaderModel = null;
        static statusDropdownList = [];
        static leadTypeDropdownList = [];
        static divisionDropdownList = [];
        static productDrpodownList = [];
        static modelDrpodownList = [];
        static leadSourceIDDropdownList = [];
        static leadOriginDropdownList = [];
        static zoneDropdownList = [];
        static regionDropdownList = [];
        LeadNo = null;
        CustomerID = null;
        ValidateInfo = null;
        IndustrialSegmentDropDown = null;
        IndustryDivisionDropDown = null;
        CountryDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        ConCountryDropDown = null;
        ConStateDropDown = null;
        ConDistrictDropDown = null;
        RegionDropDown = null;
     
        CategoryDropDown = null;
        DivisionDropDown = null;
        ProductDropDown = null;
        ModelDropDown = null;
        ChannelDD = null;
        LeadSourcedd = null;
        Campaigndd = null;
        PurchaseTimlinedd = null;
        LeadCategoryDropDown = null;
        SalesOfficeDropDown = null;
        DepartmentDropDown = null;
        DesignationDropDown = null;
        SalesAreaDropDown = null;
        CheckRegion = null;
        SearchRegion: GCPL.Model.RegionCheckModel = null;
        SearchUser: GCPL.Model.SearchRefUserModel = null;
        Quelist = null;
        Ans1DD = null;
        Ans2DD = null;
        Ans3DD = null;
        Ans4DD = null;
        Ans5DD = null;
        Ans6DD = null;
        QueAnsHeaderModel = null;
        UserID = null;
        RoleID = null;
        InsertContact = null;

        private LeadFollupStatusService: Service.ILeadFollupStatusService;
        //private LeadStatusService: Service.ILeadStatusddService;
        private ListService: Service.IFollowUpListService;
        private HistListService: Service.IFollUpHistListService;
        private getAutoUser: Service.IUserCodeAutoFillService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private AllLeadReportViewService: Service.IAllLeadReportService;
        private ValidateLeadService: Service.IValidateLeadInfoService;
        private IndustrialSegmentService: Service.IIndustrialSegmentService;
        private IndustryDivisionService: Service.IIndustryDivisionService;

        private CountryService: Service.ICountryService;
        private StateService: Service.IStateddPService;
        private DistrictService: Service.IDistrictddService;
        private RegionService: Service.IRegionddService;

        private LeadTypeService: Service.ILeadTypeddService;
        private CategoryService: Service.ICategoryddService;
        private DivisionService: Service.IDivisionService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService;

        private ChannelDDService: Service.IChannelDDService;
        private LeadSourceDDService: Service.ILeadSourceDetailsService;
        private CampaignDDService: Service.ICampaignDetailsService;
        private PurchaseTimlineDDService: Service.IPurchaseTimelineService;
        private LeadCategoryService: Service.ILeadCategoryDDService;
        private SalesOfficeService: Service.ISalesOfficeService;
        private DepartmentService: Service.IDepartmentService;
        private DesignationService: Service.IDesignationService;
        private SalesAreaService: Service.ISalesAreaService;
        private CheckRegionService: Service.ICheckRegionService;
        private LeadFUQuestionsService: Service.ILeadFUQuestionsService;
        private LeadFUAnswersService: Service.ILeadFUAnswersService;
        private InsertLeadQueAnsService: Service.IInsertLeadQueAnsService;
        private ZoneDDService: Service.IZoneDDService;
        private LSService: Service.ILeadSourceddService;
        private getAutoSalesrep1: Service.IUserNameAtofillService;
        private getAutoCampaign: Service.ICampaignAtofillService;
        private getAutoSalesrep2: Service.IEmployeeAtofillService;
      

        static $inject = ["LeadSourceddService","ZoneDDService","FollUpHistListService","LeadFollupStatusService", "FollowUpListService", "UserCodeAutoFillService", "CustomerSapIdAutoFillService", "AllLeadReportService", "ValidateLeadInfoService",
            "IndustrialSegmentService", "IndustryDivisionService", "CountryService", "StateddPService", "DistrictddService",
            "RegionddService", "LeadTypeddService", "CategoryddService",
            "DivisionService", "ProductddService", "LeadTypeProductService", "ChannelDDService",
            "LeadSourceDetailsService", "CampaignDetailsService", "PurchaseTimelineService", "LeadCategoryDDService", "SalesOfficeService", "DepartmentService", "DesignationService", "SalesAreaService", "CheckRegionService", "LeadFUQuestionsService",
            "LeadFUAnswersService", "InsertLeadQueAnsService", "UserNameAtofillService", "CampaignAtofillService","EmployeeAtofillService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_LSService: Service.ILeadSourceddService,_ZoneDDService: Service.IZoneDDService,_HistListService: Service.IFollUpHistListService, _LeadStatusService: Service.ILeadFollupStatusService, _ListService: Service.IFollowUpListService, _getAutoUser: Service.IUserCodeAutoFillService
            , _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _AllLeadReportViewService: Service.IAllLeadReportService, _ValidateLeadService: Service.IValidateLeadInfoService,
            _IndustrialSegmentService: Service.IIndustrialSegmentService,
            _IndustryDivisionService: Service.IIndustryDivisionService, _CountryService: Service.ICountryService,
            _StateService: Service.IStateddPService, _DistrictService: Service.IDistrictddService,
            _RegionService: Service.IRegionddService, _LeadTypeService: Service.ILeadTypeddService,
            _CategoryService: Service.ICategoryddService, _DivisionService: Service.IDivisionService,
            _ProductService: Service.IProductddService, _ModelService: Service.ILeadTypeProductService,
            _ChannelDDService: Service.IChannelDDService, _LeadSourceDDService: Service.ILeadSourceDetailsService,
            _CampaignDDService: Service.ICampaignDetailsService, _PurchaseTimlineDDService: Service.IPurchaseTimelineService,
            _LeadCategoryService: Service.ILeadCategoryDDService, _SalesOfficeService: Service.ISalesOfficeService, _DepartmentService: Service.IDepartmentService, _DesignationService: Service.IDesignationService,
            _SalesAreaService: Service.ISalesAreaService, _CheckRegionService: Service.ICheckRegionService, _LeadFUQuestionsService: Service.ILeadFUQuestionsService, _LeadFUAnswersService: Service.ILeadFUAnswersService, _InsertLeadQueAnsService: Service.IInsertLeadQueAnsService, _getAutoSalesrep1: Service.IUserNameAtofillService, _getAutoCampaign: Service.ICampaignAtofillService, _getAutoSalesrep2: Service.IEmployeeAtofillService, private _cookieStore: any) {
            this.LeadFollupStatusService = _LeadStatusService;
            this.HistListService = _HistListService;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.getAutoCampaign = _getAutoCampaign;
            this.getAutoSalesrep2 = _getAutoSalesrep2;
            this.LSService = _LSService;
            this.ZoneDDService = _ZoneDDService;
            this.LeadTypeService = _LeadTypeService;
            this.ListService = _ListService;
            this.AllLeadsHeaderModel = new GCPL.Model.AllLeadsHeaderModel();
            this.SearchList = new SearchFollow();
            this.getAutoUser = _getAutoUser;
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.AllLeadReportViewService = _AllLeadReportViewService;
            this.LeadReportView = new LeadReportViewDetails();
            this.ValidateLeadService = _ValidateLeadService;
            this.ValidateInfo = new ViewValidate();
            this.IndustrialSegmentService = _IndustrialSegmentService;
            this.IndustryDivisionService = _IndustryDivisionService;
            this.CountryService = _CountryService;
            this.StateService = _StateService;
            this.DistrictService = _DistrictService;
            this.RegionService = _RegionService;
            this.LeadTypeService = _LeadTypeService;
            this.CategoryService = _CategoryService;
            this.DivisionService = _DivisionService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.ChannelDDService = _ChannelDDService;
            this.LeadSourceDDService = _LeadSourceDDService;
            this.CampaignDDService = _CampaignDDService;
            this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
            this.LeadCategoryService = _LeadCategoryService;
            this.SalesOfficeService = _SalesOfficeService;
            this.DepartmentService = _DepartmentService;
            this.DesignationService = _DesignationService;
            this.SalesAreaService = _SalesAreaService;
            this.CheckRegionService = _CheckRegionService;
            this.SearchRegion = new Search();
            this.SearchUser = new SearchRefUser();
            this.LeadFUQuestionsService = _LeadFUQuestionsService;
            this.LeadFUAnswersService = _LeadFUAnswersService;
            this.InsertLeadQueAnsService = _InsertLeadQueAnsService;
            this.QueAnsHeaderModel = new InsertFU();
            this.InsertContact = new ContactMaster();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
        }



        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();

        }

        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }

        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }


        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            $('#Campaignfield').hide();
            $('#UserNamefield').hide();

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

            //$('#Reasonfield').hide();
            //$('#Whentobuyfield').hide();

            //if (this.LeadNo != null || this.LeadNo != "" || this.LeadNo != undefined) {

            //    this.Validate(this.LeadNo);
            //}
           
            this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((response => {
                this.IndustrialSegmentDropDown = this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);

            }));
            this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((response => {
                this.IndustryDivisionDropDown = this.IndustryDivisionService.GetIndustryName(response.data.Result);

            }));
            this.ConCountryDropDown = this.CountryService.Find().then((response => {
                this.ConCountryDropDown = this.CountryService.GetCountryName(response.data.Result);

            }));
            //this.StateDropDown = this.StateService.Find(this.ValidateInfo.CountryID = '95').then((response => {
            //    this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            //}));
            //this.ConStateDropDown = this.StateService.Find(this.ValidateInfo.CountryID = '95').then((response => {
            //    this.ConStateDropDown = this.StateService.GetStateName(response.data.Result);
            //}));
            this.RegionDropDown = this.RegionService.Find().then((response => {
                this.RegionDropDown = this.RegionService.GetRegion(response.data.Result);

            }));
            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));
            this.ChannelDD = this.ChannelDDService.Find().then((response => {
                this.ChannelDD = this.ChannelDDService.GetChannelDDnew(response.data.Result);
            }));

            this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((response => {
                this.PurchaseTimlinedd = this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
            }));
            this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((response => {
                this.LeadCategoryDropDown = this.LeadCategoryService.GetLeadCategoryName(response.data.Result);

            }));
            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);
            }));
            this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.SalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
            }));
            this.DepartmentDropDown = this.DepartmentService.Find().then((response => {
                this.DepartmentDropDown = this.DepartmentService.GetDepartmentName(response.data.Result);
            }));
            this.DesignationDropDown = this.DesignationService.Find().then((response => {
                this.DesignationDropDown = this.DesignationService.GetDesignationName(response.data.Result);
            }));
            this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
                this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);
            }));

            this.LeadStatusDropDown = this.LeadFollupStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadFollupStatusService.GetLeadStatusFollup(response.data.Result);
            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));

            this.RegionDropDown = this.RegionService.Find().then((response => {
                this.RegionDropDown = this.RegionService.GetRegion(response.data.Result);
            }));

            this.StateDropDown = this.StateService.Find().then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));

            
            this.LeadSourceDropDown = this.LSService.Find().then((response => {
                this.LeadSourceDropDown = this.LSService.GetLeadSource(response.data.Result);
            }));

            let that = this;
            
            this.AllLeadsHeaderModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllLeadsHeaderModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;


            $("#txtAllocated").autocomplete({

                source: function (request, res) {
                    that.getAutoUser.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoUser.GetAutoUser(response.data.Result);

                        res($.map(data, function (item, index) {
                            
                            return {

                                label: item.UserName,
                                value: item.UserName,
                                id: item.UserID

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.SearchList.AllocatedTo = ui.item.id;

                },
                change: function () {

                }
            });

            $("#txtCustomerName").autocomplete({
                //  source:['1a0','anjali','archana'],
                source: function (request, res) {
                    that.CustomerSapAutofill.FilterAutoComplete(request).then((response => {

                        let data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.CustomerName,
                                value: item.CustomerName,
                                id: item.CustomerID

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {
                    // Don't populate input field with selected value (pxid)
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.SearchList.CustomerName = ui.item.id;

                },
                change: function () {

                }
            });

            $("#txtSalesRep1").autocomplete({

                source: function (request, res) {
                    

                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {
                        
                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            
                            return {

                                label: item.ManagerName,
                                value: item.ManagerName,
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
                    
                    that.AllLeadsHeaderModel.AllocatedTo = ui.item.id;

                    //that.InsertLead.RefUserName = ui.item.id;
                    console.log(that.AllLeadsHeaderModel.AllocatedTo);

                },
                change: function () {

                }
            });

            $("#txtCampaign").autocomplete({
                source: function (request, res) {
                    that.getAutoCampaign.FilterCampaignAutoComplete(request).then((response => {
                        let data = that.getAutoCampaign.GetCampaignAutEmployee(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.CampaignName,
                                value: item.CampaignName,
                                id: item.CampaignID
                            }
                        }));
                    }));
                },
                minLength: 2,
                focus: (event, ui) => {
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.AllLeadsHeaderModel.Campaign = ui.item.id;
                },
                change: function () {

                }
            });

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
                    

                    that.AllLeadsHeaderModel.Createdby = ui.item.id;
                    console.log(that.AllLeadsHeaderModel.Createdby);

                },
                change: function () {

                }
            });

            $("#txtCustomerName").autocomplete({
                //  source:['1a0','anjali','archana'],
                source: function (request, res) {
                    that.CustomerSapAutofill.FilterAutoComplete(request).then((response => {

                        let data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.CustomerName,
                                value: item.CustomerName,
                                id: item.CustomerID

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {
                    // Don't populate input field with selected value (pxid)
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.AllLeadsHeaderModel.CustomerID = ui.item.id;
                    that.Search1(ui.item.id);
                    console.log(that.AllLeadsHeaderModel.CustomerID);
                },
                change: function () {
                }
            });  
        }

        addStatus(abc: string): void {

            LeadFollowUpListController.statusDropdownList.push(abc);

        }

        addLeadType(abc: string): void {
            LeadFollowUpListController.leadTypeDropdownList.push(abc);
            this.Division();

        }

        addDivision(abc: string): void {
            LeadFollowUpListController.divisionDropdownList.push(abc);
            this.Product();
        }

        addProduct(abc: string): void {
            LeadFollowUpListController.productDrpodownList.push(abc);
            this.Model();
        }

        addModel(abc: string): void {
            LeadFollowUpListController.modelDrpodownList.push(abc);
        }

        addLeadSource(abc: string): void {
            LeadFollowUpListController.leadSourceIDDropdownList.push(abc);
        }

        addLeadOrigin(abc: string): void {
            LeadFollowUpListController.leadOriginDropdownList.push(abc);
        }

        addRegion(abc: string): void {
            LeadFollowUpListController.regionDropdownList.push(abc);
        }

        addZone(abc: string): void {
            LeadFollowUpListController.zoneDropdownList.push(abc);
        }


        selectWhenToBuy(e) {
            (<HTMLInputElement>document.getElementById("txtWhenToBuy")).value = e;
        }

        ChangeField(): void {
            $("#txtWhenToBuy").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectWhenToBuy
            });
            if (this.QueAnsHeaderModel.FollowupStatus == "1" || this.QueAnsHeaderModel.FollowupStatus == "4") {
                $('#Reasonfield').show();
                $('#Whentobuyfield').hide();
            }
            else if (this.QueAnsHeaderModel.FollowupStatus == "3") {
                $('#Reasonfield').hide();
                $('#Whentobuyfield').show();
            }
            else {
                $('#Reasonfield').hide();
                $('#Whentobuyfield').hide();
            }
        }

        ChangeddlField(): void {
            
            if (this.QueAnsHeaderModel.AnsID2 == "6") {
                $('#namefield').show();
                $('#mobilefield').show();
            }
            else {
                $('#namefield').hide();
                $('#mobilefield').hide();
            }
        }

      

        Region(): void {
            
            this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((response => {
                this.CheckRegion = this.CheckRegionService.GetRegion(response.data.Result);
                this.ValidateInfo.RegionID = this.CheckRegion.RegionID;
            }));

        }
       

        ConDistrict(): void {

            this.ConDistrictDropDown = this.DistrictService.Find(this.ValidateInfo.StateID).then((response => {
                this.ConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        Division(): void {
            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);
            }));
        }
        Product(): void {
            
            this.AllLeadsHeaderModel.DivisionID = LeadFollowUpListController.divisionDropdownList.toString();
            this.ProductDropDown = this.ProductService.Find(this.AllLeadsHeaderModel.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
            }));
        }
        Model(): void {
            
            this.AllLeadsHeaderModel.ProductID = LeadFollowUpListController.productDrpodownList.toString();
            this.ModelDropDown = this.ModelService.Find(this.AllLeadsHeaderModel).then((response => {
                this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }
        District(): void {
            this.DistrictDropDown = this.DistrictService.Find(this.AllLeadsHeaderModel.StateIDs).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        LeadSource(data: any): void {

            this.LeadSourcedd = this.LeadSourceDDService.Find(this.ValidateInfo.ChannelID).then((response => {
                this.LeadSourcedd = this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
            }));
        }

        LeadSourceChange() {
            $("#Campaignfield").hide();
            $("#UserNamefield").hide();
            this.ValidateInfo.CampaignID = null;
            this.ValidateInfo.RefUserID = null;
            this.ValidateInfo.RefUserName = null;
            if (this.ValidateInfo.LeadSourceID == "10" || this.ValidateInfo.LeadSourceID == "24") {
                this.Campaign();
                $("#Campaignfield").show();
                $("#UserNamefield").hide();
            }
            else if (this.ValidateInfo.LeadSourceID == "2") {
                $("#Campaignfield").hide();
                $("#UserNamefield").show();
            }
        }

        Campaign(): void {
            
            this.Campaigndd = this.CampaignDDService.Find(this.ValidateInfo.LeadSourceID).then((response => {
                this.Campaigndd = this.CampaignDDService.GetCampaignDetails(response.data.Result);
            }));
        }

        Validate(data: any): void {
            var date = new Date();
            var currentMonth = date.getMonth();
            var currentDate = date.getDate();
            var currentYear = date.getFullYear();

            $("#txtWhenToBuy").datepicker({
                dateFormat: 'yy-mm-dd', changeMonth: true,
                changeYear: true,
                onSelect: this.ActDate,
                minDate: new Date(currentYear, currentMonth, currentDate)

            });

            var n1 = new Date();
            var currentMonth = n1.getMonth() + 1;
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();
            (<HTMLInputElement>document.getElementById("txtWhenToBuy")).innerHTML = y1 + "-" + currentMonth + "-" + d1;
            $('#txtWhenToBuy').val(y1 + "-" + currentMonth + "-" + d1);

            $('#Reasonfield').hide();
            $('#Whentobuyfield').hide();
            
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $("#pg-load").show();
            this.ValidateLeadService.Find(data).then((response => {
                this.ValidateInfo = this.ValidateLeadService.GetValidateLead(response.data.Result);

                /*
                 * @ Populating Lead Details Section @
                 */
                // $("#txtProduct").val(this.ValidateInfo.IndustrialSegmentID);



                $("#leadstatus").val(this.ValidateInfo.LeadStatusId);

                //this.DivisionDropDownP = this.DivisionPService.Find(this.ValidateInfo.CategoryID).then((response => {
                //    this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);
                //    this.ValidateInfo.DivisionID = this.DivisionDropDownP[0].DivisionID.toString();
                //}));
                $("#txtDivision").val(this.ValidateInfo.DivisionID);

                this.ProductDropDown = this.ProductService.Find(this.ValidateInfo.DivisionID).then((response => {
                    this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
                    this.ValidateInfo.ProductID = this.ProductDropDown[0].ProductID.toString();
                }));
                $("#txtProduct").val(this.ValidateInfo.ProductID);

                //this.ModelDropDown = this.ModelService.Find(this.ValidateInfo.ProductID).then((response => {
                //    this.ModelDropDown = this.ModelService.GetModelDD(response.data.Result);
                //    this.ValidateInfo.ModelID = this.ModelDropDown[0].ModelID.toString();
                //}));
                $("#txtModel").val(this.ValidateInfo.ModelID);
                //  this.ValidateInfo.ModelID = this.ValidateInfo.ModelID;
                this.LeadSource(this.ValidateInfo.ChannelID);
                this.LeadNo = this.ValidateInfo.LeadID;
                this.CustomerID = this.ValidateInfo.CustomerID;
                
                this.LeadSourceChange();
                if (this.ValidateInfo.LeadSourceID == "2") {
                    this.ValidateInfo.RefUserID = this.ValidateInfo.RefUserID;
                    this.ValidateInfo.RefUserName = this.ValidateInfo.RefUserName;
                    this.SearchUser.RefUserID = this.ValidateInfo.RefUserID;
                    this.SearchUser.RefUserName = this.ValidateInfo.RefUserName;
                }
                else if (this.ValidateInfo.LeadSourceID == "10" || this.ValidateInfo.LeadSourceID == "24") {
                    this.ValidateInfo.CampaignNameID = this.ValidateInfo.CampaignNameID;
                }

                var temp = this.ValidateInfo.SalesAreaID;
                this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
                    this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);
                    this.ValidateInfo.SalesAreaID = temp;
                }));


                this.SearchRegion.StateID = this.ValidateInfo.StateID;
                //this.District(this.ValidateInfo.StateID);

                this.SearchRegion.DistrictID = this.ValidateInfo.DistrictID;
                this.Region();
                this.Quelist = this.LeadFUQuestionsService.Find().then((response => {
                    this.Quelist = this.LeadFUQuestionsService.GetQuestion(response.data.Result);

                    this.Ans1DD = this.LeadFUAnswersService.FindAns("5").then((response => {
                        this.Ans1DD = this.LeadFUAnswersService.GetAns(response.data.Result);

                        this.Ans2DD = this.LeadFUAnswersService.FindAns("3").then((response => {
                            this.Ans2DD = this.LeadFUAnswersService.GetAns(response.data.Result);

                            this.Ans3DD = this.LeadFUAnswersService.FindAns("1").then((response => {
                                this.Ans3DD = this.LeadFUAnswersService.GetAns(response.data.Result);

                                this.Ans4DD = this.LeadFUAnswersService.FindAns("2").then((response => {
                                    this.Ans4DD = this.LeadFUAnswersService.GetAns(response.data.Result);

                                    this.Ans5DD = this.LeadFUAnswersService.FindAns("4").then((response => {
                                        this.Ans5DD = this.LeadFUAnswersService.GetAns(response.data.Result);

                                        this.Ans6DD = this.LeadFUAnswersService.FindAns("6").then((response => {
                                            this.Ans6DD = this.LeadFUAnswersService.GetAns(response.data.Result);

                                            $("#pg-load").hide();
                                        }));
                                    }));
                                }));
                            }));
                        }));
                    }));
                }));

                this.ViewDetails(this.LeadNo);

                this.ViewHistory(this.LeadNo);

                $("FollowupAddNew").show();
            }));


        }

        ActDate(e) {
            
            (<HTMLInputElement>document.getElementById("txtWhenToBuy")).value = e;
            var d = new Date();
            var c = new Date(e)
        }

        public Search1(data: any): void {
            this.CustomerSapAutofill.FindCustomerSAPID(data).then((response => {

                this.InsertContact.CustomerSAPID = this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
            }));
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            this.AllLeadsHeaderModel.StatusID = LeadFollowUpListController.statusDropdownList.toString();
            this.AllLeadsHeaderModel.LeadType = LeadFollowUpListController.leadTypeDropdownList.toString();
            this.AllLeadsHeaderModel.ModelId = LeadFollowUpListController.modelDrpodownList.toString();
            this.AllLeadsHeaderModel.LeadSourceID = LeadFollowUpListController.leadSourceIDDropdownList.toString();
            this.AllLeadsHeaderModel.LeadOrigin = LeadFollowUpListController.leadOriginDropdownList.toString();
            this.AllLeadsHeaderModel.ZoneID = LeadFollowUpListController.zoneDropdownList.toString();
            this.AllLeadsHeaderModel.RegionID = LeadFollowUpListController.regionDropdownList.toString();

            this.AllLeadsHeaderModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllLeadsHeaderModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.List = this.ListService.Find(this.AllLeadsHeaderModel).then((response => {
                this.List = this.ListService.Getlist(response.data.Result);
                $('#search-btn-loader').hide();

                if (this.List.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.List.forEach(function (value, key) {
                        that.incre = parseInt(key) + that.numRecords;
                    });

                    $('#search-btn-loader').hide();
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.List.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.List.length < that.numRecords) {
                    this.ShowNext = false;
                    this.ShowBack = false;
                }

                //this.AllLeadCountService.FindGrid(this.AllLeadsHeaderModel).then((response => {
                //    this.getAllLeadCount = this.AllLeadCountService.GetLeadsStatusCountGrid(response.data.Result);
                //}));
            }));
        }

        Search(): void {
            $('#search-btn-loader').show();
            $('.chkBox').prop('checked', false);
            
            this.FillGrid(this.numRecords);
            LeadFollowUpListController.statusDropdownList = [];
            LeadFollowUpListController.leadTypeDropdownList = [];
            LeadFollowUpListController.divisionDropdownList = [];
            LeadFollowUpListController.productDrpodownList = [];
            LeadFollowUpListController.leadSourceIDDropdownList = [];
            LeadFollowUpListController.leadOriginDropdownList = [];
            LeadFollowUpListController.zoneDropdownList = [];
            LeadFollowUpListController.regionDropdownList = [];
        }

        ViewDetails(data: any): void {
            
            this.AllLeadReportViewService.Find(data).then((response => {
                this.LeadReportView = this.AllLeadReportViewService.GetAllLeadReportView(response.data.Result);
                console.log(this.LeadReportView);
                

                // this.LeadNo = this.LeadReportView.LeadID;
                $('#LeadOrigin').val(this.LeadReportView.LeadOrigin);
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

        Submit(): void {
            
            this.QueAnsHeaderModel.QueID1 = "5";
            this.QueAnsHeaderModel.QueID2 = "3";
            this.QueAnsHeaderModel.QueID3 = "1";
            this.QueAnsHeaderModel.QueID4 = "2";
            this.QueAnsHeaderModel.QueID5 = "4";
            this.QueAnsHeaderModel.QueID6 = "6";
            this.QueAnsHeaderModel.LeadID = this.LeadNo;
            this.QueAnsHeaderModel.CustomerID = this.CustomerID;
            if (this.QueAnsHeaderModel.FollowupStatus == "3") {
                this.QueAnsHeaderModel.AnswerText = (<HTMLInputElement>document.getElementById("txtWhenToBuy")).value;
            }
            else {
                this.QueAnsHeaderModel.AnswerText = this.QueAnsHeaderModel.AnswerText;
            }

            if (this.QueAnsHeaderModel.SpokeTo == undefined || this.QueAnsHeaderModel.SpokeTo == null || this.QueAnsHeaderModel.SpokeTo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact Person Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //  alert("Please Enter SpokeTo");
            }
            else if (this.QueAnsHeaderModel.PhoneNo == undefined || this.QueAnsHeaderModel.PhoneNo == null || this.QueAnsHeaderModel.PhoneNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Mobile No ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.QueAnsHeaderModel.PhoneNo != undefined && this.QueAnsHeaderModel.PhoneNo != null && this.QueAnsHeaderModel.PhoneNo != "") && (isNaN(this.QueAnsHeaderModel.PhoneNo) || this.QueAnsHeaderModel.PhoneNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //   alert("Please Enter Valid Phone No");

            }

            else if ((this.QueAnsHeaderModel.FollowupStatus == "1" || this.QueAnsHeaderModel.FollowupStatus == "4") && (this.QueAnsHeaderModel.AnswerText == undefined || this.QueAnsHeaderModel.AnswerText == null || this.QueAnsHeaderModel.AnswerText == "")) {
                this.HideShow();
                this.popupMessage("Please Enter Reason", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //  alert("Please Enter Reason");

            }
            else if ((this.QueAnsHeaderModel.FollowupStatus == "3") && (this.QueAnsHeaderModel.AnswerText == undefined || this.QueAnsHeaderModel.AnswerText == null || this.QueAnsHeaderModel.AnswerText == "")) {
                this.HideShow();
                this.popupMessage("Please Enter When To Buy", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //   alert("Please Enter When To Buy");

            }
            else if (this.QueAnsHeaderModel.AnsID1 == undefined || this.QueAnsHeaderModel.AnsID1 == null || this.QueAnsHeaderModel.AnsID1 == "") {
                this.HideShow();
                this.popupMessage("Please Enter AnsOne", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //  alert("Please Enter AnsOne");

            }
           
            else if (this.QueAnsHeaderModel.AnsID2 == undefined || this.QueAnsHeaderModel.AnsID2 == null || this.QueAnsHeaderModel.AnsID2 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Answer for 2nd Question", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //  alert("Please Enter Answer for 2nd Question");

            }
            else if ((this.QueAnsHeaderModel.AnsID2 == "6") && (this.QueAnsHeaderModel.RefName == undefined || this.QueAnsHeaderModel.RefName == null || this.QueAnsHeaderModel.RefName == "")) {
                this.HideShow();
                this.popupMessage("Please Enter Refer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //   alert("Please Enter When To Buy");

            }
            else if ((this.QueAnsHeaderModel.AnsID2 == "6") && (this.QueAnsHeaderModel.RefMobileNo == undefined || this.QueAnsHeaderModel.RefMobileNo == null || this.QueAnsHeaderModel.RefMobileNo == "")) {
                this.HideShow();
                this.popupMessage("Please Enter Refer Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //   alert("Please Enter When To Buy");

            }
            else if ((this.QueAnsHeaderModel.RefMobileNo != undefined && this.QueAnsHeaderModel.RefMobileNo != null && this.QueAnsHeaderModel.RefMobileNo != "") && (isNaN(this.QueAnsHeaderModel.RefMobileNo) || this.QueAnsHeaderModel.RefMobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //   alert("Please Enter Valid Phone No");

            }
            else if (this.QueAnsHeaderModel.AnsID3 == undefined || this.QueAnsHeaderModel.AnsID3 == null || this.QueAnsHeaderModel.AnsID3 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Answer for 3rd Question", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //  alert("Please Enter Answer for 3rd Question");

            }
            else if (this.QueAnsHeaderModel.AnsID4 == undefined || this.QueAnsHeaderModel.AnsID4 == null || this.QueAnsHeaderModel.AnsID4 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Answer for 4th Question", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                // alert("Please Enter Answer for 4th Question");

            }
            else if (this.QueAnsHeaderModel.AnsID5 == undefined || this.QueAnsHeaderModel.AnsID5 == null || this.QueAnsHeaderModel.AnsID5 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Answer for 5th Question", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                //  alert("Please Enter Answer for 5th Question");

            }
            else {

                if (this.UserID != null || this.UserID != "") {
                    this.QueAnsHeaderModel.AnsweredBy = this.UserID;
                }
                
                if ($("#ddlFollowupStatus").val() == "1") {
                    this.QueAnsHeaderModel.FollowupStatus = "Lost";
                }
                else if ($("#ddlFollowupStatus").val() == "2") {
                    this.QueAnsHeaderModel.FollowupStatus = "Won";
                }
                else if ($("#ddlFollowupStatus").val() == "3") {
                    this.QueAnsHeaderModel.FollowupStatus = "Still Interested";
                }
                else if ($("#ddlFollowupStatus").val() == "4") {
                    this.QueAnsHeaderModel.FollowupStatus = "Not Interested";
                }
                 else {
                    this.QueAnsHeaderModel.FollowupStatus = "Not Contactable";
                }
               
               
                this.InsertLeadQueAnsService.PostQueAns(this.QueAnsHeaderModel).then(response => {

                    if (response.data.Result == true) {
                        

                        $("#FollowupAddNew").modal('hide');
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Lead Followup Saved Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        this.QueAnsHeaderModel = null;
                        (<HTMLInputElement>document.getElementById("txtWhenToBuy")).value = "";
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);

                    }


                    else {

                        $("#FollowupAddNew").show();
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                });
            }
        }

        ViewHistory(data): void {
            
            this.HistList = this.HistListService.Find(data).then((response => {
                this.HistList = this.HistListService.Getlist(response.data.Result);
            }));
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.List.slice(begin, end);
            if (this.page + 1 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        RefreshFields() {
            this.Validate(this.LeadNo);
            this.ViewDetails(this.LeadNo);
           
        }

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.List.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.SearchList.LeadID = "";
            this.SearchList.StatusID = "";
            this.SearchList.CustomerName = "";
            this.SearchList.AllocatedTo = "";
            //this.CategorySearch = "";
            $("#txtCustomerName").val("");
            $("#txtLead").val("");
            $("#txtAllocated").val("");
            $("#txtleadstatus").val("");

        }

        ClearFields() {
            this.QueAnsHeaderModel.SpokeTo = "";
            this.QueAnsHeaderModel.PhoneNo = "";
            this.QueAnsHeaderModel.AnsOne = "";
            this.QueAnsHeaderModel.AnswerTextTwo = "";
            this.QueAnsHeaderModel.AnswerTextThree = "";
            this.QueAnsHeaderModel.AnswerTextFour = "";
            this.QueAnsHeaderModel.AnswerTextFive = "";
            this.QueAnsHeaderModel.AnswerText = "";
            (<HTMLInputElement>document.getElementById("txtWhenToBuy")).value = "";

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
    }

    class LeadFollowUpListComponentController implements ng.IComponentOptions {
        static Name: string = "leadfollowuplistcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadFollowUpListController;
            this.templateUrl = "/Scripts/App/LeadFollowUpList/Template/LeadFollowUpList.html";
        }
    }

    app.AddComponent(LeadFollowUpListComponentController.Name, new LeadFollowUpListComponentController());


}




