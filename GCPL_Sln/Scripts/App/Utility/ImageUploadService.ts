/// <reference path="../../typings/angularjs/angular.d.ts" />
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    export interface IUploadImageService {
        UploadImage(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }

    export class UploadImageService extends GCPL.Service.BaseService implements IUploadImageService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            //this.apiUrl = `${this.url}/${"APIPutProductReview"}`;
        }

        UploadImage(data: any): ng.IPromise<Utility.Ajax.IResponse>{
            console.log(data);
            let config = {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            };
            let url = `${this.url}/${"CtrlCatProductImage"}`;
            return this.ajaXUtility.Post({
                Url: url,
                data: data,
                Config: config
            });
        }
    }

    //inject service
    app.AddService("UploadImageService", UploadImageService);
}
