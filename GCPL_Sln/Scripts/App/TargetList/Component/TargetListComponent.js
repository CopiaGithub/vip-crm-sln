var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var InsertTargetMaster = GCPL.Model.InsertTargetModel;
            var ShowTarget = GCPL.Model.CheckTargetModel;
            var CheckTarget = GCPL.Model.CheckParameterModel;
            var TargetListController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function TargetListController(_ZoneDDService, _YearService, _MonthService, _InsertService, _ListService, _EditService, _getAutoSalesrep1, _ZoneWiseEMPUserService, _oppType, _Del, _ProductService, _ModelService, _OppTypeService, _DivisionService, _ShowTargetService, _LeadTypeService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.LeadTypeDropDown = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.ab = null;
                    this.TargetID = null;
                    this.InsertTarget = null;
                    this.UserDropDown = null;
                    this.UserDropDown1 = null;
                    //OpportunityTypeDropDown = null;
                    this.TargetList = null;
                    this.YearDropdown = null;
                    this.ZoneDD = null;
                    this.OppTypeDropDown = null;
                    this.DivisionDropDown = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.MonthDropdown = null;
                    this.TargetSearch = null;
                    this.EditTarget = null;
                    this.RoleID = null;
                    this.UserID = null;
                    this.TOT = 0;
                    this.DivisionDropDown1 = null;
                    this.ProductDropDown1 = null;
                    this.ModelDropDown1 = null;
                    this.OppTypeDropDown1 = null;
                    this.TargetCount = null;
                    this.Cookie = null;
                    this.Show = null;
                    this.Check = null;
                    this.ZoneDDService = _ZoneDDService;
                    this.YearService = _YearService;
                    this.MonthService = _MonthService;
                    this.InsertService = _InsertService;
                    this.InsertTarget = new InsertTargetMaster();
                    this.ListService = _ListService;
                    this.TargetSearch = new GCPL.Model.TargetHeadermodel();
                    this.EditService = _EditService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.ZoneWiseEMPUserService = _ZoneWiseEMPUserService;
                    this.OpportunityTypeService = _oppType;
                    this.DeleteTargetService = _Del;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.OppTypeService = _OppTypeService;
                    this.DivisionService = _DivisionService;
                    this.ShowTargetService = _ShowTargetService;
                    this.Show = new ShowTarget();
                    this.Check = new CheckTarget();
                    this.LeadTypeService = _LeadTypeService;
                    this.Cookie = _cookieStore;
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                TargetListController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                };
                //Page Load Define Values//
                TargetListController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.MonthDropdown = this.MonthService.Find().then((function (response) {
                        _this.MonthDropdown = _this.MonthService.GetMonthDD(response.data.Result);
                    }));
                    this.YearDropdown = this.YearService.Find().then((function (response) {
                        _this.YearDropdown = _this.YearService.GetYearDD(response.data.Result);
                    }));
                    if (this.TargetSearch.Year == "" || this.TargetSearch.Year == null) {
                        this.TargetSearch.Year = "2019";
                    }
                    this.DivisionDropDown1 = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown1 = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                TargetListController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                TargetListController.prototype.Product = function () {
                    var _this = this;
                    debugger;
                    this.ProductDropDown = this.ProductService.Find(this.TargetSearch.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                TargetListController.prototype.Model = function () {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.TargetSearch).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                TargetListController.prototype.Product1 = function (data) {
                    var _this = this;
                    debugger;
                    this.ProductDropDown1 = this.ProductService.Find(data).then((function (response) {
                        _this.ProductDropDown1 = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                TargetListController.prototype.Model1 = function (data) {
                    var _this = this;
                    debugger;
                    this.ModelDropDown1 = this.ModelService.Find(data).then((function (response) {
                        _this.ModelDropDown1 = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                TargetListController.prototype.ZoneWiseUser = function () {
                    var _this = this;
                    debugger;
                    this.UserDropDown = this.ZoneWiseEMPUserService.Find(this.TargetSearch.ZoneID).then((function (response) {
                        _this.UserDropDown = _this.ZoneWiseEMPUserService.GetUserName(response.data.Result);
                    }));
                };
                TargetListController.prototype.ZoneWiseUser1 = function (data) {
                    var _this = this;
                    debugger;
                    this.UserDropDown1 = this.ZoneWiseEMPUserService.Find(this.InsertTarget.ZoneID).then((function (response) {
                        _this.UserDropDown1 = _this.ZoneWiseEMPUserService.GetUserName(response.data.Result);
                    }));
                };
                TargetListController.prototype.SearchTargetList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                TargetListController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.TOT = 0;
                    debugger;
                    this.TargetList = this.ListService.Find(this.TargetSearch).then((function (response) {
                        _this.TargetList = _this.ListService.GetTargetList(response.data.Result);
                        debugger;
                        for (var i = 0; i < _this.TargetList.length; i++) {
                            _this.TOT += parseInt(_this.TargetList[i].Quantity);
                        }
                        $('#page-loader').hide();
                        $('#search-btn-loader').hide();
                        debugger;
                        if (_this.TargetList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.TargetList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.TargetList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.TargetList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.TargetList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.TargetList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.TargetList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.TargetList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                TargetListController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                TargetListController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                TargetListController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertTarget.ID == undefined || this.InsertTarget.ID == null || this.InsertTarget.ID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Opportunity Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertTarget.DivisionID == undefined || this.InsertTarget.DivisionID == null || this.InsertTarget.DivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SBU", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertTarget.ProductID == undefined || this.InsertTarget.ProductID == null || this.InsertTarget.ProductID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Family", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertTarget.ModelID == undefined || this.InsertTarget.ModelID == null || this.InsertTarget.ModelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertTarget.ZoneID == undefined || this.InsertTarget.ZoneID == null || this.InsertTarget.ZoneID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertTarget.UserID == undefined || this.InsertTarget.UserID == null || this.InsertTarget.UserID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertTarget.Year == undefined || this.InsertTarget.Year == null || this.InsertTarget.Year == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Year", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertTarget.Month == undefined || this.InsertTarget.Month == null || this.InsertTarget.Month == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Month", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertTarget.Quantity == undefined || this.InsertTarget.Quantity == null || this.InsertTarget.Quantity == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.Check.ID = this.InsertTarget.ID;
                        this.Check.ModelID = this.InsertTarget.ModelID;
                        this.Check.UserID = this.InsertTarget.UserID;
                        this.Check.Year = this.InsertTarget.Year;
                        this.Check.Month = this.InsertTarget.Month;
                        this.TargetCount = this.ShowTargetService.Find(this.Check).then((function (response) {
                            _this.TargetCount = _this.ShowTargetService.GetTarget(response.data.Result);
                            debugger;
                            if (_this.TargetCount == "0") {
                                _this.InsertService.PostTarget(_this.InsertTarget).then((function (response) {
                                    console.log(_this.InsertTarget);
                                    if (response.data.Result != null) {
                                        $("#errorclose").hide();
                                        $("#close").show();
                                        _this.popupMessage("Target saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                        $('#myModalAddNew').click();
                                        _this.InsertTarget = null;
                                        _this.TargetList = _this.ListService.Find(_this.TargetSearch).then((function (response) {
                                            _this.TargetList = _this.ListService.GetTargetList(response.data.Result);
                                        }));
                                    }
                                    else {
                                        _this.HideShow();
                                        _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                    }
                                }));
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage(" Target Already Exists..", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                TargetListController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.EditTarget = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        _this.InsertTarget.ID = _this.EditTarget.ID;
                        _this.InsertTarget.DivisionID = _this.EditTarget.DivisionID;
                        // this.InsertTarget.LeadTypeID = this.InsertTarget.LeadTypeID.toString();                              
                        _this.ProductDropDown1 = _this.ProductService.Find(_this.EditTarget.DivisionID).then((function (response) {
                            _this.ProductDropDown1 = _this.ProductService.GetProductName(response.data.Result);
                            _this.InsertTarget.ProductID = _this.EditTarget.ProductID;
                            _this.ModelDropDown1 = _this.ModelService.Find(_this.EditTarget).then((function (response) {
                                _this.ModelDropDown1 = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                                _this.InsertTarget.ModelID = _this.EditTarget.ModelID;
                            }));
                        }));
                        // this.Model1(this.InsertTarget);
                        // this.InsertTarget.ModelID = this.InsertTarget.ModelID.toString();
                        //  this.InsertTarget.ZoneID = this.InsertTarget.ZoneID.toString();
                        _this.InsertTarget.ZoneID = _this.EditTarget.ZoneID;
                        _this.UserDropDown1 = _this.ZoneWiseEMPUserService.Find(_this.EditTarget.ZoneID).then((function (response) {
                            _this.UserDropDown1 = _this.ZoneWiseEMPUserService.GetUserName(response.data.Result);
                            _this.InsertTarget.UserID = _this.EditTarget.UserID;
                        }));
                        //this.ZoneWiseUser1(this.InsertTarget.ZoneID);
                        // this.InsertTarget.UserID = this.InsertTarget.UserID.toString();
                        _this.InsertTarget.Month = _this.EditTarget.Month;
                        _this.InsertTarget.Year = _this.EditTarget.Year;
                        _this.InsertTarget.Quantity = _this.EditTarget.Quantity;
                        $("myModalAddNew").show();
                    }));
                };
                TargetListController.prototype.DeleteTarget = function (TargetID) {
                    var _this = this;
                    this.DeleteTargetService.Find(TargetID).then((function (response) {
                        _this.DeleteTargetService.postTargetDelete(response.data.Result);
                        $("#errorclose").hide();
                        $("#close").show();
                        _this.popupMessage("Record deleted successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        _this.TargetList = _this.ListService.Find(_this.TargetSearch).then((function (response) {
                            _this.TargetList = _this.ListService.GetTargetList(response.data.Result);
                        }));
                    }));
                };
                TargetListController.prototype.Add = function () {
                    //this.InsertTarget.TargetID = "";
                    this.InsertTarget.ID = "";
                    this.InsertTarget.DivisionID = "";
                    this.InsertTarget.ZoneID = "";
                    this.InsertTarget.ProductID = "";
                    this.InsertTarget.ModelID = "";
                    this.InsertTarget.UserID = "";
                    this.InsertTarget.Year = "";
                    this.InsertTarget.Month = "";
                    this.InsertTarget.Quantity = "";
                };
                TargetListController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                TargetListController.prototype.Clear = function () {
                    this.TargetSearch.ID = "";
                    this.TargetSearch.DivisionID = "";
                    this.TargetSearch.ZoneID = "";
                    this.TargetSearch.ProductID = "";
                    this.TargetSearch.ModelID = "";
                    this.TargetSearch.UserID = "";
                    this.TargetSearch.Year = "";
                    this.TargetSearch.Month = "";
                };
                TargetListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.TargetList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                TargetListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.TargetList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                TargetListController.prototype.Close = function () {
                    location.href = "#!/TargetList";
                };
                TargetListController.$inject = ["ZoneDDService", "YearddService", "MonthddService", "InsertTargetService", "TargetListService", "TargetEditService", "EmployeeAtofillService", "ZoneWiseEMPUserService", "OpportunityTypeService", "DeleteTargetService", "ProductddService", "LeadTypeProductService", "OpportunityTypeddService", "DivisionService", "ShowExistingTargetListService", "LeadTypeddService", "$cookieStore"];
                return TargetListController;
            }());
            var TargetListComponentController = /** @class */ (function () {
                function TargetListComponentController() {
                    this.controller = TargetListController;
                    this.templateUrl = "/Scripts/App/TargetList/Template/TargetList.html";
                }
                TargetListComponentController.Name = "targetlistcomponent";
                return TargetListComponentController;
            }());
            app.AddComponent(TargetListComponentController.Name, new TargetListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=TargetListComponent.js.map