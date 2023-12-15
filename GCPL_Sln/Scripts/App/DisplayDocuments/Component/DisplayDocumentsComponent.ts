namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;


    interface IDisplayDocumentsController {

    }

    class DisplayDocumentsController implements IDisplayDocumentsController {


        static $inject = [];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor() {

        }



        $onInit() {
            this.Init();
            $(".date-pick").datepicker();
            $("#display-container").hide();

        }

        //Page Load Define Values//
        Init(): void {
            var dImageContainer = document.getElementsByClassName("documents-img-container");

            for (var i = 0; i < dImageContainer.length; i++) {
                dImageContainer[i].addEventListener("click", function () {
                    $("#display-container").slideDown();
                })
            }

            $("#close").click(function () {
                $("#display-container").hide();
            })

        }



    }
    class DisplayDocumentsComponentController implements ng.IComponentOptions {
        static Name: string = "displaydocumentscomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = DisplayDocumentsController;
            this.templateUrl = "/Scripts/App/DisplayDocuments/Template/DisplayDocuments.html";


        }
    }
    app.AddComponent(DisplayDocumentsComponentController.Name, new DisplayDocumentsComponentController());


}


