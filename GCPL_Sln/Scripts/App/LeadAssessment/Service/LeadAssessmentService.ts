namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadAssessmentService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadAssessment(data: any): model.LeadAssessmentInfoModel;
        FindModel(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetModel(data: any): model.Modelno;
        FindProduct(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProduct(data: any): model.Product;



    }
    export class LeadAssessmentService extends GCPL.Service.BaseService implements ILeadAssessmentService {
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
            var url = this.apiUrl + "/GetDetailsToAssessment";
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

        GetLeadAssessment(data: any): model.LeadAssessmentInfoModel {

            let obj = new model.LeadAssessmentInfoModel();

            obj.RefUserID = data.RefUserID;
            obj.RefUser = data.RefUser; 
            obj.CustomerID = data.CustomerID;
            obj.LeadStatusId = data.LeadStatusId;
            obj.SalesStage = data.SalesStage;
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
            obj.Description = data.Description;
            obj.Notes = data.Notes;

            return obj
        }


        FindModel(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            
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
            
            let obj = new model.Modelno();

            obj.ModelNo = data;

            return obj;
        }

        FindProduct(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            
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
            
            let obj = new model.Product();

            obj.Product = data;

            return obj;
        }



    }
    app.AddService("LeadAssessmentService", LeadAssessmentService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICrtAssessmtServiceService {
        PostCrtAssessmt(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class CrtAssessmtServiceService extends GCPL.Service.BaseService implements ICrtAssessmtServiceService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateOpportunityAssessment"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCrtAssessmt(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("CrtAssessmtServiceService", CrtAssessmtServiceService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadReturnService {
        PostReturn(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class LeadReturnService extends GCPL.Service.BaseService implements ILeadReturnService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"LeadAssessmentReturn"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostReturn(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("LeadReturnService", LeadReturnService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUpdateLeadDataService {

        PostUpdateLeadData(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class UpdateLeadDataService extends GCPL.Service.BaseService implements IUpdateLeadDataService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"UpdateLeadData"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostUpdateLeadData(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("UpdateLeadDataService", UpdateLeadDataService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadActivityService {
 
        PostInsertLeadActivity(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertLeadActivityService extends GCPL.Service.BaseService implements IInsertLeadActivityService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateLeadActivity"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostInsertLeadActivity(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertLeadActivityService", InsertLeadActivityService);
}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadQuestionsService {

        PostInsertLeadQuestions(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertLeadQuestionsService extends GCPL.Service.BaseService implements IInsertLeadQuestionsService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateLeadQuesionnaire"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostInsertLeadQuestions(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertLeadQuestionsService", InsertLeadQuestionsService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadOpportunity {

        PostLeadOpp(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class LeadOpportunity extends GCPL.Service.BaseService implements ILeadOpportunity {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateLeadOpp"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLeadOpp(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("LeadOpportunity", LeadOpportunity);
}

//Lead Activity List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadActivityListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadActivityList(data: any): Array<model.LeadActivityModel>;

    }
    export class LeadActivityListService extends GCPL.Service.BaseService implements ILeadActivityListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetLeadActivityList";
            
            
            let config = {
                params: {
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    LeadID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadActivityList(data: any): Array<model.LeadActivityModel> {
            let list = Array<model.LeadActivityModel>();

            for (let item of data) {
                list.push({
                    ID: item.ID,
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
                    ActivityNumber: item.ActivityNumber
                });
            }
            return list;
        }

    }
    app.AddService("LeadActivityListService", LeadActivityListService);
}
//Lead Ques List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadQueAnsService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadQueAns(data: any): Array<model.LeadQueAnsModel>;

    }
    export class LeadQueAnsService extends GCPL.Service.BaseService implements ILeadQueAnsService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetLeadQueAnsDetails";


            let config = {
                params: {
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    LeadID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadQueAns(data: any): Array<model.LeadQueAnsModel> {
            let list = Array<model.LeadQueAnsModel>();

            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    LeadID: item.LeadID,
                    OpportunityID: item.OpportunityID,
                    OpportunityStageID: item.OpportunityStageID,
                    QueID: item.QueID,
                    Question: item.Question,
                    AnsID: item.AnsID,
                    Answer: item.Answer,
                    LeadSource: item.LeadSource
                });
            }
            return list;
        }

    }
    app.AddService("LeadQueAnsService", LeadQueAnsService);
}

//Lead Item List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadItemListService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadItemList(data: any): Array<model.LeadItemModel>;

    }
    export class LeadItemListService extends GCPL.Service.BaseService implements ILeadItemListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ItemList";


            let config = {
                params: {
                    LeadID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadItemList(data: any): Array<model.LeadItemModel> {
            let list = Array<model.LeadItemModel>();

            for (let item of data) {
                list.push({
                    ItemID: item.ItemID,
                    Status: item.Status,
                    Quantity: item.Quantity,
                    ProductID: item.ProductID,
                    ProductDesc: item.ProductDesc,
                    LeadID: item.LeadID
                });
            }
            return list;
        }

    }
    app.AddService("LeadItemListService", LeadItemListService);
}


//Lead Mode
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IModeActivityService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetModeActivity(data: any): Array<model.ModeActivityModel>;
    }
    export class ModeActivityService extends GCPL.Service.BaseService implements IModeActivityService {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ActCatddl"}`;
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

        GetModeActivity(data: any): Array<model.ModeActivityModel> {
            let list = Array<model.ModeActivityModel>();
            for (let item of data) {
                list.push({
                    ModeID: item.ModeID.toString(),
                    Mode: item.Mode,
                });
            }
            return list;
        }
    }

    app.AddService("ModeActivityService", ModeActivityService);
}

//Lead Activity Status
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadActivityStatusDDservice {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        LeadActivityStatus(data: any): Array<model.LeadActivityStatusModel>;
    }
    export class LeadActivityStatusDDservice extends GCPL.Service.BaseService implements ILeadActivityStatusDDservice {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"GetActStatus"}`;
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

        LeadActivityStatus(data: any): Array<model.LeadActivityStatusModel> {
            let list = Array<model.LeadActivityStatusModel>();
            for (let item of data) {
                list.push({
                    StatusID: item.StatusID.toString(),
                    Status: item.Status,
                });
            }
            return list;
        }
    }

    app.AddService("LeadActivityStatusDDservice", LeadActivityStatusDDservice);
}

//Lead Activit Purpose
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadActivityPurposeDDservice {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadActivityPurpose(data: any): Array<model.LeadActivityPurposeModel>;
    }
    export class LeadActivityPurposeDDservice extends GCPL.Service.BaseService implements ILeadActivityPurposeDDservice {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"GetActPurpose"}`;
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

        GetLeadActivityPurpose(data: any): Array<model.LeadActivityPurposeModel> {
            let list = Array<model.LeadActivityPurposeModel>();
            for (let item of data) {
                list.push({
                    Description: item.Description,
                    LeadSourceID: item.LeadSourceID,
                    LeadSource: item.LeadSource,
                });
            }
            return list;
        }
    }

    app.AddService("LeadActivityPurposeDDservice", LeadActivityPurposeDDservice);
}

//Lead Activity Location
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadActivityLocationDDservice {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadActivityLocation(data: any): Array<model.LeadActivityLocationModel>;
    }
    export class LeadActivityLocationDDservice extends GCPL.Service.BaseService implements ILeadActivityLocationDDservice {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"GetActLocation"}`;
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

        GetLeadActivityLocation(data: any): Array<model.LeadActivityLocationModel> {
            let list = Array<model.LeadActivityLocationModel>();
            for (let item of data) {
                list.push({
                    LocationID: item.LocationID.toString(),
                    Location: item.Location,
                });
            }
            return list;
        }
    }

    app.AddService("LeadActivityLocationDDservice", LeadActivityLocationDDservice);
}

//Lead Activity Ans1 Service

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IQAns1Service {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAns1(data: any): Array<model.Ans1DDLModel>;
    }
    export class QAns1Service extends GCPL.Service.BaseService implements IQAns1Service {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"GetActivityAns1"}`;
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

        GetAns1(data: any): Array<model.Ans1DDLModel> {
            let list = Array<model.Ans1DDLModel>();
            for (let item of data) {
                list.push({
                    AnsID: item.AnsID.toString(),
                    QueID: item.QueID,
                    Answer: item.Answer,
                });
            }
            return list;
        }
    }

    app.AddService("QAns1Service", QAns1Service);
}

//Lead Activity Ans2 Service

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IQAns2Service {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAns2(data: any): Array<model.Ans2DDLModel>;
    }
    export class QAns2Service extends GCPL.Service.BaseService implements IQAns2Service {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"GetActivityAns2"}`;
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

        GetAns2(data: any): Array<model.Ans2DDLModel> {
            let list = Array<model.Ans2DDLModel>();
            for (let item of data) {
                list.push({
                    AnsID: item.AnsID.toString(),
                    QueID: item.QueID,
                    Answer: item.Answer,
                });
            }
            return list;
        }
    }

    app.AddService("QAns2Service", QAns2Service);
}

//Lead Activity Ans3 Service

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IQAns3Service {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAns3(data: any): Array<model.Ans3DDLModel>;
    }
    export class QAns3Service extends GCPL.Service.BaseService implements IQAns3Service {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"GetActivityAns3"}`;
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

        GetAns3(data: any): Array<model.Ans3DDLModel> {
            let list = Array<model.Ans3DDLModel>();
            for (let item of data) {
                list.push({
                    AnsID: item.AnsID.toString(),
                    QueID: item.QueID,
                    Answer: item.Answer,
                });
            }
            return list;
        }
    }

    app.AddService("QAns3Service", QAns3Service);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEditActivityList {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditActivityModel;
    }
    export class EditActivityList extends GCPL.Service.BaseService implements IEditActivityList {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"EditLeadActivityList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ActivityNumber;
            
            if (data == undefined) {
                ActivityNumber = "";
            }
            else {
                ActivityNumber = data;
            }

            let config = {
                params: {
                    ActivityNumber: ActivityNumber
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetEdit(data: any): model.EditActivityModel {
            
            let obj = new model.EditActivityModel();

            
               // obj.ActivityNumber = data.ActivityNumber
               // obj.CustomerID = data.CustomerID,
               // obj.CompanyName = data.CompanyName,
               // obj.CustomerSAPID = data.CustomerSAPID,
               // obj.ContactID = data.ContactID,
               // obj.ContactName = data.ContactName
               // obj.ContactSAPID = data.ContactSAPID,
               // obj.note = data.Note,
               // obj.ActivityID = data.ActivityID,
               // obj.ActivityName = data.ActivityName,
               // obj.ActivityDate = data.ActivityDate,
               // obj.ActivityStatus = data.Status,
               // obj.IsActive = data.IsActive,
               // obj.purid = data.Purpose,
               // obj.cate = data.Mode,
               // obj.loc = data.Location,
               // obj.ReferenceType = data.ReferenceType,
               // obj.ReferenceLead = data.ReferenceLead,
               // obj.ReferenceOpportunity = data.ReferenceOpportunity,
               // obj.date = data.StartDate,
               //obj.EndDate = data.EndDate

                obj.ActivityNumber = data.ActivityNumber
                obj.CustomerID = data.CustomerID,
                obj.CompanyName = data.CompanyName,
                obj.CustomerSAPID = data.CustomerSAPID,
                obj.ContactID = data.ContactID,
                obj.ContactName = data.ContactName,
                obj.ContactSAPID = data.ContactSAPID,
                obj.ActivityNote = data.Note,
                obj.ActivityID = data.ActivityID,
                obj.ActivityName = data.ActivityName,
                obj.ActivityDate = data.ActivityDate,
                obj.ActivityStatus = data.Status,
                obj.IsActive = data.IsActive,
                obj.ActivityPurpose = data.Purpose,
                obj.ActivityCategory = data.Mode,
                obj.LocationID = data.Location,
                obj.ReferenceType = data.ReferenceType,
                obj.ReferenceLead = data.ReferenceLead,
                obj.ReferenceOpportunity = data.ReferenceOpportunity,
                obj.date = data.StartDate,
                obj.EndDate = data.EndDate
          
            return obj;
        }
    }
    app.AddService("EditActivityList", EditActivityList);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICreateInSAPLeadActivityService {

        PostCreateInSAPLeadActivity(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class CreateInSAPLeadActivityService extends GCPL.Service.BaseService implements ICreateInSAPLeadActivityService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateInSAPLeadActivity"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCreateInSAPLeadActivity(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("CreateInSAPLeadActivityService", CreateInSAPLeadActivityService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadToOppSAPService {
        PostLeadToOppSAP(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertLeadToOppSAPService extends GCPL.Service.BaseService implements IInsertLeadToOppSAPService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateLeadToOppInSAP"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLeadToOppSAP(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertLeadToOppSAPService", InsertLeadToOppSAPService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDisqualificationReasonDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDisqualifiedName(data: any): Array<model.GetDisqualificationReasonDDModel>;
    }
    export class DisqualificationReasonDDService extends GCPL.Service.BaseService implements IDisqualificationReasonDDService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"GetLeadDisqualifiedReasons"}`;
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

        GetDisqualifiedName(data: any): Array<model.GetDisqualificationReasonDDModel> {
            let list = Array<model.GetDisqualificationReasonDDModel>();
            for (let item of data) {
                list.push({
                    DisqualificationID: item.DisqualificationID,
                    Description: item.Description
                });
            }
            return list;
        }
    }

    app.AddService("DisqualificationReasonDDService", DisqualificationReasonDDService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadStageDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetStage(data: any): Array<model.SalesStageDDModel>;
    }
    export class LeadStageDDService extends GCPL.Service.BaseService implements ILeadStageDDService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SalesStageDD"}`;

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

        GetStage(data: any): Array<model.SalesStageDDModel> {
            let list = Array<model.SalesStageDDModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    Stage: item.Stage
                });
            }
            return list;
        }
    }

    app.AddService("LeadStageDDService", LeadStageDDService);
}



namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadStatusDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetStage(data: any): Array<model.LeadStatusDDModel>;
    }
    export class LeadStatusDDService extends GCPL.Service.BaseService implements ILeadStatusDDService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadStatus"}`;

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

        GetStage(data: any): Array<model.LeadStatusDDModel> {
            let list = Array<model.LeadStatusDDModel>();
            for (let item of data) {
                list.push({
                    LeadStatusID: item.LeadStatusID,
                    Status: item.Status
                });
            }
            return list;
        }
    }

    app.AddService("LeadStatusDDService", LeadStatusDDService);
}