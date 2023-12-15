var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var OverallDashboardController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function OverallDashboardController() {
                }
                OverallDashboardController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                OverallDashboardController.prototype.Init = function () {
                };
                OverallDashboardController.$inject = [];
                return OverallDashboardController;
            }());
            var OverallDashboardComponentController = /** @class */ (function () {
                function OverallDashboardComponentController() {
                    this.controller = OverallDashboardController;
                    this.templateUrl = "/Scripts/App/OverallDashboard/Template/OverallDashboard.html";
                }
                OverallDashboardComponentController.Name = "overalldashboardcomponent";
                return OverallDashboardComponentController;
            }());
            app.AddComponent(OverallDashboardComponentController.Name, new OverallDashboardComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=OverallDashboardComponent.js.map