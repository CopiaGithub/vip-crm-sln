var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ViewQuotationController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ViewQuotationController(_Accessory1Service, _Option1Service, _Accessory2Service, _Option2Service, _Accessory3Service, _Option3Service, _Accessory4Service, _Option4Service, _Accessory5Service, _Option5Service, _Accessory6Service, _Option6Service, _ViewQuoteService, _TCService, $location, _cookieStore) {
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
                    this.OpportunityNo = null;
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
                    this.ViewQuote = null;
                    this.ViewTC = null;
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
                    this.ViewQuoteService = _ViewQuoteService;
                    this.TCService = _TCService;
                    this.OpportunityNo = $location.search().OpportunityNo;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                ViewQuotationController.prototype.$onInit = function () {
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
                //Page Load Define Values//
                ViewQuotationController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                    if (this.OpportunityNo != null || this.OpportunityNo != "" || this.OpportunityNo != undefined) {
                        this.View(this.OpportunityNo);
                    }
                };
                ViewQuotationController.prototype.View = function (data) {
                    var _this = this;
                    this.ViewQuoteService.Find(this.OpportunityNo).then((function (response) {
                        _this.ViewQuote = _this.ViewQuoteService.GetQuote(response.data.Result);
                        if (_this.ViewQuote.PF1 == "0") {
                            $("#PF1").hide();
                        }
                        if (_this.ViewQuote.PF2 == "0") {
                            $("#PF2").hide();
                        }
                        if (_this.ViewQuote.PF3 == "0") {
                            $("#PF3").hide();
                        }
                        if (_this.ViewQuote.PF4 == "0") {
                            $("#PF4").hide();
                        }
                        if (_this.ViewQuote.PF5 == "0") {
                            $("#PF5").hide();
                        }
                        if (_this.ViewQuote.PF6 == "0") {
                            $("#PF6").hide();
                        }
                        if (_this.ViewQuote.PF7 == "0") {
                            $("#PF7").hide();
                        }
                        if (_this.ViewQuote.TC1 == "NA") {
                            $("#TC1").hide();
                        }
                        if (_this.ViewQuote.TC2 == "NA") {
                            $("#TC2").hide();
                        }
                        if (_this.ViewQuote.TC3 == "NA") {
                            $("#TC3").hide();
                        }
                        if (_this.ViewQuote.TC4 == "NA") {
                            $("#TC4").hide();
                        }
                        if (_this.ViewQuote.TC5 == "NA") {
                            $("#TC5").hide();
                        }
                        if (_this.ViewQuote.TC6 == "NA") {
                            $("#TC6").hide();
                        }
                        if (_this.ViewQuote.TC7 == "NA") {
                            $("#TC7").hide();
                        }
                        if (_this.ViewQuote.TC8 == "NA") {
                            $("#TC8").hide();
                        }
                        if (_this.ViewQuote.OF1 == "0") {
                            $("#OF1").hide();
                        }
                        if (_this.ViewQuote.OF2 == "0") {
                            $("#OF2").hide();
                        }
                        if (_this.ViewQuote.OF3 == "0") {
                            $("#OF3").hide();
                        }
                        if (_this.ViewQuote.OF4 == "0") {
                            $("#OF4").hide();
                        }
                        if (_this.ViewQuote.OF5 == "0") {
                            $("#OF5").hide();
                        }
                        if (_this.ViewQuote.OF6 == "0") {
                            $("#OF6").hide();
                        }
                        if (_this.ViewQuote.C1 == "0") {
                            $("#C1").hide();
                        }
                        if (_this.ViewQuote.C2 == "0") {
                            $("#C2").hide();
                        }
                        if (_this.ViewQuote.C3 == "0") {
                            $("#C3").hide();
                        }
                        if (_this.ViewQuote.C4 == "0") {
                            $("#C4").hide();
                        }
                        if (_this.ViewQuote.C5 == "0") {
                            $("#C5").hide();
                        }
                        if (_this.ViewQuote.C6 == "0") {
                            $("#C6").hide();
                        }
                        _this.Accessory1DropDown = _this.Accessory1Service.Find(_this.ViewQuote.ModelID).then((function (response) {
                            _this.Accessory1DropDown = _this.Accessory1Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory1ID = this.Accessory1DropDown[0].Accessory1ID.toString();
                        }));
                        _this.Accessory2DropDown = _this.Accessory2Service.Find(_this.ViewQuote.ModelID).then((function (response) {
                            _this.Accessory2DropDown = _this.Accessory2Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory2ID = this.Accessory2DropDown[0].Accessory2ID.toString();
                        }));
                        _this.Accessory3DropDown = _this.Accessory3Service.Find(_this.ViewQuote.ModelID).then((function (response) {
                            _this.Accessory3DropDown = _this.Accessory3Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory3ID = this.Accessory3DropDown[0].Accessory3ID.toString();
                        }));
                        _this.Accessory4DropDown = _this.Accessory4Service.Find(_this.ViewQuote.ModelID).then((function (response) {
                            _this.Accessory4DropDown = _this.Accessory4Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory4ID = this.Accessory4DropDown[0].Accessory4ID.toString();
                        }));
                        _this.Accessory5DropDown = _this.Accessory5Service.Find(_this.ViewQuote.ModelID).then((function (response) {
                            _this.Accessory5DropDown = _this.Accessory5Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory5ID = this.Accessory5DropDown[0].Accessory5ID.toString();
                        }));
                        _this.Accessory6DropDown = _this.Accessory6Service.Find(_this.ViewQuote.ModelID).then((function (response) {
                            _this.Accessory6DropDown = _this.Accessory6Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory6ID = this.Accessory6DropDown[0].Accessory6ID.toString();
                        }));
                        _this.GetOption1(_this.ViewQuote.Accessory1ID);
                        _this.GetOption2(_this.ViewQuote.Accessory2ID);
                        _this.GetOption3(_this.ViewQuote.Accessory3ID);
                        _this.GetOption4(_this.ViewQuote.Accessory4ID);
                        _this.GetOption5(_this.ViewQuote.Accessory5ID);
                        _this.GetOption6(_this.ViewQuote.Accessory6ID);
                    }));
                };
                ViewQuotationController.prototype.GetOption1 = function (data) {
                    var _this = this;
                    this.Option1DropDown = this.Option1Service.Find(this.ViewQuote.Accessory1ID).then((function (response) {
                        _this.Option1DropDown = _this.Option1Service.GetAccessory(response.data.Result);
                    }));
                };
                ViewQuotationController.prototype.GetOption2 = function (data) {
                    var _this = this;
                    this.Option2DropDown = this.Option2Service.Find(this.ViewQuote.Accessory2ID).then((function (response) {
                        _this.Option2DropDown = _this.Option2Service.GetAccessory(response.data.Result);
                    }));
                };
                ViewQuotationController.prototype.GetOption3 = function (data) {
                    var _this = this;
                    this.Option3DropDown = this.Option3Service.Find(this.ViewQuote.Accessory3ID).then((function (response) {
                        _this.Option3DropDown = _this.Option3Service.GetAccessory(response.data.Result);
                    }));
                };
                ViewQuotationController.prototype.GetOption4 = function (data) {
                    var _this = this;
                    this.Option4DropDown = this.Option4Service.Find(this.ViewQuote.Accessory4ID).then((function (response) {
                        _this.Option4DropDown = _this.Option4Service.GetAccessory(response.data.Result);
                    }));
                };
                ViewQuotationController.prototype.GetOption5 = function (data) {
                    var _this = this;
                    this.Option5DropDown = this.Option5Service.Find(this.ViewQuote.Accessory5ID).then((function (response) {
                        _this.Option5DropDown = _this.Option5Service.GetAccessory(response.data.Result);
                    }));
                };
                ViewQuotationController.prototype.GetOption6 = function (data) {
                    var _this = this;
                    this.Option6DropDown = this.Option6Service.Find(this.ViewQuote.Accessory6ID).then((function (response) {
                        _this.Option6DropDown = _this.Option6Service.GetAccessory(response.data.Result);
                    }));
                };
                ViewQuotationController.prototype.Close = function () {
                    location.href = "#!/QuotationReport";
                };
                ViewQuotationController.$inject = ["Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService", "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService", "Option6Service",
                    "ViewQuotationService", "TermsConditionInfoService", "$location", "$cookieStore",];
                return ViewQuotationController;
            }());
            var ViewQuotationComponentController = /** @class */ (function () {
                function ViewQuotationComponentController() {
                    this.controller = ViewQuotationController;
                    this.templateUrl = "/Scripts/App/ViewQuotation/Template/_ViewQuotation.html";
                }
                ViewQuotationComponentController.Name = "viewquotationcomponent";
                return ViewQuotationComponentController;
            }());
            app.AddComponent(ViewQuotationComponentController.Name, new ViewQuotationComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ViewQuotationComponent.js.map