var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var IndustryMaster = GCPL.Model.InsertIndustryModel;
            var IndustryDivisionController = /** @class */ (function () {
                function IndustryDivisionController(_Listservice, _InsertService, _EditService, _cookieStore) {
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
                    this.IndustryDivisionList = null;
                    this.IndustrySearch = null;
                    this.InsertIndustry = null;
                    this.EditIndustry = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.IndustrySearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertIndustry = new IndustryMaster();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                IndustryDivisionController.prototype.$onInit = function () {
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
                IndustryDivisionController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                IndustryDivisionController.prototype.SearchIndustryList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                IndustryDivisionController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertIndustry.IndustryDivision == undefined || this.InsertIndustry.IndustryDivision == null || this.InsertIndustry.IndustryDivision == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter IndustryDivision", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertIndustry.SAPID == undefined || this.InsertIndustry.SAPID == null || this.InsertIndustry.SAPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostIndustry(this.InsertIndustry).then((function (response) {
                            console.log(_this.InsertIndustry);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("IndustryDivision saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertIndustry = null;
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                //this.IsDisplayModalPopupError = true;
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                IndustryDivisionController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                IndustryDivisionController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                IndustryDivisionController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertIndustry = _this.EditService.GetEdit(response.data.Result);
                        //$('#txtStatus').val(this.InsertIndustry.Status);
                        if (_this.InsertIndustry.Status == "True") {
                            _this.InsertIndustry.Status = "1";
                        }
                        else {
                            _this.InsertIndustry.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                IndustryDivisionController.prototype.Add = function () {
                    //this.InsertCategory.CategoryID = "";
                    this.InsertIndustry.IndustryDivision = "";
                    this.InsertIndustry.SAPID = "";
                    this.InsertIndustry.Status = "";
                };
                IndustryDivisionController.prototype.Clear = function () {
                    this.IndustrySearch.SearchText = "";
                    this.IndustrySearch.Status = "";
                    //this.CategorySearch = "";
                    $("#txtIndustry").val("");
                    $("#txtStatus").val("");
                };
                IndustryDivisionController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.IndustryDivisionList = this.Listservice.Find(this.IndustrySearch).then((function (response) {
                        _this.IndustryDivisionList = _this.Listservice.GetIndustryDivisionList(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.IndustryDivisionList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.IndustryDivisionList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.IndustryDivisionList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.IndustryDivisionList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                IndustryDivisionController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.IndustryDivisionList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                IndustryDivisionController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.IndustryDivisionList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                IndustryDivisionController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                IndustryDivisionController.prototype.Close = function () {
                    location.href = "#!/IndustryDivision";
                };
                IndustryDivisionController.prototype.ErrorClose = function () {
                    location.href = "#!/IndustryDivision";
                };
                IndustryDivisionController.$inject = ["IndustryDivisionListService", "InsertIndustryService", "IndustryEditService", "$cookieStore"];
                return IndustryDivisionController;
            }());
            var IndustryDivisionComponentController = /** @class */ (function () {
                function IndustryDivisionComponentController() {
                    this.controller = IndustryDivisionController;
                    this.templateUrl = "/Scripts/App/MasterData/IndustryDivision/Template/_IndustryDivision.html";
                }
                IndustryDivisionComponentController.Name = "industrydivisioncomponent";
                return IndustryDivisionComponentController;
            }());
            app.AddComponent(IndustryDivisionComponentController.Name, new IndustryDivisionComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=IndustryDivisionComponent.js.map