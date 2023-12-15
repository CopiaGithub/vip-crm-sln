namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserLogGridService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetUserLogGrid(data: any): Array<model.UserLogGridModel>;

    }
    export class UserLogGridService extends GCPL.Service.BaseService implements IUserLogGridService {
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
            var url = this.apiUrl + "UserLog";
            var UserName;
            var FromDate;
            var ToDate;


            if (data.UserName == undefined) {
                UserName = '';
            }
            else {

                UserName = data.UserName
            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {

                FromDate = data.FromDate
            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {

                ToDate = data.ToDate
            }



            let config = {
                params: {
                    UserName: UserName,
                    FromDate: FromDate,
                    ToDate: ToDate


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetUserLogGrid(data: any): Array<model.UserLogGridModel> {

            let list = Array<model.UserLogGridModel>();

            for (let item of data) {
                list.push({
                    UserId: item.UserId,
                    EmployeeCode: item.EmployeeCode,
                    FirstName: item.FirstName,
                    LoginFrom: item.LoginFrom,
                    LoginTime: item.LoginTime,
                    LogOutTime: item.LogOutTime
                 
                });
            }

            return list;
        }

    }
    app.AddService("UserLogGridService", UserLogGridService);
}