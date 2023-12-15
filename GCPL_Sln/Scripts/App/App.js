/// <reference path="../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var routes = GCPL.MyRoute;
    var App = /** @class */ (function () {
        function App(name, modules) {
            var _this = this;
            this.AddConfig = function (config) {
                _this.app.config(config);
            };
            this.AddController = function (name, controller) {
                _this.app.controller(name, controller);
            };
            this.AddComponent = function (name, component) {
                _this.app.component(name, component);
            };
            this.AddService = function (name, service) {
                _this.app.service(name, service);
            };
            this.AddFactory = function (name, factory) {
                _this.app.factory(name, factory);
            };
            this.app = angular.module(name, modules);
            //add routes            
            this.AddConfig(routes.Route.configureRoutes);
        }
        return App;
    }());
    GCPL.app = new App("GCPLApp", ["ngRoute", "ngCookies"]);
})(GCPL || (GCPL = {}));
//# sourceMappingURL=App.js.map