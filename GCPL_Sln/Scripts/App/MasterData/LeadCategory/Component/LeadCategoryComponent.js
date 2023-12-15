var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadCategoryInsert = GCPL.Model.InsertLeadCategoryModel;
            var LeadCategoryController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadCategoryController(_LeadCategoryService, _InsertService, _EditService, _cookieStore) {
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
                    this.LeadCategoryList = null;
                    this.LeadCategorySearch = null;
                    this.InsertLeadCategory = null;
                    this.EditLeadCategory = null;
                    this.Cookie = null;
                    this._LeadCategoryService = _LeadCategoryService;
                    this.LeadCategorySearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertLeadCategory = new LeadCategoryInsert();
                    this.Cookie = _cookieStore;
                    this.EditService = _EditService;
                }
                LeadCategoryController.prototype.$onInit = function () {
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
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $('#search-btn-loader').hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                LeadCategoryController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    debugger;
                    this.LeadCategoryList = this._LeadCategoryService.Find(this.LeadCategorySearch).then((function (response) {
                        _this.LeadCategoryList = _this._LeadCategoryService.GetLeadCategoryData(response.data.Result);
                    }));
                };
                LeadCategoryController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertLeadCategory.LeadCategory == undefined || this.InsertLeadCategory.LeadCategory == null || this.InsertLeadCategory.LeadCategory == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLeadCategory.Description == undefined || this.InsertLeadCategory.Description == null || this.InsertLeadCategory.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLeadCategory.Status == undefined || this.InsertLeadCategory.Status == null || this.InsertLeadCategory.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.InsertService.PostLeadCategory(this.InsertLeadCategory).then((function (response) {
                            console.log(_this.InsertLeadCategory);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Lead Category saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertLeadCategory = null;
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
                LeadCategoryController.prototype.Add = function () {
                    this.InsertLeadCategory.LeadCategory = "";
                    this.InsertLeadCategory.Description = "";
                    this.InsertLeadCategory.Status = "";
                };
                LeadCategoryController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertLeadCategory = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        $('#txtLeadCategory').val(_this.InsertLeadCategory.LeadCategory);
                        $('#txtDesc').val(_this.InsertLeadCategory.Description);
                        //$('#txtStatus').val(this.InsertLeadCategory.Status);
                        if (_this.InsertLeadCategory.Status == "True") {
                            _this.InsertLeadCategory.Status = "1";
                        }
                        else {
                            _this.InsertLeadCategory.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                LeadCategoryController.prototype.Clear = function () {
                    this.LeadCategorySearch.SearchText = "";
                    this.LeadCategorySearch.Status = "";
                    $("#ddlstatus").val("");
                };
                LeadCategoryController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.LeadCategoryList = this._LeadCategoryService.Find(this.LeadCategorySearch).then((function (response) {
                        _this.LeadCategoryList = _this._LeadCategoryService.GetLeadCategoryData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.LeadCategoryList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.LeadCategoryList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadCategoryList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadCategoryList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                LeadCategoryController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                LeadCategoryController.prototype.SearchLeadCategoryList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                LeadCategoryController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadCategoryList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadCategoryController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadCategoryList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadCategoryController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                LeadCategoryController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                LeadCategoryController.prototype.Close = function () {
                    location.href = "#!/LeadCategory";
                };
                LeadCategoryController.$inject = ["LeadCategoryService", "InsertLeadCategoryService", "LeadCategoryEditService", "$cookieStore"];
                return LeadCategoryController;
            }());
            var LeadCategoryComponentController = /** @class */ (function () {
                function LeadCategoryComponentController() {
                    this.controller = LeadCategoryController;
                    this.templateUrl = "/Scripts/App/MasterData/LeadCategory/Template/_LeadCategory.html";
                }
                LeadCategoryComponentController.Name = "leadcategorycomponent";
                return LeadCategoryComponentController;
            }());
            app.AddComponent(LeadCategoryComponentController.Name, new LeadCategoryComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
3;
//# sourceMappingURL=LeadCategoryComponent.js.map