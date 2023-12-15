/// <reference path="../../../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var PopularProductComponentController = /** @class */ (function () {
                function PopularProductComponentController(service) {
                    this.PopularProduct = null;
                    this.popularProductService = service;
                }
                PopularProductComponentController.prototype.$onInit = function () {
                    this.Init();
                };
                PopularProductComponentController.prototype.Init = function () {
                    this.PopularProduct = this.popularProductService.Find();
                };
                PopularProductComponentController.$inject = ["PopularProductService"];
                return PopularProductComponentController;
            }());
            var PopularProductComponent = /** @class */ (function () {
                function PopularProductComponent() {
                    this.controller = PopularProductComponentController;
                    this.templateUrl = "/Scripts/App/Home/Template/_popularProduct.html";
                }
                PopularProductComponent.Name = "popularProductComponent";
                return PopularProductComponent;
            }());
            //inject component
            app.AddComponent(PopularProductComponent.Name, new PopularProductComponent());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=PopularProductComponent.js.map