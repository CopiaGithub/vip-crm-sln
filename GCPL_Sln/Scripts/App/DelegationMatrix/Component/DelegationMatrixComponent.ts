namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import DeligationHeader = GCPL.Model.DeligationMasterHeaderModel;
    import insert = GCPL.Model.DeligationMasterInsertModel;


    interface IDelegationMatrixController {
        DeligationMasterHeaderModel: DeligationHeader;
        InsertDeligation: insert;
        ZoneDD: Array<Model.ZoneDDModel>
        //ZoneDD: ng.IPromise<Utility.Ajax.IResponse>;
        EditDeligation(data): void;
        Search(): void;
        TeamAllocationID: any;
        DeleteTeamAllocationID(TeamAllocationID: any): void;    

    }

    class DelegationMatrixController implements IDelegationMatrixController {
        private DeligationService: Service.IDeligationMasterService;
        DeligationGrid = null;
        ZoneDD = null;
        TeamAllocationID = null;
        DeligationMasterHeaderModel = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        private DeleteService: Service.IDeleteDelegationService;
        private EDservice: Service.IDeligationMasterEditService;
        InsertDeligation:any;
        private InsertDeligationService: Service.IInsertDeligationService;
        private ZoneDDService: Service.IZoneDDService;
        private getAutoSalesrep: Service.IManagerAtofillService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;

        static $inject = ["DeligationMasterService", "DeligationMasterEditService", "InsertDeligationService", "ManagerAtofillService", "EmployeeAtofillService", "ZoneDDService", "DeleteDelegationService"];


     

        constructor(_DeligationService: Service.IDeligationMasterService, _EDservice: Service.IDeligationMasterEditService,
            _InsertDeligationService: Service.IInsertDeligationService, _getAutoSalesrep: Service.IManagerAtofillService, _getAutoSalesrep1: Service.IEmployeeAtofillService, _ZoneDDService: Service.IZoneDDService,_deleDelegation:Service.IDeleteDelegationService) {
            this.DeligationService = _DeligationService;
            this.ZoneDDService = _ZoneDDService;
            this.DeleteService = _deleDelegation;
            this.DeligationMasterHeaderModel = new Array<GCPL.Model.DeligationMasterHeaderModel>();
            this.EDservice = _EDservice;
            this.InsertDeligationService = _InsertDeligationService;
            this.InsertDeligation = new insert();
            this.getAutoSalesrep = _getAutoSalesrep;           
            this.getAutoSalesrep1 = _getAutoSalesrep1;
        }

        $onInit() {
            /* Sorting */
            $("#errorclose").hide();
            $("#close").hide();
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
            this.Init();
            $('#search-btn-loader').hide();

        }

       
        Init(): void {
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();
            $("#txtManager").autocomplete({
               
                source: function (request, res) {
                    that.getAutoSalesrep.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep.GetAutoManager(response.data.Result);
                        
                        res($.map(data, function (item, index) {
                            return {
                                label: item.ManagerName,
                                value: item.ManagerName,
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

                    
                    that.InsertDeligation.ManagersEmployeeCode = ui.item.id;
                    //that.InsertDeligation.ManagerName = ui.item.value;
                  
                },
                change: function () {

                }
            });

            $("#txtEmployee").autocomplete({
             
                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            return {
                                label: item.Name,
                                value1: item.Name,
                                id1: item.userid

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {
                   
                    event.preventDefault();
                },
                select: function (e, ui) {
                    

                    that.InsertDeligation.TeamLeadID = ui.item.id1;
                   // that.InsertDeligation.EmployeeName = ui.item.value1;
                    
                },
                change: function () {

                }
            });

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));


            $("#txtbysearchMN").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep.GetAutoManager(response.data.Result);

                        res($.map(data, function (item, index) {
                            return {
                                label: item.ManagerName,
                                value: item.ManagerName,
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


                    that.DeligationMasterHeaderModel.SearchManagerName = ui.item.id;
                    //that.InsertDeligation.ManagerName = ui.item.value;

                },
                change: function () {

                }
            });


            $("#txtbysearchu").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            return {
                                label: item.Name,
                                value1: item.Name,
                                id1: item.userid

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {


                    that.DeligationMasterHeaderModel.SearchInput = ui.item.id1;
                    // that.InsertDeligation.EmployeeName = ui.item.value1;

                },
                change: function () {

                }
            });
        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.DeligationGrid = this.DeligationService.FindGrid(this.DeligationMasterHeaderModel).then((response => {

                this.DeligationGrid = this.DeligationService.GetDeligationGrid(response.data.Result);

                if (this.DeligationGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.DeligationGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.DeligationGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.DeligationGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                $('#search-btn-loader').hide();
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;

                this.shownItems = this.DeligationGrid.slice(0, that.numRecords);
           

            }));
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.DeligationGrid.slice(begin, end);
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
            this.shownItems = this.DeligationGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Add() {
          
            this.InsertDeligation.ManagersEmployeeCode = "";
            this.InsertDeligation.TeamLeadID = "";          
            this.InsertDeligation.Status = "";
            $("#txtManager").value = "";
            $("#txtEmployee").value = ""; 

        }
        Submit(): void {
            
            if (this.InsertDeligation.ManagersEmployeeCode == undefined || this.InsertDeligation.ManagersEmployeeCode == null || this.InsertDeligation.ManagersEmployeeCode == "") {
                this.HideShow();
                this.popupMessage("Please Enter Manager Name.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }
            else if (this.InsertDeligation.TeamLeadID == undefined || this.InsertDeligation.TeamLeadID == null || this.InsertDeligation.TeamLeadID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Employee Name.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

         else {                
                
                this.InsertDeligationService.PostDeligationMatrix(this.InsertDeligation).then(response => {
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Delegation Data is saved Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();
                        this.InsertDeligation = {};
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                        $("#txtManager").val("");
                        $("#txtEmployee").val(""); 
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
        DeleteTeamAllocationID(TeamAllocationID): void {
            this.DeleteService.Find(TeamAllocationID).then((response => {
                this.DeleteService.postDelegationDelete(response.data.Result);
                this.Init();
                $("#errorclose").hide();
                $("#close").show();
                this.popupMessage("Record deleted successfully..", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                this.numRecords = this.NoOfRds;
                this.FillGrid(this.numRecords);
            }));
        } 

        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();

            $("#ErrClose").show();
            $("#submitClose").hide();
            this.alert = Message;
        }
        Search(): void {
            
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            $('#search-btn-loader').show();
        }
        EditDeligation(data): void {
            
           
            this.EDservice.Find(data).then((response => {
                this.InsertDeligation = this.EDservice.GetDeligationMasterEdit(response.data.Result);    
                
                $('#txtManager').val(this.InsertDeligation.ManagerName.toString());
                $('#txtEmployee').val(this.InsertDeligation.EmployeeName.toString());

                if (this.InsertDeligation.Status == "True") {
                    this.InsertDeligation.Status = "1";
                }
                else {
                    this.InsertDeligation.Status = "0";
                }

                $("myModalAddNew").show();
            }));
        }

        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);
        }

        Clear() {

            this.DeligationMasterHeaderModel.SearchInput = "";
            this.DeligationMasterHeaderModel.SearchManagerName = "";
            this.DeligationMasterHeaderModel.Status = "";
            this.DeligationMasterHeaderModel.ZoneName = "";
            
            $("#txtbysearchu").val("");
            $("#txtbysearchMN").val("");

            //this.CategorySearch = "";
            $("#txtModel").val("");
            $("#txtPhone").val("");
            $("#ddlzonesearch").val("");
            $("#ddlstatus").val("");
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
                    row.push(cols[j].innerHTML);

                csv.push(row.join(","));
            }

            // Download CSV file
            this.downloadCSV(csv.join("\n"), filename);
        }
    }
    class DelegationMatrixComponentController implements ng.IComponentOptions {
        static Name: string = "delegationmatrixcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = DelegationMatrixController;
            this.templateUrl = "/Scripts/App/DelegationMatrix/Template/_DelegationMatrix.html";
        }
    }
    app.AddComponent(DelegationMatrixComponentController.Name, new DelegationMatrixComponentController());


}
