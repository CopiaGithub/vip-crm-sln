var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var FaultyLeadManagementController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function FaultyLeadManagementController() {
                }
                FaultyLeadManagementController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                FaultyLeadManagementController.prototype.Init = function () {
                };
                FaultyLeadManagementController.$inject = [];
                return FaultyLeadManagementController;
            }());
            var FaultyLeadManagementComponentController = /** @class */ (function () {
                function FaultyLeadManagementComponentController() {
                    this.controller = FaultyLeadManagementController;
                    this.templateUrl = "/Scripts/App/FaultyLeadManagement/Template/_FaultyLeadManagement.html";
                }
                FaultyLeadManagementComponentController.Name = "faultyleadmanagementcomponent";
                return FaultyLeadManagementComponentController;
            }());
            app.AddComponent(FaultyLeadManagementComponentController.Name, new FaultyLeadManagementComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
3;
//# sourceMappingURL=FaultyLeadManagementComponent.js.map