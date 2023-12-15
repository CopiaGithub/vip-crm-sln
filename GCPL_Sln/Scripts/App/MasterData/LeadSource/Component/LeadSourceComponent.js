var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadSourceInsert = GCPL.Model.InsertLeadSourceModel;
            var LeadSourceController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadSourceController(_LeadSourceListService, _ChannelDDService, _InsertService, _EditService, _cookieStore) {
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
                    this.ChannelDD = null;
                    this.LeadSourceDatalist = null;
                    this.LeadSourceDataSearch = null;
                    this.InsertLeadSource = null;
                    this.EditLeadSource = null;
                    this.Cookie = null;
                    this.ChannelDDService = _ChannelDDService;
                    this._LeadSourceListService = _LeadSourceListService;
                    this.LeadSourceDataSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertLeadSource = new LeadSourceInsert();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                LeadSourceController.prototype.$onInit = function () {
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
                LeadSourceController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.ChannelDD = this.ChannelDDService.Find().then((function (response) {
                        _this.ChannelDD = _this.ChannelDDService.GetChannelDDnew(response.data.Result);
                    }));
                    this.LeadSourceDatalist = this._LeadSourceListService.Find(this.LeadSourceDataSearch).then((function (response) {
                        _this.LeadSourceDatalist = _this._LeadSourceListService.GetLeadSourceListData(response.data.Result);
                    }));
                };
                LeadSourceController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                LeadSourceController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                LeadSourceController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertLeadSource.ID == undefined || this.InsertLeadSource.ID == null || this.InsertLeadSource.ID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLeadSource.LeadSource == undefined || this.InsertLeadSource.LeadSource == null || this.InsertLeadSource.LeadSource == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLeadSource.Description == undefined || this.InsertLeadSource.Description == null || this.InsertLeadSource.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostLeadSource(this.InsertLeadSource).then((function (response) {
                            console.log(_this.InsertLeadSource);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("LeadSource saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertLeadSource = null;
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
                LeadSourceController.prototype.Add = function () {
                    this.InsertLeadSource.ID = "";
                    this.InsertLeadSource.LeadSource = "";
                    this.InsertLeadSource.Description = "";
                    this.InsertLeadSource.Status = "";
                };
                LeadSourceController.prototype.Clear = function () {
                    this.LeadSourceDataSearch.SearchText = "";
                    this.LeadSourceDataSearch.Status = "";
                    this.LeadSourceDataSearch.Channel = "";
                    $("#ddlstatus").val("");
                    $("#txtChannelsearch").val("");
                    $("#txtSource").val("");
                };
                LeadSourceController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertLeadSource = _this.EditService.GetEdit(response.data.Result);
                        //$('#txtsalorg').val(this.InsertLeadSource.LeadSourceID);
                        $('#txtLead').val(_this.InsertLeadSource.LeadSource);
                        $('#txtChannel').val(_this.InsertLeadSource.ID);
                        $('#txtSAPID').val(_this.InsertLeadSource.Description);
                        // $('#txtStatus').val(this.InsertLeadSource.Status);
                        if (_this.InsertLeadSource.Status == "True") {
                            _this.InsertLeadSource.Status = "1";
                        }
                        else {
                            _this.InsertLeadSource.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                LeadSourceController.prototype.SearchLeadSourceDataList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                LeadSourceController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.LeadSourceDatalist = this._LeadSourceListService.Find(this.LeadSourceDataSearch).then((function (response) {
                        _this.LeadSourceDatalist = _this._LeadSourceListService.GetLeadSourceListData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.LeadSourceDatalist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.LeadSourceDatalist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.LeadSourceDatalist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.LeadSourceDatalist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                LeadSourceController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                LeadSourceController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadSourceDatalist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadSourceController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.LeadSourceDatalist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadSourceController.prototype.Close = function () {
                    location.href = "#!/LeadSource";
                };
                LeadSourceController.prototype.ErrorClose = function () {
                    location.href = "#!/LeadSource";
                };
                LeadSourceController.$inject = ["LeadSourceListService", "ChannelDDService", "InsertLeadSourceService", "LeadSourceEditService", "$cookieStore"];
                return LeadSourceController;
            }());
            var LeadSourceComponentController = /** @class */ (function () {
                function LeadSourceComponentController() {
                    this.controller = LeadSourceController;
                    this.templateUrl = "/Scripts/App/MasterData/LeadSource/Template/_LeadSource.html";
                }
                LeadSourceComponentController.Name = "leadsourcecomponent";
                return LeadSourceComponentController;
            }());
            app.AddComponent(LeadSourceComponentController.Name, new LeadSourceComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadSourceComponent.js.map