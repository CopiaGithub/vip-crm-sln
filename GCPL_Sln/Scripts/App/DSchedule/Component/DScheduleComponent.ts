namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadChangeInsert = GCPL.Model.UpdateLeadChangeModel;
    import EditChange = GCPL.Model.EditLeadChangeModel;
    import InsertRegionID = GCPL.Model.InsertRegionModel;
    import Search = GCPL.Model.RegionCheckModel;
    import SalesAreaSearch = GCPL.Model.CheckSalesAreaModel;
    import SalesAreaIdList = GCPL.Model.GetSalesAreaModel;
    import SearchRefUser = GCPL.Model.SearchRefUserModel;
    import LeadItem = GCPL.Model.LeadItemCreateModel;

    interface IDScheduleController {
        InsertLeadChange: LeadChangeInsert;
        Submit(data: any): void;
        Edit(data: any): void;
        LeadOpenReasonDD: Array<Model.ReasonForLeadOpenDDModel>
        LeadStatusOpenDD: Array<Model.LeadStatusForOpenDDModel>
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

        EditLeadChange: Array<Model.EditLeadChangeModel>;
        SalesAreaDropDown: Array<Model.SalesAreaddlModel>
        GetSalesArea: Array<Model.GetSalesAreaModel>;
        Campaigndd: Array<Model.CampaignDetailsModel>
        UserID: GCPL.Model.UserIDModel
        LeadID: any;
        LeadStatusID: GCPL.Model.LeadStatusIDModel
        ProjectNameDD: Array<Model.GetProjectNameDDModel>;
        InsertItem: LeadItem;
    }



    class DScheduleController implements IDScheduleController {
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
        LeadOpenReasonDD = null;
        LeadStatusOpenDD = null;
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
        InsertLeadChange = null;
        EditLeadChange = null;
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
        LeadItemlist = null;
        InsertItem = null;

        private ProjectNameService: Service.IProjectNameService;
        private InsertService: Service.IUpdateLeadChangeService;
        private AddToCartDsService: Service.IAddToCartDsService;
        private ReasonForLeadOpenDDService: Service.IReasonForLeadOpenDDService;
        private LeadStatusForOpenDDService: Service.ILeadStatusForOpenDDService;

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
        private EditService: Service.ILeadChangeEditService;
        private ListItemservice: Service.ILeadItemListService;
        private EditItemService: Service.IEditItemList;

        static $inject = ["LeadChangeEditService", "ReasonForLeadOpenDDService", "LeadStatusForOpenDDService",
                          "SalesOfficeService", "CountryService", "StateddService", "DistrictddService", "RegionddService",
                          "IndustrialSegmentService", "DepartmentService", "DesignationService", "LeadTypeddService",
                          "CategoryddService", "DivisionDDPService", "ProductddService", "ModelDDService",
                          "PurchaseTimelineService", "ChannelDDService", "LeadSourceDetailsService", "LeadCategoryDDService",
            "SalesAreaService", "UpdateLeadChangeService", "CheckRegionService", "CheckSalesAreaDataService", "ProjectNameService",
            "$location", "$cookieStore", "CampaignDetailsService", "UserCodeAutoFillService", "LeadItemListService", "EditItemList", "AddToCartDsService"];

        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_EditService: Service.ILeadChangeEditService, _ReasonForLeadOpenDDService: Service.IReasonForLeadOpenDDService,
                     _LeadStatusForOpenDDService: Service.ILeadStatusForOpenDDService, _SalesOfficeService: Service.ISalesOfficeService,
                     _CountryService: Service.ICountryService, _StateService: Service.IStateddService,
                     _DistrictService: Service.IDistrictddService, _RegionService: Service.IRegionddService,
                     _IndustrialSegmentService: Service.IIndustrialSegmentService,
                     _DepartmentService: Service.IDepartmentService, _DesignationService: Service.IDesignationService,
                     _LeadTypeService: Service.ILeadTypeddService,
                     _CategoryService: Service.ICategoryddService,
                     _DivisionPService: Service.IDivisionDDPService,
                     _ProductService: Service.IProductddService,
                     _ModelService: Service.IModelDDService, _PurchaseTimlineDDService: Service.IPurchaseTimelineService,
                     _ChannelDDService: Service.IChannelDDService, _LeadSourceDDService: Service.ILeadSourceDetailsService,
                     _LeadCategoryService: Service.ILeadCategoryDDService, _SalesAreaService: Service.ISalesAreaService,
                     _InsertService: Service.IUpdateLeadChangeService, _CheckRegionService: Service.ICheckRegionService,
            _CheckSalesAreaService: Service.ICheckSalesAreaDataService, _ProjectNameService: Service.IProjectNameService,private $location: ng.ILocationService,
                     private _cookieStore: any, _CampaignDDService: Service.ICampaignDetailsService,
            _getAutoUser: Service.IUserCodeAutoFillService, _LeadItemListService: Service.ILeadItemListService, _EditItemList: Service.IEditItemList, _AddToCartDsService: Service.IAddToCartDsService) {


            this.InsertService = _InsertService;
            this.ProjectNameService = _ProjectNameService;
            this.InsertLeadChange = new LeadChangeInsert();
            this.ReasonForLeadOpenDDService = _ReasonForLeadOpenDDService;
            this.LeadStatusForOpenDDService = _LeadStatusForOpenDDService;
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
            this.SearchUser = new SearchRefUser();
            this.getAutoUser = _getAutoUser;
            this.ListItemservice = _LeadItemListService;
            this.EditItemService = _EditItemList;
            this.AddToCartDsService = _AddToCartDsService;
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

        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtDeliveryDate")).value = e;
        }

        //Page Load Define Values//
        Init(): void {
            debugger;

            var n = new Date();
            n.setDate(n.getDate() - 7);
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m = months[n.getMonth()];
            var d = n.getDate();
            var y = n.getFullYear();
            (<HTMLInputElement>document.getElementById("txtDeliveryDate")).innerHTML = d + " " + m + " " + y;
            $('#txtDeliveryDate').val(d + " " + m + " " + y);
            (<HTMLInputElement>document.getElementById("txtDeliveryDate")).value;
            $("#txtDeliveryDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectFromDate
            });


            let that = this;

            $('#Campaignfield').hide();
            $('#UserNamefield').hide();
            $("#errorclose").hide();
            $("#close").hide();


            this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.Find().then((response => {
                this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.GetReason(response.data.Result);

            }));



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
            this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((response => {
                this.ProjectNameDD = this.ProjectNameService.GetProjectNameDD(response.data.Result);
            }));
            //var LeadStatus = this.InsertLeadChange.LeadStatusID;
            this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.Find(this.LeadID).then((response => {
                this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);
                //this.InsertLeadChange.LeadStatusID = LeadStatus
            }));

            if (this.LeadID != undefined || this.LeadID != null || this.LeadID != "") {
                this.Edit(this.LeadID);

                this.FillGridItems();
            }
            //else {

            //    this.Edit(this.LeadID);

            //}

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
                    that.InsertLeadChange.RefUserID = ui.item.id;
                    that.InsertLeadChange.RefUserName = ui.item.value;
                },
                change: function () {

                }
            });


        }

        FillGridItems(): void {

            this.LeadItemlist = this.ListItemservice.Find(this.LeadID).then((response => {
                this.LeadItemlist = this.ListItemservice.GetLeadItemList(response.data.Result);

            }));
        }

        State(data: any): void {

            this.StateDropDown = this.StateService.Find(this.InsertLeadChange.CountryID).then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        District(data: any): void {

            this.DistrictDropDown = this.DistrictService.Find(this.InsertLeadChange.StateID).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        AddConState(data: any): void {

            this.AddConStateDropDown = this.StateService.Find(this.InsertLeadChange.ContactCountryID).then((response => {
                this.AddConStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        AddConDistrict(data: any): void {

            this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertLeadChange.ContactStateID).then((response => {
                this.AddConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        Division(data: any): void {

            this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLeadChange.CategoryID).then((response => {
                this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);

            }));


        }

        Product(data: any): void {

            this.ProductDropDown = this.ProductService.Find(this.InsertLeadChange.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));
        }

        Model(data: any): void {

            this.ModelDropDown = this.ModelService.Find(this.InsertLeadChange.ProductID).then((response => {
                this.ModelDropDown = this.ModelService.GetModelDD(response.data.Result);
            }));
        }
        LeadSource(data: any): void {

            this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLeadChange.ChannelID).then((response => {
                this.LeadSourcedd = this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
            }));
        }
        LeadStatusopen(data: any): void {

            this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.Find(this.LeadID).then((response => {
                this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);

            }));
        }

        Campaign(): void {
            this.Campaigndd = this.CampaignDDService.Find(this.InsertLeadChange.LeadSourceID).then((response => {
                this.Campaigndd = this.CampaignDDService.GetCampaignDetails(response.data.Result);
            }));
        }
        LeadSourceChange() {
            $("#Campaignfield").hide();
            $("#UserNamefield").hide();
            if (this.InsertLeadChange.LeadSourceID == "10" || this.InsertLeadChange.LeadSourceID == "24") {
                this.Campaign();
                $("#Campaignfield").show();
                $("#UserNamefield").hide();
            }
            else if (this.InsertLeadChange.LeadSourceID == "2") {
                $("#Campaignfield").hide();
                $("#UserNamefield").show();
            }
        }

        LeadOpenReason() {

            $("#txtreason").prop('disabled', true);
            if (this.InsertLeadChange.LeadStatusID == "1") {

                $("#txtreason").prop('disabled', false);
                this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.Find().then((response => {
                    this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.GetReason(response.data.Result);
                    this.InsertLeadChange.LeadOpenReason = this.LeadOpenReasonDD[0].ID.toString();
                }));
            }
            else {
                $("#txtreason").prop('disabled', true);
                this.InsertLeadChange.LeadOpenReason = "";
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

        AddDsToCart(data: any) {

            this.InsertItem.UserID = this.UserID;
            this.InsertItem.LeadID = this.LeadID;

            //if (this.InsertItem.DeliveryDate == undefined || this.InsertItem.DeliveryDate == null || this.InsertItem.DeliveryDate == "") {
            //    this.HideShow();
            //    this.popupMessage("Please Select Delivery Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}
            //else
            if (this.InsertItem.DeliveryQty == undefined || this.InsertItem.DeliveryQty == null || this.InsertItem.DeliveryQty == "") {
                this.HideShow();
                this.popupMessage("Please Enter Delivery Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertItem.ItemID == undefined || this.InsertItem.ItemID == null || this.InsertItem.ItemID == "") {
                this.HideShow();
                this.popupMessage("Please Select Item to Create Delivery Schedule", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {


                if (this.UserID != null || this.UserID != "") {
                    this.InsertItem.UserID = this.UserID;
                }

                this.AddToCartDsService.PostDeliveryScheduleToCart(this.InsertItem).then((response => {

                    console.log(this.InsertItem);

                    //if (response.data.Result != null) {
                    if (response.data.Result > 0) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Delivery Schedule Successfully Added to Cart.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        this.InsertLeadChange = null;
                    }
                    else {

                        this.HideShow();
                        this.popupMessage("Couldn't Add Delivery Schedule.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));

            }
        }

        Submit(data: any): void {

            this.InsertLeadChange.UserID = this.UserID;
            //this.InsertLeadChange.LeadStatusID = this.LeadStatusID;

            if (this.InsertLeadChange.LeadStatusID == undefined || this.InsertLeadChange.LeadStatusID == null || this.InsertLeadChange.LeadStatusID == "") {
                this.HideShow();
                this.popupMessage("Please Enter LeadStatus", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            //else if (this.InsertLeadChange.LeadOpenReason == undefined || this.InsertLeadChange.LeadOpenReason == null || this.InsertLeadChange.LeadOpenReason == "") {
            //    $("#errorclose").show();
            //    $("#close").hide();
            //    this.alert = "Please Enter Lead Reason";

            //}
            else if (this.InsertLeadChange.Comments == undefined || this.InsertLeadChange.Comments == null || this.InsertLeadChange.Comments == "") {
                this.HideShow();
                this.popupMessage("Please Enter Comments", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.LeadType == undefined || this.InsertLeadChange.LeadType == null || this.InsertLeadChange.LeadType == "") {
                this.HideShow();
                this.popupMessage("Please Enter Lead Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.DivisionID == undefined || this.InsertLeadChange.DivisionID == null || this.InsertLeadChange.DivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.ProductID == undefined || this.InsertLeadChange.ProductID == null || this.InsertLeadChange.ProductID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.ModelID == undefined || this.InsertLeadChange.ModelID == null || this.InsertLeadChange.ModelID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.Quantity == undefined || this.InsertLeadChange.Quantity == null || this.InsertLeadChange.Quantity == "") {
                this.HideShow();
                this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.PurchaseTimelineID == undefined || this.InsertLeadChange.PurchaseTimelineID == null || this.InsertLeadChange.PurchaseTimelineID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Plan to Purchase ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.LeadCategoryID == undefined || this.InsertLeadChange.LeadCategoryID == null || this.InsertLeadChange.LeadCategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Lead Category ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.SalesAreaID == undefined || this.InsertLeadChange.SalesAreaID == null || this.InsertLeadChange.SalesAreaID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Sales Area ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.ChannelID == undefined || this.InsertLeadChange.ChannelID == null || this.InsertLeadChange.ChannelID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadChange.LeadSourceID == undefined || this.InsertLeadChange.LeadSourceID == null || this.InsertLeadChange.LeadSourceID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Lead Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertLeadChange.LeadSourceID == "2" && (this.InsertLeadChange.RefUserID == undefined || this.InsertLeadChange.RefUserID == null || this.InsertLeadChange.RefUserID == "")) {
                this.HideShow();
                this.popupMessage("Please Enter Ref User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertLeadChange.LeadSourceID == "10" || this.InsertLeadChange.LeadSourceID == "24") && (this.InsertLeadChange.CampaignID == undefined || this.InsertLeadChange.CampaignID == null || this.InsertLeadChange.CampaignID == "")) {
                this.HideShow();
                this.popupMessage("Please Select  Campaign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {


                if (this.UserID != null || this.UserID != "") {
                    this.InsertLeadChange.UserID = this.UserID;
                }
                if (this.InsertLeadChange.LeadSourceID == "2") {

                    this.InsertLeadChange.CampaignID = "";

                }
                else if (this.InsertLeadChange.LeadSourceID == "10" || this.InsertLeadChange.LeadSourceID == "24") {

                    this.InsertLeadChange.RefUserID = "";
                    this.InsertLeadChange.RefUserName = "";
                }
                this.InsertService.PostLeadChange(this.InsertLeadChange).then((response => {

                    console.log(this.InsertLeadChange);

                    //if (response.data.Result != null) {
                    if (response.data.Result > 0) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("LeadID ID - " + this.LeadID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        this.InsertLeadChange = null;
                    }
                    else {

                        this.HideShow();
                        this.popupMessage("LeadID ID - " + this.LeadID + " is unable to Change.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));

            }


        }

        FetchItemData(data: any): void {
                console.log(data,"data11111");
                this.EditItemService.Find(data).then((response => {
                    
                    this.InsertItem = this.EditItemService.GetItemEdit(response.data.Result);
                    console.log("this.InsertItem11111", this.InsertItem);

                    $("myModalAdd").show();

                }));


        }

        Edit(data: any): void {
            debugger;
            this.EditService.Find(data).then((response => {
                this.InsertLeadChange = this.EditService.GetEdit(response.data.Result);
              
                // this.LeadStatusID = this.InsertLeadChange.LeadStatusID;
                var status = this.InsertLeadChange.LeadStatusID;
                this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.Find(this.LeadID).then((response => {
                    this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);

                    this.InsertLeadChange.LeadStatusID = status; //this.LeadStatusOpenDD[0].LeadStatusID.toString();
                }));
                var reason = this.InsertLeadChange.LeadOpenReason
                this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.Find().then((response => {
                    this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.GetReason(response.data.Result);
                    this.InsertLeadChange.LeadOpenReason = reason;
                }));
                debugger;
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
                this.State(this.InsertLeadChange.CountryID);
                $('#txtstate').val(this.InsertLeadChange.StateID);
                this.District(this.InsertLeadChange.StateID);
                $('#txtdistrict').val(this.InsertLeadChange.DistrictID);
                this.SearchRegion.StateID = this.InsertLeadChange.StateID;
                this.SearchRegion.DistrictID = this.InsertLeadChange.DistrictID;
                this.InsertLeadChange.RegionID = "";

                if (this.SearchRegion.StateID != undefined || this.SearchRegion.StateID != null || this.SearchRegion.StateID != "") {
                    this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((response => {
                        this.CheckRegion = this.CheckRegionService.GetRegion(response.data.Result);
                        this.RegionDropDown[0].RegionID = this.CheckRegion[0].RegionID;

                    }));
                }
                else {

                }

                $('#txtcity').val(this.InsertLeadChange.City);
                $('#txtPincode').val(this.InsertLeadChange.PinCode);
                $('#txtindustrysegment').val(this.InsertLeadChange.IndustrialSegmentID);

                $('#txtContactName').val(this.InsertLeadChange.ContactName);
                $('#txtcontactemail').val(this.InsertLeadChange.ContactEmail);
                $('#txtContactMobNo').val(this.InsertLeadChange.ContactMobileNo);
                $('#txtContactPhno').val(this.InsertLeadChange.ContactPhoneNo);
                $('#txtdesignation').val(this.InsertLeadChange.Designation);
                $('#txtdept').val(this.InsertLeadChange.DepartmentID);
                $('#txtFop').val(this.InsertLeadChange.FOPID);
                $('#txtaddress').val(this.InsertLeadChange.Address);
                $('#txtconcountry').val(this.InsertLeadChange.ContactCountryID);
                this.AddConState(this.InsertLeadChange.ContactCountryID);
                $('#txtconstate').val(this.InsertLeadChange.ContactStateID);
                this.AddConDistrict(this.InsertLeadChange.ContactCountryID);
                $('#txtcondistrict').val(this.InsertLeadChange.ContactDistrictID);
                $('#txtconcity').val(this.InsertLeadChange.ContactCity);
                $('#txtconpincode').val(this.InsertLeadChange.PostalCode);

                $('#txtleadtype').val(this.InsertLeadChange.LeadType);
                $('#txtcategory').val(this.InsertLeadChange.CategoryID);
                this.Division(this.InsertLeadChange.CategoryID);
                $('#txtdivision').val(this.InsertLeadChange.DivisionID);
                this.Product(this.InsertLeadChange.DivisionID);
                $('#txtproduct').val(this.InsertLeadChange.ProductID);
                this.Model(this.InsertLeadChange.ProductID);
                $('#txtmodelno').val(this.InsertLeadChange.ModelID);
                $('#txtqty').val(this.InsertLeadChange.Quantity);
                $('#txttitle').val(this.InsertLeadChange.PurchaseTimelineID);
                $('#txtleadcategory').val(this.InsertLeadChange.LeadCategoryID);
                $('#ddlprojectname').val(this.InsertLeadChange.ProjectID);
                //$('#txtsalesarea').val(this.InsertLeadChange.SalesAreaID);
                //this.SalesArea(this.InsertLeadChange.SalesAreaID);


                this.SearchSalesArea.CountryID = this.InsertLeadChange.CountryID;
                this.SearchSalesArea.LeadCategoryID = this.InsertLeadChange.LeadCategoryID;
                this.SearchSalesArea.CategoryID = this.InsertLeadChange.CategoryID;

                //this.GetSalesArea = this.CheckSalesAreaService.Find(this.SearchSalesArea).then((response => {
                //    this.GetSalesArea = this.CheckSalesAreaService.GetSales(response.data.Result);
                //    

                //    this.InsertLeadChange.SalesAreaID = this.GetSalesArea[0].toString();

                //}));

                this.LeadSource(this.InsertLeadChange.ChannelID);

                this.LeadSourceChange();
                if (this.InsertLeadChange.LeadSourceID == "2") {
                    this.InsertLeadChange.RefUserID = this.InsertLeadChange.RefUserID;
                    this.InsertLeadChange.RefUserName = this.InsertLeadChange.RefUserName;
                    this.SearchUser.RefUserID = this.InsertLeadChange.RefUserID;
                    this.SearchUser.RefUserName = this.InsertLeadChange.RefUserName;
                }
                else if (this.InsertLeadChange.LeadSourceID == "10" || this.InsertLeadChange.LeadSourceID == "24") {

                    this.InsertLeadChange.CampaignID = this.InsertLeadChange.CampaignID;
                }
                //$('#txtChannel').val(this.InsertLeadChange.ChannelID);
                //this.LeadSource(this.InsertLeadChange.ChannelID);
                //$('#ddlleadsource').val(this.InsertLeadChange.LeadSourceID);
                //$('#txtCommnets').val(this.InsertLeadChange.Comments);


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

            location.href = "#!/LeadChangeList";

        }



    }
    class DScheduleComponentController implements ng.IComponentOptions {
        static Name: string = "dschedule"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = DScheduleController;
            this.templateUrl = "/Scripts/App/DSchedule/Template/DSchedule.html";
        }
    }
    app.AddComponent(DScheduleComponentController.Name, new DScheduleComponentController());

}