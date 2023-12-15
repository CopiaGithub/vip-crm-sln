namespace GCPL.Model {
    export class MenuGroupResponse {
        constructor() {
        }
        //ModuleId: string;
        //MainModule: string;

        MenuGroupID: string;
        GroupName: string;
        //IsIcon: string;
        //ColorCode: string;
        //BusinessEntityID: string;
        objSubmenu: Array<Model.MenuSubResponse>;
    }

    export class MenuRequest {
        constructor() {
        }
        RoleId: number;
        BusinessEntityID: number;
        ModuleGroupID:number;

    }


    export class MenuSubResponse {
        constructor() {
        }
        ModuleID: string;
        ModuleGroupID: string;
        ModuleName: string;
        //Title: string;
        //IsIcon: string;
        //PageUrl: string;





        //AccessModuleID: string;
        //AccessmoduleName: string;
        //ModuleName: string;
        
        //IsIcon: string;
        //PageUrl: string;
        //ModuleID: string;
        //ModuleGroupID: string;
        //ModuleName: string;
        //Title: string;
        //IsIcon: string;
        //PageUrl: string;

    }

    export class MenuchildResponse {
        constructor() {
        }
        AccessModuleID: string;
        Url: string;
        PageName: string;
        ParentID: string;


    }
}