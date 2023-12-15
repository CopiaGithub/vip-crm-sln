namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAllLeadMTTRService {
        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAllLeadsGrid(data: any): Array<model.LeadsMTTRGridModel>;
    }
    export class AllLeadMTTRService extends GCPL.Service.BaseService implements IAllLeadMTTRService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "LeadMTTRReport";
            var FromDate;
            var ToDate;
            var CustomerID;
            var CustSAPID;
            var LeadID;
            var AllocatedTo;
            var StatusID;
            var UserID;
            var RoleID;

            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {

                FromDate = data.FromDate
            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {

                ToDate = data.ToDate
            }

            if (data.CustomerID == undefined) {
                CustomerID = '';
            }
            else {

                CustomerID = data.CustomerID
            }

            if (data.CustSAPID == undefined) {
                CustSAPID = '';
            }
            else {

                CustSAPID = data.CustSAPID
            }
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {

                LeadID = data.LeadID
            }
            if (data.AllocatedTo == undefined) {
                AllocatedTo = '';
            }
            else {

                AllocatedTo = data.AllocatedTo
            }

            if (data.StatusID == undefined) {
                StatusID = '';
            }
            else {

                StatusID = data.StatusID
            }
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {

                UserID = data.UserID
            }
            if (data.RoleID == undefined) {
                RoleID = '';
            }
            else {

                RoleID = data.RoleID
            }


            let config = {
                params: {
                    FromDate: FromDate,
                    ToDate: ToDate,
                    CustomerID: CustomerID,
                    CustSAPID: CustSAPID,
                    LeadID: LeadID,
                    AllocatedTo: AllocatedTo,
                    StatusID: StatusID,
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAllLeadsGrid(data: any): Array<model.LeadsMTTRGridModel> {
            debugger;
            let list = Array<model.LeadsMTTRGridModel>();

            for (let item of data) {
                list.push({
                    CompanyName: item.CompanyName,
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    LeadID: item.LeadID,
                    Status: item.Status,
                    AgeingCreationValidation: item.AgeingCreationValidation,
                    AgeingValidationAssessment: item.AgeingValidationAssessment,
                    AgeingAssessmentConversion: item.AgeingAssessmentConversion,
                    AgeingCreationConversion: item.AgeingCreationConversion,
                    AgeingCreationClosure: item.AgeingCreationClosure,
                    OpenLeadsAgeing: item.OpenLeadsAgeing,
                    UserID: item.UserID,
                    AllocatedTo: item.AllocatedTo
                });
            }
            return list;
        }

    }
    app.AddService("AllLeadMTTRService", AllLeadMTTRService);
}
