namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAllocationMatrixService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetAllocationGrid(data: any): Array<model.AllocationMatrixGridModel>;

    }
    export class AllocationMatrixService extends GCPL.Service.BaseService implements IAllocationMatrixService {
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
            var url = this.apiUrl + "AllocationMatrix";
            var SearchInput;
            var StatusID;
            var LeadTypeID;
            var CategoryID;
            var DivisionID;
            var ProductID;
            var StateID;
            var DistrictID;

            if (data.SearchInput == undefined) {
                SearchInput = '';
            }
            else {

                SearchInput = data.SearchInput
            }
            
            if (data.StatusID == undefined) {
                StatusID = '';
            }
            else {

                StatusID = data.StatusID
            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {

                LeadTypeID = data.LeadTypeID
            }
            if (data.CategoryID == undefined) {
                CategoryID = '';
            }
            else {

                CategoryID = data.CategoryID
            }
            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {

                DivisionID = data.DivisionID
            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {

                ProductID = data.ProductID
            }
            if (data.StateID == undefined) {
                StateID = '';
            }
            else {

                StateID = data.StateID
            }
            if (data.DistrictID == undefined) {
                DistrictID = '';
            }
            else {

                DistrictID = data.DistrictID
            }


            let config = {
                params: {
                    SearchInput: SearchInput,
                    StatusID: StatusID,
                    LeadTypeID: LeadTypeID,
                    CategoryID: CategoryID,
                    DivisionID: DivisionID,
                    ProductID: ProductID,
                    StateID: StateID,
                    DistrictID: DistrictID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAllocationGrid(data: any): Array<model.AllocationMatrixGridModel> {
            debugger;
            let list = Array<model.AllocationMatrixGridModel>();

            for (let item of data) {
                list.push({
                    UserProductID: item.UserProductID,
                    UserID: item.UserID,
                    UserName: item.UserName,
                    Product: item.Product,
                    District: item.District,
                    DateCreated: item.DateCreated,
                    IsActive: ((item.IsActive == "True") ? "Active" : "Inactive"),
                    LeadType: item.LeadType,
                    LeadTypeDesc: item.LeadTypeDesc,
                    Category: item.Category,
                    Division: item.Division,
                    State: item.State,
                });
            }

            return list;
        }

    }
    app.AddService("AllocationMatrixService", AllocationMatrixService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAllocationMatrixEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAllocationEdit(data: any): model.AllocationMatrixEditModel;
    }
    export class AllocationMatrixEditService extends GCPL.Service.BaseService implements IAllocationMatrixEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"AllocationMatrixEdit"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var UserProductID;

            if (data == undefined) {
                UserProductID = "";
            }
            else {
                UserProductID = data;
            }
            let config = {
                params: {
                    UserProductID: UserProductID


                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }

            );
        }
        GetAllocationEdit(data: any): model.AllocationMatrixEditModel {
            let obj = new model.AllocationMatrixEditModel();
            
            obj.UserProductID = data.UserProductID,
                obj.UserID = data.UserID,
                obj.UserName = data.Name,
                obj.ID = data.ID,
                
                obj.LeadType = data.ID,
                obj.CategoryID = data.CategoryID,
                obj.divisionID = data.divisionID,
                    obj.ProductID = data.ProductID,
                    obj.CountryID = data.CountryID,
                    obj.StateID = data.StateID,
                    obj.DistrictID = data.DistrictID,
               
                obj.Status = data.Status
              
                             
               
            
            return obj;
        }
    }


    app.AddService("AllocationMatrixEditService",AllocationMatrixEditService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAllocationMatrixInsertService {
        PostAllocationMatrix(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class AllocationMatrixInsertService extends GCPL.Service.BaseService implements IAllocationMatrixInsertService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"AllocationMatrixInsert"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostAllocationMatrix(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("AllocationMatrixInsertService", AllocationMatrixInsertService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDivisionDDPService {



        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetDivisionDDP(data: any): Array<model.DivisionDDPModel>;

    }
    export class DivisionDDPService extends GCPL.Service.BaseService implements IDivisionDDPService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            var url = this.apiUrl + "DivisionDD";
            var CategoryID;
           
            if (data == undefined) {
                CategoryID = '';
            }
            else {

                CategoryID = data
            }
          


            let config = {
                params: {
                    CategoryID: CategoryID
               

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetDivisionDDP(data: any): Array<model.DivisionDDPModel> {

            let list = Array<model.DivisionDDPModel>();

            for (let item of data) {
                list.push({
                    DivisionID: item.DivisionID,
                    Division: item.Division
                  
                });
            }

            return list;
        }

    }
    app.AddService("DivisionDDPService", DivisionDDPService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserAtofillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoUser(data: any): Array<model.UserAutofill>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class UserAtofillService extends GCPL.Service.BaseService implements IUserAtofillService {
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
            var url = this.apiUrl + "/ContactNameAutoFill";

            let config = {
                params: {
                    ContactName: data.term,
                    DealerID: this.Cookie.get('UserInfo')['DealerID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutoUser(data: any): Array<model.UserAutofill> {


            let list = Array<model.UserAutofill>();


            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName
                    //DealerID: item.DealerID

                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("UserAtofillService", UserAtofillService);
}