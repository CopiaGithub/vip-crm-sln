namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface IFaultyLeadController {

    }

    class FaultyLeadController implements IFaultyLeadController {
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
            this.Init();

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
    class FaultyLeadComponentController implements ng.IComponentOptions {
        static Name: string = "faultyleadcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = FaultyLeadController;
            this.templateUrl = "/Scripts/App/FaultyLead/Template/_FaultyLead.html";
        }
    }
    app.AddComponent(FaultyLeadComponentController.Name, new FaultyLeadComponentController());


}


