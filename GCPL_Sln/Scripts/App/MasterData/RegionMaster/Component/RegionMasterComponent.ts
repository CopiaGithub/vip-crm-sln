namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface IRegionMasterController {

    }

    class RegionMasterController implements IRegionMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: string = "10";
        alert = null;

        static $inject = [];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor() {

        }



        $onInit() {
            let that = this;
            $('#search-btn-loader').hide();


        }

        //Page Load Define Values//
        Init(): void {


        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            //this.shownItems = this.ContactPersonList.slice(begin, end);
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
            //this.shownItems = this.ContactPersonList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };


    }
    class RegionMasterComponentController implements ng.IComponentOptions {
        static Name: string = "regionmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = RegionMasterController;
            this.templateUrl = "/Scripts/App/MasterData/RegionMaster/Template/_RegionMaster.html";
        }
    }
    app.AddComponent(RegionMasterComponentController.Name, new RegionMasterComponentController());


}


3