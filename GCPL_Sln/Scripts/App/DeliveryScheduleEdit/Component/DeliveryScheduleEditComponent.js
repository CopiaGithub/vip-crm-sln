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
            var DSModel = GCPL.Model.DeliveryScheduleModel;
            var DeliveryScheduleEditController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DeliveryScheduleEditController(_EditService, _ReasonForLeadOpenDDService, _LeadStatusForOpenDDService, _SalesOfficeService, _CountryService, _StateService, _DistrictService, _RegionService, _IndustrialSegmentService, _DepartmentService, _DesignationService, _LeadTypeService, _CategoryService, _DivisionPService, _ProductService, _ModelService, _PurchaseTimlineDDService, _ChannelDDService, _LeadSourceDDService, _LeadCategoryService, _SalesAreaService, _InsertService, _CheckRegionService, _CheckSalesAreaService, _ProjectNameService, $location, _cookieStore, _CampaignDDService, _getAutoUser, _LeadItemNewDSListService, _EditItemList, _AddToCartDsService, _DeliveryScheduleEditService, _deleteItem, _InsertDsDetailsService, _InsertDsDetailsEditService, _LeadStatusService, _EditDSListService, _DeleteDSItemService) {
                    this.$location = $location;
                    this._cookieStore = _cookieStore;
                    this.numRecords = 10;
                    this.page = 0;
                    this.counter = 0;
                    this.totalds = 0;
                    this.total = 0;
                    this.TotalDSQty = 0;
                    this.TotalDSItemQty = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.LeadID = null;
                    this.ItemID = null;
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
                    this.LeadItemNewDSlist = null;
                    this.InsertItem = null;
                    this.DeliverySchedulelist = null;
                    this.InsertToCart = null;
                    this.TotalDsList = null;
                    this.SubmitEnable = false;
                    this.Cookie = null;
                    //this.LeadStatusService = _LeadStatusService;
                    this.LeadStatusService = _LeadStatusService;
                    this.InsertService = _InsertService;
                    this.ProjectNameService = _ProjectNameService;
                    this.InsertLeadChange = new LeadItem();
                    this.InsertItem = new LeadItem();
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
                    this.ItemID = $location.search().ItemID;
                    //this.LeadID = $location.search().LeadID;
                    this.CampaignDDService = _CampaignDDService;
                    this.SearchUser = new SearchRefUser();
                    this.InsertToCart = new DSModel();
                    this.getAutoUser = _getAutoUser;
                    this.ListItemNewDSservice = _LeadItemNewDSListService;
                    this.EditItemService = _EditItemList;
                    this.AddToCartDsService = _AddToCartDsService;
                    this.DeliveryScheduleEditService = _DeliveryScheduleEditService;
                    this.DeleteService = _deleteItem;
                    this.DeleteDSItemService = _DeleteDSItemService;
                    this.EditDSListService = _EditDSListService;
                    this.InsertDsDetailsService = _InsertDsDetailsService;
                    this.InsertDsDetailsEditService = _InsertDsDetailsEditService;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                DeliveryScheduleEditController.prototype.$onInit = function () {
                    console.log(this.ItemID);
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
                    $("#txtDeliveryDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    $("#txtDeliveryDateEdit").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectDeliveryDateEdit
                    });
                };
                DeliveryScheduleEditController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtDeliveryDate").value = e;
                };
                DeliveryScheduleEditController.prototype.selectDeliveryDateEdit = function (e) {
                    document.getElementById("txtDeliveryDateEdit").value = e;
                };
                //Page Load Define Values//
                DeliveryScheduleEditController.prototype.Init = function () {
                    var _this = this;
                    console.log(this.ItemID);
                    if (this.ItemID != undefined || this.ItemID != null || this.ItemID != "") {
                        this.FetchItemData(this.ItemID);
                        console.log(this.ItemID);
                        //this.FillGridItems();
                        this.FillGridDeliverySchedule();
                        //this.AddDsToCart(this.LeadID);
                    }
                    var that = this;
                    var n = new Date();
                    n.setDate(n.getDate() - 7);
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m = months[n.getMonth()];
                    var d = n.getDate();
                    var y = n.getFullYear();
                    document.getElementById("txtDeliveryDate").innerHTML = d + "-" + m + "-" + y;
                    $('#txtDeliveryDate').val(d + "-" + m + "-" + y);
                    document.getElementById("txtDeliveryDate").value;
                    $("#txtDeliveryDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    document.getElementById("txtDeliveryDateEdit").innerHTML = d + "-" + m + "-" + y;
                    $('#txtDeliveryDateEdit').val(d + "-" + m + "-" + y);
                    document.getElementById("txtDeliveryDateEdit").value;
                    $("#txtDeliveryDateEdit").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectDeliveryDateEdit
                    });
                    this.LeadOpenReasonDD = this.ReasonForLeadOpenDDService.Find().then((function (response) {
                        _this.LeadOpenReasonDD = _this.ReasonForLeadOpenDDService.GetReason(response.data.Result);
                    }));
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusName(response.data.Result);
                        console.log("LeadStatusDropDown", _this.LeadStatusDropDown);
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
                    this.LeadItemNewDSlist = this.ListItemNewDSservice.Find(this.LeadID).then((function (response) {
                        _this.LeadItemNewDSlist = _this.ListItemNewDSservice.GetLeadItemNewDSList(response.data.Result);
                    }));
                };
                DeliveryScheduleEditController.prototype.FillGridDeliverySchedule = function () {
                    var _this = this;
                    this.DeliverySchedulelist = this.DeliveryScheduleEditService.Find(this.ItemID).then((function (response) {
                        _this.DeliverySchedulelist = _this.DeliveryScheduleEditService.GetLeadItemDSEditList(response.data.Result);
                        console.log("this.DeliverySchedulelist", _this.DeliverySchedulelist);
                        var counter = 0;
                        var totalds = 0;
                        for (var i = 0; i < _this.DeliverySchedulelist.length; i++) {
                            totalds = _this.DeliverySchedulelist[i].DeliveryQty;
                            counter = counter + totalds;
                            console.log(counter);
                        }
                        var remainder, sumOfDigits = 0;
                        while (counter) {
                            remainder = counter % 10;
                            sumOfDigits = sumOfDigits + remainder;
                            counter = Math.floor(counter / 10);
                        }
                        console.log(sumOfDigits);
                        _this.TotalDSItemQty = sumOfDigits;
                        console.log("TotalDSItemQty", _this.TotalDSItemQty);
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
                    this.InsertItem.UserID = this.UserID;
                    this.InsertItem.LeadID = this.LeadID;
                    if ($("#txtDeliveryDate").val() != null) {
                        this.InsertItem.DeliveryDate = document.getElementById("txtDeliveryDate").value;
                        console.log(this.InsertItem.DeliveryDate);
                    }
                    var err = 0;
                    this.InsertToCart = this.DeliverySchedulelist;
                    if (this.InsertItem.DeliveryDate == undefined || this.InsertItem.DeliveryDate == null || this.InsertItem.DeliveryDate == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Delivery Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertItem.DeliveryQty == undefined || this.InsertItem.DeliveryQty == null || this.InsertItem.DeliveryQty == "") {
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
                        if (err == 0) {
                            this.InsertToCart.push({
                                "ID": this.InsertItem.ID,
                                "LeadID": this.InsertItem.LeadID,
                                "ProductCode": this.InsertItem.Product,
                                "ProductDesc": this.InsertItem.ProductDesc,
                                "Quantity": this.InsertItem.Quantity,
                                "DeliveryDate": this.InsertItem.DeliveryDate,
                                "DeliveryQty": this.InsertItem.DeliveryQty,
                                "UserID": this.UserID,
                            });
                            console.log(this.InsertToCart);
                            this.DeliverySchedulelist = this.InsertToCart;
                            //this.AddToCartDsService.PostDeliveryScheduleToCart(this.InsertItem).then((response => {
                            //    console.log("ADDTOCART Model", this.InsertItem);             
                            //    if (response.data.Result > 0) {
                            //        this.InsertItem.DeliveryQty = "";
                            //        this.InsertItem.DeliveryDate = "";
                            //        $("#txtDeliveryDate").val("");
                            //        $("#DeliveryQty").val("");
                            //        console.log("ItemID", this.InsertItem.ItemID)
                            //        $("#errorclose").hide();
                            //        $("#close").show();
                            //        this.popupMessage("Delivery Schedule Successfully Added to Cart.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            //        this.InsertLeadChange = null;
                            //        this.InsertLeadChange.ID = "";
                            //    }
                            //    else {
                            //        this.HideShow();
                            //        this.popupMessage("Couldn't Add Delivery Schedule.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            //    }
                            //}));
                        }
                    }
                };
                DeliveryScheduleEditController.prototype.SetDeleteType = function (Data) {
                    this.TxnID = Data.TxnID;
                    $("#exampleModalDelete").modal("show");
                };
                DeliveryScheduleEditController.prototype.DeleteAssignmentCart = function () {
                    this.DeliverySchedulelist.splice(this.TxnID - 1, 1);
                    if (this.DeliverySchedulelist.length <= 0) {
                        this.DeliverySchedulelist = null;
                    }
                };
                DeliveryScheduleEditController.prototype.AddDsToCartEdit = function (data) {
                    var _this = this;
                    this.InsertItem.UserID = this.UserID;
                    this.InsertItem.LeadID = this.LeadID;
                    if ($("#txtDeliveryDateEdit").val() != null) {
                        this.InsertItem.DeliveryDate = document.getElementById("txtDeliveryDateEdit").value;
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
                        //debugger
                        this.AddToCartDsService.PostDeliveryScheduleToCart(this.InsertItem).then((function (response) {
                            console.log("ADDTOCART Model", _this.InsertItem);
                            //if (response.data.Result != null) {
                            if (response.data.Result > 0) {
                                console.log("ItemID", _this.InsertItem.ItemID);
                                $("#myModalEditDS").modal("hide");
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
                    //debugger;
                    this.DeleteService.Find(DsID).then((function (response) {
                        _this.DeleteService.postDsDelete(response.data.Result);
                        _this.FillGridDeliverySchedule();
                        $("#errorclose").hide();
                        $("#close").show();
                        _this.popupMessage("Record deleted successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    }));
                };
                DeliveryScheduleEditController.prototype.DeleteDSItem = function () {
                    var _this = this;
                    this.DeleteDSItemService.Find(this.ItemID).then((function (response) {
                        _this.DeleteDSItemService.postDSItemDelete(response.data.Result);
                        _this.SubmitEnable = true;
                    }));
                };
                DeliveryScheduleEditController.prototype.Submit = function (data) {
                    var _this = this;
                    debugger;
                    // Initialize the total sum to 0
                    this.counter += this.DeliverySchedulelist[i].DeliveryQty;
                    console.log(this.counter);
                    for (var i_1 = 0; i_1 < this.DeliverySchedulelist.length; i_1++) {
                        this.totalds = this.DeliverySchedulelist[i_1].DeliveryQty;
                        this.counter = this.counter + this.totalds;
                        console.log(this.counter);
                    }
                    console.log("counter", this.counter);
                    var remainder, sumOfDigits = 0;
                    while (this.counter) {
                        remainder = this.counter % 10;
                        sumOfDigits = sumOfDigits + remainder;
                        this.counter = Math.floor(this.counter / 10);
                    }
                    console.log(sumOfDigits);
                    this.TotalDSItemQty = sumOfDigits;
                    if (this.TotalDSItemQty == this.InsertItem.Quantity) {
                        var err = 0;
                        var flag = 0;
                        var failureCount = 0;
                        var SuccessCount = 0;
                        if (this.DeliverySchedulelist == undefined || this.TotalDsList == null) {
                        }
                        else {
                            this.TotalDsList = this.DeliverySchedulelist;
                        }
                        for (var i = 0; i < this.DeliverySchedulelist.length; i++) {
                            if (this.UserID != null || this.UserID != "") {
                                this.DeliverySchedulelist[i].UserID = this.UserID;
                                //this.TotalDsQty = this.DeliverySchedulelist[i].DeliveryQty;
                                //this.TotalDSItemQty = this.TotalDSItemQty + this.TotalDsQty;
                                //console.log(this.TotalDSItemQty);
                            }
                            this.InsertItem = this.DeliverySchedulelist[i];
                            debugger;
                            this.InsertDsDetailsEditService.PostDSEdit(this.InsertItem).then((function (response) {
                                if (response.data.Result > 0) {
                                    //flag = 0;
                                    //SuccessCount++;
                                    _this.HideShow();
                                    _this.popupMessage("Delivery Schedule Updated Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                }
                                else {
                                    //flag = 1;
                                    //failureCount++;
                                    _this.HideShow();
                                    _this.popupMessage("Some error occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                }
                            }));
                        }
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Delivery Qty should be equal to Item Qty.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                };
                DeliveryScheduleEditController.prototype.locationreload = function () {
                    // To reload the entire page from the server
                    location.reload();
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
                        _this.LeadStatusID = _this.InsertLeadChange.LeadStatusID;
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
                        console.log("LeadStatusID", _this.InsertLeadChange.LeadStatusID);
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
                    //this.locationreload();
                    //location.href = "#!/LeadChangeList";
                };
                DeliveryScheduleEditController.$inject = ["LeadChangeEditService", "ReasonForLeadOpenDDService", "LeadStatusForOpenDDService",
                    "SalesOfficeService", "CountryService", "StateddService", "DistrictddService", "RegionddService",
                    "IndustrialSegmentService", "DepartmentService", "DesignationService", "LeadTypeddService",
                    "CategoryddService", "DivisionDDPService", "ProductddService", "ModelDDService",
                    "PurchaseTimelineService", "ChannelDDService", "LeadSourceDetailsService", "LeadCategoryDDService",
                    "SalesAreaService", "UpdateLeadChangeService", "CheckRegionService", "CheckSalesAreaDataService", "ProjectNameService",
                    "$location", "$cookieStore", "CampaignDetailsService", "UserCodeAutoFillService", "LeadItemNewDSListService", "EditItemList",
                    "AddToCartDsService", "DeliveryScheduleEditService", "DeleteDsFromAddToCartService", "InsertDsDetailsService", "InsertDsDetailsEditService",
                    "LeadStatusddService", "EditDSListService", "DeleteDSItemService"];
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