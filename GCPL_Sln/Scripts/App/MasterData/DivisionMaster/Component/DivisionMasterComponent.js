var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var DivisionMaster = GCPL.Model.InsertDivisionModel;
            var DivisionMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DivisionMasterController(_ListService, _CategoryService, _InsertService, _EditService, _cookieStore) {
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
                    this.Divisionlist = null;
                    this.CategoryDropDown = null;
                    this.DivisionSearch = null;
                    this.InsertDivision = null;
                    this.EditDivision = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.CategoryService = _CategoryService;
                    this.DivisionSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertDivision = new DivisionMaster();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                DivisionMasterController.prototype.$onInit = function () {
                    /* Sorting */
                    var th = document.getElementsByTagName('th');
                    for (var c = 0; c < th.length; c++) {
                        th[c].addEventListener('click', item(c));
                    }
                    function item(c) {
                        return function () {
                            console.log(c);
                            sortTable(c);
                        };
                    }
                    function sortTable(c) {
                        var table, rows, switching, i, x, y, shouldSwitch;
                        table = document.getElementById("dataTable");
                        switching = true;
                        /*Make a loop that will continue until
                        no switching has been done:*/
                        while (switching) {
                            //start by saying: no switching is done:
                            switching = false;
                            rows = table.rows;
                            /*Loop through all table rows (except the
                            first, which contains table headers):*/
                            for (i = 1; i < (rows.length - 1); i++) {
                                //start by saying there should be no switching:
                                shouldSwitch = false;
                                /*Get the two elements you want to compare,
                                one from current row and one from the next:*/
                                x = rows[i].getElementsByTagName("TD")[c];
                                y = rows[i + 1].getElementsByTagName("TD")[c];
                                //check if the two rows should switch place:
                                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                                    //if so, mark as a switch and break the loop:
                                    shouldSwitch = true;
                                    break;
                                }
                            }
                            if (shouldSwitch) {
                                /*If a switch has been marked, make the switch
                                and mark that a switch has been done:*/
                                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                                switching = true;
                            }
                        }
                    }
                    this.Init();
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                DivisionMasterController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                };
                DivisionMasterController.prototype.SearchDivisionList = function () {
                    var _this = this;
                    $('#search-btn-loader').show();
                    this.Divisionlist = this.ListService.Find(this.DivisionSearch).then((function (response) {
                        _this.Divisionlist = _this.ListService.GetDivisionList(response.data.Result);
                        $('#search-btn-loader').hide();
                    }));
                };
                DivisionMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                DivisionMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                DivisionMasterController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertDivision.CategoryID == undefined || this.InsertDivision.CategoryID == null || this.InsertDivision.CategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDivision.Division == undefined || this.InsertDivision.Division == null || this.InsertDivision.Division == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDivision.divisionSAPID == undefined || this.InsertDivision.divisionSAPID == null || this.InsertDivision.divisionSAPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDivision.Description == undefined || this.InsertDivision.Description == null || this.InsertDivision.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDivision.QuotePrefix == undefined || this.InsertDivision.QuotePrefix == null || this.InsertDivision.QuotePrefix == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Quote Prefix", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        this.alert = "Please Enter Quote Prefix";
                    }
                    else if (this.InsertDivision.NoRangeSeries == undefined || this.InsertDivision.NoRangeSeries == null || this.InsertDivision.NoRangeSeries == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter No Range Series", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        this.alert = "Please Enter No Range Series";
                    }
                    else if (this.InsertDivision.Status == undefined || this.InsertDivision.Status == null || this.InsertDivision.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        this.alert = "Please Enter Status";
                    }
                    else {
                        this.InsertService.PostDivision(this.InsertDivision).then((function (response) {
                            console.log(_this.InsertDivision);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Division saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertDivision = null;
                                _this.Divisionlist = _this.ListService.Find(_this.DivisionSearch).then((function (response) {
                                    _this.Divisionlist = _this.ListService.GetDivisionList(response.data.Result);
                                }));
                            }
                            else {
                                //this.IsDisplayModalPopupError = true;
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                DivisionMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertDivision = _this.EditService.GetEdit(response.data.Result);
                        //$('#txtCategory').val(this.InsertCategory.Category);
                        //$('#txtDesc').val(this.InsertCategory.Description);
                        $('#txtSAPID').val(_this.InsertDivision.divisionSAPID);
                        //$('#txtStatus').val(this.InsertDivision.Status);
                        $('#txtQuotePrefix').val(_this.InsertDivision.QuotePrefix);
                        $('#txtNoRangeSeries').val(_this.InsertDivision.NoRangeSeries);
                        if (_this.InsertDivision.Status == "True") {
                            _this.InsertDivision.Status = "1";
                        }
                        else {
                            _this.InsertDivision.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                DivisionMasterController.prototype.Add = function () {
                    this.InsertDivision.CategoryID = "";
                    this.InsertDivision.Division = "";
                    this.InsertDivision.divisionSAPID = "";
                    this.InsertDivision.Description = "";
                    this.InsertDivision.Status = "";
                    this.InsertDivision.QuotePrefix = "";
                    this.InsertDivision.NoRangeSeries = "";
                };
                DivisionMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Divisionlist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                DivisionMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Divisionlist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                DivisionMasterController.prototype.Clear = function () {
                    this.DivisionSearch.SearchText = "";
                    this.DivisionSearch.Status = "";
                    this.DivisionSearch.Category = "";
                    //this.CategorySearch = "";
                    $("#txtDivision").val("");
                    $("#txtStatus").val("");
                    $("#txtCat").val("");
                    $("#txtQuotePrefix").val("");
                    $("#txtNoRangeSeries").val("");
                };
                DivisionMasterController.prototype.Close = function () {
                    location.href = "#!/DivisionMaster";
                };
                DivisionMasterController.prototype.ErrorClose = function () {
                    location.href = "#!/DivisionMaster";
                };
                DivisionMasterController.$inject = ["DivisionListService", "CategoryddService", "InsertDivisionService", "DivisionEditService", "$cookieStore"];
                return DivisionMasterController;
            }());
            var DivisionMasterComponentController = /** @class */ (function () {
                function DivisionMasterComponentController() {
                    this.controller = DivisionMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/DivisionMaster/Template/_DivisionMaster.html";
                }
                DivisionMasterComponentController.Name = "divisionmastercomponent";
                return DivisionMasterComponentController;
            }());
            app.AddComponent(DivisionMasterComponentController.Name, new DivisionMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
3;
//# sourceMappingURL=DivisionMasterComponent.js.map