namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadAssess = GCPL.Model.LeadAssessmentModel;
    import ValidRefrredEmployee = GCPL.Model.ReferredEmpModel;
    import ViewAssessment = GCPL.Model.LeadAssessmentInfoModel;
    import CrtAssessmt1 = GCPL.Model.CrtAssessmtModel;
    import UpdateLeadDataM = GCPL.Model.UpdateLeadDataModel;
    import ReturnModel1 = GCPL.Model.ReturnModel;
    import InsertLeadActivity1 = GCPL.Model.InsertLeadActivity;
    import EditActivity = GCPL.Model.EditActivityModel;
    import LeadActivitylist = GCPL.Model.LeadActivityModel;
    import LeadQueAnsDetails = GCPL.Model.LeadQueAnsModel;
    import LeadOpp = GCPL.Model.LeadOpportunityModel;
    import Activity = GCPL.Model.Activity;
    import LeadItem = GCPL.Model.LeadItemCreateModel;
    import SearchRefUser = GCPL.Model.SearchRefUserModel;
    import LeadToOpp = GCPL.Model.InsertSubmitModel;
    import ContactMaster = GCPL.Model.InsertContactMaster;
    interface ILeadAssessmentController {
        Edit(data: any): void;
        EditItem(data: any): void;
        EditTarget: Array<Model.EditActivityModel>;
        LeadAssessment: LeadAssess;
        AssessmentInfo: ViewAssessment;
        UserID: GCPL.Model.UserIDModel
        SalesAreaDropDown: Array<Model.SalesAreaddlModel>
        LeadActivitylist: Array<Model.LeadActivityModel>;
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        IndustryDivisionDropDown: Array<Model.IndustryDivisionddlModel>
        IndustrialSegmentDropDown: Array<Model.IndustrialSegmentddlModel>
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        LeadCategoryDropDown: Array<Model.LeadCategoryddlModel>
        PurchaseTimlinedd: Array<Model.PurchaseTimelineModel>
        CategoryDropDown: Array<Model.CategoryddlModel>
        DivisionDropDownP: Array<Model.DivisionDDPModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        ChannelDD: Array<Model.ChannelDDModel>
        ModeActivityDropDown: Array<Model.ModeActivityModel>
        LeadActivityStatusDD: Array<Model.LeadActivityStatusModel>
        LeadActivityPurposeDD: Array<Model.LeadActivityPurposeModel>
        LeadActivityLocationDD: Array<Model.LeadActivityLocationModel>
        LeadSalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        Ans1DD: Array<Model.Ans1DDLModel>
        Ans2DD: Array<Model.Ans2DDLModel>
        Ans3DD: Array<Model.Ans3DDLModel>
        LeadSourcedd: Array<Model.LeadSourceDetailsModel>
        Campaigndd: Array<Model.CampaignDetailsModel>
        ContactInfo: GCPL.Model.ContactDetailsListModel;
        LeadActivitySearch: GCPL.Model.LeadActivitySearchModel;
        CrtAssessmt: CrtAssessmt1;
        ReturnModel: ReturnModel1;
        LeadOpp: LeadOpp;
        InsertLeadActivity: InsertLeadActivity1;
        InsertAct: Activity;
        InsertItem: LeadItem;
        LeadID: any;
        ModelID: any;
        ProductID: any;
        SubmitData: LeadToOpp;
        ProjectNameDD: Array<Model.GetProjectNameDDModel>;
        DisqualificationReasonDD: Array<Model.GetDisqualificationReasonDDModel>;
        StageDD: Array<Model.SalesStageDDModel>;
        LeadStatusDD: Array<Model.LeadStatusDDModel>;
        UpdateLeadData: UpdateLeadDataM;
    }

    class LeadAssessmentController implements ILeadAssessmentController {

        LeadActivitylist = null;
        LeadItemlist = null;
        LeadItem = null;
        LeadQueAnsDetails = null;
        LeadAssessment = null;
        toggleStatus = null;
        UserID = null;
        Ans1DD = null;
        Ans2DD = null;
        Ans3DD = null;
        LeadOpp = null;
        EditTarget = null;
        LeadStatusDropDown = null;
        LeadSalesOfficeDropDown = null;
        IndustryDivisionDropDown = null;
        IndustrialSegmentDropDown = null;
        LeadTypeDropDown = null;
        LeadCategoryDropDown = null;
        PurchaseTimlinedd = null;
        CategoryDropDown = null;
        DivisionDropDownP = null;
        ProductDropDown = null;
        ModelDropDown = null;
        ChannelDD = null;
        ModeActivityDropDown = null;
        LeadActivityStatusDD = null;
        LeadActivityPurposeDD = null;
        LeadActivityLocationDD = null;
        LeadSourcedd = null;
        Campaigndd = null;
        ValidReferred = null;
        AssessmentInfo = null;
        InsertContact = null;
        EMAIL_REGEXP = null;
        ContactInfo = null;
        LeadID = null;
        ModelID = null;
        ProductID = null;
        ModelNo = null;
        ProductD = null;
        InsertAssessment = null;
        ConCountryDropDown = null;
        ConStateDropDown = null;
        ConDistrictDropDown = null;
        DepartmentDropDown = null;
        DesignationDropDown = null;
        CrtAssessmt = null;
        ReturnModel = null;
        InsertLeadActivity = null;
        SalesAreaDropDown = null;
        LeadActivitySearch = null;
        SearchUser: GCPL.Model.SearchRefUserModel = null;
        alert = null;
        InsertAct = null;
        InsertItem = null;
        RemarksHistory = null;
        SubmitData = null;
        private Cookie: any = null;
        ProjectNameDD = null;
        DisqualificationReasonDD = null;
        StageDD = null;
        LeadStatusDD = null;
        lat = null;
        lng = null;
        UpdateLeadData = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;

        private ProjectNameService: Service.IProjectNameService;
        private SubmitService: Service.IInsertLeadToOppSAPService;
        private LeadStatusService: Service.ILeadStatusddService;
        private IndustryDivisionService: Service.IIndustryDivisionService;
        private IndustrialSegmentService: Service.IIndustrialSegmentService;
        private LeadTypeService: Service.ILeadTypeddService;
        private LeadCategoryService: Service.ILeadCategoryDDService;
        private PurchaseTimlineDDService: Service.IPurchaseTimelineService;
        private CategoryService: Service.ICategoryddService;
        private DivisionPService: Service.IDivisionDDPService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.IModelDDService;
        private ChannelDDService: Service.IChannelDDService;
        private LeadSourceDDService: Service.ILeadSourceDetailsService;
        private CampaignDDService: Service.ICampaignDetailsService;
        private ValidReferredEmpService: Service.IValidateReferredEmployeeService;
        private LeadAssessmentService: Service.ILeadAssessmentService;
        private ContactInfoService: Service.ILeadContactDetailsService;
        private CrtAssessmtService: Service.ICrtAssessmtServiceService;
        private Listservice: Service.ILeadActivityListService;
        private ListItemservice: Service.ILeadItemListService;
        private QueAnsservice: Service.ILeadQueAnsService;
        private ModeActivityService: Service.IModeActivityService;
        private LeadActivityStatusDDservice: Service.ILeadActivityStatusDDservice;
        private LeadActivityPurposeDDservice: Service.ILeadActivityPurposeDDservice;
        private LeadActivityLocationDDservice: Service.ILeadActivityLocationDDservice;
        private InsertLeadAssessment: Service.IInsertLeadActivityService;
        private InsertItemAssessment: Service.IInsertItemDetailsService;
        private InsertLeadQuestions: Service.IInsertLeadQuestionsService;
        private Ans1Service: Service.IQAns1Service;
        private Ans2Service: Service.IQAns2Service;
        private Ans3Service: Service.IQAns3Service;
        private LeadOpportunity: Service.ILeadOpportunity;
        private SalesAreaService: Service.ISalesAreaService;
        private SalesOfficeService: Service.ISalesOfficeService;
        private EditService: Service.IEditActivityList;
        private EditContactService: Service.IContactEditService;
        private EditItemService: Service.IEditItemList;
        private LeadReturnService: Service.ILeadReturnService;
        private CreateInSAPLeadActivityService: Service.ICreateInSAPLeadActivityService;
        private DisqualificationReasonDDService: Service.IDisqualificationReasonDDService;
        private LeadStageDDService: Service.ILeadStageDDService;
        private LeadStatusDDService: Service.ILeadStatusDDService;
        private UpdateLeadDataService: Service.IUpdateLeadDataService;
        private ProductDescAutofill: Service.IProductDescAutoFillService;
        private ProductCodeAutofill: Service.IProductCodeAutoFillService;
        private DeleteService: Service.IDeleteItemService;
        private DeleteActService: Service.IDeleteActivityService;
        private CountryService: Service.ICountryService;
        private StateService: Service.IStateddService;
        private DistrictService: Service.IDistrictddService;
        private DepartmentService: Service.IDepartmentService;
        private DesignationService: Service.IDesignationService;
        private InsertContactService: Service.IInsertContactService;

        static $inject = ["LeadStatusddService", "IndustryDivisionService", "IndustrialSegmentService", "LeadTypeddService", "LeadCategoryDDService", "PurchaseTimelineService", "CategoryddService", "DivisionDDPService", "ProductddService",
            "ModelDDService", "ChannelDDService", "LeadSourceDetailsService", "CampaignDetailsService", "ValidateReferredEmployeeService", "LeadAssessmentService", "LeadContactDetailsService", "CrtAssessmtServiceService",
            "LeadActivityListService", "LeadItemListService", "LeadQueAnsService", "ModeActivityService", "LeadActivityStatusDDservice", "LeadActivityPurposeDDservice", "LeadActivityLocationDDservice", "InsertLeadActivityService", "InsertItemDetailsService", "InsertLeadQuestionsService", "QAns1Service", "QAns2Service", "QAns3Service", "LeadOpportunity",
            "SalesAreaService", "SalesOfficeService", "EditActivityList", "ContactEditService", "EditItemList", "LeadReturnService", "CreateInSAPLeadActivityService", "InsertLeadToOppSAPService", "ProjectNameService", "DisqualificationReasonDDService", "LeadStageDDService", "LeadStatusDDService", "UpdateLeadDataService", "ProductDescAutoFillService", "ProductCodeAutoFillService",
            "DeleteItemService", "DeleteActivityService", "CountryService", "StateddService", "DistrictddService", "DepartmentService", "DesignationService", "InsertContactService", "$location", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_LeadStatusService: Service.ILeadStatusddService, _IndustryDivisionService: Service.IIndustryDivisionService, _IndustrialSegmentService: Service.IIndustrialSegmentService, _LeadTypeService: Service.ILeadTypeddService, _LeadCategoryService: Service.ILeadCategoryDDService,
            _PurchaseTimlineDDService: Service.IPurchaseTimelineService, _CategoryService: Service.ICategoryddService, _DivisionPService: Service.IDivisionDDPService, _ProductService: Service.IProductddService, _ModelService: Service.IModelDDService, _ChannelDDService: Service.IChannelDDService,
            _LeadSourceDDService: Service.ILeadSourceDetailsService, _CampaignDDService: Service.ICampaignDetailsService, _ValidReferredEmpService: Service.IValidateReferredEmployeeService, _leadassessmentService: Service.ILeadAssessmentService, _ContactInfoService: Service.ILeadContactDetailsService,
            _CrtAssessmtService: Service.ICrtAssessmtServiceService, _LeadActivityListService: Service.ILeadActivityListService, _LeadItemListService: Service.ILeadItemListService, _LeadQueAnsService: Service.ILeadQueAnsService, _ModeActivityService: Service.IModeActivityService, _LeadActivityStatusDDservice: Service.ILeadActivityStatusDDservice,
            _LeadActivityPurposeDDservice: Service.ILeadActivityPurposeDDservice, _LeadActivityLocationDDservice: Service.ILeadActivityLocationDDservice, _InsertLeadAssessment: Service.IInsertLeadActivityService, _InsertItemAssessment: Service.IInsertItemDetailsService,
            _InsertLeadQuestions: Service.IInsertLeadQuestionsService, _Ans1Service: Service.IQAns1Service, _Ans2Service: Service.IQAns2Service, _Ans3Service: Service.IQAns3Service, _LeadOpportunity: Service.ILeadOpportunity, _SalesAreaService: Service.ISalesAreaService, _SalesOfficeService: Service.ISalesOfficeService, _EditActivityList: Service.IEditActivityList, _EditContactService: Service.IContactEditService, _EditItemList: Service.IEditItemList, _LeadReturnService: Service.ILeadReturnService, _CreateInSAPLeadActivityService: Service.ICreateInSAPLeadActivityService,
            _SubmitService: Service.IInsertLeadToOppSAPService, _ProjectNameService: Service.IProjectNameService, _DisqualificationReasonDDService: Service.IDisqualificationReasonDDService, _LeadStageDDService: Service.ILeadStageDDService, _LeadStatusDDService: Service.ILeadStatusDDService, _UpdateLeadDataService: Service.IUpdateLeadDataService, _ProductDescAutofill: Service.IProductDescAutoFillService, _ProductCodeAutofill: Service.IProductCodeAutoFillService, _deleteItem: Service.IDeleteItemService, _DeleteActService: Service.IDeleteActivityService, _CountryService: Service.ICountryService,
            _StateService: Service.IStateddService, _DistrictService: Service.IDistrictddService, _DepartmentService: Service.IDepartmentService, _DesignationService: Service.IDesignationService, _InsertContactService: Service.IInsertContactService, private $location: ng.ILocationService, private _cookieStore: any) {

            this.LeadStatusService = _LeadStatusService;
            this.LeadStatusService = _LeadStatusService;
            this.ProjectNameService = _ProjectNameService;
            this.CreateInSAPLeadActivityService = _CreateInSAPLeadActivityService;
            this.IndustryDivisionService = _IndustryDivisionService;
            this.IndustrialSegmentService = _IndustrialSegmentService;
            this.SalesOfficeService = _SalesOfficeService;
            this.LeadTypeService = _LeadTypeService;
            this.LeadCategoryService = _LeadCategoryService;
            this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
            this.ProductDescAutofill = _ProductDescAutofill;
            this.DeleteService = _deleteItem;
            this.DeleteActService = _DeleteActService;
            this.CountryService = _CountryService;
            this.StateService = _StateService;
            this.DistrictService = _DistrictService;
            this.DepartmentService = _DepartmentService;
            this.DesignationService = _DesignationService;
            this.InsertContactService = _InsertContactService;
            this.InsertContact = new ContactMaster();
            this.CategoryService = _CategoryService;
            this.DivisionPService = _DivisionPService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.ChannelDDService = _ChannelDDService;
            this.LeadSourceDDService = _LeadSourceDDService;
            this.CampaignDDService = _CampaignDDService;
            this.ValidReferredEmpService = _ValidReferredEmpService;
            this.LeadAssessmentService = _leadassessmentService;
            this.ContactInfoService = _ContactInfoService;
            this.LeadID = $location.search().LeadID;
            this.ModelID = $location.search().Model;
            this.ProductID = $location.search().Product;
            this.CrtAssessmtService = _CrtAssessmtService;
            this.Listservice = _LeadActivityListService;
            this.ListItemservice = _LeadItemListService;
            this.QueAnsservice = _LeadQueAnsService;
            this.LeadOpportunity = _LeadOpportunity;
            this.SalesAreaService = _SalesAreaService;
            this.ModeActivityService = _ModeActivityService;
            this.LeadActivityStatusDDservice = _LeadActivityStatusDDservice;
            this.LeadActivityPurposeDDservice = _LeadActivityPurposeDDservice;
            this.LeadActivityLocationDDservice = _LeadActivityLocationDDservice;
            this.InsertLeadAssessment = _InsertLeadAssessment;
            this.InsertItemAssessment = _InsertItemAssessment;
            this.InsertLeadQuestions = _InsertLeadQuestions;
            this.Ans1Service = _Ans1Service;
            this.Ans2Service = _Ans2Service;
            this.Ans3Service = _Ans3Service;
            this.ProductCodeAutofill = _ProductCodeAutofill;
            this.LeadReturnService = _LeadReturnService;
            this.SubmitService = _SubmitService;
            this.DisqualificationReasonDDService = _DisqualificationReasonDDService;
            this.LeadStageDDService = _LeadStageDDService;
            this.LeadStatusDDService = _LeadStatusDDService;
            this.UpdateLeadDataService = _UpdateLeadDataService;
            this.LeadOpp = new LeadOpp();
            this.CrtAssessmt = new CrtAssessmt1();
            this.ReturnModel = new ReturnModel1();
            this.InsertLeadActivity = new InsertLeadActivity1();
            this.InsertAct = new Activity();
            this.InsertItem = new LeadItem();
            this.EditService = _EditActivityList;
            this.EditContactService = _EditContactService;
            this.EditItemService = _EditItemList;
            this.AssessmentInfo = new ViewAssessment();
            this.ValidReferred = new ValidRefrredEmployee();
            this.ValidReferred = new Array<GCPL.Model.ReferredEmpModel>();
            this.LeadAssessment = new LeadAssess();
            this.ContactInfo = new Array<GCPL.Model.ValidateContactListModel>();
            this.SearchUser = new SearchRefUser();
            this.SubmitData = new LeadToOpp();
            this.UpdateLeadData = new UpdateLeadDataM();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
        }

        $onInit() {
            var date = new Date();
            var currentMonth = date.getMonth();
            var currentDate = date.getDate();
            var currentYear = date.getFullYear();
            var d = new Date();
            d.setDate(d.getDate() - 2);

            $("#date").datepicker({
                dateFormat: 'yy-mm-dd', changeMonth: true,
                changeYear: true,
                onSelect: this.OppActDate,
                minDate: d

            });

            this.Init();

        }

        debugger;
        popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
            $("#message-text").html(Message);
            $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
            $(ShowImg).show();
            $(HideImg).hide();
            $("#succeess-message-box").modal("show");
        }
        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }

        //Page Load Define Values//
        Init(): void {

            console.log("Init_Anuja");
            //this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

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


            var n1 = new Date();
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();
            //(<HTMLInputElement>document.getElementById("ExpDate")).innerHTML = d1 + " " + m1 + " " + y1;
            //$('#ExpDate').val(d1 + " " + m1 + " " + y1);

            //(<HTMLInputElement>document.getElementById("ExpDate")).value;
            //$("#ExpDate").datepicker({
            //    dateFormat: 'yy-mm-dd',
            //    changeMonth: true,
            //    changeYear: true,
            //    minDate: 0,

            //    onSelect: this.selectExpectedDate

            //});
            if (this.LeadID != null || this.LeadID != "" || this.LeadID != undefined) {

                this.Assessment(this.LeadID);
            }
            this.LeadStatusDropDown = this.LeadStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadStatusService.GetLeadStatusName(response.data.Result);

            }));

            this.ConCountryDropDown = this.CountryService.Find().then((response => {
                this.ConCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.ConStateDropDown = this.StateService.Find(this.InsertContact.CountryID = '95').then((response => {
                this.ConStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));

            this.DepartmentDropDown = this.DepartmentService.Find().then((response => {
                this.DepartmentDropDown = this.DepartmentService.GetDepartmentName(response.data.Result);
            }));

            this.DesignationDropDown = this.DesignationService.Find().then((response => {
                this.DesignationDropDown = this.DesignationService.GetDesignationName(response.data.Result);
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

            this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
                this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);
            }));

            this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((response => {
                this.PurchaseTimlinedd = this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
            }));

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);
            }));

            this.ChannelDD = this.ChannelDDService.Find().then((response => {
                this.ChannelDD = this.ChannelDDService.GetChannelDDnew(response.data.Result);
            }));

            this.ModeActivityDropDown = this.ModeActivityService.Find().then((response => {
                this.ModeActivityDropDown = this.ModeActivityService.GetModeActivity(response.data.Result);
            }));

            this.LeadActivityStatusDD = this.LeadActivityStatusDDservice.Find().then((response => {
                this.LeadActivityStatusDD = this.LeadActivityStatusDDservice.LeadActivityStatus(response.data.Result);
            }));

            this.LeadActivityPurposeDD = this.LeadActivityPurposeDDservice.Find().then((response => {
                this.LeadActivityPurposeDD = this.LeadActivityPurposeDDservice.GetLeadActivityPurpose(response.data.Result);
            }));

            this.LeadActivityLocationDD = this.LeadActivityLocationDDservice.Find().then((response => {
                this.LeadActivityLocationDD = this.LeadActivityLocationDDservice.GetLeadActivityLocation(response.data.Result);
            }));

            this.Ans1DD = this.Ans1Service.Find().then((response => {
                this.Ans1DD = this.Ans1Service.GetAns1(response.data.Result);
            }));

            this.Ans2DD = this.Ans2Service.Find().then((response => {
                this.Ans2DD = this.Ans2Service.GetAns2(response.data.Result);
            }));

            this.Ans3DD = this.Ans3Service.Find().then((response => {
                this.Ans3DD = this.Ans3Service.GetAns3(response.data.Result);
            }));
            this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((response => {
                this.ProjectNameDD = this.ProjectNameService.GetProjectNameDD(response.data.Result);
            }));
            this.DisqualificationReasonDD = this.DisqualificationReasonDDService.Find().then((response => {
                this.DisqualificationReasonDD = this.DisqualificationReasonDDService.GetDisqualifiedName(response.data.Result);
            }));

            this.StageDD = this.LeadStageDDService.Find().then((response => {
                this.StageDD = this.LeadStageDDService.GetStage(response.data.Result);
                // this.UpdateLeadData.SalesStage = this.StageDD[0].ID.toString();
            }));

            this.LeadStatusDD = this.LeadStatusDDService.Find().then((response => {
                this.LeadStatusDD = this.LeadStatusDDService.GetStage(response.data.Result);
                // this.UpdateLeadData.SalesStage = this.StageDD[0].ID.toString();
            }));

            this.ProductDropDown = this.ProductService.Find(0).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));

            this.FillGrid();
            this.FillGridItems();
            this.FillGrid1();
            //this.getLocation();

            let that = this;

            $("#txtProductCode").autocomplete({
                //  source:['1a0','anjali','archana'],
                source: function (request, res) {
                    that.ProductCodeAutofill.FilterAutoComplete(request).then((response => {

                        let data = that.ProductCodeAutofill.GetAutoProductCode(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.Product,
                                value: item.Product,
                                id: item.ProductDesc,
                                productid: item.ProductID
                            }
                        }));
                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.InsertItem.ProductDesc = ui.item.id;
                    that.InsertItem.ProductID = ui.item.productid;
                    that.Product();
                    /*that.Search(ui.item.id);*/
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
                                id: item.Product,
                                productid: item.ProductID

                            }
                        }));
                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {

                    that.InsertItem.Product = ui.item.id;
                    that.InsertItem.ProductID = ui.item.productid;
                    that.Product();

                },
                change: function () {

                }
            });

            //$("#txtProductCode").autocomplete({
            //    //  source:['1a0','anjali','archana'],
            //    source: function (request, res) {
            //        that.ProductCodeAutofill.FilterAutoComplete(request).then((response => {

            //            let data = that.ProductCodeAutofill.GetAutoProductCode(response.data.Result);
            //            res($.map(data, function (item, index) {
            //                return {
            //                    label: item.ProductCode,
            //                    value: item.ProductCode,
            //                    id: item.ProductID

            //                }
            //            }));
            //        }));

            //    },
            //    minLength: 2,
            //    focus: (event, ui) => {

            //        event.preventDefault();
            //    },
            //    select: function (e, ui) {
            //        that.InsertItem.ProductID = ui.item.id;
            //    },
            //    change: function () {

            //    }
            //});

        }

        //getLocation() {
        //    if (navigator.geolocation) {

        //        navigator.geolocation.getCurrentPosition(
        //            (position: Position) => {
        //                if (position) {
        //                    console.log("Latitude: " + position.coords.latitude +
        //                        " Longitude: " + position.coords.longitude);

        //                    if (position.coords.accuracy) {
        //                        console.log("Accuracy: " + position.coords.accuracy + " meters");
        //                    }

        //                    this.lat = position.coords.latitude;
        //                    this.lng = position.coords.longitude;
        //                }
        //            },
        //            (error: PositionError) => console.log(error),
        //            { enableHighAccuracy: true }
        //        );

        //    } else {
        //        alert("Geolocation is not supported by this browser.");
        //    }
        //}

        OppActDate(e) {
            debugger;
            (<HTMLInputElement>document.getElementById("date")).value = e;
            var d = new Date();
            var c = new Date(e)
            if (c > d) {

                $("#ddlStatus").val(1);
                $("#ddlStatus").prop("disabled", true);

            }
            else {
                $("#ddlStatus").prop("disabled", false);

            }


        }

        selectExpectedDate(e) {
            (<HTMLInputElement>document.getElementById("ExpDate")).value = e;

        }

        Division(data: any): void {

            this.DivisionDropDownP = this.DivisionPService.Find(this.LeadAssessment.CategoryID).then((response => {
                this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);

            }));
        }

        Product(): void {

            this.ProductDropDown = this.ProductService.Find(this.InsertItem.ProductID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
                this.InsertItem.Product = this.ProductDropDown.Product;
                this.InsertItem.ProductDesc = this.ProductDropDown.ProductDesc;
                //$('#txtProductDesc').val(this.ProductDropDown.ProductDesc);
                //(<HTMLInputElement>document.getElementById("txtProductDesc")).value = this.ProductDropDown.ProductDesc
            }));

        }

        //Product(data: any): void {

        //    this.ProductDropDown = this.ProductService.Find(data).then((response => {
        //        this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

        //    }));
        //}

        Model(data: any): void {
            this.ModelDropDown = this.ModelService.Find(this.LeadAssessment.ProductID).then((response => {
                this.ModelDropDown = this.ModelService.GetModelDD(response.data.Result);
            }));
        }

        LeadSource(data: any): void {

            this.LeadSourcedd = this.LeadSourceDDService.Find(this.LeadAssessment.ChannelID).then((response => {
                this.LeadSourcedd = this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
            }));
        }

        Campaign(): void {
            debugger;
            this.Campaigndd = this.CampaignDDService.Find(this.LeadAssessment.LeadSourceID).then((response => {
                this.Campaigndd = this.CampaignDDService.GetCampaignDetails(response.data.Result);
            }));
        }

        DeleteItem(ItemID): void {
            this.DeleteService.Find(ItemID).then((response => {
                this.DeleteService.postItemDelete(response.data.Result);
                this.Init();
                $("#errorclose").hide();
                $("#close").show();
                this.popupMessage("Record deleted successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");

            }));
        }

        DeleteActivity(ActivityID): void {
            this.DeleteActService.Find(ActivityID).then((response => {
                this.DeleteActService.postActivityDelete(response.data.Result);
                this.Init();
                $("#errorclose").hide();
                $("#close").show();
                this.popupMessage("Activity deleted successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");

            }));
        }

        Assessment(data: any): void {



            this.LeadAssessmentService.Find(data).then((response => {


                this.AssessmentInfo = this.LeadAssessmentService.GetLeadAssessment(response.data.Result);

                console.log(this.AssessmentInfo, "AssessmentInfo11111");
                this.AssessmentInfo.CategoryID = this.AssessmentInfo.CategoryID;
                this.AssessmentInfo.ProjectID = this.AssessmentInfo.ProjectID;
                this.Division(this.AssessmentInfo.CategoryID);
                this.AssessmentInfo.DivisionID = this.AssessmentInfo.DivisionID;
                /*this.Product(this.AssessmentInfo.DivisionID);*/
                this.AssessmentInfo.ProductID = this.AssessmentInfo.ProductID;
                this.Model(this.AssessmentInfo.ProductID);
                this.AssessmentInfo.ModelID = this.AssessmentInfo.ModelID;
                this.LeadSource(this.AssessmentInfo.ChannelID);
                this.LeadSourceChange();
                this.ContactDetail();

                this.RemarksHistory = this.AssessmentInfo.RemarksHistoryList;

                this.InsertAct.erpid = this.AssessmentInfo.EmployeeCode;
                $("#txtUserName").val(this.AssessmentInfo.RefUser);
                if (this.AssessmentInfo.LeadSourceID == "2") {
                    this.AssessmentInfo.RefUserID = this.AssessmentInfo.RefUserID;
                    this.AssessmentInfo.RefUserName = this.AssessmentInfo.RefUser;
                }
                else if (this.AssessmentInfo.LeadSourceID == "10" || this.AssessmentInfo.LeadSourceID == "24") {
                    this.AssessmentInfo.CampaignID = this.AssessmentInfo.CampaignNameID;
                }


                if (this.AssessmentInfo.LeadStatusId == "10") {
                    $("#assessment-submit").prop("disabled", false);
                }
                else if (this.AssessmentInfo.LeadStatusId == "13") {
                    $("#assessment-submit").prop("disabled", false);
                }
                else if (this.AssessmentInfo.LeadStatusId == "14") {
                    $("#assessment-submit").prop("disabled", false);
                }
                else if (this.AssessmentInfo.LeadStatusId == "15") {
                    $("#assessment-submit").prop("disabled", false);
                }
                else {
                    $("#assessment-submit").prop("disabled", false);
                }
            }));


        }

        MeetCustomer(): void {
            debugger;
            if (this.CrtAssessmt.IsLess == 1) {
                $("#txtAllocated1").hide();
                $("#txtMeetCustomer").show();
                $("#txtDays").hide();
                $("#txtDisqual").hide();
            }
            else {
                $("#txtAllocated1").show();
                $("#txtMeetCustomer").hide();
                $("#txtDisqual").hide();
                if (this.CrtAssessmt.IsLess == 0 && this.CrtAssessmt.Allocated1 == 1) {
                    $("#txtDays").show();
                    $("#txtDisqual").hide();
                }
                else if (this.CrtAssessmt.IsLess == 0 && this.CrtAssessmt.Allocated1 == 0) {
                    $("#txtDays").hide();
                    $("#txtDisqual").show();
                }
                else {
                    $("#txtDays").hide();
                    $("#txtDisqual").hide();
                }
            }

        }

        CreateOpp(): void {
            debugger;
            if (this.LeadOpp.CretOpp == 1) {
                $("#ee-date").show();
                $("#txtAllocated").hide();
                $("#txtDays2").hide();
            } else {
                $("#ee-date").hide();
                $("#txtAllocated").show();
            }
        }




        allocatedOpp(): void {
            if (this.LeadOpp.Allocated == 1) {
                $("#txtDays2").show();
            } else {
                $("#txtDays2").hide();
            }
        }


        ContactDetail(): void {

            this.ContactInfo = this.ContactInfoService.Find(this.AssessmentInfo.CustomerID).then((response => {
                this.ContactInfo = this.ContactInfoService.GetLeadContactInfo(response.data.Result);
            }));

        }

        LeadSourceChange() {
            $("#Campaignfield").hide();
            $("#UserNamefield").hide();
            this.AssessmentInfo.CampaignID = null;
            this.AssessmentInfo.RefUserID = null;
            this.AssessmentInfo.RefUserName = null;
            if (this.AssessmentInfo.LeadSourceID == "10" || this.AssessmentInfo.LeadSourceID == "24") {
                this.Campaign();
                $("#Campaignfield").show();
                $("#UserNamefield").hide();
            }
            else if (this.AssessmentInfo.LeadSourceID == "2") {
                $("#Campaignfield").hide();
                $("#UserNamefield").show();
            }
        }

        Add(): void {

            $("#activity-submit").prop("disabled", false);
            this.InsertAct = new Activity();
            this.InsertAct.ActivityNumber = null;
            this.InsertAct.ActivityStatus = "1";
            this.InsertAct.LeadStatusId = this.AssessmentInfo.LeadStatusId;
            var n1 = new Date();
            var currentMonth = n1.getMonth() + 1;
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();
            (<HTMLInputElement>document.getElementById("date")).innerHTML = y1 + "-" + currentMonth + "-" + d1;
            $('#date').val(y1 + "-" + currentMonth + "-" + d1);
        }

        AddItem(): void {
            this.InsertItem = new LeadItem();
            $("#Item-submit").prop("disabled", false);
            this.InsertItem.LeadType = "5";
            this.InsertItem.LeadStatusId = "1";
            //this.InsertItem.cate = "";
            //this.InsertItem.ptype = "";
            //this.InsertItem.loc = "";
            //this.InsertItem.note = "";
            //this.InsertItem.AnsOne = "";
            //this.InsertItem.AnsTwo = "";
            //this.InsertItem.AnsThree = "";
        }

        DateChange(): void {
            debugger;
            var n1 = new Date();
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();

            console.log(($("#date").val()));
            debugger;
            if ($("#date").val() < d1) {
                $("#ddlStatus").prop("disabled", true);
            }
            else {
                $("#ddlStatus").prop("disabled", false);
            }

        }


        UpdateLead(): void {
            debugger;
            this.UpdateLeadData.userID = this.UserID;
            this.UpdateLeadData.leadID = this.LeadID;
            this.UpdateLeadData.salesStage = this.AssessmentInfo.SalesStage;
            this.UpdateLeadData.status = this.AssessmentInfo.LeadStatusId;
            this.UpdateLeadData.notes = this.AssessmentInfo.Notes;
            this.UpdateLeadData.reason = "";
            this.UpdateLeadData.description = this.AssessmentInfo.Description;

            //if (!$("input[name=contactradio]:checked").val()) {
            //    this.HideShow();
            //    this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            //}

            this.UpdateLeadData.contactID = $('.messageCheckbox:checked').val();

            if (this.UpdateLeadData.SalesStage == this.AssessmentInfo.SalesStage) {
                $("#pg-load").show();
                debugger;
                this.UpdateLeadDataService.PostUpdateLeadData(this.UpdateLeadData).then(response => {
                    $("#pg-load").hide();
                    if (response.data.Result == 1) {
                        $("#errorclose").hide();
                        $("#close").show();
                        $("#btncloseOk").hide();
                        this.popupMessage("Opportunity Updated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    }
                    else {
                        $("#errorclose").show();
                        $("#close").hide();
                        $("#btncloseOk").hide();
                        this.popupMessage("Error Occured.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                });
            } else {
                $("#pg-load").show();
                debugger;
                this.UpdateLeadDataService.PostUpdateLeadData(this.UpdateLeadData).then(response => {

                    $("#pg-load").hide();
                    if (response.data.Result == 1) {
                        $("#errorclose").hide();
                        $("#close").show();
                        $("#btncloseOk").hide();
                        this.popupMessage("Lead Updated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    }
                    else {
                        $("#errorclose").show();
                        $("#close").hide();
                        $("#btncloseOk").hide();
                        this.popupMessage("Error Occured.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                });
            }
        }





        SubmitReturn(): void {
            if (this.CrtAssessmt.Comments == undefined || this.CrtAssessmt.Comments == null || this.CrtAssessmt.Comments == "") {
                this.HideShow();
                this.popupMessage("Please Enter Comment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                this.ReturnModel.Comments = this.CrtAssessmt.Comments;
                this.ReturnModel.UserID = this.UserID;
                this.ReturnModel.LeadID = this.LeadID;
                this.LeadReturnService.PostReturn(this.ReturnModel).then((response => {
                    console.log(this.CrtAssessmt);
                    if (response.data.Result != null) {
                        //this.IsDisplayModalPopup = true;

                        //$("#ass-btn-loader").hide();
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Lead Return Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        this.Init();
                        //$("#myModalAddNew").hide();
                        $('#myModalAddNew').click();

                        this.CrtAssessmt = null;
                    }

                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));
            }

        }
        SubmitContact(): void {
            debugger;

            this.InsertContact.CustomerID = this.AssessmentInfo.CustomerID;
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
                        if (this.InsertContact.ContactID > 0) {
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Contact ID - " + this.InsertContact.ContactID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            $('#edit-contact').click();
                        }
                        else {
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Contact ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            $('#create-contact').click();
                        }
                        this.InsertContact = null;
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Contact already exists with the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));
            }

        }

        SubmitCrtAssessmt(): void {
            debugger;
            // $("#ass-btn-loader").show();
            if (this.CrtAssessmt.IsLess == undefined || this.CrtAssessmt.IsLess == null || this.CrtAssessmt.IsLess == "") {
                this.HideShow();
                this.popupMessage("Please Enter Sales Within Days", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.CrtAssessmt.IsLess == "1" && (this.CrtAssessmt.IsMeet == undefined || this.CrtAssessmt.IsMeet == null || this.CrtAssessmt.IsMeet == "")) {
                this.HideShow();
                this.popupMessage("Please Enter Meet Customer", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.CrtAssessmt.IsLess == "0" && (this.CrtAssessmt.Allocated1 == undefined || this.CrtAssessmt.Allocated1 == null || this.CrtAssessmt.Allocated1 == "")) {
                this.HideShow();
                this.popupMessage("Please Enter Allocated Field", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.CrtAssessmt.IsLess == "0" && this.CrtAssessmt.Allocated1 == "1") && (this.CrtAssessmt.KeepAllocatedTimeID == undefined || this.CrtAssessmt.KeepAllocatedTimeID == null || this.CrtAssessmt.KeepAllocatedTimeID == "")) {
                this.HideShow();
                this.popupMessage("Please Select Days", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.CrtAssessmt.IsLess == "0" && this.CrtAssessmt.Allocated1 == "0") && (this.CrtAssessmt.DisqualificationID == undefined || this.CrtAssessmt.DisqualificationID == null || this.CrtAssessmt.DisqualificationID == "")) {
                this.HideShow();
                this.popupMessage("Please Select Disqualified Reason", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.CrtAssessmt.Comments == undefined || this.CrtAssessmt.Comments == null || this.CrtAssessmt.Comments == "") {
                this.HideShow();
                this.popupMessage("Please Enter Comment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {

                debugger;
                this.CrtAssessmt.UserID = this.UserID;
                this.CrtAssessmt.LeadID = this.LeadID;
                if ((this.CrtAssessmt.IsLess == 1 && this.CrtAssessmt.IsMeet == 1) || (this.CrtAssessmt.IsLess == 1 && this.CrtAssessmt.IsMeet == 0)) {
                    this.CrtAssessmt.LeadStatus = "10";
                }
                else if (this.CrtAssessmt.IsLess == 0 && this.CrtAssessmt.Allocated1 == 0) {
                    this.CrtAssessmt.LeadStatus = "8";
                }

                else {
                    this.CrtAssessmt.LeadStatus = this.AssessmentInfo.LeadStatusId;
                }

                this.CrtAssessmtService.PostCrtAssessmt(this.CrtAssessmt).then((response => {
                    console.log(this.CrtAssessmt);
                    if (response.data.Result != null) {
                        //this.IsDisplayModalPopup = true;

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Assessment saved Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        this.Init();
                        //$("#myModalAddNew").hide();
                        $('#myModalAddNew').click();
                        console.log("lkhuubufuctffuvfg6t wefffw" + response.data.Result)
                        this.CrtAssessmt = null;
                    }
                    //if (response.data.Result != null) {
                    //    console.log("lkhuubufuctffuvfg6t" + response.data.Result)
                    //    //this.IsDisplayModalPopup = true;
                    //    this.alert = " Assessment saved Successfully ";
                    //    $("#ass-btn-loader").hide();
                    //    $("#errorclose").hide();
                    //    $("#close").show();
                    //    this.Init();
                    //    //$("#myModalAddNew").hide();
                    //    $('#myModalAddNew').click();

                    //    this.CrtAssessmt = null;
                    //}

                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));

            }

        }

        SubmitActivity(): void {
            // $("#ass-btn-loader1").show();
            debugger;
            console.log("activityyyyy2808", this.InsertAct);
            if (this.InsertAct.ActivityCategory == undefined || this.InsertAct.ActivityCategory == null || this.InsertAct.ActivityCategory == "") {
                this.HideShow();
                this.popupMessage("Please Select Activity Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                // $("#myAlert").modal("show");

                //  $("#ass-btn-loader1").hide();
            }

            else if (this.InsertAct.ActivityStatus == undefined || this.InsertAct.ActivityStatus == null || this.InsertAct.ActivityStatus == "") {
                this.HideShow();
                this.popupMessage("Please  Select Activity Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                // $("#myAlert").modal("show");
            }

            else if (this.InsertAct.ActivityPurpose == undefined || this.InsertAct.ActivityPurpose == null || this.InsertAct.ActivityPurpose == "") {
                debugger;
                this.HideShow();
                this.popupMessage("Please  Select Activity Purpose", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else if (this.InsertAct.LocationID == undefined || this.InsertAct.LocationID == null || this.InsertAct.LocationID == "") {
                this.HideShow();
                this.popupMessage("Please  Select Activity Location", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertAct.ActivityNote == undefined || this.InsertAct.ActivityNote == null || this.InsertAct.ActivityNote == "") {
                this.HideShow();
                this.popupMessage("Please  write Activity Notes", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                debugger;
                $("#activity-submit").prop("disabled", true);

                if ($("#ddlStatus").val() == "1") {
                    this.InsertAct.ActivityStatus = "1";
                } else if ($("#ddlStatus").val() == "2") {
                    this.InsertAct.ActivityStatus = "2";
                } else {
                    this.InsertAct.ActivityStatus = "3";
                }

                //this.InsertAct.UserID = this.UserID;
                //this.InsertAct.ActivityReferenceLead = this.LeadID;
                //this.InsertAct.CustomerID = this.AssessmentInfo.CustomerID;
                //this.InsertAct.ContactID = this.AssessmentInfo.ContactID;
                //this.InsertAct.ActivityNumber = this.InsertAct.ActivityNumber;
                //this.InsertAct.ftime = "101010";
                //this.InsertAct.ttime = "141516";
                //this.InsertAct.dchnl = "10";
                //this.InsertAct.sorg = "O 50000002";
                //this.InsertAct.erpid = this.AssessmentInfo.EmployeeCode;
                //this.InsertAct.sofc = "SOFF1001";
                //this.InsertAct.div = "20";
                //this.InsertAct.StartDate = (<HTMLInputElement>document.getElementById("date")).value; //2019-08-22
                //this.InsertAct.ptype = "YTBA";

                this.InsertAct.ActivityID = this.InsertAct.ActivityNumber;               
                this.InsertAct.UserID = this.UserID;
                this.InsertAct.CustomerID = this.AssessmentInfo.CustomerID;
                this.InsertAct.ContactID = this.AssessmentInfo.ContactID;
                this.InsertAct.StartDate = (<HTMLInputElement>document.getElementById("date")).value; //2019-08-22
                this.InsertAct.EndDate = "";
                this.InsertAct.ActivityName = "";
                this.InsertAct.ActivityPurpose = this.InsertAct.ActivityPurpose;
                this.InsertAct.ActivityMode = this.InsertAct.ModeID;
                //this.InsertAct.ActivityCategory = this.InsertAct.cate;
                //this.InsertAct.ActivityNote = this.InsertAct.note;
                this.InsertAct.ActivityReferencePurpose = "";
                this.InsertAct.ActivityReferenceLead = this.LeadID;
                this.InsertAct.ActivityReferenceOpportunity = "";
                //this.InsertAct.LocationID = this.InsertAct.loc;
                this.InsertAct.ReferenceType = "";
                this.InsertAct.Latitude = this.lat;
                this.InsertAct.Longitude = this.lng;
                this.InsertAct.ActivityLocation = "";
                if (this.InsertAct.ActivityNumber == undefined || this.InsertAct.ActivityNumber == null || this.InsertAct.ActivityNumber == "") {
                    this.InsertAct.Operation = "Create";
                }
                else {
                    this.InsertAct.Operation = "Update";
                }
                debugger;
                console.log("activityyyyy28", this.InsertAct);
                //this.CreateInSAPLeadActivityService.PostCreateInSAPLeadActivity(this.InsertAct).then((response => {
                this.InsertLeadAssessment.PostInsertLeadActivity(this.InsertAct).then((response => {
                    debugger;
                    if (response.data.Result != null) {

                        //   $("#myAlert").modal("show");
                        //  $("#act-btn-loader").hide(); 
                        this.HideShow();
                        this.popupMessage("Activity created Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        //$("#myModalAddNew").hide();
                        $('#myModalAddNew').click();
                        this.FillGrid();

                    }

                    else {

                        // $("#ass-btn-loader1").hide();
                        //  $("#myAlert").modal("show");
                        this.HideShow();
                        this.popupMessage("Activity Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));
            }

        }

        SubmitItem(): void {
            // $("#ass-btn-loader1").show();
            debugger;
            this.InsertItem.LeadID = this.LeadID;
            this.InsertItem.UserID = this.UserID;
            this.InsertItem.ProductID = this.InsertItem.ProductID;
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
            else if (this.InsertItem.DivisionID == undefined || this.InsertItem.DivisionID == null || this.InsertItem.DivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertItem.ProductID == undefined || this.InsertItem.ProductID == null || this.InsertItem.ProductID == "") {
                this.HideShow();
                this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertItem.ModelID == undefined || this.InsertItem.ModelID == null || this.InsertItem.ModelID == "") {
                this.HideShow();
                this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertItem.ChannelID == undefined || this.InsertItem.ChannelID == null || this.InsertItem.ChannelID == "") {

                this.HideShow();
                this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertItem.LeadSourceID == undefined || this.InsertItem.LeadSourceID == null || this.InsertItem.LeadSourceID == "") {
                this.HideShow();
                this.popupMessage("Please Select Opportunity Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                debugger;
                $("#Item-submit").prop("disabled", true);


                this.InsertItem.ItemStatusID = this.InsertItem.LeadStatusId;
                this.InsertItem.CategoryID = this.InsertItem.CategoryID;
                this.InsertItem.LeadCategoryID = this.InsertItem.LeadCategoryID;
                this.InsertItem.DeliveryStatus = this.LeadItemlist.DeliveryStatus;
                this.InsertItem.ProductID = this.InsertItem.ProductID;


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

        SubmitQuestions(): void {
            // $("#ass-btn-loader1").show();
            if (this.InsertAct.AnsOne == undefined || this.InsertAct.AnsOne == null || this.InsertAct.AnsOne == "") {
                this.HideShow();
                this.popupMessage("Please Complete All Questionnaire", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertAct.AnsTwo == undefined || this.InsertAct.AnsTwo == null || this.InsertAct.AnsTwo == "") {
                this.HideShow();
                this.popupMessage("Please Complete All Questionnaire", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertAct.AnsThree == undefined || this.InsertAct.AnsThree == null || this.InsertAct.AnsThree == "") {
                this.HideShow();
                this.popupMessage("Please Complete All Questionnaire", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                $("#question-submit").prop("disabled", true);

                this.InsertAct.UserID = this.UserID;
                this.InsertAct.LeadID = this.LeadID;
                this.InsertAct.QueOne = "1";
                this.InsertAct.AnsOne = this.InsertAct.AnsOne;
                this.InsertAct.QueTwo = "2";
                this.InsertAct.AnsTwo = this.InsertAct.AnsTwo;
                this.InsertAct.QueThree = "3";
                this.InsertAct.AnsThree = this.InsertAct.AnsThree;

                debugger;
                //this.CreateInSAPLeadActivityService.PostCreateInSAPLeadActivity(this.InsertAct).then((response => {
                this.InsertLeadQuestions.PostInsertLeadQuestions(this.InsertAct).then((response => {
                    if (response.data.Result != null) {

                        //   $("#myAlert").modal("show");
                        //  $("#act-btn-loader").hide(); 
                        this.HideShow();
                        this.popupMessage("Questions Submitted Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        //$("#myModalAddNew").hide();
                        $('#myModalAddQue').click();
                        this.FillGrid1();

                    }

                    else {

                        // $("#ass-btn-loader1").hide();
                        //  $("#myAlert").modal("show");
                        this.HideShow();
                        this.popupMessage("Questions Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));
            }

        }


        SubmitOpportunity(): void {
            this.LeadOpp.ExpDate = (<HTMLInputElement>document.getElementById("ExpDate")).value;
            if (this.LeadOpp.CretOpp == undefined || this.LeadOpp.CretOpp == null || this.LeadOpp.CretOpp == "") {
                $("#errorclose").show();
                $("#close").hide();
                this.alert = "Please Enter Opportunity";

            }
            else if (this.LeadOpp.CretOpp == "1" && (this.LeadOpp.ExpDate == undefined || this.LeadOpp.ExpDate == null || this.LeadOpp.ExpDate == "")) {
                $("#errorclose").show();
                $("#close").hide();
                this.alert = "Please Enter Date";
            }
            else if (this.LeadOpp.CretOpp == "0" && (this.LeadOpp.Allocated == undefined || this.LeadOpp.Allocated == null || this.LeadOpp.Allocated == "")) {
                $("#errorclose").show();
                $("#close").hide();
                this.alert = "Please Enter Allocated field";
            }
            else if ((this.LeadOpp.CretOpp == "0" && this.LeadOpp.Allocated == "1") && (this.LeadOpp.KeepAllocatedTimeID == undefined || this.LeadOpp.KeepAllocatedTimeID == null || this.LeadOpp.KeepAllocatedTimeID == "")) {
                $("#errorclose").show();
                $("#close").hide();
                this.alert = "Please Select Days";
            }
            else if (this.LeadOpp.Comnt == undefined || this.LeadOpp.Comnt == null || this.LeadOpp.Comnt == "") {
                $("#errorclose").show();
                $("#close").hide();
                this.alert = "Please Enter notes";

            }
            else {
                $("#opp-submit").prop("disabled", true);
                this.LeadOpp.UserID = this.UserID;
                this.LeadOpp.LeadID = this.LeadID;
                if (this.LeadOpp.CretOpp == 1) {
                    this.LeadOpp.LeadStatus = "7";
                }
                else if (this.LeadOpp.CretOpp == 0 && this.LeadOpp.Allocated == 0) {
                    this.LeadOpp.LeadStatus = "8";
                }

                else {
                    this.LeadOpp.LeadStatus = this.AssessmentInfo.LeadStatusId;
                }

                this.LeadOpportunity.PostLeadOpp(this.LeadOpp).then((response => {
                    if (response.data.Result != null && response.data.Result != undefined && response.data.Result != "") {
                        debugger;
                        if (this.LeadOpp.LeadStatus == "8") {
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Lead - " + this.LeadID + " is closed, no further actions can be done on this lead.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            this.LeadOpp = null;
                        }
                        else {
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Opportunity - " + response.data.Result + " created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            this.LeadOpp = null;
                        }
                    }
                    else {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Lead sent to CRM for conversion.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));


            }


        }

        Close(): void {
            location.href = "/#!/LeadAssessmentList";
        }

        RefreshActivityList(): void {

            this.FillGrid();
        }
        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }

        FillGrid(): void {

            this.LeadActivitylist = this.Listservice.Find(this.LeadID).then((response => {
                this.LeadActivitylist = this.Listservice.GetLeadActivityList(response.data.Result);
                for (var i = 0; i < this.LeadActivitylist.length; i++) {
                    if (this.LeadActivitylist[i].Status == "Completed" || this.LeadActivitylist[i].Status == "Rejected") {
                        this.toggleStatus = true;
                    }
                    else {
                        this.toggleStatus = false;
                        break;
                    }
                }
            }));
        }

        FillGridItems(): void {

            this.LeadItemlist = this.ListItemservice.Find(this.LeadID).then((response => {
                this.LeadItemlist = this.ListItemservice.GetLeadItemList(response.data.Result);
                console.log("GetLeadItemList", response.data.Result)

            }));
        }

        FillGrid1(): void {
            this.LeadQueAnsDetails = this.QueAnsservice.Find(this.LeadID).then((response => {
                this.LeadQueAnsDetails = this.QueAnsservice.GetLeadQueAns(response.data.Result);
                console.log("this.LeadQueAnsDetails", this.LeadQueAnsDetails);
                for (var i = 0; i < this.LeadQueAnsDetails.length; i++) {
                    if (this.LeadQueAnsDetails[i].Question != "" || this.LeadQueAnsDetails[i].Question != null) {
                        console.log("this.LeadQueAnsDetails", this.LeadQueAnsDetails);
                        this.toggleStatus = true;
                    }
                    else {
                        this.toggleStatus = false;
                        break;
                    }
                }
            }));
        }

        Edit(data: any): void {


            var d = new Date();
            var c = new Date($("#date").val());

            if (c > d) {
                $("#ddlStatus").prop("disabled", true);
            } else {
                $("#ddlStatus").prop("disabled", false);
            }
            this.EditService.Find(data).then((response => {

                this.InsertAct = this.EditService.GetEdit(response.data.Result);

                if (this.InsertAct.ActivityStatus = "Pending") {
                    this.InsertAct.ActivityStatus = '1';
                }
                else if (this.InsertAct.ActivityStatus = "Rejected") {
                    this.InsertAct.ActivityStatus = '2';
                }
                else {

                    this.InsertAct.ActivityStatus = '3';
                }


                $('#date').val(this.InsertAct.date);

                $("myModalAddNew").show();

            }));

        }


        EditItem(data: any): void {
         

            this.EditItemService.Find(data).then((response => {
              
                this.InsertItem = this.EditItemService.GetItemEdit(response.data.Result);
                console.log("InsertItem", response.data.Result)
                $("myModalAdd").show();

            }));

        }

        CheckContact(data) {
            if (this.AssessmentInfo.ContactID == data) {
                return true;
            }
            else {
                return false;
            }

        }

        //EditContact
        EditContact(data: any): void {
            this.EditContactService.Find(data).then((response => {
                this.InsertContact = this.EditContactService.GetConEdit(response.data.Result);

                //var temp = this.InsertContact.StateID;
                //this.ConStateDropDown = this.StateService.Find(this.InsertContact.CountryID).then((response => {
                //    this.ConStateDropDown = this.StateService.GetStateName(response.data.Result);                
                //    this.InsertContact.StateID = temp;
                //}));
                var temp = this.InsertContact.DistrictID;
                this.ConDistrictDropDown = this.DistrictService.Find(this.InsertContact.StateID).then((response => {
                    this.ConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                    this.InsertContact.DistrictID = temp;
                }));

                $("#txtCustomerName").val(this.InsertContact.CompanyName);
                if (this.InsertContact.Status == "True") {
                    this.InsertContact.Status = "1";
                }
                else {
                    this.InsertContact.Status = "0";
                }
                if (this.InsertContact.MaritalStatus == "True") {
                    this.InsertContact.MaritalStatus = "1";
                }
                else if (this.InsertContact.MaritalStatus == "False") {
                    this.InsertContact.MaritalStatus = "0";
                }
                else {
                    this.InsertContact.MaritalStatus = "";
                }
                if (this.InsertContact.SmokingPreference == "True") {
                    this.InsertContact.SmokingPreference = "1";
                }
                else if (this.InsertContact.SmokingPreference == "False") {
                    this.InsertContact.SmokingPreference = "0";
                }
                else {
                    this.InsertContact.SmokingPreference = "";
                }
                if (this.InsertContact.DrinkingPreference == "True") {
                    this.InsertContact.DrinkingPreference = "1";
                }
                else if (this.InsertContact.DrinkingPreference == "False") {
                    this.InsertContact.DrinkingPreference = "0";
                }
                else {
                    this.InsertContact.DrinkingPreference = "";
                }
                if (this.InsertContact.MealPreference == "True") {
                    this.InsertContact.MealPreference = "1";
                }
                else if (this.InsertContact.MealPreference == "False") {
                    this.InsertContact.MealPreference = "0";
                }
                else {
                    this.InsertContact.MealPreference = "";
                }
            }));

        }

        ConDistrict(): void {

            this.ConDistrictDropDown = this.DistrictService.Find(this.InsertContact.StateID).then((response => {
                this.ConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }


        ValidContact(data: any): void {
            this.EditContactService.Find(data).then((response => {
                this.InsertContact = this.EditContactService.GetConEdit(response.data.Result);

                this.AssessmentInfo.ContactID = this.InsertContact.ContactID;
                this.AssessmentInfo.ContactName = this.InsertContact.ContactName;
                this.AssessmentInfo.ContactPhoneNo = this.InsertContact.PhoneNo;
                this.AssessmentInfo.ContactEmail = this.InsertContact.Email;
                this.AssessmentInfo.ContactAddress = this.InsertContact.Address;
                this.AssessmentInfo.ContactMobileNo = this.InsertContact.MobileNo;
                this.AssessmentInfo.ContactPincode = this.InsertContact.PostalCode;
                this.AssessmentInfo.DepartmentID = this.InsertContact.DepartmentID;
                this.AssessmentInfo.Department = this.InsertContact.Department;
                this.AssessmentInfo.FOPID = this.InsertContact.FOPID;
                this.AssessmentInfo.ContactStateID = this.InsertContact.StateID;
                this.AssessmentInfo.ContactDistrictID = this.InsertContact.DistrictID;
                this.AssessmentInfo.ContactCountryID = this.InsertContact.CountryID;
                this.AssessmentInfo.ContactCity = this.InsertContact.City;
                this.AssessmentInfo.ContactSAPID = this.InsertContact.SAPID;

            }));
        }



    }
    class LeadAssessmentComponentController implements ng.IComponentOptions {
        static Name: string = "leadassessmentcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadAssessmentController;
            this.templateUrl = "/Scripts/App/LeadAssessment/Template/LeadAssessment.html";
        }
    }
    app.AddComponent(LeadAssessmentComponentController.Name, new LeadAssessmentComponentController());


}




