namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import CustomerMaster = GCPL.Model.InsertCustomerMaster;
    import EditCust = GCPL.Model.EditCustomerModel;
    import ShowSimilar = GCPL.Model.CheckMobileModel;
    import Customerlist = GCPL.Model.CustomerListModel;

    interface ICreateCustomerController {
        CountryDropDown: Array<Model.CountryddlModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        IndustryDivisionDropDown: Array<Model.IndustryDivisionddlModel>
        SalesAreaDropDown: Array<Model.SalesAreaddlModel>
        AccountTypeDropDown: Array<Model.AccountTypeddlModel>
        IndustrialSegmentDropDown: Array<Model.IndustrialSegmentddlModel>
        SalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        InsertCustomer: CustomerMaster;
        Submit(): void;
        Edit(data: any): void;
        EditCustomer: Array<Model.EditCustomerModel>;
        CustomerID: any;
        MobileCount: any;
        Add(): void;
        //UserID: any;
        //ParentSAPId: any;
        ShowAll(): void;
        CustomerMasterlist: Array<Model.CustomerListModel>;
        DesignationDropDown: Array<Model.DesignationddlModel>
        DivisionDropDown: Array<Model.DivisionddlModel>
        //RoleID: GCPL.Model.RoleIDModel
        UserID: GCPL.Model.UserIDModel
        IndustryCodeDropDown: Array<Model.IndustryCodeddlModel>
        CustomerSizeDropDown: Array<Model.CustomerSizeddlModel>
        CustomerStatusDropDown: Array<Model.CustomerStatusModel>
        DepartmentDropDown: Array<Model.DepartmentddlModel>
        CustClassDropDown: Array<Model.CustomerClassModel>
        ConCountryDropDown: Array<Model.CountryddlModel>
        ConStateDropDown: Array<Model.StateddlModel>
        ConDistrictDropDown: Array<Model.DistrictddlModel>
    }

    class CreateCustomerController implements ICreateCustomerController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        CountryDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        IndustryDivisionDropDown = null;
        SalesAreaDropDown = null;
        AccountTypeDropDown = null;
        IndustrialSegmentDropDown = null;
        SalesOfficeDropDown = null;
        InsertCustomer = null;
        EditCustomer = null;
        CustomerID = null;
        UserID = null;
        RoleID = null;
        MobileCount = null;
        Show: GCPL.Model.CheckMobileModel = null;
        CustomerMasterlist = null;
        DesignationDropDown = null;
        DivisionDropDown = null;
        Check = null;
        IndustryCodeDropDown = null;
        CustomerSizeDropDown = null;
        private Cookie: any = null;
        CustomerStatusDropDown = null;
        DepartmentDropDown = null;
        CustClassDropDown = null;
        EMAIL_REGEXP = null;
        //ParentSAPId = null;
        ConCountryDropDown = null;
        ConStateDropDown = null;
        ConDistrictDropDown = null;

        private CountryService: Service.ICountryService;
        private StateService: Service.IStateddService;
        private DistrictService: Service.IDistrictddService;
        private IndustryDivisionService: Service.IIndustryDivisionService;
        private SalesAreaService: Service.ISalesAreaService;
        private AccountTypeService: Service.IAccountTypeService;
        private IndustrialDivisionSegmentService: Service.IIndustrialDivisionSegmentService;
        private SalesOfficeService: Service.ISalesOfficeService;
        private InsertService: Service.IInsertCustomerService;
        private EditService: Service.ICustomerEditService;
        private ShowMobileService: Service.IShowSimilarService;
        private ListService: Service.ICustomerListService;
        private DesignationService: Service.IDesignationService;
        private DivisionService: Service.IDivisionDDService;
        private IndustryCodeService: Service.IIndustryCodeService;
        private CustomerSizeService: Service.ICustomerSizeService;
        private CustomerStatusService: Service.ICustomerStatusService;
        private DepartmentService: Service.IDepartmentService;
        private CustClassService: Service.ICustomerClassService;
        private InsertSAPService: Service.IInsertSAPCustomerService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private LeadCustomerDetails: Service.ILeadCustomerGetDetailsService;
        
        //private SAPIDAutofill: Service.ISAPIDAutoFillService;
        // private SAPService: Service.ISAPIDListService;


        static $inject = ["CountryService", "StateddService", "DistrictddService", "InsertCustomerService", "IndustryDivisionService", "SalesAreaService", "AccountTypeService",
            "IndustrialDivisionSegmentService", "SalesOfficeService", "CustomerEditService", "ShowSimilarService", "CustomerListService", "DesignationService", "DivisionDDService",
            "IndustryCodeService", "CustomerSizeService", "$location", "$cookieStore", "CustomerStatusService", "DepartmentService", "CustomerClassService", "InsertSAPCustomerService", "CustomerSapIdAutoFillService", "LeadCustomerGetDetailsService"];



        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_CountryService: Service.ICountryService, _StateService: Service.IStateddService, _DistrictService: Service.IDistrictddService, _InsertService: Service.IInsertCustomerService,
            _IndustryDivisionService: Service.IIndustryDivisionService,
            _SalesAreaService: Service.ISalesAreaService, _AccountTypeService: Service.IAccountTypeService, _IndustrialDivisionSegmentService: Service.IIndustrialDivisionSegmentService,
            _SalesOfficeService: Service.ISalesOfficeService, _EditService: Service.ICustomerEditService, _ShowMobileService: Service.IShowSimilarService,
            _ListService: Service.ICustomerListService, _DesignationService: Service.IDesignationService, _DivisionService: Service.IDivisionDDService,
            _IndustryCodeService: Service.IIndustryCodeService, _CustomerSizeService: Service.ICustomerSizeService, private $location: ng.ILocationService, private _cookieStore: any,
            _CustomerStatusService: Service.ICustomerStatusService, _DepartmentService: Service.IDepartmentService, _CustClassService: Service.ICustomerClassService, _InsertSAPService: Service.IInsertSAPCustomerService,
            _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _LeadCustomerDetails: Service.ILeadCustomerGetDetailsService) {

            this.CountryService = _CountryService;
            this.StateService = _StateService;
            this.DistrictService = _DistrictService;
            this.InsertService = _InsertService;
            this.IndustryDivisionService = _IndustryDivisionService;
            this.SalesAreaService = _SalesAreaService;
            this.AccountTypeService = _AccountTypeService;
            this.IndustrialDivisionSegmentService = _IndustrialDivisionSegmentService;
            this.SalesOfficeService = _SalesOfficeService;
            this.InsertCustomer = new CustomerMaster();
            this.EditService = _EditService;
            this.CustomerID = $location.search().CustomerID;
            //this.UserID = this.Cookie.get('UserInfo')['UserID'];

            this.Show = new ShowSimilar();
            this.ShowMobileService = _ShowMobileService;
            this.ListService = _ListService;
            this.DesignationService = _DesignationService;
            this.DivisionService = _DivisionService;
            this.IndustryCodeService = _IndustryCodeService;
            this.CustomerSizeService = _CustomerSizeService;
            //this.SAPIDAutofill = _SAPIDAutofill;
            //this.SAPService = _SAPService;
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
            this.CustomerStatusService = _CustomerStatusService;
            this.DepartmentService = _DepartmentService;
            this.CustClassService = _CustClassService;
            this.InsertSAPService = _InsertSAPService;
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.LeadCustomerDetails = _LeadCustomerDetails;
           
        }

        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            this.Check = false;
            var splTab = document.getElementsByClassName("spl-tab");

            for (var i = 0; i < splTab.length; i++) {
                splTab[i].addEventListener("click", function () {
                    this.classList.toggle("toggle-spl-minus");
                })
            }


        }

        //Page Load Define Values//
        Init(): void {
            this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

            $("#errorclose").hide();
            $("#close").hide();
            
            $("#btnCreateInSAP").hide();

            this.CountryDropDown = this.CountryService.Find().then((response => {
                this.CountryDropDown = this.CountryService.GetCountryName(response.data.Result);

            }));
            this.IndustryDivisionDropDown = this.IndustryDivisionService.Find().then((response => {
                this.IndustryDivisionDropDown = this.IndustryDivisionService.GetIndustryName(response.data.Result);

            }));
            this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
                this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);

            }));
            this.AccountTypeDropDown = this.AccountTypeService.Find().then((response => {
                this.AccountTypeDropDown = this.AccountTypeService.GetAccountTypeName(response.data.Result);

            }));
            this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.SalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);

            }));
            this.DesignationDropDown = this.DesignationService.Find().then((response => {
                this.DesignationDropDown = this.DesignationService.GetDesignationName(response.data.Result);

            }));
            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivision(response.data.Result);

            }));

            this.IndustryCodeDropDown = this.IndustryCodeService.Find().then((response => {
                this.IndustryCodeDropDown = this.IndustryCodeService.GetIndustryCodeName(response.data.Result);

            }));
            this.CustomerSizeDropDown = this.CustomerSizeService.Find().then((response => {
                this.CustomerSizeDropDown = this.CustomerSizeService.GetCustomerSize(response.data.Result);

            }));
            this.StateDropDown = this.StateService.Find(this.InsertCustomer.CountryID = '95').then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));

            this.CustomerStatusDropDown = this.CustomerStatusService.Find().then((response => {
                this.CustomerStatusDropDown = this.CustomerStatusService.GetCustomerStatus(response.data.Result);

            }));
            this.DepartmentDropDown = this.DepartmentService.Find().then((response => {
                this.DepartmentDropDown = this.DepartmentService.GetDepartmentName(response.data.Result);
            }));

            this.CustClassDropDown = this.CustClassService.Find().then((response => {
                this.CustClassDropDown = this.CustClassService.GetCustomerClass(response.data.Result);
            }));
            this.ConStateDropDown = this.StateService.Find(this.InsertCustomer.ConCountryID = '95').then((response => {
                this.ConStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));


            if (this.CustomerID == undefined || this.CustomerID == null || this.CustomerID == "") {
                this.Add();
                $('#Heading').hide();
            }

            else {
                this.Edit(this.CustomerID);
                $('#Heading').show();
            }


            let that = this;
            $("#txtParentCus").autocomplete({
                //  source:['1a0','anjali','archana'],
                source: function (request, res) {
                    that.CustomerSapAutofill.FilterAutoComplete(request).then((response => {

                        let data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.CustomerName,
                                value: item.CustomerName,
                                id: item.CustomerID

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {
                    // Don't populate input field with selected value (pxid)
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.InsertCustomer.ParentCustomerID = ui.item.id;

                },
                change: function () {
                }
            });

            $("#txtCustMobileNo").change(function () {
                that.MobileCount = that.ShowMobileService.Find(that.InsertCustomer.MobileNo).then((response => {
                    that.MobileCount = that.ShowMobileService.GetMobile(response.data.Result);
                    debugger;
                    if (that.MobileCount == "0") {

                    }
                    else {
                        alert("Customer Already Exists");
                    }
                }));
            });

           




        }
        SegmentDivision(data: any): void {

            this.IndustrialSegmentDropDown = this.IndustrialDivisionSegmentService.Find(this.InsertCustomer.DivisionID).then((response => {
                this.IndustrialSegmentDropDown = this.IndustrialDivisionSegmentService.GetIndustrialSegmentName(response.data.Result);

            }));
        }

        State(data: any): void {

            this.StateDropDown = this.StateService.Find(this.InsertCustomer.CountryID = '95').then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        District(data: any): void {

            this.DistrictDropDown = this.DistrictService.Find(this.InsertCustomer.StateID).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }
        ConState(data: any): void {

            this.ConStateDropDown = this.StateService.Find(this.InsertCustomer.ConCountryID = '95').then((response => {
                this.ConStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        ConDistrict(data:any): void {

            this.ConDistrictDropDown = this.DistrictService.Find(this.InsertCustomer.ConStateID).then((response => {
                this.ConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
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
        Submit(): void {
            debugger;
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
            else if (this.InsertCustomer.CompanyName.length <= 1) {
                this.HideShow();
                this.popupMessage("Company Name requires minimum 1 characters.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

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
            else if (this.InsertCustomer.ConAddress == undefined || this.InsertCustomer.ConAddress == null || this.InsertCustomer.ConAddress == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact Address", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCustomer.ConPincode == undefined || this.InsertCustomer.ConPincode == null || this.InsertCustomer.ConPincode == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact Pincode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

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
                debugger;
                if (this.InsertCustomer.AccountTypeID == "1") {
                    this.InsertCustomer.AccountTypeID = "2";
                }
                else if (this.InsertCustomer.AccountTypeID == "0") {
                    this.InsertCustomer.AccountTypeID = "1";
                }
                this.InsertService.PostCustomer(this.InsertCustomer).then((response => {
                    debugger;
                    if (response.data.Result != null) {
                        if (this.CustomerID > 0) {
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Customer ID - " + this.CustomerID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                           
                        }
                        else {
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Customer ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            

                        }
                        $('#myModalAddNew').click();
                        this.InsertCustomer = null;
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Customer already exists with one of the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                }));
            }

        }

        Edit(data: any): void {
            $("#btnSubmit").show();
            //$("#btnCreateInSAP").show();
            this.EditService.Find(data).then((response => {
                this.InsertCustomer = this.EditService.GetCustEdit(response.data.Result);
                debugger;
                var temp = this.InsertCustomer.DistrictID;
                this.DistrictDropDown = this.DistrictService.Find(this.InsertCustomer.StateID).then((response => {
                    this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                    this.InsertCustomer.DistrictID = temp;
                }));
                if (this.InsertCustomer.CustomerID != null || this.InsertCustomer.CustomerID != "") {
                    this.InsertCustomer.UpdatedBy = this.UserID;
                }
               
                this.ConDistrict(this.InsertCustomer.ConStateID); 
                $("#txtParentCus").val(this.InsertCustomer.ParentCustomerName);
                $("#txtDivision").val(this.InsertCustomer.DivisionID);
                $("#txtClass").val(this.InsertCustomer.CustomerRatingID);

                debugger;
                if (this.InsertCustomer.BusinessPartnerNO == null || this.InsertCustomer.BusinessPartnerNO == "" || this.InsertCustomer.BusinessPartnerNO == undefined) {
                    $("#btnCreateInSAP").show();

                }
                else {
                    $("#btnCreateInSAP").hide();
                }

                var name = this.InsertCustomer.CompanyName;
                var nameArr = [];

                for (let i = 0; i < name.length; i++) {
                    console.log("Name is : " + name[i]);

                    if (!(name[i] == " ")) {
                        nameArr.push(name[i]);
                    }
                }

                var aStr = nameArr.join("");

                console.log("Name Array : " + aStr);
                this.InsertCustomer.SearchText = aStr;


                if (this.InsertCustomer.AccountTypeID == "2") {
                    this.InsertCustomer.AccountTypeID = "1";
                }
                else {
                    this.InsertCustomer.AccountTypeID = "0";
                }
                if (this.InsertCustomer.Status == "True") {
                    this.InsertCustomer.Status = "1";
                }
                else {
                    this.InsertCustomer.Status = "0";
                }
                if (this.InsertCustomer.IsNational == "True") {
                    this.InsertCustomer.IsNational = "1";
                }
                else {
                    this.InsertCustomer.IsNational = "0";
                }
            }));

        }

        ShowAll() {
            debugger;
            if ($("#btnShow").text() == "Show Similar" && this.InsertCustomer.CompanyName != undefined && this.InsertCustomer.CompanyName != null && this.InsertCustomer.CompanyName != "") {
                
                $("#btnShow").html("Cancel");
                debugger;
                this.LeadCustomerDetails.Find(this.InsertCustomer).then((response => {
                    this.CustomerMasterlist = this.LeadCustomerDetails.GetCustomerDetails(response.data.Result);
                }));
                $("#show-similar-table").show();
                
            }
            else {
                $("#btnShow").html("Show Similar");
                $("#show-similar-table").hide();
            }
        }

        Adopt(data): void {
            debugger;
            this.Edit(data);
        }

        SearchTerm(): void {
            debugger;
            var name = this.InsertCustomer.CompanyName;
            var nameArr = [];

            for (let i = 0; i < name.length; i++) {
                console.log("Name is : " + name[i]);

                if (!(name[i] == " ")) {
                    nameArr.push(name[i]);
                }
            }

            var aStr = nameArr.join("");

            console.log("Name Array : " + aStr);
            this.InsertCustomer.SearchText = aStr;
           
        }
       
        CreateInSAP(): void {
            this.InsertCustomer.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.InsertSAPService.PostCreateInSAP(this.InsertCustomer).then(response => {
                if (response.data.Result != null) {
                    if (this.CustomerID > 0) {
                        
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Customer ID - " + this.CustomerID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");


                    }
                    else {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Customer ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");

                    }
                    $('#myModalAddNew').click();
                    this.InsertCustomer = null;
                }
                else {
                    this.HideShow();
                    this.popupMessage("Customer already exists with one of the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                }
            });
        }



        ShowHideChk(): void {

            if (this.Check == true) {
                this.InsertCustomer.SiteAddress = this.InsertCustomer.Address1;

            }
            else if (this.Check == false) {
                this.InsertCustomer.SiteAddress = '';
            }
        }

        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }

        Add(): void {
           
            $("#btnCreateInSAP").hide();
            this.InsertCustomer.CustomerID = "";
            this.InsertCustomer.SearchText = "";
            this.InsertCustomer.CompanyName = "";
            this.InsertCustomer.MobileNo = "";
            this.InsertCustomer.Email = "";
            this.InsertCustomer.Address1 = "";
            this.InsertCustomer.Address2 = "";
            this.InsertCustomer.CustomerStatusID = "";
            this.InsertCustomer.DistrictID = "";
            this.InsertCustomer.IndustryDivisionID = "";
            this.InsertCustomer.CreatedBy = "";
            this.InsertCustomer.PinCode = "";
            this.InsertCustomer.AccountTypeID = "1";
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

        }

        IsValidPinCode(value) {
            //var re = /^\+?\d{2}[- ]?\d{3}[- ]?\d{6}$/;
            if (value == undefined || value == null || value == "") {
                return { Result: "True", Message: 'Success' }
            }
            else if (isNaN(value)) {
                return { Result: "False", Message: 'Please Enter Valid PIN Code' }
            }
            else if (value.length != 6) {
                return { Result: "False", Message: 'PIN Code must have 6 digits' }
            }
            else {
                return { Result: "True", Message: 'Success' }
            }
        }

        IsValidPhone(value) {
            var re = /^\+?\d{2}[- ]?\d{3}[- ]?\d{6}$/;
            debugger;
            if (value == undefined || value == null || value == "") {
                //return { Result: "True", Message: 'Success' }
                return { Result: "False", Message: 'Please Enter Phone No' }
            }
            else if (isNaN(value)) {
                return { Result: "False", Message: 'Please Enter Valid Phone No' }
            }
            else if (value.length != 10) {
                return { Result: "False", Message: 'Phone No must have 10 digits' }
            }
            else {
                return { Result: "True", Message: 'Success' }
            }
        }

        IsValidMobile(value) {
            var re = /^[A-Za-z]+$/;
            if (value == undefined || value == null || value == "") {
                return { Result: "True", Message: 'Success' }
                //return { Result: "False", Message: 'Please Enter Mobile No' }
            }
            else if (isNaN(value)) {
                return { Result: "False", Message: 'Please Enter Valid Mobile No' }
            }
            else if (value.length != 10) {
                return { Result: "False", Message: 'Mobile No must be 10 digit' }
            }
            else {
                return { Result: "True", Message: 'Success' }
            }
        }

        IsValidMobile1(value) {
            var re = /^[A-Za-z]+$/;
            if (value == undefined || value == "") {
                return { Result: "True", Message: 'Success' }
            }
            else if (isNaN(value)) {
                return { Result: "False", Message: 'Please Enter Valid Mobile No' }
            }
            else if (value.length != 10) {
                return { Result: "False", Message: 'Mobile No must be 10 digit' }
            }
            else {
                return { Result: "True", Message: 'Success' }
            }
        }

        IsValidEmail(value) {
            //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            var EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

            if (value == undefined || value == null || value == "") {
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

        Close(): void {

            location.href = "#!/CustomerMaster";

        }
        

    }
    class CreateCustomerComponentController implements ng.IComponentOptions {
        static Name: string = "createcustomercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CreateCustomerController;
            this.templateUrl = "/Scripts/App/MasterData/CreateCustomer/Template/_CreateCustomer.html";
        }
    }
    app.AddComponent(CreateCustomerComponentController.Name, new CreateCustomerComponentController());


}


