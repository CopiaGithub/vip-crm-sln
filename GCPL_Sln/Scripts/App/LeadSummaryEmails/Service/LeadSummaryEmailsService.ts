//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadSummaryListService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadSummList(data: any): Array<model.LeadSummaryListModel>;

    }
    export class LeadSummaryListService extends GCPL.Service.BaseService implements ILeadSummaryListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetSummaryEmailsList";
                    
            let config = {
                params: {                

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadSummList(data: any): Array<model.LeadSummaryListModel> {
            let list = Array<model.LeadSummaryListModel>();

            for (let item of data) {
                list.push({

                    ID: item.ID,
                    ModelNo: item.ModelNo,
                    ZoneName: item.ZoneName,
                    EmailTO: item.EmailTO,
                    EmailCC: item.EmailCC,
                    Status: ((item.Status == "True") ? "Active" : "Inactive")


                });
            }
            return list;
        }

    }
    app.AddService("LeadSummaryListService", LeadSummaryListService);
}

//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadSummaryService {
        PostLeadSumm(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertLeadSummaryService extends GCPL.Service.BaseService implements IInsertLeadSummaryService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"LeadSummaryEmails"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLeadSumm(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertLeadSummaryService", InsertLeadSummaryService);
}

//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadSummEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditLeadSummlistModel;
    }
    export class LeadSummEditService extends GCPL.Service.BaseService implements ILeadSummEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillSummaryEmailsList"}`;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ID;
            debugger;
            if (data == undefined) {
                ID = "";
            }
            else {
                ID = data;
            }

            let config = {
                params: {
                    ID: ID

                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditLeadSummlistModel {
            debugger;
            let obj = new model.EditLeadSummlistModel();


                obj.ID = data.ID,
                obj.ModelNo = data.ModelNo,
                obj.ZoneName = data.ZoneName,
                obj.EmailTO = data.EmailTO,
                obj.EmailCC = data.EmailCC,
                obj.Status = data.Status,
                obj.ModelID = data.ModelID,
                obj.ZoneID = data.ZoneID



            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("LeadSummEditService", LeadSummEditService);
}

//Model dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IModelService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetModel(data: any): Array<model.ModeldModel>;
    }
    export class ModelService extends GCPL.Service.BaseService implements IModelService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ModelDD1"}`;
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

        GetModel(data: any): Array<model.ModeldModel> {
            let list = Array<model.ModeldModel>();
            for (let item of data) {
                list.push({
                    ModelID: item.ModelID.toString(),
                    ModelNo: item.ModelNo,
                });
            }
            return list;
        }
    }

    app.AddService("ModelService", ModelService);
}