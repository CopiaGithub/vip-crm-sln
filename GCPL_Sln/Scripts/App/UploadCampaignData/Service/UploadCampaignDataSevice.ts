//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertUploadCampaignService {
        PostUploadCamp(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertUploadCampaignService extends GCPL.Service.BaseService implements IInsertUploadCampaignService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"UploadCampaignData"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostUploadCamp(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertUploadCampaignService", InsertUploadCampaignService);
}

//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUploadCampService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUpCampList(data: any): Array<model.UpCampistModel>;

    }
    export class UploadCampService extends GCPL.Service.BaseService implements IUploadCampService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetUploadCampaignList";
            var SearchText;          

            debugger;

            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }
            

            let config = {
                params: {
                    SearchText: SearchText
                   
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetUpCampList(data: any): Array<model.UpCampistModel> {
            let list = Array<model.UpCampistModel>();

            for (let item of data) {
                list.push({

                    CampaignID: item.CampaignID,
                    CampaignName: item.CampaignName,
                    Description: item.Description,
                    SAPID: item.SAPID,
                    LeadSourceID: item.LeadSourceID,
                    StartDate: item.StartDate,
                    EndDate: item.EndDate,
                    Status: ((item.Status == "True") ? "Active" : "Inactive"),
                    LeadSource: item.LeadSource,
                    WhenEntered: item.WhenEntered
                                    
                });
            }
            return list;
        }

    }
    app.AddService("UploadCampService", UploadCampService);
}

//CampaignName dd

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICampaignddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCampaignName(data: any): Array<model.CampaignddModel>;
    }
    export class CampaignddService extends GCPL.Service.BaseService implements ICampaignddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CampaignNameDD"}`;
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

        GetCampaignName(data: any): Array<model.CampaignddModel> {
            let list = Array<model.CampaignddModel>();
            for (let item of data) {
                list.push({
                    CampaignID: item.CampaignID.toString(),
                    CampaignName: item.CampaignName,
                });
            }
            return list;
        }
    }

    app.AddService("CampaignddService", CampaignddService);
}