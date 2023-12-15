namespace GCPL.Model {
    export class DivisionListModel {
        constructor() {
        }
        DivisionID: string;
        Division: string;
        CategoryID: string;
        Category: string;
        Description: string;
        IsActive: string;
        DivisionSAPID: string;
        QuotePrefix: string;
        NoRangeSeries: string;

    }
    export class DivisionSearchModel {

        constructor() {
       }
        SearchText: string;
        Status: string;
        Category: string;
    }
    export class CategoryddlModel {
        constructor() {
        }
        CategoryID: number;
        Category: string;
    }
    export class InsertDivisionModel {
        constructor() {
        }
        DivisionID: string;
        Division: string;
        CategoryID: string;
        Description: string;
        divisionSAPID: string;
        Status: string;
        QuotePrefix: string;
        NoRangeSeries: string;
    }
    export class EditDivisionModel {
        constructor() {

        }
        DivisionID: string;
        Division: string;
        CategoryID: string;
        Category: string;
        Description: string;
        Status: string;
        divisionSAPID: string;
        QuotePrefix: string;
        NoRangeSeries: string;
    }
}