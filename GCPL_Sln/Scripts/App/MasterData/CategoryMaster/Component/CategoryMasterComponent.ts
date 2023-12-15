namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Catlist = GCPL.Model.CatlistModel;
    import Search = GCPL.Model.CategorySearchModel;
    import EditCat = GCPL.Model.EditCatlistModel;
    import CategoryMaster = GCPL.Model.InsertCategoryModel;

    interface ICategoryMasterController {
        CategoryList: Array<Model.CatlistModel>;
        SearchCategoryList(): void;
        Edit(data: any): void;
        EditCategory: Array<Model.EditCatlistModel>;
        InsertCategory: CategoryMaster;
        Submit(): void;
    }

    class CategoryMasterController implements ICategoryMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: string = "10";
        alert = null;
        EditCategory = null;
        CategoryList = null;
        InsertCategory = null;
        CategorySearch = null;
        private Cookie: any = null;
        private Listservice: Service.ICatListService;
        private EditService: Service.ICategoryEditService;
        private InsertService: Service.IInsertCategoryService;

        static $inject = ["CatListService", "CategoryEditService", "InsertCategoryService", "$cookieStore"];

        constructor(_Listservice: Service.ICatListService, _EditService: Service.ICategoryEditService, _InsertService: Service.IInsertCategoryService, private _cookieStore: any) {

            this.Listservice = _Listservice;
            this.EditService = _EditService;
            this.InsertService = _InsertService;
            this.InsertCategory = new CategoryMaster();
            this.CategorySearch = Array<GCPL.Model.CategorySearchModel>();
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
 
        }
        SearchCategoryList(): void {
            $('#search-btn-loader').show();
            this.CategoryList = this.Listservice.Find(this.CategorySearch).then((response => {
                this.CategoryList = this.Listservice.GetCategoryList(response.data.Result);
                $('#search-btn-loader').hide();
            }));
        }
        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }
        Submit(): void {
            
            if (this.InsertCategory.Category == undefined || this.InsertCategory.Category == null || this.InsertCategory.Category == "") {
                this.HideShow();
                this.popupMessage("Please Enter Category", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertCategory.Description == undefined || this.InsertCategory.Description == null || this.InsertCategory.Description == "") {
                this.HideShow();
                this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {                
                this.InsertService.PostCategory(this.InsertCategory).then((response => {

                    console.log(this.InsertCategory);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Category saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                       $('#myModalAddNew').click();

                        this.InsertCategory = null;
                        this.CategoryList = this.Listservice.Find(this.CategorySearch).then((response => {
                            this.CategoryList = this.Listservice.GetCategoryList(response.data.Result);
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

        Add() {

            //this.InsertCategory.CategoryID = "";
            this.InsertCategory.Category = "";
            this.InsertCategory.Description = "";
            this.InsertCategory.Status = "";
           
           
        }
        popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
            $("#message-text").html(Message);
            $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
            $(ShowImg).show();
            $(HideImg).hide();
            $("#succeess-message-box").modal("show");
        }
        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }
        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertCategory = this.EditService.GetEdit(response.data.Result);
                
                
                //$('#txtStatus').val(this.InsertCategory.Status);

                if (this.InsertCategory.Status == "True")
                {                
                    this.InsertCategory.Status = "1";
                }
                else
                {
                    this.InsertCategory.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }
       
        Clear() {

            this.CategorySearch.SearchText = "";
            this.CategorySearch.Status = "";
            
            
            //this.CategorySearch = "";
            $("#txtCategory").val("");
            $("#txtStatus").val("");
        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.CategoryList.slice(begin, end);
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
            this.shownItems = this.CategoryList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Close(): void {

            location.href = "#!/CategoryMaster";

        }
        ErrorClose(): void {
            location.href = "#!/CategoryMaster";

        }

    }
    class CategoryMasterComponentController implements ng.IComponentOptions {
        static Name: string = "categorymastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CategoryMasterController;
            this.templateUrl = "/Scripts/App/MasterData/CategoryMaster/Template/_CategoryMaster.html";
        }
    }
    app.AddComponent(CategoryMasterComponentController.Name, new CategoryMasterComponentController());


}