//Channel dropdown
namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IChannelDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetChannelDDnew(data: any): Array<model.ChannelDDModel>;
    }
    export class ChannelDDService extends GCPL.Service.BaseService implements IChannelDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ChannelDD"}`;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }
        GetChannelDDnew(data: any): Array<model.ChannelDDModel> {
            let list = Array<model.ChannelDDModel>();
            for (let item of data) {
                
                list.push({
                    ID: item.ID,
                    Channel: item.Channel
                });
            }


            return list;
        }
    }
    app.AddService("ChannelDDService", ChannelDDService);
}

//Search

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadSourceListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadSourceListData(data: any): Array<model.LeadSourceListModel>;

    }
    export class LeadSourceListService extends GCPL.Service.BaseService implements ILeadSourceListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadSource";
            var SearchText;
            var Status;
            var Channel;
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
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }

            
            let config = {
                params: {
                    SearchText: SearchText,
                    Status: Status,
                    Channel: Channel
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetLeadSourceListData(data: any): Array<model.LeadSourceListModel> {
            let list = Array<model.LeadSourceListModel>();

            for (let item of data) {
                list.push({

                    LeadSourceID: item.LeadSourceID,
                    LeadSource: item.LeadSource,
                    ChannelName: item.ChannelName,
                    Description: item.Description,
                    WhenEntered: item.WhenEntered,

                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                                        
                });
            }
            return list;
        }

    }
    app.AddService("LeadSourceListService", LeadSourceListService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertLeadSourceService {
        PostLeadSource(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertLeadSourceService extends GCPL.Service.BaseService implements IInsertLeadSourceService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertLeadSource"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLeadSource(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertLeadSourceService", InsertLeadSourceService);
}


//edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadSourceEditService{
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditLeadSourceModel;
    }
    export class LeadSourceEditService extends GCPL.Service.BaseService implements ILeadSourceEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillLeadSource"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var LeadSourceID;
            debugger;
            if (data == undefined) {
                LeadSourceID = "";
            }
            else {
                LeadSourceID = data;
            }

            let config = {
                params: {
                    LeadSourceID: LeadSourceID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditLeadSourceModel {
            debugger;
            let obj = new model.EditLeadSourceModel();


            obj.LeadSourceID = data.LeadSourceID,
                obj.LeadSource = data.LeadSource,

                obj.ID = data.ChannelID,
                obj.Description = data.Description,

                obj.Status = data.Status


           
            return obj;

        }
    }


    app.AddService("LeadSourceEditService", LeadSourceEditService);
}
