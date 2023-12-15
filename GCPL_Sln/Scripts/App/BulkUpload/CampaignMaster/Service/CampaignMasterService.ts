//Insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertCampaignService {
        PostCampaign(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertCampaignService extends GCPL.Service.BaseService implements IInsertCampaignService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CampaignMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostCampaign(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertCampaignService", InsertCampaignService);
}

//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICampaignListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCampaignList(data: any): Array<model.CamlistModel>;

    }
    export class CampaignListService extends GCPL.Service.BaseService implements ICampaignListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetCampaignMasterList";
            var SearchText;
            var LeadSourceID;
            var StatusID;
            debugger;

            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }
            if (data.LeadSourceID == undefined) {
                LeadSourceID = '';
            }
            else {
                LeadSourceID = data.LeadSourceID;

            }
            if (data.StatusID == undefined) {
                StatusID = '';
            }
            else {
                StatusID = data.StatusID;

            }

            let config = {
                params: {
                    SearchText: SearchText,
                    LeadSourceID: LeadSourceID,
                    StatusID: StatusID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCampaignList(data: any): Array<model.CamlistModel> {
            let list = Array<model.CamlistModel>();

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
                    WhenEntered: item.WhenEntered,
                    TargetedLeads: item.TargetedLeads,
                    EstimatedCost: item.EstimatedCost
                });
            }
            return list;
        }

    }
    app.AddService("CampaignListService", CampaignListService);
}

//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICampaignEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditCamlistModel;
    }
    export class CampaignEditService extends GCPL.Service.BaseService implements ICampaignEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillCampaignMasterList"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CampaignID;

            if (data == undefined) {
                CampaignID = "";
            }
            else {
                CampaignID = data;
            }

            let config = {
                params: {
                    CampaignID: CampaignID

                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditCamlistModel {
            debugger;
            let obj = new model.EditCamlistModel();


                obj.CampaignID = data.CampaignID,
                obj.CampaignName = data.CampaignName,
                obj.Description = data.Description,
                obj.SAPID = data.SAPID,
                obj.LeadSourceID = data.LeadSourceID,
                obj.StartDate = data.StartDate,
                obj.EndDate = data.EndDate,
                obj.Status = data.Status,
                obj.TargetedLeads = data.TargetedLeads,
                obj.EstimatedCost = data.EstimatedCost

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("CampaignEditService", CampaignEditService);
}