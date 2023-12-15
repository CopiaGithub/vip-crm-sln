namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import EmailLeadlist = GCPL.Model.EmailLeadListModel;
    import EmailLeadDelayMaster = GCPL.Model.InsertEmailLeadModel;
    import EditEmail = GCPL.Model.EditEmailLeadListModel;

    interface IEmailLeadDetailDelayedController {
        EmailLeadList: Array<Model.EmailLeadListModel>;
        ZoneDD: Array<Model.ZoneDDModel>
        Modeldd: Array<Model.ModeldModel>
        InsertEmailLead: EmailLeadDelayMaster;
        Submit(): void;
        Edit(data: any): void;
        EditEmailLead: Array<Model.EditEmailLeadListModel>;

    }
    class EmailLeadDetailDelayedController implements IEmailLeadDetailDelayedController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        EmailLeadList = null;
        ZoneDD = null;
        Modeldd = null;
        InsertEmailLead = null;
        EditEmailLead = null;
        EMAIL_REGEXP = null;
        private Cookie: any = null;
        private Listservice: Service.IEmailLeadListService;
        private ZoneDDService: Service.IZoneDDService;
        private ModelDDService: Service.IModelService;
        private InsertService: Service.IInsertEmailLeadService;
        private EditService: Service.IEmailLeadEditService;

        static $inject = ["EmailLeadListService", "ZoneDDService", "ModelService", "InsertEmailLeadService", "EmailLeadEditService", "$cookieStore"];



        constructor(_Listservice: Service.IEmailLeadListService, _ZoneDDService: Service.IZoneDDService, _ModelDDService: Service.IModelService,
            _InsertService: Service.IInsertEmailLeadService, _EditService: Service.IEmailLeadEditService, private _cookieStore: any) {

            this.Listservice = _Listservice;
            this.ZoneDDService = _ZoneDDService;
            this.ModelDDService = _ModelDDService;
            this.InsertService = _InsertService;
            this.InsertEmailLead = new EmailLeadDelayMaster();
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
            this.InsertEmailLead.ID = "";
            this.InsertEmailLead.ModelID = "";
            this.InsertEmailLead.ZoneID = "";
            this.InsertEmailLead.EmailTO = "";
            this.InsertEmailLead.EmailCC = "";
            this.InsertEmailLead.Status = "";

        }

        Submit(): void {

            debugger;
            if (this.InsertEmailLead.EmailTO == undefined || this.InsertEmailLead.EmailTO == null || this.InsertEmailLead.EmailTO == "" ) {
                this.HideShow();
                this.popupMessage("Please Enter Valid TO Email", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");


            }
            //else if (this.InsertEmailLead.EmailCC == undefined || this.InsertEmailLead.EmailCC == null || this.InsertEmailLead.EmailCC == "" || !(this.EMAIL_REGEXP.test(this.InsertEmailLead.EmailCC))) {
            //    $("#errorclose").show();
            //    $("#close").hide();
            //    this.alert = "Please Enter Valid CC Email";

            //}
            else if (this.InsertEmailLead.ModelID == undefined || this.InsertEmailLead.ModelID == null || this.InsertEmailLead.ModelID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Model", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertEmailLead.ZoneID == undefined || this.InsertEmailLead.ZoneID == null || this.InsertEmailLead.ZoneID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Zone", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else {
                this.InsertService.PostEmailLead(this.InsertEmailLead).then((response => {

                    console.log(this.InsertEmailLead);
                    if (response.data.Result != null) {

                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Email Lead Details saved Successfully", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#add-modal').click();

                        this.InsertEmailLead = null;
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
        Edit(data: any): void {
            debugger;
            this.EditService.Find(data).then((response => {
                this.InsertEmailLead = this.EditService.GetEdit(response.data.Result);
                debugger;

                //$('#modeldd').val(this.InsertLeadSumm.ModelID);
                //$('#zonedd').val(this.InsertLeadSumm.ZoneID);
                $('#txtemailto').val(this.InsertEmailLead.EmailTO);
                $('#txtemailcc').val(this.InsertEmailLead.EmailCC);
              
                if (this.InsertEmailLead.Status == "True") {
                    this.InsertEmailLead.Status = "1";
                }
                else {
                    this.InsertEmailLead.Status = "0";
                }

                $("#add-modal").show();

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
            this.EmailLeadList = this.Listservice.Find().then((response => {
                this.EmailLeadList = this.Listservice.GetEmailLeadList(response.data.Result);

                if (this.EmailLeadList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.EmailLeadList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.EmailLeadList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.EmailLeadList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.EmailLeadList.slice(begin, end);
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
            this.shownItems = this.EmailLeadList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Close(): void {

            location.href = "#!/EmailLeadDetailDelayed";

        }

    }
    class EmailLeadDetailDelayedComponentController implements ng.IComponentOptions {
        static Name: string = "emailleaddetaildelayedcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = EmailLeadDetailDelayedController;
            this.templateUrl = "/Scripts/App/EmailLeadDetailDelayed/Template/EmailLeadDetailDelayed.html";
        }
    }
    app.AddComponent(EmailLeadDetailDelayedComponentController.Name, new EmailLeadDetailDelayedComponentController());

}