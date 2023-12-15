namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Customerlist = GCPL.Model.CustomerListModel;
    import Search = GCPL.Model.CustomerSearchModel;
   
    interface ICustomerMasterController {
        CustomerMasterlist: Array<Model.CustomerListModel>;
        SearchCustomerList(): void;
        CustomerID: any;
        DeleteCustomerPerson(CustomerID: any): void;    
       
       
    }

    class CustomerMasterController implements ICustomerMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        CustomerMasterlist = null;
        CustomerID = null;
        CustomerSearch: GCPL.Model.CustomerSearchModel = null;
        private Cookie: any = null;
        private ListService: Service.ICustomerListService;
        private DeleteService: Service.IDeleteCustomerService;
       

        static $inject = ["CustomerListService", "$cookieStore","DeleteCustomerService"]

        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_ListService: Service.ICustomerListService, private _cookieStore: any, _deleteCustomer: Service.IDeleteCustomerService) {

            this.ListService = _ListService; 
            this.CustomerSearch = new Search();
            this.DeleteService = _deleteCustomer;
            this.Cookie = _cookieStore;
        }



        $onInit() {
            /* Sorting */

            //var th = document.getElementsByTagName('th')
            //for (let c = 0; c < th.length; c++) {
            //    th[c].addEventListener('click', item(c))

            //}
            //function item(c) {
            //    return function () {
            //        console.log(c)
            //        sortTable(c)
            //    }
            //}
            //function sortTable(c) {
            //    var table, rows, switching, i, x, y, shouldSwitch;
            //    table = document.getElementById("dataTable");
            //    switching = true;
            //    /*Make a loop that will continue until
            //    no switching has been done:*/
            //    while (switching) {
            //        //start by saying: no switching is done:
            //        switching = false;
            //        rows = table.rows;
            //        /*Loop through all table rows (except the
            //        first, which contains table headers):*/
            //        for (i = 1; i < (rows.length - 1); i++) {
            //            //start by saying there should be no switching:
            //            shouldSwitch = false;
            //            /*Get the two elements you want to compare,
            //            one from current row and one from the next:*/
            //            x = rows[i].getElementsByTagName("TD")[c];
            //            y = rows[i + 1].getElementsByTagName("TD")[c];
            //            //check if the two rows should switch place:
            //            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //                //if so, mark as a switch and break the loop:
            //                shouldSwitch = true;
            //                break;
            //            }
            //        }
            //        if (shouldSwitch) {
            //            /*If a switch has been marked, make the switch
            //            and mark that a switch has been done:*/
            //            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            //            switching = true;
            //        }
            //    }
            //}

            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();
            

        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            $('#page-loader').show();
           
        }
       
        SearchCustomerList(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }
      
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            debugger;
            this.CustomerMasterlist = this.ListService.Find(this.CustomerSearch).then((response => {
                this.CustomerMasterlist = this.ListService.GetCustomerlist(response.data.Result);
                $('#page-loader').hide();
                $('#search-btn-loader').hide();
                if (this.CustomerMasterlist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.CustomerMasterlist.forEach(function (value, key) {
                        debugger;
                        that.incre = parseInt(key) + 20;
                    });
                    console.log(this.CustomerMasterlist);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.CustomerMasterlist.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

       
        DeleteCustomerPerson(CustomerID): void {
            this.DeleteService.Find(CustomerID).then((response => {
                this.DeleteService.postCustomerDelete(response.data.Result);
                this.Init();
                alert("Record deleted successfully..");
            }));
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

        Refresh() {
            this.FillGrid(this.NoOfRds);
            this.DeleteCustomerPerson(this.CustomerID);
        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.CustomerMasterlist.slice(begin, end);
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
            this.shownItems = this.CustomerMasterlist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.CustomerSearch.SearchText = "";
            this.CustomerSearch.Status = "";
            this.CustomerSearch.SearchSAP = "";
            this.CustomerSearch.SearchMobileNo = "";
            this.CustomerSearch.SearchDistrict = "";


            //this.CategorySearch = "";
            $("#txtCustomer").val("");
            $("#txtSAP").val("");
            $("#txtDistrict").val("");
            $("#txtMobile").val("");
            $("#txtStatus").val("");
        }
        

    }
    class CustomerMasterComponentController implements ng.IComponentOptions {
        static Name: string = "customermastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CustomerMasterController;
            this.templateUrl = "/Scripts/App/MasterData/CustomerMaster/Template/_CustomerMaster.html";
        }
    }
    app.AddComponent(CustomerMasterComponentController.Name, new CustomerMasterComponentController());


}


