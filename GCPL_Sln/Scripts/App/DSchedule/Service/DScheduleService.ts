
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAddToCartDsService {
        PostDeliveryScheduleToCart(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class AddToCartDsService extends GCPL.Service.BaseService implements IAddToCartDsService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertDsInCart"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostDeliveryScheduleToCart(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("AddToCartDsService", AddToCartDsService);
}
