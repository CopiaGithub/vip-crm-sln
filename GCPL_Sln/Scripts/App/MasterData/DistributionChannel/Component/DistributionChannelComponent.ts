namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Distributionlist = GCPL.Model.DistributionChannelListModel;
    import Search = GCPL.Model.DistributionChannelSearchModel;
    import DistributionChannelInsert = GCPL.Model.InsertDistributionChannelModel;
    import EditDistribution = GCPL.Model.EditDistributionChannelModel;

    interface IDistributionChannelController {
        DistributionChannelList: Array<Model.DistributionChannelListModel>;
        SearchDistributionChannelList(): void;
        InsertDistributionChannel: DistributionChannelInsert;
        Edit(data: any): void;
        EditDistributionChannel: Array<Model.EditDistributionChannelModel>;
    }

    class DistributionChannelController implements IDistributionChannelController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        DistributionChannelList = null;
        DistributionChannelSearch = null;
        InsertDistributionChannel = null;
        EditDistributionChannel = null;
        private Cookie: any = null;
        private InsertService: Service.IInsertDistributionChannelService;
        private _DistributionChannelService: Service.IDistributionChannelService;
        private EditService: Service.IDistributionChannelEditService;

        static $inject = ["DistributionChannelService", "InsertDistributionChannelService", "DistributionChannelEditService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_DistributionChannelService: Service.IDistributionChannelService, _InsertService: Service.IInsertDistributionChannelService, _EditService: Service.IDistributionChannelEditService,private _cookieStore: any) {
            this._DistributionChannelService = _DistributionChannelService;
            this.DistributionChannelSearch = Array<GCPL.Model.DistributionChannelSearchModel>();
            this.InsertService = _InsertService;
            this.InsertDistributionChannel = new DistributionChannelInsert();
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

            this.InsertDistributionChannel.Status = "";

            this.DistributionChannelList = this._DistributionChannelService.Find(this.DistributionChannelSearch).then((response => {
                this.DistributionChannelList = this._DistributionChannelService.GetDistributionChannelData(response.data.Result);
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
           
            if (this.InsertDistributionChannel.DistributionChannel == undefined || this.InsertDistributionChannel.DistributionChannel == null || this.InsertDistributionChannel.DistributionChannel == "") {
                this.HideShow();
                this.popupMessage("Please Enter Distribution Channel", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertDistributionChannel.SAPID == undefined || this.InsertDistributionChannel.SAPID == null || this.InsertDistributionChannel.SAPID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else if (this.InsertDistributionChannel.Status == undefined || this.InsertDistributionChannel.Status == null || this.InsertDistributionChannel.Status == "") {
                this.HideShow();
                this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {
             
                this.InsertService.PostDistributionChannel(this.InsertDistributionChannel).then((response => {

                    console.log(this.InsertDistributionChannel);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Distribution Channel saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertDistributionChannel = null;
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

            this.InsertDistributionChannel.DistributionChannel = "";
            this.InsertDistributionChannel.SAPID = "";
            this.InsertDistributionChannel.Status = "";

        }

        Edit(data: any): void {
           
            this.EditService.Find(data).then((response => {
                this.InsertDistributionChannel = this.EditService.GetEdit(response.data.Result);
               

                $('#txtChannel').val(this.InsertDistributionChannel.DistributionChannel);
                $('#txtSAPID').val(this.InsertDistributionChannel.SAPID);
               // $('#txtStatus').val(this.InsertDistributionChannel.Status);

                if (this.InsertDistributionChannel.Status == "True") {
                    this.InsertDistributionChannel.Status = "1";
                }
                else {
                    this.InsertDistributionChannel.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }
        Clear() {

            this.DistributionChannelSearch.SearchText = "";
            this.DistributionChannelSearch.Status = "";
            $("#ddlstatus").val("");
            $("#ddlstatus").val("");
            
        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];

            this.DistributionChannelList = this._DistributionChannelService.Find(this.DistributionChannelSearch).then((response => {
                this.DistributionChannelList = this._DistributionChannelService.GetDistributionChannelData(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.DistributionChannelList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.DistributionChannelList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                console.log(this.DistributionChannelList);
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.DistributionChannelList.slice(0, that.numRecords);
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
        SearchDistributionChannelList(): void {
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
            this.shownItems = this.DistributionChannelList.slice(begin, end);
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
            this.shownItems = this.DistributionChannelList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Close(): void {

            location.href = "#!/DistributionChannel";

        }
        
    }
    class DistributionChannelComponentController implements ng.IComponentOptions {
        static Name: string = "distributionchannelcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = DistributionChannelController;
            this.templateUrl = "/Scripts/App/MasterData/DistributionChannel/Template/_DistributionChannel.html";
        }
    }
    app.AddComponent(DistributionChannelComponentController.Name, new DistributionChannelComponentController());


}


