namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;


    export interface ITasksService {

        FindTaskList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTaskList(data: any): Array<model.TaskList>;


        FindProjDD(data1: any, data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjDD(data: any): Array<model.ProjectDDModel>;

        InsertTask(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindTaskEdit(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTaskEdit(data: any): model.InsertTask;

    }


    export class TasksService extends GCPL.Service.BaseService implements ITasksService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;

        }

        FindTaskList(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CustomerID;
            var ProjectID;
            var StartDate;
            var EndDate;
            var TaskName;
            var TaskStatus;
            var ApplicationID;


            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }

            if (data.ProjectID != undefined) {
                ProjectID = data.ProjectID
            }
            else {
                ProjectID = "";
            }
            if (data.StartDate != undefined) {
                StartDate = data.StartDate
            }
            else {
                StartDate = "";
            }

            if (data.EndDate != undefined) {
                EndDate = data.EndDate
            }
            else {
                EndDate = "";
            }
            if (data.TaskName != undefined) {
                TaskName = data.TaskName
            }
            else {
                TaskName = "";
            }
            if (data.TaskStatus != undefined) {
                TaskStatus = data.TaskStatus
            }
            else {
                TaskStatus = "";
            }
            if (data.ApplicationID != undefined) {
                ApplicationID = data.ApplicationID
            }
            else {
                ApplicationID = "";
            }
            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                    ProjectID: ProjectID,
                    StartDate: StartDate,
                    EndDate: EndDate,
                    TaskName: TaskName,
                    TaskStatus: TaskStatus,
                    ApplicationID: ApplicationID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/TaskList",
                Config: config
            });
        }

        GetTaskList(data: any): Array<model.TaskList> {


            let list = new Array<model.TaskList>();
            for (let item of data) {
                debugger;
                list.push({
                    TaskID: item.TaskID,
                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName,
                    CustomerID: item.CustomerID,
                    StartDate: item.StartDate,
                    EndDate: item.EndDate,
                    TaskName: item.TaskName,
                    TaskStatus: ((item.TaskStatus == "True") ? "Active" : "In-Active"),
                    CustomerName: item.CustomerName,
                    ApplicationName: item.ApplicationName





                });
            }
            return list;
        }


        FindProjDD(data1: any, data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: data1,
                    ApplicationID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/ProjectDD",
                Config: config
            });
        }
        GetProjDD(data: any): Array<model.ProjectDDModel> {


            let list = new Array<model.ProjectDDModel>();
            for (let item of data) {
                list.push({

                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName


                });
            }
            return list;
        }

        FindTaskEdit(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    TaskID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/EditTaskctrl",
                Config: config
            });
        }

        GetTaskEdit(data: any): model.InsertTask {
            let obj = new model.InsertTask();
            debugger;
            obj.ProjectID = data.ProjectID;
            obj.TaskID = data.TaskID;
            obj.CustomerID = data.CustomerID;
            obj.StartDate = data.StartDate;
            obj.EndDate = data.EndDate;
            obj.TaskName = data.TaskName;
            obj.TaskStatus = ((data.TaskStatus == "True") ? "1" : "0");
            obj.ApplicationID = data.ApplicationID;


            return obj;
        }

        InsertTask(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertTask";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }


    }


    //inject service
    app.AddService("TasksService", TasksService);


}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;


    export interface IProjectsService {

        FindProjectList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectList(data: any): Array<model.ProjectList>;

        FindCustDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustDD(data: any): Array<model.CustomerDDModel>;

        InsertProject(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindProjectEdit(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProjectEdit(data: any): model.InsertProjectModel;

        FindCustDDNew(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustDDNew(data: any): Array<model.CustomerDDModel>;
    }


    export class ProjectsService extends GCPL.Service.BaseService implements IProjectsService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;

        }

        FindProjectList(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CustomerID;
            var ProjectName;
            var StartDate;
            var EndDate;
            var ApplicationID;


            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }

            if (data.ProjectName != undefined) {
                ProjectName = data.ProjectName
            }
            else {
                ProjectName = "";
            }
            if (data.StartDate != undefined) {
                StartDate = data.StartDate
            }
            else {
                StartDate = "";
            }

            if (data.EndDate != undefined) {
                EndDate = data.EndDate
            }
            else {
                EndDate = "";
            }
            if (data.ApplicationID != undefined) {
                ApplicationID = data.ApplicationID
            }
            else {
                ApplicationID = "";
            }
            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                    ProjectName: ProjectName,
                    StartDate: StartDate,
                    EndDate: EndDate,
                    ApplicationID: ApplicationID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/Project",
                Config: config
            });
        }

        GetProjectList(data: any): Array<model.ProjectList> {


            let list = new Array<model.ProjectList>();
            for (let item of data) {
                debugger;
                list.push({

                    ProjectID: item.ProjectID,
                    ProjectName: item.ProjectName,
                    CustomerID: item.CustomerID,
                    CustomerName: item.CustomerName,
                    StartDate: item.StartDate,
                    EndDate: item.EndDate,
                    ApplicationName: item.ApplicationName
                });
            }
            return list;
        }


        FindCustDD(): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/CustomerDD",
                Config: config
            });
        }

        GetCustDD(data: any): Array<model.CustomerDDModel> {


            let list = new Array<model.CustomerDDModel>();
            for (let item of data) {
                list.push({

                    CustomerID: item.CustomerID,
                    CustomerName: item.CustomerName

                });
            }
            return list;
        }

        FindCustDDNew(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/CustomerDDNew",
                Config: config
            });
        }

        GetCustDDNew(data: any): Array<model.CustomerDDModel> {


            let list = new Array<model.CustomerDDModel>();
            for (let item of data) {
                list.push({

                    CustomerID: item.CustomerID,
                    CustomerName: item.CustomerName

                });
            }
            return list;
        }
        FindProjectEdit(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    ProjectID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/EditProjectctrl",
                Config: config
            });
        }

        GetProjectEdit(data: any): model.InsertProjectModel {
            let obj = new model.InsertProjectModel();
            obj.ProjectID = data.ProjectID;
            obj.ProjectName = data.ProjectName;
            obj.CustomerID = data.CustomerID;
            obj.StartDate = data.StartDate;
            obj.EndDate = data.EndDate;
            obj.ApplicationID = data.ApplicationID;


            return obj;
        }

        InsertProject(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertProject";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }



    }


    //inject service
    app.AddService("ProjectsService", ProjectsService);


}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;


    export interface ISubTasksService {

        FindSubTaskList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSubTaskList(data: any): Array<model.SubTaskList>;

        FindTaskDD(data: any, data1: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTaskDD(data: any): Array<model.TaskDDModel>;

        InsertSubTask(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindSubTaskEdit(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSubTaskEdit(data: any): model.InsertSubTask;


        FindTicketStatusDD(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTicketStatusDD(data: any): Array<model.TicketStatusDD>;

        FindSubTaskDD(data: any, data1: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSubTaskDD(data: any): Array<model.SubTaskDD>;

        FindPriorityDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetPriorityDD(data: any): Array<model.PriorityDD>;

        FindCategoryDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCategoryDD(data: any): Array<model.CategoryDD>;

        FindSubCategoryDD(data1: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSubCategoryDD(data: any): Array<model.SubCategoryDD>;

        FindUserDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserDD(data: any): Array<model.UserNameDDModel>;

        FindUserDDNew(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserDDNew(data: any): Array<model.UserNameDDModel>;

        FindUserAssignedToDD(): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserAssignedToDD(data: any): Array<model.UserNameDDModel>;

        NewFindTicketStatusDD(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        NewGetTicketStatusDD(data: any): Array<model.TicketStatusDD>;
    }


    export class SubTasksService extends GCPL.Service.BaseService implements ISubTasksService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;

        }
        NewFindTicketStatusDD(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/StatusTicket",
                Config: config
            });
        }

        NewGetTicketStatusDD(data: any): Array<model.TicketStatusDD> {


            let list = new Array<model.TicketStatusDD>();
            for (let item of data) {
                list.push({

                    TicketStatusID: item.TicketStatusID,
                    TicketStatus: item.TicketStatus



                });
            }
            return list;
        }
        FindUserAssignedToDD(): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    //  CustomerID: this.Cookie.get('UserInfo')['CustomerID']

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/UserDDAssignedTo",
                Config: config
            });
        }

        GetUserAssignedToDD(data: any): Array<model.UserNameDDModel> {


            let list = new Array<model.UserNameDDModel>();
            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName

                });
            }
            return list;
        }
        FindSubTaskList(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CustomerID;
            var ProjectID;
            var StartDate;
            var EndDate;
            var SubTaskName;
            var SubTaskStatus;
            var TaskID;
            var ApplicationID;


            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }

            if (data.ProjectID != undefined) {
                ProjectID = data.ProjectID
            }
            else {
                ProjectID = "";
            }
            if (data.StartDate != undefined) {
                StartDate = data.StartDate
            }
            else {
                StartDate = "";
            }

            if (data.EndDate != undefined) {
                EndDate = data.EndDate
            }
            else {
                EndDate = "";
            }
            if (data.SubTaskName != undefined) {
                SubTaskName = data.SubTaskName
            }
            else {
                SubTaskName = "";
            }
            if (data.SubTaskStatus != undefined) {
                SubTaskStatus = data.SubTaskStatus
            }
            else {
                SubTaskStatus = "";
            }
            if (data.TaskID != undefined) {
                TaskID = data.TaskID
            }
            else {
                TaskID = "";
            }
            if (data.ApplicationID != undefined) {
                ApplicationID = data.ApplicationID
            }
            else {
                ApplicationID = "";
            }
            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                    ProjectID: ProjectID,
                    StartDate: StartDate,
                    EndDate: EndDate,
                    SubTaskName: SubTaskName,
                    SubTaskStatus: SubTaskStatus,
                    TaskID: TaskID,
                    ApplicationID: ApplicationID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/SubTaskList",
                Config: config
            });
        }

        GetSubTaskList(data: any): Array<model.SubTaskList> {


            let list = new Array<model.SubTaskList>();
            for (let item of data) {
                debugger;
                list.push({
                    SubTaskID: item.SubTaskID,
                    ProjectName: item.ProjectName,
                    CustomerID: item.CustomerID,
                    StartDate: item.StartDate,
                    EndDate: item.EndDate,
                    SubTask: item.SubTask,
                    SubTaskStatus: ((item.SubTaskStatus == "True") ? "Active" : "In-Active"),
                    CustomerName: item.CustomerName,
                    TaskName: item.TaskName,
                    ApplicationName: item.ApplicationName

                });
            }
            return list;
        }


        FindTaskDD(data: any, data1: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: data,
                    ProjectID: data1
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/TaskDD",
                Config: config
            });
        }

        GetTaskDD(data: any): Array<model.TaskDDModel> {


            let list = new Array<model.TaskDDModel>();
            for (let item of data) {
                list.push({

                    TaskID: item.TaskID,
                    TaskName: item.TaskName


                });
            }
            return list;
        }

        FindSubTaskEdit(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    SubTaskID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/EditSubTaskctrl",
                Config: config
            });
        }

        GetSubTaskEdit(data: any): model.InsertSubTask {
            let obj = new model.InsertSubTask();
            debugger;
            obj.ProjectID = data.ProjectID;
            obj.TaskID = data.TaskID;
            obj.CustomerID = data.CustomerID;
            obj.StartDate = data.StartDate;
            obj.EndDate = data.EndDate;
            obj.SubTask = data.SubTask;
            obj.SubTaskStatus = ((data.SubTaskStatus == "True") ? "1" : "0");
            obj.SubTaskID = data.SubTaskID;
            obj.ApplicationID = data.ApplicationID;

            return obj;
        }

        InsertSubTask(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertSubTask";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }


        FindSubTaskDD(data: any, data1: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: data,
                    TaskID: data1
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/SubTaskDD",
                Config: config
            });
        }

        GetSubTaskDD(data: any): Array<model.SubTaskDD> {


            let list = new Array<model.SubTaskDD>();
            for (let item of data) {
                list.push({

                    SubTaskID: item.SubTaskID,
                    SubTask: item.SubTask


                });
            }
            return list;
        }

        FindTicketStatusDD(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/TicketStatus",
                Config: config
            });
        }

        GetTicketStatusDD(data: any): Array<model.TicketStatusDD> {


            let list = new Array<model.TicketStatusDD>();
            for (let item of data) {
                list.push({

                    TicketStatusID: item.TicketStatusID,
                    TicketStatus: item.TicketStatus



                });
            }
            return list;
        }

        FindPriorityDD(): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {


                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/PriorityDD",
                Config: config
            });
        }

        GetPriorityDD(data: any): Array<model.PriorityDD> {


            let list = new Array<model.PriorityDD>();
            for (let item of data) {
                list.push({
                    PriorityID: item.PriorityID,
                    Priority: item.Priority


                });
            }
            return list;
        }

        FindCategoryDD(): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {


                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/TicketCategoryDD",
                Config: config
            });
        }

        GetCategoryDD(data: any): Array<model.CategoryDD> {


            let list = new Array<model.CategoryDD>();
            for (let item of data) {
                list.push({
                    CategoryID: item.CategoryID,
                    CategoryName: item.CategoryName

                });
            }
            return list;
        }

        FindSubCategoryDD(data1: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {

                    CategoryID: data1
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/SubCategoryDD",
                Config: config
            });
        }

        GetSubCategoryDD(data: any): Array<model.SubCategoryDD> {


            let list = new Array<model.SubCategoryDD>();
            for (let item of data) {
                list.push({

                    SubCategoryID: item.SubCategoryID,
                    SubCategory: item.SubCategory


                });
            }
            return list;
        }

        FindUserDD(): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID']

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/UserDD",
                Config: config
            });
        }

        GetUserDD(data: any): Array<model.UserNameDDModel> {


            let list = new Array<model.UserNameDDModel>();
            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName

                });
            }
            return list;
        }

        FindUserDDNew(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/UserDDNew",
                Config: config
            });
        }

        GetUserDDNew(data: any): Array<model.UserNameDDModel> {


            let list = new Array<model.UserNameDDModel>();
            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName

                });
            }
            return list;
        }
    }


    //inject service
    app.AddService("SubTasksService", SubTasksService);


}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUseraAtofillCreatedForService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoUserCreatedfor(data: any): Array<model.UserNameModel>;
        FilterAutoCompleteCreatedfor(data: any, data2: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class UseraAtofillCreatedForService extends GCPL.Service.BaseService implements IUseraAtofillCreatedForService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"UserNameAutoFillGCPLCreatedFor"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }


        FilterAutoCompleteCreatedfor(data, data2): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/UserNameAutoFillGCPLCreatedFor";

            let config = {
                params: {
                    UserName: data.term,
                    CustomerID: data2

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutoUserCreatedfor(data: any): Array<model.UserNameModel> {


            let list = Array<model.UserNameModel>();


            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName,

                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("UseraAtofillCreatedForService", UseraAtofillCreatedForService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITicketUseraAtofillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoUserTicket(data: any): Array<model.UserNameDDModel>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class TicketUseraAtofillService extends GCPL.Service.BaseService implements ITicketUseraAtofillService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"UserNameAutoFill"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }


        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/UserNameAutoFill";

            let config = {
                params: {
                    UserName: data.term,

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutoUserTicket(data: any): Array<model.UserNameDDModel> {


            let list = Array<model.UserNameDDModel>();


            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName,

                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("TicketUseraAtofillService", TicketUseraAtofillService);
}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;


    export interface ICreateTicketService {

        InsertTicket(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        InsertTicketEdit(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        FindTicketEdit(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTicketEdit(data: any): model.EditInsertModel;

        FindChangeType(): ng.IPromise<Utility.Ajax.IResponse>;
        getChangeType(data: any): Array<model.ChangeTypeDD>;

        FindClosure(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        getClosure(data: any): Array<model.ClosureDD>;

        Find(SODetails: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSOPrice(data: any): model.SODto;


        FindEdit(SODetails: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSOEdit(data: any): model.SODto;

        FindStatusCode(): ng.IPromise<Utility.Ajax.IResponse>;
        getStatusCode(data: any): Array<model.StatusCodeModel>;

        FindStatusCodeAssign(): ng.IPromise<Utility.Ajax.IResponse>;
        getStatusCodeAssign(data: any): Array<model.StatusCodeList>;

        FindChangeType(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        getChangeType(data: any): Array<model.ChangeTypeDD>;

        FindApplicationDD(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        getApplicationDD(data: any): Array<model.ApplicationDD>;

        FindApprovalTypeDD(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        getApprovalTypeDD(data: any): Array<model.ApprovalTypeDD>;

        InsertApproverMatrix(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindApproverMatrixEdit(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetApproverMatrixEdit(data: any): model.ApprovalMatrixInsert;

        FindApproverList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetApproverList(data: any): Array<model.ApprovalMatrixList>;

        FindApplicationList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetApplicationList(data: any): Array<model.ApplicationList>;


        FindApplicationEdit(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetApplicationEdit(data: any): model.InsertApplication;

        InsertApplication(data: any): ng.IPromise<Utility.Ajax.IResponse>;


        FindStatusCodeApproval(): ng.IPromise<Utility.Ajax.IResponse>;
        getStatusCodeApproval(data: any): Array<model.StatusCodeList>;

        FindApprovalTypeTicketDD(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        getApprovalTypeTicketDD(data: any): Array<model.ApprovalTypeDD>;

        InsertAttachment(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindTimeSOPrice(SODetails: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTimeSOPrice(data: any): model.TimeSODto;

        InsertTimeSheet(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindEditTime(SODetails: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSOEditTime(data: any): model.TimeSODto;

        FindTSApprovalList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTSApprovalList(data: any): Array<model.TSApprovalList>;

        InsertAppRejStatus(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindTSAppEdit(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTSAppEdit(data: any): model.TimeSheetInsert;

        InsertEditTimeSheet(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindAttachmentEditList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAttachmentEditList(data: any): Array<model.AttachmentEditModel>;


        FindAttachmentEditTestList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAttachmentEditTestList(data: any): Array<model.AttachmentEditModel>;

        FindAttachmentEditDeveloperList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAttachmentEditDeveloperList(data: any): Array<model.AttachmentEditModel>;

        RemoveAttachmentData(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindTimeSheetList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTimeSheetList(data: any): Array<model.TimeSheetList>;

        FindEmail(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEmail(data: any): model.UserNameDDModel;

        FindCustRangeObject(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustRangeObject(data: any): model.CustRangeObjectModel;

        FindUserFine(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserFine(data: any): model.UserIDModel;
        InsertStatus(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        FindApproverProdIDEdit(data: any, data1: any, data2: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetApproverProdIDEdit(data: any): Array<model.ApproverID>;

    }


    export class CreateTicketService extends GCPL.Service.BaseService implements ICreateTicketService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;

        }
        FindApproverProdIDEdit(data: any, data1: any, data2: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    CustomerID: data,
                    AppName: data1,
                    ProjectID: data2

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/ApproveDDProdTicket",
                Config: config
            });
        }


        GetApproverProdIDEdit(data: any): Array<model.ApproverID> {
            let list = Array<model.ApproverID>();
            for (let item of data) {
                list.push({
                    ApproverNameID: item.ApproverNameID


                });
            }
            return list;
        }
        InsertStatus(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/ManualStatus";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }
        FindUserFine(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    UserID: data


                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/UserFine",
                Config: config
            });
        }

        GetUserFine(data: any): model.UserIDModel {
            let obj = new model.UserIDModel();
            

            obj.UserID = data.UserID;

            return obj;
        }
        FindCustRangeObject(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    CustomerID: data


                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/ObjectTypeNumber",
                Config: config
            });
        }

        GetCustRangeObject(data: any): model.CustRangeObjectModel {
            let obj = new model.CustRangeObjectModel();
            debugger;

            obj.ObjectTypeID = data.ObjectTypeID;

            return obj;
        }

        FindChangeType(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ChangeTypeDD";

            let config = {
                params: {
                    //   CustomerID: this.Cookie.get('UserInfo')['CustomerID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        getChangeType(data: any): Array<model.ChangeTypeDD> {
            let list = Array<model.ChangeTypeDD>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    ChangeType: item.ChangeType

                });
            }
            return list;
        }

        FindClosure(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ClosureDD";

            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        getClosure(data: any): Array<model.ClosureDD> {
            let list = Array<model.ClosureDD>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    ClosureReason: item.ClosureReason

                });
            }
            return list;
        }

        InsertTicket(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertTicketData";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }
        RemoveAttachmentData(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/RemoveAttachment";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }
        InsertTicketEdit(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertEditTicketctrl";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }

        FindTicketEdit(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    TicketID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/TicketEditctrl",
                Config: config
            });
        }

        GetTicketEdit(data: any): model.EditInsertModel {
            let obj = new model.EditInsertModel();
            debugger;
            obj.TicketID = data.TicketID;
            obj.TicketTitle = data.TicketTitle;
            obj.CreationDate = data.CreationDate;
            obj.CreatedBy = data.CreatedBy;
            obj.CreatedFor = data.CreatedFor;
            obj.PriorityID = data.PriorityID;
            obj.CategoryID = data.CategoryID;
            obj.SubCategoryID = data.SubCategoryID;
            obj.IssueDescription = data.IssueDescription;
            obj.Attachment1 = data.Attachment1;
            obj.Attachment2 = data.Attachment2;
            obj.Attachment3 = data.Attachment3;
            obj.AssignedTo = data.AssignedTo;
            obj.EmailsTo = data.EmailsTo;
            obj.PageLink = data.PageLink;
            //obj.TestSystem = data.TestSystem;
            //obj.TestedBy = data.TestedBy;
            //obj.TestingCycleno = data.TestingCycleno;        
            //obj.Testresults1 = data.Testresults1;
            //obj.Testresults2 = data.Testresults2;
            //obj.Testresults3 = data.Testresults3;
            //obj.Testresults4 = data.Testresults4;
            //obj.Testresults5 = data.Testresults5;
            //obj.TesterComments = data.TesterComments;            
            obj.ChangeType = data.ChangeType;
            obj.UploadFileNames = data.UploadFileNames;
            obj.UploadFile1 = data.UploadFile1;
            obj.UploadFile2 = data.UploadFile2;
            obj.UploadFile3 = data.UploadFile3;
            obj.UploadFile4 = data.UploadFile4;
            obj.UploadFile5 = data.UploadFile5;
            obj.DatabaseChanges = data.DatabaseChanges;
            obj.ApprovalForQA = data.ApprovalForQA;
            obj.TargetForQA = data.TargetForQA;
            obj.QAApprovedBy = data.QAApprovedBy;
            obj.QAApprovedDate = data.QAApprovedDate;
            obj.QAApproverComments = data.QAApproverComments;
            obj.ApprovalForProd = data.ApprovalForProd;
            obj.ProdApprovalBy = data.ProdApprovalBy;
            obj.ProdApprovalDate = data.ProdApprovalDate;
            obj.CustomerTested = data.CustomerTested;
            obj.CustomerApproved = data.CustomerApproved;
            obj.ProdApproverComments = data.ProdApproverComments;
            obj.TicketClosureDate = data.TicketClosureDate;
            obj.TicketClosedBy = data.TicketClosedBy;
            obj.TicketClosedReason = data.TicketClosedReason;
            obj.TicketClosureComments = data.TicketClosureComments;
            obj.ProjectID = data.ProjectID;
            obj.TaskID = data.TaskID;
            obj.SubTaskID = data.SubTaskID;
            obj.Status = data.Status;
            obj.TicketNo = data.TicketNo;
            obj.CreatedByName = data.CreatedByName;
            obj.CreatedForName = data.CreatedForName;
            obj.CustomerID = data.CustomerID;
            obj.EmailsName = data.EmailsName;
            obj.UploadInstructions = data.UploadInstructions;
            obj.IssueUpdate = data.IssueUpdate;
            obj.ChangeRequest = data.ChangeRequest;
            obj.ChangeType = data.ChangeType;
            obj.AssignedOn = data.AssignedOn;
            obj.TicketClosedByName = data.TicketClosedByName;
            obj.ApprovalTypeID = data.ApprovalTypeID;
            obj.ApplicationID = data.ApplicationID;
            obj.IssueDescriptionHistory = data.IssueDescriptionHistory;
            obj.ApprovedfordevelopmentID = data.ApprovedfordevelopmentID;
            obj.ApprovedByID = data.ApprovedByID;
            obj.ApprovedOn = data.ApprovedOn;
            obj.DBAQAid = data.DBAQAid;
            obj.QAMigrationdate = data.QAMigrationdate;
            obj.ChangesMigrateQAID = data.ChangesMigrateQAID;
            obj.ProdMigrateDate = data.ProdMigrateDate;
            obj.QADBAApproverComments = data.QADBAApproverComments;
            obj.DBAProdid = data.DBAProdid;
            obj.UATID = data.UATID;
            obj.WorkStartedID = data.WorkStartedID;
            obj.WorkStartDate = data.WorkStartDate;
            obj.DevCompletedID = data.DevCompletedID;
            obj.ProdDBAApproverComments = data.ProdDBAApproverComments;
            obj.ChangesMigrateProdID = data.ChangesMigrateProdID;
            obj.ApprovedByName = data.ApprovedByName;
            obj.DevelopmentCompletedDate = data.DevelopmentCompletedDate;
            obj.list = data.list;
            obj.IssueDescriptionHistoryList = data.IssueDescriptionHistoryList;
            return obj;
        }


        FindEmail(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    Email: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/EmailLogin",
                Config: config
            });
        }

        GetEmail(data: any): model.UserNameDDModel {
            let obj = new model.UserNameDDModel();
            debugger;
            obj.UserID = data.UserID;
            obj.UserName = data.UserName;

            return obj;
        }
        Find(SODetails: any): ng.IPromise<Utility.Ajax.IResponse> {

            let url = `${this.url}/${"SOAddToCartctrlTicket"}`;

            //let config = {
            //    params: {

            //        dto: SODetails,

            //    }
            //};
            return this.ajaXUtility.Post({

                Url: url,
                data: SODetails
                //Config: config
            });

        }

        GetSOPrice(data: any): model.SODto {

            let list = new model.SODto();
            list.list = data.list;
            list.sodto = data.sodto;
            return list;

        }

        FindEdit(SODetails: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            let url = `${this.url}/${"GetSOInlineEditctrl"}`;

            //let config = {
            //    params: {

            //        dto: SODetails

            //    }
            //};
            return this.ajaXUtility.Post({

                Url: url,
                data: SODetails
                // ,Config: config
            });

        }

        GetSOEdit(data: any): model.SODto {
            let list = new model.SODto();
            list.list = data.list;
            list.sodto = data.sodto;


            return list;

        }

        FindStatusCode(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/StatusCodeList";

            let config = {
                params: {


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        getStatusCode(data: any): Array<model.StatusCodeModel> {
            let list = Array<model.StatusCodeModel>();
            for (let item of data) {
                list.push({
                    TicketStatusCode: item.TicketStatusCode


                });
            }
            return list;
        }

        FindStatusCodeAssign(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/StatusCodeAssignList";

            let config = {
                params: {


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        getStatusCodeAssign(data: any): Array<model.StatusCodeList> {
            let list = Array<model.StatusCodeList>();
            for (let item of data) {
                list.push({
                    TicketStatusCode: item.TicketStatusCode


                });
            }
            return list;
        }

        FindApplicationDD(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ApplicationDD";

            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        getApplicationDD(data: any): Array<model.ApplicationDD> {
            let list = Array<model.ApplicationDD>();
            for (let item of data) {
                list.push({
                    ApplicationID: item.ApplicationID,
                    AppDescription: item.AppDescription
                });
            }
            return list;
        }

        FindApprovalTypeDD(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ApprovalTypeDD";

            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        getApprovalTypeDD(data: any): Array<model.ApprovalTypeDD> {
            let list = Array<model.ApprovalTypeDD>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    ApprovalType: item.ApprovalType

                });
            }
            return list;
        }

        InsertApproverMatrix(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertApprover";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }

        FindApproverMatrixEdit(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    ID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/ApproverEditctrl",
                Config: config
            });
        }

        GetApproverMatrixEdit(data: any): model.ApprovalMatrixInsert {
            let obj = new model.ApprovalMatrixInsert();
            debugger;
            obj.ID = data.ID;
            obj.CustomerID = data.CustomerID;
            obj.AppName = data.AppName;
            obj.ProjectID = data.ProjectID;
            obj.ApprovalTypeID = data.ApprovalTypeID;
            obj.ApproverName = data.ApproverName;
            obj.QAApprover = data.QAApprover;
            obj.ProdApprover = data.ProdApprover;
            obj.UserName = data.UserName;
            return obj;
        }

        FindApproverList(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ApproverMatrixList";
            var CustomerID;
            var ProjectID;
            var AppID;
            var ApprovalTypeID;
            var ApproverNameID;
            var QAApproverID;
            var ProdApproverID;


            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }

            if (data.ProjectID != undefined) {
                ProjectID = data.ProjectID
            }
            else {
                ProjectID = "";
            }
            if (data.AppID != undefined) {
                AppID = data.AppID
            }
            else {
                AppID = "";
            }

            if (data.ApprovalTypeID != undefined) {
                ApprovalTypeID = data.ApprovalTypeID
            }
            else {
                ApprovalTypeID = "";
            }

            if (data.ApproverNameID != undefined) {
                ApproverNameID = data.ApproverNameID
            }
            else {
                ApproverNameID = "";
            }
            if (data.QAApproverID != undefined) {
                QAApproverID = data.QAApproverID
            }
            else {
                QAApproverID = "";
            }

            if (data.ProdApproverID != undefined) {
                ProdApproverID = data.ProdApproverID
            }
            else {
                ProdApproverID = "";
            }

            let config = {
                params: {
                    CustomerID: CustomerID,
                    ProjectID: ProjectID,
                    AppID: AppID,
                    ApprovalTypeID: ApprovalTypeID,
                    ApproverNameID: ApproverNameID,
                    QAApproverID: QAApproverID,
                    ProdApproverID: ProdApproverID

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetApproverList(data: any): Array<model.ApprovalMatrixList> {

            let list = Array<model.ApprovalMatrixList>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    CustomerName: item.CustomerName,
                    AppDescription: item.AppDescription,
                    QAApprover: ((item.QAApprover == "1") ? "Yes" : "No"),
                    ProdApprover: ((item.ProdApprover == "1") ? "Yes" : "No"),
                    ApproverName: item.ApproverName,
                    ApprovalType: item.ApprovalType,
                    ProjectName: item.ProjectName
                });
            }
            return list;
        }

        FindApplicationList(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ApplicationList";
            var ApplicationName;
            var AppDescription;
            var CustomerID;


            if (data.ApplicationName != undefined) {
                ApplicationName = data.ApplicationName
            }
            else {
                ApplicationName = "";
            }
            if (data.AppDescription != undefined) {
                AppDescription = data.AppDescription
            }
            else {
                AppDescription = "";
            }
            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }



            let config = {
                params: {
                    ApplicationName: ApplicationName,
                    AppDescription: AppDescription,
                    CustomerID: CustomerID

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetApplicationList(data: any): Array<model.ApplicationList> {

            let list = Array<model.ApplicationList>();
            for (let item of data) {
                list.push({
                    ApplicationID: item.ApplicationID,
                    ApplicationName: item.ApplicationName,
                    CustomerName: item.CustomerName,
                    AppDescription: item.AppDescription

                });
            }
            return list;
        }

        FindApplicationEdit(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    ApplicationID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/ApplicationEditctrl",
                Config: config
            });
        }

        GetApplicationEdit(data: any): model.InsertApplication {
            let obj = new model.InsertApplication();
            debugger;

            obj.ApplicationID = data.ApplicationID;
            obj.ApplicationName = data.ApplicationName;
            obj.AppDescription = data.AppDescription;
            obj.CustomerID = data.CustomerID;
            obj.CustomerName = data.CustomerName;

            return obj;
        }

        InsertApplication(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertApplication";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }


        FindStatusCodeApproval(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/StatusCodeApprovals";

            let config = {
                params: {


                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        getStatusCodeApproval(data: any): Array<model.StatusCodeList> {
            let list = Array<model.StatusCodeList>();
            for (let item of data) {
                list.push({
                    TicketStatusCode: item.TicketStatusCode


                });
            }
            return list;
        }

        FindApprovalTypeTicketDD(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ApprovalTypeDDTicket";

            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                    ApprovalID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        getApprovalTypeTicketDD(data: any): Array<model.ApprovalTypeDD> {
            let list = Array<model.ApprovalTypeDD>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    ApprovalType: item.ApprovalType

                });
            }
            return list;
        }

        InsertAttachment(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertEditAttachments";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }


        FindTimeSOPrice(SODetails: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            let url = `${this.url}/${"SOAddToCartctrlTime"}`;

            //let config = {
            //    params: {

            //        dto: SODetails,

            //    }
            //};
            return this.ajaXUtility.Post({

                Url: url,
                data: SODetails
                //Config: config
            });

        }


        GetTimeSOPrice(data: any): model.TimeSODto {
            let list = new model.TimeSODto();
            list.list = data.list;
            list.sodto = data.sodto;
            return list;

        }

        InsertTimeSheet(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertTimeSheet";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }

        FindEditTime(SODetails: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            let url = `${this.url}/${"GetSOInlineEditctrlTime"}`;

            //let config = {
            //    params: {

            //        dto: SODetails

            //    }
            //};
            return this.ajaXUtility.Post({

                Url: url,
                data: SODetails
                // ,Config: config
            });

        }


        GetSOEditTime(data: any): model.TimeSODto {
            let list = new model.TimeSODto();
            list.list = data.list;
            list.sodto = data.sodto;


            return list;

        }

        FindTSApprovalList(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/TSApprovalList";
            var UserID;
            var FromDate;
            var ToDate;
            var CustomerID;
            var ApplicationID;
            var ProjectID;
            var TaskID;
            var SubTaskID;
            var StatusID;

            if (data.UserID != undefined) {
                UserID = data.UserID
            }
            else {
                UserID = "";
            }
            if (data.FromDate != undefined) {
                FromDate = data.FromDate
            }
            else {
                FromDate = "";
            }
            if (data.ToDate != undefined) {
                ToDate = data.ToDate
            }
            else {
                ToDate = "";
            }

            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }
            if (data.ApplicationID != undefined) {
                ApplicationID = data.ApplicationID
            }
            else {
                ApplicationID = "";
            }
            if (data.ProjectID != undefined) {
                ProjectID = data.ProjectID
            }
            else {
                ProjectID = "";
            }

            if (data.TaskID != undefined) {
                TaskID = data.TaskID
            }
            else {
                TaskID = "";
            }
            if (data.SubTaskID != undefined) {
                SubTaskID = data.SubTaskID
            }
            else {
                SubTaskID = "";
            }
            if (data.StatusID != undefined) {
                StatusID = data.StatusID
            }
            else {
                StatusID = "";
            }
            let config = {
                params: {
                    UserID: UserID,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    CustomerID: CustomerID,
                    ApplicationID: ApplicationID,
                    ProjectID: ProjectID,
                    TaskID: TaskID,
                    SubTaskID: SubTaskID,
                    StatusID: StatusID

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetTSApprovalList(data: any): Array<model.TSApprovalList> {

            let list = Array<model.TSApprovalList>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    UserName: item.UserName,
                    Date: item.Date,
                    TotalTime: item.TotalTime,
                    Status: item.Status,
                    CustomerName: item.CustomerName,
                    ProjectName: item.ProjectName,
                    ApplicationName: item.ApplicationName,
                    TaskName: item.TaskName,
                    SubTask: item.SubTask,
                    FromTime: item.FromTime,
                    ToTime: item.ToTime


                });
            }
            return list;
        }

        InsertAppRejStatus(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/UpdateApprove";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }




        FindTSAppEdit(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {
                    ID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/TimeSheetEditctrl",
                Config: config
            });
        }

        GetTSAppEdit(data: any): model.TimeSheetInsert {
            let obj = new model.TimeSheetInsert();
            debugger;

            obj.ID = data.ID;
            obj.Date = data.Date;
            obj.CustomerID = data.CustomerID;
            obj.ApplicationID = data.ApplicationID;
            obj.ProjectID = data.ProjectID;
            obj.TaskID = data.TaskID;
            obj.SubTaskID = data.SubTaskID;
            obj.FromTime = data.FromTime;
            obj.ToTime = data.ToTime;
            obj.UserID = data.UserID;
            return obj;
        }

        InsertEditTimeSheet(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/InsertTimeSheetData";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }



        FindAttachmentEditList(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/AttachmentEditList";

            let config = {
                params: {
                    TicketID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAttachmentEditList(data: any): Array<model.AttachmentEditModel> {
            let list = Array<model.AttachmentEditModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    imageName: item.imageName,
                    status: item.status,
                    fileType: item.fileType,
                    baseUrl: item.baseUrl

                });
            }
            return list;
        }

        FindAttachmentEditTestList(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/AttachmentEditTestList";

            let config = {
                params: {
                    TicketID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAttachmentEditTestList(data: any): Array<model.AttachmentEditModel> {
            let list = Array<model.AttachmentEditModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    imageName: item.imageName,
                    status: item.status,
                    fileType: item.fileType,
                    baseUrl: item.baseUrl

                });
            }
            return list;
        }


        FindAttachmentEditDeveloperList(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/AttachmentEditDeveloperList";

            let config = {
                params: {
                    TicketID: data

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetAttachmentEditDeveloperList(data: any): Array<model.AttachmentEditModel> {
            let list = Array<model.AttachmentEditModel>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    imageName: item.imageName,
                    status: item.status,
                    fileType: item.fileType,
                    baseUrl: item.baseUrl

                });
            }
            return list;
        }



        FindTimeSheetList(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/TimeSheetListData";
            var UserID;
            var FromDate;
            var ToDate;
            var CustomerID;
            var ApplicationID;
            var ProjectID;
            var TaskID;
            var SubTaskID;
            var StatusID;

            if (data.UserID != undefined) {
                UserID = data.UserID
            }
            else {
                UserID = "";
            }
            if (data.FromDate != undefined) {
                FromDate = data.FromDate
            }
            else {
                FromDate = "";
            }

            if (data.ToDate != undefined) {
                ToDate = data.ToDate
            }
            else {
                ToDate = "";
            }
            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }

            if (data.ApplicationID != undefined) {
                ApplicationID = data.ApplicationID
            }
            else {
                ApplicationID = "";
            }

            if (data.ProjectID != undefined) {
                ProjectID = data.ProjectID
            }
            else {
                ProjectID = "";
            }
            if (data.TaskID != undefined) {
                TaskID = data.TaskID
            }
            else {
                TaskID = "";
            }

            if (data.SubTaskID != undefined) {
                SubTaskID = data.SubTaskID
            }
            else {
                SubTaskID = "";
            }
            if (data.StatusID != undefined) {
                StatusID = data.StatusID
            }
            else {
                StatusID = "";
            }
            let config = {
                params: {
                    UserID: UserID,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    CustomerID: CustomerID,
                    ApplicationID: ApplicationID,
                    ProjectID: ProjectID,
                    TaskID: TaskID,
                    SubTaskID: SubTaskID,
                    StatusID: StatusID

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetTimeSheetList(data: any): Array<model.TimeSheetList> {

            let list = Array<model.TimeSheetList>();
            for (let item of data) {
                list.push({
                    ID: item.ID,
                    Date: item.Date,
                    CustomerName: item.CustomerName,
                    ApplicationName: item.ApplicationName,
                    ProjectName: item.ProjectName,
                    TaskName: item.TaskName,
                    SubTask: item.SubTask,
                    FromTime: item.FromTime,
                    ToTime: item.ToTime,
                    Status: item.Status

                });
            }
            return list;
        }

    }


    //inject service
    app.AddService("CreateTicketService", CreateTicketService);


}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITicketListService {

        FindTicketList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTicketList(data: any): Array<model.TicketListModel>;

    }
    export class TicketListService extends GCPL.Service.BaseService implements ITicketListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"TicketList"}`;
            this.Cookie = _cookieStore;

        }
        FindTicketList(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            var CustomerID;
            var ProjectID;
            var TaskID;
            var SubTaskID;
            var StatusID;
            var CategoryID;
            var SubCategoryID;
            var ChangeType;
            var TicketNo;
            var CreatedBy;
            var FromDate;
            var ToDate;
            var ApplicationID;

            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }

            if (data.ProjectID != undefined) {
                ProjectID = data.ProjectID
            }
            else {
                ProjectID = "";
            }
            if (data.TaskID != undefined) {
                TaskID = data.TaskID
            }
            else {
                TaskID = "";
            }

            if (data.SubTaskID != undefined) {
                SubTaskID = data.SubTaskID
            }
            else {
                SubTaskID = "";
            }

            if (data.StatusID != undefined) {
                StatusID = data.StatusID
            }
            else {
                StatusID = "";
            }
            if (data.CategoryID != undefined) {
                CategoryID = data.CategoryID
            }
            else {
                CategoryID = "";
            }

            if (data.SubCategoryID != undefined) {
                SubCategoryID = data.SubCategoryID
            }
            else {
                SubCategoryID = "";
            }

            if (data.ChangeType != undefined) {
                ChangeType = data.ChangeType
            }
            else {
                ChangeType = "";
            }
            if (data.TicketNo != undefined) {
                TicketNo = data.TicketNo
            }
            else {
                TicketNo = "";
            }

            if (data.CreatedBy != undefined) {
                CreatedBy = data.CreatedBy
            }
            else {
                CreatedBy = "";
            }
            if (data.FromDate != undefined) {
                FromDate = data.FromDate
            }
            else {
                FromDate = "";
            }

            if (data.ToDate != undefined) {
                ToDate = data.ToDate
            }
            else {
                ToDate = "";
            }
            if (data.ApplicationID != undefined) {
                ApplicationID = data.ApplicationID
            }
            else {
                ApplicationID = "";
            }
            let config = {
                params: {
                    CustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                    ProjectID: ProjectID,
                    TaskID: TaskID,
                    SubTaskID: SubTaskID,
                    StatusID: StatusID,
                    CategoryID: CategoryID,
                    SubCategoryID: SubCategoryID,
                    ChangeType: ChangeType,
                    TicketNo: TicketNo,
                    CreatedBy: CreatedBy,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    ApplicationID: ApplicationID

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetTicketList(data: any): Array<model.TicketListModel> {

            let list = Array<model.TicketListModel>();
            for (let item of data) {
                list.push({

                    TicketID: item.TicketID,
                    CustomerName: item.CustomerName,
                    ProjectName: item.ProjectName,
                    TaskName: item.TaskName,
                    SubTask: item.SubTask,
                    TicketNo: item.TicketNo,
                    TicketTitle: item.TicketTitle,
                    Createdon: item.Createdon,
                    CreatedBy: item.CreatedBy,
                    CreatedFor: item.CreatedFor,
                    AssignedTo: item.AssignedTo,
                    TicketStatus: item.TicketStatus,
                    Category: item.Category,
                    SubCategory: item.SubCategory,
                    ClosureToDate: item.ClosureToDate,
                    ApprovalTypeID: item.ApprovalTypeID,
                    ApprovalType: item.ApprovalType,
                    ApplicationName: item.ApplicationName,
                    AssignedOn: item.AssignedOn,
                    ProjectID: item.ProjectID,
                    AppID: item.AppID,
                    StatusID: item.StatusID,
                    AssignedOntime: item.AssignedOntime,
                    WorkStartDate: item.WorkStartDate,
                    WorkStarttime: item.WorkStarttime,
                    DevelopmentCompletedDate: item.DevelopmentCompletedDate,
                    DevelopmentCompletedtime: item.DevelopmentCompletedtime,
                    QAMigrationdate: item.QAMigrationdate,
                    QAMigrationtime: item.QAMigrationtime,
                    ProdMigrateDate: item.ProdMigrateDate,
                    ProdMigratetime: item.ProdMigratetime,
                    QAApprovedDate: item.QAApprovedDate,
                    QAApprovedtime: item.QAApprovedtime,
                    ProdApprovalDate: item.ProdApprovalDate,
                    ProdApprovaltime: item.ProdApprovaltime,
                    UATCompleteDate: item.UATCompleteDate,
                    UATCompletetime: item.UATCompletetime,
                    Creationtime: item.Creationtime,
                    TicketClosureDate: item.TicketClosureDate,
                    TicketClosureTime: item.TicketClosureTime
                });
            }
            return list;
        }

    }
    app.AddService("TicketListService", TicketListService);
}
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IMyTicketListService {

        FindMyTicketList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetMyTicketList(data: any): Array<model.MyTicketListModel>;

    }
    export class MyTicketListService extends GCPL.Service.BaseService implements IMyTicketListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"MyTicketList"}`;
            this.Cookie = _cookieStore;

        }
        FindMyTicketList(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            var CustomerID;
            var ProjectID;
            var TaskID;
            var SubTaskID;
            var StatusID;
            var CategoryID;
            var SubCategoryID;
            var ChangeType;
            var TicketNo;
            var CreatedBy;
            var FromDate;
            var ToDate;
            var ApplicationID;
            var UserID;
            var LoginCustomerID;

            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }

            if (data.ProjectID != undefined) {
                ProjectID = data.ProjectID
            }
            else {
                ProjectID = "";
            }
            if (data.TaskID != undefined) {
                TaskID = data.TaskID
            }
            else {
                TaskID = "";
            }

            if (data.SubTaskID != undefined) {
                SubTaskID = data.SubTaskID
            }
            else {
                SubTaskID = "";
            }

            if (data.StatusID != undefined) {
                StatusID = data.StatusID
            }
            else {
                StatusID = "";
            }
            if (data.CategoryID != undefined) {
                CategoryID = data.CategoryID
            }
            else {
                CategoryID = "";
            }

            if (data.SubCategoryID != undefined) {
                SubCategoryID = data.SubCategoryID
            }
            else {
                SubCategoryID = "";
            }

            if (data.ChangeType != undefined) {
                ChangeType = data.ChangeType
            }
            else {
                ChangeType = "";
            }
            if (data.TicketNo != undefined) {
                TicketNo = data.TicketNo
            }
            else {
                TicketNo = "";
            }

            if (data.CreatedBy != undefined) {
                CreatedBy = data.CreatedBy
            }
            else {
                CreatedBy = "";
            }
            if (data.FromDate != undefined) {
                FromDate = data.FromDate
            }
            else {
                FromDate = "";
            }

            if (data.ToDate != undefined) {
                ToDate = data.ToDate
            }
            else {
                ToDate = "";
            }
            if (data.ApplicationID != undefined) {
                ApplicationID = data.ApplicationID
            }
            else {
                ApplicationID = "";
            }
            if (data.UserID != undefined) {
                UserID = data.UserID
            }
            else {
                UserID = "";
            }
            if (data.LoginCustomerID != undefined) {
                LoginCustomerID = data.LoginCustomerID
            }
            else {
                LoginCustomerID = "";
            }
            let config = {
                params: {
                    CustomerID: CustomerID,
                    ProjectID: ProjectID,
                    TaskID: TaskID,
                    SubTaskID: SubTaskID,
                    StatusID: StatusID,
                    CategoryID: CategoryID,
                    SubCategoryID: SubCategoryID,
                    ChangeType: ChangeType,
                    TicketNo: TicketNo,
                    CreatedBy: CreatedBy,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    UserID: UserID,
                    ApplicationID: ApplicationID,
                    LoginCustomerID: this.Cookie.get('UserInfo')['CustomerID']

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetMyTicketList(data: any): Array<model.MyTicketListModel> {

            let list = Array<model.MyTicketListModel>();
            for (let item of data) {
                list.push({

                    TicketID: item.TicketID,
                    CustomerName: item.CustomerName,
                    ProjectName: item.ProjectName,
                    TaskName: item.TaskName,
                    SubTask: item.SubTask,
                    TicketNo: item.TicketNo,
                    TicketTitle: item.TicketTitle,
                    Createdon: item.Createdon,
                    CreatedBy: item.CreatedBy,
                    CreatedFor: item.CreatedFor,
                    AssignedTo: item.AssignedTo,
                    TicketStatus: item.TicketStatus,
                    Category: item.Category,
                    SubCategory: item.SubCategory,
                    ClosureToDate: item.ClosureToDate,
                    ApprovalTypeID: item.ApprovalTypeID,
                    ApprovalType: item.ApprovalType,
                    ApplicationName: item.ApplicationName,
                    AssignedOn: item.AssignedOn,
                    ProjectID: item.ProjectID,
                    AppID: item.AppID,
                    StatusID: item.StatusID,
                    AssignedOntime: item.AssignedOntime,
                    WorkStartDate: item.WorkStartDate,
                    WorkStarttime: item.WorkStarttime,
                    DevelopmentCompletedDate: item.DevelopmentCompletedDate,
                    DevelopmentCompletedtime: item.DevelopmentCompletedtime,
                    QAMigrationdate: item.QAMigrationdate,
                    QAMigrationtime: item.QAMigrationtime,
                    ProdMigrateDate: item.ProdMigrateDate,
                    ProdMigratetime: item.ProdMigratetime,
                    QAApprovedDate: item.QAApprovedDate,
                    QAApprovedtime: item.QAApprovedtime,
                    ProdApprovalDate: item.ProdApprovalDate,
                    ProdApprovaltime: item.ProdApprovaltime,
                    UATCompleteDate: item.UATCompleteDate,
                    UATCompletetime: item.UATCompletetime,
                    Creationtime: item.Creationtime,
                    TicketClosureDate: item.TicketClosureDate,
                    TicketClosureTime: item.TicketClosureTime
                });
            }
            return list;
        }

    }
    app.AddService("MyTicketListService", MyTicketListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITicketListUserService {

        FindTicketList(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTicketList(data: any): Array<model.TicketListModel>;

    }
    export class TicketListUserService extends GCPL.Service.BaseService implements ITicketListUserService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"TicketList"}`;
            this.Cookie = _cookieStore;

        }
        FindTicketList(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            var CustomerID;
            var ProjectID;
            var TaskID;
            var SubTaskID;
            var StatusID;
            var CategoryID;
            var SubCategoryID;
            var ChangeType;
            var TicketNo;
            var CreatedBy;
            var FromDate;
            var ToDate;
            var ApplicationID;
            var LoginCustomerID;
            var AssignedTo;
            if (data.AssignedTo != undefined) {
                AssignedTo = data.AssignedTo
            }
            else {
                AssignedTo = "";
            }

            if (data.CustomerID != undefined) {
                CustomerID = data.CustomerID
            }
            else {
                CustomerID = "";
            }

            if (data.ProjectID != undefined) {
                ProjectID = data.ProjectID
            }
            else {
                ProjectID = "";
            }
            if (data.TaskID != undefined) {
                TaskID = data.TaskID
            }
            else {
                TaskID = "";
            }

            if (data.SubTaskID != undefined) {
                SubTaskID = data.SubTaskID
            }
            else {
                SubTaskID = "";
            }

            if (data.StatusID != undefined) {
                StatusID = data.StatusID
            }
            else {
                StatusID = "";
            }
            if (data.CategoryID != undefined) {
                CategoryID = data.CategoryID
            }
            else {
                CategoryID = "";
            }

            if (data.SubCategoryID != undefined) {
                SubCategoryID = data.SubCategoryID
            }
            else {
                SubCategoryID = "";
            }

            if (data.ChangeType != undefined) {
                ChangeType = data.ChangeType
            }
            else {
                ChangeType = "";
            }
            if (data.TicketNo != undefined) {
                TicketNo = data.TicketNo
            }
            else {
                TicketNo = "";
            }

            if (data.CreatedBy != undefined) {
                CreatedBy = data.CreatedBy
            }
            else {
                CreatedBy = "";
            }
            if (data.FromDate != undefined) {
                FromDate = data.FromDate
            }
            else {
                FromDate = "";
            }

            if (data.ToDate != undefined) {
                ToDate = data.ToDate
            }
            else {
                ToDate = "";
            }
            if (data.ApplicationID != undefined) {
                ApplicationID = data.ApplicationID
            }
            else {
                ApplicationID = "";
            }
            if (data.LoginCustomerID != undefined) {
                LoginCustomerID = data.LoginCustomerID
            }
            else {
                LoginCustomerID = "";
            }
            let config = {
                params: {
                    CustomerID: CustomerID,
                    ProjectID: ProjectID,
                    TaskID: TaskID,
                    SubTaskID: SubTaskID,
                    StatusID: StatusID,
                    CategoryID: CategoryID,
                    SubCategoryID: SubCategoryID,
                    ChangeType: ChangeType,
                    TicketNo: TicketNo,
                    CreatedBy: CreatedBy,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    ApplicationID: ApplicationID,
                    LoginCustomerID: this.Cookie.get('UserInfo')['CustomerID'],
                    AssignedTo: AssignedTo
                    // UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetTicketList(data: any): Array<model.TicketListModel> {

            let list = Array<model.TicketListModel>();
            for (let item of data) {
                list.push({

                    TicketID: item.TicketID,
                    CustomerName: item.CustomerName,
                    ProjectName: item.ProjectName,
                    TaskName: item.TaskName,
                    SubTask: item.SubTask,
                    TicketNo: item.TicketNo,
                    TicketTitle: item.TicketTitle,
                    Createdon: item.Createdon,
                    CreatedBy: item.CreatedBy,
                    CreatedFor: item.CreatedFor,
                    AssignedTo: item.AssignedTo,
                    TicketStatus: item.TicketStatus,
                    Category: item.Category,
                    SubCategory: item.SubCategory,
                    ClosureToDate: item.ClosureToDate,
                    ApprovalTypeID: item.ApprovalTypeID,
                    ApprovalType: item.ApprovalType,
                    ApplicationName: item.ApplicationName,
                    AssignedOn: item.AssignedOn,
                    ProjectID: item.ProjectID,
                    AppID: item.AppID,
                    StatusID: item.StatusID,
                    AssignedOntime: item.AssignedOntime,
                    WorkStartDate: item.WorkStartDate,
                    WorkStarttime: item.WorkStarttime,
                    DevelopmentCompletedDate: item.DevelopmentCompletedDate,
                    DevelopmentCompletedtime: item.DevelopmentCompletedtime,
                    QAMigrationdate: item.QAMigrationdate,
                    QAMigrationtime: item.QAMigrationtime,
                    ProdMigrateDate: item.ProdMigrateDate,
                    ProdMigratetime: item.ProdMigratetime,
                    QAApprovedDate: item.QAApprovedDate,
                    QAApprovedtime: item.QAApprovedtime,
                    ProdApprovalDate: item.ProdApprovalDate,
                    ProdApprovaltime: item.ProdApprovaltime,
                    UATCompleteDate: item.UATCompleteDate,
                    UATCompletetime: item.UATCompletetime,
                    Creationtime: item.Creationtime,
                    TicketClosureDate: item.TicketClosureDate,
                    TicketClosureTime: item.TicketClosureTime
                });
            }
            return list;
        }

    }
    app.AddService("TicketListUserService", TicketListUserService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUseraAtofillService {
        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetAutoUser(data: any): Array<model.UserNameModel>;
        FilterAutoComplete(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        //Demo(data: any): Array<model.ICustomerAutoPopulate>;
    }
    export class UseraAtofillService extends GCPL.Service.BaseService implements IUseraAtofillService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"UserNameAutoFill"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }


        FilterAutoComplete(data): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/UserNameAutoFill";

            let config = {
                params: {
                    UserName: data.term,

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }


        GetAutoUser(data: any): Array<model.UserNameModel> {


            let list = Array<model.UserNameModel>();


            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName,

                });
            }
            return list;
        }
    }
    //inject service
    app.AddService("UseraAtofillService", UseraAtofillService);
}



