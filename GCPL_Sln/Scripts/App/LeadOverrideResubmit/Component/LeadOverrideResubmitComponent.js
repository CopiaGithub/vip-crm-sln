var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadOverrideInsert = GCPL.Model.UpdateLeadOverrideModel;
            var Search = GCPL.Model.RegionCheckModel;
            var SalesAreaSearch = GCPL.Model.CheckSalesAreaModel;
            var SearchRefUser = GCPL.Model.SearchRefUserModel;
            var LeadOverrideResubmitController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadOverrideResubmitController(_EditService, _ReasonForLeadDDService, _LeadStatusForCloserDDService, _SalesOfficeService, _CountryService, _StateService, _DistrictService, _RegionService, _IndustrialSegmentService, _DepartmentService, _DesignationService, _LeadTypeService, _CategoryService, _DivisionPService, _ProductService, _ModelService, _PurchaseTimlineDDService, _ChannelDDService, _LeadSourceDDService, _LeadCategoryService, _SalesAreaService, _InsertService, _CheckRegionService, _CheckSalesAreaService, _ProjectNameService, $location, _cookieStore, _CampaignDDService, _getAutoUser) {
                    this.$location = $location;
                    this._cookieStore = _cookieStore;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.LeadID = null;
                    this.LeadReasonDD = null;
                    this.LeadStatusCloserDD = null;
                    this.SalesOfficeDropDown = null;
                    this.CountryDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.RegionDropDown = null;
                    this.IndustrialSegmentDropDown = null;
                    this.DepartmentDropDown = null;
                    this.DesignationDropDown = null;
                    this.AddConCountryDropDown = null;
                    this.AddConStateDropDown = null;
                    this.AddConDistrictDropDown = null;
                    this.LeadTypeDropDown = null;
                    this.CategoryDropDown = null;
                    this.DivisionDropDownP = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.ChannelDD = null;
                    this.LeadSourcedd = null;
                    this.PurchaseTimlinedd = null;
                    this.LeadCategoryDropDown = null;
                    this.SalesAreaDD = null;
                    this.InsertLeadOverride = null;
                    this.EditLeadOverride = null;
                    this.CheckRegion = null;
                    this.SearchRegion = null;
                    this.SalesAreaDropDown = null;
                    this.SearchUser = null;
                    this.SearchSalesArea = null;
                    this.GetSalesArea = null;
                    this.Campaigndd = null;
                    this.UserID = null;
                    this.RoleID = null;
                    this.LeadStatusID = null;
                    this.ProjectNameDD = null;
                    this.Cookie = null;
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
                    this.ProjectNameService = _ProjectNameService;
                    this.SearchUser = new SearchRefUser();
                    this.getAutoUser = _getAutoUser;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                LeadOverrideResubmitController.prototype.$onInit = function () {
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $('#search-btn-loader').hide();
                    $("#close").hide();
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                };
                //Page Load Define Values//
                LeadOverrideResubmitController.prototype.Init = function () {
                    var _this = this;
                    debugger;
                    if (this.RoleID == "47") {
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
                    else {
                        $("#txtstatus").prop("disabled", false);
                        $("#txtChannel").prop("disabled", true);
                        $("#ddlleadsource").prop("disabled", true);
                        $("#ddlcampaign").prop("disabled", true);
                        $("#txtUserName").prop("disabled", true);
                    }
                    var that = this;
                    $('#Campaignfield').hide();
                    $('#UserNamefield').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    debugger;
                    this.LeadReasonDD = this.ReasonForLeadDDService.Find().then((function (response) {
                        _this.LeadReasonDD = _this.ReasonForLeadDDService.GetReason(response.data.Result);
                    }));
                    debugger;
                    this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.SalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.CountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.CountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.RegionDropDown = this.RegionService.Find().then((function (response) {
                        _this.RegionDropDown = _this.RegionService.GetRegion(response.data.Result);
                    }));
                    this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((function (response) {
                        _this.IndustrialSegmentDropDown = _this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);
                    }));
                    this.DepartmentDropDown = this.DepartmentService.Find().then((function (response) {
                        _this.DepartmentDropDown = _this.DepartmentService.GetDepartmentName(response.data.Result);
                    }));
                    this.DesignationDropDown = this.DesignationService.Find().then((function (response) {
                        _this.DesignationDropDown = _this.DesignationService.GetDesignationName(response.data.Result);
                    }));
                    this.AddConCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.AddConCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((function (response) {
                        _this.PurchaseTimlinedd = _this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
                    }));
                    this.ChannelDD = this.ChannelDDService.Find().then((function (response) {
                        _this.ChannelDD = _this.ChannelDDService.GetChannelDDnew(response.data.Result);
                    }));
                    this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((function (response) {
                        _this.LeadCategoryDropDown = _this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
                    }));
                    this.SalesAreaDropDown = this.SalesAreaService.Find().then((function (response) {
                        _this.SalesAreaDropDown = _this.SalesAreaService.GetSalesAreaName(response.data.Result);
                    }));
                    //var LeadStatus = this.InsertLeadOverride.LeadStatusID;
                    this.LeadStatusCloserDD = this.LeadStatusForCloserDDService.Find(this.LeadID).then((function (response) {
                        _this.LeadStatusCloserDD = _this.LeadStatusForCloserDDService.GetLeadCloser(response.data.Result);
                        //this.InsertLeadOverride.LeadStatusID = LeadStatus
                    }));
                    this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((function (response) {
                        _this.ProjectNameDD = _this.ProjectNameService.GetProjectNameDD(response.data.Result);
                    }));
                    if (this.LeadID != undefined || this.LeadID != null || this.LeadID != "") {
                        this.Edit(this.LeadID);
                    }
                    //else {
                    //    this.Edit(this.LeadID);
                    //}
                    $("#txtUserName").autocomplete({
                        source: function (request, res) {
                            that.getAutoUser.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoUser.GetAutoUser(response.data.Result);
                                res($.map(data, function (item, index) {
                                    debugger;
                                    return {
                                        label: item.UserName,
                                        value: item.UserName,
                                        id: item.UserID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertLeadOverride.RefUserID = ui.item.id;
                            that.InsertLeadOverride.RefUserName = ui.item.value;
                        },
                        change: function () {
                        }
                    });
                };
                LeadOverrideResubmitController.prototype.State = function (data) {
                    var _this = this;
                    this.StateDropDown = this.StateService.Find(this.InsertLeadOverride.CountryID).then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.District = function (data) {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.InsertLeadOverride.StateID).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.AddConState = function (data) {
                    var _this = this;
                    this.AddConStateDropDown = this.StateService.Find(this.InsertLeadOverride.ContactCountryID).then((function (response) {
                        _this.AddConStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.AddConDistrict = function (data) {
                    var _this = this;
                    this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertLeadOverride.ContactStateID).then((function (response) {
                        _this.AddConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.Division = function (data) {
                    var _this = this;
                    this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLeadOverride.CategoryID).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.Product = function (data) {
                    var _this = this;
                    debugger;
                    this.ProductDropDown = this.ProductService.Find(this.InsertLeadOverride.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.Model = function (data) {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.InsertLeadOverride.ProductID).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetModelDD(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.LeadSource = function (data) {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLeadOverride.ChannelID).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.LeadStatuscloser = function (data) {
                    var _this = this;
                    this.LeadStatusCloserDD = this.LeadStatusForCloserDDService.Find(this.LeadID).then((function (response) {
                        _this.LeadStatusCloserDD = _this.LeadStatusForCloserDDService.GetLeadCloser(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.Campaign = function () {
                    var _this = this;
                    this.Campaigndd = this.CampaignDDService.Find(this.InsertLeadOverride.LeadSourceID).then((function (response) {
                        _this.Campaigndd = _this.CampaignDDService.GetCampaignDetails(response.data.Result);
                    }));
                };
                LeadOverrideResubmitController.prototype.LeadSourceChange = function () {
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
                };
                LeadOverrideResubmitController.prototype.LeadReason = function () {
                    var _this = this;
                    debugger;
                    $("#txtreason").prop('disabled', true);
                    if (this.InsertLeadOverride.LeadStatusID == "8") {
                        $("#txtreason").prop('disabled', false);
                        this.LeadReasonDD = this.ReasonForLeadDDService.Find().then((function (response) {
                            _this.LeadReasonDD = _this.ReasonForLeadDDService.GetReason(response.data.Result);
                            _this.InsertLeadOverride.LeadReason = _this.LeadReasonDD[0].ID.toString();
                        }));
                    }
                    else {
                        $("#txtreason").prop('disabled', true);
                        this.InsertLeadOverride.LeadReason = "";
                    }
                };
                LeadOverrideResubmitController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                LeadOverrideResubmitController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                LeadOverrideResubmitController.prototype.Submit = function (data) {
                    var _this = this;
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
                        this.InsertService.PostLeadOverride(this.InsertLeadOverride).then((function (response) {
                            console.log(_this.InsertLeadOverride);
                            debugger;
                            //if (response.data.Result != null) {
                            if (response.data.Result > 0) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("LeadID ID - " + _this.LeadID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.InsertLeadOverride = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("LeadID ID - " + _this.LeadID + " is unable to Change.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                LeadOverrideResubmitController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertLeadOverride = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        // this.LeadStatusID = this.InsertLeadOverride.LeadStatusID;
                        var status = _this.InsertLeadOverride.LeadStatusID;
                        _this.LeadStatusCloserDD = _this.LeadStatusForCloserDDService.Find(_this.LeadID).then((function (response) {
                            _this.LeadStatusCloserDD = _this.LeadStatusForCloserDDService.GetLeadCloser(response.data.Result);
                            _this.InsertLeadOverride.LeadStatusID = status; //this.LeadStatusCloserDD[0].LeadStatusID.toString();
                        }));
                        var reason = _this.InsertLeadOverride.LeadReason;
                        _this.LeadReasonDD = _this.ReasonForLeadDDService.Find().then((function (response) {
                            _this.LeadReasonDD = _this.ReasonForLeadDDService.GetReason(response.data.Result);
                            _this.InsertLeadOverride.LeadReason = reason;
                        }));
                        // $('#txtreason').val(this.InsertLeadOverride.LeadReason);
                        // $('#txtcomments').val(this.InsertLeadOverride.Comments);
                        $('#txtCompanyName').val(_this.InsertLeadOverride.CompanyName);
                        $('#txtmobileno').val(_this.InsertLeadOverride.MobileNo);
                        $('#txtphno').val(_this.InsertLeadOverride.PhoneNo);
                        $('#txtsalesoffice').val(_this.InsertLeadOverride.SalesOfficeID);
                        $('#txtemail').val(_this.InsertLeadOverride.Email);
                        $('#txtfax').val(_this.InsertLeadOverride.Fax);
                        $('#txtadd1').val(_this.InsertLeadOverride.Address1);
                        $('#txtadd2').val(_this.InsertLeadOverride.Address2);
                        $('#txtcountry').val(_this.InsertLeadOverride.CountryID);
                        _this.State(_this.InsertLeadOverride.CountryID);
                        $('#txtstate').val(_this.InsertLeadOverride.StateID);
                        _this.District(_this.InsertLeadOverride.StateID);
                        $('#txtdistrict').val(_this.InsertLeadOverride.DistrictID);
                        _this.SearchRegion.StateID = _this.InsertLeadOverride.StateID;
                        _this.SearchRegion.DistrictID = _this.InsertLeadOverride.DistrictID;
                        _this.InsertLeadOverride.RegionID = "";
                        debugger;
                        if (_this.SearchRegion.StateID != undefined || _this.SearchRegion.StateID != null || _this.SearchRegion.StateID != "") {
                            _this.CheckRegion = _this.CheckRegionService.Find(_this.SearchRegion).then((function (response) {
                                _this.CheckRegion = _this.CheckRegionService.GetRegion(response.data.Result);
                                _this.RegionDropDown[0].RegionID = _this.CheckRegion[0].RegionID;
                            }));
                        }
                        else {
                        }
                        $('#txtcity').val(_this.InsertLeadOverride.City);
                        $('#txtPincode').val(_this.InsertLeadOverride.PinCode);
                        $('#txtindustrysegment').val(_this.InsertLeadOverride.IndustrialSegmentID);
                        $('#txtContactName').val(_this.InsertLeadOverride.ContactName);
                        $('#txtcontactemail').val(_this.InsertLeadOverride.ContactEmail);
                        $('#txtContactMobNo').val(_this.InsertLeadOverride.ContactMobileNo);
                        $('#txtContactPhno').val(_this.InsertLeadOverride.ContactPhoneNo);
                        $('#txtdesignation').val(_this.InsertLeadOverride.Designation);
                        $('#txtdept').val(_this.InsertLeadOverride.DepartmentID);
                        $('#txtFop').val(_this.InsertLeadOverride.FOPID);
                        $('#txtaddress').val(_this.InsertLeadOverride.Address);
                        $('#txtconcountry').val(_this.InsertLeadOverride.ContactCountryID);
                        _this.AddConState(_this.InsertLeadOverride.ContactCountryID);
                        $('#txtconstate').val(_this.InsertLeadOverride.ContactStateID);
                        _this.AddConDistrict(_this.InsertLeadOverride.ContactCountryID);
                        $('#txtcondistrict').val(_this.InsertLeadOverride.ContactDistrictID);
                        $('#txtconcity').val(_this.InsertLeadOverride.ContactCity);
                        $('#txtconpincode').val(_this.InsertLeadOverride.PostalCode);
                        $('#txtleadtype').val(_this.InsertLeadOverride.LeadType);
                        $('#txtcategory').val(_this.InsertLeadOverride.CategoryID);
                        _this.Division(_this.InsertLeadOverride.CategoryID);
                        $('#txtdivision').val(_this.InsertLeadOverride.DivisionID);
                        _this.Product(_this.InsertLeadOverride.DivisionID);
                        $('#txtproduct').val(_this.InsertLeadOverride.ProductID);
                        _this.Model(_this.InsertLeadOverride.ProductID);
                        $('#txtmodelno').val(_this.InsertLeadOverride.ModelID);
                        $('#txtqty').val(_this.InsertLeadOverride.Quantity);
                        $('#txttitle').val(_this.InsertLeadOverride.PurchaseTimelineID);
                        $('#txtleadcategory').val(_this.InsertLeadOverride.LeadCategoryID);
                        $('#ddlprojectname').val(_this.InsertLeadOverride.ProjectID);
                        //$('#txtsalesarea').val(this.InsertLeadOverride.SalesAreaID);
                        //this.SalesArea(this.InsertLeadOverride.SalesAreaID);
                        debugger;
                        _this.SearchSalesArea.CountryID = _this.InsertLeadOverride.CountryID;
                        _this.SearchSalesArea.LeadCategoryID = _this.InsertLeadOverride.LeadCategoryID;
                        _this.SearchSalesArea.CategoryID = _this.InsertLeadOverride.CategoryID;
                        //this.GetSalesArea = this.CheckSalesAreaService.Find(this.SearchSalesArea).then((response => {
                        //    this.GetSalesArea = this.CheckSalesAreaService.GetSales(response.data.Result);
                        //    debugger;
                        //    this.InsertLeadOverride.SalesAreaID = this.GetSalesArea[0].toString();
                        //}));
                        _this.LeadSource(_this.InsertLeadOverride.ChannelID);
                        _this.LeadSourceChange();
                        if (_this.InsertLeadOverride.LeadSourceID == "2") {
                            _this.InsertLeadOverride.RefUserID = _this.InsertLeadOverride.RefUserID;
                            _this.InsertLeadOverride.RefUserName = _this.InsertLeadOverride.RefUserName;
                            _this.SearchUser.RefUserID = _this.InsertLeadOverride.RefUserID;
                            _this.SearchUser.RefUserName = _this.InsertLeadOverride.RefUserName;
                        }
                        else if (_this.InsertLeadOverride.LeadSourceID == "10" || _this.InsertLeadOverride.LeadSourceID == "24") {
                            _this.InsertLeadOverride.CampaignID = _this.InsertLeadOverride.CampaignID;
                        }
                        //$('#txtChannel').val(this.InsertLeadOverride.ChannelID);
                        //this.LeadSource(this.InsertLeadOverride.ChannelID);
                        //$('#ddlleadsource').val(this.InsertLeadOverride.LeadSourceID);
                        //$('#txtCommnets').val(this.InsertLeadOverride.Comments);
                    }));
                };
                LeadOverrideResubmitController.prototype.Reset = function () {
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
                };
                LeadOverrideResubmitController.prototype.Close = function () {
                    location.href = "#!/LeadOverride";
                };
                LeadOverrideResubmitController.$inject = ["LeadOverrideEditService", "ReasonForLeadDDService", "LeadStatusForCloserDDService", "SalesOfficeService", "CountryService", "StateddService", "DistrictddService", "RegionddService", "IndustrialSegmentService", "DepartmentService", "DesignationService", "LeadTypeddService",
                    "CategoryddService", "DivisionDDPService", "ProductddService", "ModelDDService", "PurchaseTimelineService", "ChannelDDService", "LeadSourceDetailsService", "LeadCategoryDDService", "SalesAreaService", "UpdateLeadOverrideService", "CheckRegionService", "CheckSalesAreaDataService", "ProjectNameService", "$location", "$cookieStore", "CampaignDetailsService", "UserCodeAutoFillService"];
                return LeadOverrideResubmitController;
            }());
            var LeadOverrideResubmitComponentController = /** @class */ (function () {
                function LeadOverrideResubmitComponentController() {
                    this.controller = LeadOverrideResubmitController;
                    this.templateUrl = "/Scripts/App/LeadOverrideResubmit/Template/LeadOverrideResubmit.html";
                }
                LeadOverrideResubmitComponentController.Name = "leadoverrideresubmitcomponent";
                return LeadOverrideResubmitComponentController;
            }());
            app.AddComponent(LeadOverrideResubmitComponentController.Name, new LeadOverrideResubmitComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadOverrideResubmitComponent.js.map