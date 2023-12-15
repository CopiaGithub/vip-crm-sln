var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var CreateRegistration = GCPL.Model.InsertRegistrationContactModel;
            var CustomerDetails = GCPL.Model.ExistingCustomerDetailsListModel;
            var contactinfo = GCPL.Model.ExistingContactDetailsListModel;
            var RegistrationContactNewController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function RegistrationContactNewController(_CustomerSapAutofill, _InsertService, _CountryService, _StateService, _DistrictService, _DesignationService, _DepartmentService, _CustomerInfoService, _ContactService, _ContactInfoService, _EditService, _Updateservice, $location, _cookieStore) {
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
                    this.CustomerID = null;
                    this.AppContactID = null;
                    this.UpdateContact = null;
                    this.InsertCustRegistration = null;
                    this.InsertRegistration = null;
                    this.ContactDropDown = null;
                    this.DesignationDropDown = null;
                    this.CustCountryDropDown = null;
                    this.CustStateDropDown = null;
                    this.CustDistrictDropDown = null;
                    this.AddConCountryDropDown = null;
                    this.AddConStateDropDown = null;
                    this.AddConDistrictDropDown = null;
                    this.DepartmentDropDown = null;
                    this.ContactID = null;
                    this.InsertContact = null;
                    this.Checked = null;
                    this.Contactinfo = null;
                    this.EditRegistrationContact = null;
                    this.SelectedContactID = null;
                    this.EMAIL_REGEXP = null;
                    this.Cookie = null;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.CustomerInfoService = _CustomerInfoService;
                    this.ContactInfoService = _ContactInfoService;
                    this.InsertService = _InsertService;
                    this.InsertRegistration = new CreateRegistration();
                    this.InsertCustRegistration = new CustomerDetails();
                    this.ContactService = _ContactService;
                    this.Contactinfo = new contactinfo();
                    this.CountryService = _CountryService;
                    this.StateService = _StateService;
                    this.DistrictService = _DistrictService;
                    this.DesignationService = _DesignationService;
                    this.DepartmentService = _DepartmentService;
                    this.EditService = _EditService;
                    this.Updateservice = _Updateservice;
                    this.AppContactID = $location.search().AppContactID;
                    this.Cookie = _cookieStore;
                }
                RegistrationContactNewController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.Checked = false;
                    $('#divtxtContactname').hide();
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                };
                //Page Load Define Values//
                RegistrationContactNewController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    //$('#divtxtContactname').hide();
                    var existingLink = document.getElementById("txtexist");
                    var newLink = document.getElementById("txtnew");
                    var newFieldPanel = document.getElementById("divddlContactName");
                    var existingFieldPanel = document.getElementById("divtxtContactname");
                    existingLink.addEventListener("click", function () {
                        newFieldPanel.style.display = "initial";
                        existingFieldPanel.style.display = "none";
                    });
                    newLink.addEventListener("click", function () {
                        newFieldPanel.style.display = "none";
                        existingFieldPanel.style.display = "initial";
                    });
                    debugger;
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
                            that.InsertRegistration.CustomerID = ui.item.id;
                            that.InsertRegistration.CompanyName = ui.item.value;
                            that.Search(ui.item.id);
                            console.log(that.InsertCustRegistration.CompanyName);
                        },
                        change: function () {
                        }
                    });
                    this.DesignationDropDown = this.DesignationService.Find().then((function (response) {
                        _this.DesignationDropDown = _this.DesignationService.GetDesignationName(response.data.Result);
                    }));
                    this.CustCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.CustCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.AddConCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.AddConCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.DepartmentDropDown = this.DepartmentService.Find().then((function (response) {
                        _this.DepartmentDropDown = _this.DepartmentService.GetDepartmentName(response.data.Result);
                    }));
                    if (this.AppContactID == undefined || this.AppContactID == null || this.AppContactID == "") {
                        this.Add();
                    }
                    else {
                        this.Edit(this.AppContactID);
                    }
                };
                RegistrationContactNewController.prototype.CustState = function (data) {
                    var _this = this;
                    this.CustStateDropDown = this.StateService.Find(this.InsertRegistration.CountryID).then((function (response) {
                        _this.CustStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                RegistrationContactNewController.prototype.CustDistrict = function (data) {
                    var _this = this;
                    this.CustDistrictDropDown = this.DistrictService.Find(this.InsertRegistration.StateID).then((function (response) {
                        _this.CustDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                RegistrationContactNewController.prototype.AddConState = function (data) {
                    var _this = this;
                    this.AddConStateDropDown = this.StateService.Find(this.InsertRegistration.ContactCountryID).then((function (response) {
                        _this.AddConStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                RegistrationContactNewController.prototype.AddConDistrict = function (data) {
                    var _this = this;
                    this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertRegistration.ContactStateID).then((function (response) {
                        _this.AddConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                RegistrationContactNewController.prototype.Search = function (data) {
                    var _this = this;
                    debugger;
                    this.CustomerInfoService.Find(data).then((function (response) {
                        _this.InsertCustRegistration = _this.CustomerInfoService.GetCustomerDetails(response.data.Result);
                        console.log(_this.InsertCustRegistration);
                        debugger;
                        _this.InsertRegistration.CustomerID = _this.InsertCustRegistration.CustomerID;
                        _this.Contactinfo.CustomerID = _this.InsertRegistration.CustomerID;
                        _this.Contact(_this.Contactinfo.CustomerID);
                        _this.InsertRegistration.Address1 = _this.InsertCustRegistration.Address1;
                        _this.InsertRegistration.Address2 = _this.InsertCustRegistration.Address2;
                        _this.InsertRegistration.Email = _this.InsertCustRegistration.Email;
                        _this.InsertRegistration.MobileNo = _this.InsertCustRegistration.MobileNo;
                        _this.InsertRegistration.PhoneNo = _this.InsertCustRegistration.PhoneNo;
                        _this.InsertRegistration.Fax = _this.InsertCustRegistration.Fax;
                        _this.InsertRegistration.CountryID = _this.InsertCustRegistration.CountryID;
                        _this.CustState(_this.InsertCustRegistration.CountryID);
                        _this.InsertRegistration.StateID = _this.InsertCustRegistration.StateID;
                        _this.CustDistrict(_this.InsertCustRegistration.StateID);
                        _this.InsertRegistration.DistrictID = _this.InsertCustRegistration.DistrictID;
                        _this.InsertRegistration.City = _this.InsertCustRegistration.City;
                        _this.InsertRegistration.PinCode = _this.InsertCustRegistration.PinCode;
                        $('#txtCountry').val(_this.InsertCustRegistration.CountryID);
                    }));
                };
                RegistrationContactNewController.prototype.Contact = function (data) {
                    var _this = this;
                    this.ContactDropDown = this.ContactService.Find(data).then((function (response) {
                        _this.ContactDropDown = _this.ContactService.GetContactName(response.data.Result);
                        debugger;
                        _this.InsertRegistration.ContactID = _this.ContactDropDown.ContactID;
                        _this.InsertRegistration.ContactName = _this.ContactDropDown.ContactName;
                    }));
                };
                RegistrationContactNewController.prototype.ContactDetail = function (data) {
                    var _this = this;
                    debugger;
                    this.ContactInfoService.Find(this.InsertRegistration.ContactID).then((function (response) {
                        _this.Contactinfo = _this.ContactInfoService.GetContactDetails(response.data.Result);
                        console.log(_this.Contactinfo);
                        debugger;
                        _this.InsertRegistration.ContactName = _this.Contactinfo.ContactName;
                        _this.InsertRegistration.ContactID = _this.Contactinfo.ContactID;
                        _this.InsertRegistration.ContactEmail = _this.Contactinfo.ContactEmail;
                        _this.InsertRegistration.ContactMobileNo = _this.Contactinfo.ContactMobileNo;
                        _this.InsertRegistration.ContactPhoneNo = _this.Contactinfo.ContactPhoneNo;
                        _this.InsertRegistration.Designation = _this.Contactinfo.Designation;
                        _this.InsertRegistration.DepartmentID = _this.Contactinfo.DepartmentID;
                        _this.InsertRegistration.FOPID = _this.Contactinfo.FOPID;
                        _this.InsertRegistration.Address = _this.Contactinfo.Address;
                        _this.InsertRegistration.ContactCountryID = _this.Contactinfo.ContactCountryID;
                        _this.AddConState(_this.Contactinfo.ContactCountryID);
                        _this.InsertRegistration.ContactStateID = _this.Contactinfo.ContactStateID;
                        _this.AddConDistrict(_this.Contactinfo.ContactStateID);
                        _this.InsertRegistration.ContactDistrictID = _this.Contactinfo.ContactDistrictID;
                        _this.InsertRegistration.ContactCity = _this.Contactinfo.ContactCity;
                        _this.InsertRegistration.PostalCode = _this.Contactinfo.PostalCode;
                        _this.InsertRegistration.IsActive = _this.Contactinfo.IsActive;
                    }));
                };
                RegistrationContactNewController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                RegistrationContactNewController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                RegistrationContactNewController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertRegistration.CustomerID == undefined || this.InsertRegistration.CustomerID == null || this.InsertRegistration.CustomerID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.MobileNo == undefined || this.InsertRegistration.MobileNo == null || this.InsertRegistration.MobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter  Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertRegistration.MobileNo != undefined && this.InsertRegistration.MobileNo != null && this.InsertRegistration.MobileNo != "") && (isNaN(this.InsertRegistration.MobileNo) || this.InsertRegistration.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.Email == undefined || this.InsertRegistration.Email == null || this.InsertRegistration.Email == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.Email != undefined && this.InsertRegistration.Email != null && this.InsertRegistration.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertRegistration.Email))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.Address1 == undefined || this.InsertRegistration.Address1 == null || this.InsertRegistration.Address1 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.DistrictID == undefined || this.InsertRegistration.DistrictID == null || this.InsertRegistration.DistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.PinCode == undefined || this.InsertRegistration.PinCode == null || this.InsertRegistration.PinCode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer PinCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertRegistration.PinCode != undefined && this.InsertRegistration.PinCode != null && this.InsertRegistration.PinCode != "") && (isNaN(this.InsertRegistration.PinCode) || this.InsertRegistration.PinCode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid PinCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.Designation == undefined || this.InsertRegistration.Designation == null || this.InsertRegistration.Designation == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Designation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.FOPID == undefined || this.InsertRegistration.FOPID == null || this.InsertRegistration.FOPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter FOPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.DepartmentID == undefined || this.InsertRegistration.DepartmentID == null || this.InsertRegistration.DepartmentID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Department", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.Address == undefined || this.InsertRegistration.Address == null || this.InsertRegistration.Address == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact Address", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.ContactDistrictID == undefined || this.InsertRegistration.ContactDistrictID == null || this.InsertRegistration.ContactDistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.PostalCode == undefined || this.InsertRegistration.PostalCode == null || this.InsertRegistration.PostalCode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact PostalCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertRegistration.PostalCode != undefined && this.InsertRegistration.PostalCode != null && this.InsertRegistration.PostalCode != "") && (isNaN(this.InsertRegistration.PostalCode) || this.InsertRegistration.PostalCode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact PostalCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.ContactMobileNo == undefined || this.InsertRegistration.ContactMobileNo == null || this.InsertRegistration.ContactMobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertRegistration.ContactMobileNo != undefined && this.InsertRegistration.ContactMobileNo != null && this.InsertRegistration.ContactMobileNo != "") && (isNaN(this.InsertRegistration.MobileNo) || this.InsertRegistration.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertRegistration.Password == undefined || this.InsertRegistration.Password == null || this.InsertRegistration.Password == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Password", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.InsertService.PostRegistrationContact(this.InsertRegistration).then((function (response) {
                            console.log(_this.InsertRegistration);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Registration Contact saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.InsertRegistration = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                RegistrationContactNewController.prototype.Add = function () {
                    debugger;
                    $('#HidePassword').show();
                    $('#HideStatus').hide();
                    $('#divddlContactName').show();
                    $('#btnupdate').hide();
                    $('#btnSubmit').show();
                    this.InsertRegistration.AppContactID = "";
                    this.InsertRegistration.AppCustomerID = "";
                    this.InsertRegistration.ContactID = "";
                    this.InsertRegistration.CustomerID = "";
                    this.InsertRegistration.CompanyName = "";
                    this.InsertRegistration.Email = "";
                    this.InsertRegistration.MobileNo = "";
                    this.InsertRegistration.PhoneNo = "";
                    this.InsertRegistration.Fax = "";
                    this.InsertRegistration.Address1 = "";
                    this.InsertRegistration.Address2 = "";
                    this.InsertRegistration.CountryID = "";
                    this.InsertRegistration.StateID = "";
                    this.InsertRegistration.DistrictID = "";
                    this.InsertRegistration.City = "";
                    this.InsertRegistration.PinCode = "";
                    //add contact
                    this.InsertRegistration.ContactName = "";
                    this.InsertRegistration.ContactEmail = "";
                    this.InsertRegistration.ContactMobileNo = "";
                    this.InsertRegistration.ContactPhoneNo = "";
                    this.InsertRegistration.Designation = "";
                    this.InsertRegistration.DepartmentID = "";
                    this.InsertRegistration.FOPID = "";
                    this.InsertRegistration.Address = "";
                    this.InsertRegistration.ContactCountryID = "";
                    this.InsertRegistration.ContactDistrictID = "";
                    this.InsertRegistration.ContactStateID = "";
                    this.InsertRegistration.ContactCity = "";
                    this.InsertRegistration.PostalCode = "";
                    this.InsertRegistration.Password = "";
                    this.InsertRegistration.IsActive = "";
                };
                RegistrationContactNewController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    $('#HidePassword').show();
                    $('#HideStatus').show();
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertRegistration = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        $('#divtxtContactname').show();
                        $('#divddlContactName').hide();
                        $('#btnupdate').show();
                        $('#btnSubmit').hide();
                        _this.InsertCustRegistration.CustomerID = _this.InsertRegistration.CustomerID;
                        _this.Contactinfo.CustomerID = _this.InsertRegistration.CustomerID;
                        $('#txtCustomerName').val(_this.InsertRegistration.CompanyName);
                        $('#txtEmail').val(_this.InsertRegistration.Email);
                        $('#txtMobileNo').val(_this.InsertRegistration.MobileNo);
                        $('#txtphoneno').val(_this.InsertRegistration.PhoneNo);
                        $('#txtfax').val(_this.InsertRegistration.Fax);
                        $('#txtadd1').val(_this.InsertRegistration.Address1);
                        $('#txtadd2').val(_this.InsertRegistration.Address2);
                        $('#txtCountry').val(_this.InsertRegistration.CountryID);
                        _this.CustState(_this.InsertRegistration.CountryID);
                        $('#txtState').val(_this.InsertRegistration.StateID);
                        _this.CustDistrict(_this.InsertRegistration.StateID);
                        $('#txtDistrict').val(_this.InsertRegistration.DistrictID);
                        $('#txtCity').val(_this.InsertRegistration.City);
                        $('#txtCode').val(_this.InsertRegistration.PinCode);
                        //$('#txtContactName').val(this.InsertRegistration.ContactID);
                        $('#txtContactName').val(_this.InsertRegistration.ContactName);
                        $('#txtConEmail').val(_this.InsertRegistration.ContactEmail);
                        $('#txtConMobile').val(_this.InsertRegistration.ContactMobileNo);
                        $('#txtConPhone').val(_this.InsertRegistration.ContactPhoneNo);
                        $('#txtdesign').val(_this.InsertRegistration.Designation);
                        $('#txtDepart').val(_this.InsertRegistration.DepartmentID);
                        $('#txtFOP').val(_this.InsertRegistration.FOPID);
                        $('#txtadd').val(_this.InsertRegistration.Address);
                        $('#txtcontcountry').val(_this.InsertRegistration.ContactCountryID);
                        _this.AddConState(_this.InsertRegistration.ContactCountryID);
                        $('#txtConState').val(_this.InsertRegistration.ContactStateID);
                        _this.AddConDistrict(_this.InsertRegistration.ContactStateID);
                        $('#txtConDistrict').val(_this.InsertRegistration.ContactDistrictID);
                        $('#txtConCity').val(_this.InsertRegistration.ContactCity);
                        $('#txtConPin').val(_this.InsertRegistration.PostalCode);
                        $('#txtcontpwd').val(_this.InsertRegistration.Password);
                        if (_this.InsertRegistration.IsActive == "True") {
                            _this.InsertRegistration.IsActive = "1";
                        }
                        else {
                            _this.InsertRegistration.IsActive = "0";
                        }
                    }));
                };
                RegistrationContactNewController.prototype.Update = function () {
                    var _this = this;
                    debugger;
                    this.Updateservice.PostUpdateContact(this.InsertRegistration).then((function (response) {
                        console.log(_this.InsertRegistration);
                        if (response.data.Result != null) {
                            $("#errorclose").hide();
                            $("#close").show();
                            _this.popupMessage("Data saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            _this.InsertRegistration = null;
                        }
                        else {
                            _this.HideShow();
                            _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                    }));
                };
                RegistrationContactNewController.prototype.Close = function () {
                    location.href = "#!/RegistrationContact";
                };
                RegistrationContactNewController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                RegistrationContactNewController.$inject = ["CustomerSapIdAutoFillService", "InsertRegistrationContactService", "CountryService", "StateddService", "DistrictddService",
                    "DesignationService", "DepartmentService", "ExistingCustomerDetailsService", "ContactInfo1Service", "ExistingContactDetailsService", "RegistrationContactEditService", "UpdateContactNewService", "$location", "$cookieStore"];
                return RegistrationContactNewController;
            }());
            var RegistrationContactNewComponentController = /** @class */ (function () {
                function RegistrationContactNewComponentController() {
                    this.controller = RegistrationContactNewController;
                    this.templateUrl = "/Scripts/App/RegistrationContactNew/Template/RegistrationContactNew.html";
                }
                RegistrationContactNewComponentController.Name = "registrationcontactnewcomponent";
                return RegistrationContactNewComponentController;
            }());
            app.AddComponent(RegistrationContactNewComponentController.Name, new RegistrationContactNewComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RegistrationContactNewComponent.js.map