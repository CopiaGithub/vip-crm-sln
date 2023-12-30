namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAssessmentListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAssessmentList(data: any): Array<model.AssessmentListModel>;

    }
    export class AssessmentListService extends GCPL.Service.BaseService implements IAssessmentListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadAssessmentList";
            var SearchInput;
            var LeadStatusID;
            var UserID;
            var RoleID;
            var LeadID;
            

            if (data.SearchInput == undefined) {
                SearchInput = '';
            }
            else {
                SearchInput = data.SearchInput;
            }


            if (data.LeadStatusID == undefined) {
                LeadStatusID = '';
            }
            else {
                LeadStatusID = data.LeadStatusID;

            }
            if (data.UserID == undefined) {
                UserID = '';
            }
            else {
                UserID = data.UserID;

            }
            if (data.RoleID == undefined) {
                RoleID = '';
            }
            else {
                RoleID = data.RoleID;

            }
            if (data.LeadID == undefined) {
                LeadID = '';
            }
            else {
                LeadID = data.LeadID;
            }

            let config = {
                params: {
                    SearchInput: SearchInput,
                    StatusID: LeadStatusID,
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    LeadID: LeadID

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetAssessmentList(data: any): Array<model.AssessmentListModel> {
            let list = Array<model.AssessmentListModel>();

            for (let item of data) {
                list.push({

                    CompanyName: item.CompanyName,
                    EmployeeCode: item.EmployeeCode,
                    WhenEntered: item.WhenEntered,
                    Product: item.Product,
                    ModelNo: item.ModelNo,
                    CustomerID: item.CustomerID,
                    Title: item.Title,
                    StatusID: item.Status,
                    FirstName: item.FirstName,
                    MobileNo: item.MobileNo,
                    LeadID: item.LeadID,
                    ContactID: item.ContactID,
                    LeadSource: item.LeadSource,
                    AllocatedToID: item.AllocatedToID,
                    AllocatedTo: item.AllocatedTo,
                    OpportunityAssessmentID: item.OpportunityAssessmentID,
                    Comments: item.Comments,
                    IsLess: item.IsLess,
                    IsMeet: item.IsMeet

                });
            }
            return list;
        }

    }
    app.AddService("AssessmentListService", AssessmentListService);
}
//LEadAssessment Status Dropdown
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadStatusAssessmentddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadStatusAssessmentName(data: any): Array<model.LeadStatusddlModel>;
    }
    export class LeadStatusAssessmentddService extends GCPL.Service.BaseService implements ILeadStatusAssessmentddService {

        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadStatusAssessmentDD"}`;
            this.Cookie = _cookieStore;
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

        GetLeadStatusAssessmentName(data: any): Array<model.LeadStatusddlModel> {
            let list = Array<model.LeadStatusddlModel>();
            for (let item of data) {
                list.push({
                    LeadStatusID: item.LeadStatusID.toString(),
                    Status: item.Status,
                });
            }
            return list;
        }
    }

    app.AddService("LeadStatusAssessmentddService", LeadStatusAssessmentddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteLeadService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postLeadDelete(data: any): void;
    }
    export class DeleteLeadService extends GCPL.Service.BaseService implements IDeleteLeadService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteLead"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    LeadID: data
                }
            };
            return this.ajaXUtility.Post({

                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postLeadDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });

        }
    }

    app.AddService("DeleteLeadService", DeleteLeadService);
}
