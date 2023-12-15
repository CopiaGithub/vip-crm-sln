namespace GCPL.Model {
    export class RoleMasterGridModel {
        constructor() { }
        RoleID: string;
        Title: string;
        WhenEntered: string;
        Status: string;
       
    }

    export class RoleMasterHeaderModel {
        constructor() { }

        SearchText: string;
        Status: string;

        //   DealerID: string;
        // DetailList: Array<SOList>;
    }

    export class RoleMasterEditModel {
        constructor() { }
        RoleID: string;
        Title: string;
        WhenEntered: string;
        Status: string; 

    }
}