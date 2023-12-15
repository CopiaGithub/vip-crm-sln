
module GCPL.Controller {
    import app = GCPL.app;
    import service = GCPL.Service;

    export class CoockiesBaseController {
        public static $inject = ["CookieService"];
        constructor(private _cookieService: service.ICookieService) {
            if (_cookieService.IsCookieExpired("UserInfo")) {
                window.location.href = "#!/Login";
            }
            else {
               // window.location.href = "#!/home";
            }
        }
    }
    app.AddController("CoockiesBaseController", CoockiesBaseController);
}