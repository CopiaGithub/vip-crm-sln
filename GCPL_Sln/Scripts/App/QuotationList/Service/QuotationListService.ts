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
            var CustomerID;
            var OppNumber;
            var QuotationNo;
            //var UserID;
            

            if (data.CustomerID == undefined) {
                CustomerID = '';
            }
            else {
                CustomerID = data.CustomerID;

            }

            if (data.OppNumber == undefined) {
                OppNumber = '';
            }
            else {
                OppNumber = data.OppNumber;

            }
            if (data.QuotationNo == undefined) {
                QuotationNo = '';
            }
            else {
                QuotationNo = data.QuotationNo;

            }
            //if (data.UserID == undefined) {
            //    UserID = '';
            //}
            //else {
            //    UserID = data.UserID;

            //}
            let config = {
                params: {
                    CustomerID: CustomerID,
                    OppNumber: OppNumber,
                    QuotationNo: QuotationNo,
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
                    OpportunityID: item.OpportunityID,
                    OpportunitySAPNo: item.OpportunitySAPNo,
                    OpportunityDate: item.OpportunityDate,
                    CustomerID: item.CustomerID,
                    CustomerName: item.CustomerName,
                    OppStatus: item.OppStatus,
                    OppStage: item.OppStage,
                    ModelNo: item.ModelNo,
                    UserID: item.UserID,
                    CreatedBy: item.CreatedBy,
                    QuotationRefernce: item.QuotationRefernce,
                    QuotationDate: item.QuotationDate,

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