namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    interface IRatioController {
    }
    class RatioController implements IRatioController {
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
    class RatioComponentController implements ng.IComponentOptions {
        static Name: string = "ratiocomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = RatioController;
            this.templateUrl = "/Scripts/App/Ratio/Template/Ratio.html";
        }
    }
    app.AddComponent(RatioComponentController.Name, new RatioComponentController());

}