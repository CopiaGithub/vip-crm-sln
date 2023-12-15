namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import InsertProjectDetail = GCPL.Model.InsertProjectDataDetailsModel;
    import Lead = GCPL.Model.InsertLeadModel;
    import CustomerDetails = GCPL.Model.LeadCustomerListModel;
    import contactinfo = GCPL.Model.ProjectContactDetailsListModel;
    import ContactMaster = GCPL.Model.InsertContactMaster;
    import CustomerMaster = GCPL.Model.InsertCustomerMaster;
    import CustomerValidate = GCPL.Model.CustomerViewModel;
    interface IProjectTrackerController {
        //InsertProjectDetails: InsertProjectDetail;
        //ProjectTypeDD: Array<Model.GetProjectTypeDDModel>;
        //ProjectOwnershipDD: Array<Model.GetOwnershipModel>;
        //ProjectIndustryDD: Array<Model.GetIndustryDDModel>;
        //ProjectSourceDD: Array<Model.GetProjectSourceModel>;
        //ProjectStageDD: Array<Model.GetProjectStageDDModel>; 
        //ProjectID: any;
        InsertLead: Lead;
        Search(data: any): void;
        
        PromotorInsertCust: CustomerDetails;
        CustDistrictDropDown: Array<Model.DistrictddlModel>
        CustStateDropDown: Array<Model.StateddlModel>
        CustCountryDropDown: Array<Model.CountryddlModel>
        Contactinfo: contactinfo;
        DivisionDropDownP: Array<Model.DivisionDDPModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        ChannelDD: Array<Model.ChannelDDModel>
        LeadSourcedd: Array<Model.LeadSourceDetailsModel>
        AddNewSearch(data: any): void;
        AddNewInsertCust: CustomerDetails;
        SubmitAddNewContact(): void;
        AddNewInsertContact: ContactMaster;
        DesignationDropDown: Array<Model.DesignationddlModel>
        AddConStateDropDown: Array<Model.StateddlModel>
        AddConCountryDropDown: Array<Model.CountryddlModel>
        AddConDistrictDropDown: Array<Model.DistrictddlModel>
        AddNewCustomerSubmit(): void;
        InsertCustomer: CustomerMaster;
        CustomerID: any;
        StateDropDown: Array<Model.StateddlModel>
        CutomerDistrictDropDown: Array<Model.DistrictddlModel>
        ConCountryDropDown: Array<Model.CountryddlModel>
        ConStateDropDown: Array<Model.StateddlModel>
        ConDistrictDropDown: Array<Model.DistrictddlModel>
        DepartmentDropDown: Array<Model.DepartmentddlModel>
        IndustrialSegmentDropDown: Array<Model.IndustrialSegmentddlModel>
        DivisionDropDown: Array<Model.DivisionddlModel>
        IndustryDivisionDropDown: Array<Model.IndustryDivisionddlModel>
        SalesAreaDropDown: Array<Model.SalesAreaddlModel>
        SalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        CustClassDropDown: Array<Model.CustomerClassModel>
        CustomerMasterlist: Array<Model.ProjCustomerListModel>;
        CustomerView: Array<Model.CustomerViewModel>;
        CustProjectTypeDD: Array<Model.GetCustProjectTypeDDModel>;
        AddCustProjectType: Array<Model.GetAddCustProjectTypeDDModel>;
        UserMasterDropDown: Array<Model.UserMasterddlModel>;
        Campaigndd: Array<Model.CampaignDetailsModel>;
        ZoneDD: Array<Model.ZoneDDModel>;
        DeleteContact(ContactID: any): void;
        EditActivites: Array<Model.EditActlistModel>;
    }

    class ProjectTrackerController implements IProjectTrackerController {
        CustomerIDReff: any; //shubham
        RoleID = null;
      
        CalendarEvtArray = [];
        ProjectIndustryDD = null;
        ProjectSourceDD = null;
        ProjectOwnershipDD = null;
        ProjectTypeDD = null;
        ProjectStageDD = null;
        ProjectID = null;
        ProjectCustomerList = null;
        ProjectContactCustomerList = null;
        ProjectDataInfo = null;
        InsertProjectDetails = null;
        LeadTypeDropDown = null;
        LeadSalesOfficeDropDown = null;
        LeadCategoryDropDown = null;
        PurchaseTimlinedd = null;
        CategoryDropDown = null;
        DivisionDropDownP = null;
        private Cookie: any = null;
        InsertLead = null;
        PromotorInsertCust = null;
        CustDistrictDropDown = null;
        CustStateDropDown = null;
        CustCountryDropDown = null;
        LCustomer = null;
        Contactinfo = null;
        Leadinfo = null;
        EMAIL_REGEXP = null;
        UserID = null;
        ProductDropDown = null;
        ModelDropDown = null;
        ChannelDD = null;
        LeadSourcedd = null;
        AddNewInsertCust = null;
        AddNewInsertContact = null;
        DesignationDropDown = null;
        AddConStateDropDown = null;
        AddConCountryDropDown = null;
        AddConDistrictDropDown = null;
        InsertCustomer = null;
        CustomerID = null;
        StateDropDown = null;
        CutomerDistrictDropDown = null;
        ConStateDropDown = null;
        ConDistrictDropDown = null;
        ConCountryDropDown = null;
        DepartmentDropDown = null;
        IndustrialSegmentDropDown = null;
        DivisionDropDown = null;
        IndustryDivisionDropDown = null;
        SalesAreaDropDown = null;
        SalesOfficeDropDown = null;
        CustClassDropDown = null;
        CustomerMasterlist = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        CreateLeadList = null;
        CustomerView = null;
        CustProjectTypeDD = null;
        AddCustProjectType = null;
        UserMasterDropDown = null;
        Campaigndd = null;
        ZoneDD = null;
        ActivityList = null;
        ActivitySearch = null;
        EditActivites = null;
        PromotorCustomerID = null;
        ProjectAssignDropdownList = [];
        private ProjectTypeService: Service.IProjectTypeService;
        private ProjectStageService: Service.IProjectStageService;
        private ProjectIndustryService: Service.IProjectIndustryService;
        private ProjectOwnershipService: Service.IProjectOwnershipService;
        private ProjectSourceService: Service.IProjectSourceService;
        private ProjectDataService: Service.IProjectDataService;
        private ProjectCustomerListService: Service.IProjectCustomerListService;
        private ProjectContactCustomerListService: Service.IProjectContactCustomerListService;
        private LeadTypeService: Service.ILeadTypeddService;
        private SalesOfficeService: Service.ISalesOfficeService;
        private LeadCategoryService: Service.ILeadCategoryDDService;
        private PurchaseTimlineDDService: Service.IPurchaseTimelineService;
        private CategoryService: Service.ICategoryddService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private CustomerInfoService: Service.IProjectLeadCustomerDetailsService;
        private DistrictService: Service.IDistrictddService;
        private StateDDService: Service.IStateDDService;
        private CountryService: Service.ICountryService;
        private LeadCustomerDetails1: Service.IProjectLeadCustomerGeService;
        private ContactInfoService: Service.IProjLeadContactDetailsService;
        private LeadDetailsService: Service.ILeadDetailsService;
        private InsertService: Service.IInsertLeadDetailsService;
        private DivisionPService: Service.IDivisionDDPService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService1;
        private ChannelDDService: Service.IChannelDDService;
        private LeadSourceDDService: Service.ILeadSourceDetailsService;
        private InsertContactService: Service.IInsertContactService;
        private DesignationService: Service.IDesignationService;
        private InsertCustomerService: Service.IInsertCustomerService;
        private StateService: Service.IStateddService;
        private DepartmentService: Service.IDepartmentService;
        private IndustrialSegmentService: Service.IIndustrialSegmentService;
        private DivisionService: Service.IDivisionDDService;
        private IndustryDivisionService: Service.IIndustryDivisionService;
        private SalesAreaService: Service.ISalesAreaService;
        private CustClassService: Service.ICustomerClassService;
        private LeadCustomerDetails: Service.ILeadCustomerGetDetailsService;
        private ProjectCreateLeadListService: Service.IProjectCreateLeadListService;
        private ProjectInsertService: Service.IProjectInsertService;
        private CustomerViewService: Service.ICustomerViewService;
        private ProjectInsertCustomerService: Service.IProjectInsertCustomerService;
        private ProjectInsertServicenew: Service.IProjectInsertServicenew;
        private CustProjectTypeService: Service.ICustProjectTypeService;
        private AddCustProjectTypeService: Service.IAddCustProjectTypeService;
        private CreateProjectService: Service.ICreateProjectService;
        private MultipleUserMasterService: Service.IMultipleUserMasterService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
        private getAutoUser: Service.IUserCodeAutoFillService;
        private CampaignDDService: Service.ICampaignDetailsService;
        private ZoneDDService: Service.IZoneDDService;
        private DeleteContactService: Service.IDeleteContactService;
        private ProjectActivityListService: Service.IProjectActivityListService;
        private EditService: Service.IEditService;
        private ProjectInsertNewContact: Service.IProjectInsertNewContact;
        private DeleteProjectCustomerService: Service.IDeleteProjectCustomerService;
        static $inject = ["ProjectDataService", "ProjectTypeService", "ProjectStageService", "ProjectIndustryService",
            "ProjectOwnershipService", "ProjectSourceService", "$location", "ProjectCustomerListService",
            "ProjectContactCustomerListService", "LeadTypeddService", "SalesOfficeService", "LeadCategoryDDService",
            "PurchaseTimelineService", "CategoryddService", "CustomerSapIdAutoFillService", "ProjectLeadCustomerDetailsService",
            "DistrictddService", "StateDDService", "CountryService", "ProjectLeadCustomerGeService", "ProjLeadContactDetailsService", "LeadDetailsService", "InsertLeadDetailsService", "DivisionDDPService", "ProductddService", "LeadTypeProductService1",
            "ChannelDDService", "LeadSourceDetailsService", "InsertContactService", "DesignationService", "InsertCustomerService", "StateddService", "DepartmentService", "IndustrialSegmentService", "DivisionDDService", "IndustryDivisionService", "SalesAreaService", "CustomerClassService", "LeadCustomerGetDetailsService", "ProjectCreateLeadListService",
            "ProjectInsertService", "CustomerViewService", "ProjectInsertCustomerService", "ProjectInsertServicenew", "CustProjectTypeService", "AddCustProjectTypeService", "CreateProjectService", "MultipleUserMasterService", "EmployeeAtofillService", "UserCodeAutoFillService", "CampaignDetailsService", "ZoneDDService", "DeleteContactService", "ProjectActivityListService", "EditService", "ProjectInsertNewContact", "DeleteProjectCustomerService", "$cookieStore"];

        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_ProjectDataService: Service.IProjectDataService, _ProjectType: Service.IProjectTypeService,
            _ProjectStageService: Service.IProjectStageService, _ProjectIndustryService: Service.IProjectIndustryService,
            _ProjectOwnershipService: Service.IProjectOwnershipService, _ProjectSourceService: Service.IProjectSourceService,
            private $location: ng.ILocationService, _ProjectCustomerListService: Service.IProjectCustomerListService,
            _ProjectContactCustomerListService: Service.IProjectContactCustomerListService, _LeadTypeService: Service.ILeadTypeddService,
            _SalesOfficeService: Service.ISalesOfficeService, _LeadCategoryService: Service.ILeadCategoryDDService,
            _PurchaseTimlineDDService: Service.IPurchaseTimelineService, _CategoryService: Service.ICategoryddService,
            _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _CustomerInfoService: Service.IProjectLeadCustomerDetailsService, _DistrictService: Service.IDistrictddService,
            _StateDDService: Service.IStateDDService, _CountryService: Service.ICountryService, _LeadCustomerDetails1: Service.IProjectLeadCustomerGeService, _ContactInfoService: Service.IProjLeadContactDetailsService,
            _LeadDetailsService: Service.ILeadDetailsService, _InsertService: Service.IInsertLeadDetailsService, _DivisionPService: Service.IDivisionDDPService, _ProductService: Service.IProductddService, _ModelService: Service.ILeadTypeProductService1,
            _ChannelDDService: Service.IChannelDDService, _LeadSourceDDService: Service.ILeadSourceDetailsService, _InsertContactService: Service.IInsertContactService, _DesignationService: Service.IDesignationService, _InsertCustomerService: Service.IInsertCustomerService, _StateService: Service.IStateddService, _DepartmentService: Service.IDepartmentService,
            _IndustrialSegmentService: Service.IIndustrialSegmentService, _DivisionService: Service.IDivisionDDService, _IndustryDivisionService: Service.IIndustryDivisionService,
            _SalesAreaService: Service.ISalesAreaService, _CustClassService: Service.ICustomerClassService, _LeadCustomerDetails: Service.ILeadCustomerGetDetailsService, _ProjectCreateLeadListService: Service.IProjectCreateLeadListService, _ProjectInsertService: Service.IProjectInsertService, _CustomerViewService: Service.ICustomerViewService,
            _ProjectInsertCustomerService: Service.IProjectInsertCustomerService, _ProjectInsertServicenew: Service.IProjectInsertServicenew, _CustProjectTypeService: Service.ICustProjectTypeService, _AddCustProjectTypeService: Service.IAddCustProjectTypeService, _CreateProjectService: Service.ICreateProjectService, _MultipleUserMasterService: Service.IMultipleUserMasterService, _getAutoSalesrep1: Service.IEmployeeAtofillService,
            _getAutoUser: Service.IUserCodeAutoFillService, _CampaignDDService: Service.ICampaignDetailsService, _ZoneDDService: Service.IZoneDDService, _DeleteContactService: Service.IDeleteContactService, _ProjectActivityListService: Service.IProjectActivityListService, _EditService: Service.IEditService, _ProjectInsertNewContact: Service.IProjectInsertNewContact, _DeleteProjectCustomerService: Service.IDeleteProjectCustomerService, private _cookieStore: any) {

            this.ProjectDataService = _ProjectDataService;
            this.ProjectTypeService = _ProjectType;
            this.ProjectStageService = _ProjectStageService;
            this.ProjectIndustryService = _ProjectIndustryService;
            this.ProjectOwnershipService = _ProjectOwnershipService;
            this.ProjectSourceService = _ProjectSourceService;

            this.LeadTypeService = _LeadTypeService;
            this.SalesOfficeService = _SalesOfficeService;
            this.LeadCategoryService = _LeadCategoryService;
            this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
            this.CategoryService = _CategoryService;

            this.ProjectContactCustomerListService = _ProjectContactCustomerListService;
            this.ProjectID = $location.search().ProjectID;
            this.ProjectCustomerListService = _ProjectCustomerListService;
            this.ProjectDataInfo = new Array<GCPL.Model.ProjectDataInfoModel>();
            this.ProjectCustomerList = new Array<GCPL.Model.ProjectCustomerModel>();
            this.ProjectContactCustomerList = new Array<GCPL.Model.ProjectContactCustomerModel>();

            this.LeadTypeDropDown = new Array<GCPL.Model.LeadTypeddlModel>();
            this.LeadSalesOfficeDropDown = new Array<GCPL.Model.SalesOfficeddlModel>();
            this.LeadCategoryDropDown = new Array<GCPL.Model.LeadCategoryddlModel>();
            this.PurchaseTimlinedd = new Array<GCPL.Model.PurchaseTimelineModel>();
            this.CategoryDropDown = new Array<GCPL.Model.CategoryddlModel>();
            this.InsertProjectDetails = new InsertProjectDetail();
            this.InsertLead = new Lead();
            this.PromotorInsertCust = new CustomerDetails();
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.CustomerInfoService = _CustomerInfoService;
            this.DistrictService = _DistrictService;
            this.StateDDService = _StateDDService;
            this.CountryService = _CountryService;
            this.LeadCustomerDetails1 = _LeadCustomerDetails1;
            this.LCustomer = new Array<GCPL.Model.GetProjectCustomerModel>();
            this.Contactinfo = new Array<GCPL.Model.ProjectContactDetailsListModel>();
            this.ContactInfoService = _ContactInfoService;
            this.LeadDetailsService = _LeadDetailsService;
            this.InsertService = _InsertService;
            this.DivisionPService = _DivisionPService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.ChannelDDService = _ChannelDDService;
            this.LeadSourceDDService = _LeadSourceDDService;
            this.AddNewInsertCust = new CustomerDetails();
            this.AddNewInsertContact = new ContactMaster();
            this.InsertCustomer = new CustomerMaster();
            this.InsertContactService = _InsertContactService;
            this.DesignationService = _DesignationService;
            this.InsertCustomerService = _InsertCustomerService;
            this.StateService = _StateService;
            this.DepartmentService = _DepartmentService;
            this.IndustrialSegmentService = _IndustrialSegmentService;
            this.DivisionService = _DivisionService;
            this.IndustryDivisionService = _IndustryDivisionService;
            this.SalesAreaService = _SalesAreaService;
            this.CustClassService = _CustClassService;
            this.LeadCustomerDetails = _LeadCustomerDetails;
            this.ProjectCreateLeadListService = _ProjectCreateLeadListService;
            this.ProjectInsertService = _ProjectInsertService;
            this.CustomerViewService = _CustomerViewService;
            this.CustomerView = new CustomerValidate();
            this.ProjectInsertCustomerService = _ProjectInsertCustomerService;
            this.ProjectInsertServicenew = _ProjectInsertServicenew;
            this.CustProjectTypeService = _CustProjectTypeService;
            this.AddCustProjectTypeService = _AddCustProjectTypeService;
            this.CreateProjectService = _CreateProjectService;
            this.MultipleUserMasterService = _MultipleUserMasterService;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.getAutoUser = _getAutoUser;
            this.CampaignDDService = _CampaignDDService;
            this.ZoneDDService = _ZoneDDService;
            this.DeleteContactService = _DeleteContactService;
            this.ProjectActivityListService = _ProjectActivityListService;
            this.EditService = _EditService;
            this.ProjectInsertNewContact = _ProjectInsertNewContact;
            this.DeleteProjectCustomerService = _DeleteProjectCustomerService;
            this.ActivitySearch = Array<GCPL.Model.ProjectActSearchModel>();
          
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
        }

        $onInit() {
            $("#txtFromDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectFromDate
            });
            $("#txtToDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectToDate
            });
            this.CheckSelectActivity();
            this.Init();
        }

        //Page Load Define Values//
        Init(): void {
            //this.InsertCustomer.IsNational = "0";

            this.ProjectAssignDropdownList = [];
            this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

            this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((response => {
                this.ProjectTypeDD = this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
            }));

            this.ProjectStageDD = this.ProjectStageService.FindDD().then((response => {
                this.ProjectStageDD = this.ProjectStageService.GetProjectStageDD(response.data.Result);
            }));

            this.ProjectIndustryDD = this.ProjectIndustryService.Find().then((response => {
                this.ProjectIndustryDD = this.ProjectIndustryService.GetIndustry(response.data.Result);
            }));

            this.ProjectOwnershipDD = this.ProjectOwnershipService.Find().then((response => {
                this.ProjectOwnershipDD = this.ProjectOwnershipService.GetOwnership(response.data.Result);
            }));

            this.ProjectSourceDD = this.ProjectSourceService.Find().then((response => {
                this.ProjectSourceDD = this.ProjectSourceService.GetProjectSource(response.data.Result);
            }));

            this.CustStateDropDown = this.StateDDService.Find().then((response => {
                this.CustStateDropDown = this.StateDDService.GetState(response.data.Result);
            }));

            this.CustCountryDropDown = this.CountryService.Find().then((response => {
                this.CustCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.ChannelDD = this.ChannelDDService.Find().then((response => {
                this.ChannelDD = this.ChannelDDService.GetChannelDDnew(response.data.Result);
            }));

            this.StateDropDown = this.StateService.Find(this.InsertCustomer.CountryID = '95').then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));

            this.ConStateDropDown = this.StateService.Find(this.InsertCustomer.ConCountryID = '95').then((response => {
                this.ConStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));

            this.LeadSalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.LeadSalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
            }));

            this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((response => {
                this.LeadCategoryDropDown = this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
            }));

            this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((response => {
                this.PurchaseTimlinedd = this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
            }));

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);
            }));

            this.DesignationDropDown = this.DesignationService.Find().then((response => {
                this.DesignationDropDown = this.DesignationService.GetDesignationName(response.data.Result);
            }));

            this.DepartmentDropDown = this.DepartmentService.Find().then((response => {
                this.DepartmentDropDown = this.DepartmentService.GetDepartmentName(response.data.Result);
            }));

            this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((response => {
                this.IndustrialSegmentDropDown = this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);
            }));

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivision(response.data.Result);
            }));

            this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((response => {
                this.IndustryDivisionDropDown = this.IndustryDivisionService.GetIndustryName(response.data.Result);
            }));

            this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
                this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);
            }));

            this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.SalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
            }));

            this.CustClassDropDown = this.CustClassService.Find().then((response => {
                this.CustClassDropDown = this.CustClassService.GetCustomerClass(response.data.Result);
            }));

            this.AddConCountryDropDown = this.CountryService.Find().then((response => {
                this.AddConCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.AddConStateDropDown = this.StateDDService.Find().then((response => {
                this.AddConStateDropDown = this.StateDDService.GetState(response.data.Result);
            }));

            this.CustProjectTypeDD = this.CustProjectTypeService.FindCustProjectTypeDD().then((response => {
                this.CustProjectTypeDD = this.CustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
            }));

            this.AddCustProjectType = this.AddCustProjectTypeService.FindCustProjectTypeDD().then((response => {
                this.AddCustProjectType = this.AddCustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
            }));

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));

            $("#txtProjectManager").autocomplete({
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
                    that.InsertProjectDetails.ProjectManagerID = ui.item.id;
                    
                },
                change: function () {

                }
            });

            $("#txtParentCus").autocomplete({
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
                    that.InsertCustomer.ParentCustomerID = ui.item.id;

                },
                change: function () {
                }
            });

            $("#txtUserName").autocomplete({
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
                    that.InsertLead.RefUserID = ui.item.id;
                    that.InsertLead.RefUserName = ui.item.value;
                },
                change: function () {

                }
            });

            this.CreateLeadList = this.ProjectCreateLeadListService.Find(this.ProjectID).then((response => {
                this.CreateLeadList = this.ProjectCreateLeadListService.GetCreateLeadlist(response.data.Result);
            }));

            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            $('#Campaignfield').hide();
            $('#UserNamefield').hide();
            if (this.RoleID == "5") {
                $("#txtProjectName").prop('disabled', true);
                $("#ddlProjectType").prop('disabled', true);
                $("#ddlProjectStage").prop('disabled', true);
                $("#txtCost").prop('disabled', true);
                $("#txtFromDate").prop('disabled', true);
                $("#txtToDate").prop('disabled', true);
                $("#ddlProjectIndustry").prop('disabled', true);
                $("#ddlProjectOwnership").prop('disabled', true);
                $("#txtProjectManager").prop('disabled', true);
                $("#divprojassign").hide();
                $("#ddcustProjectType").prop('disabled', true);
                $("#ddlProjectstageOwnership").prop('disabled', true);
                $("#txtZone").prop('disabled', true);
                $("#txtCommentsproj").prop('disabled', true);
                $("#btnProjUpSubmit").hide();
            }
            else {
                $("#txtProjectName").prop('disabled', false);
                $("#ddlProjectType").prop('disabled', false);
                $("#ddlProjectStage").prop('disabled', false);
                $("#txtCost").prop('disabled', false);
                $("#txtFromDate").prop('disabled', false);
                $("#txtToDate").prop('disabled', false);
                $("#ddlProjectIndustry").prop('disabled', false);
                $("#ddlProjectOwnership").prop('disabled', false);
                $("#txtProjectManager").prop('disabled', false);
                $("#divprojassign").show();
                $("#ddcustProjectType").prop('disabled', false);
                $("#ddlProjectstageOwnership").prop('disabled', false);
                $("#txtZone").prop('disabled', false);
                $("#txtCommentsproj").prop('disabled', false);
                $("#btnProjUpSubmit").show();

            }

            let that = this;
            $("#txtNewCustomerName").autocomplete({
                source: function (request, res) {
                    that.CustomerSapAutofill.FilterAutoComplete(request).then((response => {
                        let data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                        debugger;
                        res($.map(data, function (item, index) {
                            return {
                                label: item.CustomerName,
                                value: item.CustomerName,
                                id: item.CustomerID,
                            }
                        }));
                    }));
                },
                minLength: 2,
                focus: (event, ui) => {
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.InsertLead.CustomerID = ui.item.id;
                    debugger;
                    that.AddNewSearch(ui.item.id);
                },
                change: function () {

                }
            });
            if (this.ProjectID != null || this.ProjectID != "" || this.ProjectID != undefined) {
                $("#ass-btn-loader2").show();
                this.ProjectData(this.ProjectID);
            }

            this.ProjectCustomer(this.ProjectID);
        }

        Campaign(): void {
            this.Campaigndd = this.CampaignDDService.Find(this.InsertLead.LeadSourceID).then((response => {
                this.Campaigndd = this.CampaignDDService.GetCampaignDetails(response.data.Result);
            }));
        }

        LeadSourceChange() {
            $("#Campaignfield").hide();
            $("#UserNamefield").hide();
            if (this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") {
                this.Campaign();
                $("#Campaignfield").show();
                $("#UserNamefield").hide();
            }
            else if (this.InsertLead.LeadSourceID == "2") {
                $("#Campaignfield").hide();
                $("#UserNamefield").show();
            }
        }

        public Search(data: any): void {
            this.CustomerIDReff = data;   //Shubham
            this.CustomerInfoService.Find(data).then((response => {
                this.PromotorInsertCust = this.CustomerInfoService.GetLeadCustomerInfo(response.data.Result);
                var temp = this.PromotorInsertCust.DistrictID;
                this.CustDistrictDropDown = this.DistrictService.Find(this.PromotorInsertCust.StateID).then((response => {
                    this.CustDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                    this.PromotorInsertCust.DistrictID = temp;
                }));
                this.ShowFirstTime();
                this.ContactDetail();
                this.LeadDetail();
            }));
        }

        public AddNewSearch(data: any): void {
            this.CustomerInfoService.Find(data).then((response => {
                this.AddNewInsertCust = this.CustomerInfoService.GetLeadCustomerInfo(response.data.Result);
                var temp = this.AddNewInsertCust.DistrictID;
                this.CustDistrictDropDown = this.DistrictService.Find(this.AddNewInsertCust.StateID).then((response => {
                    this.CustDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                    this.AddNewInsertCust.DistrictID = temp;
                }));
                this.AddNewShowFirstTime();
                this.AddNewContactDetail();
                this.AddNewLeadDetail();
            }));
        }

        ShowFirstTime() {
            this.LeadCustomerDetails1.Find(this.PromotorInsertCust).then((response => {
                this.LCustomer = this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
            }));
            $("#existingCustomerList").show();
        }

        ContactDetail(): void {
            $("#existingContactList").show();
            this.Contactinfo = this.ContactInfoService.Find(this.PromotorInsertCust.CustomerID).then((response => {
                this.Contactinfo = this.ContactInfoService.GetLeadContactInfo(response.data.Result);
            }));
        }

        LeadDetail(): void {
            $("#existingLeadList").show();
            this.Leadinfo = this.LeadDetailsService.Find(this.PromotorInsertCust.CustomerID).then((response => {
                this.Leadinfo = this.LeadDetailsService.GetLeadInfo(response.data.Result);
            }));
        }

        AddNewShowFirstTime() {
            this.LeadCustomerDetails1.Find(this.AddNewInsertCust).then((response => {
                this.LCustomer = this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
            }));
            $("#NewexistingCustomerList").show();
        }

        AddNewContactDetail(): void {
            $("#NewexistingContactList").show();
            this.Contactinfo = this.ContactInfoService.Find(this.AddNewInsertCust.CustomerID).then((response => {
                this.Contactinfo = this.ContactInfoService.GetLeadContactInfo(response.data.Result);
            }));
        }

        AddNewLeadDetail(): void {
            $("#NewexistingLeadList").show();
            this.Leadinfo = this.LeadDetailsService.Find(this.AddNewInsertCust.CustomerID).then((response => {
                this.Leadinfo = this.LeadDetailsService.GetLeadInfo(response.data.Result);
            }));
        }

        CustDistrict(): void {
            this.CustDistrictDropDown = this.DistrictService.Find(this.PromotorInsertCust.StateID).then((response => {
                this.CustDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        AddNewCustDistrict(): void {
            this.CustDistrictDropDown = this.DistrictService.Find(this.AddNewInsertCust.StateID).then((response => {
                this.CustDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }

        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }

        getContact(data): void {
            this.Search(data);

            this.ProjectContactCustomerList = this.ProjectContactCustomerListService.Find(data).then((response => {
                this.ProjectContactCustomerList = this.ProjectContactCustomerListService.GetProjectContactCustomerList(response.data.Result);
            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));

            this.LeadSalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.LeadSalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
            }));

            this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((response => {
                this.LeadCategoryDropDown = this.LeadCategoryService.GetLeadCategoryName(response.data.Result);

            }));

            this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((response => {
                this.PurchaseTimlinedd = this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
            }));

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);
            }));



            //this.ProjectCustomer(this.ProjectID);
        }

        ProjectData(data: any): void {
            $("#ass-btn-loader2").show();
            this.ProjectDataService.Find(data).then((response => {
                this.ProjectDataInfo = this.ProjectDataService.GetProjectData(response.data.Result);
                $("#ass-btn-loader2").hide();
                debugger;

               


                this.InsertProjectDetails.ProjectID = this.ProjectDataInfo[0].ProjectID;
                this.InsertProjectDetails.ProjectName = this.ProjectDataInfo[0].ProjectName;
                this.InsertProjectDetails.ProjectNo = this.ProjectDataInfo[0].ProjectNo;
                this.InsertProjectDetails.ProjectTypeID = this.ProjectDataInfo[0].ProjectTypeID;
                this.InsertProjectDetails.ProjectType = this.ProjectDataInfo[0].ProjectType;
                this.InsertProjectDetails.ProjectStageID = this.ProjectDataInfo[0].ProjectStageID;
                this.InsertProjectDetails.ProjectStage = this.ProjectDataInfo[0].ProjectStage;
                this.InsertProjectDetails.Cost = this.ProjectDataInfo[0].Cost;
                this.InsertProjectDetails.ProjectOwnershipID = this.ProjectDataInfo[0].ProjectOwnershipID;
                this.InsertProjectDetails.ProjectOwnership = this.ProjectDataInfo[0].ProjectOwnership;
                this.InsertProjectDetails.ProjectSourceID = this.ProjectDataInfo[0].ProjectSourceID;
                this.InsertProjectDetails.ProjectSource = this.ProjectDataInfo[0].ProjectSource;
                this.InsertProjectDetails.Comments = this.ProjectDataInfo[0].Comments;
                this.InsertProjectDetails.ProjectIndustryID = this.ProjectDataInfo[0].ProjectIndustryID;
                this.InsertProjectDetails.ProjectIndustry = this.ProjectDataInfo[0].ProjectIndustry;
                this.InsertProjectDetails.CustProjectType = this.ProjectDataInfo[0].CustProjectType;
                this.InsertProjectDetails.ProjectOwner = this.ProjectDataInfo[0].ProjectOwner;
                this.InsertProjectDetails.ProjectManager = this.ProjectDataInfo[0].ProjectManager;
                debugger;
                this.InsertProjectDetails.ProjectManagerID = this.ProjectDataInfo[0].ProjectManagerID;
                this.InsertProjectDetails.ProjectManagerID = this.InsertProjectDetails.ProjectManagerID;
                //this.InsertProjectDetails.ProjectAssign = this.ProjectDataInfo[0].ProjectAssign;
                //this.InsertProjectDetails.ProjectAssignID = this.ProjectDataInfo[0].ProjectAssignID;
                this.InsertProjectDetails.ID = this.ProjectDataInfo[0].ID;
                this.InsertProjectDetails.ZoneID = this.ProjectDataInfo[0].ZoneID;
                (<HTMLInputElement>document.getElementById("txtFromDate")).value = this.ProjectDataInfo[0].ProjectStartDate;
                (<HTMLInputElement>document.getElementById("txtToDate")).value = this.ProjectDataInfo[0].CompletionDate;
                debugger;
                for (var i = 0; i < this.ProjectDataInfo.length; i++) {
                    this.InsertProjectDetails.ProjectAssignID = this.ProjectDataInfo[i].ProjectAssignID.toString();
                    this.InsertProjectDetails.ProjectAssign = this.ProjectDataInfo[i].ProjectAssign.toString();
                    this.ProjectAssignDropdownList.push({ userID: this.InsertProjectDetails.ProjectAssignID, userName: this.InsertProjectDetails.ProjectAssign });
                }
                this.ProjectAssign();
                this.GetActivityList();
            }));
        }

        ProjectAssign(): void {
            this.UserMasterDropDown = this.MultipleUserMasterService.Find(this.InsertProjectDetails.ZoneID).then((response => {
                this.UserMasterDropDown = this.MultipleUserMasterService.GetUserName(response.data.Result);
                debugger;
                for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                    for (var j = 0; j < this.UserMasterDropDown.length; j++) {
                        if (this.UserMasterDropDown[j].ID == this.ProjectAssignDropdownList[i].userID) {
                            this.UserMasterDropDown[j].IsChecked = true;
                        }
                    }
                }
            }));
        }

        Submit(): void {
            debugger;
            this.InsertProjectDetails.UserID = this.UserID;

            this.InsertProjectDetails.ProjectStartDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.InsertProjectDetails.CompletionDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            //this.InsertProjectDetails.ProjectManagerID = this.ProjectDataInfo[0].ProjectManagerID;
            if (this.InsertProjectDetails.ProjectName == undefined || this.InsertProjectDetails.ProjectName == null || this.InsertProjectDetails.ProjectName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.ProjectTypeID == undefined || this.InsertProjectDetails.ProjectTypeID == null || this.InsertProjectDetails.ProjectTypeID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.ProjectStageID == undefined || this.InsertProjectDetails.ProjectStageID == null || this.InsertProjectDetails.ProjectStageID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Stage", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.Cost == undefined || this.InsertProjectDetails.Cost == null || this.InsertProjectDetails.Cost == "") {
                this.HideShow();
                this.popupMessage("Please Enter Cost", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.ProjectStartDate == undefined || this.InsertProjectDetails.ProjectStartDate == null || this.InsertProjectDetails.ProjectStartDate == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Start Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.CompletionDate == undefined || this.InsertProjectDetails.CompletionDate == null || this.InsertProjectDetails.CompletionDate == "") {
                this.HideShow();
                this.popupMessage("Please Enter Completion Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.ProjectIndustryID == undefined || this.InsertProjectDetails.ProjectIndustryID == null || this.InsertProjectDetails.ProjectIndustryID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Industry", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.ProjectOwnershipID == undefined || this.InsertProjectDetails.ProjectOwnershipID == null || this.InsertProjectDetails.ProjectOwnershipID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Ownership", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.CustProjectType == undefined || this.InsertProjectDetails.CustProjectType == null || this.InsertProjectDetails.CustProjectType == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Project Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.ProjectManagerID == undefined || this.InsertProjectDetails.ProjectManagerID == null || this.InsertProjectDetails.ProjectManagerID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Manager", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.ZoneID == undefined || this.InsertProjectDetails.ZoneID == null || this.InsertProjectDetails.ZoneID == "") {
                this.HideShow();
                this.popupMessage("Please Select Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.ProjectSourceID == undefined || this.InsertProjectDetails.ProjectSourceID == null || this.InsertProjectDetails.ProjectSourceID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProjectDetails.Comments == undefined || this.InsertProjectDetails.Comments == null || this.InsertProjectDetails.Comments == "") {
                this.HideShow();
                this.popupMessage("Please Enter Project Comments", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                debugger;
                this.ProjectDataInfo.ZoneID = this.InsertProjectDetails.ZoneID;
                this.InsertProjectDetails.ProjectOwner = this.UserID;
                this.InsertProjectDetails.ProjectID = this.ProjectDataInfo[0].ProjectID;
                this.InsertProjectDetails.ProjectNo = this.ProjectDataInfo[0].ProjectNo;
                var ProjectAssignArray = [];
                for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                    ProjectAssignArray.push(this.ProjectAssignDropdownList[i].userID);
                }
                this.InsertProjectDetails.ProjectAssignID = ProjectAssignArray.toString();
                this.ProjectAssign();
                this.CreateProjectService.CreateProject(this.InsertProjectDetails).then((response => {
                    console.log(this.InsertProjectDetails);
                    if (response.data.Result != null) {
                        debugger;
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Project Data " + response.data.Result + " saved Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();
                        this.Clear();
                        //this.InsertProject = null;
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                }));
            }
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

        ProjectCustomer(data: any): void {
            debugger;
            this.ProjectCustomerList = this.ProjectCustomerListService.Find(data).then((response => {
                this.ProjectCustomerList = this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
            }));
        }

        SubmitPromotor(): void {

            if (this.PromotorInsertCust.CompanyName == undefined || this.PromotorInsertCust.CompanyName == null || this.PromotorInsertCust.CompanyName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertLead.LeadType == undefined || this.InsertLead.LeadType == null || this.InsertLead.LeadType == "") {
                this.HideShow();
                this.popupMessage("Please Select LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.LeadCategoryID == undefined || this.InsertLead.LeadCategoryID == null || this.InsertLead.LeadCategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Select LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.PurchaseTimelineID == undefined || this.InsertLead.PurchaseTimelineID == null || this.InsertLead.PurchaseTimelineID == "") {
                this.HideShow();
                this.popupMessage("Please Select Purchase Within", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.CategoryID == undefined || this.InsertLead.CategoryID == null || this.InsertLead.CategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Select Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.DivisionID == undefined || this.InsertLead.DivisionID == null || this.InsertLead.DivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.ProductID == undefined || this.InsertLead.ProductID == null || this.InsertLead.ProductID == "") {
                this.HideShow();
                this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.ModelID == undefined || this.InsertLead.ModelID == null || this.InsertLead.ModelID == "") {
                this.HideShow();
                this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.Quantity == undefined || this.InsertLead.Quantity == null || this.InsertLead.Quantity == "") {
                this.HideShow();
                this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.ChannelID == undefined || this.InsertLead.ChannelID == null || this.InsertLead.ChannelID == "") {
                this.HideShow();
                this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.LeadSourceID == undefined || this.InsertLead.LeadSourceID == null || this.InsertLead.LeadSourceID == "") {
                this.HideShow();
                this.popupMessage("Please Select LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.LeadSourceID == "2" && (this.InsertLead.RefUserID == undefined || this.InsertLead.RefUserID == null || this.InsertLead.RefUserID == "")) {
                this.HideShow();
                this.popupMessage("Please Enter Ref User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") && (this.InsertLead.CampaignID == undefined || this.InsertLead.CampaignID == null || this.InsertLead.CampaignID == "")) {
                this.HideShow();
                this.popupMessage("Please Select Campaign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (!$("input[name=contactradio]:checked").val()) {
                this.HideShow();
                this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else {
                this.InsertLead.ContactID = $('#messageCheckbox:checked').val();
                this.InsertLead.CustomerID = this.PromotorInsertCust.CustomerID;
                this.InsertLead.CompanyName = this.PromotorInsertCust.CompanyName;
                this.InsertLead.BusinessPartnerNo = this.PromotorInsertCust.BusinessPartnerNo;
                this.InsertLead.Email = this.PromotorInsertCust.Email;
                this.InsertLead.MobileNo = this.PromotorInsertCust.MobileNo;
                this.InsertLead.PhoneNo = this.PromotorInsertCust.PhoneNo;
                this.InsertLead.Pincode = this.PromotorInsertCust.Pincode;
                this.InsertLead.Address1 = this.PromotorInsertCust.Address1;
                this.InsertLead.Address2 = this.PromotorInsertCust.Address2;
                this.InsertLead.SalesOfficeID = this.PromotorInsertCust.SalesOfficeID;
                this.InsertLead.CountryID = '95';
                this.InsertLead.StateID = this.PromotorInsertCust.StateID;
                this.InsertLead.DistrictID = this.PromotorInsertCust.DistrictID;
                this.InsertLead.City = this.PromotorInsertCust.City;
                this.InsertLead.ProjectID = this.ProjectCustomerList[0].ProjectID;
                if (this.UserID != null || this.UserID != "") {

                    this.InsertLead.UserID = this.UserID;
                }
                debugger;
                this.ProjectInsertService.PostLead(this.InsertLead).then((response => {
                    if (response.data.Result == 0) {
                        $("#errorclose").hide();
                        $("#errorcloselead").hide();
                        $("#close").show();
                        this.popupMessage("Lead already exists for this Customer & Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $('#MyLead').click();
                        this.FillGrid(this.numRecords);

                    }
                    else if (response.data.Result > 0) {
                        $("#errorclose").hide();
                        $("#errorcloselead").hide();
                        $("#close").show();
                        this.popupMessage("LeadID - " + response.data.Result + " created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#MyLead').click();
                        this.FillGrid(this.numRecords);
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $('#MyLead').click();
                        this.FillGrid(this.numRecords);
                    }

                }));
            }
        }

        Division(): void {
            this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLead.CategoryID).then((response => {
                this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);
            }));
        }

        Product(): void {
            this.ProductDropDown = this.ProductService.Find(this.InsertLead.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
            }));
        }

        Model(): void {
            this.ModelDropDown = this.ModelService.Find(this.InsertLead).then((response => {
                this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }

        LeadSource(): void {
            this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLead.ChannelID).then((response => {
                this.LeadSourcedd = this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
            }));
        }

        ShowAll() {
            if ($("#btnShow").text() == "Show Similar" && this.PromotorInsertCust.CompanyName != undefined && this.PromotorInsertCust.CompanyName != null && this.PromotorInsertCust.CompanyName != "") {
                $("#btnShow").html("Cancel");

                this.LeadCustomerDetails1.Find(this.PromotorInsertCust).then((response => {
                    this.LCustomer = this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                }
                ));
                $("#existingCustomerList").show();
            }
            else {
                $("#btnShow").html("Show Similar");
                $("#existingCustomerList").hide();
            }
        }

        AddNewShowAll() {
            if ($("#AddNewbtnShow").text() == "Show Similar" && this.AddNewInsertCust.CompanyName != undefined && this.AddNewInsertCust.CompanyName != null && this.AddNewInsertCust.CompanyName != "") {
                $("#AddNewbtnShow").html("Cancel");

                this.LeadCustomerDetails1.Find(this.AddNewInsertCust).then((response => {
                    this.LCustomer = this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                }
                ));
                $("#NewexistingCustomerList").show();

            }
            else {
                $("#AddNewbtnShow").html("Show Similar");
                $("#NewexistingCustomerList").hide();
            }
        }

        NewCustShowAll() {
            if ($("#NewCustbtnShow").text() == "Show Similar" && this.InsertCustomer.CompanyName != undefined && this.InsertCustomer.CompanyName != null && this.InsertCustomer.CompanyName != "") {
                $("#NewCustbtnShow").html("Cancel");
                this.LeadCustomerDetails.Find(this.InsertCustomer).then((response => {
                    this.CustomerMasterlist = this.LeadCustomerDetails.GetCustomerDetails(response.data.Result);
                }));
                $("#show-similar-table").show();
            }
            else {
                $("#NewCustbtnShow").html("Show Similar");
                $("#show-similar-table").hide();
            }
        }

        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
            $("#errorcloselead").hide();
        }

        Adopt(data): void {
            this.Search(data);
        }

        AddNewAdopt(data): void {
            this.AddNewSearch(data);
        }

        SubmitAddNewContact(): void {
            debugger;
            this.AddNewInsertContact.CustomerID = this.AddNewInsertCust.CustomerID;
            if (this.AddNewInsertContact.CustomerID.length == 0) {
                this.HideShow();
                this.popupMessage("First Select Customer And Then Add Contact", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.AddNewInsertContact.ContactName == undefined || this.AddNewInsertContact.ContactName == null || this.AddNewInsertContact.ContactName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact Name ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.AddNewInsertContact.MobileNo == undefined || this.AddNewInsertContact.MobileNo == null || this.AddNewInsertContact.MobileNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.AddNewInsertContact.MobileNo != undefined && this.AddNewInsertContact.MobileNo != null && this.AddNewInsertContact.MobileNo != "") && (isNaN(this.AddNewInsertContact.MobileNo) || this.AddNewInsertContact.MobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.AddNewInsertContact.PhoneNo != undefined && this.AddNewInsertContact.PhoneNo != null && this.AddNewInsertContact.PhoneNo != "") && (isNaN(this.AddNewInsertContact.PhoneNo) || this.AddNewInsertContact.PhoneNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.AddNewInsertContact.Email != undefined && this.AddNewInsertContact.Email != null && this.AddNewInsertContact.Email != "" && !(this.EMAIL_REGEXP.test(this.AddNewInsertContact.Email))) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if ((this.AddNewInsertContact.PostalCode != undefined && this.AddNewInsertContact.PostalCode != null && this.AddNewInsertContact.PostalCode != "") && (isNaN(this.AddNewInsertContact.PostalCode) || this.AddNewInsertContact.PostalCode.length != 6)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.AddNewInsertContact.DepartmentID == undefined || this.AddNewInsertContact.DepartmentID == null || this.AddNewInsertContact.DepartmentID == "") {
                this.HideShow();
                this.popupMessage("Please Select Department ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.AddNewInsertContact.FOPID == undefined || this.AddNewInsertContact.FOPID == null || this.AddNewInsertContact.FOPID == "") {
                this.HideShow();
                this.popupMessage("Please Select Designation  ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                this.AddNewInsertContact.CountryID = '95';
                this.AddNewInsertContact.Status = '1';
                this.AddNewInsertContact.Designation = $("#txtNewContactDesignation option:selected").text();
                this.InsertContactService.PostContact(this.AddNewInsertContact).then((response => {
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#errorcloselead").hide();
                        $("#close").show();
                        this.popupMessage("Contact ID -  " + response.data.Result + " Created Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#create-contact').click();

                        this.ContactDetail();
                        this.AddNewInsertContact = null;
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Contact already exists with the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

                    }
                }));
            }

        }

        popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
            $("#message-text").html(Message);
            $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
            $(ShowImg).show();
            $(HideImg).hide();
            $("#succeess-message-box").modal("show");
        }

        DeleteContact(ContactID): void {
            this.DeleteContactService.Find(ContactID, this.ProjectID).then((response => {
                this.DeleteContactService.postContactDelete(response.data.Result);
                $("#errorclose").hide();
                $("#errorcloselead").hide();
                $("#close").show();
                this.popupMessage("Record Deleted Successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                debugger;
                this.getContact(this.ProjectCustomerList[0].CustomerID);
                this.ProjectCustomer(this.ProjectID);
            }));
        }

        DeleteCustomer(CustomerID): void {
            if (confirm("Are you sure you want to delete this promotor/sub-contractor data?")) {
                this.DeleteProjectCustomerService.Find(CustomerID, this.ProjectID).then((response => {
                    this.DeleteProjectCustomerService.PostCustomerDelete(response.data.Result);
                    $("#errorclose").hide();
                    $("#errorcloselead").hide();
                    $("#close").show();
                    this.getContact(this.ProjectCustomerList[0].CustomerID);
                    this.ProjectCustomer(this.ProjectID);
                }));
            }
            else {
                $("#errorclose").hide();
                $("#errorcloselead").hide();
                $("#close").show();
                this.getContact(this.ProjectCustomerList[0].CustomerID);
                this.ProjectCustomer(this.ProjectID);
            }
            //this.popupMessage("Record Deleted Successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
        }

        AddConDistrict(): void {
            this.AddConDistrictDropDown = this.DistrictService.Find(this.AddNewInsertContact.StateID).then((response => {
                this.AddConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        AddNewCustomerSubmit(): void {

            if (this.InsertCustomer.CustomerID != null && this.InsertCustomer.CustomerID != "" && this.InsertCustomer.CustomerID != undefined) {
                this.InsertCustomer.UpdatedBy = this.UserID;
            }
            else {
                this.InsertCustomer.CreatedBy = this.UserID;
            }
            this.InsertCustomer.RoleID = this.RoleID;

            //this.InsertCustomer.AccountTypeID = "1";
            if (this.InsertCustomer.CompanyName == undefined || this.InsertCustomer.CompanyName == null || this.InsertCustomer.CompanyName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");


            }
            else if (this.InsertCustomer.CompanyName.length <= 5) {
                this.HideShow();
                this.popupMessage("Company Name requires minimum 5 characters.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else if (this.InsertCustomer.Address1 == undefined || this.InsertCustomer.Address1 == null || this.InsertCustomer.Address1 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertCustomer.MobileNo == undefined || this.InsertCustomer.MobileNo == null || this.InsertCustomer.MobileNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if ((this.InsertCustomer.MobileNo != undefined && this.InsertCustomer.MobileNo != null && this.InsertCustomer.MobileNo != "") && (isNaN(this.InsertCustomer.MobileNo) || this.InsertCustomer.MobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertCustomer.PhoneNo != undefined && this.InsertCustomer.PhoneNo != null && this.InsertCustomer.PhoneNo != "") && (isNaN(this.InsertCustomer.PhoneNo) || this.InsertCustomer.PhoneNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.Email != undefined && this.InsertCustomer.Email != null && this.InsertCustomer.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertCustomer.Email))) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.PinCode == undefined || this.InsertCustomer.PinCode == null || this.InsertCustomer.PinCode == "") {
                this.HideShow();
                this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");


            }
            else if ((this.InsertCustomer.PinCode != undefined && this.InsertCustomer.PinCode != null && this.InsertCustomer.PinCode != "") && (isNaN(this.InsertCustomer.PinCode) || this.InsertCustomer.PinCode.length != 6)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");


            }

            else if (this.InsertCustomer.IsNational == undefined || this.InsertCustomer.IsNational == null || this.InsertCustomer.IsNational == "") {
                this.HideShow();
                this.popupMessage("Please Enter IsNational", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else if (this.InsertCustomer.StateID == undefined || this.InsertCustomer.StateID == null || this.InsertCustomer.StateID == "") {
                this.HideShow();
                this.popupMessage("Please Enter State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");


            }
            else if (this.InsertCustomer.DistrictID == undefined || this.InsertCustomer.DistrictID == null || this.InsertCustomer.DistrictID == "") {
                this.HideShow();
                this.popupMessage("Please Enter District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");


            }

            else if (this.InsertCustomer.ContactName == undefined || this.InsertCustomer.ContactName == null || this.InsertCustomer.ContactName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.ConMobileNo == undefined || this.InsertCustomer.ConMobileNo == null || this.InsertCustomer.ConMobileNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertCustomer.ConMobileNo != undefined && this.InsertCustomer.ConMobileNo != null && this.InsertCustomer.ConMobileNo != "") && (isNaN(this.InsertCustomer.ConMobileNo) || this.InsertCustomer.ConMobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if ((this.InsertCustomer.ConPhoneNo != undefined && this.InsertCustomer.ConPhoneNo != null && this.InsertCustomer.ConPhoneNo != "") && (isNaN(this.InsertCustomer.ConPhoneNo) || this.InsertCustomer.ConPhoneNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.ConEmail != undefined && this.InsertCustomer.ConEmail != null && this.InsertCustomer.ConEmail != "" && !(this.EMAIL_REGEXP.test(this.InsertCustomer.ConEmail))) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.DesignationID == undefined || this.InsertCustomer.DesignationID == null || this.InsertCustomer.DesignationID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Designation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.DepartmentID == undefined || this.InsertCustomer.DepartmentID == null || this.InsertCustomer.DepartmentID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Department", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.IndustrialSegmentID == undefined || this.InsertCustomer.IndustrialSegmentID == null || this.InsertCustomer.IndustrialSegmentID == "") {
                this.HideShow();
                this.popupMessage("Please Enter IndustrialSegment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.DivisionID == undefined || this.InsertCustomer.DivisionID == null || this.InsertCustomer.DivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Division Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.IndustryDivisionID == undefined || this.InsertCustomer.IndustryDivisionID == null || this.InsertCustomer.IndustryDivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Industry Division ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.SalesAreaID == undefined || this.InsertCustomer.SalesAreaID == null || this.InsertCustomer.SalesAreaID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SalesArea", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.SalesOfficeID == undefined || this.InsertCustomer.SalesOfficeID == null || this.InsertCustomer.SalesOfficeID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertCustomer.CustomerRatingID == undefined || this.InsertCustomer.CustomerRatingID == null || this.InsertCustomer.CustomerRatingID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Class", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.ConStateID == undefined || this.InsertCustomer.ConStateID == null || this.InsertCustomer.ConStateID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.ConDistrictID == undefined || this.InsertCustomer.ConDistrictID == null || this.InsertCustomer.ConDistrictID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else {

                this.InsertCustomer.CountryID = '95';
                this.InsertCustomer.ConCountryID = '95';
                this.InsertCustomer.ProjectID = this.ProjectID;
                if (this.InsertCustomer.AccountTypeID == "1") {
                    this.InsertCustomer.AccountTypeID = "2";
                }
                else if (this.InsertCustomer.AccountTypeID == "0") {
                    this.InsertCustomer.AccountTypeID = "1";
                }

                this.ProjectInsertCustomerService.PostCustomer(this.InsertCustomer).then((response => {

                    if (response.data.Result != null) {
                        if (this.CustomerID > 0) {
                            $("#errorclose").hide();
                            $("#errorcloselead").hide();
                            $("#close").show();
                            this.popupMessage("Customer ID - " + this.CustomerID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            $("#create-Customer").click();
                            this.ProjectCustomerList = this.ProjectCustomerListService.Find(this.InsertCustomer.ProjectID).then((response => {
                                this.ProjectCustomerList = this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                            }));
                        }
                        else {
                            $("#errorclose").hide();
                            $("#errorcloselead").hide();
                            $("#close").show();
                            this.popupMessage("Customer ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            $("#create-Customer").click();
                            this.ProjectCustomerList = this.ProjectCustomerListService.Find(this.InsertCustomer.ProjectID).then((response => {
                                this.ProjectCustomerList = this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                            }));
                        }
                        $('#create-Customer').click();
                        this.InsertCustomer = null;
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Customer already exists with one of the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        this.ProjectCustomerList = this.ProjectCustomerListService.Find(this.InsertCustomer.ProjectID).then((response => {
                            this.ProjectCustomerList = this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                        }));
                    }
                }));
            }

        }

        State(data: any): void {
            this.StateDropDown = this.StateService.Find(this.InsertCustomer.CountryID = '95').then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        District(data: any): void {
            this.CutomerDistrictDropDown = this.DistrictService.Find(this.InsertCustomer.StateID).then((response => {
                this.CutomerDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        SearchTerm(): void {
            var name = this.InsertCustomer.CompanyName;
            var nameArr = [];
            for (let i = 0; i < name.length; i++) {
                console.log("Name is : " + name[i]);
                if (!(name[i] == " ")) {
                    nameArr.push(name[i]);
                }
            }
            var aStr = nameArr.join("");
            console.log("Name Array : " + aStr);
            this.InsertCustomer.SearchText = aStr;
        }

        ConState(data: any): void {
            this.ConStateDropDown = this.StateService.Find(this.InsertCustomer.ConCountryID = '95').then((response => {
                this.ConStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        ConDistrict(data: any): void {
            this.ConDistrictDropDown = this.DistrictService.Find(this.InsertCustomer.ConStateID).then((response => {
                this.ConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        NewCustomerSubmit(): void {
            $("#ass-btn-loader1").show();
            if (this.AddNewInsertCust.CompanyName == undefined || this.AddNewInsertCust.CompanyName == null || this.AddNewInsertCust.CompanyName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if (this.AddNewInsertCust.AddCustProjectID == undefined || this.AddNewInsertCust.AddCustProjectID == null || this.AddNewInsertCust.AddCustProjectID == "") {
                this.HideShow();
                this.popupMessage("Please select Project Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if (this.AddNewInsertCust.MobileNo == undefined || this.AddNewInsertCust.MobileNo == null || this.AddNewInsertCust.MobileNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer MobileNo ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if ((this.AddNewInsertCust.MobileNo != undefined && this.AddNewInsertCust.MobileNo != null && this.AddNewInsertCust.MobileNo != "") && (isNaN(this.AddNewInsertCust.MobileNo) || this.AddNewInsertCust.MobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if ((this.AddNewInsertCust.PhoneNo != undefined && this.AddNewInsertCust.PhoneNo != null && this.AddNewInsertCust.PhoneNo != "") && (isNaN(this.AddNewInsertCust.PhoneNo) || this.AddNewInsertCust.PhoneNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if (this.AddNewInsertCust.Email != undefined && this.AddNewInsertCust.Email != null && this.AddNewInsertCust.Email != "" && !(this.EMAIL_REGEXP.test(this.AddNewInsertCust.Email))) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if (this.AddNewInsertCust.Pincode == undefined || this.AddNewInsertCust.Pincode == null || this.AddNewInsertCust.Pincode == "") {
                this.HideShow();
                this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if ((this.AddNewInsertCust.Pincode != undefined && this.AddNewInsertCust.Pincode != null && this.AddNewInsertCust.Pincode != "") && (isNaN(this.AddNewInsertCust.Pincode) || this.AddNewInsertCust.Pincode.length != 6)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if (this.AddNewInsertCust.Address1 == undefined || this.AddNewInsertCust.Address1 == null || this.AddNewInsertCust.Address1 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Address", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }
            else if (this.AddNewInsertCust.StateID == undefined || this.AddNewInsertCust.StateID == null || this.AddNewInsertCust.StateID == "") {
                this.HideShow();
                this.popupMessage("Please Select State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }

            else if (this.AddNewInsertCust.DistrictID == undefined || this.AddNewInsertCust.DistrictID == null || this.AddNewInsertCust.DistrictID == "") {
                this.HideShow();
                this.popupMessage("Please Select District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#ass-btn-loader1").hide();
            }

            //else if (this.AddNewInsertCust.SalesOfficeID == undefined || this.AddNewInsertCust.SalesOfficeID == null || this.AddNewInsertCust.SalesOfficeID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}

            //else if (this.InsertLead.LeadType == undefined || this.InsertLead.LeadType == null || this.InsertLead.LeadType == "") {

            //    this.HideShow();
            //    this.popupMessage("Please Select LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.LeadCategoryID == undefined || this.InsertLead.LeadCategoryID == null || this.InsertLead.LeadCategoryID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.PurchaseTimelineID == undefined || this.InsertLead.PurchaseTimelineID == null || this.InsertLead.PurchaseTimelineID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Purchase Within", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.CategoryID == undefined || this.InsertLead.CategoryID == null || this.InsertLead.CategoryID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.DivisionID == undefined || this.InsertLead.DivisionID == null || this.InsertLead.DivisionID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.ProductID == undefined || this.InsertLead.ProductID == null || this.InsertLead.ProductID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.ModelID == undefined || this.InsertLead.ModelID == null || this.InsertLead.ModelID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.Quantity == undefined || this.InsertLead.Quantity == null || this.InsertLead.Quantity == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.ChannelID == undefined || this.InsertLead.ChannelID == null || this.InsertLead.ChannelID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.LeadSourceID == undefined || this.InsertLead.LeadSourceID == null || this.InsertLead.LeadSourceID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertLead.LeadSourceID == "2" && (this.InsertLead.RefUserID == undefined || this.InsertLead.RefUserID == null || this.InsertLead.RefUserID == "")) {
            //    this.HideShow();
            //    this.popupMessage("Please Enter Ref User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if ((this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") && (this.InsertLead.CampaignID == undefined || this.InsertLead.CampaignID == null || this.InsertLead.CampaignID == "")) {
            //    this.HideShow();
            //    this.popupMessage("Please Select Campaign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            else if (!$("input[name=contactradio]:checked").val()) {
                this.HideShow();
                $("#ass-btn-loader1").hide();
                this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else {
                this.InsertLead.ContactID = $('#messageCheckbox:checked').val();
                this.InsertLead.CustomerID = this.AddNewInsertCust.CustomerID;
                this.InsertLead.CompanyName = this.AddNewInsertCust.CompanyName;
                this.InsertLead.BusinessPartnerNo = this.AddNewInsertCust.BusinessPartnerNo;
                this.InsertLead.Email = this.AddNewInsertCust.Email;
                this.InsertLead.MobileNo = this.AddNewInsertCust.MobileNo;
                this.InsertLead.PhoneNo = this.AddNewInsertCust.PhoneNo;
                this.InsertLead.Pincode = this.AddNewInsertCust.Pincode;
                this.InsertLead.Address1 = this.AddNewInsertCust.Address1;
                this.InsertLead.Address2 = this.AddNewInsertCust.Address2;
                this.InsertLead.SalesOfficeID = this.AddNewInsertCust.SalesOfficeID;
                this.InsertLead.CountryID = '95';
                this.InsertLead.StateID = this.AddNewInsertCust.StateID;
                this.InsertLead.DistrictID = this.AddNewInsertCust.DistrictID;
                this.InsertLead.City = this.AddNewInsertCust.City;
                this.InsertLead.AddCustProjectID = this.AddNewInsertCust.AddCustProjectID;
                this.InsertLead.ProjectID = this.ProjectID;
                if (this.UserID != null || this.UserID != "") {

                    this.InsertLead.UserID = this.UserID;
                }
                this.ProjectInsertServicenew.PostLead(this.InsertLead).then((response => {
                    debugger;
                    if (response.data.Result == 0) {
                        $("#errorclose").hide();
                        $("#errorcloselead").hide();
                        $("#close").show();
                        $("#ass-btn-loader1").hide();
                        this.popupMessage("Already exists for this Customer & Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $('#promoter').click();
                        this.FillGrid(this.NoOfRds);
                        this.ProjectCustomerList = this.ProjectCustomerListService.Find(this.ProjectID).then((response => {
                            this.ProjectCustomerList = this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                        }));
                    }
                    else if (response.data.Result > 0) {
                        $("#errorclose").hide();
                        $("#errorcloselead").hide();
                        $("#close").show();
                        $("#ass-btn-loader1").hide();
                        this.popupMessage("Created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#promoter').click();
                        this.FillGrid(this.NoOfRds);
                        this.ProjectCustomerList = this.ProjectCustomerListService.Find(this.ProjectID).then((response => {
                            this.ProjectCustomerList = this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                        }));

                    }
                    else {
                        this.HideShow();
                        $("#ass-btn-loader1").hide();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $('#promoter').click();
                        this.FillGrid(this.NoOfRds);
                        this.ProjectCustomerList = this.ProjectCustomerListService.Find(this.ProjectID).then((response => {
                            this.ProjectCustomerList = this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                        }));
                    }
                }));
            }
        }

        NewContactSubmit(): void {
            $("#ass-btn-loadercontact").show();
            if (!$("input[name=contactradio]:checked").val()) {
                this.HideShow();
                $("#ass-btn-loadercontact").hide();
                this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                this.InsertLead.ContactID = $('#messageCheckboxNew:checked').val();
                this.InsertLead.CustomerID = $('#LeadCheckbox:checked').val();
                this.InsertLead.ProjectID = this.ProjectID;
                if (this.UserID != null || this.UserID != "") {
                    this.InsertLead.UserID = this.UserID;
                }
                this.ProjectInsertNewContact.PostNewPromotorContact(this.InsertLead).then((response => {
                    debugger;
                    if (response.data.Result > 0) {
                        $("#errorclose").hide();
                        $("#errorcloselead").hide();
                        $("#close").show();
                        $("#ass-btn-loadercontact").hide();
                        this.popupMessage("Created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#promoternewContactadd').click();
                        this.FillGrid(this.NoOfRds);
                        this.getContact(this.ProjectCustomerList[0].CustomerID);
                        this.ProjectCustomer(this.ProjectID);
                    }
                    else {
                        this.HideShow();
                        $("#ass-btn-loadercontact").hide();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $('#promoternewContactadd').click();
                        this.FillGrid(this.NoOfRds);
                        this.getContact(this.ProjectCustomerList[0].CustomerID);
                        this.ProjectCustomer(this.ProjectID);
                    }
                }));
            }
        }

        AddDetails(): void {
            (<HTMLInputElement>document.getElementById("txtNewCustomerName")).value = "";
            this.AddNewInsertCust.MobileNo = "";
            this.AddNewInsertCust.BusinessPartnerNo = "";
            this.AddNewInsertCust.Pincode = "";
            this.AddNewInsertCust.Email = "";
            this.AddNewInsertCust.PhoneNo = "";
            this.AddNewInsertCust.Address1 = "";
            this.AddNewInsertCust.CountryID = "";
            this.AddNewInsertCust.StateID = "";
            this.AddNewInsertCust.DistrictID = "";
            this.AddNewInsertCust.City = "";
            this.AddNewInsertCust.AddCustProjectID = "";
            this.InsertLead.LeadType = "";
            this.InsertLead.AddCustProjectID = "";
            this.InsertLead.SalesOfficeID = "";
            this.InsertLead.LeadCategoryID = "";
            this.InsertLead.PurchaseTimelineID = "";
            this.InsertLead.CategoryID = "";
            this.InsertLead.DivisionID = "";
            this.InsertLead.ProductID = "";
            this.InsertLead.ModelID = "";
            this.InsertLead.Quantity = "";
            this.InsertLead.ChannelID = "";
            this.InsertLead.LeadSourceID = "";
            this.InsertLead.CampaignID = "";
            this.InsertLead.Comments = "";
            $("#NewexistingCustomerList").hide();
            $("#NewexistingLeadList").hide();
            $("#NewexistingContactList").hide();
        }

        Clear() {
            this.InsertLead = null;
            this.AddNewInsertCust = null;
            this.Contactinfo = null;
            $("#NewexistingCustomerList").hide();
            $("#NewexistingLeadList").hide();
            $("#NewexistingContactList").hide();
        }

        CreateNewCust() {
            this.InsertCustomer.CustomerID = "";
            this.InsertCustomer.SearchText = "";
            this.InsertCustomer.CompanyName = "";
            this.InsertCustomer.ParentCustomerID = "";
            this.InsertCustomer.MobileNo = "";
            this.InsertCustomer.Email = "";
            this.InsertCustomer.Address1 = "";
            this.InsertCustomer.Address2 = "";
            this.InsertCustomer.CustomerStatusID = "";
            this.InsertCustomer.DistrictID = "";
            this.InsertCustomer.IndustryDivisionID = "";
            this.InsertCustomer.CreatedBy = "";
            this.InsertCustomer.PinCode = "";
            this.InsertCustomer.AccountTypeID = "";
            this.InsertCustomer.IndustrialSegmentID = "";
            this.InsertCustomer.SalesAreaID = "";
            this.InsertCustomer.PhoneNo = "";
            this.InsertCustomer.Fax = "";
            this.InsertCustomer.SalesOfficeID = "";
            this.InsertCustomer.BusinessPartnerNO = "";
            this.InsertCustomer.Status = "1";
            this.InsertCustomer.RetCustomerID = "";
            this.InsertCustomer.IsNational = "0";
            this.InsertCustomer.CustomerRatingID = "";
            this.InsertCustomer.StateID = "";
            this.InsertCustomer.City = "";
            this.InsertCustomer.UpdatedBy = "";
            this.InsertCustomer.CountryID = "";
            this.InsertCustomer.ContactName = "";
            this.InsertCustomer.DesignationID = "";
            this.InsertCustomer.ConPhoneNo = "";
            this.InsertCustomer.ConMobileNo = "";
            this.InsertCustomer.ParentCustomer = "";
            this.InsertCustomer.CustomerSizeID = "";
            this.InsertCustomer.SiteAddress = "";
            this.InsertCustomer.Area = "";
            this.InsertCustomer.Comments = "";
            this.InsertCustomer.DivisionID = "";
            this.InsertCustomer.ConFax = "";
            this.InsertCustomer.ConEmail = "";
            this.InsertCustomer.ContactID = "";
            this.InsertCustomer.BillingAddress = "";
            this.InsertCustomer.IndustryCodeID = "";
            this.InsertCustomer.ConStateID = "";
            this.InsertCustomer.ConDistrictID = "";
            this.InsertCustomer.ConCity = "";
            this.InsertCustomer.ConCountryID = "";
        }

        CreateNewContact() {
            this.AddNewInsertContact.SAPID = "";
            this.AddNewInsertContact.ContactName = "";
            this.AddNewInsertContact.MobileNo = "";
            this.AddNewInsertContact.Email = "";
            this.AddNewInsertContact.PhoneNo = "";
            this.AddNewInsertContact.CountryID = "";
            this.AddNewInsertContact.StateID = "";
            this.AddNewInsertContact.DistrictID = "";
            this.AddNewInsertContact.City = "";
            this.AddNewInsertContact.PostalCode = "";
            this.AddNewInsertContact.Address = "";
            this.AddNewInsertContact.FOPID = "";
            this.AddNewInsertContact.DepartmentID = "";
        }

        IsValidMobile(value) {
            var re = /^[A-Za-z]+$/;
            if (value == undefined || value == null || value == "") {
                return { Result: "True", Message: 'Success' }
                //return { Result: "False", Message: 'Please Enter Mobile No' }
            }
            else if (isNaN(value)) {
                return { Result: "False", Message: 'Please Enter Valid Mobile No' }
            }
            else if (value.length != 10) {
                return { Result: "False", Message: 'Mobile No must be 10 digit' }
            }
            else {
                return { Result: "True", Message: 'Success' }
            }
        }

        IsValidMobile1(value) {
            var re = /^[A-Za-z]+$/;
            if (value == undefined || value == "") {
                return { Result: "True", Message: 'Success' }
            }
            else if (isNaN(value)) {
                return { Result: "False", Message: 'Please Enter Valid Mobile No' }
            }
            else if (value.length != 10) {
                return { Result: "False", Message: 'Mobile No must be 10 digit' }
            }
            else {
                return { Result: "True", Message: 'Success' }
            }
        }

        IsValidEmail(value) {
            //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            var EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

            if (value == undefined || value == null || value == "") {
                return { Result: "True", Message: 'Success' }
            }
            else
                if (!EMAIL_REGEXP.test(value)) {
                    return { Result: "False", Message: 'Please Enter Valid Email' }
                }

                else {
                    return { Result: "True", Message: 'Success' }
                }
        }

        AddPromotorContact(): void {
            if (!$("input[name=leadradio]:checked").val()) {
                $("#errorclose").hide();
                $("#errorcloselead").show();
                $("#close").hide();
                this.popupMessage("Please Select Promoter Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#hidepopupcontact").hide();
            }
            else {
                this.PromotorCustomerID = $('#LeadCheckbox:checked').val();
                this.Contactinfo = this.ContactInfoService.Find(this.PromotorCustomerID).then((response => {
                    this.Contactinfo = this.ContactInfoService.GetLeadContactInfo(response.data.Result);
                }));
                $("#hidepopupcontact").show();
            }
        }

        CreateLeadAdd(): void {
            debugger;
            $('#Campaignfield').hide();
            $('#UserNamefield').hide();
            this.InsertLead.CampaignID = "";
            this.InsertLead.RefUserID = "";
            this.InsertLead.RefUserName = "";
            if (!$("input[name=leadradio]:checked").val()) {
                $("#errorclose").hide();
                $("#errorcloselead").show();
                $("#close").hide();
                this.popupMessage("Please Select Promoter Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#hidepopup").hide();
            }

            else {
                this.PromotorInsertCust.CustomerID = $('#LeadCheckbox:checked').val();
                this.getContact(this.PromotorInsertCust.CustomerID);
                $("#hidepopup").show();
            }
        }

        ErrorcloseForCreateLead() {
            $('#MyLead').click();
            $('#promoternewContactadd').click();
        }

        FillGrid(NoOfRecords): void {
            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
                this.CreateLeadList = this.ProjectCreateLeadListService.Find(this.ProjectID).then((response => {
                this.CreateLeadList = this.ProjectCreateLeadListService.GetCreateLeadlist(response.data.Result);
                this.GetActivityList();
                $('#search-btn-loader').hide();
                if (this.CreateLeadList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.CreateLeadList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.CreateLeadList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.CreateLeadList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        GetActivityList(): void {
            debugger;
            this.ActivitySearch.ProjectStartDate = this.ProjectDataInfo[0].ProjectStartDate;
            this.ActivitySearch.CompletionDate = this.ProjectDataInfo[0].CompletionDate;
            this.ActivitySearch.ProjectID = this.ProjectID;
            this.ActivityList = this.ProjectActivityListService.FindAct(this.ActivitySearch).then((response => {
                this.ActivityList = this.ProjectActivityListService.GetUserActList(response.data.Result);
            }));
        }

        CheckSelectActivity(): void {
            debugger;
            if ($("#select-all-activity").prop('checked') == true) {
                $("#all-activity").show();
                $("#specific-activity").hide();
                $("#all-Equipment").show();
                $("#specific-Equipment").hide();
            } else {
                $("#specific-activity").show();
                $("#all-activity").hide();
                $("#all-Equipment").hide();
                $("#specific-Equipment").show();
            }
        }

        Validate(data: any): void {
            this.CustomerViewService.Find(data).then((response => {
                this.CustomerView = this.CustomerViewService.GetCustomerView(response.data.Result);

                $('#txtCustName').val(this.CustomerView.CompanyName);
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
                $('#txtpurchase').val(this.CustomerView.Title);
                $('#txtcomm').val(this.CustomerView.Comments);
                $('#txtleadcat').val(this.CustomerView.LeadCategory);
                $('#txtspeci').val(this.CustomerView.CreateComment);
                $('#txtsource').val(this.CustomerView.SourceID);
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
                $("reAllocateModal").show();
            }));
        }

        EditActivity(data: any): void {
            $(".editactivity").prop("disabled", true)
            $("#EditContact").show();
            $("#ContactList").hide();
            var d = new Date();
            var c = new Date($("#date").val());

            if (c > d) {
                $("#ddlStatus").prop("disabled", true);
            } else {
                $("#ddlStatus").prop("disabled", false);
            }
            this.EditService.Find(data).then((response => {
                this.EditActivites = this.EditService.GetEdit(response.data.Result);
                this.EditActivites.SAPID = this.Contactinfo.BusinessPartnerNo;
                this.EditActivites.ContactID = this.Contactinfo.ContactID;
                if (this.EditActivites.ptype == "YTBA") {
                    this.EditActivites.ptype = 'Business';
                    $("#customer-contact-detail").show();
                    $("#ddlActivityLetter").hide();
                }
                if (this.EditActivites.ptype == "YTEA") {
                    this.EditActivites.ptype = 'Sales';
                    $("#customer-contact-detail").hide();
                    $("#Activity-Against").show();
                    $("#ddlActivityLetter").show();
                    this.Contactinfo = new Array<GCPL.Model.ProjectContactDetailsListModel>();
                    this.PromotorInsertCust = new CustomerDetails();
                }

                if (this.EditActivites.cate == "1") {
                    this.EditActivites.cate = 'Visit';
                }
                if (this.EditActivites.cate == "2") {
                    this.EditActivites.cate = 'Call';
                }

                //if (this.EditActivites.ActivityStatus = "Pending") {
                //    this.EditActivites.ActivityStatus = '1';
                //}
                //else if (this.EditActivites.ActivityStatus = "Rejected") {
                //    this.EditActivites.ActivityStatus = '2';
                //}
                //else {
                //    this.EditActivites.ActivityStatus = '3';
                //}

                if (this.EditActivites.agnst == "4") {
                    $("#ddlLetterCoo").show();
                    this.EditActivites.ltter = this.EditActivites.ltter;
                }
                else {
                    $("#ddlLetterCoo").hide();
                }

                $('#date').val(this.EditActivites.date);

                $("myModalAddNew").show();
                (<HTMLInputElement>document.getElementById("txtCustomerName")).value = this.EditActivites.CompanyName;
            }));

        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.CreateLeadList.slice(begin, end);
            if (this.page + 1 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);
        }

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.CreateLeadList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

    }
    class ProjectTrackerComponentController implements ng.IComponentOptions {
        static Name: string = "projecttracker"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ProjectTrackerController;
            this.templateUrl = "/Scripts/App/ProjectTracker/Template/ProjectTracker.html";
        }
    }
    app.AddComponent(ProjectTrackerComponentController.Name, new ProjectTrackerComponentController());

}