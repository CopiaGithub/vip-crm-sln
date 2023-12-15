namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAllLeadsReportGridService {

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetAllLeadsGrid(data: any): Array<model.AllLeadsGridModel>;

    }
    export class AllLeadsReportGridService extends GCPL.Service.BaseService implements IAllLeadsReportGridService {
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
            var url = this.apiUrl + "AllLeadsReport";
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
            var ProjectID;

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
            if (data.ProjectID == undefined) {
                ProjectID = '';
            }
            else {

                ProjectID = data.ProjectID
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
                    ProjectID: ProjectID,
                   
                  


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAllLeadsGrid(data: any): Array<model.AllLeadsGridModel> {
            debugger;
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
                    CustomerID:item.CustomerID,
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
                    ProjectName:item.ProjectName,
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
    app.AddService("AllLeadsReportGridService", AllLeadsReportGridService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IgetAutoProjectNameService {
        GetAutProjName(data: any): Array<model.ProjNameAutofill>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class getAutoProjectNameService extends GCPL.Service.BaseService implements IgetAutoProjectNameService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ProjectNameAUtofill";
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

        GetAutProjName(data: any): Array<model.ProjNameAutofill> {
            let list = Array<model.ProjNameAutofill>();
            for (let item of data) {
                list.push({
                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("getAutoProjectNameService", getAutoProjectNameService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IStateddPService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetStateName(data: any): Array<model.StateddlModel>;
    }
    export class StateddPService extends GCPL.Service.BaseService implements IStateddPService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"StateDD"}`;
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

        GetStateName(data: any): Array<model.StateddlModel> {
            let list = Array<model.StateddlModel>();
            for (let item of data) {
                list.push({
                    StateID: item.StateID.toString(),
                    State: item.State,
                });
            }
            return list;
        }
    }

    app.AddService("StateddPService", StateddPService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadSourceddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadSource(data: any): Array<model.LeadSourceddModel>;
    }
    export class LeadSourceddService extends GCPL.Service.BaseService implements ILeadSourceddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadSourceDD"}`;
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

        GetLeadSource(data: any): Array<model.LeadSourceddModel> {
            let list = Array<model.LeadSourceddModel>();
            for (let item of data) {
                list.push({
                    LeadSourceID: item.LeadSourceID.toString(),
                    LeadSource: item.LeadSource,
                });
            }
            return list;
        }
    }

    app.AddService("LeadSourceddService", LeadSourceddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAllLeadReportService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAllLeadReportView(data: any): model.AllLeadReportViewModel;
    }
    export class AllLeadReportService extends GCPL.Service.BaseService implements IAllLeadReportService {
        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            //this.apiUrl = `${this.url}/${"FillCustomerList"}`;
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/AllLeadsReportView";
            var LeadID;

            if (data == undefined) {
                LeadID = "";
            }
            else {
                LeadID = data;
            }

            let config = {
                params: {
                    LeadID: LeadID
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetAllLeadReportView(data: any): model.AllLeadReportViewModel {

            let obj = new model.AllLeadReportViewModel();
            debugger;
            obj.LeadID = data.LeadID;
            obj.CustName = data.CustName;
            obj.CustEmail = data.CustEmail;
            obj.CustMobNo = data.CustMobNo;
            obj.CustPhnNo = data.CustPhnNo;
            obj.CustAddress = data.CustAddress;
            obj.ContName = data.ContName;
            obj.ContEmail = data.ContEmail;
            obj.ContMobNo = data.ContMobNo;
            obj.ContPhnNo = data.ContPhnNo;
            obj.ContAddress = data.ContAddress;
            obj.LeadModel = data.LeadModel;
            obj.PurchaseWithin = data.PurchaseWithin;
            obj.SpecifyMore = data.SpecifyMore;
            obj.Quantity = data.Quantity;
            obj.CreatedBy = data.CreatedBy;
            obj.CreatedDate = data.CreatedDate;
            obj.Source = data.Source;
            obj.Campaign = data.Campaign;
            obj.LeadCreationComments = data.LeadCreationComments;
            obj.ValidatedBy = data.ValidatedBy;
            obj.DateValidated = data.DateValidated;
            obj.ValidationComment = data.ValidationComment;
            obj.AllocatedTo = data.AllocatedTo;
            obj.AllocatedDate = data.AllocatedDate;
            obj.AssessmentDate = data.AssessmentDate;
            obj.Lessthan90days = data.Lessthan90days;
            obj.MetCustomer = data.MetCustomer;
            obj.AssessmentComments = data.AssessmentComments;
            obj.LeadStatus = data.LeadStatus;
            obj.ClosedBy = data.ClosedBy;
            obj.ClosedDate = data.ClosedDate;
            obj.ClosedComments = data.ClosedComments;
            obj.RefUserName = data.RefUserName;
            obj.OpportunityNo = data.OpportunityNo;
            obj.LeadOrigin = data.LeadOrigin;
            obj.ReturnUserID = data.ReturnUserID;
            obj.ReturnComment = data.ReturnComment;
            obj.ReturnUserName = data.ReturnUserName;
            obj.DateReturn = data.DateReturn;
            obj.ProjectName = data.ProjectName;
            obj.InvalidReasonID = data.InvalidReasonID;
            obj.DisqualificationReasonID = data.DisqualificationReasonID;
            return obj;
        }
    }
    app.AddService("AllLeadReportService", AllLeadReportService);
}
//validate list
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IValidateLeadInfoService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetValidateLead(data: any): model.ValidateLeadInfoModel;
        FindModel(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetModel(data: any): model.Modelno;
        FindProduct(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProduct(data: any): model.Product;



    }
    export class ValidateLeadInfoService extends GCPL.Service.BaseService implements IValidateLeadInfoService {
        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            //this.apiUrl = `${this.url}/${"FillCustomerList"}`;
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetDetailsToValidate";
            var LeadID;

            if (data == undefined) {
                LeadID = "";
            }
            else {
                LeadID = data;
            }

            let config = {
                params: {
                    LeadID: LeadID
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetValidateLead(data: any): model.ValidateLeadInfoModel {

            let obj = new model.ValidateLeadInfoModel();

            obj.RefUserID = data.RefUserID;
            obj.RefUserName = data.RefUser;
            obj.CustomerID = data.CustomerID;
            obj.LeadStatusId = data.LeadStatusId;
            obj.ContactID = data.ContactID;
            obj.ModelID = data.ModelID;
            obj.PurchaseTimelineID = data.PurchaseTimelineID;
            obj.Comments = data.Comments;
            obj.CompanyName = data.CompanyName;
            obj.MobileNo = data.MobileNo;
            obj.Email = data.Email;
            obj.Address1 = data.Address1;
            obj.Address2 = data.Address2;
            obj.DistrictID = data.DistrictID;
            obj.Pincode = data.Pincode;
            obj.City = data.City;
            obj.ContactName = data.ContactName;
            obj.ContactMobileNo = data.ContactMobileNo;
            obj.ContactEmail = data.ContactEmail;
            obj.DepartmentID = data.DepartmentID;
            obj.Department = data.Department;
            obj.FOPID = data.FOPID;
            obj.FOP = data.FOP;
            obj.StateID = data.StateID;
            obj.State = data.State;
            obj.CountryID = data.CountryID;
            obj.Country = data.Country;
            obj.District = data.District;
            obj.ContactDistrictID = data.ContactDistrictID;
            obj.ContactStateID = data.ContactStateID;
            obj.ContactCountryID = data.ContactCountryID;
            obj.ContactCity = data.ContactCity;
            obj.Address = data.Address;
            obj.ContactState = data.ContactState;
            obj.ContactDistrict = data.ContactDistrict;
            obj.CategoryID = data.CategoryID;
            obj.DivisionID = data.DivisionID;
            obj.ProductID = data.ProductID;
            obj.PhoneNo = data.PhoneNo;
            obj.Fax = data.Fax;
            obj.ContactPhoneNo = data.ContactPhoneNo;
            obj.SalesOfficeID = data.SalesOfficeID;
            obj.SalesOffice = data.SalesOffice;
            obj.LeadCategoryID = data.LeadCategoryID;
            obj.LeadSourceID = data.LeadSourceID;
            obj.IsNational = data.IsNational;
            obj.BusinessPartnerNo = data.BusinessPartnerNo;
            obj.SAPID = data.SAPID;
            obj.Quantity = data.Quantity;
            obj.LeadType = data.LeadType;
            obj.CampaignNameID = data.CampaignNameID;
            obj.CustomerRatingID = data.CustomerRatingID;
            obj.CustomerRating = data.CustomerRating;
            obj.ChannelID = data.ChannelID;
            obj.LeadID = data.LeadID;
            obj.IndustryDivisionID = data.IndustryDivisionID;
            obj.IndustrialSegmentID = data.IndustrialSegmentID;
            obj.UserID = data.UserID;
            obj.SalesAreaID = data.SalesAreaID;
            obj.Product = data.Product;
            obj.EmployeeCode = data.EmployeeCode;
            obj.PostalCode = data.PostalCode;
            obj.ConStateSAPID = data.ConStateSAPID;
            obj.ModelNo = data.ModelNo;
            obj.ProjectID = data.ProjectID;

            return obj
        }





        FindModel(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            var url = this.apiUrl + "/GetModelProduct";
            var ModelID;

            if (data == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data;
            }

            let config = {
                params: {
                    ModelID: data
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetModel(data: any): model.Modelno {
            debugger;
            let obj = new model.Modelno();

            obj.ModelNo = data;

            return obj;
        }

        FindProduct(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            var url = this.apiUrl + "/GetProduct";
            var ProductID;

            if (data == undefined) {
                ProductID = "";
            }
            else {
                ProductID = data;
            }

            let config = {
                params: {
                    ProductID: data
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetProduct(data: any): model.Product {
            debugger;
            let obj = new model.Product();

            obj.Product = data;

            return obj;
        }



    }
    app.AddService("ValidateLeadInfoService", ValidateLeadInfoService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICampaignAtofillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCampaignAutEmployee(data: any): Array<model.CampaignAutofillModel>;
        FilterCampaignAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class CampaignAtofillService extends GCPL.Service.BaseService implements ICampaignAtofillService {
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


        FilterCampaignAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CampaignAutofill";

            let config = {
                params: {
                    SearchText: data.term,

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetCampaignAutEmployee(data: any): Array<model.CampaignAutofillModel> {


            let list = Array<model.CampaignAutofillModel>();


            for (let item of data) {

                list.push({

                    CampaignID: item.CampaignID,
                    CampaignName: item.CampaignName
                   
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("CampaignAtofillService", CampaignAtofillService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserNameAtofillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutEmployee(data: any): Array<model.UserNameAutofillModel>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class UserNameAtofillService extends GCPL.Service.BaseService implements IUserNameAtofillService {
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
            var url = this.apiUrl + "/UserAUtofillDeligation";
            var UserID;
            var ManagerName;
            var RoleID;
            debugger;
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {

                UserID = data.UserID
            }

            if (data.term == undefined) {
                ManagerName = '';
            }
            else {

                ManagerName = data.term
            }

            if (data.RoleID == undefined) {
                RoleID = '';
            }
            else {
                RoleID = data.RoleID
            }
            let config = {
                params: {
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    ManagerName: ManagerName,
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                    
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutEmployee(data: any): Array<model.UserNameAutofillModel> {
            debugger;

            let list = Array<model.UserNameAutofillModel>();


            for (let item of data) {

                list.push({

                    userid: item.userid,
                    ManagerEmployeeCode: item.ManagerEmployeeCode,
                    ManagerName: item.ManagerName

                 
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("UserNameAtofillService", UserNameAtofillService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IModelwpddService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetModelName(data: any): Array<model.ModelDDwpModel>;
    }
    export class ModelwpddService extends GCPL.Service.BaseService implements IModelwpddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ModelwpDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var LeadType;

            if (data == undefined) {
                LeadType = "";
            }
            else {
                LeadType = data;
            }
            let config = {
                params: {
                    LeadType: LeadType
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetModelName(data: any): Array<model.ModelDDwpModel> {
            let list = Array<model.ModelDDwpModel>();
            for (let item of data) {
                list.push({
                    ModelID: item.ModelID.toString(),
                    ModelNo: item.ModelNo
                });
            }
            return list;
        }
    }

    app.AddService("ModelwpddService", ModelwpddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadsStatusCountService {




        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadsStatusCountGrid(data: any): model.LeadStatusModel;

    }
    export class LeadsStatusCountService extends GCPL.Service.BaseService implements ILeadsStatusCountService {
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
            var url = this.apiUrl + "LeadStatusCount";
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
            var LeadType;

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
            if (data.LeadType == undefined) {
                LeadType = '';
            }
            else {

                LeadType = data.LeadType
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
                    UserID1: UserID1,
                    LeadType: LeadType


                }
            };

            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadsStatusCountGrid(data: any): model.LeadStatusModel {
            console.log(data);
            let list = new model.LeadStatusModel();
            if (data == null || data == undefined) {
                list.Allocated = "";
                list.Deferred = "";
                list.Delayed = "";
                list.Inprocess = "";
                list.ActivityCreated = "";
                list.ActivityCompleted = "";
                list.Converted = "";

               
            } else {
                list.Allocated = data.Allocated;
                list.Deferred = data.Deferred;
                list.Delayed = data.Delayed;
                list.Inprocess = data.Inprocess;
                list.ActivityCreated = data.ActivityCreated;
                list.ActivityCompleted = data.ActivityCompleted;
                list.Converted = data.Converted;

            }
            return list;
        }


    }
    app.AddService("LeadsStatusCountService", LeadsStatusCountService);
}