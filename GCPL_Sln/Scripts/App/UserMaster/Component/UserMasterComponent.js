var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var insert = GCPL.Model.UserMasterEditModel;
            var Search = GCPL.Model.RegionCheckModel;
            var ZoneSearch = GCPL.Model.ZoneCheckModel;
            var UserMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function UserMasterController(_UserMService, _Eservice, _DivisionService, _SalesOfficeService, _DepartmentService, _RoleService, _InsertService, _RegionService, _CountryService, _StateDDService, _DistrictService, _ResetService, _UserDepartmentService, _CustomerDivisionDDService, _CheckRegionService, _ZoneNameService, _ZoneDDService, _DesignationddService, _getAutoSalesrep1) {
                    this.FillUserMasterGrid = null;
                    this.UserMasterHeaderModel = null;
                    this.DivisionDropDown = null;
                    this.SalesOfficeDropDown = null;
                    this.DepartmentDropDown = null;
                    this.RoleDropDown = null;
                    this.DesignationDropDown = null;
                    this.RegionDropDown = null;
                    this.InsertUser2 = null;
                    this.CountryDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    //StateID = null;
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.UserDepartment = null;
                    this.UserMasterInsertModel = null;
                    this.CustomerDivisionDD = null;
                    this.SearchRegion = null;
                    this.CheckRegion = null;
                    this.ZoneDropDown = null;
                    this.CheckZone = null;
                    this.SearchZone = null;
                    this.ZoneDD = null;
                    this.InserUserMaster = null;
                    this.UserMService = _UserMService;
                    this.UserMasterHeaderModel = new Array();
                    this.Eservice = _Eservice;
                    this.DivisionService = _DivisionService;
                    this.SalesOfficeService = _SalesOfficeService;
                    this.DepartmentService = _DepartmentService;
                    this.RoleService = _RoleService;
                    this.InsertService = _InsertService;
                    this.RegionService = _RegionService;
                    //this.InserAttachmentPricing = new insert();
                    //this.CountryService = _CountryService;
                    this.CountryService = _CountryService;
                    this.StateDDService = _StateDDService;
                    this.DistrictService = _DistrictService;
                    this.ResetService = _ResetService;
                    this.UserDepartmentService = _UserDepartmentService;
                    this.CustomerDivisionDDService = _CustomerDivisionDDService;
                    this.CheckRegionService = _CheckRegionService;
                    this.SearchRegion = new Search();
                    this.ZoneNameService = _ZoneNameService;
                    this.SearchZone = new ZoneSearch();
                    this.ZoneDDService = _ZoneDDService;
                    this.DesignationddService = _DesignationddService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.InserUserMaster = new insert();
                }
                UserMasterController.prototype.$onInit = function () {
                    this.Init();
                    $('#search-btn-loader').hide();
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
                };
                //Page Load Define Values//
                UserMasterController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    // this.Search();
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                    this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((function (response) {
                        _this.SalesOfficeDropDown = _this.SalesOfficeService.GetSalesOffice(response.data.Result);
                        _this.SearchZone.SalesOfficeID = _this.InserUserMaster.SalesOfficeID;
                    }));
                    this.DepartmentDropDown = this.DepartmentService.Find().then((function (response) {
                        _this.DepartmentDropDown = _this.DepartmentService.GetDepartment(response.data.Result);
                    }));
                    this.RoleDropDown = this.RoleService.Find().then((function (response) {
                        _this.RoleDropDown = _this.RoleService.GetRole(response.data.Result);
                    }));
                    this.DesignationDropDown = this.DesignationddService.FindDesignation().then((function (response) {
                        _this.DesignationDropDown = _this.DesignationddService.GetDesignation(response.data.Result);
                    }));
                    this.RegionDropDown = this.RegionService.Find().then((function (response) {
                        _this.RegionDropDown = _this.RegionService.GetRegion(response.data.Result);
                    }));
                    this.CountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.CountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.UserDepartment = this.UserDepartmentService.Find().then((function (response) {
                        _this.UserDepartment = _this.UserDepartmentService.GetUserDepartment(response.data.Result);
                    }));
                    this.CustomerDivisionDD = this.CustomerDivisionDDService.Find().then((function (response) {
                        _this.CustomerDivisionDD = _this.CustomerDivisionDDService.GetCustomerDivisionDDnew(response.data.Result);
                    }));
                    this.StateDropDown = this.StateDDService.Find().then((function (response) {
                        _this.StateDropDown = _this.StateDDService.GetState(response.data.Result);
                        _this.SearchRegion.StateID = _this.InserUserMaster.StateID;
                    }));
                    this.ZoneDD = this.ZoneDDService.Find().then((function (response) {
                        _this.ZoneDD = _this.ZoneDDService.Getzonenew(response.data.Result);
                    }));
                    $("#txtName").autocomplete({
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
                            that.UserMasterHeaderModel.SearchText = ui.item.id;
                            //console.log(that.InsertLead.RefUserName);
                        },
                        change: function () {
                        }
                    });
                };
                UserMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.FillUserMasterGrid = this.UserMService.FindGrid(this.UserMasterHeaderModel).then((function (response) {
                        console.log(_this.UserMasterHeaderModel);
                        $('#search-btn-loader').hide();
                        _this.FillUserMasterGrid = _this.UserMService.GetUserGrid(response.data.Result);
                        if (_this.FillUserMasterGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillUserMasterGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.FillUserMasterGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillUserMasterGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        _this.maxPages = (that.incre / that.numRecords);
                        _this.ShowBack = false;
                        _this.ShowNext = that.maxPages > 1 ? true : false;
                        _this.shownItems = _this.FillUserMasterGrid.slice(0, that.numRecords);
                    }));
                };
                UserMasterController.prototype.Search = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#search-btn-loader').show();
                };
                //State(data: any): void {
                //    this.StateDropDown = this.StateService.Find(this.InserUserMaster.CountryID = '95').then((response => {
                //        this.StateDropDown = this.StateService.GetStateName(response.data.Result);
                //    }));
                //}
                UserMasterController.prototype.District = function (data) {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.InserUserMaster.StateID).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                        _this.SearchRegion.DistrictID = _this.InserUserMaster.DistrictID;
                    }));
                };
                UserMasterController.prototype.Region = function () {
                    var _this = this;
                    this.SearchRegion.StateID = this.InserUserMaster.StateID;
                    this.SearchRegion.DistrictID = this.InserUserMaster.DistrictID;
                    this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((function (response) {
                        _this.CheckRegion = _this.CheckRegionService.GetRegion(response.data.Result);
                        _this.RegionDropDown[0].RegionID = _this.CheckRegion[0].RegionID;
                    }));
                };
                UserMasterController.prototype.Zone = function () {
                    var _this = this;
                    this.SearchZone.SalesOfficeID = this.InserUserMaster.SalesOfficeID;
                    this.CheckZone = this.ZoneNameService.FindGrid(this.SearchZone).then((function (response) {
                        _this.CheckZone = _this.ZoneNameService.GetZone(response.data.Result);
                        _this.ZoneDD[0].ID = _this.CheckZone[0].ZoneID;
                    }));
                };
                UserMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                UserMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                UserMasterController.prototype.Add = function () {
                    $("#btnResetMac").hide();
                    this.InserUserMaster.EmployeeCode = "";
                    this.InserUserMaster.FirstName = "";
                    this.InserUserMaster.LastName = "";
                    this.InserUserMaster.Email = "";
                    this.InserUserMaster.RoleID = "";
                    this.InserUserMaster.StateID = "";
                    this.InserUserMaster.DistrictID = "";
                    this.InserUserMaster.RegionID = "";
                    this.InserUserMaster.DateCreated = "";
                    this.InserUserMaster.Status = "";
                    this.InserUserMaster.UserDepartment = "";
                    this.InserUserMaster.SalesOfficeID = "";
                    this.InserUserMaster.CustDivision = "";
                    this.InserUserMaster.PhoneNo = "";
                    //this.InserUserMaster.CountryID = "";
                    this.InserUserMaster.Password = "";
                    this.InserUserMaster.DesignationId = "";
                };
                UserMasterController.prototype.ResetMac = function () {
                    var _this = this;
                    this.ResetService.PostReset(this.InserUserMaster).then(function (response) {
                        if (response.data.Result != null) {
                            $("#errorclose").hide();
                            $("#close").show();
                            _this.popupMessage("Mac Address is Reset", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            $('#myModalAddNew').click();
                        }
                        else {
                            _this.HideShow();
                            _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                        var that = _this;
                        _this.FillUserMasterGrid = _this.UserMService.FindGrid(_this.UserMasterHeaderModel).then((function (response) {
                            console.log(_this.UserMasterHeaderModel);
                            _this.FillUserMasterGrid = _this.UserMService.GetUserGrid(response.data.Result);
                            console.log(_this.FillUserMasterGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillUserMasterGrid.slice(0, that.numRecords);
                        }));
                    });
                };
                UserMasterController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InserUserMaster.EmployeeCode == undefined || this.InserUserMaster.EmployeeCode == null || this.InserUserMaster.EmployeeCode == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter EmployeeCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.FirstName == undefined || this.InserUserMaster.FirstName == null || this.InserUserMaster.FirstName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter FirstName", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.LastName == undefined || this.InserUserMaster.LastName == null || this.InserUserMaster.LastName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter LastName", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.Email == undefined || this.InserUserMaster.Email == null || this.InserUserMaster.Email == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.Password == undefined || this.InserUserMaster.Password == null || this.InserUserMaster.Password == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Password", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.RoleID == undefined || this.InserUserMaster.RoleID == null || this.InserUserMaster.RoleID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Role", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.UserDepartment == undefined || this.InserUserMaster.UserDepartment == null || this.InserUserMaster.UserDepartment == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Department", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.CustDivision == undefined || this.InserUserMaster.CustDivision == null || this.InserUserMaster.CustDivision == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.DesignationId == undefined || this.InserUserMaster.DesignationId == null || this.InserUserMaster.DesignationId == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Designation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.SalesOfficeID == undefined || this.InserUserMaster.SalesOfficeID == null || this.InserUserMaster.SalesOfficeID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.StateID == undefined || this.InserUserMaster.StateID == null || this.InserUserMaster.StateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.DistrictID == undefined || this.InserUserMaster.DistrictID == null || this.InserUserMaster.DistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserUserMaster.Status == undefined || this.InserUserMaster.Status == null || this.InserUserMaster.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.IsValidPhone(this.InserUserMaster.PhoneNo).Result == "False") {
                        this.ShowHidePopUp(this.IsValidPhone(this.InserUserMaster.PhoneNo).Message);
                    }
                    else {
                        this.InserUserMaster.CountryID = '95';
                        this.InserUserMaster.RegionID = this.CheckRegion.RegionID;
                        this.InsertService.PostUserMaster(this.InserUserMaster).then(function (response) {
                            console.log(_this.InserUserMaster);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("User Saved Successfully ", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InserUserMaster = null;
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        });
                    }
                };
                UserMasterController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                UserMasterController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                UserMasterController.prototype.EditUserMaster = function (data) {
                    var _this = this;
                    $("#txtpwd").prop("disabled", true);
                    this.Eservice.Find(data).then((function (response) {
                        _this.InserUserMaster = _this.Eservice.GetUserMasterEdit(response.data.Result);
                        $('#txtDivision').val(_this.InserUserMaster.CustDivision);
                        $('#txtSalesOffice').val(_this.InserUserMaster.SalesOfficeID);
                        $('#txtpwd').val(_this.InserUserMaster.Password);
                        // $('#txtDistrict').val(this.InserUserMaster.DistrictID);
                        // this.District(this.InserUserMaster.StateID);
                        if (_this.InserUserMaster.Status == "True") {
                            _this.InserUserMaster.Status = "1";
                        }
                        else {
                            _this.InserUserMaster.Status = "0";
                        }
                        if (_this.InserUserMaster.CountryID != undefined && _this.InserUserMaster.CountryID != null && _this.InserUserMaster.CountryID != "" && _this.InserUserMaster.CountryID != "0") {
                            _this.InserUserMaster.CountryID = _this.InserUserMaster.CountryID.toString();
                        }
                        _this.InserUserMaster.StateID = _this.InserUserMaster.StateID.toString();
                        if (_this.InserUserMaster.StateID != undefined && _this.InserUserMaster.StateID != null && _this.InserUserMaster.StateID != "" && _this.InserUserMaster.StateID != "0") {
                            _this.InserUserMaster.StateID = _this.InserUserMaster.StateID.toString();
                            //  this.District(this.InserUserMaster.StateID);
                            var dist = _this.InserUserMaster.DistrictID;
                            _this.DistrictDropDown = _this.DistrictService.Find(_this.InserUserMaster.StateID).then((function (response) {
                                _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                                _this.InserUserMaster.DistrictID = dist;
                            }));
                        }
                        //this.StateID = this.InserUserMaster.StateID;
                        _this.SearchRegion.StateID = _this.InserUserMaster.StateID;
                        _this.SearchRegion.DistrictID = _this.InserUserMaster.DistrictID;
                        _this.InserUserMaster.RegionID = "";
                        _this.InserUserMaster.DesignationId = _this.InserUserMaster.DesignationId;
                        if (_this.SearchRegion.StateID != undefined || _this.SearchRegion.StateID != null || _this.SearchRegion.StateID != "") {
                            _this.CheckRegion = _this.CheckRegionService.Find(_this.SearchRegion).then((function (response) {
                                _this.CheckRegion = _this.CheckRegionService.GetRegion(response.data.Result);
                                _this.RegionDropDown[0].RegionID = _this.CheckRegion[0].RegionID;
                            }));
                        }
                        else { }
                        _this.SearchZone.SalesOfficeID = _this.InserUserMaster.SalesOfficeID;
                        _this.InserUserMaster.ZoneID = "";
                        if (_this.SearchZone.SalesOfficeID != undefined || _this.SearchZone.SalesOfficeID != null || _this.SearchZone.SalesOfficeID != "") {
                            _this.CheckZone = _this.ZoneNameService.FindGrid(_this.SearchZone).then((function (response) {
                                _this.CheckZone = _this.ZoneNameService.GetZone(response.data.Result);
                                _this.ZoneDD[0].ID = _this.CheckZone[0].ZoneID;
                            }));
                        }
                        $("myModalAddNew").show();
                    }));
                };
                UserMasterController.prototype.IsValidEmail = function (value) {
                    //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    var EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    if (value == undefined || value == "") {
                        return { Result: "True", Message: 'Success' };
                    }
                    else if (!EMAIL_REGEXP.test(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Email' };
                    }
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                UserMasterController.prototype.IsValidPhone = function (value) {
                    var re = /^\+?\d{2}[- ]?\d{3}[- ]?\d{6}$/;
                    //if (value == undefined || value == "") {
                    //    return { Result: "True", Message: 'Success' }
                    //}
                    if (isNaN(value)) {
                        return { Result: "False", Message: 'Please Enter Valid Phone No' };
                    }
                    //else if (value.length != 10) {
                    //    return { Result: "False", Message: 'Phone No must have 10 digits' }
                    //}
                    else {
                        return { Result: "True", Message: 'Success' };
                    }
                };
                UserMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillUserMasterGrid.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                UserMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillUserMasterGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                UserMasterController.prototype.Clear = function () {
                    document.getElementById("txtName").value = "";
                    this.UserMasterHeaderModel.SearchText = "";
                    this.UserMasterHeaderModel.SearchEmployeeCode = "";
                    this.UserMasterHeaderModel.SearchPhoneNo = "";
                    this.UserMasterHeaderModel.Status = "";
                    //this.CategorySearch = "";
                    $("#txtModel").val("");
                    $("#txtPhone").val("");
                    $("#ddlstatus").val("");
                    //  $("#txtName").val("");
                };
                UserMasterController.prototype.downloadCSV = function (csv, filename) {
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
                UserMasterController.prototype.exportTableToCSV = function (filename) {
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
                UserMasterController.$inject = ["UserMasterService", "UserMasterEditService", "DivisionService", "SalesOfficeddService", "DepartmentddService",
                    "RoleddService", "InsertUserService", "RegionddService", "CountryService", "StateDDService", "DistrictddService", "ResetMacService",
                    "DepartmentDDLService", "CustomerDivisionDDService", "CheckRegionService", "GetZoneNameService", "ZoneDDService", "DesignationddService", "EmployeeAtofillService"];
                return UserMasterController;
            }());
            var UserMasterComponentController = /** @class */ (function () {
                function UserMasterComponentController() {
                    this.controller = UserMasterController;
                    this.templateUrl = "/Scripts/App/UserMaster/Template/_UserMaster.html";
                }
                UserMasterComponentController.Name = "usermastercomponent";
                return UserMasterComponentController;
            }());
            app.AddComponent(UserMasterComponentController.Name, new UserMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UserMasterComponent.js.map