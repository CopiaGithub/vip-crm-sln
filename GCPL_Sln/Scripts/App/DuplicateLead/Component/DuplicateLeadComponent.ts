namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    interface IDuplicateLeadController {
    }
    class DuplicateLeadController implements IDuplicateLeadController {
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

    }
    class DuplicateLeadComponentController implements ng.IComponentOptions {
        static Name: string = "duplicateleadcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = DuplicateLeadController;
            this.templateUrl = "/Scripts/App/DuplicateLead/Template/DuplicateLead.html";
        }
    }
    app.AddComponent(DuplicateLeadComponentController.Name, new DuplicateLeadComponentController());

}