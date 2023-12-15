var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var SubSourceInsert = GCPL.Model.InsertSubSourceModel;
            var SubSourceController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function SubSourceController(_SubSourceListService, LeadSourceDDService, _InsertService, _EditService, _cookieStore) {
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
                    this.SubSourcelist = null;
                    this.SubSourceSearch = null;
                    this.LeadSourceDD = null;
                    this.InsertSubSource = null;
                    this.EditSubSource = null;
                    this.Cookie = null;
                    this._SubSourceListService = _SubSourceListService;
                    this.SubSourceSearch = Array();
                    this.LeadSourceDDService = LeadSourceDDService;
                    this.InsertService = _InsertService;
                    this.InsertSubSource = new SubSourceInsert();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                SubSourceController.prototype.$onInit = function () {
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
                SubSourceController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    debugger;
                    this.LeadSourceDD = this.LeadSourceDDService.Find().then((function (response) {
                        _this.LeadSourceDD = _this.LeadSourceDDService.GetLeadSourceDDnew(response.data.Result);
                    }));
                    this.SubSourcelist = this._SubSourceListService.Find(this.SubSourceSearch).then((function (response) {
                        _this.SubSourcelist = _this._SubSourceListService.GetSubSourceListData(response.data.Result);
                    }));
                };
                SubSourceController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertSubSource.LeadSourceID == undefined || this.InsertSubSource.LeadSourceID == null || this.InsertSubSource.LeadSourceID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSubSource.Subsource == undefined || this.InsertSubSource.Subsource == null || this.InsertSubSource.Subsource == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Subsource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSubSource.Description == undefined || this.InsertSubSource.Description == null || this.InsertSubSource.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSubSource.Status == undefined || this.InsertSubSource.Status == null || this.InsertSubSource.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.InsertService.PostSubSource(this.InsertSubSource).then((function (response) {
                            console.log(_this.InsertSubSource);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Subsource saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertSubSource = null;
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
                SubSourceController.prototype.Add = function () {
                    this.InsertSubSource.LeadSourceID = "";
                    this.InsertSubSource.Subsource = "";
                    this.InsertSubSource.Description = "";
                    this.InsertSubSource.Status = "";
                };
                SubSourceController.prototype.Clear = function () {
                    this.SubSourceSearch.Subsource = "";
                    this.SubSourceSearch.LeadSource = "";
                    this.SubSourceSearch.Status = "";
                    $("#txtleadSource").val("");
                    $("#txtSubSource").val("");
                    $("#txtStatus").val("");
                };
                SubSourceController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertSubSource = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        $('#txtSource').val(_this.InsertSubSource.LeadSourceID);
                        $('#txtSub').val(_this.InsertSubSource.Subsource);
                        $('#txtDesc').val(_this.InsertSubSource.Description);
                        //$('#txtStatus').val(this.InsertSubSource.Status);
                        if (_this.InsertSubSource.Status == "True") {
                            _this.InsertSubSource.Status = "1";
                        }
                        else {
                            _this.InsertSubSource.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                SubSourceController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.SubSourcelist = this._SubSourceListService.Find(this.SubSourceSearch).then((function (response) {
                        _this.SubSourcelist = _this._SubSourceListService.GetSubSourceListData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.SubSourcelist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.SubSourcelist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.SubSourcelist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.SubSourcelist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                SubSourceController.prototype.SearchSubSourceList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                SubSourceController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                SubSourceController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                SubSourceController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                SubSourceController.prototype.Close = function () {
                    location.href = "#!/SubSource";
                };
                SubSourceController.prototype.ErrorClose = function () {
                    location.href = "#!/SubSource";
                };
                SubSourceController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SubSourcelist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                SubSourceController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SubSourcelist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                SubSourceController.$inject = ["SubSourceListService", "LeadSourceDDService", "InsertSubSourceService", "SubSourceEditService", "$cookieStore"];
                return SubSourceController;
            }());
            var SubSourceComponentController = /** @class */ (function () {
                function SubSourceComponentController() {
                    this.controller = SubSourceController;
                    this.templateUrl = "/Scripts/App/MasterData/SubSource/Template/_SubSource.html";
                }
                SubSourceComponentController.Name = "subsourcecomponent";
                return SubSourceComponentController;
            }());
            app.AddComponent(SubSourceComponentController.Name, new SubSourceComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SubSourceComponent.js.map