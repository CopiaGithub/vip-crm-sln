namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;

    interface IRegistrationContactController {
        RegistrationContactDatalist: Array<Model.RegistrationContactListModel>;
        SearchRegistrationContactList(): void;
    }
    class RegistrationContactController implements IRegistrationContactController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
     
        RegistrationContactDatalist = null;
        RegistrationContactSearch = null;
        private _RegistrationContactListService: Service.IRegistrationContactListService;
        private Cookie: any = null;

        static $inject = ["RegistrationContactListService","$cookieStore"];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_RegistrationContactListService: Service.IRegistrationContactListService, private _cookieStore: any) {
            this._RegistrationContactListService = _RegistrationContactListService;
            this.RegistrationContactSearch = Array<GCPL.Model.RegistrationContactSearchModel>();
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
           

            debugger;

           

            this.RegistrationContactDatalist = this._RegistrationContactListService.Find(this.RegistrationContactSearch).then((response => {
                this.RegistrationContactDatalist = this._RegistrationContactListService.GetRegistrationContactData(response.data.Result);
            }));

        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.RegistrationContactDatalist = this._RegistrationContactListService.Find(this.RegistrationContactSearch).then((response => {
                this.RegistrationContactDatalist = this._RegistrationContactListService.GetRegistrationContactData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.RegistrationContactDatalist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.RegistrationContactDatalist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });

                console.log(this.RegistrationContactDatalist);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.RegistrationContactDatalist.slice(0, that.numRecords);

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

            this.RegistrationContactSearch.SearchInput = "";
            this.RegistrationContactSearch.StatusID = "";
            $("#txtsearch").val("");
            $("#ddlstatus").val("");


        }

        SearchRegistrationContactList(): void {
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
            this.shownItems = this.RegistrationContactDatalist.slice(begin, end);
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
            this.shownItems = this.RegistrationContactDatalist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Close(): void {

            location.href = "#!/RegistrationContact";

        }
        ErrorClose(): void {
            location.href = "#!/RegistrationContact";

        }



    }
    class RegistrationContactComponentController implements ng.IComponentOptions {
        static Name: string = "registrationcontactcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = RegistrationContactController;
            this.templateUrl = "/Scripts/App/RegistrationContact/Template/RegistrationContact.html";
        }
    }
    app.AddComponent(RegistrationContactComponentController.Name, new RegistrationContactComponentController());

}