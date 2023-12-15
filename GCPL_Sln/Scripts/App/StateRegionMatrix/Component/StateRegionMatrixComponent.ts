namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface IStateRegionMatrixController {

    }

    class StateRegionMatrixController implements IStateRegionMatrixController {


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
    class StateRegionMatrixComponentController implements ng.IComponentOptions {
        static Name: string = "stateregionmatrixcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = StateRegionMatrixController;
            this.templateUrl = "/Scripts/App/StateRegionMatrix/Template/_StateRegionMatrix.html";
        }
    }
    app.AddComponent(StateRegionMatrixComponentController.Name, new StateRegionMatrixComponentController());


}
