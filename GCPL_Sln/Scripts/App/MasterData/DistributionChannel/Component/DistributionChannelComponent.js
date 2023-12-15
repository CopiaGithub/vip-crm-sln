var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var DistributionChannelInsert = GCPL.Model.InsertDistributionChannelModel;
            var DistributionChannelController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DistributionChannelController(_DistributionChannelService, _InsertService, _EditService, _cookieStore) {
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
                    this.DistributionChannelList = null;
                    this.DistributionChannelSearch = null;
                    this.InsertDistributionChannel = null;
                    this.EditDistributionChannel = null;
                    this.Cookie = null;
                    this._DistributionChannelService = _DistributionChannelService;
                    this.DistributionChannelSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertDistributionChannel = new DistributionChannelInsert();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                DistributionChannelController.prototype.$onInit = function () {
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
                DistributionChannelController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.InsertDistributionChannel.Status = "";
                    this.DistributionChannelList = this._DistributionChannelService.Find(this.DistributionChannelSearch).then((function (response) {
                        _this.DistributionChannelList = _this._DistributionChannelService.GetDistributionChannelData(response.data.Result);
                    }));
                };
                DistributionChannelController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                DistributionChannelController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                DistributionChannelController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertDistributionChannel.DistributionChannel == undefined || this.InsertDistributionChannel.DistributionChannel == null || this.InsertDistributionChannel.DistributionChannel == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Distribution Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDistributionChannel.SAPID == undefined || this.InsertDistributionChannel.SAPID == null || this.InsertDistributionChannel.SAPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDistributionChannel.Status == undefined || this.InsertDistributionChannel.Status == null || this.InsertDistributionChannel.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostDistributionChannel(this.InsertDistributionChannel).then((function (response) {
                            console.log(_this.InsertDistributionChannel);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Distribution Channel saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertDistributionChannel = null;
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
                DistributionChannelController.prototype.Add = function () {
                    this.InsertDistributionChannel.DistributionChannel = "";
                    this.InsertDistributionChannel.SAPID = "";
                    this.InsertDistributionChannel.Status = "";
                };
                DistributionChannelController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertDistributionChannel = _this.EditService.GetEdit(response.data.Result);
                        $('#txtChannel').val(_this.InsertDistributionChannel.DistributionChannel);
                        $('#txtSAPID').val(_this.InsertDistributionChannel.SAPID);
                        // $('#txtStatus').val(this.InsertDistributionChannel.Status);
                        if (_this.InsertDistributionChannel.Status == "True") {
                            _this.InsertDistributionChannel.Status = "1";
                        }
                        else {
                            _this.InsertDistributionChannel.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                DistributionChannelController.prototype.Clear = function () {
                    this.DistributionChannelSearch.SearchText = "";
                    this.DistributionChannelSearch.Status = "";
                    $("#ddlstatus").val("");
                    $("#ddlstatus").val("");
                };
                DistributionChannelController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.DistributionChannelList = this._DistributionChannelService.Find(this.DistributionChannelSearch).then((function (response) {
                        _this.DistributionChannelList = _this._DistributionChannelService.GetDistributionChannelData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.DistributionChannelList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.DistributionChannelList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.DistributionChannelList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.DistributionChannelList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                DistributionChannelController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                DistributionChannelController.prototype.SearchDistributionChannelList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                DistributionChannelController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.DistributionChannelList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                DistributionChannelController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.DistributionChannelList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                DistributionChannelController.prototype.Close = function () {
                    location.href = "#!/DistributionChannel";
                };
                DistributionChannelController.$inject = ["DistributionChannelService", "InsertDistributionChannelService", "DistributionChannelEditService", "$cookieStore"];
                return DistributionChannelController;
            }());
            var DistributionChannelComponentController = /** @class */ (function () {
                function DistributionChannelComponentController() {
                    this.controller = DistributionChannelController;
                    this.templateUrl = "/Scripts/App/MasterData/DistributionChannel/Template/_DistributionChannel.html";
                }
                DistributionChannelComponentController.Name = "distributionchannelcomponent";
                return DistributionChannelComponentController;
            }());
            app.AddComponent(DistributionChannelComponentController.Name, new DistributionChannelComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DistributionChannelComponent.js.map