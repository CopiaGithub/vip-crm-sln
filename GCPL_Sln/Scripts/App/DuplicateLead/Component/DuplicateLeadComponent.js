var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var DuplicateLeadController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DuplicateLeadController() {
                }
                DuplicateLeadController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                DuplicateLeadController.prototype.Init = function () {
                };
                DuplicateLeadController.$inject = [];
                return DuplicateLeadController;
            }());
            var DuplicateLeadComponentController = /** @class */ (function () {
                function DuplicateLeadComponentController() {
                    this.controller = DuplicateLeadController;
                    this.templateUrl = "/Scripts/App/DuplicateLead/Template/DuplicateLead.html";
                }
                DuplicateLeadComponentController.Name = "duplicateleadcomponent";
                return DuplicateLeadComponentController;
            }());
            app.AddComponent(DuplicateLeadComponentController.Name, new DuplicateLeadComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DuplicateLeadComponent.js.map