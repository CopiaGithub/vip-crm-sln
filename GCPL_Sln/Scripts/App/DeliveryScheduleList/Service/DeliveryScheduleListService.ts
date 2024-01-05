
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeliveryScheduleListReportService {

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDeliveryScheduleListReport(data: any): Array<model.DeliveryScheduleListModel>;
        DownloadGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        DownloadDeliveryScheduleListReport(data: any): Array<model.DeliveryScheduleListModel>;
    }
    export class DeliveryScheduleListReportService extends GCPL.Service.BaseService implements IDeliveryScheduleListReportService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/DeliveryScheduleListReport";
            //let config = {
            //    params: {
            //        // UserID: this.Cookie.get('UserInfo')['UserID'],
            //        ItemID: data
            //    }
            //};
            //return this.ajaXUtility.Get({
            //    Url: url,
            //    Config: config
            //});

            var FromDate;
            var ToDate;
            var DsID;
            var LeadID;
            var ProductID;
            var CustomerID;

            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;
            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;
            }
            if (data.DsID == undefined) {
                DsID = '';
            }
            else {
                DsID = data.DsID;
            }
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;
            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;
            }
            if (data.CustomerID == undefined) {
                CustomerID = '';
            }
            else {
                CustomerID = data.CustomerID;
            }

            let config = {
                params: {
                    FromDate: FromDate,
                    ToDate: ToDate,
                    DsID: DsID,
                    LeadID: LeadID,
                    ProductID: ProductID,
                    CustomerID: CustomerID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetDeliveryScheduleListReport(data: any): Array<model.DeliveryScheduleListModel> {
            let list = Array<model.DeliveryScheduleListModel>();

            for (let item of data) {
                list.push({
                    ID: item.ID,
                    LeadID: item.LeadID,
                    ItemID: item.ItemID,
                    DSNO: item.DSNO,
                    CustomerName: item.CustomerName,
                    UserID: item.UserID,
                    ItemQty: item.ItemQty,
                    DeliveryDate: item.DeliveryDate,
                    DeliveryQty: item.DeliveryQty,
                    ProductID: item.ProductID,
                    ProductCode: item.ProductCode,
                    ProductDesc: item.ProductDesc

                });
            }
            return list;
        }

        DownloadGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/DownloadAllActivities";
            var LeadID;
            var OpportunityID;
            var CreatedBy;
            var ActivityType;
            var FromDate;
            var ToDate;
            var UserID;
            var ActivityID;

            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;
            }
            if (data.OpportunityID == undefined) {
                OpportunityID = '';
            }
            else {
                OpportunityID = data.OpportunityID;
            }
            if (data.CreatedBy == undefined) {
                CreatedBy = '';
            }
            else {
                CreatedBy = data.CreatedBy;
            }
            if (data.ActivityType == undefined) {
                ActivityType = '';
            }
            else {
                ActivityType = data.ActivityType;
            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;
            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;
            }
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {
                UserID = data.UserID;
            }
            if (data.ActivityID == undefined) {
                ActivityID = '';
            }
            else {
                ActivityID = data.ActivityID;
            }

            let config = {
                params: {
                    LeadID: LeadID,
                    OpportunityID: OpportunityID,
                    CreatedBy: CreatedBy,
                    ActivityType: ActivityType,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    UserID: UserID,
                    ActivityID: ActivityID

                    // erpid: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        DownloadDeliveryScheduleListReport(data: any): Array<model.DeliveryScheduleListModel> {
            let list = Array<model.DeliveryScheduleListModel>();

            for (let item of data) {
                list.push({
                    ID: item.ID,
                    LeadID: item.LeadID,
                    ItemID: item.ItemID,
                    DSNO: item.DSNO,
                    CustomerName: item.CustomerName,
                    UserID: item.UserID,
                    ItemQty: item.ItemQty,
                    DeliveryDate: item.DeliveryDate,
                    DeliveryQty: item.DeliveryQty,
                    ProductID: item.ProductID,
                    ProductCode: item.ProductCode,
                    ProductDesc: item.ProductDesc

                });
            }
            return list;
        }

    }

    app.AddService("DeliveryScheduleListReportService", DeliveryScheduleListReportService);
}

