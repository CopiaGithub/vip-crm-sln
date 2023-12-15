var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var InsertProjectDetail = GCPL.Model.InsertProjectDataDetailsModel;
            var Lead = GCPL.Model.InsertLeadModel;
            var CustomerDetails = GCPL.Model.LeadCustomerListModel;
            var ContactMaster = GCPL.Model.InsertContactMaster;
            var CustomerMaster = GCPL.Model.InsertCustomerMaster;
            var CustomerValidate = GCPL.Model.CustomerViewModel;
            var ProjectTrackerController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ProjectTrackerController(_ProjectDataService, _ProjectType, _ProjectStageService, _ProjectIndustryService, _ProjectOwnershipService, _ProjectSourceService, $location, _ProjectCustomerListService, _ProjectContactCustomerListService, _LeadTypeService, _SalesOfficeService, _LeadCategoryService, _PurchaseTimlineDDService, _CategoryService, _CustomerSapAutofill, _CustomerInfoService, _DistrictService, _StateDDService, _CountryService, _LeadCustomerDetails1, _ContactInfoService, _LeadDetailsService, _InsertService, _DivisionPService, _ProductService, _ModelService, _ChannelDDService, _LeadSourceDDService, _InsertContactService, _DesignationService, _InsertCustomerService, _StateService, _DepartmentService, _IndustrialSegmentService, _DivisionService, _IndustryDivisionService, _SalesAreaService, _CustClassService, _LeadCustomerDetails, _ProjectCreateLeadListService, _ProjectInsertService, _CustomerViewService, _ProjectInsertCustomerService, _ProjectInsertServicenew, _CustProjectTypeService, _AddCustProjectTypeService, _CreateProjectService, _MultipleUserMasterService, _getAutoSalesrep1, _getAutoUser, _CampaignDDService, _ZoneDDService, _DeleteContactService, _ProjectActivityListService, _EditService, _ProjectInsertNewContact, _DeleteProjectCustomerService, _cookieStore) {
                    this.$location = $location;
                    this._cookieStore = _cookieStore;
                    this.RoleID = null;
                    this.CalendarEvtArray = [];
                    this.ProjectIndustryDD = null;
                    this.ProjectSourceDD = null;
                    this.ProjectOwnershipDD = null;
                    this.ProjectTypeDD = null;
                    this.ProjectStageDD = null;
                    this.ProjectID = null;
                    this.ProjectCustomerList = null;
                    this.ProjectContactCustomerList = null;
                    this.ProjectDataInfo = null;
                    this.InsertProjectDetails = null;
                    this.LeadTypeDropDown = null;
                    this.LeadSalesOfficeDropDown = null;
                    this.LeadCategoryDropDown = null;
                    this.PurchaseTimlinedd = null;
                    this.CategoryDropDown = null;
                    this.DivisionDropDownP = null;
                    this.Cookie = null;
                    this.InsertLead = null;
                    this.PromotorInsertCust = null;
                    this.CustDistrictDropDown = null;
                    this.CustStateDropDown = null;
                    this.CustCountryDropDown = null;
                    this.LCustomer = null;
                    this.Contactinfo = null;
                    this.Leadinfo = null;
                    this.EMAIL_REGEXP = null;
                    this.UserID = null;
                    this.ProductDropDown = null;
                    this.ModelDropDown = null;
                    this.ChannelDD = null;
                    this.LeadSourcedd = null;
                    this.AddNewInsertCust = null;
                    this.AddNewInsertContact = null;
                    this.DesignationDropDown = null;
                    this.AddConStateDropDown = null;
                    this.AddConCountryDropDown = null;
                    this.AddConDistrictDropDown = null;
                    this.InsertCustomer = null;
                    this.CustomerID = null;
                    this.StateDropDown = null;
                    this.CutomerDistrictDropDown = null;
                    this.ConStateDropDown = null;
                    this.ConDistrictDropDown = null;
                    this.ConCountryDropDown = null;
                    this.DepartmentDropDown = null;
                    this.IndustrialSegmentDropDown = null;
                    this.DivisionDropDown = null;
                    this.IndustryDivisionDropDown = null;
                    this.SalesAreaDropDown = null;
                    this.SalesOfficeDropDown = null;
                    this.CustClassDropDown = null;
                    this.CustomerMasterlist = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.CreateLeadList = null;
                    this.CustomerView = null;
                    this.CustProjectTypeDD = null;
                    this.AddCustProjectType = null;
                    this.UserMasterDropDown = null;
                    this.Campaigndd = null;
                    this.ZoneDD = null;
                    this.ActivityList = null;
                    this.ActivitySearch = null;
                    this.EditActivites = null;
                    this.PromotorCustomerID = null;
                    this.ProjectAssignDropdownList = [];
                    this.ProjectDataService = _ProjectDataService;
                    this.ProjectTypeService = _ProjectType;
                    this.ProjectStageService = _ProjectStageService;
                    this.ProjectIndustryService = _ProjectIndustryService;
                    this.ProjectOwnershipService = _ProjectOwnershipService;
                    this.ProjectSourceService = _ProjectSourceService;
                    this.LeadTypeService = _LeadTypeService;
                    this.SalesOfficeService = _SalesOfficeService;
                    this.LeadCategoryService = _LeadCategoryService;
                    this.PurchaseTimlineDDService = _PurchaseTimlineDDService;
                    this.CategoryService = _CategoryService;
                    this.ProjectContactCustomerListService = _ProjectContactCustomerListService;
                    this.ProjectID = $location.search().ProjectID;
                    this.ProjectCustomerListService = _ProjectCustomerListService;
                    this.ProjectDataInfo = new Array();
                    this.ProjectCustomerList = new Array();
                    this.ProjectContactCustomerList = new Array();
                    this.LeadTypeDropDown = new Array();
                    this.LeadSalesOfficeDropDown = new Array();
                    this.LeadCategoryDropDown = new Array();
                    this.PurchaseTimlinedd = new Array();
                    this.CategoryDropDown = new Array();
                    this.InsertProjectDetails = new InsertProjectDetail();
                    this.InsertLead = new Lead();
                    this.PromotorInsertCust = new CustomerDetails();
                    this.CustomerSapAutofill = _CustomerSapAutofill;
                    this.CustomerInfoService = _CustomerInfoService;
                    this.DistrictService = _DistrictService;
                    this.StateDDService = _StateDDService;
                    this.CountryService = _CountryService;
                    this.LeadCustomerDetails1 = _LeadCustomerDetails1;
                    this.LCustomer = new Array();
                    this.Contactinfo = new Array();
                    this.ContactInfoService = _ContactInfoService;
                    this.LeadDetailsService = _LeadDetailsService;
                    this.InsertService = _InsertService;
                    this.DivisionPService = _DivisionPService;
                    this.ProductService = _ProductService;
                    this.ModelService = _ModelService;
                    this.ChannelDDService = _ChannelDDService;
                    this.LeadSourceDDService = _LeadSourceDDService;
                    this.AddNewInsertCust = new CustomerDetails();
                    this.AddNewInsertContact = new ContactMaster();
                    this.InsertCustomer = new CustomerMaster();
                    this.InsertContactService = _InsertContactService;
                    this.DesignationService = _DesignationService;
                    this.InsertCustomerService = _InsertCustomerService;
                    this.StateService = _StateService;
                    this.DepartmentService = _DepartmentService;
                    this.IndustrialSegmentService = _IndustrialSegmentService;
                    this.DivisionService = _DivisionService;
                    this.IndustryDivisionService = _IndustryDivisionService;
                    this.SalesAreaService = _SalesAreaService;
                    this.CustClassService = _CustClassService;
                    this.LeadCustomerDetails = _LeadCustomerDetails;
                    this.ProjectCreateLeadListService = _ProjectCreateLeadListService;
                    this.ProjectInsertService = _ProjectInsertService;
                    this.CustomerViewService = _CustomerViewService;
                    this.CustomerView = new CustomerValidate();
                    this.ProjectInsertCustomerService = _ProjectInsertCustomerService;
                    this.ProjectInsertServicenew = _ProjectInsertServicenew;
                    this.CustProjectTypeService = _CustProjectTypeService;
                    this.AddCustProjectTypeService = _AddCustProjectTypeService;
                    this.CreateProjectService = _CreateProjectService;
                    this.MultipleUserMasterService = _MultipleUserMasterService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.getAutoUser = _getAutoUser;
                    this.CampaignDDService = _CampaignDDService;
                    this.ZoneDDService = _ZoneDDService;
                    this.DeleteContactService = _DeleteContactService;
                    this.ProjectActivityListService = _ProjectActivityListService;
                    this.EditService = _EditService;
                    this.ProjectInsertNewContact = _ProjectInsertNewContact;
                    this.DeleteProjectCustomerService = _DeleteProjectCustomerService;
                    this.ActivitySearch = Array();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
                }
                ProjectTrackerController.prototype.$onInit = function () {
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
                    this.CheckSelectActivity();
                    this.Init();
                };
                //Page Load Define Values//
                ProjectTrackerController.prototype.Init = function () {
                    //this.InsertCustomer.IsNational = "0";
                    var _this = this;
                    this.ProjectAssignDropdownList = [];
                    this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    this.ProjectTypeDD = this.ProjectTypeService.FindProjectTypeDD().then((function (response) {
                        _this.ProjectTypeDD = _this.ProjectTypeService.GetProjectTypeDD(response.data.Result);
                    }));
                    this.ProjectStageDD = this.ProjectStageService.FindDD().then((function (response) {
                        _this.ProjectStageDD = _this.ProjectStageService.GetProjectStageDD(response.data.Result);
                    }));
                    this.ProjectIndustryDD = this.ProjectIndustryService.Find().then((function (response) {
                        _this.ProjectIndustryDD = _this.ProjectIndustryService.GetIndustry(response.data.Result);
                    }));
                    this.ProjectOwnershipDD = this.ProjectOwnershipService.Find().then((function (response) {
                        _this.ProjectOwnershipDD = _this.ProjectOwnershipService.GetOwnership(response.data.Result);
                    }));
                    this.ProjectSourceDD = this.ProjectSourceService.Find().then((function (response) {
                        _this.ProjectSourceDD = _this.ProjectSourceService.GetProjectSource(response.data.Result);
                    }));
                    this.CustStateDropDown = this.StateDDService.Find().then((function (response) {
                        _this.CustStateDropDown = _this.StateDDService.GetState(response.data.Result);
                    }));
                    this.CustCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.CustCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.ChannelDD = this.ChannelDDService.Find().then((function (response) {
                        _this.ChannelDD = _this.ChannelDDService.GetChannelDDnew(response.data.Result);
                    }));
                    this.StateDropDown = this.StateService.Find(this.InsertCustomer.CountryID = '95').then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                    this.ConStateDropDown = this.StateService.Find(this.InsertCustomer.ConCountryID = '95').then((function (response) {
                        _this.ConStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.LeadSalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.LeadSalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((function (response) {
                        _this.LeadCategoryDropDown = _this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
                    }));
                    this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((function (response) {
                        _this.PurchaseTimlinedd = _this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
                    }));
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.DesignationDropDown = this.DesignationService.Find().then((function (response) {
                        _this.DesignationDropDown = _this.DesignationService.GetDesignationName(response.data.Result);
                    }));
                    this.DepartmentDropDown = this.DepartmentService.Find().then((function (response) {
                        _this.DepartmentDropDown = _this.DepartmentService.GetDepartmentName(response.data.Result);
                    }));
                    this.IndustrialSegmentDropDown = this.IndustrialSegmentService.Find().then((function (response) {
                        _this.IndustrialSegmentDropDown = _this.IndustrialSegmentService.GetIndustrialSegmentName(response.data.Result);
                    }));
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivision(response.data.Result);
                    }));
                    this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((function (response) {
                        _this.IndustryDivisionDropDown = _this.IndustryDivisionService.GetIndustryName(response.data.Result);
                    }));
                    this.SalesAreaDropDown = this.SalesAreaService.Find().then((function (response) {
                        _this.SalesAreaDropDown = _this.SalesAreaService.GetSalesAreaName(response.data.Result);
                    }));
                    this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.SalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.CustClassDropDown = this.CustClassService.Find().then((function (response) {
                        _this.CustClassDropDown = _this.CustClassService.GetCustomerClass(response.data.Result);
                    }));
                    this.AddConCountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.AddConCountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.AddConStateDropDown = this.StateDDService.Find().then((function (response) {
                        _this.AddConStateDropDown = _this.StateDDService.GetState(response.data.Result);
                    }));
                    this.CustProjectTypeDD = this.CustProjectTypeService.FindCustProjectTypeDD().then((function (response) {
                        _this.CustProjectTypeDD = _this.CustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
                    }));
                    this.AddCustProjectType = this.AddCustProjectTypeService.FindCustProjectTypeDD().then((function (response) {
                        _this.AddCustProjectType = _this.AddCustProjectTypeService.GetCustProjectTypeDD(response.data.Result);
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    $("#txtProjectManager").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
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
                            that.InsertProjectDetails.ProjectManagerID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtParentCus").autocomplete({
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
                            that.InsertCustomer.ParentCustomerID = ui.item.id;
                        },
                        change: function () {
                        }
                    });
                    $("#txtUserName").autocomplete({
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
                            that.InsertLead.RefUserID = ui.item.id;
                            that.InsertLead.RefUserName = ui.item.value;
                        },
                        change: function () {
                        }
                    });
                    this.CreateLeadList = this.ProjectCreateLeadListService.Find(this.ProjectID).then((function (response) {
                        _this.CreateLeadList = _this.ProjectCreateLeadListService.GetCreateLeadlist(response.data.Result);
                    }));
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#Campaignfield').hide();
                    $('#UserNamefield').hide();
                    if (this.RoleID == "5") {
                        $("#txtProjectName").prop('disabled', true);
                        $("#ddlProjectType").prop('disabled', true);
                        $("#ddlProjectStage").prop('disabled', true);
                        $("#txtCost").prop('disabled', true);
                        $("#txtFromDate").prop('disabled', true);
                        $("#txtToDate").prop('disabled', true);
                        $("#ddlProjectIndustry").prop('disabled', true);
                        $("#ddlProjectOwnership").prop('disabled', true);
                        $("#txtProjectManager").prop('disabled', true);
                        $("#divprojassign").hide();
                        $("#ddcustProjectType").prop('disabled', true);
                        $("#ddlProjectstageOwnership").prop('disabled', true);
                        $("#txtZone").prop('disabled', true);
                        $("#txtCommentsproj").prop('disabled', true);
                        $("#btnProjUpSubmit").hide();
                    }
                    else {
                        $("#txtProjectName").prop('disabled', false);
                        $("#ddlProjectType").prop('disabled', false);
                        $("#ddlProjectStage").prop('disabled', false);
                        $("#txtCost").prop('disabled', false);
                        $("#txtFromDate").prop('disabled', false);
                        $("#txtToDate").prop('disabled', false);
                        $("#ddlProjectIndustry").prop('disabled', false);
                        $("#ddlProjectOwnership").prop('disabled', false);
                        $("#txtProjectManager").prop('disabled', false);
                        $("#divprojassign").show();
                        $("#ddcustProjectType").prop('disabled', false);
                        $("#ddlProjectstageOwnership").prop('disabled', false);
                        $("#txtZone").prop('disabled', false);
                        $("#txtCommentsproj").prop('disabled', false);
                        $("#btnProjUpSubmit").show();
                    }
                    var that = this;
                    $("#txtNewCustomerName").autocomplete({
                        source: function (request, res) {
                            that.CustomerSapAutofill.FilterAutoComplete(request).then((function (response) {
                                var data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                                debugger;
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.CustomerName,
                                        value: item.CustomerName,
                                        id: item.CustomerID,
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertLead.CustomerID = ui.item.id;
                            debugger;
                            that.AddNewSearch(ui.item.id);
                        },
                        change: function () {
                        }
                    });
                    if (this.ProjectID != null || this.ProjectID != "" || this.ProjectID != undefined) {
                        $("#ass-btn-loader2").show();
                        this.ProjectData(this.ProjectID);
                    }
                    this.ProjectCustomer(this.ProjectID);
                };
                ProjectTrackerController.prototype.Campaign = function () {
                    var _this = this;
                    this.Campaigndd = this.CampaignDDService.Find(this.InsertLead.LeadSourceID).then((function (response) {
                        _this.Campaigndd = _this.CampaignDDService.GetCampaignDetails(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.LeadSourceChange = function () {
                    $("#Campaignfield").hide();
                    $("#UserNamefield").hide();
                    if (this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") {
                        this.Campaign();
                        $("#Campaignfield").show();
                        $("#UserNamefield").hide();
                    }
                    else if (this.InsertLead.LeadSourceID == "2") {
                        $("#Campaignfield").hide();
                        $("#UserNamefield").show();
                    }
                };
                ProjectTrackerController.prototype.Search = function (data) {
                    var _this = this;
                    this.CustomerIDReff = data; //Shubham
                    this.CustomerInfoService.Find(data).then((function (response) {
                        _this.PromotorInsertCust = _this.CustomerInfoService.GetLeadCustomerInfo(response.data.Result);
                        var temp = _this.PromotorInsertCust.DistrictID;
                        _this.CustDistrictDropDown = _this.DistrictService.Find(_this.PromotorInsertCust.StateID).then((function (response) {
                            _this.CustDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                            _this.PromotorInsertCust.DistrictID = temp;
                        }));
                        _this.ShowFirstTime();
                        _this.ContactDetail();
                        _this.LeadDetail();
                    }));
                };
                ProjectTrackerController.prototype.AddNewSearch = function (data) {
                    var _this = this;
                    this.CustomerInfoService.Find(data).then((function (response) {
                        _this.AddNewInsertCust = _this.CustomerInfoService.GetLeadCustomerInfo(response.data.Result);
                        var temp = _this.AddNewInsertCust.DistrictID;
                        _this.CustDistrictDropDown = _this.DistrictService.Find(_this.AddNewInsertCust.StateID).then((function (response) {
                            _this.CustDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                            _this.AddNewInsertCust.DistrictID = temp;
                        }));
                        _this.AddNewShowFirstTime();
                        _this.AddNewContactDetail();
                        _this.AddNewLeadDetail();
                    }));
                };
                ProjectTrackerController.prototype.ShowFirstTime = function () {
                    var _this = this;
                    this.LeadCustomerDetails1.Find(this.PromotorInsertCust).then((function (response) {
                        _this.LCustomer = _this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                    }));
                    $("#existingCustomerList").show();
                };
                ProjectTrackerController.prototype.ContactDetail = function () {
                    var _this = this;
                    $("#existingContactList").show();
                    this.Contactinfo = this.ContactInfoService.Find(this.PromotorInsertCust.CustomerID).then((function (response) {
                        _this.Contactinfo = _this.ContactInfoService.GetLeadContactInfo(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.LeadDetail = function () {
                    var _this = this;
                    $("#existingLeadList").show();
                    this.Leadinfo = this.LeadDetailsService.Find(this.PromotorInsertCust.CustomerID).then((function (response) {
                        _this.Leadinfo = _this.LeadDetailsService.GetLeadInfo(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.AddNewShowFirstTime = function () {
                    var _this = this;
                    this.LeadCustomerDetails1.Find(this.AddNewInsertCust).then((function (response) {
                        _this.LCustomer = _this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                    }));
                    $("#NewexistingCustomerList").show();
                };
                ProjectTrackerController.prototype.AddNewContactDetail = function () {
                    var _this = this;
                    $("#NewexistingContactList").show();
                    this.Contactinfo = this.ContactInfoService.Find(this.AddNewInsertCust.CustomerID).then((function (response) {
                        _this.Contactinfo = _this.ContactInfoService.GetLeadContactInfo(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.AddNewLeadDetail = function () {
                    var _this = this;
                    $("#NewexistingLeadList").show();
                    this.Leadinfo = this.LeadDetailsService.Find(this.AddNewInsertCust.CustomerID).then((function (response) {
                        _this.Leadinfo = _this.LeadDetailsService.GetLeadInfo(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.CustDistrict = function () {
                    var _this = this;
                    this.CustDistrictDropDown = this.DistrictService.Find(this.PromotorInsertCust.StateID).then((function (response) {
                        _this.CustDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.AddNewCustDistrict = function () {
                    var _this = this;
                    this.CustDistrictDropDown = this.DistrictService.Find(this.AddNewInsertCust.StateID).then((function (response) {
                        _this.CustDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                ProjectTrackerController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                ProjectTrackerController.prototype.getContact = function (data) {
                    var _this = this;
                    this.Search(data);
                    this.ProjectContactCustomerList = this.ProjectContactCustomerListService.Find(data).then((function (response) {
                        _this.ProjectContactCustomerList = _this.ProjectContactCustomerListService.GetProjectContactCustomerList(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.LeadSalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.LeadSalesOfficeDropDown = _this.SalesOfficeService.GetSalesOfficeName(response.data.Result);
                    }));
                    this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((function (response) {
                        _this.LeadCategoryDropDown = _this.LeadCategoryService.GetLeadCategoryName(response.data.Result);
                    }));
                    this.PurchaseTimlinedd = this.PurchaseTimlineDDService.Find().then((function (response) {
                        _this.PurchaseTimlinedd = _this.PurchaseTimlineDDService.GetPurchaseTimeline(response.data.Result);
                    }));
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    //this.ProjectCustomer(this.ProjectID);
                };
                ProjectTrackerController.prototype.ProjectData = function (data) {
                    var _this = this;
                    $("#ass-btn-loader2").show();
                    this.ProjectDataService.Find(data).then((function (response) {
                        _this.ProjectDataInfo = _this.ProjectDataService.GetProjectData(response.data.Result);
                        $("#ass-btn-loader2").hide();
                        debugger;
                        _this.InsertProjectDetails.ProjectID = _this.ProjectDataInfo[0].ProjectID;
                        _this.InsertProjectDetails.ProjectName = _this.ProjectDataInfo[0].ProjectName;
                        _this.InsertProjectDetails.ProjectNo = _this.ProjectDataInfo[0].ProjectNo;
                        _this.InsertProjectDetails.ProjectTypeID = _this.ProjectDataInfo[0].ProjectTypeID;
                        _this.InsertProjectDetails.ProjectType = _this.ProjectDataInfo[0].ProjectType;
                        _this.InsertProjectDetails.ProjectStageID = _this.ProjectDataInfo[0].ProjectStageID;
                        _this.InsertProjectDetails.ProjectStage = _this.ProjectDataInfo[0].ProjectStage;
                        _this.InsertProjectDetails.Cost = _this.ProjectDataInfo[0].Cost;
                        _this.InsertProjectDetails.ProjectOwnershipID = _this.ProjectDataInfo[0].ProjectOwnershipID;
                        _this.InsertProjectDetails.ProjectOwnership = _this.ProjectDataInfo[0].ProjectOwnership;
                        _this.InsertProjectDetails.ProjectSourceID = _this.ProjectDataInfo[0].ProjectSourceID;
                        _this.InsertProjectDetails.ProjectSource = _this.ProjectDataInfo[0].ProjectSource;
                        _this.InsertProjectDetails.Comments = _this.ProjectDataInfo[0].Comments;
                        _this.InsertProjectDetails.ProjectIndustryID = _this.ProjectDataInfo[0].ProjectIndustryID;
                        _this.InsertProjectDetails.ProjectIndustry = _this.ProjectDataInfo[0].ProjectIndustry;
                        _this.InsertProjectDetails.CustProjectType = _this.ProjectDataInfo[0].CustProjectType;
                        _this.InsertProjectDetails.ProjectOwner = _this.ProjectDataInfo[0].ProjectOwner;
                        _this.InsertProjectDetails.ProjectManager = _this.ProjectDataInfo[0].ProjectManager;
                        debugger;
                        _this.InsertProjectDetails.ProjectManagerID = _this.ProjectDataInfo[0].ProjectManagerID;
                        _this.InsertProjectDetails.ProjectManagerID = _this.InsertProjectDetails.ProjectManagerID;
                        //this.InsertProjectDetails.ProjectAssign = this.ProjectDataInfo[0].ProjectAssign;
                        //this.InsertProjectDetails.ProjectAssignID = this.ProjectDataInfo[0].ProjectAssignID;
                        _this.InsertProjectDetails.ID = _this.ProjectDataInfo[0].ID;
                        _this.InsertProjectDetails.ZoneID = _this.ProjectDataInfo[0].ZoneID;
                        document.getElementById("txtFromDate").value = _this.ProjectDataInfo[0].ProjectStartDate;
                        document.getElementById("txtToDate").value = _this.ProjectDataInfo[0].CompletionDate;
                        debugger;
                        for (var i = 0; i < _this.ProjectDataInfo.length; i++) {
                            _this.InsertProjectDetails.ProjectAssignID = _this.ProjectDataInfo[i].ProjectAssignID.toString();
                            _this.InsertProjectDetails.ProjectAssign = _this.ProjectDataInfo[i].ProjectAssign.toString();
                            _this.ProjectAssignDropdownList.push({ userID: _this.InsertProjectDetails.ProjectAssignID, userName: _this.InsertProjectDetails.ProjectAssign });
                        }
                        _this.ProjectAssign();
                        _this.GetActivityList();
                    }));
                };
                ProjectTrackerController.prototype.ProjectAssign = function () {
                    var _this = this;
                    this.UserMasterDropDown = this.MultipleUserMasterService.Find(this.InsertProjectDetails.ZoneID).then((function (response) {
                        _this.UserMasterDropDown = _this.MultipleUserMasterService.GetUserName(response.data.Result);
                        debugger;
                        for (var i = 0; i < _this.ProjectAssignDropdownList.length; i++) {
                            for (var j = 0; j < _this.UserMasterDropDown.length; j++) {
                                if (_this.UserMasterDropDown[j].ID == _this.ProjectAssignDropdownList[i].userID) {
                                    _this.UserMasterDropDown[j].IsChecked = true;
                                }
                            }
                        }
                    }));
                };
                ProjectTrackerController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    this.InsertProjectDetails.UserID = this.UserID;
                    this.InsertProjectDetails.ProjectStartDate = document.getElementById("txtFromDate").value;
                    this.InsertProjectDetails.CompletionDate = document.getElementById("txtToDate").value;
                    //this.InsertProjectDetails.ProjectManagerID = this.ProjectDataInfo[0].ProjectManagerID;
                    if (this.InsertProjectDetails.ProjectName == undefined || this.InsertProjectDetails.ProjectName == null || this.InsertProjectDetails.ProjectName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.ProjectTypeID == undefined || this.InsertProjectDetails.ProjectTypeID == null || this.InsertProjectDetails.ProjectTypeID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.ProjectStageID == undefined || this.InsertProjectDetails.ProjectStageID == null || this.InsertProjectDetails.ProjectStageID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Stage", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.Cost == undefined || this.InsertProjectDetails.Cost == null || this.InsertProjectDetails.Cost == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Cost", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.ProjectStartDate == undefined || this.InsertProjectDetails.ProjectStartDate == null || this.InsertProjectDetails.ProjectStartDate == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Start Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.CompletionDate == undefined || this.InsertProjectDetails.CompletionDate == null || this.InsertProjectDetails.CompletionDate == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Completion Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.ProjectIndustryID == undefined || this.InsertProjectDetails.ProjectIndustryID == null || this.InsertProjectDetails.ProjectIndustryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Industry", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.ProjectOwnershipID == undefined || this.InsertProjectDetails.ProjectOwnershipID == null || this.InsertProjectDetails.ProjectOwnershipID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Ownership", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.CustProjectType == undefined || this.InsertProjectDetails.CustProjectType == null || this.InsertProjectDetails.CustProjectType == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Project Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.ProjectManagerID == undefined || this.InsertProjectDetails.ProjectManagerID == null || this.InsertProjectDetails.ProjectManagerID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Manager", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.ZoneID == undefined || this.InsertProjectDetails.ZoneID == null || this.InsertProjectDetails.ZoneID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.ProjectSourceID == undefined || this.InsertProjectDetails.ProjectSourceID == null || this.InsertProjectDetails.ProjectSourceID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProjectDetails.Comments == undefined || this.InsertProjectDetails.Comments == null || this.InsertProjectDetails.Comments == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Project Comments", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.ProjectDataInfo.ZoneID = this.InsertProjectDetails.ZoneID;
                        this.InsertProjectDetails.ProjectOwner = this.UserID;
                        this.InsertProjectDetails.ProjectID = this.ProjectDataInfo[0].ProjectID;
                        this.InsertProjectDetails.ProjectNo = this.ProjectDataInfo[0].ProjectNo;
                        var ProjectAssignArray = [];
                        for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                            ProjectAssignArray.push(this.ProjectAssignDropdownList[i].userID);
                        }
                        this.InsertProjectDetails.ProjectAssignID = ProjectAssignArray.toString();
                        this.ProjectAssign();
                        this.CreateProjectService.CreateProject(this.InsertProjectDetails).then((function (response) {
                            console.log(_this.InsertProjectDetails);
                            if (response.data.Result != null) {
                                debugger;
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Project Data " + response.data.Result + " saved Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.Clear();
                                //this.InsertProject = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                ProjectTrackerController.prototype.addUser = function (abc, abc_name, checkUser) {
                    debugger;
                    if (checkUser == true) {
                        this.ProjectAssignDropdownList.push({ userID: abc, userName: abc_name });
                    }
                    else {
                        for (var i = 0; i < this.ProjectAssignDropdownList.length; i++) {
                            if (abc == this.ProjectAssignDropdownList[i].userID) {
                                this.ProjectAssignDropdownList.splice(i, 1);
                            }
                        }
                    }
                };
                ProjectTrackerController.prototype.ProjectCustomer = function (data) {
                    var _this = this;
                    debugger;
                    this.ProjectCustomerList = this.ProjectCustomerListService.Find(data).then((function (response) {
                        _this.ProjectCustomerList = _this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.SubmitPromotor = function () {
                    var _this = this;
                    if (this.PromotorInsertCust.CompanyName == undefined || this.PromotorInsertCust.CompanyName == null || this.PromotorInsertCust.CompanyName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadType == undefined || this.InsertLead.LeadType == null || this.InsertLead.LeadType == "") {
                        this.HideShow();
                        this.popupMessage("Please Select LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadCategoryID == undefined || this.InsertLead.LeadCategoryID == null || this.InsertLead.LeadCategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.PurchaseTimelineID == undefined || this.InsertLead.PurchaseTimelineID == null || this.InsertLead.PurchaseTimelineID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Purchase Within", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.CategoryID == undefined || this.InsertLead.CategoryID == null || this.InsertLead.CategoryID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.DivisionID == undefined || this.InsertLead.DivisionID == null || this.InsertLead.DivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ProductID == undefined || this.InsertLead.ProductID == null || this.InsertLead.ProductID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ModelID == undefined || this.InsertLead.ModelID == null || this.InsertLead.ModelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.Quantity == undefined || this.InsertLead.Quantity == null || this.InsertLead.Quantity == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.ChannelID == undefined || this.InsertLead.ChannelID == null || this.InsertLead.ChannelID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadSourceID == undefined || this.InsertLead.LeadSourceID == null || this.InsertLead.LeadSourceID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertLead.LeadSourceID == "2" && (this.InsertLead.RefUserID == undefined || this.InsertLead.RefUserID == null || this.InsertLead.RefUserID == "")) {
                        this.HideShow();
                        this.popupMessage("Please Enter Ref User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") && (this.InsertLead.CampaignID == undefined || this.InsertLead.CampaignID == null || this.InsertLead.CampaignID == "")) {
                        this.HideShow();
                        this.popupMessage("Please Select Campaign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (!$("input[name=contactradio]:checked").val()) {
                        this.HideShow();
                        this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertLead.ContactID = $('#messageCheckbox:checked').val();
                        this.InsertLead.CustomerID = this.PromotorInsertCust.CustomerID;
                        this.InsertLead.CompanyName = this.PromotorInsertCust.CompanyName;
                        this.InsertLead.BusinessPartnerNo = this.PromotorInsertCust.BusinessPartnerNo;
                        this.InsertLead.Email = this.PromotorInsertCust.Email;
                        this.InsertLead.MobileNo = this.PromotorInsertCust.MobileNo;
                        this.InsertLead.PhoneNo = this.PromotorInsertCust.PhoneNo;
                        this.InsertLead.Pincode = this.PromotorInsertCust.Pincode;
                        this.InsertLead.Address1 = this.PromotorInsertCust.Address1;
                        this.InsertLead.Address2 = this.PromotorInsertCust.Address2;
                        this.InsertLead.SalesOfficeID = this.PromotorInsertCust.SalesOfficeID;
                        this.InsertLead.CountryID = '95';
                        this.InsertLead.StateID = this.PromotorInsertCust.StateID;
                        this.InsertLead.DistrictID = this.PromotorInsertCust.DistrictID;
                        this.InsertLead.City = this.PromotorInsertCust.City;
                        this.InsertLead.ProjectID = this.ProjectCustomerList[0].ProjectID;
                        if (this.UserID != null || this.UserID != "") {
                            this.InsertLead.UserID = this.UserID;
                        }
                        debugger;
                        this.ProjectInsertService.PostLead(this.InsertLead).then((function (response) {
                            if (response.data.Result == 0) {
                                $("#errorclose").hide();
                                $("#errorcloselead").hide();
                                $("#close").show();
                                _this.popupMessage("Lead already exists for this Customer & Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $('#MyLead').click();
                                _this.FillGrid(_this.numRecords);
                            }
                            else if (response.data.Result > 0) {
                                $("#errorclose").hide();
                                $("#errorcloselead").hide();
                                $("#close").show();
                                _this.popupMessage("LeadID - " + response.data.Result + " created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#MyLead').click();
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $('#MyLead').click();
                                _this.FillGrid(_this.numRecords);
                            }
                        }));
                    }
                };
                ProjectTrackerController.prototype.Division = function () {
                    var _this = this;
                    this.DivisionDropDownP = this.DivisionPService.Find(this.InsertLead.CategoryID).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.Product = function () {
                    var _this = this;
                    this.ProductDropDown = this.ProductService.Find(this.InsertLead.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.Model = function () {
                    var _this = this;
                    this.ModelDropDown = this.ModelService.Find(this.InsertLead).then((function (response) {
                        _this.ModelDropDown = _this.ModelService.GetLeadTypeProduct(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.LeadSource = function () {
                    var _this = this;
                    this.LeadSourcedd = this.LeadSourceDDService.Find(this.InsertLead.ChannelID).then((function (response) {
                        _this.LeadSourcedd = _this.LeadSourceDDService.GetLeadSourceDetails(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.ShowAll = function () {
                    var _this = this;
                    if ($("#btnShow").text() == "Show Similar" && this.PromotorInsertCust.CompanyName != undefined && this.PromotorInsertCust.CompanyName != null && this.PromotorInsertCust.CompanyName != "") {
                        $("#btnShow").html("Cancel");
                        this.LeadCustomerDetails1.Find(this.PromotorInsertCust).then((function (response) {
                            _this.LCustomer = _this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                        }));
                        $("#existingCustomerList").show();
                    }
                    else {
                        $("#btnShow").html("Show Similar");
                        $("#existingCustomerList").hide();
                    }
                };
                ProjectTrackerController.prototype.AddNewShowAll = function () {
                    var _this = this;
                    if ($("#AddNewbtnShow").text() == "Show Similar" && this.AddNewInsertCust.CompanyName != undefined && this.AddNewInsertCust.CompanyName != null && this.AddNewInsertCust.CompanyName != "") {
                        $("#AddNewbtnShow").html("Cancel");
                        this.LeadCustomerDetails1.Find(this.AddNewInsertCust).then((function (response) {
                            _this.LCustomer = _this.LeadCustomerDetails1.GetCustomerDetails(response.data.Result);
                        }));
                        $("#NewexistingCustomerList").show();
                    }
                    else {
                        $("#AddNewbtnShow").html("Show Similar");
                        $("#NewexistingCustomerList").hide();
                    }
                };
                ProjectTrackerController.prototype.NewCustShowAll = function () {
                    var _this = this;
                    if ($("#NewCustbtnShow").text() == "Show Similar" && this.InsertCustomer.CompanyName != undefined && this.InsertCustomer.CompanyName != null && this.InsertCustomer.CompanyName != "") {
                        $("#NewCustbtnShow").html("Cancel");
                        this.LeadCustomerDetails.Find(this.InsertCustomer).then((function (response) {
                            _this.CustomerMasterlist = _this.LeadCustomerDetails.GetCustomerDetails(response.data.Result);
                        }));
                        $("#show-similar-table").show();
                    }
                    else {
                        $("#NewCustbtnShow").html("Show Similar");
                        $("#show-similar-table").hide();
                    }
                };
                ProjectTrackerController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                    $("#errorcloselead").hide();
                };
                ProjectTrackerController.prototype.Adopt = function (data) {
                    this.Search(data);
                };
                ProjectTrackerController.prototype.AddNewAdopt = function (data) {
                    this.AddNewSearch(data);
                };
                ProjectTrackerController.prototype.SubmitAddNewContact = function () {
                    var _this = this;
                    debugger;
                    this.AddNewInsertContact.CustomerID = this.AddNewInsertCust.CustomerID;
                    if (this.AddNewInsertContact.CustomerID.length == 0) {
                        this.HideShow();
                        this.popupMessage("First Select Customer And Then Add Contact", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.AddNewInsertContact.ContactName == undefined || this.AddNewInsertContact.ContactName == null || this.AddNewInsertContact.ContactName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact Name ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.AddNewInsertContact.MobileNo == undefined || this.AddNewInsertContact.MobileNo == null || this.AddNewInsertContact.MobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.AddNewInsertContact.MobileNo != undefined && this.AddNewInsertContact.MobileNo != null && this.AddNewInsertContact.MobileNo != "") && (isNaN(this.AddNewInsertContact.MobileNo) || this.AddNewInsertContact.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.AddNewInsertContact.PhoneNo != undefined && this.AddNewInsertContact.PhoneNo != null && this.AddNewInsertContact.PhoneNo != "") && (isNaN(this.AddNewInsertContact.PhoneNo) || this.AddNewInsertContact.PhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.AddNewInsertContact.Email != undefined && this.AddNewInsertContact.Email != null && this.AddNewInsertContact.Email != "" && !(this.EMAIL_REGEXP.test(this.AddNewInsertContact.Email))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.AddNewInsertContact.PostalCode != undefined && this.AddNewInsertContact.PostalCode != null && this.AddNewInsertContact.PostalCode != "") && (isNaN(this.AddNewInsertContact.PostalCode) || this.AddNewInsertContact.PostalCode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.AddNewInsertContact.DepartmentID == undefined || this.AddNewInsertContact.DepartmentID == null || this.AddNewInsertContact.DepartmentID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Department ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.AddNewInsertContact.FOPID == undefined || this.AddNewInsertContact.FOPID == null || this.AddNewInsertContact.FOPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select Designation  ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.AddNewInsertContact.CountryID = '95';
                        this.AddNewInsertContact.Status = '1';
                        this.AddNewInsertContact.Designation = $("#txtNewContactDesignation option:selected").text();
                        this.InsertContactService.PostContact(this.AddNewInsertContact).then((function (response) {
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#errorcloselead").hide();
                                $("#close").show();
                                _this.popupMessage("Contact ID -  " + response.data.Result + " Created Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#create-contact').click();
                                _this.ContactDetail();
                                _this.AddNewInsertContact = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Contact already exists with the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                ProjectTrackerController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                ProjectTrackerController.prototype.DeleteContact = function (ContactID) {
                    var _this = this;
                    this.DeleteContactService.Find(ContactID, this.ProjectID).then((function (response) {
                        _this.DeleteContactService.postContactDelete(response.data.Result);
                        $("#errorclose").hide();
                        $("#errorcloselead").hide();
                        $("#close").show();
                        _this.popupMessage("Record Deleted Successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        debugger;
                        _this.getContact(_this.ProjectCustomerList[0].CustomerID);
                        _this.ProjectCustomer(_this.ProjectID);
                    }));
                };
                ProjectTrackerController.prototype.DeleteCustomer = function (CustomerID) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete this promotor/sub-contractor data?")) {
                        this.DeleteProjectCustomerService.Find(CustomerID, this.ProjectID).then((function (response) {
                            _this.DeleteProjectCustomerService.PostCustomerDelete(response.data.Result);
                            $("#errorclose").hide();
                            $("#errorcloselead").hide();
                            $("#close").show();
                            _this.getContact(_this.ProjectCustomerList[0].CustomerID);
                            _this.ProjectCustomer(_this.ProjectID);
                        }));
                    }
                    else {
                        $("#errorclose").hide();
                        $("#errorcloselead").hide();
                        $("#close").show();
                        this.getContact(this.ProjectCustomerList[0].CustomerID);
                        this.ProjectCustomer(this.ProjectID);
                    }
                    //this.popupMessage("Record Deleted Successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                };
                ProjectTrackerController.prototype.AddConDistrict = function () {
                    var _this = this;
                    this.AddConDistrictDropDown = this.DistrictService.Find(this.AddNewInsertContact.StateID).then((function (response) {
                        _this.AddConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.AddNewCustomerSubmit = function () {
                    var _this = this;
                    if (this.InsertCustomer.CustomerID != null && this.InsertCustomer.CustomerID != "" && this.InsertCustomer.CustomerID != undefined) {
                        this.InsertCustomer.UpdatedBy = this.UserID;
                    }
                    else {
                        this.InsertCustomer.CreatedBy = this.UserID;
                    }
                    this.InsertCustomer.RoleID = this.RoleID;
                    //this.InsertCustomer.AccountTypeID = "1";
                    if (this.InsertCustomer.CompanyName == undefined || this.InsertCustomer.CompanyName == null || this.InsertCustomer.CompanyName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.CompanyName.length <= 5) {
                        this.HideShow();
                        this.popupMessage("Company Name requires minimum 5 characters.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.Address1 == undefined || this.InsertCustomer.Address1 == null || this.InsertCustomer.Address1 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.MobileNo == undefined || this.InsertCustomer.MobileNo == null || this.InsertCustomer.MobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.MobileNo != undefined && this.InsertCustomer.MobileNo != null && this.InsertCustomer.MobileNo != "") && (isNaN(this.InsertCustomer.MobileNo) || this.InsertCustomer.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.PhoneNo != undefined && this.InsertCustomer.PhoneNo != null && this.InsertCustomer.PhoneNo != "") && (isNaN(this.InsertCustomer.PhoneNo) || this.InsertCustomer.PhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.Email != undefined && this.InsertCustomer.Email != null && this.InsertCustomer.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertCustomer.Email))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.PinCode == undefined || this.InsertCustomer.PinCode == null || this.InsertCustomer.PinCode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.PinCode != undefined && this.InsertCustomer.PinCode != null && this.InsertCustomer.PinCode != "") && (isNaN(this.InsertCustomer.PinCode) || this.InsertCustomer.PinCode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.IsNational == undefined || this.InsertCustomer.IsNational == null || this.InsertCustomer.IsNational == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter IsNational", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.StateID == undefined || this.InsertCustomer.StateID == null || this.InsertCustomer.StateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DistrictID == undefined || this.InsertCustomer.DistrictID == null || this.InsertCustomer.DistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ContactName == undefined || this.InsertCustomer.ContactName == null || this.InsertCustomer.ContactName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConMobileNo == undefined || this.InsertCustomer.ConMobileNo == null || this.InsertCustomer.ConMobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.ConMobileNo != undefined && this.InsertCustomer.ConMobileNo != null && this.InsertCustomer.ConMobileNo != "") && (isNaN(this.InsertCustomer.ConMobileNo) || this.InsertCustomer.ConMobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if ((this.InsertCustomer.ConPhoneNo != undefined && this.InsertCustomer.ConPhoneNo != null && this.InsertCustomer.ConPhoneNo != "") && (isNaN(this.InsertCustomer.ConPhoneNo) || this.InsertCustomer.ConPhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConEmail != undefined && this.InsertCustomer.ConEmail != null && this.InsertCustomer.ConEmail != "" && !(this.EMAIL_REGEXP.test(this.InsertCustomer.ConEmail))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Contact Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DesignationID == undefined || this.InsertCustomer.DesignationID == null || this.InsertCustomer.DesignationID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Designation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DepartmentID == undefined || this.InsertCustomer.DepartmentID == null || this.InsertCustomer.DepartmentID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Department", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.IndustrialSegmentID == undefined || this.InsertCustomer.IndustrialSegmentID == null || this.InsertCustomer.IndustrialSegmentID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter IndustrialSegment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.DivisionID == undefined || this.InsertCustomer.DivisionID == null || this.InsertCustomer.DivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Division Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.IndustryDivisionID == undefined || this.InsertCustomer.IndustryDivisionID == null || this.InsertCustomer.IndustryDivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Industry Division ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.SalesAreaID == undefined || this.InsertCustomer.SalesAreaID == null || this.InsertCustomer.SalesAreaID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SalesArea", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.SalesOfficeID == undefined || this.InsertCustomer.SalesOfficeID == null || this.InsertCustomer.SalesOfficeID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.CustomerRatingID == undefined || this.InsertCustomer.CustomerRatingID == null || this.InsertCustomer.CustomerRatingID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Class", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConStateID == undefined || this.InsertCustomer.ConStateID == null || this.InsertCustomer.ConStateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomer.ConDistrictID == undefined || this.InsertCustomer.ConDistrictID == null || this.InsertCustomer.ConDistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Contact District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertCustomer.CountryID = '95';
                        this.InsertCustomer.ConCountryID = '95';
                        this.InsertCustomer.ProjectID = this.ProjectID;
                        if (this.InsertCustomer.AccountTypeID == "1") {
                            this.InsertCustomer.AccountTypeID = "2";
                        }
                        else if (this.InsertCustomer.AccountTypeID == "0") {
                            this.InsertCustomer.AccountTypeID = "1";
                        }
                        this.ProjectInsertCustomerService.PostCustomer(this.InsertCustomer).then((function (response) {
                            if (response.data.Result != null) {
                                if (_this.CustomerID > 0) {
                                    $("#errorclose").hide();
                                    $("#errorcloselead").hide();
                                    $("#close").show();
                                    _this.popupMessage("Customer ID - " + _this.CustomerID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                    $("#create-Customer").click();
                                    _this.ProjectCustomerList = _this.ProjectCustomerListService.Find(_this.InsertCustomer.ProjectID).then((function (response) {
                                        _this.ProjectCustomerList = _this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                                    }));
                                }
                                else {
                                    $("#errorclose").hide();
                                    $("#errorcloselead").hide();
                                    $("#close").show();
                                    _this.popupMessage("Customer ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                    $("#create-Customer").click();
                                    _this.ProjectCustomerList = _this.ProjectCustomerListService.Find(_this.InsertCustomer.ProjectID).then((function (response) {
                                        _this.ProjectCustomerList = _this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                                    }));
                                }
                                $('#create-Customer').click();
                                _this.InsertCustomer = null;
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Customer already exists with one of the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                _this.ProjectCustomerList = _this.ProjectCustomerListService.Find(_this.InsertCustomer.ProjectID).then((function (response) {
                                    _this.ProjectCustomerList = _this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                                }));
                            }
                        }));
                    }
                };
                ProjectTrackerController.prototype.State = function (data) {
                    var _this = this;
                    this.StateDropDown = this.StateService.Find(this.InsertCustomer.CountryID = '95').then((function (response) {
                        _this.StateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.District = function (data) {
                    var _this = this;
                    this.CutomerDistrictDropDown = this.DistrictService.Find(this.InsertCustomer.StateID).then((function (response) {
                        _this.CutomerDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.SearchTerm = function () {
                    var name = this.InsertCustomer.CompanyName;
                    var nameArr = [];
                    for (var i = 0; i < name.length; i++) {
                        console.log("Name is : " + name[i]);
                        if (!(name[i] == " ")) {
                            nameArr.push(name[i]);
                        }
                    }
                    var aStr = nameArr.join("");
                    console.log("Name Array : " + aStr);
                    this.InsertCustomer.SearchText = aStr;
                };
                ProjectTrackerController.prototype.ConState = function (data) {
                    var _this = this;
                    this.ConStateDropDown = this.StateService.Find(this.InsertCustomer.ConCountryID = '95').then((function (response) {
                        _this.ConStateDropDown = _this.StateService.GetStateName(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.ConDistrict = function (data) {
                    var _this = this;
                    this.ConDistrictDropDown = this.DistrictService.Find(this.InsertCustomer.ConStateID).then((function (response) {
                        _this.ConDistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.NewCustomerSubmit = function () {
                    var _this = this;
                    $("#ass-btn-loader1").show();
                    if (this.AddNewInsertCust.CompanyName == undefined || this.AddNewInsertCust.CompanyName == null || this.AddNewInsertCust.CompanyName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.AddNewInsertCust.AddCustProjectID == undefined || this.AddNewInsertCust.AddCustProjectID == null || this.AddNewInsertCust.AddCustProjectID == "") {
                        this.HideShow();
                        this.popupMessage("Please select Project Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.AddNewInsertCust.MobileNo == undefined || this.AddNewInsertCust.MobileNo == null || this.AddNewInsertCust.MobileNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Customer MobileNo ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if ((this.AddNewInsertCust.MobileNo != undefined && this.AddNewInsertCust.MobileNo != null && this.AddNewInsertCust.MobileNo != "") && (isNaN(this.AddNewInsertCust.MobileNo) || this.AddNewInsertCust.MobileNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Mobile No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if ((this.AddNewInsertCust.PhoneNo != undefined && this.AddNewInsertCust.PhoneNo != null && this.AddNewInsertCust.PhoneNo != "") && (isNaN(this.AddNewInsertCust.PhoneNo) || this.AddNewInsertCust.PhoneNo.length != 10)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Phone No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.AddNewInsertCust.Email != undefined && this.AddNewInsertCust.Email != null && this.AddNewInsertCust.Email != "" && !(this.EMAIL_REGEXP.test(this.AddNewInsertCust.Email))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.AddNewInsertCust.Pincode == undefined || this.AddNewInsertCust.Pincode == null || this.AddNewInsertCust.Pincode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if ((this.AddNewInsertCust.Pincode != undefined && this.AddNewInsertCust.Pincode != null && this.AddNewInsertCust.Pincode != "") && (isNaN(this.AddNewInsertCust.Pincode) || this.AddNewInsertCust.Pincode.length != 6)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid Postal Code", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.AddNewInsertCust.Address1 == undefined || this.AddNewInsertCust.Address1 == null || this.AddNewInsertCust.Address1 == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Address", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.AddNewInsertCust.StateID == undefined || this.AddNewInsertCust.StateID == null || this.AddNewInsertCust.StateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    else if (this.AddNewInsertCust.DistrictID == undefined || this.AddNewInsertCust.DistrictID == null || this.AddNewInsertCust.DistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Select District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#ass-btn-loader1").hide();
                    }
                    //else if (this.AddNewInsertCust.SalesOfficeID == undefined || this.AddNewInsertCust.SalesOfficeID == null || this.AddNewInsertCust.SalesOfficeID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.LeadType == undefined || this.InsertLead.LeadType == null || this.InsertLead.LeadType == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.LeadCategoryID == undefined || this.InsertLead.LeadCategoryID == null || this.InsertLead.LeadCategoryID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.PurchaseTimelineID == undefined || this.InsertLead.PurchaseTimelineID == null || this.InsertLead.PurchaseTimelineID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Purchase Within", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.CategoryID == undefined || this.InsertLead.CategoryID == null || this.InsertLead.CategoryID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.DivisionID == undefined || this.InsertLead.DivisionID == null || this.InsertLead.DivisionID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.ProductID == undefined || this.InsertLead.ProductID == null || this.InsertLead.ProductID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.ModelID == undefined || this.InsertLead.ModelID == null || this.InsertLead.ModelID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.Quantity == undefined || this.InsertLead.Quantity == null || this.InsertLead.Quantity == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.ChannelID == undefined || this.InsertLead.ChannelID == null || this.InsertLead.ChannelID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.LeadSourceID == undefined || this.InsertLead.LeadSourceID == null || this.InsertLead.LeadSourceID == "") {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if (this.InsertLead.LeadSourceID == "2" && (this.InsertLead.RefUserID == undefined || this.InsertLead.RefUserID == null || this.InsertLead.RefUserID == "")) {
                    //    this.HideShow();
                    //    this.popupMessage("Please Enter Ref User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    //else if ((this.InsertLead.LeadSourceID == "10" || this.InsertLead.LeadSourceID == "24") && (this.InsertLead.CampaignID == undefined || this.InsertLead.CampaignID == null || this.InsertLead.CampaignID == "")) {
                    //    this.HideShow();
                    //    this.popupMessage("Please Select Campaign", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    //}
                    else if (!$("input[name=contactradio]:checked").val()) {
                        this.HideShow();
                        $("#ass-btn-loader1").hide();
                        this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertLead.ContactID = $('#messageCheckbox:checked').val();
                        this.InsertLead.CustomerID = this.AddNewInsertCust.CustomerID;
                        this.InsertLead.CompanyName = this.AddNewInsertCust.CompanyName;
                        this.InsertLead.BusinessPartnerNo = this.AddNewInsertCust.BusinessPartnerNo;
                        this.InsertLead.Email = this.AddNewInsertCust.Email;
                        this.InsertLead.MobileNo = this.AddNewInsertCust.MobileNo;
                        this.InsertLead.PhoneNo = this.AddNewInsertCust.PhoneNo;
                        this.InsertLead.Pincode = this.AddNewInsertCust.Pincode;
                        this.InsertLead.Address1 = this.AddNewInsertCust.Address1;
                        this.InsertLead.Address2 = this.AddNewInsertCust.Address2;
                        this.InsertLead.SalesOfficeID = this.AddNewInsertCust.SalesOfficeID;
                        this.InsertLead.CountryID = '95';
                        this.InsertLead.StateID = this.AddNewInsertCust.StateID;
                        this.InsertLead.DistrictID = this.AddNewInsertCust.DistrictID;
                        this.InsertLead.City = this.AddNewInsertCust.City;
                        this.InsertLead.AddCustProjectID = this.AddNewInsertCust.AddCustProjectID;
                        this.InsertLead.ProjectID = this.ProjectID;
                        if (this.UserID != null || this.UserID != "") {
                            this.InsertLead.UserID = this.UserID;
                        }
                        this.ProjectInsertServicenew.PostLead(this.InsertLead).then((function (response) {
                            debugger;
                            if (response.data.Result == 0) {
                                $("#errorclose").hide();
                                $("#errorcloselead").hide();
                                $("#close").show();
                                $("#ass-btn-loader1").hide();
                                _this.popupMessage("Already exists for this Customer & Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $('#promoter').click();
                                _this.FillGrid(_this.NoOfRds);
                                _this.ProjectCustomerList = _this.ProjectCustomerListService.Find(_this.ProjectID).then((function (response) {
                                    _this.ProjectCustomerList = _this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                                }));
                            }
                            else if (response.data.Result > 0) {
                                $("#errorclose").hide();
                                $("#errorcloselead").hide();
                                $("#close").show();
                                $("#ass-btn-loader1").hide();
                                _this.popupMessage("Created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#promoter').click();
                                _this.FillGrid(_this.NoOfRds);
                                _this.ProjectCustomerList = _this.ProjectCustomerListService.Find(_this.ProjectID).then((function (response) {
                                    _this.ProjectCustomerList = _this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                                }));
                            }
                            else {
                                _this.HideShow();
                                $("#ass-btn-loader1").hide();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $('#promoter').click();
                                _this.FillGrid(_this.NoOfRds);
                                _this.ProjectCustomerList = _this.ProjectCustomerListService.Find(_this.ProjectID).then((function (response) {
                                    _this.ProjectCustomerList = _this.ProjectCustomerListService.GetProjectCustomerList(response.data.Result);
                                }));
                            }
                        }));
                    }
                };
                ProjectTrackerController.prototype.NewContactSubmit = function () {
                    var _this = this;
                    $("#ass-btn-loadercontact").show();
                    if (!$("input[name=contactradio]:checked").val()) {
                        this.HideShow();
                        $("#ass-btn-loadercontact").hide();
                        this.popupMessage("Please Select Contact Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertLead.ContactID = $('#messageCheckboxNew:checked').val();
                        this.InsertLead.CustomerID = $('#LeadCheckbox:checked').val();
                        this.InsertLead.ProjectID = this.ProjectID;
                        if (this.UserID != null || this.UserID != "") {
                            this.InsertLead.UserID = this.UserID;
                        }
                        this.ProjectInsertNewContact.PostNewPromotorContact(this.InsertLead).then((function (response) {
                            debugger;
                            if (response.data.Result > 0) {
                                $("#errorclose").hide();
                                $("#errorcloselead").hide();
                                $("#close").show();
                                $("#ass-btn-loadercontact").hide();
                                _this.popupMessage("Created successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#promoternewContactadd').click();
                                _this.FillGrid(_this.NoOfRds);
                                _this.getContact(_this.ProjectCustomerList[0].CustomerID);
                                _this.ProjectCustomer(_this.ProjectID);
                            }
                            else {
                                _this.HideShow();
                                $("#ass-btn-loadercontact").hide();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                $('#promoternewContactadd').click();
                                _this.FillGrid(_this.NoOfRds);
                                _this.getContact(_this.ProjectCustomerList[0].CustomerID);
                                _this.ProjectCustomer(_this.ProjectID);
                            }
                        }));
                    }
                };
                ProjectTrackerController.prototype.AddDetails = function () {
                    document.getElementById("txtNewCustomerName").value = "";
                    this.AddNewInsertCust.MobileNo = "";
                    this.AddNewInsertCust.BusinessPartnerNo = "";
                    this.AddNewInsertCust.Pincode = "";
                    this.AddNewInsertCust.Email = "";
                    this.AddNewInsertCust.PhoneNo = "";
                    this.AddNewInsertCust.Address1 = "";
                    this.AddNewInsertCust.CountryID = "";
                    this.AddNewInsertCust.StateID = "";
                    this.AddNewInsertCust.DistrictID = "";
                    this.AddNewInsertCust.City = "";
                    this.AddNewInsertCust.AddCustProjectID = "";
                    this.InsertLead.LeadType = "";
                    this.InsertLead.AddCustProjectID = "";
                    this.InsertLead.SalesOfficeID = "";
                    this.InsertLead.LeadCategoryID = "";
                    this.InsertLead.PurchaseTimelineID = "";
                    this.InsertLead.CategoryID = "";
                    this.InsertLead.DivisionID = "";
                    this.InsertLead.ProductID = "";
                    this.InsertLead.ModelID = "";
                    this.InsertLead.Quantity = "";
                    this.InsertLead.ChannelID = "";
                    this.InsertLead.LeadSourceID = "";
                    this.InsertLead.CampaignID = "";
                    this.InsertLead.Comments = "";
                    $("#NewexistingCustomerList").hide();
                    $("#NewexistingLeadList").hide();
                    $("#NewexistingContactList").hide();
                };
                ProjectTrackerController.prototype.Clear = function () {
                    this.InsertLead = null;
                    this.AddNewInsertCust = null;
                    this.Contactinfo = null;
                    $("#NewexistingCustomerList").hide();
                    $("#NewexistingLeadList").hide();
                    $("#NewexistingContactList").hide();
                };
                ProjectTrackerController.prototype.CreateNewCust = function () {
                    this.InsertCustomer.CustomerID = "";
                    this.InsertCustomer.SearchText = "";
                    this.InsertCustomer.CompanyName = "";
                    this.InsertCustomer.ParentCustomerID = "";
                    this.InsertCustomer.MobileNo = "";
                    this.InsertCustomer.Email = "";
                    this.InsertCustomer.Address1 = "";
                    this.InsertCustomer.Address2 = "";
                    this.InsertCustomer.CustomerStatusID = "";
                    this.InsertCustomer.DistrictID = "";
                    this.InsertCustomer.IndustryDivisionID = "";
                    this.InsertCustomer.CreatedBy = "";
                    this.InsertCustomer.PinCode = "";
                    this.InsertCustomer.AccountTypeID = "";
                    this.InsertCustomer.IndustrialSegmentID = "";
                    this.InsertCustomer.SalesAreaID = "";
                    this.InsertCustomer.PhoneNo = "";
                    this.InsertCustomer.Fax = "";
                    this.InsertCustomer.SalesOfficeID = "";
                    this.InsertCustomer.BusinessPartnerNO = "";
                    this.InsertCustomer.Status = "1";
                    this.InsertCustomer.RetCustomerID = "";
                    this.InsertCustomer.IsNational = "0";
                    this.InsertCustomer.CustomerRatingID = "";
                    this.InsertCustomer.StateID = "";
                    this.InsertCustomer.City = "";
                    this.InsertCustomer.UpdatedBy = "";
                    this.InsertCustomer.CountryID = "";
                    this.InsertCustomer.ContactName = "";
                    this.InsertCustomer.DesignationID = "";
                    this.InsertCustomer.ConPhoneNo = "";
                    this.InsertCustomer.ConMobileNo = "";
                    this.InsertCustomer.ParentCustomer = "";
                    this.InsertCustomer.CustomerSizeID = "";
                    this.InsertCustomer.SiteAddress = "";
                    this.InsertCustomer.Area = "";
                    this.InsertCustomer.Comments = "";
                    this.InsertCustomer.DivisionID = "";
                    this.InsertCustomer.ConFax = "";
                    this.InsertCustomer.ConEmail = "";
                    this.InsertCustomer.ContactID = "";
                    this.InsertCustomer.BillingAddress = "";
                    this.InsertCustomer.IndustryCodeID = "";
                    this.InsertCustomer.ConStateID = "";
                    this.InsertCustomer.ConDistrictID = "";
                    this.InsertCustomer.ConCity = "";
                    this.InsertCustomer.ConCountryID = "";
                };
                ProjectTrackerController.prototype.CreateNewContact = function () {
                    this.AddNewInsertContact.SAPID = "";
                    this.AddNewInsertContact.ContactName = "";
                    this.AddNewInsertContact.MobileNo = "";
                    this.AddNewInsertContact.Email = "";
                    this.AddNewInsertContact.PhoneNo = "";
                    this.AddNewInsertContact.CountryID = "";
                    this.AddNewInsertContact.StateID = "";
                    this.AddNewInsertContact.DistrictID = "";
                    this.AddNewInsertContact.City = "";
                    this.AddNewInsertContact.PostalCode = "";
                    this.AddNewInsertContact.Address = "";
                    this.AddNewInsertContact.FOPID = "";
                    this.AddNewInsertContact.DepartmentID = "";
                };
                ProjectTrackerController.prototype.IsValidMobile = function (value) {
                    var re = /^[A-Za-z]+$/;
                    if (value == undefined || value == null || value == "") {
                        return { Result: "True", Message: 'Success' };
                        //return { Result: "False", Message: 'Please Enter Mobile No' }
                    }
                    else if (isNaN(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Mobile No' };
                    }
                    else if (value.length != 10) {
                        return { Result: "False", Message: 'Mobile No must be 10 digit' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                ProjectTrackerController.prototype.IsValidMobile1 = function (value) {
                    var re = /^[A-Za-z]+$/;
                    if (value == undefined || value == "") {
                        return { Result: "True", Message: 'Success' };
                    }
                    else if (isNaN(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Mobile No' };
                    }
                    else if (value.length != 10) {
                        return { Result: "False", Message: 'Mobile No must be 10 digit' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                ProjectTrackerController.prototype.IsValidEmail = function (value) {
                    //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    var EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    if (value == undefined || value == null || value == "") {
                        return { Result: "True", Message: 'Success' };
                    }
                    else if (!EMAIL_REGEXP.test(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Email' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                ProjectTrackerController.prototype.AddPromotorContact = function () {
                    var _this = this;
                    if (!$("input[name=leadradio]:checked").val()) {
                        $("#errorclose").hide();
                        $("#errorcloselead").show();
                        $("#close").hide();
                        this.popupMessage("Please Select Promoter Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#hidepopupcontact").hide();
                    }
                    else {
                        this.PromotorCustomerID = $('#LeadCheckbox:checked').val();
                        this.Contactinfo = this.ContactInfoService.Find(this.PromotorCustomerID).then((function (response) {
                            _this.Contactinfo = _this.ContactInfoService.GetLeadContactInfo(response.data.Result);
                        }));
                        $("#hidepopupcontact").show();
                    }
                };
                ProjectTrackerController.prototype.CreateLeadAdd = function () {
                    debugger;
                    $('#Campaignfield').hide();
                    $('#UserNamefield').hide();
                    this.InsertLead.CampaignID = "";
                    this.InsertLead.RefUserID = "";
                    this.InsertLead.RefUserName = "";
                    if (!$("input[name=leadradio]:checked").val()) {
                        $("#errorclose").hide();
                        $("#errorcloselead").show();
                        $("#close").hide();
                        this.popupMessage("Please Select Promoter Checkbox", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        $("#hidepopup").hide();
                    }
                    else {
                        this.PromotorInsertCust.CustomerID = $('#LeadCheckbox:checked').val();
                        this.getContact(this.PromotorInsertCust.CustomerID);
                        $("#hidepopup").show();
                    }
                };
                ProjectTrackerController.prototype.ErrorcloseForCreateLead = function () {
                    $('#MyLead').click();
                    $('#promoternewContactadd').click();
                };
                ProjectTrackerController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.CreateLeadList = this.ProjectCreateLeadListService.Find(this.ProjectID).then((function (response) {
                        _this.CreateLeadList = _this.ProjectCreateLeadListService.GetCreateLeadlist(response.data.Result);
                        _this.GetActivityList();
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
                ProjectTrackerController.prototype.GetActivityList = function () {
                    var _this = this;
                    debugger;
                    this.ActivitySearch.ProjectStartDate = this.ProjectDataInfo[0].ProjectStartDate;
                    this.ActivitySearch.CompletionDate = this.ProjectDataInfo[0].CompletionDate;
                    this.ActivitySearch.ProjectID = this.ProjectID;
                    this.ActivityList = this.ProjectActivityListService.FindAct(this.ActivitySearch).then((function (response) {
                        _this.ActivityList = _this.ProjectActivityListService.GetUserActList(response.data.Result);
                    }));
                };
                ProjectTrackerController.prototype.CheckSelectActivity = function () {
                    debugger;
                    if ($("#select-all-activity").prop('checked') == true) {
                        $("#all-activity").show();
                        $("#specific-activity").hide();
                        $("#all-Equipment").show();
                        $("#specific-Equipment").hide();
                    }
                    else {
                        $("#specific-activity").show();
                        $("#all-activity").hide();
                        $("#all-Equipment").hide();
                        $("#specific-Equipment").show();
                    }
                };
                ProjectTrackerController.prototype.Validate = function (data) {
                    var _this = this;
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
                        $('#txtpurchase').val(_this.CustomerView.Title);
                        $('#txtcomm').val(_this.CustomerView.Comments);
                        $('#txtleadcat').val(_this.CustomerView.LeadCategory);
                        $('#txtspeci').val(_this.CustomerView.CreateComment);
                        $('#txtsource').val(_this.CustomerView.SourceID);
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
                ProjectTrackerController.prototype.EditActivity = function (data) {
                    var _this = this;
                    $(".editactivity").prop("disabled", true);
                    $("#EditContact").show();
                    $("#ContactList").hide();
                    var d = new Date();
                    var c = new Date($("#date").val());
                    if (c > d) {
                        $("#ddlStatus").prop("disabled", true);
                    }
                    else {
                        $("#ddlStatus").prop("disabled", false);
                    }
                    this.EditService.Find(data).then((function (response) {
                        _this.EditActivites = _this.EditService.GetEdit(response.data.Result);
                        _this.EditActivites.SAPID = _this.Contactinfo.BusinessPartnerNo;
                        _this.EditActivites.ContactID = _this.Contactinfo.ContactID;
                        if (_this.EditActivites.ptype == "YTBA") {
                            _this.EditActivites.ptype = 'Business';
                            $("#customer-contact-detail").show();
                            $("#ddlActivityLetter").hide();
                        }
                        if (_this.EditActivites.ptype == "YTEA") {
                            _this.EditActivites.ptype = 'Sales';
                            $("#customer-contact-detail").hide();
                            $("#Activity-Against").show();
                            $("#ddlActivityLetter").show();
                            _this.Contactinfo = new Array();
                            _this.PromotorInsertCust = new CustomerDetails();
                        }
                        if (_this.EditActivites.cate == "1") {
                            _this.EditActivites.cate = 'Visit';
                        }
                        if (_this.EditActivites.cate == "2") {
                            _this.EditActivites.cate = 'Call';
                        }
                        //if (this.EditActivites.ActivityStatus = "Pending") {
                        //    this.EditActivites.ActivityStatus = '1';
                        //}
                        //else if (this.EditActivites.ActivityStatus = "Rejected") {
                        //    this.EditActivites.ActivityStatus = '2';
                        //}
                        //else {
                        //    this.EditActivites.ActivityStatus = '3';
                        //}
                        if (_this.EditActivites.agnst == "4") {
                            $("#ddlLetterCoo").show();
                            _this.EditActivites.ltter = _this.EditActivites.ltter;
                        }
                        else {
                            $("#ddlLetterCoo").hide();
                        }
                        $('#date').val(_this.EditActivites.date);
                        $("myModalAddNew").show();
                        document.getElementById("txtCustomerName").value = _this.EditActivites.CompanyName;
                    }));
                };
                ProjectTrackerController.prototype.next = function () {
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
                ProjectTrackerController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                ProjectTrackerController.prototype.back = function () {
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
                ProjectTrackerController.$inject = ["ProjectDataService", "ProjectTypeService", "ProjectStageService", "ProjectIndustryService",
                    "ProjectOwnershipService", "ProjectSourceService", "$location", "ProjectCustomerListService",
                    "ProjectContactCustomerListService", "LeadTypeddService", "SalesOfficeService", "LeadCategoryDDService",
                    "PurchaseTimelineService", "CategoryddService", "CustomerSapIdAutoFillService", "ProjectLeadCustomerDetailsService",
                    "DistrictddService", "StateDDService", "CountryService", "ProjectLeadCustomerGeService", "ProjLeadContactDetailsService", "LeadDetailsService", "InsertLeadDetailsService", "DivisionDDPService", "ProductddService", "LeadTypeProductService1",
                    "ChannelDDService", "LeadSourceDetailsService", "InsertContactService", "DesignationService", "InsertCustomerService", "StateddService", "DepartmentService", "IndustrialSegmentService", "DivisionDDService", "IndustryDivisionService", "SalesAreaService", "CustomerClassService", "LeadCustomerGetDetailsService", "ProjectCreateLeadListService",
                    "ProjectInsertService", "CustomerViewService", "ProjectInsertCustomerService", "ProjectInsertServicenew", "CustProjectTypeService", "AddCustProjectTypeService", "CreateProjectService", "MultipleUserMasterService", "EmployeeAtofillService", "UserCodeAutoFillService", "CampaignDetailsService", "ZoneDDService", "DeleteContactService", "ProjectActivityListService", "EditService", "ProjectInsertNewContact", "DeleteProjectCustomerService", "$cookieStore"];
                return ProjectTrackerController;
            }());
            var ProjectTrackerComponentController = /** @class */ (function () {
                function ProjectTrackerComponentController() {
                    this.controller = ProjectTrackerController;
                    this.templateUrl = "/Scripts/App/ProjectTracker/Template/ProjectTracker.html";
                }
                ProjectTrackerComponentController.Name = "projecttracker";
                return ProjectTrackerComponentController;
            }());
            app.AddComponent(ProjectTrackerComponentController.Name, new ProjectTrackerComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProjectTrackerComponent.js.map