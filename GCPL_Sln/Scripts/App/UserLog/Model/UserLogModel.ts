namespace GCPL.Model {
    export class UserLogGridModel {
        constructor() { }
        UserId: string;
        EmployeeCode : string;
        FirstName : string;
        LoginFrom : string;
        LoginTime : string;
        LogOutTime : string;
        
    }

    export class UserLogHeaderModel {
        constructor() { }

        UserName: string;
        FromDate: string;
        ToDate: string;
    }
}