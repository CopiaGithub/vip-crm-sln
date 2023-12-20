﻿namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadAssessData = GCPL.Model.LeadAssessmentModel;
    import EditActivity = GCPL.Model.EditActivityModel;
    import LeadActivitylist = GCPL.Model.LeadActivityModel;
    import LeadQueAnsDetails = GCPL.Model.LeadQueAnsModel;
    interface IDeliveryScheduleController {
        Edit(data: any): void;
        EditTarget: Array<Model.EditActivityModel>;
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
        LeadSourcedd: Array<Model.LeadSourceDetailsModel>
        Campaigndd: Array<Model.CampaignDetailsModel>
        ContactInfo: GCPL.Model.ContactDetailsListModel;
        LeadActivitySearch: GCPL.Model.LeadActivitySearchModel;
        LeadID: any;
        ModelID: any;
        ProductID: any;
        ProjectNameDD: Array<Model.GetProjectNameDDModel>;
        DisqualificationReasonDD: Array<Model.GetDisqualificationReasonDDModel>;
        StageDD: Array<Model.SalesStageDDModel>;
        LeadStatusDD: Array<Model.LeadStatusDDModel>;
        LeadAssessment: LeadAssessData;
    }

    class DeliveryScheduleController implements IDeliveryScheduleController {

        LeadActivitylist = null;
        LeadItemlist = null;
        LeadQueAnsDetails = null;
        LeadAssessment = null;
        toggleStatus = null;
        UserID = null;
        EditTarget = null;
        LeadStatusDropDown = null;
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
        ContactInfo = null;
        LeadID = null;
        ModelID = null;
        ProductID = null;
        ModelNo = null;
        ProductD = null;
        InsertAssessment = null;
        CrtAssessmt = null;
        ReturnModel = null;
        InsertLeadActivity = null;
        SalesAreaDropDown = null;
        LeadActivitySearch = null;
        SearchUser: GCPL.Model.SearchRefUserModel = null;
        alert = null;
        InsertAct = null;
        SubmitData = null;
        private Cookie: any = null;
        ProjectNameDD = null;
        DisqualificationReasonDD = null;
        StageDD = null;
        LeadStatusDD = null;
        lat = null;
        lng = null;
        UpdateLeadData = null;

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
        private QueAnsservice: Service.ILeadQueAnsService;
        private ModeActivityService: Service.IModeActivityService;
        private LeadActivityStatusDDservice: Service.ILeadActivityStatusDDservice;
        private LeadActivityPurposeDDservice: Service.ILeadActivityPurposeDDservice;
        private LeadActivityLocationDDservice: Service.ILeadActivityLocationDDservice;
        private InsertLeadAssessment: Service.IInsertLeadActivityService;
        private InsertLeadQuestions: Service.IInsertLeadQuestionsService;
        private Ans1Service: Service.IQAns1Service;
        private Ans2Service: Service.IQAns2Service;
        private Ans3Service: Service.IQAns3Service;
        private LeadOpportunity: Service.ILeadOpportunity;
        private SalesAreaService: Service.ISalesAreaService;
        private EditService: Service.IEditActivityList;
        private LeadReturnService: Service.ILeadReturnService;
        private CreateInSAPLeadActivityService: Service.ICreateInSAPLeadActivityService;
        private DisqualificationReasonDDService: Service.IDisqualificationReasonDDService;
        private LeadStageDDService: Service.ILeadStageDDService;
        private LeadStatusDDService: Service.ILeadStatusDDService;
        private UpdateLeadDataService: Service.IUpdateLeadDataService;
        private ItemListservice: Service.ILeadItemListService;

        static $inject = ["LeadStatusddService", "IndustryDivisionService", "IndustrialSegmentService", "LeadTypeddService", "LeadCategoryDDService", "PurchaseTimelineService", "CategoryddService", "DivisionDDPService", "ProductddService",
            "ModelDDService", "ChannelDDService", "LeadSourceDetailsService", "CampaignDetailsService", "ValidateReferredEmployeeService", "LeadAssessmentService", "LeadContactDetailsService", "CrtAssessmtServiceService",
            "LeadActivityListService", "LeadQueAnsService", "ModeActivityService", "LeadActivityStatusDDservice", "LeadActivityPurposeDDservice", "LeadActivityLocationDDservice", "InsertLeadActivityService", "InsertLeadQuestionsService", "QAns1Service", "QAns2Service", "QAns3Service",
            "SalesAreaService", "EditActivityList", "LeadReturnService", "CreateInSAPLeadActivityService", "InsertLeadToOppSAPService", "ProjectNameService", "DisqualificationReasonDDService", "LeadStageDDService", "LeadStatusDDService", "UpdateLeadDataService", "LeadItemListService", "$location", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_LeadStatusService: Service.ILeadStatusddService, _IndustryDivisionService: Service.IIndustryDivisionService, _IndustrialSegmentService: Service.IIndustrialSegmentService, _LeadTypeService: Service.ILeadTypeddService, _LeadCategoryService: Service.ILeadCategoryDDService,
            _PurchaseTimlineDDService: Service.IPurchaseTimelineService, _CategoryService: Service.ICategoryddService, _DivisionPService: Service.IDivisionDDPService, _ProductService: Service.IProductddService, _ModelService: Service.IModelDDService, _ChannelDDService: Service.IChannelDDService,
            _LeadSourceDDService: Service.ILeadSourceDetailsService, _CampaignDDService: Service.ICampaignDetailsService, _ValidReferredEmpService: Service.IValidateReferredEmployeeService, _leadassessmentService: Service.ILeadAssessmentService, _ContactInfoService: Service.ILeadContactDetailsService, _CrtAssessmtService: Service.ICrtAssessmtServiceService, _LeadActivityListService: Service.ILeadActivityListService,
            _LeadQueAnsService: Service.ILeadQueAnsService, _ModeActivityService: Service.IModeActivityService, _LeadActivityStatusDDservice: Service.ILeadActivityStatusDDservice, _LeadActivityPurposeDDservice: Service.ILeadActivityPurposeDDservice, _LeadActivityLocationDDservice: Service.ILeadActivityLocationDDservice, _InsertLeadAssessment: Service.IInsertLeadActivityService,
            _InsertLeadQuestions: Service.IInsertLeadQuestionsService, _Ans1Service: Service.IQAns1Service, _Ans2Service: Service.IQAns2Service, _Ans3Service: Service.IQAns3Service, _LeadOpportunity: Service.ILeadOpportunity, _SalesAreaService: Service.ISalesAreaService, _EditActivityList: Service.IEditActivityList, _LeadReturnService: Service.ILeadReturnService, _CreateInSAPLeadActivityService: Service.ICreateInSAPLeadActivityService,
            _SubmitService: Service.IInsertLeadToOppSAPService, _ProjectNameService: Service.IProjectNameService, _DisqualificationReasonDDService: Service.IDisqualificationReasonDDService, _LeadStageDDService: Service.ILeadStageDDService, _LeadStatusDDService: Service.ILeadStatusDDService, _UpdateLeadDataService: Service.IUpdateLeadDataService, _ItemDataListService: Service.ILeadItemListService, private $location: ng.ILocationService, private _cookieStore: any) {
            this.$location = $location;
            this.LeadStatusService = _LeadStatusService;
            this.LeadStatusService = _LeadStatusService;
            this.ProjectNameService = _ProjectNameService;
            this.CreateInSAPLeadActivityService = _CreateInSAPLeadActivityService;
            this.IndustryDivisionService = _IndustryDivisionService;
            this.IndustrialSegmentService = _IndustrialSegmentService;
            this.LeadTypeService = _LeadTypeService;
            this.LeadCategoryService = _LeadCategoryService;
            this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
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
            this.LeadID = "11693";
            //this.LeadID = $location.search().LeadID;
            //this.ModelID = $location.search().Model;
            //this.ProductID = $location.search().Product;
            this.CrtAssessmtService = _CrtAssessmtService;
            this.Listservice = _LeadActivityListService;
            this.QueAnsservice = _LeadQueAnsService;
            this.LeadOpportunity = _LeadOpportunity;
            this.SalesAreaService = _SalesAreaService;
            this.ModeActivityService = _ModeActivityService;
            this.LeadActivityStatusDDservice = _LeadActivityStatusDDservice;
            this.LeadActivityPurposeDDservice = _LeadActivityPurposeDDservice;
            this.LeadActivityLocationDDservice = _LeadActivityLocationDDservice;
            this.InsertLeadAssessment = _InsertLeadAssessment;
            this.InsertLeadQuestions = _InsertLeadQuestions;
            this.Ans1Service = _Ans1Service;
            this.Ans2Service = _Ans2Service;
            this.Ans3Service = _Ans3Service;
            this.LeadReturnService = _LeadReturnService;
            this.SubmitService = _SubmitService;
            this.DisqualificationReasonDDService = _DisqualificationReasonDDService;
            this.LeadStageDDService = _LeadStageDDService;
            this.LeadStatusDDService = _LeadStatusDDService;
            this.UpdateLeadDataService = _UpdateLeadDataService;
            this.ItemListservice = _ItemDataListService;
            this.EditService = _EditActivityList;
            this.Cookie = _cookieStore;
            //this.UserID = this.Cookie.get('UserInfo')['UserID'];
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
            debugger;
            if (this.LeadID != null || this.LeadID != "" || this.LeadID != undefined) {
                console.log(this.LeadID, "this.LeadID11111");
                this.FillGridData();
                this.Assessment(this.LeadID);

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

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
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

            //this.LeadActivityPurposeDD = this.LeadActivityPurposeDDservice.Find().then((response => {
            //    this.LeadActivityPurposeDD = this.LeadActivityPurposeDDservice.GetLeadActivityPurpose(response.data.Result);
            //}));

            this.LeadActivityLocationDD = this.LeadActivityLocationDDservice.Find().then((response => {
                this.LeadActivityLocationDD = this.LeadActivityLocationDDservice.GetLeadActivityLocation(response.data.Result);
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
            
            //this.getLocation();

        }


        FillGridData(): void {
            debugger;

            this.LeadItemlist = this.ItemListservice.Find(this.LeadID).then((response => {
                this.LeadItemlist = this.ItemListservice.GetLeadItemList(response.data.Result);
                console.log(this.LeadItemlist, "this.LeadItemlist1111111");

            }));
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

        Product(data: any): void {
            
            this.ProductDropDown = this.ProductService.Find(data).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));
        }

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

        Assessment(data: any): void {
            debugger;
            this.LeadAssessmentService.Find(data).then((response => {
                
                this.AssessmentInfo = this.LeadAssessmentService.GetLeadAssessment(response.data.Result);
                
                console.log(this.AssessmentInfo, "AssessmentInfo11111");
                this.AssessmentInfo.CategoryID = this.AssessmentInfo.CategoryID;
                this.AssessmentInfo.ProjectID = this.AssessmentInfo.ProjectID;
                this.Division(this.AssessmentInfo.CategoryID);
                this.AssessmentInfo.DivisionID = this.AssessmentInfo.DivisionID;
                this.Product(this.AssessmentInfo.DivisionID);
                this.AssessmentInfo.ProductID = this.AssessmentInfo.ProductID;
                this.Model(this.AssessmentInfo.ProductID);
                this.AssessmentInfo.ModelID = this.AssessmentInfo.ModelID;
                this.LeadSource(this.AssessmentInfo.ChannelID);
                this.LeadSourceChange();
                
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

        ContactDetail(): void {

            this.ContactInfo = this.ContactInfoService.Find(this.LeadAssessment.CustomerID).then((response => {
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

        AddNew(): void {
            console.log("del Schedule page");
        }

        Add(): void {
            $("#activity-submit").prop("disabled", false);
            this.InsertAct.ActivityNumber = null;
            this.InsertAct.ActivityStatus = "1";
            this.InsertAct.cate = "";
            this.InsertAct.ptype = "";
            this.InsertAct.loc = "";
            this.InsertAct.note = "";
            this.InsertAct.AnsOne = "";
            this.InsertAct.AnsTwo = "";
            this.InsertAct.AnsThree = "";
            var n1 = new Date();
            var currentMonth = n1.getMonth() + 1;
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();
            (<HTMLInputElement>document.getElementById("date")).innerHTML = y1 + "-" + currentMonth + "-" + d1;
            $('#date').val(y1 + "-" + currentMonth + "-" + d1);
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


        UpdateLeadStage(): void {

            this.UpdateLeadData.userID = this.UserID;
            this.UpdateLeadData.leadID = this.LeadID;
            this.UpdateLeadData.salesStage = this.AssessmentInfo.SalesStage;
            this.UpdateLeadData.status = this.AssessmentInfo.Status;
            this.UpdateLeadData.notes = this.AssessmentInfo.Notes;
            this.UpdateLeadData.reason = "";
            this.UpdateLeadData.description = this.AssessmentInfo.Description;

            if (this.UpdateLeadData.SalesStage == this.AssessmentInfo.SalesStage) {
                $("#pg-load").show();
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
            } else {
                $("#pg-load").show();
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

        //SubmitActivity(): void {
        //   // $("#ass-btn-loader1").show();
            
        //   if (this.InsertAct.cate == undefined || this.InsertAct.cate == null || this.InsertAct.cate == "") {
        //       this.HideShow();
        //       this.popupMessage("Please Select Activity Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
        //      // $("#myAlert").modal("show");
               
        //     //  $("#ass-btn-loader1").hide();
        //    }

        //    else if (this.InsertAct.ActivityStatus == undefined || this.InsertAct.ActivityStatus == null || this.InsertAct.ActivityStatus == "") {
        //       this.HideShow();
        //       this.popupMessage("Please  Select Activity Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");             
        //      // $("#myAlert").modal("show");
        //    }

        //   else if (this.InsertAct.purid == undefined || this.InsertAct.purid == null || this.InsertAct.purid == "") {
        //       this.HideShow();
        //       this.popupMessage("Please  Select Activity Purpose", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");  

        //    }

        //    else if (this.InsertAct.loc == undefined || this.InsertAct.loc == null || this.InsertAct.loc == "") {
        //       this.HideShow();
        //       this.popupMessage("Please  Select Activity Location", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");  

        //    }
        //    else if (this.InsertAct.note == undefined || this.InsertAct.note == null || this.InsertAct.note == "") {
        //       this.HideShow();
        //       this.popupMessage("Please  write Activity Notes", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id"); 

        //    }
        //    else if (this.InsertAct.AnsOne == undefined || this.InsertAct.AnsOne == null || this.InsertAct.AnsOne == "") {
        //       this.HideShow();
        //       this.popupMessage("Please  Complete All Questionnaire", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id"); 
        //    }
        //    else if (this.InsertAct.AnsTwo == undefined || this.InsertAct.AnsTwo == null || this.InsertAct.AnsTwo == "") {
        //       this.HideShow();
        //       this.popupMessage("Please  Complete All Questionnaire", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id"); 
        //    }
        //    else if (this.InsertAct.AnsThree == undefined || this.InsertAct.AnsThree == null || this.InsertAct.AnsThree == "") {
        //       this.HideShow();
        //       this.popupMessage("Please  Complete All Questionnaire", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id"); 
        //    }
        //    else {
        //       $("#activity-submit").prop("disabled", true);
        //        debugger;
        //        if ($("#ddlStatus").val() == "1") {
        //            this.InsertAct.ActivityStatus = "1";
        //        } else if ($("#ddlStatus").val() == "2") {
        //            this.InsertAct.ActivityStatus = "2";
        //        } else {
        //            this.InsertAct.ActivityStatus = "3";
        //       }
              
        //        this.InsertAct.UserID = this.UserID;
        //        this.InsertAct.LeadID = this.LeadID;
        //       this.InsertAct.CustomerID = this.AssessmentInfo.CustomerID;
        //       this.InsertAct.BusinessPartnerNo = this.AssessmentInfo.BusinessPartnerNo;
        //       this.InsertAct.SAPID = this.AssessmentInfo.SAPID;
        //       this.InsertAct.ContactID = this.AssessmentInfo.ContactID;
        //       this.InsertAct.ActivityNumber = this.InsertAct.ActivityNumber;
        //        this.InsertAct.ftime = "101010";
        //        this.InsertAct.ttime = "141516";
        //        this.InsertAct.dchnl = "10";
        //       this.InsertAct.sorg = "O 50000002";
        //       this.InsertAct.erpid = this.AssessmentInfo.EmployeeCode;
        //        this.InsertAct.sofc = "SOFF1001";
        //        this.InsertAct.div = "20";
        //        this.InsertAct.date = (<HTMLInputElement>document.getElementById("date")).value; //2019-08-22
        //        this.InsertAct.QueOne = "1";
        //        this.InsertAct.QueTwo = "2";
        //        this.InsertAct.QueThree = "3";
        //        this.InsertAct.QueFour = "";
        //       this.InsertAct.AnsFour = "";
        //       this.InsertAct.ptype = "YTBA";
        //        this.CreateInSAPLeadActivityService.PostCreateInSAPLeadActivity(this.InsertAct).then((response => {
        //            if (response.data.Result != null) {
   
        //             //   $("#myAlert").modal("show");
        //              //  $("#act-btn-loader").hide(); 
        //                this.HideShow();
        //                this.popupMessage("Activity created Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
        //                //$("#myModalAddNew").hide();
        //                $('#myModalAddNew').click();
        //                this.FillGrid();

        //            }

        //            else {

        //               // $("#ass-btn-loader1").hide();
        //              //  $("#myAlert").modal("show");
        //                this.HideShow();
        //                this.popupMessage("Activity Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
        //            }

        //        }));
        //    }
           
        //}

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

        SubmitOpportunity(): void {
           
        }

        Close(): void {
            location.href = "/#!/LeadAssessmentList";
        }

        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
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


        
    }
    class DeliveryScheduleComponentController implements ng.IComponentOptions {
        static Name: string = "deliveryschedulecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = DeliveryScheduleController;
            this.templateUrl = "/Scripts/App/DeliverySchedule/Template/DeliverySchedule.html";
        }
    }
    app.AddComponent(DeliveryScheduleComponentController.Name, new DeliveryScheduleComponentController());


}




