namespace GCPL.Model {
    export class MainModuleDDModel {
        constructor() { }
        MainModuleID: string;
        MainModuleName: string;

    }
    export class SubMainModuleModel {
        constructor() { }
        SubModuleID: string;
        SubModuleName: string;
    }

    export class MenuGridModel {
        constructor() {
        }
        AccessModuleName: string;
        AccessModuleID: string;
        IsWeb: boolean;
        IsMobile: boolean;
        SubMenuID: string;
        ParentMenuID: string;
        //IsModule: string;
        //ModuleID: string;
        //MenuGroupID: string;


    }

    export class InsertRoleAccess extends MenuGridModel {

        RoleID: string;
        AccessModuleID: string;
        InsertDetails: Array<Model.MenuGridModel>


    }
}