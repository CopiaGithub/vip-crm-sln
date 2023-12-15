var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var SalesOrgInsert = GCPL.Model.InsertSalesOrgModel;
            var SalesOrgController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function SalesOrgController(_SalesOrgListservice, _InsertService, _EditService, _cookieStore) {
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
                    this.SalesOrgList = null;
                    this.SalesOrgSearch = null;
                    this.InsertSalesOrg = null;
                    this.EditCategory = null;
                    this.Cookie = null;
                    this._SalesOrgListservice = _SalesOrgListservice;
                    this.InsertService = _InsertService;
                    this.EditService = _EditService;
                    this.InsertSalesOrg = new SalesOrgInsert();
                    this.SalesOrgSearch = Array();
                    this.Cookie = _cookieStore;
                }
                SalesOrgController.prototype.$onInit = function () {
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
                SalesOrgController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.InsertSalesOrg.Status = "";
                    this.SalesOrgList = this._SalesOrgListservice.Find(this.SalesOrgSearch).then((function (response) {
                        _this.SalesOrgList = _this._SalesOrgListservice.GetSalesOrgListData(response.data.Result);
                    }));
                };
                SalesOrgController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                SalesOrgController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                SalesOrgController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertSalesOrg.SalesOrg == undefined || this.InsertSalesOrg.SalesOrg == null || this.InsertSalesOrg.SalesOrg == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Sales Org", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOrg.SAPID == undefined || this.InsertSalesOrg.SAPID == null || this.InsertSalesOrg.SAPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertSalesOrg.Status == undefined || this.InsertSalesOrg.Status == null || this.InsertSalesOrg.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostSalesOrg(this.InsertSalesOrg).then((function (response) {
                            console.log(_this.InsertSalesOrg);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Sales Org saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertSalesOrg = null;
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
                SalesOrgController.prototype.Add = function () {
                    this.InsertSalesOrg.SalesOrg = "";
                    this.InsertSalesOrg.SAPID = "";
                    this.InsertSalesOrg.Status = "";
                };
                SalesOrgController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertSalesOrg = _this.EditService.GetEdit(response.data.Result);
                        $('#txtSalesOrg').val(_this.InsertSalesOrg.SalesOrg);
                        $('#txtSAPID').val(_this.InsertSalesOrg.SAPID);
                        //$('#txtStatus').val(this.InsertSalesOrg.Status);
                        if (_this.InsertSalesOrg.Status == "True") {
                            _this.InsertSalesOrg.Status = "1";
                        }
                        else {
                            _this.InsertSalesOrg.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                SalesOrgController.prototype.Clear = function () {
                    this.SalesOrgSearch.SearchText = "";
                    this.SalesOrgSearch.Status = "";
                    $("#txtSalesOrg").val("");
                    $("#ddlstatus").val("");
                };
                SalesOrgController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.SalesOrgList = this._SalesOrgListservice.Find(this.SalesOrgSearch).then((function (response) {
                        _this.SalesOrgList = _this._SalesOrgListservice.GetSalesOrgListData(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.SalesOrgList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.SalesOrgList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.SalesOrgList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.SalesOrgList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                SalesOrgController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                SalesOrgController.prototype.SearchSalesOrgList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                SalesOrgController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SalesOrgList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                SalesOrgController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.SalesOrgList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                SalesOrgController.prototype.Close = function () {
                    location.href = "#!/SalesOrg";
                };
                SalesOrgController.$inject = ["SalesOrgListService", "InsertSalesOrgService", "SalesOrgEditService", "$cookieStore"];
                return SalesOrgController;
            }());
            var SalesOrgComponentController = /** @class */ (function () {
                function SalesOrgComponentController() {
                    this.controller = SalesOrgController;
                    this.templateUrl = "/Scripts/App/MasterData/SalesOrg/Template/_SalesOrg.html";
                }
                SalesOrgComponentController.Name = "salesorgcomponent";
                return SalesOrgComponentController;
            }());
            app.AddComponent(SalesOrgComponentController.Name, new SalesOrgComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SalesOrgComponent.js.map