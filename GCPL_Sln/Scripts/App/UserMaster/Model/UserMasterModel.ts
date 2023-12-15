namespace GCPL.Model {
    export class UserMasterGridModel {
        constructor() { }
        UserID: string;
        EmployeeCode: string;
        FirstName: string;
        LastName: string;
        Email: string;
        PhoneNo: string;
        Role: string;
        State: string;
        District: string;
        Region: string;
        DateCreated: string;
        IsActive: string;
    }

    export class UserMasterHeaderModel {
        constructor() { }
       
        SearchText: string;
        SearchEmployeeCode: string;
        SearchPhoneNo: string;
        Status: string;
       
        //   DealerID: string;
        // DetailList: Array<SOList>;
    }

    export class UserMasterInsertModel {

        constructor() {

        }

        EmployeeCode: string;
        FirstName: string;
        LastName: string;
        Email: string;
        PhoneNo: string;
        RoleID: string;
        StateID: string;
        DistrictID: string;
        RegionID: string;
        DateCreated: string;
        Status: string;
        UserDepartment: string;
        CustDivision: string;
        SalesOfficeID: string;
        Mode: string;
        DesignationId: string;


    }

    export class UserMasterEditModel {
        constructor() { }
        UserID: string;
        EmployeeCode: string;
        FirstName: string;
        LastName: string;
        Email: string;
        PhoneNo: string;
        RoleID: string;
        CountryID: string;
        StateID: string;
        DistrictID: string;
        RegionID: string;
        DateCreated: string;
        Status: string;
        UserDepartment: string;
        CustDivision: string;
        SalesOfficeID: string;
        Password: string;
        Mode: string;
        DesignationId: string;
        ZoneID: string;
        
    }

    export class SalesOfficeModel {
        constructor()
        { }
        SalesOfficeID: string;
        SalesOffice: string;
    }

    export class DepartmentDDModel {
        constructor()
        { }
        DepartmentID: string;
        Department: string;
    }

    export class RoleDDModel {
        constructor()
        { }
        RoleID: string;
        Title: string;
    }

    export class DesignationDDModel {
        constructor() { }
        DesignationId: string;
        Designation: string;
    }
    export class CheckRegionModel {
        constructor() { }
        RegionID: string;
        StateID: string;
        DistrictID: string;
    }
    export class ZoneModel {
        constructor() { }
        ZoneID: number;
        ZoneName: string;
    }
    //export class CountryDDModel {
    //    constructor()
    //    { }
    //    CountryID: string;
    //    Country: string;
    //}
    export class CheckZoneModel {
        constructor() { }
        ZoneID: string;
        ZoneName: string;
       
    }
    export class ZoneCheckModel {

        constructor() {
        }
        SalesOfficeID: string;
       
    }
    export class RegionDDModel {
        constructor()
        { }
        RegionID: string;
        Region: string;
    }
    export class UserDepartmentDDModel {
        constructor() { }
        Id: string;
        BroadFunction: string;
    }

    //export class StateddlModel {
    //    constructor() {
    //    }
    //    StateID: number;
    //    State: string;
    //}
    //export class DistrictddlModel {
    //    constructor() {
    //    }
    //    DistrictID: number;
    //    District: string;
    //}
}