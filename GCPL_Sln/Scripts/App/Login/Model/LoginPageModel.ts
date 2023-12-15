namespace GCPL.Model {
    export class ILoginPut {

        constructor() {

        }

        UserName: string;
        Password: string;
      

    }
    export class ILoginResponse {

        constructor() {

        }
        UserName: string;
        Password: string; 
        Email: string;
        UserID: string;
        RoleID: string;
        SalesOfficeID: string;
        RoleName: string;
        Status: string;
        UserLogId: string;
        CustomerID: string;

    }

    export class ICRMLoginResponse {

        constructor() {

        }
        UserName: string;
        Password: string;
        Email: string;
        UserID: string;
        RoleID: string;
        SalesOfficeID: string;
        RoleName: string;
        Status: string;
        UserLogId: string;

    }

    

    export class IGetOTPResponse {
        constructor() {
        }
        UserID: string;
        Email: string;
        PhoneNo: string;
        SecurityCode: string;
    }

    export class IGetValidCRMResponse {
        constructor() {
        }
        UserID: string;
        Email: string;
        PhoneNo: string;
        SecurityCode: string;
        RoleID: string;
    }

    export class GetCRMUserModel {
        constructor() {
        }
        UserID: string;
        UserName: string;
        Password: string;
        Comment: string;
    }
}