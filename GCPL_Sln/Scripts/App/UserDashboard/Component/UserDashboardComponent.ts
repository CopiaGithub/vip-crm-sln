namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    interface IUserDashboardController {
    }
    class UserDashboardController implements IUserDashboardController {
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
    class UserDashboardComponentController implements ng.IComponentOptions {
        static Name: string = "userdashboardcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = UserDashboardController;
            this.templateUrl = "/Scripts/App/UserDashboard/Template/UserDashboard.html";
        }
    }
    app.AddComponent(UserDashboardComponentController.Name, new UserDashboardComponentController());

}