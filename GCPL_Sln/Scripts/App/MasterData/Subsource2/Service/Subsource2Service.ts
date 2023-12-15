//SubSource dd 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISubSourceDDwpService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSubSourceName(data: any): Array<model.SubSourceDDwpModel>;
    }
    export class SubSourceDDwpService extends GCPL.Service.BaseService implements ISubSourceDDwpService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SubSourceDDwp"}`;
        }


        Find(data): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    LeadSourceID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetSubSourceName(data: any): Array<model.SubSourceDDwpModel> {
            let list = Array<model.SubSourceDDwpModel>();
            for (let item of data) {
                list.push({
                    SubsourceID: item.SubsourceID.toString(),
                    Subsource: item.Subsource,
                });
            }
            return list;
        }
    }

    app.AddService("SubSourceDDwpService", SubSourceDDwpService);
}

//Search

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISubSource2ListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSubSource2ListData(data: any): Array<model.SubSource2ListModel>;

    }
    export class SubSource2ListService extends GCPL.Service.BaseService implements ISubSource2ListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/Subsource2";
            //var SearchText;
            var Subsource2;
            debugger;

            if (data.Subsource2 == undefined) {
                Subsource2 = '';
            }
            else {
                Subsource2 = data.Subsource2;

            }


            let config = {
                params: {
                    //SearchText: SearchText,
                    Subsource2: Subsource2
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSubSource2ListData(data: any): Array<model.SubSource2ListModel> {
            let list = Array<model.SubSource2ListModel>();

            for (let item of data) {
                list.push({

                    Subsource2ID: item.Subsource2ID,
                    LeadSource: item.LeadSource,
                    LeadSourceID: item.LeadSourceID,
                    Subsource2: item.Subsource2,
                    SubsourceID: item.SubsourceID,
                    Subsource: item.Subsource,
                    Description: item.Description,
                    IsActive: ((item.Status == "True") ? "Active" : "Inactive")


                });
            }
            return list;
        }

    }
    app.AddService("SubSource2ListService", SubSource2ListService);
}

//INSERT
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertSubsource2Service {
        PostSubsource2(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertSubsource2Service extends GCPL.Service.BaseService implements IInsertSubsource2Service {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertSubsource2"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostSubsource2(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertSubsource2Service", InsertSubsource2Service);
}

//edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISubsource2EditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditSubsource2Model;
    }
    export class Subsource2EditService extends GCPL.Service.BaseService implements ISubsource2EditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillSubsource2"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Subsource2ID;

            if (data == undefined) {
                Subsource2ID = "";
            }
            else {
                Subsource2ID = data;
            }

            let config = {
                params: {
                    Subsource2ID: Subsource2ID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditSubsource2Model {
            debugger;
            let obj = new model.EditSubsource2Model();

                obj.Subsource2ID=data.Subsource2ID,
                obj.SubsourceID = data.SubsourceID,
                    obj.LeadSourceID = data.LeadSourceID,
                    obj.LeadSource = data.LeadSource,
                obj.Subsource2= data.Subsource2,
                //obj.Subsource = data.Subsource,
                obj.Description = data.Description,
                obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;


        }
    }


    app.AddService("Subsource2EditService", Subsource2EditService);
}
