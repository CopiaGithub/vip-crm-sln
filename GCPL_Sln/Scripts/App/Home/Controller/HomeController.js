/// <reference path="../../../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var Controller;
    (function (Controller) {
        var app = GCPL.app;
        var HomeController = /** @class */ (function () {
            function HomeController(_cookieService) {
                this._cookieService = _cookieService;
                console.log('Home controller initialized...');
                if (_cookieService.IsCookieExpired("UserInfo")) {
                    console.log('redirect to login');
                    window.location.href = "#!/Login";
                }
                else {
                    console.log('dont do anything');
                    window.location.href = "#!/home";
                }
            }
            HomeController.$inject = ["CookieService"];
            return HomeController;
        }());
        Controller.HomeController = HomeController;
        app.AddController("HomeController", HomeController);
        var MainController = /** @class */ (function () {
            function MainController(_rootScope) {
                this._rootScope = _rootScope;
                //this._rootScope.IsDisplayLoginView = false;
                console.log('Home..', _rootScope.IsDisplayLoginView);
            }
            MainController.$inject = ["$rootScope"];
            return MainController;
        }());
        Controller.MainController = MainController;
        app.AddController("MainController", MainController);
    })(Controller = GCPL.Controller || (GCPL.Controller = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=HomeController.js.map