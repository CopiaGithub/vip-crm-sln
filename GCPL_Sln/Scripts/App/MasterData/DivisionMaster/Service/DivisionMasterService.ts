//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDivisionListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDivisionList(data: any): Array<model.DivisionListModel>;

    }
    export class DivisionListService extends GCPL.Service.BaseService implements IDivisionListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/DivisionList";
            var SearchText;
            var Status;
            var Category;
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
            if (data.Category == undefined) {
                Category = '';
            }
            else {
                Category = data.Category;

            }

            let config = {
                params: {
                    SearchText: SearchText,
                    Status: Status,
                    Category: Category
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetDivisionList(data: any): Array<model.DivisionListModel> {
            let list = Array<model.DivisionListModel>();

            for (let item of data) {
                list.push({

                    DivisionID: item.DivisionID,
                    Division: item.Division,
                    CategoryID: item.CategoryID,
                    Category: item.Category,
                    Description: item.Description,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive"),
                    DivisionSAPID: item.DivisionSAPID,
                    QuotePrefix: item.QuotePrefix,
                    NoRangeSeries: item.NoRangeSeries
                    

                });
            }
            return list;
        }

    }
    app.AddService("DivisionListService", DivisionListService);
}

//category dropdown
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICategoryddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCategoryName(data: any): Array<model.CategoryddlModel>;
    }
    export class CategoryddService extends GCPL.Service.BaseService implements ICategoryddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CategoryDD"}`;
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

        GetCategoryName(data: any): Array<model.CategoryddlModel> {
            let list = Array<model.CategoryddlModel>();
            for (let item of data) {
                list.push({
                    CategoryID: item.CategoryID.toString(),
                    Category: item.Category,
                });
            }
            return list;
        }
    }

    app.AddService("CategoryddService", CategoryddService);
}

//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertDivisionService {
        PostDivision(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertDivisionService extends GCPL.Service.BaseService implements IInsertDivisionService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"DivisionMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostDivision(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertDivisionService", InsertDivisionService);
}
//edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDivisionEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditDivisionModel;
    }
    export class DivisionEditService extends GCPL.Service.BaseService implements IDivisionEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillDivisionList"}`;
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
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetEdit(data: any): model.EditDivisionModel {
            debugger;
            let obj = new model.EditDivisionModel();

            obj.DivisionID = data.DivisionID,
                obj.Division = data.Division,
                obj.CategoryID = data.CategoryID,
                obj.Category = data.Category,
                obj.Description = data.Description,
                obj.Status = data.Status,
                obj.divisionSAPID = data.divisionSAPID,
                obj.QuotePrefix = data.QuotePrefix,
                obj.NoRangeSeries = data.NoRangeSeries

            //obj.IsActive = ((data.Status == "1") ? "Active" : "Inactive")
            return obj;
        }
    }
    app.AddService("DivisionEditService", DivisionEditService);
}