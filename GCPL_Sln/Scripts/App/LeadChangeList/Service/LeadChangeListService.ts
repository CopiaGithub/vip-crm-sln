//search
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadChangeListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadChangeData(data: any): Array<model.LeadChangeListModel>;

    }
    export class LeadChangeListService extends GCPL.Service.BaseService implements ILeadChangeListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadChangeList";
            var LeadID;
            var CustomerName;
           

            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;

            }


            if (data.CustomerName == undefined) {
                CustomerName = '';
            }
            else {
                CustomerName = data.CustomerName;

            }


            let config = {
                params: {
                    LeadID: LeadID,
                    CustomerName: CustomerName,
                   
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadChangeData(data: any): Array<model.LeadChangeListModel> {
            let list = Array<model.LeadChangeListModel>();

            for (let item of data) {
                list.push({

                    LeadID: item.LeadID,
                    CompanyName: item.CompanyName,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    Quantity: item.Quantity,
                    Title: item.Title,
                    FirstName: item.FirstName,
                    Status: item.Status,
                    SourceID: item.SourceID,
                    WhenEntered: item.WhenEntered,
                    LeadSource: item.LeadSource


                });
            }
            return list;
        }

    }
    app.AddService("LeadChangeListService", LeadChangeListService);
}