
namespace GCPL.Service {
  
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadItemListDSEditService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadItemListDSEdit(data: any): Array<model.LeadItemModel>;

    }
    export class LeadItemListDSEditService extends GCPL.Service.BaseService implements ILeadItemListDSEditService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ItemListDSCreated";


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
        GetLeadItemListDSEdit(data: any): Array<model.LeadItemModel> {
            let List = Array<model.LeadItemModel>();

            for (let item of data) {
                List.push({
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
                    DeliveryStatus: item.DeliveryStatus,
                    index: item.index

                });
            }
            return List;
        }

    }
    app.AddService("LeadItemListDSEditService", LeadItemListDSEditService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeliveryScheduleEditService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadItemDSEditList(data: any): Array<model.DeliveryScheduleModel>;

    }
    export class DeliveryScheduleEditService extends GCPL.Service.BaseService implements IDeliveryScheduleEditService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/DeliveryScheduleListCreated";


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
        GetLeadItemDSEditList(data: any): Array<model.DeliveryScheduleModel> {
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
                    EditState: item.EditState,
                    index: item.index


                });
            }
            return list;
        }

    }
    app.AddService("DeliveryScheduleEditService", DeliveryScheduleEditService);
}


