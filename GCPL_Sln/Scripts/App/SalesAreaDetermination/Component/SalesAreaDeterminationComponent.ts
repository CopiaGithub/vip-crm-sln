namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import SalesareaDeterminationlist = GCPL.Model.SalesAreaDeterminationListModel;
    import SalesAreaDeterminationInsert = GCPL.Model.InsertSalesAreaDeterminationModel;
    import Editsalesarea = GCPL.Model.EditSalesAreaDeterminationModel;

    interface ISalesAreaDeterminationController {
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        CategoryDropDown: Array<Model.CategoryddlModel>
        SalesAreaDropDown: Array<Model.SalesAreaddlModel>
        LeadCategoryDropDown: Array<Model.LeadCategoryddlModel>
        SalesAreaDeterminationList: Array<Model.SalesAreaDeterminationListModel>;
        SearchSADList(): void;
        Submit(): void;
        Edit(data: any): void;
        EditSalesAreaDetermination: Array<Model.EditSalesAreaDeterminationModel>;
        InsertSalesAreaDetermination: SalesAreaDeterminationInsert;
    }

    class SalesAreaDeterminationController implements ISalesAreaDeterminationController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadTypeDropDown = null;
        CategoryDropDown = null;
        SalesAreaDropDown = null;
        LeadCategoryDropDown = null;
        SalesAreaDeterminationSearch = null;
        SalesAreaDeterminationList = null;
        InsertSalesAreaDetermination = null;
        EditSalesAreaDetermination = null;
        private Cookie: any = null;
        private LeadTypeService: Service.ILeadTypeddService;
        private CategoryService: Service.ICategoryddService;
        private SalesAreaService: Service.ISalesAreaService;
        private LeadCategoryService: Service.ILeadCategoryDDService;
        private InsertService: Service.IInsertSalesAreaDeterminationService;
        private EditService: Service.ISalesAreaDeterminationEditService;
        private _SalesAreaDeterminationListService: Service.ISalesAreaDeterminationListService;


        static $inject = ["SalesAreaDeterminationListService", "LeadTypeddService", "CategoryddService", "SalesAreaService", "LeadCategoryDDService", "InsertSalesAreaDeterminationService","SalesAreaDeterminationEditService","$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_SalesAreaDeterminationListService: Service.ISalesAreaDeterminationListService, _LeadTypeService: Service.ILeadTypeddService,
            _CategoryService: Service.ICategoryddService, _SalesAreaService: Service.ISalesAreaService, _LeadCategoryService: Service.ILeadCategoryDDService,
            _InsertService: Service.IInsertSalesAreaDeterminationService,_EditService: Service.ISalesAreaDeterminationEditService, private _cookieStore: any) {

            this._SalesAreaDeterminationListService = _SalesAreaDeterminationListService;
            this.LeadTypeService = _LeadTypeService;
            this.CategoryService = _CategoryService;
            this.SalesAreaService = _SalesAreaService;
            this.LeadCategoryService = _LeadCategoryService;
            this.InsertService = _InsertService;
            this.InsertSalesAreaDetermination = new SalesAreaDeterminationInsert();
            this.EditService = _EditService;
            this.SalesAreaDeterminationSearch = Array<GCPL.Model.SalesAreaDeterminationSearchModel>();
            this.Cookie = _cookieStore;
        }


        $onInit() {
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
            $('#search-btn-loader').hide();
            let that = this;
            this.Init();
            $("#errorclose").hide();
            
            $("#close").hide();

        }

        //Page Load Define Values//
        Init(): void {
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();
            

            
            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);

            }));

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);

            }));

            this.SalesAreaDropDown = this.SalesAreaService.Find().then((response => {
                this.SalesAreaDropDown = this.SalesAreaService.GetSalesAreaName(response.data.Result);

            }));

            this.LeadCategoryDropDown = this.LeadCategoryService.Find().then((response => {
                this.LeadCategoryDropDown = this.LeadCategoryService.GetLeadCategoryName(response.data.Result);

            }));
           
        }
        

        Submit(): void {
            
            if (this.InsertSalesAreaDetermination.SalesAreaID == undefined || this.InsertSalesAreaDetermination.SalesAreaID == null || this.InsertSalesAreaDetermination.SalesAreaID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SalesArea", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesAreaDetermination.CountryID == undefined || this.InsertSalesAreaDetermination.CountryID == null || this.InsertSalesAreaDetermination.CountryID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Country", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesAreaDetermination.CategoryID == undefined || this.InsertSalesAreaDetermination.CategoryID == null || this.InsertSalesAreaDetermination.CategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesAreaDetermination.LeadCategoryID == undefined || this.InsertSalesAreaDetermination.LeadCategoryID == null || this.InsertSalesAreaDetermination.LeadCategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Enter LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesAreaDetermination.ID == undefined || this.InsertSalesAreaDetermination.ID == null || this.InsertSalesAreaDetermination.ID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Lead Type", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertSalesAreaDetermination.Status == undefined || this.InsertSalesAreaDetermination.Status == null || this.InsertSalesAreaDetermination.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            
            else {

                
                this.InsertService.PostSalesAreaDetermination(this.InsertSalesAreaDetermination).then((response => {

                    console.log(this.InsertSalesAreaDetermination);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("SalesArea Determination saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertSalesAreaDetermination = null;
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    
                   
                }));
               

            }

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
                       
             this.InsertSalesAreaDetermination.SalesAreaID = "";
            this.InsertSalesAreaDetermination.CountryID = "";
            this.InsertSalesAreaDetermination.CategoryID = "";
            this.InsertSalesAreaDetermination.LeadCategoryID = "";
            this.InsertSalesAreaDetermination.ID = "";
            this.InsertSalesAreaDetermination.Status = "";
           
        }
        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertSalesAreaDetermination = this.EditService.GetEdit(response.data.Result);
                
                $('#txtsalesarea').val(this.InsertSalesAreaDetermination.SalesAreaID);
              
                            
                if (this.InsertSalesAreaDetermination.CountryID == "1") {
                    this.InsertSalesAreaDetermination.CountryID = "1";
                    
                }
                else if (this.InsertSalesAreaDetermination.CountryID == "0") {
                    this.InsertSalesAreaDetermination.CountryID = "0";
                    
                }

                $('#txtCategory').val(this.InsertSalesAreaDetermination.CategoryID);
                $('#txtLeadCategory').val(this.InsertSalesAreaDetermination.LeadCategoryID);
                $('#txtLeadType').val(this.InsertSalesAreaDetermination.ID);
               // $('#txtStatus').val(this.InsertSalesAreaDetermination.Status);

                if (this.InsertSalesAreaDetermination.Status == "True") {
                    this.InsertSalesAreaDetermination.Status = "1";
                }
                else {
                    this.InsertSalesAreaDetermination.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.SalesAreaDeterminationList = this._SalesAreaDeterminationListService.Find(this.SalesAreaDeterminationSearch).then((response => {
                this.SalesAreaDeterminationList = this._SalesAreaDeterminationListService.GetSalesAreaDeterminationListData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.SalesAreaDeterminationList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.SalesAreaDeterminationList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });

                console.log(this.SalesAreaDeterminationList);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.SalesAreaDeterminationList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

            }));
        }
        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        SearchSADList(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.SalesAreaDeterminationList.slice(begin, end);
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
            this.shownItems = this.SalesAreaDeterminationList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {
                      
            //this.ModelSearch.Status = "";
            $("#ddlstatus").val("");
            this.SalesAreaDeterminationSearch.Status = "";
           
        }
        Close(): void {

            location.href = "#!/SalesAreaDetermination";

        }
       
    }
    class SalesAreaDeterminationComponentController implements ng.IComponentOptions {
        static Name: string = "salesareadeterminationcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = SalesAreaDeterminationController;
            this.templateUrl = "/Scripts/App/SalesAreaDetermination/Template/_SalesAreaDetermination.html";
        }
    }
    app.AddComponent(SalesAreaDeterminationComponentController.Name, new SalesAreaDeterminationComponentController());


}
