//List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IReallocateLeadListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetReallocateList(data: any): Array<model.ReallocateListModel>;

    }
    export class ReallocateLeadListService extends GCPL.Service.BaseService implements IReallocateLeadListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/GetReAllocateLead";
            var LeadID;
            var SearchInput;
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;

            }

            if (data.SearchInput == undefined) {
                SearchInput = '';
            }
            else {
                SearchInput = data.SearchInput;

            }


            let config = {
                params: {
                    LeadID: LeadID,
                    SearchInput: SearchInput

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetReallocateList(data: any): Array<model.ReallocateListModel> {
            let list = Array<model.ReallocateListModel>();
            
            for (let item of data) {
                list.push({
                    LeadType: item.LeadType,	
                    Companyname: item.Companyname,
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    WhenEntered: item.WhenEntered,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    Title: item.Title,
                    Status: item.Status,
                    FirstName: item.FirstName,
                    FullName: item.FullName,
                    MobileNo: item.MobileNo,
                    LeadID: item.LeadID,
                    CustomerID: item.CustomerID,
                    ContactID: item.ContactID
                });
            }
            return list;
        }

    }
    app.AddService("ReallocateLeadListService", ReallocateLeadListService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertReallocateLeadsService {
        PostReallocate(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertReallocateLeadsService extends GCPL.Service.BaseService implements IInsertReallocateLeadsService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertReAllocateLead"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostReallocate(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertReallocateLeadsService", InsertReallocateLeadsService);
}



namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IGetEmployeeCodeService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEmpCodeInfo(data: any): model.GetEmpCodeModel;

    }
    export class GetEmployeeCodeService extends GCPL.Service.BaseService implements IGetEmployeeCodeService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        //static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data): ng.IPromise<Utility.Ajax.IResponse> {
            
            var url = this.apiUrl + "/GetUserEmpCode";
            var UserID;

            if (data == undefined) {
                UserID = "";
            }
            else {
                UserID = data;
            }

            let config = {

                params: {

                    UserID: UserID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetEmpCodeInfo(data: any): model.GetEmpCodeModel {
            
            let obj = new model.GetEmpCodeModel;
            
            obj.EmployeeCode = data.EmployeeCode;

            return obj;
        }


    }
    app.AddService("GetEmployeeCodeService", GetEmployeeCodeService);
}

