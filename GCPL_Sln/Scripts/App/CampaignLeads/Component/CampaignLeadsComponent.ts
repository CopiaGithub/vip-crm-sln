namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface ICampaignLeadsController {

    }

    class CampaignLeadsController implements ICampaignLeadsController {


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
    class CampaignLeadsComponentController implements ng.IComponentOptions {
        static Name: string = "campaignleadscomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CampaignLeadsController;
            this.templateUrl = "/Scripts/App/CampaignLeads/Template/_CampaignLeads.html";
        }
    }
    app.AddComponent(CampaignLeadsComponentController.Name, new CampaignLeadsComponentController());


}
