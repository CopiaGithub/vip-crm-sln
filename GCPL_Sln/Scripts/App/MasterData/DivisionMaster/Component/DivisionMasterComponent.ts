namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Divlist = GCPL.Model.DivisionListModel;
    import Search = GCPL.Model.DivisionSearchModel;
    import DivisionMaster = GCPL.Model.InsertDivisionModel;
    import EditDiv = GCPL.Model.EditDivisionModel;

    interface IDivisionMasterController {
        Divisionlist: Array<Model.DivisionListModel>;
        CategoryDropDown: Array<Model.CategoryddlModel>
        SearchDivisionList(): void;
        InsertDivision: DivisionMaster;
        Submit(): void;
        Edit(data: any): void;
        EditDivision: Array<Model.EditDivisionModel>;
    }

    class DivisionMasterController implements IDivisionMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        Divisionlist = null;
        CategoryDropDown = null;
        DivisionSearch = null;
        InsertDivision = null;
        EditDivision = null;
        private Cookie: any = null;

        private ListService: Service.IDivisionListService;
        private CategoryService: Service.ICategoryddService;
        private InsertService: Service.IInsertDivisionService;
        private EditService: Service.IDivisionEditService;

        static $inject = ["DivisionListService", "CategoryddService", "InsertDivisionService", "DivisionEditService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_ListService: Service.IDivisionListService, _CategoryService: Service.ICategoryddService, _InsertService: Service.IInsertDivisionService,
            _EditService: Service.IDivisionEditService, private _cookieStore: any) {

            this.ListService = _ListService;
            this.CategoryService = _CategoryService;
            this.DivisionSearch = Array<GCPL.Model.DivisionSearchModel>();
            this.InsertService = _InsertService;
            this.InsertDivision = new DivisionMaster();
            this.EditService = _EditService;
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
            this.Init();
            $('#search-btn-loader').hide();
            $("#errorclose").hide();
            $("#close").hide();

           
        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);

            }));
        }

        SearchDivisionList(): void {
            $('#search-btn-loader').show();
            this.Divisionlist = this.ListService.Find(this.DivisionSearch).then((response => {
                this.Divisionlist = this.ListService.GetDivisionList(response.data.Result);
                $('#search-btn-loader').hide();
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
            
            if (this.InsertDivision.CategoryID == undefined || this.InsertDivision.CategoryID == null || this.InsertDivision.CategoryID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertDivision.Division == undefined || this.InsertDivision.Division == null || this.InsertDivision.Division == "") {
                this.HideShow();
                this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertDivision.divisionSAPID == undefined || this.InsertDivision.divisionSAPID == null || this.InsertDivision.divisionSAPID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertDivision.Description == undefined || this.InsertDivision.Description == null || this.InsertDivision.Description == "") {
                this.HideShow();
                this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertDivision.QuotePrefix == undefined || this.InsertDivision.QuotePrefix == null || this.InsertDivision.QuotePrefix == "") {
                this.HideShow();
                this.popupMessage("Please Enter Quote Prefix", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                this.alert = "Please Enter Quote Prefix";

            }
            else if (this.InsertDivision.NoRangeSeries == undefined || this.InsertDivision.NoRangeSeries == null || this.InsertDivision.NoRangeSeries == "") {
                this.HideShow();
                this.popupMessage("Please Enter No Range Series", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                this.alert = "Please Enter No Range Series";

            }

            else if (this.InsertDivision.Status == undefined || this.InsertDivision.Status == null || this.InsertDivision.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                this.alert = "Please Enter Status";

            }

            else {

                
                this.InsertService.PostDivision(this.InsertDivision).then((response => {

                    console.log(this.InsertDivision);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Division saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();

                        this.InsertDivision = null;
                        this.Divisionlist = this.ListService.Find(this.DivisionSearch).then((response => {
                            this.Divisionlist = this.ListService.GetDivisionList(response.data.Result);
                        }));
                    }
                    else {
                        //this.IsDisplayModalPopupError = true;
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                   
                }));

            }

        }

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertDivision = this.EditService.GetEdit(response.data.Result);
                
                //$('#txtCategory').val(this.InsertCategory.Category);
                //$('#txtDesc').val(this.InsertCategory.Description);
                $('#txtSAPID').val(this.InsertDivision.divisionSAPID);
                //$('#txtStatus').val(this.InsertDivision.Status);
                $('#txtQuotePrefix').val(this.InsertDivision.QuotePrefix);
                $('#txtNoRangeSeries').val(this.InsertDivision.NoRangeSeries);
                if (this.InsertDivision.Status == "True") {
                    this.InsertDivision.Status = "1";
                }
                else {
                    this.InsertDivision.Status = "0";
                }

                $("myModalAddNew").show();



            }));

        }

        Add() {           
            this.InsertDivision.CategoryID = "";
            this.InsertDivision.Division = "";
            this.InsertDivision.divisionSAPID = "";
            this.InsertDivision.Description = "";
            this.InsertDivision.Status = "";
            this.InsertDivision.QuotePrefix = "";
            this.InsertDivision.NoRangeSeries = "";


        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.Divisionlist.slice(begin, end);
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
            this.shownItems = this.Divisionlist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.DivisionSearch.SearchText = "";
            this.DivisionSearch.Status = "";
            this.DivisionSearch.Category = "";


            //this.CategorySearch = "";
            $("#txtDivision").val("");
            $("#txtStatus").val("");
            $("#txtCat").val("");
            $("#txtQuotePrefix").val("");
            $("#txtNoRangeSeries").val("");
        }
        Close(): void {

            location.href = "#!/DivisionMaster";

        }
        ErrorClose(): void {
            location.href = "#!/DivisionMaster";

        }


    }
    class DivisionMasterComponentController implements ng.IComponentOptions {
        static Name: string = "divisionmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = DivisionMasterController;
            this.templateUrl = "/Scripts/App/MasterData/DivisionMaster/Template/_DivisionMaster.html";
        }
    }
    app.AddComponent(DivisionMasterComponentController.Name, new DivisionMasterComponentController());


}


3