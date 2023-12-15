namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Lead = GCPL.Model.LeadSourceDDModel;
    import SubSourcelist = GCPL.Model.SubSourceListModel;
    import Search = GCPL.Model.SubSourceSearchModel;
    import SubSourceInsert = GCPL.Model.InsertSubSourceModel;
    import EditSource = GCPL.Model.EditSubSourceModel;

    interface ISubSourceController {
        LeadSourceDD: ng.IPromise<Utility.Ajax.IResponse>;
        SubSourcelist: Array<Model.SubSourceListModel>;
        SearchSubSourceList(): void;
        InsertSubSource: SubSourceInsert;
        Edit(data: any): void;
        EditSubSource: Array<Model.EditSubSourceModel>;

    }

    class SubSourceController implements ISubSourceController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        SubSourcelist = null;
        SubSourceSearch = null;
        LeadSourceDD = null;
        InsertSubSource = null;
        EditSubSource = null;
        private EditService: Service.ISubSourceEditService;
        private LeadSourceDDService: Service.ILeadSourceDDService;
        private _SubSourceListService: Service.ISubSourceListService;
        private InsertService: Service.IInsertSubSourceService;
        private Cookie: any = null;

        static $inject = ["SubSourceListService", "LeadSourceDDService", "InsertSubSourceService","SubSourceEditService","$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_SubSourceListService: Service.ISubSourceListService, LeadSourceDDService: Service.ILeadSourceDDService, _InsertService: Service.IInsertSubSourceService, _EditService: Service.ISubSourceEditService, private _cookieStore: any) {
            this._SubSourceListService = _SubSourceListService;
            this.SubSourceSearch = Array<GCPL.Model.SubSourceSearchModel>();
            this.LeadSourceDDService = LeadSourceDDService;
            this.InsertService = _InsertService;
            this.InsertSubSource = new SubSourceInsert();
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
            let that = this;
            $("#errorclose").hide();
            $("#close").hide();
            debugger;

            

            this.LeadSourceDD = this.LeadSourceDDService.Find().then((response => {
                this.LeadSourceDD = this.LeadSourceDDService.GetLeadSourceDDnew(response.data.Result);


            }));

            this.SubSourcelist = this._SubSourceListService.Find(this.SubSourceSearch).then((response => {
                this.SubSourcelist = this._SubSourceListService.GetSubSourceListData(response.data.Result);
            }));

        }
        
        Submit(): void {
            debugger;
            if (this.InsertSubSource.LeadSourceID == undefined || this.InsertSubSource.LeadSourceID == null || this.InsertSubSource.LeadSourceID == ""){
                this.HideShow();
                this.popupMessage("Please Enter LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSubSource.Subsource == undefined || this.InsertSubSource.Subsource == null || this.InsertSubSource.Subsource == ""){
                this.HideShow();
                this.popupMessage("Please Enter Subsource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertSubSource.Description == undefined || this.InsertSubSource.Description == null || this.InsertSubSource.Description == ""){
                this.HideShow();
                this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertSubSource.Status == undefined || this.InsertSubSource.Status == null || this.InsertSubSource.Status == ""){
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {

                debugger;
                this.InsertService.PostSubSource(this.InsertSubSource).then((response => {

                    console.log(this.InsertSubSource);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Subsource saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertSubSource = null;
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

            this.InsertSubSource.LeadSourceID = "";
            this.InsertSubSource.Subsource = "";
            this.InsertSubSource.Description = "";     
            this.InsertSubSource.Status = "";

        }
        Clear() {

            this.SubSourceSearch.Subsource = "";     
            this.SubSourceSearch.LeadSource = "";     
            this.SubSourceSearch.Status = "";

            $("#txtleadSource").val("");
            $("#txtSubSource").val("");
            $("#txtStatus").val("");

           
        }
        Edit(data: any): void {
            debugger;
            this.EditService.Find(data).then((response => {
                this.InsertSubSource = this.EditService.GetEdit(response.data.Result);
                debugger;

                $('#txtSource').val(this.InsertSubSource.LeadSourceID);
                $('#txtSub').val(this.InsertSubSource.Subsource);
                $('#txtDesc').val(this.InsertSubSource.Description);

                //$('#txtStatus').val(this.InsertSubSource.Status);

                if (this.InsertSubSource.Status == "True") {
                    this.InsertSubSource.Status = "1";
                }
                else {
                    this.InsertSubSource.Status = "0";
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

            this.SubSourcelist = this._SubSourceListService.Find(this.SubSourceSearch).then((response => {
                this.SubSourcelist = this._SubSourceListService.GetSubSourceListData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.SubSourcelist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.SubSourcelist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });

                console.log(this.SubSourcelist);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.SubSourcelist.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }


            }));
        }

        SearchSubSourceList(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }
        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);

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
        Close(): void {

            location.href = "#!/SubSource";

        }
        ErrorClose(): void {
            location.href = "#!/SubSource";

        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.SubSourcelist.slice(begin, end);
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
            this.shownItems = this.SubSourcelist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };


    }
    class SubSourceComponentController implements ng.IComponentOptions {
        static Name: string = "subsourcecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = SubSourceController;
            this.templateUrl = "/Scripts/App/MasterData/SubSource/Template/_SubSource.html";
        }
    }
    app.AddComponent(SubSourceComponentController.Name, new SubSourceComponentController());


}


