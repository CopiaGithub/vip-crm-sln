var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadAssess = GCPL.Model.LeadAssessmentModel;
            var ValidRefrredEmployee = GCPL.Model.ReferredEmpModel;
            var ViewAssessment = GCPL.Model.LeadAssessmentInfoModel;
            var CrtAssessmt1 = GCPL.Model.CrtAssessmtModel;
            var UpdateLeadDataM = GCPL.Model.UpdateLeadDataModel;
            var ReturnModel1 = GCPL.Model.ReturnModel;
            var InsertLeadActivity1 = GCPL.Model.InsertLeadActivity;
            var Activity = GCPL.Model.Activity;
            var SearchRefUser = GCPL.Model.SearchRefUserModel;
            var LeadToOpp = GCPL.Model.InsertSubmitModel;
            var DeliveryScheduleController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DeliveryScheduleController(_LeadStatusService, _IndustryDivisionService, _IndustrialSegmentService, _LeadTypeService, _LeadCategoryService, _PurchaseTimlineDDService, _CategoryService, _DivisionPService, _ProductService, _ModelService, _ChannelDDService, _LeadSourceDDService, _CampaignDDService, _ValidReferredEmpService, _leadassessmentService, _ContactInfoService, _CrtAssessmtService, _LeadActivityListService, _LeadQueAnsService, _ItemListService, _ModeActivityService, _LeadActivityStatusDDservice, _LeadActivityPurposeDDservice, _LeadActivityLocationDDservice, _InsertLeadAssessment, _InsertLeadQuestions, _Ans1Service, _Ans2Service, _Ans3Service, _LeadOpportunity, _SalesAreaService, _EditActivityList, _LeadReturnService, _CreateInSAPLeadActivityService, _SubmitService, _ProjectNameService, _DisqualificationReasonDDService, _LeadStageDDService, _LeadStatusDDService, _UpdateLeadDataService, $location, _cookieStore) {
                    this.$location = $location;
                    this._cookieStore = _cookieStore;
                    this.LeadActivitylist = null;
                    this.LeadQueAnsDetails = null;
                    this.LeadItemList = null;
                    this.LeadAssessment = null;
                    this.toggleStatus = null;
                    this.UserID = null;
                    this.Ans1DD = null;
                    this.Ans2DD = null;
                    this.Ans3DD = null;
                    this.EditTarget = null;
                    this.LeadStatusDropDown = null;
                    this.IndustryDivisionDropDown = null;
                    this.IndustrialSegmentDropDown = null;
                    this.LeadTypeDropDown = null;
                    this.LeadCategoryDropDown = null;
                    this.PurchaseTimlinedd = null;
                    this.CategoryDropDown = null;
                    this.DivisionDropDownP = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.ChannelDD = null;
                    this.ModeActivityDropDown = null;
                    this.LeadActivityStatusDD = null;
                    this.LeadActivityPurposeDD = null;
                    this.LeadActivityLocationDD = null;
                    this.LeadSourcedd = null;
                    this.Campaigndd = null;
                    this.ValidReferred = null;
                    this.AssessmentInfo = null;
                    this.ContactInfo = null;
                    this.LeadID = null;
                    this.ModelID = null;
                    this.ProductID = null;
                    this.ModelNo = null;
                    this.ProductD = null;
                    this.InsertAssessment = null;
                    this.CrtAssessmt = null;
                    this.ReturnModel = null;
                    this.InsertLeadActivity = null;
                    this.SalesAreaDropDown = null;
                    this.LeadActivitySearch = null;
                    this.SearchUser = null;
                    this.alert = null;
                    this.InsertAct = null;
                    this.SubmitData = null;
                    this.Cookie = null;
                    this.ProjectNameDD = null;
                    this.DisqualificationReasonDD = null;
                    this.StageDD = null;
                    this.LeadStatusDD = null;
                    this.lat = null;
                    this.lng = null;
                    this.UpdateLeadData = null;
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
                    this.LeadID = $location.search().LeadID;
                    this.ModelID = $location.search().Model;
                    this.ProductID = $location.search().Product;
                    this.CrtAssessmtService = _CrtAssessmtService;
                    this.Listservice = _LeadActivityListService;
                    this.QueAnsservice = _LeadQueAnsService;
                    this.ItemListservice = _ItemListService;
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
                    this.CrtAssessmt = new CrtAssessmt1();
                    this.ReturnModel = new ReturnModel1();
                    this.InsertLeadActivity = new InsertLeadActivity1();
                    this.InsertAct = new Activity();
                    this.EditService = _EditActivityList;
                    this.AssessmentInfo = new ViewAssessment();
                    this.ValidReferred = new ValidRefrredEmployee();
                    this.ValidReferred = new Array();
                    this.LeadAssessment = new LeadAssess();
                    this.ContactInfo = new Array();
                    this.SearchUser = new SearchRefUser();
                    this.SubmitData = new LeadToOpp();
                    this.UpdateLeadData = new UpdateLeadDataM();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                DeliveryScheduleController.prototype.$onInit = function () {
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
                };
                DeliveryScheduleController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                DeliveryScheduleController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                //Page Load Define Values//
                DeliveryScheduleController.prototype.Init = function () {
                    var _this = this;
                    console.log("Init_Anuja111111111");
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
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusName(response.data.Result);
                    }));
                    this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((function (response) {
                        _this.IndustryDivisionDropDown = _this.IndustryDivisionService.GetIndustryName(response.data.Result);
                    }));
                    this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((function (response) {
                        _this.IndustrialSegmentDropDown = _this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((function (response) {
                        _this.LeadCategoryDropDown = _this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
                    }));
                    this.SalesAreaDropDown = this.SalesAreaService.Find().then((function (response) {
                        _this.SalesAreaDropDown = _this.SalesAreaService.GetSalesAreaName(response.data.Result);
                    }));
                    this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((function (response) {
                        _this.PurchaseTimlinedd = _this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
                    }));
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.ChannelDD = this.ChannelDDService.Find().then((function (response) {
                        _this.ChannelDD = _this.ChannelDDService.GetChannelDDnew(response.data.Result);
                    }));
                    this.ModeActivityDropDown = this.ModeActivityService.Find().then((function (response) {
                        _this.ModeActivityDropDown = _this.ModeActivityService.GetModeActivity(response.data.Result);
                    }));
                    this.LeadActivityStatusDD = this.LeadActivityStatusDDservice.Find().then((function (response) {
                        _this.LeadActivityStatusDD = _this.LeadActivityStatusDDservice.LeadActivityStatus(response.data.Result);
                    }));
                    this.LeadActivityPurposeDD = this.LeadActivityPurposeDDservice.Find().then((function (response) {
                        _this.LeadActivityPurposeDD = _this.LeadActivityPurposeDDservice.GetLeadActivityPurpose(response.data.Result);
                    }));
                    this.LeadActivityLocationDD = this.LeadActivityLocationDDservice.Find().then((function (response) {
                        _this.LeadActivityLocationDD = _this.LeadActivityLocationDDservice.GetLeadActivityLocation(response.data.Result);
                    }));
                    this.Ans1DD = this.Ans1Service.Find().then((function (response) {
                        _this.Ans1DD = _this.Ans1Service.GetAns1(response.data.Result);
                    }));
                    this.Ans2DD = this.Ans2Service.Find().then((function (response) {
                        _this.Ans2DD = _this.Ans2Service.GetAns2(response.data.Result);
                    }));
                    this.Ans3DD = this.Ans3Service.Find().then((function (response) {
                        _this.Ans3DD = _this.Ans3Service.GetAns3(response.data.Result);
                    }));
                    this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((function (response) {
                        _this.ProjectNameDD = _this.ProjectNameService.GetProjectNameDD(response.data.Result);
                    }));
                    this.DisqualificationReasonDD = this.DisqualificationReasonDDService.Find().then((function (response) {
                        _this.DisqualificationReasonDD = _this.DisqualificationReasonDDService.GetDisqualifiedName(response.data.Result);
                    }));
                    this.StageDD = this.LeadStageDDService.Find().then((function (response) {
                        _this.StageDD = _this.LeadStageDDService.GetStage(response.data.Result);
                        // this.UpdateLeadData.SalesStage = this.StageDD[0].ID.toString();
                    }));
                    this.LeadStatusDD = this.LeadStatusDDService.Find().then((function (response) {
                        _this.LeadStatusDD = _this.LeadStatusDDService.GetStage(response.data.Result);
                        // this.UpdateLeadData.SalesStage = this.StageDD[0].ID.toString();
                    }));
                    this.FillGrid();
                    this.FillGrid1();
                    this.ItemList();
                    //this.getLocation();
                };
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
                DeliveryScheduleController.prototype.OppActDate = function (e) {
                    debugger;
                    document.getElementById("date").value = e;
                    var d = new Date();
                    var c = new Date(e);
                    if (c > d) {
                        $("#ddlStatus").val(1);
                        $("#ddlStatus").prop("disabled", true);
                    }
                    else {
                        $("#ddlStatus").prop("disabled", false);
                    }
                };
                DeliveryScheduleController.prototype.selectExpectedDate = function (e) {
                    document.getElementById("ExpDate").value = e;
                };
                DeliveryScheduleController.prototype.Division = function (data) {
                    var _this = this;
                    this.DivisionDropDownP = this.DivisionPService.Find(this.LeadAssessment.CategoryID).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                };
                DeliveryScheduleController.prototype.Product = function (data) {
                    var _this = this;
                    this.ProductDropDown = this.ProductService.Find(data).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                DeliveryScheduleController.prototype.Model = function (data) {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.LeadAssessment.ProductID).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetModelDD(response.data.Result);
                    }));
                };
                DeliveryScheduleController.prototype.LeadSource = function (data) {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.LeadAssessment.ChannelID).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                DeliveryScheduleController.prototype.Campaign = function () {
                    var _this = this;
                    debugger;
                    this.Campaigndd = this.CampaignDDService.Find(this.LeadAssessment.LeadSourceID).then((function (response) {
                        _this.Campaigndd = _this.CampaignDDService.GetCampaignDetails(response.data.Result);
                    }));
                };
                DeliveryScheduleController.prototype.Assessment = function (data) {
                    var _this = this;
                    this.LeadAssessmentService.Find(data).then((function (response) {
                        _this.AssessmentInfo = _this.LeadAssessmentService.GetLeadAssessment(response.data.Result);
                        console.log(_this.AssessmentInfo, "AssessmentInfo11111");
                        _this.AssessmentInfo.CategoryID = _this.AssessmentInfo.CategoryID;
                        _this.AssessmentInfo.ProjectID = _this.AssessmentInfo.ProjectID;
                        _this.Division(_this.AssessmentInfo.CategoryID);
                        _this.AssessmentInfo.DivisionID = _this.AssessmentInfo.DivisionID;
                        _this.Product(_this.AssessmentInfo.DivisionID);
                        _this.AssessmentInfo.ProductID = _this.AssessmentInfo.ProductID;
                        _this.Model(_this.AssessmentInfo.ProductID);
                        _this.AssessmentInfo.ModelID = _this.AssessmentInfo.ModelID;
                        _this.LeadSource(_this.AssessmentInfo.ChannelID);
                        _this.LeadSourceChange();
                        _this.InsertAct.erpid = _this.AssessmentInfo.EmployeeCode;
                        $("#txtUserName").val(_this.AssessmentInfo.RefUser);
                        if (_this.AssessmentInfo.LeadSourceID == "2") {
                            _this.AssessmentInfo.RefUserID = _this.AssessmentInfo.RefUserID;
                            _this.AssessmentInfo.RefUserName = _this.AssessmentInfo.RefUser;
                        }
                        else if (_this.AssessmentInfo.LeadSourceID == "10" || _this.AssessmentInfo.LeadSourceID == "24") {
                            _this.AssessmentInfo.CampaignID = _this.AssessmentInfo.CampaignNameID;
                        }
                        if (_this.AssessmentInfo.LeadStatusId == "10") {
                            $("#assessment-submit").prop("disabled", false);
                        }
                        else if (_this.AssessmentInfo.LeadStatusId == "13") {
                            $("#assessment-submit").prop("disabled", false);
                        }
                        else if (_this.AssessmentInfo.LeadStatusId == "14") {
                            $("#assessment-submit").prop("disabled", false);
                        }
                        else if (_this.AssessmentInfo.LeadStatusId == "15") {
                            $("#assessment-submit").prop("disabled", false);
                        }
                        else {
                            $("#assessment-submit").prop("disabled", false);
                        }
                    }));
                };
                DeliveryScheduleController.prototype.MeetCustomer = function () {
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
                };
                DeliveryScheduleController.prototype.ContactDetail = function () {
                    var _this = this;
                    this.ContactInfo = this.ContactInfoService.Find(this.LeadAssessment.CustomerID).then((function (response) {
                        _this.ContactInfo = _this.ContactInfoService.GetLeadContactInfo(response.data.Result);
                    }));
                };
                DeliveryScheduleController.prototype.LeadSourceChange = function () {
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
                };
                DeliveryScheduleController.prototype.Add = function () {
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
                    document.getElementById("date").innerHTML = y1 + "-" + currentMonth + "-" + d1;
                    $('#date').val(y1 + "-" + currentMonth + "-" + d1);
                };
                DeliveryScheduleController.prototype.DateChange = function () {
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
                };
                DeliveryScheduleController.prototype.UpdateLeadStage = function () {
                    var _this = this;
                    this.UpdateLeadData.userID = this.UserID;
                    this.UpdateLeadData.leadID = this.LeadID;
                    this.UpdateLeadData.salesStage = this.AssessmentInfo.SalesStage;
                    this.UpdateLeadData.status = this.AssessmentInfo.Status;
                    this.UpdateLeadData.notes = this.AssessmentInfo.Notes;
                    this.UpdateLeadData.reason = "";
                    this.UpdateLeadData.description = this.AssessmentInfo.Description;
                    if (this.UpdateLeadData.SalesStage == this.AssessmentInfo.SalesStage) {
                        $("#pg-load").show();
                        this.UpdateLeadDataService.PostUpdateLeadData(this.UpdateLeadData).then(function (response) {
                            $("#pg-load").hide();
                            if (response.data.Result == 1) {
                                $("#errorclose").hide();
                                $("#close").show();
                                $("#btncloseOk").hide();
                                _this.popupMessage("Lead Updated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            }
                            else {
                                $("#errorclose").show();
                                $("#close").hide();
                                $("#btncloseOk").hide();
                                _this.popupMessage("Error Occured.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        });
                    }
                    else {
                        $("#pg-load").show();
                        this.UpdateLeadDataService.PostUpdateLeadData(this.UpdateLeadData).then(function (response) {
                            $("#pg-load").hide();
                            if (response.data.Result == 1) {
                                $("#errorclose").hide();
                                $("#close").show();
                                $("#btncloseOk").hide();
                                _this.popupMessage("Lead Updated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            }
                            else {
                                $("#errorclose").show();
                                $("#close").hide();
                                $("#btncloseOk").hide();
                                _this.popupMessage("Error Occured.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        });
                    }
                };
                DeliveryScheduleController.prototype.SubmitReturn = function () {
                    var _this = this;
                    if (this.CrtAssessmt.Comments == undefined || this.CrtAssessmt.Comments == null || this.CrtAssessmt.Comments == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Comment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.ReturnModel.Comments = this.CrtAssessmt.Comments;
                        this.ReturnModel.UserID = this.UserID;
                        this.ReturnModel.LeadID = this.LeadID;
                        this.LeadReturnService.PostReturn(this.ReturnModel).then((function (response) {
                            console.log(_this.CrtAssessmt);
                            if (response.data.Result != null) {
                                //this.IsDisplayModalPopup = true;
                                //$("#ass-btn-loader").hide();
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Lead Return Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.Init();
                                //$("#myModalAddNew").hide();
                                $('#myModalAddNew').click();
                                _this.CrtAssessmt = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                DeliveryScheduleController.prototype.SubmitCrtAssessmt = function () {
                    var _this = this;
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
                        this.CrtAssessmtService.PostCrtAssessmt(this.CrtAssessmt).then((function (response) {
                            console.log(_this.CrtAssessmt);
                            if (response.data.Result != null) {
                                //this.IsDisplayModalPopup = true;
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Assessment saved Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.Init();
                                //$("#myModalAddNew").hide();
                                $('#myModalAddNew').click();
                                console.log("lkhuubufuctffuvfg6t wefffw" + response.data.Result);
                                _this.CrtAssessmt = null;
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
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
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
                DeliveryScheduleController.prototype.SubmitActivity = function () {
                    var _this = this;
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
                        }
                        else if ($("#ddlStatus").val() == "2") {
                            this.InsertAct.ActivityStatus = "2";
                        }
                        else {
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
                        this.InsertAct.StartDate = document.getElementById("date").value; //2019-08-22
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
                        this.InsertLeadAssessment.PostInsertLeadActivity(this.InsertAct).then((function (response) {
                            debugger;
                            if (response.data.Result != null) {
                                //   $("#myAlert").modal("show");
                                //  $("#act-btn-loader").hide(); 
                                _this.HideShow();
                                _this.popupMessage("Activity created Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                //$("#myModalAddNew").hide();
                                $('#myModalAddNew').click();
                                _this.FillGrid();
                            }
                            else {
                                // $("#ass-btn-loader1").hide();
                                //  $("#myAlert").modal("show");
                                _this.HideShow();
                                _this.popupMessage("Activity Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                DeliveryScheduleController.prototype.SubmitQuestions = function () {
                    var _this = this;
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
                        this.InsertLeadQuestions.PostInsertLeadQuestions(this.InsertAct).then((function (response) {
                            if (response.data.Result != null) {
                                //   $("#myAlert").modal("show");
                                //  $("#act-btn-loader").hide(); 
                                _this.HideShow();
                                _this.popupMessage("Questions Submitted Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                //$("#myModalAddNew").hide();
                                $('#myModalAddQue').click();
                                _this.FillGrid1();
                            }
                            else {
                                // $("#ass-btn-loader1").hide();
                                //  $("#myAlert").modal("show");
                                _this.HideShow();
                                _this.popupMessage("Questions Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                DeliveryScheduleController.prototype.SubmitOpportunity = function () {
                };
                DeliveryScheduleController.prototype.Close = function () {
                    location.href = "/#!/LeadAssessmentList";
                };
                DeliveryScheduleController.prototype.RefreshActivityList = function () {
                    this.FillGrid();
                };
                DeliveryScheduleController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                DeliveryScheduleController.prototype.FillGrid = function () {
                    var _this = this;
                    this.LeadActivitylist = this.Listservice.Find(this.LeadID).then((function (response) {
                        _this.LeadActivitylist = _this.Listservice.GetLeadActivityList(response.data.Result);
                        for (var i = 0; i < _this.LeadActivitylist.length; i++) {
                            if (_this.LeadActivitylist[i].Status == "Completed" || _this.LeadActivitylist[i].Status == "Rejected") {
                                _this.toggleStatus = true;
                            }
                            else {
                                _this.toggleStatus = false;
                                break;
                            }
                        }
                    }));
                };
                DeliveryScheduleController.prototype.FillGrid1 = function () {
                    var _this = this;
                    this.LeadQueAnsDetails = this.QueAnsservice.Find(this.LeadID).then((function (response) {
                        _this.LeadQueAnsDetails = _this.QueAnsservice.GetLeadQueAns(response.data.Result);
                        console.log("this.LeadQueAnsDetails", _this.LeadQueAnsDetails);
                        for (var i = 0; i < _this.LeadQueAnsDetails.length; i++) {
                            if (_this.LeadQueAnsDetails[i].Question != "" || _this.LeadQueAnsDetails[i].Question != null) {
                                console.log("this.LeadQueAnsDetails", _this.LeadQueAnsDetails);
                                _this.toggleStatus = true;
                            }
                            else {
                                _this.toggleStatus = false;
                                break;
                            }
                        }
                    }));
                };
                DeliveryScheduleController.prototype.ItemList = function () {
                    var _this = this;
                    this.LeadItemList = this.ItemListservice.Find(this.LeadID).then((function (response) {
                        _this.LeadItemList = _this.ItemListservice.GetLeadItemList(response.data.Result);
                        console.log("this.LeadItemList11111111", _this.LeadItemList);
                        for (var i = 0; i < _this.LeadItemList.length; i++) {
                            if (_this.LeadItemList[i].Question != "" || _this.LeadItemList[i].Question != null) {
                                console.log("this.LeadItemList", _this.LeadItemList);
                                _this.toggleStatus = true;
                            }
                            else {
                                _this.toggleStatus = false;
                                break;
                            }
                        }
                    }));
                };
                DeliveryScheduleController.prototype.Edit = function (data) {
                    var _this = this;
                    var d = new Date();
                    var c = new Date($("#date").val());
                    if (c > d) {
                        $("#ddlStatus").prop("disabled", true);
                    }
                    else {
                        $("#ddlStatus").prop("disabled", false);
                    }
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertAct = _this.EditService.GetEdit(response.data.Result);
                        if (_this.InsertAct.ActivityStatus = "Pending") {
                            _this.InsertAct.ActivityStatus = '1';
                        }
                        else if (_this.InsertAct.ActivityStatus = "Rejected") {
                            _this.InsertAct.ActivityStatus = '2';
                        }
                        else {
                            _this.InsertAct.ActivityStatus = '3';
                        }
                        $('#date').val(_this.InsertAct.date);
                        $("myModalAddNew").show();
                    }));
                };
                DeliveryScheduleController.$inject = ["LeadStatusddService", "IndustryDivisionService", "IndustrialSegmentService", "LeadTypeddService", "LeadCategoryDDService", "PurchaseTimelineService", "CategoryddService", "DivisionDDPService", "ProductddService",
                    "ModelDDService", "ChannelDDService", "LeadSourceDetailsService", "CampaignDetailsService", "ValidateReferredEmployeeService", "LeadAssessmentService", "LeadContactDetailsService", "CrtAssessmtServiceService",
                    "LeadActivityListService", "LeadQueAnsService", "LeadItemListService", "ModeActivityService", "LeadActivityStatusDDservice", "LeadActivityPurposeDDservice", "LeadActivityLocationDDservice", "InsertLeadActivityService", "InsertLeadQuestionsService", "QAns1Service", "QAns2Service", "QAns3Service",
                    "SalesAreaService", "EditActivityList", "LeadReturnService", "CreateInSAPLeadActivityService", "InsertLeadToOppSAPService", "ProjectNameService", "DisqualificationReasonDDService", "LeadStageDDService", "LeadStatusDDService", "UpdateLeadDataService", "$location", "$cookieStore"];
                return DeliveryScheduleController;
            }());
            var DeliveryScheduleComponentController = /** @class */ (function () {
                function DeliveryScheduleComponentController() {
                    this.controller = DeliveryScheduleController;
                    this.templateUrl = "/Scripts/App/DeliverySchedule/Template/DeliverySchedule.html";
                }
                DeliveryScheduleComponentController.Name = "deliveryschedulecomponent";
                return DeliveryScheduleComponentController;
            }());
            app.AddComponent(DeliveryScheduleComponentController.Name, new DeliveryScheduleComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DeliveryScheduleComponent.js.map