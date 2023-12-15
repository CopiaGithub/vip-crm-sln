var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Search = GCPL.Model.AllocationOverrideSearchModel;
            var CustomerValidate = GCPL.Model.CustomerViewModel;
            var InsertAllocationLead = GCPL.Model.InsertAllocationOverrideModel;
            var AllocationOverrideController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function AllocationOverrideController(_ListService, _CustomerViewService, _getAutoSalesrep1, _InsertService, _EmployeeCodeService, _cookieStore) {
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
                    this.AllocationOverrideList = null;
                    this.AllocationSearch = null;
                    this.CustomerView = null;
                    this.EmpCode = null;
                    this.LeadID = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.AllocationSearch = new Search();
                    this.CustomerViewService = _CustomerViewService;
                    this.CustomerView = new CustomerValidate();
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.InsertService = _InsertService;
                    this.InsertAllocationOverride = new InsertAllocationLead();
                    this.EmployeeCodeService = _EmployeeCodeService;
                    this.Cookie = _cookieStore;
                }
                AllocationOverrideController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $('#search-btn-loader').hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                AllocationOverrideController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                    debugger;
                    $("#txtUserName").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    debugger;
                                    return {
                                        label: item.Name,
                                        value: item.Name,
                                        id: item.userid
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            debugger;
                            that.InsertAllocationOverride.UserID = ui.item.id;
                            that.Search(ui.item.id);
                            //console.log(that.InsertReallocate.RefUserName);
                        },
                        change: function () {
                        }
                    });
                };
                AllocationOverrideController.prototype.SearchAllocationLeadList = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#search-btn-loader').show();
                };
                AllocationOverrideController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.AllocationOverrideList = this.ListService.Find(this.AllocationSearch).then((function (response) {
                        _this.AllocationOverrideList = _this.ListService.GetAllocationOverList(response.data.Result);
                        $('#search-btn-loader').hide();
                        _this.LeadID = _this.AllocationOverrideList.LeadID;
                        debugger;
                        if (_this.AllocationOverrideList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.AllocationOverrideList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.AllocationOverrideList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.AllocationOverrideList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.AllocationOverrideList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.AllocationOverrideList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.AllocationOverrideList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.AllocationOverrideList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                AllocationOverrideController.prototype.Validate = function (data) {
                    var _this = this;
                    debugger;
                    this.CustomerViewService.Find(data).then((function (response) {
                        _this.CustomerView = _this.CustomerViewService.GetCustomerView(response.data.Result);
                        debugger;
                        $('#txtCustName').val(_this.CustomerView.CompanyName);
                        $('#txtProjectName').val(_this.CustomerView.ProjectName);
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
                        _this.InsertAllocationOverride.LeadID = _this.CustomerView.LeadID;
                        //this.LeadID = this.CustomerView.LeadID;
                        $("reAllocateModal").show();
                    }));
                };
                AllocationOverrideController.prototype.Search = function (data) {
                    var _this = this;
                    debugger;
                    this.EmployeeCodeService.Find(data).then((function (response) {
                        _this.EmpCode = _this.EmployeeCodeService.GetEmpCodeInfo(response.data.Result);
                        console.log(_this.EmpCode);
                        debugger;
                        //this.inse.EmployeeCode = this.EmpCode.EmployeeCode;
                        $('#txtEmpCode').val(_this.EmpCode.EmployeeCode);
                    }));
                };
                AllocationOverrideController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                AllocationOverrideController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                AllocationOverrideController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    this.InsertAllocationOverride.LeadID = this.CustomerView.LeadID;
                    if (this.InsertAllocationOverride.UserID != "") {
                        this.InsertService.PostAllocation(this.InsertAllocationOverride).then((function (response) {
                            console.log(_this.InsertAllocationOverride);
                            debugger;
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Lead Re-Allocated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#re-allocate').click();
                                _this.InsertAllocationOverride = {};
                                $("#txtUserName").val("");
                                $("#txtEmpCode").val("");
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Please select a user.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                };
                AllocationOverrideController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.AllocationOverrideList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                AllocationOverrideController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.AllocationOverrideList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                AllocationOverrideController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                AllocationOverrideController.prototype.Clear = function () {
                    this.AllocationSearch.SearchInput = "";
                    this.AllocationSearch.LeadID = "";
                    $("#txtCustomer").val("");
                    $("#txtLead").val("");
                };
                AllocationOverrideController.prototype.Close = function () {
                    location.href = "#!/AllocationOverride";
                };
                AllocationOverrideController.prototype.ErrorClose = function () {
                    location.href = "#!/AllocationOverride";
                };
                AllocationOverrideController.$inject = ["AllocationOverrideListService", "CustomerViewService", "EmployeeAtofillService", "InsertAllocationOverrideService", "GetEmployeeCodeService", "$cookieStore"];
                return AllocationOverrideController;
            }());
            var AllocationOverrideComponentController = /** @class */ (function () {
                function AllocationOverrideComponentController() {
                    this.controller = AllocationOverrideController;
                    this.templateUrl = "/Scripts/App/AllocationOverride/Template/AllocationOverride.html";
                }
                AllocationOverrideComponentController.Name = "allocationoverridecomponent";
                return AllocationOverrideComponentController;
            }());
            app.AddComponent(AllocationOverrideComponentController.Name, new AllocationOverrideComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AllocationOverrideComponent.js.map