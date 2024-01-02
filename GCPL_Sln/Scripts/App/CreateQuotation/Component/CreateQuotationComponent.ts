﻿namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Quotation = GCPL.Model.InsertQuotationModel;
    import SOS = GCPL.Model.SOSModel;
    import COL = GCPL.Model.COLModel;
    import ProductFeatures = GCPL.Model.ProductFModel;
    import TermsConditions = GCPL.Model.TermsCModel;
    import OfferList = GCPL.Model.OfferModel;
    import Capabilities = GCPL.Model.CapabilityModel;
    import GSTCalculation = GCPL.Model.TotalPriceModel;
     import LeadChangeInsert = GCPL.Model.UpdateLeadChangeModel;
     import LeadItem = GCPL.Model.LeadItemCreateModel;



    interface ICreateQuotationController {
        /*LeadAssessment: LeadAssess;*/
        Accessory1DropDown: Array<Model.Accessory1ddlModel>
        Option1DropDown: Array<Model.Option1ddlModel>
        Accessory2DropDown: Array<Model.Accessory2ddlModel>
        Option2DropDown: Array<Model.Option2ddlModel>
        Accessory3DropDown: Array<Model.Accessory3ddlModel>
        Option3DropDown: Array<Model.Option3ddlModel>
        Accessory4DropDown: Array<Model.Accessory4ddlModel>
        Option4DropDown: Array<Model.Option4ddlModel>
        Accessory5DropDown: Array<Model.Accessory5ddlModel>
        Option5DropDown: Array<Model.Option5ddlModel>
        Accessory6DropDown: Array<Model.Accessory6ddlModel>
        Option6DropDown: Array<Model.Option6ddlModel>
        CountryDropDown: Array<Model.CountryddlModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        AddConCountryDropDown: Array<Model.CountryddlModel>
        AddConStateDropDown: Array<Model.StateddlModel>
        AddConDistrictDropDown: Array<Model.DistrictddlModel>
        DepartmentDropDown: Array<Model.DepartmentddlModel>
        DesignationDropDown: Array<Model.DesignationddlModel>
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        LeadSalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        LeadCategoryDropDown: Array<Model.LeadCategoryddlModel>
        ProjectNameDD: Array<Model.GetProjectNameDDModel>
        IndustryDivisionDropDown: Array<Model.IndustryDivisionddlModel>
        IndustrialSegmentDropDown: Array<Model.IndustrialSegmentddlModel>
        PurchaseTimlinedd: Array<Model.PurchaseTimelineModel>
        CategoryDropDown: Array<Model.CategoryddlModel>
        DivisionDropDownP: Array<Model.DivisionDDPModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        ChannelDD: Array<Model.ChannelDDModel>
        LeadSourcedd: Array<Model.LeadSourceDetailsModel>
        
        OpportunitySAPNo: any;
        InsertLeadChange: LeadChangeInsert;
        InsertQuotation: Quotation;
        ViewSOS: SOS;
        ViewCOL: COL;
        ViewPF: ProductFeatures;
        ViewTC: TermsConditions;
        ViewOffer: OfferList;
        InsertItem: LeadItem;
        ViewCapability: Capabilities;
        TotalPriceModel: GSTCalculation;
        Submit(): void;
        Edit(data: any): void;
        EditItem(data: any): void;
        QuotationID: any;
        GetOption1(): void;
        LeadID: any;
        ModelID: any;
        ProductID: any;
    }

    class CreateQuotationController implements ICreateQuotationController {
        LeadAssessment = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        private Cookie: any = null;
        UserID = null;
        QuotationRefernce = null;
        OpportunitySAPNo = null;
        Accessory1DropDown = null;
        Option1DropDown = null;
        LeadItemlist = null;
        Accessory2DropDown = null;
        Option2DropDown = null;
        Accessory3DropDown = null;
        Option3DropDown = null;
        Accessory4DropDown = null;
        Option4DropDown = null;
        InsertItem = null;
        Accessory5DropDown = null;
        Option5DropDown = null;
        InsertLeadChange = null;
        Accessory6DropDown = null;
        Option6DropDown = null;
        Configuration1DropDown = null;
        Configuration2DropDown = null;
        InsertQuotation = null;
        ViewSOS = null;
        ViewCOL = null;
        ViewPF = null;
        ViewTC = null;
        ViewOffer = null;
        ViewCapability = null;
        QuotationID = null;
        Total = null;
        LeadID = null;
        CountryDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        AddConCountryDropDown = null;
        AddConStateDropDown = null;
        AddConDistrictDropDown = null;
        DepartmentDropDown = null;
        DesignationDropDown = null;
        LeadStatusDropDown = null;
        LeadSalesOfficeDropDown = null;
        LeadTypeDropDown = null;
        LeadCategoryDropDown = null;
        ProjectNameDD = null;
        IndustryDivisionDropDown = null;
        IndustrialSegmentDropDown = null;
        PurchaseTimlinedd = null;
        CategoryDropDown = null;
        DivisionDropDownP = null;
        ProductDropDown = null;
        ModelDropDown = null;
        ChannelDD = null;
        LeadSourcedd = null;
        ModelID = null;
        ProductID = null;

        TotalPriceModel: GCPL.Model.TotalPriceModel = null;
        private LeadAssessmentService: Service.ILeadAssessmentService;
        private Accessory1Service: Service.IAccessory1DDService;
        private Option1Service: Service.IOption1DDService;
        private Accessory2Service: Service.IAccessory2DDService;
        private Option2Service: Service.IOption2DDService;
        private Accessory3Service: Service.IAccessory3DDService;
        private Option3Service: Service.IOption3DDService;
        private Accessory4Service: Service.IAccessory4DDService;
        private Option4Service: Service.IOption4DDService;
        private Accessory5Service: Service.IAccessory5DDService;
        private Option5Service: Service.IOption5DDService;
        private Accessory6Service: Service.IAccessory6DDService;
        private Option6Service: Service.IOption6DDService;
        private Configuration1Service: Service.IConfiguration1DDService;
        private Configuration2Service: Service.IConfiguration2DDService;
        private SOSService: Service.IScopeofSupplyService;
        private COLService: Service.ICoveringLetterInfoService;
        private PFService: Service.IProductFeaturesInfoService;
        private TCService: Service.ITermsConditionInfoService;
        private OfferService: Service.IOfferingInfoService;
        private CapabilityService: Service.ICapabilitiesInfoService;
        private TotalPriceCalService: Service.ITotalPriceService;
        private InsertService: Service.IInsertQuotationService;
        private EditService: Service.ILeadChangeEditService;
        private ListItemservice: Service.ILeadItemListService;
        private EditItemService: Service.IEditItemList;
        private InsertItemAssessment: Service.IInsertItemDetailsService;
        private CountryddService: Service.ICountryddService;
        /*private StateService: Service.IStateService;*/
        private DistrictService: Service.IDistrictService;
        private DepartmentService: Service.IDepartmentService;
        private DesignationService: Service.IDesignationService;
        private LeadStatusService: Service.ILeadStatusddService;
        private SalesOfficeService: Service.ISalesOfficeService;
        private LeadTypeService: Service.ILeadTypeddService;
        private LeadCategoryService: Service.ILeadCategoryDDService;
        private ProjectNameService: Service.IProjectNameService;
        private IndustryDivisionService: Service.IIndustryDivisionService;
        private IndustrialSegmentService: Service.IIndustrialSegmentService;
        private PurchaseTimlineDDService: Service.IPurchaseTimelineService;
        private CategoryService: Service.ICategoryddService;
        private DivisionPService: Service.IDivisionDDPService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.IModelDDService;
        private ChannelDDService: Service.IChannelDDService;
        private LeadSourceDDService: Service.ILeadSourceDetailsService;
        private ProductDescAutofill: Service.IProductDescAutoFillService;



        static $inject = ["LeadAssessmentService","Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService",
            "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService",
            "Option6Service", "Configuration1DDService", "Configuration2DDService", "ScopeofSupplyService", "CoveringLetterInfoService",
            "ProductFeaturesInfoService", "TermsConditionInfoService", "OfferingInfoService", "CapabilitiesInfoService", "TotalPriceService",
            "InsertQuotationService", "$location", "$cookieStore", "LeadChangeEditService", "LeadItemListService", "EditItemList", "InsertItemDetailsService",
            "CountryddService", "DistrictService", "DepartmentService", "DesignationService", "LeadStatusddService", "SalesOfficeService", "LeadTypeddService",
            "LeadCategoryDDService", "ProjectNameService", "IndustryDivisionService", "IndustrialSegmentService", "PurchaseTimelineService", "CategoryddService", "DivisionDDPService",
            "ProductddService", "ModelDDService", "ChannelDDService", "LeadSourceDetailsService", "ProductDescAutoFillService"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_leadassessmentService: Service.ILeadAssessmentService,_Accessory1Service: Service.IAccessory1DDService, _Option1Service: Service.IOption1DDService,
            _Accessory2Service: Service.IAccessory2DDService, _Option2Service: Service.IOption2DDService,
            _Accessory3Service: Service.IAccessory3DDService, _Option3Service: Service.IOption3DDService,
            _Accessory4Service: Service.IAccessory4DDService, _Option4Service: Service.IOption4DDService,
            _Accessory5Service: Service.IAccessory5DDService, _Option5Service: Service.IOption5DDService,
            _Accessory6Service: Service.IAccessory6DDService, _Option6Service: Service.IOption6DDService,
            _Configuration1Service: Service.IConfiguration1DDService,
            _Configuration2Service: Service.IConfiguration2DDService, _SOSService: Service.IScopeofSupplyService, _COLService: Service.ICoveringLetterInfoService,
            _PFService: Service.IProductFeaturesInfoService, _TCService: Service.ITermsConditionInfoService,
            _OfferService: Service.IOfferingInfoService, _CapabilityService: Service.ICapabilitiesInfoService,
            _TotalPriceCalService: Service.ITotalPriceService, _InsertService: Service.IInsertQuotationService,
            private $location: ng.ILocationService, private _cookieStore: any, _EditService: Service.ILeadChangeEditService, _LeadItemListService: Service.ILeadItemListService,
            _EditItemList: Service.IEditItemList, _InsertItemAssessment: Service.IInsertItemDetailsService, _CountryddService: Service.ICountryddService,
            _DistrictService: Service.IDistrictService, _DepartmentService: Service.IDepartmentService, _DesignationService: Service.IDesignationService, _LeadStatusService: Service.ILeadStatusddService, 
            _SalesOfficeService: Service.ISalesOfficeService, _LeadTypeService: Service.ILeadTypeddService, _LeadCategoryService: Service.ILeadCategoryDDService, _ProjectNameService: Service.IProjectNameService,
            _IndustryDivisionService: Service.IIndustryDivisionService, _IndustrialSegmentService: Service.IIndustrialSegmentService, _PurchaseTimlineDDService: Service.IPurchaseTimelineService, _CategoryService: Service.ICategoryddService,
            _DivisionPService: Service.IDivisionDDPService, _ProductService: Service.IProductddService, _ModelService: Service.IModelDDService, _ChannelDDService: Service.IChannelDDService, _LeadSourceDDService: Service.ILeadSourceDetailsService,
            _ProductDescAutofill: Service.IProductDescAutoFillService) {

            this.LeadAssessmentService = _leadassessmentService;
            this.Accessory1Service = _Accessory1Service;
            this.Option1Service = _Option1Service;
            this.Accessory2Service = _Accessory2Service;
            this.Option2Service = _Option2Service;
            this.Accessory3Service = _Accessory3Service;
            this.Option3Service = _Option3Service;
            this.Accessory4Service = _Accessory4Service;
            this.Option4Service = _Option4Service;
            this.Accessory5Service = _Accessory5Service;
            this.Option5Service = _Option5Service;
            this.Accessory6Service = _Accessory6Service;
            this.Option6Service = _Option6Service;
            this.Configuration1Service = _Configuration1Service;
            this.Configuration2Service = _Configuration2Service;
            this.SOSService = _SOSService;
            this.COLService = _COLService;
            this.PFService = _PFService;
            this.TCService = _TCService;
            this.OfferService = _OfferService;
            this.CapabilityService = _CapabilityService;
            this.EditService = _EditService;
            this.EditItemService = _EditItemList;

            this.TotalPriceCalService = _TotalPriceCalService;
            this.ListItemservice = _LeadItemListService;
            this.TotalPriceModel = new GSTCalculation();
            this.OpportunitySAPNo = $location.search().OpportunitySAPNo;
            this.QuotationRefernce = $location.search().QuotationRefernce;
            this.ModelID = $location.search().Model;
            this.ProductID = $location.search().Product;
            this.InsertService = _InsertService;
            this.InsertItemAssessment = _InsertItemAssessment;
            this.CountryddService = _CountryddService;
            /*this.StateService = _StateService;*/
            this.DistrictService = _DistrictService;
            this.DepartmentService = _DepartmentService;
            this.DesignationService = _DesignationService;
            this.LeadStatusService = _LeadStatusService;
            this.SalesOfficeService = _SalesOfficeService;
            this.LeadTypeService = _LeadTypeService;
            this.LeadCategoryService = _LeadCategoryService;
            this.ProjectNameService = _ProjectNameService;
            this.IndustryDivisionService = _IndustryDivisionService;
            this.IndustrialSegmentService = _IndustrialSegmentService;
            this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
            this.CategoryService = _CategoryService;
            this.DivisionPService = _DivisionPService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.ChannelDDService = _ChannelDDService;
            this.LeadSourceDDService = _LeadSourceDDService;
            this.ProductDescAutofill = _ProductDescAutofill;

            this.InsertQuotation = new Quotation();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.LeadID = $location.search().LeadID;
            //this.ModelID = $location.search().Model;
            //this.ProductID = $location.search().Product;
            /*this.LeadAssessment = new LeadAssess();*/
            
        }



        $onInit() {
            
            
            $("#errorclose").hide();
            $('#search-btn-loader').hide();
            $("#close").hide();
            

            var splTab = document.getElementsByClassName("spl-tab");

            for (var i = 0; i < splTab.length; i++) {
                splTab[i].addEventListener("click", function () {
                    this.classList.toggle("toggle-spl-minus");
                })
            }

            this.Init();


        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        //Page Load Define Values//
        Init(): void {

            
            $("#errorclose").hide();
            $("#txtDays").hide();
            $("#ee-date").hide();
            $("#txtAllocated").hide();
            $("#txtDays2").hide();
            $("#close").hide();
            $('#Campaignfield').hide();
            $('#UserNamefield').hide();
            $("#txtAllocated1").hide();
            $("#ass-btn-loader").hide();
            $("#act-btn-loader").hide();
            $("#txtDisqual").hide();

            if (this.LeadID != undefined || this.LeadID != null || this.LeadID != "") {

                this.Edit(this.LeadID);
                //$('#Heading').hide();
            }

            if (this.LeadID != undefined || this.LeadID != null || this.LeadID != "") {
                this.Edit(this.LeadID);
                console.log(this.LeadID);
                this.FillGridItems();

            }
            this.LeadStatusDropDown = this.LeadStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadStatusService.GetLeadStatusName(response.data.Result);

            }));

            this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((response => {
                this.IndustryDivisionDropDown = this.IndustryDivisionService.GetIndustryName(response.data.Result);

            }));

            this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((response => {
                this.IndustrialSegmentDropDown = this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);

            }));
            this.LeadSalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.LeadSalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
                this.InsertItem.LeadType = "5";
            }));

            this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((response => {
                this.LeadCategoryDropDown = this.LeadCategoryService.GetLeadCategoryName(response.data.Result);

            }));

            //this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
            //    this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);
            //}));

            this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((response => {
                this.PurchaseTimlinedd = this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
            }));

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);
            }));

            this.ChannelDD = this.ChannelDDService.Find().then((response => {
                this.ChannelDD = this.ChannelDDService.GetChannelDDnew(response.data.Result);
            }));
            this.ProductDropDown = this.ProductService.Find(0).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));

            this.DivisionDropDownP = this.DivisionPService.Find(0).then((response => {
                this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);

            }));
            this.ModelDropDown = this.ModelService.Find(1).then((response => {
                this.ModelDropDown = this.ModelService.GetModelDD(response.data.Result);
            }));
            
            


           
            this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((response => {
                this.ProjectNameDD = this.ProjectNameService.GetProjectNameDD(response.data.Result);
            }));
            
            

            
            let that = this;
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

                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.InsertItem.ProductID = ui.item.id;
                },
                change: function () {

                }
            });         
           
        }

        Model(data: any): void {
            this.ModelDropDown = this.ModelService.Find(this.LeadAssessment.ProductID).then((response => {
                this.ModelDropDown = this.ModelService.GetModelDD(response.data.Result);
            }));
        }

        Division(data: any): void {

            this.DivisionDropDownP = this.DivisionPService.Find(this.LeadAssessment.CategoryID).then((response => {
                this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);

            }));
        }
        //Product(data: any): void {

        //    this.ProductDropDown = this.ProductService.Find(this.InsertLeadChange.DivisionID).then((response => {
        //        this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

        //    }));
        //}

        
        LeadSource(data: any): void {

            this.LeadSourcedd = this.LeadSourceDDService.Find(this.LeadAssessment.ChannelID).then((response => {
                this.LeadSourcedd = this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
            }));
        }

        EditItem(data: any): void {
            console.log(data);


            this.EditItemService.Find(data).then((response => {

                this.InsertItem = this.EditItemService.GetItemEdit(response.data.Result);
                $('#TotalPrice').val(this.InsertItem.TotalPrice);
                $('#TotalGST').val(this.InsertItem.TotalGST);
                $('#DiscountedPricePerUnit').val(this.InsertItem.DiscountedPricePerUnit);
                $('#NetAmount').val(this.InsertItem.NetAmount);
                //this.Total.TotalPrice = this.InsertItem.TotalPrice;
                console.log("GetItemEdit", response.data.Result);
                this.Model(this.InsertItem.ProductID);
                this.InsertItem.ModelID = this.InsertItem.ModelID;
                




                $("myModalAdd").show();

            }));

        }

        Edit(data: any): void {

            this.EditService.Find(data).then((response => {
                this.InsertLeadChange = this.EditService.GetEdit(response.data.Result);
                console.log(this.InsertLeadChange)
                this.InsertQuotation.ID = this.InsertLeadChange.ID;
                this.InsertQuotation.QID = this.InsertLeadChange.QID;
                this.InsertQuotation.SPName = this.InsertLeadChange.SPName;
                 this.InsertQuotation.SPMobileNo = this.InsertLeadChange.SPMobileNo;
                this.InsertQuotation.SPEmail = this.InsertLeadChange.SPEmail;
                this.InsertQuotation.SPDesignation = this.InsertLeadChange.SPDesignation
                this.InsertQuotation.TCDetails = this.InsertQuotation.TCDetails
                this.CountryDropDown = this.CountryddService.Find().then((response => {
                    this.CountryDropDown = this.CountryddService.GetCountryName(response.data.Result);

                }));

              
                //this.StateDropDown = this.StateService.Find(this.InsertLeadChange.CountryID).then((response => {
                //        this.StateDropDown = this.StateService.GetStateName(response.data.Result);
                //}));

                

                if (this.InsertLeadChange.LeadStatusID == "8" || this.InsertLeadChange.LeadStatusID == "9") {
                    $("#txtstatus").prop("disabled", false);
                }
                else {
                    $("#txtstatus").prop("disabled", true);
                }

                // $('#txtreason').val(this.InsertLeadChange.LeadOpenReason);
                // $('#txtcomments').val(this.InsertLeadChange.Comments);
                $('#txtCompanyName').val(this.InsertLeadChange.CompanyName);
                $('#txtmobileno').val(this.InsertLeadChange.MobileNo);
                $('#txtphno').val(this.InsertLeadChange.PhoneNo);
                $('#txtsalesoffice').val(this.InsertLeadChange.SalesOfficeID);
                $('#txtemail').val(this.InsertLeadChange.Email);
                $('#txtfax').val(this.InsertLeadChange.Fax);
                $('#txtadd1').val(this.InsertLeadChange.Address1);
                $('#txtadd2').val(this.InsertLeadChange.Address2);
                $('#txtcountry').val(this.InsertLeadChange.CountryID);
                /* this.State(this.InsertLeadChange.CountryID);*/
                $('#txtstate').val(this.InsertLeadChange.StateID);
                /* this.District(this.InsertLeadChange.StateID);*/
                $('#txtdistrict').val(this.InsertLeadChange.DistrictID);

                //this.SearchRegion.StateID = this.InsertLeadChange.StateID;
                //this.SearchRegion.DistrictID = this.InsertLeadChange.DistrictID;
                //this.InsertLeadChange.RegionID = "";

                //if (this.SearchRegion.StateID != undefined || this.SearchRegion.StateID != null || this.SearchRegion.StateID != "") {
                //    this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((response => {
                //        this.CheckRegion = this.CheckRegionService.GetRegion(response.data.Result);
                //        this.RegionDropDown[0].RegionID = this.CheckRegion[0].RegionID;

                //    }));
                //}
                //else {

                //}

                $('#txtcity').val(this.InsertLeadChange.City);
                $('#txtPincode').val(this.InsertLeadChange.PinCode);
                $('#txtindustrysegment').val(this.InsertLeadChange.IndustrialSegmentID);

                $('#txtContactName').val(this.InsertLeadChange.ContactName);
                $('#txtcontactemail').val(this.InsertLeadChange.ContactEmail);
                $('#txtContactMobNo').val(this.InsertLeadChange.ContactMobileNo);
                $('#txtContactPhno').val(this.InsertLeadChange.ContactPhoneNo);
                //$('#txtLeadStatusId').val(this.InsertLeadChange.LeadStatusID);
                $('#txtdesignation').val(this.InsertLeadChange.Designation);
                $('#txtdept').val(this.InsertLeadChange.DepartmentID);
                $('#txtFop').val(this.InsertLeadChange.FOPID);
                $('#txtaddress').val(this.InsertLeadChange.Address);
                $('#txtconcountry').val(this.InsertLeadChange.ContactCountryID);
                $('#txtdesignation').val(this.InsertLeadChange.Designation);
                $('#txtdept').val(this.InsertLeadChange.DepartmentID);
                //this.AddConState(this.InsertLeadChange.ContactCountryID);
                //$('#txtconstate').val(this.InsertLeadChange.ContactStateID);
                //this.AddConDistrict(this.InsertLeadChange.ContactCountryID);
                //$('#txtcondistrict').val(this.InsertLeadChange.ContactDistrictID);
                //$('#txtconcity').val(this.InsertLeadChange.ContactCity);
                //$('#txtconpincode').val(this.InsertLeadChange.PostalCode);

                //$('#txtleadtype').val(this.InsertLeadChange.LeadType);
                //$('#txtcategory').val(this.InsertLeadChange.CategoryID);
                //this.Division(this.InsertLeadChange.CategoryID);
                //$('#txtdivision').val(this.InsertLeadChange.DivisionID);
                //this.Product(this.InsertLeadChange.DivisionID);
                //$('#txtproduct').val(this.InsertLeadChange.ProductID);
                //this.Model(this.InsertLeadChange.ProductID);
                //$('#txtmodelno').val(this.InsertLeadChange.ModelID);
                //$('#txtqty').val(this.InsertLeadChange.Quantity);
                //$('#txttitle').val(this.InsertLeadChange.PurchaseTimelineID);
                //$('#txtleadcategory').val(this.InsertLeadChange.LeadCategoryID);
                //$('#ddlprojectname').val(this.InsertLeadChange.ProjectID);
                //$('#txtsalesarea').val(this.InsertLeadChange.SalesAreaID);
                //this.SalesArea(this.InsertLeadChange.SalesAreaID);


                //this.SearchSalesArea.CountryID = this.InsertLeadChange.CountryID;
                //this.SearchSalesArea.LeadCategoryID = this.InsertLeadChange.LeadCategoryID;
                //this.SearchSalesArea.CategoryID = this.InsertLeadChange.CategoryID;

                //this.GetSalesArea = this.CheckSalesAreaService.Find(this.SearchSalesArea).then((response => {
                //    this.GetSalesArea = this.CheckSalesAreaService.GetSales(response.data.Result);
                //    

                //    this.InsertLeadChange.SalesAreaID = this.GetSalesArea[0].toString();

                //}));

                //this.LeadSource(this.InsertLeadChange.ChannelID);

                //this.LeadSourceChange();
                //if (this.InsertLeadChange.LeadSourceID == "2") {
                //    this.InsertLeadChange.RefUserID = this.InsertLeadChange.RefUserID;
                //    this.InsertLeadChange.RefUserName = this.InsertLeadChange.RefUserName;
                //    this.SearchUser.RefUserID = this.InsertLeadChange.RefUserID;
                //    this.SearchUser.RefUserName = this.InsertLeadChange.RefUserName;
                //}
                //else if (this.InsertLeadChange.LeadSourceID == "10" || this.InsertLeadChange.LeadSourceID == "24") {

                //    this.InsertLeadChange.CampaignID = this.InsertLeadChange.CampaignID;
                //}
                //$('#txtChannel').val(this.InsertLeadChange.ChannelID);
                //this.LeadSource(this.InsertLeadChange.ChannelID);
                //$('#ddlleadsource').val(this.InsertLeadChange.LeadSourceID);
                //$('#txtCommnets').val(this.InsertLeadChange.Comments);

                //if (this.InsertQuotation.TC1 != "NA" || this.InsertQuotation.TC2 != "NA" || this.InsertQuotation.TC3 != "NA" || this.InsertQuotation.TC4 != "NA" || this.InsertQuotation.TC5 == "NA" || this.InsertQuotation.TC6 != "NA" || this.InsertQuotation.TC7 != "NA") {
                //    this.InsertQuotation.TC1 = this.InsertQuotation.TC1.toString();
                //    this.InsertQuotation.TC2 = this.InsertQuotation.TC2.toString();
                //    this.InsertQuotation.TC3 = this.InsertQuotation.TC3.toString();
                //    this.InsertQuotation.TC4 = this.InsertQuotation.TC4.toString();
                //    this.InsertQuotation.TC5 = this.InsertQuotation.TC5.toString();
                //    this.InsertQuotation.TC6 = this.InsertQuotation.TC6.toString();
                //    this.InsertQuotation.TC7 = this.InsertQuotation.TC7.toString();
                //    this.InsertQuotation.TC8 = this.InsertQuotation.TC8.toString();




                //}
                //console.log("QID1", this.InsertQuotation.QID)
                //if (this.InsertQuotation.QID == undefined || this.InsertQuotation.QID == null || this.InsertQuotation.QID == "")
                //{
                    console.log("QID2", this.InsertQuotation.QID)
                  this.TCService.Find().then((response => {
                        this.ViewTC = this.TCService.GetTC(response.data.Result);
                        console.log("TC", response.data.Result)
                        for (var i = 0; i < this.ViewTC.length; i++) {
                            if (i === 0) {

                                this.InsertQuotation.TC1 = this.ViewTC[0].Description.toString();
                                //var TAC1 = this.ViewTC[0].TACID;
                            }
                            if (i === 1) {

                                this.InsertQuotation.TC2 = this.ViewTC[1].Description.toString();
                                //var TAC2 = this.ViewTC[1].TACID;
                            }
                            if (i === 2) {

                                this.InsertQuotation.TC3 = this.ViewTC[2].Description.toString();
                                //var TAC3 = this.ViewTC[2].TACID;
                            }
                            if (i === 3) {

                                this.InsertQuotation.TC4 = this.ViewTC[3].Description.toString();
                                //var TAC4 = this.ViewTC[3].TACID;
                            }
                            if (i === 4) {

                                this.InsertQuotation.TC5 = this.ViewTC[4].Description.toString();
                                //var TAC5 = this.ViewTC[4].TACID;
                            }
                            if (i === 5) {

                                this.InsertQuotation.TC6 = this.ViewTC[5].Description.toString();
                                //var TAC6 = this.ViewTC[5].TACID;
                            }
                            if (i === 6) {

                                this.InsertQuotation.TC7 = this.ViewTC[6].Description.toString();
                                //var TAC7 = this.ViewTC[6].TACID;
                            }
                            if (i === 7) {

                                this.InsertQuotation.TC8 = this.ViewTC[7].Description.toString();
                                //var TAC8 = this.ViewTC[7].TACID;
                            }
                        }

                  }));
              /*  }*/

                

            }));
        }
        

        FillGridItems(): void {

            this.LeadItemlist = this.ListItemservice.Find(this.LeadID).then((response => {
                this.LeadItemlist = this.ListItemservice.GetLeadItemList(response.data.Result);

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

        CheckPrice(): void {

            
            this.InsertItem.MRPUnit = this.InsertItem.MRPUnit;
            this.InsertItem.Quantity = this.InsertItem.Quantity;
            this.InsertItem.GST = this.InsertItem.GST;
            this.InsertItem.Discount = this.InsertItem.Discount;
            //this.Total.TotalPrice = this.InsertItem.TotalPrice;
            this.Total = this.TotalPriceCalService.FindChange(this.InsertItem).then((response => {
                this.Total = this.TotalPriceCalService.GetTotalPriceChange(response.data.Result);


                console.log("GetTotalPriceChange",response.data.Result)


            }));
        }

        SubmitItem(): void {
            // $("#ass-btn-loader1").show();
            debugger;
            this.InsertItem.LeadID = this.LeadID;
            console.log("OP", this.InsertItem);
            if (this.InsertItem.LeadType == undefined || this.InsertItem.LeadType == null || this.InsertItem.LeadType == "") {
                this.HideShow();
                this.popupMessage("Please Select Opportunity Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertItem.LeadCategoryID == undefined && this.InsertItem.LeadCategoryID == null && this.InsertItem.LeadCategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Select Opportunity Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertItem.PurchaseTimelineID == undefined || this.InsertItem.PurchaseTimelineID == null || this.InsertItem.PurchaseTimelineID == "") {
                this.HideShow();
                this.popupMessage("Please Select Plan to Purchase Within", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertItem.Quantity == undefined && this.InsertItem.Quantity == null && this.InsertItem.Quantity == "") {
                this.HideShow();
                this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertItem.CategoryID == undefined || this.InsertItem.CategoryID == null || this.InsertItem.CategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Select Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            //else if (this.InsertItem.DivisionID == undefined || this.InsertItem.DivisionID == null || this.InsertItem.DivisionID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}

            //else if (this.InsertItem.ProductID == undefined || this.InsertItem.ProductID == null || this.InsertItem.ProductID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}

            //else if (this.InsertItem.ModelID == undefined || this.InsertItem.ModelID == null || this.InsertItem.ModelID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}

            //else if (this.InsertItem.ChannelID == undefined || this.InsertItem.ChannelID == null || this.InsertItem.ChannelID == "") {

            //    this.HideShow();
            //    this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else if (this.InsertItem.LeadSourceID == undefined || this.InsertItem.LeadSourceID == null || this.InsertItem.LeadSourceID == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Opportunity Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            else {
                debugger;
                $("#Item-submit").prop("disabled", true);


                this.InsertItem.ItemStatusID = this.InsertItem.LeadStatusId;
                this.InsertItem.CategoryID = this.InsertItem.LeadCategoryID;

                console.log("OP", this.InsertItem);
                //this.CreateInSAPLeadActivityService.PostCreateInSAPLeadActivity(this.InsertAct).then((response => {
                this.InsertItemAssessment.PostItem(this.InsertItem).then((response => {
                    debugger;
                    if (response.data.Result != null) {

                        //   $("#myAlert").modal("show");
                        //  $("#act-btn-loader").hide(); 
                        this.HideShow();
                        this.popupMessage("Item created Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        //$("#myModalAddNew").hide();
                        $('#myModalAdd').click();
                        this.FillGridItems();

                    }

                    else {

                        // $("#ass-btn-loader1").hide();
                        //  $("#myAlert").modal("show");
                        this.HideShow();
                        this.popupMessage("Item Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));
            }

        }

        Submit(): void {
            debugger;
            this.InsertQuotation.CustomerName = 'Test';
            this.InsertQuotation.ContactName = 'Testt';
            this.InsertQuotation.CustomerID = 1123;
            this.InsertQuotation.ContactID = 1123;

            this.InsertQuotation.CreatedBy = this.UserID;
            this.InsertQuotation.LeadID = this.LeadID;
            this.InsertQuotation.QID = this.InsertLeadChange.QID;
            
            if (this.UserID != null || this.UserID != "") {
                this.InsertQuotation.CreatedBy = this.UserID;
            }

            



            /*this.InsertQuotation.QuoteDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;*/
            this.InsertService.PostQuote(this.InsertQuotation).then((response => {

                if (response.data.Result != null) {
                    $("#errorclose").hide();
                    $("#close").show();
                    this.popupMessage("Data Submitted Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");

                }
                else {
                    this.HideShow();
                    this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                }

            }));


        }

        GetOption1(): void {
            this.Option1DropDown = this.Option1Service.Find(this.InsertQuotation.Accessory1ID).then((response => {
                this.Option1DropDown = this.Option1Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption2(): void {
            this.Option2DropDown = this.Option2Service.Find(this.InsertQuotation.Accessory2ID).then((response => {
                this.Option2DropDown = this.Option2Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption3(): void {
            this.Option3DropDown = this.Option3Service.Find(this.InsertQuotation.Accessory3ID).then((response => {
                this.Option3DropDown = this.Option3Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption4(): void {
            this.Option4DropDown = this.Option4Service.Find(this.InsertQuotation.Accessory4ID).then((response => {
                this.Option4DropDown = this.Option4Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption5(): void {
            this.Option5DropDown = this.Option5Service.Find(this.InsertQuotation.Accessory5ID).then((response => {
                this.Option5DropDown = this.Option5Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption6(): void {
            this.Option6DropDown = this.Option6Service.Find(this.InsertQuotation.Accessory6ID).then((response => {
                this.Option6DropDown = this.Option6Service.GetAccessory(response.data.Result);

            }));


            
            
        }

        Close(): void {

            location.href = "#!/QuotationList";

        }

    }
    class CreateQuotationComponentController implements ng.IComponentOptions {
        static Name: string = "createquotationcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CreateQuotationController;
            this.templateUrl = "/Scripts/App/CreateQuotation/Template/CreateQuotation.html";
        }
    }
    app.AddComponent(CreateQuotationComponentController.Name, new CreateQuotationComponentController());


}