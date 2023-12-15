//List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICreateLeadListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCreateLeadlist(data: any): Array<model.CreateLeadListModel>;

    }
    export class CreateLeadListService extends GCPL.Service.BaseService implements ICreateLeadListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;
            
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetCreateLeadList";
            var SearchInput;
            var StatusID;            
            
            

            if (data.SearchInput == undefined) {
                SearchInput = '';
            }
            else {
                SearchInput = data.SearchInput;

            }
            if (data.StatusID == undefined) {
                StatusID = '';
            }
            else {
                StatusID = data.StatusID;

            }

            
            let config = {
                params: {
                    SearchInput: SearchInput,
                    StatusID: StatusID,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCreateLeadlist(data: any): Array<model.CreateLeadListModel> {
            let list = Array<model.CreateLeadListModel>();
            
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
                    CampaignName: item.CampaignName                                 

                });
            }
            return list;
        }

    }
    app.AddService("CreateLeadListService", CreateLeadListService);
}

//LeadStatus dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadStatusddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadStatusName(data: any): Array<model.LeadStatusddlModel>;
    }
    export class LeadStatusddService extends GCPL.Service.BaseService implements ILeadStatusddService {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadStatusDD"}`;
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

        GetLeadStatusName(data: any): Array<model.LeadStatusddlModel> {
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

    app.AddService("LeadStatusddService", LeadStatusddService);
}

//lead validate list
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerViewService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerView(data: any): model.CustomerViewModel;
    }
    export class CustomerViewService extends GCPL.Service.BaseService implements ICustomerViewService {
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
            var url = this.apiUrl + "/GetLeadViewDetails";           
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
        GetCustomerView(data: any): model.CustomerViewModel {

            let obj = new model.CustomerViewModel();
            
            obj.CompanyName = data.CompanyName;
            obj.CustomerID = data.CustomerID;
            obj.BusinessPartnerNo = data.BusinessPartnerNo;
            obj.SalesOfficeID = data.SalesOfficeID;
            obj.SalesOffice = data.SalesOffice;
            obj.Email = data.Email;
            obj.MobileNo = data.MobileNo;
            obj.Address1 = data.Address1;
            obj.Address2 = data.Address2;
            obj.Pincode = data.Pincode;
            obj.PhoneNo = data.PhoneNo;
            obj.Fax = data.Fax;
            obj.DistrictID = data.DistrictID;
            obj.StateID = data.StateID;
            obj.CountryID = data.CountryID;
            obj.City = data.City;
            obj.ContactID = data.ContactID;
            obj.ContactName = data.ContactName;
            obj.SAPID = data.SAPID;
            obj.PostalCode = data.PostalCode;
            obj.ConEmail = data.ConEmail;
            obj.ConMobileNo = data.ConMobileNo;
            obj.Address = data.Address;
            obj.ConPhoneNo = data.ConPhoneNo;
            obj.ConDistrictID = data.ConDistrictID;
            obj.ConStateID = data.ConStateID;
            obj.ConCountryID = data.ConCountryID;
            obj.ConCity = data.ConCity;
            obj.Designation = data.Designation;
            obj.Department = data.Department;
            obj.DepartmentID = data.DepartmentID;
            obj.FOPID = data.FOPID;
            obj.FOP = data.FOP;
            obj.ModelNo = data.ModelNo;
            obj.Quantity = data.Quantity;
            obj.Title = data.Title;
            obj.Comments = data.Comments;
            obj.LeadCategory = data.LeadCategory;
            obj.LeadCategoryID = data.LeadCategoryID;
            obj.LeadID = data.LeadID;
            obj.CampaignName = data.CampaignName;
            obj.CreatedBy = data.CreatedBy;
            obj.CreateComment = data.CreateComment;
            obj.SourceID = data.SourceID;
            obj.WhenCreated = data.WhenCreated;
            obj.ValidatedBy = data.ValidatedBy;
            obj.ValidComment = data.ValidComment;
            obj.WhenValidated = data.WhenValidated;
            obj.Allocated = data.Allocated;
            obj.WhenAllocated = data.WhenAllocated;
            obj.AssessmentComment = data.AssessmentComment;
            obj.AssessmentDate = data.AssessmentDate;
            obj.Status = data.Status;
            obj.IsLess = ((data.IsLess == "True") ? "Yes" : "No");
            obj.IsMeet = ((data.IsMeet == "True") ? "Yes" : "No");
            obj.LeadSource = data.LeadSource;
            obj.ReturnUserID = data.ReturnUserID;
            obj.ReturnComment = data.ReturnComment;
            obj.ReturnUserName = data.ReturnUserName;
            obj.DateReturn = data.DateReturn;
            obj.ProjectName = data.ProjectName;
            return obj;
        }
    }
    app.AddService("CustomerViewService", CustomerViewService);
}

//customer validate list
//namespace GCPL.Service {
//    import app = GCPL.app;
//    import model = GCPL.Model;

//    export interface IContactViewService {
//        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
//        GetContactView(data: any): model.CustomerViewModel;
//    }
//    export class ContactViewService extends GCPL.Service.BaseService implements IContactViewService {
//        private apiUrl: string = "";
//        private Cookie: any = null;

//        static $inject = ["$http", "$q", "$cookieStore"];
//        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

//            super($http, $q);
//            //this.apiUrl = `${this.url}/${"FillCustomerList"}`;
//            this.apiUrl = `${this.url}`;
//            this.Cookie = _cookieStore;
//        }
//        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
//            var url = this.apiUrl + "/GetContactViewDetails";
//            var ContactID;

//            if (data == undefined) {
//                ContactID = "";
//            }
//            else {
//                ContactID = data;
//            }

//            let config = {
//                params: {
//                    ContactID: ContactID


//                }
//            };
//            console.log(config);
//            return this.ajaXUtility.Get({
//                Url: url,
//                Config: config
//            });
//        }
//        GetContactView(data: any): model.CustomerViewModel {

//            let obj = new model.CustomerViewModel();

//            obj.CompanyName = data.CompanyName;
//            obj.CustomerID = data.CustomerID;
//            obj.BusinessPartnerNo = data.BusinessPartnerNo;
//            obj.SalesOfficeID = data.SalesOfficeID;
//            obj.SalesOffice = data.SalesOffice;
//            obj.Email = data.Email;
//            obj.MobileNo = data.MobileNo;
//            obj.Address1 = data.Address1;
//            obj.Address2 = data.Address2;
//            obj.Pincode = data.Pincode;
//            obj.PhoneNo = data.PhoneNo;
//            obj.Fax = data.Fax;
//            obj.DistrictID = data.DistrictID;
//            obj.StateID = data.StateID;
//            obj.CountryID = data.CountryID;
//            obj.City = data.City;

//            return obj;
//        }
//    }
//    app.AddService("ContactViewService", ContactViewService);
//}