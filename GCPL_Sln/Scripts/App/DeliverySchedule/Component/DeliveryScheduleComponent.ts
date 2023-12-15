namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import ContactMaster = GCPL.Model.InsertContactMaster;
    import EditCon = GCPL.Model.EditContactModel;

    interface ICreateContactController {
        DesignationDropDown: Array<Model.DesignationddlModel>
        CountryDropDown: Array<Model.CountryddlModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        InsertContact: ContactMaster;
        Submit(): void;
        DepartmentDropDown: Array<Model.DepartmentddlModel>
        ContactID: any;
        Edit(data: any): void;
        EditContact: Array<Model.EditContactModel>;
        DeliveryDetailsModel: Array<Model.DeliveryDetailsModel>;
    }

    class CreateContactController implements ICreateContactController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        DesignationDropDown = null;
        CountryDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        InsertContact = null;
        DepartmentDropDown = null;
        private Cookie: any = null;
        ContactID = null;
        EditContact = null;
        DeliveryDetailsModel = null;
        CustomerID = null;
        EMAIL_REGEXP = null;
        AssignmentListCart = [];
        TSAssignmentList: Array<Model.DeliveryDetailsModel>;
        private CountryService: Service.ICountryService;
        private StateService: Service.IStateddService;
        private DistrictService: Service.IDistrictddService;
        private DesignationService: Service.IDesignationService;
        private DepartmentService: Service.IDepartmentService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private InsertService: Service.IInsertContactService;
        private EditService: Service.IContactEditService;
        private PullContactService: Service.IPrimaryContactService;
        private InsertSAPService: Service.IInsertSAPContactService;

        static $inject = ["CountryService", "StateddService", "DistrictddService", "DesignationService", "DepartmentService", "CustomerSapIdAutoFillService", "InsertContactService", "ContactEditService", "$location", "$cookieStore", "PrimaryContactService",
            "InsertSAPContactService"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_CountryService: Service.ICountryService, _StateService: Service.IStateddService, _DistrictService: Service.IDistrictddService, _DesignationService: Service.IDesignationService,
            _DepartmentService: Service.IDepartmentService, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _InsertService: Service.IInsertContactService, _EditService: Service.IContactEditService, private $location: ng.ILocationService, private _cookieStore: any,
            _PullContactService: Service.IPrimaryContactService, _InsertSAPService: Service.IInsertSAPContactService) {
            this.CountryService = _CountryService;
            this.StateService = _StateService;
            this.DistrictService = _DistrictService;
            this.DesignationService = _DesignationService;
            this.InsertContact = new ContactMaster();
            this.DepartmentService = _DepartmentService;
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.InsertService = _InsertService;
            this.ContactID = $location.search().ContactID;
            this.EditService = _EditService;
            this.Cookie = _cookieStore;
            this.PullContactService = _PullContactService;
            this.InsertSAPService = _InsertSAPService;
        }



        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();

            var splTab = document.getElementsByClassName("spl-tab");

            for (var i = 0; i < splTab.length; i++) {
                splTab[i].addEventListener("click", function () {
                    this.classList.toggle("toggle-spl-minus");
                })
            }

            $("#txtBirDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectBirDate
            });
            $("#txtAnniverDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectAnniverDate
            });
            $("#txtSpouBirthDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectSpouBirthDate
            });
        }
        selectBirDate(e) {
            (<HTMLInputElement>document.getElementById("txtBirDate")).value = e;
        }
        selectAnniverDate(e) {
            (<HTMLInputElement>document.getElementById("txtAnniverDate")).value = e;
        }
        selectSpouBirthDate(e) {
            (<HTMLInputElement>document.getElementById("txtSpouBirthDate")).value = e;
        }
        //Page Load Define Values//
        Init(): void {
            this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            $("#errorclose").hide();
            $("#close").hide();
            $("#btnCreateInSAP").hide();
            this.DesignationDropDown = this.DesignationService.Find().then((response => {
                this.DesignationDropDown = this.DesignationService.GetDesignationName(response.data.Result);

            }));
            this.CountryDropDown = this.CountryService.Find().then((response => {
                this.CountryDropDown = this.CountryService.GetCountryName(response.data.Result);

            }));
            this.DepartmentDropDown = this.DepartmentService.Find().then((response => {
                this.DepartmentDropDown = this.DepartmentService.GetDepartmentName(response.data.Result);

            }));
            this.StateDropDown = this.StateService.Find(this.InsertContact.CountryID = '95').then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));

            if (this.ContactID == undefined || this.ContactID == null || this.ContactID == "") {
                this.Add();
            }

            else {
                this.Edit(this.ContactID);
            }

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
                    that.InsertContact.CustomerID = ui.item.id;
                    that.Search(ui.item.id);
                    console.log(that.InsertContact.CustomerID);
                },
                change: function () {
                }
            });
        }
        State(data: any): void {

            this.StateDropDown = this.StateService.Find(this.InsertContact.CountryID = '95').then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));
        }

        District(): void {

            this.DistrictDropDown = this.DistrictService.Find(this.InsertContact.StateID).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
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

        TSAssignmentCart() {
            console.log(this.DeliveryDetailsModel.DeliveryQty, "Testing");
            this.AssignmentListCart = [];
            var err = 0;
            if (this.TSAssignmentList == undefined || this.TSAssignmentList == null) {

            } else {
                this.AssignmentListCart = this.TSAssignmentList;
            }
            if (this.DeliveryDetailsModel.DeliveryQty == "" || this.DeliveryDetailsModel.DeliveryQty == null || this.DeliveryDetailsModel.DeliveryQty == undefined) {

                this.HideShow();

                this.popupMessage("Please select Delivery Qty", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            } else if (this.DeliveryDetailsModel.DeliveryDate == "" || this.DeliveryDetailsModel.DeliveryDate == null || this.DeliveryDetailsModel.DeliveryDate == undefined) {

                this.HideShow();

                this.popupMessage("Please select Delivery Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }


            else {

                if (err == 0) {
                    this.AssignmentListCart.push({
                        "ItemNo": this.DeliveryDetailsModel.ItemNo,
                        "ItemQty": this.DeliveryDetailsModel.ItemDesc,
                        "DeliveryQty": this.DeliveryDetailsModel.DeliveryQty,
                        "DeliveryDate": this.DeliveryDetailsModel.DeliveryDate
                    });
                    this.TSAssignmentList = this.AssignmentListCart;
                }
            }
        }

        Submit(): void {
            var flag = 0;
            var failureCount = 0;
            var SuccessCount = 0;
            if (this.TSAssignmentList == null || this.TSAssignmentCart == undefined) {
                this.HideShow();
                this.popupMessage("Please add atleast one Delivery Details to list!", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            } else {

                for (var i = 0; i < this.TSAssignmentList.length; i++) {
                    this.DeliveryDetailsModel = this.TSAssignmentList[i];
                    this.InsertSAPService.PostCreateInSAP(this.DeliveryDetailsModel).then(response => {

                        if (flag == 0) {

                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Successfully Inserted " + SuccessCount.toString() + " Records!", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        } else {
                            this.HideShow();
                            this.popupMessage("Error Occured for " + failureCount + "Records! Please Try again.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }

                    });

                }
            }
        }

        Edit(data: any): void {
            // $("#btnCreateInSAP").show();
            this.EditService.Find(data).then((response => {
                this.InsertContact = this.EditService.GetConEdit(response.data.Result);

                if (this.InsertContact.SAPID == null || this.InsertContact.SAPID == undefined || this.InsertContact.SAPID == "") {
                    $("#btnCreateInSAP").show();
                }
                else {
                    $("#btnCreateInSAP").hide();
                }
                this.District();

                $("#txtCustomerName").val(this.InsertContact.CompanyName);
                if (this.InsertContact.Status == "True") {
                    this.InsertContact.Status = "1";
                }
                else {
                    this.InsertContact.Status = "0";
                }
                if (this.InsertContact.MaritalStatus == "True") {
                    this.InsertContact.MaritalStatus = "1";
                }
                else if (this.InsertContact.MaritalStatus == "False") {
                    this.InsertContact.MaritalStatus = "0";
                }
                else {
                    this.InsertContact.MaritalStatus = "";
                }
                if (this.InsertContact.SmokingPreference == "True") {
                    this.InsertContact.SmokingPreference = "1";
                }
                else if (this.InsertContact.SmokingPreference == "False") {
                    this.InsertContact.SmokingPreference = "0";
                }
                else {
                    this.InsertContact.SmokingPreference = "";
                }
                if (this.InsertContact.DrinkingPreference == "True") {
                    this.InsertContact.DrinkingPreference = "1";
                }
                else if (this.InsertContact.DrinkingPreference == "False") {
                    this.InsertContact.DrinkingPreference = "0";
                }
                else {
                    this.InsertContact.DrinkingPreference = "";
                }
                if (this.InsertContact.MealPreference == "True") {
                    this.InsertContact.MealPreference = "1";
                }
                else if (this.InsertContact.MealPreference == "False") {
                    this.InsertContact.MealPreference = "0";
                }
                else {
                    this.InsertContact.MealPreference = "";
                }
            }));

        }

        CreateInSAP(): void {
            this.InsertContact.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.InsertSAPService.PostCreateInSAP(this.InsertContact).then(response => {
                if (response.data.Result != null) {
                    if (response.data.Result > 0) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Contact ID - " + this.ContactID + " Successfully Updated.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");


                    }
                    else {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Contact ID - " + response.data.Result + " Successfully Created.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");

                    }


                    $('#myModalAddNew').click();


                    this.InsertContact = null;

                }
                else {
                    this.HideShow();
                    this.popupMessage("Contact already exists with the entered details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                }
            });
        }

        Add(): void {
            $("#btnCreateInSAP").hide();
            this.InsertContact.ContactID = "";
            this.InsertContact.CustomerID = "";
            this.InsertContact.ContactName = "";
            this.InsertContact.MobileNo = "";
            this.InsertContact.Email = "";
            this.InsertContact.Address = "";
            this.InsertContact.PostalCode = "";
            this.InsertContact.City = "";
            this.InsertContact.DistrictID = "";
            this.InsertContact.Language = "";
            this.InsertContact.Status = "1";
            this.InsertContact.Designation = "";
            this.InsertContact.FOPID = "";
            this.InsertContact.DepartmentID = "";
            this.InsertContact.PhoneNo = "";
            this.InsertContact.RetContactID = "";
            this.InsertContact.SAPID = "";
            this.InsertContact.StateID = "";
            this.InsertContact.CountryID = "";
            this.InsertContact.AssistantName = "";
            this.InsertContact.AssistantPhone = "";
            this.InsertContact.HomePhone = "";
            this.InsertContact.BirthDate = "";
            this.InsertContact.MaritalStatus = "";
            this.InsertContact.Spouse = "";
            this.InsertContact.AnniversaryDate = "";
            this.InsertContact.SpouseBirthDate = "";
            this.InsertContact.Children = "";
            this.InsertContact.SmokingPreference = "";
            this.InsertContact.DrinkingPreference = "";
            this.InsertContact.MealPreference = "";
            this.InsertContact.Comments = "";
        }
        Close(): void {

            location.href = "#!/ContactMaster";

        }


        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }

        public Search(data: any): void {
            this.CustomerSapAutofill.FindCustomerSAPID(data).then((response => {

                this.InsertContact.CustomerSAPID = this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
            }));
        }
    }
    class DeliveryScheduleController implements ng.IComponentOptions {
        static Name: string = "deliveryschedulecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CreateContactController;
            this.templateUrl = "/Scripts/App/DeliverySchedule/Template/DeliverySchedule.html";
        }
    }
    app.AddComponent(DeliveryScheduleController.Name, new DeliveryScheduleController());


}


