namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadSummlist = GCPL.Model.LeadSummaryListModel;
    import LeadSummaryEmailMaster = GCPL.Model.InsertLeadSummModel;
    import EditLead = GCPL.Model.EditLeadSummlistModel;

    interface ILeadSummaryEmailsController {
        LeadSummaryList: Array<Model.LeadSummaryListModel>;
        InsertLeadSumm: LeadSummaryEmailMaster;
        Submit(): void;
        ZoneDD: Array<Model.ZoneDDModel>
        Edit(data: any): void;
        EditLeadSumm: Array<Model.EditLeadSummlistModel>;
        Modeldd: Array<Model.ModeldModel>
    }
    class LeadSummaryEmailsController implements ILeadSummaryEmailsController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadSummaryList = null;
        InsertLeadSumm = null;
        ZoneDD = null;
        EditLeadSumm = null;
        Modeldd = null;
        EMAIL_REGEXP = null;

        private Cookie: any = null;
        private Listservice: Service.ILeadSummaryListService;
        private InsertService: Service.IInsertLeadSummaryService;
        private ZoneDDService: Service.IZoneDDService;
        private EditService: Service.ILeadSummEditService;
        private ModelDDService: Service.IModelService;

        static $inject = ["LeadSummaryListService", "InsertLeadSummaryService", "ZoneDDService", "LeadSummEditService", "ModelService", "$cookieStore"];



        constructor(_Listservice: Service.ILeadSummaryListService, _InsertService: Service.IInsertLeadSummaryService, _ZoneDDService: Service.IZoneDDService,
            _EditService: Service.ILeadSummEditService, _ModelDDService: Service.IModelService, private _cookieStore: any) {

            this.InsertService = _InsertService;
            this.InsertLeadSumm = new LeadSummaryEmailMaster();
            this.Listservice = _Listservice;
            this.EditService = _EditService;
            this.ZoneDDService = _ZoneDDService;         
            this.ModelDDService = _ModelDDService;
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
            $("#errorclose").hide();
            $("#close").hide();

            

        }

        //Page Load Define Values//
        Init(): void {
            this.EMAIL_REGEXP = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            $("#errorclose").hide();
            $("#close").hide();
            
            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));

            this.Modeldd = this.ModelDDService.Find().then((response => {
                this.Modeldd = this.ModelDDService.GetModel(response.data.Result);
            }));

            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);


        }

        Add() {
            //this.InsertLeadSumm.ID = "";
            this.InsertLeadSumm.ModelID = "";
            this.InsertLeadSumm.ZoneID = "";
            this.InsertLeadSumm.EmailTO = "";
            this.InsertLeadSumm.EmailCC = "";
            this.InsertLeadSumm.Status = "";
           
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

            debugger;
            if (this.InsertLeadSumm.EmailTO == undefined || this.InsertLeadSumm.EmailTO == null || this.InsertLeadSumm.EmailTO == "" ) {
                this.HideShow();
                this.popupMessage("Please Enter Valid TO Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                this.alert = "Please Enter Valid TO Email";

            }
            //else if (this.InsertLeadSumm.EmailCC == undefined || this.InsertLeadSumm.EmailCC == null || this.InsertLeadSumm.EmailCC == "" ) {
            //    $("#errorclose").show();
            //    $("#close").hide();
            //    this.alert = "Please Enter Valid CC Email";

            //}
            else if (this.InsertLeadSumm.ModelID == undefined || this.InsertLeadSumm.ModelID == null || this.InsertLeadSumm.ModelID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadSumm.ZoneID == undefined || this.InsertLeadSumm.ZoneID == null || this.InsertLeadSumm.ZoneID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {

            this.InsertService.PostLeadSumm(this.InsertLeadSumm).then((response => {

                console.log(this.InsertLeadSumm);
                if (response.data.Result != null) {
                    $("#errorclose").hide();
                    $("#close").show();
                    this.popupMessage("Lead Summary Emails saved Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    $('#add-modal').click();

                    this.InsertLeadSumm = null;
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

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            debugger;
            this.LeadSummaryList = this.Listservice.Find().then((response => {
                this.LeadSummaryList = this.Listservice.GetLeadSummList(response.data.Result);

                if (this.LeadSummaryList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.LeadSummaryList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.LeadSummaryList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.LeadSummaryList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        Edit(data: any): void {
            debugger;
            this.EditService.Find(data).then((response => {
                this.InsertLeadSumm = this.EditService.GetEdit(response.data.Result);
                debugger;

                //$('#modeldd').val(this.InsertLeadSumm.ModelID);
                //$('#zonedd').val(this.InsertLeadSumm.ZoneID);
                $('#txtemailto').val(this.InsertLeadSumm.EmailTO);
                $('#txtemailcc').val(this.InsertLeadSumm.EmailCC);
                

                //this.ZoneDD = this.ZoneDDService.Find().then((response => {
                //    this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
                    //this.InsertLeadSumm.ZoneID = this.ZoneDD[0].ID.toString();
                //}));

                //this.Modeldd = this.ModelDDService.Find().then((response => {
                //    this.Modeldd = this.ModelDDService.GetModel(response.data.Result);
                    //this.InsertLeadSumm.ModelID = this.Modeldd[0].ModelID.toString();
                //}));

                if (this.InsertLeadSumm.Status == "True") {
                    this.InsertLeadSumm.Status = "1";
                }
                else {
                    this.InsertLeadSumm.Status = "0";
                }
               
                $("#add-modal").show();

            }));
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.LeadSummaryList.slice(begin, end);
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
            this.shownItems = this.LeadSummaryList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Close(): void {

            location.href = "#!/LeadSummaryEmails";

        }

    }
    class LeadSummaryEmailsComponentController implements ng.IComponentOptions {
        static Name: string = "leadsummaryemailscomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadSummaryEmailsController;
            this.templateUrl = "/Scripts/App/LeadSummaryEmails/Template/LeadSummaryEmails.html";
        }
    }
    app.AddComponent(LeadSummaryEmailsComponentController.Name, new LeadSummaryEmailsComponentController());

}