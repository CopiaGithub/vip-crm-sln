namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Accountlist = GCPL.Model.AccountTypeListModel;
    import Search = GCPL.Model.AccountSearchModel;
    import AccountTypeMaster = GCPL.Model.InsertAccountModel;
    import EditAccount = GCPL.Model.EditAccountlistModel;

    interface IAccountTypeMasterController {
        AccountTypeList: Array<Model.AccountTypeListModel>;
        SearchAccountList(): void;
        InsertAccount: AccountTypeMaster;
        Submit(): void;
        Edit(data: any): void;
        EditAccountType: Array<Model.EditAccountlistModel>;
    }

    class AccountTypeMasterController implements IAccountTypeMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        AccountTypeList = null;
        AccountSearch = null;
        InsertAccount = null;
        EditAccountType = null;

        private Cookie: any = null;
        private Listservice: Service.IAccountTypeListService;
        private InsertService: Service.IInsertAccountService;
        private EditService: Service.IAccountEditService;

        static $inject = ["AccountTypeListService", "InsertAccountService", "AccountEditService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_Listservice: Service.IAccountTypeListService, _InsertService: Service.IInsertAccountService, _EditService: Service.IAccountEditService, private _cookieStore: any) {

            this.Listservice = _Listservice;
            this.AccountSearch = Array<GCPL.Model.AccountSearchModel>();
            this.InsertService = _InsertService;
            this.InsertAccount = new AccountTypeMaster();
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
            this.Init();
            $('#search-btn-loader').hide();
            $("#errorclose").hide();
            $("#close").hide();

        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

           
        }

        SearchAccountList(): void {
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
            
            this.AccountTypeList = this.Listservice.Find(this.AccountSearch).then((response => {
                this.AccountTypeList = this.Listservice.GetAccountTypeList(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.AccountTypeList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.AccountTypeList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.AccountTypeList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.AccountTypeList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
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
            
            if (this.InsertAccount.AccountType == undefined || this.InsertAccount.AccountType == null || this.InsertAccount.AccountType == "") {
                this.HideShow();
                this.popupMessage("Please Enter AccountType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {

                
                this.InsertService.PostAccount(this.InsertAccount).then((response => {

                    console.log(this.InsertAccount);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("AccountType saved Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertAccount = null;
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

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertAccount = this.EditService.GetEdit(response.data.Result);
                

                //$('#txtstatus').val(this.InsertAccount.Status);

                if (this.InsertAccount.Status == "True") {
                    this.InsertAccount.Status = "1";
                }
                else {
                    this.InsertAccount.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }

        Add() {

            //this.InsertCategory.CategoryID = "";
            this.InsertAccount.AccountType = "";
            this.InsertAccount.Status = "";       
        }

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Clear() {

            this.AccountSearch.SearchText = "";
            this.AccountSearch.Status = "";


            //this.CategorySearch = "";
            $("#txtAccount").val("");
            $("#txtStatus").val("");
        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.AccountTypeList.slice(begin, end);
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
            this.shownItems = this.AccountTypeList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Close(): void {

            location.href = "#!/AccountTypeMaster";

        }
        ErrorClose(): void {
            location.href = "#!/AccountTypeMaster";

        }



    }
    class AccountTypeMasterComponentController implements ng.IComponentOptions {
        static Name: string = "accounttypemastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = AccountTypeMasterController;
            this.templateUrl = "/Scripts/App/MasterData/AccountTypeMaster/Template/_AccountTypeMaster.html";
        }
    }
    app.AddComponent(AccountTypeMasterComponentController.Name, new AccountTypeMasterComponentController());


}


3