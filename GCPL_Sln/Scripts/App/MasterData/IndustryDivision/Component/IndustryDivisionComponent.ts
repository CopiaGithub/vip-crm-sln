namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Industrylist = GCPL.Model.IndustryDivlistModel;
    import Search = GCPL.Model.IndustrySearchModel;
    import IndustryMaster = GCPL.Model.InsertIndustryModel;
    import EditIndus = GCPL.Model.EditIndustrylistModel;

    interface IIndustryDivisionController {
        IndustryDivisionList: Array<Model.IndustryDivlistModel>;
        SearchIndustryList(): void;
        InsertIndustry: IndustryMaster;
        Submit(): void;
        Edit(data: any): void;
        EditIndustry: Array<Model.EditIndustrylistModel>;
    }

    class IndustryDivisionController implements IIndustryDivisionController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        IndustryDivisionList = null;
        IndustrySearch = null;
        InsertIndustry = null;
        EditIndustry = null;
        private Cookie: any = null;


        private Listservice: Service.IIndustryDivisionListService;
        private InsertService: Service.IInsertIndustryService;
        private EditService: Service.IIndustryEditService;

        static $inject = ["IndustryDivisionListService", "InsertIndustryService", "IndustryEditService", "$cookieStore"];


        constructor(_Listservice: Service.IIndustryDivisionListService, _InsertService: Service.IInsertIndustryService, _EditService: Service.IIndustryEditService, private _cookieStore: any) {

            this.Listservice = _Listservice;
            this.IndustrySearch = Array<GCPL.Model.IndustrySearchModel>();
            this.InsertService = _InsertService;
            this.InsertIndustry = new IndustryMaster();
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

        SearchIndustryList(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }
        Submit(): void {
            
            if (this.InsertIndustry.IndustryDivision == undefined || this.InsertIndustry.IndustryDivision == null || this.InsertIndustry.IndustryDivision == "") {
                this.HideShow();
                this.popupMessage("Please Enter IndustryDivision", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");

            }

            else if (this.InsertIndustry.SAPID == undefined || this.InsertIndustry.SAPID == null || this.InsertIndustry.SAPID == "") {
                this.HideShow();
                this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
            }

            else {

                
                this.InsertService.PostIndustry(this.InsertIndustry).then((response => {

                    console.log(this.InsertIndustry);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("IndustryDivision saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#myModalAddNew').click();


                        this.InsertIndustry = null;
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                    }
                    else {
                        //this.IsDisplayModalPopupError = true;
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
            
            this.EditService.Find(data).then((response => {
                this.InsertIndustry = this.EditService.GetEdit(response.data.Result);
                

                //$('#txtStatus').val(this.InsertIndustry.Status);

                if (this.InsertIndustry.Status == "True") {
                    this.InsertIndustry.Status = "1";
                }
                else {
                    this.InsertIndustry.Status = "0";
                }

                $("myModalAddNew").show();


            }));
        }

        Add() {

            //this.InsertCategory.CategoryID = "";
            this.InsertIndustry.IndustryDivision = "";
            this.InsertIndustry.SAPID = "";
            this.InsertIndustry.Status = "";


        }

        Clear() {

            this.IndustrySearch.SearchText = "";
            this.IndustrySearch.Status = "";


            //this.CategorySearch = "";
            $("#txtIndustry").val("");
            $("#txtStatus").val("");
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            
            this.IndustryDivisionList = this.Listservice.Find(this.IndustrySearch).then((response => {
                this.IndustryDivisionList = this.Listservice.GetIndustryDivisionList(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.IndustryDivisionList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.IndustryDivisionList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.IndustryDivisionList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.IndustryDivisionList.slice(0, that.numRecords);
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
            this.shownItems = this.IndustryDivisionList.slice(begin, end);
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
            this.shownItems = this.IndustryDivisionList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Close(): void {

            location.href = "#!/IndustryDivision";

        }
        ErrorClose(): void {
            location.href = "#!/IndustryDivision";

        }



    }
    class IndustryDivisionComponentController implements ng.IComponentOptions {
        static Name: string = "industrydivisioncomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = IndustryDivisionController;
            this.templateUrl = "/Scripts/App/MasterData/IndustryDivision/Template/_IndustryDivision.html";
        }
    }
    app.AddComponent(IndustryDivisionComponentController.Name, new IndustryDivisionComponentController());


}

