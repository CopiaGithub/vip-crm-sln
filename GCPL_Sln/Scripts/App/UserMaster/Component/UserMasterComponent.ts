namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import UMModel = GCPL.Model.UserMasterHeaderModel;
    import insert = GCPL.Model.UserMasterEditModel;
    import customer = GCPL.Model.CustomerDivisionDDModel;
    import Search = GCPL.Model.RegionCheckModel;
    import ChechRegionID = GCPL.Model.CheckRegionModel;
    import ZoneSearch = GCPL.Model.ZoneCheckModel;
    import CheckZoneID = GCPL.Model.CheckZoneModel;
  

    interface IUserMasterController {
      
        EditUserMaster(data: any): void;
      
       
        Search(): void;
        Submit(): void;
        ResetMac(): void
        DivisionDropDown: Array<Model.DivisionddlModel>
        SalesOfficeDropDown: Array<Model.SalesOfficeModel>
        DepartmentDropDown: Array<Model.DepartmentDDModel>
        RoleDropDown: Array<Model.RoleDDModel>
        RegionDropDown: Array<Model.RegionDDModel>
        CountryDropDown: Array<Model.CountryddlModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        //StateID: Array<Model.StateddlModel>
        UserDepartment: Array<Model.UserDepartmentDDModel>
        CustomerDivisionDD: ng.IPromise<Utility.Ajax.IResponse>;
        CheckRegion: Array<Model.CheckRegionModel>; 
        ZoneDropDown: Array<Model.ZoneModel>
        ZoneDD: ng.IPromise<Utility.Ajax.IResponse>;
        CheckZone: Array<Model.CheckZoneModel>
        DesignationDropDown: Array<Model.DesignationDDModel>
    }

    class UserMasterController implements IUserMasterController {
        private UserMService: Service.IUserMasterService;
        FillUserMasterGrid = null;
        UserMasterHeaderModel = null;
        DivisionDropDown = null;
        SalesOfficeDropDown = null;
        DepartmentDropDown = null;
        RoleDropDown = null;
        DesignationDropDown = null;
        RegionDropDown = null;
        InsertUser2 = null;
        CountryDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        //StateID = null;
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        UserDepartment = null;
        UserMasterInsertModel = null;
        CustomerDivisionDD = null;
        SearchRegion: GCPL.Model.RegionCheckModel = null;
        CheckRegion = null;
        ZoneDropDown = null;
        CheckZone = null;
        SearchZone: GCPL.Model.ZoneCheckModel = null;
        ZoneDD = null;

        private InsertService: Service.IInsertUserService;
        InserUserMaster: GCPL.Model.UserMasterEditModel = null;
        Eservice: Service.IUserMasterEditService;
        private DivisionService: Service.IDivisionService;
        private SalesOfficeService: Service.ISalesOfficeddService;
        private DepartmentService: Service.IDepartmentddService;
        private RoleService: Service.IRoleddService;
        private RegionService: Service.IRegionddService;
        private CountryService: Service.ICountryService;
        private StateDDService: Service.IStateDDService;
        private DistrictService: Service.IDistrictddService;
        private ResetService: Service.IResetMacService;
        private UserDepartmentService: Service.IDepartmentDDLService;
        private CustomerDivisionDDService: Service.ICustomerDivisionDDService;
        private CheckRegionService: Service.ICheckRegionService;
        private ZoneNameService: Service.IGetZoneNameService;
        private ZoneDDService: Service.IZoneDDService;
        private DesignationddService: Service.IDesignationddService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
       
        static $inject = ["UserMasterService", "UserMasterEditService", "DivisionService", "SalesOfficeddService", "DepartmentddService",
            "RoleddService", "InsertUserService", "RegionddService", "CountryService", "StateDDService", "DistrictddService", "ResetMacService",
            "DepartmentDDLService", "CustomerDivisionDDService", "CheckRegionService", "GetZoneNameService", "ZoneDDService", "DesignationddService","EmployeeAtofillService"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_UserMService: Service.IUserMasterService, _Eservice: Service.IUserMasterEditService, _DivisionService: Service.IDivisionService,
            _SalesOfficeService: Service.ISalesOfficeddService, _DepartmentService: Service.IDepartmentddService, _RoleService: Service.IRoleddService,
            _InsertService: Service.IInsertUserService, _RegionService: Service.IRegionddService, _CountryService: Service.ICountryService, _StateDDService: Service.IStateDDService, _DistrictService: Service.IDistrictddService,
            _ResetService: Service.IResetMacService, _UserDepartmentService: Service.IDepartmentDDLService, _CustomerDivisionDDService: Service.ICustomerDivisionDDService, _CheckRegionService: Service.ICheckRegionService,
            _ZoneNameService: Service.IGetZoneNameService, _ZoneDDService: Service.IZoneDDService, _DesignationddService: Service.IDesignationddService, _getAutoSalesrep1: Service.IEmployeeAtofillService)
        
        {
            this.UserMService = _UserMService;
            this.UserMasterHeaderModel = new Array<GCPL.Model.UserMasterHeaderModel>();
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
            this.DesignationddService= _DesignationddService;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.InserUserMaster = new insert();
        }



        $onInit() {
            this.Init();
            $('#search-btn-loader').hide();
          
            /* Sorting */

            var th = document.getElementsByTagName('th')
            for (let c = 0; c < th.length; c++) {
                th[c].addEventListener('click', item(c))

            }
            function item(c) {
                return function () {
                    console.log(c)
                    sortTable(c)
                }
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
           
            
        }

        //Page Load Define Values//
        Init(): void {
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();
           // this.Search();

        
            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);
                
            }));
            this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.SalesOfficeDropDown = this.SalesOfficeService.GetSalesOffice(response.data.Result);
                this.SearchZone.SalesOfficeID = this.InserUserMaster.SalesOfficeID;
            }));
            this.DepartmentDropDown = this.DepartmentService.Find().then((response => {
                this.DepartmentDropDown = this.DepartmentService.GetDepartment(response.data.Result);

            }));
            
            this.RoleDropDown = this.RoleService.Find().then((response => {
                this.RoleDropDown = this.RoleService.GetRole(response.data.Result);

            }));

            this.DesignationDropDown = this.DesignationddService.FindDesignation().then((response => {
                this.DesignationDropDown = this.DesignationddService.GetDesignation(response.data.Result);

            }));
            this.RegionDropDown = this.RegionService.Find().then((response => {
                this.RegionDropDown = this.RegionService.GetRegion(response.data.Result);

            }));
            this.CountryDropDown = this.CountryService.Find().then((response => {
                this.CountryDropDown = this.CountryService.GetCountryName(response.data.Result);

            }));

            this.UserDepartment = this.UserDepartmentService.Find().then((response => {
                this.UserDepartment = this.UserDepartmentService.GetUserDepartment(response.data.Result);

            }));
            this.CustomerDivisionDD = this.CustomerDivisionDDService.Find().then((response => {
                this.CustomerDivisionDD = this.CustomerDivisionDDService.GetCustomerDivisionDDnew(response.data.Result);
            }));
            
            this.StateDropDown = this.StateDDService.Find().then((response => {
                this.StateDropDown = this.StateDDService.GetState(response.data.Result);
                this.SearchRegion.StateID = this.InserUserMaster.StateID;
            }));
            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);


            }));
            
           
            
            $("#txtName").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            
                            return {

                                label: item.Name,
                                value: item.Name,
                                id: item.userid

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    
                    
                    that.UserMasterHeaderModel.SearchText = ui.item.id;
                    //console.log(that.InsertLead.RefUserName);

                },
                change: function () {

                }
            });

        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.FillUserMasterGrid = this.UserMService.FindGrid(this.UserMasterHeaderModel).then((response => {
                console.log(this.UserMasterHeaderModel);
                $('#search-btn-loader').hide();
                this.FillUserMasterGrid = this.UserMService.GetUserGrid(response.data.Result);

                if (this.FillUserMasterGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillUserMasterGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.FillUserMasterGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillUserMasterGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
                
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                this.shownItems = this.FillUserMasterGrid.slice(0, that.numRecords);

            }));
        }
        Search(): void {        
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            $('#search-btn-loader').show();
           
        }
        //State(data: any): void {

        //    this.StateDropDown = this.StateService.Find(this.InserUserMaster.CountryID = '95').then((response => {
        //        this.StateDropDown = this.StateService.GetStateName(response.data.Result);
        //    }));
        //}
        District(data: any): void {
            this.DistrictDropDown = this.DistrictService.Find(this.InserUserMaster.StateID).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                this.SearchRegion.DistrictID = this.InserUserMaster.DistrictID;

            }));
        }
        
        Region(): void {
            
            this.SearchRegion.StateID = this.InserUserMaster.StateID;
            this.SearchRegion.DistrictID = this.InserUserMaster.DistrictID;

            this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((response => {
                this.CheckRegion = this.CheckRegionService.GetRegion(response.data.Result);
                this.RegionDropDown[0].RegionID = this.CheckRegion[0].RegionID;
                
            })); 
        }
        Zone(): void {
            this.SearchZone.SalesOfficeID = this.InserUserMaster.SalesOfficeID;

            this.CheckZone = this.ZoneNameService.FindGrid(this.SearchZone).then((response => {
                this.CheckZone = this.ZoneNameService.GetZone(response.data.Result);
                this.ZoneDD[0].ID = this.CheckZone[0].ZoneID;

            }));
        }
        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }
        popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
            $("#message-text").html(Message);
            $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
            $(ShowImg).show();
            $(HideImg).hide();
            $("#succeess-message-box").modal("show");
        }
        Add() {
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

        }

        ResetMac():void {
            this.ResetService.PostReset(this.InserUserMaster).then(response => {
                if (response.data.Result != null) {
                    $("#errorclose").hide();
                    $("#close").show();
                    this.popupMessage("Mac Address is Reset", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    $('#myModalAddNew').click();


                    
                }
                else {
                    this.HideShow();
                    this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                }
                let that = this;
                this.FillUserMasterGrid = this.UserMService.FindGrid(this.UserMasterHeaderModel).then((response => {
                    console.log(this.UserMasterHeaderModel);
                    this.FillUserMasterGrid = this.UserMService.GetUserGrid(response.data.Result);
                    console.log(this.FillUserMasterGrid);

                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;

                    this.shownItems = this.FillUserMasterGrid.slice(0, that.numRecords);
                }));
            });
            
        }
        Submit(): void {
            
          
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
                
                this.InsertService.PostUserMaster(this.InserUserMaster).then(response => {

                    console.log(this.InserUserMaster);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("User Saved Successfully ", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();
                        this.InserUserMaster = null;
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    
                });

                
               
            }
        }
        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);

        }
        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }
        EditUserMaster(data): void {
           
            $("#txtpwd").prop("disabled", true)
            
            this.Eservice.Find(data).then((response => {
                this.InserUserMaster = this.Eservice.GetUserMasterEdit(response.data.Result);
               
                $('#txtDivision').val(this.InserUserMaster.CustDivision);
                $('#txtSalesOffice').val(this.InserUserMaster.SalesOfficeID);
                $('#txtpwd').val(this.InserUserMaster.Password);
               // $('#txtDistrict').val(this.InserUserMaster.DistrictID);
               // this.District(this.InserUserMaster.StateID);

                if (this.InserUserMaster.Status == "True") {
                    this.InserUserMaster.Status = "1";
                }
                else {
                    this.InserUserMaster.Status = "0";
                }
                
                if (this.InserUserMaster.CountryID != undefined && this.InserUserMaster.CountryID != null && this.InserUserMaster.CountryID != "" && this.InserUserMaster.CountryID != "0") {
                    
                    this.InserUserMaster.CountryID = this.InserUserMaster.CountryID.toString();
                   
                }
                this.InserUserMaster.StateID = this.InserUserMaster.StateID.toString();
                
                if (this.InserUserMaster.StateID != undefined && this.InserUserMaster.StateID != null && this.InserUserMaster.StateID != "" && this.InserUserMaster.StateID != "0") {
                    this.InserUserMaster.StateID = this.InserUserMaster.StateID.toString();
                   
                  //  this.District(this.InserUserMaster.StateID);
                    var dist = this.InserUserMaster.DistrictID;
                    this.DistrictDropDown = this.DistrictService.Find(this.InserUserMaster.StateID).then((response => {
                        this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                        this.InserUserMaster.DistrictID = dist;

                    }));
                }
                //this.StateID = this.InserUserMaster.StateID;
                
                
                this.SearchRegion.StateID = this.InserUserMaster.StateID;
                this.SearchRegion.DistrictID = this.InserUserMaster.DistrictID;
                this.InserUserMaster.RegionID = "";
                this.InserUserMaster.DesignationId = this.InserUserMaster.DesignationId;
                if (this.SearchRegion.StateID != undefined || this.SearchRegion.StateID != null || this.SearchRegion.StateID != "") {
                    this.CheckRegion = this.CheckRegionService.Find(this.SearchRegion).then((response => {
                        this.CheckRegion = this.CheckRegionService.GetRegion(response.data.Result);
                        this.RegionDropDown[0].RegionID = this.CheckRegion[0].RegionID;

                    }));
                }
                else { }
                this.SearchZone.SalesOfficeID = this.InserUserMaster.SalesOfficeID;
                this.InserUserMaster.ZoneID = "";
                if (this.SearchZone.SalesOfficeID != undefined || this.SearchZone.SalesOfficeID != null || this.SearchZone.SalesOfficeID != "") {
                    this.CheckZone = this.ZoneNameService.FindGrid(this.SearchZone).then((response => {
                        this.CheckZone = this.ZoneNameService.GetZone(response.data.Result);
                        this.ZoneDD[0].ID = this.CheckZone[0].ZoneID;

                    }));
                }
              
                $("myModalAddNew").show();
            }));
        } 
       

        IsValidEmail(value) {
            //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            var EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

            if (value == undefined || value == "") {
                return { Result: "True", Message: 'Success' }
            }
            else
                if (!EMAIL_REGEXP.test(value)) {
                    return { Result: "False", Message: 'Please Enter Valid Email' }
                }
                else {
                    return { Result: "True", Message: 'Success' }
                }
        }
        IsValidPhone(value) {
            var re = /^\+?\d{2}[- ]?\d{3}[- ]?\d{6}$/;
            //if (value == undefined || value == "") {
            //    return { Result: "True", Message: 'Success' }
            //}
             if (isNaN(value)) {
                return { Result: "False", Message: 'Please Enter Valid Phone No' }
            }
            //else if (value.length != 10) {
            //    return { Result: "False", Message: 'Phone No must have 10 digits' }
            //}
            else {
                return { Result: "True", Message: 'Success' }
            }
        }
        
               
        next() {
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

        back() {
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
        Clear() {
            (<HTMLInputElement>document.getElementById("txtName")).value = "";
            this.UserMasterHeaderModel.SearchText = "";
            this.UserMasterHeaderModel.SearchEmployeeCode = "";
            this.UserMasterHeaderModel.SearchPhoneNo = "";
            this.UserMasterHeaderModel.Status = "";

            //this.CategorySearch = "";
            $("#txtModel").val("");
            $("#txtPhone").val("");
            $("#ddlstatus").val("");
          //  $("#txtName").val("");
        }

        downloadCSV(csv, filename) {
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
        }

        exportTableToCSV(filename) {
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
        }


    }
    class UserMasterComponentController implements ng.IComponentOptions {
        static Name: string = "usermastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = UserMasterController;
            this.templateUrl = "/Scripts/App/UserMaster/Template/_UserMaster.html";
        }
    }
    app.AddComponent(UserMasterComponentController.Name, new UserMasterComponentController());


}
