var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var StateRegionMatrixController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function StateRegionMatrixController() {
                }
                StateRegionMatrixController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                StateRegionMatrixController.prototype.Init = function () {
                };
                StateRegionMatrixController.$inject = [];
                return StateRegionMatrixController;
            }());
            var StateRegionMatrixComponentController = /** @class */ (function () {
                function StateRegionMatrixComponentController() {
                    this.controller = StateRegionMatrixController;
                    this.templateUrl = "/Scripts/App/StateRegionMatrix/Template/_StateRegionMatrix.html";
                }
                StateRegionMatrixComponentController.Name = "stateregionmatrixcomponent";
                return StateRegionMatrixComponentController;
            }());
            app.AddComponent(StateRegionMatrixComponentController.Name, new StateRegionMatrixComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=StateRegionMatrixComponent.js.map