namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IZoneDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        Getzonenew(data: any): Array<model.ZoneDDModel>;
    }
    export class ZoneDDService extends GCPL.Service.BaseService implements IZoneDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ZoneDD"}`;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }
        Getzonenew(data: any): Array<model.ZoneDDModel> {
            let list = Array<model.ZoneDDModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    ZoneName: item.ZoneName
                });
            }


            return list;
        }
    }
    app.AddService("ZoneDDService", ZoneDDService);
}

//search
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOfficeListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesOfficeListData(data: any): Array<model.SalesOfficeListModel>;

    }
    export class SalesOfficeListService extends GCPL.Service.BaseService implements ISalesOfficeListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/SalesOffice";
            var SearchText;
            var Status;
            var Zone;
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
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }

            let config = {
                params: {
                    SearchText: SearchText,
                    Status: Status,
                    Zone: Zone
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSalesOfficeListData(data: any): Array<model.SalesOfficeListModel> {
            debugger;
            let list = Array<model.SalesOfficeListModel>();

            for (let item of data) {
                list.push({

                    SalesOfficeID: item.SalesOfficeID,
                    SalesOffice: item.SalesOffice,
                    SalesOfficeEmail: item.SalesOfficeEmail,
                    ZoneName: item.ZoneName,
                    ZoneID: item.ZoneID,
                    SAPID: item.SAPID,
                    WhenEntered: item.WhenEntered,
                    SOAddress: item.SOAddress,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("SalesOfficeListService", SalesOfficeListService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertSalesOfficeService {
        PostSalesOffice(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertSalesOfficeService extends GCPL.Service.BaseService implements IInsertSalesOfficeService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertSalesOffice"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostSalesOffice(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertSalesOfficeService", InsertSalesOfficeService);
}

// Edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOfficeEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditSalesOfficeModel;
    }
    export class SalesOfficeEditService extends GCPL.Service.BaseService implements ISalesOfficeEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillSalesOffice"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var SalesOfficeID;

            if (data == undefined) {
                SalesOfficeID = "";
            }
            else {
                SalesOfficeID = data;
            }

            let config = {
                params: {
                    SalesOfficeID: SalesOfficeID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditSalesOfficeModel {
            debugger;
            let obj = new model.EditSalesOfficeModel();


            obj.SalesOfficeID = data.SalesOfficeID,
                obj.SalesOffice = data.SalesOffice,
                obj.SalesOfficeEmail = data.SalesOfficeEmail,
                obj.ZoneID = data.ZoneID,
            
                obj.SAPID = data.SAPID,
                obj.WhenEntered = data.WhenEntered,
                obj.Status = data.Status,
                obj.SOAddress1 = data.SOAddress1,
                obj.SOAddress2 = data.SOAddress2,
                obj.SOAddress3 = data.SOAddress3,
                obj.SOAddress4 = data.SOAddress4
            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("SalesOfficeEditService", SalesOfficeEditService);
}