var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Search = GCPL.Model.CreateLeadSearchModel;
            var CustomerValidate = GCPL.Model.CustomerViewModel;
            var CreateLeadController = /** @class */ (function () {
                function CreateLeadController(_ListService, _LeadStatusService, _CustomerViewService, _CustomerSapAutofill, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.RoleID = null;
                    this.alert = null;
                    this.CreateLeadList = null;
                    this.LeadStatusDropDown = null;
                    this.CreateLeadSearch = null;
                    this.UserID = null;
                    this.CustomerView = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.CreateLeadSearch = new Search();
                    this.LeadStatusService = _LeadStatusService;
                    this.CustomerViewService = _CustomerViewService;
                    this.CustomerView = new CustomerValidate();
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                CreateLeadController.prototype.$onInit = function () {
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
                    $('#search-btn-loader').hide();
                };
                CreateLeadController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusName(response.data.Result);
                    }));
                    var that = this;
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
                            that.CreateLeadSearch.SearchInput = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                };
                CreateLeadController.prototype.SearchCreateLeadList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                CreateLeadController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.CreateLeadList = this.ListService.Find(this.CreateLeadSearch).then((function (response) {
                        _this.CreateLeadList = _this.ListService.GetCreateLeadlist(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.CreateLeadList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.CreateLeadList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.CreateLeadList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.CreateLeadList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                CreateLeadController.prototype.Validate = function (data) {
                    var _this = this;
                    this.CustomerViewService.Find(data).then((function (response) {
                        _this.CustomerView = _this.CustomerViewService.GetCustomerView(response.data.Result);
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
                        $("reAllocateModal").show();
                    }));
                };
                CreateLeadController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CreateLeadList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                CreateLeadController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                CreateLeadController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CreateLeadList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                CreateLeadController.prototype.Clear = function () {
                    this.CreateLeadSearch.SearchInput = "";
                    this.CreateLeadSearch.StatusID = "";
                    this.CreateLeadSearch.UserID = "";
                    //this.CategorySearch = "";
                    $("#txtLeadStatus").val("");
                    $("#txtCustomer").val("");
                };
                CreateLeadController.$inject = ["CreateLeadListService", "LeadStatusddService", "CustomerViewService", "CustomerSapIdAutoFillService", "$cookieStore"];
                return CreateLeadController;
            }());
            var CreateLeadComponentController = /** @class */ (function () {
                function CreateLeadComponentController() {
                    this.controller = CreateLeadController;
                    this.templateUrl = "/Scripts/App/CreateLead/Template/CreateLead.html";
                }
                CreateLeadComponentController.Name = "createleadcomponent";
                return CreateLeadComponentController;
            }());
            app.AddComponent(CreateLeadComponentController.Name, new CreateLeadComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateLeadComponent.js.map