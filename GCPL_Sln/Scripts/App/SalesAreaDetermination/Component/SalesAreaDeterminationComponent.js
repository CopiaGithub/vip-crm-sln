var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var SalesAreaDeterminationInsert = GCPL.Model.InsertSalesAreaDeterminationModel;
            var SalesAreaDeterminationController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function SalesAreaDeterminationController(_SalesAreaDeterminationListService, _LeadTypeService, _CategoryService, _SalesAreaService, _LeadCategoryService, _InsertService, _EditService, _cookieStore) {
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
                    this.LeadTypeDropDown = null;
                    this.CategoryDropDown = null;
                    this.SalesAreaDropDown = null;
                    this.LeadCategoryDropDown = null;
                    this.SalesAreaDeterminationSearch = null;
                    this.SalesAreaDeterminationList = null;
                    this.InsertSalesAreaDetermination = null;
                    this.EditSalesAreaDetermination = null;
                    this.Cookie = null;
                    this._SalesAreaDeterminationListService = _SalesAreaDeterminationListService;
                    this.LeadTypeService = _LeadTypeService;
                    this.CategoryService = _CategoryService;
                    this.SalesAreaService = _SalesAreaService;
                    this.LeadCategoryService = _LeadCategoryService;
                    this.InsertService = _InsertService;
                    this.InsertSalesAreaDetermination = new SalesAreaDeterminationInsert();
                    this.EditService = _EditService;
                    this.SalesAreaDeterminationSearch = Array();
                    this.Cookie = _cookieStore;
                }
                SalesAreaDeterminationController.prototype.$onInit = function () {
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
                    $('#search-btn-loader').hide();
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                SalesAreaDeterminationController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.SalesAreaDropDown = this.SalesAreaService.Find().then((function (response) {
                        _this.SalesAreaDropDown = _this.SalesAreaService.GetSalesAreaName(response.data.Result);
                    }));
                    this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((function (response) {
                        _this.LeadCategoryDropDown = _this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
                    }));
                };
                SalesAreaDeterminationController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertSalesAreaDetermination.SalesAreaID == undefined || this.InsertSalesAreaDetermination.SalesAreaID == null || this.InsertSalesAreaDetermination.SalesAreaID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SalesArea", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesAreaDetermination.CountryID == undefined || this.InsertSalesAreaDetermination.CountryID == null || this.InsertSalesAreaDetermination.CountryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Country", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesAreaDetermination.CategoryID == undefined || this.InsertSalesAreaDetermination.CategoryID == null || this.InsertSalesAreaDetermination.CategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesAreaDetermination.LeadCategoryID == undefined || this.InsertSalesAreaDetermination.LeadCategoryID == null || this.InsertSalesAreaDetermination.LeadCategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesAreaDetermination.ID == undefined || this.InsertSalesAreaDetermination.ID == null || this.InsertSalesAreaDetermination.ID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Lead Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesAreaDetermination.Status == undefined || this.InsertSalesAreaDetermination.Status == null || this.InsertSalesAreaDetermination.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostSalesAreaDetermination(this.InsertSalesAreaDetermination).then((function (response) {
                            console.log(_this.InsertSalesAreaDetermination);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("SalesArea Determination saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertSalesAreaDetermination = null;
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                SalesAreaDeterminationController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                SalesAreaDeterminationController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                SalesAreaDeterminationController.prototype.Add = function () {
                    this.InsertSalesAreaDetermination.SalesAreaID = "";
                    this.InsertSalesAreaDetermination.CountryID = "";
                    this.InsertSalesAreaDetermination.CategoryID = "";
                    this.InsertSalesAreaDetermination.LeadCategoryID = "";
                    this.InsertSalesAreaDetermination.ID = "";
                    this.InsertSalesAreaDetermination.Status = "";
                };
                SalesAreaDeterminationController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertSalesAreaDetermination = _this.EditService.GetEdit(response.data.Result);
                        $('#txtsalesarea').val(_this.InsertSalesAreaDetermination.SalesAreaID);
                        if (_this.InsertSalesAreaDetermination.CountryID == "1") {
                            _this.InsertSalesAreaDetermination.CountryID = "1";
                        }
                        else if (_this.InsertSalesAreaDetermination.CountryID == "0") {
                            _this.InsertSalesAreaDetermination.CountryID = "0";
                        }
                        $('#txtCategory').val(_this.InsertSalesAreaDetermination.CategoryID);
                        $('#txtLeadCategory').val(_this.InsertSalesAreaDetermination.LeadCategoryID);
                        $('#txtLeadType').val(_this.InsertSalesAreaDetermination.ID);
                        // $('#txtStatus').val(this.InsertSalesAreaDetermination.Status);
                        if (_this.InsertSalesAreaDetermination.Status == "True") {
                            _this.InsertSalesAreaDetermination.Status = "1";
                        }
                        else {
                            _this.InsertSalesAreaDetermination.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                SalesAreaDeterminationController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.SalesAreaDeterminationList = this._SalesAreaDeterminationListService.Find(this.SalesAreaDeterminationSearch).then((function (response) {
                        _this.SalesAreaDeterminationList = _this._SalesAreaDeterminationListService.GetSalesAreaDeterminationListData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.SalesAreaDeterminationList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.SalesAreaDeterminationList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.SalesAreaDeterminationList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.SalesAreaDeterminationList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                SalesAreaDeterminationController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                SalesAreaDeterminationController.prototype.SearchSADList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                SalesAreaDeterminationController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SalesAreaDeterminationList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                SalesAreaDeterminationController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SalesAreaDeterminationList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                SalesAreaDeterminationController.prototype.Clear = function () {
                    //this.ModelSearch.Status = "";
                    $("#ddlstatus").val("");
                    this.SalesAreaDeterminationSearch.Status = "";
                };
                SalesAreaDeterminationController.prototype.Close = function () {
                    location.href = "#!/SalesAreaDetermination";
                };
                SalesAreaDeterminationController.$inject = ["SalesAreaDeterminationListService", "LeadTypeddService", "CategoryddService", "SalesAreaService", "LeadCategoryDDService", "InsertSalesAreaDeterminationService", "SalesAreaDeterminationEditService", "$cookieStore"];
                return SalesAreaDeterminationController;
            }());
            var SalesAreaDeterminationComponentController = /** @class */ (function () {
                function SalesAreaDeterminationComponentController() {
                    this.controller = SalesAreaDeterminationController;
                    this.templateUrl = "/Scripts/App/SalesAreaDetermination/Template/_SalesAreaDetermination.html";
                }
                SalesAreaDeterminationComponentController.Name = "salesareadeterminationcomponent";
                return SalesAreaDeterminationComponentController;
            }());
            app.AddComponent(SalesAreaDeterminationComponentController.Name, new SalesAreaDeterminationComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesAreaDeterminationComponent.js.map