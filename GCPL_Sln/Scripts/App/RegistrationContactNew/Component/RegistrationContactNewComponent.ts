namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import CreateRegistration = GCPL.Model.InsertRegistrationContactModel;
    import CustomerDetails = GCPL.Model.ExistingCustomerDetailsListModel;
    import contactinfo = GCPL.Model.ExistingContactDetailsListModel;
    import EditRegistration = GCPL.Model.EditRegistrationContactModel;

    interface IRegistrationContactNewController {
        CustomerID: any;
        ContactID: any;
        SelectedContactID: Array<Model.ExistingContactDetailsListModel>
        Search(data: any): void;
        ContactDetail(data: any): void;
        Contact(data: any): void;
        InsertRegistration: CreateRegistration;
        Submit(): void;
        InsertCustRegistration: CustomerDetails;
        ContactDropDown: Array<Model.ContactInfoModel>
        Contactinfo: contactinfo;
        DepartmentDropDown: Array<Model.DepartmentddlModel>
        DesignationDropDown: Array<Model.DesignationddlModel>

        AddConCountryDropDown: Array<Model.CountryddlModel>
        AddConStateDropDown: Array<Model.StateddlModel>
        AddConDistrictDropDown: Array<Model.DistrictddlModel>

        CustCountryDropDown: Array<Model.CountryddlModel>
        CustStateDropDown: Array<Model.StateddlModel>
        CustDistrictDropDown: Array<Model.DistrictddlModel>
        UpdateContact: Array<Model.InsertRegistrationContactModel>
        EditRegistrationContact: Array<Model.EditRegistrationContactModel>;                       

    }
    class RegistrationContactNewController implements IRegistrationContactNewController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        CustomerID = null;
        AppContactID = null;
        UpdateContact = null;
        InsertCustRegistration = null;
        InsertRegistration = null;
        ContactDropDown = null;
        DesignationDropDown = null;

        CustCountryDropDown = null;
        CustStateDropDown = null;
        CustDistrictDropDown = null;

        AddConCountryDropDown = null;
        AddConStateDropDown = null;
        AddConDistrictDropDown = null;

        DepartmentDropDown = null;
        ContactID = null;
        InsertContact = null;
        Checked = null;
        Contactinfo: GCPL.Model.ExistingContactDetailsListModel = null;
        EditRegistrationContact = null;
        SelectedContactID = null;
        EMAIL_REGEXP = null;
        private Cookie: any = null;
      

        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private CustomerInfoService: Service.IExistingCustomerDetailsService;
        private InsertService: Service.IInsertRegistrationContactService;
        private ContactService: Service.IContactInfo1Service;
        private ContactInfoService: Service.IExistingContactDetailsService;
       
        private CountryService: Service.ICountryService;
        private StateService: Service.IStateddService;
        private DistrictService: Service.IDistrictddService;
        //private StateService: Service.IstateDDService;
        //private DistrictService: Service.IDistrictddService;
        private DesignationService: Service.IDesignationService;
        private DepartmentService: Service.IDepartmentService;
        private EditService: Service.IRegistrationContactEditService;
        private Updateservice: Service.IUpdateContactNewService;

        static $inject = ["CustomerSapIdAutoFillService", "InsertRegistrationContactService", "CountryService", "StateddService", "DistrictddService",
            "DesignationService", "DepartmentService", "ExistingCustomerDetailsService", "ContactInfo1Service", "ExistingContactDetailsService", "RegistrationContactEditService","UpdateContactNewService","$location","$cookieStore"];

        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _InsertService: Service.IInsertRegistrationContactService,
            _CountryService: Service.ICountryService, _StateService: Service.IStateddService, _DistrictService: Service.IDistrictddService, _DesignationService: Service.IDesignationService,
            _DepartmentService: Service.IDepartmentService, _CustomerInfoService: Service.IExistingCustomerDetailsService, _ContactService: Service.IContactInfo1Service,
            _ContactInfoService: Service.IExistingContactDetailsService, _EditService: Service.IRegistrationContactEditService, _Updateservice: Service.IUpdateContactNewService, private $location: ng.ILocationService, private _cookieStore: any) {

            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.CustomerInfoService = _CustomerInfoService;
            this.ContactInfoService = _ContactInfoService;
            this.InsertService = _InsertService;
            this.InsertRegistration = new CreateRegistration();
            this.InsertCustRegistration = new CustomerDetails();
            this.ContactService = _ContactService;
            this.Contactinfo = new contactinfo();
            this.CountryService = _CountryService;
            this.StateService = _StateService;
            this.DistrictService = _DistrictService;
            this.DesignationService = _DesignationService;
            this.DepartmentService = _DepartmentService;
            this.EditService = _EditService;
            this.Updateservice = _Updateservice;
            this.AppContactID = $location.search().AppContactID;
            this.Cookie = _cookieStore;
        }

        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();

            this.Checked = false;
            $('#divtxtContactname').hide();

            var splTab = document.getElementsByClassName("spl-tab");

            for (var i = 0; i < splTab.length; i++) {
                splTab[i].addEventListener("click", function () {
                    this.classList.toggle("toggle-spl-minus");
                })
            }
        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            //$('#divtxtContactname').hide();

            var existingLink = document.getElementById("txtexist");
            var newLink = document.getElementById("txtnew");
            var newFieldPanel = document.getElementById("divddlContactName")
            var existingFieldPanel = document.getElementById("divtxtContactname");

            existingLink.addEventListener("click", function () {
                newFieldPanel.style.display = "initial";
                existingFieldPanel.style.display = "none";
            })

            newLink.addEventListener("click", function () {
                newFieldPanel.style.display = "none";
                existingFieldPanel.style.display = "initial";
            })
            
            debugger;
           

            let that = this;
            $("#txtCustomerName").autocomplete({
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
                    that.InsertRegistration.CustomerID = ui.item.id;
                    that.InsertRegistration.CompanyName = ui.item.value;
                    that.Search(ui.item.id);
                    console.log(that.InsertCustRegistration.CompanyName);
                },
                change: function () {
                }
            });  


            this.DesignationDropDown = this.DesignationService.Find().then((response => {
                this.DesignationDropDown = this.DesignationService.GetDesignationName(response.data.Result);

            }));

            this.CustCountryDropDown = this.CountryService.Find().then((response => {
                this.CustCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.AddConCountryDropDown = this.CountryService.Find().then((response => {
                this.AddConCountryDropDown = this.CountryService.GetCountryName(response.data.Result);
            }));

            this.DepartmentDropDown = this.DepartmentService.Find().then((response => {
                this.DepartmentDropDown = this.DepartmentService.GetDepartmentName(response.data.Result);

            }));
                           

            if (this.AppContactID == undefined || this.AppContactID == null || this.AppContactID == "") {
                this.Add();
               
            }

            else {
                this.Edit(this.AppContactID);
             

            }
            
        }

       
        CustState(data: any): void {

            this.CustStateDropDown = this.StateService.Find(this.InsertRegistration.CountryID).then((response => {
                this.CustStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        CustDistrict(data: any): void {

            this.CustDistrictDropDown = this.DistrictService.Find(this.InsertRegistration.StateID).then((response => {
                this.CustDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        AddConState(data: any): void {

            this.AddConStateDropDown = this.StateService.Find(this.InsertRegistration.ContactCountryID).then((response => {
                this.AddConStateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        AddConDistrict(data: any): void {

            this.AddConDistrictDropDown = this.DistrictService.Find(this.InsertRegistration.ContactStateID).then((response => {
                this.AddConDistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }
      
        public Search(data: any): void {
            debugger;
            this.CustomerInfoService.Find(data).then((response => {
                this.InsertCustRegistration = this.CustomerInfoService.GetCustomerDetails(response.data.Result);
                console.log(this.InsertCustRegistration);
                debugger;
                this.InsertRegistration.CustomerID = this.InsertCustRegistration.CustomerID;
                this.Contactinfo.CustomerID = this.InsertRegistration.CustomerID;
                this.Contact(this.Contactinfo.CustomerID);
                this.InsertRegistration.Address1 = this.InsertCustRegistration.Address1;
                this.InsertRegistration.Address2 = this.InsertCustRegistration.Address2;
                this.InsertRegistration.Email = this.InsertCustRegistration.Email;
                this.InsertRegistration.MobileNo = this.InsertCustRegistration.MobileNo;
                this.InsertRegistration.PhoneNo = this.InsertCustRegistration.PhoneNo;
                this.InsertRegistration.Fax = this.InsertCustRegistration.Fax;
               
                this.InsertRegistration.CountryID = this.InsertCustRegistration.CountryID;
                this.CustState(this.InsertCustRegistration.CountryID);
                this.InsertRegistration.StateID = this.InsertCustRegistration.StateID;
                this.CustDistrict(this.InsertCustRegistration.StateID);
                this.InsertRegistration.DistrictID = this.InsertCustRegistration.DistrictID;
                this.InsertRegistration.City = this.InsertCustRegistration.City;
                this.InsertRegistration.PinCode = this.InsertCustRegistration.PinCode;
            
               
                $('#txtCountry').val(this.InsertCustRegistration.CountryID);


              
               
            }));


        }

        public Contact(data: any): void {

            this.ContactDropDown = this.ContactService.Find(data).then((response => {
                this.ContactDropDown = this.ContactService.GetContactName(response.data.Result);
                debugger;
              
                this.InsertRegistration.ContactID = this.ContactDropDown.ContactID;
                this.InsertRegistration.ContactName = this.ContactDropDown.ContactName;
            }));
        }

        public ContactDetail(data: any): void {
            debugger;
            this.ContactInfoService.Find(this.InsertRegistration.ContactID).then((response => {
                this.Contactinfo = this.ContactInfoService.GetContactDetails(response.data.Result);
                console.log(this.Contactinfo);
                debugger;
                                           
                this.InsertRegistration.ContactName = this.Contactinfo.ContactName;
                this.InsertRegistration.ContactID = this.Contactinfo.ContactID;
                this.InsertRegistration.ContactEmail = this.Contactinfo.ContactEmail;
                this.InsertRegistration.ContactMobileNo = this.Contactinfo.ContactMobileNo;
                this.InsertRegistration.ContactPhoneNo = this.Contactinfo.ContactPhoneNo;
                this.InsertRegistration.Designation = this.Contactinfo.Designation;
                this.InsertRegistration.DepartmentID = this.Contactinfo.DepartmentID;
                this.InsertRegistration.FOPID = this.Contactinfo.FOPID;
                this.InsertRegistration.Address = this.Contactinfo.Address;
                this.InsertRegistration.ContactCountryID = this.Contactinfo.ContactCountryID;
                this.AddConState(this.Contactinfo.ContactCountryID);
                this.InsertRegistration.ContactStateID = this.Contactinfo.ContactStateID;
                this.AddConDistrict(this.Contactinfo.ContactStateID);
                this.InsertRegistration.ContactDistrictID = this.Contactinfo.ContactDistrictID;
                this.InsertRegistration.ContactCity = this.Contactinfo.ContactCity;
                this.InsertRegistration.PostalCode = this.Contactinfo.PostalCode;
                this.InsertRegistration.IsActive = this.Contactinfo.IsActive;
               
                             
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
            if (this.InsertRegistration.CustomerID == undefined || this.InsertRegistration.CustomerID == null || this.InsertRegistration.CustomerID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.MobileNo == undefined || this.InsertRegistration.MobileNo == null || this.InsertRegistration.MobileNo == ""){
                this.HideShow();
                this.popupMessage("Please Enter  Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertRegistration.MobileNo != undefined && this.InsertRegistration.MobileNo != null && this.InsertRegistration.MobileNo != "") && (isNaN(this.InsertRegistration.MobileNo) || this.InsertRegistration.MobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.Email == undefined || this.InsertRegistration.Email == null || this.InsertRegistration.Email == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.Email != undefined && this.InsertRegistration.Email != null && this.InsertRegistration.Email != "" && !(this.EMAIL_REGEXP.test(this.InsertRegistration.Email))) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Customer Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.Address1 == undefined || this.InsertRegistration.Address1 == null || this.InsertRegistration.Address1 == ""){
                this.HideShow();
                this.popupMessage("Please Enter Customer Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
           
            else if (this.InsertRegistration.DistrictID == undefined || this.InsertRegistration.DistrictID == null || this.InsertRegistration.DistrictID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
                
            else if (this.InsertRegistration.PinCode == undefined || this.InsertRegistration.PinCode == null || this.InsertRegistration.PinCode == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer PinCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertRegistration.PinCode != undefined && this.InsertRegistration.PinCode != null && this.InsertRegistration.PinCode != "") && (isNaN(this.InsertRegistration.PinCode) || this.InsertRegistration.PinCode.length != 6)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid PinCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.Designation == undefined || this.InsertRegistration.Designation == null || this.InsertRegistration.Designation == "") {
                this.HideShow();
                this.popupMessage("Please Enter Designation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.FOPID == undefined || this.InsertRegistration.FOPID == null || this.InsertRegistration.FOPID == "") {
                this.HideShow();
                this.popupMessage("Please Enter FOPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.DepartmentID == undefined || this.InsertRegistration.DepartmentID == null || this.InsertRegistration.DepartmentID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Department", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.Address == undefined || this.InsertRegistration.Address == null || this.InsertRegistration.Address == ""){
                this.HideShow();
                this.popupMessage("Please Enter Contact Address", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.ContactDistrictID == undefined || this.InsertRegistration.ContactDistrictID == null || this.InsertRegistration.ContactDistrictID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.PostalCode == undefined || this.InsertRegistration.PostalCode == null || this.InsertRegistration.PostalCode == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact PostalCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertRegistration.PostalCode != undefined && this.InsertRegistration.PostalCode != null && this.InsertRegistration.PostalCode != "") && (isNaN(this.InsertRegistration.PostalCode) || this.InsertRegistration.PostalCode.length != 6)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact PostalCode", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.ContactMobileNo == undefined || this.InsertRegistration.ContactMobileNo == null || this.InsertRegistration.ContactMobileNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if ((this.InsertRegistration.ContactMobileNo != undefined && this.InsertRegistration.ContactMobileNo != null && this.InsertRegistration.ContactMobileNo != "") && (isNaN(this.InsertRegistration.MobileNo) || this.InsertRegistration.MobileNo.length != 10)) {
                this.HideShow();
                this.popupMessage("Please Enter Valid Contact MobileNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertRegistration.Password == undefined || this.InsertRegistration.Password == null || this.InsertRegistration.Password == "") {
                this.HideShow();
                this.popupMessage("Please Enter Password", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            
            else {
                debugger;
                
                this.InsertService.PostRegistrationContact(this.InsertRegistration).then((response => {

                    console.log(this.InsertRegistration);

                    if (response.data.Result != null) {

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Registration Contact saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        this.InsertRegistration = null;

                    } else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                }));
            }


        }
        Add(): void {
            debugger
            $('#HidePassword').show();
            $('#HideStatus').hide();
            $('#divddlContactName').show();
            $('#btnupdate').hide();
            $('#btnSubmit').show();
            this.InsertRegistration.AppContactID = "";
            this.InsertRegistration.AppCustomerID = "";
            this.InsertRegistration.ContactID = "";
            this.InsertRegistration.CustomerID = "";
            this.InsertRegistration.CompanyName = "";
          
            this.InsertRegistration.Email = "";
            this.InsertRegistration.MobileNo = "";
            this.InsertRegistration.PhoneNo = "";
            this.InsertRegistration.Fax = "";
            this.InsertRegistration.Address1 = "";
            this.InsertRegistration.Address2 = "";
            this.InsertRegistration.CountryID = "";
            this.InsertRegistration.StateID = "";
            this.InsertRegistration.DistrictID = "";
            this.InsertRegistration.City = "";
            this.InsertRegistration.PinCode = "";
            //add contact

            this.InsertRegistration.ContactName = "";
            this.InsertRegistration.ContactEmail = "";
            this.InsertRegistration.ContactMobileNo = "";
            this.InsertRegistration.ContactPhoneNo = "";
            this.InsertRegistration.Designation = "";
            this.InsertRegistration.DepartmentID = "";
            this.InsertRegistration.FOPID = "";
            this.InsertRegistration.Address = "";
            this.InsertRegistration.ContactCountryID = "";
            this.InsertRegistration.ContactDistrictID = "";
         
            this.InsertRegistration.ContactStateID = "";
            this.InsertRegistration.ContactCity = "";
            this.InsertRegistration.PostalCode = "";
            this.InsertRegistration.Password = "";
            this.InsertRegistration.IsActive = "";
                      
       
        }

        Edit(data: any): void {
            debugger;
            $('#HidePassword').show();
            $('#HideStatus').show();

            this.EditService.Find(data).then((response => {
                this.InsertRegistration = this.EditService.GetEdit(response.data.Result);
              
                debugger;
                $('#divtxtContactname').show();
                $('#divddlContactName').hide();
                $('#btnupdate').show();
                $('#btnSubmit').hide();
                
                
                this.InsertCustRegistration.CustomerID = this.InsertRegistration.CustomerID;
                this.Contactinfo.CustomerID = this.InsertRegistration.CustomerID;
            
                $('#txtCustomerName').val(this.InsertRegistration.CompanyName);
                $('#txtEmail').val(this.InsertRegistration.Email);
                $('#txtMobileNo').val(this.InsertRegistration.MobileNo);
                $('#txtphoneno').val(this.InsertRegistration.PhoneNo);
                $('#txtfax').val(this.InsertRegistration.Fax);
                $('#txtadd1').val(this.InsertRegistration.Address1);
                $('#txtadd2').val(this.InsertRegistration.Address2);
                $('#txtCountry').val(this.InsertRegistration.CountryID);
                this.CustState(this.InsertRegistration.CountryID);
                $('#txtState').val(this.InsertRegistration.StateID);
                this.CustDistrict(this.InsertRegistration.StateID);
                $('#txtDistrict').val(this.InsertRegistration.DistrictID);
                $('#txtCity').val(this.InsertRegistration.City);
                $('#txtCode').val(this.InsertRegistration.PinCode);
                                                            
                //$('#txtContactName').val(this.InsertRegistration.ContactID);
                $('#txtContactName').val(this.InsertRegistration.ContactName);
                $('#txtConEmail').val(this.InsertRegistration.ContactEmail);
                $('#txtConMobile').val(this.InsertRegistration.ContactMobileNo);
                $('#txtConPhone').val(this.InsertRegistration.ContactPhoneNo);
                $('#txtdesign').val(this.InsertRegistration.Designation);
                $('#txtDepart').val(this.InsertRegistration.DepartmentID);
                $('#txtFOP').val(this.InsertRegistration.FOPID);
                $('#txtadd').val(this.InsertRegistration.Address);
                $('#txtcontcountry').val(this.InsertRegistration.ContactCountryID);
                this.AddConState(this.InsertRegistration.ContactCountryID);
                $('#txtConState').val(this.InsertRegistration.ContactStateID);
                this.AddConDistrict(this.InsertRegistration.ContactStateID);
                $('#txtConDistrict').val(this.InsertRegistration.ContactDistrictID);
               
                $('#txtConCity').val(this.InsertRegistration.ContactCity);
                $('#txtConPin').val(this.InsertRegistration.PostalCode);
                $('#txtcontpwd').val(this.InsertRegistration.Password);
                                     
                
                if (this.InsertRegistration.IsActive == "True") {
                    this.InsertRegistration.IsActive = "1";
                }
                else {
                    this.InsertRegistration.IsActive = "0";
                }
               

            }));
        }

        Update(): void {
            debugger;
            this.Updateservice.PostUpdateContact(this.InsertRegistration).then((response => {

                console.log(this.InsertRegistration);

                if (response.data.Result != null) {

                    $("#errorclose").hide();
                    $("#close").show();
                    
                    this.popupMessage("Data saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    this.InsertRegistration = null;
                } else {
                    this.HideShow();
                    this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                }
            }));

        }
        Close(): void {

            location.href = "#!/RegistrationContact";

        }

        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }

    }
    class RegistrationContactNewComponentController implements ng.IComponentOptions {
        static Name: string = "registrationcontactnewcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = RegistrationContactNewController;
            this.templateUrl = "/Scripts/App/RegistrationContactNew/Template/RegistrationContactNew.html";
        }
    }
    app.AddComponent(RegistrationContactNewComponentController.Name, new RegistrationContactNewComponentController());

}