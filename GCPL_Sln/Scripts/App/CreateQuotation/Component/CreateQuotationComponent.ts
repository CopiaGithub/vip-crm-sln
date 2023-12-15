namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Quotation = GCPL.Model.InsertQuotationModel;
    import SOS = GCPL.Model.SOSModel;
    import COL = GCPL.Model.COLModel;
    import ProductFeatures = GCPL.Model.ProductFModel;
    import TermsConditions = GCPL.Model.TermsCModel;
    import OfferList = GCPL.Model.OfferModel;
    import Capabilities = GCPL.Model.CapabilityModel;
    import GSTCalculation = GCPL.Model.TotalPriceModel;
    
    

    interface ICreateQuotationController {
        Accessory1DropDown: Array<Model.Accessory1ddlModel>
        Option1DropDown: Array<Model.Option1ddlModel>
        Accessory2DropDown: Array<Model.Accessory2ddlModel>
        Option2DropDown: Array<Model.Option2ddlModel>
        Accessory3DropDown: Array<Model.Accessory3ddlModel>
        Option3DropDown: Array<Model.Option3ddlModel>
        Accessory4DropDown: Array<Model.Accessory4ddlModel>
        Option4DropDown: Array<Model.Option4ddlModel>
        Accessory5DropDown: Array<Model.Accessory5ddlModel>
        Option5DropDown: Array<Model.Option5ddlModel>
        Accessory6DropDown: Array<Model.Accessory6ddlModel>
        Option6DropDown: Array<Model.Option6ddlModel>
        OpportunitySAPNo: any;
        InsertQuotation: Quotation;
        ViewSOS: SOS;
        ViewCOL: COL;
        ViewPF: ProductFeatures;
        ViewTC: TermsConditions;
        ViewOffer: OfferList;
        ViewCapability: Capabilities;
        TotalPriceModel: GSTCalculation;
        Submit(): void;
        Edit(data: any): void;
        QuotationID: any;
        GetOption1(): void;
       
    }

    class CreateQuotationController implements ICreateQuotationController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        private Cookie: any = null;
        UserID = null;
        QuotationRefernce = null;
        OpportunitySAPNo = null;
        Accessory1DropDown = null;
        Option1DropDown = null;
        Accessory2DropDown = null;
        Option2DropDown = null;
        Accessory3DropDown = null;
        Option3DropDown = null;
        Accessory4DropDown = null;
        Option4DropDown = null;
        Accessory5DropDown = null;
        Option5DropDown = null;
        Accessory6DropDown = null;
        Option6DropDown = null;
        Configuration1DropDown = null;
        Configuration2DropDown = null;
        InsertQuotation = null;
        ViewSOS = null;
        ViewCOL = null;
        ViewPF = null;
        ViewTC = null;
        ViewOffer = null;
        ViewCapability = null;
        QuotationID = null;
        Total = null;
        
        TotalPriceModel: GCPL.Model.TotalPriceModel = null;

        private Accessory1Service: Service.IAccessory1DDService;
        private Option1Service: Service.IOption1DDService;
        private Accessory2Service: Service.IAccessory2DDService;
        private Option2Service: Service.IOption2DDService;
        private Accessory3Service: Service.IAccessory3DDService;
        private Option3Service: Service.IOption3DDService;
        private Accessory4Service: Service.IAccessory4DDService;
        private Option4Service: Service.IOption4DDService;
        private Accessory5Service: Service.IAccessory5DDService;
        private Option5Service: Service.IOption5DDService;
        private Accessory6Service: Service.IAccessory6DDService;
        private Option6Service: Service.IOption6DDService;
        private Configuration1Service: Service.IConfiguration1DDService;
        private Configuration2Service: Service.IConfiguration2DDService;
        private SOSService: Service.IScopeofSupplyService;
        private COLService: Service.ICoveringLetterInfoService;
        private PFService: Service.IProductFeaturesInfoService;
        private TCService: Service.ITermsConditionInfoService;
        private OfferService: Service.IOfferingInfoService;
        private CapabilityService: Service.ICapabilitiesInfoService;
        private TotalPriceCalService: Service.ITotalPriceService;
        private InsertService: Service.IInsertQuotationService;
        


        static $inject = ["Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService", "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService", "Option6Service","Configuration1DDService", "Configuration2DDService", "ScopeofSupplyService", "CoveringLetterInfoService", "ProductFeaturesInfoService",
            "TermsConditionInfoService", "OfferingInfoService", "CapabilitiesInfoService", "TotalPriceService", "InsertQuotationService", "$location", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_Accessory1Service: Service.IAccessory1DDService, _Option1Service: Service.IOption1DDService, _Accessory2Service: Service.IAccessory2DDService, _Option2Service: Service.IOption2DDService,
            _Accessory3Service: Service.IAccessory3DDService, _Option3Service: Service.IOption3DDService,
            _Accessory4Service: Service.IAccessory4DDService, _Option4Service: Service.IOption4DDService,
            _Accessory5Service: Service.IAccessory5DDService, _Option5Service: Service.IOption5DDService,
            _Accessory6Service: Service.IAccessory6DDService, _Option6Service: Service.IOption6DDService, _Configuration1Service: Service.IConfiguration1DDService,
            _Configuration2Service: Service.IConfiguration2DDService, _SOSService: Service.IScopeofSupplyService, _COLService: Service.ICoveringLetterInfoService,
            _PFService: Service.IProductFeaturesInfoService, _TCService: Service.ITermsConditionInfoService, _OfferService: Service.IOfferingInfoService, _CapabilityService: Service.ICapabilitiesInfoService,
            _TotalPriceCalService: Service.ITotalPriceService, _InsertService: Service.IInsertQuotationService, private $location: ng.ILocationService, private _cookieStore: any) {

            this.Accessory1Service = _Accessory1Service;
            this.Option1Service = _Option1Service;
            this.Accessory2Service = _Accessory2Service;
            this.Option2Service = _Option2Service;
            this.Accessory3Service = _Accessory3Service;
            this.Option3Service = _Option3Service;
            this.Accessory4Service = _Accessory4Service;
            this.Option4Service = _Option4Service;
            this.Accessory5Service = _Accessory5Service;
            this.Option5Service = _Option5Service;
            this.Accessory6Service = _Accessory6Service;
            this.Option6Service = _Option6Service;
            this.Configuration1Service = _Configuration1Service;
            this.Configuration2Service = _Configuration2Service;
            this.SOSService = _SOSService;
            this.COLService = _COLService;
            this.PFService = _PFService;
            this.TCService = _TCService;
            this.OfferService = _OfferService;
            this.CapabilityService = _CapabilityService;
            
            this.TotalPriceCalService = _TotalPriceCalService;
            this.TotalPriceModel = new GSTCalculation();
            this.OpportunitySAPNo = $location.search().OpportunitySAPNo;
            this.QuotationRefernce = $location.search().QuotationRefernce;
            this.InsertService = _InsertService;
            
            this.InsertQuotation = new Quotation();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
        }



        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            /* Add row code started */
            var tableBody = <HTMLTableElement> document.getElementById("table-bdy");
            var addBtn = document.getElementById("add-row");
            var nRow = document.getElementsByClassName("n-row");
            var rowData = document.getElementById("acc-drop").innerHTML;

            

            addBtn.addEventListener("click", function () {
                var row = tableBody.insertRow(5);
                var cell0 = row.insertCell(0)
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);

                var deleteBtn = document.createElement("button");
                var deleteBtnText = document.createTextNode("Delete");
                deleteBtn.appendChild(deleteBtnText);

                cell0.innerHTML = "";
                cell1.innerHTML = rowData + "" + "<button class='del-btn'>Delete</button>";
                cell1.classList.add("n-row");
                cell2.innerHTML = "";
                cell3.innerHTML = "";
                
            })
        
            /* Add row code ended */
            var delRow = document.getElementsByClassName("del-btn");

            for (var j = 0; j < delRow.length; j++) {
                delRow[j].addEventListener("click", function () {
                    alert("actie...");
                })
            }

            

        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            var n1 = new Date();
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();
            (<HTMLInputElement>document.getElementById("txtFromDate")).innerHTML = d1 + " " + m1 + " " + y1;
            $('#txtFromDate').val(d1 + " " + m1 + " " + y1);
            //$("#txtFromDate").datepicker({ maxDate: 0 });
            (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            $("#txtFromDate").datepicker({
                dateFormat: 'dd M yy',
                changeMonth: true,
                changeYear: true,
                maxDate: 0,
                onSelect: this.selectFromDate
            });
            
            if (this.OpportunitySAPNo != null || this.OpportunitySAPNo != "" || this.OpportunitySAPNo != undefined) {
                this.InsertQuotation.OpportunitySAPNo = this.OpportunitySAPNo;
                this.Edit(this.OpportunitySAPNo);
            }
            
          
        }
        Edit(data: any): void {
            
            this.SOSService.Find(data).then((response => {
                this.ViewSOS = this.SOSService.GetSOS(response.data.Result);
                
                this.InsertQuotation.StdConfiguration = this.ViewSOS.StdConfiguration;
                this.InsertQuotation.Price = this.ViewSOS.Price;
                this.InsertQuotation.Quantity = this.ViewSOS.Quantity;
                this.InsertQuotation.GSTRate = this.ViewSOS.GSTRate;
                this.InsertQuotation.ModelID = this.ViewSOS.ModelID;
                this.InsertQuotation.ModelDescription = this.ViewSOS.ModelDescription;
                this.Accessory1DropDown = this.Accessory1Service.Find(this.InsertQuotation.ModelID).then((response => {
                    this.Accessory1DropDown = this.Accessory1Service.GetAccessoryName(response.data.Result);

                }));
                this.Accessory2DropDown = this.Accessory2Service.Find(this.InsertQuotation.ModelID).then((response => {
                    this.Accessory2DropDown = this.Accessory2Service.GetAccessoryName(response.data.Result);

                }));
                this.Accessory3DropDown = this.Accessory3Service.Find(this.InsertQuotation.ModelID).then((response => {
                    this.Accessory3DropDown = this.Accessory3Service.GetAccessoryName(response.data.Result);

                }));
                this.Accessory4DropDown = this.Accessory4Service.Find(this.InsertQuotation.ModelID).then((response => {
                    this.Accessory4DropDown = this.Accessory4Service.GetAccessoryName(response.data.Result);

                }));
                this.Accessory5DropDown = this.Accessory5Service.Find(this.InsertQuotation.ModelID).then((response => {
                    this.Accessory5DropDown = this.Accessory5Service.GetAccessoryName(response.data.Result);

                }));
                this.Accessory6DropDown = this.Accessory6Service.Find(this.InsertQuotation.ModelID).then((response => {
                    this.Accessory6DropDown = this.Accessory6Service.GetAccessoryName(response.data.Result);

                }));

            }));
           
            this.COLService.Find(data).then((response => {
                this.ViewCOL = this.COLService.GetCL(response.data.Result);
                this.InsertQuotation.QuoteRange = this.ViewCOL.QuoteRange;
                
                
            }));
            this.PFService.Find(data).then((response => {
                this.ViewPF = this.PFService.GetPF(response.data.Result);
               
            }));
            this.TCService.Find().then((response => {
                this.ViewTC = this.TCService.GetTC(response.data.Result);
            }));
            this.OfferService.Find().then((response => {
                this.ViewOffer = this.OfferService.GetOffer(response.data.Result);
            }));
            this.CapabilityService.Find().then((response => {
                this.ViewCapability = this.CapabilityService.GetCapability(response.data.Result);
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
        
        CheckPrice(): void {
            
            this.InsertQuotation.TotalPrice = null;
            this.InsertQuotation.TotalTax = null;
            this.TotalPriceModel.Price = this.InsertQuotation.Price;
            this.TotalPriceModel.Quantity = this.InsertQuotation.Quantity;
            this.TotalPriceModel.GSTRate = this.InsertQuotation.GSTRate;
            this.Total = this.TotalPriceCalService.FindChange(this.TotalPriceModel).then((response => {
                this.Total = this.TotalPriceCalService.GetTotalPriceChange(response.data.Result);


                //this.TotalPriceModel.Price = this.Total.Price;
                this.InsertQuotation.TotalPrice = this.Total.TotalPrice;
                this.InsertQuotation.TotalTax = this.Total.TotalTax;
                //this.TotalPriceModel.Quantity = this.Total.Quantity;
               // this.TotalPriceModel.ConvertedGST = this.Total.ConvertedGST;
                

            }));
        }

        Submit(): void {
            
            if ($("#chkPF1").prop('checked') == true) {
                this.InsertQuotation.PF1 = "1";
            }
            if ($("#chkPF2").prop('checked') == true) {
                this.InsertQuotation.PF2 = "2";
            }
            if ($("#chkPF3").prop('checked') == true) {
                this.InsertQuotation.PF3 = "3";
            }
            if ($("#chkPF4").prop('checked') == true) {
                this.InsertQuotation.PF4 = "4";
            }
            if ($("#chkPF5").prop('checked') == true) {
                this.InsertQuotation.PF5 = "5";
            }
            if ($("#chkPF6").prop('checked') == true) {
                this.InsertQuotation.PF6 = "6";
            }
            if ($("#chkPF7").prop('checked') == true) {
                this.InsertQuotation.PF7 = "7";
            }
            if ($("#chkPF8").prop('checked') == true) {
                this.InsertQuotation.PF1 = "8";
            }
            if ($("#chkPF9").prop('checked') == true) {
                this.InsertQuotation.PF2 = "9";
            }
            if ($("#chkPF10").prop('checked') == true) {
                this.InsertQuotation.PF3 = "10";
            }
            if ($("#chkPF11").prop('checked') == true) {
                this.InsertQuotation.PF4 = "11";
            }
            if ($("#chkPF12").prop('checked') == true) {
                this.InsertQuotation.PF5 = "12";
            }
            if ($("#chkPF13").prop('checked') == true) {
                this.InsertQuotation.PF1 = "13";
            }
            if ($("#chkPF14").prop('checked') == true) {
                this.InsertQuotation.PF2 = "14";
            }
            if ($("#chkPF15").prop('checked') == true) {
                this.InsertQuotation.PF3 = "15";
            }
            if ($("#chkPF16").prop('checked') == true) {
                this.InsertQuotation.PF4 = "16";
            }
            if ($("#chkPF17").prop('checked') == true) {
                this.InsertQuotation.PF1 = "17";
            }
            if ($("#chkPF18").prop('checked') == true) {
                this.InsertQuotation.PF2 = "18";
            }
            if ($("#chkPF19").prop('checked') == true) {
                this.InsertQuotation.PF3 = "19";
            }
            if ($("#chkPF20").prop('checked') == true) {
                this.InsertQuotation.PF4 = "20";
            }
            if ($("#chkPF21").prop('checked') == true) {
                this.InsertQuotation.PF5 = "21";
            }
            if ($("#chkPF22").prop('checked') == true) {
                this.InsertQuotation.PF6 = "22";
            }
            

            if ($("#chkTC1").prop('checked') == true) {
                this.InsertQuotation.TC1 = $("#txtTC1").val();
                this.InsertQuotation.TC1ID = 1;
            }
            if ($("#chkTC2").prop('checked') == true) {
                this.InsertQuotation.TC2 = $("#txtTC2").val();
                this.InsertQuotation.TC2ID = 2;
            }
            if ($("#chkTC3").prop('checked') == true) {
                this.InsertQuotation.TC3 = $("#txtTC3").val();
                this.InsertQuotation.TC3ID = 3;
            }
            if ($("#chkTC4").prop('checked') == true) {
                this.InsertQuotation.TC4 = $("#txtTC4").val();
                this.InsertQuotation.TC4ID = 4;
            }
            if ($("#chkTC5").prop('checked') == true) {
                this.InsertQuotation.TC5 = $("#txtTC5").val();
                this.InsertQuotation.TC5ID = 5;
            }
            if ($("#chkTC6").prop('checked') == true) {
                this.InsertQuotation.TC6 = $("#txtTC6").val();
                this.InsertQuotation.TC6ID = 6;
            }
            if ($("#chkTC7").prop('checked') == true) {
                this.InsertQuotation.TC7 = $("#txtTC7").val();
                this.InsertQuotation.TC7ID = 7;
            }
            if ($("#chkTC8").prop('checked') == true) {
                this.InsertQuotation.TC8 = $("#txtTC8").val();
                this.InsertQuotation.TC8ID = 8;
            }


            if ($("#chkOffer1").prop('checked') == true) {
                this.InsertQuotation.Offer1 = "1";
            }
            if ($("#chkOffer2").prop('checked') == true) {
                this.InsertQuotation.Offer2 = "2";
            }
            if ($("#chkOffer3").prop('checked') == true) {
                this.InsertQuotation.Offer3 = "3";
            }
            if ($("#chkOffer4").prop('checked') == true) {
                this.InsertQuotation.Offer4 = "4";
            }
            if ($("#chkOffer5").prop('checked') == true) {
                this.InsertQuotation.Offer5 = "5";
            }
            if ($("#chkOffer6").prop('checked') == true) {
                this.InsertQuotation.Offer6 = "6";
            }


            if ($("#chkCapability1").prop('checked') == true) {
                this.InsertQuotation.Capability1 = "1";
            }
            if ($("#chkCapability2").prop('checked') == true) {
                this.InsertQuotation.Capability2 = "2";
            }
            if ($("#chkCapability3").prop('checked') == true) {
                this.InsertQuotation.Capability3 = "3";
            }
            if ($("#chkCapability4").prop('checked') == true) {
                this.InsertQuotation.Capability4 = "4";
            }
            if ($("#chkCapability5").prop('checked') == true) {
                this.InsertQuotation.Capability5 = "5";
            }
            if ($("#chkCapability6").prop('checked') == true) {
                this.InsertQuotation.Capability6 = "6";
            }
            this.InsertQuotation.ContactName = this.ViewCOL.ContactName;
            this.InsertQuotation.CustomerAddress = this.ViewCOL.Address;
            
            if (this.InsertQuotation.TotalPrice == undefined || this.InsertQuotation.TotalPrice == null || this.InsertQuotation.TotalPrice == "") {
                this.HideShow();
                this.popupMessage("Please Check Total Price.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {

            this.InsertQuotation.UserID = this.UserID;
            
                if (this.UserID != null || this.UserID != "") {
                    this.InsertQuotation.UserID = this.UserID;
                }
                
                this.InsertQuotation.QuoteDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
                this.InsertService.PostQuote(this.InsertQuotation).then((response => {
                    
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Quotation Reference - " + this.InsertQuotation.QuoteRange + "  Created Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");                        
                        this.InsertQuotation = null;
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                   
                }));
            }

        }

        GetOption1(): void {
            this.Option1DropDown = this.Option1Service.Find(this.InsertQuotation.Accessory1ID).then((response => {
                this.Option1DropDown = this.Option1Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption2(): void {
            this.Option2DropDown = this.Option2Service.Find(this.InsertQuotation.Accessory2ID).then((response => {
                this.Option2DropDown = this.Option2Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption3(): void {
            this.Option3DropDown = this.Option3Service.Find(this.InsertQuotation.Accessory3ID).then((response => {
                this.Option3DropDown = this.Option3Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption4(): void {
            this.Option4DropDown = this.Option4Service.Find(this.InsertQuotation.Accessory4ID).then((response => {
                this.Option4DropDown = this.Option4Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption5(): void {
            this.Option5DropDown = this.Option5Service.Find(this.InsertQuotation.Accessory5ID).then((response => {
                this.Option5DropDown = this.Option5Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption6(): void {
            this.Option6DropDown = this.Option6Service.Find(this.InsertQuotation.Accessory6ID).then((response => {
                this.Option6DropDown = this.Option6Service.GetAccessory(response.data.Result);

            }));
        }

        Close(): void {

            location.href = "#!/QuotationList";

        }

    }
    class CreateQuotationComponentController implements ng.IComponentOptions {
        static Name: string = "createquotationcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CreateQuotationController;
            this.templateUrl = "/Scripts/App/CreateQuotation/Template/CreateQuotation.html";
        }
    }
    app.AddComponent(CreateQuotationComponentController.Name, new CreateQuotationComponentController());


}