namespace GCPL.Model {
    export class SalesAreaDeterminationListModel {
        constructor() {

        }
        SalesAreaDeterminationID :string
        SalesOrg :string
        DistributionChannel :string
        CustomerDivision :string
        CountryID :string
        Category :string
        LeadCategory :string
        LeadTypeDesc :string
        IsActive :string

    }
    export class SalesAreaDeterminationSearchModel {

        constructor() {

        }

        //SearchText: string;
        Status: string;
    }

    //leadCategory

    export class LeadCategoryddlModel {
        constructor() {

        }
        LeadCategoryID: number;
        LeadCategory: string;
    }

    //insert
    export class InsertSalesAreaDeterminationModel {

        constructor() {

        }
        
        SalesAreaID: string;
        SalesAreaDeterminationID: string;
        CountryID: string;
        CategoryID: string;
        LeadCategoryID: string;
        Mode: string;
        Status: string;
        ID: string;
    }

    export class EditSalesAreaDeterminationModel {
        constructor() {

        }
        SalesAreaID: string;
        SalesAreaDeterminationID: string;
        CountryID: string;
        CategoryID: string;
        LeadCategoryID: string;
        Mode: string;
        Status: string;
        ID: string;

    }
}