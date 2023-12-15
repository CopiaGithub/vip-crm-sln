//search
var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var CustomerDivisionInsert = GCPL.Model.InsertCustomerDivisionModel;
            var CustomerDivisionController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function CustomerDivisionController(_CustomerDivisionService, _InsertService, _EditService, _cookieStore) {
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
                    this.CustomerDivisionList = null;
                    this.CustomerDivisionSearch = null;
                    this.InsertCustomerDivision = null;
                    this.EditCustomerDivision = null;
                    this.Cookie = null;
                    this._CustomerDivisionService = _CustomerDivisionService;
                    this.CustomerDivisionSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertCustomerDivision = new CustomerDivisionInsert();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                CustomerDivisionController.prototype.$onInit = function () {
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
                CustomerDivisionController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.InsertCustomerDivision.Status = "";
                };
                CustomerDivisionController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CustomerDivisionController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CustomerDivisionController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertCustomerDivision.CustomerDivision == undefined || this.InsertCustomerDivision.CustomerDivision == null || this.InsertCustomerDivision.CustomerDivision == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomerDivision.SAPID == undefined || this.InsertCustomerDivision.SAPID == null || this.InsertCustomerDivision.SAPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomerDivision.Status == undefined || this.InsertCustomerDivision.Status == null || this.InsertCustomerDivision.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostCustomerDivision(this.InsertCustomerDivision).then((function (response) {
                            console.log(_this.InsertCustomerDivision);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Customer Division saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertCustomerDivision = null;
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
                CustomerDivisionController.prototype.Add = function () {
                    //this.InsertCategory.CategoryID = "";
                    this.InsertCustomerDivision.CustomerDivision = "";
                    this.InsertCustomerDivision.SAPID = "";
                    this.InsertCustomerDivision.Status = "";
                };
                CustomerDivisionController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertCustomerDivision = _this.EditService.GetEdit(response.data.Result);
                        $('#txtDivision').val(_this.InsertCustomerDivision.CustomerDivision);
                        $('#txtSAPID').val(_this.InsertCustomerDivision.SAPID);
                        //$('#txtStatus').val(this.InsertCustomerDivision.Status);
                        if (_this.InsertCustomerDivision.Status == "True") {
                            _this.InsertCustomerDivision.Status = "1";
                        }
                        else {
                            _this.InsertCustomerDivision.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                CustomerDivisionController.prototype.Clear = function () {
                    this.CustomerDivisionSearch.SearchText = "";
                    this.CustomerDivisionSearch.Status = "";
                    //this.CategorySearch = "";
                    $("#txtDivision").val("");
                    $("#ddlstatus").val("");
                };
                CustomerDivisionController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.CustomerDivisionList = this._CustomerDivisionService.Find(this.CustomerDivisionSearch).then((function (response) {
                        _this.CustomerDivisionList = _this._CustomerDivisionService.GetCustomerDivisionData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.CustomerDivisionList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.CustomerDivisionList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.CustomerDivisionList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.CustomerDivisionList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                CustomerDivisionController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                CustomerDivisionController.prototype.SearchCustomerDivisionList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                CustomerDivisionController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CustomerDivisionList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                CustomerDivisionController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CustomerDivisionList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                CustomerDivisionController.$inject = ["CustomerDivisionService", "InsertCustomerDivisionService", "CustomerDivisionEditService", "$cookieStore"];
                return CustomerDivisionController;
            }());
            var CustomerDivisionComponentController = /** @class */ (function () {
                function CustomerDivisionComponentController() {
                    this.controller = CustomerDivisionController;
                    this.templateUrl = "/Scripts/App/MasterData/CustomerDivision/Template/_CustomerDivision.html";
                }
                CustomerDivisionComponentController.Name = "customerdivisioncomponent";
                return CustomerDivisionComponentController;
            }());
            app.AddComponent(CustomerDivisionComponentController.Name, new CustomerDivisionComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
3;
//# sourceMappingURL=CustomerDivisionComponent.js.map