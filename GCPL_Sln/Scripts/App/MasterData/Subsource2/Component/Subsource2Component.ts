namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import SubSource2list = GCPL.Model.SubSource2ListModel;
    import Search = GCPL.Model.SubSource2SearchModel;
   
    //import Subsource2Insert = GCPL.Model.InsertSubsource2Model;

    interface ISubsource2Controller {
       
       
        LeadSourceDD: Array<Model.LeadSourceDDModel>
        SubSourceDDwp: Array<Model.SubSourceDDwpModel>
        SubSource2list: Array<Model.SubSource2ListModel>;
        SearchSubSource2List(): void;
        Subsource2(): void;
        Edit(data: any): void;
        EditSubSource2: Array<Model.EditSubsource2Model>;
    }

    class Subsource2Controller implements ISubsource2Controller {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        SubSource2Search = null;
        EditSubSource2 = null;
        InsertSubsource2: GCPL.Model.InsertSubsource2Model = null;
        SubSourceDDwp = null;
        LeadSourceDD = null;
        SubSource2list = null;
        
        private Cookie: any = null;
        private SubSource2ListService: Service.ISubSource2ListService;
        private InsertServicePost: Service.IInsertSubsource2Service;
        private LeadSourceDDService: Service.ILeadSourceDDService;
        private SubSourceDDwpService: Service.ISubSourceDDwpService;
        private EditService: Service.ISubsource2EditService;

        static $inject = ["SubSource2ListService", "InsertSubsource2Service", "LeadSourceDDService", "SubSourceDDwpService", "Subsource2EditService", "$cookieStore"];

        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_SubSource2ListService: Service.ISubSource2ListService, _InsertService: Service.IInsertSubsource2Service, _LeadSourceDDService: Service.ILeadSourceDDService, _SubSourceDDwpService: Service.ISubSourceDDwpService, 
            _EditService: Service.ISubsource2EditService, private _cookieStore: any) {

            this.SubSourceDDwpService = _SubSourceDDwpService;
            this.LeadSourceDDService = _LeadSourceDDService;
            this.InsertServicePost = _InsertService;
            this.EditService = _EditService;
            this.SubSource2ListService = _SubSource2ListService;
            this.SubSource2Search = Array<GCPL.Model.SubSource2SearchModel>();
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
            $("#close").hide();
            $('#search-btn-loader').hide();


        }

        //Page Load Define Values//
        Init(): void {
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();
           



            this.SubSource2list = this.SubSource2ListService.Find(this.SubSource2Search).then((response => {
                this.SubSource2list = this.SubSource2ListService.GetSubSource2ListData(response.data.Result);
            }));
            //this.SubSourceDD = this.SubSourceDDService.Find().then((response => {
            //    this.SubSourceDD = this.SubSourceDDService.GetSubSourceName(response.data.Result);

            //}));
            this.LeadSourceDD = this.LeadSourceDDService.Find().then((response => {
                this.LeadSourceDD = this.LeadSourceDDService.GetLeadSourceDDnew(response.data.Result);
            }));
                
           
        }
        Subsource2(): void {
            debugger;
            this.SubSourceDDwp = this.SubSourceDDwpService.Find(this.InsertSubsource2.LeadSourceID).then((response => {
                this.SubSourceDDwp = this.SubSourceDDwpService.GetSubSourceName(response.data.Result);
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
            
            if (this.InsertSubsource2.LeadSourceID == undefined || this.InsertSubsource2.LeadSourceID == null || this.InsertSubsource2.LeadSourceID == ""){
                this.HideShow();
                this.popupMessage("Please Enter LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSubsource2.SubsourceID == undefined || this.InsertSubsource2.SubsourceID == null || this.InsertSubsource2.SubsourceID == ""){
                this.HideShow();
                this.popupMessage("Please Enter Subsource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSubsource2.Subsource2 == undefined || this.InsertSubsource2.Subsource2 == null || this.InsertSubsource2.Subsource2 == "") {
                this.HideShow();
                this.popupMessage("Please Enter Subsource2", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSubsource2.Description == undefined || this.InsertSubsource2.Description == null || this.InsertSubsource2.Description == "") {
                this.HideShow();
                this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {

                debugger;
                this.InsertServicePost.PostSubsource2(this.InsertSubsource2).then((response => {

                    console.log(this.InsertSubsource2);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Sub Source 2 saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertSubsource2 = null;
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
        Clear() {

            this.SubSource2Search.Subsource2 = "";

        }
        Add() {

            this.InsertSubsource2.LeadSourceID = "";
            this.InsertSubsource2.SubsourceID = "";
            this.InsertSubsource2.Subsource2 = "";
            this.InsertSubsource2.Description = "";
            this.InsertSubsource2.Status = "";

        }
        Edit(data: any): void {

            this.EditService.Find(data).then((response => {
                this.InsertSubsource2 = this.EditService.GetEdit(response.data.Result);
              
                //this.SubSourceDDwp = this.SubSourceDDwpService.Find(this.InsertSubsource2.LeadSourceID).then((response => {
                //    this.SubSourceDDwp = this.SubSourceDDwpService.GetSubSourceName(response.data.Result);
                //}));

                $('#txtleadSource').val(this.InsertSubsource2.LeadSourceID);
                $('#txtsubSource').val(this.InsertSubsource2.SubsourceID);
                 this.SubSourceDDwp = this.SubSourceDDwpService.Find(this.InsertSubsource2.LeadSourceID).then((response => {
                    this.SubSourceDDwp = this.SubSourceDDwpService.GetSubSourceName(response.data.Result);
                }));
                $('#txtSub2').val(this.InsertSubsource2.Subsource2);
                
                $('#txtDesc').val(this.InsertSubsource2.Description);

                //$('#txtStatus').val(this.InsertSubsource2.Status);

                if (this.InsertSubsource2.Status == "True") {
                    this.InsertSubsource2.Status = "1";
                }
                else {
                    this.InsertSubsource2.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.SubSource2list = this.SubSource2ListService.Find(this.SubSource2Search).then((response => {
                this.SubSource2list = this.SubSource2ListService.GetSubSource2ListData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.SubSource2list.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.SubSource2list.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });


                console.log(this.SubSource2list);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.SubSource2list.slice(0, that.numRecords);

                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

            }));
        }

        SearchSubSource2List(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }
        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);

        }

        Close(): void {

            location.href = "#!/Subsource2";

        }
        
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.SubSource2list.slice(begin, end);
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
            this.shownItems = this.SubSource2list.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };


    }
    class Subsource2ComponentController implements ng.IComponentOptions {
        static Name: string = "subsource2component"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = Subsource2Controller;
            this.templateUrl = "/Scripts/App/MasterData/Subsource2/Template/_Subsource2.html";
        }
    }
    app.AddComponent(Subsource2ComponentController.Name, new Subsource2ComponentController());


}


