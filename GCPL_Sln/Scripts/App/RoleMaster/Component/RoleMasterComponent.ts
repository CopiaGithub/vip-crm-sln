namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import RoleModel = GCPL.Model.RoleMasterHeaderModel;
    import insert = GCPL.Model.RoleMasterEditModel;

    interface IRoleMasterController {
        RoleMasterHeaderModel: RoleModel;
        InserRoleMaster: insert;
        Search(): void;
        EditRoleMaster(data): void;
        Submit(): void;
    }

    class RoleMasterController implements IRoleMasterController {
        private RoleMService: Service.IRoleMasterService;
        private Eservice: Service.IRoleMasterEditService;
        InserRoleMaster: GCPL.Model.RoleMasterEditModel = null;
        private InsertService: Service.IInsertRoleService;
        RoleMasterHeaderModel = null;
        FillRoleMasterGrid = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;

        static $inject = ["RoleMasterService", "RoleMasterEditService", "InsertRoleService"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_RoleMService: Service.IRoleMasterService, _Eservice: Service.IRoleMasterEditService, _InsertService: Service.IInsertRoleService) {
            this.RoleMService = _RoleMService;
            this.RoleMasterHeaderModel = new Array<GCPL.Model.RoleMasterHeaderModel>();
            this.Eservice = _Eservice;
            this.InsertService = _InsertService;
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
            /*sorting end*/
            this.Init();
            $('#search-btn-loader').hide();

        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.FillRoleMasterGrid = this.RoleMService.FindGrid(this.RoleMasterHeaderModel).then((response => {

                this.FillRoleMasterGrid = this.RoleMService.GetRoleGrid(response.data.Result);
                $('#search-btn-loader').hide();

                if (this.FillRoleMasterGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillRoleMasterGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.FillRoleMasterGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillRoleMasterGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;

                this.shownItems = this.FillRoleMasterGrid.slice(0, that.numRecords);


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
            this.shownItems = this.FillRoleMasterGrid.slice(begin, end);
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
            this.shownItems = this.FillRoleMasterGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.RoleMasterHeaderModel.SearchText = "";
            this.RoleMasterHeaderModel.Status = "";

            //this.CategorySearch = "";
            $("#txtModel").val("");
            $("#txtPhone").val("");
            $("#ddlstatus").val("");
        }

        Add() {
            this.InserRoleMaster.Title = "";
            this.InserRoleMaster.Status = "";
            

        }

        EditRoleMaster(data): void {
            
            this.Eservice.Find(data).then((response => {
                this.InserRoleMaster = this.Eservice.GetRoleMasterEdit(response.data.Result);

                //$('#txtDivision').val(this.InserUserMaster.CustDivision);
                //$('#txtSalesOffice').val(this.InserUserMaster.SalesOfficeID);
                //this.State();
                //this.District();
                //$('#txtState').val(this.InserUserMaster.StateID);
                //$('#txtDistrict').val(this.InserUserMaster.DistrictID);

                if (this.InserRoleMaster.Status == "True") {
                    this.InserRoleMaster.Status = "1";
                }
                else {
                    this.InserRoleMaster.Status = "0";
                }

                $("myModalAddNew").show();
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
                        
            if (this.InserRoleMaster.Title == undefined || this.InserRoleMaster.Title == null || this.InserRoleMaster.Title == "") {
                this.HideShow();
                this.popupMessage("Please Enter Title", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InserRoleMaster.Status == undefined || this.InserRoleMaster.Status == null || this.InserRoleMaster.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
             
                this.InsertService.PostRoleMaster(this.InserRoleMaster).then(response => {
                    if (response.data.Result != null) {

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Role saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();
                        this.InserRoleMaster = null;
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
        //Page Load Define Values//
        Init(): void {
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();
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
    class RoleMasterComponentController implements ng.IComponentOptions {
        static Name: string = "rolemastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = RoleMasterController;
            this.templateUrl = "/Scripts/App/RoleMaster/Template/_RoleMaster.html";
        }
    }
    app.AddComponent(RoleMasterComponentController.Name, new RoleMasterComponentController());


}
