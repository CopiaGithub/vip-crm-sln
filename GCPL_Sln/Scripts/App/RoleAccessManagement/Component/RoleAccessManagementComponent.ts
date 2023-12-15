namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface IRoleAccessManagementController {

    }

    class RoleAccessManagementController implements IRoleAccessManagementController {


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
    class RoleAccessManagementComponentController implements ng.IComponentOptions {
        static Name: string = "roleaccessmanagementcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = RoleAccessManagementController;
            this.templateUrl = "/Scripts/App/RoleAccessManagement/Template/_RoleAccessManagement.html";
        }
    }
    app.AddComponent(RoleAccessManagementComponentController.Name, new RoleAccessManagementComponentController());


}
