/// <reference path="../../../typings/angularjs/angular.d.ts" />


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IMenuService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetMenuGroup(data: any): Array<model.MenuGroupResponse>;
        //FindSub(data: any): ng.IPromise<Utility.Ajax.IResponse>;
       // GetMenuSub(data: any): Array<model.MenuSubResponse>;
    }
    export class MenuService extends GCPL.Service.BaseService implements IMenuService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
      
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {

                params: {

                    RoleID: data.RoleId
                    //BusinessEntityID: data.BusinessEntityID,
                    //MainModuleId: this.Cookie.get('UserInfo')['MainModuleID']
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "MenuBindingctrl",
                Config: config
            });
        }

        //FindSub(data: any): ng.IHttpPromise<model.MenuRequest> {
        //    let config = {

        //        params: {

        //            ModuleGroupID: data.MenuGroupID,
        //            BusinessEntityID: data.BusinessEntityID
        //        }
        //    };
        //    return this.ajaXUtility.Get({
        //        Url: this.apiUrl + "SubMenuctrl",
        //        Config: config
        //    });
        //}

        GetMenuGroup(data: any): Array<model.MenuGroupResponse> {
            let list = Array<model.MenuGroupResponse>();
            
          for (let item of data) {
                list.push({
                    //ColorCode: item.ColorCode,
                    GroupName: item.GroupName,
                    //IsIcon: item.IsIcon,
                    MenuGroupID: item.MenuGroupID,
                    //BusinessEntityID: item.BusinessEntityID,
                    //ModuleId: item.ModuleId,
                    //MainModule: item.MainModule,
                    objSubmenu: item.objSubmenu
                });
            }

            return list;
        }


        //GetMenuSub(data: any): Array<model.MenuSubResponse> {
        //    let list = Array<model.MenuSubResponse>();
        //    for (let item of data) {
        //        list.push({
        //            IsIcon: item.IsIcon,
        //            ModuleGroupID: item.ModuleGroupID,
        //            ModuleID: item.ModuleID,
        //            ModuleName: item.ModuleName,
        //            Title: item.Title

        //        });
        //    }
        //    return list;
        //}

    }
    app.AddService("MenuService", MenuService);
}