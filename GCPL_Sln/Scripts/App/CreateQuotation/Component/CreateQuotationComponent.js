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
                function CreateQuotationController(_Accessory1Service, _Option1Service, _Accessory2Service, _Option2Service, _Accessory3Service, _Option3Service, _Accessory4Service, _Option4Service, _Accessory5Service, _Option5Service, _Accessory6Service, _Option6Service, _Configuration1Service, _Configuration2Service, _SOSService, _COLService, _PFService, _TCService, _OfferService, _CapabilityService, _TotalPriceCalService, _InsertService, $location, _cookieStore) {
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
                    this.Accessory2DropDown = null;
                    this.Option2DropDown = null;
                    this.Accessory3DropDown = null;
                    this.Option3DropDown = null;
                    this.Accessory4DropDown = null;
                    this.Option4DropDown = null;
                    this.Accessory5DropDown = null;
                    this.Option5DropDown = null;
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
                    this.TotalPriceCalService = _TotalPriceCalService;
                    this.TotalPriceModel = new GSTCalculation();
                    this.OpportunitySAPNo = $location.search().OpportunitySAPNo;
                    this.QuotationRefernce = $location.search().QuotationRefernce;
                    this.InsertService = _InsertService;
                    this.InsertQuotation = new Quotation();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                CreateQuotationController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    /* Add row code started */
                    var tableBody = document.getElementById("table-bdy");
                    var addBtn = document.getElementById("add-row");
                    var nRow = document.getElementsByClassName("n-row");
                    var rowData = document.getElementById("acc-drop").innerHTML;
                    addBtn.addEventListener("click", function () {
                        var row = tableBody.insertRow(5);
                        var cell0 = row.insertCell(0);
                        var cell1 = row.insertCell(1);
                        var cell2 = row.insertCell(2);
                        var cell3 = row.insertCell(3);
                        var deleteBtn = document.createElement("button");
                        var deleteBtnText = document.createTextNode("Delete");
                        deleteBtn.appendChild(deleteBtnText);
                        cell0.innerHTML = "";
                        cell1.innerHTML = rowData + "" + "<button class='del-btn'>Delete</button>";
                        cell1.classList.add("n-row");
                        cell2.innerHTML = "";
                        cell3.innerHTML = "";
                    });
                    /* Add row code ended */
                    var delRow = document.getElementsByClassName("del-btn");
                    for (var j = 0; j < delRow.length; j++) {
                        delRow[j].addEventListener("click", function () {
                            alert("actie...");
                        });
                    }
                };
                CreateQuotationController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                //Page Load Define Values//
                CreateQuotationController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                    var n1 = new Date();
                    var y1 = n1.getFullYear();
                    var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m1 = months1[n1.getMonth()];
                    var d1 = n1.getDate();
                    document.getElementById("txtFromDate").innerHTML = d1 + " " + m1 + " " + y1;
                    $('#txtFromDate').val(d1 + " " + m1 + " " + y1);
                    //$("#txtFromDate").datepicker({ maxDate: 0 });
                    document.getElementById("txtFromDate").value;
                    $("#txtFromDate").datepicker({
                        dateFormat: 'dd M yy',
                        changeMonth: true,
                        changeYear: true,
                        maxDate: 0,
                        onSelect: this.selectFromDate
                    });
                    if (this.OpportunitySAPNo != null || this.OpportunitySAPNo != "" || this.OpportunitySAPNo != undefined) {
                        this.InsertQuotation.OpportunitySAPNo = this.OpportunitySAPNo;
                        this.Edit(this.OpportunitySAPNo);
                    }
                };
                CreateQuotationController.prototype.Edit = function (data) {
                    var _this = this;
                    this.SOSService.Find(data).then((function (response) {
                        _this.ViewSOS = _this.SOSService.GetSOS(response.data.Result);
                        _this.InsertQuotation.StdConfiguration = _this.ViewSOS.StdConfiguration;
                        _this.InsertQuotation.Price = _this.ViewSOS.Price;
                        _this.InsertQuotation.Quantity = _this.ViewSOS.Quantity;
                        _this.InsertQuotation.GSTRate = _this.ViewSOS.GSTRate;
                        _this.InsertQuotation.ModelID = _this.ViewSOS.ModelID;
                        _this.InsertQuotation.ModelDescription = _this.ViewSOS.ModelDescription;
                        _this.Accessory1DropDown = _this.Accessory1Service.Find(_this.InsertQuotation.ModelID).then((function (response) {
                            _this.Accessory1DropDown = _this.Accessory1Service.GetAccessoryName(response.data.Result);
                        }));
                        _this.Accessory2DropDown = _this.Accessory2Service.Find(_this.InsertQuotation.ModelID).then((function (response) {
                            _this.Accessory2DropDown = _this.Accessory2Service.GetAccessoryName(response.data.Result);
                        }));
                        _this.Accessory3DropDown = _this.Accessory3Service.Find(_this.InsertQuotation.ModelID).then((function (response) {
                            _this.Accessory3DropDown = _this.Accessory3Service.GetAccessoryName(response.data.Result);
                        }));
                        _this.Accessory4DropDown = _this.Accessory4Service.Find(_this.InsertQuotation.ModelID).then((function (response) {
                            _this.Accessory4DropDown = _this.Accessory4Service.GetAccessoryName(response.data.Result);
                        }));
                        _this.Accessory5DropDown = _this.Accessory5Service.Find(_this.InsertQuotation.ModelID).then((function (response) {
                            _this.Accessory5DropDown = _this.Accessory5Service.GetAccessoryName(response.data.Result);
                        }));
                        _this.Accessory6DropDown = _this.Accessory6Service.Find(_this.InsertQuotation.ModelID).then((function (response) {
                            _this.Accessory6DropDown = _this.Accessory6Service.GetAccessoryName(response.data.Result);
                        }));
                    }));
                    this.COLService.Find(data).then((function (response) {
                        _this.ViewCOL = _this.COLService.GetCL(response.data.Result);
                        _this.InsertQuotation.QuoteRange = _this.ViewCOL.QuoteRange;
                    }));
                    this.PFService.Find(data).then((function (response) {
                        _this.ViewPF = _this.PFService.GetPF(response.data.Result);
                    }));
                    this.TCService.Find().then((function (response) {
                        _this.ViewTC = _this.TCService.GetTC(response.data.Result);
                    }));
                    this.OfferService.Find().then((function (response) {
                        _this.ViewOffer = _this.OfferService.GetOffer(response.data.Result);
                    }));
                    this.CapabilityService.Find().then((function (response) {
                        _this.ViewCapability = _this.CapabilityService.GetCapability(response.data.Result);
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
                    if ($("#chkPF1").prop('checked') == true) {
                        this.InsertQuotation.PF1 = "1";
                    }
                    if ($("#chkPF2").prop('checked') == true) {
                        this.InsertQuotation.PF2 = "2";
                    }
                    if ($("#chkPF3").prop('checked') == true) {
                        this.InsertQuotation.PF3 = "3";
                    }
                    if ($("#chkPF4").prop('checked') == true) {
                        this.InsertQuotation.PF4 = "4";
                    }
                    if ($("#chkPF5").prop('checked') == true) {
                        this.InsertQuotation.PF5 = "5";
                    }
                    if ($("#chkPF6").prop('checked') == true) {
                        this.InsertQuotation.PF6 = "6";
                    }
                    if ($("#chkPF7").prop('checked') == true) {
                        this.InsertQuotation.PF7 = "7";
                    }
                    if ($("#chkPF8").prop('checked') == true) {
                        this.InsertQuotation.PF1 = "8";
                    }
                    if ($("#chkPF9").prop('checked') == true) {
                        this.InsertQuotation.PF2 = "9";
                    }
                    if ($("#chkPF10").prop('checked') == true) {
                        this.InsertQuotation.PF3 = "10";
                    }
                    if ($("#chkPF11").prop('checked') == true) {
                        this.InsertQuotation.PF4 = "11";
                    }
                    if ($("#chkPF12").prop('checked') == true) {
                        this.InsertQuotation.PF5 = "12";
                    }
                    if ($("#chkPF13").prop('checked') == true) {
                        this.InsertQuotation.PF1 = "13";
                    }
                    if ($("#chkPF14").prop('checked') == true) {
                        this.InsertQuotation.PF2 = "14";
                    }
                    if ($("#chkPF15").prop('checked') == true) {
                        this.InsertQuotation.PF3 = "15";
                    }
                    if ($("#chkPF16").prop('checked') == true) {
                        this.InsertQuotation.PF4 = "16";
                    }
                    if ($("#chkPF17").prop('checked') == true) {
                        this.InsertQuotation.PF1 = "17";
                    }
                    if ($("#chkPF18").prop('checked') == true) {
                        this.InsertQuotation.PF2 = "18";
                    }
                    if ($("#chkPF19").prop('checked') == true) {
                        this.InsertQuotation.PF3 = "19";
                    }
                    if ($("#chkPF20").prop('checked') == true) {
                        this.InsertQuotation.PF4 = "20";
                    }
                    if ($("#chkPF21").prop('checked') == true) {
                        this.InsertQuotation.PF5 = "21";
                    }
                    if ($("#chkPF22").prop('checked') == true) {
                        this.InsertQuotation.PF6 = "22";
                    }
                    if ($("#chkTC1").prop('checked') == true) {
                        this.InsertQuotation.TC1 = $("#txtTC1").val();
                        this.InsertQuotation.TC1ID = 1;
                    }
                    if ($("#chkTC2").prop('checked') == true) {
                        this.InsertQuotation.TC2 = $("#txtTC2").val();
                        this.InsertQuotation.TC2ID = 2;
                    }
                    if ($("#chkTC3").prop('checked') == true) {
                        this.InsertQuotation.TC3 = $("#txtTC3").val();
                        this.InsertQuotation.TC3ID = 3;
                    }
                    if ($("#chkTC4").prop('checked') == true) {
                        this.InsertQuotation.TC4 = $("#txtTC4").val();
                        this.InsertQuotation.TC4ID = 4;
                    }
                    if ($("#chkTC5").prop('checked') == true) {
                        this.InsertQuotation.TC5 = $("#txtTC5").val();
                        this.InsertQuotation.TC5ID = 5;
                    }
                    if ($("#chkTC6").prop('checked') == true) {
                        this.InsertQuotation.TC6 = $("#txtTC6").val();
                        this.InsertQuotation.TC6ID = 6;
                    }
                    if ($("#chkTC7").prop('checked') == true) {
                        this.InsertQuotation.TC7 = $("#txtTC7").val();
                        this.InsertQuotation.TC7ID = 7;
                    }
                    if ($("#chkTC8").prop('checked') == true) {
                        this.InsertQuotation.TC8 = $("#txtTC8").val();
                        this.InsertQuotation.TC8ID = 8;
                    }
                    if ($("#chkOffer1").prop('checked') == true) {
                        this.InsertQuotation.Offer1 = "1";
                    }
                    if ($("#chkOffer2").prop('checked') == true) {
                        this.InsertQuotation.Offer2 = "2";
                    }
                    if ($("#chkOffer3").prop('checked') == true) {
                        this.InsertQuotation.Offer3 = "3";
                    }
                    if ($("#chkOffer4").prop('checked') == true) {
                        this.InsertQuotation.Offer4 = "4";
                    }
                    if ($("#chkOffer5").prop('checked') == true) {
                        this.InsertQuotation.Offer5 = "5";
                    }
                    if ($("#chkOffer6").prop('checked') == true) {
                        this.InsertQuotation.Offer6 = "6";
                    }
                    if ($("#chkCapability1").prop('checked') == true) {
                        this.InsertQuotation.Capability1 = "1";
                    }
                    if ($("#chkCapability2").prop('checked') == true) {
                        this.InsertQuotation.Capability2 = "2";
                    }
                    if ($("#chkCapability3").prop('checked') == true) {
                        this.InsertQuotation.Capability3 = "3";
                    }
                    if ($("#chkCapability4").prop('checked') == true) {
                        this.InsertQuotation.Capability4 = "4";
                    }
                    if ($("#chkCapability5").prop('checked') == true) {
                        this.InsertQuotation.Capability5 = "5";
                    }
                    if ($("#chkCapability6").prop('checked') == true) {
                        this.InsertQuotation.Capability6 = "6";
                    }
                    this.InsertQuotation.ContactName = this.ViewCOL.ContactName;
                    this.InsertQuotation.CustomerAddress = this.ViewCOL.Address;
                    if (this.InsertQuotation.TotalPrice == undefined || this.InsertQuotation.TotalPrice == null || this.InsertQuotation.TotalPrice == "") {
                        this.HideShow();
                        this.popupMessage("Please Check Total Price.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertQuotation.UserID = this.UserID;
                        if (this.UserID != null || this.UserID != "") {
                            this.InsertQuotation.UserID = this.UserID;
                        }
                        this.InsertQuotation.QuoteDate = document.getElementById("txtFromDate").value;
                        this.InsertService.PostQuote(this.InsertQuotation).then((function (response) {
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Quotation Reference - " + _this.InsertQuotation.QuoteRange + "  Created Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.InsertQuotation = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
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
                CreateQuotationController.$inject = ["Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService", "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService", "Option6Service", "Configuration1DDService", "Configuration2DDService", "ScopeofSupplyService", "CoveringLetterInfoService", "ProductFeaturesInfoService",
                    "TermsConditionInfoService", "OfferingInfoService", "CapabilitiesInfoService", "TotalPriceService", "InsertQuotationService", "$location", "$cookieStore"];
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