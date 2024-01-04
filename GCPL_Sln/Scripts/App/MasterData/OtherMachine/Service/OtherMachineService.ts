namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOtherMachinesGridService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetOtherMachinesGrid(data: any): Array<model.OtherMachinesGridModel>;

    }
    export class OtherMachinesGridService extends GCPL.Service.BaseService implements IOtherMachinesGridService {
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
            var url = this.apiUrl + "OtherMachine";
            var CustomerName;
            var CompetitorNameID;
            var ProductID;
            var ModelID;
           

            if (data.CustomerName == undefined) {
                CustomerName = '';
            }
            else {

                CustomerName = data.CustomerName
            }
            if (data.CompetitorNameID == undefined) {
                CompetitorNameID = '';
            }
            else {

                CompetitorNameID = data.CompetitorNameID
            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {

                ProductID = data.ProductID
            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {

                ModelID = data.ModelID
            }


            let config = {
                params: {
                    CustomerName: CustomerName,
                    CompetitorNameID: CompetitorNameID,
                    ProductID: ProductID,
                    ModelID: ModelID
                  

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetOtherMachinesGrid(data: any): Array<model.OtherMachinesGridModel> {

            let list = Array<model.OtherMachinesGridModel>();

            for (let item of data) {
                list.push({
                    MachineId: item.MachineId,
                    CustomerId: item.CustomerId,
                    CompanyName: item.CompanyName,
                    Manufacturer: item.Manufacturer,
                    Model: item.Model,
                    SrNo: item.SrNo,
                    ProductName: item.ProductName,
                    DateOfPurchase: item.DateOfPurchase,
                    WarrentyEnded: item.WarrentyEnded,
                    NextServicesDueDate: item.NextServicesDueDate,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive"),
                    YearOfManufacture: item.YearOfManufacture,
                    Quantity: item.Quantity,
                    Type: item.Type,
                    ModelID: item.ModelID,
                    OpportunityType: item.OpportunityType,
                    CompitatorName: item.CompitatorName,
                    CompetitorNameID: item.CompetitorNameID

                });
            }

            return list;
        }

    }
    app.AddService("OtherMachinesGridService", OtherMachinesGridService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOtherMachineEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetOtherMachineEdit(data: any): model.OtherMachinesEditModel;
    }
    export class OtherMachineEditService extends GCPL.Service.BaseService implements IOtherMachineEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillEditList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            var MachineId;

            if (data == undefined) {
                MachineId = "";
            }
            else {
                MachineId = data;
            }
            let config = {
                params: {
                    MachineId:MachineId


                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }

            );
        }
        GetOtherMachineEdit(data: any): model.OtherMachinesEditModel {
            let obj = new model.OtherMachinesEditModel();
          
            obj.MachineId = data.MachineId,
                obj.CustomerId = data.CustomerId,
            obj.CompanyName = data.CompanyName,
                obj.Manufacturer = data.Manufacturer,
                obj.Model = data.Model,
                obj.SrNo = data.SrNo,
                obj.DateOfPurchase = data.DateOfPurchase,
                obj.WarrentyEnded = data.WarrentyEnded,
                obj.NextServicesDueDate = data.NextServicesDueDate,
                obj.Product = data.Product,
                obj.YearOfManufacture = data.YearOfManufacture,
                obj.Quantity = data.Quantity,
                obj.Type = data.Type,
                obj.CompetitorNameID = data.CompetitorNameID,
            obj.ModelID = data.ModelID

           
                
            return obj;
        }
    }


    app.AddService("OtherMachineEditService", OtherMachineEditService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOtherMachinesInsertService {
        PostMachineData(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class OtherMachinesInsertService extends GCPL.Service.BaseService implements IOtherMachinesInsertService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertOtherMachine"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostMachineData(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("OtherMachinesInsertService", OtherMachinesInsertService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductdService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetProductName(data: any): Array<model.ProductddlModel>;
    }
    export class ProductdService extends GCPL.Service.BaseService implements IProductdService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"Product"}`;
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

        GetProductName(data: any): Array<model.ProductddlModel> {
            let list = Array<model.ProductddlModel>();
            for (let item of data) {
                list.push({
                    ProductID: item.ProductID.toString(),
                    Product: item.Product,
                    ProductDesc: item.ProductDesc,
                });
            }
            return list;
        }
    }

    app.AddService("ProductdService", ProductdService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IModelDDService {



        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetModelDD(data: any): Array<model.ModelDDModel>;

    }
    export class ModelDDService extends GCPL.Service.BaseService implements IModelDDService {
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
            var url = this.apiUrl + "ModelDD";
            var ProductID;

            if (data == undefined) {
                ProductID = '';
            }
            else {

                ProductID = data
            }



            let config = {
                params: {
                    ProductID: ProductID


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetModelDD(data: any): Array<model.ModelDDModel> {

            let list = Array<model.ModelDDModel>();

            for (let item of data) {
                list.push({
                    ModelID: item.ModelID,
                    ModelNo: item.ModelNo

                   
                });
            }

            return list;
        }

    }
    app.AddService("ModelDDService", ModelDDService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICompetitorNameService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCompetitorName(data: any): Array<model.CompetitorNameddlModel>;
    }
    export class CompetitorNameService extends GCPL.Service.BaseService implements ICompetitorNameService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CompetitorNameDropdown"}`;
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

        GetCompetitorName(data: any): Array<model.CompetitorNameddlModel> {
            let list = Array<model.CompetitorNameddlModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    SAPID: item.SAPID,
                    CompitatorName: item.CompitatorName
                    
                });
            }
            return list;
        }
    }

    app.AddService("CompetitorNameService", CompetitorNameService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICompProductDDService {



        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetCompProductDD(data: any): Array<model.CompProductDDModel>;

    }
    export class CompProductDDService extends GCPL.Service.BaseService implements ICompProductDDService {
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
            var url = this.apiUrl + "CompitatorProductDD";
            var CompetitorNameID;

            if (data == undefined) {
                CompetitorNameID = '';
            }
            else {

                CompetitorNameID = data
            }



            let config = {
                params: {
                    SAPID: CompetitorNameID


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetCompProductDD(data: any): Array<model.CompProductDDModel> {

            let list = Array<model.CompProductDDModel>();

            for (let item of data) {
                list.push({
                    ID: item.ID,
                    OppCompitatorProductFamily: item.OppCompitatorProductFamily


                });
            }

            return list;
        }

    }
    app.AddService("CompProductDDService", CompProductDDService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICompModelDDService {



        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetCompModelDD(data: any): Array<model.CompModelDDModel>;

    }
    export class CompModelDDService extends GCPL.Service.BaseService implements ICompModelDDService {
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
            var url = this.apiUrl + "CompitatorModelDD";
            var CompProductFamilyID;

            if (data == undefined) {
                CompProductFamilyID = '';
            }
            else {

                CompProductFamilyID = data
            }



            let config = {
                params: {
                    CompProductFamilyID: CompProductFamilyID


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetCompModelDD(data: any): Array<model.CompModelDDModel> {

            let list = Array<model.CompModelDDModel>();

            for (let item of data) {
                list.push({
                    ID: item.ID,
                    Model: item.Model


                });
            }

            return list;
        }

    }
    app.AddService("CompModelDDService", CompModelDDService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerNameAutoFillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoCustomer(data: any): Array<model.CustomerAutoModel>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class CustomerNameAutoFillService extends GCPL.Service.BaseService implements ICustomerNameAutoFillService {
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
                    CustomerName:data.term

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
    app.AddService("CustomerNameAutoFillService", CustomerNameAutoFillService);
}

//Delete Competitor 

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteCompetitorService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postCompetitorDelete(data: any): void;
    }
    export class DeleteCompetitorService extends GCPL.Service.BaseService implements IDeleteCompetitorService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteCompetitor"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    MachineId: data
                }
            };
            return this.ajaXUtility.Post({

                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postCompetitorDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });

        }
    }

    app.AddService("DeleteCompetitorService", DeleteCompetitorService);
}