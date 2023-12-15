var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var RoleAccessManagementController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function RoleAccessManagementController() {
                }
                RoleAccessManagementController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                RoleAccessManagementController.prototype.Init = function () {
                };
                RoleAccessManagementController.$inject = [];
                return RoleAccessManagementController;
            }());
            var RoleAccessManagementComponentController = /** @class */ (function () {
                function RoleAccessManagementComponentController() {
                    this.controller = RoleAccessManagementController;
                    this.templateUrl = "/Scripts/App/RoleAccessManagement/Template/_RoleAccessManagement.html";
                }
                RoleAccessManagementComponentController.Name = "roleaccessmanagementcomponent";
                return RoleAccessManagementComponentController;
            }());
            app.AddComponent(RoleAccessManagementComponentController.Name, new RoleAccessManagementComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RoleAccessManagementComponent.js.map