//List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IActivityOverrideListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetActivityOverrideList(data: any): Array<model.ActivityOverrideListModel>;

    }
    export class ActivityOverrideListService extends GCPL.Service.BaseService implements IActivityOverrideListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.Cookie = _cookieStore;
            this.apiUrl = `${this.url}`;

        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ActivityOverride";
            var SearchText;
            var LeadID;


            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;

            }

            let config = {
                params: {
                    SearchText: SearchText,
                    LeadID: LeadID

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetActivityOverrideList(data: any): Array<model.ActivityOverrideListModel> {
            let list = Array<model.ActivityOverrideListModel>();
            for (let item of data) {
                list.push({

                    CompanyName: item.CompanyName,
                    EmployeeCode: item.EmployeeCode,
                    WhenEntered: item.WhenEntered,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    CustomerID: item.CustomerID,
                    ContactID: item.ContactID,
                    LeadID: item.LeadID,
                    Title: item.Title,
                    Status: item.Status,
                    FirstName: item.FirstName,
                    MobileNo: item.MobileNo,
                    AllocatedTo: item.AllocatedTo,
                    AllocatedToID: item.AllocatedToID,
                    OpportunityAssessmentID: item.OpportunityAssessmentID,
                    Comments: item.Comments,
                    IsLess: item.IsLess,
                    IsMeet: item.IsMeet,
                    Latitude: item.Latitude,
                    Longitude: item.Longitude,
                    LeadSource: item.LeadSource
                });
            }
            return list;
        }

    }
    app.AddService("ActivityOverrideListService", ActivityOverrideListService);
}

//insert
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertActivityOverrideService {
        PostActivity(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertActivityOverrideService extends GCPL.Service.BaseService implements IInsertActivityOverrideService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertActivityOverride"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostActivity(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            debugger;
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertActivityOverrideService", InsertActivityOverrideService);
}