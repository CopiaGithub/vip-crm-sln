//Insert Project
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICreateProjectService {
        CreateProject(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class CreateProjectService extends GCPL.Service.BaseService implements ICreateProjectService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"CreateProject"}`;
            this.Cookie = _cookieStore;
        }
        CreateProject(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("CreateProjectService", CreateProjectService);
}

//ProjectType DD
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectTypeService {

        FindProjectTypeDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectTypeDD(data: any): Array<model.GetProjectTypeDDModel>;
    }
    export class ProjectTypeService extends GCPL.Service.BaseService implements IProjectTypeService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ProjectType"}`;
        }


        FindProjectTypeDD(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetProjectTypeDD(data: any): Array<model.GetProjectTypeDDModel> {
            let list = Array<model.GetProjectTypeDDModel>();
            for (let item of data) {
                list.push({
                    ProjectTypeID: item.ProjectTypeID,
                    ProjectType: item.ProjectType
                });
            }
            return list;
        }
    }

    app.AddService("ProjectTypeService", ProjectTypeService);
}

//Project Stage DD
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectStageService {

        FindDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectStageDD(data: any): Array<model.GetProjectStageDDModel>;
    }
    export class ProjectStageService extends GCPL.Service.BaseService implements IProjectStageService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ProjectStage"}`;
        }


        FindDD(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetProjectStageDD(data: any): Array<model.GetProjectStageDDModel> {
            let list = Array<model.GetProjectStageDDModel>();
            for (let item of data) {
                list.push({
                    ProjectStageID: item.ProjectStageID,
                    ProjectStage: item.ProjectStage,
                });
            }
            return list;
        }
    }

    app.AddService("ProjectStageService", ProjectStageService);
}

//Project Industry DD
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectIndustryService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetIndustry(data: any): Array<model.GetIndustryDDModel>;
    }
    export class ProjectIndustryService extends GCPL.Service.BaseService implements IProjectIndustryService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ProjectIndustry"}`;
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

        GetIndustry(data: any): Array<model.GetIndustryDDModel> {
            let list = Array<model.GetIndustryDDModel>();
            for (let item of data) {
                list.push({
                    ProjectIndustryID: item.ProjectIndustryID,
                    ProjectIndustry: item.ProjectIndustry,
                });
            }
            return list;
        }
    }

    app.AddService("ProjectIndustryService", ProjectIndustryService);
}

//Project Ownership DD
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectOwnershipService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetOwnership(data: any): Array<model.GetOwnershipModel>;
    }
    export class ProjectOwnershipService extends GCPL.Service.BaseService implements IProjectOwnershipService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"Ownership"}`;
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

        GetOwnership(data: any): Array<model.GetOwnershipModel> {
            let list = Array<model.GetOwnershipModel>();
            for (let item of data) {
                list.push({
                    ProjectOwnershipID: item.ProjectOwnershipID,
                    ProjectOwnership: item.ProjectOwnership
                });
            }
            return list;
        }
    }

    app.AddService("ProjectOwnershipService", ProjectOwnershipService);
}

//Project Source DD
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectSourceService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectSource(data: any): Array<model.GetProjectSourceModel>;
    }
    export class ProjectSourceService extends GCPL.Service.BaseService implements IProjectSourceService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ProjectSource"}`;
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

        GetProjectSource(data: any): Array<model.GetProjectSourceModel> {
            let list = Array<model.GetProjectSourceModel>();
            for (let item of data) {
                list.push({
                    ProjectSourceID: item.ProjectSourceID,
                    ProjectSource: item.ProjectSource
                });
            }
            return list;
        }
    }

    app.AddService("ProjectSourceService", ProjectSourceService);
}

//Customer ProjectType DD
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustProjectTypeService {

        FindCustProjectTypeDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustProjectTypeDD(data: any): Array<model.GetCustProjectTypeDDModel>;
    }
    export class CustProjectTypeService extends GCPL.Service.BaseService implements ICustProjectTypeService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CustProjectType"}`;
        }


        FindCustProjectTypeDD(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetCustProjectTypeDD(data: any): Array<model.GetCustProjectTypeDDModel> {
            let list = Array<model.GetCustProjectTypeDDModel>();
            for (let item of data) {
                list.push({
                    ProjectID: item.ProjectID,
                    ProjectType: item.ProjectType
                });
            }
            return list;
        }
    }

    app.AddService("CustProjectTypeService", CustProjectTypeService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAddCustProjectTypeService {

        FindCustProjectTypeDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustProjectTypeDD(data: any): Array<model.GetAddCustProjectTypeDDModel>;
    }
    export class AddCustProjectTypeService extends GCPL.Service.BaseService implements IAddCustProjectTypeService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AddCustProjectType"}`;
        }


        FindCustProjectTypeDD(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetCustProjectTypeDD(data: any): Array<model.GetAddCustProjectTypeDDModel> {
            let list = Array<model.GetAddCustProjectTypeDDModel>();
            for (let item of data) {
                list.push({
                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName
                });
            }
            return list;
        }
    }

    app.AddService("AddCustProjectTypeService", AddCustProjectTypeService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IMultipleUserMasterService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserName(data: any): Array<model.UserMasterddlModel>;
    }
    export class MultipleUserMasterService extends GCPL.Service.BaseService implements IMultipleUserMasterService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ProjectAssignDDL"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    ZoneID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

       GetUserName(data: any): Array<model.UserMasterddlModel> {
            let list = Array<model.UserMasterddlModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    UserName: item.UserName,
                    IsChecked: item.IsChecked
                });
            }
            return list;
        }
    }

    app.AddService("MultipleUserMasterService", MultipleUserMasterService);
}


//ProjectName DD
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProjectNameService {

        FindProjectNameDD(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectNameDD(data: any): Array<model.GetProjectNameDDModel>;
    }
    export class ProjectNameService extends GCPL.Service.BaseService implements IProjectNameService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"GetProjectNameDD"}`;
            this.Cookie = _cookieStore;
        }


        FindProjectNameDD(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    UserID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetProjectNameDD(data: any): Array<model.GetProjectNameDDModel> {
            let list = Array<model.GetProjectNameDDModel>();
            for (let item of data) {
                list.push({
                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName
                });
            }
            return list;
        }
    }

    app.AddService("ProjectNameService", ProjectNameService);
}


