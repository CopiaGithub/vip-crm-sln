
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
                    ItemID: data
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
                    ProductID: item.ProductID,
                    ProductCode: item.ProductCode,
                    ProductDesc: item.ProductDesc,
                    UserID: item.UserID,
                    LeadID: item.LeadID,
                    DeliveryDate: item.DeliveryDate,
                    DeliveryQty: item.DeliveryQty,
                    EditState: item.EditState

                });
            }
            return list;
        }

    }
    app.AddService("DeliveryScheduleListService", DeliveryScheduleListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteDsFromAddToCartService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postDsDelete(data: any): void;
    }
    export class DeleteDsFromAddToCartService extends GCPL.Service.BaseService implements IDeleteDsFromAddToCartService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteDs"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    DsID: data
                }
            };
            return this.ajaXUtility.Post({

                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postDsDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });

        }
    }

    app.AddService("DeleteDsFromAddToCartService", DeleteDsFromAddToCartService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertDsDetailsService {
        PostDS(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertDsDetailsService extends GCPL.Service.BaseService implements IInsertDsDetailsService {


        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertDsDetails"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostDS(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertDsDetailsService", InsertDsDetailsService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEditDSListService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDSEdit(data: any): model.DeliveryScheduleModel;
    }
    export class EditDSListService extends GCPL.Service.BaseService implements IEditDSListService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DSListEdit"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ID;

            if (data == undefined) {
                ID = "";
            }
            else {
                ID = data;
            }

            let config = {
                params: {
                    ID: ID
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetDSEdit(data: any): model.DeliveryScheduleModel {

            let obj = new model.DeliveryScheduleModel();
            obj.ID = data.ID,
                obj.ItemID = data.ItemID,
                obj.ProductID = data.ProductID,
                obj.ProductCode = data.ProductCode,
                obj.ProductDesc = data.ProductDesc,
                obj.UserID = data.UserID,
                obj.LeadID = data.LeadID,
                obj.DeliveryDate = data.DeliveryDate,
                obj.DeliveryQty = data.DeliveryQty
                obj.EditState = data.EditState

            console.log("EditDSListService",obj);
                             
            return obj;
        }
    }
    app.AddService("EditDSListService", EditDSListService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadItemNewDSListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadItemNewDSList(data: any): Array<model.LeadItemModel>;

    }
    export class LeadItemNewDSListService extends GCPL.Service.BaseService implements ILeadItemNewDSListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ItemListNewDS";


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
        GetLeadItemNewDSList(data: any): Array<model.LeadItemModel> {
            let list = Array<model.LeadItemModel>();

            for (let item of data) {
                list.push({
                    LeadID: item.LeadID,
                    ItemID: item.ItemID,
                    ProductDesc: item.ProductDesc,
                    Quantity: item.Quantity,
                    Status: item.Status,
                    ModelID: item.ModelID,
                    ItemStatus: item.ItemStatus,
                    ItemCode: item.ProductCode,
                    MRPUnit: item.MRPUnit,
                    GST: item.GST,
                    NetAmount: item.NetAmount,
                    DeliveryStatus: item.DeliveryStatus
                });
            }
            return list;
        }

    }
    app.AddService("LeadItemNewDSListService", LeadItemNewDSListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteDSItemService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postDSItemDelete(data: any): void;
    }
    export class DeleteDSItemService extends GCPL.Service.BaseService implements IDeleteDSItemService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteDSItem"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    ItemID: data
                }
            };
            return this.ajaXUtility.Post({

                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postDSItemDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });

        }
    }

    app.AddService("DeleteDSItemService", DeleteDSItemService);
}

