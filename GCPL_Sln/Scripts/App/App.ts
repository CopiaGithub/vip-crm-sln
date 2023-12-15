
/// <reference path="../typings/angularjs/angular.d.ts" />

module GCPL {

    import routes = GCPL.MyRoute;
    export let app: App;
    class App {
        app: ng.IModule;
        constructor(name: string, modules: Array<string>) {
            this.app = angular.module(name, modules);
            //add routes            
            this.AddConfig(routes.Route.configureRoutes);
        }

        AddConfig = (config: Function) => {
            this.app.config(config);
        }
        AddController = (name: string, controller: Function) => {
            this.app.controller(name, controller);
        }
        AddComponent = (name: string, component: any) => {
            this.app.component(name, component);
        }
        AddService = (name: string, service: Function) => {
            this.app.service(name, service);
        }
        AddFactory = (name: string, factory: Function) => {
            this.app.factory(name, factory);
        }
    }
    app = new App("GCPLApp", ["ngRoute", "ngCookies"]);


  
}