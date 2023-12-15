namespace GCPL.Model {
    export class DeligationMasterGridModel {
        constructor() { }
        TeamAllocationID: string;
        ManagerName: string;
        Employee: string;
        DateCreated: string;
        IsActive: string;
        ZoneName: string;
      

    }

    export class DeligationMasterHeaderModel {
        constructor() { }

        SearchInput: string;
        SearchManagerName: string;
        Status: string;
        ZoneName: string;

      
    }

    export class DeligationMasterInsertModel {
        constructor() {}
        
        ManagersEmployeeCode: string;
        TeamLeadID: string;     
        Status: string;
        Mode: string;
        EmployeeName: string;

        ManagerName: string;
    }

    export class DeligationMasterEditModel {
        constructor() { }
        TeamAllocationID: number;
        ManagersEmployeeCode: number;
        TeamLeadID: number;
        EmployeeName: string;
     
        ManagerName: string;
        Status: string;


    }

    export class ManagerAutofill {
        userid: string;
        ManagerEmployeeCode: string;
        ManagerName: string;
    }

    export class EmployeeAutofill {
        userid: string;
        EmployeeCode: string;
        Name: string;
    }
}