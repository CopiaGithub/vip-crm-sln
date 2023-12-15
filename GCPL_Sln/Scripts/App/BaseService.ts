/// <reference path="../typings/angularjs/angular.d.ts" />


namespace GCPL.Service {
    import utility = GCPL.Utility.Ajax;
    export class BaseService {
        public url: string;
        public ajaXUtility: utility.IAjaxUtility;

        constructor(private http: ng.IHttpService, private q: ng.IQService) {
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
    }
}