namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadOverrideInsert = GCPL.Model.UpdateLeadOverrideModel;
    import EditOverride = GCPL.Model.EditLeadOverrideModel;
    import InsertRegionID = GCPL.Model.InsertRegionModel;
    import Search = GCPL.Model.RegionCheckModel;
    import SalesAreaSearch = GCPL.Model.CheckSalesAreaModel;
    import SalesAreaIdList = GCPL.Model.GetSalesAreaModel;
    import SearchRefUser = GCPL.Model.SearchRefUserModel;

    interface ILeadOverrideResubmitController {
        InsertLeadOverride: LeadOverrideInsert;
        Submit(data: any): void;
        Edit(data: any): void;
        LeadReasonDD: Array<Model.ReasonForLeadDDModel>
        LeadStatusCloserDD: Array<Model.LeadStatusForCloserDDModel>
        SalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        CountryDropDown: Array<Model.CountryddlModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        RegionDropDown: Array<Model.RegionDDModel>
        IndustrialSegmentDropDown: Array<Model.IndustrialSegmentddlModel>

        DepartmentDropDown: Array<Model.DepartmentddlModel>
        DesignationDropDown: Array<Model.DesignationddlModel>
        AddConCountryDropDown: Array<Model.CountryddlModel>
        AddConStateDropDown: Array<Model.StateddlModel>
        AddConDistrictDropDown: Array<Model.DistrictddlModel>

        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        CategoryDropDown: Array<Model.CategoryddlModel>
        DivisionDropDownP: Array<Model.DivisionDDPModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        PurchaseTimlinedd: Array<Model.PurchaseTimelineModel>
        ChannelDD: Array<Model.ChannelDDModel>
        LeadSourcedd: Array<Model.LeadSourceDetailsModel>
        LeadCategoryDropDown: Array<Model.LeadCategoryddlModel>

        EditLeadOverride: Array<Model.EditLeadOverrideModel>;
        SalesAreaDropDown: Array<Model.SalesAreaddlModel>
        GetSalesArea: Array<Model.GetSalesAreaModel>;
        Campaigndd: Array<Model.CampaignDetailsModel>
        UserID: GCPL.Model.UserIDModel
        LeadID: any;
        LeadStatusID: GCPL.Model.LeadStatusIDModel
        ProjectNameDD: Array<Model.GetProjectNameDDModel>;
    }
    class LeadOverrideResubmitController implements ILeadOverrideResubmitController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadID = null;
        LeadReasonDD = null;
        LeadStatusCloserDD = null;
        SalesOfficeDropDown = null;
        CountryDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        RegionDropDown = null;
        IndustrialSegmentDropDown = null;
        DepartmentDropDown = null;
        DesignationDropDown = null;
        AddConCountryDropDown = null;
        AddConStateDropDown = null;
        AddConDistrictDropDown = null;
        LeadTypeDropDown = null;
        CategoryDropDown = null;
        DivisionDropDownP = null;
        ProductDropDown = null;
        ModelDropDown = null;
        ChannelDD = null;
        LeadSourcedd = null;
        PurchaseTimlinedd = null;
        LeadCategoryDropDown = null;
        SalesAreaDD = null;
        InsertLeadOverride = null;
        EditLeadOverride = null;
        CheckRegion = null;
        SearchRegion: GCPL.Model.RegionCheckModel = null;
        SalesAreaDropDown = null;
        SearchUser: GCPL.Model.SearchRefUserModel = null;
        SearchSalesArea: GCPL.Model.CheckSalesAreaModel = null;
        GetSalesArea = null;
        Campaigndd = null;
        UserID = null;
        RoleID = null;
        LeadStatusID = null;
        ProjectNameDD = null;
        private ProjectNameService: Service.IProjectNameService;
        private InsertService: Service.IUpdateLeadOverrideService;
        private ReasonForLeadDDService: Service.IReasonForLeadDDService;
        private LeadStatusForCloserDDService: Service.ILeadStatusForCloserDDService;
        
        private SalesOfficeService: Service.ISalesOfficeService;
        private CountryService: Service.ICountryService;
        private StateService: Service.IStateddService;
        private DistrictService: Service.IDistrictddService;
        private RegionService: Service.IRegionddService;
        private CheckRegionService: Service.ICheckRegionService;
        private IndustrialSegmentService: Service.IIndustrialSegmentService;
        private DepartmentService: Service.IDepartmentService;
        private DesignationService: Service.IDesignationService;

        private LeadTypeService: Service.ILeadTypeddService;
        private CategoryService: Service.ICategoryddService;
        private DivisionPService: Service.IDivisionDDPService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.IModelDDService;
        private PurchaseTimlineDDService: Service.IPurchaseTimelineService;
        private ChannelDDService: Service.IChannelDDService;
        private LeadSourceDDService: Service.ILeadSourceDetailsService;
        private LeadCategoryService: Service.ILeadCategoryDDService;
        private SalesAreaService: Service.ISalesAreaService;
        private CheckSalesAreaService: Service.ICheckSalesAreaDataService;
        private CampaignDDService: Service.ICampaignDetailsService;
        private getAutoUser: Service.IUserCodeAutoFillService;
        private Cookie: any = null;
        private EditService: Service.ILeadOverrideEditService;

        static $inject = ["LeadOverrideEditService", "ReasonForLeadDDService", "LeadStatusForCloserDDService", "SalesOfficeService", "CountryService", "StateddService", "DistrictddService","RegionddService", "IndustrialSegmentService", "DepartmentService", "DesignationService", "LeadTypeddService",
            "CategoryddService", "DivisionDDPService", "ProductddService", "ModelDDService", "PurchaseTimelineService", "ChannelDDService", "LeadSourceDetailsService", "LeadCategoryDDService", "SalesAreaService", "UpdateLeadOverrideService", "CheckRegionService", "CheckSalesAreaDataService", "ProjectNameService", "$location", "$cookieStore", "CampaignDetailsService","UserCodeAutoFillService"];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_EditService: Service.ILeadOverrideEditService, _ReasonForLeadDDService: Service.IReasonForLeadDDService, _LeadStatusForCloserDDService: Service.ILeadStatusForCloserDDService, _SalesOfficeService: Service.ISalesOfficeService, _CountryService: Service.ICountryService, _StateService: Service.IStateddService, _DistrictService: Service.IDistrictddService, _RegionService: Service.IRegionddService, _IndustrialSegmentService: Service.IIndustrialSegmentService,
            _DepartmentService: Service.IDepartmentService, _DesignationService: Service.IDesignationService, _LeadTypeService: Service.ILeadTypeddService,
            _CategoryService: Service.ICategoryddService, _DivisionPService: Service.IDivisionDDPService, _ProductService: Service.IProductddService, _ModelService: Service.IModelDDService, _PurchaseTimlineDDService: Service.IPurchaseTimelineService,
            _ChannelDDService: Service.IChannelDDService, _LeadSourceDDService: Service.ILeadSourceDetailsService, _LeadCategoryService: Service.ILeadCategoryDDService, _SalesAreaService: Service.ISalesAreaService, _InsertService: Service.IUpdateLeadOverrideService, _CheckRegionService: Service.ICheckRegionService, _CheckSalesAreaService: Service.ICheckSalesAreaDataService, _ProjectNameService: Service.IProjectNameService, private $location: ng.ILocationService,
            private _cookieStore: any, _CampaignDDService: Service.ICampaignDetailsService, _getAutoUser: Service.IUserCodeAutoFillService) { 

            this.InsertService = _InsertService;
            this.InsertLeadOverride = new LeadOverrideInsert();
            this.ReasonForLeadDDService = _ReasonForLeadDDService;
            this.LeadStatusForCloserDDService = _LeadStatusForCloserDDService;
            this.SalesOfficeService = _SalesOfficeService;
            this.CountryService = _CountryService;
            this.StateService = _StateService;
            this.DistrictService = _DistrictService;
            this.RegionService = _RegionService;
            this.CheckRegionService = _CheckRegionService;
            this.SearchRegion = new Search();
            this.IndustrialSegmentService = _IndustrialSegmentService;
            this.DepartmentService = _DepartmentService;
            this.DesignationService = _DesignationService;
            this.LeadTypeService = _LeadTypeService;
            this.CategoryService = _CategoryService;
            this.DivisionPService = _DivisionPService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
            this.ChannelDDService = _ChannelDDService;
            this.LeadSourceDDService = _LeadSourceDDService;
            this.LeadCategoryService = _LeadCategoryService;
            this.SalesAreaService = _SalesAreaService;
            this.CheckSalesAreaService = _CheckSalesAreaService;
            this.SearchSalesArea = new SalesAreaSearch();
            this.EditService = _EditService;
            this.LeadID = $location.search().LeadID;
            this.CampaignDDService = _CampaignDDService;
            this.ProjectNameService=_ProjectNameService;
            this.SearchUser = new SearchRefUser();
            this.getAutoUser = _getAutoUser;
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];

        }

        $onInit() {
           
            let that = this;
            this.Init();
            $("#errorclose").hide();
            $('#search-btn-loader').hide();
            $("#close").hide();

            var splTab = document.getElementsByClassName("spl-tab");

            for (var i = 0; i < splTab.length; i++) {
                splTab[i].addEventListener("click", function () {
                    this.classList.toggle("toggle-spl-minus");
                })
            }
        }

        //Page Load Define Values//
        Init(): void {
            debugger;
            if (this.RoleID == "47")
            {
                $("#txtstatus").prop("disabled", false);
                $("#txtChannel").prop("disabled", false);
                $("#ddlleadsource").prop("disabled", false);
                $("#ddlcampaign").prop("disabled", false);
                $("#txtUserName").prop("disabled", false);
            }
            else if (this.RoleID == "46") {
                $("#txtstatus").prop("disabled", true);
                $("#txtChannel").prop("disabled", false);
                $("#ddlleadsource").prop("disabled", false);
                $("#ddlcampaign").prop("disabled", false);
                $("#txtUserName").prop("disabled", false);
            }
            else
            {
                $("#txtstatus").prop("disabled", false);
                $("#txtChannel").prop("disabled", true);
                $("#ddlleadsource").prop("disabled", true);
                $("#ddlcampaign").prop("disabled", true);
                $("#txtUserName").prop("disabled", true);
            }

            let that = this;

            $('#Campaignfield').hide();
            $('#UserNamefield').hide();
            $("#errorclose").hide();
            $("#close").hide();
            
            debugger;
            this.LeadReasonDD = this.ReasonForLeadDDService.Find().then((response => {
                this.LeadReasonDD = this.ReasonForLeadDDService.GetReason(response.data.Result);

            }));
            
           
            debugger;
            this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.SalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
            }));

            this.CountryDropDown = this.CountryService.Find().then((response => {
                this.CountryDropDown = this.CountryService.GetCountryName(response.data.Result);

            })); 

            this.RegionDropDown = this.RegionService.Find().then((response => {
                this.RegionDropDown = this.RegionService.GetRegion(response.data.Result);

            }));   

            this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((response => {
                this.IndustrialSegmentDropDown = this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);
            }));

            this.DepartmentDropDown = this.DepartmentService.Find().then((response => {
                this.DepartmentDropDown = this.DepartmentService.GetDepartmentName(response.data.Result);
            }));

            this.DesignationDropDown = this.DesignationService.Find().then((response => {
                this.DesignationDropDown = this.DesignationService.GetDesignationName(response.data.Result);
            }));

            this.AddConCountryDropDown = this.CountryService.Find().then((response => {
                this.AddConCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);
            }));

            this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((response => {
                this.PurchaseTimlinedd = this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
            }));
            this.ChannelDD = this.ChannelDDService.Find().then((response => {
                this.ChannelDD = this.ChannelDDService.GetChannelDDnew(response.data.Result);
            }));
            this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((response => {
                this.LeadCategoryDropDown = this.LeadCategoryService.GetLeadCategoryName(response.data.Result);

            }));
            this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
                this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);
            }));
            //var LeadStatus = this.InsertLeadOverride.LeadStatusID;
            this.LeadStatusCloserDD = this.LeadStatusForCloserDDService.Find(this.LeadID).then((response => {
                this.LeadStatusCloserDD = this.LeadStatusForCloserDDService.GetLeadCloser(response.data.Result);
                //this.InsertLeadOverride.LeadStatusID = LeadStatus
            }));
            this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((response => {
                this.ProjectNameDD = this.ProjectNameService.GetProjectNameDD(response.data.Result);
            }));
            if (this.LeadID != undefined || this.LeadID != null || this.LeadID != "") {
                this.Edit(this.LeadID);

            }
            //else {

            //    this.Edit(this.LeadID);
              
            //}

            $("#txtUserName").autocomplete({

                source: function (request, res) {
                    that.getAutoUser.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoUser.GetAutoUser(response.data.Result);

                        res($.map(data, function (item, index) {
                            debugger;
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
                    that.InsertLeadOverride.RefUserID = ui.item.id;
                    that.InsertLeadOverride.RefUserName = ui.item.value;
                },
                change: function () {

                }
            });

        }

        State(data: any): void {

            this.StateDropDown = this.StateService.Find(this.InsertLeadOverride.CountryID).then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        District(data: any): void {

            this.DistrictDropDown = this.DistrictService.Find(this.InsertLeadOverride.StateID).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        AddConState(data: any): void {

            this.AddConStateDropDown = this.StateService.Find(this.InsertLeadOverride.ContactCountryID).then((response => {
                this.AddConStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        AddConDistrict(data: any): void {

            this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertLeadOverride.ContactStateID).then((response => {
                this.AddConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        Division(data: any): void {

            this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLeadOverride.CategoryID).then((response => {
                this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);

            }));


        }

        Product(data: any): void {
            debugger;
            this.ProductDropDown = this.ProductService.Find(this.InsertLeadOverride.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));
        }

        Model(data: any): void {

            this.ModelDropDown = this.ModelService.Find(this.InsertLeadOverride.ProductID).then((response => {
                this.ModelDropDown = this.ModelService.GetModelDD(response.data.Result);
            }));
        }
        LeadSource(data: any): void {

            this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLeadOverride.ChannelID).then((response => {
                this.LeadSourcedd = this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
            }));
        }
        LeadStatuscloser(data: any): void {

            this.LeadStatusCloserDD = this.LeadStatusForCloserDDService.Find(this.LeadID).then((response => {
                this.LeadStatusCloserDD = this.LeadStatusForCloserDDService.GetLeadCloser(response.data.Result);

            }));
        }

        Campaign(): void {
            this.Campaigndd = this.CampaignDDService.Find(this.InsertLeadOverride.LeadSourceID).then((response => {
                this.Campaigndd = this.CampaignDDService.GetCampaignDetails(response.data.Result);
            }));
        }
        LeadSourceChange() {
            $("#Campaignfield").hide();
            $("#UserNamefield").hide();
            if (this.InsertLeadOverride.LeadSourceID == "10" || this.InsertLeadOverride.LeadSourceID == "24") {
                this.Campaign();
                $("#Campaignfield").show();
                $("#UserNamefield").hide();
            }
            else if (this.InsertLeadOverride.LeadSourceID == "2") {
                $("#Campaignfield").hide();
                $("#UserNamefield").show();
            }
        }

        LeadReason() {
            debugger;
            $("#txtreason").prop('disabled', true);
            if (this.InsertLeadOverride.LeadStatusID == "8") {
               
                $("#txtreason").prop('disabled', false);
                this.LeadReasonDD = this.ReasonForLeadDDService.Find().then((response => {
                    this.LeadReasonDD = this.ReasonForLeadDDService.GetReason(response.data.Result);
                    this.InsertLeadOverride.LeadReason = this.LeadReasonDD[0].ID.toString();
                }));
            }
            else {
                $("#txtreason").prop('disabled', true);
                this.InsertLeadOverride.LeadReason = "";
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

        Submit(data: any): void {
            debugger;
            this.InsertLeadOverride.UserID = this.UserID;
            //this.InsertLeadOverride.LeadStatusID = this.LeadStatusID;
            
           if (this.InsertLeadOverride.LeadStatusID == undefined || this.InsertLeadOverride.LeadStatusID == null || this.InsertLeadOverride.LeadStatusID == "") {
               this.HideShow();
               this.popupMessage("Please Enter LeadStatus", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            //else if (this.InsertLeadOverride.LeadReason == undefined || this.InsertLeadOverride.LeadReason == null || this.InsertLeadOverride.LeadReason == "") {
            //    $("#errorclose").show();
            //    $("#close").hide();
            //    this.alert = "Please Enter Lead Reason";

            //}
           else if (this.InsertLeadOverride.Comments == undefined || this.InsertLeadOverride.Comments == null || this.InsertLeadOverride.Comments == "") {
               this.HideShow();
               this.popupMessage("Please Enter Comments", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
           }
            else if (this.InsertLeadOverride.ChannelID == undefined || this.InsertLeadOverride.ChannelID == null || this.InsertLeadOverride.ChannelID == "") {
               this.HideShow();
               this.popupMessage("Please Enter Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadOverride.LeadSourceID == undefined || this.InsertLeadOverride.LeadSourceID == null || this.InsertLeadOverride.LeadSourceID == "") {
               this.HideShow();
               this.popupMessage("Please Enter Lead Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
           
            else if (this.InsertLeadOverride.LeadSourceID == "2" && (this.InsertLeadOverride.RefUserID == undefined || this.InsertLeadOverride.RefUserID == null || this.InsertLeadOverride.RefUserID == "")) {
               this.HideShow();
               this.popupMessage("Please Enter Ref User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertLeadOverride.LeadSourceID == "10" || this.InsertLeadOverride.LeadSourceID == "24") && (this.InsertLeadOverride.CampaignID == undefined || this.InsertLeadOverride.CampaignID == null || this.InsertLeadOverride.CampaignID == "")) {
               this.HideShow();
               this.popupMessage("Please Select  Campaign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
       
            else {

                debugger;
                if (this.UserID != null || this.UserID != "") {
                    this.InsertLeadOverride.UserID = this.UserID;
                } 
                if (this.InsertLeadOverride.LeadSourceID == "2") {
                    debugger;
                    this.InsertLeadOverride.CampaignID = "";

                }
                else if (this.InsertLeadOverride.LeadSourceID == "10" || this.InsertLeadOverride.LeadSourceID == "24") {

                    this.InsertLeadOverride.RefUserID = "";
                    this.InsertLeadOverride.RefUserName = "";
                }
                this.InsertService.PostLeadOverride(this.InsertLeadOverride).then((response => {

                    console.log(this.InsertLeadOverride);
                    debugger;
                    //if (response.data.Result != null) {
                        if (response.data.Result > 0) {
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("LeadID ID - " + this.LeadID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            this.InsertLeadOverride = null;
                        }
                        else {
                            
                            this.HideShow();
                            this.popupMessage("LeadID ID - " + this.LeadID + " is unable to Change.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                     
                }));

            }


        }
        Edit(data: any): void {
            debugger;
            this.EditService.Find(data).then((response => {
                this.InsertLeadOverride = this.EditService.GetEdit(response.data.Result);
                debugger;
               // this.LeadStatusID = this.InsertLeadOverride.LeadStatusID;
                var status = this.InsertLeadOverride.LeadStatusID;
                this.LeadStatusCloserDD = this.LeadStatusForCloserDDService.Find(this.LeadID).then((response => {
                    this.LeadStatusCloserDD = this.LeadStatusForCloserDDService.GetLeadCloser(response.data.Result);
                    
                    this.InsertLeadOverride.LeadStatusID = status; //this.LeadStatusCloserDD[0].LeadStatusID.toString();
                }));
                var reason = this.InsertLeadOverride.LeadReason
                this.LeadReasonDD = this.ReasonForLeadDDService.Find().then((response => {
                    this.LeadReasonDD = this.ReasonForLeadDDService.GetReason(response.data.Result);
                    this.InsertLeadOverride.LeadReason = reason;
                }));
                
               // $('#txtreason').val(this.InsertLeadOverride.LeadReason);
               // $('#txtcomments').val(this.InsertLeadOverride.Comments);
                $('#txtCompanyName').val(this.InsertLeadOverride.CompanyName);
                $('#txtmobileno').val(this.InsertLeadOverride.MobileNo);
                $('#txtphno').val(this.InsertLeadOverride.PhoneNo);
                $('#txtsalesoffice').val(this.InsertLeadOverride.SalesOfficeID);
                $('#txtemail').val(this.InsertLeadOverride.Email);
                $('#txtfax').val(this.InsertLeadOverride.Fax);
                $('#txtadd1').val(this.InsertLeadOverride.Address1);
                $('#txtadd2').val(this.InsertLeadOverride.Address2);
                $('#txtcountry').val(this.InsertLeadOverride.CountryID);
                this.State(this.InsertLeadOverride.CountryID);
                $('#txtstate').val(this.InsertLeadOverride.StateID);
                this.District(this.InsertLeadOverride.StateID);
                $('#txtdistrict').val(this.InsertLeadOverride.DistrictID);
                this.SearchRegion.StateID = this.InsertLeadOverride.StateID;
                this.SearchRegion.DistrictID = this.InsertLeadOverride.DistrictID;
                this.InsertLeadOverride.RegionID = "";
                debugger;
                if (this.SearchRegion.StateID != undefined || this.SearchRegion.StateID != null || this.SearchRegion.StateID != "") {
                    this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((response => {
                        this.CheckRegion = this.CheckRegionService.GetRegion(response.data.Result);
                        this.RegionDropDown[0].RegionID = this.CheckRegion[0].RegionID;

                    }));
                }
                else {

                }
            
                $('#txtcity').val(this.InsertLeadOverride.City);
                $('#txtPincode').val(this.InsertLeadOverride.PinCode);
                $('#txtindustrysegment').val(this.InsertLeadOverride.IndustrialSegmentID);

                $('#txtContactName').val(this.InsertLeadOverride.ContactName);
                $('#txtcontactemail').val(this.InsertLeadOverride.ContactEmail);
                $('#txtContactMobNo').val(this.InsertLeadOverride.ContactMobileNo);
                $('#txtContactPhno').val(this.InsertLeadOverride.ContactPhoneNo);
                $('#txtdesignation').val(this.InsertLeadOverride.Designation);
                $('#txtdept').val(this.InsertLeadOverride.DepartmentID);
                $('#txtFop').val(this.InsertLeadOverride.FOPID);
                $('#txtaddress').val(this.InsertLeadOverride.Address);
                $('#txtconcountry').val(this.InsertLeadOverride.ContactCountryID);
                this.AddConState(this.InsertLeadOverride.ContactCountryID);
                $('#txtconstate').val(this.InsertLeadOverride.ContactStateID);
                this.AddConDistrict(this.InsertLeadOverride.ContactCountryID);
                $('#txtcondistrict').val(this.InsertLeadOverride.ContactDistrictID);
                $('#txtconcity').val(this.InsertLeadOverride.ContactCity);
                $('#txtconpincode').val(this.InsertLeadOverride.PostalCode);

                $('#txtleadtype').val(this.InsertLeadOverride.LeadType);
                $('#txtcategory').val(this.InsertLeadOverride.CategoryID);
                this.Division(this.InsertLeadOverride.CategoryID);
                $('#txtdivision').val(this.InsertLeadOverride.DivisionID);
                this.Product(this.InsertLeadOverride.DivisionID);
                $('#txtproduct').val(this.InsertLeadOverride.ProductID);
                this.Model(this.InsertLeadOverride.ProductID);
                $('#txtmodelno').val(this.InsertLeadOverride.ModelID);
                $('#txtqty').val(this.InsertLeadOverride.Quantity);
                $('#txttitle').val(this.InsertLeadOverride.PurchaseTimelineID);
                $('#txtleadcategory').val(this.InsertLeadOverride.LeadCategoryID);
                $('#ddlprojectname').val(this.InsertLeadOverride.ProjectID);
                //$('#txtsalesarea').val(this.InsertLeadOverride.SalesAreaID);
                //this.SalesArea(this.InsertLeadOverride.SalesAreaID);
                
                debugger;
                this.SearchSalesArea.CountryID = this.InsertLeadOverride.CountryID;
                this.SearchSalesArea.LeadCategoryID = this.InsertLeadOverride.LeadCategoryID;
                this.SearchSalesArea.CategoryID = this.InsertLeadOverride.CategoryID;

                //this.GetSalesArea = this.CheckSalesAreaService.Find(this.SearchSalesArea).then((response => {
                //    this.GetSalesArea = this.CheckSalesAreaService.GetSales(response.data.Result);
                //    debugger;
                   
                //    this.InsertLeadOverride.SalesAreaID = this.GetSalesArea[0].toString();

                //}));
                
                this.LeadSource(this.InsertLeadOverride.ChannelID);
                
                this.LeadSourceChange();
                if (this.InsertLeadOverride.LeadSourceID == "2") {
                    this.InsertLeadOverride.RefUserID = this.InsertLeadOverride.RefUserID;
                    this.InsertLeadOverride.RefUserName = this.InsertLeadOverride.RefUserName;
                    this.SearchUser.RefUserID = this.InsertLeadOverride.RefUserID;
                    this.SearchUser.RefUserName = this.InsertLeadOverride.RefUserName;
                }
                else if (this.InsertLeadOverride.LeadSourceID == "10" || this.InsertLeadOverride.LeadSourceID == "24") {
                    
                    this.InsertLeadOverride.CampaignID = this.InsertLeadOverride.CampaignID;
                }
                //$('#txtChannel').val(this.InsertLeadOverride.ChannelID);
                //this.LeadSource(this.InsertLeadOverride.ChannelID);
                //$('#ddlleadsource').val(this.InsertLeadOverride.LeadSourceID);
                //$('#txtCommnets').val(this.InsertLeadOverride.Comments);
                

            }));
        }

        Reset() {
            this.Edit(this.LeadID);
           
            if (this.LeadID > 0) {
                $("#errorclose").hide();
                $("#close").show();
                this.popupMessage("LeadID ID - " + this.LeadID + " Data Reset Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
            }
            else {
                $("#errorclose").hide();
                $("#close").show();
            }

        }
        Close(): void {

            location.href = "#!/LeadOverride";

        }

       

    }
    class LeadOverrideResubmitComponentController implements ng.IComponentOptions {
        static Name: string = "leadoverrideresubmitcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadOverrideResubmitController;
            this.templateUrl = "/Scripts/App/LeadOverrideResubmit/Template/LeadOverrideResubmit.html";
        }
    }
    app.AddComponent(LeadOverrideResubmitComponentController.Name, new LeadOverrideResubmitComponentController());

}