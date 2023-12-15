namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface IFollowUpLead1Controller {

    }

    class FollowUpLead1Controller implements IFollowUpLead1Controller {


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
    class FollowUpLead1ComponentController implements ng.IComponentOptions {
        static Name: string = "followuplead1component"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = FollowUpLead1Controller;
            this.templateUrl = "/Scripts/App/FollowUpLead1/Template/FollowUpLead1.html";
        }
    }
    app.AddComponent(FollowUpLead1ComponentController.Name, new FollowUpLead1ComponentController());


}




