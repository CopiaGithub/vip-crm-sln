var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LeadReportViewDetails = GCPL.Model.AllLeadReportViewModel;
            var getAllLeadCount = GCPL.Model.LeadStatusModel;
            var ContactMaster = GCPL.Model.InsertContactMaster;
            var AllLeadController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function AllLeadController(_AllLeadsService, _LeadStatusService, _DivisionService, _ProductService, _ModelService, _ZoneDDService, _RegionService, _StateService, _DistrictService, _LSService, _getAutoSalesrep1, _getAutoSalesrep2, _AllLeadReportViewService, _getAutoCampaign, _LeadTypeService, _AllLeadCountService, _CustomerSapAutofill, _getAutoProjectName, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.AllStatus = null;
                    this.FillAllLeadsSGrid = null;
                    this.AllLeadsHeaderModel = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.LeadStatusDropDown = null;
                    this.DivisionDropDown = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.ZoneDD = null;
                    this.RegionDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.LeadSourceDropDown = null;
                    this.LeadReportView = null;
                    this.LeadTypeDropDown = null;
                    this.CustomerID = null;
                    this.InsertContact = null;
                    this.LeadID = null;
                    //RoleID = null;
                    this.Cookie = null;
                    this.getAllLeadCount = null;
                    this.AllLeadsService = _AllLeadsService;
                    this.AllLeadsHeaderModel = new GCPL.Model.AllLeadsHeaderModel();
                    this.getAutoProjectName = _getAutoProjectName;
                    this.LeadStatusService = _LeadStatusService;
                    this.DivisionService = _DivisionService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.ZoneDDService = _ZoneDDService;
                    this.RegionService = _RegionService;
                    this.StateService = _StateService;
                    this.DistrictService = _DistrictService;
                    this.LSService = _LSService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.getAutoSalesrep2 = _getAutoSalesrep2;
                    this.AllLeadReportViewService = _AllLeadReportViewService;
                    this.LeadReportView = new LeadReportViewDetails();
                    this.getAutoCampaign = _getAutoCampaign;
                    this.LeadTypeService = _LeadTypeService;
                    this.AllLeadCountService = _AllLeadCountService;
                    this.getAllLeadCount = new getAllLeadCount();
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.InsertContact = new ContactMaster();
                    //this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                AllLeadController.prototype.$onInit = function () {
                    this.Init();
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                };
                AllLeadController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                AllLeadController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                AllLeadController.prototype.Init = function () {
                    var _this = this;
                    var n = new Date();
                    n.setDate(n.getDate() - 7);
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m = months[n.getMonth()];
                    var d = n.getDate();
                    var y = n.getFullYear();
                    document.getElementById("txtFromDate").innerHTML = d + " " + m + " " + y;
                    $('#txtFromDate').val(d + " " + m + " " + y);
                    document.getElementById("txtFromDate").value;
                    $("#txtFromDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    var n1 = new Date();
                    var y1 = n1.getFullYear();
                    var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m1 = months1[n1.getMonth()];
                    var d1 = n1.getDate();
                    document.getElementById("txtToDate").innerHTML = d1 + " " + m1 + " " + y1;
                    $('#txtToDate').val(d1 + " " + m1 + " " + y1);
                    document.getElementById("txtToDate").value;
                    $("#txtToDate").datepicker({
                        dateFormat: 'dd M yy',
                        changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectToDate
                    });
                    this.AllLeadsHeaderModel.FromDate = document.getElementById("txtFromDate").value;
                    this.AllLeadsHeaderModel.ToDate = document.getElementById("txtToDate").value;
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                    $("#txtProjectName").autocomplete({
                        source: function (request, res) {
                            that.getAutoProjectName.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoProjectName.GetAutProjName(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ProjectName,
                                        value: item.ProjectName,
                                        id: item.ProjectID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.AllLeadsHeaderModel.ProjectID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtSalesRep1").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ManagerName,
                                        value: item.ManagerName,
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
                            that.AllLeadsHeaderModel.AllocatedTo = ui.item.id;
                            //that.InsertLead.RefUserName = ui.item.id;
                            console.log(that.AllLeadsHeaderModel.AllocatedTo);
                        },
                        change: function () {
                        }
                    });
                    $("#txtCampaign").autocomplete({
                        source: function (request, res) {
                            that.getAutoCampaign.FilterCampaignAutoComplete(request).then((function (response) {
                                var data = that.getAutoCampaign.GetCampaignAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.CampaignName,
                                        value: item.CampaignName,
                                        id: item.CampaignID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.AllLeadsHeaderModel.Campaign = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtUserName").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep2.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep2.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
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
                            that.AllLeadsHeaderModel.Createdby = ui.item.id;
                            console.log(that.AllLeadsHeaderModel.Createdby);
                        },
                        change: function () {
                        }
                    });
                    $("#txtCustomerName").autocomplete({
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
                            that.AllLeadsHeaderModel.CustomerID = ui.item.id;
                            that.Search1(ui.item.id);
                            console.log(that.AllLeadsHeaderModel.CustomerID);
                        },
                        change: function () {
                        }
                    });
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusName(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    this.RegionDropDown = this.RegionService.Find().then((function (response) {
                        _this.RegionDropDown = _this.RegionService.GetRegion(response.data.Result);
                    }));
                    this.StateDropDown = this.StateService.Find().then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                    this.LeadSourceDropDown = this.LSService.Find().then((function (response) {
                        _this.LeadSourceDropDown = _this.LSService.GetLeadSource(response.data.Result);
                    }));
                };
                AllLeadController.prototype.addStatus = function (abc) {
                    AllLeadController.statusDropdownList.push(abc);
                };
                AllLeadController.prototype.addLeadType = function (abc) {
                    AllLeadController.leadTypeDropdownList.push(abc);
                    this.Division();
                };
                AllLeadController.prototype.addDivision = function (abc) {
                    AllLeadController.divisionDropdownList.push(abc);
                    this.Product();
                };
                AllLeadController.prototype.addProduct = function (abc) {
                    AllLeadController.productDrpodownList.push(abc);
                    this.Model();
                };
                AllLeadController.prototype.addModel = function (abc) {
                    AllLeadController.modelDrpodownList.push(abc);
                };
                AllLeadController.prototype.addLeadSource = function (abc) {
                    AllLeadController.leadSourceIDDropdownList.push(abc);
                };
                AllLeadController.prototype.addLeadOrigin = function (abc) {
                    AllLeadController.leadOriginDropdownList.push(abc);
                };
                AllLeadController.prototype.addRegion = function (abc) {
                    AllLeadController.regionDropdownList.push(abc);
                };
                AllLeadController.prototype.addZone = function (abc) {
                    AllLeadController.zoneDropdownList.push(abc);
                };
                AllLeadController.prototype.ViewDetails = function (data) {
                    var _this = this;
                    this.AllLeadReportViewService.Find(data).then((function (response) {
                        _this.LeadReportView = _this.AllLeadReportViewService.GetAllLeadReportView(response.data.Result);
                        console.log(_this.LeadReportView);
                        _this.LeadID = _this.LeadReportView.LeadID;
                        $('#LeadOrigin').val(_this.LeadReportView.LeadOrigin);
                        $('#txtProjectName').val(_this.LeadReportView.ProjectName);
                        $('#Opportunity').val(_this.LeadReportView.Opportunity);
                        $('#LeadID').val(_this.LeadReportView.LeadID);
                        $('#txtCustName').val(_this.LeadReportView.CustName);
                        $('#txtCustEmail').val(_this.LeadReportView.CustEmail);
                        $('#txtCustMobNo').val(_this.LeadReportView.CustMobNo);
                        $('#txtCustPhnNo').val(_this.LeadReportView.CustPhnNo);
                        $('#txtCustAddress').val(_this.LeadReportView.CustAddress);
                        $('#txtContName').val(_this.LeadReportView.ContName);
                        $('#txtContEmail').val(_this.LeadReportView.ContEmail);
                        $('#txtContMobNo').val(_this.LeadReportView.ContMobNo);
                        $('#txtContPhnNo').val(_this.LeadReportView.ContPhnNo);
                        $('#txtContAddress').val(_this.LeadReportView.ContAddress);
                        $('#txtLeadModel').val(_this.LeadReportView.LeadModel);
                        $('#txtPurchaseWithin').val(_this.LeadReportView.PurchaseWithin);
                        $('#txtSpecifyMore').val(_this.LeadReportView.SpecifyMore);
                        $('#txtQuantity').val(_this.LeadReportView.Quantity);
                        $('#txtCreatedBy').val(_this.LeadReportView.CreatedBy);
                        $('#txtCreatedDate').val(_this.LeadReportView.CreatedDate);
                        $('#txtSource').val(_this.LeadReportView.Source);
                        $('#txtRefUserName').val(_this.LeadReportView.RefUserName);
                        $('#txtCampaign').val(_this.LeadReportView.Campaign);
                        $('#txtLeadCreationComments').val(_this.LeadReportView.LeadCreationComments);
                        $('#txtValidatedBy').val(_this.LeadReportView.ValidatedBy);
                        $('#txtDateValidated').val(_this.LeadReportView.DateValidated);
                        $('#txtValidationComment').val(_this.LeadReportView.ValidationComment);
                        $('#txtAllocatedTo').val(_this.LeadReportView.AllocatedTo);
                        $('#txtAllocatedDate').val(_this.LeadReportView.AllocatedDate);
                        $('#txtAssessmentDate').val(_this.LeadReportView.AssessmentDate);
                        $('#txtLessthan90days').val(_this.LeadReportView.Lessthan90days);
                        $('#txtMetCustomer').val(_this.LeadReportView.MetCustomer);
                        $('#txtAssessmentComments').val(_this.LeadReportView.AssessmentComments);
                        $('#txtLeadStatus').val(_this.LeadReportView.LeadStatus);
                        $('#txtClosedBy').val(_this.LeadReportView.ClosedBy);
                        if (_this.LeadReportView.MetCustomer == "False") {
                            _this.LeadReportView.MetCustomer = "No";
                        }
                        else if (_this.LeadReportView.MetCustomer == "True") {
                            _this.LeadReportView.MetCustomer = "Yes";
                        }
                        if (_this.LeadReportView.Lessthan90days == "False") {
                            _this.LeadReportView.Lessthan90days = "No";
                        }
                        else if (_this.LeadReportView.Lessthan90days == "True") {
                            _this.LeadReportView.Lessthan90days = "Yes";
                        }
                        $("detailModal").show();
                    }));
                };
                AllLeadController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                AllLeadController.prototype.Product = function () {
                    var _this = this;
                    this.AllLeadsHeaderModel.DivisionID = AllLeadController.divisionDropdownList.toString();
                    this.ProductDropDown = this.ProductService.Find(this.AllLeadsHeaderModel.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                AllLeadController.prototype.Model = function () {
                    var _this = this;
                    this.AllLeadsHeaderModel.ProductID = AllLeadController.productDrpodownList.toString();
                    this.ModelDropDown = this.ModelService.Find(this.AllLeadsHeaderModel).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                AllLeadController.prototype.District = function () {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.AllLeadsHeaderModel.StateIDs).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                AllLeadController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.AllLeadsHeaderModel.StatusID = AllLeadController.statusDropdownList.toString();
                    this.AllLeadsHeaderModel.LeadType = AllLeadController.leadTypeDropdownList.toString();
                    this.AllLeadsHeaderModel.ModelId = AllLeadController.modelDrpodownList.toString();
                    this.AllLeadsHeaderModel.LeadSourceID = AllLeadController.leadSourceIDDropdownList.toString();
                    this.AllLeadsHeaderModel.LeadOrigin = AllLeadController.leadOriginDropdownList.toString();
                    this.AllLeadsHeaderModel.ZoneID = AllLeadController.zoneDropdownList.toString();
                    this.AllLeadsHeaderModel.RegionID = AllLeadController.regionDropdownList.toString();
                    this.AllLeadsHeaderModel.FromDate = document.getElementById("txtFromDate").value;
                    this.AllLeadsHeaderModel.ToDate = document.getElementById("txtToDate").value;
                    this.FillAllLeadsSGrid = this.AllLeadsService.FindGrid(this.AllLeadsHeaderModel).then((function (response) {
                        _this.FillAllLeadsSGrid = _this.AllLeadsService.GetAllLeadsGrid(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.FillAllLeadsSGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillAllLeadsSGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + that.numRecords;
                            });
                            $('#search-btn-loader').hide();
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillAllLeadsSGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.FillAllLeadsSGrid.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                        _this.AllLeadCountService.FindGrid(_this.AllLeadsHeaderModel).then((function (response) {
                            _this.getAllLeadCount = _this.AllLeadCountService.GetLeadsStatusCountGrid(response.data.Result);
                        }));
                    }));
                };
                AllLeadController.prototype.Search = function () {
                    $('#search-btn-loader').show();
                    $('.chkBox').prop('checked', false);
                    this.FillGrid(this.numRecords);
                    AllLeadController.statusDropdownList = [];
                    AllLeadController.leadTypeDropdownList = [];
                    AllLeadController.divisionDropdownList = [];
                    AllLeadController.productDrpodownList = [];
                    AllLeadController.leadSourceIDDropdownList = [];
                    AllLeadController.leadOriginDropdownList = [];
                    AllLeadController.zoneDropdownList = [];
                    AllLeadController.regionDropdownList = [];
                };
                AllLeadController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                AllLeadController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillAllLeadsSGrid.slice(begin, end);
                    if (this.page + 2 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                AllLeadController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillAllLeadsSGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                AllLeadController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    $("#ErrClose").show();
                    $("#submitClose").hide();
                    this.alert = Message;
                };
                AllLeadController.prototype.Clear = function () {
                    // this.FillGrid(this.numRecords);
                    this.AllLeadsHeaderModel.CustomerID = "";
                    this.AllLeadsHeaderModel.Createdby = "";
                    this.AllLeadsHeaderModel.LeadID = "";
                    this.AllLeadsHeaderModel.CustomerMobile = "";
                    this.AllLeadsHeaderModel.SAPID = "";
                    this.AllLeadsHeaderModel.ProductID = "";
                    this.AllLeadsHeaderModel.SourceID = "";
                    this.AllLeadsHeaderModel.DivisionID = "";
                    this.AllLeadsHeaderModel.StatusID = "";
                    this.AllLeadsHeaderModel.RegionID = "";
                    this.AllLeadsHeaderModel.StateIDs = "";
                    this.AllLeadsHeaderModel.UserID = "";
                    this.AllLeadsHeaderModel.CampaignID = "";
                    this.AllLeadsHeaderModel.DistrictID = "";
                    this.AllLeadsHeaderModel.LeadSourceID = "";
                    this.AllLeadsHeaderModel.AllocatedTo = "";
                    this.AllLeadsHeaderModel.SubsourceID = "";
                    this.AllLeadsHeaderModel.Subsource2ID = "";
                    this.AllLeadsHeaderModel.ModelId = "";
                    this.AllLeadsHeaderModel.Campaign = "";
                    this.AllLeadsHeaderModel.LeadOrigin = "";
                    this.AllLeadsHeaderModel.LeadTypeID = "";
                    this.AllLeadsHeaderModel.ZoneID = "";
                    this.AllLeadsHeaderModel.Opportunity = "";
                    this.AllLeadsHeaderModel.ProjectID = "";
                    document.getElementById("txtUserName").value = "";
                    document.getElementById("txtCustomerName").value = "";
                    document.getElementById("txtSalesRep1").value = "";
                    document.getElementById("txtProjectName").value = "";
                };
                AllLeadController.prototype.Close = function () {
                    location.href = "#!/AllLeads";
                };
                AllLeadController.prototype.ErrorClose = function () {
                    location.href = "#!/AllLeads";
                };
                AllLeadController.prototype.downloadCSV = function (csv, filename) {
                    var csvFile;
                    var downloadLink;
                    // CSV file
                    csvFile = new Blob([csv], { type: "text/csv" });
                    // Download link
                    downloadLink = document.createElement("a");
                    // File name
                    downloadLink.download = filename;
                    // Create a link to the file
                    downloadLink.href = window.URL.createObjectURL(csvFile);
                    // Hide download link
                    downloadLink.style.display = "none";
                    // Add the link to DOM
                    document.body.appendChild(downloadLink);
                    // Click download link
                    downloadLink.click();
                };
                AllLeadController.prototype.exportTableToCSV = function (filename) {
                    var csv = [];
                    var rows = document.querySelectorAll("#excelDownload tr");
                    for (var i = 0; i < rows.length; i++) {
                        var row = [], cols = rows[i].querySelectorAll("td, th");
                        for (var j = 0; j < cols.length; j++)
                            row.push('"' + cols[j].innerHTML + '"');
                        csv.push(row.join(","));
                    }
                    // Download CSV file
                    this.downloadCSV(csv.join("\n"), filename);
                };
                AllLeadController.prototype.Search1 = function (data) {
                    var _this = this;
                    this.CustomerSapAutofill.FindCustomerSAPID(data).then((function (response) {
                        _this.InsertContact.CustomerSAPID = _this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
                    }));
                };
                AllLeadController.statusDropdownList = [];
                AllLeadController.leadTypeDropdownList = [];
                AllLeadController.divisionDropdownList = [];
                AllLeadController.productDrpodownList = [];
                AllLeadController.modelDrpodownList = [];
                AllLeadController.leadSourceIDDropdownList = [];
                AllLeadController.leadOriginDropdownList = [];
                AllLeadController.zoneDropdownList = [];
                AllLeadController.regionDropdownList = [];
                AllLeadController.$inject = ["AllLeadsReportGridService", "LeadStatusddService", "DivisionService",
                    "ProductddService", "LeadTypeProductService", "ZoneDDService",
                    "RegionddService", "StateddPService", "DistrictddService",
                    "LeadSourceddService", "UserNameAtofillService", "EmployeeAtofillService",
                    "AllLeadReportService", "CampaignAtofillService", "LeadTypeddService",
                    "LeadsStatusCountService", "CustomerSapIdAutoFillService", "getAutoProjectNameService",
                    "$cookieStore"];
                return AllLeadController;
            }());
            var AllLeadComponentController = /** @class */ (function () {
                function AllLeadComponentController() {
                    this.controller = AllLeadController;
                    this.templateUrl = "/Scripts/App/AllLead/Template/AllLead.html";
                }
                AllLeadComponentController.Name = "allleadcomponent";
                return AllLeadComponentController;
            }());
            app.AddComponent(AllLeadComponentController.Name, new AllLeadComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AllLeadComponent.js.map