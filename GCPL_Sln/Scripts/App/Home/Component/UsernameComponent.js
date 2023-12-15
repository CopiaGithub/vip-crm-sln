/// <reference path="../../../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var UsernameComponentController = /** @class */ (function () {
                function UsernameComponentController(_cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.UserName = null;
                    this.RoleName = null;
                    this.RoleNamecookie = null;
                    this.UserNamecookie = null;
                    this.Cookie = null;
                    this.Cookie = _cookieStore;
                    this.UserNamecookie = this.Cookie.get('UserInfo')['UserName'];
                    this.RoleNamecookie = this.Cookie.get('UserInfo')['RoleName'];
                }
                UsernameComponentController.prototype.$onInit = function () {
                    this.Init();
                };
                UsernameComponentController.prototype.Init = function () {
                    this.UserName = this.UserNamecookie;
                    this.RoleName = this.RoleNamecookie;
                    console.log(this.RoleName);
                };
                //inject inbuild service and other services
                UsernameComponentController.$inject = ["$cookieStore"];
                return UsernameComponentController;
            }());
            var UsernameComponent = /** @class */ (function () {
                function UsernameComponent() {
                    this.controller = UsernameComponentController;
                    this.templateUrl = "/Scripts/App/Home/Template/Username.html";
                }
                UsernameComponent.Name = "username";
                return UsernameComponent;
            }());
            app.AddComponent(UsernameComponent.Name, new UsernameComponent());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UsernameComponent.js.map