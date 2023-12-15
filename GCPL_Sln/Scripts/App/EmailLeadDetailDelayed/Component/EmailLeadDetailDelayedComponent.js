var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var EmailLeadDelayMaster = GCPL.Model.InsertEmailLeadModel;
            var EmailLeadDetailDelayedController = /** @class */ (function () {
                function EmailLeadDetailDelayedController(_Listservice, _ZoneDDService, _ModelDDService, _InsertService, _EditService, _cookieStore) {
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
                    this.EmailLeadList = null;
                    this.ZoneDD = null;
                    this.Modeldd = null;
                    this.InsertEmailLead = null;
                    this.EditEmailLead = null;
                    this.EMAIL_REGEXP = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.ZoneDDService = _ZoneDDService;
                    this.ModelDDService = _ModelDDService;
                    this.InsertService = _InsertService;
                    this.InsertEmailLead = new EmailLeadDelayMaster();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                EmailLeadDetailDelayedController.prototype.$onInit = function () {
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
                EmailLeadDetailDelayedController.prototype.Init = function () {
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
                EmailLeadDetailDelayedController.prototype.Add = function () {
                    this.InsertEmailLead.ID = "";
                    this.InsertEmailLead.ModelID = "";
                    this.InsertEmailLead.ZoneID = "";
                    this.InsertEmailLead.EmailTO = "";
                    this.InsertEmailLead.EmailCC = "";
                    this.InsertEmailLead.Status = "";
                };
                EmailLeadDetailDelayedController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertEmailLead.EmailTO == undefined || this.InsertEmailLead.EmailTO == null || this.InsertEmailLead.EmailTO == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid TO Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    //else if (this.InsertEmailLead.EmailCC == undefined || this.InsertEmailLead.EmailCC == null || this.InsertEmailLead.EmailCC == "" || !(this.EMAIL_REGEXP.test(this.InsertEmailLead.EmailCC))) {
                    //    $("#errorclose").show();
                    //    $("#close").hide();
                    //    this.alert = "Please Enter Valid CC Email";
                    //}
                    else if (this.InsertEmailLead.ModelID == undefined || this.InsertEmailLead.ModelID == null || this.InsertEmailLead.ModelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertEmailLead.ZoneID == undefined || this.InsertEmailLead.ZoneID == null || this.InsertEmailLead.ZoneID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostEmailLead(this.InsertEmailLead).then((function (response) {
                            console.log(_this.InsertEmailLead);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Email Lead Details saved Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#add-modal').click();
                                _this.InsertEmailLead = null;
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
                EmailLeadDetailDelayedController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                EmailLeadDetailDelayedController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                EmailLeadDetailDelayedController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertEmailLead = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        //$('#modeldd').val(this.InsertLeadSumm.ModelID);
                        //$('#zonedd').val(this.InsertLeadSumm.ZoneID);
                        $('#txtemailto').val(_this.InsertEmailLead.EmailTO);
                        $('#txtemailcc').val(_this.InsertEmailLead.EmailCC);
                        if (_this.InsertEmailLead.Status == "True") {
                            _this.InsertEmailLead.Status = "1";
                        }
                        else {
                            _this.InsertEmailLead.Status = "0";
                        }
                        $("#add-modal").show();
                    }));
                };
                EmailLeadDetailDelayedController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.EmailLeadList = this.Listservice.Find().then((function (response) {
                        _this.EmailLeadList = _this.Listservice.GetEmailLeadList(response.data.Result);
                        if (_this.EmailLeadList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.EmailLeadList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.EmailLeadList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.EmailLeadList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                EmailLeadDetailDelayedController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.EmailLeadList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                EmailLeadDetailDelayedController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.EmailLeadList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                EmailLeadDetailDelayedController.prototype.Close = function () {
                    location.href = "#!/EmailLeadDetailDelayed";
                };
                EmailLeadDetailDelayedController.$inject = ["EmailLeadListService", "ZoneDDService", "ModelService", "InsertEmailLeadService", "EmailLeadEditService", "$cookieStore"];
                return EmailLeadDetailDelayedController;
            }());
            var EmailLeadDetailDelayedComponentController = /** @class */ (function () {
                function EmailLeadDetailDelayedComponentController() {
                    this.controller = EmailLeadDetailDelayedController;
                    this.templateUrl = "/Scripts/App/EmailLeadDetailDelayed/Template/EmailLeadDetailDelayed.html";
                }
                EmailLeadDetailDelayedComponentController.Name = "emailleaddetaildelayedcomponent";
                return EmailLeadDetailDelayedComponentController;
            }());
            app.AddComponent(EmailLeadDetailDelayedComponentController.Name, new EmailLeadDetailDelayedComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=EmailLeadDetailDelayedComponent.js.map