//List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IFollowUpReportService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        Getlist(data: any): Array<model.ReportFollowupListModel>;

    }
    export class FollowUpReportService extends GCPL.Service.BaseService implements IFollowUpReportService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadFollowUpReport";
            var FromDate;
            var ToDate;
            var LeadID;
            var BusinessPartnerNo;
            var PhoneNo;
            var StatusID;

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
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;

            }
            if (data.BusinessPartnerNo == undefined) {
                BusinessPartnerNo = '';
            }
            else {
                BusinessPartnerNo = data.BusinessPartnerNo;

            }
            if (data.PhoneNo == undefined) {
                PhoneNo = '';
            }
            else {
                PhoneNo = data.PhoneNo;

            }
            if (data.StatusID == undefined) {
                StatusID = '';
            }
            else {
                StatusID = data.StatusID;

            }
           
            let config = {
                params: {
                    FromDate: FromDate,
                    ToDate: ToDate,
                    LeadID: LeadID,
                    BusinessPartnerNo: BusinessPartnerNo,
                    StatusID: StatusID,
                    PhoneNo: PhoneNo
                    //RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    //UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        Getlist(data: any): Array<model.ReportFollowupListModel> {
            let list = Array<model.ReportFollowupListModel>();

            for (let item of data) {
                list.push({

                    LeadID: item.LeadID,
                    SpokeTo: item.SpokeTo,
                    PhoneNo: item.PhoneNo,
                    Question1: item.Question1,
                    Question2: item.Question2,
                    Question3: item.Question3,
                    Question4: item.Question4,
                    Question5: item.Question5,
                    Question6: item.Question6,
                    Answer1: item.Answer1,
                    Answer2: item.Answer2,
                    Answer3: item.Answer3,
                    Answer4: item.Answer4,
                    Answer5: item.Answer5,
                    Answer6: item.Answer6,
                    FollowupDate: item.FollowupDate,
                    CustomerID: item.CustomerID,
                    FollowupStatus: item.FollowupStatus,
                    AnswerText: item.AnswerText,
                    FollowupBy: item.FollowupBy,
                    BusinessPartnerNo: item.BusinessPartnerNo



                });
            }
            return list;
        }

    }
    app.AddService("FollowUpReportService", FollowUpReportService);
}