namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import UploadCampaign = GCPL.Model.InsertUpCampModel;
    import UploadCampaignList = GCPL.Model.UpCampistModel;
    import Search = GCPL.Model.UpCampSearchModel;

    interface IUploadCampaignDataController {
        InsertUpCamp: UploadCampaign;
        //Submit(): void;
        UpCampList: Array<Model.UpCampistModel>;
        SearchUpCampList(): void;
       
    }

    class UploadCampaignDataController implements IUploadCampaignDataController {

        file: any = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        InsertUpCamp = null;
        UpCampList = null;
        UpCampSearch = null;
       

        private Cookie: any = null;
        private InsertService: Service.IInsertUploadCampaignService;
        private ListService: Service.IUploadCampService;
      

        static $inject = ["InsertUploadCampaignService", "UploadCampService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_InsertService: Service.IInsertUploadCampaignService, _ListService: Service.IUploadCampService, private _cookieStore: any) {

            this.InsertService = _InsertService;
            this.ListService = _ListService;
            this.UpCampSearch = Array<GCPL.Model.UpCampSearchModel>();       
            this.Cookie = _cookieStore;
        }



        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();
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


        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

           
        }
        //Submit(): void {
        //    debugger;
        //    if (this.InsertVLE.VLECode == undefined || this.InsertVLE.VLECode == null || this.InsertVLE.VLECode == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter VLE Code";

        //    }
        //    else if (this.InsertVLE.VLEName == undefined || this.InsertVLE.VLEName == null || this.InsertVLE.VLEName == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter VLE Name";

        //    }

        //    else if (this.InsertVLE.City == undefined || this.InsertVLE.City == null || this.InsertVLE.City == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter City";

        //    }
        //    else if (this.InsertVLE.Address == undefined || this.InsertVLE.Address == null || this.InsertVLE.Address == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter Address";

        //    }
        //    //else if (this.InsertVLE.Password == undefined || this.InsertVLE.Password == null || this.InsertVLE.Password == "") {
        //    //    $("#errorclose").show();
        //    //    $("#close").hide();
        //    //    this.alert = "Please Enter Password";

        //    //}
        //    else if (this.InsertVLE.CountryID == undefined || this.InsertVLE.CountryID == null || this.InsertVLE.CountryID == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter Country";

        //    }
        //    else if (this.InsertVLE.StateID == undefined || this.InsertVLE.StateID == null || this.InsertVLE.StateID == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter State";

        //    }
        //    else if (this.InsertVLE.DistrictID == undefined || this.InsertVLE.DistrictID == null || this.InsertVLE.DistrictID == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter District";

        //    }
        //    else if (this.InsertVLE.RegionId == undefined || this.InsertVLE.RegionId == null || this.InsertVLE.RegionId == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter Region";

        //    }
        //    else if (this.InsertVLE.BlockID == undefined || this.InsertVLE.BlockID == null || this.InsertVLE.BlockID == "") {
        //        $("#errorclose").show();
        //        $("#close").hide();
        //        this.alert = "Please Enter Block";

        //    }
        //    else if (this.IsValidPinCode(this.InsertVLE.Postalcode).Result == "False") {
        //        this.ShowHidePopUp(this.IsValidPinCode(this.InsertVLE.Postalcode).Message);
        //    }
        //    else if (this.IsValidMobile(this.InsertVLE.MobileNo).Result == "False") {
        //        this.ShowHidePopUp(this.IsValidMobile(this.InsertVLE.MobileNo).Message);
        //    }
        //    else if (this.IsValidPhone(this.InsertVLE.PhoneNo).Result == "False") {
        //        this.ShowHidePopUp(this.IsValidPhone(this.InsertVLE.PhoneNo).Message);
        //    }

        //    else if (this.IsValidEmail(this.InsertVLE.Email).Result == "False") {
        //        this.ShowHidePopUp(this.IsValidEmail(this.InsertVLE.Email).Message);
        //    }

        //    else {

        //        debugger;
        //        this.InsertService.PostVLE(this.InsertVLE).then((response => {

        //            console.log(this.InsertVLE);
        //            if (response.data.Result != null) {

        //                this.alert = " VLE Registration saved Successfully ";
        //                $("#errorclose").hide();
        //                $("#close").show();

        //                $('#myModalAddNew').click();

        //                this.InsertVLE = null;

        //            }
        //            else {
        //                //this.IsDisplayModalPopupError = true;
        //                this.alert = 'Oops Some Error Occured';
        //                $("#errorclose").hide();
        //                $("#close").show();
        //            }

        //            this.numRecords = this.NoOfRds;
        //            this.FillGrid(this.numRecords);


        //        }));

        //    }

        //}

        SearchUpCampList(): void {
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
            debugger;
            this.UpCampList = this.ListService.Find(this.UpCampSearch).then((response => {
                this.UpCampList = this.ListService.GetUpCampList(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.UpCampList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.UpCampList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.UpCampList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.UpCampList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        Clear() {

            this.UpCampSearch.SearchText = "";           
            $("#txtbysearchCampN").val("");          
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.UpCampList.slice(begin, end);
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
            this.shownItems = this.UpCampList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Close(): void {

            location.href = "#!/UploadCampaignData";

        }

        ErrorClose(): void {
            location.href = "#!/UploadCampaignData";

        }

       
    }
    class UploadCampaignDataComponentController implements ng.IComponentOptions {
        static Name: string = "uploadcampaigndatacomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = UploadCampaignDataController;
            this.templateUrl = "/Scripts/App/UploadCampaignData/Template/_UploadCampaignData.html";
        }
    }
    app.AddComponent(UploadCampaignDataComponentController.Name, new UploadCampaignDataComponentController());


}
