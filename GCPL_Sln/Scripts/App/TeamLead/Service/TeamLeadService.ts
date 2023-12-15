namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITeamLeadsReportGridService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        TeamLeadsGrid(data: any): Array<model.TeamLeadsGridModel>;

    }
    export class TeamLeadsReportGridService extends GCPL.Service.BaseService implements ITeamLeadsReportGridService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            var url = this.apiUrl + "TeamLead";
            var CustomerMobile;
            var LeadID;
            var FromDate;
            var ToDate;
            var CustomerName;
            var ProductID;
            var SourceID;
            var DivisionID;
            var StatusID;
            var RegionID;
            var StateIDs;
            var UserID;
            var CampaignID;
            var DistrictID;
            var LeadSourceID;
            var Createdby;
            var AllocatedTo;
            var SubsourceID;
            var Subsource2ID;
            var ModelId;
            var Campaign;
            var LeadOrigin;
            var SAPID;
            var UserID1;
            var RoleID;
            //var SalesRep;

            if (data.CustomerMobile == undefined) {
                CustomerMobile = '';
            }
            else {

                CustomerMobile = data.CustomerMobile
            }
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {

                LeadID = data.LeadID
            }
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
            if (data.CustomerName == undefined) {
                CustomerName = '';
            }
            else {

                CustomerName = data.CustomerName
            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {

                ProductID = data.ProductID
            }
            if (data.SourceID == undefined) {
                SourceID = '';
            }
            else {

                SourceID = data.SourceID
            }

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {

                DivisionID = data.DivisionID
            }
            if (data.StatusID == undefined) {
                StatusID = '';
            }
            else {

                StatusID = data.StatusID
            }
            if (data.RegionID == undefined) {
                RegionID = '';
            }
            else {

                RegionID = data.RegionID
            }
            if (data.StateIDs == undefined) {
                StateIDs = '';
            }
            else {

                StateIDs = data.StateIDs
            }
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {

                UserID = data.UserID
            }
            if (data.CampaignID == undefined) {
                CampaignID = '';
            }
            else {

                CampaignID = data.CampaignID
            }
            if (data.DistrictID == undefined) {
                DistrictID = '';
            }
            else {

                DistrictID = data.DistrictID
            }
            if (data.LeadSourceID == undefined) {
                LeadSourceID = '';
            }
            else {

                LeadSourceID = data.LeadSourceID
            }
            if (data.Createdby == undefined) {
                Createdby = '';
            }
            else {

                Createdby = data.Createdby
            }
            if (data.AllocatedTo == undefined) {
                AllocatedTo = '';
            }
            else {

                AllocatedTo = data.AllocatedTo
            }
            if (data.SubsourceID == undefined) {
                SubsourceID = '';
            }
            else {

                SubsourceID = data.SubsourceID
            }
            if (data.Subsource2ID == undefined) {
                Subsource2ID = '';
            }
            else {

                Subsource2ID = data.Subsource2ID
            }
            if (data.ModelId == undefined) {
                ModelId = '';
            }
            else {

                ModelId = data.ModelId
            }
            if (data.Campaign == undefined) {
                Campaign = '';
            }
            else {

                Campaign = data.Campaign
            }
            if (data.SAPID == undefined) {
                SAPID = '';
            }
            else {

                SAPID = data.SAPID
            }
            if (data.UserID1 == undefined) {
                UserID1 = '';
            }
            else {

                UserID1 = data.UserID1
            }
            if (data.RoleID == undefined) {
                RoleID = '';
            }
            else {

                RoleID = data.RoleID
            }
            if (data.LeadOrigin == undefined) {
                LeadOrigin = '';
            }
            else {

                LeadOrigin = data.LeadOrigin
            }
            

            let config = {
                params: {

                    CustomerMobile: CustomerMobile,
                    LeadID: LeadID,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    CustomerName: CustomerName,
                    ProductID: ProductID,
                    SourceID: SourceID,
                    DivisionID: DivisionID,
                    StatusID: StatusID,
                    RegionID: RegionID,
                    StateIDs: StateIDs,
                    UserID: UserID,
                    CampaignID: CampaignID,
                    DistrictID: DistrictID,
                    LeadSourceID: LeadSourceID,
                    Createdby: Createdby,
                    AllocatedTo: AllocatedTo,
                    SubsourceID: SubsourceID,
                    Subsource2ID: Subsource2ID,
                    ModelId: ModelId,
                    Campaign: Campaign,
                    LeadOrigin: LeadOrigin,
                    SAPID: SAPID,
                    
                    UserID1: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        TeamLeadsGrid(data: any): Array<model.TeamLeadsGridModel> {

            let list = Array<model.TeamLeadsGridModel>();

            for (let item of data) {
                list.push({

                    LeadID: item.LeadID,
                    CompanyName: item.CompanyName,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    PurchaseWithin: item.PurchaseWithin,
                    Region: item.Region,
                    CreatedBy: item.CreatedBy,
                    CreatedDate: item.CreatedDate,
                    ValidatedBy: item.ValidatedBy,
                    AllocatedTo: item.AllocatedTo,
                    Status: item.Status,
                    AssessmentDate: item.AssessmentDate,
                    LeadSource: item.LeadSource,
                    CustMobNo: item.CustMobNo,
                    CustPhnNo: item.CustPhnNo,
                    ContactPerName: item.ContactPerName,
                    ContactPerNo: item.ContactPerName,
                    ContactPerMob: item.ContactPerMob,
                    SAPID: item.SAPID,
                    OpportunityNo: item.OpportunityNo


                });
            }

            return list;
        }

    }
    app.AddService("TeamLeadsReportGridService", TeamLeadsReportGridService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITeamLeadsStatusCountService {

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTeamLeadsStatusCountGrid(data: any): model.MyLeadsDashboardStatusCount;

    }
    export class TeamLeadsStatusCountService extends GCPL.Service.BaseService implements ITeamLeadsStatusCountService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            //var url = this.apiUrl + "MyLeadDashboardCount";
            var url = this.apiUrl + "TeamLeadStatus";
            var CustomerMobile;
            var LeadID;
            var FromDate;
            var ToDate;
            var CustomerName;
            var ProductID;
            var SourceID;
            var DivisionID;
            var StatusID;
            var RegionID;
            var StateIDs;
            var UserID;
            var CampaignID;
            var DistrictID;
            var LeadSourceID;
            var Createdby;
            var AllocatedTo;
            var SubsourceID;
            var Subsource2ID;
            var ModelId;
            var Campaign;
            var LeadOrigin;
            var SAPID;
            var UserID1;
            var RoleID;
            

            if (data.CustomerMobile == undefined) {
                CustomerMobile = '';
            }
            else {

                CustomerMobile = data.CustomerMobile
            }
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {

                LeadID = data.LeadID
            }
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
            if (data.CustomerName == undefined) {
                CustomerName = '';
            }
            else {

                CustomerName = data.CustomerName
            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {

                ProductID = data.ProductID
            }
            if (data.SourceID == undefined) {
                SourceID = '';
            }
            else {

                SourceID = data.SourceID
            }

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {

                DivisionID = data.DivisionID
            }
            if (data.StatusID == undefined) {
                StatusID = '';
            }
            else {

                StatusID = data.StatusID
            }
            if (data.RegionID == undefined) {
                RegionID = '';
            }
            else {

                RegionID = data.RegionID
            }
            if (data.StateIDs == undefined) {
                StateIDs = '';
            }
            else {

                StateIDs = data.StateIDs
            }
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {

                UserID = data.UserID
            }
            if (data.CampaignID == undefined) {
                CampaignID = '';
            }
            else {

                CampaignID = data.CampaignID
            }
            if (data.DistrictID == undefined) {
                DistrictID = '';
            }
            else {

                DistrictID = data.DistrictID
            }
            if (data.LeadSourceID == undefined) {
                LeadSourceID = '';
            }
            else {

                LeadSourceID = data.LeadSourceID
            }
            if (data.Createdby == undefined) {
                Createdby = '';
            }
            else {

                Createdby = data.Createdby
            }
            if (data.AllocatedTo == undefined) {
                AllocatedTo = '';
            }
            else {

                AllocatedTo = data.AllocatedTo
            }
            if (data.SubsourceID == undefined) {
                SubsourceID = '';
            }
            else {

                SubsourceID = data.SubsourceID
            }
            if (data.Subsource2ID == undefined) {
                Subsource2ID = '';
            }
            else {

                Subsource2ID = data.Subsource2ID
            }
            if (data.ModelId == undefined) {
                ModelId = '';
            }
            else {

                ModelId = data.ModelId
            }
            if (data.Campaign == undefined) {
                Campaign = '';
            }
            else {

                Campaign = data.Campaign
            }
            if (data.SAPID == undefined) {
                SAPID = '';
            }
            else {

                SAPID = data.SAPID
            }
            if (data.UserID1 == undefined) {
                UserID1 = '';
            }
            else {

                UserID1 = data.UserID1
            }
            if (data.RoleID == undefined) {
                RoleID = '';
            }
            else {

                RoleID = data.RoleID
            }
            if (data.LeadOrigin == undefined) {
                LeadOrigin = '';
            }
            else {

                LeadOrigin = data.LeadOrigin
            }
            

            let config = {
                params: {

                    CustomerMobile: CustomerMobile,
                    LeadID: LeadID,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    CustomerName: CustomerName,
                    ProductID: ProductID,
                    SourceID: SourceID,
                    DivisionID: DivisionID,
                    StatusID: StatusID,
                    RegionID: RegionID,
                    StateIDs: StateIDs,
                    UserID: UserID,
                    CampaignID: CampaignID,
                    DistrictID: DistrictID,
                    LeadSourceID: LeadSourceID,
                    Createdby: Createdby,
                    AllocatedTo: AllocatedTo,
                    SubsourceID: SubsourceID,
                    Subsource2ID: Subsource2ID,
                    ModelId: ModelId,
                    Campaign: Campaign,
                    LeadOrigin: LeadOrigin,
                    SAPID: SAPID,
                    UserID1: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetTeamLeadsStatusCountGrid(data: any): model.MyLeadsDashboardStatusCount {
            console.log(data);
            let list = new model.MyLeadsDashboardStatusCount();
            if (data == null || data == undefined) {
                //list.AllocatedLeads = "";
                //list.Opportunities = "";
                //list.Inquiry = "";
                //list.Qualification = "";
                //list.Development = "";
                //list.Proposal = "";
                list.Allocated = "";
                list.Deferred = "";
                list.Inprocess = "";
                list.ActivityCreated = "";
                list.ActivityCompleted = "";
                list.Converted = "";


            } else {
                //list.AllocatedLeads = data.AllocatedLeads;
                //list.Opportunities = data.Opportunities;
                //list.Inquiry = data.Inquiry;
                //list.Qualification = data.Qualification;
                //list.Development = data.Development;
                //list.Proposal = data.Proposal;
                list.Allocated = data.Allocated;
                list.Deferred = data.Deferred;
                list.Inprocess = data.Inprocess;
                list.ActivityCreated = data.ActivityCreated;
                list.ActivityCompleted = data.ActivityCompleted;
                list.Converted = data.Converted;

            }
            return list;
        }


    }
    app.AddService("TeamLeadsStatusCountService", TeamLeadsStatusCountService);
}