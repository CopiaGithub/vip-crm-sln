namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import TargetSearch = GCPL.Model.TargetHeadermodel;
    import ModelMaster = GCPL.Model.InsertModelMaster;
    import TargetList = GCPL.Model.TargetGridListModel;
    import InsertTargetMaster = GCPL.Model.InsertTargetModel;
    import EditTarget = GCPL.Model.EditTargetModel;
    import ShowTarget = GCPL.Model.CheckTargetModel;
    import CheckTarget = GCPL.Model.CheckParameterModel;
    
    interface ITargetListController {
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        OppTypeDropDown: Array<Model.OppTypeddlModel>
        OppTypeDropDown1: Array<Model.OppTypeddlModel>
        DivisionDropDown: Array<Model.DivisionddlModel>
        ZoneDD: ng.IPromise<Utility.Ajax.IResponse>;
        ProductDropDown: Array<Model.ProductddModel>
        ModelDropDown: Array<Model.ModelDDModel>
        UserDropDown:Array<Model.EmpUserDropDownModel>
        UserDropDown1:Array<Model.EmpUserDropDownModel>
        YearDropdown: Array<Model.YearDDModel>
        MonthDropdown: Array<Model.MonthDDModel>
        TargetSearch: TargetSearch;
        TargetList: Array<Model.TargetGridListModel>
        InsertTarget: InsertTargetMaster
        Edit(data: any): void;
        EditTarget: InsertTargetMaster;
        TargetID: any;
        DeleteTarget(TargetID: any): void; 
       // InsertTarget: TargetList;
        ProductDropDown1: Array<Model.ProductddModel>
        ModelDropDown1: Array<Model.ModelDDModel>
        DivisionDropDown1: Array<Model.DivisionddlModel>
        TargetCount: any;
        Check: CheckTarget
    }


    class TargetListController implements ITargetListController {
        LeadTypeDropDown = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        ab = null;
        TargetID = null;
        InsertTarget = null;
        UserDropDown = null;
        UserDropDown1 = null;
        //OpportunityTypeDropDown = null;
        TargetList = null;
        YearDropdown = null;
        ZoneDD = null;
        OppTypeDropDown = null;
        DivisionDropDown = null;
        ProductDropDown = null;
        ModelDropDown = null;
        MonthDropdown = null;
        TargetSearch = null; 
        EditTarget = null;
        RoleID = null;
        UserID = null
        TOT = 0;
        DivisionDropDown1 = null;
        ProductDropDown1 = null;
        ModelDropDown1 = null;
        OppTypeDropDown1 = null;
        TargetCount = null;
        private Cookie: any = null;
        Show: GCPL.Model.CheckTargetModel = null;
        Check = null;
        private LeadTypeService: Service.ILeadTypeddService;
        private ZoneDDService: Service.IZoneDDService;  
        private YearService: Service.IYearddService;   
        private MonthService: Service.IMonthddService;
        private InsertService: Service.IInsertTargetService;
        private ListService: Service.ITargetListService;
        private EditService: Service.ITargetEditService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
        private ZoneWiseEMPUserService: Service.IZoneWiseEMPUserService;     
        private OpportunityTypeService: Service.IOpportunityTypeService;
        private DeleteTargetService: Service.IDeleteTargetService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService;
        private OppTypeService: Service.IOpportunityTypeddService;
        private DivisionService: Service.IDivisionService;
        private ShowTargetService: Service.IShowExistingTargetListService;
 
        static $inject = ["ZoneDDService", "YearddService", "MonthddService", "InsertTargetService", "TargetListService", "TargetEditService", "EmployeeAtofillService", "ZoneWiseEMPUserService", "OpportunityTypeService", "DeleteTargetService", "ProductddService", "LeadTypeProductService", "OpportunityTypeddService", "DivisionService", "ShowExistingTargetListService", "LeadTypeddService", "$cookieStore"];

        //constructor define with Serivce _Name:Service.IServiceName//
        constructor( _ZoneDDService: Service.IZoneDDService, _YearService: Service.IYearddService, _MonthService: Service.IMonthddService,
            _InsertService: Service.IInsertTargetService, _ListService: Service.ITargetListService, _EditService: Service.ITargetEditService, _getAutoSalesrep1: Service.IEmployeeAtofillService,
            _ZoneWiseEMPUserService: Service.IZoneWiseEMPUserService, _oppType: Service.IOpportunityTypeService, _Del: Service.IDeleteTargetService, _ProductService: Service.IProductddService, _ModelService: Service.ILeadTypeProductService, _OppTypeService: Service.IOpportunityTypeddService, _DivisionService: Service.IDivisionService, _ShowTargetService: Service.IShowExistingTargetListService, _LeadTypeService: Service.ILeadTypeddService, private _cookieStore: any) {
           
                     
            this.ZoneDDService = _ZoneDDService;                    
            this.YearService = _YearService;
            this.MonthService = _MonthService;
            this.InsertService = _InsertService;
            this.InsertTarget = new InsertTargetMaster();
            this.ListService = _ListService;
            this.TargetSearch = new GCPL.Model.TargetHeadermodel();
            this.EditService = _EditService;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.ZoneWiseEMPUserService = _ZoneWiseEMPUserService;
            this.OpportunityTypeService = _oppType;
            this.DeleteTargetService = _Del;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.OppTypeService = _OppTypeService;
            this.DivisionService = _DivisionService;
            this.ShowTargetService = _ShowTargetService;
            this.Show = new ShowTarget();
            this.Check = new CheckTarget();
            this.LeadTypeService = _LeadTypeService;
            this.Cookie = _cookieStore;
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
          
        }

        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();
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
            
            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));
           
             this.ZoneDD = this.ZoneDDService.Find().then((response => {
             this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            })); 
            
            this.MonthDropdown = this.MonthService.Find().then((response => {
                this.MonthDropdown = this.MonthService.GetMonthDD(response.data.Result);
            }));

            this.YearDropdown = this.YearService.Find().then((response => {
                this.YearDropdown = this.YearService.GetYearDD(response.data.Result);
            }));

            
            if (this.TargetSearch.Year == "" || this.TargetSearch.Year == null)
            {
                
                this.TargetSearch.Year = "2019";
            }
            this.DivisionDropDown1 = this.DivisionService.Find().then((response => {
                this.DivisionDropDown1 = this.DivisionService.GetDivisionName(response.data.Result);

            }));
        }

        Division(): void {

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);

            }));
        }
        Product(): void {
            debugger;
            this.ProductDropDown = this.ProductService.Find(this.TargetSearch.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));
        }
        
        Model(): void {
            
            this.ModelDropDown = this.ModelService.Find(this.TargetSearch).then((response => {
                this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }
       

        
        Product1(data): void {
            debugger;
            this.ProductDropDown1 = this.ProductService.Find(data).then((response => {
                this.ProductDropDown1 = this.ProductService.GetProductName(response.data.Result);
            }));
        }
        
        Model1(data): void {
            debugger;
           
            this.ModelDropDown1 = this.ModelService.Find(data).then((response => {
                this.ModelDropDown1 = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }

        ZoneWiseUser(): void {
            debugger;
            this.UserDropDown = this.ZoneWiseEMPUserService.Find(this.TargetSearch.ZoneID).then((response => {
                this.UserDropDown = this.ZoneWiseEMPUserService.GetUserName(response.data.Result);
            }));
        }

        ZoneWiseUser1(data: any): void {
            debugger;
            this.UserDropDown1 = this.ZoneWiseEMPUserService.Find(this.InsertTarget.ZoneID).then((response => {
                this.UserDropDown1 = this.ZoneWiseEMPUserService.GetUserName(response.data.Result);
            }));
        }

        SearchTargetList(): void {
            
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            this.TOT = 0;
            debugger;

            this.TargetList = this.ListService.Find(this.TargetSearch).then((response => {
                this.TargetList = this.ListService.GetTargetList(response.data.Result);
                debugger;
                for (var i = 0; i < this.TargetList.length; i++) {
                    this.TOT += parseInt(this.TargetList[i].Quantity);
                }
                
                $('#page-loader').hide();
                $('#search-btn-loader').hide();
                debugger;
               
                if (this.TargetList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.TargetList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.TargetList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.TargetList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.TargetList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.TargetList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.TargetList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.TargetList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
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
            if (this.InsertTarget.ID == undefined || this.InsertTarget.ID == null || this.InsertTarget.ID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Opportunity Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
           else if (this.InsertTarget.DivisionID == undefined || this.InsertTarget.DivisionID == null || this.InsertTarget.DivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SBU", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertTarget.ProductID == undefined || this.InsertTarget.ProductID == null || this.InsertTarget.ProductID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Family", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertTarget.ModelID == undefined || this.InsertTarget.ModelID == null || this.InsertTarget.ModelID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
           else if (this.InsertTarget.ZoneID == undefined || this.InsertTarget.ZoneID == null || this.InsertTarget.ZoneID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }        
           else if (this.InsertTarget.UserID == undefined || this.InsertTarget.UserID == null || this.InsertTarget.UserID == "") {
                this.HideShow();
                this.popupMessage("Please Enter User Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
          else  if (this.InsertTarget.Year == undefined || this.InsertTarget.Year == null || this.InsertTarget.Year == "") {
                this.HideShow();
                this.popupMessage("Please Enter Year", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
           else if (this.InsertTarget.Month == undefined || this.InsertTarget.Month == null || this.InsertTarget.Month == "") {
                this.HideShow();
                this.popupMessage("Please Enter Month", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
           else if (this.InsertTarget.Quantity == undefined || this.InsertTarget.Quantity == null || this.InsertTarget.Quantity == "") {
                this.HideShow();
                this.popupMessage("Please Enter Quantity", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                debugger;
                this.Check.ID = this.InsertTarget.ID;
                this.Check.ModelID =this.InsertTarget.ModelID;
                this.Check.UserID = this.InsertTarget.UserID;
                this.Check.Year =this.InsertTarget.Year;
                this.Check.Month =this.InsertTarget.Month;

                this.TargetCount = this.ShowTargetService.Find(this.Check).then((response => {
                    this.TargetCount = this.ShowTargetService.GetTarget(response.data.Result);
                    debugger;
                    if (this.TargetCount == "0") {

                        this.InsertService.PostTarget(this.InsertTarget).then((response => {

                            console.log(this.InsertTarget);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                this.popupMessage("Target saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                                         
                                $('#myModalAddNew').click();
                                this.InsertTarget = null;
                                this.TargetList = this.ListService.Find(this.TargetSearch).then((response => {
                                    this.TargetList = this.ListService.GetTargetList(response.data.Result);
                                }));
                            }
                            else {
                                this.HideShow();
                                this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }

                            
                        }));

                    }
                    else {
                        this.HideShow();
                        this.popupMessage(" Target Already Exists..", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                       
                    }
                }));
               
                
            }
            
        }
       
        Edit(data: any): void {
            this.EditService.Find(data).then((response => {
                this.EditTarget = this.EditService.GetEdit(response.data.Result);
                debugger;
              
                this.InsertTarget.ID = this.EditTarget.ID;
                this.InsertTarget.DivisionID = this.EditTarget.DivisionID;
               
               // this.InsertTarget.LeadTypeID = this.InsertTarget.LeadTypeID.toString();                              
                this.ProductDropDown1 = this.ProductService.Find(this.EditTarget.DivisionID).then((response => {
                    this.ProductDropDown1 = this.ProductService.GetProductName(response.data.Result);
                    this.InsertTarget.ProductID = this.EditTarget.ProductID;
                    this.ModelDropDown1 = this.ModelService.Find(this.EditTarget).then((response => {
                        this.ModelDropDown1 = this.ModelService.GetLeadTypeProduct(response.data.Result);
                        this.InsertTarget.ModelID = this.EditTarget.ModelID;
                    }));
                }));
               // this.Model1(this.InsertTarget);
               // this.InsertTarget.ModelID = this.InsertTarget.ModelID.toString();
               
                                  
              //  this.InsertTarget.ZoneID = this.InsertTarget.ZoneID.toString();
                this.InsertTarget.ZoneID = this.EditTarget.ZoneID; 
                this.UserDropDown1 = this.ZoneWiseEMPUserService.Find(this.EditTarget.ZoneID).then((response => {
                    this.UserDropDown1 = this.ZoneWiseEMPUserService.GetUserName(response.data.Result);
                    this.InsertTarget.UserID = this.EditTarget.UserID;
                }));
                //this.ZoneWiseUser1(this.InsertTarget.ZoneID);
               // this.InsertTarget.UserID = this.InsertTarget.UserID.toString();
                this.InsertTarget.Month = this.EditTarget.Month;     
                this.InsertTarget.Year = this.EditTarget.Year;
                this.InsertTarget.Quantity = this.EditTarget.Quantity ;          
                $("myModalAddNew").show();

            }));

        }

        DeleteTarget(TargetID): void {
            this.DeleteTargetService.Find(TargetID).then((response => {
                this.DeleteTargetService.postTargetDelete(response.data.Result);
                $("#errorclose").hide();
                $("#close").show();
                this.popupMessage("Record deleted successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                this.TargetList = this.ListService.Find(this.TargetSearch).then((response => {
                    this.TargetList = this.ListService.GetTargetList(response.data.Result);
                }));
            }));
        } 

        Add() {

            //this.InsertTarget.TargetID = "";
            this.InsertTarget.ID = "";
            this.InsertTarget.DivisionID = "";
            this.InsertTarget.ZoneID = "";
            this.InsertTarget.ProductID = "";
            this.InsertTarget.ModelID = "";
            this.InsertTarget.UserID = "";
            this.InsertTarget.Year = "";
            this.InsertTarget.Month = "";
            this.InsertTarget.Quantity = "";
        }

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Clear() {
            
                this.TargetSearch.ID = "";
                this.TargetSearch.DivisionID = "";
                this.TargetSearch.ZoneID = "";
                this.TargetSearch.ProductID = "";
                this.TargetSearch.ModelID = "";
                this.TargetSearch.UserID = "";
                this.TargetSearch.Year = "";
                this.TargetSearch.Month = "";
           

        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.TargetList.slice(begin, end);
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
            this.shownItems = this.TargetList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Close(): void {

            location.href = "#!/TargetList";

        }
       
    }
    class TargetListComponentController implements ng.IComponentOptions {
        static Name: string = "targetlistcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = TargetListController;
            this.templateUrl = "/Scripts/App/TargetList/Template/TargetList.html";
        }
    }
    app.AddComponent(TargetListComponentController.Name, new TargetListComponentController());

}