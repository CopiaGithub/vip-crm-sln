var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var CategoryMaster = GCPL.Model.InsertCategoryModel;
            var CategoryMasterController = /** @class */ (function () {
                function CategoryMasterController(_Listservice, _EditService, _InsertService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = "10";
                    this.alert = null;
                    this.EditCategory = null;
                    this.CategoryList = null;
                    this.InsertCategory = null;
                    this.CategorySearch = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.EditService = _EditService;
                    this.InsertService = _InsertService;
                    this.InsertCategory = new CategoryMaster();
                    this.CategorySearch = Array();
                    this.Cookie = _cookieStore;
                }
                CategoryMasterController.prototype.$onInit = function () {
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
                CategoryMasterController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                CategoryMasterController.prototype.SearchCategoryList = function () {
                    var _this = this;
                    $('#search-btn-loader').show();
                    this.CategoryList = this.Listservice.Find(this.CategorySearch).then((function (response) {
                        _this.CategoryList = _this.Listservice.GetCategoryList(response.data.Result);
                        $('#search-btn-loader').hide();
                    }));
                };
                CategoryMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CategoryMasterController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertCategory.Category == undefined || this.InsertCategory.Category == null || this.InsertCategory.Category == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCategory.Description == undefined || this.InsertCategory.Description == null || this.InsertCategory.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostCategory(this.InsertCategory).then((function (response) {
                            console.log(_this.InsertCategory);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Category saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertCategory = null;
                                _this.CategoryList = _this.Listservice.Find(_this.CategorySearch).then((function (response) {
                                    _this.CategoryList = _this.Listservice.GetCategoryList(response.data.Result);
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
                CategoryMasterController.prototype.Add = function () {
                    //this.InsertCategory.CategoryID = "";
                    this.InsertCategory.Category = "";
                    this.InsertCategory.Description = "";
                    this.InsertCategory.Status = "";
                };
                CategoryMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CategoryMasterController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                CategoryMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertCategory = _this.EditService.GetEdit(response.data.Result);
                        //$('#txtStatus').val(this.InsertCategory.Status);
                        if (_this.InsertCategory.Status == "True") {
                            _this.InsertCategory.Status = "1";
                        }
                        else {
                            _this.InsertCategory.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                CategoryMasterController.prototype.Clear = function () {
                    this.CategorySearch.SearchText = "";
                    this.CategorySearch.Status = "";
                    //this.CategorySearch = "";
                    $("#txtCategory").val("");
                    $("#txtStatus").val("");
                };
                CategoryMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CategoryList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                CategoryMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CategoryList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                CategoryMasterController.prototype.Close = function () {
                    location.href = "#!/CategoryMaster";
                };
                CategoryMasterController.prototype.ErrorClose = function () {
                    location.href = "#!/CategoryMaster";
                };
                CategoryMasterController.$inject = ["CatListService", "CategoryEditService", "InsertCategoryService", "$cookieStore"];
                return CategoryMasterController;
            }());
            var CategoryMasterComponentController = /** @class */ (function () {
                function CategoryMasterComponentController() {
                    this.controller = CategoryMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/CategoryMaster/Template/_CategoryMaster.html";
                }
                CategoryMasterComponentController.Name = "categorymastercomponent";
                return CategoryMasterComponentController;
            }());
            app.AddComponent(CategoryMasterComponentController.Name, new CategoryMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CategoryMasterComponent.js.map