var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var UserDashboardController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function UserDashboardController() {
                }
                UserDashboardController.prototype.$onInit = function () {
                    this.Init();
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                };
                //Page Load Define Values//
                UserDashboardController.prototype.Init = function () {
                };
                UserDashboardController.$inject = [];
                return UserDashboardController;
            }());
            var UserDashboardComponentController = /** @class */ (function () {
                function UserDashboardComponentController() {
                    this.controller = UserDashboardController;
                    this.templateUrl = "/Scripts/App/UserDashboard/Template/UserDashboard.html";
                }
                UserDashboardComponentController.Name = "userdashboardcomponent";
                return UserDashboardComponentController;
            }());
            app.AddComponent(UserDashboardComponentController.Name, new UserDashboardComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UserDashboardComponent.js.map