namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import Lead = GCPL.Model.InsertLeadModel;
    import AddToCart = GCPL.Model.AddToCartModel;
    import CustomerDetails = GCPL.Model.LeadCustomerListModel;
    import CustomerMaster = GCPL.Model.InsertCustomerMaster;
    import contactinfo = GCPL.Model.ContactDetailsListModel;
    import ContactDetails = GCPL.Model.ContactDetailsModel;
    import LeadDetails = GCPL.Model.LeadDetailsListModel;
    import ContactMaster = GCPL.Model.InsertContactMaster;
    import CustomerHeader = GCPL.Model.CustomerHeader;

    interface ICreateLeadFormController {
        AddCustCountryDropDown: Array<Model.CountryddlModel>
        AddCustStateDropDown: Array<Model.StateddlModel>
        AddCustDistrictDropDown: Array<Model.DistrictddlModel>

        CustCountryDropDown: Array<Model.CountryddlModel>
        CustStateDropDown: Array<Model.StateddlModel>
        CustDistrictDropDown: Array<Model.DistrictddlModel>

        AddConCountryDropDown: Array<Model.CountryddlModel>
        AddConStateDropDown: Array<Model.StateddlModel>
        AddConDistrictDropDown: Array<Model.DistrictddlModel>

        IndustrialSegmentDropDown: Array<Model.IndustrialSegmentddlModel>
        IndustryDivisionDropDown: Array<Model.IndustryDivisionddlModel>
        SalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        DepartmentDropDown: Array<Model.DepartmentddlModel>
        DesignationDropDown: Array<Model.DesignationddlModel>

        LeadSalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        CategoryDropDown: Array<Model.CategoryddlModel>

        DivisionDropDownP: Array<Model.DivisionDDPModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        ChannelDD: Array<Model.ChannelDDModel>
        LeadSourcedd: Array<Model.LeadSourceDetailsModel>
        Campaigndd: Array<Model.CampaignDetailsModel>
        PurchaseTimlinedd: Array<Model.PurchaseTimelineModel>
        LeadCategoryDropDown: Array<Model.LeadCategoryddlModel>
        ProjectNameDD: Array<Model.GetProjectNameDDModel>
        CustClassDropDown: Array<Model.CustomerClassModel>
        RegionDropDown: Array<Model.RegionDDModel>
        InsertLead: Lead;
        Submit(): void;
        CustomerID: any;
        Search(data: any): void;
        UserID: GCPL.Model.UserIDModel
        Contactinfo: contactinfo;

        InsertCust: CustomerDetails;
        InsertCustomer: CustomerMaster;
        SubmitCustomer(): void;
        ContactDropDown: Array<Model.ContactInfoModel>
        ContactDetail(data: any): void;
        InsertCon: ContactDetails;
        InsertContact: ContactMaster;
        SubmitContact(): void;
        MobileCount: any;

        // CampaignChange(data: any): void;

    }
    class CreateLeadFormController implements ICreateLeadFormController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        AddCustCountryDropDown = null;
        AddCustStateDropDown = null;
        AddCustDistrictDropDown = null;

        CustCountryDropDown = null;
        CustStateDropDown = null;
        CustDistrictDropDown = null;

        AddConCountryDropDown = null;
        AddConStateDropDown = null;
        AddConDistrictDropDown = null;

        IndustrialSegmentDropDown = null;
        IndustryDivisionDropDown = null;
        SalesOfficeDropDown = null;
        DepartmentDropDown = null;
        DesignationDropDown = null;

        LeadSalesOfficeDropDown = null;
        LeadTypeDropDown = null;
        CategoryDropDown = null;
        DivisionDropDownP = null;
        ProductDropDown = null;
        ModelDropDown = null;
        ChannelDD = null;
        LeadSourcedd = null;
        Campaigndd = null;
        SalesOfficeID = null;
        PurchaseTimlinedd = null;
        LeadCategoryDDWP = null;
        CustomerID = null;
        UserID = null;
        InsertCust = null;
        Contactinfo = null;
        Leadinfo = null;
        ContactID = null;
        ContactDropDown = null;
        Check = null;
        InsertCon = null;
        CustomerHeader = null;
        LeadCategoryDropDown = null;
        InsertLead = null;
        InsertToCart = null;
        TotalItemList = null;
        InsertContact = null;
        InsertCustomer = null;
        LCustomer = null;
        AdoptCust = null;
        MobileCount = null;
        LeadSearch = null;
        EMAIL_REGEXP = null;
        ProjectNameDD = null;
        ProductValue = null;
        CustClassDropDown = null;
        RegionDropDown = null;
        private Cookie: any = null;
        private CountryService: Service.ICountryService;
        private StateService: Service.IStateddService;
        private DistrictService: Service.IDistrictddService;
        private IndustrialSegmentService: Service.IIndustrialSegmentService;
        private IndustryDivisionService: Service.IIndustryDivisionService;
        private SalesOfficeService: Service.ISalesOfficeService;
        private DepartmentService: Service.IDepartmentService;
        private DesignationService: Service.IDesignationService;
        private LeadTypeService: Service.ILeadTypeddService;
        private CategoryService: Service.ICategoryddService;
        private DivisionPService: Service.IDivisionDDPService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService1;
        //private ModelService: Service.IModelDDService;

        private ChannelDDService: Service.IChannelDDService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
        private LeadSourceDDService: Service.ILeadSourceDetailsService;
        private ProjectNameService: Service.IProjectNameService;
        private CustClassService: Service.ICustomerClassService;
        private RegionService: Service.IRegionddService;
        private CampaignDDService: Service.ICampaignDetailsService;
        private InsertService: Service.IInsertLeadDetailsService;
        private InsertItemService: Service.IInsertItemDetailsService;
        private PurchaseTimlineDDService: Service.IPurchaseTimelineService;
        private LeadCategoryService: Service.ILeadCategoryDDService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private ProductDescAutofill: Service.IProductDescAutoFillService;
        private CustomerInfoService: Service.ILeadCustomerDetailsService;
        private ContactService: Service.IContactInfoService;
        private ContactInfoService: Service.ILeadContactDetailsService;
        private InsertCustomerService: Service.IInsertLeadCustomerService;
        private InsertContactService: Service.IInsertContactService;
        private StateDDService: Service.IStateDDService;
        private LeadCustomerDetails: Service.ILeadCustomerGetDetailsService;
        private CustomerService: Service.IGetCustomerNewDetailsService;
        private getAutoUser: Service.IUserCodeAutoFillService;
        private ShowMobileService: Service.IShowSimilarService;
        private LeadCustomerDetails1: Service.ILeadCustomerGetDetails1Service;
        private LeadDetailsService: Service.ILeadDetailsService;
        private LeadCategotyWPDDService: Service.ILeadCategotyWPDDService;


        static $inject = ["CountryService", "StateDDService", "DistrictddService", "IndustrialSegmentService", "IndustryDivisionService", "SalesOfficeService", "DepartmentService", "DesignationService",
            "LeadTypeddService", "CategoryddService", "DivisionDDPService", "ProductddService", "LeadTypeProductService1", "ChannelDDService", "EmployeeAtofillService", "LeadSourceDetailsService", "ProjectNameService", "CustomerClassService", "RegionddService",
            "CampaignDetailsService", "InsertLeadDetailsService", "InsertItemDetailsService", "PurchaseTimelineService", "LeadCategoryDDService", "CustomerSapIdAutoFillService", "ProductDescAutoFillService", "LeadCustomerDetailsService", "ContactInfoService",
            "LeadContactDetailsService", "InsertLeadCustomerService", "InsertContactService", "$cookieStore", "LeadCustomerGetDetailsService", "GetCustomerNewDetailsService", "UserCodeAutoFillService", "ShowSimilarService", "LeadCustomerGetDetails1Service", "LeadDetailsService", "LeadCategotyWPDDService"];


        constructor(_CountryService: Service.ICountryService, _StateDDService: Service.IStateDDService, _DistrictService: Service.IDistrictddService, _IndustrialSegmentService: Service.IIndustrialSegmentService,
            _IndustryDivisionService: Service.IIndustryDivisionService, _SalesOfficeService: Service.ISalesOfficeService, _DepartmentService: Service.IDepartmentService, _DesignationService: Service.IDesignationService,
            _LeadTypeService: Service.ILeadTypeddService, _CategoryService: Service.ICategoryddService, _DivisionPService: Service.IDivisionDDPService,
            _ProductService: Service.IProductddService, _ModelService: Service.ILeadTypeProductService1, _ChannelDDService: Service.IChannelDDService, _getAutoSalesrep1: Service.IEmployeeAtofillService,
            _LeadSourceDDService: Service.ILeadSourceDetailsService, _ProjectNameService: Service.IProjectNameService, CustClassService: Service.ICustomerClassService, _RegionService: Service.IRegionddService, _CampaignDDService: Service.ICampaignDetailsService, _InsertService: Service.IInsertLeadDetailsService, _InsertItemService: Service.IInsertItemDetailsService,
            _PurchaseTimlineDDService: Service.IPurchaseTimelineService, _LeadCategoryService: Service.ILeadCategoryDDService, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _ProductDescAutofill: Service.IProductDescAutoFillService,
            _CustomerInfoService: Service.ILeadCustomerDetailsService, _ContactService: Service.IContactInfoService, _ContactInfoService: Service.ILeadContactDetailsService,
            _InsertCustomerService: Service.IInsertLeadCustomerService, _InsertContactService: Service.IInsertContactService, private _cookieStore: any, _LeadCustomerDetails: Service.ILeadCustomerGetDetailsService,
            _CustomerService: Service.IGetCustomerNewDetailsService, _getAutoUser: Service.IUserCodeAutoFillService, _ShowMobileService: Service.IShowSimilarService, _LeadCustomerDetails1: Service.ILeadCustomerGetDetails1Service, _LeadDetailsService: Service.ILeadDetailsService, _LeadCategotyWPDDService: Service.ILeadCategotyWPDDService) {

            this.CountryService = _CountryService;
            this.StateDDService = _StateDDService;
            this.DistrictService = _DistrictService;
            this.IndustrialSegmentService = _IndustrialSegmentService;
            this.IndustryDivisionService = _IndustryDivisionService;
            this.SalesOfficeService = _SalesOfficeService;
            this.DepartmentService = _DepartmentService;
            this.DesignationService = _DesignationService;
            this.LeadTypeService = _LeadTypeService;
            this.CategoryService = _CategoryService;
            this.DivisionPService = _DivisionPService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.ChannelDDService = _ChannelDDService;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.LeadSourceDDService = _LeadSourceDDService;
            this.ProjectNameService = _ProjectNameService;
            this.CustClassService = CustClassService;
            this.RegionService = _RegionService;
            this.CampaignDDService = _CampaignDDService;
            this.InsertService = _InsertService;
            this.InsertItemService = _InsertItemService;
            this.InsertLead = new Lead();
            this.InsertToCart = new AddToCart();
            this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
            this.LeadCategoryService = _LeadCategoryService;
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.ProductDescAutofill = _ProductDescAutofill;
            this.CustomerInfoService = _CustomerInfoService;
            this.ContactService = _ContactService;
            this.ContactInfoService = _ContactInfoService;
            this.Contactinfo = new Array<GCPL.Model.ContactDetailsListModel>();
            this.InsertCustomerService = _InsertCustomerService;
            this.InsertCustomer = new CustomerMaster();
            this.InsertContactService = _InsertContactService;
            this.InsertContact = new ContactMaster();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.CustomerHeader = new Array<GCPL.Model.CustomerHeader>();
            this.LeadCustomerDetails = _LeadCustomerDetails;
            this.CustomerService = _CustomerService;
            this.InsertCust = new CustomerDetails();
            this.LCustomer = new Array<GCPL.Model.GetCustomerModel>();
            this.getAutoUser = _getAutoUser;
            this.ShowMobileService = _ShowMobileService;
            this.LeadCustomerDetails1 = _LeadCustomerDetails1;
            this.LeadDetailsService = _LeadDetailsService;
            this.LeadCategotyWPDDService = _LeadCategotyWPDDService;

        }

        $onInit() {
            this.Init();
            this.HideShow();
            $("#errorclose").hide();
            $("#close").hide();

            this.Check = false;
            var splTab = document.getElementsByClassName("spl-tab");

            for (var i = 0; i < splTab.length; i++) {
                splTab[i].addEventListener("click", function () {
                    this.classList.toggle("toggle-spl-minus");
                })
            }
        }

        //Page Load Define Values//
        Init(): void {
            this.InsertCustomer.IsNational = "0";
            this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            this.HideShow();
            $("#errorclose").hide();
            $("#close").hide();
            $('#Campaignfield').hide();
            $('#UserNamefield').hide();


            this.AddCustCountryDropDown = this.CountryService.Find().then((response => {
                this.AddCustCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.CustCountryDropDown = this.CountryService.Find().then((response => {
                this.CustCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.AddConCountryDropDown = this.CountryService.Find().then((response => {
                this.AddConCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((response => {
                this.IndustrialSegmentDropDown = this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);
            }));

            this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((response => {
                this.IndustryDivisionDropDown = this.IndustryDivisionService.GetIndustryName(response.data.Result);
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

            this.LeadSalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.LeadSalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
            }));

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);
            }));

            this.DivisionDropDownP = this.DivisionPService.Find(0).then((response => {
                this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);

            }));

            this.ProductDropDown = this.ProductService.Find(0).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
                this.InsertLead.LeadType = "5";
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
            this.AddCustStateDropDown = this.StateDDService.Find().then((response => {
                this.AddCustStateDropDown = this.StateDDService.GetState(response.data.Result);
                //this.SearchRegion.StateID = this.InsertCustomer.StateID;
            }));
            this.CustStateDropDown = this.StateDDService.Find().then((response => {
                this.CustStateDropDown = this.StateDDService.GetState(response.data.Result);
            }));
            this.AddConStateDropDown = this.StateDDService.Find().then((response => {
                this.AddConStateDropDown = this.StateDDService.GetState(response.data.Result);
            }));

            this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((response => {
                this.ProjectNameDD = this.ProjectNameService.GetProjectNameDD(response.data.Result);
            }));

            this.CustClassDropDown = this.CustClassService.Find().then((response => {
                this.CustClassDropDown = this.CustClassService.GetCustomerClass(response.data.Result);
            }));

            this.RegionDropDown = this.RegionService.Find().then((response => {
                this.RegionDropDown = this.RegionService.GetRegion(response.data.Result);

            }));

            this.ModelDropDown = this.ModelService.Find(this.InsertLead).then((response => {
                this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));

            let that = this;



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

            $("#txtProductDesc").autocomplete({
                //  source:['1a0','anjali','archana'],
                source: function (request, res) {
                    that.ProductDescAutofill.FilterAutoComplete(request).then((response => {

                        let data = that.ProductDescAutofill.GetAutoProductDesc(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.ProductDesc,
                                value: item.ProductDesc,
                                id: item.ProductID

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
                    that.InsertLead.ProductID = ui.item.id;
                    that.Search(ui.item.id);
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
                    that.InsertLead.CustomerID = ui.item.id;
                    that.Search(ui.item.id);
                },
                change: function () {

                }
            });
            $("#txtMobileNo").change(function () {

                that.MobileCount = that.ShowMobileService.Find(that.InsertCustomer.MobileNo).then((response => {
                    that.MobileCount = that.ShowMobileService.GetMobile(response.data.Result);

                    if (that.MobileCount == "0") {
                        $("#btnSubmit").prop("disabled", false);
                    }
                    else {
                        alert("Customer Already Exists");
                        $("#btnSubmit").prop("disabled", true);
                    }
                }));
            });
        }




        AddCustDistrict(): void {

            this.AddCustDistrictDropDown = this.DistrictService.Find(this.InsertCustomer.StateID).then((response => {
                this.AddCustDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        CustDistrict(): void {

            this.CustDistrictDropDown = this.DistrictService.Find(this.InsertCust.StateID).then((response => {
                this.CustDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        AddConDistrict(): void {

            this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertContact.StateID).then((response => {
                this.AddConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }
        //Division(): void {

        //    this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLead.CategoryID).then((response => {
        //        this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);

        //    }));
        //}

        LeadCategory(): void {
            this.InsertLead.CategoryID = "";
            this.InsertLead.DivisionID = "";
            this.InsertLead.ProductID = "";
            this.InsertLead.ModelID = "";
        }

        //Product(): void {

        //    this.ProductDropDown = this.ProductService.Find(this.InsertLead.DivisionID).then((response => {
        //        this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

        //    }));
        //}

        //Model(): void {

        //   // this.InsertLead.LeadType = this.LeadTypeDropDown[0].ID;

        //    this.ModelDropDown = this.ModelService.Find(this.InsertLead).then((response => {
        //        this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
        //    }));
        //}

        LeadSource(): void {

            this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLead.ChannelID).then((response => {
                this.LeadSourcedd = this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
            }));
        }

        Campaign(): void {
            this.Campaigndd = this.CampaignDDService.Find(this.InsertLead.LeadSourceID).then((response => {
                this.Campaigndd = this.CampaignDDService.GetCampaignDetails(response.data.Result);
            }));
        }

        ItemCart(): void {
            debugger;
            console.log(this.InsertLead.LeadCategoryID, "this.InsertLead.LeadCategoryID");
            this.InsertToCart = [];
            var err = 0;
            if (this.InsertToCart == undefined || this.TotalItemList == null) {

            } else {
                this.InsertToCart = this.TotalItemList;
            }

            if (this.InsertCust.SalesOfficeID == undefined || this.InsertCust.SalesOfficeID == null || this.InsertCust.SalesOfficeID == "") {
                this.HideShow();
                this.popupMessage("Please Select Sales Office", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.LeadType == undefined || this.InsertLead.LeadType == null || this.InsertLead.LeadType == "") {
                this.HideShow();
                this.popupMessage("Please Select Opportunity Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.LeadCategoryID == undefined && this.InsertLead.LeadCategoryID == null && this.InsertLead.LeadCategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Select Opportunity Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCust.IndustryDivisionID == undefined && this.InsertCust.IndustryDivisionID == null && this.InsertCust.IndustryDivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Select Industry Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCust.IndustrialSegmentID == undefined && this.InsertCust.IndustrialSegmentID == null && this.InsertCust.IndustrialSegmentID == "") {
                this.HideShow();
                this.popupMessage("Please Select Industry Segment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.PurchaseTimelineID == undefined || this.InsertLead.PurchaseTimelineID == null || this.InsertLead.PurchaseTimelineID == "") {
                this.HideShow();
                this.popupMessage("Please Select Plan to Purchase Within", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLead.Quantity == undefined && this.InsertLead.Quantity == null && this.InsertLead.Quantity == "") {
                this.HideShow();
                this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
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

            else if (this.InsertLead.ChannelID == undefined || this.InsertLead.ChannelID == null || this.InsertLead.ChannelID == "") {

                this.HideShow();
                this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            //else if (this.InsertLead.LeadSourceID == undefined || this.InsertLead.LeadSourceID == null || this.InsertLead.LeadSourceID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Opportunity Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            else {
                debugger;
                //this.InsertToCart = [];

                if (err == 0) {
                    this.InsertToCart.push({
                        "SalesOfficeID": this.InsertCust.SalesOfficeID,
                        "SalesOfficeName": this.InsertCust.SalesOfficeID == "" ? "" : $("#txtSalesoff option:selected").text(),
                        "LeadType": this.InsertLead.LeadType,
                        "LeadTypeName": this.InsertLead.LeadType == "" ? "" : $("#txtLeadType option:selected").text(),
                        "IndustryDivisionID": this.InsertCust.IndustryDivisionID,
                        "IndustryDivisionName": this.InsertCust.IndustryDivisionID == "" ? "" : $("#txtIndustryDivision option:selected").text(),
                        "IndustrialSegmentID": this.InsertCust.IndustrialSegmentID,
                        "IndustrialSegmentName": this.InsertCust.IndustrialSegmentID == "" ? "" : $("#txtIndustrySegment option:selected").text(),
                        "PurchaseTimelineID": this.InsertLead.PurchaseTimelineID,
                        "PurchaseTimelineName": this.InsertCust.IndustrialSegmentID == "" ? "" : $("#purchaseddl option:selected").text(),
                        "Quantity": this.InsertLead.Quantity,
                        "CategoryID": this.InsertLead.CategoryID,
                        "CategoryName": this.InsertLead.CategoryID == "" ? "" : $("#txtCategory option:selected").text(),
                        "DivisionID": this.InsertLead.DivisionID,
                        "DivisionName": this.InsertLead.DivisionID == "" ? "" : $("#txtDivision option:selected").text(),
                        "ProductID": this.InsertLead.ProductID,
                        "ProductName": this.InsertLead.ProductID == "" ? "" : $("#txtProduct option:selected").text(),
                        "ModelID": this.InsertLead.ModelID,
                        "ModelName": this.InsertLead.ModelID == "" ? "" : $("#txtModel option:selected").text(),
                        "ChannelID": this.InsertLead.ChannelID,
                        "ChannelName": this.InsertLead.ChannelID == "" ? "" : $("#txtChannel option:selected").text(),
                        "LeadSourceID": this.InsertLead.LeadSourceID,
                        "LeadSourceName": this.InsertLead.LeadSourceID == "" ? "" : $("#ddlleadsource option:selected").text(),
                    })

                    console.log(this.InsertToCart)
                    this.TotalItemList = this.InsertToCart;

                    //this.InsertToCart.SalesOfficeID = this.InsertCust.SalesOfficeID
                    //this.InsertToCart.LeadType = this.InsertLead.LeadType
                    //this.InsertToCart.IndustryDivisionID = this.InsertCust.IndustryDivisionID
                    //this.InsertToCart.IndustrialSegmentID = this.InsertCust.IndustrialSegmentID
                    //this.InsertToCart.PurchaseTimelineID = this.InsertLead.PurchaseTimelineID
                    //this.InsertToCart.Quantity = this.InsertLead.Quantity
                    //this.InsertToCart.CategoryID = this.InsertLead.CategoryID
                    //this.InsertToCart.DivisionID = this.InsertLead.DivisionID
                    //this.InsertToCart.ProductID = this.InsertLead.ProductID
                    //this.InsertToCart.ModelID = this.InsertLead.ModelID
                    //this.InsertToCart.ChannelID = this.InsertLead.ChannelID
                    //this.InsertToCart.LeadSourceID = this.InsertLead.LeadSourceID

                    //if (this.UserID != null || this.UserID != "") {
                    //    this.InsertLead.UserID = this.UserID;
                    //}
                    //this.InsertService.PostLead(this.InsertLead).then((response => {
                    //    if (response.data.Result == 0) {
                    //        $("#errorclose").hide();
                    //        $("#close").show();
                    //        this.popupMessage("Lead already exists for this Customer & Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //    }
                    //    else if (response.data.Result > 0) {
                    //        $("#errorclose").hide();
                    //        $("#close").show();
                    //        this.popupMessage("LeadID - " + response.data.Result + " created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    //    }
                    //    else {
                    //        this.HideShow();
                    //        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //    }

                    //}));

                }
            }
        }

        DeleteAssignmentCart(index) {

            this.TotalItemList.splice(index, 1);

            if (this.TotalItemList.length <= 0) {
                this.TotalItemList = null;
            }
        }


        Submit(): void {
            debugger;
            var flag = 0;
            var failureCount = 0;
            var SuccessCount = 0;
            if (this.InsertCust.CompanyName == undefined || this.InsertCust.CompanyName == null || this.InsertCust.CompanyName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCust.MobileNo == undefined || this.InsertCust.MobileNo == null || this.InsertCust.MobileNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer MobileNo ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertCust.MobileNo != undefined && this.InsertCust.MobileNo != null && this.InsertCust.MobileNo != "") && (isNaN(this.InsertCust.MobileNo) || this.InsertCust.MobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertCust.PhoneNo != undefined && this.InsertCust.PhoneNo != null && this.InsertCust.PhoneNo != "") && (isNaN(this.InsertCust.PhoneNo) || this.InsertCust.PhoneNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCust.Email != undefined && this.InsertCust.Email != null && this.InsertCust.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertCust.Email))) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCust.Pincode == undefined || this.InsertCust.Pincode == null || this.InsertCust.Pincode == "") {
                this.HideShow();
                this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertCust.Pincode != undefined && this.InsertCust.Pincode != null && this.InsertCust.Pincode != "") && (isNaN(this.InsertCust.Pincode) || this.InsertCust.Pincode.length != 6)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCust.Address1 == undefined || this.InsertCust.Address1 == null || this.InsertCust.Address1 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Address", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCust.StateID == undefined || this.InsertCust.StateID == null || this.InsertCust.StateID == "") {
                this.HideShow();
                this.popupMessage("Please Select State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertCust.DistrictID == undefined || this.InsertCust.DistrictID == null || this.InsertCust.DistrictID == "") {
                this.HideShow();
                this.popupMessage("Please Select District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertCust.SalesOfficeID == undefined || this.InsertCust.SalesOfficeID == null || this.InsertCust.SalesOfficeID == "") {
                this.HideShow();
                this.popupMessage("Please Select SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
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
            //else if (this.InsertLead.LeadSourceID == "2" && (this.InsertLead.RefUserID == undefined || this.InsertLead.RefUserID == null || this.InsertLead.RefUserID == "")) {
            //    this.HideShow();
            //    this.popupMessage("Please Enter Ref User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            else if ((this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") && (this.InsertLead.CampaignID == undefined || this.InsertLead.CampaignID == null || this.InsertLead.CampaignID == "")) {
                this.HideShow();
                this.popupMessage("Please Select Campaign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (!$("input[name=contactradio]:checked").val()) {
                this.HideShow();
                this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else {
                if (this.TotalItemList == null || this.TotalItemList == undefined) {
                    this.HideShow();
                    this.popupMessage("Please add atleast one timesheet to list!", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                } else {
                    debugger;
                    this.InsertLead.ContactID = $('#messageCheckbox:checked').val();
                    this.InsertLead.CustomerID = this.InsertCust.CustomerID;
                    this.InsertLead.CompanyName = this.InsertCust.CompanyName;
                    this.InsertLead.BusinessPartnerNo = this.InsertCust.BusinessPartnerNo;
                    this.InsertLead.Email = this.InsertCust.Email;
                    this.InsertLead.MobileNo = this.InsertCust.MobileNo;
                    this.InsertLead.PhoneNo = this.InsertCust.PhoneNo;
                    this.InsertLead.Pincode = this.InsertCust.Pincode;
                    this.InsertLead.Address1 = this.InsertCust.Address1;
                    this.InsertLead.Address2 = this.InsertCust.Address2;
                    this.InsertLead.SalesOfficeID = this.InsertCust.SalesOfficeID;
                    this.InsertLead.CountryID = '95';
                    this.InsertLead.StateID = this.InsertCust.StateID;
                    this.InsertLead.DistrictID = this.InsertCust.DistrictID;
                    this.InsertLead.City = this.InsertCust.City;
                    this.InsertLead.LeadStatusID = this.InsertCust.LeadStatusID;
                    this.InsertLead.IndustryDivisionID = this.InsertCust.IndustryDivisionID;
                    this.InsertLead.IndustrialSegmentID = this.InsertCust.IndustrialSegmentID;
                    this.InsertLead.CustomerRatingID = this.InsertCust.CustomerRatingID;
                    this.InsertLead.RegionID = this.InsertCust.RegionID;



                    if (this.UserID != null || this.UserID != "") {

                        this.InsertLead.UserID = this.UserID;
                    }
                    this.InsertService.PostLead(this.InsertLead).then((response => {
                        if (response.data.Result == 0) {
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Lead already exists for this Customer & Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                        else if (response.data.Result > 0) {
                            debugger;
                            console.log(response.data.Result, "Testing Lead 1111");
                            this.InsertLead.LeadID = response.data.Result;
                            for (var i = 0; i < this.TotalItemList.length; i++) {
                                this.TotalItemList[i].LeadID = this.InsertLead.LeadID;
                                this.InsertLead = this.TotalItemList[i];
                                this.InsertItemService.PostItem(this.InsertLead).then((response => {
                                    if (response.data == "Success") {
                                        flag = 0;
                                        SuccessCount++;

                                    } else {
                                        flag = 1;
                                        failureCount++;

                                    }

                                    if (flag == 0) {
                                        $("#errorclose").hide();
                                        $("#close").show();
                                        this.popupMessage("Successfully Inserted " + SuccessCount.toString() + " Records!", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                    } else {
                                        this.HideShow();
                                        this.popupMessage("Error Occured for " + failureCount + "Records! Please Try again.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                    }
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    this.popupMessage("LeadID - " + response.data.Result + " created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                }));
                            }
                        }
                        else {
                            this.HideShow();
                            this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }

                    }));



                }
            }
        }
        SubmitCustomer(): void {


            if (this.InsertCustomer.CompanyName == undefined || this.InsertCustomer.CompanyName == null || this.InsertCustomer.CompanyName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.MobileNo == undefined || this.InsertCustomer.MobileNo == null || this.InsertCustomer.MobileNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer MobileNo ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if ((this.InsertCustomer.MobileNo != undefined && this.InsertCustomer.MobileNo != null && this.InsertCustomer.MobileNo != "") && (isNaN(this.InsertCustomer.MobileNo) || this.InsertCustomer.MobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if ((this.InsertCustomer.PhoneNo != undefined && this.InsertCustomer.PhoneNo != null && this.InsertCustomer.PhoneNo != "") && (isNaN(this.InsertCustomer.PhoneNo) || this.InsertCustomer.PhoneNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.Email != undefined && this.InsertCustomer.Email != null && this.InsertCustomer.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertCustomer.Email))) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.Pincode == undefined || this.InsertCustomer.Pincode == null || this.InsertCustomer.Pincode == "") {
                this.HideShow();
                this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if ((this.InsertCustomer.Pincode != undefined && this.InsertCustomer.Pincode != null && this.InsertCustomer.Pincode != "") && (isNaN(this.InsertCustomer.Pincode) || this.InsertCustomer.Pincode.length != 6)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.Address1 == undefined || this.InsertCustomer.Address1 == null || this.InsertCustomer.Address1 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.StateID == undefined || this.InsertCustomer.StateID == null || this.InsertCustomer.StateID == "") {
                this.HideShow();
                this.popupMessage("Please Select State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.DistrictID == undefined || this.InsertCustomer.DistrictID == null || this.InsertCustomer.DistrictID == "") {
                this.HideShow();
                this.popupMessage("Please Select District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertCustomer.IsNational == undefined || this.InsertCustomer.IsNational == null || this.InsertCustomer.IsNational == "") {
                this.HideShow();
                this.popupMessage("Please Select IsNational", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                this.InsertCustomer.CountryID = '95';
                this.InsertCustomer.Status = "1";
                this.InsertCustomerService.PostCustomer(this.InsertCustomer).then((response => {
                    if (response.data.Result == "1") {
                        this.CustomerHeader.Email = this.InsertCustomer.Email;
                        this.CustomerHeader.MobileNo = this.InsertCustomer.MobileNo;
                        this.HideShow();
                        this.popupMessage("Customer Already Exist with Email - " + this.CustomerHeader.Email + " and Mobile No - " + this.CustomerHeader.MobileNo, "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

                        $("#create-customer").click();
                    }
                    else {
                        $('#create-customer').click();
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Customer ID - " + response.data.Result + " Created Successfully. ", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        this.InsertCustomer = null;

                    }

                }));


            }


        }
        ShowFirstTime() {
            this.LeadCustomerDetails1.Find(this.InsertCust).then((response => {
                this.LCustomer = this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
            }
            ));
            $("#existingCustomerList").show();
        }

        ShowAll() {
            if ($("#btnShow").text() == "Show Similar" && this.InsertCust.CompanyName != undefined && this.InsertCust.CompanyName != null && this.InsertCust.CompanyName != "") {
                $("#btnShow").html("Cancel");

                this.LeadCustomerDetails1.Find(this.InsertCust).then((response => {
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

        Adopt(data): void {
            this.Search(data);
        }

        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }

        SubmitContact(): void {

            this.InsertContact.CustomerID = this.InsertCust.CustomerID;
            if (this.InsertContact.CustomerID.length == 0) {
                this.HideShow();
                this.popupMessage("First Select Customer And Then Add Contact", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertContact.ContactName == undefined || this.InsertContact.ContactName == null || this.InsertContact.ContactName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact Name ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertContact.MobileNo == undefined || this.InsertContact.MobileNo == null || this.InsertContact.MobileNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertContact.MobileNo != undefined && this.InsertContact.MobileNo != null && this.InsertContact.MobileNo != "") && (isNaN(this.InsertContact.MobileNo) || this.InsertContact.MobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertContact.PhoneNo != undefined && this.InsertContact.PhoneNo != null && this.InsertContact.PhoneNo != "") && (isNaN(this.InsertContact.PhoneNo) || this.InsertContact.PhoneNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertContact.Email != undefined && this.InsertContact.Email != null && this.InsertContact.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertContact.Email))) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if ((this.InsertContact.PostalCode != undefined && this.InsertContact.PostalCode != null && this.InsertContact.PostalCode != "") && (isNaN(this.InsertContact.PostalCode) || this.InsertContact.PostalCode.length != 6)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertContact.DepartmentID == undefined || this.InsertContact.DepartmentID == null || this.InsertContact.DepartmentID == "") {
                this.HideShow();
                this.popupMessage("Please Select Department ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertContact.FOPID == undefined || this.InsertContact.FOPID == null || this.InsertContact.FOPID == "") {
                this.HideShow();
                this.popupMessage("Please Select Designation  ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                this.InsertContact.CountryID = '95';
                this.InsertContact.Status = '1';
                this.InsertContactService.PostContact(this.InsertContact).then((response => {
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Contact ID -  " + response.data.Result + " Created Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#create-contact').click();

                        this.ContactDetail();
                        this.InsertContact = null;
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Contact already exists with the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

                    }
                }));
            }

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

        Clear() {
            this.InsertLead = null;
            this.InsertCust = null;
            this.Contactinfo = null;
        }

        public Search(data: any): void {
            this.CustomerInfoService.Find(data).then((response => {
                this.InsertCust = this.CustomerInfoService.GetLeadCustomerInfo(response.data.Result);

                var temp = this.InsertCust.DistrictID;
                this.CustDistrictDropDown = this.DistrictService.Find(this.InsertCust.StateID).then((response => {
                    this.CustDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                    this.InsertCust.DistrictID = temp;
                }));

                this.ShowFirstTime();
                this.ContactDetail();
                this.LeadDetail();

            }));

        }

        ContactDetail(): void {
            $("#existingContactList").show();
            this.Contactinfo = this.ContactInfoService.Find(this.InsertCust.CustomerID).then((response => {
                this.Contactinfo = this.ContactInfoService.GetLeadContactInfo(response.data.Result);
            }));
        }
        LeadDetail(): void {
            $("#existingLeadList").show();
            this.Leadinfo = this.LeadDetailsService.Find(this.InsertCust.CustomerID).then((response => {
                this.Leadinfo = this.LeadDetailsService.GetLeadInfo(response.data.Result);
            }));
        }

        Close(): void {

            location.href = "#!/LeadAssessmentList";

        }


    }
    class CreateLeadFormComponentController implements ng.IComponentOptions {
        static Name: string = "createleadformcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CreateLeadFormController;
            this.templateUrl = "/Scripts/App/CreateLeadForm/Template/CreateLeadForm.html";
        }
    }
    app.AddComponent(CreateLeadFormComponentController.Name, new CreateLeadFormComponentController());

}