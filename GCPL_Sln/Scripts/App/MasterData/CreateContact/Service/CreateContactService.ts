//Designation dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDesignationService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDesignationName(data: any): Array<model.DesignationddlModel>;
    }
    export class DesignationService extends GCPL.Service.BaseService implements IDesignationService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DesignationDD"}`;
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

        GetDesignationName(data: any): Array<model.DesignationddlModel> {
            let list = Array<model.DesignationddlModel>();
            for (let item of data) {
                list.push({
                    FOPID: item.FOPID.toString(),
                    FOP: item.FOP,
                });
            }
            return list;
        }
    }

    app.AddService("DesignationService", DesignationService);
}

//Department dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDepartmentService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDepartmentName(data: any): Array<model.DepartmentddlModel>;
    }
    export class DepartmentService extends GCPL.Service.BaseService implements IDepartmentService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DepartmentDD"}`;
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

        GetDepartmentName(data: any): Array<model.DepartmentddlModel> {
            let list = Array<model.DepartmentddlModel>();
            for (let item of data) {
                list.push({
                    DepartmentID: item.DepartmentID.toString(),
                    Department: item.Department,
                });
            }
            return list;
        }
    }

    app.AddService("DepartmentService", DepartmentService);
}
/// autofillcustomer

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerAutoFillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoCustomer(data: any): Array<model.CustomerAutoModel>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class CustomerAutoFillService extends GCPL.Service.BaseService implements ICustomerAutoFillService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"CustomerNameAutoFill"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }


        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CustomerNameAutoFill";

            debugger;
            let config = {
                params: {
                    CustomerName: data.term

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutoCustomer(data: any): Array<model.CustomerAutoModel> {


            let list = Array<model.CustomerAutoModel>();


            for (let item of data) {
                list.push({
                    CustomerID: item.CustomerID,
                    CompanyName: item.CompanyName

                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("CustomerAutoFillService", CustomerAutoFillService);
}
//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertContactService {
        PostContact(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertContactService extends GCPL.Service.BaseService implements IInsertContactService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertContactMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostContact(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertContactService", InsertContactService);
}

//edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IContactEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetConEdit(data: any): model.EditContactModel;
    }
    export class ContactEditService extends GCPL.Service.BaseService implements IContactEditService {
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
            var url = this.apiUrl + "/FillContactList";
            var ContactID;

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
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetConEdit(data: any): model.EditContactModel {
            debugger;
            let obj = new model.EditContactModel();

            obj.ContactID = data.ContactID,
                obj.SAPID = data.SAPID,
                obj.CustomerID = data.CustomerID,
                obj.ContactName = data.ContactName,
                obj.CompanyName = data.CompanyName,
                obj.MobileNo = data.MobileNo,
                obj.PhoneNo = data.PhoneNo,
                obj.Email = data.Email,
                obj.Address = data.Address,
                obj.PostalCode = data.PostalCode,
                obj.Status = data.Status,
                obj.DistrictID = data.DistrictID,
                obj.District = data.District,
                obj.City = data.City,
                obj.FOPID = data.FOPID,
                obj.FOP = data.FOP,
                obj.DepartmentID = data.DepartmentID,
                obj.Department = data.Department,
                obj.StateID = data.StateID,
                obj.State = data.State,
                obj.CountryID = data.CountryID,
                obj.Country = data.Country,
                obj.AssistantName = data.AssistantName,
                obj.AssistantPhone = data.AssistantPhone,
                obj.HomePhone = data.HomePhone,
                obj.BirthDate = data.BirthDate,
                obj.MaritalStatus = data.MaritalStatus,
                obj.Spouse = data.Spouse,
                obj.AnniversaryDate = data.AnniversaryDate,
                obj.SpouseBirthDate = data.SpouseBirthDate,
                obj.Children = data.Children,
                obj.SmokingPreference = data.SmokingPreference,
                obj.DrinkingPreference = data.DrinkingPreference,
                obj.MealPreference = data.MealPreference,
                obj.Comments = data.Comments,
                obj.Language = data.Language,
                obj.CustomerSAPID = data.CustomerSAPID


            //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
            return obj;
        }
    }
    app.AddService("ContactEditService", ContactEditService);
}

/// autofillcustomersapid

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerSapIdAutoFillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoCustSAPID(data: any): Array<model.CustomersapAutoModel>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        FindCustomerSAPID(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerSAPID(data: any): model.CustomerSAPIDModel;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class CustomerSapIdAutoFillService extends GCPL.Service.BaseService implements ICustomerSapIdAutoFillService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillCustomerBusinessCode"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }


        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/FillCustomerBusinessCode";
            
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


        GetAutoCustSAPID(data: any): Array<model.CustomersapAutoModel> {


            let list = Array<model.CustomersapAutoModel>();


            for (let item of data) {
                list.push({
                    CustomerID: item.CustomerID.toString(),
                    CustomerName: item.CustomerName

                });
            }
            return list;
        }

        FindCustomerSAPID(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetCustomerSAPID";
            debugger;
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


        GetCustomerSAPID(data: any): model.CustomerSAPIDModel {
            let obj = new model.CustomerSAPIDModel;
            obj = data.CustomerSAPID;
            return obj;
        }
    }
    //inject service
    app.AddService("CustomerSapIdAutoFillService", CustomerSapIdAutoFillService);
}

/// autofill productDesc

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductDescAutoFillService {
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoProductDesc(data: any): Array<model.ProductAutoModel>;
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

    }
    //inject service
    app.AddService("ProductDescAutoFillService", ProductDescAutoFillService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IPrimaryContactService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetPrimaryContact(data: any): model.PrimaryContactModel;
    }
    export class PrimaryContactService extends GCPL.Service.BaseService implements IPrimaryContactService {
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
            var url = this.apiUrl + "/PrimaryContact";
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
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetPrimaryContact(data: any): model.PrimaryContactModel {
            debugger;
            let obj = new model.PrimaryContactModel();

            obj.CustomerID = data.CustomerID,
                obj.ContactPerson = data.ContactPerson,
                obj.Designation = data.Designation,
                obj.PhoneNo = data.PhoneNo,
                obj.MobileNo = data.MobileNo,
                obj.Email = data.Email,
                obj.Department = data.Department

            //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
            return obj;
        }
    }
    app.AddService("PrimaryContactService", PrimaryContactService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertSAPContactService {
        PostCreateInSAP(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertSAPContactService extends GCPL.Service.BaseService implements IInsertSAPContactService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateInSAPContact"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCreateInSAP(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertSAPContactService", InsertSAPContactService);
}