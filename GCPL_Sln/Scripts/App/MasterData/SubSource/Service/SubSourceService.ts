//LeadSource dropdown
namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadSourceDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadSourceDDnew(data: any): Array<model.LeadSourceDDModel>;
    }
    export class LeadSourceDDService extends GCPL.Service.BaseService implements ILeadSourceDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadSourceDD"}`;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }
        GetLeadSourceDDnew(data: any): Array<model.LeadSourceDDModel> {
            let list = Array<model.LeadSourceDDModel>();
            for (let item of data) {
                debugger;
                list.push({
                    LeadSourceID: item.LeadSourceID,
                    LeadSource: item.LeadSource
                });
            }


            return list;
        }
    }
    app.AddService("LeadSourceDDService", LeadSourceDDService);
}

//Search

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISubSourceListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSubSourceListData(data: any): Array<model.SubSourceListModel>;

    }
    export class SubSourceListService extends GCPL.Service.BaseService implements ISubSourceListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/SubSource";
            //var SearchText;
            var Subsource;
            var LeadSource;
            var Status;
            debugger;

            if (data.Subsource == undefined) {
                Subsource = '';
            }
            else {
                Subsource = data.Subsource;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
                                   

            let config = {
                params: {
                    //SearchText: SearchText,
                    Subsource: Subsource,
                    LeadSource: LeadSource,
                    Status: Status
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSubSourceListData(data: any): Array<model.SubSourceListModel> {
            let list = Array<model.SubSourceListModel>();

            for (let item of data) {
                list.push({

                    SubsourceID: item.SubsourceID,
                    LeadSource: item.LeadSource,
                    LeadsourceId: item.LeadsourceId,
                    Subsource: item.Subsource,
                    Description: item.Description,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                   
                });
            }
            return list;
        }

    }
    app.AddService("SubSourceListService", SubSourceListService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertSubSourceService {
        PostSubSource(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertSubSourceService extends GCPL.Service.BaseService implements IInsertSubSourceService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertSubSource"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostSubSource(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertSubSourceService", InsertSubSourceService);
}

//edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISubSourceEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditSubSourceModel;
    }
    export class SubSourceEditService extends GCPL.Service.BaseService implements ISubSourceEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillSubSource"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var SubsourceID;

            if (data == undefined) {
                SubsourceID = "";
            }
            else {
                SubsourceID = data;
            }

            let config = {
                params: {
                    SubsourceID: SubsourceID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditSubSourceModel {
            debugger;
            let obj = new model.EditSubSourceModel();

                obj.SubsourceID = data.SubsourceID,
                obj.LeadSourceID = data.LeadSourceID,
                obj.Subsource = data.Subsource,
                obj.Description = data.Description,
                obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

           
        }
    }


    app.AddService("SubSourceEditService", SubSourceEditService);
}


