var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Lead = GCPL.Model.InsertLeadModel;
            var AddToCart = GCPL.Model.AddToCartModel;
            var CustomerDetails = GCPL.Model.LeadCustomerListModel;
            var CustomerMaster = GCPL.Model.InsertCustomerMaster;
            var ContactMaster = GCPL.Model.InsertContactMaster;
            var CreateLeadFormController = /** @class */ (function () {
                function CreateLeadFormController(_CountryService, _StateDDService, _DistrictService, _IndustrialSegmentService, _IndustryDivisionService, _SalesOfficeService, _DepartmentService, _DesignationService, _LeadTypeService, _CategoryService, _DivisionPService, _ProductService, _ModelService, _ChannelDDService, _getAutoSalesrep1, _LeadSourceDDService, _ProjectNameService, CustClassService, _RegionService, _CampaignDDService, _InsertService, _InsertServiceItem, _PurchaseTimlineDDService, _LeadCategoryService, _CustomerSapAutofill, _ProductDescAutofill, _CustomerInfoService, _ContactService, _ContactInfoService, _InsertCustomerService, _InsertContactService, _cookieStore, _LeadCustomerDetails, _CustomerService, _getAutoUser, _ShowMobileService, _LeadCustomerDetails1, _LeadDetailsService, _LeadCategotyWPDDService) {
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
                    this.AddCustCountryDropDown = null;
                    this.AddCustStateDropDown = null;
                    this.AddCustDistrictDropDown = null;
                    this.CustCountryDropDown = null;
                    this.CustStateDropDown = null;
                    this.CustDistrictDropDown = null;
                    this.AddConCountryDropDown = null;
                    this.AddConStateDropDown = null;
                    this.AddConDistrictDropDown = null;
                    this.IndustrialSegmentDropDown = null;
                    this.IndustryDivisionDropDown = null;
                    this.SalesOfficeDropDown = null;
                    this.DepartmentDropDown = null;
                    this.DesignationDropDown = null;
                    this.LeadSalesOfficeDropDown = null;
                    this.LeadTypeDropDown = null;
                    this.CategoryDropDown = null;
                    this.DivisionDropDownP = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.ChannelDD = null;
                    this.LeadSourcedd = null;
                    this.Campaigndd = null;
                    this.SalesOfficeID = null;
                    this.PurchaseTimlinedd = null;
                    this.LeadCategoryDDWP = null;
                    this.CustomerID = null;
                    this.UserID = null;
                    this.InsertCust = null;
                    this.Contactinfo = null;
                    this.Leadinfo = null;
                    this.ContactID = null;
                    this.ContactDropDown = null;
                    this.Check = null;
                    this.InsertCon = null;
                    this.CustomerHeader = null;
                    this.LeadCategoryDropDown = null;
                    this.InsertLead = null;
                    this.InsertToCart = null;
                    this.TotalItemList = null;
                    this.InsertContact = null;
                    this.InsertCustomer = null;
                    this.LCustomer = null;
                    this.AdoptCust = null;
                    this.MobileCount = null;
                    this.LeadSearch = null;
                    this.EMAIL_REGEXP = null;
                    this.ProjectNameDD = null;
                    this.ProductValue = null;
                    this.CustClassDropDown = null;
                    this.RegionDropDown = null;
                    this.Cookie = null;
                    this.CountryService = _CountryService;
                    this.StateDDService = _StateDDService;
                    this.DistrictService = _DistrictService;
                    this.IndustrialSegmentService = _IndustrialSegmentService;
                    this.IndustryDivisionService = _IndustryDivisionService;
                    this.SalesOfficeService = _SalesOfficeService;
                    this.DepartmentService = _DepartmentService;
                    this.DesignationService = _DesignationService;
                    this.LeadTypeService = _LeadTypeService;
                    this.CategoryService = _CategoryService;
                    this.DivisionPService = _DivisionPService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.ChannelDDService = _ChannelDDService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.LeadSourceDDService = _LeadSourceDDService;
                    this.ProjectNameService = _ProjectNameService;
                    this.CustClassService = CustClassService;
                    this.RegionService = _RegionService;
                    this.CampaignDDService = _CampaignDDService;
                    this.InsertService = _InsertService;
                    this.InsertServiceItem = _InsertServiceItem;
                    this.InsertLead = new Lead();
                    this.InsertToCart = new AddToCart();
                    this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
                    this.LeadCategoryService = _LeadCategoryService;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.ProductDescAutofill = _ProductDescAutofill;
                    this.CustomerInfoService = _CustomerInfoService;
                    this.ContactService = _ContactService;
                    this.ContactInfoService = _ContactInfoService;
                    this.Contactinfo = new Array();
                    this.InsertCustomerService = _InsertCustomerService;
                    this.InsertCustomer = new CustomerMaster();
                    this.InsertContactService = _InsertContactService;
                    this.InsertContact = new ContactMaster();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.CustomerHeader = new Array();
                    this.LeadCustomerDetails = _LeadCustomerDetails;
                    this.CustomerService = _CustomerService;
                    this.InsertCust = new CustomerDetails();
                    this.LCustomer = new Array();
                    this.getAutoUser = _getAutoUser;
                    this.ShowMobileService = _ShowMobileService;
                    this.LeadCustomerDetails1 = _LeadCustomerDetails1;
                    this.LeadDetailsService = _LeadDetailsService;
                    this.LeadCategotyWPDDService = _LeadCategotyWPDDService;
                }
                CreateLeadFormController.prototype.$onInit = function () {
                    this.Init();
                    this.HideShow();
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.Check = false;
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                };
                //Page Load Define Values//
                CreateLeadFormController.prototype.Init = function () {
                    var _this = this;
                    this.InsertCustomer.IsNational = "0";
                    this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    this.HideShow();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#Campaignfield').hide();
                    $('#UserNamefield').hide();
                    this.AddCustCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.AddCustCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.CustCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.CustCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.AddConCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.AddConCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((function (response) {
                        _this.IndustrialSegmentDropDown = _this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);
                    }));
                    this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((function (response) {
                        _this.IndustryDivisionDropDown = _this.IndustryDivisionService.GetIndustryName(response.data.Result);
                    }));
                    this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.SalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.DepartmentDropDown = this.DepartmentService.Find().then((function (response) {
                        _this.DepartmentDropDown = _this.DepartmentService.GetDepartmentName(response.data.Result);
                    }));
                    this.DesignationDropDown = this.DesignationService.Find().then((function (response) {
                        _this.DesignationDropDown = _this.DesignationService.GetDesignationName(response.data.Result);
                    }));
                    this.LeadSalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.LeadSalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.DivisionDropDownP = this.DivisionPService.Find(0).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                    this.ProductDropDown = this.ProductService.Find(0).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                        _this.InsertLead.LeadType = "5";
                    }));
                    this.ChannelDD = this.ChannelDDService.Find().then((function (response) {
                        _this.ChannelDD = _this.ChannelDDService.GetChannelDDnew(response.data.Result);
                    }));
                    this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((function (response) {
                        _this.PurchaseTimlinedd = _this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
                    }));
                    this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((function (response) {
                        _this.LeadCategoryDropDown = _this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
                    }));
                    this.AddCustStateDropDown = this.StateDDService.Find().then((function (response) {
                        _this.AddCustStateDropDown = _this.StateDDService.GetState(response.data.Result);
                        //this.SearchRegion.StateID = this.InsertCustomer.StateID;
                    }));
                    this.CustStateDropDown = this.StateDDService.Find().then((function (response) {
                        _this.CustStateDropDown = _this.StateDDService.GetState(response.data.Result);
                    }));
                    this.AddConStateDropDown = this.StateDDService.Find().then((function (response) {
                        _this.AddConStateDropDown = _this.StateDDService.GetState(response.data.Result);
                    }));
                    this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((function (response) {
                        _this.ProjectNameDD = _this.ProjectNameService.GetProjectNameDD(response.data.Result);
                    }));
                    this.CustClassDropDown = this.CustClassService.Find().then((function (response) {
                        _this.CustClassDropDown = _this.CustClassService.GetCustomerClass(response.data.Result);
                    }));
                    this.RegionDropDown = this.RegionService.Find().then((function (response) {
                        _this.RegionDropDown = _this.RegionService.GetRegion(response.data.Result);
                    }));
                    this.ModelDropDown = this.ModelService.Find(this.InsertLead).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                    var that = this;
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
                            that.InsertLead.RefUserID = ui.item.id;
                            that.InsertLead.RefUserName = ui.item.value;
                        },
                        change: function () {
                        }
                    });
                    $("#txtProductDesc").autocomplete({
                        //  source:['1a0','anjali','archana'],
                        source: function (request, res) {
                            that.ProductDescAutofill.FilterAutoComplete(request).then((function (response) {
                                var data = that.ProductDescAutofill.GetAutoProductDesc(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ProductDesc,
                                        value: item.ProductDesc,
                                        id: item.ProductID
                                    };
                                }));
                                console.log(data, "data1111");
                                //this.InsertLead.ProductID = data.;
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            // Don't populate input field with selected value (pxid)
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertLead.ProductID = ui.item.id;
                            that.Search(ui.item.id);
                        },
                        change: function () {
                        }
                    });
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
                            that.InsertLead.CustomerID = ui.item.id;
                            that.Search(ui.item.id);
                        },
                        change: function () {
                        }
                    });
                    $("#txtMobileNo").change(function () {
                        that.MobileCount = that.ShowMobileService.Find(that.InsertCustomer.MobileNo).then((function (response) {
                            that.MobileCount = that.ShowMobileService.GetMobile(response.data.Result);
                            if (that.MobileCount == "0") {
                                $("#btnSubmit").prop("disabled", false);
                            }
                            else {
                                alert("Customer Already Exists");
                                $("#btnSubmit").prop("disabled", true);
                            }
                        }));
                    });
                };
