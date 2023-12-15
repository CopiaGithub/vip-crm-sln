//search
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDistributionChannelService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDistributionChannelData(data: any): Array<model.DistributionChannelListModel>;

    }
    export class DistributionChannelService extends GCPL.Service.BaseService implements IDistributionChannelService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/DistributionChannel";
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
        GetDistributionChannelData(data: any): Array<model.DistributionChannelListModel> {
            let list = Array<model.DistributionChannelListModel>();

            for (let item of data) {
                list.push({

                    DistributionChannelID: item.DistributionChannelID,
                    DistributionChannel: item.DistributionChannel,
                    SAPID: item.SAPID,
                    WhenEntered: item.WhenEntered,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("DistributionChannelService", DistributionChannelService);
}


//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertDistributionChannelService {
        PostDistributionChannel(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertDistributionChannelService extends GCPL.Service.BaseService implements IInsertDistributionChannelService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertDistributionChannel"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostDistributionChannel(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertDistributionChannelService", InsertDistributionChannelService);
}

//edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDistributionChannelEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditDistributionChannelModel;
    }
    export class DistributionChannelEditService extends GCPL.Service.BaseService implements IDistributionChannelEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillDistributionChannel"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var DistributionChannelID;

            if (data == undefined) {
                DistributionChannelID = "";
            }
            else {
                DistributionChannelID = data;
            }

            let config = {
                params: {
                    DistributionChannelID: DistributionChannelID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditDistributionChannelModel {
            debugger;
            let obj = new model.EditDistributionChannelModel();


            obj.DistributionChannelID = data.DistributionChannelID,
                obj.DistributionChannel = data.DistributionChannel,
                obj.SAPID = data.SAPID,
                obj.WhenEntered = data.WhenEntered,
                obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("DistributionChannelEditService", DistributionChannelEditService);
}