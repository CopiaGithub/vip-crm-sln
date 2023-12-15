/// <reference path="../../../typings/angularjs/angular.d.ts" />

namespace GCPL.Component.Home {
    import app = GCPL.app;
    //import Service = GCPL.Service;

    interface IMenutoggleComponentController {


    }

    class MenutoggleComponentController implements IMenutoggleComponentController {
        //UserName = null;
       
        //inject inbuild service and other services
        static $inject = [];

        constructor() {


        }

        $onInit() {
            this.Init();
        }
        Init(): void {
           
          
        }


        click(): void {
      
         //   if ($("body").hasClass("sidebar-left-opened") == true) {
              //  alert('true');
               // $('.toggle-left').click(function () {
                    //Add class to body
                    //   $("body").removeClass("sidebar-left-opened");
                    $("body").toggleClass("sidebar-left-mini");
                
                //});
            //}
            //else {
            //   // alert('false');
            //    $('.toggle-left').click(function () {
                  
            //        //Add class to body
            //        $("body").removeClass("sidebar-left-mini");
            //        $("body").addClass("sidebar-left-opened");
                  
            //    });
            //}



            //if ($('#left').length) {
            //    $leftToggle.on(Metis.buttonPressedEvent, function (e) {

            //        if ($(window).width() < 768) {
            //            $body.toggleClass('sidebar-left-opened');
            //        } else {
            //            switch (true) {
            //                case $body.hasClass("sidebar-left-hidden"):
            //                    $body.removeClass("sidebar-left-hidden sidebar-left-mini");
            //                    break;
            //                case $body.hasClass("sidebar-left-mini"):
            //                    $body.removeClass("sidebar-left-mini").addClass("sidebar-left-hidden");
            //                    break;
            //                default:
            //                    $body.addClass("sidebar-left-mini");
            //            }

            //            e.preventDefault();
            //        }
            //    });
            //} else {
            //    $leftToggle.addClass('hidden');
            //}
         }

    }


    class MenutoggleComponent implements ng.IComponentOptions {
        static Name: string = "menutoggle"
        public bindings: any;
        public controller: any;
        // public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = MenutoggleComponentController;
            this.templateUrl = "/Scripts/App/Home/Template/Menutoggle.html";
        }
    }

    app.AddComponent(MenutoggleComponent.Name, new MenutoggleComponent());
}
