module GCPL.Controller {
    import app = GCPL.app;
    export class LoginPageController {
        constructor() {           
            console.log("LoginPageController initialized...");
        }
    }
   app.AddController("LoginPageController", LoginPageController);
}
