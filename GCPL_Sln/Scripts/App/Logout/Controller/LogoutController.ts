module GCPL.Controller {
    import app = GCPL.app;
    import constatnt = GCPL.Costant;

    export class LogoutController {
        
        static $inject = ["$scope", "LoginPageService", "CookieService", "$window"];
        constructor(private _scope, private _loginService, private _cookieService, private _window) {
      
            this._cookieService.Remove(constatnt.CookieConstant.UserInfo);
            this._loginService.ManageHeaderAfterLogout();
            //redirect to home
            this._window.location.href = "#!/Login";
        }

    }

    app.AddController("LogoutController", LogoutController);
}