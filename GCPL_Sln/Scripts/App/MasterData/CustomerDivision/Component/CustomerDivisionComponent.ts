//search

namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Customerlist = GCPL.Model.CustomerDivisionListModel;
    import Search = GCPL.Model.CustomerDivisionSearchModel;
    import CustomerDivisionInsert = GCPL.Model.InsertCustomerDivisionModel;
    import EditCustomer = GCPL.Model.EditCustomerDivisionModel;

    interface ICustomerDivisionController {
        CustomerDivisionList: Array<Model.CustomerDivisionListModel>;
        SearchCustomerDivisionList(): void;
        InsertCustomerDivision: CustomerDivisionInsert;
        Edit(data: any): void;
        EditCustomerDivision: Array<Model.EditCustomerDivisionModel>;
    }

    class CustomerDivisionController implements ICustomerDivisionController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        CustomerDivisionList = null;
        CustomerDivisionSearch = null;
        InsertCustomerDivision = null;
        EditCustomerDivision = null;

        private Cookie: any = null;
        private _CustomerDivisionService: Service.ICustomerDivisionService;
        private InsertService: Service.IInsertCustomerDivisionService;
        private EditService: Service.ICustomerDivisionEditService;

        static $inject = ["CustomerDivisionService", "InsertCustomerDivisionService", "CustomerDivisionEditService","$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_CustomerDivisionService: Service.ICustomerDivisionService, _InsertService: Service.IInsertCustomerDivisionService, _EditService: Service.ICustomerDivisionEditService, private _cookieStore: any ) {
            this._CustomerDivisionService = _CustomerDivisionService;
            this.CustomerDivisionSearch = Array<GCPL.Model.CustomerDivisionSearchModel>();
            this.InsertService = _InsertService;
            this.InsertCustomerDivision = new CustomerDivisionInsert();
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
            $("#errorclose").hide();
            $("#close").hide();

            this.InsertCustomerDivision.Status = "";           

            
           
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
            
            if (this.InsertCustomerDivision.CustomerDivision == undefined || this.InsertCustomerDivision.CustomerDivision == null || this.InsertCustomerDivision.CustomerDivision == "") {
                this.HideShow();
                this.popupMessage("Please Enter Customer Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertCustomerDivision.SAPID == undefined || this.InsertCustomerDivision.SAPID == null || this.InsertCustomerDivision.SAPID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertCustomerDivision.Status == undefined || this.InsertCustomerDivision.Status == null || this.InsertCustomerDivision.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {

                
                this.InsertService.PostCustomerDivision(this.InsertCustomerDivision).then((response => {

                    console.log(this.InsertCustomerDivision);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Customer Division saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertCustomerDivision = null;
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

            //this.InsertCategory.CategoryID = "";
            this.InsertCustomerDivision.CustomerDivision = "";
            this.InsertCustomerDivision.SAPID = "";
            this.InsertCustomerDivision.Status = "";


        }

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertCustomerDivision = this.EditService.GetEdit(response.data.Result);
                

                $('#txtDivision').val(this.InsertCustomerDivision.CustomerDivision);
                $('#txtSAPID').val(this.InsertCustomerDivision.SAPID);
                //$('#txtStatus').val(this.InsertCustomerDivision.Status);

                if (this.InsertCustomerDivision.Status == "True") {
                    this.InsertCustomerDivision.Status = "1";
                }
                else {
                    this.InsertCustomerDivision.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }

        Clear() {

            this.CustomerDivisionSearch.SearchText = "";
            this.CustomerDivisionSearch.Status = "";


            //this.CategorySearch = "";
            $("#txtDivision").val("");
            $("#ddlstatus").val("");
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.CustomerDivisionList = this._CustomerDivisionService.Find(this.CustomerDivisionSearch).then((response => {
                this.CustomerDivisionList = this._CustomerDivisionService.GetCustomerDivisionData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.CustomerDivisionList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.CustomerDivisionList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });

                console.log(this.CustomerDivisionList);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.CustomerDivisionList.slice(0, that.numRecords);
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

        SearchCustomerDivisionList(): void {
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
            this.shownItems = this.CustomerDivisionList.slice(begin, end);
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
            this.shownItems = this.CustomerDivisionList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };


    }
    class CustomerDivisionComponentController implements ng.IComponentOptions {
        static Name: string = "customerdivisioncomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CustomerDivisionController;
            this.templateUrl = "/Scripts/App/MasterData/CustomerDivision/Template/_CustomerDivision.html";
        }
    }
    app.AddComponent(CustomerDivisionComponentController.Name, new CustomerDivisionComponentController());


}


3