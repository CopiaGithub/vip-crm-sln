var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadChangeInsert = GCPL.Model.UpdateLeadChangeModel;
            var Search = GCPL.Model.RegionCheckModel;
            var SalesAreaSearch = GCPL.Model.CheckSalesAreaModel;
            var SearchRefUser = GCPL.Model.SearchRefUserModel;
            var DScheduleController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DScheduleController(_EditService, _ReasonForLeadOpenDDService, _LeadStatusForOpenDDService, _SalesOfficeService, _CountryService, _StateService, _DistrictService, _RegionService, _IndustrialSegmentService, _DepartmentService, _DesignationService, _LeadTypeService, _CategoryService, _DivisionPService, _ProductService, _ModelService, _PurchaseTimlineDDService, _ChannelDDService, _LeadSourceDDService, _LeadCategoryService, _SalesAreaService, _InsertService, _CheckRegionService, _CheckSalesAreaService, _ProjectNameService, $location, _cookieStore, _CampaignDDService, _getAutoUser, _LeadItemListService, _EditItemList, _AddToCartDsService) {
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
                    this.LeadOpenReasonDD = null;
                    this.LeadStatusOpenDD = null;
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
                    this.InsertLeadChange = null;
                    this.EditLeadChange = null;
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
                    this.LeadItemlist = null;
                    this.InsertItem = null;
                    this.Cookie = null;
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
                DScheduleController.prototype.$onInit = function () {
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
                DScheduleController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtDeliveryDate").value = e;
                };
                //Page Load Define Values//
                DScheduleController.prototype.Init = function () {
                    var _this = this;
                    debugger;
                    var n = new Date();
                    n.setDate(n.getDate() - 7);
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m = months[n.getMonth()];
                    var d = n.getDate();
                    var y = n.getFullYear();
                    document.getElementById("txtDeliveryDate").innerHTML = d + " " + m + " " + y;
                    $('#txtDeliveryDate').val(d + " " + m + " " + y);
                    document.getElementById("txtDeliveryDate").value;
                    $("#txtDeliveryDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    var that = this;
                    $('#Campaignfield').hide();
                    $('#UserNamefield').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.Find().then((function (response) {
                        _this.LeadOpenReasonDD = _this.ReasonForLeadOpenDDService.GetReason(response.data.Result);
                    }));
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
                    this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((function (response) {
                        _this.ProjectNameDD = _this.ProjectNameService.GetProjectNameDD(response.data.Result);
                    }));
                    //var LeadStatus = this.InsertLeadChange.LeadStatusID;
                    this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.Find(this.LeadID).then((function (response) {
                        _this.LeadStatusOpenDD = _this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);
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
                            that.getAutoUser.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoUser.GetAutoUser(response.data.Result);
                                res($.map(data, function (item, index) {
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
                            that.InsertLeadChange.RefUserID = ui.item.id;
                            that.InsertLeadChange.RefUserName = ui.item.value;
                        },
                        change: function () {
                        }
                    });
                };
                DScheduleController.prototype.FillGridItems = function () {
                    var _this = this;
                    this.LeadItemlist = this.ListItemservice.Find(this.LeadID).then((function (response) {
                        _this.LeadItemlist = _this.ListItemservice.GetLeadItemList(response.data.Result);
                    }));
                };
                DScheduleController.prototype.State = function (data) {
                    var _this = this;
                    this.StateDropDown = this.StateService.Find(this.InsertLeadChange.CountryID).then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                DScheduleController.prototype.District = function (data) {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.InsertLeadChange.StateID).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                DScheduleController.prototype.AddConState = function (data) {
                    var _this = this;
                    this.AddConStateDropDown = this.StateService.Find(this.InsertLeadChange.ContactCountryID).then((function (response) {
                        _this.AddConStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                DScheduleController.prototype.AddConDistrict = function (data) {
                    var _this = this;
                    this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertLeadChange.ContactStateID).then((function (response) {
                        _this.AddConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                DScheduleController.prototype.Division = function (data) {
                    var _this = this;
                    this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLeadChange.CategoryID).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                };
                DScheduleController.prototype.Product = function (data) {
                    var _this = this;
                    this.ProductDropDown = this.ProductService.Find(this.InsertLeadChange.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                DScheduleController.prototype.Model = function (data) {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.InsertLeadChange.ProductID).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetModelDD(response.data.Result);
                    }));
                };
                DScheduleController.prototype.LeadSource = function (data) {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLeadChange.ChannelID).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                DScheduleController.prototype.LeadStatusopen = function (data) {
                    var _this = this;
                    this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.Find(this.LeadID).then((function (response) {
                        _this.LeadStatusOpenDD = _this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);
                    }));
                };
                DScheduleController.prototype.Campaign = function () {
                    var _this = this;
                    this.Campaigndd = this.CampaignDDService.Find(this.InsertLeadChange.LeadSourceID).then((function (response) {
                        _this.Campaigndd = _this.CampaignDDService.GetCampaignDetails(response.data.Result);
                    }));
                };
                DScheduleController.prototype.LeadSourceChange = function () {
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
                };
                DScheduleController.prototype.LeadOpenReason = function () {
                    var _this = this;
                    $("#txtreason").prop('disabled', true);
                    if (this.InsertLeadChange.LeadStatusID == "1") {
                        $("#txtreason").prop('disabled', false);
                        this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.Find().then((function (response) {
                            _this.LeadOpenReasonDD = _this.ReasonForLeadOpenDDService.GetReason(response.data.Result);
                            _this.InsertLeadChange.LeadOpenReason = _this.LeadOpenReasonDD[0].ID.toString();
                        }));
                    }
                    else {
                        $("#txtreason").prop('disabled', true);
                        this.InsertLeadChange.LeadOpenReason = "";
                    }
                };
                DScheduleController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                DScheduleController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                DScheduleController.prototype.AddDsToCart = function (data) {
                    var _this = this;
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
                        this.AddToCartDsService.PostDeliveryScheduleToCart(this.InsertItem).then((function (response) {
                            console.log(_this.InsertItem);
                            //if (response.data.Result != null) {
                            if (response.data.Result > 0) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Delivery Schedule Successfully Added to Cart.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.InsertLeadChange = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Couldn't Add Delivery Schedule.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                DScheduleController.prototype.Submit = function (data) {
                    var _this = this;
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
                        this.InsertService.PostLeadChange(this.InsertLeadChange).then((function (response) {
                            console.log(_this.InsertLeadChange);
                            //if (response.data.Result != null) {
                            if (response.data.Result > 0) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("LeadID ID - " + _this.LeadID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.InsertLeadChange = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("LeadID ID - " + _this.LeadID + " is unable to Change.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                DScheduleController.prototype.FetchItemData = function (data) {
                    var _this = this;
                    console.log(data, "data11111");
                    this.EditItemService.Find(data).then((function (response) {
                        _this.InsertItem = _this.EditItemService.GetItemEdit(response.data.Result);
                        console.log("this.InsertItem11111", _this.InsertItem);
                        $("myModalAdd").show();
                    }));
                };
                DScheduleController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertLeadChange = _this.EditService.GetEdit(response.data.Result);
                        // this.LeadStatusID = this.InsertLeadChange.LeadStatusID;
                        var status = _this.InsertLeadChange.LeadStatusID;
                        _this.LeadStatusOpenDD = _this.LeadStatusForOpenDDService.Find(_this.LeadID).then((function (response) {
                            _this.LeadStatusOpenDD = _this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);
                            _this.InsertLeadChange.LeadStatusID = status; //this.LeadStatusOpenDD[0].LeadStatusID.toString();
                        }));
                        var reason = _this.InsertLeadChange.LeadOpenReason;
                        _this.LeadOpenReasonDD = _this.ReasonForLeadOpenDDService.Find().then((function (response) {
                            _this.LeadOpenReasonDD = _this.ReasonForLeadOpenDDService.GetReason(response.data.Result);
                            _this.InsertLeadChange.LeadOpenReason = reason;
                        }));
                        debugger;
                        if (_this.InsertLeadChange.LeadStatusID == "8" || _this.InsertLeadChange.LeadStatusID == "9") {
                            $("#txtstatus").prop("disabled", false);
                        }
                        else {
                            $("#txtstatus").prop("disabled", true);
                        }
                        // $('#txtreason').val(this.InsertLeadChange.LeadOpenReason);
                        // $('#txtcomments').val(this.InsertLeadChange.Comments);
                        $('#txtCompanyName').val(_this.InsertLeadChange.CompanyName);
                        $('#txtmobileno').val(_this.InsertLeadChange.MobileNo);
                        $('#txtphno').val(_this.InsertLeadChange.PhoneNo);
                        $('#txtsalesoffice').val(_this.InsertLeadChange.SalesOfficeID);
                        $('#txtemail').val(_this.InsertLeadChange.Email);
                        $('#txtfax').val(_this.InsertLeadChange.Fax);
                        $('#txtadd1').val(_this.InsertLeadChange.Address1);
                        $('#txtadd2').val(_this.InsertLeadChange.Address2);
                        $('#txtcountry').val(_this.InsertLeadChange.CountryID);
                        _this.State(_this.InsertLeadChange.CountryID);
                        $('#txtstate').val(_this.InsertLeadChange.StateID);
                        _this.District(_this.InsertLeadChange.StateID);
                        $('#txtdistrict').val(_this.InsertLeadChange.DistrictID);
                        _this.SearchRegion.StateID = _this.InsertLeadChange.StateID;
                        _this.SearchRegion.DistrictID = _this.InsertLeadChange.DistrictID;
                        _this.InsertLeadChange.RegionID = "";
                        if (_this.SearchRegion.StateID != undefined || _this.SearchRegion.StateID != null || _this.SearchRegion.StateID != "") {
                            _this.CheckRegion = _this.CheckRegionService.Find(_this.SearchRegion).then((function (response) {
                                _this.CheckRegion = _this.CheckRegionService.GetRegion(response.data.Result);
                                _this.RegionDropDown[0].RegionID = _this.CheckRegion[0].RegionID;
                            }));
                        }
                        else {
                        }
                        $('#txtcity').val(_this.InsertLeadChange.City);
                        $('#txtPincode').val(_this.InsertLeadChange.PinCode);
                        $('#txtindustrysegment').val(_this.InsertLeadChange.IndustrialSegmentID);
                        $('#txtContactName').val(_this.InsertLeadChange.ContactName);
                        $('#txtcontactemail').val(_this.InsertLeadChange.ContactEmail);
                        $('#txtContactMobNo').val(_this.InsertLeadChange.ContactMobileNo);
                        $('#txtContactPhno').val(_this.InsertLeadChange.ContactPhoneNo);
                        $('#txtdesignation').val(_this.InsertLeadChange.Designation);
                        $('#txtdept').val(_this.InsertLeadChange.DepartmentID);
                        $('#txtFop').val(_this.InsertLeadChange.FOPID);
                        $('#txtaddress').val(_this.InsertLeadChange.Address);
                        $('#txtconcountry').val(_this.InsertLeadChange.ContactCountryID);
                        _this.AddConState(_this.InsertLeadChange.ContactCountryID);
                        $('#txtconstate').val(_this.InsertLeadChange.ContactStateID);
                        _this.AddConDistrict(_this.InsertLeadChange.ContactCountryID);
                        $('#txtcondistrict').val(_this.InsertLeadChange.ContactDistrictID);
                        $('#txtconcity').val(_this.InsertLeadChange.ContactCity);
                        $('#txtconpincode').val(_this.InsertLeadChange.PostalCode);
                        $('#txtleadtype').val(_this.InsertLeadChange.LeadType);
                        $('#txtcategory').val(_this.InsertLeadChange.CategoryID);
                        _this.Division(_this.InsertLeadChange.CategoryID);
                        $('#txtdivision').val(_this.InsertLeadChange.DivisionID);
                        _this.Product(_this.InsertLeadChange.DivisionID);
                        $('#txtproduct').val(_this.InsertLeadChange.ProductID);
                        _this.Model(_this.InsertLeadChange.ProductID);
                        $('#txtmodelno').val(_this.InsertLeadChange.ModelID);
                        $('#txtqty').val(_this.InsertLeadChange.Quantity);
                        $('#txttitle').val(_this.InsertLeadChange.PurchaseTimelineID);
                        $('#txtleadcategory').val(_this.InsertLeadChange.LeadCategoryID);
                        $('#ddlprojectname').val(_this.InsertLeadChange.ProjectID);
                        //$('#txtsalesarea').val(this.InsertLeadChange.SalesAreaID);
                        //this.SalesArea(this.InsertLeadChange.SalesAreaID);
                        _this.SearchSalesArea.CountryID = _this.InsertLeadChange.CountryID;
                        _this.SearchSalesArea.LeadCategoryID = _this.InsertLeadChange.LeadCategoryID;
                        _this.SearchSalesArea.CategoryID = _this.InsertLeadChange.CategoryID;
                        //this.GetSalesArea = this.CheckSalesAreaService.Find(this.SearchSalesArea).then((response => {
                        //    this.GetSalesArea = this.CheckSalesAreaService.GetSales(response.data.Result);
                        //    
                        //    this.InsertLeadChange.SalesAreaID = this.GetSalesArea[0].toString();
                        //}));
                        _this.LeadSource(_this.InsertLeadChange.ChannelID);
                        _this.LeadSourceChange();
                        if (_this.InsertLeadChange.LeadSourceID == "2") {
                            _this.InsertLeadChange.RefUserID = _this.InsertLeadChange.RefUserID;
                            _this.InsertLeadChange.RefUserName = _this.InsertLeadChange.RefUserName;
                            _this.SearchUser.RefUserID = _this.InsertLeadChange.RefUserID;
                            _this.SearchUser.RefUserName = _this.InsertLeadChange.RefUserName;
                        }
                        else if (_this.InsertLeadChange.LeadSourceID == "10" || _this.InsertLeadChange.LeadSourceID == "24") {
                            _this.InsertLeadChange.CampaignID = _this.InsertLeadChange.CampaignID;
                        }
                        //$('#txtChannel').val(this.InsertLeadChange.ChannelID);
                        //this.LeadSource(this.InsertLeadChange.ChannelID);
                        //$('#ddlleadsource').val(this.InsertLeadChange.LeadSourceID);
                        //$('#txtCommnets').val(this.InsertLeadChange.Comments);
                    }));
                };
                DScheduleController.prototype.Reset = function () {
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
                DScheduleController.prototype.Close = function () {
                    location.href = "#!/LeadChangeList";
                };
                DScheduleController.$inject = ["LeadChangeEditService", "ReasonForLeadOpenDDService", "LeadStatusForOpenDDService",
                    "SalesOfficeService", "CountryService", "StateddService", "DistrictddService", "RegionddService",
                    "IndustrialSegmentService", "DepartmentService", "DesignationService", "LeadTypeddService",
                    "CategoryddService", "DivisionDDPService", "ProductddService", "ModelDDService",
                    "PurchaseTimelineService", "ChannelDDService", "LeadSourceDetailsService", "LeadCategoryDDService",
                    "SalesAreaService", "UpdateLeadChangeService", "CheckRegionService", "CheckSalesAreaDataService", "ProjectNameService",
                    "$location", "$cookieStore", "CampaignDetailsService", "UserCodeAutoFillService", "LeadItemListService", "EditItemList", "AddToCartDsService"];
                return DScheduleController;
            }());
            var DScheduleComponentController = /** @class */ (function () {
                function DScheduleComponentController() {
                    this.controller = DScheduleController;
                    this.templateUrl = "/Scripts/App/DSchedule/Template/DSchedule.html";
                }
                DScheduleComponentController.Name = "dschedule";
                return DScheduleComponentController;
            }());
            app.AddComponent(DScheduleComponentController.Name, new DScheduleComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DScheduleComponent.js.map