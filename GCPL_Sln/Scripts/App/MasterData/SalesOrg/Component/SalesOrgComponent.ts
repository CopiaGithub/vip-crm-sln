namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Saleslist = GCPL.Model.SalesorgListModel;
    import Search = GCPL.Model.SalesorgSearchModel;
    import SalesOrgInsert = GCPL.Model.InsertSalesOrgModel;
    import EditCat = GCPL.Model.EditSalesOrgModel;

    interface ISalesOrgController {
        SalesOrgList: Array<Model.SalesorgListModel>;
        SearchSalesOrgList(): void;
        InsertSalesOrg: SalesOrgInsert;
        Edit(data: any): void;
        EditCategory: Array<Model.EditSalesOrgModel>;
    }

    class SalesOrgController implements ISalesOrgController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        SalesOrgList = null;
        SalesOrgSearch = null;
        InsertSalesOrg = null;
        EditCategory = null;
        private Cookie: any = null;
        private _SalesOrgListservice: Service.ISalesOrgListService;
        private InsertService: Service.IInsertSalesOrgService;
        private EditService: Service.ISalesOrgEditService;

        static $inject = ["SalesOrgListService", "InsertSalesOrgService", "SalesOrgEditService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_SalesOrgListservice: Service.ISalesOrgListService, _InsertService: Service.IInsertSalesOrgService, _EditService: Service.ISalesOrgEditService, private _cookieStore: any) {
            this._SalesOrgListservice = _SalesOrgListservice;
            this.InsertService = _InsertService;
            this.EditService = _EditService;
            this.InsertSalesOrg = new SalesOrgInsert();
            this.SalesOrgSearch = Array<GCPL.Model.SalesorgSearchModel>();
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
            this.InsertSalesOrg.Status = "";
            this.SalesOrgList = this._SalesOrgListservice.Find(this.SalesOrgSearch).then((response => {
                this.SalesOrgList = this._SalesOrgListservice.GetSalesOrgListData(response.data.Result);
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
            if (this.InsertSalesOrg.SalesOrg == undefined || this.InsertSalesOrg.SalesOrg == null || this.InsertSalesOrg.SalesOrg == "") {
                this.HideShow();
                this.popupMessage("Please Enter Sales Org", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesOrg.SAPID == undefined || this.InsertSalesOrg.SAPID == null || this.InsertSalesOrg.SAPID == ""){
                this.HideShow();
                this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesOrg.Status == undefined || this.InsertSalesOrg.Status == null || this.InsertSalesOrg.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {               
                this.InsertService.PostSalesOrg(this.InsertSalesOrg).then((response => {

                    console.log(this.InsertSalesOrg);
                    if (response.data.Result != null) {

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Sales Org saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();
                        this.InsertSalesOrg = null;
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

            this.InsertSalesOrg.SalesOrg = "";
            this.InsertSalesOrg.SAPID = "";
            this.InsertSalesOrg.Status = "";


        }

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertSalesOrg = this.EditService.GetEdit(response.data.Result);
                

                $('#txtSalesOrg').val(this.InsertSalesOrg.SalesOrg);
                $('#txtSAPID').val(this.InsertSalesOrg.SAPID);
                //$('#txtStatus').val(this.InsertSalesOrg.Status);

                if (this.InsertSalesOrg.Status == "True") {
                    this.InsertSalesOrg.Status = "1";
                }
                else {
                    this.InsertSalesOrg.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }
        Clear() {

            this.SalesOrgSearch.SearchText = "";
            this.SalesOrgSearch.Status = "";
            
            $("#txtSalesOrg").val("");
            $("#ddlstatus").val("");
        }


        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.SalesOrgList = this._SalesOrgListservice.Find(this.SalesOrgSearch).then((response => {
                this.SalesOrgList = this._SalesOrgListservice.GetSalesOrgListData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.SalesOrgList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.SalesOrgList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                console.log(this.SalesOrgList);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.SalesOrgList.slice(0, that.numRecords);
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

        SearchSalesOrgList(): void {
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
            this.shownItems = this.SalesOrgList.slice(begin, end);
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
            this.shownItems = this.SalesOrgList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Close(): void {

            location.href = "#!/SalesOrg";

        }
        

    }
    class SalesOrgComponentController implements ng.IComponentOptions {
        static Name: string = "salesorgcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = SalesOrgController;
            this.templateUrl = "/Scripts/App/MasterData/SalesOrg/Template/_SalesOrg.html";
        }
    }
    app.AddComponent(SalesOrgComponentController.Name, new SalesOrgComponentController());


}

