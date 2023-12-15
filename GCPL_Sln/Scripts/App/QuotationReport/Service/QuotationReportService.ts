//Report List 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IQuotationReportlistService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetQuotelist(data: any): Array<model.QuotationReportModel>;
     
    }
    export class QuotationReportlistService extends GCPL.Service.BaseService implements IQuotationReportlistService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/QuotationReport";
            var CustomerID;
            var ModelID;
            var CreatedBy;
            //var UserID;
            

            if (data.CustomerID == undefined) {
                CustomerID = '';
            }
            else {
                CustomerID = data.CustomerID;

            }

            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.CreatedBy == undefined) {
                CreatedBy = '';
            }
            else {
                CreatedBy = data.CreatedBy;

            }
           
            let config = {
                params: {
                    CustomerID: CustomerID,
                    ModelID: ModelID,                   
                    CreatedBy: CreatedBy,                   
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetQuotelist(data: any): Array<model.QuotationReportModel> {
            let list = Array<model.QuotationReportModel>();

            for (let item of data) {
                list.push({

                    OpportunityNo: item.OpportunityNo,
                    ModelID: item.ModelID,
                    CreationDate: item.CreationDate,
                    CustomerName: item.CustomerName,
                    OppStatus: item.OppStatus,
                    OppStage: item.OppStage,
                    ModelNo: item.ModelNo,
                    UserID: item.UserID,
                    CreatedBy: item.CreatedBy,
                    QuotationRefernce: item.QuotationRefernce,
                    QuotationDate: item.QuotationDate,
                    CustomerID: item.CustomerID

                });
            }
            return list;
        }
       
    }
    app.AddService("QuotationReportlistService", QuotationReportlistService);
}

//Model No Autofill
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IModelAutoFillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoModel(data: any): Array<model.ModelAutofill>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class ModelAutoFillService extends GCPL.Service.BaseService implements IModelAutoFillService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }


        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/FillModelNo";

            let config = {
                params: {
                    Input: data.term,

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutoModel(data: any): Array<model.ModelAutofill> {


            let list = Array<model.ModelAutofill>();


            for (let item of data) {

                list.push({

                    ModelID: item.ModelID.toString(),
                    ModelNo: item.ModelNo
                   
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("ModelAutoFillService", ModelAutoFillService);
}