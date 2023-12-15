//ActivityType  dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IActivityTypeddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetActivityTypeName(data: any): Array<model.ActivityTypeddlModel>;
    }
    export class ActivityTypeddService extends GCPL.Service.BaseService implements IActivityTypeddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ActivityTypeDD"}`;
        }


        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetActivityTypeName(data: any): Array<model.ActivityTypeddlModel> {
            let list = Array<model.ActivityTypeddlModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID.toString(),
                    ActivityType: item.ActivityType,
                });
            }
            return list;
        }
    }

    app.AddService("ActivityTypeddService", ActivityTypeddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAllActListService {

        FindGrid(data: any, NoOfRds: number, page: number): ng.IPromise<Utility.Ajax.IResponse>;
        GetAllActList(data: any): Array<model.AllActModel>;
        DownloadGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        DownloadAllActList(data: any): Array<model.AllActModel>;
    }
    export class AllActListService extends GCPL.Service.BaseService implements IAllActListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any, NoOfRds: number, page: number): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/AllActivitiesList";
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
                    ActivityID: ActivityID,
                    NoOfRds: NoOfRds,
                    page: page

                    // erpid: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAllActList(data: any): Array<model.AllActModel> {
            let list = Array<model.AllActModel>();

            for (let item of data) {
                list.push({

                    CustomerID: item.CustomerID,
                    CompanyName: item.CompanyName,
                    CustomerSAPID: item.CustomerSAPID,
                    ContactID: item.ContactID,
                    ContactName: item.ContactName,
                    ContactSAPID: item.ContactSAPID,
                    Note: item.Note,
                    ActivityID: item.ActivityID,
                    ActivityName: item.ActivityName,
                    ActivityDate: item.ActivityDate,
                    Status: item.Status,
                    IsActive: item.IsActive,
                    Purpose: item.Purpose,
                    Mode: item.Mode,
                    Location: item.Location,
                    ReferenceType: item.ReferenceType,
                    ReferenceLead: item.ReferenceLead,
                    ReferenceOpportunity: item.ReferenceOpportunity,
                    StartDate: item.StartDate,
                    EndDate: item.EndDate,
                    ActivityNumber: item.ActivityNumber,
                    ActivityAgainst: item.ActivityAgainst,
                    ActivityType: item.ActivityType,
                    CreatedBy: item.CreatedBy
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

        DownloadAllActList(data: any): Array<model.AllActModel> {
            let list = Array<model.AllActModel>();

            for (let item of data) {
                list.push({

                    CustomerID: item.CustomerID,
                    CompanyName: item.CompanyName,
                    CustomerSAPID: item.CustomerSAPID,
                    ContactID: item.ContactID,
                    ContactName: item.ContactName,
                    ContactSAPID: item.ContactSAPID,
                    Note: item.Note,
                    ActivityID: item.ActivityID,
                    ActivityName: item.ActivityName,
                    ActivityDate: item.ActivityDate,
                    Status: item.Status,
                    IsActive: item.IsActive,
                    Purpose: item.Purpose,
                    Mode: item.Mode,
                    Location: item.Location,
                    ReferenceType: item.ReferenceType,
                    ReferenceLead: item.ReferenceLead,
                    ReferenceOpportunity: item.ReferenceOpportunity,
                    StartDate: item.StartDate,
                    EndDate: item.EndDate,
                    ActivityNumber: item.ActivityNumber,
                    ActivityAgainst: item.ActivityAgainst,
                    ActivityType: item.ActivityType,
                    CreatedBy: item.CreatedBy
                });
            }
            return list;
        }

    }

    app.AddService("AllActListService", AllActListService);
}

