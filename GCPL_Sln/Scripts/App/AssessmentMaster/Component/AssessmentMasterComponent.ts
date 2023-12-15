namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    interface IAssessmentMasterController {
    }
    class AssessmentMasterController implements IAssessmentMasterController {
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
    class AssessmentMasterComponentController implements ng.IComponentOptions {
        static Name: string = "assessmentmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = AssessmentMasterController;
            this.templateUrl = "/Scripts/App/AssessmentMaster/Template/AssessmentMaster.html";
        }
    }
    app.AddComponent(AssessmentMasterComponentController.Name, new AssessmentMasterComponentController());

}