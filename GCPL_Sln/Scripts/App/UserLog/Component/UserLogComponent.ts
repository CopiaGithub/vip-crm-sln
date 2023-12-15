namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import UserLogHeader = GCPL.Model.UserLogHeaderModel;

    interface IUserLogController {
        UserLogHeaderModel: UserLogHeader;
        Search(): void;
    }

    class UserLogController implements IUserLogController {
        UserLogHeaderModel = null;
        FillUserLogGrid = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        private ULService: Service.IUserLogGridService;

        static $inject = ["UserLogGridService"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_ULService: Service.IUserLogGridService) {
            this.UserLogHeaderModel = new GCPL.Model.UserLogHeaderModel();
            this.ULService = _ULService;
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
            $('#search-btn-loader').hide();
            let that = this;
            this.Init();
            $("#txtFromDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectFromDate
            });
            $("#txtToDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
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
            let that = this;
            
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            debugger;
            this.FillUserLogGrid = this.ULService.FindGrid(this.UserLogHeaderModel).then((response => {
                this.FillUserLogGrid = this.ULService.GetUserLogGrid(response.data.Result);
                $('#search-btn-loader').hide();
                
                if (this.FillUserLogGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillUserLogGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.FillUserLogGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillUserLogGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        Clear() {
            this.UserLogHeaderModel.UserName = "";
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
            (<HTMLInputElement>document.getElementById("txtToDate")).value = "";
        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.FillUserLogGrid.slice(begin, end);
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
            this.shownItems = this.FillUserLogGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);
        }

        Search(): void {
            $('#search-btn-loader').show();
            let that = this;

            this.UserLogHeaderModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.UserLogHeaderModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
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
    class UserLogComponentController implements ng.IComponentOptions {
        static Name: string = "userlogcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = UserLogController;
            this.templateUrl = "/Scripts/App/UserLog/Template/_UserLog.html";
        }
    }
    app.AddComponent(UserLogComponentController.Name, new UserLogComponentController());


}


