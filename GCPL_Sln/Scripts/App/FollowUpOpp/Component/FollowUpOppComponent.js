var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var FollowUpOppController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function FollowUpOppController() {
                }
                FollowUpOppController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                FollowUpOppController.prototype.Init = function () {
                };
                FollowUpOppController.$inject = [];
                return FollowUpOppController;
            }());
            var FollowUpOppComponentController = /** @class */ (function () {
                function FollowUpOppComponentController() {
                    this.controller = FollowUpOppController;
                    this.templateUrl = "/Scripts/App/FollowUpOpp/Template/FollowUpOpp.html";
                }
                FollowUpOppComponentController.Name = "followupoppcomponent";
                return FollowUpOppComponentController;
            }());
            app.AddComponent(FollowUpOppComponentController.Name, new FollowUpOppComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=FollowUpOppComponent.js.map