//Country dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICountryService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCountryName(data: any): Array<model.CountryddlModel>;
    }
    export class CountryService extends GCPL.Service.BaseService implements ICountryService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CountryDD"}`;
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

        GetCountryName(data: any): Array<model.CountryddlModel> {
            let list = Array<model.CountryddlModel>();
            for (let item of data) {
                list.push({
                    CountryID: item.CountryID.toString(),
                    Country: item.Country,
                });
            }
            return list;
        }
    }

    app.AddService("CountryService", CountryService);
}
//State dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IStateddService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetStateName(data: any): Array<model.StateddlModel>;
    }
    export class StateddService extends GCPL.Service.BaseService implements IStateddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"StateDDWP"}`;
        }
        
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CountryID;
            if (data == undefined) {
                CountryID = '95';
            }
            else {
                CountryID = data;
            }
            let config = {
                params: {
                    CountryID: '95'
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

    app.AddService("StateddService", StateddService);
}
//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertCustomerService {
        PostCustomer(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertCustomerService extends GCPL.Service.BaseService implements IInsertCustomerService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertCustomerMaster"}`;
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

    app.AddService("InsertCustomerService", InsertCustomerService);
}
//District dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDistrictddService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDistrictName(data: any): Array<model.DistrictddlModel>;
    }
    export class DistrictddService extends GCPL.Service.BaseService implements IDistrictddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DistrictDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var StateID;

            if (data == undefined) {
                StateID = "";
            }
            else {
                StateID = data;
            }
            let config = {
                params: {
                    StateID: StateID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetDistrictName(data: any): Array<model.DistrictddlModel> {
            let list = Array<model.DistrictddlModel>();
            for (let item of data) {
                list.push({
                    DistrictID: item.DistrictID.toString(),
                    District: item.District,
                });
            }
            return list;
        }
    }

    app.AddService("DistrictddService", DistrictddService);
}
//IndustryDivision dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IIndustryDivisionService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetIndustryName(data: any): Array<model.IndustryDivisionddlModel>;
    }
    export class IndustryDivisionService extends GCPL.Service.BaseService implements IIndustryDivisionService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"IndustryDivisionDD"}`;
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

        GetIndustryName(data: any): Array<model.IndustryDivisionddlModel> {
            let list = Array<model.IndustryDivisionddlModel>();
            for (let item of data) {
                list.push({
                    IndustryDivisionID: item.IndustryDivisionID.toString(),
                    IndustryDivision: item.IndustryDivision,
                });
            }
            return list;
        }
    }

    app.AddService("IndustryDivisionService", IndustryDivisionService);
}
//SalesArea dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesAreaService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesAreaName(data: any): Array<model.SalesAreaddlModel>;
    }
    export class SalesAreaService extends GCPL.Service.BaseService implements ISalesAreaService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SalesAreaDD"}`;
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

        GetSalesAreaName(data: any): Array<model.SalesAreaddlModel> {
            let list = Array<model.SalesAreaddlModel>();
            for (let item of data) {
                list.push({
                    SalesAreaID: item.SalesAreaID.toString(),
                    SalesArea: item.SalesArea,
                });
            }
            return list;
        }
    }

    app.AddService("SalesAreaService", SalesAreaService);
}
//AccountType dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccountTypeService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccountTypeName(data: any): Array<model.AccountTypeddlModel>;
    }
    export class AccountTypeService extends GCPL.Service.BaseService implements IAccountTypeService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AccountTypeDD"}`;
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

        GetAccountTypeName(data: any): Array<model.AccountTypeddlModel> {
            let list = Array<model.AccountTypeddlModel>();
            for (let item of data) {
                list.push({
                    AccountTypeID: item.AccountTypeID.toString(),
                    AccountType: item.AccountType,
                });
            }
            return list;
        }
    }

    app.AddService("AccountTypeService", AccountTypeService);
}
//IndustrialSegment dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IIndustrialSegmentService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetIndustrialSegmentName(data: any): Array<model.IndustrialSegmentddlModel>;
    }
    export class IndustrialSegmentService extends GCPL.Service.BaseService implements IIndustrialSegmentService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"IndustrialSegmentDD"}`;
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

        GetIndustrialSegmentName(data: any): Array<model.IndustrialSegmentddlModel> {
            let list = Array<model.IndustrialSegmentddlModel>();
            for (let item of data) {
                list.push({
                    IndustrialSegmentID: item.IndustrialSegmentID.toString(),
                    IndustrialSegment: item.IndustrialSegment,
                });
            }
            return list;
        }
    }

    app.AddService("IndustrialSegmentService", IndustrialSegmentService);
}

//IndustrialSegment with Division dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IIndustrialDivisionSegmentService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetIndustrialSegmentName(data: any): Array<model.IndustrialSegmentddlModel>;
    }
    export class IndustrialDivisionSegmentService extends GCPL.Service.BaseService implements IIndustrialDivisionSegmentService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"IndustrialSegmentDivision"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var DivisionID;

            if (data == undefined) {
                DivisionID = "";
            }
            else {
                DivisionID = data;
            }
            let config = {
                params: {
                    DivisionID: DivisionID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetIndustrialSegmentName(data: any): Array<model.IndustrialSegmentddlModel> {
            let list = Array<model.IndustrialSegmentddlModel>();
            for (let item of data) {
                list.push({
                    IndustrialSegmentID: item.IndustrialSegmentID.toString(),
                    IndustrialSegment: item.IndustrialSegment,
                });
            }
            return list;
        }
    }

    app.AddService("IndustrialDivisionSegmentService", IndustrialDivisionSegmentService);
}

//SalesOffice dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOfficeService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesOfficeName(data: any): Array<model.SalesOfficeddlModel>;
    }
    export class SalesOfficeService extends GCPL.Service.BaseService implements ISalesOfficeService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SalesOfficeDD"}`;
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

        GetSalesOfficeName(data: any): Array<model.SalesOfficeddlModel> {
            let list = Array<model.SalesOfficeddlModel>();
            for (let item of data) {
                list.push({
                    SalesOfficeID: item.SalesOfficeID.toString(),
                    SalesOffice: item.SalesOffice,
                });
            }
            return list;
        }
    }

    app.AddService("SalesOfficeService", SalesOfficeService);
}

//edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustEdit(data: any): model.EditCustomerModel;
    }
    export class CustomerEditService extends GCPL.Service.BaseService implements ICustomerEditService {
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
            var url = this.apiUrl + "/FillCustomerList";
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
        GetCustEdit(data: any): model.EditCustomerModel {

            let obj = new model.EditCustomerModel();
            debugger;
            obj.CustomerID = data.CustomerID,
                obj.SearchText = data.SearchText,
                obj.CompanyName = data.CompanyName,
                obj.MobileNo = data.MobileNo,
                obj.Email = data.Email,
                obj.Address1 = data.Address1,
                obj.Address2 = data.Address2,
                obj.CustomerStatusID = data.CustomerStatusID,
                obj.CustomerStatus = data.CustomerStatus,
                obj.DistrictID = data.DistrictID,
                obj.District = data.District,
                obj.IndustryDivisionID = data.IndustryDivisionID,
                obj.IndustryDivision = data.IndustryDivision,
                obj.CreatedBy = data.CreatedBy,
                obj.PinCode = data.PinCode,
                obj.AccountTypeID = data.AccountTypeID,
                obj.AccountType = data.AccountType,
                obj.IndustrialSegmentID = data.IndustrialSegmentID,
                obj.IndustrialSegment = data.IndustrialSegment,
                obj.SalesAreaID = data.SalesAreaID,
                obj.SalesArea = data.SalesArea,
                obj.PhoneNo = data.PhoneNo,
                obj.Fax = data.Fax,
                obj.SalesOfficeID = data.SalesOfficeID,
                obj.SalesOffice = data.SalesOffice,
                obj.BusinessPartnerNO = data.BusinessPartnerNO,
                obj.Status = data.Status,
                obj.IsNational = data.IsNational,
                obj.CustomerRatingID = data.CustomerRatingID,
                obj.CustomerRating = data.CustomerRating,
                obj.StateID = data.StateID,
                obj.State = data.State,
                obj.City = data.City,
                obj.UpdatedBy = data.UpdatedBy,
                obj.CountryID = data.CountryID,
                obj.Country = data.Country,
                obj.ParentCustomerID = data.ParentCustomer,
                obj.ParentCustomerName = data.ParentCustomerName,
                obj.Customersize = data.Customersize,
                obj.SiteAddress = data.SiteAddress,
                obj.Area = data.Area,
                obj.Comments = data.Comments,
                obj.DivisionID = data.DivisionID,
                obj.Division = data.Division,
                obj.DesignationID = data.DesignationID,
                obj.Designation = data.Designation,
                obj.ContactName = data.ContactName,
                obj.ConPhoneNo = data.ConPhoneNo,
                obj.ConMobileNo = data.ConMobileNo,
                obj.ConFax = data.ConFax,
                obj.ConEmail = data.ConEmail,
                obj.DepartmentID = data.DepartmentID,
                obj.ContactID = data.ContactID,
                obj.ConStateID = data.ConStateID,
                obj.ConDistrictID = data.ConDistrictID,
                obj.ConCity = data.ConCity,
                obj.ConAddress = data.ConAddress,
                obj.ConPincode = data.ConPincode
                

            //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
            return obj;
        }
    }
    app.AddService("CustomerEditService", CustomerEditService);
}

