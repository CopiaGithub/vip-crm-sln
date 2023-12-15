/// <reference path="../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var utility = GCPL.Utility.Ajax;
        var BaseService = /** @class */ (function () {
            function BaseService(http, q) {
                this.http = http;
                this.q = q;
                //this.url = "http://demoapi.bkmist.com/api";
                //this.url = "http://devapi.bkmist.com/api";
                //this.url = "http://appapi.bkmist.com/api";
                // this.url = "http://Palinfraapi.bkmist.com/api";
                //this.url = "http://crmdevapi.copiacs.com/api";
                this.url = "http://localhost:57684/api";
                //this.url = "http://GCPLApi.bkmist.com/api";
                //this.url = "https://api.gcpllms.com/api";
                this.http = http;
                this.q = q;
                this.ajaXUtility = new utility.AjaxUtility(this.http, this.q);
            }
            return BaseService;
        }());
        Service.BaseService = BaseService;
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=BaseService.js.map