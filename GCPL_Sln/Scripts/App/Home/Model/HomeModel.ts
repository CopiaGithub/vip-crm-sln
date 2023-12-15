namespace GCPL.Model {
    export class IHomeModel {
        constructor() { }
        IsIcon: string;
        IsColor: string;
        Title: string;
        PageUrl: string;
    }

    export class IFavModel {
        constructor() { }
        DealerID: number;
        AccessModuleName: string;
        status: string;
    }
    export class OppStatusModel {
        constructor() { }
        Identification: string;
        Qualification: string;
        Development: string;
        Proposal: string;
        Won: string;
        Lost: string;
        NoDeal: string;
    }
    export class LeadChannelSearchModel {
        constructor() { }
        LeadTypeID: string;
        ModelID: string;
        DivisionID: string;
        FromDate: string;
        ToDate: string;
        ProductID: string;
        ID:string;
    }
    export class SourcePieSearchModel {
        constructor() { }
        LeadTypeID: string;
        ModelID: string;
        DivisionID: string;
        FromDate: string;
        ToDate: string;
        ProductID: string;
       
    }
    export class LeadDelaylistModel {
        constructor() { }
        LeadID: string;
        LeadType: string;
        CustomerName: string;
        SalesRep: string;
        Quantity: string;
        Model: string;
        AgeOldDays: string;
    }
    export class OpplistModel {
        constructor() { }
        OpportunitySAPNo: string;
        OpportunityType: string;
        CustomerName: string;
        SalesRep: string;
        Quantity: string;
        Model: string;
        ExpEndDate: string;
    }
    export class ChannelPieModel {
        constructor() { }
        Sales: string;
        Marketing: string;
       
    }
    export class ChannelPie1Model {
        constructor() { }
        
        Label: string;
        Value: string;
        Color: string;
    }
    
    export class ChannelPieSearchModel {
        constructor() { }
        UserID: string;
        LeadType: string;
        Division: string;
        Model: string;
        FromDate: string;
        ToDate: string;
       
    }
    export class SourcePieModel {
        constructor() { }
        Advertisement: string;
        Inhouse: string;
        ColdCall: string;
        DealerSales: string;
        FinancerReferral: string;
        CustomerEnquiry: string;
        Spotters: string;
        CustomerReferral: string;
        FieldService: string;
        MarketingCamp: string;
        CustomerTenders: string;
        TeleMarketing: string;
        Demo: string;
        RoadShow: string;
        WalkIn: string;
        CATWebsite: string;
        ProductSupport: string;
        OtherMisc: string;
        TIPLWebsite: string;
        CATTradeshow: string;
        Events: string;
        ThroughAgency: string;
        CATLeadOnline: string;
        DigitalMarketing: string;
    }

    
}
