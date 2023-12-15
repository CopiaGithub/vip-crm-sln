var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var CustomerMaster = GCPL.Model.InsertCustomerMaster;
            var ShowSimilar = GCPL.Model.CheckMobileModel;
            var CreateCustomerController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function CreateCustomerController(_CountryService, _StateService, _DistrictService, _InsertService, _IndustryDivisionService, _SalesAreaService, _AccountTypeService, _IndustrialDivisionSegmentService, _SalesOfficeService, _EditService, _ShowMobileService, _ListService, _DesignationService, _DivisionService, _IndustryCodeService, _CustomerSizeService, $location, _cookieStore, _CustomerStatusService, _DepartmentService, _CustClassService, _InsertSAPService, _CustomerSapAutofill, _LeadCustomerDetails) {
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
                    this.CountryDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.IndustryDivisionDropDown = null;
                    this.SalesAreaDropDown = null;
                    this.AccountTypeDropDown = null;
                    this.IndustrialSegmentDropDown = null;
                    this.SalesOfficeDropDown = null;
                    this.InsertCustomer = null;
                    this.EditCustomer = null;
                    this.CustomerID = null;
                    this.UserID = null;
                    this.RoleID = null;
                    this.MobileCount = null;
                    this.Show = null;
                    this.CustomerMasterlist = null;
                    this.DesignationDropDown = null;
                    this.DivisionDropDown = null;
                    this.Check = null;
                    this.IndustryCodeDropDown = null;
                    this.CustomerSizeDropDown = null;
                    this.Cookie = null;
                    this.CustomerStatusDropDown = null;
                    this.DepartmentDropDown = null;
                    this.CustClassDropDown = null;
                    this.EMAIL_REGEXP = null;
                    //ParentSAPId = null;
                    this.ConCountryDropDown = null;
                    this.ConStateDropDown = null;
                    this.ConDistrictDropDown = null;
                    this.CountryService = _CountryService;
                    this.StateService = _StateService;
                    this.DistrictService = _DistrictService;
                    this.InsertService = _InsertService;
                    this.IndustryDivisionService = _IndustryDivisionService;
                    this.SalesAreaService = _SalesAreaService;
                    this.AccountTypeService = _AccountTypeService;
                    this.IndustrialDivisionSegmentService = _IndustrialDivisionSegmentService;
                    this.SalesOfficeService = _SalesOfficeService;
                    this.InsertCustomer = new CustomerMaster();
                    this.EditService = _EditService;
                    this.CustomerID = $location.search().CustomerID;
                    //this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.Show = new ShowSimilar();
                    this.ShowMobileService = _ShowMobileService;
                    this.ListService = _ListService;
                    this.DesignationService = _DesignationService;
                    this.DivisionService = _DivisionService;
                    this.IndustryCodeService = _IndustryCodeService;
                    this.CustomerSizeService = _CustomerSizeService;
                    //this.SAPIDAutofill = _SAPIDAutofill;
                    //this.SAPService = _SAPService;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                    this.CustomerStatusService = _CustomerStatusService;
                    this.DepartmentService = _DepartmentService;
                    this.CustClassService = _CustClassService;
                    this.InsertSAPService = _InsertSAPService;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.LeadCustomerDetails = _LeadCustomerDetails;
                }
                CreateCustomerController.prototype.$onInit = function () {
                    this.Init();
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
                CreateCustomerController.prototype.Init = function () {
                    var _this = this;
                    this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    $("#errorclose").hide();
                    $("#close").hide();
                    $("#btnCreateInSAP").hide();
                    this.CountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.CountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((function (response) {
                        _this.IndustryDivisionDropDown = _this.IndustryDivisionService.GetIndustryName(response.data.Result);
                    }));
                    this.SalesAreaDropDown = this.SalesAreaService.Find().then((function (response) {
                        _this.SalesAreaDropDown = _this.SalesAreaService.GetSalesAreaName(response.data.Result);
                    }));
                    this.AccountTypeDropDown = this.AccountTypeService.Find().then((function (response) {
                        _this.AccountTypeDropDown = _this.AccountTypeService.GetAccountTypeName(response.data.Result);
                    }));
                    this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.SalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.DesignationDropDown = this.DesignationService.Find().then((function (response) {
                        _this.DesignationDropDown = _this.DesignationService.GetDesignationName(response.data.Result);
                    }));
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivision(response.data.Result);
                    }));
                    this.IndustryCodeDropDown = this.IndustryCodeService.Find().then((function (response) {
                        _this.IndustryCodeDropDown = _this.IndustryCodeService.GetIndustryCodeName(response.data.Result);
                    }));
                    this.CustomerSizeDropDown = this.CustomerSizeService.Find().then((function (response) {
                        _this.CustomerSizeDropDown = _this.CustomerSizeService.GetCustomerSize(response.data.Result);
                    }));
                    this.StateDropDown = this.StateService.Find(this.InsertCustomer.CountryID = '95').then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                    this.CustomerStatusDropDown = this.CustomerStatusService.Find().then((function (response) {
                        _this.CustomerStatusDropDown = _this.CustomerStatusService.GetCustomerStatus(response.data.Result);
                    }));
                    this.DepartmentDropDown = this.DepartmentService.Find().then((function (response) {
                        _this.DepartmentDropDown = _this.DepartmentService.GetDepartmentName(response.data.Result);
                    }));
                    this.CustClassDropDown = this.CustClassService.Find().then((function (response) {
                        _this.CustClassDropDown = _this.CustClassService.GetCustomerClass(response.data.Result);
                    }));
                    this.ConStateDropDown = this.StateService.Find(this.InsertCustomer.ConCountryID = '95').then((function (response) {
                        _this.ConStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                    if (this.CustomerID == undefined || this.CustomerID == null || this.CustomerID == "") {
                        this.Add();
                        $('#Heading').hide();
                    }
                    else {
                        this.Edit(this.CustomerID);
                        $('#Heading').show();
                    }
                    var that = this;
                    $("#txtParentCus").autocomplete({
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
                            that.InsertCustomer.ParentCustomerID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtCustMobileNo").change(function () {
                        that.MobileCount = that.ShowMobileService.Find(that.InsertCustomer.MobileNo).then((function (response) {
                            that.MobileCount = that.ShowMobileService.GetMobile(response.data.Result);
                            debugger;
                            if (that.MobileCount == "0") {
                            }
                            else {
                                alert("Customer Already Exists");
                            }
                        }));
                    });
                };
                CreateCustomerController.prototype.SegmentDivision = function (data) {
                    var _this = this;
                    this.IndustrialSegmentDropDown = this.IndustrialDivisionSegmentService.Find(this.InsertCustomer.DivisionID).then((function (response) {
                        _this.IndustrialSegmentDropDown = _this.IndustrialDivisionSegmentService.GetIndustrialSegmentName(response.data.Result);
                    }));
                };
                CreateCustomerController.prototype.State = function (data) {
                    var _this = this;
                    this.StateDropDown = this.StateService.Find(this.InsertCustomer.CountryID = '95').then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                CreateCustomerController.prototype.District = function (data) {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.InsertCustomer.StateID).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                CreateCustomerController.prototype.ConState = function (data) {
                    var _this = this;
                    this.ConStateDropDown = this.StateService.Find(this.InsertCustomer.ConCountryID = '95').then((function (response) {
                        _this.ConStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                CreateCustomerController.prototype.ConDistrict = function (data) {
                    var _this = this;
                    this.ConDistrictDropDown = this.DistrictService.Find(this.InsertCustomer.ConStateID).then((function (response) {
                        _this.ConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                CreateCustomerController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CreateCustomerController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CreateCustomerController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertCustomer.CustomerID != null && this.InsertCustomer.CustomerID != "" && this.InsertCustomer.CustomerID != undefined) {
                        this.InsertCustomer.UpdatedBy = this.UserID;
                    }
                    else {
                        this.InsertCustomer.CreatedBy = this.UserID;
                    }
                    this.InsertCustomer.RoleID = this.RoleID;
                    //this.InsertCustomer.AccountTypeID = "1";
                    if (this.InsertCustomer.CompanyName == undefined || this.InsertCustomer.CompanyName == null || this.InsertCustomer.CompanyName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.CompanyName.length <= 1) {
                        this.HideShow();
                        this.popupMessage("Company Name requires minimum 1 characters.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.Address1 == undefined || this.InsertCustomer.Address1 == null || this.InsertCustomer.Address1 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.MobileNo == undefined || this.InsertCustomer.MobileNo == null || this.InsertCustomer.MobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.MobileNo != undefined && this.InsertCustomer.MobileNo != null && this.InsertCustomer.MobileNo != "") && (isNaN(this.InsertCustomer.MobileNo) || this.InsertCustomer.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.PhoneNo != undefined && this.InsertCustomer.PhoneNo != null && this.InsertCustomer.PhoneNo != "") && (isNaN(this.InsertCustomer.PhoneNo) || this.InsertCustomer.PhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.Email != undefined && this.InsertCustomer.Email != null && this.InsertCustomer.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertCustomer.Email))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.PinCode == undefined || this.InsertCustomer.PinCode == null || this.InsertCustomer.PinCode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.PinCode != undefined && this.InsertCustomer.PinCode != null && this.InsertCustomer.PinCode != "") && (isNaN(this.InsertCustomer.PinCode) || this.InsertCustomer.PinCode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.IsNational == undefined || this.InsertCustomer.IsNational == null || this.InsertCustomer.IsNational == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter IsNational", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.StateID == undefined || this.InsertCustomer.StateID == null || this.InsertCustomer.StateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DistrictID == undefined || this.InsertCustomer.DistrictID == null || this.InsertCustomer.DistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ContactName == undefined || this.InsertCustomer.ContactName == null || this.InsertCustomer.ContactName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConMobileNo == undefined || this.InsertCustomer.ConMobileNo == null || this.InsertCustomer.ConMobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.ConMobileNo != undefined && this.InsertCustomer.ConMobileNo != null && this.InsertCustomer.ConMobileNo != "") && (isNaN(this.InsertCustomer.ConMobileNo) || this.InsertCustomer.ConMobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.ConPhoneNo != undefined && this.InsertCustomer.ConPhoneNo != null && this.InsertCustomer.ConPhoneNo != "") && (isNaN(this.InsertCustomer.ConPhoneNo) || this.InsertCustomer.ConPhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConEmail != undefined && this.InsertCustomer.ConEmail != null && this.InsertCustomer.ConEmail != "" && !(this.EMAIL_REGEXP.test(this.InsertCustomer.ConEmail))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConAddress == undefined || this.InsertCustomer.ConAddress == null || this.InsertCustomer.ConAddress == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact Address", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConPincode == undefined || this.InsertCustomer.ConPincode == null || this.InsertCustomer.ConPincode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact Pincode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DesignationID == undefined || this.InsertCustomer.DesignationID == null || this.InsertCustomer.DesignationID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Designation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DepartmentID == undefined || this.InsertCustomer.DepartmentID == null || this.InsertCustomer.DepartmentID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Department", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.IndustrialSegmentID == undefined || this.InsertCustomer.IndustrialSegmentID == null || this.InsertCustomer.IndustrialSegmentID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter IndustrialSegment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DivisionID == undefined || this.InsertCustomer.DivisionID == null || this.InsertCustomer.DivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Division Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.IndustryDivisionID == undefined || this.InsertCustomer.IndustryDivisionID == null || this.InsertCustomer.IndustryDivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Industry Division ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.SalesAreaID == undefined || this.InsertCustomer.SalesAreaID == null || this.InsertCustomer.SalesAreaID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SalesArea", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.SalesOfficeID == undefined || this.InsertCustomer.SalesOfficeID == null || this.InsertCustomer.SalesOfficeID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.CustomerRatingID == undefined || this.InsertCustomer.CustomerRatingID == null || this.InsertCustomer.CustomerRatingID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Class", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConStateID == undefined || this.InsertCustomer.ConStateID == null || this.InsertCustomer.ConStateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConDistrictID == undefined || this.InsertCustomer.ConDistrictID == null || this.InsertCustomer.ConDistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertCustomer.CountryID = '95';
                        this.InsertCustomer.ConCountryID = '95';
                        debugger;
                        if (this.InsertCustomer.AccountTypeID == "1") {
                            this.InsertCustomer.AccountTypeID = "2";
                        }
                        else if (this.InsertCustomer.AccountTypeID == "0") {
                            this.InsertCustomer.AccountTypeID = "1";
                        }
                        this.InsertService.PostCustomer(this.InsertCustomer).then((function (response) {
                            debugger;
                            if (response.data.Result != null) {
                                if (_this.CustomerID > 0) {
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    _this.popupMessage("Customer ID - " + _this.CustomerID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                }
                                else {
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    _this.popupMessage("Customer ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                }
                                $('#myModalAddNew').click();
                                _this.InsertCustomer = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Customer already exists with one of the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                CreateCustomerController.prototype.Edit = function (data) {
                    var _this = this;
                    $("#btnSubmit").show();
                    //$("#btnCreateInSAP").show();
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertCustomer = _this.EditService.GetCustEdit(response.data.Result);
                        debugger;
                        var temp = _this.InsertCustomer.DistrictID;
                        _this.DistrictDropDown = _this.DistrictService.Find(_this.InsertCustomer.StateID).then((function (response) {
                            _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                            _this.InsertCustomer.DistrictID = temp;
                        }));
                        if (_this.InsertCustomer.CustomerID != null || _this.InsertCustomer.CustomerID != "") {
                            _this.InsertCustomer.UpdatedBy = _this.UserID;
                        }
                        _this.ConDistrict(_this.InsertCustomer.ConStateID);
                        $("#txtParentCus").val(_this.InsertCustomer.ParentCustomerName);
                        $("#txtDivision").val(_this.InsertCustomer.DivisionID);
                        $("#txtClass").val(_this.InsertCustomer.CustomerRatingID);
                        debugger;
                        if (_this.InsertCustomer.BusinessPartnerNO == null || _this.InsertCustomer.BusinessPartnerNO == "" || _this.InsertCustomer.BusinessPartnerNO == undefined) {
                            $("#btnCreateInSAP").show();
                        }
                        else {
                            $("#btnCreateInSAP").hide();
                        }
                        var name = _this.InsertCustomer.CompanyName;
                        var nameArr = [];
                        for (var i = 0; i < name.length; i++) {
                            console.log("Name is : " + name[i]);
                            if (!(name[i] == " ")) {
                                nameArr.push(name[i]);
                            }
                        }
                        var aStr = nameArr.join("");
                        console.log("Name Array : " + aStr);
                        _this.InsertCustomer.SearchText = aStr;
                        if (_this.InsertCustomer.AccountTypeID == "2") {
                            _this.InsertCustomer.AccountTypeID = "1";
                        }
                        else {
                            _this.InsertCustomer.AccountTypeID = "0";
                        }
                        if (_this.InsertCustomer.Status == "True") {
                            _this.InsertCustomer.Status = "1";
                        }
                        else {
                            _this.InsertCustomer.Status = "0";
                        }
                        if (_this.InsertCustomer.IsNational == "True") {
                            _this.InsertCustomer.IsNational = "1";
                        }
                        else {
                            _this.InsertCustomer.IsNational = "0";
                        }
                    }));
                };
                CreateCustomerController.prototype.ShowAll = function () {
                    var _this = this;
                    debugger;
                    if ($("#btnShow").text() == "Show Similar" && this.InsertCustomer.CompanyName != undefined && this.InsertCustomer.CompanyName != null && this.InsertCustomer.CompanyName != "") {
                        $("#btnShow").html("Cancel");
                        debugger;
                        this.LeadCustomerDetails.Find(this.InsertCustomer).then((function (response) {
                            _this.CustomerMasterlist = _this.LeadCustomerDetails.GetCustomerDetails(response.data.Result);
                        }));
                        $("#show-similar-table").show();
                    }
                    else {
                        $("#btnShow").html("Show Similar");
                        $("#show-similar-table").hide();
                    }
                };
                CreateCustomerController.prototype.Adopt = function (data) {
                    debugger;
                    this.Edit(data);
                };
                CreateCustomerController.prototype.SearchTerm = function () {
                    debugger;
                    var name = this.InsertCustomer.CompanyName;
                    var nameArr = [];
                    for (var i = 0; i < name.length; i++) {
                        console.log("Name is : " + name[i]);
                        if (!(name[i] == " ")) {
                            nameArr.push(name[i]);
                        }
                    }
                    var aStr = nameArr.join("");
                    console.log("Name Array : " + aStr);
                    this.InsertCustomer.SearchText = aStr;
                };
                CreateCustomerController.prototype.CreateInSAP = function () {
                    var _this = this;
                    this.InsertCustomer.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.InsertSAPService.PostCreateInSAP(this.InsertCustomer).then(function (response) {
                        if (response.data.Result != null) {
                            if (_this.CustomerID > 0) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Customer ID - " + _this.CustomerID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            }
                            else {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Customer ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            }
                            $('#myModalAddNew').click();
                            _this.InsertCustomer = null;
                        }
                        else {
                            _this.HideShow();
                            _this.popupMessage("Customer already exists with one of the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                    });
                };
                CreateCustomerController.prototype.ShowHideChk = function () {
                    if (this.Check == true) {
                        this.InsertCustomer.SiteAddress = this.InsertCustomer.Address1;
                    }
                    else if (this.Check == false) {
                        this.InsertCustomer.SiteAddress = '';
                    }
                };
                CreateCustomerController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                CreateCustomerController.prototype.Add = function () {
                    $("#btnCreateInSAP").hide();
                    this.InsertCustomer.CustomerID = "";
                    this.InsertCustomer.SearchText = "";
                    this.InsertCustomer.CompanyName = "";
                    this.InsertCustomer.MobileNo = "";
                    this.InsertCustomer.Email = "";
                    this.InsertCustomer.Address1 = "";
                    this.InsertCustomer.Address2 = "";
                    this.InsertCustomer.CustomerStatusID = "";
                    this.InsertCustomer.DistrictID = "";
                    this.InsertCustomer.IndustryDivisionID = "";
                    this.InsertCustomer.CreatedBy = "";
                    this.InsertCustomer.PinCode = "";
                    this.InsertCustomer.AccountTypeID = "1";
                    this.InsertCustomer.IndustrialSegmentID = "";
                    this.InsertCustomer.SalesAreaID = "";
                    this.InsertCustomer.PhoneNo = "";
                    this.InsertCustomer.Fax = "";
                    this.InsertCustomer.SalesOfficeID = "";
                    this.InsertCustomer.BusinessPartnerNO = "";
                    this.InsertCustomer.Status = "1";
                    this.InsertCustomer.RetCustomerID = "";
                    this.InsertCustomer.IsNational = "0";
                    this.InsertCustomer.CustomerRatingID = "";
                    this.InsertCustomer.StateID = "";
                    this.InsertCustomer.City = "";
                    this.InsertCustomer.UpdatedBy = "";
                    this.InsertCustomer.CountryID = "";
                    this.InsertCustomer.ContactName = "";
                    this.InsertCustomer.DesignationID = "";
                    this.InsertCustomer.ConPhoneNo = "";
                    this.InsertCustomer.ConMobileNo = "";
                    this.InsertCustomer.ParentCustomer = "";
                    this.InsertCustomer.CustomerSizeID = "";
                    this.InsertCustomer.SiteAddress = "";
                    this.InsertCustomer.Area = "";
                    this.InsertCustomer.Comments = "";
                    this.InsertCustomer.DivisionID = "";
                    this.InsertCustomer.ConFax = "";
                    this.InsertCustomer.ConEmail = "";
                    this.InsertCustomer.ContactID = "";
                    this.InsertCustomer.BillingAddress = "";
                    this.InsertCustomer.IndustryCodeID = "";
                    this.InsertCustomer.ConStateID = "";
                    this.InsertCustomer.ConDistrictID = "";
                    this.InsertCustomer.ConCity = "";
                    this.InsertCustomer.ConCountryID = "";
                };
                CreateCustomerController.prototype.IsValidPinCode = function (value) {
                    //var re = /^\+?\d{2}[- ]?\d{3}[- ]?\d{6}$/;
                    if (value == undefined || value == null || value == "") {
                        return { Result: "True", Message: 'Success' };
                    }
                    else if (isNaN(value)) {
                        return { Result: "False", Message: 'Please Enter Valid PIN Code' };
                    }
                    else if (value.length != 6) {
                        return { Result: "False", Message: 'PIN Code must have 6 digits' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                CreateCustomerController.prototype.IsValidPhone = function (value) {
                    var re = /^\+?\d{2}[- ]?\d{3}[- ]?\d{6}$/;
                    debugger;
                    if (value == undefined || value == null || value == "") {
                        //return { Result: "True", Message: 'Success' }
                        return { Result: "False", Message: 'Please Enter Phone No' };
                    }
                    else if (isNaN(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Phone No' };
                    }
                    else if (value.length != 10) {
                        return { Result: "False", Message: 'Phone No must have 10 digits' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                CreateCustomerController.prototype.IsValidMobile = function (value) {
                    var re = /^[A-Za-z]+$/;
                    if (value == undefined || value == null || value == "") {
                        return { Result: "True", Message: 'Success' };
                        //return { Result: "False", Message: 'Please Enter Mobile No' }
                    }
                    else if (isNaN(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Mobile No' };
                    }
                    else if (value.length != 10) {
                        return { Result: "False", Message: 'Mobile No must be 10 digit' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                CreateCustomerController.prototype.IsValidMobile1 = function (value) {
                    var re = /^[A-Za-z]+$/;
                    if (value == undefined || value == "") {
                        return { Result: "True", Message: 'Success' };
                    }
                    else if (isNaN(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Mobile No' };
                    }
                    else if (value.length != 10) {
                        return { Result: "False", Message: 'Mobile No must be 10 digit' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                CreateCustomerController.prototype.IsValidEmail = function (value) {
                    //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    var EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    if (value == undefined || value == null || value == "") {
                        return { Result: "True", Message: 'Success' };
                    }
                    else if (!EMAIL_REGEXP.test(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Email' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                CreateCustomerController.prototype.Close = function () {
                    location.href = "#!/CustomerMaster";
                };
                //private SAPIDAutofill: Service.ISAPIDAutoFillService;
                // private SAPService: Service.ISAPIDListService;
                CreateCustomerController.$inject = ["CountryService", "StateddService", "DistrictddService", "InsertCustomerService", "IndustryDivisionService", "SalesAreaService", "AccountTypeService",
                    "IndustrialDivisionSegmentService", "SalesOfficeService", "CustomerEditService", "ShowSimilarService", "CustomerListService", "DesignationService", "DivisionDDService",
                    "IndustryCodeService", "CustomerSizeService", "$location", "$cookieStore", "CustomerStatusService", "DepartmentService", "CustomerClassService", "InsertSAPCustomerService", "CustomerSapIdAutoFillService", "LeadCustomerGetDetailsService"];
                return CreateCustomerController;
            }());
            var CreateCustomerComponentController = /** @class */ (function () {
                function CreateCustomerComponentController() {
                    this.controller = CreateCustomerController;
                    this.templateUrl = "/Scripts/App/MasterData/CreateCustomer/Template/_CreateCustomer.html";
                }
                CreateCustomerComponentController.Name = "createcustomercomponent";
                return CreateCustomerComponentController;
            }());
            app.AddComponent(CreateCustomerComponentController.Name, new CreateCustomerComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateCustomerComponent.js.map