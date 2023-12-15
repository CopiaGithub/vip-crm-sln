namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface IFollowUpOppController {

    }

    class FollowUpOppController implements IFollowUpOppController {


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
    class FollowUpOppComponentController implements ng.IComponentOptions {
        static Name: string = "followupoppcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = FollowUpOppController;
            this.templateUrl = "/Scripts/App/FollowUpOpp/Template/FollowUpOpp.html";
        }
    }
    app.AddComponent(FollowUpOppComponentController.Name, new FollowUpOppComponentController());


}




