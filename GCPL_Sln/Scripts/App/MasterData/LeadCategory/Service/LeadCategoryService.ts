//search
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadCategoryService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadCategoryData(data: any): Array<model.LeadCategoryListModel>;

    }
    export class LeadCategoryService extends GCPL.Service.BaseService implements ILeadCategoryService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadCategory";
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
        GetLeadCategoryData(data: any): Array<model.LeadCategoryListModel> {
            let list = Array<model.LeadCategoryListModel>();

            for (let item of data) {
                list.push({

                    LeadCategoryID: item.LeadCategoryID,
                    LeadCategory: item.LeadCategory,
                    Description: item.Description,
                    WhenEntered: item.WhenEntered,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("LeadCategoryService", LeadCategoryService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadCategoryService {
        PostLeadCategory(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertLeadCategoryService extends GCPL.Service.BaseService implements IInsertLeadCategoryService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertLeadCategory"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLeadCategory(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertLeadCategoryService", InsertLeadCategoryService);
}

//edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadCategoryEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditLeadCategoryModel;
    }
    export class LeadCategoryEditService extends GCPL.Service.BaseService implements ILeadCategoryEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillLeadCategory"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var LeadCategoryID;

            if (data == undefined) {
                LeadCategoryID = "";
            }
            else {
                LeadCategoryID = data;
            }

            let config = {
                params: {
                    LeadCategoryID: LeadCategoryID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditLeadCategoryModel {
            debugger;
            let obj = new model.EditLeadCategoryModel();


            obj.LeadCategoryID = data.LeadCategoryID,
                obj.LeadCategory = data.LeadCategory,
                obj.Description = data.Description,
                obj.WhenEntered = data.WhenEntered,
                obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("LeadCategoryEditService", LeadCategoryEditService);
}