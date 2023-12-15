//LeadType  dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadTypeddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadTypeName(data: any): Array<model.LeadTypeddlModel>;
    }
    export class LeadTypeddService extends GCPL.Service.BaseService implements ILeadTypeddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadTypeDD"}`;
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

        GetLeadTypeName(data: any): Array<model.LeadTypeddlModel> {
            let list = Array<model.LeadTypeddlModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID.toString(),
                    LeadTypeDesc: item.LeadTypeDesc,
                });
            }
            return list;
        }
    }

    app.AddService("LeadTypeddService", LeadTypeddService);
}
//Product with division dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductddService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProductName(data: any): Array<model.ProductddlModel>;
    }
    export class ProductddService extends GCPL.Service.BaseService implements IProductddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ProductDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    divisionID: data
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
                });
            }
            return list;
        }
    }

    app.AddService("ProductddService", ProductddService);
}
//list
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IModelListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetModelList(data: any): Array<model.ModelListModel>;

    }
    export class ModelListService extends GCPL.Service.BaseService implements IModelListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ModelMaster";

            var SearchText;
            var Status;
            var Product;
            var LeadType;
            debugger;

            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.Product == undefined) {
                Product = '';
            }
            else {
                Product = data.Product;

            }
            if (data.LeadType == undefined) {
                LeadType = '';
            }
            else {
                LeadType = data.LeadType;

            }

            let config = {
                params: {
                    SearchText: SearchText,
                    Status: Status,
                    Product: Product,
                    LeadType: LeadType
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetModelList(data: any): Array<model.ModelListModel> {
            let list = Array<model.ModelListModel>();

            for (let item of data) {
                list.push({

                    ModelID: item.ModelID,
                    ModelNo: item.ModelNo,
                    ProductID: item.ProductID,
                    Product: item.Product,
                    Description: item.Description,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive"),
                    WhenEntered: item.WhenEntered,
                    Value: item.Value,
                    ID: item.ID,
                    LeadTypeDesc: item.LeadTypeDesc,
                    DivisionID: item.DivisionID




                });
            }
            return list;
        }

    }
    app.AddService("ModelListService", ModelListService);
}
//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertModelService {
        PostModel(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertModelService extends GCPL.Service.BaseService implements IInsertModelService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertModelMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostModel(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertModelService", InsertModelService);
}
//edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IModelEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.InsertModelMaster;
    }
    export class ModelEditService extends GCPL.Service.BaseService implements IModelEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillModelList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ModelID;

            if (data == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data;
            }

            let config = {
                params: {
                    ModelID: ModelID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetEdit(data: any): model.InsertModelMaster {
            debugger;
            let obj = new model.InsertModelMaster();

            obj.ModelID = data.ModelID,
                obj.ModelNo = data.ModelNo,
                obj.ProductID = data.ProductID,
                obj.Description = data.Description,
                obj.Status = data.Status,
                obj.Value = data.Value,
                obj.leadTypeID = data.LeadTypeID,
                obj.DivisionID = data.DivisionID,
                obj.Eligible = data.Eligible


            //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
            return obj;
        }
    }
    app.AddService("ModelEditService", ModelEditService);
}

//product dd

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductDDLService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetProduct(data: any): Array<model.ProductddModel>;
    }
    export class ProductDDLService extends GCPL.Service.BaseService implements IProductDDLService {

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

        GetProduct(data: any): Array<model.ProductddModel> {
            let list = Array<model.ProductddModel>();
            for (let item of data) {
                list.push({
                    ProductID: item.ProductID.toString(),
                    Product: item.Product,
                });
            }
            return list;
        }
    }

    app.AddService("ProductDDLService", ProductDDLService);
}