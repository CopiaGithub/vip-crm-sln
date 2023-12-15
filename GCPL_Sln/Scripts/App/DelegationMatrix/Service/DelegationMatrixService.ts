namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeligationMasterService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetDeligationGrid(data: any): Array<model.DeligationMasterGridModel>;

    }
    export class DeligationMasterService extends GCPL.Service.BaseService implements IDeligationMasterService {
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
            var url = this.apiUrl + "DeligationMatrix";
            var SearchInput;
            var SearchManagerName;
            var ZoneName;
            var Status;


            if (data.SearchInput == undefined) {
                SearchInput = '';
            }
            else {

                SearchInput = data.SearchInput
            }
            if (data.SearchManagerName == undefined) {
                SearchManagerName = '';
            }
            else {

                SearchManagerName = data.SearchManagerName
            }
            if (data.ZoneName == undefined) {
                ZoneName = '';
            }
            else {

                ZoneName = data.ZoneName
            }

            if (data.Status == undefined) {
                Status = '';
            }
            else {

                Status = data.Status
            }



            let config = {
                params: {
                    SearchInput: SearchInput,
                    SearchManagerName: SearchManagerName,
                    ZoneName: ZoneName,
                    Status: Status


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetDeligationGrid(data: any): Array<model.DeligationMasterGridModel> {

            let list = Array<model.DeligationMasterGridModel>();

            for (let item of data) {
                list.push({
                    ZoneName: item.ZoneName,
                    TeamAllocationID: item.TeamAllocationID,
                    ManagerName: item.ManagerName,
                    Employee: item.Employee,
                    DateCreated: item.DateCreated,
                    IsActive: ((item.IsActive == "True") ? "Active" : "Inactive")

                  

                });
            }

            return list;
        }

    }
    app.AddService("DeligationMasterService", DeligationMasterService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeligationMasterEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDeligationMasterEdit(data: any): model.DeligationMasterEditModel;
    }
    export class DeligationMasterEditService extends GCPL.Service.BaseService implements IDeligationMasterEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeligationMatrixEdit"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var TeamAllocationID;

            if (data == undefined) {
                TeamAllocationID = "";
            }
            else {
                TeamAllocationID = data;
            }
            let config = {
                params: {
                    TeamAllocationID: TeamAllocationID


                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }

            );
        }
        GetDeligationMasterEdit(data: any): model.DeligationMasterEditModel {
            let obj = new model.DeligationMasterEditModel();
            debugger;
            obj.TeamAllocationID = data.TeamAllocationID;
            obj.ManagersEmployeeCode = data.ManagerCode;
            obj.TeamLeadID = data.TeamLeadID;
            obj.EmployeeName = data.EmployeeName,
            obj.ManagerName = data.ManagerName;
            obj.Status = data.Status;
             
            return obj;
        }
    }


    app.AddService("DeligationMasterEditService", DeligationMasterEditService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertDeligationService {
        PostDeligationMatrix(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertDeligationService extends GCPL.Service.BaseService implements IInsertDeligationService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"DeligationMatrixInsert"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostDeligationMatrix(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertDeligationService", InsertDeligationService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IManagerAtofillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoManager(data: any): Array<model.ManagerAutofill>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class ManagerAtofillService extends GCPL.Service.BaseService implements IManagerAtofillService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }


        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ManagerAUtofill";

            let config = {
                params: {
                    Input: data.term,
                   
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutoManager(data: any): Array<model.ManagerAutofill> {


            let list = Array<model.ManagerAutofill>();


            for (let item of data) {
                list.push({
                    userid: item.userid,
                    ManagerEmployeeCode: item.ManagerEmployeeCode,
                    ManagerName: item.ManagerName


                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("ManagerAtofillService", ManagerAtofillService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEmployeeAtofillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutEmployee(data: any): Array<model.EmployeeAutofill>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class EmployeeAtofillService extends GCPL.Service.BaseService implements IEmployeeAtofillService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }


        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ManagerAUtofill";

            let config = {
                params: {
                    Input: data.term,

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutEmployee(data: any): Array<model.EmployeeAutofill> {


            let list = Array<model.EmployeeAutofill>();


            for (let item of data) {
               
                list.push({
                    
                    userid: item.userid,
                    EmployeeCode: item.ManagerEmployeeCode,
                    Name: item.ManagerName
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("EmployeeAtofillService", EmployeeAtofillService);
}

//DELETE Delegation Matrix

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteDelegationService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postDelegationDelete(data: any): void;
    }
    export class DeleteDelegationService extends GCPL.Service.BaseService implements IDeleteDelegationService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteDelegation"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    TeamAllocationID: data
                }
            };
            return this.ajaXUtility.Post({

                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postDelegationDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });

        }
    }

    app.AddService("DeleteDelegationService", DeleteDelegationService);
}