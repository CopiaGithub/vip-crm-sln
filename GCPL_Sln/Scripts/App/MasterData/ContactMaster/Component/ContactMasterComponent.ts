namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Contactlist = GCPL.Model.ContactListModel;
    import Search = GCPL.Model.ContactSearchModel;

    interface IContactMasterController {
        Contactlist: Array<Model.ContactListModel>;
        SearchContactList(): void;
        ContactID: any;
        DeleteContactPerson(ContactID: any): void; 
    }

    class ContactMasterController implements IContactMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        Contactlist = null;
        ContactID = null;
        ContactSearch: GCPL.Model.ContactSearchModel = null;

        private Cookie: any = null;
        private ListService: Service.IContactListService;
        private DeleteService: Service.IDeleteContactservice;

        static $inject = ["ContactListService", "$cookieStore","DeleteContactservice"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_ListService: Service.IContactListService, private _cookieStore: any, _DeleContact: Service.IDeleteContactservice) {

            this.ListService = _ListService;
            this.ContactSearch = new Search();
            this.DeleteService = _DeleContact;
            this.Cookie = _cookieStore;
        }



        $onInit() {
           
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();

        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

           
        }
        SearchContactList(): void {
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
            this.Contactlist = this.ListService.Find(this.ContactSearch).then((response => {
                this.Contactlist = this.ListService.GetContactlist(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.Contactlist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.Contactlist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 20;
                    });
                    console.log(this.Contactlist);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.Contactlist.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        DeleteContactPerson(ContactID): void {
            this.DeleteService.Find(ContactID).then((response => {
                this.DeleteService.postContactDelete(response.data.Result);
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
            this.DeleteContactPerson(this.ContactID);

        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.Contactlist.slice(begin, end);
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
            this.shownItems = this.Contactlist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.ContactSearch.SearchText = "";

            this.ContactSearch.ContactSAPID = "";
            this.ContactSearch.CustSAPID = "";
            this.ContactSearch.SearchCompanyName = "";
            
            this.ContactSearch.SearchPhoneNo = "";
            this.ContactSearch.Status = "";

            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            
            $("#txtContact").val("");
            $("#txtCustomer").val("");
           
            $("#txtPhone").val("");
            $("#txtStatus").val("");

        }

    }
    class ContactMasterComponentController implements ng.IComponentOptions {
        static Name: string = "contactmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ContactMasterController;
            this.templateUrl = "/Scripts/App/MasterData/ContactMaster/Template/_ContactMaster.html";
        }
    }
    app.AddComponent(ContactMasterComponentController.Name, new ContactMasterComponentController());


}


