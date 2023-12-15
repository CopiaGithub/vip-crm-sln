/// <reference path="../../../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var MenutoggleComponentController = /** @class */ (function () {
                function MenutoggleComponentController() {
                }
                MenutoggleComponentController.prototype.$onInit = function () {
                    this.Init();
                };
                MenutoggleComponentController.prototype.Init = function () {
                };
                MenutoggleComponentController.prototype.click = function () {
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
                };
                //UserName = null;
                //inject inbuild service and other services
                MenutoggleComponentController.$inject = [];
                return MenutoggleComponentController;
            }());
            var MenutoggleComponent = /** @class */ (function () {
                function MenutoggleComponent() {
                    this.controller = MenutoggleComponentController;
                    this.templateUrl = "/Scripts/App/Home/Template/Menutoggle.html";
                }
                MenutoggleComponent.Name = "menutoggle";
                return MenutoggleComponent;
            }());
            app.AddComponent(MenutoggleComponent.Name, new MenutoggleComponent());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=MenutoggleComponent.js.map