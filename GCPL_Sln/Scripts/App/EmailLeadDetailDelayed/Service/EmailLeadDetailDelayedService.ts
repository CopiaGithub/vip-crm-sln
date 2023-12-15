//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEmailLeadListService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetEmailLeadList(data: any): Array<model.EmailLeadListModel>;

    }
    export class EmailLeadListService extends GCPL.Service.BaseService implements IEmailLeadListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetEmailLeadDelayedList";

            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetEmailLeadList(data: any): Array<model.EmailLeadListModel> {
            let list = Array<model.EmailLeadListModel>();

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
    app.AddService("EmailLeadListService", EmailLeadListService);
}

//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertEmailLeadService {
        PostEmailLead(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertEmailLeadService extends GCPL.Service.BaseService implements IInsertEmailLeadService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"EmailLeadDetailDelayed"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostEmailLead(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertEmailLeadService", InsertEmailLeadService);
}

//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEmailLeadEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditEmailLeadListModel;
    }
    export class EmailLeadEditService extends GCPL.Service.BaseService implements IEmailLeadEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillEmailLeadDelayedList"}`;
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
        GetEdit(data: any): model.EditEmailLeadListModel {
            debugger;
            let obj = new model.EditEmailLeadListModel();


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


    app.AddService("EmailLeadEditService", EmailLeadEditService);
}