namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IMyLeadsDashboardStatusCountService {




        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetMyLeadsStatusCountGrid(data: any): model.MyLeadsDashboardStatusCount;

    }
    export class MyLeadsDashboardStatusCountService extends GCPL.Service.BaseService implements IMyLeadsDashboardStatusCountService {
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
            var url = this.apiUrl + "MyLeadDashboardCount";
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
                    UserID1: this.Cookie.get('UserInfo')['UserID']


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetMyLeadsStatusCountGrid(data: any): model.MyLeadsDashboardStatusCount {
            console.log(data);
            let list = new model.MyLeadsDashboardStatusCount();
            if (data == null || data == undefined) {
                list.Allocated = "";
                list.Deferred = "";
                list.Inprocess = "";
                list.ActivityCreated = "";
                list.ActivityCompleted = "";
                list.Converted = "";


            } else {
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
    app.AddService("MyLeadsDashboardStatusCountService", MyLeadsDashboardStatusCountService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IMyLeadsReportGridService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetMyLeadsGrid(data: any): Array<model.AllLeadsGridModel>;

    }
    export class MyLeadsReportGridService extends GCPL.Service.BaseService implements IMyLeadsReportGridService {
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
            var url = this.apiUrl + "MyLeadsReport";
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
                    UserID1: this.Cookie.get('UserInfo')['UserID']


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetMyLeadsGrid(data: any): Array<model.AllLeadsGridModel> {

            let list = Array<model.AllLeadsGridModel>();

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
                    ContactID: item.ContactID,
                    CustomerID: item.CustomerID,
                    AssessmentDate: item.AssessmentDate,
                    LeadSource: item.LeadSource,
                    CustMobNo: item.CustMobNo,
                    CustPhnNo: item.CustPhnNo,
                    ContactPerName: item.ContactPerName,
                    ContactPerNo: item.ContactPerName,
                    ContactPerMob: item.ContactPerMob,
                    SAPID: item.SAPID,
                    Latitude: item.Latitude,
                    Longitude: item.Longitude,
                    LeadType: item.LeadType,
                    LeadOrigin: item.LeadOrigin,
                    Zone: item.Zone,
                    ValidateDate: item.ValidateDate,
                    Division: item.Division,
                    AssessmentComments: item.AssessmentComments,
                    OpportunityNo: item.OpportunityNo,
                    Quantity: item.Quantity,
                    RefUserName: item.RefUserName,
                    CampaignName: item.CampaignName,
                    State: item.State,
                    District: item.District,
                    EmpCode: item.EmpCode,
                    EmployeeCode: item.EmployeeCode,
                    ProjectName: item.ProjectName,
                    VLEID: item.VLEID,
                    Description: item.Description,
                    VLELeadID: item.VLELeadID,
                    VLEName: item.VLEName,
                    ProjectNo: item.ProjectNo,
                    InvalidReasonID: item.InvalidReasonID,
                    DisqualificationReasonID: item.DisqualificationReasonID,
                    SalesWithin: item.SalesWithin,
                    Que1: item.Que1,
                    QueAns1: item.QueAns1,
                    Que2: item.Que2,
                    QueAns2: item.QueAns2,
                    Que3: item.Que3,
                    QueAns3: item.QueAns3
                });
            }

            return list;
        }

    }
    app.AddService("MyLeadsReportGridService", MyLeadsReportGridService);
}
