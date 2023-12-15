var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadSummaryEmailMaster = GCPL.Model.InsertLeadSummModel;
            var LeadSummaryEmailsController = /** @class */ (function () {
                function LeadSummaryEmailsController(_Listservice, _InsertService, _ZoneDDService, _EditService, _ModelDDService, _cookieStore) {
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
                    this.LeadSummaryList = null;
                    this.InsertLeadSumm = null;
                    this.ZoneDD = null;
                    this.EditLeadSumm = null;
                    this.Modeldd = null;
                    this.EMAIL_REGEXP = null;
                    this.Cookie = null;
                    this.InsertService = _InsertService;
                    this.InsertLeadSumm = new LeadSummaryEmailMaster();
                    this.Listservice = _Listservice;
                    this.EditService = _EditService;
                    this.ZoneDDService = _ZoneDDService;
                    this.ModelDDService = _ModelDDService;
                    this.Cookie = _cookieStore;
                }
                LeadSummaryEmailsController.prototype.$onInit = function () {
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
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                LeadSummaryEmailsController.prototype.Init = function () {
                    var _this = this;
                    this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.Modeldd = this.ModelDDService.Find().then((function (response) {
                        _this.Modeldd = _this.ModelDDService.GetModel(response.data.Result);
                    }));
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                LeadSummaryEmailsController.prototype.Add = function () {
                    //this.InsertLeadSumm.ID = "";
                    this.InsertLeadSumm.ModelID = "";
                    this.InsertLeadSumm.ZoneID = "";
                    this.InsertLeadSumm.EmailTO = "";
                    this.InsertLeadSumm.EmailCC = "";
                    this.InsertLeadSumm.Status = "";
                };
                LeadSummaryEmailsController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                LeadSummaryEmailsController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                LeadSummaryEmailsController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertLeadSumm.EmailTO == undefined || this.InsertLeadSumm.EmailTO == null || this.InsertLeadSumm.EmailTO == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid TO Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        this.alert = "Please Enter Valid TO Email";
                    }
                    //else if (this.InsertLeadSumm.EmailCC == undefined || this.InsertLeadSumm.EmailCC == null || this.InsertLeadSumm.EmailCC == "" ) {
                    //    $("#errorclose").show();
                    //    $("#close").hide();
                    //    this.alert = "Please Enter Valid CC Email";
                    //}
                    else if (this.InsertLeadSumm.ModelID == undefined || this.InsertLeadSumm.ModelID == null || this.InsertLeadSumm.ModelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLeadSumm.ZoneID == undefined || this.InsertLeadSumm.ZoneID == null || this.InsertLeadSumm.ZoneID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostLeadSumm(this.InsertLeadSumm).then((function (response) {
                            console.log(_this.InsertLeadSumm);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Lead Summary Emails saved Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#add-modal').click();
                                _this.InsertLeadSumm = null;
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
                LeadSummaryEmailsController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.LeadSummaryList = this.Listservice.Find().then((function (response) {
                        _this.LeadSummaryList = _this.Listservice.GetLeadSummList(response.data.Result);
                        if (_this.LeadSummaryList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.LeadSummaryList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadSummaryList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadSummaryList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                LeadSummaryEmailsController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertLeadSumm = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        //$('#modeldd').val(this.InsertLeadSumm.ModelID);
                        //$('#zonedd').val(this.InsertLeadSumm.ZoneID);
                        $('#txtemailto').val(_this.InsertLeadSumm.EmailTO);
                        $('#txtemailcc').val(_this.InsertLeadSumm.EmailCC);
                        //this.ZoneDD = this.ZoneDDService.Find().then((response => {
                        //    this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
                        //this.InsertLeadSumm.ZoneID = this.ZoneDD[0].ID.toString();
                        //}));
                        //this.Modeldd = this.ModelDDService.Find().then((response => {
                        //    this.Modeldd = this.ModelDDService.GetModel(response.data.Result);
                        //this.InsertLeadSumm.ModelID = this.Modeldd[0].ModelID.toString();
                        //}));
                        if (_this.InsertLeadSumm.Status == "True") {
                            _this.InsertLeadSumm.Status = "1";
                        }
                        else {
                            _this.InsertLeadSumm.Status = "0";
                        }
                        $("#add-modal").show();
                    }));
                };
                LeadSummaryEmailsController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadSummaryList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadSummaryEmailsController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadSummaryList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadSummaryEmailsController.prototype.Close = function () {
                    location.href = "#!/LeadSummaryEmails";
                };
                LeadSummaryEmailsController.$inject = ["LeadSummaryListService", "InsertLeadSummaryService", "ZoneDDService", "LeadSummEditService", "ModelService", "$cookieStore"];
                return LeadSummaryEmailsController;
            }());
            var LeadSummaryEmailsComponentController = /** @class */ (function () {
                function LeadSummaryEmailsComponentController() {
                    this.controller = LeadSummaryEmailsController;
                    this.templateUrl = "/Scripts/App/LeadSummaryEmails/Template/LeadSummaryEmails.html";
                }
                LeadSummaryEmailsComponentController.Name = "leadsummaryemailscomponent";
                return LeadSummaryEmailsComponentController;
            }());
            app.AddComponent(LeadSummaryEmailsComponentController.Name, new LeadSummaryEmailsComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadSummaryEmailsComponent.js.map