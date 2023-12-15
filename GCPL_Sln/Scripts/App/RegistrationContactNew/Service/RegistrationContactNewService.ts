//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertRegistrationContactService {
        PostRegistrationContact(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertRegistrationContactService extends GCPL.Service.BaseService implements IInsertRegistrationContactService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertContactNew"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostRegistrationContact(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertRegistrationContactService", InsertRegistrationContactService);
}

//GetCustomerDetails

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IExistingCustomerDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerDetails(data: any): model.ExistingCustomerDetailsListModel;

    }
    export class ExistingCustomerDetailsService extends GCPL.Service.BaseService implements IExistingCustomerDetailsService {

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
            debugger;
            var url = this.apiUrl + "/GetCustomerDetail";
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
        GetCustomerDetails(data: any): model.ExistingCustomerDetailsListModel {
            debugger;
            let obj = new model.ExistingCustomerDetailsListModel;

            obj.CustomerID = data.CustomerID;
            obj.CustomerName = data.CustomerName;
            obj.Email = data.Email;
            obj.MobileNo = data.MobileNo;
            obj.PhoneNo = data.PhoneNo;
            obj.Fax = data.Fax;
            obj.Address1 = data.Address1;
            obj.Address2 = data.Address2;
            obj.CountryID = data.CountryID;
            obj.StateID = data.StateID;
            obj.DistrictID = data.DistrictID;
            obj.City = data.City;
            obj.PinCode = data.PinCode;
           

            return obj;
        }


    }
    app.AddService("ExistingCustomerDetailsService", ExistingCustomerDetailsService);
}

//GetContactDetails

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IExistingContactDetailsService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetContactDetails(data: any): model.ExistingContactDetailsListModel;

    }
    export class ExistingContactDetailsService extends GCPL.Service.BaseService implements IExistingContactDetailsService {

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
            var url = this.apiUrl + "/GetCon";
            var ContactID;
            debugger
            if (data == undefined) {
                ContactID = "";
            }
            else {
                ContactID = data;
            }
            let config = {

                params: {

                    ContactID: ContactID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetContactDetails(data: any): model.ExistingContactDetailsListModel {
            debugger;
            let obj = new model.ExistingContactDetailsListModel;

            obj.ContactName = data.ContactName;
            obj.ContactEmail = data.ContactEmail;
            obj.ContactMobileNo = data.ContactMobileNo;
            obj.ContactPhoneNo = data.ContactPhoneNo;
            obj.Designation = data.Designation;
            obj.DepartmentID = data.DepartmentID;
            obj.FOPID = data.FOPID;
            obj.Address = data.Address;
            obj.ContactCountryID = data.ContactCountryID;
            obj.ContactStateID = data.ContactStateID;
            obj.ContactDistrictID = data.ContactDistrictID;
            obj.ContactCity = data.ContactCity;
            obj.PostalCode = data.PostalCode;
            obj.CustomerID = data.CustomerID;
            obj.ContactID = data.ContactID;
            obj.IsActive = data.IsActive;
         
            return obj;
        }


    }
    app.AddService("ExistingContactDetailsService", ExistingContactDetailsService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IContactInfo1Service {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetContactName(data: any): Array<model.ContactInfo1Model>;
    }
    export class ContactInfo1Service extends GCPL.Service.BaseService implements IContactInfo1Service {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            var url = this.apiUrl + "/ContactDetails1";
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
        GetContactName(data: any): Array<model.ContactInfo1Model> {
            let list = Array<model.ContactInfo1Model>();
            for (let item of data) {
                list.push({
                    ContactID: item.ContactID,
                    ContactName: item.ContactName
                });
            }
            return list;
        }
    }
    app.AddService("ContactInfo1Service", ContactInfo1Service);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IRegistrationContactEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditRegistrationContactModel;
    }
    export class RegistrationContactEditService extends GCPL.Service.BaseService implements IRegistrationContactEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillRegistrationContact"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            var AppContactID;

            if (data == undefined) {
                AppContactID = "";
            }
            else {
                AppContactID = data;
            }

            let config = {
                params: {
                    AppContactID: AppContactID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditRegistrationContactModel {
            debugger;
            let obj = new model.EditRegistrationContactModel();

                      
                obj.AppContactID = data.AppContactID,
                obj.AppCustomerID = data.AppCustomerID,
              
                obj.CompanyName = data.CompanyName,
                obj.Email = data.Email,
                obj.MobileNo = data.MobileNo,
                obj.PhoneNo = data.PhoneNo,
                obj.Fax = data.Fax,
                obj.Address1 = data.Address1,
                obj.Address2 = data.Address2,
                    obj.CountryID = data.CountryID,
                    obj.StateID = data.StateID,
                obj.DistrictID = data.DistrictID,
                obj.City = data.City,
                obj.PinCode = data.PinCode,

             obj.ContactID = data.ContactID,
             obj.ContactName = data.ContactName,
             obj.CustomerID = data.CustomerID
            obj.ContactEmail = data.ContactEmail,
                obj.ContactMobileNo = data.ContactMobileNo,
                obj.ContactPhoneNo = data.ContactPhoneNo,
            obj.Designation = data.Designation,
            obj.DepartmentID = data.DepartmentID,
            obj.FOPID = data.FOPID,
            obj.Address = data.Address,
                 obj.ContactCountryID = data.ContactCountryID,
                 obj.ContactStateID = data.ContactStateID,
                 obj.ContactDistrictID = data.ContactDistrictID,
                 obj.ContactCity = data.ContactCity,
                obj.PostalCode = data.PostalCode,
                obj.Password = data.Password,
                obj.IsActive = data.IsActive
                                          
                          
            return obj;
        }
    }


    app.AddService("RegistrationContactEditService", RegistrationContactEditService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUpdateContactNewService {
        PostUpdateContact(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class UpdateContactNewService extends GCPL.Service.BaseService implements IUpdateContactNewService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"UpdateContactNew"}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostUpdateContact(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("UpdateContactNewService", UpdateContactNewService);
}
