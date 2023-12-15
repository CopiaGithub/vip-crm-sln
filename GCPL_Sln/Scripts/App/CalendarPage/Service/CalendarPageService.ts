namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeligationTypeservice {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCalDeldDDl(data: any): Array<model.GetCalDeligDDlModel>;
    }
    export class DeligationTypeservice extends GCPL.Service.BaseService implements IDeligationTypeservice {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CalendarDeligationddl";
            var ManagerCode;
            var UserID;
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {
                UserID = data.UserID;
            }
           
            let config = {
                params: {
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetCalDeldDDl(data: any): Array<model.GetCalDeligDDlModel> {
            let list = Array<model.GetCalDeligDDlModel>();
            for (let item of data) {
                list.push({
                    ManagerCode: item.ManagerCode.toString(),
                    EmployeeName: item.EmployeeName
                });
            }
            return list;
        }
    }

    app.AddService("DeligationTypeservice", DeligationTypeservice);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    export interface ICalActListService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserActList(data: any): Array<model.CalActlistModel>;
    }
    export class CalActListService extends GCPL.Service.BaseService implements ICalActListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CalActivityList";
            var UserID;
            var ManagerCode;
            debugger;
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {
                UserID = data.UserID;

            }
            if (data.ManagerCode == undefined) {
                ManagerCode = '';
            }
            else {
                ManagerCode = data.ManagerCode;
            }
            let config = {
                params: {
                    ManagerCode: ManagerCode,
                    UserID: UserID,
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetUserActList(data: any): Array<model.CalActlistModel> {
            let list = Array<model.CalActlistModel>();
            debugger;
            for (let item of data) {
                list.push({
                    ActivityDate: item.ActivityDate,
                    Status: item.Status,
                    ActivityNumber: item.ActivityNumber,
                    color: item.color,
                    ManagerCode: item.ManagerCode,
                    WhenEntered: item.WhenEntered
                });
            }
            return list;
        }
    }

    app.AddService("CalActListService", CalActListService);
}