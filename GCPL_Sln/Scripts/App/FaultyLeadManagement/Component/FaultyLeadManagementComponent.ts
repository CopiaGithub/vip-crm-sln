namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface IFaultyLeadManagementController {

    }

    class FaultyLeadManagementController implements IFaultyLeadManagementController {


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
    class FaultyLeadManagementComponentController implements ng.IComponentOptions {
        static Name: string = "faultyleadmanagementcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = FaultyLeadManagementController;
            this.templateUrl = "/Scripts/App/FaultyLeadManagement/Template/_FaultyLeadManagement.html";
        }
    }
    app.AddComponent(FaultyLeadManagementComponentController.Name, new FaultyLeadManagementComponentController());


}


3