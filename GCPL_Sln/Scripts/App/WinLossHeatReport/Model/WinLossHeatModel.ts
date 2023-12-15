namespace GCPL.Model {
    export class WinLossHeatGridModel {
        constructor() { }
        

        State: string;
        District: string;
        Zone: string;
        SalesOffice: string;
        LeadType: string;
        Model: string;
        Channel: string;       
        LeadSource: string;
        NoOfLeads: string;
        NoOfOpportunities: string;
        Won: string;
        Lost: string;
        NoDeal: string;

    }
    export class UserDDModel {
        constructor() { }
        UserID: string;
        UserName: string;
    }
    export class WinLossHeatHeaderModel {
        constructor() { }
        FromDate: string;
        ToDate: string;
        LeadSource: string;
        DivisionID: string;
        ProductID: string;
        ModelID: string;
        LeadTypeID: string;
        State: string;
        District: string;
        Zone: string;
        Channel: string;
        SalesOffice: string;
        Salesrep: string;
        ID: string;
    }

    export class SalesOfficewpModel {
        constructor() { }
        SalesOfficeID: string;
        SalesOffice: string;
    }

    export class UserNamewpModel {
        constructor() { }
        UserID: string;
        UserName: string;
    }
    export class OppTypeddlModel {
        constructor() {
        }
        ID: number;
        OpportunityType: string;
    }
}