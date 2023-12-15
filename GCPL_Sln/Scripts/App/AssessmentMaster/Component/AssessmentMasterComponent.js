var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var AssessmentMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function AssessmentMasterController() {
                }
                AssessmentMasterController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                AssessmentMasterController.prototype.Init = function () {
                };
                AssessmentMasterController.$inject = [];
                return AssessmentMasterController;
            }());
            var AssessmentMasterComponentController = /** @class */ (function () {
                function AssessmentMasterComponentController() {
                    this.controller = AssessmentMasterController;
                    this.templateUrl = "/Scripts/App/AssessmentMaster/Template/AssessmentMaster.html";
                }
                AssessmentMasterComponentController.Name = "assessmentmastercomponent";
                return AssessmentMasterComponentController;
            }());
            app.AddComponent(AssessmentMasterComponentController.Name, new AssessmentMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AssessmentMasterComponent.js.map