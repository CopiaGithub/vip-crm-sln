var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var SalesAreaInsert = GCPL.Model.InsertSalesAreaModel;
            var SalesAreaDataController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function SalesAreaDataController(_SalesOrgDDService, DistributionChannelDDService, CustomerDivisionDDService, _SalesAreaListService, _InsertService, _EditService, _cookieStore) {
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
                    this.SalesOrgDD = null;
                    this.DistributionChannelDD = null;
                    this.CustomerDivisionDD = null;
                    this.SalesareaDatalist = null;
                    this.SalesareaDataSearch = null;
                    this.SalesAreaInsert = null;
                    this.InsertSalesArea = null;
                    this.EditSalesAreaData = null;
                    this.Cookie = null;
                    this.SalesOrgDDService = _SalesOrgDDService;
                    this.DistributionChannelDDService = DistributionChannelDDService;
                    this.CustomerDivisionDDService = CustomerDivisionDDService;
                    this._SalesAreaListService = _SalesAreaListService;
                    this.SalesareaDataSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertSalesArea = new SalesAreaInsert();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                SalesAreaDataController.prototype.$onInit = function () {
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
                SalesAreaDataController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.SalesOrgDD = this.SalesOrgDDService.Find().then((function (response) {
                        _this.SalesOrgDD = _this.SalesOrgDDService.GetSalesOrgnew(response.data.Result);
                    }));
                    this.DistributionChannelDD = this.DistributionChannelDDService.Find().then((function (response) {
                        _this.DistributionChannelDD = _this.DistributionChannelDDService.GetDistributionChannelDDnew(response.data.Result);
                    }));
                    this.CustomerDivisionDD = this.CustomerDivisionDDService.Find().then((function (response) {
                        _this.CustomerDivisionDD = _this.CustomerDivisionDDService.GetCustomerDivisionDDnew(response.data.Result);
                    }));
                    this.SalesareaDatalist = this._SalesAreaListService.Find(this.SalesareaDataSearch).then((function (response) {
                        _this.SalesareaDatalist = _this._SalesAreaListService.GetSalesAreaListData(response.data.Result);
                    }));
                };
                SalesAreaDataController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                SalesAreaDataController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                SalesAreaDataController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertSalesArea.SalesOrgID == undefined || this.InsertSalesArea.SalesOrgID == null || this.InsertSalesArea.SalesOrgID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Sales Org", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesArea.DistributionChannelID == undefined || this.InsertSalesArea.DistributionChannelID == null || this.InsertSalesArea.DistributionChannelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Distribution Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesArea.CustomerDivisionID == undefined || this.InsertSalesArea.CustomerDivisionID == null || this.InsertSalesArea.CustomerDivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesArea.Status == undefined || this.InsertSalesArea.Status == null || this.InsertSalesArea.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostSalesArea(this.InsertSalesArea).then((function (response) {
                            console.log(_this.InsertSalesArea);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Sales Area saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertSalesArea = null;
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
                SalesAreaDataController.prototype.Add = function () {
                    this.InsertSalesArea.SalesOrgID = "";
                    this.InsertSalesArea.DistributionChannelID = "";
                    this.InsertSalesArea.CustomerDivisionID = "";
                    this.InsertSalesArea.Status = "";
                };
                SalesAreaDataController.prototype.Clear = function () {
                    this.SalesareaDataSearch.Status = "";
                    $("#ddlstatus").val("");
                };
                SalesAreaDataController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertSalesArea = _this.EditService.GetEdit(response.data.Result);
                        $('#txtsalorg').val(_this.InsertSalesArea.SalesOrgID);
                        $('#txtdistribution').val(_this.InsertSalesArea.DistributionChannelID);
                        $('#txtbusiness').val(_this.InsertSalesArea.CustomerDivisionID);
                        if (_this.InsertSalesArea.Status == "True") {
                            _this.InsertSalesArea.Status = "1";
                        }
                        else {
                            _this.InsertSalesArea.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                SalesAreaDataController.prototype.SearchSalesareaDataList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                SalesAreaDataController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SalesareaDatalist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                SalesAreaDataController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SalesareaDatalist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                SalesAreaDataController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.SalesareaDatalist = this._SalesAreaListService.Find(this.SalesareaDataSearch).then((function (response) {
                        _this.SalesareaDatalist = _this._SalesAreaListService.GetSalesAreaListData(response.data.Result);
                        $('#search-btn-loader').hide();
                        console.log(_this.SalesareaDatalist);
                        _this.maxPages = (that.incre / that.numRecords);
                        _this.ShowBack = false;
                        _this.ShowNext = that.maxPages > 1 ? true : false;
                        _this.shownItems = _this.SalesareaDatalist.slice(0, that.numRecords);
                    }));
                };
                SalesAreaDataController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                SalesAreaDataController.prototype.Close = function () {
                    location.href = "#!/SalesAreaData";
                };
                SalesAreaDataController.$inject = ["SalesOrgDDService", "DistributionChannelDDService", "CustomerDivisionDDService", "SalesAreaListService", "InsertSalesAreaService", "SalesAreaEditService", "$cookieStore"];
                return SalesAreaDataController;
            }());
            var SalesAreaDataComponentController = /** @class */ (function () {
                function SalesAreaDataComponentController() {
                    this.controller = SalesAreaDataController;
                    this.templateUrl = "/Scripts/App/MasterData/SalesAreaData/Template/_SalesAreaData.html";
                }
                SalesAreaDataComponentController.Name = "salesareadatacomponent";
                return SalesAreaDataComponentController;
            }());
            app.AddComponent(SalesAreaDataComponentController.Name, new SalesAreaDataComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesAreaDataComponent.js.map