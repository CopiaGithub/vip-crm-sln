//search
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadOverrideListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadOverrideData(data: any): Array<model.LeadOverrideListModel>;

    }
    export class LeadOverrideListService extends GCPL.Service.BaseService implements ILeadOverrideListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadOverride";
            var LeadID;
            var CustomerName;
            var User;
            var StatusID;
            var SourceID;

            debugger;

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

            if (data.User == undefined) {
                User = '';
            }
            else {
                User = data.User;

            }
            
            let config = {
                params: {
                    LeadID: LeadID,
                    CustomerName: CustomerName,
                    User: User,
                    StatusID: '',
                    SourceID:''
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadOverrideData(data: any): Array<model.LeadOverrideListModel> {
            let list = Array<model.LeadOverrideListModel>();

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
    app.AddService("LeadOverrideListService", LeadOverrideListService);
}