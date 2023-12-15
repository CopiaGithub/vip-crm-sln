//State with region dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectTrackerDashboardService {

        Find(data: any, Data1: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetModelData(data: any): Array<model.ModelgraphModel>;
        GetLeadStatusData(data: any): Array<model.LeadStatusgraphModel>;
        GetOpportunityData(data: any): Array<model.OpportunitygraphModel>;
        GetDivisionData(data: any): Array<model.DivisiongraphModel>;
        GetProjectTypeData(data: any): Array<model.ProjectTypegraphModel>;
        GetProjectSourceData(data: any): Array<model.ProjectSourcegraphModel>;
        GetProjectIndustryData(data: any): Array<model.ProjectIndustrygraphModel>;
        GetProjectStageData(data: any): Array<model.ProjectStagegraphModel>;
        GetProjectZoneData(data: any): Array<model.ProjectZonegraphModel>;
        GetProjectAssignToData(data: any): Array<model.ProjectAssignTographModel>;
        GetOppEquipmentQuantityData(data: any): Array<model.OppModelgraphModel>;
      
    }
    export class ProjectTrackerDashboardService extends GCPL.Service.BaseService implements IProjectTrackerDashboardService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"ProjectTrackerDashboard"}`;
        }
        Find(data: any, Data1: any): ng.IPromise<Utility.Ajax.IResponse> {

            var ProjectID;
            var ProjectName;
            var ProjectType;
            var ProjectStage;
            var ProjectStartDate;
            var CompletionDate;
            var ProjectSource;
            var Industry;
            var ZoneID;
            var UserID;
            var CustProjectType;



            if (data.ProjectID == undefined) {
                ProjectID = '';
            }
            else {
                ProjectID = data.ProjectID
            }
            if (data.ProjectName == undefined) {
                ProjectName = '';
            }
            else {
                ProjectName = data.ProjectName
            }
            if (data.ProjectType == undefined) {
                ProjectType = '';
            }
            else {
                ProjectType = data.ProjectType
            }
            if (data.ProjectStage == undefined) {
                ProjectStage = '';
            }
            else {
                ProjectStage = data.ProjectStage

            }
            if (data.ProjectStartDate == undefined) {
                ProjectStartDate = '';
            }
            else {
                ProjectStartDate = data.ProjectStartDate

            }
            if (data.CompletionDate == undefined) {
                CompletionDate = '';
            }
            else {
                CompletionDate = data.CompletionDate

            }
            if (data.ProjectSource == undefined) {
                ProjectSource = '';
            }
            else {
                ProjectSource = data.ProjectSource

            }
            if (data.Industry == undefined) {
                Industry = '';
            }
            else {
                Industry = data.Industry

            }
            if (data.ZoneID == undefined) {
                ZoneID = '';
            }
            else {
                ZoneID = data.ZoneID

            }
            if (data.ProjectAssignID == undefined) {
                UserID = '';
            }
            else {
                UserID = data.ProjectAssignID

            }
            if (data.CustProjectType == undefined) {
                CustProjectType = '';
            }
            else {
                CustProjectType = data.CustProjectType

            }



            let config = {
                params: {
                    ProjectID: ProjectID,
                    //ProjectName: ProjectName,
                    ProjectType: ProjectType,
                    ProjectStage: ProjectStage,
                    ProjectStartDate: ProjectStartDate,
                    CompletionDate: CompletionDate,
                    ProjectSource: ProjectSource,
                    ProjectIndustry: Industry,
                    ZoneID: ZoneID,
                    UserID: UserID,
                    CustProjectType: CustProjectType,
                    Flag: Data1
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }
       
        GetModelData(data: any): Array<model.ModelgraphModel> {
            let list = Array<model.ModelgraphModel>();
            for (let item of data) {
                list.push({
                    label: item.Model,
                    value: parseInt(item.ModelCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetLeadStatusData(data: any): Array<model.LeadStatusgraphModel> {
            let list = Array<model.LeadStatusgraphModel>();
            for (let item of data) {
                list.push({
                    label: item.Status,
                    value: parseInt(item.CountLeadStatus),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetOpportunityData(data: any): Array<model.OpportunitygraphModel> {
            let list = Array<model.OpportunitygraphModel>();
            for (let item of data) {
                list.push({
                    label: item.Status,
                    value: parseInt(item.OpportunityStatusCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetDivisionData(data: any): Array<model.DivisiongraphModel> {
            let list = Array<model.DivisiongraphModel>();
            for (let item of data) {
                list.push({
                    label: item.Division,
                    value: parseInt(item.DivisionCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetProjectTypeData(data: any): Array<model.ProjectTypegraphModel> {
            let list = Array<model.ProjectTypegraphModel>();
            for (let item of data) {
                list.push({
                    label: item.ProjectType,
                    value: parseInt(item.ProjectTypeCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetProjectSourceData(data: any): Array<model.ProjectSourcegraphModel> {
            let list = Array<model.ProjectSourcegraphModel>();
            for (let item of data) {
                list.push({
                    label: item.ProjectSource,
                    value: parseInt(item.ProjectSourceCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetProjectIndustryData(data: any): Array<model.ProjectIndustrygraphModel> {
            let list = Array<model.ProjectIndustrygraphModel>();
            for (let item of data) {
                list.push({
                    label: item.ProjectIndustry,
                    value: parseInt(item.ProjectIndustryCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetProjectStageData(data: any): Array<model.ProjectStagegraphModel> {
            let list = Array<model.ProjectStagegraphModel>();
            for (let item of data) {
                list.push({
                    label: item.ProjectStage,
                    value: parseInt(item.ProjectStageCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetProjectZoneData(data: any): Array<model.ProjectZonegraphModel> {
            let list = Array<model.ProjectZonegraphModel>();
            for (let item of data) {
                list.push({
                    label: item.ZoneName,
                    value: parseInt(item.ZoneCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetProjectAssignToData(data: any): Array<model.ProjectAssignTographModel> {
            let list = Array<model.ProjectAssignTographModel>();
            for (let item of data) {
                list.push({
                    label: item.Name,
                    value: parseInt(item.AssignToCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

        GetOppEquipmentQuantityData(data: any): Array<model.OppModelgraphModel> {
            debugger;
            let list = Array<model.OppModelgraphModel>();
            for (let item of data) {
                debugger;
                list.push({
                    label: item.OppModel,
                    value: parseInt(item.OppModelCount),
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
                });
            }
            return list;
        }

    }

    app.AddService("ProjectTrackerDashboardService", ProjectTrackerDashboardService);
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