namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Prodlist = GCPL.Model.ProductlistModel;
    import Search = GCPL.Model.ProductSearchModel;
    import ProductMaster = GCPL.Model.InsertProductModel;
    import EditProd = GCPL.Model.EditProductModel;

    interface IProductMasterController {
        DivisionDropDown: Array<Model.DivisionddlModel>
        ProductList: Array<Model.ProductlistModel>;
        SearchProductList(): void;
        InsertProduct: ProductMaster;
        Submit(): void;
        Edit(data: any): void;
        EditProduct: Array<Model.EditProductModel>;
    }

    class ProductMasterController implements IProductMasterController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        DivisionDropDown = null;
        ProductList = null;        
        ProductSearch = null;
        InsertProduct = null;
        EditProduct = null;
        private Cookie: any = null;
        private DivisionService: Service.IDivisionService;
        private Listservice: Service.IProductListService;
        private InsertService: Service.IInsertProductService;
        private EditService: Service.IProductEditService;

        static $inject = ["DivisionService", "ProductListService", "InsertProductService", "ProductEditService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_DivisionService: Service.IDivisionService, _Listservice: Service.IProductListService, _InsertService: Service.IInsertProductService,
            _EditService: Service.IProductEditService, private _cookieStore: any) {

            this.DivisionService = _DivisionService;
            this.Listservice = _Listservice;
            this.ProductSearch = Array<GCPL.Model.ProductSearchModel>();
            this.InsertService = _InsertService;
            this.InsertProduct = new ProductMaster();
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
            
            let that = this;
            this.InsertProduct.Status = "";

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);
                //this.DivisionID = this.DivisionDropDown[0].DivisionID.toString();
            }));



        }

        SearchProductList(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
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
            
            if (this.InsertProduct.DivisionID == undefined || this.InsertProduct.DivisionID == null || this.InsertProduct.DivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertProduct.Product == undefined || this.InsertProduct.Product == null || this.InsertProduct.Product == "") {
                this.HideShow();
                this.popupMessage("Please Enter Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertProduct.Description == undefined || this.InsertProduct.Description == null || this.InsertProduct.Description == "") {
                this.HideShow();
                this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertProduct.Status == undefined || this.InsertProduct.Status == null || this.InsertProduct.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {                
                this.InsertService.PostProduct(this.InsertProduct).then((response => {

                    console.log(this.InsertProduct);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Product saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertProduct = null;
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
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
                this.InsertProduct = this.EditService.GetEdit(response.data.Result);
                
                //$('#txtCategory').val(this.InsertCategory.Category);
                //$('#txtDesc').val(this.InsertCategory.Description);

                //$('#txtStatus').val(this.InsertProduct.Status);

                if (this.InsertProduct.Status == "True") {
                    this.InsertProduct.Status = "1";
                }
                else {
                    this.InsertProduct.Status = "0";
                }

                $("myModalAddNew").show();



            }));

        }
        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        exportTableToCSV(filename) {
            var csv = [];
            var rows = document.querySelectorAll("#excelDownload tr");

            for (var i = 0; i < rows.length; i++) {
                var row = [], cols = rows[i].querySelectorAll("td, th");

                for (var j = 0; j < cols.length; j++)
                    row.push(cols[j].innerHTML);

                csv.push(row.join(","));
            }

            // Download CSV file
            this.downloadCSV(csv.join("\n"), filename);
        }

        downloadCSV(csv, filename) {
            var csvFile;
            var downloadLink;

            // CSV file
            csvFile = new Blob([csv], { type: "text/csv" });

            // Download link
            downloadLink = document.createElement("a");

            // File name
            downloadLink.download = filename;

            // Create a link to the file
            downloadLink.href = window.URL.createObjectURL(csvFile);

            // Hide download link
            downloadLink.style.display = "none";

            // Add the link to DOM
            document.body.appendChild(downloadLink);

            // Click download link
            downloadLink.click();
        }

        Add() {

            //this.InsertCategory.CategoryID = "";
            this.InsertProduct.DivisionID = "";
            this.InsertProduct.Product = "";
            this.InsertProduct.Description = "";
            this.InsertProduct.Status = "";


        }
        FillGrid(NoOfRecords): void {
            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            console.log("Drpdown value text : " + that.numRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.ProductList = this.Listservice.Find(this.ProductSearch).then((response => {
                this.ProductList = this.Listservice.GetProductList(response.data.Result);
                $('#search-btn-loader').hide();
                console.log(this.ProductList);
                if (this.ProductList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.ProductList.forEach(function (value, key) {
                        console.log("Key : " + key);
                        that.incre = parseInt(key) + that.numRecords;
                    });
                    this.maxPages = (that.incre / that.numRecords);
                    this.maxPages.toFixed();
                    console.log(" Max Page : " + this.maxPages);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.ProductList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.ProductList.length < that.numRecords) {
                    this.ShowNext = false;
                    this.ShowBack = false;
                }
            }));
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            console.log("this page : " + this.page);
            console.log("Max Page : " + this.maxPages);
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.ProductList.slice(begin, end);
            // this.ProductList.slice(begin, end);
            if (this.page + 2 >= parseInt(this.maxPages.toFixed())) {
                console.log("Inside this page : " + this.page);
                this.ShowNext = false;
            }
        };

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.ProductList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Clear() {

            this.ProductSearch.SearchText = "";
            this.ProductSearch.Status = "";
            this.ProductSearch.Division = "";

            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);

            //this.CategorySearch = "";
            $("#txtProduct").val("");
            $("#txtStatus").val("");
            $("#txtDiv").val("");
        }
        Close(): void {
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            location.href = "#!/ProductMaster";

        }
        ErrorClose(): void {
            location.href = "#!/ProductMaster";

        }

    }
    class ProductMasterComponentController implements ng.IComponentOptions {
        static Name: string = "productmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ProductMasterController;
            this.templateUrl = "/Scripts/App/MasterData/ProductMaster/Template/_ProductMaster.html";
        }
    }
    app.AddComponent(ProductMasterComponentController.Name, new ProductMasterComponentController());


}


