var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var SearchFollow = GCPL.Model.FollowupSearchModel;
            var LeadReportViewDetails = GCPL.Model.AllLeadReportViewModel;
            var ViewValidate = GCPL.Model.ValidateLeadInfoModel;
            var Search = GCPL.Model.RegionCheckModel;
            var SearchRefUser = GCPL.Model.SearchRefUserModel;
            var InsertFU = GCPL.Model.InsertFUQueAnsModel;
            var ContactMaster = GCPL.Model.InsertContactMaster;
            var LeadFollowUpListController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function LeadFollowUpListController(_LSService, _ZoneDDService, _HistListService, _LeadStatusService, _ListService, _getAutoUser, _CustomerSapAutofill, _AllLeadReportViewService, _ValidateLeadService, _IndustrialSegmentService, _IndustryDivisionService, _CountryService, _StateService, _DistrictService, _RegionService, _LeadTypeService, _CategoryService, _DivisionService, _ProductService, _ModelService, _ChannelDDService, _LeadSourceDDService, _CampaignDDService, _PurchaseTimlineDDService, _LeadCategoryService, _SalesOfficeService, _DepartmentService, _DesignationService, _SalesAreaService, _CheckRegionService, _LeadFUQuestionsService, _LeadFUAnswersService, _InsertLeadQueAnsService, _getAutoSalesrep1, _getAutoCampaign, _getAutoSalesrep2, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.LeadStatusDropDown = null;
                    this.LeadSourceDropDown = null;
                    this.LeadTypeDropDown = null;
                    this.SearchList = null;
                    this.Cookie = null;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.numRecords = 10;
                    this.List = null;
                    this.HistList = null;
                    this.ZoneDD = null;
                    this.LeadReportView = null;
                    this.AllLeadsHeaderModel = null;
                    this.LeadNo = null;
                    this.CustomerID = null;
                    this.ValidateInfo = null;
                    this.IndustrialSegmentDropDown = null;
                    this.IndustryDivisionDropDown = null;
                    this.CountryDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.ConCountryDropDown = null;
                    this.ConStateDropDown = null;
                    this.ConDistrictDropDown = null;
                    this.RegionDropDown = null;
                    this.CategoryDropDown = null;
                    this.DivisionDropDown = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.ChannelDD = null;
                    this.LeadSourcedd = null;
                    this.Campaigndd = null;
                    this.PurchaseTimlinedd = null;
                    this.LeadCategoryDropDown = null;
                    this.SalesOfficeDropDown = null;
                    this.DepartmentDropDown = null;
                    this.DesignationDropDown = null;
                    this.SalesAreaDropDown = null;
                    this.CheckRegion = null;
                    this.SearchRegion = null;
                    this.SearchUser = null;
                    this.Quelist = null;
                    this.Ans1DD = null;
                    this.Ans2DD = null;
                    this.Ans3DD = null;
                    this.Ans4DD = null;
                    this.Ans5DD = null;
                    this.Ans6DD = null;
                    this.QueAnsHeaderModel = null;
                    this.UserID = null;
                    this.RoleID = null;
                    this.InsertContact = null;
                    this.LeadFollupStatusService = _LeadStatusService;
                    this.HistListService = _HistListService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.getAutoCampaign = _getAutoCampaign;
                    this.getAutoSalesrep2 = _getAutoSalesrep2;
                    this.LSService = _LSService;
                    this.ZoneDDService = _ZoneDDService;
                    this.LeadTypeService = _LeadTypeService;
                    this.ListService = _ListService;
                    this.AllLeadsHeaderModel = new GCPL.Model.AllLeadsHeaderModel();
                    this.SearchList = new SearchFollow();
                    this.getAutoUser = _getAutoUser;
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.AllLeadReportViewService = _AllLeadReportViewService;
                    this.LeadReportView = new LeadReportViewDetails();
                    this.ValidateLeadService = _ValidateLeadService;
                    this.ValidateInfo = new ViewValidate();
                    this.IndustrialSegmentService = _IndustrialSegmentService;
                    this.IndustryDivisionService = _IndustryDivisionService;
                    this.CountryService = _CountryService;
                    this.StateService = _StateService;
                    this.DistrictService = _DistrictService;
                    this.RegionService = _RegionService;
                    this.LeadTypeService = _LeadTypeService;
                    this.CategoryService = _CategoryService;
                    this.DivisionService = _DivisionService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.ChannelDDService = _ChannelDDService;
                    this.LeadSourceDDService = _LeadSourceDDService;
                    this.CampaignDDService = _CampaignDDService;
                    this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
                    this.LeadCategoryService = _LeadCategoryService;
                    this.SalesOfficeService = _SalesOfficeService;
                    this.DepartmentService = _DepartmentService;
                    this.DesignationService = _DesignationService;
                    this.SalesAreaService = _SalesAreaService;
                    this.CheckRegionService = _CheckRegionService;
                    this.SearchRegion = new Search();
                    this.SearchUser = new SearchRefUser();
                    this.LeadFUQuestionsService = _LeadFUQuestionsService;
                    this.LeadFUAnswersService = _LeadFUAnswersService;
                    this.InsertLeadQueAnsService = _InsertLeadQueAnsService;
                    this.QueAnsHeaderModel = new InsertFU();
                    this.InsertContact = new ContactMaster();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                LeadFollowUpListController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                LeadFollowUpListController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                LeadFollowUpListController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                LeadFollowUpListController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#Campaignfield').hide();
                    $('#UserNamefield').hide();
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
                    //$('#Reasonfield').hide();
                    //$('#Whentobuyfield').hide();
                    //if (this.LeadNo != null || this.LeadNo != "" || this.LeadNo != undefined) {
                    //    this.Validate(this.LeadNo);
                    //}
                    this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((function (response) {
                        _this.IndustrialSegmentDropDown = _this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);
                    }));
                    this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((function (response) {
                        _this.IndustryDivisionDropDown = _this.IndustryDivisionService.GetIndustryName(response.data.Result);
                    }));
                    this.ConCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.ConCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    //this.StateDropDown = this.StateService.Find(this.ValidateInfo.CountryID = '95').then((response => {
                    //    this.StateDropDown = this.StateService.GetStateName(response.data.Result);
                    //}));
                    //this.ConStateDropDown = this.StateService.Find(this.ValidateInfo.CountryID = '95').then((response => {
                    //    this.ConStateDropDown = this.StateService.GetStateName(response.data.Result);
                    //}));
                    this.RegionDropDown = this.RegionService.Find().then((function (response) {
                        _this.RegionDropDown = _this.RegionService.GetRegion(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.ChannelDD = this.ChannelDDService.Find().then((function (response) {
                        _this.ChannelDD = _this.ChannelDDService.GetChannelDDnew(response.data.Result);
                    }));
                    this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((function (response) {
                        _this.PurchaseTimlinedd = _this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
                    }));
                    this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((function (response) {
                        _this.LeadCategoryDropDown = _this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
                    }));
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.SalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.DepartmentDropDown = this.DepartmentService.Find().then((function (response) {
                        _this.DepartmentDropDown = _this.DepartmentService.GetDepartmentName(response.data.Result);
                    }));
                    this.DesignationDropDown = this.DesignationService.Find().then((function (response) {
                        _this.DesignationDropDown = _this.DesignationService.GetDesignationName(response.data.Result);
                    }));
                    this.SalesAreaDropDown = this.SalesAreaService.Find().then((function (response) {
                        _this.SalesAreaDropDown = _this.SalesAreaService.GetSalesAreaName(response.data.Result);
                    }));
                    this.LeadStatusDropDown = this.LeadFollupStatusService.Find().then((function (response) {
                        _this.LeadStatusDropDown = _this.LeadFollupStatusService.GetLeadStatusFollup(response.data.Result);
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
                    var that = this;
                    this.AllLeadsHeaderModel.FromDate = document.getElementById("txtFromDate").value;
                    this.AllLeadsHeaderModel.ToDate = document.getElementById("txtToDate").value;
                    $("#txtAllocated").autocomplete({
                        source: function (request, res) {
                            that.getAutoUser.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoUser.GetAutoUser(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.UserName,
                                        value: item.UserName,
                                        id: item.UserID
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.SearchList.AllocatedTo = ui.item.id;
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
                            that.SearchList.CustomerName = ui.item.id;
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
                };
                LeadFollowUpListController.prototype.addStatus = function (abc) {
                    LeadFollowUpListController.statusDropdownList.push(abc);
                };
                LeadFollowUpListController.prototype.addLeadType = function (abc) {
                    LeadFollowUpListController.leadTypeDropdownList.push(abc);
                    this.Division();
                };
                LeadFollowUpListController.prototype.addDivision = function (abc) {
                    LeadFollowUpListController.divisionDropdownList.push(abc);
                    this.Product();
                };
                LeadFollowUpListController.prototype.addProduct = function (abc) {
                    LeadFollowUpListController.productDrpodownList.push(abc);
                    this.Model();
                };
                LeadFollowUpListController.prototype.addModel = function (abc) {
                    LeadFollowUpListController.modelDrpodownList.push(abc);
                };
                LeadFollowUpListController.prototype.addLeadSource = function (abc) {
                    LeadFollowUpListController.leadSourceIDDropdownList.push(abc);
                };
                LeadFollowUpListController.prototype.addLeadOrigin = function (abc) {
                    LeadFollowUpListController.leadOriginDropdownList.push(abc);
                };
                LeadFollowUpListController.prototype.addRegion = function (abc) {
                    LeadFollowUpListController.regionDropdownList.push(abc);
                };
                LeadFollowUpListController.prototype.addZone = function (abc) {
                    LeadFollowUpListController.zoneDropdownList.push(abc);
                };
                LeadFollowUpListController.prototype.selectWhenToBuy = function (e) {
                    document.getElementById("txtWhenToBuy").value = e;
                };
                LeadFollowUpListController.prototype.ChangeField = function () {
                    $("#txtWhenToBuy").datepicker({
                        dateFormat: 'dd M yy', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectWhenToBuy
                    });
                    if (this.QueAnsHeaderModel.FollowupStatus == "1" || this.QueAnsHeaderModel.FollowupStatus == "4") {
                        $('#Reasonfield').show();
                        $('#Whentobuyfield').hide();
                    }
                    else if (this.QueAnsHeaderModel.FollowupStatus == "3") {
                        $('#Reasonfield').hide();
                        $('#Whentobuyfield').show();
                    }
                    else {
                        $('#Reasonfield').hide();
                        $('#Whentobuyfield').hide();
                    }
                };
                LeadFollowUpListController.prototype.ChangeddlField = function () {
                    if (this.QueAnsHeaderModel.AnsID2 == "6") {
                        $('#namefield').show();
                        $('#mobilefield').show();
                    }
                    else {
                        $('#namefield').hide();
                        $('#mobilefield').hide();
                    }
                };
                LeadFollowUpListController.prototype.Region = function () {
                    var _this = this;
                    this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((function (response) {
                        _this.CheckRegion = _this.CheckRegionService.GetRegion(response.data.Result);
                        _this.ValidateInfo.RegionID = _this.CheckRegion.RegionID;
                    }));
                };
                LeadFollowUpListController.prototype.ConDistrict = function () {
                    var _this = this;
                    this.ConDistrictDropDown = this.DistrictService.Find(this.ValidateInfo.StateID).then((function (response) {
                        _this.ConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.Product = function () {
                    var _this = this;
                    this.AllLeadsHeaderModel.DivisionID = LeadFollowUpListController.divisionDropdownList.toString();
                    this.ProductDropDown = this.ProductService.Find(this.AllLeadsHeaderModel.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.Model = function () {
                    var _this = this;
                    this.AllLeadsHeaderModel.ProductID = LeadFollowUpListController.productDrpodownList.toString();
                    this.ModelDropDown = this.ModelService.Find(this.AllLeadsHeaderModel).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.District = function () {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.AllLeadsHeaderModel.StateIDs).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.LeadSource = function (data) {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.ValidateInfo.ChannelID).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.LeadSourceChange = function () {
                    $("#Campaignfield").hide();
                    $("#UserNamefield").hide();
                    this.ValidateInfo.CampaignID = null;
                    this.ValidateInfo.RefUserID = null;
                    this.ValidateInfo.RefUserName = null;
                    if (this.ValidateInfo.LeadSourceID == "10" || this.ValidateInfo.LeadSourceID == "24") {
                        this.Campaign();
                        $("#Campaignfield").show();
                        $("#UserNamefield").hide();
                    }
                    else if (this.ValidateInfo.LeadSourceID == "2") {
                        $("#Campaignfield").hide();
                        $("#UserNamefield").show();
                    }
                };
                LeadFollowUpListController.prototype.Campaign = function () {
                    var _this = this;
                    this.Campaigndd = this.CampaignDDService.Find(this.ValidateInfo.LeadSourceID).then((function (response) {
                        _this.Campaigndd = _this.CampaignDDService.GetCampaignDetails(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.Validate = function (data) {
                    var _this = this;
                    var date = new Date();
                    var currentMonth = date.getMonth();
                    var currentDate = date.getDate();
                    var currentYear = date.getFullYear();
                    $("#txtWhenToBuy").datepicker({
                        dateFormat: 'yy-mm-dd', changeMonth: true,
                        changeYear: true,
                        onSelect: this.ActDate,
                        minDate: new Date(currentYear, currentMonth, currentDate)
                    });
                    var n1 = new Date();
                    var currentMonth = n1.getMonth() + 1;
                    var y1 = n1.getFullYear();
                    var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m1 = months1[n1.getMonth()];
                    var d1 = n1.getDate();
                    document.getElementById("txtWhenToBuy").innerHTML = y1 + "-" + currentMonth + "-" + d1;
                    $('#txtWhenToBuy').val(y1 + "-" + currentMonth + "-" + d1);
                    $('#Reasonfield').hide();
                    $('#Whentobuyfield').hide();
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    $("#pg-load").show();
                    this.ValidateLeadService.Find(data).then((function (response) {
                        _this.ValidateInfo = _this.ValidateLeadService.GetValidateLead(response.data.Result);
                        /*
                         * @ Populating Lead Details Section @
                         */
                        // $("#txtProduct").val(this.ValidateInfo.IndustrialSegmentID);
                        $("#leadstatus").val(_this.ValidateInfo.LeadStatusId);
                        //this.DivisionDropDownP = this.DivisionPService.Find(this.ValidateInfo.CategoryID).then((response => {
                        //    this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);
                        //    this.ValidateInfo.DivisionID = this.DivisionDropDownP[0].DivisionID.toString();
                        //}));
                        $("#txtDivision").val(_this.ValidateInfo.DivisionID);
                        _this.ProductDropDown = _this.ProductService.Find(_this.ValidateInfo.DivisionID).then((function (response) {
                            _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                            _this.ValidateInfo.ProductID = _this.ProductDropDown[0].ProductID.toString();
                        }));
                        $("#txtProduct").val(_this.ValidateInfo.ProductID);
                        //this.ModelDropDown = this.ModelService.Find(this.ValidateInfo.ProductID).then((response => {
                        //    this.ModelDropDown = this.ModelService.GetModelDD(response.data.Result);
                        //    this.ValidateInfo.ModelID = this.ModelDropDown[0].ModelID.toString();
                        //}));
                        $("#txtModel").val(_this.ValidateInfo.ModelID);
                        //  this.ValidateInfo.ModelID = this.ValidateInfo.ModelID;
                        _this.LeadSource(_this.ValidateInfo.ChannelID);
                        _this.LeadNo = _this.ValidateInfo.LeadID;
                        _this.CustomerID = _this.ValidateInfo.CustomerID;
                        _this.LeadSourceChange();
                        if (_this.ValidateInfo.LeadSourceID == "2") {
                            _this.ValidateInfo.RefUserID = _this.ValidateInfo.RefUserID;
                            _this.ValidateInfo.RefUserName = _this.ValidateInfo.RefUserName;
                            _this.SearchUser.RefUserID = _this.ValidateInfo.RefUserID;
                            _this.SearchUser.RefUserName = _this.ValidateInfo.RefUserName;
                        }
                        else if (_this.ValidateInfo.LeadSourceID == "10" || _this.ValidateInfo.LeadSourceID == "24") {
                            _this.ValidateInfo.CampaignNameID = _this.ValidateInfo.CampaignNameID;
                        }
                        var temp = _this.ValidateInfo.SalesAreaID;
                        _this.SalesAreaDropDown = _this.SalesAreaService.Find().then((function (response) {
                            _this.SalesAreaDropDown = _this.SalesAreaService.GetSalesAreaName(response.data.Result);
                            _this.ValidateInfo.SalesAreaID = temp;
                        }));
                        _this.SearchRegion.StateID = _this.ValidateInfo.StateID;
                        //this.District(this.ValidateInfo.StateID);
                        _this.SearchRegion.DistrictID = _this.ValidateInfo.DistrictID;
                        _this.Region();
                        _this.Quelist = _this.LeadFUQuestionsService.Find().then((function (response) {
                            _this.Quelist = _this.LeadFUQuestionsService.GetQuestion(response.data.Result);
                            _this.Ans1DD = _this.LeadFUAnswersService.FindAns("5").then((function (response) {
                                _this.Ans1DD = _this.LeadFUAnswersService.GetAns(response.data.Result);
                                _this.Ans2DD = _this.LeadFUAnswersService.FindAns("3").then((function (response) {
                                    _this.Ans2DD = _this.LeadFUAnswersService.GetAns(response.data.Result);
                                    _this.Ans3DD = _this.LeadFUAnswersService.FindAns("1").then((function (response) {
                                        _this.Ans3DD = _this.LeadFUAnswersService.GetAns(response.data.Result);
                                        _this.Ans4DD = _this.LeadFUAnswersService.FindAns("2").then((function (response) {
                                            _this.Ans4DD = _this.LeadFUAnswersService.GetAns(response.data.Result);
                                            _this.Ans5DD = _this.LeadFUAnswersService.FindAns("4").then((function (response) {
                                                _this.Ans5DD = _this.LeadFUAnswersService.GetAns(response.data.Result);
                                                _this.Ans6DD = _this.LeadFUAnswersService.FindAns("6").then((function (response) {
                                                    _this.Ans6DD = _this.LeadFUAnswersService.GetAns(response.data.Result);
                                                    $("#pg-load").hide();
                                                }));
                                            }));
                                        }));
                                    }));
                                }));
                            }));
                        }));
                        _this.ViewDetails(_this.LeadNo);
                        _this.ViewHistory(_this.LeadNo);
                        $("FollowupAddNew").show();
                    }));
                };
                LeadFollowUpListController.prototype.ActDate = function (e) {
                    document.getElementById("txtWhenToBuy").value = e;
                    var d = new Date();
                    var c = new Date(e);
                };
                LeadFollowUpListController.prototype.Search1 = function (data) {
                    var _this = this;
                    this.CustomerSapAutofill.FindCustomerSAPID(data).then((function (response) {
                        _this.InsertContact.CustomerSAPID = _this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.AllLeadsHeaderModel.StatusID = LeadFollowUpListController.statusDropdownList.toString();
                    this.AllLeadsHeaderModel.LeadType = LeadFollowUpListController.leadTypeDropdownList.toString();
                    this.AllLeadsHeaderModel.ModelId = LeadFollowUpListController.modelDrpodownList.toString();
                    this.AllLeadsHeaderModel.LeadSourceID = LeadFollowUpListController.leadSourceIDDropdownList.toString();
                    this.AllLeadsHeaderModel.LeadOrigin = LeadFollowUpListController.leadOriginDropdownList.toString();
                    this.AllLeadsHeaderModel.ZoneID = LeadFollowUpListController.zoneDropdownList.toString();
                    this.AllLeadsHeaderModel.RegionID = LeadFollowUpListController.regionDropdownList.toString();
                    this.AllLeadsHeaderModel.FromDate = document.getElementById("txtFromDate").value;
                    this.AllLeadsHeaderModel.ToDate = document.getElementById("txtToDate").value;
                    this.List = this.ListService.Find(this.AllLeadsHeaderModel).then((function (response) {
                        _this.List = _this.ListService.Getlist(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.List.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.List.forEach(function (value, key) {
                                that.incre = parseInt(key) + that.numRecords;
                            });
                            $('#search-btn-loader').hide();
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.List.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.List.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                        //this.AllLeadCountService.FindGrid(this.AllLeadsHeaderModel).then((response => {
                        //    this.getAllLeadCount = this.AllLeadCountService.GetLeadsStatusCountGrid(response.data.Result);
                        //}));
                    }));
                };
                LeadFollowUpListController.prototype.Search = function () {
                    $('#search-btn-loader').show();
                    $('.chkBox').prop('checked', false);
                    this.FillGrid(this.numRecords);
                    LeadFollowUpListController.statusDropdownList = [];
                    LeadFollowUpListController.leadTypeDropdownList = [];
                    LeadFollowUpListController.divisionDropdownList = [];
                    LeadFollowUpListController.productDrpodownList = [];
                    LeadFollowUpListController.leadSourceIDDropdownList = [];
                    LeadFollowUpListController.leadOriginDropdownList = [];
                    LeadFollowUpListController.zoneDropdownList = [];
                    LeadFollowUpListController.regionDropdownList = [];
                };
                LeadFollowUpListController.prototype.ViewDetails = function (data) {
                    var _this = this;
                    this.AllLeadReportViewService.Find(data).then((function (response) {
                        _this.LeadReportView = _this.AllLeadReportViewService.GetAllLeadReportView(response.data.Result);
                        console.log(_this.LeadReportView);
                        // this.LeadNo = this.LeadReportView.LeadID;
                        $('#LeadOrigin').val(_this.LeadReportView.LeadOrigin);
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
                LeadFollowUpListController.prototype.Submit = function () {
                    var _this = this;
                    this.QueAnsHeaderModel.QueID1 = "5";
                    this.QueAnsHeaderModel.QueID2 = "3";
                    this.QueAnsHeaderModel.QueID3 = "1";
                    this.QueAnsHeaderModel.QueID4 = "2";
                    this.QueAnsHeaderModel.QueID5 = "4";
                    this.QueAnsHeaderModel.QueID6 = "6";
                    this.QueAnsHeaderModel.LeadID = this.LeadNo;
                    this.QueAnsHeaderModel.CustomerID = this.CustomerID;
                    if (this.QueAnsHeaderModel.FollowupStatus == "3") {
                        this.QueAnsHeaderModel.AnswerText = document.getElementById("txtWhenToBuy").value;
                    }
                    else {
                        this.QueAnsHeaderModel.AnswerText = this.QueAnsHeaderModel.AnswerText;
                    }
                    if (this.QueAnsHeaderModel.SpokeTo == undefined || this.QueAnsHeaderModel.SpokeTo == null || this.QueAnsHeaderModel.SpokeTo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact Person Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //  alert("Please Enter SpokeTo");
                    }
                    else if (this.QueAnsHeaderModel.PhoneNo == undefined || this.QueAnsHeaderModel.PhoneNo == null || this.QueAnsHeaderModel.PhoneNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Mobile No ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.QueAnsHeaderModel.PhoneNo != undefined && this.QueAnsHeaderModel.PhoneNo != null && this.QueAnsHeaderModel.PhoneNo != "") && (isNaN(this.QueAnsHeaderModel.PhoneNo) || this.QueAnsHeaderModel.PhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //   alert("Please Enter Valid Phone No");
                    }
                    else if ((this.QueAnsHeaderModel.FollowupStatus == "1" || this.QueAnsHeaderModel.FollowupStatus == "4") && (this.QueAnsHeaderModel.AnswerText == undefined || this.QueAnsHeaderModel.AnswerText == null || this.QueAnsHeaderModel.AnswerText == "")) {
                        this.HideShow();
                        this.popupMessage("Please Enter Reason", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //  alert("Please Enter Reason");
                    }
                    else if ((this.QueAnsHeaderModel.FollowupStatus == "3") && (this.QueAnsHeaderModel.AnswerText == undefined || this.QueAnsHeaderModel.AnswerText == null || this.QueAnsHeaderModel.AnswerText == "")) {
                        this.HideShow();
                        this.popupMessage("Please Enter When To Buy", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //   alert("Please Enter When To Buy");
                    }
                    else if (this.QueAnsHeaderModel.AnsID1 == undefined || this.QueAnsHeaderModel.AnsID1 == null || this.QueAnsHeaderModel.AnsID1 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter AnsOne", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //  alert("Please Enter AnsOne");
                    }
                    else if (this.QueAnsHeaderModel.AnsID2 == undefined || this.QueAnsHeaderModel.AnsID2 == null || this.QueAnsHeaderModel.AnsID2 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Answer for 2nd Question", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //  alert("Please Enter Answer for 2nd Question");
                    }
                    else if ((this.QueAnsHeaderModel.AnsID2 == "6") && (this.QueAnsHeaderModel.RefName == undefined || this.QueAnsHeaderModel.RefName == null || this.QueAnsHeaderModel.RefName == "")) {
                        this.HideShow();
                        this.popupMessage("Please Enter Refer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //   alert("Please Enter When To Buy");
                    }
                    else if ((this.QueAnsHeaderModel.AnsID2 == "6") && (this.QueAnsHeaderModel.RefMobileNo == undefined || this.QueAnsHeaderModel.RefMobileNo == null || this.QueAnsHeaderModel.RefMobileNo == "")) {
                        this.HideShow();
                        this.popupMessage("Please Enter Refer Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //   alert("Please Enter When To Buy");
                    }
                    else if ((this.QueAnsHeaderModel.RefMobileNo != undefined && this.QueAnsHeaderModel.RefMobileNo != null && this.QueAnsHeaderModel.RefMobileNo != "") && (isNaN(this.QueAnsHeaderModel.RefMobileNo) || this.QueAnsHeaderModel.RefMobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //   alert("Please Enter Valid Phone No");
                    }
                    else if (this.QueAnsHeaderModel.AnsID3 == undefined || this.QueAnsHeaderModel.AnsID3 == null || this.QueAnsHeaderModel.AnsID3 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Answer for 3rd Question", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //  alert("Please Enter Answer for 3rd Question");
                    }
                    else if (this.QueAnsHeaderModel.AnsID4 == undefined || this.QueAnsHeaderModel.AnsID4 == null || this.QueAnsHeaderModel.AnsID4 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Answer for 4th Question", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        // alert("Please Enter Answer for 4th Question");
                    }
                    else if (this.QueAnsHeaderModel.AnsID5 == undefined || this.QueAnsHeaderModel.AnsID5 == null || this.QueAnsHeaderModel.AnsID5 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Answer for 5th Question", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        //  alert("Please Enter Answer for 5th Question");
                    }
                    else {
                        if (this.UserID != null || this.UserID != "") {
                            this.QueAnsHeaderModel.AnsweredBy = this.UserID;
                        }
                        if ($("#ddlFollowupStatus").val() == "1") {
                            this.QueAnsHeaderModel.FollowupStatus = "Lost";
                        }
                        else if ($("#ddlFollowupStatus").val() == "2") {
                            this.QueAnsHeaderModel.FollowupStatus = "Won";
                        }
                        else if ($("#ddlFollowupStatus").val() == "3") {
                            this.QueAnsHeaderModel.FollowupStatus = "Still Interested";
                        }
                        else if ($("#ddlFollowupStatus").val() == "4") {
                            this.QueAnsHeaderModel.FollowupStatus = "Not Interested";
                        }
                        else {
                            this.QueAnsHeaderModel.FollowupStatus = "Not Contactable";
                        }
                        this.InsertLeadQueAnsService.PostQueAns(this.QueAnsHeaderModel).then(function (response) {
                            if (response.data.Result == true) {
                                $("#FollowupAddNew").modal('hide');
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Lead Followup Saved Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.QueAnsHeaderModel = null;
                                document.getElementById("txtWhenToBuy").value = "";
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                $("#FollowupAddNew").show();
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        });
                    }
                };
                LeadFollowUpListController.prototype.ViewHistory = function (data) {
                    var _this = this;
                    this.HistList = this.HistListService.Find(data).then((function (response) {
                        _this.HistList = _this.HistListService.Getlist(response.data.Result);
                    }));
                };
                LeadFollowUpListController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.List.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                LeadFollowUpListController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                LeadFollowUpListController.prototype.RefreshFields = function () {
                    this.Validate(this.LeadNo);
                    this.ViewDetails(this.LeadNo);
                };
                LeadFollowUpListController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.List.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                LeadFollowUpListController.prototype.Clear = function () {
                    this.SearchList.LeadID = "";
                    this.SearchList.StatusID = "";
                    this.SearchList.CustomerName = "";
                    this.SearchList.AllocatedTo = "";
                    //this.CategorySearch = "";
                    $("#txtCustomerName").val("");
                    $("#txtLead").val("");
                    $("#txtAllocated").val("");
                    $("#txtleadstatus").val("");
                };
                LeadFollowUpListController.prototype.ClearFields = function () {
                    this.QueAnsHeaderModel.SpokeTo = "";
                    this.QueAnsHeaderModel.PhoneNo = "";
                    this.QueAnsHeaderModel.AnsOne = "";
                    this.QueAnsHeaderModel.AnswerTextTwo = "";
                    this.QueAnsHeaderModel.AnswerTextThree = "";
                    this.QueAnsHeaderModel.AnswerTextFour = "";
                    this.QueAnsHeaderModel.AnswerTextFive = "";
                    this.QueAnsHeaderModel.AnswerText = "";
                    document.getElementById("txtWhenToBuy").value = "";
                };
                LeadFollowUpListController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                LeadFollowUpListController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                LeadFollowUpListController.statusDropdownList = [];
                LeadFollowUpListController.leadTypeDropdownList = [];
                LeadFollowUpListController.divisionDropdownList = [];
                LeadFollowUpListController.productDrpodownList = [];
                LeadFollowUpListController.modelDrpodownList = [];
                LeadFollowUpListController.leadSourceIDDropdownList = [];
                LeadFollowUpListController.leadOriginDropdownList = [];
                LeadFollowUpListController.zoneDropdownList = [];
                LeadFollowUpListController.regionDropdownList = [];
                LeadFollowUpListController.$inject = ["LeadSourceddService", "ZoneDDService", "FollUpHistListService", "LeadFollupStatusService", "FollowUpListService", "UserCodeAutoFillService", "CustomerSapIdAutoFillService", "AllLeadReportService", "ValidateLeadInfoService",
                    "IndustrialSegmentService", "IndustryDivisionService", "CountryService", "StateddPService", "DistrictddService",
                    "RegionddService", "LeadTypeddService", "CategoryddService",
                    "DivisionService", "ProductddService", "LeadTypeProductService", "ChannelDDService",
                    "LeadSourceDetailsService", "CampaignDetailsService", "PurchaseTimelineService", "LeadCategoryDDService", "SalesOfficeService", "DepartmentService", "DesignationService", "SalesAreaService", "CheckRegionService", "LeadFUQuestionsService",
                    "LeadFUAnswersService", "InsertLeadQueAnsService", "UserNameAtofillService", "CampaignAtofillService", "EmployeeAtofillService", "$cookieStore"];
                return LeadFollowUpListController;
            }());
            var LeadFollowUpListComponentController = /** @class */ (function () {
                function LeadFollowUpListComponentController() {
                    this.controller = LeadFollowUpListController;
                    this.templateUrl = "/Scripts/App/LeadFollowUpList/Template/LeadFollowUpList.html";
                }
                LeadFollowUpListComponentController.Name = "leadfollowuplistcomponent";
                return LeadFollowUpListComponentController;
            }());
            app.AddComponent(LeadFollowUpListComponentController.Name, new LeadFollowUpListComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadFollowUpListComponent.js.map