//sales Area dd fill
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICheckSalesAreaDataService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSales(data: any): model.GetSalesAreaModel;
    }
    export class CheckSalesAreaDataService extends GCPL.Service.BaseService implements ICheckSalesAreaDataService {
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
            var url = this.apiUrl + "/GetSalesAreaData";
            var CountryID;
            var CategoryID;
            var LeadCategoryID;

            debugger;

            if (data.CountryID == undefined) {
                CountryID = '';
            }
            else {
                CountryID = data.CountryID;

            }
            if (data.CategoryID == undefined) {
                CategoryID = '';
            }
            else {
                CategoryID = data.CategoryID;

            }
            if (data.LeadCategoryID == undefined) {
                LeadCategoryID = '';
            }
            else {
                LeadCategoryID = data.LeadCategoryID;

            }

            debugger;
            let config = {
                params: {
                    CountryID: CountryID,
                    CategoryID: CategoryID,
                    LeadCategoryID: LeadCategoryID

                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSales(data: any): model.GetSalesAreaModel {

            let obj = new model.GetSalesAreaModel();

            obj.SalesAreaID = data.SalesAreaID;


            return obj;
        }
    }
    app.AddService("CheckSalesAreaDataService", CheckSalesAreaDataService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserCodeAutoFillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoUser(data: any): Array<model.UserCodeAutofillDTO>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class UserCodeAutoFillService extends GCPL.Service.BaseService implements IUserCodeAutoFillService {
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
            var url = this.apiUrl + "/FillUserNameEmpCode";

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


        GetAutoUser(data: any): Array<model.UserCodeAutofillDTO> {


            let list = Array<model.UserCodeAutofillDTO>();


            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("UserCodeAutoFillService", UserCodeAutoFillService);
}

//show similar
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IShowSimilarService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetMobile(data: any): string;

    }
    export class ShowSimilarService extends GCPL.Service.BaseService implements IShowSimilarService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CheckExistingCustomerWithMobile";
            var MobileNo;

            if (data == undefined) {
                MobileNo = "";
            }
            else {
                MobileNo = data;

            }
            let config = {
                params: {
                    MobileNo: data
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetMobile(data: any): string {
            debugger;
            return data;
        }

    }
    app.AddService("ShowSimilarService", ShowSimilarService);
}
//division dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDivisionDDService {



        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDivision(data: any): Array<model.DivisionModel>;

    }
    export class DivisionDDService extends GCPL.Service.BaseService implements IDivisionDDService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DropdownList"}`;
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

        GetDivision(data: any): Array<model.DivisionModel> {

            let list = Array<model.DivisionModel>();

            for (let item of data) {
                list.push({
                    DivisionID: item.DivisionID.toString(),
                    Division: item.Division

                });
            }

            return list;
        }

    }
    app.AddService("DivisionDDService", DivisionDDService);
}

//IndustryCodeDD dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IIndustryCodeService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetIndustryCodeName(data: any): Array<model.IndustryCodeddlModel>;
    }
    export class IndustryCodeService extends GCPL.Service.BaseService implements IIndustryCodeService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"IndustryCodeDD"}`;
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

        GetIndustryCodeName(data: any): Array<model.IndustryCodeddlModel> {
            let list = Array<model.IndustryCodeddlModel>();
            for (let item of data) {
                list.push({
                    IndustryCodeID: item.IndustryCodeID.toString(),
                    IndustryCodeName: item.IndustryCodeName,
                });
            }
            return list;
        }
    }

    app.AddService("IndustryCodeService", IndustryCodeService);
}

//GetCustomerSize dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerSizeService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerSize(data: any): Array<model.CustomerSizeddlModel>;
    }
    export class CustomerSizeService extends GCPL.Service.BaseService implements ICustomerSizeService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CustomerSizeDD"}`;
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

        GetCustomerSize(data: any): Array<model.CustomerSizeddlModel> {
            let list = Array<model.CustomerSizeddlModel>();
            for (let item of data) {
                list.push({
                    CustomerSizeID: item.CustomerSizeID.toString(),
                    CustomerSize: item.CustomerSize,
                });
            }
            return list;
        }
    }

    app.AddService("CustomerSizeService", CustomerSizeService);
}


