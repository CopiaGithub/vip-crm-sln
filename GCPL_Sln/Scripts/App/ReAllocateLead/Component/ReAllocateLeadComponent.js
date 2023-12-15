var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Search = GCPL.Model.ReallocateLeadSearchModel;
            var CustomerValidate = GCPL.Model.CustomerViewModel;
            var InsertReallocateLead = GCPL.Model.InsertReallocateLeadModel;
            var ReAllocateLeadController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ReAllocateLeadController(_ListService, _CustomerViewService, _getAutoSalesrep1, _InsertService, _EmployeeCodeService, _CustomerSapAutofill, _cookieStore) {
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
                    this.RealloacteLeadList = null;
                    this.ReallocateSearch = null;
                    this.CustomerView = null;
                    this.EmpCode = null;
                    this.LeadID = null;
                    //UserID = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.ReallocateSearch = new Search();
                    this.CustomerViewService = _CustomerViewService;
                    this.CustomerView = new CustomerValidate();
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.InsertService = _InsertService;
                    this.InsertReallocate = new InsertReallocateLead();
                    this.EmployeeCodeService = _EmployeeCodeService;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.Cookie = _cookieStore;
                    //this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                ReAllocateLeadController.prototype.$onInit = function () {
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
                    /*sorting end*/
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                ReAllocateLeadController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                    //this.Validate(this.LeadID);
                    var that = this;
                    $("#txtUserName").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value: item.Name,
                                        id: item.userid,
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertReallocate.UserID = ui.item.id;
                            //  $('#txtEmpCode').val(ui.item.value);
                            that.Search(ui.item.id);
                            //console.log(that.InsertReallocate.RefUserName);
                        },
                        change: function () {
                        }
                    });
                    $("#txtCustomer").autocomplete({
                        //  source:['1a0','anjali','archana'],
                        source: function (request, res) {
                            that.CustomerSapAutofill.FilterAutoComplete(request).then((function (response) {
                                var data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.CustomerName,
                                        value: item.CustomerName,
                                        id: item.CustomerID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            // Don't populate input field with selected value (pxid)
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.ReallocateSearch.SearchInput = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                };
                ReAllocateLeadController.prototype.SearchRealloacteLeadList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                ReAllocateLeadController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.RealloacteLeadList = this.ListService.Find(this.ReallocateSearch).then((function (response) {
                        _this.RealloacteLeadList = _this.ListService.GetReallocateList(response.data.Result);
                        _this.LeadID = _this.RealloacteLeadList.LeadID;
                        $('#search-btn-loader').hide();
                        if (_this.RealloacteLeadList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.RealloacteLeadList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.RealloacteLeadList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.RealloacteLeadList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.RealloacteLeadList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.RealloacteLeadList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.RealloacteLeadList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.RealloacteLeadList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                ReAllocateLeadController.prototype.Validate = function (data) {
                    var _this = this;
                    $('#txtUserName').val("");
                    $('#txtEmpCode').val("");
                    this.CustomerViewService.Find(data).then((function (response) {
                        _this.CustomerView = _this.CustomerViewService.GetCustomerView(response.data.Result);
                        $('#txtCustName').val(_this.CustomerView.CompanyName);
                        $('#txtCustEmail').val(_this.CustomerView.Email);
                        $('#txtCustMobile').val(_this.CustomerView.MobileNo);
                        $('#txtCustPhone').val(_this.CustomerView.PhoneNo);
                        $('#txtCustAddress').val(_this.CustomerView.Address1);
                        $('#txtConName').val(_this.CustomerView.ContactName);
                        $('#txtConEmail').val(_this.CustomerView.ConEmail);
                        $('#txtConPhone').val(_this.CustomerView.ConPhoneNo);
                        $('#txtConMobile').val(_this.CustomerView.ConMobileNo);
                        $('#txtConAddress').val(_this.CustomerView.Address);
                        $('#txtmodel').val(_this.CustomerView.ModelNo);
                        //$('#txtpurchase').val(this.CustomerView.Quantity);
                        $('#txtpurchase').val(_this.CustomerView.Title);
                        $('#txtcomm').val(_this.CustomerView.Comments);
                        $('#txtleadcat').val(_this.CustomerView.LeadCategory);
                        //$('#txtConName').val(this.CustomerView.LeadCategoryID);
                        //$('#txtConName').val(this.CustomerView.LeadID);
                        // $('#txtConName').val(this.CustomerView.CampaignName);
                        $('#txtcreate').val(_this.CustomerView.CreatedBy);
                        $('#txtspeci').val(_this.CustomerView.CreateComment);
                        $('#txtsource').val(_this.CustomerView.SourceID);
                        //$('#txtsource').val(this.CustomerView.LeadSource);
                        $('#txtwhen').val(_this.CustomerView.WhenCreated);
                        $('#txtvalid').val(_this.CustomerView.ValidatedBy);
                        $('#txtvalidcomm').val(_this.CustomerView.ValidComment);
                        $('#txtvaliddate').val(_this.CustomerView.WhenValidated);
                        $('#txtalloc').val(_this.CustomerView.Allocated);
                        $('#txtdateallo').val(_this.CustomerView.WhenAllocated);
                        $('#txtasscomments').val(_this.CustomerView.AssessmentComment);
                        $('#txtasses').val(_this.CustomerView.AssessmentDate);
                        $('#txtleadstatus').val(_this.CustomerView.Status);
                        $('#txtless').val(_this.CustomerView.IsLess);
                        $('#txtmet').val(_this.CustomerView.IsMeet);
                        $('#txtReturnID').val(_this.CustomerView.ReturnUserID);
                        $('#txtReturnComment').val(_this.CustomerView.ReturnComment);
                        $('#txtReturnBy').val(_this.CustomerView.ReturnUserName);
                        _this.InsertReallocate.LeadID = _this.CustomerView.LeadID;
                        //this.LeadID = this.CustomerView.LeadID;
                        $("reAllocateModal").show();
                    }));
                };
                ReAllocateLeadController.prototype.Search = function (data) {
                    var _this = this;
                    this.EmployeeCodeService.Find(data).then((function (response) {
                        _this.EmpCode = _this.EmployeeCodeService.GetEmpCodeInfo(response.data.Result);
                        console.log(_this.EmpCode);
                        //this.inse.EmployeeCode = this.EmpCode.EmployeeCode;
                        $('#txtEmpCode').val(_this.EmpCode.EmployeeCode);
                    }));
                };
                ReAllocateLeadController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                ReAllocateLeadController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                ReAllocateLeadController.prototype.Submit = function () {
                    var _this = this;
                    this.InsertReallocate.LeadID = this.CustomerView.LeadID;
                    if (this.InsertReallocate.UserID != "") {
                        this.InsertService.PostReallocate(this.InsertReallocate).then((function (response) {
                            console.log(_this.InsertReallocate);
                            if (response.data.Result != 0) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Lead Re-Allocated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#re-allocate').click();
                                _this.InsertReallocate = {};
                                $("#txtUserName").val("");
                                $("#txtEmpCode").val("");
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                        }));
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Please select a user.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                };
                ReAllocateLeadController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.RealloacteLeadList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                ReAllocateLeadController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.RealloacteLeadList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                ReAllocateLeadController.prototype.Clear = function () {
                    this.ReallocateSearch.LeadID = "";
                    this.ReallocateSearch.SearchInput = "";
                    $("#txtCustomer").val("");
                };
                ReAllocateLeadController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                ReAllocateLeadController.prototype.Close = function () {
                    location.href = "#!/ReAllocateLead";
                };
                ReAllocateLeadController.prototype.ErrorClose = function () {
                    location.href = "#!/ReAllocateLead";
                };
                ReAllocateLeadController.$inject = ["ReallocateLeadListService", "CustomerViewService", "EmployeeAtofillService", "InsertReallocateLeadsService", "GetEmployeeCodeService", "CustomerSapIdAutoFillService", "$cookieStore"];
                return ReAllocateLeadController;
            }());
            var ReAllocateLeadComponentController = /** @class */ (function () {
                function ReAllocateLeadComponentController() {
                    this.controller = ReAllocateLeadController;
                    this.templateUrl = "/Scripts/App/ReAllocateLead/Template/ReAllocateLead.html";
                }
                ReAllocateLeadComponentController.Name = "reallocateleadcomponent";
                return ReAllocateLeadComponentController;
            }());
            app.AddComponent(ReAllocateLeadComponentController.Name, new ReAllocateLeadComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ReAllocateLeadComponent.js.map