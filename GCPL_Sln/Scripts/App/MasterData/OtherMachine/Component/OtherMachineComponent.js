var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var OtherMachinesHeader = GCPL.Model.OtherMachinesHeaderModel;
            var InsertOM = GCPL.Model.OtherMachinesEditModel;
            var OtherMachineController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function OtherMachineController(_OtherMService, _EOtherMservice, _InsertOMService, _ProductDService, _ModelService, _CompetitorDService, _CompProductService, _CompModelService, _CustomerAutofill, _DeleCompetitor, _cookieStore) {
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
                    this.MachineId = null;
                    // ProductDDown = null;
                    //  ModelDropDown = null;
                    this.CompetitorNameDDown = null;
                    this.OtherMachinesHeaderModel = null;
                    this.FillOtherMachinesGrid = null;
                    this.CompProductDropDown = null;
                    this.CompModelDropDown = null;
                    this.CompProductDropDown1 = null;
                    this.CompModelDropDown1 = null;
                    this.Cookie = null;
                    this.InsertOtherMachines = null;
                    this.OtherMService = _OtherMService;
                    this.OtherMachinesHeaderModel = new OtherMachinesHeader();
                    this.EOtherMservice = _EOtherMservice;
                    this.InsertOMService = _InsertOMService;
                    this.InsertOtherMachines = new InsertOM();
                    this.ProductDService = _ProductDService;
                    this.ModelService = _ModelService;
                    this.CompetitorDService = _CompetitorDService;
                    this.CompProductService = _CompProductService;
                    this.CompModelService = _CompModelService;
                    this.CustomerAutofill = _CustomerAutofill;
                    this.DeleteCompetitorService = _DeleCompetitor;
                    this.Cookie = _cookieStore;
                }
                OtherMachineController.prototype.$onInit = function () {
                    var _this = this;
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                    $("#txtPurDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectPurDate
                    });
                    $("#txtDueDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectDueDate
                    });
                    //$("#txtEndDate").datepicker({
                    //    dateFormat: 'dd M yy', changeMonth: true,
                    //    changeYear: true,
                    //    onSelect: this.selectEndDate
                    //});
                    $("#txtYrOfManu").datepicker({
                        dateFormat: 'yy',
                        changeYear: true,
                        onSelect: this.selectYr,
                        formatYear: 'yyyy',
                        startingDay: 1,
                        minMode: 'year'
                    });
                    $('#txtEndDate').datepicker({
                        //changeMonth: true,
                        changeYear: true,
                        showButtonPanel: true,
                        dateFormat: 'yy',
                        // onSelect: this.selecttYr,
                        onClose: function (dateText, inst) {
                            // var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                            $(this).datepicker('setDate', new Date(year, 1));
                        }
                    });
                    $("#txtEndDate").datepicker({
                        dateFormat: 'yy',
                        changeYear: true,
                        changeMonth: false,
                        onSelect: this.selectYear
                    });
                    //this.ProductDDown = this.ProductDService.Find().then((response => {
                    //    this.ProductDDown = this.ProductDService.GetProductName(response.data.Result);
                    //}));
                    this.CompetitorNameDDown = this.CompetitorDService.Find().then((function (response) {
                        _this.CompetitorNameDDown = _this.CompetitorDService.GetCompetitorName(response.data.Result);
                    }));
                };
                OtherMachineController.prototype.selectPurDate = function (e) {
                    document.getElementById("txtPurDate").value = e;
                };
                OtherMachineController.prototype.selectDueDate = function (e) {
                    document.getElementById("txtDueDate").value = e;
                };
                //selectEndDate(e) {
                //    (<HTMLInputElement>document.getElementById("txtEndDate")).value = e;
                //}
                OtherMachineController.prototype.selectYr = function (e) {
                    document.getElementById("txtYrOfManu").value = e;
                };
                OtherMachineController.prototype.selectYear = function (e) {
                    document.getElementById("txtEndDate").value = e;
                };
                OtherMachineController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    $("#ErrClose").show();
                    $("#submitClose").hide();
                    this.alert = Message;
                };
                //Page Load Define Values//
                OtherMachineController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                    $("#txtCustomerName1").autocomplete({
                        source: function (request, res) {
                            that.CustomerAutofill.FilterAutoComplete(request).then((function (response) {
                                var data = that.CustomerAutofill.GetAutoCustomer(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.CompanyName,
                                        value: item.CompanyName,
                                        id: item.CustomerID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertOtherMachines.CustomerId = ui.item.id;
                            console.log(that.InsertOtherMachines.CustomerId);
                        },
                        change: function () {
                        }
                    });
                    this.CompetitorNameDDown = this.CompetitorDService.Find().then((function (response) {
                        _this.CompetitorNameDDown = _this.CompetitorDService.GetCompetitorName(response.data.Result);
                    }));
                };
                OtherMachineController.prototype.CompProduct1 = function (data) {
                    var _this = this;
                    this.CompProductDropDown1 = this.CompProductService.Find(this.OtherMachinesHeaderModel.CompetitorNameID).then((function (response) {
                        _this.CompProductDropDown1 = _this.CompProductService.GetCompProductDD(response.data.Result);
                    }));
                };
                OtherMachineController.prototype.CompModel1 = function (data) {
                    var _this = this;
                    this.CompModelDropDown1 = this.CompModelService.Find(this.OtherMachinesHeaderModel.ProductID).then((function (response) {
                        _this.CompModelDropDown1 = _this.CompModelService.GetCompModelDD(response.data.Result);
                    }));
                };
                OtherMachineController.prototype.CompProduct = function (data) {
                    var _this = this;
                    this.CompProductDropDown = this.CompProductService.Find(this.InsertOtherMachines.CompetitorNameID).then((function (response) {
                        _this.CompProductDropDown = _this.CompProductService.GetCompProductDD(response.data.Result);
                    }));
                };
                OtherMachineController.prototype.CompModel = function (data) {
                    var _this = this;
                    this.CompModelDropDown = this.CompModelService.Find(this.InsertOtherMachines.Product).then((function (response) {
                        _this.CompModelDropDown = _this.CompModelService.GetCompModelDD(response.data.Result);
                    }));
                };
                OtherMachineController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.FillOtherMachinesGrid = this.OtherMService.FindGrid(this.OtherMachinesHeaderModel).then((function (response) {
                        _this.FillOtherMachinesGrid = _this.OtherMService.GetOtherMachinesGrid(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.FillOtherMachinesGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillOtherMachinesGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 20;
                            });
                            console.log(_this.FillOtherMachinesGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillOtherMachinesGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        _this.maxPages = (that.incre / that.numRecords);
                        _this.ShowBack = false;
                        _this.ShowNext = that.maxPages > 1 ? true : false;
                        _this.shownItems = _this.FillOtherMachinesGrid.slice(0, that.numRecords);
                        console.log(_this.FillOtherMachinesGrid);
                    }));
                };
                OtherMachineController.prototype.EditOtherMachine = function (data) {
                    var _this = this;
                    this.EOtherMservice.Find(data).then((function (response) {
                        _this.InsertOtherMachines = _this.EOtherMservice.GetOtherMachineEdit(response.data.Result);
                        $('#txtQuantity').val(_this.InsertOtherMachines.Quantity);
                        //this.CompetitorNameDDown = this.CompetitorDService.Find().then((response => {
                        //    this.CompetitorNameDDown = this.CompetitorDService.GetCompetitorName(response.data.Result);
                        //    this.InsertOtherMachines.CompetitorNameID = this.CompetitorNameDDown[0].ID.toString();
                        //}));
                        //this.InsertOtherMachines.CompetitorNameID = this.InsertOtherMachines.CompetitorNameID.toString();
                        $('#txtName').val(_this.InsertOtherMachines.CompetitorNameID);
                        _this.CompProductDropDown = _this.CompProductService.Find(_this.InsertOtherMachines.CompetitorNameID).then((function (response) {
                            _this.CompProductDropDown = _this.CompProductService.GetCompProductDD(response.data.Result);
                            _this.InsertOtherMachines.Product = _this.CompProductDropDown[0].ID.toString();
                        }));
                        $('#txtProduct').val(_this.InsertOtherMachines.Product);
                        _this.CompModelDropDown = _this.CompModelService.Find(_this.InsertOtherMachines.Product).then((function (response) {
                            _this.CompModelDropDown = _this.CompModelService.GetCompModelDD(response.data.Result);
                            _this.InsertOtherMachines.ModelID = _this.CompModelDropDown[0].ID.toString();
                        }));
                        //this.InsertOtherMachines.Model = this.InsertOtherMachines.Model.toString();
                        $('#txtModel').val(_this.InsertOtherMachines.ModelID);
                        $('#txtType').val(_this.InsertOtherMachines.Type);
                        $('#txtEndDate').val(_this.InsertOtherMachines.YearOfManufacture);
                        $("myModalAddNew").show();
                    }));
                };
                OtherMachineController.prototype.Search = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                OtherMachineController.prototype.DeleteCompetitor = function (MachineId) {
                    var _this = this;
                    this.DeleteCompetitorService.Find(MachineId).then((function (response) {
                        _this.DeleteCompetitorService.postCompetitorDelete(response.data.Result);
                        _this.HideShow();
                        _this.popupMessage("Record Deleted Successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        _this.numRecords = _this.NoOfRds;
                        _this.FillGrid(_this.numRecords);
                    }));
                };
                OtherMachineController.prototype.Clear = function () {
                    this.OtherMachinesHeaderModel.CustomerName = "";
                    this.OtherMachinesHeaderModel.CompetitorNameID = "";
                    this.OtherMachinesHeaderModel.ModelID = "";
                    this.OtherMachinesHeaderModel.ProductID = "";
                    $("#CustomerName").val("");
                    $("#CompName").val("");
                    $("#Product").val("");
                    $("#Model").val("");
                };
                OtherMachineController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                    this.DeleteCompetitor(this.MachineId);
                };
                OtherMachineController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillOtherMachinesGrid.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                OtherMachineController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillOtherMachinesGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                OtherMachineController.prototype.Add = function () {
                    this.InsertOtherMachines.CustomerId = "";
                    this.InsertOtherMachines.CompanyName = "";
                    this.InsertOtherMachines.CompetitorNameID = "";
                    this.InsertOtherMachines.Type = "";
                    this.InsertOtherMachines.Product = "";
                    this.InsertOtherMachines.ModelID = "";
                    this.InsertOtherMachines.Quantity = "";
                    this.InsertOtherMachines.YearOfManufacture = "";
                    document.getElementById("txtEndDate").value = "";
                };
                OtherMachineController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                OtherMachineController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                OtherMachineController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertOtherMachines.CustomerId == undefined || this.InsertOtherMachines.CustomerId == null || this.InsertOtherMachines.CustomerId == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertOtherMachines.CompetitorNameID == undefined || this.InsertOtherMachines.CompetitorNameID == null || this.InsertOtherMachines.CompetitorNameID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Competitor Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertOtherMachines.Type == undefined || this.InsertOtherMachines.Type == null || this.InsertOtherMachines.Type == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertOtherMachines.YearOfManufacture = document.getElementById("txtEndDate").value;
                        this.InsertOMService.PostMachineData(this.InsertOtherMachines).then(function (response) {
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Competitor Data is Successfully Inserted", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertOtherMachines = null;
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                //this.IsDisplayModalPopupError = true;
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        });
                    }
                };
                OtherMachineController.$inject = ["OtherMachinesGridService", "OtherMachineEditService", "OtherMachinesInsertService", "ProductdService", "ModelDDService",
                    "CompetitorNameService", "CompProductDDService", "CompModelDDService", "CustomerNameAutoFillService", "DeleteCompetitorService", "$cookieStore"];
                return OtherMachineController;
            }());
            var OtherMachineComponentController = /** @class */ (function () {
                function OtherMachineComponentController() {
                    this.controller = OtherMachineController;
                    this.templateUrl = "/Scripts/App/MasterData/OtherMachine/Template/_OtherMachine.html";
                }
                OtherMachineComponentController.Name = "othermachinecomponent";
                return OtherMachineComponentController;
            }());
            app.AddComponent(OtherMachineComponentController.Name, new OtherMachineComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=OtherMachineComponent.js.map