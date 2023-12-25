namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IQuotationlistService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetQuotationlist(data: any): Array<model.QuotationlistdetailsModel>;

        PDFView(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetPDF(data): ng.IPromise<Utility.Ajax.IResponse>
    }
    export class QuotationlistService extends GCPL.Service.BaseService implements IQuotationlistService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/QuatationListDetails";
            var ID;
            var LeadID;
            var CustomerName;
            //var UserID;
            

            if (data.ID == undefined) {
                ID = '';
            }
            else {
                ID = data.ID;

            }

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
            //if (data.UserID == undefined) {
            //    UserID = '';
            //}
            //else {
            //    UserID = data.UserID;

            //}
            let config = {
                params: {
                    ID: ID,
                    LeadID: LeadID,
                    CustomerName: CustomerName,
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetQuotationlist(data: any): Array<model.QuotationlistdetailsModel> {
            let list = Array<model.QuotationlistdetailsModel>();

            for (let item of data) {
                list.push({
                    ID: item.ID,
                    LeadID: item.LeadID,
                    CustomerName: item.CustomerName,
                    ContactName: item.ContactName,
                    SPName: item.SPName,
                    SPMobileNo: item.SPMobileNo,
                    SPDesignation: item.SPDesignation,  
                    CreatedBy: item.CreatedBy,
                   

                });
            }
            return list;
        }

        PDFView(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {

                params: {
                    QuotationNo: data,

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/QuotPDF",
                Config: config
            });
        }

        GetPDF(data): ng.IPromise<Utility.Ajax.IResponse> {
            debugger
            return data;
        }

    }
    app.AddService("QuotationlistService", QuotationlistService);
}