//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICatListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCategoryList(data: any): Array<model.CatlistModel>;

    }
    export class CatListService extends GCPL.Service.BaseService implements ICatListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CategoryMaster";
            var SearchText;
            var Status;
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



            let config = {
                params: {
                    SearchText: SearchText,
                    Status: Status
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCategoryList(data: any): Array<model.CatlistModel> {
            let list = Array<model.CatlistModel>();

            for (let item of data) {
                list.push({

                    Description: item.Description,
                    CategoryID: item.CategoryID,
                    Category: item.Category,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("CatListService", CatListService);
}

//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICategoryEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditCatlistModel;
    }
    export class CategoryEditService extends GCPL.Service.BaseService implements ICategoryEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillCategoryList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CategoryID;

            if (data == undefined) {
                CategoryID = "";
            }
            else {
                CategoryID = data;
            }

            let config = {
                params: {
                    CategoryID: CategoryID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditCatlistModel {
            debugger;
            let obj = new model.EditCatlistModel();


            obj.CategoryID = data.CategoryID,
                obj.Category = data.Category,
                    obj.Description = data.Description,
                obj.Status = data.Status

                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("CategoryEditService", CategoryEditService);
}

//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertCategoryService {
        PostCategory(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertCategoryService extends GCPL.Service.BaseService implements IInsertCategoryService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            
            this.apiUrl = `${this.url}/${"InsertCategoryMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            
            return this.ajaXUtility.Get({ Url: this.apiUrl }); 

        }
        PostCategory(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertCategoryService", InsertCategoryService);
}