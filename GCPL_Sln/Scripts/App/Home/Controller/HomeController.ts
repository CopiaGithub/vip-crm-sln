/// <reference path="../../../typings/angularjs/angular.d.ts" />
module GCPL.Controller {
    import app = GCPL.app;     
    import service = GCPL.Service;

    export class HomeController {
        public static $inject = ["CookieService"];
        constructor(private _cookieService: service.ICookieService) {
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
    }
    app.AddController("HomeController", HomeController);

    export class MainController {
        IsDisplayLoginView: boolean;
        public static $inject = ["$rootScope"];
        constructor(private _rootScope: any) {            
            //this._rootScope.IsDisplayLoginView = false;
            console.log('Home..', _rootScope.IsDisplayLoginView);
        }
    }

    app.AddController("MainController", MainController);
}

