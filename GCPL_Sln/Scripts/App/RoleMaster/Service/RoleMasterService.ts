namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IRoleMasterService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetRoleGrid(data: any): Array<model.RoleMasterGridModel>;

    }
    export class RoleMasterService extends GCPL.Service.BaseService implements IRoleMasterService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            var url = this.apiUrl + "RoleMaster";
            var SearchText;
            var Status;


            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {

                SearchText = data.SearchText
            }
          
            if (data.Status == undefined) {
                Status = '';
            }
            else {

                Status = data.Status
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

        GetRoleGrid(data: any): Array<model.RoleMasterGridModel> {

            let list = Array<model.RoleMasterGridModel>();

            for (let item of data) {
                list.push({
                    RoleID: item.RoleID,
                    Title: item.Title,
                    WhenEntered: item.WhenEntered,
                   // Status: item.Status,
                    Status: ((item.Status == "True") ? "Active" : "Inactive")
                  


               

                });
            }

            return list;
        }

    }
    app.AddService("RoleMasterService", RoleMasterService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IRoleMasterEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetRoleMasterEdit(data: any): model.RoleMasterEditModel;
    }
    export class RoleMasterEditService extends GCPL.Service.BaseService implements IRoleMasterEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillRoleMaster"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var RoleID;

            if (data == undefined) {
                RoleID = "";
            }
            else {
                RoleID = data;
            }
            let config = {
                params: {
                    RoleID: RoleID


                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }

            );
        }
        GetRoleMasterEdit(data: any): model.RoleMasterEditModel {
            let obj = new model.RoleMasterEditModel();
            debugger;
            obj.RoleID = data.RoleID,
                obj.Title = data.Title,
                obj.WhenEntered = data.WhenEntered,
                obj.Status = data.Status
               
            return obj;
        }
    }


    app.AddService("RoleMasterEditService", RoleMasterEditService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertRoleService {
        PostRoleMaster(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertRoleService extends GCPL.Service.BaseService implements IInsertRoleService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertRoleMaster"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostRoleMaster(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertRoleService", InsertRoleService);
}