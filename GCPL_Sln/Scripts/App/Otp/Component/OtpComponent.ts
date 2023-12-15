namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    interface IOtpController {
    }
    class OtpController implements IOtpController {
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
    class OtpComponentController implements ng.IComponentOptions {
        static Name: string = "otpcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = OtpController;
            this.templateUrl = "/Scripts/App/Otp/Template/Otp.html";
        }
    }
    app.AddComponent(OtpComponentController.Name, new OtpComponentController());

}