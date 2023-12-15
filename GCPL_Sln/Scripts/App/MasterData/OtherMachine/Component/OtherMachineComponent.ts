namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import OtherMachinesHeader = GCPL.Model.OtherMachinesHeaderModel;
    import InsertOM = GCPL.Model.OtherMachinesEditModel;

    interface IOtherMachineController {
        EditOtherMachine(data): void;
        OtherMachinesHeaderModel: OtherMachinesHeader;
        InsertOtherMachines: InsertOM;
        Search(): void;
        MachineId: any;
        DeleteCompetitor(MachineId: any): void; 
        Submit(): void;
        
        CompetitorNameDDown: Array<Model.CompetitorNameddlModel>
        CompProductDropDown: Array<Model.CompProductDDModel>
        CompModelDropDown: Array<Model.CompModelDDModel>
        CompProductDropDown1: Array<Model.CompProductDDModel>
        CompModelDropDown1: Array<Model.CompModelDDModel>
    }

    class OtherMachineController implements IOtherMachineController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        MachineId = null;
       // ProductDDown = null;
      //  ModelDropDown = null;
        CompetitorNameDDown = null;
        OtherMachinesHeaderModel = null;
        FillOtherMachinesGrid = null;
        CompProductDropDown = null;
        CompModelDropDown = null;
        CompProductDropDown1 = null;
        CompModelDropDown1 = null;
        private Cookie: any = null;

        private OtherMService: Service.IOtherMachinesGridService;
        private EOtherMservice: Service.IOtherMachineEditService;
        InsertOtherMachines: GCPL.Model.OtherMachinesEditModel = null;
        private InsertOMService: Service.IOtherMachinesInsertService;
        private CustomerAutofill: Service.ICustomerNameAutoFillService;
        private ProductDService: Service.IProductdService;
        private ModelService: Service.IModelDDService;
        private CompetitorDService: Service.ICompetitorNameService;
        private CompProductService: Service.ICompProductDDService;
        private CompModelService: Service.ICompModelDDService;
        private DeleteCompetitorService: Service.IDeleteCompetitorService;

        static $inject = ["OtherMachinesGridService", "OtherMachineEditService", "OtherMachinesInsertService", "ProductdService", "ModelDDService",
            "CompetitorNameService", "CompProductDDService", "CompModelDDService", "CustomerNameAutoFillService", "DeleteCompetitorService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_OtherMService: Service.IOtherMachinesGridService, _EOtherMservice: Service.IOtherMachineEditService, _InsertOMService: Service.IOtherMachinesInsertService,
            _ProductDService: Service.IProductdService, _ModelService: Service.IModelDDService, _CompetitorDService: Service.ICompetitorNameService,
            _CompProductService: Service.ICompProductDDService, _CompModelService: Service.ICompModelDDService, _CustomerAutofill: Service.ICustomerNameAutoFillService, _DeleCompetitor: Service.IDeleteCompetitorService, private _cookieStore: any) {

            this.OtherMService = _OtherMService;
            this.OtherMachinesHeaderModel = new OtherMachinesHeader();
            this.EOtherMservice = _EOtherMservice;
            this.InsertOMService = _InsertOMService;
            this.InsertOtherMachines = new InsertOM();          
            this.ProductDService = _ProductDService;
            this.ModelService = _ModelService;
            this.CompetitorDService = _CompetitorDService;
            this.CompProductService = _CompProductService;
            this.CompModelService = _CompModelService;
            this.CustomerAutofill = _CustomerAutofill;
            this.DeleteCompetitorService = _DeleCompetitor;
            this.Cookie = _cookieStore;
        }



        $onInit() {
            
            let that = this;
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();

            $('#search-btn-loader').hide();
            $("#txtPurDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectPurDate
            });
            $("#txtDueDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectDueDate
            });
            //$("#txtEndDate").datepicker({
            //    dateFormat: 'dd M yy', changeMonth: true,
            //    changeYear: true,
            //    onSelect: this.selectEndDate
            //});
            $("#txtYrOfManu").datepicker({
                dateFormat: 'yy',
                changeYear: true,
                onSelect: this.selectYr,

                formatYear: 'yyyy',
                startingDay: 1,
                minMode: 'year'
            });
            $('#txtEndDate').datepicker({
                //changeMonth: true,
                changeYear: true,
                showButtonPanel: true,
                dateFormat: 'yy',
               // onSelect: this.selecttYr,
                onClose: function (dateText, inst) {
                   // var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                    var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                    $(this).datepicker('setDate', new Date(year,  1));
                }
            });

           
            $("#txtEndDate").datepicker({
                dateFormat: 'yy',
                changeYear: true,
                changeMonth: false,
                 onSelect: this.selectYear
            });

       

            //this.ProductDDown = this.ProductDService.Find().then((response => {
            //    this.ProductDDown = this.ProductDService.GetProductName(response.data.Result);

            //}));
            this.CompetitorNameDDown = this.CompetitorDService.Find().then((response => {
                this.CompetitorNameDDown = this.CompetitorDService.GetCompetitorName(response.data.Result);

            }));

        }
        selectPurDate(e) {
            (<HTMLInputElement>document.getElementById("txtPurDate")).value = e;
        }
        selectDueDate(e) {
            (<HTMLInputElement>document.getElementById("txtDueDate")).value = e;
        }
        //selectEndDate(e) {
        //    (<HTMLInputElement>document.getElementById("txtEndDate")).value = e;
        //}
        selectYr(e) {
            (<HTMLInputElement>document.getElementById("txtYrOfManu")).value = e;
        }
        selectYear(e) {
            (<HTMLInputElement>document.getElementById("txtEndDate")).value = e;
        }

        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();

            $("#ErrClose").show();
            $("#submitClose").hide();
            this.alert = Message;
        }
        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            let that = this;
            $("#txtCustomerName1").autocomplete({
         
                source: function (request, res) {
                    that.CustomerAutofill.FilterAutoComplete(request).then((response => {

                        let data = that.CustomerAutofill.GetAutoCustomer(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.CompanyName,
                                value: item.CompanyName,
                                id: item.CustomerID

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.InsertOtherMachines.CustomerId = ui.item.id;
                    console.log(that.InsertOtherMachines.CustomerId);

                },
                change: function () {
                }
            });  

            this.CompetitorNameDDown = this.CompetitorDService.Find().then((response => {
                this.CompetitorNameDDown = this.CompetitorDService.GetCompetitorName(response.data.Result);              
            }));
        }
        CompProduct1(data: any): void {

            this.CompProductDropDown1 = this.CompProductService.Find(this.OtherMachinesHeaderModel.CompetitorNameID).then((response => {
                this.CompProductDropDown1 = this.CompProductService.GetCompProductDD(response.data.Result);
            }));
        }

        CompModel1(data: any): void {

            this.CompModelDropDown1 = this.CompModelService.Find(this.OtherMachinesHeaderModel.ProductID).then((response => {
                this.CompModelDropDown1 = this.CompModelService.GetCompModelDD(response.data.Result);
            }));
        }
        CompProduct(data:any): void {

            this.CompProductDropDown = this.CompProductService.Find(this.InsertOtherMachines.CompetitorNameID).then((response => {
                this.CompProductDropDown = this.CompProductService.GetCompProductDD(response.data.Result);
            }));
        }

        CompModel(data:any): void {

            this.CompModelDropDown = this.CompModelService.Find(this.InsertOtherMachines.Product).then((response => {
                this.CompModelDropDown = this.CompModelService.GetCompModelDD(response.data.Result);
            }));
        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            
            this.FillOtherMachinesGrid = this.OtherMService.FindGrid(this.OtherMachinesHeaderModel).then((response => {

                this.FillOtherMachinesGrid = this.OtherMService.GetOtherMachinesGrid(response.data.Result);
                $('#search-btn-loader').hide();

                if (this.FillOtherMachinesGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillOtherMachinesGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 20;
                    });
                    console.log(this.FillOtherMachinesGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillOtherMachinesGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;

                this.shownItems = this.FillOtherMachinesGrid.slice(0, that.numRecords);

                console.log(this.FillOtherMachinesGrid);
            }));
        }
        EditOtherMachine(data): void {
            
            this.EOtherMservice.Find(data).then((response => {
                this.InsertOtherMachines = this.EOtherMservice.GetOtherMachineEdit(response.data.Result);
                
                               
               
                $('#txtQuantity').val(this.InsertOtherMachines.Quantity);
                              
                
                //this.CompetitorNameDDown = this.CompetitorDService.Find().then((response => {
                //    this.CompetitorNameDDown = this.CompetitorDService.GetCompetitorName(response.data.Result);
                //    this.InsertOtherMachines.CompetitorNameID = this.CompetitorNameDDown[0].ID.toString();
                //}));
                //this.InsertOtherMachines.CompetitorNameID = this.InsertOtherMachines.CompetitorNameID.toString();
                $('#txtName').val(this.InsertOtherMachines.CompetitorNameID);
                
                this.CompProductDropDown = this.CompProductService.Find(this.InsertOtherMachines.CompetitorNameID).then((response => {
                    this.CompProductDropDown = this.CompProductService.GetCompProductDD(response.data.Result);
                    this.InsertOtherMachines.Product = this.CompProductDropDown[0].ID.toString();
                }));
               
                $('#txtProduct').val(this.InsertOtherMachines.Product);
               
                this.CompModelDropDown = this.CompModelService.Find(this.InsertOtherMachines.Product).then((response => {
                    this.CompModelDropDown = this.CompModelService.GetCompModelDD(response.data.Result);
                    this.InsertOtherMachines.ModelID = this.CompModelDropDown[0].ID.toString();
                }));
                //this.InsertOtherMachines.Model = this.InsertOtherMachines.Model.toString();
                $('#txtModel').val(this.InsertOtherMachines.ModelID);
                $('#txtType').val(this.InsertOtherMachines.Type);
                $('#txtEndDate').val(this.InsertOtherMachines.YearOfManufacture);
                
                $("myModalAddNew").show();
            }));
        }

        Search(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }

        DeleteCompetitor(MachineId): void {
            this.DeleteCompetitorService.Find(MachineId).then((response => {
                this.DeleteCompetitorService.postCompetitorDelete(response.data.Result);
                this.HideShow();
                this.popupMessage("Record Deleted Successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                this.numRecords = this.NoOfRds;
                this.FillGrid(this.numRecords);
            }));
        } 

        Clear()
        {
            this.OtherMachinesHeaderModel.CustomerName = "";
            this.OtherMachinesHeaderModel.CompetitorNameID = "";
            this.OtherMachinesHeaderModel.ModelID = "";
            this.OtherMachinesHeaderModel.ProductID = "";
            $("#CustomerName").val("");
            $("#CompName").val("");
            $("#Product").val("");
            $("#Model").val("");
        }
        Refresh() {
            this.FillGrid(this.NoOfRds);
            this.DeleteCompetitor(this.MachineId);
        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.FillOtherMachinesGrid.slice(begin, end);
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
            this.shownItems = this.FillOtherMachinesGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Add() {
            
            this.InsertOtherMachines.CustomerId = "";
            this.InsertOtherMachines.CompanyName = "";
            this.InsertOtherMachines.CompetitorNameID = "";          
            this.InsertOtherMachines.Type = "";           
           this.InsertOtherMachines.Product = "";         
            this.InsertOtherMachines.ModelID = "";
            this.InsertOtherMachines.Quantity = "";
            this.InsertOtherMachines.YearOfManufacture = "";           
            (<HTMLInputElement>document.getElementById("txtEndDate")).value = "";      
          
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
                        
            if (this.InsertOtherMachines.CustomerId == undefined || this.InsertOtherMachines.CustomerId == null || this.InsertOtherMachines.CustomerId == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
  
            }
           else if (this.InsertOtherMachines.CompetitorNameID == undefined || this.InsertOtherMachines.CompetitorNameID == null || this.InsertOtherMachines.CompetitorNameID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Competitor Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
                              
            else if (this.InsertOtherMachines.Type == undefined || this.InsertOtherMachines.Type == null || this.InsertOtherMachines.Type == "") {
                this.HideShow();
                this.popupMessage("Please Enter Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            
            else {
                
           
                this.InsertOtherMachines.YearOfManufacture = (<HTMLInputElement>document.getElementById("txtEndDate")).value;

                this.InsertOMService.PostMachineData(this.InsertOtherMachines).then(response => {
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Competitor Data is Successfully Inserted", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertOtherMachines = null;
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                    }
                    else {
                        //this.IsDisplayModalPopupError = true;
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                 
                    
                });


            }
        }
       


    }
    class OtherMachineComponentController implements ng.IComponentOptions {
        static Name: string = "othermachinecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = OtherMachineController;
            this.templateUrl = "/Scripts/App/MasterData/OtherMachine/Template/_OtherMachine.html";
        }
    }
    app.AddComponent(OtherMachineComponentController.Name, new OtherMachineComponentController());


}


