var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Search = GCPL.Model.RegionCheckModel;
            var SalesAreaSearch = GCPL.Model.CheckSalesAreaModel;
            var SearchRefUser = GCPL.Model.SearchRefUserModel;
            var LeadItem = GCPL.Model.LeadItemCreateModel;
            var DeliveryScheduleEditController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DeliveryScheduleEditController(_EditService, _ReasonForLeadOpenDDService, _LeadStatusForOpenDDService, _SalesOfficeService, _CountryService, _StateService, _DistrictService, _RegionService, _IndustrialSegmentService, _DepartmentService, _DesignationService, _LeadTypeService, _CategoryService, _DivisionPService, _ProductService, _ModelService, _PurchaseTimlineDDService, _ChannelDDService, _LeadSourceDDService, _LeadCategoryService, _SalesAreaService, _InsertService, _CheckRegionService, _CheckSalesAreaService, _ProjectNameService, $location, _cookieStore, _CampaignDDService, _getAutoUser, _LeadItemlistDSEditService, _EditItemList, _AddToCartDsService, _DeliveryScheduleEditService, _deleteItem, _InsertDsDetailsService, _LeadStatusService, _EditDSListService) {
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
                    this.LeadStatusDropDown = null;
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
                    this.LeadItemlistDSEdit = null;
                    this.InsertItem = null;
                    this.DeliveryScheduleEditList = null;
                    this.TotalDsList = null;
                    this.TotalDsQty = null;
                    this.TotalDSItemQty = 0;
                    this.Cookie = null;
                    this.LeadStatusService = _LeadStatusService;
                    this.LeadStatusService = _LeadStatusService;
                    this.InsertService = _InsertService;
                    this.ProjectNameService = _ProjectNameService;
                    this.InsertLeadChange = new LeadItem();
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
                    this.ListItemDSEditservice = _LeadItemlistDSEditService;
                    this.EditItemService = _EditItemList;
                    this.AddToCartDsService = _AddToCartDsService;
                    this.DeliveryScheduleEditService = _DeliveryScheduleEditService;
                    this.DeleteService = _deleteItem;
                    this.EditDSListService = _EditDSListService;
                    this.InsertDsDetailsService = _InsertDsDetailsService;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                DeliveryScheduleEditController.prototype.$onInit = function () {
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
                DeliveryScheduleEditController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtDeliveryDate").value = e;
                };
                //Page Load Define Values//
                DeliveryScheduleEditController.prototype.Init = function () {
                    var _this = this;
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
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusName(response.data.Result);
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
                        this.FillGridDeliverySchedule();
                        this.AddDsToCart(this.LeadID);
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
                DeliveryScheduleEditController.prototype.FillGridItems = function () {
                    var _this = this;
                    this.LeadItemlistDSEdit = this.ListItemDSEditservice.Find(this.LeadID).then((function (response) {
                        _this.LeadItemlistDSEdit = _this.ListItemDSEditservice.GetLeadItemListDSEdit(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.FillGridDeliverySchedule = function () {
                    var _this = this;
                    this.DeliveryScheduleEditList = this.DeliveryScheduleEditService.Find(this.LeadID).then((function (response) {
                        _this.DeliveryScheduleEditList = _this.DeliveryScheduleEditService.GetLeadItemDSEditList(response.data.Result);
                        console.log("this.DeliveryScheduleEditList", _this.DeliveryScheduleEditList);
                    }));
                };
                DeliveryScheduleEditController.prototype.EditDSList = function (data) {
                    var _this = this;
                    console.log("Op", data);
                    this.EditDSListService.Find(data).then((function (response) {
                        _this.InsertItem = _this.EditDSListService.GetDSEdit(response.data.Result);
                        $("myModalEditDS").show();
                    }));
                };
                DeliveryScheduleEditController.prototype.State = function (data) {
                    var _this = this;
                    this.StateDropDown = this.StateService.Find(this.InsertLeadChange.CountryID).then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.District = function (data) {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.InsertLeadChange.StateID).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.AddConState = function (data) {
                    var _this = this;
                    this.AddConStateDropDown = this.StateService.Find(this.InsertLeadChange.ContactCountryID).then((function (response) {
                        _this.AddConStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.AddConDistrict = function (data) {
                    var _this = this;
                    this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertLeadChange.ContactStateID).then((function (response) {
                        _this.AddConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.Division = function (data) {
                    var _this = this;
                    this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLeadChange.CategoryID).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.Product = function (data) {
                    var _this = this;
                    this.ProductDropDown = this.ProductService.Find(this.InsertLeadChange.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.Model = function (data) {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.InsertLeadChange.ProductID).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetModelDD(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.LeadSource = function (data) {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLeadChange.ChannelID).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.LeadStatusopen = function (data) {
                    var _this = this;
                    this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.Find(this.LeadID).then((function (response) {
                        _this.LeadStatusOpenDD = _this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.Campaign = function () {
                    var _this = this;
                    this.Campaigndd = this.CampaignDDService.Find(this.InsertLeadChange.LeadSourceID).then((function (response) {
                        _this.Campaigndd = _this.CampaignDDService.GetCampaignDetails(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.LeadSourceChange = function () {
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
                DeliveryScheduleEditController.prototype.LeadOpenReason = function () {
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
                DeliveryScheduleEditController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                DeliveryScheduleEditController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                DeliveryScheduleEditController.prototype.AddDsToCart = function (data) {
                    var _this = this;
                    this.InsertItem.UserID = this.UserID;
                    this.InsertItem.LeadID = this.LeadID;
                    if ($("#txtDeliveryDate").val() != null) {
                        this.InsertItem.DeliveryDate = document.getElementById("txtDeliveryDate").value;
                        console.log(this.InsertItem.DeliveryDate);
                    }
                    //if (this.InsertItem.DeliveryDate == undefined || this.InsertItem.DeliveryDate == null || this.InsertItem.DeliveryDate == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Delivery Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    /*else*/
                    if (this.InsertItem.DeliveryQty == undefined || this.InsertItem.DeliveryQty == null || this.InsertItem.DeliveryQty == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Delivery Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertItem.ItemID == undefined || this.InsertItem.ItemID == null || this.InsertItem.ItemID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Item to Create Delivery Schedule", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        console.log(this.InsertItem.DeliveryDate, "this.InsertItem.DeliveryDate11111");
                        if (this.UserID != null || this.UserID != "") {
                            this.InsertItem.UserID = this.UserID;
                        }
                        debugger;
                        this.AddToCartDsService.PostDeliveryScheduleToCart(this.InsertItem).then((function (response) {
                            console.log(_this.InsertItem);
                            //if (response.data.Result != null) {
                            if (response.data.Result > 0) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Delivery Schedule Successfully Added to Cart.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.InsertLeadChange = null;
                                _this.InsertLeadChange.ID = "";
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Couldn't Add Delivery Schedule.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                DeliveryScheduleEditController.prototype.DeleteDsFromCart = function (DsID) {
                    var _this = this;
                    debugger;
                    this.DeleteService.Find(DsID).then((function (response) {
                        _this.DeleteService.postDsDelete(response.data.Result);
                        _this.Init();
                        $("#errorclose").hide();
                        $("#close").show();
                        _this.popupMessage("Record deleted successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    }));
                };
                DeliveryScheduleEditController.prototype.Submit = function (data) {
                    var _this = this;
                    debugger;
                    var err = 0;
                    var flag = 0;
                    var failureCount = 0;
                    var SuccessCount = 0;
                    if (this.DeliveryScheduleEditList == undefined || this.TotalDsList == null) {
                    }
                    else {
                        this.TotalDsList = this.DeliveryScheduleEditList;
                    }
                    //if (this.InsertItem.DeliveryDate == undefined || this.InsertItem.DeliveryDate == null || this.InsertItem.DeliveryDate == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Delivery Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else
                    //if (this.InsertItem.DeliveryQty == undefined || this.InsertItem.DeliveryQty == null || this.InsertItem.DeliveryQty == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Enter Delivery Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertItem.ItemID == undefined || this.InsertItem.ItemID == null || this.InsertItem.ItemID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Item to Create Delivery Schedule", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else {
                    //this.InsertItem.LeadID;
                    //debugger;
                    //this.InsertItem.DeliveryDate;
                    //debugger;
                    //this.InsertItem.DeliveryQty;
                    //debugger;
                    //this.InsertItem.ItemID;
                    //debugger;
                    //this.InsertItem.ProductID;
                    //if (this.UserID != null || this.UserID != "") {
                    //    this.InsertItem.UserID = this.UserID;
                    //}
                    for (var i = 0; i < this.DeliveryScheduleEditList.length; i++) {
                        if (this.UserID != null || this.UserID != "") {
                            this.DeliveryScheduleEditList[i].UserID = this.UserID;
                            //this.TotalDsQty = this.DeliveryScheduleEditList[i].DeliveryQty;
                            //this.TotalDSItemQty = this.TotalDSItemQty + this.TotalDsQty;
                            //console.log(this.TotalDSItemQty);
                        }
                        this.InsertItem = this.DeliveryScheduleEditList[i];
                        debugger;
                        this.InsertDsDetailsService.PostDS(this.InsertItem).then((function (response) {
                            if (response.data.Result > 0) {
                                //flag = 0;
                                //SuccessCount++;
                                _this.HideShow();
                                _this.popupMessage("Delivery Schedule Created Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            }
                            else {
                                //flag = 1;
                                //failureCount++;
                                _this.HideShow();
                                _this.popupMessage("Delivery Qty should be equal to Item Qty.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                DeliveryScheduleEditController.prototype.FetchItemData = function (data) {
                    var _this = this;
                    console.log(data, "data11111");
                    this.EditItemService.Find(data).then((function (response) {
                        _this.InsertItem = _this.EditItemService.GetItemEdit(response.data.Result);
                        console.log("this.InsertItem11111", _this.InsertItem);
                        $("myModalAdd").show();
                    }));
                };
                DeliveryScheduleEditController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertLeadChange = _this.EditService.GetEdit(response.data.Result);
                        // this.LeadStatusID = this.InsertLeadChange.LeadStatusID;
                        /*var status = this.InsertLeadChange.LeadStatusID;*/
                        _this.LeadStatusOpenDD = _this.LeadStatusForOpenDDService.Find(_this.LeadID).then((function (response) {
                            _this.LeadStatusOpenDD = _this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);
                            /*this.InsertLeadChange.LeadStatusID = status;*/
                            //this.LeadStatusOpenDD[0].LeadStatusID.toString();
                        }));
                        //var reason = this.InsertLeadChange.LeadOpenReason
                        //this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.Find().then((response => {
                        //    this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.GetReason(response.data.Result);
                        //    this.InsertLeadChange.LeadOpenReason = reason;
                        //}));
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
                        //$('#txtLeadStatusId').val(this.InsertLeadChange.LeadStatusID);
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
                        console.log(_this.InsertLeadChange);
                    }));
                };
                DeliveryScheduleEditController.prototype.Reset = function () {
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
                DeliveryScheduleEditController.prototype.Close = function () {
                    this.FillGridDeliverySchedule();
                    //location.href = "#!/LeadChangeList";
                };
                DeliveryScheduleEditController.$inject = ["LeadChangeEditService", "ReasonForLeadOpenDDService", "LeadStatusForOpenDDService",
                    "SalesOfficeService", "CountryService", "StateddService", "DistrictddService", "RegionddService",
                    "IndustrialSegmentService", "DepartmentService", "DesignationService", "LeadTypeddService",
                    "CategoryddService", "DivisionDDPService", "ProductddService", "ModelDDService",
                    "PurchaseTimelineService", "ChannelDDService", "LeadSourceDetailsService", "LeadCategoryDDService",
                    "SalesAreaService", "UpdateLeadChangeService", "CheckRegionService", "CheckSalesAreaDataService", "ProjectNameService",
                    "$location", "$cookieStore", "CampaignDetailsService", "UserCodeAutoFillService", "LeadItemListDSEditService", "EditItemList",
                    "AddToCartDsService", "DeliveryScheduleEditService", "DeleteDsFromAddToCartService", "InsertDsDetailsService",
                    "LeadStatusDDService", "EditDSListService"];
                return DeliveryScheduleEditController;
            }());
            var DeliveryScheduleEditComponentController = /** @class */ (function () {
                function DeliveryScheduleEditComponentController() {
                    this.controller = DeliveryScheduleEditController;
                    this.templateUrl = "/Scripts/App/DeliveryScheduleEdit/Template/DeliveryScheduleEdit.html";
                }
                DeliveryScheduleEditComponentController.Name = "deliveryscheduleedit";
                return DeliveryScheduleEditComponentController;
            }());
            app.AddComponent(DeliveryScheduleEditComponentController.Name, new DeliveryScheduleEditComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DeliveryScheduleEditComponent.js.map