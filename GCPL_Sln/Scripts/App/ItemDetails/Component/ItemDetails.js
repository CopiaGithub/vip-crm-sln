var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ContactMaster = GCPL.Model.InsertContactMaster;
            var CreateContactController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function CreateContactController(_CountryService, _StateService, _DistrictService, _DesignationService, _DepartmentService, _CustomerSapAutofill, _InsertService, _EditService, $location, _cookieStore, _PullContactService, _InsertSAPService) {
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
                    this.DesignationDropDown = null;
                    this.CountryDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.InsertContact = null;
                    this.DepartmentDropDown = null;
                    this.Cookie = null;
                    this.ContactID = null;
                    this.EditContact = null;
                    this.CustomerID = null;
                    this.EMAIL_REGEXP = null;
                    this.CountryService = _CountryService;
                    this.StateService = _StateService;
                    this.DistrictService = _DistrictService;
                    this.DesignationService = _DesignationService;
                    this.InsertContact = new ContactMaster();
                    this.DepartmentService = _DepartmentService;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.InsertService = _InsertService;
                    this.ContactID = $location.search().ContactID;
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                    this.PullContactService = _PullContactService;
                    this.InsertSAPService = _InsertSAPService;
                }
                CreateContactController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                    $("#txtBirDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectBirDate
                    });
                    $("#txtAnniverDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectAnniverDate
                    });
                    $("#txtSpouBirthDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectSpouBirthDate
                    });
                };
                CreateContactController.prototype.selectBirDate = function (e) {
                    document.getElementById("txtBirDate").value = e;
                };
                CreateContactController.prototype.selectAnniverDate = function (e) {
                    document.getElementById("txtAnniverDate").value = e;
                };
                CreateContactController.prototype.selectSpouBirthDate = function (e) {
                    document.getElementById("txtSpouBirthDate").value = e;
                };
                //Page Load Define Values//
                CreateContactController.prototype.Init = function () {
                    var _this = this;
                    this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    $("#errorclose").hide();
                    $("#close").hide();
                    $("#btnCreateInSAP").hide();
                    this.DesignationDropDown = this.DesignationService.Find().then((function (response) {
                        _this.DesignationDropDown = _this.DesignationService.GetDesignationName(response.data.Result);
                    }));
                    this.CountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.CountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.DepartmentDropDown = this.DepartmentService.Find().then((function (response) {
                        _this.DepartmentDropDown = _this.DepartmentService.GetDepartmentName(response.data.Result);
                    }));
                    this.StateDropDown = this.StateService.Find(this.InsertContact.CountryID = '95').then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                    if (this.ContactID == undefined || this.ContactID == null || this.ContactID == "") {
                        this.Add();
                    }
                    else {
                        this.Edit(this.ContactID);
                    }
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
                            that.InsertContact.CustomerID = ui.item.id;
                            that.Search(ui.item.id);
                            console.log(that.InsertContact.CustomerID);
                        },
                        change: function () {
                        }
                    });
                };
                CreateContactController.prototype.State = function (data) {
                    var _this = this;
                    this.StateDropDown = this.StateService.Find(this.InsertContact.CountryID = '95').then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                CreateContactController.prototype.District = function () {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.InsertContact.StateID).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                CreateContactController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CreateContactController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CreateContactController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertContact.CustomerID == undefined || this.InsertContact.CustomerID == null || this.InsertContact.CustomerID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertContact.ContactName == undefined || this.InsertContact.ContactName == null || this.InsertContact.ContactName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertContact.FOPID == undefined || this.InsertContact.FOPID == null || this.InsertContact.FOPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Designation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertContact.DepartmentID == undefined || this.InsertContact.DepartmentID == null || this.InsertContact.DepartmentID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Department", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertContact.MobileNo == undefined || this.InsertContact.MobileNo == null || this.InsertContact.MobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertContact.MobileNo != undefined && this.InsertContact.MobileNo != null && this.InsertContact.MobileNo != "") && (isNaN(this.InsertContact.MobileNo) || this.InsertContact.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertContact.PhoneNo != undefined && this.InsertContact.PhoneNo != null && this.InsertContact.PhoneNo != "") && (isNaN(this.InsertContact.PhoneNo) || this.InsertContact.PhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertContact.Email != undefined && this.InsertContact.Email != null && this.InsertContact.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertContact.Email))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid  Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertContact.PostalCode != undefined && this.InsertContact.PostalCode != null && this.InsertContact.PostalCode != "") && (isNaN(this.InsertContact.PostalCode) || this.InsertContact.PostalCode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid  Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertContact.AssistantPhone != undefined && this.InsertContact.AssistantPhone != null && this.InsertContact.AssistantPhone != "") && (isNaN(this.InsertContact.AssistantPhone) || this.InsertContact.AssistantPhone.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid  Assistant PhoneNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertContact.HomePhone != undefined && this.InsertContact.HomePhone != null && this.InsertContact.HomePhone != "") && (isNaN(this.InsertContact.HomePhone) || this.InsertContact.HomePhone.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid  Home Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.InsertContact.BirthDate = document.getElementById("txtBirDate").value;
                        this.InsertContact.AnniversaryDate = document.getElementById("txtAnniverDate").value;
                        this.InsertContact.SpouseBirthDate = document.getElementById("txtSpouBirthDate").value;
                        this.InsertContact.CountryID = '95';
                        this.InsertService.PostContact(this.InsertContact).then((function (response) {
                            if (response.data.Result != null) {
                                if (_this.ContactID > 0) {
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    _this.popupMessage("Contact ID - " + _this.ContactID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                }
                                else {
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    _this.popupMessage("Contact ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                }
                                _this.InsertContact = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Contact already exists with the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                CreateContactController.prototype.Edit = function (data) {
                    var _this = this;
                    // $("#btnCreateInSAP").show();
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertContact = _this.EditService.GetConEdit(response.data.Result);
                        if (_this.InsertContact.SAPID == null || _this.InsertContact.SAPID == undefined || _this.InsertContact.SAPID == "") {
                            $("#btnCreateInSAP").show();
                        }
                        else {
                            $("#btnCreateInSAP").hide();
                        }
                        _this.District();
                        debugger;
                        $("#txtCustomerName").val(_this.InsertContact.CompanyName);
                        if (_this.InsertContact.Status == "True") {
                            _this.InsertContact.Status = "1";
                        }
                        else {
                            _this.InsertContact.Status = "0";
                        }
                        if (_this.InsertContact.MaritalStatus == "True") {
                            _this.InsertContact.MaritalStatus = "1";
                        }
                        else if (_this.InsertContact.MaritalStatus == "False") {
                            _this.InsertContact.MaritalStatus = "0";
                        }
                        else {
                            _this.InsertContact.MaritalStatus = "";
                        }
                        if (_this.InsertContact.SmokingPreference == "True") {
                            _this.InsertContact.SmokingPreference = "1";
                        }
                        else if (_this.InsertContact.SmokingPreference == "False") {
                            _this.InsertContact.SmokingPreference = "0";
                        }
                        else {
                            _this.InsertContact.SmokingPreference = "";
                        }
                        if (_this.InsertContact.DrinkingPreference == "True") {
                            _this.InsertContact.DrinkingPreference = "1";
                        }
                        else if (_this.InsertContact.DrinkingPreference == "False") {
                            _this.InsertContact.DrinkingPreference = "0";
                        }
                        else {
                            _this.InsertContact.DrinkingPreference = "";
                        }
                        if (_this.InsertContact.MealPreference == "True") {
                            _this.InsertContact.MealPreference = "1";
                        }
                        else if (_this.InsertContact.MealPreference == "False") {
                            _this.InsertContact.MealPreference = "0";
                        }
                        else {
                            _this.InsertContact.MealPreference = "";
                        }
                    }));
                };
                CreateContactController.prototype.CreateInSAP = function () {
                    var _this = this;
                    this.InsertContact.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.InsertSAPService.PostCreateInSAP(this.InsertContact).then(function (response) {
                        if (response.data.Result != null) {
                            if (response.data.Result > 0) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Contact ID - " + _this.ContactID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            }
                            else {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Contact ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            }
                            $('#myModalAddNew').click();
                            _this.InsertContact = null;
                        }
                        else {
                            _this.HideShow();
                            _this.popupMessage("Contact already exists with the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                    });
                };
                CreateContactController.prototype.Add = function () {
                    $("#btnCreateInSAP").hide();
                    this.InsertContact.ContactID = "";
                    this.InsertContact.CustomerID = "";
                    this.InsertContact.ContactName = "";
                    this.InsertContact.MobileNo = "";
                    this.InsertContact.Email = "";
                    this.InsertContact.Address = "";
                    this.InsertContact.PostalCode = "";
                    this.InsertContact.City = "";
                    this.InsertContact.DistrictID = "";
                    this.InsertContact.Language = "";
                    this.InsertContact.Status = "1";
                    this.InsertContact.Designation = "";
                    this.InsertContact.FOPID = "";
                    this.InsertContact.DepartmentID = "";
                    this.InsertContact.PhoneNo = "";
                    this.InsertContact.RetContactID = "";
                    this.InsertContact.SAPID = "";
                    this.InsertContact.StateID = "";
                    this.InsertContact.CountryID = "";
                    this.InsertContact.AssistantName = "";
                    this.InsertContact.AssistantPhone = "";
                    this.InsertContact.HomePhone = "";
                    this.InsertContact.BirthDate = "";
                    this.InsertContact.MaritalStatus = "";
                    this.InsertContact.Spouse = "";
                    this.InsertContact.AnniversaryDate = "";
                    this.InsertContact.SpouseBirthDate = "";
                    this.InsertContact.Children = "";
                    this.InsertContact.SmokingPreference = "";
                    this.InsertContact.DrinkingPreference = "";
                    this.InsertContact.MealPreference = "";
                    this.InsertContact.Comments = "";
                };
                CreateContactController.prototype.Close = function () {
                    location.href = "#!/ContactMaster";
                };
                CreateContactController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                CreateContactController.prototype.Search = function (data) {
                    var _this = this;
                    this.CustomerSapAutofill.FindCustomerSAPID(data).then((function (response) {
                        _this.InsertContact.CustomerSAPID = _this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
                    }));
                };
                CreateContactController.$inject = ["CountryService", "StateddService", "DistrictddService", "DesignationService", "DepartmentService", "CustomerSapIdAutoFillService", "InsertContactService", "ContactEditService", "$location", "$cookieStore", "PrimaryContactService",
                    "InsertSAPContactService"];
                return CreateContactController;
            }());
            var CreateContactComponentController = /** @class */ (function () {
                function CreateContactComponentController() {
                    this.controller = CreateContactController;
                    this.templateUrl = "/Scripts/App/MasterData/CreateContact/Template/_CreateContact.html";
                }
                CreateContactComponentController.Name = "itemdetailscomponent";
                return CreateContactComponentController;
            }());
            app.AddComponent(CreateContactComponentController.Name, new CreateContactComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ItemDetails.js.map