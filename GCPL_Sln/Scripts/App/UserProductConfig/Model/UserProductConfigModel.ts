namespace GCPL.Model {
    export class AllocationMatrixGridModel {
        constructor() { }
        UserProductID: string;
        UserID: string;
        UserName: string;
        Product: string;
        District: string;
        DateCreated: string;
        IsActive: string;
        LeadType: string;
        LeadTypeDesc: string;
        Category: string;
        Division: string;
        State: string;

    }

    export class AllocationMatrixHeaderModel {
        constructor() { }
       
        SearchInput: string;
        StatusID: string;
        LeadTypeID: string;
        CategoryID: string;
        DivisionID: string;
        ProductID: string;
        StateID: string;
        DistrictID: string;
        //   DealerID: string;
        // DetailList: Array<SOList>;
    }

    export class AllocationMatrixEditModel {
        constructor() { }
        UserProductID: string;
        UserID: string;
        UserName: string;
        CategoryID: string;
        divisionID: string;
        ProductID: string;
       // DateCreated: string;
        Status: string;
        CountryID: string;
        StateID: string;
        DistrictID: string;
        Mode: string;
        ID: string;
        LeadType: string;
        LeadTypeDesc: string;
        
    }
    export class AllocationMatrixInsertModel {
        constructor() { }
       
        UserID: string;
        UserName: string;
        CategoryID: string;
        divisionID: string;
        ProductID: string;
        DateCreated: string;
        Status: string;
        CountryID: string;
        StateID: string;
        DistrictID: string;
        Mode: string;
        LeadTypeID: string;
        LeadType: string;

    }
    export class DivisionDDPModel {
        constructor() { }
        DivisionID: string;
        Division: string;
    }

    export class UserAutofill {
        constructor() { }
        UserID: string;
        UserName: string;
    }
}