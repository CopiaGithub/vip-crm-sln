//LeadSource depends on Channel
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadSourceDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadSourceDetails(data: any): Array<model.LeadSourceDetailsModel>;
    }
    export class LeadSourceDetailsService extends GCPL.Service.BaseService implements ILeadSourceDetailsService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadSourceddl"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ChannelID;
            if (data == undefined) {
                ChannelID = "";
            }
            else {
                ChannelID = data;
            }
            let config = {
                params: {
                    ChannelID: ChannelID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetLeadSourceDetails(data: any): Array<model.LeadSourceDetailsModel> {
            let list = Array<model.LeadSourceDetailsModel>();
            for (let item of data) {
                list.push({
                    LeadSourceID: item.LeadSourceID.toString(),
                    LeadSource: item.LeadSource,
                });
            }
            return list;
        }
    }

    app.AddService("LeadSourceDetailsService", LeadSourceDetailsService);
}
//referred list
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IValidateReferredEmployeeService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetReferredEmp(data: any): model.ReferredEmpModel;
    }
    export class ValidateReferredEmployeeService extends GCPL.Service.BaseService implements IValidateReferredEmployeeService {
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
            var url = this.apiUrl + "/ValidateReferedEmployee";
            var RefUserName;
            var RefUserID;

            if (data.RefUserName == undefined) {
                RefUserName = '';
            }
            else {
                RefUserName = data.RefUserName;
            }
            if (data.RefUserID == undefined) {
                RefUserID = '';
            }
            else {
                RefUserID = data.RefUserID;
            }

            let config = {
                params: {
                    RefUserName: RefUserName,
                    RefUserID: RefUserID
                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetReferredEmp(data: any): model.ReferredEmpModel {

            let obj = new model.ReferredEmpModel();

            obj.UserID = data.UserID;

            return obj;
        }
    }
    app.AddService("ValidateReferredEmployeeService", ValidateReferredEmployeeService);
}

//Campaign depends on LeadSource
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICampaignDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCampaignDetails(data: any): Array<model.CampaignDetailsModel>;
    }
    export class CampaignDetailsService extends GCPL.Service.BaseService implements ICampaignDetailsService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CampaignDetails"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var LeadSourceID;
            if (data == undefined) {
                LeadSourceID = "";
            }
            else {
                LeadSourceID = data;
            }
            let config = {
                params: {
                    LeadSourceID: LeadSourceID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetCampaignDetails(data: any): Array<model.CampaignDetailsModel> {
            let list = Array<model.CampaignDetailsModel>();
            for (let item of data) {
                list.push({
                    CampaignID: item.CampaignID.toString(),
                    CampaignName: item.CampaignName,
                });
            }
            return list;
        }
    }

    app.AddService("CampaignDetailsService", CampaignDetailsService);
}

