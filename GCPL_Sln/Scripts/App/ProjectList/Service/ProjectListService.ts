//List Project List
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectList(data: any): Array<model.ProjectGridListModel>;

    }
    export class ProjectListService extends GCPL.Service.BaseService implements IProjectListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ProjectTracker";
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
                    ID:ID,
                    ProjectType:ProjectType,
                    ProjectStage:ProjectStage,
                    ProjectStartDate:ProjectStartDate,
                    CompletionDate:CompletionDate,
                    ProjectSource:ProjectSource,
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
        GetProjectList(data: any): Array<model.ProjectGridListModel> {
            let list = Array<model.ProjectGridListModel>();

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
                    ID: item.ID
                    //ZoneName: item.ZoneName
                    //ProjectAssign: item.ProjectAssign
                });
            }
            return list;
        }

    }
    app.AddService("ProjectListService", ProjectListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IgetAutoProjectNameService {
        GetAutProjName(data: any): Array<model.ProjNameAutofill>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class getAutoProjectNameService extends GCPL.Service.BaseService implements IgetAutoProjectNameService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ProjectNameAUtofill";
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

        GetAutProjName(data: any): Array<model.ProjNameAutofill> {
            let list = Array<model.ProjNameAutofill>();
            for (let item of data) {
                list.push({
                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("getAutoProjectNameService", getAutoProjectNameService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IgetAutoProjectNOService {
        GetAutProjNo(data: any): Array<model.ProjNoAutofill>;
        FilterProjNo(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class getAutoProjectNOService extends GCPL.Service.BaseService implements IgetAutoProjectNOService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }
        FilterProjNo(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ProjectNumberAUtofill";
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

        GetAutProjNo(data: any): Array<model.ProjNoAutofill> {
            let list = Array<model.ProjNoAutofill>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    ProjectNo: item.ProjectNo
                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("getAutoProjectNOService", getAutoProjectNOService);
}