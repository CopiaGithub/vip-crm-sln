var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Quotation = GCPL.Model.InsertQuotationModel;
            var GSTCalculation = GCPL.Model.TotalPriceModel;
            var CreateQuotationController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function CreateQuotationController(_leadassessmentService, _Accessory1Service, _Option1Service, _Accessory2Service, _Option2Service, _Accessory3Service, _Option3Service, _Accessory4Service, _Option4Service, _Accessory5Service, _Option5Service, _Accessory6Service, _Option6Service, _Configuration1Service, _Configuration2Service, _SOSService, _COLService, _PFService, _TCService, _OfferService, _CapabilityService, _TotalPriceCalService, _InsertService, $location, _cookieStore, _EditService, _LeadItemListService, _EditItemList, _InsertItemAssessment, _CountryddService, _DistrictService, _DepartmentService, _DesignationService, _LeadStatusService, _SalesOfficeService, _LeadTypeService, _LeadCategoryService, _ProjectNameService, _IndustryDivisionService, _IndustrialSegmentService, _PurchaseTimlineDDService, _CategoryService, _DivisionPService, _ProductService, _ModelService, _ChannelDDService, _LeadSourceDDService, _ProductDescAutofill) {
                    this.$location = $location;
                    this._cookieStore = _cookieStore;
                    this.LeadAssessment = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.Cookie = null;
                    this.UserID = null;
                    this.QuotationRefernce = null;
                    this.OpportunitySAPNo = null;
                    this.Accessory1DropDown = null;
                    this.Option1DropDown = null;
                    this.LeadItemlist = null;
                    this.Accessory2DropDown = null;
                    this.Option2DropDown = null;
                    this.Accessory3DropDown = null;
                    this.Option3DropDown = null;
                    this.Accessory4DropDown = null;
                    this.Option4DropDown = null;
                    this.InsertItem = null;
                    this.Accessory5DropDown = null;
                    this.Option5DropDown = null;
                    this.InsertLeadChange = null;
                    this.Accessory6DropDown = null;
                    this.Option6DropDown = null;
                    this.Configuration1DropDown = null;
                    this.Configuration2DropDown = null;
                    this.InsertQuotation = null;
                    this.ViewSOS = null;
                    this.ViewCOL = null;
                    this.ViewPF = null;
                    this.ViewTC = null;
                    this.ViewOffer = null;
                    this.ViewCapability = null;
                    this.QuotationID = null;
                    this.Total = null;
                    this.LeadID = null;
                    this.CountryDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.AddConCountryDropDown = null;
                    this.AddConStateDropDown = null;
                    this.AddConDistrictDropDown = null;
                    this.DepartmentDropDown = null;
                    this.DesignationDropDown = null;
                    this.LeadStatusDropDown = null;
                    this.LeadSalesOfficeDropDown = null;
                    this.LeadTypeDropDown = null;
                    this.LeadCategoryDropDown = null;
                    this.ProjectNameDD = null;
                    this.IndustryDivisionDropDown = null;
                    this.IndustrialSegmentDropDown = null;
                    this.PurchaseTimlinedd = null;
                    this.CategoryDropDown = null;
                    this.DivisionDropDownP = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.ChannelDD = null;
                    this.LeadSourcedd = null;
                    this.ModelID = null;
                    this.ProductID = null;
                    this.TotalPriceModel = null;
                    this.LeadAssessmentService = _leadassessmentService;
                    this.Accessory1Service = _Accessory1Service;
                    this.Option1Service = _Option1Service;
                    this.Accessory2Service = _Accessory2Service;
                    this.Option2Service = _Option2Service;
                    this.Accessory3Service = _Accessory3Service;
                    this.Option3Service = _Option3Service;
                    this.Accessory4Service = _Accessory4Service;
                    this.Option4Service = _Option4Service;
                    this.Accessory5Service = _Accessory5Service;
                    this.Option5Service = _Option5Service;
                    this.Accessory6Service = _Accessory6Service;
                    this.Option6Service = _Option6Service;
                    this.Configuration1Service = _Configuration1Service;
                    this.Configuration2Service = _Configuration2Service;
                    this.SOSService = _SOSService;
                    this.COLService = _COLService;
                    this.PFService = _PFService;
                    this.TCService = _TCService;
                    this.OfferService = _OfferService;
                    this.CapabilityService = _CapabilityService;
                    this.EditService = _EditService;
                    this.EditItemService = _EditItemList;
                    this.TotalPriceCalService = _TotalPriceCalService;
                    this.ListItemservice = _LeadItemListService;
                    this.TotalPriceModel = new GSTCalculation();
                    this.OpportunitySAPNo = $location.search().OpportunitySAPNo;
                    this.QuotationRefernce = $location.search().QuotationRefernce;
                    this.ModelID = $location.search().Model;
                    this.ProductID = $location.search().Product;
                    this.InsertService = _InsertService;
                    this.InsertItemAssessment = _InsertItemAssessment;
                    this.CountryddService = _CountryddService;
                    /*this.StateService = _StateService;*/
                    this.DistrictService = _DistrictService;
                    this.DepartmentService = _DepartmentService;
                    this.DesignationService = _DesignationService;
                    this.LeadStatusService = _LeadStatusService;
                    this.SalesOfficeService = _SalesOfficeService;
                    this.LeadTypeService = _LeadTypeService;
                    this.LeadCategoryService = _LeadCategoryService;
                    this.ProjectNameService = _ProjectNameService;
                    this.IndustryDivisionService = _IndustryDivisionService;
                    this.IndustrialSegmentService = _IndustrialSegmentService;
                    this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
                    this.CategoryService = _CategoryService;
                    this.DivisionPService = _DivisionPService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.ChannelDDService = _ChannelDDService;
                    this.LeadSourceDDService = _LeadSourceDDService;
                    this.ProductDescAutofill = _ProductDescAutofill;
                    this.InsertQuotation = new Quotation();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.LeadID = $location.search().LeadID;
                    //this.ModelID = $location.search().Model;
                    //this.ProductID = $location.search().Product;
                    /*this.LeadAssessment = new LeadAssess();*/
                }
                CreateQuotationController.prototype.$onInit = function () {
                    $("#errorclose").hide();
                    $('#search-btn-loader').hide();
                    $("#close").hide();
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                    this.Init();
                };
                CreateQuotationController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                //Page Load Define Values//
                CreateQuotationController.prototype.Init = function () {
                    var _this = this;
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
                    if (this.LeadID != undefined || this.LeadID != null || this.LeadID != "") {
                        this.Edit(this.LeadID);
                        //$('#Heading').hide();
                    }
                    if (this.LeadID != undefined || this.LeadID != null || this.LeadID != "") {
                        this.Edit(this.LeadID);
                        console.log(this.LeadID);
                        this.FillGridItems();
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
                    this.LeadSalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.LeadSalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                        _this.InsertItem.LeadType = "5";
                    }));
                    this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((function (response) {
                        _this.LeadCategoryDropDown = _this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
                    }));
                    //this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
                    //    this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);
                    //}));
                    this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((function (response) {
                        _this.PurchaseTimlinedd = _this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
                    }));
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.ChannelDD = this.ChannelDDService.Find().then((function (response) {
                        _this.ChannelDD = _this.ChannelDDService.GetChannelDDnew(response.data.Result);
                    }));
                    this.ProductDropDown = this.ProductService.Find(0).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                    this.DivisionDropDownP = this.DivisionPService.Find(0).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                    this.ModelDropDown = this.ModelService.Find(1).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetModelDD(response.data.Result);
                    }));
                    this.ProjectNameDD = this.ProjectNameService.FindProjectNameDD(this.UserID).then((function (response) {
                        _this.ProjectNameDD = _this.ProjectNameService.GetProjectNameDD(response.data.Result);
                    }));
                    var that = this;
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
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertItem.ProductID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                };
                CreateQuotationController.prototype.Model = function (data) {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.LeadAssessment.ProductID).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetModelDD(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.Division = function (data) {
                    var _this = this;
                    this.DivisionDropDownP = this.DivisionPService.Find(this.LeadAssessment.CategoryID).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                };
                //Product(data: any): void {
                //    this.ProductDropDown = this.ProductService.Find(this.InsertLeadChange.DivisionID).then((response => {
                //        this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
                //    }));
                //}
                CreateQuotationController.prototype.LeadSource = function (data) {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.LeadAssessment.ChannelID).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.EditItem = function (data) {
                    var _this = this;
                    console.log(data);
                    this.EditItemService.Find(data).then((function (response) {
                        _this.InsertItem = _this.EditItemService.GetItemEdit(response.data.Result);
                        $('#TotalPrice').val(_this.InsertItem.TotalPrice);
                        $('#TotalGST').val(_this.InsertItem.TotalGST);
                        $('#DiscountedPricePerUnit').val(_this.InsertItem.DiscountedPricePerUnit);
                        $('#NetAmount').val(_this.InsertItem.NetAmount);
                        //this.Total.TotalPrice = this.InsertItem.TotalPrice;
                        console.log("GetItemEdit", response.data.Result);
                        _this.Model(_this.InsertItem.ProductID);
                        _this.InsertItem.ModelID = _this.InsertItem.ModelID;
                        $("myModalAdd").show();
                    }));
                };
                CreateQuotationController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertLeadChange = _this.EditService.GetEdit(response.data.Result);
                        console.log(_this.InsertLeadChange);
                        _this.InsertQuotation.ID = _this.InsertLeadChange.ID;
                        _this.InsertQuotation.QID = _this.InsertLeadChange.QID;
                        _this.InsertQuotation.SPName = _this.InsertLeadChange.SPName;
                        _this.InsertQuotation.SPMobileNo = _this.InsertLeadChange.SPMobileNo;
                        _this.InsertQuotation.SPEmail = _this.InsertLeadChange.SPEmail;
                        _this.InsertQuotation.SPDesignation = _this.InsertLeadChange.SPDesignation;
                        _this.InsertQuotation.TCDetails = _this.InsertQuotation.TCDetails;
                        _this.CountryDropDown = _this.CountryddService.Find().then((function (response) {
                            _this.CountryDropDown = _this.CountryddService.GetCountryName(response.data.Result);
                        }));
                        //this.StateDropDown = this.StateService.Find(this.InsertLeadChange.CountryID).then((response => {
                        //        this.StateDropDown = this.StateService.GetStateName(response.data.Result);
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
                        /* this.State(this.InsertLeadChange.CountryID);*/
                        $('#txtstate').val(_this.InsertLeadChange.StateID);
                        /* this.District(this.InsertLeadChange.StateID);*/
                        $('#txtdistrict').val(_this.InsertLeadChange.DistrictID);
                        //this.SearchRegion.StateID = this.InsertLeadChange.StateID;
                        //this.SearchRegion.DistrictID = this.InsertLeadChange.DistrictID;
                        //this.InsertLeadChange.RegionID = "";
                        //if (this.SearchRegion.StateID != undefined || this.SearchRegion.StateID != null || this.SearchRegion.StateID != "") {
                        //    this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((response => {
                        //        this.CheckRegion = this.CheckRegionService.GetRegion(response.data.Result);
                        //        this.RegionDropDown[0].RegionID = this.CheckRegion[0].RegionID;
                        //    }));
                        //}
                        //else {
                        //}
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
                        $('#txtdesignation').val(_this.InsertLeadChange.Designation);
                        $('#txtdept').val(_this.InsertLeadChange.DepartmentID);
                        //this.AddConState(this.InsertLeadChange.ContactCountryID);
                        //$('#txtconstate').val(this.InsertLeadChange.ContactStateID);
                        //this.AddConDistrict(this.InsertLeadChange.ContactCountryID);
                        //$('#txtcondistrict').val(this.InsertLeadChange.ContactDistrictID);
                        //$('#txtconcity').val(this.InsertLeadChange.ContactCity);
                        //$('#txtconpincode').val(this.InsertLeadChange.PostalCode);
                        //$('#txtleadtype').val(this.InsertLeadChange.LeadType);
                        //$('#txtcategory').val(this.InsertLeadChange.CategoryID);
                        //this.Division(this.InsertLeadChange.CategoryID);
                        //$('#txtdivision').val(this.InsertLeadChange.DivisionID);
                        //this.Product(this.InsertLeadChange.DivisionID);
                        //$('#txtproduct').val(this.InsertLeadChange.ProductID);
                        //this.Model(this.InsertLeadChange.ProductID);
                        //$('#txtmodelno').val(this.InsertLeadChange.ModelID);
                        //$('#txtqty').val(this.InsertLeadChange.Quantity);
                        //$('#txttitle').val(this.InsertLeadChange.PurchaseTimelineID);
                        //$('#txtleadcategory').val(this.InsertLeadChange.LeadCategoryID);
                        //$('#ddlprojectname').val(this.InsertLeadChange.ProjectID);
                        //$('#txtsalesarea').val(this.InsertLeadChange.SalesAreaID);
                        //this.SalesArea(this.InsertLeadChange.SalesAreaID);
                        //this.SearchSalesArea.CountryID = this.InsertLeadChange.CountryID;
                        //this.SearchSalesArea.LeadCategoryID = this.InsertLeadChange.LeadCategoryID;
                        //this.SearchSalesArea.CategoryID = this.InsertLeadChange.CategoryID;
                        //this.GetSalesArea = this.CheckSalesAreaService.Find(this.SearchSalesArea).then((response => {
                        //    this.GetSalesArea = this.CheckSalesAreaService.GetSales(response.data.Result);
                        //    
                        //    this.InsertLeadChange.SalesAreaID = this.GetSalesArea[0].toString();
                        //}));
                        //this.LeadSource(this.InsertLeadChange.ChannelID);
                        //this.LeadSourceChange();
                        //if (this.InsertLeadChange.LeadSourceID == "2") {
                        //    this.InsertLeadChange.RefUserID = this.InsertLeadChange.RefUserID;
                        //    this.InsertLeadChange.RefUserName = this.InsertLeadChange.RefUserName;
                        //    this.SearchUser.RefUserID = this.InsertLeadChange.RefUserID;
                        //    this.SearchUser.RefUserName = this.InsertLeadChange.RefUserName;
                        //}
                        //else if (this.InsertLeadChange.LeadSourceID == "10" || this.InsertLeadChange.LeadSourceID == "24") {
                        //    this.InsertLeadChange.CampaignID = this.InsertLeadChange.CampaignID;
                        //}
                        //$('#txtChannel').val(this.InsertLeadChange.ChannelID);
                        //this.LeadSource(this.InsertLeadChange.ChannelID);
                        //$('#ddlleadsource').val(this.InsertLeadChange.LeadSourceID);
                        //$('#txtCommnets').val(this.InsertLeadChange.Comments);
                        //if (this.InsertQuotation.TC1 != "NA" || this.InsertQuotation.TC2 != "NA" || this.InsertQuotation.TC3 != "NA" || this.InsertQuotation.TC4 != "NA" || this.InsertQuotation.TC5 == "NA" || this.InsertQuotation.TC6 != "NA" || this.InsertQuotation.TC7 != "NA") {
                        //    this.InsertQuotation.TC1 = this.InsertQuotation.TC1.toString();
                        //    this.InsertQuotation.TC2 = this.InsertQuotation.TC2.toString();
                        //    this.InsertQuotation.TC3 = this.InsertQuotation.TC3.toString();
                        //    this.InsertQuotation.TC4 = this.InsertQuotation.TC4.toString();
                        //    this.InsertQuotation.TC5 = this.InsertQuotation.TC5.toString();
                        //    this.InsertQuotation.TC6 = this.InsertQuotation.TC6.toString();
                        //    this.InsertQuotation.TC7 = this.InsertQuotation.TC7.toString();
                        //    this.InsertQuotation.TC8 = this.InsertQuotation.TC8.toString();
                        //}
                        //console.log("QID1", this.InsertQuotation.QID)
                        //if (this.InsertQuotation.QID == undefined || this.InsertQuotation.QID == null || this.InsertQuotation.QID == "")
                        //{
                        console.log("QID2", _this.InsertQuotation.QID);
                        _this.TCService.Find().then((function (response) {
                            _this.ViewTC = _this.TCService.GetTC(response.data.Result);
                            console.log("TC", response.data.Result);
                            for (var i = 0; i < _this.ViewTC.length; i++) {
                                if (i === 0) {
                                    _this.InsertQuotation.TC1 = _this.ViewTC[0].Description.toString();
                                    //var TAC1 = this.ViewTC[0].TACID;
                                }
                                if (i === 1) {
                                    _this.InsertQuotation.TC2 = _this.ViewTC[1].Description.toString();
                                    //var TAC2 = this.ViewTC[1].TACID;
                                }
                                if (i === 2) {
                                    _this.InsertQuotation.TC3 = _this.ViewTC[2].Description.toString();
                                    //var TAC3 = this.ViewTC[2].TACID;
                                }
                                if (i === 3) {
                                    _this.InsertQuotation.TC4 = _this.ViewTC[3].Description.toString();
                                    //var TAC4 = this.ViewTC[3].TACID;
                                }
                                if (i === 4) {
                                    _this.InsertQuotation.TC5 = _this.ViewTC[4].Description.toString();
                                    //var TAC5 = this.ViewTC[4].TACID;
                                }
                                if (i === 5) {
                                    _this.InsertQuotation.TC6 = _this.ViewTC[5].Description.toString();
                                    //var TAC6 = this.ViewTC[5].TACID;
                                }
                                if (i === 6) {
                                    _this.InsertQuotation.TC7 = _this.ViewTC[6].Description.toString();
                                    //var TAC7 = this.ViewTC[6].TACID;
                                }
                                if (i === 7) {
                                    _this.InsertQuotation.TC8 = _this.ViewTC[7].Description.toString();
                                    //var TAC8 = this.ViewTC[7].TACID;
                                }
                            }
                        }));
                        /*  }*/
                    }));
                };
                CreateQuotationController.prototype.FillGridItems = function () {
                    var _this = this;
                    this.LeadItemlist = this.ListItemservice.Find(this.LeadID).then((function (response) {
                        _this.LeadItemlist = _this.ListItemservice.GetLeadItemList(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CreateQuotationController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CreateQuotationController.prototype.CheckPrice = function () {
                    var _this = this;
                    this.InsertItem.MRPUnit = this.InsertItem.MRPUnit;
                    this.InsertItem.Quantity = this.InsertItem.Quantity;
                    this.InsertItem.GST = this.InsertItem.GST;
                    this.InsertItem.Discount = this.InsertItem.Discount;
                    //this.Total.TotalPrice = this.InsertItem.TotalPrice;
                    this.Total = this.TotalPriceCalService.FindChange(this.InsertItem).then((function (response) {
                        _this.Total = _this.TotalPriceCalService.GetTotalPriceChange(response.data.Result);
                        console.log("GetTotalPriceChange", response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.SubmitItem = function () {
                    var _this = this;
                    // $("#ass-btn-loader1").show();
                    debugger;
                    this.InsertItem.LeadID = this.LeadID;
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
                    //else if (this.InsertItem.DivisionID == undefined || this.InsertItem.DivisionID == null || this.InsertItem.DivisionID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertItem.ProductID == undefined || this.InsertItem.ProductID == null || this.InsertItem.ProductID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertItem.ModelID == undefined || this.InsertItem.ModelID == null || this.InsertItem.ModelID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertItem.ChannelID == undefined || this.InsertItem.ChannelID == null || this.InsertItem.ChannelID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertItem.LeadSourceID == undefined || this.InsertItem.LeadSourceID == null || this.InsertItem.LeadSourceID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Opportunity Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    else {
                        debugger;
                        $("#Item-submit").prop("disabled", true);
                        this.InsertItem.ItemStatusID = this.InsertItem.LeadStatusId;
                        this.InsertItem.CategoryID = this.InsertItem.LeadCategoryID;
                        console.log("OP", this.InsertItem);
                        //this.CreateInSAPLeadActivityService.PostCreateInSAPLeadActivity(this.InsertAct).then((response => {
                        this.InsertItemAssessment.PostItem(this.InsertItem).then((function (response) {
                            debugger;
                            if (response.data.Result != null) {
                                //   $("#myAlert").modal("show");
                                //  $("#act-btn-loader").hide(); 
                                _this.HideShow();
                                _this.popupMessage("Item created Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                //$("#myModalAddNew").hide();
                                $('#myModalAdd').click();
                                _this.FillGridItems();
                            }
                            else {
                                // $("#ass-btn-loader1").hide();
                                //  $("#myAlert").modal("show");
                                _this.HideShow();
                                _this.popupMessage("Item Creation failed", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                CreateQuotationController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    this.InsertQuotation.CustomerName = 'Test';
                    this.InsertQuotation.ContactName = 'Testt';
                    this.InsertQuotation.CustomerID = 1123;
                    this.InsertQuotation.ContactID = 1123;
                    this.InsertQuotation.CreatedBy = this.UserID;
                    this.InsertQuotation.LeadID = this.LeadID;
                    this.InsertQuotation.QID = this.InsertLeadChange.QID;
                    if (this.UserID != null || this.UserID != "") {
                        this.InsertQuotation.CreatedBy = this.UserID;
                    }
                    /*this.InsertQuotation.QuoteDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;*/
                    this.InsertService.PostQuote(this.InsertQuotation).then((function (response) {
                        if (response.data.Result != null) {
                            $("#errorclose").hide();
                            $("#close").show();
                            _this.popupMessage("Data Submitted Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        }
                        else {
                            _this.HideShow();
                            _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                    }));
                };
                CreateQuotationController.prototype.GetOption1 = function () {
                    var _this = this;
                    this.Option1DropDown = this.Option1Service.Find(this.InsertQuotation.Accessory1ID).then((function (response) {
                        _this.Option1DropDown = _this.Option1Service.GetAccessory(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.GetOption2 = function () {
                    var _this = this;
                    this.Option2DropDown = this.Option2Service.Find(this.InsertQuotation.Accessory2ID).then((function (response) {
                        _this.Option2DropDown = _this.Option2Service.GetAccessory(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.GetOption3 = function () {
                    var _this = this;
                    this.Option3DropDown = this.Option3Service.Find(this.InsertQuotation.Accessory3ID).then((function (response) {
                        _this.Option3DropDown = _this.Option3Service.GetAccessory(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.GetOption4 = function () {
                    var _this = this;
                    this.Option4DropDown = this.Option4Service.Find(this.InsertQuotation.Accessory4ID).then((function (response) {
                        _this.Option4DropDown = _this.Option4Service.GetAccessory(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.GetOption5 = function () {
                    var _this = this;
                    this.Option5DropDown = this.Option5Service.Find(this.InsertQuotation.Accessory5ID).then((function (response) {
                        _this.Option5DropDown = _this.Option5Service.GetAccessory(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.GetOption6 = function () {
                    var _this = this;
                    this.Option6DropDown = this.Option6Service.Find(this.InsertQuotation.Accessory6ID).then((function (response) {
                        _this.Option6DropDown = _this.Option6Service.GetAccessory(response.data.Result);
                    }));
                };
                CreateQuotationController.prototype.Close = function () {
                    location.href = "#!/QuotationList";
                };
                CreateQuotationController.$inject = ["LeadAssessmentService", "Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService",
                    "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService",
                    "Option6Service", "Configuration1DDService", "Configuration2DDService", "ScopeofSupplyService", "CoveringLetterInfoService",
                    "ProductFeaturesInfoService", "TermsConditionInfoService", "OfferingInfoService", "CapabilitiesInfoService", "TotalPriceService",
                    "InsertQuotationService", "$location", "$cookieStore", "LeadChangeEditService", "LeadItemListService", "EditItemList", "InsertItemDetailsService",
                    "CountryddService", "DistrictService", "DepartmentService", "DesignationService", "LeadStatusddService", "SalesOfficeService", "LeadTypeddService",
                    "LeadCategoryDDService", "ProjectNameService", "IndustryDivisionService", "IndustrialSegmentService", "PurchaseTimelineService", "CategoryddService", "DivisionDDPService",
                    "ProductddService", "ModelDDService", "ChannelDDService", "LeadSourceDetailsService", "ProductDescAutoFillService"];
                return CreateQuotationController;
            }());
            var CreateQuotationComponentController = /** @class */ (function () {
                function CreateQuotationComponentController() {
                    this.controller = CreateQuotationController;
                    this.templateUrl = "/Scripts/App/CreateQuotation/Template/CreateQuotation.html";
                }
                CreateQuotationComponentController.Name = "createquotationcomponent";
                return CreateQuotationComponentController;
            }());
            app.AddComponent(CreateQuotationComponentController.Name, new CreateQuotationComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateQuotationComponent.js.map