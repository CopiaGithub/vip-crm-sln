/// <reference path="../../../typings/angularjs/angular.d.ts" />

namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;

    interface IUsernameComponentController {


    }

    class UsernameComponentController implements IUsernameComponentController {
        UserName = null;
        RoleName = null;
        RoleNamecookie = null;

        UserNamecookie = null;
        private Cookie: any = null;
        //inject inbuild service and other services
        static $inject = ["$cookieStore"];

        constructor(private _cookieStore: any) {

           
            this.Cookie = _cookieStore;
            this.UserNamecookie = this.Cookie.get('UserInfo')['UserName'];
            this.RoleNamecookie = this.Cookie.get('UserInfo')['RoleName'];

        }

        $onInit() {
            this.Init();
        }
        Init(): void {
           
            this.UserName = this.UserNamecookie;
            this.RoleName = this.RoleNamecookie;
            console.log(this.RoleName);


        }

    }


    class UsernameComponent implements ng.IComponentOptions {
        static Name: string = "username"
        public bindings: any;
        public controller: any;
        // public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = UsernameComponentController;
            this.templateUrl = "/Scripts/App/Home/Template/Username.html";
        }
    }

    app.AddComponent(UsernameComponent.Name, new UsernameComponent());
}
