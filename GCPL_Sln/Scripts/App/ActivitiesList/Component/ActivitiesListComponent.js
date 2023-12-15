var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ActivityMaster = GCPL.Model.InsertActModel;
            var CustomerDetails = GCPL.Model.LeadCustomerListModel;
            var CustomerContactDetails = GCPL.Model.EditContact;
            var ActivitiesListController = /** @class */ (function () {
                function ActivitiesListController(_Listservice, _ActSAPListService, _EditService, _InsertService, _UserActivityService, _ModeActivityService, _LeadActivityStatusDDservice, _LeadActivityPurposeDDservice, _LeadActivityLocationDDservice, _IActivityType, _CustomerSapAutofill, _CustomerInfoService, _LeadCustomerDetails1, _ContactInfoService, _CreateInSAPActivityService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.ActivityList = null;
                    this.alert = null;
                    this.EditActivites = null;
                    this.InsertAct = null;
                    this.ActivitySearch = null;
                    this.UserID = null;
                    this.UserInfo = null;
                    this.LCustomer = null;
                    this.Contactinfo = null;
                    this.ModeActivityDropDown = null;
                    this.ActivityTypeDropDown = null;
                    this.LeadActivityStatusDD = null;
                    this.LeadActivityPurposeDD = null;
                    this.LeadActivityLocationDD = null;
                    this.CustDetails = null;
                    this.EditContact = null;
                    this.ActivitySAPSearch = null;
                    this.lat = null;
                    this.lng = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
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
                    this.InsertAct = new ActivityMaster();
                    this.ActivitySearch = Array();
                    this.ActivitySAPSearch = Array();
                    this.LCustomer = new Array();
                    this.Contactinfo = new Array();
                    this.Cookie = _cookieStore;
                    this.CustDetails = new CustomerDetails();
                    this.EditContact = new CustomerContactDetails();
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                ActivitiesListController.prototype.$onInit = function () {
                    var date = new Date();
                    var currentMonth = date.getMonth();
                    var currentDate = date.getDate();
                    var currentYear = date.getFullYear();
                    var d = new Date();
                    d.setDate(d.getDate() - 2);
                    $("#date").datepicker({
                        dateFormat: 'yy-mm-dd', changeMonth: true,
                        changeYear: true,
                        onSelect: this.ActDate,
                        minDate: d
                    });
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $("#customer-contact-detail").hide();
                    $("#Activity-Against").hide();
                    $("#ddlLetterCoo").hide();
                    this.Init();
                };
                //Page Load Define Values//
                ActivitiesListController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    $("#EditContact").hide();
                    this.ActivityTypeDropDown = this.ActivityTypeservice.Find().then((function (response) {
                        _this.ActivityTypeDropDown = _this.ActivityTypeservice.GetActivityType(response.data.Result);
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
                    var that = this;
                    $("#txtCustomerName").autocomplete({
                        //  source:['1a0','anjali','archana'],
                        source: function (request, res) {
                            that.CustomerSapAutofill.FilterAutoComplete(request).then((function (response) {
                                var data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.CustomerName,
                                        value: item.CustomerName,
                                        id: item.CustomerID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            // Don't populate input field with selected value (pxid)
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
                    //this.getLocation();
                    //this.SearchActList(this.NoOfRds);
                };
                //getLocation() {
                //    if (navigator.geolocation) {
                //        //navigator.geolocation.getCurrentPosition((position: Position) => {
                //        //    if (position) {
                //        //        console.log("Latitude: " + position.coords.latitude +
                //        //            "Longitude: " + position.coords.longitude);
                //        //        this.lat = position.coords.latitude;
                //        //        this.lng = position.coords.longitude;
                //        //        console.log("Latitude: " + this.lat);
                //        //        console.log("Longitude: " + this.lng);
                //        //    }
                //        //},
                //        //    (error: PositionError) => console.log(error));
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
                ActivitiesListController.prototype.ActDate = function (e) {
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
                ActivitiesListController.prototype.DateChange = function () {
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
                ActivitiesListController.prototype.ActivityUser = function () {
                    var _this = this;
                    var data = this.UserID;
                    this.UserActivityService.Find(data).then((function (response) {
                        _this.UserInfo = _this.UserActivityService.GetUserActivity(response.data.Result);
                        console.log(_this.UserInfo);
                    }));
                };
                ActivitiesListController.prototype.Search = function (data) {
                    var _this = this;
                    debugger;
                    this.CustomerInfoService.Find(data).then((function (response) {
                        _this.CustDetails = _this.CustomerInfoService.GetLeadCustomerInfo(response.data.Result);
                        _this.ShowFirstTime();
                        _this.ContactDetail();
                    }));
                };
                ActivitiesListController.prototype.ShowFirstTime = function () {
                    var _this = this;
                    this.LeadCustomerDetails1.Find(this.CustDetails).then((function (response) {
                        _this.LCustomer = _this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                    }));
                    $("#existingCustomerList").show();
                };
                ActivitiesListController.prototype.ContactDetail = function () {
                    var _this = this;
                    $("#existingContactList").show();
                    this.Contactinfo = this.ContactInfoService.Find(this.CustDetails.CustomerID).then((function (response) {
                        _this.Contactinfo = _this.ContactInfoService.GetLeadContactInfo(response.data.Result);
                        _this.InsertAct.SAPID = _this.Contactinfo.BusinessPartnerNo;
                        _this.InsertAct.ContactID = _this.Contactinfo.ContactID;
                    }));
                };
                ActivitiesListController.prototype.SubmitActivity = function () {
                    var _this = this;
                    debugger;
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
                                this.popupMessage("Please  Select Activity Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
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
                            else if (this.InsertAct.note == undefined || this.InsertAct.note == null || this.InsertAct.note == "") {
                                this.HideShow();
                                this.popupMessage("Please  Select Activity Notes", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $("#myAlert").modal("show");
                                $("#ass-btn-loader1").hide();
                            }
                            else if (this.IsValidNote(this.InsertAct.note).Result == "False") {
                                $("#errorclose").show();
                                $("#close").hide();
                                this.popupMessage("Special charactors are Not allowed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $("#myAlert").modal("show");
                                $("#ass-btn-loader1").hide();
                            }
                            else {
                                if ($("#ddlStatus").val() == "1") {
                                    //this.InsertAct.ActivityStatus = "P";
                                    this.InsertAct.ActivityStatus = "1";
                                }
                                else if ($("#ddlStatus").val() == "2") {
                                    //this.InsertAct.ActivityStatus = "R";
                                    this.InsertAct.ActivityStatus = "2";
                                }
                                else {
                                    //this.InsertAct.ActivityStatus = "C";
                                    this.InsertAct.ActivityStatus = "3";
                                }
                                this.InsertAct.ptype = "YTBA";
                                this.InsertAct.agnst = "";
                                this.InsertAct.ltter = "";
                                this.Contactinfo.ContactID = $('#messageCheckbox:checked').val();
                                this.InsertAct.UserID = this.UserID;
                                //this.InsertAct.CustomerID = this.CustDetails.CustomerID;
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
                                this.InsertAct.reftyp = this.InsertAct.purid;
                                this.InsertAct.refid = "";
                                this.InsertAct.location = "";
                                this.InsertAct.lat = this.lat;
                                this.InsertAct.long = this.lng;
                                this.InsertAct.date = document.getElementById("date").value; //2019-08-22    
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
                                    debugger;
                                    console.log(this.InsertAct);
                                    this.CreateInSAPActivityService.PostCreateInSAPActivity(this.InsertAct).then((function (response) {
                                        if (response.data.Result != null) {
                                            $("#errorclose").hide();
                                            $("#close").show();
                                            $("#ass-btn-loader1").hide();
                                            _this.popupMessage("Activity No. " + response.data.Result + " saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                            _this.SearchActList(_this.NoOfRds);
                                            //$("#myModalAddNew").hide();
                                            $('#myModalAddNew').click();
                                            //this.FillGrid();
                                        }
                                        else {
                                            $("#errorclose").show();
                                            $("#close").hide();
                                            $("#ass-btn-loader1").hide();
                                            // this.HideShow();
                                            _this.popupMessage("Activity Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
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
                                this.popupMessage("Please  Select Activity Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
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
                            else if (this.InsertAct.note == undefined || this.InsertAct.note == null || this.InsertAct.note == "") {
                                this.HideShow();
                                this.popupMessage("Please  write Activity Notes", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $("#myAlert").modal("show");
                                $("#ass-btn-loader1").hide();
                            }
                            else if (this.IsValidNote(this.InsertAct.note).Result == "False") {
                                $("#errorclose").show();
                                $("#close").hide();
                                this.popupMessage("Special charactors are Not allowed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $("#myAlert").modal("show");
                                $("#ass-btn-loader1").hide();
                            }
                            else {
                                if ($("#ddlStatus").val() == "1") {
                                    //this.InsertAct.ActivityStatus = "P";
                                    this.InsertAct.ActivityStatus = "1";
                                }
                                else if ($("#ddlStatus").val() == "2") {
                                    //this.InsertAct.ActivityStatus = "R";
                                    this.InsertAct.ActivityStatus = "2";
                                }
                                else {
                                    //this.InsertAct.ActivityStatus = "C";
                                    this.InsertAct.ActivityStatus = "3";
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
                                this.InsertAct.reftyp = this.InsertAct.purid;
                                this.InsertAct.refid = "";
                                this.InsertAct.location = "";
                                this.InsertAct.ContactID = "";
                                this.InsertAct.lat = this.lat;
                                this.InsertAct.long = this.lng;
                                this.InsertAct.date = document.getElementById("date").value; //2019-08-22    
                                debugger;
                                console.log(this.InsertAct);
                                this.CreateInSAPActivityService.PostCreateInSAPActivity(this.InsertAct).then((function (response) {
                                    if (response.data.Result != null) {
                                        $("#errorclose").hide();
                                        $("#close").show();
                                        $("#ass-btn-loader1").hide();
                                        _this.popupMessage("Activity No. " + response.data.Result + " saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                        _this.SearchActList(_this.NoOfRds);
                                        //$("#myModalAddNew").hide();
                                        $('#myModalAddNew').click();
                                        //this.FillGrid();
                                    }
                                    else {
                                        $("#errorclose").show();
                                        $("#close").hide();
                                        $("#ass-btn-loader1").hide();
                                        // this.HideShow();
                                        _this.popupMessage("Activity Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                    }
                                }));
                            }
                        }
                    }
                };
                ActivitiesListController.prototype.SearchActList = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    $('#search-btn-loader').show();
                    this.ActivitySearch.UserID = this.UserID;
                    this.ActivityList = this.Listservice.Find(this.ActivitySearch).then((function (response) {
                        _this.ActivityList = _this.Listservice.GetUserActList(response.data.Result);
                        $('#search-btn-loader').hide();
                        _this.ActivityList.forEach(function (value, key) {
                            that.incre = parseInt(key) + 20;
                        });
                        console.log(_this.ActivityList);
                        _this.maxPages = (that.incre / that.numRecords);
                        _this.ShowBack = false;
                        _this.ShowNext = that.maxPages > 1 ? true : false;
                        _this.shownItems = _this.ActivityList.slice(0, that.numRecords);
                    }));
                };
                ActivitiesListController.prototype.ActivitySAPList = function () {
                    var _this = this;
                    $('#search-btn-loader').show();
                    this.ActivitySAPSearch.UserID = this.UserID;
                    this.ActSAPListService.Find(this.ActivitySAPSearch).then((function (response) {
                        _this.ActivityList = _this.Listservice.Find(_this.ActivitySearch).then((function (response) {
                            _this.ActivityList = _this.Listservice.GetUserActList(response.data.Result);
                            $('#search-btn-loader').hide();
                        }));
                    }));
                };
                ActivitiesListController.prototype.ContactInformation = function (data) {
                    if (this.Contactinfo.length != 0) {
                        this.BusinessPartnerNoGlobal = data;
                    }
                    else {
                        this.BusinessPartnerNoGlobal = "";
                        this.Contactinfo = new Array();
                    }
                };
                ActivitiesListController.prototype.Add = function () {
                    $(".editactivity").prop("disabled", false);
                    $("#customer-contact-detail").hide();
                    $("#Activity-Against").hide();
                    $("#ddlLetterCoo").hide();
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
                    $("#ActivityType").val("");
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
                    document.getElementById("date").innerHTML = y1 + "-" + currentMonth + "-" + d1;
                    $('#date').val(y1 + "-" + currentMonth + "-" + d1);
                };
                ActivitiesListController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                ActivitiesListController.prototype.SalesBuisness = function () {
                    debugger;
                    if (this.InsertAct.ptype == 1) {
                        $("#customer-contact-detail").show();
                        $("#existingContactList").show();
                        $("#ContactList").show();
                        $("#ddlActivityLetter").hide();
                        $("#EditContact").hide();
                    }
                    else {
                        debugger;
                        $("#customer-contact-detail").hide();
                        $("#Activity-Against").show();
                        $("#ddlActivityLetter").show();
                        $("#existingContactList").hide();
                        this.Contactinfo = new Array();
                        this.CustDetails = new CustomerDetails();
                        this.InsertAct.CustomerID = "";
                        this.InsertAct.custid = "";
                        this.CustDetails.CustomerID = "";
                    }
                };
                ActivitiesListController.prototype.ActivityAgainst = function () {
                    if (this.InsertAct.agnst == 4) {
                        $("#ddlLetterCoo").show();
                    }
                    else {
                        $("#ddlLetterCoo").hide();
                    }
                };
                ActivitiesListController.prototype.Edit = function (data) {
                    var _this = this;
                    $(".editactivity").prop("disabled", true);
                    $("#EditContact").show();
                    $("#ContactList").hide();
                    var d = new Date();
                    var c = new Date($("#date").val());
                    if (c > d) {
                        $("#ddlStatus").prop("disabled", true);
                    }
                    else {
                        $("#ddlStatus").prop("disabled", false);
                    }
                    this.EditService.Find(data).then((function (response) {
                        debugger;
                        _this.EditActivites = _this.EditService.GetEdit(response.data.Result);
                        if (_this.EditActivites.ptype == "YTBA") {
                            _this.EditActivites.ptype = '1';
                            $("#customer-contact-detail").show();
                            $("#ddlActivityLetter").hide();
                        }
                        if (_this.EditActivites.ptype == "YTEA") {
                            _this.EditActivites.ptype = '4';
                            $("#customer-contact-detail").hide();
                            $("#Activity-Against").show();
                            $("#ddlActivityLetter").show();
                            _this.Contactinfo = new Array();
                            _this.CustDetails = new CustomerDetails();
                        }
                        if (_this.EditActivites.ActivityStatus = "Pending") {
                            _this.EditActivites.ActivityStatus = '1';
                        }
                        else if (_this.EditActivites.ActivityStatus = "Rejected") {
                            _this.EditActivites.ActivityStatus = '2';
                        }
                        else {
                            _this.EditActivites.ActivityStatus = '3';
                        }
                        if (_this.EditActivites.agnst == "4") {
                            $("#ddlLetterCoo").show();
                            _this.InsertAct.ltter = _this.EditActivites.ltter;
                        }
                        else {
                            $("#ddlLetterCoo").hide();
                        }
                        debugger;
                        $('#date').val(_this.EditActivites.date);
                        $("myModalAddNew").show();
                        _this.CustDetails.CustomerID = _this.EditActivites.CustomerID;
                        _this.InsertAct.ContactID = _this.EditActivites.ContactID;
                        _this.InsertAct.CustomerID = _this.EditActivites.CustomerID;
                        document.getElementById("txtCustomerName").value = _this.EditActivites.CompanyName;
                        _this.CustDetails.BusinessPartnerNo = _this.EditActivites.CustomerSAPID;
                        _this.CustDetails.MobileNo = _this.EditActivites.CustomerMobileNo;
                        _this.EditContact.ContactID = _this.EditActivites.ContactID;
                        _this.EditContact.ContactName = _this.EditActivites.ContactName;
                        _this.EditContact.ContactMobileNo = _this.EditActivites.ContactMobileNo;
                        _this.EditContact.ContactSAPID = _this.EditActivites.ContactSAPID;
                        _this.EditContact.FOP = _this.EditActivites.FOP;
                        _this.InsertAct.actid = _this.EditActivites.actid;
                        _this.InsertAct.ptype = _this.EditActivites.ptype;
                        _this.InsertAct.cate = _this.EditActivites.cate;
                        _this.InsertAct.loc = _this.EditActivites.loc;
                        _this.InsertAct.ActivityStatus = _this.EditActivites.ActivityStatus;
                        _this.InsertAct.purid = _this.EditActivites.purid;
                        _this.InsertAct.agnst = _this.EditActivites.agnst;
                        _this.InsertAct.ltter = _this.EditActivites.ltter;
                        _this.InsertAct.note = _this.EditActivites.note;
                        _this.InsertAct.date = _this.EditActivites.date;
                        _this.InsertAct.conid = _this.EditContact.ContactSAPID;
                        console.log("this.InsertAct111111", _this.InsertAct);
                    }));
                };
                ActivitiesListController.prototype.Clear = function () {
                    this.ActivitySearch.ActivityNumber = null;
                };
                ActivitiesListController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                ActivitiesListController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                ActivitiesListController.prototype.IsValidNote = function (value) {
                    debugger;
                    var re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
                    if (value != "") {
                        if (!re.test(value)) {
                            return { Result: "False", popupMessage: 'Special charactors are Not allowed' };
                        }
                        else {
                            return { Result: "True", popupMessage: 'Success' };
                        }
                    }
                };
                ActivitiesListController.prototype.Refresh = function () {
                    this.SearchActList(this.NoOfRds);
                };
                ActivitiesListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ActivityList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                ActivitiesListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ActivityList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                ActivitiesListController.$inject = ["ActListService", "ActSAPListService", "EditService", "InsertActService", "UserActivityService",
                    "ModeActivityService", "LeadActivityStatusDDservice", "LeadActivityPurposeDDservice",
                    "LeadActivityLocationDDservice", "ActivityType", "CustomerSapIdAutoFillService", "LeadCustomerDetailsService",
                    "LeadCustomerGetDetails1Service", "LeadContactDetailsService", "CreateInSAPActivityService", "$cookieStore"];
                return ActivitiesListController;
            }());
            var ActivitiesListComponentController = /** @class */ (function () {
                function ActivitiesListComponentController() {
                    this.controller = ActivitiesListController;
                    this.templateUrl = "/Scripts/App/ActivitiesList/Template/ActivitiesList.html";
                }
                ActivitiesListComponentController.Name = "activitieslistcomponent";
                return ActivitiesListComponentController;
            }());
            app.AddComponent(ActivitiesListComponentController.Name, new ActivitiesListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ActivitiesListComponent.js.map