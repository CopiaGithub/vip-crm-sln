namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    interface IOverallDashboardController {
    }
    class OverallDashboardController implements IOverallDashboardController {
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
    class OverallDashboardComponentController implements ng.IComponentOptions {
        static Name: string = "overalldashboardcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = OverallDashboardController;
            this.templateUrl = "/Scripts/App/OverallDashboard/Template/OverallDashboard.html";
        }
    }
    app.AddComponent(OverallDashboardComponentController.Name, new OverallDashboardComponentController());

}