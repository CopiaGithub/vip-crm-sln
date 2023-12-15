var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var TeamLeadController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function TeamLeadController(_TeamLeadsService, _getAutoSalesrep1, _getAutoCampaign, _LeadStatusService, _UserDDService, _DivisionService, _RegionService, _StateService, _LSService, _ProductService, _ModelService, _DistrictService, _AllLeadReportViewService, _TeamLeadCountService, _AllLeadCountService) {
                    this.TeamLeadsHeaderModel = null;
                    this.FillTeamLeadsSGrid = null;
                    this.LeadStatusDropDown = null;
                    this.DivisionDropDown = null;
                    this.RegionDropDown = null;
                    this.ModelDropDown = null;
                    this.LeadReportView = null;
                    this.StateDropDown = null;
                    this.UserDropDown = null;
                    this.LeadSourceDropDown = null;
                    this.ProductDropDown = null;
                    this.DistrictDropDown = null;
                    this.getAllLeadCount = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.getTeamLeadCount = null;
                    this.TeamLeadsHeaderModel = new GCPL.Model.TeamLeadsHeaderModel();
                    this.TeamLeadsService = _TeamLeadsService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.getAutoCampaign = _getAutoCampaign;
                    this.LeadStatusService = _LeadStatusService;
                    this.UserDDService = _UserDDService;
                    this.DivisionService = _DivisionService;
                    this.RegionService = _RegionService;
                    this.StateService = _StateService;
                    this.LSService = _LSService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.DistrictService = _DistrictService;
                    this.AllLeadReportViewService = _AllLeadReportViewService;
                    this.TeamLeadCountService = _TeamLeadCountService;
                    this.AllLeadCountService = _AllLeadCountService;
                }
                TeamLeadController.prototype.$onInit = function () {
                    /* Sorting */
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                    this.Init();
                    //$("#txtFromDate").datepicker({
                    //    dateFormat: 'dd M yy', changeMonth: true,
                    //    changeYear: true,
                    //    onSelect: this.selectFromDate
                    //});
                    //$("#txtToDate").datepicker({
                    //    dateFormat: 'dd M yy', changeMonth: true,
                    //    changeYear: true,
                    //    onSelect: this.selectToDate
                    //});
                    //var th = document.getElementsByTagName('th')
                    //for (let c = 0; c < th.length; c++) {
                    //    th[c].addEventListener('click', item(c))
                    //}
                    //function item(c) {
                    //    return function () {
                    //        console.log(c)
                    //        sortTable(c)
                    //    }
                    //}
                    //function sortTable(c) {
                    //    var table, rows, switching, i, x, y, shouldSwitch;
                    //    table = document.getElementById("dataTable");
                    //    switching = true;
                    //    /*Make a loop that will continue until
                    //    no switching has been done:*/
                    //    while (switching) {
                    //        //start by saying: no switching is done:
                    //        switching = false;
                    //        rows = table.rows;
                    //        /*Loop through all table rows (except the
                    //        first, which contains table headers):*/
                    //        for (i = 1; i < (rows.length - 1); i++) {
                    //            //start by saying there should be no switching:
                    //            shouldSwitch = false;
                    //            /*Get the two elements you want to compare,
                    //            one from current row and one from the next:*/
                    //            x = rows[i].getElementsByTagName("TD")[c];
                    //            y = rows[i + 1].getElementsByTagName("TD")[c];
                    //            //check if the two rows should switch place:
                    //            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //                //if so, mark as a switch and break the loop:
                    //                shouldSwitch = true;
                    //                break;
                    //            }
                    //        }
                    //        if (shouldSwitch) {
                    //            /*If a switch has been marked, make the switch
                    //            and mark that a switch has been done:*/
                    //            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    //            switching = true;
                    //        }
                    //    }
                    //}
                    /*sorting end*/
                    // $('#search-btn-loader').hide();
                    // Variable Declaration
                    //var checkBox1 = document.getElementById("check1");
                    //var checkBox2 = document.getElementById("check2");
                    //var checkBox3 = document.getElementById("check3");
                    //var checkBox4 = document.getElementById("check4");
                    //var checkBox5 = document.getElementById("check5");
                    //var check1_Field = document.getElementById("check1-field");
                    //var check2_Field = document.getElementById("check2-field");
                    //var check3_Field = document.getElementById("check3-field");
                    //var check4_Field = document.getElementById("check4-field");
                    //var check4_1_Field = document.getElementById("check4-1-field");
                    //var check5_Field = document.getElementById("check5-field");
                    //checkBox1.addEventListener("click", function () {
                    //    check1_Field.classList.toggle("input-show");
                    //})
                    //checkBox2.addEventListener("click", function () {
                    //    check2_Field.classList.toggle("input-show");
                    //})
                    //checkBox3.addEventListener("click", function () {
                    //    check3_Field.classList.toggle("input-show");
                    //})
                    //checkBox4.addEventListener("click", function () {
                    //    check4_Field.classList.toggle("input-show");
                    //    check4_1_Field.classList.toggle("input-show");
                    //})
                    //checkBox5.addEventListener("click", function () {
                    //    check5_Field.classList.toggle("input-show");
                    //})
                };
                TeamLeadController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                TeamLeadController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                TeamLeadController.prototype.Init = function () {
                    // $("#errorclose").hide();
                    //  $("#close").hide();
                    var _this = this;
                    var n = new Date();
                    n.setDate(n.getDate() - 7);
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m = months[n.getMonth()];
                    var d = n.getDate();
                    var y = n.getFullYear();
                    document.getElementById("txtFromDate").innerHTML = d + "-" + m + "-" + y;
                    $('#txtFromDate').val(d + "-" + m + "-" + y);
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
                    document.getElementById("txtToDate").innerHTML = d1 + "-" + m1 + "-" + y1;
                    $('#txtToDate').val(d1 + "-" + m1 + "-" + y1);
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
                            debugger;
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                debugger;
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    debugger;
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
                            debugger;
                            that.TeamLeadsHeaderModel.AllocatedTo = ui.item.id;
                            //that.InsertLead.RefUserName = ui.item.id;
                            console.log(that.TeamLeadsHeaderModel.AllocatedTo);
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
                    debugger;
                    this.UserDropDown = this.UserDDService.Find().then((function (response) {
                        _this.UserDropDown = _this.UserDDService.GetUserDD(response.data.Result);
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
                    this.getAllLeadCount = this.AllLeadCountService.FindGrid().then((function (response) {
                        _this.getAllLeadCount = _this.AllLeadCountService.GetLeadsCountGrid(response.data.Result);
                    }));
                };
                TeamLeadController.prototype.Product = function () {
                    var _this = this;
                    debugger;
                    this.ProductDropDown = this.ProductService.Find(this.TeamLeadsHeaderModel.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                TeamLeadController.prototype.Model = function () {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.TeamLeadsHeaderModel.ProductID).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetModelDD(response.data.Result);
                    }));
                };
                TeamLeadController.prototype.District = function () {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.TeamLeadsHeaderModel.StateIDs).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                TeamLeadController.prototype.FillGrid = function (NoOfRecords) {
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
                                that.incre = parseInt(key) + that.numRecords;
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
                        _this.getAllLeadCount = _this.AllLeadCountService.FindGrid().then((function (response) {
                            _this.getAllLeadCount = _this.AllLeadCountService.GetLeadsCountGrid(response.data.Result);
                        }));
                        _this.TeamLeadCountService.FindGrid(_this.TeamLeadsHeaderModel).then((function (response) {
                            _this.getTeamLeadCount = _this.TeamLeadCountService.GetTeamLeadsStatusCountGrid(response.data.Result);
                        }));
                    }));
                };
                TeamLeadController.prototype.Search = function () {
                    debugger;
                    $('#search-btn-loader').show();
                    this.FillGrid(this.numRecords);
                };
                TeamLeadController.prototype.Clear = function () {
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
                    this.TeamLeadsHeaderModel.SalesRep = "";
                    document.getElementById("txtSalesRep1").value = "";
                    // (<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
                    // (<HTMLInputElement>document.getElementById("txtToDate")).value = "";
                };
                TeamLeadController.prototype.next = function () {
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
                TeamLeadController.prototype.back = function () {
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
                TeamLeadController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                TeamLeadController.prototype.ViewDetails = function (data) {
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
                        if (_this.LeadReportView.MetCustomer == "False") {
                            _this.LeadReportView.MetCustomer = "No";
                        }
                        if (_this.LeadReportView.MetCustomer == "True") {
                            _this.LeadReportView.MetCustomer = "Yes";
                        }
                        if (_this.LeadReportView.Lessthan90days == "False") {
                            _this.LeadReportView.Lessthan90days = "No";
                        }
                        if (_this.LeadReportView.Lessthan90days == "True") {
                            _this.LeadReportView.Lessthan90days = "Yes";
                        }
                        $("detailModal").show();
                    }));
                };
                TeamLeadController.prototype.downloadCSV = function (csv, filename) {
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
                TeamLeadController.prototype.exportTableToCSV = function (filename) {
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
                TeamLeadController.$inject = ["TeamLeadsReportGridService", "UserNameAtofillService", "CampaignAtofillService", "LeadStatusddService", "UserddService", "DivisionDDService", "RegionddService", "StateddPService", "LeadSourceddService", "ProductddService",
                    "ModelDDService", "DistrictddService", "AllLeadReportService", "TeamLeadsStatusCountService", "LeadsCountService"];
                return TeamLeadController;
            }());
            var TeamLeadComponentController = /** @class */ (function () {
                function TeamLeadComponentController() {
                    this.controller = TeamLeadController;
                    this.templateUrl = "/Scripts/App/TeamLead/Template/TeamLead.html";
                }
                TeamLeadComponentController.Name = "teamleadcomponent";
                return TeamLeadComponentController;
            }());
            app.AddComponent(TeamLeadComponentController.Name, new TeamLeadComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=TeamLeadComponent.js.map