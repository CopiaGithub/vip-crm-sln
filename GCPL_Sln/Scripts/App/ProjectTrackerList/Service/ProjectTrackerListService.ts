namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectListReportService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectList(data: any): Array<model.ProjectGridListReportModel>;

    }
    export class ProjectListReportService extends GCPL.Service.BaseService implements IProjectListReportService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ProjectTrackerReport";
            var ProjectID;
            var ID;
            var ProjectType;
            var ProjectStage;
            var ProjectStartDate;
            var CompletionDate;
            var ProjectSource;
            var ProjectIndustry;
            var ZoneID;

            if (data.ProjectID == undefined) {
                ProjectID = '';
            }
            else {
                ProjectID = data.ProjectID;

            }

            if (data.ID == undefined) {
                ID = '';
            }
            else {
                ID = data.ID;

            }

            if (data.ProjectType == undefined) {
                ProjectType = '';
            }
            else {
                ProjectType = data.ProjectType;

            }

            if (data.ProjectStage == undefined) {
                ProjectStage = '';
            }
            else {
                ProjectStage = data.ProjectStage;

            }
            if (data.ProjectStartDate == undefined) {
                ProjectStartDate = '';
            }
            else {
                ProjectStartDate = data.ProjectStartDate;

            }
            if (data.CompletionDate == undefined) {
                CompletionDate = '';
            }
            else {
                CompletionDate = data.CompletionDate;

            }
            if (data.ProjectSource == undefined) {
                ProjectSource = '';
            }
            else {
                ProjectSource = data.ProjectSource;

            }
            if (data.ProjectIndustry == undefined) {
                ProjectIndustry = '';
            }
            else {
                ProjectIndustry = data.ProjectIndustry;

            }

            if (data.ZoneID == undefined) {
                ZoneID = '';
            }
            else {
                ZoneID = data.ZoneID;

            }
            let config = {
                params: {
                    ProjectID: ProjectID,
                    ID: ID,
                    ProjectType: ProjectType,
                    ProjectStage: ProjectStage,
                    ProjectStartDate: ProjectStartDate,
                    CompletionDate: CompletionDate,
                    ProjectSource: ProjectSource,
                    ProjectIndustry: ProjectIndustry,
                    ZoneID: ZoneID,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetProjectList(data: any): Array<model.ProjectGridListReportModel> {
            let list = Array<model.ProjectGridListReportModel>();

            for (let item of data) {
                list.push({
                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName,
                    ProjectNo: item.ProjectNo,
                    ProjectType: item.ProjectType,
                    ProjectStage: item.ProjectStage,
                    Cost: item.Cost,
                    ProjectOwnership: item.ProjectOwnership,
                    ProjectStartDate: item.ProjectStartDate,
                    CompletionDate: item.CompletionDate,
                    ProjectSource: item.ProjectSource,
                    Comments: item.Comments,
                    ProjectIndustry: item.ProjectIndustry,
                    ID: item.ID,
                    ZoneName: item.ZoneName,
                    CustomerType: item.CustomerType,
                    CompanyName: item.CompanyName,
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    MobileNo: item.MobileNo,
                    Address1: item.Address1,
                    Address2: item.Address2,
                    State: item.State,
                    District: item.District,
                    City: item.City,
                    ContactName: item.ContactName,
                    ContactSAPID: item.ContactSAPID,
                    ContactMobileNo: item.ContactMobileNo,
                    ContactAddress: item.ContactAddress,
                    Department: item.Department,
                    AssignTo: item.AssignTo,
                    ProjectOwner: item.ProjectOwner,
                    ProjectManager: item.ProjectManager
                });
            }
            return list;
        }

    }
    app.AddService("ProjectListReportService", ProjectListReportService);
}