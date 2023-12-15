//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccountTypeListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccountTypeList(data: any): Array<model.AccountTypeListModel>;

    }
    export class AccountTypeListService extends GCPL.Service.BaseService implements IAccountTypeListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/AccountTypeMaster";
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
        GetAccountTypeList(data: any): Array<model.AccountTypeListModel> {
            let list = Array<model.AccountTypeListModel>();

            for (let item of data) {
                list.push({

                   
                    AccountTypeID: item.AccountTypeID,
                    AccountType: item.AccountType,
                    WhenEntered: item.WhenEntered,      
                    Status: ((item.Status == "True") ? "Active" : "Inactive")


                });
            }
            return list;
        }

    }
    app.AddService("AccountTypeListService", AccountTypeListService);
}
//Insert

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertAccountService {
        PostAccount(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertAccountService extends GCPL.Service.BaseService implements IInsertAccountService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertAccountType"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostAccount(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertAccountService", InsertAccountService);
}
//Edit
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccountEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditAccountlistModel;
    }
    export class AccountEditService extends GCPL.Service.BaseService implements IAccountEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillAccountType"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var AccountTypeID;

            if (data == undefined) {
                AccountTypeID = "";
            }
            else {
                AccountTypeID = data;
            }

            let config = {
                params: {
                    AccountTypeID: AccountTypeID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditAccountlistModel {
            debugger;
            let obj = new model.EditAccountlistModel();


                obj.AccountTypeID = data.AccountTypeID,              
                    obj.AccountType = data.AccountType,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status

            //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")


            return obj;

        }
    }


    app.AddService("AccountEditService", AccountEditService);
}