<<<<<<< HEAD
=======
                //Product(ProductID): void {
                //    console.log(ProductID, "ProductID11111");
                //    this.ProductValue = this.ProductDescAutofill.FindProduct(ProductID).then((response => {
                //        this.ProductValue = this.ProductDescAutofill.GetProduct(response.data.Result);
                //    }));
                //}
>>>>>>> develop-anuja
                CreateLeadFormController.prototype.AddCustDistrict = function () {
                    var _this = this;
                    this.AddCustDistrictDropDown = this.DistrictService.Find(this.InsertCustomer.StateID).then((function (response) {
                        _this.AddCustDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                CreateLeadFormController.prototype.CustDistrict = function () {
                    var _this = this;
                    this.CustDistrictDropDown = this.DistrictService.Find(this.InsertCust.StateID).then((function (response) {
                        _this.CustDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                CreateLeadFormController.prototype.AddConDistrict = function () {
                    var _this = this;
                    this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertContact.StateID).then((function (response) {
                        _this.AddConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                //Division(): void {
                //    this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLead.CategoryID).then((response => {
                //        this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);
                //    }));
                //}
                CreateLeadFormController.prototype.LeadCategory = function () {
                    this.InsertLead.CategoryID = "";
                    this.InsertLead.DivisionID = "";
                    this.InsertLead.ProductID = "";
                    this.InsertLead.ModelID = "";
                };
                //Product(): void {
                //    this.ProductDropDown = this.ProductService.Find(this.InsertLead.DivisionID).then((response => {
                //        this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
                //    }));
                //}
                //Model(): void {
                //   // this.InsertLead.LeadType = this.LeadTypeDropDown[0].ID;
                //    this.ModelDropDown = this.ModelService.Find(this.InsertLead).then((response => {
                //        this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
                //    }));
                //}
                CreateLeadFormController.prototype.LeadSource = function () {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLead.ChannelID).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                CreateLeadFormController.prototype.Campaign = function () {
                    var _this = this;
                    this.Campaigndd = this.CampaignDDService.Find(this.InsertLead.LeadSourceID).then((function (response) {
                        _this.Campaigndd = _this.CampaignDDService.GetCampaignDetails(response.data.Result);
                    }));
                };
                CreateLeadFormController.prototype.ItemCart = function () {
                    debugger;
                    console.log(this.InsertLead.LeadCategoryID, "this.InsertLead.LeadCategoryID");
                    if (this.InsertCust.SalesOfficeID == undefined || this.InsertCust.SalesOfficeID == null || this.InsertCust.SalesOfficeID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Sales Office", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadType == undefined || this.InsertLead.LeadType == null || this.InsertLead.LeadType == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Opportunity Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadCategoryID == undefined && this.InsertLead.LeadCategoryID == null && this.InsertLead.LeadCategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Opportunity Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.IndustryDivisionID == undefined && this.InsertCust.IndustryDivisionID == null && this.InsertCust.IndustryDivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Industry Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.IndustrialSegmentID == undefined && this.InsertCust.IndustrialSegmentID == null && this.InsertCust.IndustrialSegmentID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Industry Segment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.PurchaseTimelineID == undefined || this.InsertLead.PurchaseTimelineID == null || this.InsertLead.PurchaseTimelineID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Plan to Purchase Within", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.Quantity == undefined && this.InsertLead.Quantity == null && this.InsertLead.Quantity == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.CategoryID == undefined || this.InsertLead.CategoryID == null || this.InsertLead.CategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.DivisionID == undefined || this.InsertLead.DivisionID == null || this.InsertLead.DivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ProductID == undefined || this.InsertLead.ProductID == null || this.InsertLead.ProductID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ModelID == undefined || this.InsertLead.ModelID == null || this.InsertLead.ModelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ChannelID == undefined || this.InsertLead.ChannelID == null || this.InsertLead.ChannelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadSourceID == undefined || this.InsertLead.LeadSourceID == null || this.InsertLead.LeadSourceID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Opportunity Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.InsertToCart = [];
                        var err = 0;
                        if (err == 0) {
                            this.InsertToCart.push({
                                "SalesOfficeID": this.InsertCust.SalesOfficeID,
                                "SalesOfficeName": this.InsertCust.SalesOfficeID == "" ? "" : $("#txtSalesoff option:selected").text(),
                                "LeadType": this.InsertLead.LeadType,
                                "LeadTypeName": this.InsertLead.LeadType == "" ? "" : $("#txtLeadType option:selected").text(),
                                "IndustryDivisionID": this.InsertCust.IndustryDivisionID,
                                "IndustryDivisionName": this.InsertCust.IndustryDivisionID == "" ? "" : $("#txtIndustryDivision option:selected").text(),
                                "IndustrialSegmentID": this.InsertCust.IndustrialSegmentID,
                                "IndustrialSegmentName": this.InsertCust.IndustrialSegmentID == "" ? "" : $("#txtIndustrySegment option:selected").text(),
                                "PurchaseTimelineID": this.InsertLead.PurchaseTimelineID,
                                "PurchaseTimelineName": this.InsertCust.IndustrialSegmentID == "" ? "" : $("#purchaseddl option:selected").text(),
                                "Quantity": this.InsertLead.Quantity,
                                "CategoryID": this.InsertLead.CategoryID,
                                "CategoryName": this.InsertLead.CategoryID == "" ? "" : $("#txtCategory option:selected").text(),
                                "DivisionID": this.InsertLead.DivisionID,
                                "DivisionName": this.InsertLead.DivisionID == "" ? "" : $("#txtDivision option:selected").text(),
                                "ProductID": this.InsertLead.ProductID,
                                "ProductName": this.InsertLead.ProductID == "" ? "" : $("#txtProduct option:selected").text(),
                                "ModelID": this.InsertLead.ModelID,
                                "ModelName": this.InsertLead.ModelID == "" ? "" : $("#txtModel option:selected").text(),
                                "ChannelID": this.InsertLead.ChannelID,
                                "ChannelName": this.InsertLead.ChannelID == "" ? "" : $("#txtChannel option:selected").text(),
                                "LeadSourceID": this.InsertLead.LeadSourceID,
                                "LeadSourceName": this.InsertLead.LeadSourceID == "" ? "" : $("#ddlleadsource option:selected").text(),
                            });
                            console.log(this.InsertToCart);
                            this.TotalItemList = this.InsertToCart;
                            //this.InsertToCart.SalesOfficeID = this.InsertCust.SalesOfficeID
                            //this.InsertToCart.LeadType = this.InsertLead.LeadType
                            //this.InsertToCart.IndustryDivisionID = this.InsertCust.IndustryDivisionID
                            //this.InsertToCart.IndustrialSegmentID = this.InsertCust.IndustrialSegmentID
                            //this.InsertToCart.PurchaseTimelineID = this.InsertLead.PurchaseTimelineID
                            //this.InsertToCart.Quantity = this.InsertLead.Quantity
                            //this.InsertToCart.CategoryID = this.InsertLead.CategoryID
                            //this.InsertToCart.DivisionID = this.InsertLead.DivisionID
                            //this.InsertToCart.ProductID = this.InsertLead.ProductID
                            //this.InsertToCart.ModelID = this.InsertLead.ModelID
                            //this.InsertToCart.ChannelID = this.InsertLead.ChannelID
                            //this.InsertToCart.LeadSourceID = this.InsertLead.LeadSourceID
                            //if (this.UserID != null || this.UserID != "") {
                            //    this.InsertLead.UserID = this.UserID;
                            //}
                            //this.InsertService.PostLead(this.InsertLead).then((response => {
                            //    if (response.data.Result == 0) {
                            //        $("#errorclose").hide();
                            //        $("#close").show();
                            //        this.popupMessage("Lead already exists for this Customer & Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            //    }
                            //    else if (response.data.Result > 0) {
                            //        $("#errorclose").hide();
                            //        $("#close").show();
                            //        this.popupMessage("LeadID - " + response.data.Result + " created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            //    }
                            //    else {
                            //        this.HideShow();
                            //        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            //    }
                            //}));
                        }
                    }
                };
                CreateLeadFormController.prototype.DeleteAssignmentCart = function (index) {
                    this.TotalItemList.splice(index, 1);
                    if (this.TotalItemList.length <= 0) {
                        this.TotalItemList = null;
                    }
                };
                CreateLeadFormController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    var flag = 0;
                    var failureCount = 0;
                    var SuccessCount = 0;
                    if (this.InsertCust.CompanyName == undefined || this.InsertCust.CompanyName == null || this.InsertCust.CompanyName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.MobileNo == undefined || this.InsertCust.MobileNo == null || this.InsertCust.MobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer MobileNo ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCust.MobileNo != undefined && this.InsertCust.MobileNo != null && this.InsertCust.MobileNo != "") && (isNaN(this.InsertCust.MobileNo) || this.InsertCust.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCust.PhoneNo != undefined && this.InsertCust.PhoneNo != null && this.InsertCust.PhoneNo != "") && (isNaN(this.InsertCust.PhoneNo) || this.InsertCust.PhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.Email != undefined && this.InsertCust.Email != null && this.InsertCust.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertCust.Email))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.Pincode == undefined || this.InsertCust.Pincode == null || this.InsertCust.Pincode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCust.Pincode != undefined && this.InsertCust.Pincode != null && this.InsertCust.Pincode != "") && (isNaN(this.InsertCust.Pincode) || this.InsertCust.Pincode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.Address1 == undefined || this.InsertCust.Address1 == null || this.InsertCust.Address1 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Address", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.StateID == undefined || this.InsertCust.StateID == null || this.InsertCust.StateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.DistrictID == undefined || this.InsertCust.DistrictID == null || this.InsertCust.DistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCust.SalesOfficeID == undefined || this.InsertCust.SalesOfficeID == null || this.InsertCust.SalesOfficeID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadType == undefined || this.InsertLead.LeadType == null || this.InsertLead.LeadType == "") {
                        this.HideShow();
                        this.popupMessage("Please Select LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadCategoryID == undefined || this.InsertLead.LeadCategoryID == null || this.InsertLead.LeadCategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.PurchaseTimelineID == undefined || this.InsertLead.PurchaseTimelineID == null || this.InsertLead.PurchaseTimelineID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Purchase Within", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.CategoryID == undefined || this.InsertLead.CategoryID == null || this.InsertLead.CategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.DivisionID == undefined || this.InsertLead.DivisionID == null || this.InsertLead.DivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ProductID == undefined || this.InsertLead.ProductID == null || this.InsertLead.ProductID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ModelID == undefined || this.InsertLead.ModelID == null || this.InsertLead.ModelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.Quantity == undefined || this.InsertLead.Quantity == null || this.InsertLead.Quantity == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ChannelID == undefined || this.InsertLead.ChannelID == null || this.InsertLead.ChannelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadSourceID == undefined || this.InsertLead.LeadSourceID == null || this.InsertLead.LeadSourceID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadSourceID == "2" && (this.InsertLead.RefUserID == undefined || this.InsertLead.RefUserID == null || this.InsertLead.RefUserID == "")) {
                        this.HideShow();
                        this.popupMessage("Please Enter Ref User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") && (this.InsertLead.CampaignID == undefined || this.InsertLead.CampaignID == null || this.InsertLead.CampaignID == "")) {
                        this.HideShow();
                        this.popupMessage("Please Select Campaign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (!$("input[name=contactradio]:checked").val()) {
                        this.HideShow();
                        this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        if (this.TotalItemList == null || this.TotalItemList == undefined) {
                            this.HideShow();
                            this.popupMessage("Please add atleast one timesheet to list!", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                        else {
                            debugger;
                            this.InsertLead.ContactID = $('#messageCheckbox:checked').val();
                            this.InsertLead.CustomerID = this.InsertCust.CustomerID;
                            this.InsertLead.CompanyName = this.InsertCust.CompanyName;
                            this.InsertLead.BusinessPartnerNo = this.InsertCust.BusinessPartnerNo;
                            this.InsertLead.Email = this.InsertCust.Email;
                            this.InsertLead.MobileNo = this.InsertCust.MobileNo;
                            this.InsertLead.PhoneNo = this.InsertCust.PhoneNo;
                            this.InsertLead.Pincode = this.InsertCust.Pincode;
                            this.InsertLead.Address1 = this.InsertCust.Address1;
                            this.InsertLead.Address2 = this.InsertCust.Address2;
                            this.InsertLead.SalesOfficeID = this.InsertCust.SalesOfficeID;
                            this.InsertLead.CountryID = '95';
                            this.InsertLead.StateID = this.InsertCust.StateID;
                            this.InsertLead.DistrictID = this.InsertCust.DistrictID;
                            this.InsertLead.City = this.InsertCust.City;
                            this.InsertLead.LeadStatusID = this.InsertCust.LeadStatusID;
                            this.InsertLead.IndustryDivisionID = this.InsertCust.IndustryDivisionID;
                            this.InsertLead.IndustrialSegmentID = this.InsertCust.IndustrialSegmentID;
                            this.InsertLead.CustomerRatingID = this.InsertCust.CustomerRatingID;
                            this.InsertLead.RegionID = this.InsertCust.RegionID;
                            if (this.UserID != null || this.UserID != "") {
                                this.InsertLead.UserID = this.UserID;
                            }
                            this.InsertService.PostLead(this.InsertLead).then((function (response) {
                                if (response.data.Result == 0) {
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    _this.popupMessage("Lead already exists for this Customer & Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                }
                                else if (response.data.Result > 0) {
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    _this.popupMessage("LeadID - " + response.data.Result + " created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                    for (var i = 0; i < _this.TotalItemList.length; i++) {
                                        _this.InsertLead = _this.TotalItemList[i];
                                        _this.InsertServiceItem.PostItem(_this.InsertLead).then((function (response) {
                                            if (response.data == "Success") {
                                                flag = 0;
                                                SuccessCount++;
                                            }
                                            else {
                                                flag = 1;
                                                failureCount++;
                                            }
                                            if (flag == 0) {
                                                $("#errorclose").hide();
                                                $("#close").show();
                                                _this.popupMessage("Successfully Inserted " + SuccessCount.toString() + " Records!", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                            }
                                            else {
                                                _this.HideShow();
                                                _this.popupMessage("Error Occured for " + failureCount + "Records! Please Try again.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                            }
                                        }));
                                    }
                                }
                                else {
                                    _this.HideShow();
                                    _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                }
                            }));
                        }
                    }
                };
                CreateLeadFormController.prototype.SubmitCustomer = function () {
                    var _this = this;
                    if (this.InsertCustomer.CompanyName == undefined || this.InsertCustomer.CompanyName == null || this.InsertCustomer.CompanyName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.MobileNo == undefined || this.InsertCustomer.MobileNo == null || this.InsertCustomer.MobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer MobileNo ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.MobileNo != undefined && this.InsertCustomer.MobileNo != null && this.InsertCustomer.MobileNo != "") && (isNaN(this.InsertCustomer.MobileNo) || this.InsertCustomer.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.PhoneNo != undefined && this.InsertCustomer.PhoneNo != null && this.InsertCustomer.PhoneNo != "") && (isNaN(this.InsertCustomer.PhoneNo) || this.InsertCustomer.PhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.Email != undefined && this.InsertCustomer.Email != null && this.InsertCustomer.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertCustomer.Email))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.Pincode == undefined || this.InsertCustomer.Pincode == null || this.InsertCustomer.Pincode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.Pincode != undefined && this.InsertCustomer.Pincode != null && this.InsertCustomer.Pincode != "") && (isNaN(this.InsertCustomer.Pincode) || this.InsertCustomer.Pincode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.Address1 == undefined || this.InsertCustomer.Address1 == null || this.InsertCustomer.Address1 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.StateID == undefined || this.InsertCustomer.StateID == null || this.InsertCustomer.StateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DistrictID == undefined || this.InsertCustomer.DistrictID == null || this.InsertCustomer.DistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.IsNational == undefined || this.InsertCustomer.IsNational == null || this.InsertCustomer.IsNational == "") {
                        this.HideShow();
                        this.popupMessage("Please Select IsNational", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertCustomer.CountryID = '95';
                        this.InsertCustomer.Status = "1";
                        this.InsertCustomerService.PostCustomer(this.InsertCustomer).then((function (response) {
                            if (response.data.Result == "1") {
                                _this.CustomerHeader.Email = _this.InsertCustomer.Email;
                                _this.CustomerHeader.MobileNo = _this.InsertCustomer.MobileNo;
                                _this.HideShow();
                                _this.popupMessage("Customer Already Exist with Email - " + _this.CustomerHeader.Email + " and Mobile No - " + _this.CustomerHeader.MobileNo, "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $("#create-customer").click();
                            }
                            else {
                                $('#create-customer').click();
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Customer ID - " + response.data.Result + " Created Successfully. ", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.InsertCustomer = null;
                            }
                        }));
                    }
                };
                CreateLeadFormController.prototype.ShowFirstTime = function () {
                    var _this = this;
                    this.LeadCustomerDetails1.Find(this.InsertCust).then((function (response) {
                        _this.LCustomer = _this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                    }));
                    $("#existingCustomerList").show();
                };
                CreateLeadFormController.prototype.ShowAll = function () {
                    var _this = this;
                    if ($("#btnShow").text() == "Show Similar" && this.InsertCust.CompanyName != undefined && this.InsertCust.CompanyName != null && this.InsertCust.CompanyName != "") {
                        $("#btnShow").html("Cancel");
                        this.LeadCustomerDetails1.Find(this.InsertCust).then((function (response) {
                            _this.LCustomer = _this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                        }));
                        $("#existingCustomerList").show();
                    }
                    else {
                        $("#btnShow").html("Show Similar");
                        $("#existingCustomerList").hide();
                    }
                };
                CreateLeadFormController.prototype.LeadSourceChange = function () {
                    $("#Campaignfield").hide();
                    $("#UserNamefield").hide();
                    if (this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") {
                        this.Campaign();
                        $("#Campaignfield").show();
                        $("#UserNamefield").hide();
                    }
                    else if (this.InsertLead.LeadSourceID == "2") {
                        $("#Campaignfield").hide();
                        $("#UserNamefield").show();
                    }
                };
                CreateLeadFormController.prototype.Adopt = function (data) {
                    this.Search(data);
                };
                CreateLeadFormController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                CreateLeadFormController.prototype.SubmitContact = function () {
                    var _this = this;
                    this.InsertContact.CustomerID = this.InsertCust.CustomerID;
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
                        this.InsertContactService.PostContact(this.InsertContact).then((function (response) {
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Contact ID -  " + response.data.Result + " Created Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#create-contact').click();
                                _this.ContactDetail();
                                _this.InsertContact = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Contact already exists with the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                CreateLeadFormController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CreateLeadFormController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CreateLeadFormController.prototype.Clear = function () {
                    this.InsertLead = null;
                    this.InsertCust = null;
                    this.Contactinfo = null;
                };
                CreateLeadFormController.prototype.Search = function (data) {
                    var _this = this;
                    this.CustomerInfoService.Find(data).then((function (response) {
                        _this.InsertCust = _this.CustomerInfoService.GetLeadCustomerInfo(response.data.Result);
                        var temp = _this.InsertCust.DistrictID;
                        _this.CustDistrictDropDown = _this.DistrictService.Find(_this.InsertCust.StateID).then((function (response) {
                            _this.CustDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                            _this.InsertCust.DistrictID = temp;
                        }));
                        _this.ShowFirstTime();
                        _this.ContactDetail();
                        _this.LeadDetail();
                    }));
                };
                CreateLeadFormController.prototype.ContactDetail = function () {
                    var _this = this;
                    $("#existingContactList").show();
                    this.Contactinfo = this.ContactInfoService.Find(this.InsertCust.CustomerID).then((function (response) {
                        _this.Contactinfo = _this.ContactInfoService.GetLeadContactInfo(response.data.Result);
                    }));
                };
                CreateLeadFormController.prototype.LeadDetail = function () {
                    var _this = this;
                    $("#existingLeadList").show();
                    this.Leadinfo = this.LeadDetailsService.Find(this.InsertCust.CustomerID).then((function (response) {
                        _this.Leadinfo = _this.LeadDetailsService.GetLeadInfo(response.data.Result);
                    }));
                };
                CreateLeadFormController.prototype.Close = function () {
                    location.href = "#!/CreateLead";
                };
                CreateLeadFormController.$inject = ["CountryService", "StateDDService", "DistrictddService", "IndustrialSegmentService", "IndustryDivisionService", "SalesOfficeService", "DepartmentService", "DesignationService",
                    "LeadTypeddService", "CategoryddService", "DivisionDDPService", "ProductddService", "LeadTypeProductService1", "ChannelDDService", "EmployeeAtofillService", "LeadSourceDetailsService", "ProjectNameService", "CustomerClassService", "RegionddService",
                    "CampaignDetailsService", "InsertLeadDetailsService", "PurchaseTimelineService", "LeadCategoryDDService", "CustomerSapIdAutoFillService", "ProductDescAutoFillService", "LeadCustomerDetailsService", "ContactInfoService",
                    "LeadContactDetailsService", "InsertLeadCustomerService", "InsertContactService", "$cookieStore", "LeadCustomerGetDetailsService", "GetCustomerNewDetailsService", "UserCodeAutoFillService", "ShowSimilarService", "LeadCustomerGetDetails1Service", "LeadDetailsService", "LeadCategotyWPDDService"];
                return CreateLeadFormController;
            }());
            var CreateLeadFormComponentController = /** @class */ (function () {
                function CreateLeadFormComponentController() {
                    this.controller = CreateLeadFormController;
                    this.templateUrl = "/Scripts/App/CreateLeadForm/Template/CreateLeadForm.html";
                }
                CreateLeadFormComponentController.Name = "createleadformcomponent";
                return CreateLeadFormComponentController;
            }());
            app.AddComponent(CreateLeadFormComponentController.Name, new CreateLeadFormComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateLeadFormComponent.js.map