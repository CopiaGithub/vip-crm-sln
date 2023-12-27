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
                function CreateQuotationController(_Accessory1Service, _Option1Service, _Accessory2Service, _Option2Service, _Accessory3Service, _Option3Service, _Accessory4Service, _Option4Service, _Accessory5Service, _Option5Service, _Accessory6Service, _Option6Service, _Configuration1Service, _Configuration2Service, _SOSService, _COLService, _PFService, _TCService, _OfferService, _CapabilityService, _TotalPriceCalService, _InsertService, $location, _cookieStore, _EditService, _LeadItemListService, _EditItemList) {
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
                    this.TotalPriceModel = null;
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
                    this.InsertService = _InsertService;
                    this.InsertQuotation = new Quotation();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.LeadID = $location.search().LeadID;
                }
                CreateQuotationController.prototype.$onInit = function () {
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
                CreateQuotationController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                //Page Load Define Values//
                CreateQuotationController.prototype.Init = function () {
                    if (this.LeadID != undefined || this.LeadID != null || this.LeadID != "") {
                        this.Edit(this.LeadID);
                        console.log(this.LeadID);
                        this.FillGridItems();
                    }
                };
                CreateQuotationController.prototype.EditItem = function (data) {
                    var _this = this;
                    console.log(data);
                    this.EditItemService.Find(data).then((function (response) {
                        console.log(response);
                        _this.InsertItem = _this.EditItemService.GetItemEdit(response.data.Result);
                        $("myModalAdd").show();
                    }));
                };
                CreateQuotationController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertLeadChange = _this.EditService.GetEdit(response.data.Result);
                        console.log(_this.InsertLeadChange);
                        _this.InsertQuotation.ID = _this.InsertLeadChange.ID;
                        _this.InsertQuotation.SPName = _this.InsertLeadChange.SPName;
                        _this.InsertQuotation.SPMobileNo = _this.InsertLeadChange.SPMobileNo;
                        _this.InsertQuotation.SPEmail = _this.InsertLeadChange.SPEmail;
                        _this.InsertQuotation.SPDesignation = _this.InsertLeadChange.SPDesignation;
                        _this.InsertQuotation.TCDetails = _this.InsertQuotation.TCDetails;
                        //this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.Find(this.LeadID).then((response => {
                        //    this.LeadStatusOpenDD = this.LeadStatusForOpenDDService.GetLeadOpen(response.data.Result);             
                        //}));
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
                    }));
                };
                //Edit(data: any): void {
                //    this.SOSService.Find(data).then((response => {
                //        this.ViewSOS = this.SOSService.GetSOS(response.data.Result);
                //        this.InsertQuotation.StdConfiguration = this.ViewSOS.StdConfiguration;
                //        this.InsertQuotation.Price = this.ViewSOS.Price;
                //        this.InsertQuotation.Quantity = this.ViewSOS.Quantity;
                //        this.InsertQuotation.GSTRate = this.ViewSOS.GSTRate;
                //        this.InsertQuotation.ModelID = this.ViewSOS.ModelID;
                //        this.InsertQuotation.ModelDescription = this.ViewSOS.ModelDescription;
                //        this.Accessory1DropDown = this.Accessory1Service.Find(this.InsertQuotation.ModelID).then((response => {
                //            this.Accessory1DropDown = this.Accessory1Service.GetAccessoryName(response.data.Result);
                //        }));
                //        this.Accessory2DropDown = this.Accessory2Service.Find(this.InsertQuotation.ModelID).then((response => {
                //            this.Accessory2DropDown = this.Accessory2Service.GetAccessoryName(response.data.Result);
                //        }));
                //        this.Accessory3DropDown = this.Accessory3Service.Find(this.InsertQuotation.ModelID).then((response => {
                //            this.Accessory3DropDown = this.Accessory3Service.GetAccessoryName(response.data.Result);
                //        }));
                //        this.Accessory4DropDown = this.Accessory4Service.Find(this.InsertQuotation.ModelID).then((response => {
                //            this.Accessory4DropDown = this.Accessory4Service.GetAccessoryName(response.data.Result);
                //        }));
                //        this.Accessory5DropDown = this.Accessory5Service.Find(this.InsertQuotation.ModelID).then((response => {
                //            this.Accessory5DropDown = this.Accessory5Service.GetAccessoryName(response.data.Result);
                //        }));
                //        this.Accessory6DropDown = this.Accessory6Service.Find(this.InsertQuotation.ModelID).then((response => {
                //            this.Accessory6DropDown = this.Accessory6Service.GetAccessoryName(response.data.Result);
                //        }));
                //    }));
                //    this.COLService.Find(data).then((response => {
                //        this.ViewCOL = this.COLService.GetCL(response.data.Result);
                //        this.InsertQuotation.QuoteRange = this.ViewCOL.QuoteRange;
                //    }));
                //    this.PFService.Find(data).then((response => {
                //        this.ViewPF = this.PFService.GetPF(response.data.Result);
                //    }));
                //    this.TCService.Find().then((response => {
                //        this.ViewTC = this.TCService.GetTC(response.data.Result);
                //    }));
                //    this.OfferService.Find().then((response => {
                //        this.ViewOffer = this.OfferService.GetOffer(response.data.Result);
                //    }));
                //    this.CapabilityService.Find().then((response => {
                //        this.ViewCapability = this.CapabilityService.GetCapability(response.data.Result);
                //    }));
                //}
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
                    this.InsertQuotation.TotalPrice = null;
                    this.InsertQuotation.TotalTax = null;
                    this.TotalPriceModel.Price = this.InsertQuotation.Price;
                    this.TotalPriceModel.Quantity = this.InsertQuotation.Quantity;
                    this.TotalPriceModel.GSTRate = this.InsertQuotation.GSTRate;
                    this.Total = this.TotalPriceCalService.FindChange(this.TotalPriceModel).then((function (response) {
                        _this.Total = _this.TotalPriceCalService.GetTotalPriceChange(response.data.Result);
                        //this.TotalPriceModel.Price = this.Total.Price;
                        _this.InsertQuotation.TotalPrice = _this.Total.TotalPrice;
                        _this.InsertQuotation.TotalTax = _this.Total.TotalTax;
                        //this.TotalPriceModel.Quantity = this.Total.Quantity;
                        // this.TotalPriceModel.ConvertedGST = this.Total.ConvertedGST;
                    }));
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
                CreateQuotationController.$inject = ["Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService",
                    "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService",
                    "Option6Service", "Configuration1DDService", "Configuration2DDService", "ScopeofSupplyService", "CoveringLetterInfoService",
                    "ProductFeaturesInfoService", "TermsConditionInfoService", "OfferingInfoService", "CapabilitiesInfoService", "TotalPriceService",
                    "InsertQuotationService", "$location", "$cookieStore", "LeadChangeEditService", "LeadItemListService", "EditItemList"];
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