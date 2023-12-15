/// <reference path="../../../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var PopularProductService = /** @class */ (function () {
            function PopularProductService() {
            }
            PopularProductService.prototype.Find = function () {
                var list = new Array();
                for (var i = 1; i < 10; i++) {
                    list.push({
                        Id: i,
                        Description: "Product Desc - " + i,
                        Name: "Product Name - " + i
                    });
                }
                return list;
            };
            return PopularProductService;
        }());
        Service.PopularProductService = PopularProductService;
        //inject service
        app.AddService("PopularProductService", PopularProductService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=PopularProductService.js.map