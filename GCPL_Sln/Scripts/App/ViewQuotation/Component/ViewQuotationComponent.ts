namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import ViewList = GCPL.Model.ViewQuoteModel;
    import TermsConditions = GCPL.Model.TermsCModel;

    interface IViewQuotationController {
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
        OpportunityNo: any;
        View(data: any): void;      
        
        ViewQuote: ViewList;
        ViewTC: TermsConditions;
    }

    class ViewQuotationController implements IViewQuotationController {
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
        OpportunityNo = null;
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
        ViewQuote = null;
        ViewTC = null;

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
        private ViewQuoteService: Service.IViewQuotationService;
        private TCService: Service.ITermsConditionInfoService;
        

        static $inject = ["Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService", "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService", "Option6Service",
            "ViewQuotationService", "TermsConditionInfoService", "$location", "$cookieStore",];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_Accessory1Service: Service.IAccessory1DDService, _Option1Service: Service.IOption1DDService, _Accessory2Service: Service.IAccessory2DDService, _Option2Service: Service.IOption2DDService,
            _Accessory3Service: Service.IAccessory3DDService, _Option3Service: Service.IOption3DDService, _Accessory4Service: Service.IAccessory4DDService, _Option4Service: Service.IOption4DDService, _Accessory5Service: Service.IAccessory5DDService, _Option5Service: Service.IOption5DDService,
            _Accessory6Service: Service.IAccessory6DDService, _Option6Service: Service.IOption6DDService, _ViewQuoteService: Service.IViewQuotationService, _TCService: Service.ITermsConditionInfoService,
            private $location: ng.ILocationService, private _cookieStore: any) {

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
            this.ViewQuoteService = _ViewQuoteService;
            this.TCService = _TCService;
            this.OpportunityNo = $location.search().OpportunityNo;           
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
        }



        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            /* Add row code started */
            var tableBody = <HTMLTableElement>document.getElementById("table-bdy");
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
       
        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            
            
            if (this.OpportunityNo != null || this.OpportunityNo != "" || this.OpportunityNo != undefined) {
                
                this.View(this.OpportunityNo);
            }

            
        }

        View(data: any): void {
            
            this.ViewQuoteService.Find(this.OpportunityNo).then((response => {
                this.ViewQuote = this.ViewQuoteService.GetQuote(response.data.Result);
                
                if (this.ViewQuote.PF1 == "0") {
                    $("#PF1").hide();
                }
                if (this.ViewQuote.PF2 == "0") {
                    $("#PF2").hide();
                }
                if (this.ViewQuote.PF3 == "0") {
                    $("#PF3").hide();
                }
                if (this.ViewQuote.PF4 == "0") {
                    $("#PF4").hide();
                }
                if (this.ViewQuote.PF5 == "0") {
                    $("#PF5").hide();
                }
                if (this.ViewQuote.PF6 == "0") {
                    $("#PF6").hide();
                }
                if (this.ViewQuote.PF7 == "0") {
                    $("#PF7").hide();
                }
                if (this.ViewQuote.TC1 == "NA") {
                    $("#TC1").hide();
                }
                if (this.ViewQuote.TC2 == "NA") {
                    $("#TC2").hide();
                }
                if (this.ViewQuote.TC3 == "NA") {
                    $("#TC3").hide();
                }
                if (this.ViewQuote.TC4 == "NA") {
                    $("#TC4").hide();
                }
                if (this.ViewQuote.TC5 == "NA") {
                    $("#TC5").hide();
                }
                if (this.ViewQuote.TC6 == "NA") {
                    $("#TC6").hide();
                }
                if (this.ViewQuote.TC7 == "NA") {
                    $("#TC7").hide();
                }
                if (this.ViewQuote.TC8 == "NA") {
                    $("#TC8").hide();
                }
                if (this.ViewQuote.OF1 == "0") {
                    $("#OF1").hide();
                }
                if (this.ViewQuote.OF2 == "0") {
                    $("#OF2").hide();
                }
                if (this.ViewQuote.OF3 == "0") {
                    $("#OF3").hide();
                }
                if (this.ViewQuote.OF4 == "0") {
                    $("#OF4").hide();
                }
                if (this.ViewQuote.OF5 == "0") {
                    $("#OF5").hide();
                }
                if (this.ViewQuote.OF6 == "0") {
                    $("#OF6").hide();
                }
                if (this.ViewQuote.C1 == "0") {
                    $("#C1").hide();
                }
                if (this.ViewQuote.C2 == "0") {
                    $("#C2").hide();
                }
                if (this.ViewQuote.C3 == "0") {
                    $("#C3").hide();
                }
                if (this.ViewQuote.C4 == "0") {
                    $("#C4").hide();
                }
                if (this.ViewQuote.C5 == "0") {
                    $("#C5").hide();
                }
                if (this.ViewQuote.C6 == "0") {
                    $("#C6").hide();
                }
                this.Accessory1DropDown = this.Accessory1Service.Find(this.ViewQuote.ModelID).then((response => {
                    this.Accessory1DropDown = this.Accessory1Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory1ID = this.Accessory1DropDown[0].Accessory1ID.toString();
                }));
                this.Accessory2DropDown = this.Accessory2Service.Find(this.ViewQuote.ModelID).then((response => {
                    this.Accessory2DropDown = this.Accessory2Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory2ID = this.Accessory2DropDown[0].Accessory2ID.toString();
                }));
                this.Accessory3DropDown = this.Accessory3Service.Find(this.ViewQuote.ModelID).then((response => {
                    this.Accessory3DropDown = this.Accessory3Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory3ID = this.Accessory3DropDown[0].Accessory3ID.toString();
                }));
                this.Accessory4DropDown = this.Accessory4Service.Find(this.ViewQuote.ModelID).then((response => {
                    this.Accessory4DropDown = this.Accessory4Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory4ID = this.Accessory4DropDown[0].Accessory4ID.toString();
                }));
                this.Accessory5DropDown = this.Accessory5Service.Find(this.ViewQuote.ModelID).then((response => {
                    this.Accessory5DropDown = this.Accessory5Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory5ID = this.Accessory5DropDown[0].Accessory5ID.toString();
                }));
                this.Accessory6DropDown = this.Accessory6Service.Find(this.ViewQuote.ModelID).then((response => {
                    this.Accessory6DropDown = this.Accessory6Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory6ID = this.Accessory6DropDown[0].Accessory6ID.toString();
                }));
                
                this.GetOption1(this.ViewQuote.Accessory1ID);
                this.GetOption2(this.ViewQuote.Accessory2ID);
                this.GetOption3(this.ViewQuote.Accessory3ID);
                this.GetOption4(this.ViewQuote.Accessory4ID);
                this.GetOption5(this.ViewQuote.Accessory5ID);
                this.GetOption6(this.ViewQuote.Accessory6ID);

            }));
            
        }
        GetOption1(data: any): void {
            this.Option1DropDown = this.Option1Service.Find(this.ViewQuote.Accessory1ID).then((response => {
                this.Option1DropDown = this.Option1Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption2(data: any): void {
            this.Option2DropDown = this.Option2Service.Find(this.ViewQuote.Accessory2ID).then((response => {
                this.Option2DropDown = this.Option2Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption3(data: any): void {
            this.Option3DropDown = this.Option3Service.Find(this.ViewQuote.Accessory3ID).then((response => {
                this.Option3DropDown = this.Option3Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption4(data: any): void {
            this.Option4DropDown = this.Option4Service.Find(this.ViewQuote.Accessory4ID).then((response => {
                this.Option4DropDown = this.Option4Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption5(data: any): void {
            this.Option5DropDown = this.Option5Service.Find(this.ViewQuote.Accessory5ID).then((response => {
                this.Option5DropDown = this.Option5Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption6(data: any): void {
            this.Option6DropDown = this.Option6Service.Find(this.ViewQuote.Accessory6ID).then((response => {
                this.Option6DropDown = this.Option6Service.GetAccessory(response.data.Result);

            }));
        }
        Close(): void {

            location.href = "#!/QuotationReport";

        }

    }
    class ViewQuotationComponentController implements ng.IComponentOptions {
        static Name: string = "viewquotationcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ViewQuotationController;
            this.templateUrl = "/Scripts/App/ViewQuotation/Template/_ViewQuotation.html";
        }
    }
    app.AddComponent(ViewQuotationComponentController.Name, new ViewQuotationComponentController());


}