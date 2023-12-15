namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Salesofflist = GCPL.Model.SalesOfficeListModel;
    import Search = GCPL.Model.SalesOfficeSearchModel;
    import SalesOfficeInsert = GCPL.Model.InsertSalesOfficeModel;
    import Editsale = GCPL.Model.EditSalesOfficeModel;


    interface ISalesOfficeController {
        ZoneDD: ng.IPromise<Utility.Ajax.IResponse>;
        Salesofficelist: Array<Model.SalesOfficeListModel>;
        SearchSalesofficeList(): void;
        //SearchSalesGridList(): void;
        InsertSalesOffice: SalesOfficeInsert;
        Edit(data: any): void;
        EditsalesOffice: Array<Model.EditSalesOfficeModel>;
    }

    class SalesOfficeController implements ISalesOfficeController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        ZoneDD = null;
        Salesofficelist = null;
        SalesofficeSearch = null;
        InsertSalesOffice = null;
        EditsalesOffice = null;
        private InsertService: Service.IInsertSalesOfficeService;
        private _SalesOfficeListService: Service.ISalesOfficeListService;
        private ZoneDDService: Service.IZoneDDService;
        private EditService: Service.ISalesOfficeEditService;
        private Cookie: any = null;

        static $inject = ["ZoneDDService", "SalesOfficeListService", "InsertSalesOfficeService","SalesOfficeEditService","$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_ZoneDDService: Service.IZoneDDService, _SalesOfficeListService: Service.ISalesOfficeListService, _InsertService: Service.IInsertSalesOfficeService, _EditService: Service.ISalesOfficeEditService, private _cookieStore: any) {
            this.ZoneDDService = _ZoneDDService;
            this._SalesOfficeListService = _SalesOfficeListService;
            this.SalesofficeSearch = Array<GCPL.Model.SalesOfficeSearchModel>();
            this.InsertService = _InsertService;
            this.InsertSalesOffice = new SalesOfficeInsert();
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

            this.InsertSalesOffice.Status = "";

            

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);


            }));
            this.Salesofficelist = this._SalesOfficeListService.Find(this.SalesofficeSearch).then((response => {
                this.Salesofficelist = this._SalesOfficeListService.GetSalesOfficeListData(response.data.Result);
            }));

        }
        //SearchSalesofficeList(): void {
        //    this.Salesofficelist = this._SalesOfficeListService.Find(this.SalesofficeSearch).then((response => {
        //        this.Salesofficelist = this._SalesOfficeListService.GetSalesOfficeListData(response.data.Result);
        //    }));
        //}

        Submit(): void {
                        
            if (this.InsertSalesOffice.ZoneID == undefined || this.InsertSalesOffice.ZoneID == null || this.InsertSalesOffice.ZoneID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesOffice.SalesOffice == undefined || this.InsertSalesOffice.SalesOffice == null || this.InsertSalesOffice.SalesOffice == "") {
                this.HideShow();
                this.popupMessage("Please Enter SalesOffice", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            
            else if (this.InsertSalesOffice.SAPID == undefined || this.InsertSalesOffice.SAPID == null || this.InsertSalesOffice.SAPID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            
           else if (this.InsertSalesOffice.SOAddress1 == undefined || this.InsertSalesOffice.SOAddress1 == null || this.InsertSalesOffice.SOAddress1 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Sales Office Address1", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesOffice.SOAddress2 == undefined || this.InsertSalesOffice.SOAddress2 == null || this.InsertSalesOffice.SOAddress2 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Sales Office Address2", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesOffice.SOAddress3 == undefined || this.InsertSalesOffice.SOAddress3 == null || this.InsertSalesOffice.SOAddress3 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Sales Office Address3", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesOffice.SOAddress4 == undefined || this.InsertSalesOffice.SOAddress4 == null || this.InsertSalesOffice.SOAddress4 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Sales Office Address4", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSalesOffice.Status == undefined || this.InsertSalesOffice.Status == null || this.InsertSalesOffice.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }           

            else {
                this.InsertService.PostSalesOffice(this.InsertSalesOffice).then((response => {

                    console.log(this.InsertSalesOffice);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Sales Office saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertSalesOffice = null;
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

            this.InsertSalesOffice.ZoneID = "";
            this.InsertSalesOffice.SalesOffice = "";
            this.InsertSalesOffice.SalesOfficeEmail = "";
            this.InsertSalesOffice.SAPID = "";
            this.InsertSalesOffice.Status = "";
            this.InsertSalesOffice.SOAddress1 = "";
            this.InsertSalesOffice.SOAddress2 = "";
            this.InsertSalesOffice.SOAddress3 = "";
            this.InsertSalesOffice.SOAddress4 = "";


        }

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertSalesOffice = this.EditService.GetEdit(response.data.Result);
                
                $('#txtzone').val(this.InsertSalesOffice.ZoneName);
                $('#txtsaloffice').val(this.InsertSalesOffice.SalesOffice);
                $('#txtsalofficemail').val(this.InsertSalesOffice.SalesOfficeEmail);
                $('#txtSAP').val(this.InsertSalesOffice.SAPID);
               // $('#txtstatus').val(this.InsertSalesOffice.Status);

                if (this.InsertSalesOffice.Status == "True") {
                    this.InsertSalesOffice.Status = "1";
                }
                else {
                    this.InsertSalesOffice.Status = "0";
                }
                $('#txtSOAddress1').val(this.InsertSalesOffice.SOAddress1);
                $('#txtSOAddress2').val(this.InsertSalesOffice.SOAddress2);
                $('#txtSOAddress3').val(this.InsertSalesOffice.SOAddress3);
                $('#txtSOAddress4').val(this.InsertSalesOffice.SOAddress4);
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

            this.Salesofficelist = this._SalesOfficeListService.Find(this.SalesofficeSearch).then((response => {
                this.Salesofficelist = this._SalesOfficeListService.GetSalesOfficeListData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.Salesofficelist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.Salesofficelist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                console.log(this.Salesofficelist);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.Salesofficelist.slice(0, that.numRecords);
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

        Clear() {
          
            this.SalesofficeSearch.SearchText = "";
            this.SalesofficeSearch.Status = "";
            this.SalesofficeSearch.Zone = "";
            $("#txtsearch").val("");  
            $("#ddlstatus").val(""); 
            $("#txtzonesearch").val(""); 
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
                     
        }

        SearchSalesofficeList(): void {
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
            this.shownItems = this.Salesofficelist.slice(begin, end);
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
            this.shownItems = this.Salesofficelist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Close(): void {

            location.href = "#!/SalesOffice";

        }
        ErrorClose(): void {
            location.href = "#!/SalesOffice";

        }



    }
    class SalesOfficeComponentController implements ng.IComponentOptions {
        static Name: string = "salesofficecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = SalesOfficeController;
            this.templateUrl = "/Scripts/App/SalesOffice/Template/_SalesOffice.html";
        }
    }
    app.AddComponent(SalesOfficeComponentController.Name, new SalesOfficeComponentController());


}
