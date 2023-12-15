namespace GCPL.Model {

    export class SalesRepProductHeadermodel {
        constructor() {
        }

        ZoneID: string;
        UserID: string;
        ProductID: string;
        ModelID: string;
        Year: string;
        DivisionID: string;
        LeadTypeID: string;
        ID: string;
    }

    export class YearDDModel {
        constructor() { }
        YearID: string;
        Year: string;
    }
    export class MonthDDModel {
        constructor() { }
        MonthID: string;
        Month: string;
    }
    export class UserCodeAutofillDTO {
        UserID: string;
        UserName: string;
    }
    export class SalesRepProductivityGridListModel {
        constructor() {
        }
        Month: string;
        Model: string;
        Target: string;
        Won: string;
        Lost: string;
        NoDeal: string;
        Open: string;
        ModelID: string;
        DivisionID: string;
        Division: string;
        ProductID: string;
        Product: string;
        LeadTypeID: string;
        LeadType: string;
        UserID: string;
        SalesRep: string;
        ZoneID: string;
        Zone: string;
        Year: string;

    }
}