/// autofill productDesc

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductDescAutoFillService {
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoProductDesc(data: any): Array<model.ProductAutoModel>;
        FindProduct(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProduct(data: any): Array<model.ProductModel>;
    }
    export class ProductDescAutoFillService extends GCPL.Service.BaseService implements IProductDescAutoFillService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillProductDescription"}`;
            this.Cookie = _cookieStore;
        }
        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/FillProductDescription";

            let config = {
                params: {
                    Input: data.term

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAutoProductDesc(data: any): Array<model.ProductAutoModel> {

            let list = Array<model.ProductAutoModel>();


            for (let item of data) {
                list.push({
                    ProductID: item.ProductID.toString(),
                    Product: item.Product,
                    ProductDesc: item.ProductDesc

                });
            }
            return list;
        }

        FindProduct(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/FindProduct";

            let config = {
                params: {
                    Input: data.term

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetProduct(data: any): Array<model.ProductModel> {

            let list = Array<model.ProductModel>();


            for (let item of data) {
                list.push({
                    ProductID: item.ProductID.toString(),
                    Product: item.Product

                });
            }
            return list;
        }

    }
    //inject service
    app.AddService("ProductDescAutoFillService", ProductDescAutoFillService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertItemDetailsService {
        PostItem(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertItemDetailsService extends GCPL.Service.BaseService implements IInsertItemDetailsService {


        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);


            this.apiUrl = `${this.url}/${"InsertItemDetails"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostItem(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertItemDetailsService", InsertItemDetailsService);
}


//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadDetailsService {
        PostLead(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertLeadDetailsService extends GCPL.Service.BaseService implements IInsertLeadDetailsService
    {
        

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            
            this.apiUrl = `${this.url}/${"InsertLeadDetails"}`;
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

    app.AddService("InsertLeadDetailsService", InsertLeadDetailsService);
}

//PurchaseTimeline dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IPurchaseTimelineService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetPurchaseTimeline(data: any): Array<model.PurchaseTimelineModel>;
    }
    export class PurchaseTimelineService extends GCPL.Service.BaseService implements IPurchaseTimelineService{

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"PurchaseTimelineDD"}`;
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

        GetPurchaseTimeline(data: any): Array<model.PurchaseTimelineModel> {
            let list = Array<model.PurchaseTimelineModel>();
            for (let item of data) {
                list.push({
                    PurchaseTimelineID: item.PurchaseTimelineID.toString(),
                    Title: item.Title,
                });
            }
            return list;
        }
    }

    app.AddService("PurchaseTimelineService", PurchaseTimelineService);
}

//GetCustomerDetails

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadCustomerDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadCustomerInfo(data: any): model.LeadCustomerListModel;

    }
    export class LeadCustomerDetailsService extends GCPL.Service.BaseService implements ILeadCustomerDetailsService {

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
            
            var url = this.apiUrl + "/GetLeadCustomerDetails";
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
    app.AddService("LeadCustomerDetailsService", LeadCustomerDetailsService);
}
//GetContactDetails
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadContactDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadContactInfo(data: any): Array<model.ContactDetailsListModel>;

    }
    export class LeadContactDetailsService extends GCPL.Service.BaseService implements ILeadContactDetailsService {

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
            var url = this.apiUrl + "/GetLeadContactDetails";
            var CustomerID;
            debugger
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
        GetLeadContactInfo(data: any): Array<model.ContactDetailsListModel> {
            debugger;
            let list = Array<model.ContactDetailsListModel>();

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
                    BusinessPartnerNo: item.BusinessPartnerNo


                });
            }
            return list;
        }
    }
    app.AddService("LeadContactDetailsService", LeadContactDetailsService);
}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IContactInfoService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetContactName(data: any): Array<model.ContactInfoModel>;
    }
    export class ContactInfoService extends GCPL.Service.BaseService implements IContactInfoService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            var url = this.apiUrl + "/ContactDetails";
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
        GetContactName(data: any): Array<model.ContactInfoModel> {
            let list = Array<model.ContactInfoModel>();
            for (let item of data) {
                list.push({
                    ContactID: item.ContactID,
                    ContactName: item.ContactName
                });
            }
            return list;
        }
    }
    app.AddService("ContactInfoService", ContactInfoService);
}

