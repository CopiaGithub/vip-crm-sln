namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import Actlist = GCPL.Model.ActlistModel;
    import Search = GCPL.Model.ActSearchModel;
    import SearchSAP = GCPL.Model.ActSAPSearchModel;
    import ViewUserInfo = GCPL.Model.LeadAssessmentInfoModel;
    import EditAct = GCPL.Model.EditActlistModel;
    import ActivityMaster = GCPL.Model.InsertActModel;
    import CustomerDetails = GCPL.Model.LeadCustomerListModel;
    import CustomerContactDetails = GCPL.Model.EditContact;
    import contactinfo = GCPL.Model.ContactDetailsListModel;
    import CalDelgDDlModel = GCPL.Model.GetCalDeligDDlModel;

    interface ICalendarPageController {
        CalActivityList: Array<Model.CalActlistModel>;
        ActivitySAPList(): void;
        EditActivites: Array<Model.EditActlistModel>;
        InsertAct: ActivityMaster;
        UserInfo: ViewUserInfo;
        ModeActivityDropDown: Array<Model.ModeActivityModel>;
        LeadActivityStatusDD: Array<Model.LeadActivityStatusModel>;
        LeadActivityPurposeDD: Array<Model.LeadActivityPurposeModel>;
        LeadActivityLocationDD: Array<Model.LeadActivityLocationModel>;
        CalDDlModel: CalDelgDDlModel;
    }
    class CalendarPageController implements ICalendarPageController {
        Name = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        CalendarEvtArray = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        CalActivityList = null;
        alert = null;
        EditActivites = null;
        InsertAct = null;
        CalActivitySearch = null;
        UserID = null;
        RoleID = null;
        UserName = null;
        UserInfo = null;
        LCustomer = null;
        Contactinfo = null;
        ModeActivityDropDown = null;
        ActivityTypeDropDown = null;
        LeadActivityStatusDD = null;
        LeadActivityPurposeDD = null;
        LeadActivityLocationDD = null;
        CustDetails = null;
        EditContact = null;
        ActivitySAPSearch = null;
        BusinessPartnerNoGlobal: any;
        DeligationDropDown = null;
        CalDDlModel = null;
        CalendarCount = 0;

        private Cookie: any = null;
        private UserActivityService: Service.IUserActivityService;
        private CalActListService: Service.ICalActListService;
        private EditService: Service.IEditService;
        private InsertService: Service.IInsertActService;
        private ModeActivityService: Service.IModeActivityService;
        private LeadActivityStatusDDservice: Service.ILeadActivityStatusDDservice;
        private LeadActivityPurposeDDservice: Service.ILeadActivityPurposeDDservice;
        private LeadActivityLocationDDservice: Service.ILeadActivityLocationDDservice;
        private ActivityTypeservice: Service.IActivityType;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private CustomerInfoService: Service.ILeadCustomerDetailsService;
        private LeadCustomerDetails1: Service.ILeadCustomerGetDetails1Service;
        private ContactInfoService: Service.ILeadContactDetailsService;
        private CreateInSAPActivityService: Service.ICreateInSAPActivityService;
        private ActSAPListService: Service.IActSAPListService;
        private DeligationTypeservice: Service.IDeligationTypeservice;

        static $inject = ["CalActListService", "ActSAPListService", "EditService", "InsertActService", "UserActivityService",
            "ModeActivityService", "LeadActivityStatusDDservice", "LeadActivityPurposeDDservice",
            "LeadActivityLocationDDservice", "ActivityType", "CustomerSapIdAutoFillService", "LeadCustomerDetailsService",
            "LeadCustomerGetDetails1Service", "LeadContactDetailsService", "CreateInSAPActivityService", "DeligationTypeservice", "$cookieStore"];



        constructor(_CalActListService: Service.ICalActListService, _ActSAPListService: Service.IActSAPListService, _EditService: Service.IEditService, _InsertService: Service.IInsertActService,
            _UserActivityService: Service.IUserActivityService,
            _ModeActivityService: Service.IModeActivityService, _LeadActivityStatusDDservice: Service.ILeadActivityStatusDDservice,
            _LeadActivityPurposeDDservice: Service.ILeadActivityPurposeDDservice,
            _LeadActivityLocationDDservice: Service.ILeadActivityLocationDDservice, _IActivityType: Service.IActivityType, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService,
            _CustomerInfoService: Service.ILeadCustomerDetailsService, _LeadCustomerDetails1: Service.ILeadCustomerGetDetails1Service,
            _ContactInfoService: Service.ILeadContactDetailsService, _CreateInSAPActivityService: Service.ICreateInSAPActivityService, _DeligationTypeservice: Service.IDeligationTypeservice, private _cookieStore: any) {

            this.CalActListService = _CalActListService;
            this.ActSAPListService = _ActSAPListService;
            this.EditService = _EditService;
            this.InsertService = _InsertService;
            this.UserActivityService = _UserActivityService;
            this.ModeActivityService = _ModeActivityService;
            this.LeadActivityStatusDDservice = _LeadActivityStatusDDservice;
            this.LeadActivityPurposeDDservice = _LeadActivityPurposeDDservice;
            this.LeadActivityLocationDDservice = _LeadActivityLocationDDservice;
            this.ActivityTypeservice = _IActivityType;
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.CustomerInfoService = _CustomerInfoService;
            this.LeadCustomerDetails1 = _LeadCustomerDetails1;
            this.ContactInfoService = _ContactInfoService;
            this.CreateInSAPActivityService = _CreateInSAPActivityService;
            this.DeligationTypeservice = _DeligationTypeservice;
            this.InsertAct = new ActivityMaster();
            this.CalActivitySearch = Array<GCPL.Model.CalActSearchModel>();
            this.ActivitySAPSearch = Array<GCPL.Model.ActSAPSearchModel>();
            this.LCustomer = new Array<GCPL.Model.GetCustomerModel>();
            this.Contactinfo = new Array<GCPL.Model.ContactDetailsListModel>();
            this.Cookie = _cookieStore;
            this.CustDetails = new CustomerDetails();
            this.EditContact = new CustomerContactDetails();
            this.CalDDlModel = new CalDelgDDlModel();
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.UserName = this.Cookie.get('UserInfo')['UserName'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
        }

        $onInit() {
            this.Init();

            var date = new Date();
            var currentMonth = date.getMonth();
            var currentDate = date.getDate();
            var currentYear = date.getFullYear();

            $("#date").datepicker({
                dateFormat: 'yy-mm-dd', changeMonth: true,
                changeYear: true,
                onSelect: this.ActDate,
                minDate: new Date(currentYear, currentMonth, currentDate)
            });

            //$("#start-tme").clockpicker({
            //    placement: 'bottom',
            //    align: 'left',
            //    donetext: 'Done',
            //    onSelect: this.selectStartTime
            //});
            //$("#end-tme").clockpicker({
            //    placement: 'bottom',
            //    align: 'left',
            //    donetext: 'Done',
            //    onSelect: this.selectEndTime
            //});

            //selectStartTime(e) {
            //    (<HTMLInputElement>document.getElementById("start-tme")).value = e;
            //}
            //selectEndTime(e) {
            //    (<HTMLInputElement>document.getElementById("end-tme")).value = e;
            //}

            $('#search-btn-loader').hide();
            $("#errorclose").hide();
            $("#close").hide();
            $("#customer-contact-detail").hide();
            $("#Activity-Against").hide();
            $("#ddlLetterCoo").hide();
        }

        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            $("#EditContact").hide();
            this.Name = this.UserName;
            this.SearchActList();

            this.ActivityTypeDropDown = this.ActivityTypeservice.Find().then((response => {
                this.ActivityTypeDropDown = this.ActivityTypeservice.GetActivityType(response.data.Result);
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

            this.DeligationDropDown = this.DeligationTypeservice.Find(this.UserID).then((response => {
                this.DeligationDropDown = this.DeligationTypeservice.GetCalDeldDDl(response.data.Result);
            }));

            let that = this;
            $("#txtCustomerName").autocomplete({
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
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.InsertAct.CustomerID = ui.item.id;
                    that.Search(ui.item.id);
                },
                change: function () {

                }
            });
           
            if (this.UserID != null || this.UserID != "" || this.UserID != undefined) {

                this.ActivityUser();
            }
        }

        ActDate(e) {
            (<HTMLInputElement>document.getElementById("date")).value = e;
            var d = new Date();
            var c = new Date(e)
            if (c > d) {
                $("#ddlStatus").val(1);
                $("#ddlStatus").prop("disabled", true);
                (<HTMLInputElement>document.getElementById("ddlStatus")).value = "1";
            }
            else {
                $("#ddlStatus").prop("disabled", false);
            }
        }

        DateChange(): void {
            
            var n1 = new Date();
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();
            console.log(($("#date").val()));
            
            if ($("#date").val() < d1) {
                $("#ddlStatus").prop("disabled", true);
            }
            else {
                $("#ddlStatus").prop("disabled", false);
            }
        }

        ChangeDelgUser(): void {
            this.SearchActList();
            var abd = $("#ddlDelgDDl option:selected").text();
            if (abd == 'Select') {
                this.Name = this.UserName;
            }
            else {
                this.Name = abd;
            }
        }

        ActivityUser(): void {
            
            var data = this.UserID;
            this.UserActivityService.Find(data).then((response => {
                
                this.UserInfo = this.UserActivityService.GetUserActivity(response.data.Result);


            }));

        }

        public Search(data: any): void {
            
            this.CustomerInfoService.Find(data).then((response => {
                this.CustDetails = this.CustomerInfoService.GetLeadCustomerInfo(response.data.Result);

                this.ShowFirstTime();
                this.ContactDetail();
            }));

        }

        ShowFirstTime() {
            this.LeadCustomerDetails1.Find(this.CustDetails).then((response => {
                this.LCustomer = this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
            }
            ));
            $("#existingCustomerList").show();
        }

        ContactDetail(): void {
            $("#existingContactList").show();
            this.Contactinfo = this.ContactInfoService.Find(this.CustDetails.CustomerID).then((response => {
                this.Contactinfo = this.ContactInfoService.GetLeadContactInfo(response.data.Result);

                this.InsertAct.SAPID = this.Contactinfo.BusinessPartnerNo;
                this.InsertAct.ContactID = this.Contactinfo.ContactID;

            }));
        }

        SubmitActivity(): void {
            $("#ass-btn-loader1").show();

            if (this.InsertAct.ptype == undefined || this.InsertAct.ptype == null || this.InsertAct.ptype == "") {
                this.HideShow();
                this.popupMessage("Please Select Activity Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                $("#myAlert").modal("show");
                $("#ass-btn-loader1").hide();
            }
            else {
                if ($("#ddlacttype").val() == "1") {
                    
                    if (this.InsertAct.CustomerID == undefined || this.InsertAct.CustomerID == null || this.InsertAct.CustomerID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();
                    }

                    else if (this.InsertAct.cate == undefined || this.InsertAct.cate == null || this.InsertAct.cate == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Activity Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");

                        $("#ass-btn-loader1").hide();
                    }

                    else if (this.InsertAct.ActivityStatus == undefined || this.InsertAct.ActivityStatus == null || this.InsertAct.ActivityStatus == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Activity Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();
                    }

                    else if (this.InsertAct.purid == undefined || this.InsertAct.purid == null || this.InsertAct.purid == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Activity Purpose", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();

                    }

                    else if (this.InsertAct.loc == undefined || this.InsertAct.loc == null || this.InsertAct.loc == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Activity Location", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();

                    }

                    else if (this.IsValidNote(this.InsertAct.note).Result == "False") {
                        $("#errorclose").show();
                        $("#close").hide();
                        this.popupMessage("Please write Activity Notes", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();
                    }
                    else {
                        if ($("#ddlStatus").val() == "1") {
                            this.InsertAct.ActivityStatus = "P";
                        }
                        else if ($("#ddlStatus").val() == "2") {
                            this.InsertAct.ActivityStatus = "R";
                        }
                        else {
                            this.InsertAct.ActivityStatus = "C";
                        }
                        this.InsertAct.ptype = "YTBA";
                        this.InsertAct.agnst = "";
                        this.InsertAct.ltter = "";

                        this.Contactinfo.ContactID = $('#messageCheckbox:checked').val();
                        this.InsertAct.UserID = this.UserID;
                        this.InsertAct.CustomerID = this.CustDetails.CustomerID;
                        //this.InsertAct.ContactID = this.Contactinfo.ContactID;
                        this.InsertAct.custid = this.CustDetails.BusinessPartnerNo;
                        this.InsertAct.conid = this.BusinessPartnerNoGlobal;
                        this.InsertAct.ptype = this.InsertAct.ptype;
                        this.InsertAct.erpid = this.UserInfo.EmployeeCode;
                        this.InsertAct.actid = this.InsertAct.actid;
                        this.InsertAct.ttime = "141516";
                        this.InsertAct.ftime = "101010";
                        this.InsertAct.dchnl = "10";
                        this.InsertAct.div = "20";
                        this.InsertAct.sorg = "O 50000002";
                        this.InsertAct.sofc = this.UserInfo.SalesOfficeID;
                        this.InsertAct.lat = "0";
                        this.InsertAct.reftyp = "";
                        this.InsertAct.refid = "";
                        this.InsertAct.location = "";
                        debugger;
                        this.InsertAct.date = (<HTMLInputElement>document.getElementById("date")).value; //2019-08-22    
                        if (this.Contactinfo.ContactID != "" && this.Contactinfo.ContactID != null && this.Contactinfo.ContactID != undefined) {
                            this.InsertAct.ContactID = this.Contactinfo.ContactID;
                        }
                        else {
                            this.InsertAct.ContactID = this.EditContact.ContactID;
                        }
                        if (this.InsertAct.ContactID == undefined || this.InsertAct.ContactID == null || this.InsertAct.ContactID == "") {
                            this.HideShow();
                            this.popupMessage("Please Select Contact Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            $("#myAlert").modal("show");
                            $("#ass-btn-loader1").hide();
                        }
                        else {
                            this.CreateInSAPActivityService.PostCreateInSAPActivity(this.InsertAct).then((response => {
                                if (response.data.Result != null) {
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    $("#ass-btn-loader1").hide();
                                    this.popupMessage("Activity No. " + response.data.Result + " saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                    this.SearchActList();
                                    //$("#myModalAddNew").hide();
                                    $('#myModalAddNew').click();
                                    this.Add();
                                    //this.FillGrid();

                                }

                                else {
                                    $("#errorclose").show();
                                    $("#close").hide();
                                    $("#ass-btn-loader1").hide();
                                    // this.HideShow();
                                    this.popupMessage("Activity Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                }

                            }));
                        }

                    }
                }
                else {
                    if (this.InsertAct.agnst == undefined || this.InsertAct.agnst == null || this.InsertAct.agnst == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Activity Against", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");

                        $("#ass-btn-loader1").hide();
                    }
                    else if ((this.InsertAct.agnst == "4") && (this.InsertAct.ltter == undefined || this.InsertAct.ltter == null || this.InsertAct.ltter == "")) {
                        this.HideShow();
                        this.popupMessage("Please Select Activity Letter", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");

                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.InsertAct.cate == undefined || this.InsertAct.cate == null || this.InsertAct.cate == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Activity Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");

                        $("#ass-btn-loader1").hide();
                    }

                    else if (this.InsertAct.ActivityStatus == undefined || this.InsertAct.ActivityStatus == null || this.InsertAct.ActivityStatus == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Activity Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();
                    }

                    else if (this.InsertAct.purid == undefined || this.InsertAct.purid == null || this.InsertAct.purid == "") {
                        this.HideShow();
                        this.popupMessage("Please  Select Activity Purpose", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();

                    }

                    else if (this.InsertAct.loc == undefined || this.InsertAct.loc == null || this.InsertAct.loc == "") {
                        this.HideShow();
                        this.popupMessage("Please  Select Activity Location", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();

                    }
                    //else if (this.InsertAct.note == undefined || this.InsertAct.note == null || this.InsertAct.note == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please  write Activity Notes", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //    $("#myAlert").modal("show");
                    //    $("#ass-btn-loader1").hide();

                    //}
                    else if (this.IsValidNote(this.InsertAct.note).Result == "False") {
                        $("#errorclose").show();
                        $("#close").hide();
                        this.popupMessage("Please  write Activity Notes", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#myAlert").modal("show");
                        $("#ass-btn-loader1").hide();
                    }
                    else {
                        if ($("#ddlStatus").val() == "1") {
                            this.InsertAct.ActivityStatus = "P";
                        }
                        else if ($("#ddlStatus").val() == "2") {
                            this.InsertAct.ActivityStatus = "R";
                        }
                        else {
                            this.InsertAct.ActivityStatus = "C";
                        }
                        this.InsertAct.ptype = "YTEA";
                        this.InsertAct.agnst = this.InsertAct.agnst;
                        this.InsertAct.ltter = this.InsertAct.ltter;
                        this.InsertAct.UserID = this.UserID;
                        this.InsertAct.ptype = this.InsertAct.ptype;
                        this.InsertAct.erpid = this.UserInfo.EmployeeCode;
                        this.InsertAct.actid = this.InsertAct.actid;
                        this.InsertAct.ttime = "141516";
                        this.InsertAct.ftime = "101010";
                        this.InsertAct.dchnl = "10";
                        this.InsertAct.div = "20";
                        this.InsertAct.sorg = "O 50000002";
                        this.InsertAct.sofc = this.UserInfo.SalesOfficeID;
                        this.InsertAct.lat = "0";
                        this.InsertAct.reftyp = "";
                        this.InsertAct.refid = "";
                        this.InsertAct.location = "";
                        this.InsertAct.ContactID = "";
                        debugger;
                        this.InsertAct.date = (<HTMLInputElement>document.getElementById("date")).value; //2019-08-22    

                        this.CreateInSAPActivityService.PostCreateInSAPActivity(this.InsertAct).then((response => {
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                $("#ass-btn-loader1").hide();
                                this.popupMessage("Activity No. " + response.data.Result + " saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                this.SearchActList();
                                //$("#myModalAddNew").hide();
                                $('#myModalAddNew').click();
                                this.Add();
                                //this.FillGrid();

                            }

                            else {
                                $("#errorclose").show();
                                $("#close").hide();
                                $("#ass-btn-loader1").hide();
                                // this.HideShow();
                                this.popupMessage("Activity Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                }
            }
        }

        SearchActList(): void {
            this.CalendarEvtArray = [];
            var calCount = this.CalendarCount++;
            this.CalActivitySearch.UserID = this.UserID;
            this.CalActivityList = this.CalActListService.Find(this.CalActivitySearch).then((response => {
                this.CalActivityList = this.CalActListService.GetUserActList(response.data.Result);
                for (var i = 0; i < this.CalActivityList.length; i++) {
                    this.CalendarEvtArray.push({
                        title: this.CalActivityList[i].ActivityNumber + ' - ' + this.CalActivityList[i].Status,
                        status: this.CalActivityList[i].Status,
                        start: this.CalActivityList[i].ActivityDate,
                        color: this.CalActivityList[i].color,
                        description: this.CalActivityList[i].ActivityNumber
                    });
                }
                
                var CalenderContainer = document.getElementById("calendar-container");
                var NewCalendar = document.createElement("div");
                NewCalendar.setAttribute("id", "calendar" + calCount);
                CalenderContainer.appendChild(NewCalendar);
                
                for (var i = 0; i <= calCount - 1; i++) {
                    $('#calendar' + i).hide();
                }

                $('#calendar' + calCount).fullCalendar({
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    events: this.CalendarEvtArray,
                    eventClick: (event) => {
                        this.Edit(event.description);
                        if (event.status == 'C') {
                            $("#btnSubmit").prop("disabled", true);
                        } else {
                            $("#btnSubmit").prop("disabled", false);
                        }
                        $("#myModalAddNew").modal("show");
                    },
                    dayClick: (event) => {
                        $("#btnSubmit").prop("disabled", false);
                        var TodaysDate = new Date();
                        var VerifiedDate = new Date(TodaysDate.setDate(TodaysDate.getDate() - 3));
                        var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        $("#date").val(event._d.getFullYear() + "-" + (event._d.getMonth() + 1) + "-" + event._d.getDate());
                        this.InsertAct.date = $("#date").val();
                        if (VerifiedDate <= event._d) {
                            $("#myModalAddNew").modal("show");
                        } else {
                            this.popupMessage("Past date can't create new Activity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                        $("#myModalAddNew .modal-body p").text(event.title);
                        this.Add();
                    },
                    minTime: "08:00:00", //start time
                    maxTime: "21:00:00" //end time
                })
            }));
        }

        ActivitySAPList(): void {
            $('#search-btn-loader').show();
            this.ActivitySAPSearch.UserID = this.UserID;
            this.ActSAPListService.Find(this.ActivitySAPSearch).then((response => {
                this.CalActivityList = this.CalActListService.Find(this.CalActivitySearch).then((response => {
                    this.CalActivityList = this.CalActListService.GetUserActList(response.data.Result);
                    $('#search-btn-loader').hide();
                }));
            }));

        }

        ContactInformation(data: any): void {
            if (this.Contactinfo.length != 0) {
                this.BusinessPartnerNoGlobal = data;
            }
            else {
                this.BusinessPartnerNoGlobal = "";
                this.Contactinfo = new Array<GCPL.Model.ContactDetailsListModel>();
            }
        }

        Add(): void {
            
            $(".editactivity").prop("disabled", false)
            $("#customer-contact-detail").hide();
            $("#Activity-Against").hide();
            $("#ddlLetterCoo").hide();
            $("#ddlStatus").prop("disabled", false);
            this.InsertAct.conid = "";
            this.InsertAct.custid = "";
            this.InsertAct.ptype = "";
            this.InsertAct.actid = "";
            this.InsertAct.ActivityStatus = "1";
            this.InsertAct.cate = "";
            this.InsertAct.purid = "";
            this.InsertAct.loc = "";
            this.InsertAct.note = "";
            this.CustDetails.MobileNo = "";
            this.CustDetails.BusinessPartnerNo = "";
            this.InsertAct.agnst = "";
            this.InsertAct.ltter = "";
            this.Contactinfo.ContactName = "";
            this.Contactinfo.MobileNo = "";
            this.Contactinfo.ContactID = "";
            this.Contactinfo.BusinessPartnerNo = "";
            this.Contactinfo.FOP = "";
            (<HTMLInputElement>document.getElementById("ddlStatus")).value = "1";
            $("#ddlmode").val("");
            $("#ddlPurpose").val("");
            $("#ddlLocation").val("");
            $("#ddlacttype").val("");
            $("#txtnotes").val("");
            $("#txtCustomerName").val("");
            $("#ContactName").val("");
            $("#BusinessPartnerNo").val("");
            $("#MobileNo").val("");
            $('#messageCheckbox').prop("checked", false);
            var n1 = new Date();
            var currentMonth = n1.getMonth() + 1;
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();
            //(<HTMLInputElement>document.getElementById("date")).innerHTML = y1 + "-" + currentMonth + "-" + d1;
            //$('#date').val(y1 + "-" + currentMonth + "-" + d1);
        }

        popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
            $("#message-text").html(Message);
            $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
            $(ShowImg).show();
            $(HideImg).hide();
            $("#succeess-message-box").modal("show");
        }

        SalesBuisness(): void {
            if (this.InsertAct.ptype == 1) {
                $("#customer-contact-detail").show();
                $("#existingContactList").show();
                $("#ContactList").show()
                $("#ddlActivityLetter").hide();
                $("#EditContact").hide();
            }
            else {
                $("#customer-contact-detail").hide();
                $("#Activity-Against").show();
                $("#ddlActivityLetter").show();
                $("#existingContactList").hide();
                this.Contactinfo = new Array<GCPL.Model.ContactDetailsListModel>();
                this.CustDetails = new CustomerDetails();
                this.InsertAct.CustomerID = "";
                this.InsertAct.custid = "";
                this.CustDetails.CustomerID = "";
            }
        }

        ActivityAgainst(): void {
            if (this.InsertAct.agnst == 4) {
                $("#ddlLetterCoo").show();
            }
            else {

                $("#ddlLetterCoo").hide();
            }

        }

        Edit(data: any): void {
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

                if (this.EditActivites.ptype == "YTBA") {
                    this.EditActivites.ptype = '1';
                    $("#customer-contact-detail").show();
                    $("#ddlActivityLetter").hide();
                }
                if (this.EditActivites.ptype == "YTEA") {
                    this.EditActivites.ptype = '4';
                    $("#customer-contact-detail").hide();
                    $("#Activity-Against").show();
                    $("#ddlActivityLetter").show();
                    this.Contactinfo = new Array<GCPL.Model.ContactDetailsListModel>();
                    this.CustDetails = new CustomerDetails();
                }

                if (this.EditActivites.ActivityStatus == "Pending") {
                    this.EditActivites.ActivityStatus = '1';
                }
                else if (this.EditActivites.ActivityStatus == "Rejected") {
                    this.EditActivites.ActivityStatus = '2';
                }
                else {
                    this.EditActivites.ActivityStatus = '3';
                }

                if (this.EditActivites.agnst == "4") {
                    $("#ddlLetterCoo").show();
                    this.InsertAct.ltter = this.EditActivites.ltter;
                }
                else {
                    $("#ddlLetterCoo").hide();
                }

                
                $('#date').val(this.EditActivites.date);

                $("myModalAddNew").show();

                this.CustDetails.CustomerID = this.EditActivites.CustomerID;
                this.InsertAct.ContactID = this.EditActivites.ContactID;
                this.InsertAct.CustomerID = this.EditActivites.CustomerID;
                (<HTMLInputElement>document.getElementById("txtCustomerName")).value = this.EditActivites.CompanyName;
                this.CustDetails.BusinessPartnerNo = this.EditActivites.CustomerSAPID;
                this.CustDetails.MobileNo = this.EditActivites.CustomerMobileNo;
                this.EditContact.ContactID = this.EditActivites.ContactID;
                this.EditContact.ContactName = this.EditActivites.ContactName;
                this.EditContact.ContactMobileNo = this.EditActivites.ContactMobileNo;
                this.EditContact.ContactSAPID = this.EditActivites.ContactSAPID;
                this.EditContact.FOP = this.EditActivites.FOP;
                this.InsertAct.actid = this.EditActivites.actid;
                this.InsertAct.ptype = this.EditActivites.ptype;
                this.InsertAct.cate = this.EditActivites.cate;
                this.InsertAct.loc = this.EditActivites.loc;
                this.InsertAct.ActivityStatus = this.EditActivites.ActivityStatus;
                this.InsertAct.purid = this.EditActivites.purid;
                this.InsertAct.agnst = this.EditActivites.agnst;
                this.InsertAct.ltter = this.EditActivites.ltter;
                this.InsertAct.note = this.EditActivites.note;
                this.InsertAct.date = this.EditActivites.date;
                this.InsertAct.conid = this.EditContact.ContactSAPID;
                console.log(this.InsertAct);
            }));
        }

        Clear() {
            this.CalActivitySearch.ActivityNumber = null;
        }

        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }

        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }

        IsValidNote(value) {
            var re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
            if (value != "") {
                if (!re.test(value)) {
                    return { Result: "False", popupMessage: 'Special charactors are Not allowed' }
                }
                else {
                    return { Result: "True", popupMessage: 'Success' }
                }
            }
        }
    }
    class CalendarPageComponentController implements ng.IComponentOptions {
        static Name: string = "calendarpagecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CalendarPageController;
            this.templateUrl = "/Scripts/App/CalendarPage/Template/CalendarPage.html";
        }
    }
    app.AddComponent(CalendarPageComponentController.Name, new CalendarPageComponentController());

}