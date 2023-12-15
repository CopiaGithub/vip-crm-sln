//dropdown

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDivisionService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDivisionName(data: any): Array<model.DivisionddlModel>;
    }
    export class DivisionService extends GCPL.Service.BaseService implements IDivisionService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DropdownList"}`;
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

        GetDivisionName(data: any): Array<model.DivisionddlModel> {
            let list = Array<model.DivisionddlModel>();
            for (let item of data) {
                list.push({
                    DivisionID: item.DivisionID.toString(),
                    Division: item.Division,
                });
            }
            return list;
        }
    }

    app.AddService("DivisionService", DivisionService);
}

//list
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProductList(data: any): Array<model.ProductlistModel>;

    }
    export class ProductListService extends GCPL.Service.BaseService implements IProductListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ProductMaster";
            var SearchText;
            var Status;
            var Division;
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
            if (data.Division == undefined) {
                Division = '';
            }
            else {
                Division = data.Division;

            }



            let config = {
                params: {
                    SearchText: SearchText,
                    Status: Status,
                    Division: Division
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetProductList(data: any): Array<model.ProductlistModel> {
            let list = Array<model.ProductlistModel>();

            for (let item of data) {
                list.push({

                    ProductID: item.ProductID,
                    Product: item.Product,
                    DivisionID: item.DivisionID,
                    Division: item.Division,
                    Description: item.Description,
                   
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("ProductListService", ProductListService);
}

//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertProductService {
        PostProduct(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertProductService extends GCPL.Service.BaseService implements IInsertProductService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertProductMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostProduct(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertProductService", InsertProductService);
}
//edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditProductModel;
    }
    export class ProductEditService extends GCPL.Service.BaseService implements IProductEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillProductList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ProductID;

            if (data == undefined) {
                ProductID = "";
            }
            else {
                ProductID = data;
            }

            let config = {
                params: {
                    ProductID: ProductID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditProductModel {
            debugger;
            let obj = new model.EditProductModel();

                obj.ProductID = data.ProductID,
                obj.Product = data.Product,
                obj.DivisionID = data.DivisionID,
                obj.Division = data.Division,
                obj.Description = data.Description,           
                    obj.Status = data.Status

            //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("ProductEditService", ProductEditService);
}