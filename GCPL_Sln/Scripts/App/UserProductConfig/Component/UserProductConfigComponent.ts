namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import AllocationModel = GCPL.Model.AllocationMatrixHeaderModel;
    import insert = GCPL.Model.AllocationMatrixEditModel;


    interface IUserProductConfigController {
        EditAllocation(data): void;
        Division(data: any): void;
        Product(data: any): void;

        District(data: any): void;
        Submit(): void;
        AllocationMatrixHeaderModel: AllocationModel;
        //InsertAllocation: insert;
        CategoryDropDown: Array<Model.CategoryddlModel>
        //DivisionDropDown: Array<Model.DivisionddlModel>
        DivisionDropDownP: Array<Model.DivisionDDPModel>
        ProductDropDown: Array<Model.ProductddlModel>
        CountryDropDown: Array<Model.CountryddlModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>

        CategoryDropDown1: Array<Model.CategoryddlModel>
        DivisionDropDownP1: Array<Model.DivisionDDPModel>
        ProductDropDown1: Array<Model.ProductddlModel>
        StateDropDown1: Array<Model.StateddlModel>
        DistrictDropDown1: Array<Model.DistrictddlModel>
    }

    class UserProductConfigController implements IUserProductConfigController {
        AllocationMatrixGrid = null;
        DivisionDropDownP = null;
        CategoryDropDown = null;
        //DivisionDropDown = null;
        ProductDropDown = null;
        CountryDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
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
        AllocationMatrixHeaderModel = null;
        CategoryDropDown1 = null;
        DivisionDropDownP1 = null;
        ProductDropDown1 = null;
        StateDropDown1 = null;
        DistrictDropDown1 = null;
        private AService: Service.IAllocationMatrixService;
        private EAservice: Service.IAllocationMatrixEditService;
        InsertAllocation: GCPL.Model.AllocationMatrixEditModel = null;
        private CategoryService: Service.ICategoryddService;
        //private DivisionService: Service.IDivisionService;
        private DivisionPService: Service.IDivisionDDPService;
        private InsertAllocationService: Service.IAllocationMatrixInsertService;
        private ProductService: Service.IProductddService;
        private CountryService: Service.ICountryService;
        private StateDDService: Service.IStateDDService;
        private DistrictService: Service.IDistrictddService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
        private LeadTypeService: Service.ILeadTypeddService;

        static $inject = ["AllocationMatrixService", "AllocationMatrixEditService", "CategoryddService", "DivisionDDPService", "AllocationMatrixInsertService",
            "ProductddService", "CountryService", "StateDDService", "DistrictddService", "EmployeeAtofillService", "LeadTypeddService"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_AService: Service.IAllocationMatrixService, _EAservice: Service.IAllocationMatrixEditService, _CategoryService: Service.ICategoryddService,
            _DivisionPService: Service.IDivisionDDPService, _InsertAllocationService: Service.IAllocationMatrixInsertService, _ProductService: Service.IProductddService,
            _CountryService: Service.ICountryService, _StateDDService: Service.IStateDDService, _DistrictService: Service.IDistrictddService, _getAutoSalesrep1: Service.IEmployeeAtofillService,
            _LeadTypeService: Service.ILeadTypeddService) {
            this.AService = _AService;
            this.AllocationMatrixHeaderModel = new GCPL.Model.AllocationMatrixHeaderModel();
            this.EAservice = _EAservice;
            this.DivisionPService = _DivisionPService;
            this.CategoryService = _CategoryService;
            //this.DivisionService = _DivisionService;
            this.InsertAllocationService = _InsertAllocationService;
            this.ProductService = _ProductService;
            this.CountryService = _CountryService;
            this.StateDDService = _StateDDService;
            this.DistrictService = _DistrictService;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.LeadTypeService = _LeadTypeService;
            this.InsertAllocation = new insert();
        }



        $onInit() {
            this.Init();
            $('#search-btn-loader').hide();

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
            /*sorting end*/


        }

        //Page Load Define Values//
        Init(): void {
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();
            // this.Search();
            

            this.CategoryDropDown = this.CategoryService.Find().then((response => {
                this.CategoryDropDown = this.CategoryService.GetCategoryName(response.data.Result);

            }));
            this.CategoryDropDown1 = this.CategoryService.Find().then((response => {
                this.CategoryDropDown1 = this.CategoryService.GetCategoryName(response.data.Result);

            }));
            this.CountryDropDown = this.CountryService.Find().then((response => {
                this.CountryDropDown = this.CountryService.GetCountryName(response.data.Result);

            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));
            
            this.StateDropDown = this.StateDDService.Find().then((response => {
                this.StateDropDown = this.StateDDService.GetState(response.data.Result);

            }));
            this.StateDropDown1 = this.StateDDService.Find().then((response => {
                this.StateDropDown1 = this.StateDDService.GetState(response.data.Result);

            }));
            $("#txtSalesRep1").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            
                            return {

                                label: item.Name,
                                value: item.Name,
                                id: item.userid

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    

                    that.InsertAllocation.UserID = ui.item.id;
                    console.log(that.InsertAllocation.UserID);

                },
                change: function () {

                }
            });
            $("#txtbysearch").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            
                            return {

                                label: item.Name,
                                value: item.Name,
                                id: item.userid

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    
                    that.AllocationMatrixHeaderModel.SearchInput = ui.item.id;

                    //$(this).val("");
                    //return false;
                },
                change: function () {

                }
            });


        }
        Division(data: any): void {
            
            this.DivisionDropDownP = this.DivisionPService.Find(this.InsertAllocation.CategoryID).then((response => {
                this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);

            }));
        }
        Division1(data: any): void {
            
            this.DivisionDropDownP1 = this.DivisionPService.Find(this.AllocationMatrixHeaderModel.CategoryID).then((response => {
                this.DivisionDropDownP1 = this.DivisionPService.GetDivisionDDP(response.data.Result);

            }));
        }

        Product(data: any): void {
            
            this.ProductDropDown = this.ProductService.Find(this.InsertAllocation.divisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));
        }
        Product1(data: any): void {
            
            this.ProductDropDown1 = this.ProductService.Find(this.AllocationMatrixHeaderModel.DivisionID).then((response => {
                this.ProductDropDown1 = this.ProductService.GetProductName(response.data.Result);

            }));
        }

        District(data: any): void {
            
            this.DistrictDropDown = this.DistrictService.Find(this.InsertAllocation.StateID).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }
        District1(data: any): void {
            
            this.DistrictDropDown1 = this.DistrictService.Find(this.AllocationMatrixHeaderModel.StateID).then((response => {
                this.DistrictDropDown1 = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }
        Search(): void {
            
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);

            $('#search-btn-loader').show();
        }
        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.AllocationMatrixGrid.slice(begin, end);
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
            this.shownItems = this.AllocationMatrixGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.AllocationMatrixGrid = this.AService.FindGrid(this.AllocationMatrixHeaderModel).then((response => {
                console.log(this.AllocationMatrixHeaderModel);
                $('#search-btn-loader').hide();
                this.AllocationMatrixGrid = this.AService.GetAllocationGrid(response.data.Result);

                if (this.AllocationMatrixGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.AllocationMatrixGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.AllocationMatrixGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.AllocationMatrixGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                this.shownItems = this.AllocationMatrixGrid.slice(0, that.numRecords);

            }));
        }

        Add() {

            this.InsertAllocation.UserID = "";
            this.InsertAllocation.UserName = "";
            this.InsertAllocation.ID = "";
            this.InsertAllocation.LeadType = "";

            this.InsertAllocation.CategoryID = "";
            this.InsertAllocation.divisionID = "";
            this.InsertAllocation.ProductID = "";

            this.InsertAllocation.CountryID = "";
            this.InsertAllocation.StateID = "";
            this.InsertAllocation.DistrictID = "";
            this.InsertAllocation.Status = "";


        }

        Submit(): void {            
            if (this.InsertAllocation.UserName == undefined || this.InsertAllocation.UserName == null || this.InsertAllocation.UserName == "") {
                this.HideShow();
                this.popupMessage("Please Enter UserName", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertAllocation.LeadType == undefined || this.InsertAllocation.LeadType == null || this.InsertAllocation.LeadType == "") {
                this.HideShow();
                this.popupMessage("Please Enter LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertAllocation.divisionID == undefined || this.InsertAllocation.divisionID == null || this.InsertAllocation.divisionID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertAllocation.ProductID == undefined || this.InsertAllocation.ProductID == null || this.InsertAllocation.ProductID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertAllocation.StateID == undefined || this.InsertAllocation.StateID == null || this.InsertAllocation.StateID == "") {
                this.HideShow();
                this.popupMessage("Please Enter State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertAllocation.DistrictID == undefined || this.InsertAllocation.DistrictID == null || this.InsertAllocation.DistrictID == "") {
                this.HideShow();
                this.popupMessage("Please Enter District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertAllocation.Status == undefined || this.InsertAllocation.Status == null || this.InsertAllocation.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                
                this.InsertAllocation.CountryID = '95';
                this.InsertAllocationService.PostAllocationMatrix(this.InsertAllocation).then(response => {
                    if (response.data.Result != null) {

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Allocation Data saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();
                        this.InsertAllocation = null;
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                });
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
        Clear() {


            (<HTMLInputElement>document.getElementById("txtbysearch")).value = "";
            this.AllocationMatrixHeaderModel.CategoryID = "";
            this.AllocationMatrixHeaderModel.DivisionID = "";
            this.AllocationMatrixHeaderModel.ProductID = "";
            this.AllocationMatrixHeaderModel.StateID = "";
            this.AllocationMatrixHeaderModel.SearchDistrict = "";
            this.AllocationMatrixHeaderModel.DistrictID = "";
            this.AllocationMatrixHeaderModel.LeadTypeID = "";
            this.AllocationMatrixHeaderModel.SearchInput = "";

            $("#txtModel").val("");
            $("#txtPhone").val("");
            $("#ddlstatus").val("");
            $("#txtLeadType").val("");
            //$("#SearchInput").val("");


        }

        EditAllocation(data): void {

            

            this.EAservice.Find(data).then((response => {
                this.InsertAllocation = this.EAservice.GetAllocationEdit(response.data.Result);
                

                //$('#txtSalesRep1').val(this.InsertAllocation.UserID);

                //$('#txtLeadType').val(this.InsertAllocation.ID);

                //$('#txtCategory').val(this.InsertAllocation.CategoryID);


                //$('#txtProduct').val(this.InsertAllocation.ProductID);
                //this.Product(this.InsertAllocation.divisionID);

                //$('#txtCountry').val(this.InsertAllocation.CountryID);
                //$('#txtState').val(this.InsertAllocation.StateID);

                //this.DivisionDropDownP = this.DivisionPService.Find(this.InsertAllocation.CategoryID).then((response => {
                //    this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);
                //    this.InsertAllocation.divisionID = this.InsertAllocation.divisionID.toString();

                //}));

                //this.InsertAllocation.StateID = this.InsertAllocation.StateID.toString();

                //this.DistrictDropDown = this.DistrictService.Find(this.InsertAllocation.StateID).then((response => {
                //    this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                //}));

                var div = this.InsertAllocation.divisionID;
                this.DivisionDropDownP = this.DivisionPService.Find(this.InsertAllocation.CategoryID).then((response => {
                    this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);
                    this.InsertAllocation.divisionID = div;
                }));

                var prod = this.InsertAllocation.ProductID;
                this.ProductDropDown = this.ProductService.Find(this.InsertAllocation.divisionID).then((response => {
                    this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
                    this.InsertAllocation.ProductID = prod;
                }));

                var dist = this.InsertAllocation.DistrictID;
                this.DistrictDropDown = this.DistrictService.Find(this.InsertAllocation.StateID).then((response => {
                    this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                    this.InsertAllocation.DistrictID = dist;
                }));
                if (this.InsertAllocation.Status == "True") {
                    this.InsertAllocation.Status = "1";
                }
                else {
                    this.InsertAllocation.Status = "0";
                }





                $("myModalAddNew").show();
            }));
        }

        Close(): void {

            location.href = "#!/UserProductConfig";

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

        exportTableToCSV(filename) {
            var csv = [];
            var rows = document.querySelectorAll("#excelDownload tr");

            for (var i = 0; i < rows.length; i++) {
                var row = [], cols = rows[i].querySelectorAll("td, th");

                for (var j = 0; j < cols.length; j++)
                    row.push('"' + cols[j].innerHTML + '"');

                csv.push(row.join(","));
            }

            // Download CSV file
            this.downloadCSV(csv.join("\n"), filename);
        }

    }
    class UserProductConfigComponentController implements ng.IComponentOptions {
        static Name: string = "userproductconfigcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = UserProductConfigController;
            this.templateUrl = "/Scripts/App/UserProductConfig/Template/_UserProductConfig.html";
        }
    }
    app.AddComponent(UserProductConfigComponentController.Name, new UserProductConfigComponentController());


}
