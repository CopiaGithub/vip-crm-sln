var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var RatioController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function RatioController() {
                }
                RatioController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                RatioController.prototype.Init = function () {
                };
                RatioController.$inject = [];
                return RatioController;
            }());
            var RatioComponentController = /** @class */ (function () {
                function RatioComponentController() {
                    this.controller = RatioController;
                    this.templateUrl = "/Scripts/App/Ratio/Template/Ratio.html";
                }
                RatioComponentController.Name = "ratiocomponent";
                return RatioComponentController;
            }());
            app.AddComponent(RatioComponentController.Name, new RatioComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RatioComponent.js.map