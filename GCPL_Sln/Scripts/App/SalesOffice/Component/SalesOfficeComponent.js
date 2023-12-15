var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var SalesOfficeInsert = GCPL.Model.InsertSalesOfficeModel;
            var SalesOfficeController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function SalesOfficeController(_ZoneDDService, _SalesOfficeListService, _InsertService, _EditService, _cookieStore) {
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
                    this.ZoneDD = null;
                    this.Salesofficelist = null;
                    this.SalesofficeSearch = null;
                    this.InsertSalesOffice = null;
                    this.EditsalesOffice = null;
                    this.Cookie = null;
                    this.ZoneDDService = _ZoneDDService;
                    this._SalesOfficeListService = _SalesOfficeListService;
                    this.SalesofficeSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertSalesOffice = new SalesOfficeInsert();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                SalesOfficeController.prototype.$onInit = function () {
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
                    $('#search-btn-loader').hide();
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                SalesOfficeController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.InsertSalesOffice.Status = "";
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.Salesofficelist = this._SalesOfficeListService.Find(this.SalesofficeSearch).then((function (response) {
                        _this.Salesofficelist = _this._SalesOfficeListService.GetSalesOfficeListData(response.data.Result);
                    }));
                };
                //SearchSalesofficeList(): void {
                //    this.Salesofficelist = this._SalesOfficeListService.Find(this.SalesofficeSearch).then((response => {
                //        this.Salesofficelist = this._SalesOfficeListService.GetSalesOfficeListData(response.data.Result);
                //    }));
                //}
                SalesOfficeController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertSalesOffice.ZoneID == undefined || this.InsertSalesOffice.ZoneID == null || this.InsertSalesOffice.ZoneID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOffice.SalesOffice == undefined || this.InsertSalesOffice.SalesOffice == null || this.InsertSalesOffice.SalesOffice == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOffice.SAPID == undefined || this.InsertSalesOffice.SAPID == null || this.InsertSalesOffice.SAPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOffice.SOAddress1 == undefined || this.InsertSalesOffice.SOAddress1 == null || this.InsertSalesOffice.SOAddress1 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Sales Office Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOffice.SOAddress2 == undefined || this.InsertSalesOffice.SOAddress2 == null || this.InsertSalesOffice.SOAddress2 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Sales Office Address2", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOffice.SOAddress3 == undefined || this.InsertSalesOffice.SOAddress3 == null || this.InsertSalesOffice.SOAddress3 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Sales Office Address3", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOffice.SOAddress4 == undefined || this.InsertSalesOffice.SOAddress4 == null || this.InsertSalesOffice.SOAddress4 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Sales Office Address4", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOffice.Status == undefined || this.InsertSalesOffice.Status == null || this.InsertSalesOffice.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostSalesOffice(this.InsertSalesOffice).then((function (response) {
                            console.log(_this.InsertSalesOffice);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Sales Office saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertSalesOffice = null;
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
                SalesOfficeController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                SalesOfficeController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                SalesOfficeController.prototype.Add = function () {
                    this.InsertSalesOffice.ZoneID = "";
                    this.InsertSalesOffice.SalesOffice = "";
                    this.InsertSalesOffice.SalesOfficeEmail = "";
                    this.InsertSalesOffice.SAPID = "";
                    this.InsertSalesOffice.Status = "";
                    this.InsertSalesOffice.SOAddress1 = "";
                    this.InsertSalesOffice.SOAddress2 = "";
                    this.InsertSalesOffice.SOAddress3 = "";
                    this.InsertSalesOffice.SOAddress4 = "";
                };
                SalesOfficeController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertSalesOffice = _this.EditService.GetEdit(response.data.Result);
                        $('#txtzone').val(_this.InsertSalesOffice.ZoneName);
                        $('#txtsaloffice').val(_this.InsertSalesOffice.SalesOffice);
                        $('#txtsalofficemail').val(_this.InsertSalesOffice.SalesOfficeEmail);
                        $('#txtSAP').val(_this.InsertSalesOffice.SAPID);
                        // $('#txtstatus').val(this.InsertSalesOffice.Status);
                        if (_this.InsertSalesOffice.Status == "True") {
                            _this.InsertSalesOffice.Status = "1";
                        }
                        else {
                            _this.InsertSalesOffice.Status = "0";
                        }
                        $('#txtSOAddress1').val(_this.InsertSalesOffice.SOAddress1);
                        $('#txtSOAddress2').val(_this.InsertSalesOffice.SOAddress2);
                        $('#txtSOAddress3').val(_this.InsertSalesOffice.SOAddress3);
                        $('#txtSOAddress4').val(_this.InsertSalesOffice.SOAddress4);
                        $("myModalAddNew").show();
                    }));
                };
                SalesOfficeController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.Salesofficelist = this._SalesOfficeListService.Find(this.SalesofficeSearch).then((function (response) {
                        _this.Salesofficelist = _this._SalesOfficeListService.GetSalesOfficeListData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.Salesofficelist.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.Salesofficelist.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.Salesofficelist);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.Salesofficelist.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                SalesOfficeController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                SalesOfficeController.prototype.Clear = function () {
                    this.SalesofficeSearch.SearchText = "";
                    this.SalesofficeSearch.Status = "";
                    this.SalesofficeSearch.Zone = "";
                    $("#txtsearch").val("");
                    $("#ddlstatus").val("");
                    $("#txtzonesearch").val("");
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                SalesOfficeController.prototype.SearchSalesofficeList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                SalesOfficeController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Salesofficelist.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                SalesOfficeController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.Salesofficelist.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                SalesOfficeController.prototype.Close = function () {
                    location.href = "#!/SalesOffice";
                };
                SalesOfficeController.prototype.ErrorClose = function () {
                    location.href = "#!/SalesOffice";
                };
                SalesOfficeController.$inject = ["ZoneDDService", "SalesOfficeListService", "InsertSalesOfficeService", "SalesOfficeEditService", "$cookieStore"];
                return SalesOfficeController;
            }());
            var SalesOfficeComponentController = /** @class */ (function () {
                function SalesOfficeComponentController() {
                    this.controller = SalesOfficeController;
                    this.templateUrl = "/Scripts/App/SalesOffice/Template/_SalesOffice.html";
                }
                SalesOfficeComponentController.Name = "salesofficecomponent";
                return SalesOfficeComponentController;
            }());
            app.AddComponent(SalesOfficeComponentController.Name, new SalesOfficeComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesOfficeComponent.js.map