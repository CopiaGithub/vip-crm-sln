var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var RegistrationContactUpdateController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function RegistrationContactUpdateController() {
                }
                RegistrationContactUpdateController.prototype.$onInit = function () {
                    this.Init();
                    var splTab = document.getElementsByClassName("spl-tab");
                    for (var i = 0; i < splTab.length; i++) {
                        splTab[i].addEventListener("click", function () {
                            this.classList.toggle("toggle-spl-minus");
                        });
                    }
                };
                //Page Load Define Values//
                RegistrationContactUpdateController.prototype.Init = function () {
                };
                RegistrationContactUpdateController.$inject = [];
                return RegistrationContactUpdateController;
            }());
            var RegistrationContactUpdateComponentController = /** @class */ (function () {
                function RegistrationContactUpdateComponentController() {
                    this.controller = RegistrationContactUpdateController;
                    this.templateUrl = "/Scripts/App/RegistrationContactUpdate/Template/RegistrationContactUpdate.html";
                }
                RegistrationContactUpdateComponentController.Name = "registrationcontactupdatecomponent";
                return RegistrationContactUpdateComponentController;
            }());
            app.AddComponent(RegistrationContactUpdateComponentController.Name, new RegistrationContactUpdateComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RegistrationContactUpdateComponent.js.map