namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadSourcelist = GCPL.Model.LeadSourceListModel;
    import Search = GCPL.Model.LeadSourceSearchModel;
    import channel = GCPL.Model.ChannelDDModel;
    import LeadSourceInsert = GCPL.Model.InsertLeadSourceModel;
    import Edit = GCPL.Model.EditLeadSourceModel;

    interface ILeadSourceController {
        ChannelDD: ng.IPromise<Utility.Ajax.IResponse>;
        LeadSourceDatalist: Array<Model.LeadSourceListModel>;
        SearchLeadSourceDataList(): void;
        InsertLeadSource: LeadSourceInsert;
        Edit(data: any): void;
        EditLeadSource: Array<Model.EditLeadSourceModel>;

    }

    class LeadSourceController implements ILeadSourceController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        ChannelDD = null;
        LeadSourceDatalist = null;
        LeadSourceDataSearch = null;
        InsertLeadSource = null;
        EditLeadSource = null;
        private ChannelDDService: Service.IChannelDDService;
        private _LeadSourceListService: Service.ILeadSourceListService;
        private InsertService: Service.IInsertLeadSourceService;
        private EditService: Service.ILeadSourceEditService;
        private Cookie: any = null;

        static $inject = ["LeadSourceListService", "ChannelDDService", "InsertLeadSourceService","LeadSourceEditService","$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_LeadSourceListService: Service.ILeadSourceListService, _ChannelDDService: Service.IChannelDDService,
            _InsertService: Service.IInsertLeadSourceService, _EditService: Service.ILeadSourceEditService,private _cookieStore: any) {
            this.ChannelDDService = _ChannelDDService;
            this._LeadSourceListService = _LeadSourceListService;
            this.LeadSourceDataSearch = Array<GCPL.Model.LeadSourceSearchModel>();
            this.InsertService = _InsertService;
            this.InsertLeadSource = new LeadSourceInsert();
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
            

           
            this.ChannelDD = this.ChannelDDService.Find().then((response => {
                this.ChannelDD = this.ChannelDDService.GetChannelDDnew(response.data.Result);


            }));

            this.LeadSourceDatalist = this._LeadSourceListService.Find(this.LeadSourceDataSearch).then((response => {
                this.LeadSourceDatalist = this._LeadSourceListService.GetLeadSourceListData(response.data.Result);
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
            
            if (this.InsertLeadSource.ID == undefined || this.InsertLeadSource.ID == null || this.InsertLeadSource.ID == "") {
                this.HideShow();
                this.popupMessage("Please Enter Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadSource.LeadSource == undefined || this.InsertLeadSource.LeadSource == null || this.InsertLeadSource.LeadSource == "") {
                this.HideShow();
                this.popupMessage("Please Enter LeadSource", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertLeadSource.Description == undefined || this.InsertLeadSource.Description == null || this.InsertLeadSource.Description == "") {
                this.HideShow();
                this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            
            else {

                
                this.InsertService.PostLeadSource(this.InsertLeadSource).then((response => {

                    console.log(this.InsertLeadSource);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("LeadSource saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertLeadSource = null;
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

            this.InsertLeadSource.ID = "";
            this.InsertLeadSource.LeadSource = "";
            this.InsertLeadSource.Description = "";
            this.InsertLeadSource.Status = "";

        }

        Clear() {

            this.LeadSourceDataSearch.SearchText = "";
            this.LeadSourceDataSearch.Status = "";
            this.LeadSourceDataSearch.Channel = "";

            $("#ddlstatus").val("");
            $("#txtChannelsearch").val("");
            $("#txtSource").val("");
            
        }

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertLeadSource = this.EditService.GetEdit(response.data.Result);
                
                //$('#txtsalorg').val(this.InsertLeadSource.LeadSourceID);
                $('#txtLead').val(this.InsertLeadSource.LeadSource);
                $('#txtChannel').val(this.InsertLeadSource.ID);
                $('#txtSAPID').val(this.InsertLeadSource.Description);
               // $('#txtStatus').val(this.InsertLeadSource.Status);

                if (this.InsertLeadSource.Status == "True") {
                    this.InsertLeadSource.Status = "1";
                }
                else {
                    this.InsertLeadSource.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }
        SearchLeadSourceDataList(): void {
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

            this.LeadSourceDatalist = this._LeadSourceListService.Find(this.LeadSourceDataSearch).then((response => {
                this.LeadSourceDatalist = this._LeadSourceListService.GetLeadSourceListData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.LeadSourceDatalist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.LeadSourceDatalist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });

                console.log(this.LeadSourceDatalist);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.LeadSourceDatalist.slice(0, that.numRecords);
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

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.LeadSourceDatalist.slice(begin, end);
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
            this.shownItems = this.LeadSourceDatalist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Close(): void {

            location.href = "#!/LeadSource";

        }
        ErrorClose(): void {
            location.href = "#!/LeadSource";

        }

    }
    class LeadSourceComponentController implements ng.IComponentOptions {
        static Name: string = "leadsourcecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadSourceController;
            this.templateUrl = "/Scripts/App/MasterData/LeadSource/Template/_LeadSource.html";
        }
    }
    app.AddComponent(LeadSourceComponentController.Name, new LeadSourceComponentController());


}


