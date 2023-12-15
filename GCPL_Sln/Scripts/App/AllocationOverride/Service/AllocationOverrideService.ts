//List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAllocationOverrideListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAllocationOverList(data: any): Array<model.AllocationOverrideListModel>;

    }
    export class AllocationOverrideListService extends GCPL.Service.BaseService implements IAllocationOverrideListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/AllocationOverride";
            var SearchInput;
            var LeadID;
            debugger;

            if (data.SearchInput == undefined) {
                SearchInput = '';
            }
            else {
                SearchInput = data.SearchInput;

            }
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;

            }

            debugger;
            let config = {
                params: {
                    SearchInput: SearchInput,
                    LeadID: LeadID

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetAllocationOverList(data: any): Array<model.AllocationOverrideListModel> {
            let list = Array<model.AllocationOverrideListModel>();
            debugger;
            for (let item of data) {
                list.push({

                    Companyname: item.Companyname,
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    WhenEntered: item.WhenEntered,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    Title: item.Title,
                    Status: item.Status,
                    CreatedBy: item.CreatedBy,
                    FullNameCreatedBy: item.FullNameCreatedBy,
                    MobileNo: item.MobileNo,
                    LeadID: item.LeadID,
                    AllocatedTo: item.AllocatedTo,
                    FullNameAllocatedTo: item.FullNameAllocatedTo,
                    CustomerID: item.CustomerID,
                    ContactID: item.ContactID
                });
            }
            return list;
        }

    }
    app.AddService("AllocationOverrideListService", AllocationOverrideListService);
}

//insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertAllocationOverrideService {
        PostAllocation(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertAllocationOverrideService extends GCPL.Service.BaseService implements IInsertAllocationOverrideService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertAllocationOverride"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostAllocation(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertAllocationOverrideService", InsertAllocationOverrideService);
}