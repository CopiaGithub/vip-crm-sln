//List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IFollowUpListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        Getlist(data: any): Array<model.FollowupListModel>;

    }
    export class FollowUpListService extends GCPL.Service.BaseService implements IFollowUpListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadFollowUpList";

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
            var ZoneID;
            var Campaign;
            var LeadOrigin;
            var SAPID;
            var UserID1;
            var LeadType;
            var CustomerID;
            var RoleID;
            var Opportunity;

            

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
            if (data.CustomerID == undefined) {
                CustomerID = '';
            }
            else {

                CustomerID = data.CustomerID
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
            if (data.ZoneID == undefined) {
                ZoneID = '';
            }
            else {

                ZoneID = data.ZoneID
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
            if (data.LeadType == undefined) {
                LeadType = '';
            }
            else {

                LeadType = data.LeadType
            }

            if (data.Opportunity == undefined) {
                Opportunity = '';
            }
            else {

                Opportunity = data.Opportunity
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
                    ZoneID: ZoneID,
                    Campaign: Campaign,
                    LeadOrigin: LeadOrigin,
                    SAPID: SAPID,
                    UserID1: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    LeadType: LeadType,
                    CustomerID: CustomerID,
                    Opportunity: Opportunity,

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        Getlist(data: any): Array<model.FollowupListModel> {
            let list = Array<model.FollowupListModel>();
            
            for (let item of data) {
                list.push({

                   
                    LeadID: item.LeadID,
                    Status: item.Status,
                    CreatedDate: item.CreatedDate,
                    AllocatedTo: item.AllocatedTo,
                    CompanyName: item.CompanyName,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    PurchaseWithin: item.PurchaseWithin,
                    Region: item.Region,
                    CreatedBy: item.CreatedBy,
                    ValidatedBy: item.ValidatedBy,
                    ContactID: item.ContactID,
                    AssessmentDate: item.AssessmentDate,
                    CustomerID: item.CustomerID,
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
                    FollowUpCount: item.FollowUpCount

                });
            }
            return list;
        }

    }
    app.AddService("FollowUpListService", FollowUpListService);
}

//Question list

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadFUQuestionsService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetQuestion(data: any): Array<model.LeadFUQuestionsModel>;
    }
    export class LeadFUQuestionsService extends GCPL.Service.BaseService implements ILeadFUQuestionsService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }


        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetFollowupQuestions";

            let config = {
                params: {                    
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetQuestion(data: any): Array<model.LeadFUQuestionsModel> {
            let list = Array<model.LeadFUQuestionsModel>();
            for (let item of data) {
                //
                list.push({
                    QuestionID: item.QuestionID,
                    Question: item.Question

                });
            }

            return list;
        }
    }
    app.AddService("LeadFUQuestionsService", LeadFUQuestionsService);
}

//Answers list
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadFUAnswersService {

        FindAns(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAns(data: any): Array<model.LeadFUAnswersModel>;
    }
    export class LeadFUAnswersService extends GCPL.Service.BaseService implements ILeadFUAnswersService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }


        FindAns(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetFollowupAnswers";
            let config = {
                params: {

                    QuestionID: data
                }
            };

            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAns(data: any): Array<model.LeadFUAnswersModel> {
            let list = Array<model.LeadFUAnswersModel>();
            for (let item of data) {
                list.push({
                    QuestionID: item.QuestionID,
                    AnswerID: item.AnswerID,
                    Answer: item.Answer



                });
            }


            return list;
        }
    }
    app.AddService("LeadFUAnswersService", LeadFUAnswersService);
}

//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadQueAnsService {
        PostQueAns(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }

    export class InsertLeadQueAnsService extends GCPL.Service.BaseService implements IInsertLeadQueAnsService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertLeadQueAns"}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostQueAns(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertLeadQueAnsService", InsertLeadQueAnsService);
}

//LeadFollowup Status Dropdown
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadFollupStatusService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadStatusFollup(data: any): Array<model.LeadStatusddlModel>;
    }
    export class LeadFollupStatusService extends GCPL.Service.BaseService implements ILeadFollupStatusService {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadFollupStausDD"}`;
            this.Cookie = _cookieStore;
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

        GetLeadStatusFollup(data: any): Array<model.LeadStatusddlModel> {
            let list = Array<model.LeadStatusddlModel>();
            for (let item of data) {
                list.push({
                    LeadStatusID: item.LeadStatusID.toString(),
                    Status: item.Status,
                });
            }
            return list;
        }
    }

    app.AddService("LeadFollupStatusService", LeadFollupStatusService);
}

//Lead followup History

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IFollUpHistListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        Getlist(data: any): Array<model.FolloupHistListModel>;

    }
    export class FollUpHistListService extends GCPL.Service.BaseService implements IFollUpHistListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/FollUpHistList";

            var LeadNo;

            

            if (data == undefined) {
                LeadNo = ''
            }
            else {
                LeadNo = data

            }
           
            
            let config = {
                params: {
                    LeadID: LeadNo
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        Getlist(data: any): Array<model.FolloupHistListModel> {
            let list = Array<model.FolloupHistListModel>();
            
            for (let item of data) {
                list.push({

                    LeadID: item.LeadID,
                    SpokeTo: item.SpokeTo,
                    PhoneNo:item.PhoneNo,
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
    app.AddService("FollUpHistListService", FollUpHistListService);
}