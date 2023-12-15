var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var AccountTypeMaster = GCPL.Model.InsertAccountModel;
            var AccountTypeMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function AccountTypeMasterController(_Listservice, _InsertService, _EditService, _cookieStore) {
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
                    this.AccountTypeList = null;
                    this.AccountSearch = null;
                    this.InsertAccount = null;
                    this.EditAccountType = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.AccountSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertAccount = new AccountTypeMaster();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                AccountTypeMasterController.prototype.$onInit = function () {
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
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                AccountTypeMasterController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                AccountTypeMasterController.prototype.SearchAccountList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                AccountTypeMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.AccountTypeList = this.Listservice.Find(this.AccountSearch).then((function (response) {
                        _this.AccountTypeList = _this.Listservice.GetAccountTypeList(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.AccountTypeList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.AccountTypeList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.AccountTypeList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.AccountTypeList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                AccountTypeMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                AccountTypeMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                AccountTypeMasterController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertAccount.AccountType == undefined || this.InsertAccount.AccountType == null || this.InsertAccount.AccountType == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter AccountType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostAccount(this.InsertAccount).then((function (response) {
                            console.log(_this.InsertAccount);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("AccountType saved Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertAccount = null;
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
                AccountTypeMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertAccount = _this.EditService.GetEdit(response.data.Result);
                        //$('#txtstatus').val(this.InsertAccount.Status);
                        if (_this.InsertAccount.Status == "True") {
                            _this.InsertAccount.Status = "1";
                        }
                        else {
                            _this.InsertAccount.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                AccountTypeMasterController.prototype.Add = function () {
                    //this.InsertCategory.CategoryID = "";
                    this.InsertAccount.AccountType = "";
                    this.InsertAccount.Status = "";
                };
                AccountTypeMasterController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                AccountTypeMasterController.prototype.Clear = function () {
                    this.AccountSearch.SearchText = "";
                    this.AccountSearch.Status = "";
                    //this.CategorySearch = "";
                    $("#txtAccount").val("");
                    $("#txtStatus").val("");
                };
                AccountTypeMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.AccountTypeList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                AccountTypeMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.AccountTypeList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                AccountTypeMasterController.prototype.Close = function () {
                    location.href = "#!/AccountTypeMaster";
                };
                AccountTypeMasterController.prototype.ErrorClose = function () {
                    location.href = "#!/AccountTypeMaster";
                };
                AccountTypeMasterController.$inject = ["AccountTypeListService", "InsertAccountService", "AccountEditService", "$cookieStore"];
                return AccountTypeMasterController;
            }());
            var AccountTypeMasterComponentController = /** @class */ (function () {
                function AccountTypeMasterComponentController() {
                    this.controller = AccountTypeMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/AccountTypeMaster/Template/_AccountTypeMaster.html";
                }
                AccountTypeMasterComponentController.Name = "accounttypemastercomponent";
                return AccountTypeMasterComponentController;
            }());
            app.AddComponent(AccountTypeMasterComponentController.Name, new AccountTypeMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
3;
//# sourceMappingURL=AccountTypeMasterComponent.js.map