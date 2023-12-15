var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Subsource2Controller = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function Subsource2Controller(_SubSource2ListService, _InsertService, _LeadSourceDDService, _SubSourceDDwpService, _EditService, _cookieStore) {
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
                    this.SubSource2Search = null;
                    this.EditSubSource2 = null;
                    this.InsertSubsource2 = null;
                    this.SubSourceDDwp = null;
                    this.LeadSourceDD = null;
                    this.SubSource2list = null;
                    this.Cookie = null;
                    this.SubSourceDDwpService = _SubSourceDDwpService;
                    this.LeadSourceDDService = _LeadSourceDDService;
                    this.InsertServicePost = _InsertService;
                    this.EditService = _EditService;
                    this.SubSource2ListService = _SubSource2ListService;
                    this.SubSource2Search = Array();
                    this.Cookie = _cookieStore;
                }
                Subsource2Controller.prototype.$onInit = function () {
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
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                Subsource2Controller.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.SubSource2list = this.SubSource2ListService.Find(this.SubSource2Search).then((function (response) {
                        _this.SubSource2list = _this.SubSource2ListService.GetSubSource2ListData(response.data.Result);
                    }));
                    //this.SubSourceDD = this.SubSourceDDService.Find().then((response => {
                    //    this.SubSourceDD = this.SubSourceDDService.GetSubSourceName(response.data.Result);
                    //}));
                    this.LeadSourceDD = this.LeadSourceDDService.Find().then((function (response) {
                        _this.LeadSourceDD = _this.LeadSourceDDService.GetLeadSourceDDnew(response.data.Result);
                    }));
                };
                Subsource2Controller.prototype.Subsource2 = function () {
                    var _this = this;
                    debugger;
                    this.SubSourceDDwp = this.SubSourceDDwpService.Find(this.InsertSubsource2.LeadSourceID).then((function (response) {
                        _this.SubSourceDDwp = _this.SubSourceDDwpService.GetSubSourceName(response.data.Result);
                    }));
                };
                Subsource2Controller.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                Subsource2Controller.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                Subsource2Controller.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertSubsource2.LeadSourceID == undefined || this.InsertSubsource2.LeadSourceID == null || this.InsertSubsource2.LeadSourceID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSubsource2.SubsourceID == undefined || this.InsertSubsource2.SubsourceID == null || this.InsertSubsource2.SubsourceID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Subsource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSubsource2.Subsource2 == undefined || this.InsertSubsource2.Subsource2 == null || this.InsertSubsource2.Subsource2 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Subsource2", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSubsource2.Description == undefined || this.InsertSubsource2.Description == null || this.InsertSubsource2.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.InsertServicePost.PostSubsource2(this.InsertSubsource2).then((function (response) {
                            console.log(_this.InsertSubsource2);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Sub Source 2 saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertSubsource2 = null;
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
                Subsource2Controller.prototype.Clear = function () {
                    this.SubSource2Search.Subsource2 = "";
                };
                Subsource2Controller.prototype.Add = function () {
                    this.InsertSubsource2.LeadSourceID = "";
                    this.InsertSubsource2.SubsourceID = "";
                    this.InsertSubsource2.Subsource2 = "";
                    this.InsertSubsource2.Description = "";
                    this.InsertSubsource2.Status = "";
                };
                Subsource2Controller.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertSubsource2 = _this.EditService.GetEdit(response.data.Result);
                        //this.SubSourceDDwp = this.SubSourceDDwpService.Find(this.InsertSubsource2.LeadSourceID).then((response => {
                        //    this.SubSourceDDwp = this.SubSourceDDwpService.GetSubSourceName(response.data.Result);
                        //}));
                        $('#txtleadSource').val(_this.InsertSubsource2.LeadSourceID);
                        $('#txtsubSource').val(_this.InsertSubsource2.SubsourceID);
                        _this.SubSourceDDwp = _this.SubSourceDDwpService.Find(_this.InsertSubsource2.LeadSourceID).then((function (response) {
                            _this.SubSourceDDwp = _this.SubSourceDDwpService.GetSubSourceName(response.data.Result);
                        }));
                        $('#txtSub2').val(_this.InsertSubsource2.Subsource2);
                        $('#txtDesc').val(_this.InsertSubsource2.Description);
                        //$('#txtStatus').val(this.InsertSubsource2.Status);
                        if (_this.InsertSubsource2.Status == "True") {
                            _this.InsertSubsource2.Status = "1";
                        }
                        else {
                            _this.InsertSubsource2.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                Subsource2Controller.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.SubSource2list = this.SubSource2ListService.Find(this.SubSource2Search).then((function (response) {
                        _this.SubSource2list = _this.SubSource2ListService.GetSubSource2ListData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.SubSource2list.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.SubSource2list.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.SubSource2list);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.SubSource2list.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                Subsource2Controller.prototype.SearchSubSource2List = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                Subsource2Controller.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                Subsource2Controller.prototype.Close = function () {
                    location.href = "#!/Subsource2";
                };
                Subsource2Controller.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SubSource2list.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                Subsource2Controller.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SubSource2list.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                Subsource2Controller.$inject = ["SubSource2ListService", "InsertSubsource2Service", "LeadSourceDDService", "SubSourceDDwpService", "Subsource2EditService", "$cookieStore"];
                return Subsource2Controller;
            }());
            var Subsource2ComponentController = /** @class */ (function () {
                function Subsource2ComponentController() {
                    this.controller = Subsource2Controller;
                    this.templateUrl = "/Scripts/App/MasterData/Subsource2/Template/_Subsource2.html";
                }
                Subsource2ComponentController.Name = "subsource2component";
                return Subsource2ComponentController;
            }());
            app.AddComponent(Subsource2ComponentController.Name, new Subsource2ComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=Subsource2Component.js.map