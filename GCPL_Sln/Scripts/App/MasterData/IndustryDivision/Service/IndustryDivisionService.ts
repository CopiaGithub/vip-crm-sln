//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IIndustryDivisionListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetIndustryDivisionList(data: any): Array<model.IndustryDivlistModel>;

    }
    export class IndustryDivisionListService extends GCPL.Service.BaseService implements IIndustryDivisionListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/IndustryDivision";
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
        GetIndustryDivisionList(data: any): Array<model.IndustryDivlistModel> {
            let list = Array<model.IndustryDivlistModel>();

            for (let item of data) {
                list.push({

                    IndustryDivisionID: item.IndustryDivisionID,
                    IndustryDivision: item.IndustryDivision,
                    SAPID: item.SAPID,
                    WhenEntered: item.WhenEntered,
                    Status: ((item.Status == "True") ? "Active" : "Inactive")
                   

                });
            }
            return list;
        }

    }
    app.AddService("IndustryDivisionListService", IndustryDivisionListService);
}
//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertIndustryService {
        PostIndustry(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertIndustryService extends GCPL.Service.BaseService implements IInsertIndustryService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertIndustryDivision"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostIndustry(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertIndustryService", InsertIndustryService);
}
//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IIndustryEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditIndustrylistModel;
    }
    export class IndustryEditService extends GCPL.Service.BaseService implements IIndustryEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillIndustryDivision"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var IndustryDivisionID;

            if (data == undefined) {
                IndustryDivisionID = "";
            }
            else {
                IndustryDivisionID = data;
            }

            let config = {
                params: {
                    IndustryDivisionID: IndustryDivisionID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditIndustrylistModel {
            debugger;
            let obj = new model.EditIndustrylistModel();


            obj.IndustryDivisionID = data.IndustryDivisionID,
                obj.IndustryDivision = data.IndustryDivision,
                obj.SAPID = data.SAPID,
                obj.Status = data.Status,
                obj.WhenEntered = data.WhenEntered

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("IndustryEditService", IndustryEditService);
}