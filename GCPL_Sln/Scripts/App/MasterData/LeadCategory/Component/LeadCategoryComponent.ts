namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Search = GCPL.Model.LeadCategorySearchModel;
    import LeadCategoryInsert = GCPL.Model.InsertLeadCategoryModel;
    //import EditLeadCategory = GCPL.Model.EditLeadCategoryModel;

    interface ILeadCategoryController {
        LeadCategoryList: Array<Model.LeadCategoryListModel>;
        SearchLeadCategoryList(): void;
        InsertLeadCategory: LeadCategoryInsert;
        Edit(data: any): void;
        EditLeadCategory: Array<Model.EditLeadCategoryModel>;
    }

    class LeadCategoryController implements ILeadCategoryController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadCategoryList = null;
        LeadCategorySearch = null;
        InsertLeadCategory = null;
        EditLeadCategory = null;
        private Cookie: any = null;
        private EditService: Service.ILeadCategoryEditService;
        private _LeadCategoryService: Service.ILeadCategoryService;
        private InsertService: Service.IInsertLeadCategoryService;
        static $inject = ["LeadCategoryService", "InsertLeadCategoryService","LeadCategoryEditService","$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_LeadCategoryService: Service.ILeadCategoryService, _InsertService: Service.IInsertLeadCategoryService,
            _EditService: Service.ILeadCategoryEditService,private _cookieStore: any) {
            this._LeadCategoryService = _LeadCategoryService;
            this.LeadCategorySearch = Array<GCPL.Model.LeadCategorySearchModel>();
            this.InsertService = _InsertService;
            this.InsertLeadCategory = new LeadCategoryInsert();
            this.Cookie = _cookieStore;
            this.EditService = _EditService;
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
            let that = this;
            this.Init();
            $("#errorclose").hide();
            $('#search-btn-loader').hide();
            $("#close").hide();

        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            debugger;

            

            this.LeadCategoryList = this._LeadCategoryService.Find(this.LeadCategorySearch).then((response => {
                this.LeadCategoryList = this._LeadCategoryService.GetLeadCategoryData(response.data.Result);
            }));

        }

        Submit(): void {
            debugger;
            if (this.InsertLeadCategory.LeadCategory == undefined || this.InsertLeadCategory.LeadCategory == null || this.InsertLeadCategory.LeadCategory == ""){
                this.HideShow();
                this.popupMessage("Please Enter LeadCategory", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
           
           
            else if (this.InsertLeadCategory.Description == undefined || this.InsertLeadCategory.Description == null || this.InsertLeadCategory.Description == ""){
                this.HideShow();
                this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            

            else if (this.InsertLeadCategory.Status == undefined || this.InsertLeadCategory.Status == null || this.InsertLeadCategory.Status == ""){
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {

                debugger;
                this.InsertService.PostLeadCategory(this.InsertLeadCategory).then((response => {

                    console.log(this.InsertLeadCategory);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Lead Category saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertLeadCategory = null;
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

        Add() {
                               
            this.InsertLeadCategory.LeadCategory = "";
            this.InsertLeadCategory.Description = "";
            this.InsertLeadCategory.Status = "";

        }

        Edit(data: any): void {
            debugger;
            this.EditService.Find(data).then((response => {
                this.InsertLeadCategory = this.EditService.GetEdit(response.data.Result);
                debugger;
                $('#txtLeadCategory').val(this.InsertLeadCategory.LeadCategory);
                $('#txtDesc').val(this.InsertLeadCategory.Description);
                                          
                //$('#txtStatus').val(this.InsertLeadCategory.Status);

                if (this.InsertLeadCategory.Status == "True") {
                    this.InsertLeadCategory.Status = "1";
                }
                else {
                    this.InsertLeadCategory.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }

        Clear() {

            this.LeadCategorySearch.SearchText = "";
            this.LeadCategorySearch.Status = "";
            $("#ddlstatus").val("");
           
        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.LeadCategoryList = this._LeadCategoryService.Find(this.LeadCategorySearch).then((response => {
                this.LeadCategoryList = this._LeadCategoryService.GetLeadCategoryData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.LeadCategoryList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.LeadCategoryList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });


                console.log(this.LeadCategoryList);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.LeadCategoryList.slice(0, that.numRecords);

                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

            }));
        }
        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);

        }
        SearchLeadCategoryList(): void {
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
            this.shownItems = this.LeadCategoryList.slice(begin, end);
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
            this.shownItems = this.LeadCategoryList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
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
        Close(): void {

            location.href = "#!/LeadCategory";

        }
       

    }
    class LeadCategoryComponentController implements ng.IComponentOptions {
        static Name: string = "leadcategorycomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadCategoryController;
            this.templateUrl = "/Scripts/App/MasterData/LeadCategory/Template/_LeadCategory.html";
        }
    }
    app.AddComponent(LeadCategoryComponentController.Name, new LeadCategoryComponentController());


}


3