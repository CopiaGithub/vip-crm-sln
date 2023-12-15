namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IMainModuleddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetMainModule(data: any): Array<model.MainModuleDDModel>;
    }
    export class MainModuleddService extends GCPL.Service.BaseService implements IMainModuleddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AccessModule"}`;
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

        GetMainModule(data: any): Array<model.MainModuleDDModel> {
            let list = Array<model.MainModuleDDModel>();
            for (let item of data) {
                list.push({
                    MainModuleID: item.MainModuleID,
                    MainModuleName: item.MainModuleName


                });
            }
            return list;
        }
    }

    app.AddService("MainModuleddService", MainModuleddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISubMainModuleddService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSubMainModule(data: any): Array<model.SubMainModuleModel>;
    }
    export class SubMainModuleddService extends GCPL.Service.BaseService implements ISubMainModuleddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SubModule"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var MainModuleParentID;

            if (data == undefined) {
                MainModuleParentID = "";
            }
            else {
                MainModuleParentID = data;
            }
            let config = {
                params: {
                    MainModuleParentID: MainModuleParentID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetSubMainModule(data: any): Array<model.SubMainModuleModel> {
            let list = Array<model.SubMainModuleModel>();
            for (let item of data) {
                list.push({
                    SubModuleID: item.SubModuleID,
                    SubModuleName: item.SubModuleName


                });
            }
            return list;
        }
    }

    app.AddService("SubMainModuleddService", SubMainModuleddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IMenuGridService {



        FindGrid(ParentID: any, RoleID: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetGrid(data: any): Array<model.MenuGridModel>;

    }
    export class MenuGridService extends GCPL.Service.BaseService implements IMenuGridService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        FindGrid(ParentID, RoleID): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            var url = this.apiUrl + "/RoleAccessRelationFillGridctrl";
            //var MainModuleParentID;
            var ParentID;
            var RoleID;
            let config = {
                params: {
                    //MainModuleParentID: MainModuleParentID,
                    ParentID: ParentID,
                    RoleID: RoleID


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetGrid(data: any): Array<model.MenuGridModel> {

            let list = Array<model.MenuGridModel>();

            for (let item of data) {
                list.push({
                    AccessModuleName: item.AccessModuleName,
                    AccessModuleID: item.AccessModuleID,
                    IsWeb: item.IsWeb,
                    IsMobile: item.IsMobile,
                    ParentMenuID: item.ParentMenuID,
                    SubMenuID: item.SubMenuID

                });
            }

            return list;
        }

    }
    app.AddService("MenuGridService", MenuGridService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertAccessRoleService {
        PostRoleAccessRelation(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertAccessRoleService extends GCPL.Service.BaseService implements IInsertAccessRoleService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"RoleInsert"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostRoleAccessRelation(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertAccessRoleService", InsertAccessRoleService);
}