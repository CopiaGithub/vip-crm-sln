namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectDataService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectData(data: any): Array<model.ProjectDataInfoModel>;
    }
    export class ProjectDataService extends GCPL.Service.BaseService implements IProjectDataService {
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
            var url = this.apiUrl + "/GetProjectData";
            var ProjectID;

            if (data == undefined) {
                ProjectID = "";
            }
            else {
                ProjectID = data;
            }

            let config = {
                params: {
                    ProjectID: ProjectID
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetProjectData(data: any): Array<model.ProjectDataInfoModel> {
            let list = Array<model.ProjectDataInfoModel>();
            for (let item of data) {
                list.push({
                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName,
                    ProjectNo: item.ProjectNo,
                    ProjectTypeID: item.ProjectTypeID,
                    ProjectType: item.ProjectType,
                    ProjectStageID: item.ProjectStageID,
                    ProjectStage: item.ProjectStage,
                    Cost: item.Cost,
                    ProjectOwnershipID: item.ProjectOwnershipID,
                    ProjectOwnership: item.ProjectOwnership,
                    ProjectStartDate: item.ProjectStartDate,
                    CompletionDate: item.CompletionDate,
                    ProjectSourceID: item.ProjectSourceID,
                    ProjectSource: item.ProjectSource,
                    Comments: item.Comments,
                    ProjectIndustryID: item.ProjectIndustryID,
                    ProjectIndustry: item.ProjectIndustry,
                    CustProjectType: item.CustProjectType,
                    ProjectOwner: item.ProjectOwner,
                    ProjectManager: item.ProjectManager,
                    ProjectAssign: item.ProjectAssign,
                    ProjectManagerID: item.ProjectManagerID,
                    ProjectAssignID: item.ProjectAssignID,
                    ID: item.ID,
                    ZoneID: item.ZoneID
                });
            }
            return list;
        }
    }
    app.AddService("ProjectDataService", ProjectDataService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectCustomerListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectCustomerList(data: any): Array<model.ProjectCustomerModel>;

    }
    export class ProjectCustomerListService extends GCPL.Service.BaseService implements IProjectCustomerListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetProjectCustomerData";

            var ProjectID;

            if (data == undefined) {
                ProjectID = '';
            }
            else {
                ProjectID = data;

            }

            let config = {
                params: {
                    ProjectID: ProjectID

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetProjectCustomerList(data: any): Array<model.ProjectCustomerModel> {
            let list = Array<model.ProjectCustomerModel>();

            for (let item of data) {
                list.push({
                    ProjectID: item.ProjectID,
                    CustomerID: item.CustomerID,
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    CompanyName: item.CompanyName,
                    MobileNo: item.MobileNo,
                    Address1: item.Address1,
                    Address2: item.Address2,
                    State: item.State,
                    District: item.District,
                    City: item.City,
                    ProjectType: item.ProjectType,
                    ContactID: item.ContactID
                });
            }
            return list;
        }

    }
    app.AddService("ProjectCustomerListService", ProjectCustomerListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectContactCustomerListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectContactCustomerList(data: any): Array<model.ProjectContactCustomerModel>;

    }
    export class ProjectContactCustomerListService extends GCPL.Service.BaseService implements IProjectContactCustomerListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetProjectContactCustomer";

            var CustomerID;
            //var ContactID;

            if (data == undefined) {
                CustomerID = '';
            }
            else {
                CustomerID = data;

            }
            //if (data1 == undefined) {
            //    ContactID = '';
            //}
            //else {
            //    ContactID = data1;

            //}
            let config = {
                params: {
                    CustomerID: CustomerID
                    //ContactID: ContactID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetProjectContactCustomerList(data: any): Array<model.ProjectContactCustomerModel> {
            let list = Array<model.ProjectContactCustomerModel>();

            for (let item of data) {
                list.push({

                    ContactID: item.ContactID,
                    SAPID: item.SAPID,
                    ContactName: item.ContactName,
                    CustomerID: item.CustomerID,
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    MobileNo: item.MobileNo,
                    PhoneNo: item.PhoneNo,
                    Address: item.Address,
                    Email: item.Email,
                    Department: item.Department,
                    ProjectType: item.ProjectType
                });
            }
            return list;
        }

    }
    app.AddService("ProjectContactCustomerListService", ProjectContactCustomerListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectLeadCustomerDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadCustomerInfo(data: any): model.LeadCustomerListModel;

    }
    export class ProjectLeadCustomerDetailsService extends GCPL.Service.BaseService implements IProjectLeadCustomerDetailsService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        //static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data): ng.IPromise<Utility.Ajax.IResponse> {

            var url = this.apiUrl + "/GetProjLeadCustomerDetails";
            var CustomerID;

            if (data == undefined) {
                CustomerID = "";
            }
            else {
                CustomerID = data;
            }

            let config = {

                params: {

                    CustomerID: CustomerID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadCustomerInfo(data: any): model.LeadCustomerListModel {

            let obj = new model.LeadCustomerListModel;

            obj.CompanyName = data.CustomerName;
            obj.BusinessPartnerNo = data.BusinessPartnerNo;
            obj.Email = data.Email;
            obj.MobileNo = data.MobileNo;
            obj.PhoneNo = data.PhoneNo;
            obj.Fax = data.Fax;
            obj.SalesOfficeID = data.SalesOfficeID;
            obj.SalesOffice = data.SalesOffice;
            obj.Address1 = data.Address1;
            obj.Address2 = data.Address2;
            obj.CountryID = data.CountryID;
            obj.StateID = data.StateID;
            obj.DistrictID = data.DistrictID;
            obj.City = data.City;
            obj.Pincode = data.Pincode;
            obj.CustomerID = data.CustomerID;
            obj.CustomerRatingID = data.CustomerRatingID;

            return obj;
        }


    }
    app.AddService("ProjectLeadCustomerDetailsService", ProjectLeadCustomerDetailsService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjLeadContactDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadContactInfo(data: any): Array<model.ProjectContactDetailsListModel>;

    }
    export class ProjLeadContactDetailsService extends GCPL.Service.BaseService implements IProjLeadContactDetailsService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        //static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetProjLeadContactDetails";
            var CustomerID;

            if (data == undefined) {
                CustomerID = "";
            }
            else {
                CustomerID = data;
            }
            let config = {

                params: {

                    CustomerID: CustomerID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadContactInfo(data: any): Array<model.ProjectContactDetailsListModel> {

            let list = Array<model.ProjectContactDetailsListModel>();

            for (let item of data) {
                list.push({
                    ContactName: item.ContactName,
                    Email: item.Email,
                    MobileNo: item.MobileNo,
                    PhoneNo: item.PhoneNo,
                    Designation: item.Designation,
                    Department: item.Department,
                    FOP: item.FOP,
                    Address: item.Address,
                    Country: item.Country,
                    State: item.State,
                    District: item.District,
                    City: item.City,
                    PostalCode: item.PostalCode,
                    CustomerID: item.CustomerID,
                    ContactID: item.ContactID,
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    CustomerSAPID: item.CustomerSAPID
                });
            }
            return list;
        }
    }
    app.AddService("ProjLeadContactDetailsService", ProjLeadContactDetailsService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectCreateLeadListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCreateLeadlist(data: any): Array<model.ProjectCreateLeadListModel>;

    }
    export class ProjectCreateLeadListService extends GCPL.Service.BaseService implements IProjectCreateLeadListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetProjectCreateLeadList";
            let config = {
                params: {
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    ProjectID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCreateLeadlist(data: any): Array<model.ProjectCreateLeadListModel> {
            let list = Array<model.ProjectCreateLeadListModel>();
            for (let item of data) {
                list.push({
                    CompanyName: item.CompanyName,
                    WhenEntered: item.WhenEntered,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    Title: item.Title,
                    Status: item.Status,
                    FirstName: item.FirstName,
                    MobileNo: item.MobileNo,
                    LeadID: item.LeadID,
                    CustomerID: item.CustomerID,
                    ContactID: item.ContactID,
                    LeadSource: item.LeadSource,
                    Quantity: item.Quantity,
                    Channel: item.Channel,
                    RefEmp: item.RefEmp,
                    CampaignName: item.CampaignName,
                    ProjectName: item.ProjectName,
                    ProjectNo: item.ProjectNo,
                    Allocated: item.Allocated,
                    ProjectType: item.ProjectType
                });
            }
            return list;
        }
    }
    app.AddService("ProjectCreateLeadListService", ProjectCreateLeadListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectActivityListService {
        FindAct(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserActList(data: any): Array<model.ProjectActlistModel>;

    }
    export class ProjectActivityListService extends GCPL.Service.BaseService implements IProjectActivityListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }
        FindAct(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetProjectActivityList";
            let config = {
                params: {
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    ProjectID: data.ProjectID,
                    ProjectStartDate: data.ProjectStartDate,
                    CompletionDate: data.CompletionDate
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetUserActList(data: any): Array<model.ProjectActlistModel> {
            debugger;
            let list = Array<model.ProjectActlistModel>();
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
                    StartDate: item.StartDate.split(' ')[0], 
                    EndDate: item.EndDate,
                    ActivityNumber: item.ActivityNumber,
                    ProjectID: item.ProjectID,
                    ProjectStartDate: item.ProjectStartDate,
                    CompletionDate: item.CompletionDate,
                    SalesRep: item.SalesRep
                });
            }
            return list;
        }
    }
    app.AddService("ProjectActivityListService", ProjectActivityListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectInsertService {
        PostLead(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class ProjectInsertService extends GCPL.Service.BaseService implements IProjectInsertService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"ProjectInsertLeadDetails"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLead(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("ProjectInsertService", ProjectInsertService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectInsertServicenew {
        PostLead(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class ProjectInsertServicenew extends GCPL.Service.BaseService implements IProjectInsertServicenew {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"NewProjectInsertLeadDetails"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLead(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("ProjectInsertServicenew", ProjectInsertServicenew);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectInsertNewContact {
        PostNewPromotorContact(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class ProjectInsertNewContact extends GCPL.Service.BaseService implements IProjectInsertNewContact {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"PromotorNewContactInsert"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostNewPromotorContact(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("ProjectInsertNewContact", ProjectInsertNewContact);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectInsertCustomerService {
        PostCustomer(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class ProjectInsertCustomerService extends GCPL.Service.BaseService implements IProjectInsertCustomerService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"ProjectInsertCustomerMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCustomer(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("ProjectInsertCustomerService", ProjectInsertCustomerService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteContactService {
        Find(data: any, data1: any): ng.IPromise<Utility.Ajax.IResponse>;
        postContactDelete(data: any): void;
    }
    export class DeleteContactService extends GCPL.Service.BaseService implements IDeleteContactService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteProjectContact"}`;
        }
        Find(data: any, data1: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    ContactID: data,
                    ProjectID: data1
                }
            };
            return this.ajaXUtility.Post({
                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postContactDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });
        }
    }

    app.AddService("DeleteContactService", DeleteContactService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectLeadCustomerGeService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerDetails(data: any): Array<model.GetProjectCustomerModel>;

    }
    export class ProjectLeadCustomerGeService extends GCPL.Service.BaseService implements IProjectLeadCustomerGeService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        //static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetProjectCustomerDataList";
            var CustomerName;
            var MobileNo;
            var Pincode;
            debugger
            if (data.CompanyName == undefined) {
                CustomerName = '';
            }
            else {

                CustomerName = data.CompanyName;
            }
            if (data.MobileNo == undefined) {
                MobileNo = '';
            }
            else {

                MobileNo = data.MobileNo;
            }
            if (data.Pincode == undefined) {
                Pincode = '';
            }
            else {

                Pincode = data.Pincode;
            }
            let config = {

                params: {

                    CustomerName: CustomerName,
                    MobileNo: MobileNo,
                    Pincode: Pincode
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCustomerDetails(data: any): Array<model.ProjCustomerListModel> {
            debugger;
            let list = Array<model.ProjCustomerListModel>();

            for (let item of data) {
                list.push({
                    CustomerID: item.CustomerID,
                    CompanyName: item.CompanyName,
                    IsNational: ((item.IsNational == "True") ? "Yes" : "No"),
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    MobileNo: item.MobileNo,
                    Email: item.Email,
                    District: item.District,
                    SalesOffice: item.SalesOffice,
                    SalesArea: item.SalesArea,
                    Status: ((item.Status == "True") ? "Active" : "Inactive"),
                    PinCode: item.PinCode,
                    DistrictID: item.DistrictID,
                    CustAddress: item.CustAddress

                });
            }
            return list;
        }
    }
    app.AddService("ProjectLeadCustomerGeService", ProjectLeadCustomerGeService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteProjectCustomerService {
        Find(data: any, data1: any): ng.IPromise<Utility.Ajax.IResponse>;
        PostCustomerDelete(data: any): void;
    }
    export class DeleteProjectCustomerService extends GCPL.Service.BaseService implements IDeleteProjectCustomerService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteProjectCustomer"}`;
        }
        Find(data: any, data1: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    CustomerID: data,
                    ProjectID: data1
                }
            };
            return this.ajaXUtility.Post({
                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        PostCustomerDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });
        }
    }

    app.AddService("DeleteProjectCustomerService", DeleteProjectCustomerService);
}