/// autofillsapid&comapanyname

//namespace GCPL.Service {
//    import app = GCPL.app;
//    import model = GCPL.Model;

//    export interface ISAPIDAutoFillService {
//        Find(): ng.IPromise<Utility.Ajax.IResponse>;
//        GetAutoSAP(data: any): Array<model.SAPAutoModel>;
//        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
//        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
//    }
//    export class SAPIDAutoFillService extends GCPL.Service.BaseService implements ISAPIDAutoFillService {
//        private apiUrl: string = "";
//        private Cookie: any = null;
//        static $inject = ["$http", "$q", "$cookieStore"];
//        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
//            super($http, $q);
//            this.apiUrl = `${this.url}/${"FillAutoCustomerId"}`;
//            this.Cookie = _cookieStore;
//        }
//        Find(): ng.IPromise<Utility.Ajax.IResponse> {

//            return this.ajaXUtility.Get({ Url: this.apiUrl });
//        }


//        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
//            var url = this.apiUrl + "/FillAutoCustomerId";
//            debugger;
//            let config = {
//                params: {
//                    Input: data.term

//                }
//            };
//            return this.ajaXUtility.Get({
//                Url: url,
//                Config: config
//            });
//        }


//        GetAutoSAP(data: any): Array<model.SAPAutoModel> {


//            let list = Array<model.SAPAutoModel>();


//            for (let item of data) {
//                list.push({
                   
//                    SAPID: item.SAPID,
//                    ParentCustID: item.CustomerID

//                });
//            }
//            return list;
//        }
//    }
//    //inject service
//    app.AddService("SAPIDAutoFillService", SAPIDAutoFillService);
//}

//namespace GCPL.Service {
//    import app = GCPL.app;
//    import model = GCPL.Model;

//    export interface ISAPIDListService {
//        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
//        GetSAPID(data: any): model.GetSapIdModel;
//    }
//    export class SAPIDListService extends GCPL.Service.BaseService implements ISAPIDListService {
//        private apiUrl: string = "";
//        static $inject = ["$http", "$q"];
//        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
//            super($http, $q);
//            this.apiUrl = `${this.url}/${"GetSAPId"}`;
//        }
//        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
//            var ParentCustomerID;

//            if (data == undefined) {
//                ParentCustomerID = "";
//            }
//            else {
//                ParentCustomerID = data;
//            }

//            let config = {
//                params: {
//                    ParentCustomerID: ParentCustomerID


//                }
//            };
//            console.log(config);
//            return this.ajaXUtility.Get({

//                Url: this.apiUrl,
//                Config: config
//            }


//            );

//        }
//        GetSAPID(data: any): model.GetSapIdModel {
//            debugger;
//            let obj = new model.GetSapIdModel();

//            obj.BusinessPartnerNo = data.BusinessPartnerNo
                
//            return obj;

//        }
//    }

//    app.AddService("SAPIDListService", SAPIDListService);
//}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerStatusService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerStatus(data: any): Array<model.CustomerStatusModel>;
    }
    export class CustomerStatusService extends GCPL.Service.BaseService implements ICustomerStatusService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CustomerStatus"}`;
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

        GetCustomerStatus(data: any): Array<model.CustomerStatusModel> {
            let list = Array<model.CustomerStatusModel>();
            for (let item of data) {
                list.push({
                    CustomerStatusID: item.CustomerStatusID.toString(),
                    Status: item.Status
                });
            }
            return list;
        }
    }

    app.AddService("CustomerStatusService", CustomerStatusService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerClassService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerClass(data: any): Array<model.CustomerClassModel>;
    }
    export class CustomerClassService extends GCPL.Service.BaseService implements ICustomerClassService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CustomerRatingDD"}`;
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

        GetCustomerClass(data: any): Array<model.CustomerClassModel> {
            let list = Array<model.CustomerClassModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID.toString(),
                    Description: item.Description
                });
            }
            return list;
        }
    }

    app.AddService("CustomerClassService", CustomerClassService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertSAPCustomerService {
        PostCreateInSAP(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertSAPCustomerService extends GCPL.Service.BaseService implements IInsertSAPCustomerService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateInSAP"}`;
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

    app.AddService("InsertSAPCustomerService", InsertSAPCustomerService);
}