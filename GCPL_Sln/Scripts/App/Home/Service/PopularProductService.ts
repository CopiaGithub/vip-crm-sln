/// <reference path="../../../typings/angularjs/angular.d.ts" />

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    export interface IPopularProductService {
        Find(): Array<model.IPopularProduct>
    }
    export class PopularProductService implements IPopularProductService {

        Find(): Array<model.IPopularProduct> {
            let list = new Array<model.IPopularProduct>();
            for (let i = 1; i < 10; i++) {
                list.push({
                    Id: i,
                    Description: "Product Desc - " + i,
                    Name: "Product Name - " + i
                });
            }
            return list;
        }
    }

    //inject service
    app.AddService("PopularProductService", PopularProductService);
}