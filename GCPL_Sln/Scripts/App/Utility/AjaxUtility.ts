/// <reference path="../../typings/angularjs/angular.d.ts" />
//https://fromjami.com/2015/11/15/custom-ajax-service-calls-using-http-in-angular-js-and-typescript/
namespace GCPL.Utility.Ajax {

    export interface IResponse {
        ErrorMessage: string;
        data: any;
        StatusCode: number;
    }

    export interface IRequestParameterGet extends IRequestParameter {

    }
    export interface IRequestParameterPost extends IRequestParameter {
        data: any;

    }

    export interface IRequestParameter {
        Url: string;
        Config?: ng.IRequestShortcutConfig
    }
    export interface IAjaxUtility {
        Get<TRequestParameter extends IRequestParameterGet>(requestParameter: TRequestParameter): ng.IPromise<IResponse>;
        Post<TRequestParameter extends IRequestParameterPost>(requestParameter: TRequestParameter): ng.IPromise<IResponse>;
    }
    export class AjaxUtility implements IAjaxUtility {

        private $http: ng.IHttpService;
        private $q: ng.IQService;
        constructor(_http: ng.IHttpService, _q: ng.IQService) {
            this.$http = _http;
            this.$q = _q;
        }
        public Get<TRequestParameter extends IRequestParameterGet>(requestParameter: TRequestParameter): ng.IPromise<any> {
            
            return this.$http.get(requestParameter.Url, requestParameter.Config);

        }

        public Post<TRequestParameter extends IRequestParameterPost>(requestParameter: TRequestParameter): ng.IPromise<any> {

            return this.$http.post(requestParameter.Url, requestParameter.data, requestParameter.Config)
        }
    }



}

