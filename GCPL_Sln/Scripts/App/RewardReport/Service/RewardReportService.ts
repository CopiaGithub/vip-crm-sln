//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IRewardReportListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetRewardReportList(data: any): Array<model.RewardReportListModel>;

    }
    export class RewardReportListService extends GCPL.Service.BaseService implements IRewardReportListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetVLERewardReportList";
            var LeadID;
            var SearchText;
            var PaidConverted;
            var PaidWon;

            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;

            }
            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }

            if (data.PaidConverted == undefined) {
                PaidConverted = '';
            }
            else {
                PaidConverted = data.PaidConverted;

            }
            if (data.PaidWon == undefined) {
                PaidWon = '';
            }
            else {
                PaidWon = data.PaidWon;

            }

            let config = {
                params: {
                    LeadID: LeadID,
                    SearchText: SearchText,
                    PaidConverted: PaidConverted,
                    PaidWon: PaidWon
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetRewardReportList(data: any): Array<model.RewardReportListModel> {
            let list = Array<model.RewardReportListModel>();
            debugger;
            for (let item of data) {
                list.push({

                    LeadID: item.LeadID,
                    VLELeadID: item.VLELeadID,
                    OpportunityID: item.OpportunityID,
                    ModelNo: item.ModelNo,
                    Status: item.Status,
                    VLEID: item.VLEID,
                    VLEName: item.VLEName,
                    CustomerName: item.CustomerName,
                    CustomerSAPID: item.CustomerSAPID,
                    ConversionPoints: ((item.ConversionPoints == "0") ? "NA" : item.ConversionPoints),
                    WonPoints: ((item.WonPoints == "0") ? "NA" : item.WonPoints),
                    PaidConverted: ((item.PaidConverted == "1") ? "Due" : "Paid"),
                    PaidWon: ((item.PaidWon == "1") ? "Due" : "Paid"),
                    LeadCreatedDate: item.LeadCreatedDate,
                    OppStatus: item.OppStatus
                });
            }
            return list;
        }

    }
    app.AddService("RewardReportListService", RewardReportListService);
}

//GetAUTo VLE Name
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IgetAutoVLENameService {
        GetAutoVLEName(data: any): Array<model.VLENameAutofill>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class getAutoVLENameService extends GCPL.Service.BaseService implements IgetAutoVLENameService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/VLENameAUtofill";
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

        GetAutoVLEName(data: any): Array<model.VLENameAutofill> {
            let list = Array<model.VLENameAutofill>();
            for (let item of data) {
                list.push({
                    VLEID: item.VLEID,
                    ContactName: item.ContactName
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("getAutoVLENameService", getAutoVLENameService);
}