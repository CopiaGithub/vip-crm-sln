namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    interface IRegistrationContactUpdateController {
    }
    class RegistrationContactUpdateController implements IRegistrationContactUpdateController {
        static $inject = [];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor() {
        }

        $onInit() {
            this.Init();
            var splTab = document.getElementsByClassName("spl-tab");

            for (var i = 0; i < splTab.length; i++) {
                splTab[i].addEventListener("click", function () {
                    this.classList.toggle("toggle-spl-minus");
                })
            }
        }

        //Page Load Define Values//
        Init(): void {


        }

    }
    class RegistrationContactUpdateComponentController implements ng.IComponentOptions {
        static Name: string = "registrationcontactupdatecomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = RegistrationContactUpdateController;
            this.templateUrl = "/Scripts/App/RegistrationContactUpdate/Template/RegistrationContactUpdate.html";
        }
    }
    app.AddComponent(RegistrationContactUpdateComponentController.Name, new RegistrationContactUpdateComponentController());

}