///// <reference path="../../../../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///// <reference path="../../../../typings/jqueryui/jqueryui.d.ts" />
declare var $: JQueryStatic;
namespace GCPL.Component.Home {
    import app = GCPL.app;

    interface IBootstrapModalBoxComponentController {
        Close(): void;
    }

    class BootstrapModalBoxComponentController implements IBootstrapModalBoxComponentController {
        static $inject = ["$window"];
        onPopupClose: (item: any) => void;  //imp...
        modalBoxId: string;

        constructor(private _window) {
            //overlay...
            $('#myModalBox').addClass('in'); //old way..
            $('#myModalBox').show();
        }

        $onInit() {

        }
        Close(): void {
            //send to consumer comp....              
            this.onPopupClose({
                item: true
            });
            $('#myModalBox').removeClass('in'); //old way..
            $('#myModalBox').hide();
            $('.modal-backdrop').remove();
        }
    }


    class BootstrapModalBoxComponent implements ng.IComponentOptions {
        static Name: string = "errormessage"
        public bindings: any;
        public controller: any;
        public templateUrl: string;
        constructor() {
            this.controller = BootstrapModalBoxComponentController;
            this.bindings = {
                onPopupClose: '&',
                modalBoxId: '@'
                //data => > one way
                //data => = two way
            };
            this.templateUrl = "/Scripts/App/MyWidget/Template/_ErrorMessage.html";
        }
    }
    app.AddComponent(BootstrapModalBoxComponent.Name, new BootstrapModalBoxComponent());
}

