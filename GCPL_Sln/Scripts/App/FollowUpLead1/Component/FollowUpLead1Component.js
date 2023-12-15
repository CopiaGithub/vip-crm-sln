var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var FollowUpLead1Controller = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function FollowUpLead1Controller() {
                }
                FollowUpLead1Controller.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                FollowUpLead1Controller.prototype.Init = function () {
                };
                FollowUpLead1Controller.$inject = [];
                return FollowUpLead1Controller;
            }());
            var FollowUpLead1ComponentController = /** @class */ (function () {
                function FollowUpLead1ComponentController() {
                    this.controller = FollowUpLead1Controller;
                    this.templateUrl = "/Scripts/App/FollowUpLead1/Template/FollowUpLead1.html";
                }
                FollowUpLead1ComponentController.Name = "followuplead1component";
                return FollowUpLead1ComponentController;
            }());
            app.AddComponent(FollowUpLead1ComponentController.Name, new FollowUpLead1ComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=FollowUpLead1Component.js.map