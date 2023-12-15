//List

namespace GCPL.Service{
    import app = GCPL.app;
    import model = GCPL.Model;


    export interface IIndustrialSegmentListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetIndustrialList(data: any): Array<model.IndustrialListModel>;

    }
    export class IndustrialSegmentListService extends GCPL.Service.BaseService implements IIndustrialSegmentListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/IndustrialSegmentMaster";
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
        GetIndustrialList(data: any): Array<model.IndustrialListModel> {
            let list = Array<model.IndustrialListModel>();

            for (let item of data) {
                list.push({

                    IndustrialSegmentID: item.IndustrialSegmentID,
                    IndustrialSegment: item.IndustrialSegment,
                    SAPID: item.SAPID,
                    WhenEntered: item.WhenEntered,                  
                    Status: ((item.Status == "True") ? "Active" : "Inactive")


                });
            }
            return list;
        }

    }
    app.AddService("IndustrialSegmentListService", IndustrialSegmentListService);
}
//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertIndustrialService {
        PostIndustrial(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertIndustrialService extends GCPL.Service.BaseService implements IInsertIndustrialService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertIndustrialSegment"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostIndustrial(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertIndustrialService", InsertIndustrialService);
}
//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IIndustrialEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditIndustriallistModel;
    }
    export class IndustrialEditService extends GCPL.Service.BaseService implements IIndustrialEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillIndustrialSegment"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var IndustrialSegmentID;

            if (data == undefined) {
                IndustrialSegmentID = "";
            }
            else {
                IndustrialSegmentID = data;
            }

            let config = {
                params: {
                    IndustrialSegmentID: IndustrialSegmentID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditIndustriallistModel {
            debugger;
            let obj = new model.EditIndustriallistModel();


            obj.IndustrialSegmentID = data.IndustrialSegmentID,              
                obj.IndustrialSegment = data.IndustrialSegment,
                obj.SAPID = data.SAPID,
                obj.WhenEntered = data.WhenEntered,
                obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("IndustrialEditService", IndustrialEditService);
}