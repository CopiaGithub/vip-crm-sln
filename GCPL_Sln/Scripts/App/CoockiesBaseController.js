var GCPL;
(function (GCPL) {
    var Controller;
    (function (Controller) {
        var app = GCPL.app;
        var CoockiesBaseController = /** @class */ (function () {
            function CoockiesBaseController(_cookieService) {
                this._cookieService = _cookieService;
                if (_cookieService.IsCookieExpired("UserInfo")) {
                    window.location.href = "#!/Login";
                }
                else {
                    // window.location.href = "#!/home";
                }
            }
            CoockiesBaseController.$inject = ["CookieService"];
            return CoockiesBaseController;
        }());
        Controller.CoockiesBaseController = CoockiesBaseController;
        app.AddController("CoockiesBaseController", CoockiesBaseController);
    })(Controller = GCPL.Controller || (GCPL.Controller = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CoockiesBaseController.js.map