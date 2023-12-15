namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import CampaignMaster = GCPL.Model.InsertCampaignMaster;
    import Camlist = GCPL.Model.CamlistModel;
    import Search = GCPL.Model.CampaignSearchModel;
    import EditCam = GCPL.Model.EditCamlistModel;

    interface ICampaignMasterController {
        InsertCampaign: CampaignMaster;
        Submit(): void;
        LeadSourceDD: Array<Model.LeadSourceddModel>
        CampaignList: Array<Model.CamlistModel>;
        SearchCampaignList(): void;
        Edit(data: any): void;
        EditCampaign: Array<Model.EditCamlistModel>;
        LeadSourceDropDown: Array<Model.LeadSourceddModel>
    }

    class CampaignMasterController implements ICampaignMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        InsertCampaign = null;
        LeadSourceDD = null;
        CampaignList = null;
        CampaignSearch = null;
        EditCampaign = null;
        LeadSourceDropDown = null;

        private Cookie: any = null;
        private InsertService: Service.IInsertCampaignService;
        private LeadSourceDDService: Service.ILeadSourceDDService;
        private Listservice: Service.ICampaignListService;
        private EditService: Service.ICampaignEditService;
        private LSService: Service.ILeadSourceddService;

        static $inject = ["InsertCampaignService", "LeadSourceDDService", "CampaignListService", "CampaignEditService", "LeadSourceddService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_InsertService: Service.IInsertCampaignService, _LeadSourceDDService: Service.ILeadSourceDDService, _Listservice: Service.ICampaignListService,
            _EditService: Service.ICampaignEditService, _LSService: Service.ILeadSourceddService, private _cookieStore: any) {

            this.InsertService = _InsertService;
            this.InsertCampaign = new CampaignMaster();
            this.LeadSourceDDService = _LeadSourceDDService;
            this.Listservice = _Listservice;
            this.CampaignSearch = Array<GCPL.Model.CampaignSearchModel>();
            this.EditService = _EditService;
            this.LSService = _LSService;
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
            $("#txtFromDate").datepicker({
                dateFormat: 'yy-mm-dd', changeMonth: true,
                changeYear: true,
                onSelect: this.selectFromDate
            });
          
            $("#txtToDate").datepicker({
                dateFormat: 'yy-mm-dd', changeMonth: true,
                changeYear: true,
                onSelect: this.selectToDate
            });

        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

            this.LeadSourceDD = this.LeadSourceDDService.Find().then((response => {
                this.LeadSourceDD = this.LeadSourceDDService.GetLeadSourceDDnew(response.data.Result);
            }));
            this.LeadSourceDropDown = this.LSService.Find().then((response => {
                this.LeadSourceDropDown = this.LSService.GetLeadSource(response.data.Result);
            }));
            
        }
        SearchCampaignList(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
           

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
        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }
        Submit(): void {
            debugger;
            this.InsertCampaign.StartDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.InsertCampaign.EndDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;    
            if (this.InsertCampaign.LeadSourceID == undefined || this.InsertCampaign.LeadSourceID == null || this.InsertCampaign.LeadSourceID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Lead Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else if (this.InsertCampaign.CampaignName == undefined || this.InsertCampaign.CampaignName == null || this.InsertCampaign.CampaignName == "") {
                this.HideShow();
                this.popupMessage("Please Enter Campaign Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCampaign.Description == undefined || this.InsertCampaign.Description == null || this.InsertCampaign.Description == "") {
                this.HideShow();
                this.popupMessage("Please Enter Campaign Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCampaign.SAPID == undefined || this.InsertCampaign.SAPID == null || this.InsertCampaign.SAPID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SAP ID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCampaign.StartDate == undefined || this.InsertCampaign.StartDate == null || this.InsertCampaign.StartDate == "") {
                this.HideShow();
                this.popupMessage("Please Enter Start Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCampaign.EndDate == undefined || this.InsertCampaign.EndDate == null || this.InsertCampaign.EndDate == "") {
                this.HideShow();
                this.popupMessage("Please Enter End Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCampaign.Status == undefined || this.InsertCampaign.Status == null || this.InsertCampaign.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCampaign.TargetedLeads == undefined || this.InsertCampaign.TargetedLeads == null || this.InsertCampaign.TargetedLeads == "") {
                this.HideShow();
                this.popupMessage("Please Enter Targeted Leads", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertCampaign.EstimatedCost == undefined || this.InsertCampaign.EstimatedCost == null || this.InsertCampaign.EstimatedCost == "") {
                this.HideShow();
                this.popupMessage("Please Enter Estimated Cost of Campaign ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else {

                      
                debugger;
               
                this.InsertService.PostCampaign(this.InsertCampaign).then((response => {

                    console.log(this.InsertCampaign);
                    if (response.data.Result != null) {

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Campaign saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertCampaign = null;
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
            debugger;
            this.EditService.Find(data).then((response => {
                this.InsertCampaign = this.EditService.GetEdit(response.data.Result);
                debugger;               
                //$('#txtCampaignnm').val(this.InsertCampaign.CampaignName);
                //$('#txtCampaignDesc').val(this.InsertCampaign.Description);
                //$('#txtCampaignSAP').val(this.InsertCampaign.SAPID);
              
                //(<HTMLInputElement>document.getElementById("txtFromDate")).value = this.InsertCampaign.StartDate;
                //(<HTMLInputElement>document.getElementById("txtToDate")).value = this.InsertCampaign.EndDate;
          
                //$('#txtTargetedLeads').val(this.InsertCampaign.TargetedLeads);
                //$('#txtEstimatedCost').val(this.InsertCampaign.EstimatedCost);
  
               
                if (this.InsertCampaign.Status == "True") {
                    this.InsertCampaign.Status = "1";
                }
                else {
                    this.InsertCampaign.Status = "0";
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
            debugger;
            this.CampaignList = this.Listservice.Find(this.CampaignSearch).then((response => {
                this.CampaignList = this.Listservice.GetCampaignList(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.CampaignList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.CampaignList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.CampaignList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.CampaignList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        Add() {
            this.InsertCampaign.LeadSourceID = "";
            this.InsertCampaign.CampaignName = "";
            this.InsertCampaign.Description = "";
            this.InsertCampaign.SAPID = "";
            this.InsertCampaign.StartDate = "";
            this.InsertCampaign.EndDate = "";
            this.InsertCampaign.Status = "";
            this.InsertCampaign.TargetedLeads = "";
            this.InsertCampaign.EstimatedCost = "";

        }


        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.CampaignList.slice(begin, end);
            if (this.page + 1 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Clear() {

            this.CampaignSearch.SearchText = "";
            this.CampaignSearch.LeadSourceID = "";
            this.CampaignSearch.StatusID = "";
            $("#txtCampaign").val("");
            $("#txtLeadSource").val("");
            $("#txtstatus").val("");
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

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.CampaignList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Close(): void {

            location.href = "#!/CampaignMaster";

        }


    }
    class CampaignMasterComponentController implements ng.IComponentOptions {
        static Name: string = "campaignmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CampaignMasterController;
            this.templateUrl = "/Scripts/App/BulkUpload/CampaignMaster/Template/_CampaignMaster.html";
        }
    }
    app.AddComponent(CampaignMasterComponentController.Name, new CampaignMasterComponentController());


}


3