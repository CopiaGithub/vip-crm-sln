namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Industriallist = GCPL.Model.IndustrialListModel;
    import Search = GCPL.Model.IndustrialSearchModel;
    import IndustrialSegmentMaster = GCPL.Model.InsertIndustrialModel;
    import EditIndustrial = GCPL.Model.EditIndustriallistModel;

    interface IIndustrialSegmentMasterController {
        IndustrialSegmentList: Array<Model.IndustrialListModel>;
        SearchIndustrialList(): void;
        InsertIndustrial: IndustrialSegmentMaster;
        Submit(): void;
        Edit(data: any): void;
        EditIndustrialSegment: Array<Model.EditIndustriallistModel>;
    }

    class IndustrialSegmentMasterController implements IIndustrialSegmentMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        IndustrialSegmentList = null;
        IndustrialSearch = null;
        InsertIndustrial = null;
        EditIndustrialSegment = null;

        private Cookie: any = null;
        private Listservice: Service.IIndustrialSegmentListService;
        private InsertService: Service.IInsertIndustrialService;
        private EditService: Service.IIndustrialEditService;

        static $inject = ["IndustrialSegmentListService", "InsertIndustrialService", "IndustrialEditService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_Listservice: Service.IndustrialSegmentListService, _InsertService: Service.IInsertIndustrialService, _EditService: Service.IIndustrialEditService, private _cookieStore: any) {

            this.Listservice = _Listservice;
            this.IndustrialSearch = Array<GCPL.Model.IndustrialSearchModel>();
            this.InsertService = _InsertService;
            this.InsertIndustrial = new IndustrialSegmentMaster();
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

        SearchIndustrialList(): void {
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
            
            this.IndustrialSegmentList = this.Listservice.Find(this.IndustrialSearch).then((response => {
                this.IndustrialSegmentList = this.Listservice.GetIndustrialList(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.IndustrialSegmentList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.IndustrialSegmentList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.IndustrialSegmentList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.IndustrialSegmentList.slice(0, that.numRecords);
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
            
            if (this.InsertIndustrial.IndustrialSegment == undefined || this.InsertIndustrial.IndustrialSegment == null || this.InsertIndustrial.IndustrialSegment == "") {
                this.HideShow();
                this.popupMessage("Please Enter IndustrialSegment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }
            else if (this.InsertIndustrial.SAPID == undefined || this.InsertIndustrial.SAPID == null || this.InsertIndustrial.SAPID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {

                
                this.InsertService.PostIndustrial(this.InsertIndustrial).then((response => {

                    console.log(this.InsertIndustrial);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Industrial Segment saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertIndustrial = null;
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
            this.InsertIndustrial.IndustrialSegment = "";
            this.InsertIndustrial.SAPID = "";
            this.InsertIndustrial.Status = "";
        }

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertIndustrial = this.EditService.GetEdit(response.data.Result);
                

                //$('#txtStatus').val(this.InsertIndustrial.Status);

                if (this.InsertIndustrial.Status == "True") {
                    this.InsertIndustrial.Status = "1";
                }
                else {
                    this.InsertIndustrial.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Clear() {

            this.IndustrialSearch.SearchText = "";
            this.IndustrialSearch.Status = "";


            //this.CategorySearch = "";
            $("#txtIndustrial").val("");
            $("#txtStatus").val("");
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.IndustrialSegmentList.slice(begin, end);
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
            this.shownItems = this.IndustrialSegmentList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Close(): void {

            location.href = "#!/IndustrialSegmentMaster";

        }
        ErrorClose(): void {
            location.href = "#!/IndustrialSegmentMaster";

        }

    }
    class IndustrialSegmentMasterComponentController implements ng.IComponentOptions {
        static Name: string = "industrialsegmentmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = IndustrialSegmentMasterController;
            this.templateUrl = "/Scripts/App/MasterData/IndustrialSegmentMaster/Template/_IndustrialSegmentMaster.html";
        }
    }
    app.AddComponent(IndustrialSegmentMasterComponentController.Name, new IndustrialSegmentMasterComponentController());


}


3