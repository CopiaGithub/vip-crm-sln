
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


//Delivery Schedule List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeliveryScheduleListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadItemList(data: any): Array<model.DeliveryScheduleModel>;

    }
    export class DeliveryScheduleListService extends GCPL.Service.BaseService implements IDeliveryScheduleListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/DeliveryScheduleList";


            let config = {
                params: {
                    // UserID: this.Cookie.get('UserInfo')['UserID'],
                    LeadID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadItemList(data: any): Array<model.DeliveryScheduleModel> {
            let list = Array<model.DeliveryScheduleModel>();

            for (let item of data) {
                list.push({
                    ID: item.ID,
                    ItemID: item.ItemID,
                    ProductDesc: item.ProductDesc,
                    UserID: item.UserID,
                    LeadID: item.LeadID,
                    DeliveryDate: item.DeliveryDate,
                    DeliveryQty: item.DeliveryQty

                });
            }
            return list;
        }

    }
    app.AddService("DeliveryScheduleListService", DeliveryScheduleListService);
}

