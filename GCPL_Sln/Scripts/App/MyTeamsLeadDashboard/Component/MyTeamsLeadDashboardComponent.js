var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var MyTeamsLeadDashboardController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function MyTeamsLeadDashboardController(_getAutoSalesrep1, _getAutoCampaign, _LeadStatusService, _DivisionService, _RegionService, _StateService, _LSService, _ProductService, _ModelService, _DistrictService, _TeamLeadsService, _AllLeadReportViewService) {
                    this.TeamLeadsHeaderModel = null;
                    this.LeadStatusDropDown = null;
                    this.DivisionDropDown = null;
                    this.RegionDropDown = null;
                    this.StateDropDown = null;
                    this.LeadSourceDropDown = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.DistrictDropDown = null;
                    this.FillTeamLeadsSGrid = null;
                    this.LeadReportView = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.getAutoCampaign = _getAutoCampaign;
                    this.LeadStatusService = _LeadStatusService;
                    this.DivisionService = _DivisionService;
                    this.RegionService = _RegionService;
                    this.StateService = _StateService;
                    this.LSService = _LSService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.DistrictService = _DistrictService;
                    this.TeamLeadsService = _TeamLeadsService;
                    this.AllLeadReportViewService = _AllLeadReportViewService;
                    this.TeamLeadsHeaderModel = new GCPL.Model.TeamLeadsHeaderModel();
                }
                MyTeamsLeadDashboardController.prototype.$onInit = function () {
                    /* Sorting */
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                    $("#txtFromDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    $("#txtToDate").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectToDate
                    });
                    /*sorting end*/
                };
                MyTeamsLeadDashboardController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                MyTeamsLeadDashboardController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                MyTeamsLeadDashboardController.prototype.Init = function () {
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
                    var that = this;
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
                            that.TeamLeadsHeaderModel.AllocatedTo = ui.item.id;
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
                            that.TeamLeadsHeaderModel.Campaign = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    this.LeadStatusDropDown = this.LeadStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadStatusService.GetLeadStatusName(response.data.Result);
                        //for (var i = 0; i < this.LeadStatusDropDown.length; i++) {
                        //    let that = this;
                        //    //this.SalesPriceForCustomerList[i].FromDate = that.InsertSalesPrice.FromDate;
                        //    //this.SalesPriceForCustomerList[i].ToDate = that.InsertSalesPrice.ToDate;
                        //    this.LeadStatusDropDown[i].StatusID = that.InsertSalesPrice.CustomerID;
                        //    this.LeadStatusDropDown[i].Status = this.InsertSalesPrice.DealerID;
                        //}
                        //this.LeadStatusDropDown = this.temp();
                    }));
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivision(response.data.Result);
                    }));
                    this.RegionDropDown = this.RegionService.Find().then((function (response) {
                        _this.RegionDropDown = _this.RegionService.GetRegion(response.data.Result);
                    }));
                    this.StateDropDown = this.StateService.Find().then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                    debugger;
                    this.LeadSourceDropDown = this.LSService.Find().then((function (response) {
                        _this.LeadSourceDropDown = _this.LSService.GetLeadSource(response.data.Result);
                    }));
                };
                MyTeamsLeadDashboardController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.TeamLeadsHeaderModel.FromDate = document.getElementById("txtFromDate").value;
                    this.TeamLeadsHeaderModel.ToDate = document.getElementById("txtToDate").value;
                    this.FillTeamLeadsSGrid = this.TeamLeadsService.FindGrid(this.TeamLeadsHeaderModel).then((function (response) {
                        _this.FillTeamLeadsSGrid = _this.TeamLeadsService.TeamLeadsGrid(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.FillTeamLeadsSGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillTeamLeadsSGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            $('#search-btn-loader').hide();
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillTeamLeadsSGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.FillTeamLeadsSGrid.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                    }));
                };
                MyTeamsLeadDashboardController.prototype.Search = function () {
                    debugger;
                    $('#search-btn-loader').show();
                    this.FillGrid(this.numRecords);
                };
                MyTeamsLeadDashboardController.prototype.Product = function () {
                    var _this = this;
                    debugger;
                    this.ProductDropDown = this.ProductService.Find(this.TeamLeadsHeaderModel.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                MyTeamsLeadDashboardController.prototype.Model = function () {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.TeamLeadsHeaderModel.ProductID).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetModelDD(response.data.Result);
                    }));
                };
                MyTeamsLeadDashboardController.prototype.District = function () {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.TeamLeadsHeaderModel.StateIDs).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                MyTeamsLeadDashboardController.prototype.ViewDetails = function (data) {
                    var _this = this;
                    debugger;
                    this.AllLeadReportViewService.Find(data).then((function (response) {
                        _this.LeadReportView = _this.AllLeadReportViewService.GetAllLeadReportView(response.data.Result);
                        console.log(_this.LeadReportView);
                        debugger;
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
                        $("detailModal").show();
                    }));
                };
                MyTeamsLeadDashboardController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillTeamLeadsSGrid.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                MyTeamsLeadDashboardController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillTeamLeadsSGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                MyTeamsLeadDashboardController.prototype.downloadCSV = function (csv, filename) {
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
                MyTeamsLeadDashboardController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                MyTeamsLeadDashboardController.prototype.exportTableToCSV = function (filename) {
                    var csv = [];
                    var rows = document.querySelectorAll("#excelDownload tr");
                    for (var i = 0; i < rows.length; i++) {
                        var row = [], cols = rows[i].querySelectorAll("td, th");
                        for (var j = 0; j < cols.length; j++)
                            row.push(cols[j].innerHTML);
                        csv.push(row.join(","));
                    }
                    // Download CSV file
                    this.downloadCSV(csv.join("\n"), filename);
                };
                MyTeamsLeadDashboardController.prototype.Clear = function () {
                    this.TeamLeadsHeaderModel.CustomerName = "";
                    this.TeamLeadsHeaderModel.Createdby = "";
                    this.TeamLeadsHeaderModel.LeadID = "";
                    this.TeamLeadsHeaderModel.CustomerMobile = "";
                    this.TeamLeadsHeaderModel.SAPID = "";
                    this.TeamLeadsHeaderModel.ProductID = "";
                    this.TeamLeadsHeaderModel.SourceID = "";
                    this.TeamLeadsHeaderModel.DivisionID = "";
                    this.TeamLeadsHeaderModel.StatusID = "";
                    this.TeamLeadsHeaderModel.RegionID = "";
                    this.TeamLeadsHeaderModel.StateIDs = "";
                    this.TeamLeadsHeaderModel.UserID = "";
                    this.TeamLeadsHeaderModel.CampaignID = "";
                    this.TeamLeadsHeaderModel.DistrictID = "";
                    this.TeamLeadsHeaderModel.LeadSourceID = "";
                    this.TeamLeadsHeaderModel.AllocatedTo = "";
                    this.TeamLeadsHeaderModel.SubsourceID = "";
                    this.TeamLeadsHeaderModel.Subsource2ID = "";
                    this.TeamLeadsHeaderModel.ModelId = "";
                    this.TeamLeadsHeaderModel.Campaign = "";
                    this.TeamLeadsHeaderModel.LeadOrigin = "";
                    document.getElementById("txtSalesRep1").value = "";
                    //  (<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
                    // (<HTMLInputElement>document.getElementById("txtToDate")).value = "";
                };
                MyTeamsLeadDashboardController.$inject = ["UserNameAtofillService", "CampaignAtofillService", "LeadStatusddService", "DivisionDDService", "RegionddService", "StateddPService", "LeadSourceddService", "ProductddService", "ModelDDService", "DistrictddService", "TeamLeadsReportGridService", "AllLeadReportService"];
                return MyTeamsLeadDashboardController;
            }());
            var MyTeamsLeadDashboardComponentController = /** @class */ (function () {
                function MyTeamsLeadDashboardComponentController() {
                    this.controller = MyTeamsLeadDashboardController;
                    this.templateUrl = "/Scripts/App/MyTeamsLeadDashboard/Template/MyTeamsLeadDashboard.html";
                }
                MyTeamsLeadDashboardComponentController.Name = "myteamsleaddashboardcomponent";
                return MyTeamsLeadDashboardComponentController;
            }());
            app.AddComponent(MyTeamsLeadDashboardComponentController.Name, new MyTeamsLeadDashboardComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=MyTeamsLeadDashboardComponent.js.map