//GetLeadDeatil
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadInfo(data: any): Array<model.LeadDetailsListModel>;

    }
    export class LeadDetailsService extends GCPL.Service.BaseService implements ILeadDetailsService {

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
            var url = this.apiUrl + "/GetExistingLeadDetails";
            var CustomerID;
            debugger
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
        GetLeadInfo(data: any): Array<model.LeadDetailsListModel> {
            debugger;
            let list = Array<model.LeadDetailsListModel>();

            for (let item of data) {
                list.push({

                    CompanyName: item.CompanyName,
                    Email: item.Email,
                    MobileNo: item.MobileNo,
                                     
                    LeadID: item.LeadID,
                    ModelNo: item.ModelNo,
                    Status: item.Status,
                    AllocatedTO :item.AllocatedTO,
                    LeadCreationDate: item.LeadCreationDate,
                    CustomerID: item.CustomerID
                   
                   
                });
            }
            return list;
        }
    }
    app.AddService("LeadDetailsService", LeadDetailsService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadCustomerService {
        PostCustomer(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertLeadCustomerService extends GCPL.Service.BaseService implements IInsertLeadCustomerService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertLeadCustomerMaster"}`;
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

    app.AddService("InsertLeadCustomerService", InsertLeadCustomerService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadCustomerGetDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerDetails(data: any): Array<model.CustomerListModel>;

    }
    export class LeadCustomerGetDetailsService extends GCPL.Service.BaseService implements ILeadCustomerGetDetailsService {

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
            var url = this.apiUrl + "/GetCustomerList";
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
        GetCustomerDetails(data: any): Array<model.CustomerListModel> {
            debugger;
            let list = Array<model.CustomerListModel>();

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
                    DistrictID: item.DistrictID
                   
                });
            }
            return list;
        }
    }
    app.AddService("LeadCustomerGetDetailsService", LeadCustomerGetDetailsService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IGetCustomerNewDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadCustomerNewInfo(data: any): model.GetCustomerNewModel;

    }
    export class GetCustomerNewDetailsService extends GCPL.Service.BaseService implements IGetCustomerNewDetailsService {

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
            
            var url = this.apiUrl + "/GetFillCustomer";
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
        GetLeadCustomerNewInfo(data: any): model.GetCustomerNewModel {
            debugger;
            let obj = new model.GetCustomerNewModel;

            obj.CompanyName = data.CompanyName;
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
            obj.CustomerID = data.CustomerID;
            obj.IsNational = data.IsNational;
            obj.Area = data.Area;

           

            return obj;
        }


    }
    app.AddService("GetCustomerNewDetailsService", GetCustomerNewDetailsService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadCustomerGetDetails1Service {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerDetails(data: any): Array<model.GetCustomerModel>;

    }
    export class LeadCustomerGetDetails1Service extends GCPL.Service.BaseService implements ILeadCustomerGetDetails1Service {

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
            var url = this.apiUrl + "/GetCustomerList";
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
        GetCustomerDetails(data: any): Array<model.CustomerListModel> {
            debugger;
            let list = Array<model.CustomerListModel>();

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
                    DistrictID: item.DistrictID

                });
            }
            return list;
        }
    }
    app.AddService("LeadCustomerGetDetails1Service", LeadCustomerGetDetails1Service);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadCategotyWPDDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadCategoryddl(data: any): Array<model.LeadCatergoryWPModel>;
    }
    export class LeadCategotyWPDDService extends GCPL.Service.BaseService implements ILeadCategotyWPDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadCategoryWPDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var LeadTypeID;
            if (data == undefined) {
                LeadTypeID = "";
            }
            else {
                LeadTypeID = data;
            }
            let config = {
                params: {
                    LeadTypeID: LeadTypeID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetLeadCategoryddl(data: any): Array<model.LeadCatergoryWPModel> {
            let list = Array<model.LeadCatergoryWPModel>();
            for (let item of data) {
                list.push({
                    LeadCategoryID: item.LeadCategoryID.toString(),
                    LeadCategory: item.LeadCategory,
                });
            }
            return list;
        }
    }

    app.AddService("LeadCategotyWPDDService", LeadCategotyWPDDService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadTypeProductService1 {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadTypeProduct(data: any): Array<model.ModelDDwpModel>;
    }
    export class LeadTypeProductService1 extends GCPL.Service.BaseService implements ILeadTypeProductService1 {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadTypeProductModel1"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            var LeadType;
            var ProductID;
            var DivisionID;
            if (data.LeadType == undefined) {
                LeadType = "";
            }
            else {
                LeadType = data.LeadType;
            }

            if (data.ProductID == undefined) {
                ProductID = "";
            }
            else {
                ProductID = data.ProductID;
            }


            let config = {
                params: {
                    LeadType: LeadType,
                    ProductID: ProductID

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetLeadTypeProduct(data: any): Array<model.ModelDDwpModel> {
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

    app.AddService("LeadTypeProductService1", LeadTypeProductService1);
}

