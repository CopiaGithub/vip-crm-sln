namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    interface IShowDuplicateLeadsController {
    }
    class ShowDuplicateLeadsController implements IShowDuplicateLeadsController {
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
    class ShowDuplicateLeadsComponentController implements ng.IComponentOptions {
        static Name: string = "showduplicateleadscomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ShowDuplicateLeadsController;
            this.templateUrl = "/Scripts/App/ShowDuplicateLeads/Template/ShowDuplicateLeads.html";
        }
    }
    app.AddComponent(ShowDuplicateLeadsComponentController.Name, new ShowDuplicateLeadsComponentController());

}