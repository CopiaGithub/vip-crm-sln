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
            var DeliveryScheduleListController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DeliveryScheduleListController(_DeliveryScheduleListService, _LeadStatusService, _DivisionService, _ProductService, _ModelService, _ZoneDDService, _RegionService, _StateService, _DistrictService, _LSService, _getAutoSalesrep2, _AllLeadReportViewService, _getAutoCampaign, _ActivityTypeService, _AllLeadCountService, _CustomerSapAutofill, _ProductCodeAutofill, _ProductDescAutofill, _getAutoProjectName, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.AllStatus = null;
                    this.FillDeliveryScheduleGrid = null;
                    this.DownloadDeliveryScheduleList = null;
                    this.DeliveryScheduleSearchModel = null;
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
                    this.ActivityTypeDropDown = null;
                    this.CustomerID = null;
                    this.InsertContact = null;
                    this.LeadID = null;
                    //RoleID = null;
                    this.Cookie = null;
                    this.getAllLeadCount = null;
                    this.DeliveryScheduleList = _DeliveryScheduleListService;
                    this.DeliveryScheduleSearchModel = new GCPL.Model.DSSearchModel();
                    this.getAutoProjectName = _getAutoProjectName;
                    this.DivisionService = _DivisionService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.DistrictService = _DistrictService;
                    this.getAutoSalesrep2 = _getAutoSalesrep2;
                    this.AllLeadReportViewService = _AllLeadReportViewService;
                    this.LeadReportView = new LeadReportViewDetails();
                    this.getAutoCampaign = _getAutoCampaign;
                    this.ActivityTypeService = _ActivityTypeService;
                    this.AllLeadCountService = _AllLeadCountService;
                    this.getAllLeadCount = new getAllLeadCount();
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.ProductCodeAutofill = _ProductCodeAutofill;
                    this.ProductDescAutofill = _ProductDescAutofill;
                    this.InsertContact = new ContactMaster();
                    //this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                DeliveryScheduleListController.prototype.$onInit = function () {
                    this.Init();
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                };
                DeliveryScheduleListController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                DeliveryScheduleListController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                DeliveryScheduleListController.prototype.Init = function () {
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
                    this.DeliveryScheduleSearchModel.FromDate = document.getElementById("txtFromDate").value;
                    this.DeliveryScheduleSearchModel.ToDate = document.getElementById("txtToDate").value;
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
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
                            that.DeliveryScheduleSearchModel.CustomerID = ui.item.id;
                            //that.Search1(ui.item.id);
                        },
                        change: function () {
                        }
                    });
                    $("#txtProductCode").autocomplete({
                        //  source:['1a0','anjali','archana'],
                        source: function (request, res) {
                            that.ProductCodeAutofill.FilterAutoComplete(request).then((function (response) {
                                var data = that.ProductCodeAutofill.GetAutoProductCode(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Product,
                                        value: item.Product,
                                        id: item.ProductID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.DeliveryScheduleSearchModel.ProductID = ui.item.id;
                            /*that.Search(ui.item.id);*/
                        },
                        change: function () {
                        }
                    });
                    $("#txtProductDesc").autocomplete({
                        //  source:['1a0','anjali','archana'],
                        source: function (request, res) {
                            that.ProductDescAutofill.FilterAutoComplete(request).then((function (response) {
                                var data = that.ProductDescAutofill.GetAutoProductDesc(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.ProductDesc,
                                        value: item.ProductDesc,
                                        id: item.ProductID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.DeliveryScheduleSearchModel.ProductID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    this.ActivityTypeDropDown = this.ActivityTypeService.Find().then((function (response) {
                        _this.ActivityTypeDropDown = _this.ActivityTypeService.GetActivityTypeName(response.data.Result);
                    }));
                };
                //addActivityType(abc: string): void {
                //    DeliveryScheduleListController.activityTypeDropdownList.push(abc);
                //}
                DeliveryScheduleListController.prototype.ViewDetails = function (data) {
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
                DeliveryScheduleListController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                DeliveryScheduleListController.prototype.District = function () {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.DeliveryScheduleSearchModel.StateIDs).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                DeliveryScheduleListController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    //this.DeliveryScheduleSearchModel.StatusID = DeliveryScheduleListController.statusDropdownList.toString();
                    //this.DeliveryScheduleSearchModel.ActivityType = DeliveryScheduleListController.activityTypeDropdownList.toString();
                    this.DeliveryScheduleSearchModel.FromDate = document.getElementById("txtFromDate").value;
                    this.DeliveryScheduleSearchModel.ToDate = document.getElementById("txtToDate").value;
                    console.log(this.DeliveryScheduleSearchModel);
                    this.FillDeliveryScheduleGrid = this.DeliveryScheduleList.FindGrid(this.DeliveryScheduleSearchModel).then((function (response) {
                        _this.FillDeliveryScheduleGrid = _this.DeliveryScheduleList.GetDeliveryScheduleListReport(response.data.Result);
                        console.log(_this.FillDeliveryScheduleGrid, 'AllActivity');
                        $('#search-btn-loader').hide();
                        if (_this.FillDeliveryScheduleGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillDeliveryScheduleGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + that.numRecords;
                            });
                            $('#search-btn-loader').hide();
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillDeliveryScheduleGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.FillDeliveryScheduleGrid.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                        //if (this.FillDeliveryScheduleGrid.length > 0) {
                        //    $("#nullDataDiv").hide();
                        //    $("#dataTable").show();
                        //    this.FillDeliveryScheduleGrid.forEach(function (value, key) {
                        //        that.incre = parseInt(key) + that.numRecords;
                        //    });
                        //    $('#search-btn-loader').hide();
                        //    this.ShowBack = this.page > 1 ? true : false;
                        //    this.ShowNext = this.FillDeliveryScheduleGrid.length > 0 ? true : false;
                        //    this.shownItems = this.FillDeliveryScheduleGrid;
                        //}
                        //else {
                        //    $("#nullDataDiv").show();
                        //    $("#dataTable").hide();
                        //    this.ShowBack = this.page > 1 ? true : false;
                        //}
                        //if (this.FillDeliveryScheduleGrid.length < that.numRecords) {
                        //    this.ShowNext = false;
                        //    this.ShowBack = false;
                        //}
                        //this.AllLeadCountService.FindGrid(this.DeliveryScheduleSearchModel).then((response => {
                        //    this.getAllLeadCount = this.AllLeadCountService.GetLeadsStatusCountGrid(response.data.Result);
                        //}));
                    }));
                };
                DeliveryScheduleListController.prototype.Search = function () {
                    console.log("AllActivity123");
                    $('#search-btn-loader').show();
                    $('.chkBox').prop('checked', false);
                    this.FillGrid(this.numRecords);
                    DeliveryScheduleListController.statusDropdownList = [];
                    DeliveryScheduleListController.activityTypeDropdownList = [];
                };
                DeliveryScheduleListController.prototype.Refresh = function () {
                    this.NoOfRds = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                DeliveryScheduleListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillDeliveryScheduleGrid.slice(begin, end);
                    if (this.page + 2 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                DeliveryScheduleListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillDeliveryScheduleGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                DeliveryScheduleListController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    $("#ErrClose").show();
                    $("#submitClose").hide();
                    this.alert = Message;
                };
                DeliveryScheduleListController.prototype.Clear = function () {
                    this.DeliveryScheduleSearchModel.DsID = "";
                    this.DeliveryScheduleSearchModel.LeadID = "";
                    this.DeliveryScheduleSearchModel.ProductID = "";
                    this.DeliveryScheduleSearchModel.CustomerID = "";
                    document.getElementById("txtProductCode").value = "";
                    document.getElementById("txtProductDesc").value = "";
                    document.getElementById("txtCustomerName").value = "";
                    //this.FillGrid(this.numRecords);
                };
                DeliveryScheduleListController.prototype.Close = function () {
                    location.href = "#!/DeliveryScheduleList";
                };
                DeliveryScheduleListController.prototype.ErrorClose = function () {
                    location.href = "#!/DeliveryScheduleList";
                };
                //exportTableToCSV(filename) {
                //    let that = this;
                //    that.incre = 0;
                //    //that.numRecords = parseInt(NoOfRecords);
                //    that.page = 0;
                //    that.maxPages = 0;
                //    that.shownItems = [];
                //    this.DeliveryScheduleSearchModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
                //    this.DeliveryScheduleSearchModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
                //    this.DownloadDeliveryScheduleList = this.DeliveryScheduleList.DownloadGrid(this.DeliveryScheduleSearchModel).then((response => {
                //        this.DownloadDeliveryScheduleList = this.DeliveryScheduleList.DownloadDeliveryScheduleListReport(response.data.Result);
                //        console.log(this.DownloadDeliveryScheduleList, 'DownloadAllActivity');
                //        $('#search-btn-loader').hide();
                //        this.downloadCSVFromJson(filename, this.DownloadDeliveryScheduleList);
                //    }));
                //}
                //downloadCSVFromJson = (filename, DownloadDeliveryScheduleList) => {
                //    console.log('downloadCSVFromJson');
                //    // convert JSON to CSV
                //    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
                //    const header = Object.keys(DownloadDeliveryScheduleList[0])
                //    let csv = DownloadDeliveryScheduleList.map(row => header.map(fieldName =>
                //        JSON.stringify(row[fieldName], replacer)).join(','))
                //    csv.unshift(header.join(','))
                //    csv = csv.join('\r\n')
                //    // Create link and download
                //    var link = document.createElement('a');
                //    link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
                //    link.setAttribute('download', filename);
                //    link.style.visibility = 'hidden';
                //    document.body.appendChild(link);
                //    link.click();
                //    document.body.removeChild(link);
                //};
                DeliveryScheduleListController.prototype.downloadCSV = function (csv, filename) {
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
                DeliveryScheduleListController.prototype.exportTableToCSV = function (filename) {
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
                DeliveryScheduleListController.prototype.Search1 = function (data) {
                    var _this = this;
                    this.CustomerSapAutofill.FindCustomerSAPID(data).then((function (response) {
                        _this.InsertContact.CustomerSAPID = _this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
                    }));
                };
                DeliveryScheduleListController.statusDropdownList = [];
                DeliveryScheduleListController.activityTypeDropdownList = [];
                DeliveryScheduleListController.$inject = ["DeliveryScheduleListReportService", "LeadStatusddService", "DivisionService",
                    "ProductddService", "LeadTypeProductService", "ZoneDDService",
                    "RegionddService", "StateddPService", "DistrictddService",
                    "LeadSourceddService", "EmployeeAtofillService",
                    "AllLeadReportService", "CampaignAtofillService", "ActivityTypeddService",
                    "LeadsStatusCountService", "CustomerSapIdAutoFillService", "ProductCodeAutoFillService", "ProductDescAutoFillService", "getAutoProjectNameService",
                    "$cookieStore"];
                return DeliveryScheduleListController;
            }());
            var DeliveryScheduleListComponentController = /** @class */ (function () {
                function DeliveryScheduleListComponentController() {
                    this.controller = DeliveryScheduleListController;
                    this.templateUrl = "/Scripts/App/DeliveryScheduleList/Template/DeliveryScheduleList.html";
                }
                DeliveryScheduleListComponentController.Name = "deliveryschedulecomponent";
                return DeliveryScheduleListComponentController;
            }());
            app.AddComponent(DeliveryScheduleListComponentController.Name, new DeliveryScheduleListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DeliveryScheduleListComponent.js.map