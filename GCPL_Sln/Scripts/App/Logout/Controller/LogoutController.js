var GCPL;
(function (GCPL) {
    var Controller;
    (function (Controller) {
        var app = GCPL.app;
        var constatnt = GCPL.Costant;
        var LogoutController = /** @class */ (function () {
            function LogoutController(_scope, _loginService, _cookieService, _window) {
                this._scope = _scope;
                this._loginService = _loginService;
                this._cookieService = _cookieService;
                this._window = _window;
                this._cookieService.Remove(constatnt.CookieConstant.UserInfo);
                this._loginService.ManageHeaderAfterLogout();
                //redirect to home
                this._window.location.href = "#!/Login";
            }
            LogoutController.$inject = ["$scope", "LoginPageService", "CookieService", "$window"];
            return LogoutController;
        }());
        Controller.LogoutController = LogoutController;
        app.AddController("LogoutController", LogoutController);
    })(Controller = GCPL.Controller || (GCPL.Controller = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LogoutController.js.map