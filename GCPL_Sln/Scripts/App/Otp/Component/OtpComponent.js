var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var OtpController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function OtpController() {
                }
                OtpController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                OtpController.prototype.Init = function () {
                };
                OtpController.$inject = [];
                return OtpController;
            }());
            var OtpComponentController = /** @class */ (function () {
                function OtpComponentController() {
                    this.controller = OtpController;
                    this.templateUrl = "/Scripts/App/Otp/Template/Otp.html";
                }
                OtpComponentController.Name = "otpcomponent";
                return OtpComponentController;
            }());
            app.AddComponent(OtpComponentController.Name, new OtpComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=OtpComponent.js.map