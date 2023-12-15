namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Salesorg = GCPL.Model.SalesOrgDDmModel;
    import distribution = GCPL.Model.DistributionChannelDDModel;
    import customer = GCPL.Model.CustomerDivisionDDModel;
    import Salesarealist = GCPL.Model.SalesAreaListModel;
    import Search = GCPL.Model.SalesAreaSearchModel;
    import SalesAreaInsert = GCPL.Model.InsertSalesAreaModel;
    import Editsalesarea = GCPL.Model.EditSalesAreaModel;

    interface ISalesAreaDataController {
        SalesOrgDD: ng.IPromise<Utility.Ajax.IResponse>;
        DistributionChannelDD: ng.IPromise<Utility.Ajax.IResponse>;
        CustomerDivisionDD: ng.IPromise<Utility.Ajax.IResponse>;
        SalesareaDatalist: Array<Model.SalesAreaListModel>;
        SearchSalesareaDataList(): void;
        InsertSalesArea: SalesAreaInsert;
        Edit(data: any): void;
        EditSalesAreaData: Array<Model.EditSalesAreaModel>;
    }

    class SalesAreaDataController implements ISalesAreaDataController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        SalesOrgDD = null;
        DistributionChannelDD = null;
        CustomerDivisionDD = null;
        SalesareaDatalist = null;
        SalesareaDataSearch = null;
        SalesAreaInsert = null;
        InsertSalesArea = null;
        EditSalesAreaData = null;
        private SalesOrgDDService: Service.ISalesOrgDDService;
        private DistributionChannelDDService: Service.IDistributionChannelDDService;
        private CustomerDivisionDDService: Service.ICustomerDivisionDDService;
        private _SalesAreaListService: Service.ISalesAreaListService;
        private InsertService: Service.IInsertSalesAreaService;
        private EditService: Service.ISalesAreaEditService;
        private Cookie: any = null;

        static $inject = ["SalesOrgDDService", "DistributionChannelDDService", "CustomerDivisionDDService", "SalesAreaListService", "InsertSalesAreaService","SalesAreaEditService","$cookieStore"];
      

        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_SalesOrgDDService: Service.ISalesOrgDDService, DistributionChannelDDService: Service.IDistributionChannelDDService, CustomerDivisionDDService: Service.ICustomerDivisionDDService, _SalesAreaListService: Service.ISalesAreaListService, _InsertService: Service.IInsertSalesAreaService,
            _EditService: Service.ISalesAreaEditService, private _cookieStore: any) {
            this.SalesOrgDDService = _SalesOrgDDService;
            this.DistributionChannelDDService = DistributionChannelDDService;
            this.CustomerDivisionDDService = CustomerDivisionDDService;
            this._SalesAreaListService = _SalesAreaListService;
            this.SalesareaDataSearch = Array<GCPL.Model.SalesAreaSearchModel>();
            this.InsertService = _InsertService;
            this.InsertSalesArea = new SalesAreaInsert();
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
            let that = this;
            this.Init();
            $("#errorclose").hide();
                        $('#search-btn-loader').hide();

            $("#close").hide();

        }

        //Page Load Define Values//
        Init(): void {
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();
            

           

            this.SalesOrgDD = this.SalesOrgDDService.Find().then((response => {
                this.SalesOrgDD = this.SalesOrgDDService.GetSalesOrgnew(response.data.Result);

           
            }));

            this.DistributionChannelDD = this.DistributionChannelDDService.Find().then((response => {
                this.DistributionChannelDD = this.DistributionChannelDDService.GetDistributionChannelDDnew(response.data.Result);


            }));

            this.CustomerDivisionDD = this.CustomerDivisionDDService.Find().then((response => {
                this.CustomerDivisionDD = this.CustomerDivisionDDService.GetCustomerDivisionDDnew(response.data.Result);


            }));

            this.SalesareaDatalist = this._SalesAreaListService.Find(this.SalesareaDataSearch).then((response => {
                this.SalesareaDatalist = this._SalesAreaListService.GetSalesAreaListData(response.data.Result);
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
            if (this.InsertSalesArea.SalesOrgID == undefined || this.InsertSalesArea.SalesOrgID == null || this.InsertSalesArea.SalesOrgID == ""){
                this.HideShow();
                this.popupMessage("Please Enter Sales Org", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesArea.DistributionChannelID == undefined || this.InsertSalesArea.DistributionChannelID == null || this.InsertSalesArea.DistributionChannelID == ""){
                this.HideShow();
                this.popupMessage("Please Enter Distribution Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesArea.CustomerDivisionID == undefined || this.InsertSalesArea.CustomerDivisionID == null || this.InsertSalesArea.CustomerDivisionID == ""){
                this.HideShow();
                this.popupMessage("Please Enter Customer Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
                        
            else if (this.InsertSalesArea.Status == undefined || this.InsertSalesArea.Status == null || this.InsertSalesArea.Status == ""){
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {                
                this.InsertService.PostSalesArea(this.InsertSalesArea).then((response => {

                    console.log(this.InsertSalesArea);
                    if (response.data.Result != null) {

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Sales Area saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();

                        this.InsertSalesArea = null;
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
            this.InsertSalesArea.SalesOrgID = "";
            this.InsertSalesArea.DistributionChannelID = "";
            this.InsertSalesArea.CustomerDivisionID = "";          
            this.InsertSalesArea.Status = "";

        }
        Clear() {
            
            this.SalesareaDataSearch.Status = "";
            $("#ddlstatus").val("");

        }
        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertSalesArea = this.EditService.GetEdit(response.data.Result);
                
                $('#txtsalorg').val(this.InsertSalesArea.SalesOrgID);
                $('#txtdistribution').val(this.InsertSalesArea.DistributionChannelID);
                $('#txtbusiness').val(this.InsertSalesArea.CustomerDivisionID);
               
              
                if (this.InsertSalesArea.Status == "True") {
                    this.InsertSalesArea.Status = "1";
                }
                else {
                    this.InsertSalesArea.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }

        SearchSalesareaDataList(): void {
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
            this.shownItems = this.SalesareaDatalist.slice(begin, end);
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
            this.shownItems = this.SalesareaDatalist.slice(begin, end);
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

            this.SalesareaDatalist = this._SalesAreaListService.Find(this.SalesareaDataSearch).then((response => {
                this.SalesareaDatalist = this._SalesAreaListService.GetSalesAreaListData(response.data.Result);
                $('#search-btn-loader').hide();
                console.log(this.SalesareaDatalist);

                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                this.shownItems = this.SalesareaDatalist.slice(0, that.numRecords);

            }));
        }
        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);

        }

        Close(): void {

            location.href = "#!/SalesAreaData";

        }
       
    }
    class SalesAreaDataComponentController implements ng.IComponentOptions {
        static Name: string = "salesareadatacomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = SalesAreaDataController;
            this.templateUrl = "/Scripts/App/MasterData/SalesAreaData/Template/_SalesAreaData.html";
        }
    }
    app.AddComponent(SalesAreaDataComponentController.Name, new SalesAreaDataComponentController());


}


