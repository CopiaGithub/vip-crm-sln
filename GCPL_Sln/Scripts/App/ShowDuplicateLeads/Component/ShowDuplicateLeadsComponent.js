var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ShowDuplicateLeadsController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ShowDuplicateLeadsController() {
                }
                ShowDuplicateLeadsController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                ShowDuplicateLeadsController.prototype.Init = function () {
                };
                ShowDuplicateLeadsController.$inject = [];
                return ShowDuplicateLeadsController;
            }());
            var ShowDuplicateLeadsComponentController = /** @class */ (function () {
                function ShowDuplicateLeadsComponentController() {
                    this.controller = ShowDuplicateLeadsController;
                    this.templateUrl = "/Scripts/App/ShowDuplicateLeads/Template/ShowDuplicateLeads.html";
                }
                ShowDuplicateLeadsComponentController.Name = "showduplicateleadscomponent";
                return ShowDuplicateLeadsComponentController;
            }());
            app.AddComponent(ShowDuplicateLeadsComponentController.Name, new ShowDuplicateLeadsComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ShowDuplicateLeadsComponent.js.map