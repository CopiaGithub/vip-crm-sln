namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Modlist = GCPL.Model.ModelListModel;
    import Search = GCPL.Model.ModelSearchModel;
    import ModelMaster = GCPL.Model.InsertModelMaster;
    import EditMod = GCPL.Model.EditModel;

    interface IModelMasterController {
        ModelList: Array<Model.ModelListModel>;
        SearchModelList(): void;
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        DivisionDropDown: Array<Model.DivisionddlModel>
        ProductDropDown: Array<Model.ProductddlModel>
        InsertModel: ModelMaster;
        Submit(): void;
        Edit(data: any): void;
        EditModel: EditMod;
        ProductddDropDown: Array<Model.ProductddModel>

    }
    class ModelMasterController implements IModelMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        ModelList = null;
        ModelSearch = null;
        LeadTypeDropDown = null;
        DivisionDropDown = null;
        ProductDropDown = null;
        InsertModel = null;
        EditModel = null;
        ProductddDropDown = null;
        private Cookie: any = null;

        private ListService: Service.IModelListService;
        private LeadTypeService: Service.ILeadTypeddService;
        private DivisionService: Service.IDivisionService;
        private ProductService: Service.IProductddService;
        private InsertService: Service.IInsertModelService;
        private EditService: Service.IModelEditService;
        private ProductddService: Service.IProductDDLService;

        static $inject = ["ModelListService", "LeadTypeddService", "DivisionService", "ProductddService", "InsertModelService", "ModelEditService", "ProductDDLService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_ListService: Service.IModelListService, _LeadTypeService: Service.ILeadTypeddService,
            _DivisionService: Service.IDivisionService, _ProductService: Service.IProductddService, _InsertService: Service.IInsertModelService,
            _EditService: Service.IModelEditService, _ProductddService: Service.IProductDDLService, private _cookieStore: any) {

            this.ListService = _ListService;
            this.ModelSearch = Array<GCPL.Model.ModelSearchModel>();
            this.LeadTypeService = _LeadTypeService;
            this.DivisionService = _DivisionService;
            this.ProductService = _ProductService;
            this.InsertService = _InsertService;
            this.InsertModel = new ModelMaster();
            this.EditService = _EditService;
            this.ProductddService = _ProductddService;
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

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);

            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);

            }));

            this.ProductddDropDown = this.ProductddService.Find().then((response => {
                this.ProductddDropDown = this.ProductddService.GetProduct(response.data.Result);
            }));
        }
        Product(): void {

            this.ProductDropDown = this.ProductService.Find(this.InsertModel.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
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
            
            if (this.InsertModel.DivisionID == undefined || this.InsertModel.DivisionID == null || this.InsertModel.DivisionID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertModel.ProductID == undefined || this.InsertModel.ProductID == null || this.InsertModel.ProductID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertModel.ModelNo == undefined || this.InsertModel.ModelNo == null || this.InsertModel.ModelNo == "") {
                this.HideShow();
                this.popupMessage("Please Enter Model No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertModel.leadTypeID == undefined || this.InsertModel.leadTypeID == null || this.InsertModel.leadTypeID == "") {
                this.HideShow();
                this.popupMessage("Please Enter LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertModel.Description == undefined || this.InsertModel.Description == null || this.InsertModel.Description == "") {
                this.HideShow();
                this.popupMessage("Please Enter System Model ID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertModel.Value == undefined || this.InsertModel.Value == null || this.InsertModel.Value == "") {
                this.HideShow();
                this.popupMessage("Please Enter Value", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else if (this.InsertModel.Eligible == undefined || this.InsertModel.Eligible == null || this.InsertModel.Eligible == "") {
                this.HideShow();
                this.popupMessage("Please Enter Eligible For Quotation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");


            }

            else if (this.InsertModel.Status == undefined || this.InsertModel.Status == null || this.InsertModel.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {

                
                this.InsertService.PostModel(this.InsertModel).then((response => {

                    console.log(this.InsertModel);
                    if (response.data.Result != null) {

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Model saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();

                        this.InsertModel = null;
                        //this.InsertModel.DivsionID = "";
                        //this.InsertModel.ProductID = "";
                        //this.InsertModel.ModelNo = "";
                        //this.InsertModel.leadTypeID = "";
                        //this.InsertModel.Description = "";
                        //this.InsertModel.Value = "";
                        //this.InsertModel.Eligible = "";
                        //this.InsertModel.Status = "";
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

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertModel = this.EditService.GetEdit(response.data.Result);
                if (this.InsertModel.Status == "True") {
                    this.InsertModel.Status = "1";
                }
                else {
                    this.InsertModel.Status = "0";
                }
                if (this.InsertModel.Eligible == "True") {
                    this.InsertModel.Eligible = "1";
                }
                else {
                    this.InsertModel.Eligible = "0";
                }
                var temp = this.InsertModel.ProductID;

                this.ProductDropDown = this.ProductService.Find(this.InsertModel.DivisionID).then((response => {
                    this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
                    this.InsertModel.ProductID = temp;

                }));
                

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

            this.ModelList = this.ListService.Find(this.ModelSearch).then((response => {
                this.ModelList = this.ListService.GetModelList(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.ModelList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.ModelList.forEach(function (value, key) {
                        that.incre = parseInt(key) + that.numRecords;
                    });
                console.log(this.ModelList);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                this.shownItems = this.ModelList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.ModelList.length < that.numRecords) {
                    this.ShowNext = false;
                    this.ShowBack = false;
                }
            }));
        }
        Refresh() {
            this.FillGrid(this.NoOfRds);

        }
        
        SearchModelList(): void {
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
            this.shownItems = this.ModelList.slice(begin, end);
            if (this.page + 2 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.ModelList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.ModelSearch.SearchText = "";
            this.ModelSearch.Status = "";
            this.ModelSearch.Product = "";
            this.ModelSearch.LeadType = "";

            $("#txtModel").val("");
            $("#txtStatus").val("");
            $("#txtProd").val("");
            $("#txtLead").val("");
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
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

        Close(): void {

            location.href = "#!/ModelMaster";

        }
        ErrorClose(): void {
            location.href = "#!/ModelMaster";

        }



    }
    class ModelMasterComponentController implements ng.IComponentOptions {
        static Name: string = "modelmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ModelMasterController;
            this.templateUrl = "/Scripts/App/MasterData/ModelMaster/Template/_ModelMaster.html";
        }
    }
    app.AddComponent(ModelMasterComponentController.Name, new ModelMasterComponentController());


}


