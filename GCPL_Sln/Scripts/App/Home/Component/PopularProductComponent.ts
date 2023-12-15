/// <reference path="../../../typings/angularjs/angular.d.ts" />

namespace GCPL.Component.Home {
    import app = GCPL.app;
    import popularProduct = GCPL.Model.IPopularProduct;
    import Service = GCPL.Service;

    interface IPopularProductComponentController {
        PopularProduct: Array<popularProduct>;    
    }

    class PopularProductComponentController implements IPopularProductComponentController {
        PopularProduct = null;
        private popularProductService: Service.IPopularProductService;

        static $inject = ["PopularProductService"];
        constructor(service: Service.IPopularProductService) {
            this.popularProductService = service;
        }

        $onInit() {
            this.Init();
        }
        Init(): void {
            this.PopularProduct = this.popularProductService.Find();            
        }
    }

    class PopularProductComponent implements ng.IComponentOptions {
        static Name: string = "popularProductComponent"

        public bindings: any;
        public controller: any;        
        public templateUrl: string;

        constructor() {   
                 
            this.controller = PopularProductComponentController;
            this.templateUrl = "/Scripts/App/Home/Template/_popularProduct.html";
        }
    }

    //inject component
    app.AddComponent(PopularProductComponent.Name, new PopularProductComponent());
}