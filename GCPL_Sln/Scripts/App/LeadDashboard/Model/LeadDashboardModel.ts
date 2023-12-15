namespace GCPL.Model {
    export class LeadDashSearchModel {
        constructor() { }
        FromDate: string;
        ToDate: string;
        DivisionID: string;
        ProductID: string;
        Status: string;
        ModelID: string;
        LeadTypeID: string;
        Region: string;
        State: string;
        District: string;
        Channel: string;
        LeadSource: string;
        Zone: string;
        SalesOffice: string;
        SalesRep: string;
        RoleID: string;
        UserID: string;
        ID: string;
    }
    export class LeadSnapshotModel {
        constructor() { }
        Allocated: string;
        Created: string;
        Converted: string;
    }
    export class LeadDashListModel {
        constructor() { }
        LeadID: string;
        ChannelID: string;
        Channel: string;
        LeadSourceID: string;
        LeadSource: string;
        SalesOfficeID: string;
        SalesOffice: string;
        ZoneID: string;
        ZoneName: string;
        RegionID: string;
        Region: string;
        ModelID: string;
        ModelNo: string;
        ProductID: string;
        Product: string;
        DivisionID: string;
        Division: string;
        UserID: string;
        SalesRep: string;
        LeadType: string;
        LeadTypeDesc: string;
        LeadStatusID: string;
        Status: string;
        LeadCount: string;
        LeadPer: string;
        StateID: string;
        DistrictID: string;
    }

    export class DivisionPieModel {
        constructor() { }
        BCP: string;
        GCI: string;
        ETCAT: string;
        MINING: string;
        ETFGW: string;
        MARINI: string;
    }
    export class RegionPieModel {
        constructor() { }
        East: string;
        SouthEast: string;
        North: string;
        NorthCentral: string;
        West: string;
    }
    export class ZonePieModel {
        constructor() { }
        Zone1: string;
        Zone2: string;
        Zone3: string;
        Zone4: string;
        Zone5: string;
        Zone6: string;
        Zone7: string;
        Zone8: string;
        Zone9: string;
        Zone10: string;
    }
    export class ProductPieModel {
        constructor() { }
        BackHoe: string;
        WheelLoader: string;
        TrackType: string;
        Excavator: string;
        MotorGrader: string;
        OffHighway: string;
        Wheel: string;
        DGSet: string;
        Paving: string;
        SkidSteer: string;
        Track: string;
        Motor: string;
        TrackTypeTractor: string;
        Tandem: string;
        Hammer: string;
        Marini: string;
        Soil: string;
    }
    export class StatePieModel {
        constructor() { }

        Label: string;
        Value: string;
        Color: string;
    }

    export class LeadDashSearchDataModel {
        constructor() { }
        FromDate: string;
        ToDate: string;
        Division: string;
        Product: string;
        Status: string;
        ModelNo: string;
        LeadTypeDesc: string;
        Region: string;
        State: string;
        District: string;
        Channel: string;
        LeadSource: string;
        ZoneName: string;
        SalesOffice: string;
        SalesRep: string;
        RoleID: string;
        UserID: string;
        ChkRegion: string;
        ChkZone: string;
        ChkDivision: string;
        ChkProduct: string;
        ChkModel: string;
        ChkChannel: string;
        ChkLeadSource: string;
        ChkLeadType: string;
        ChkSalesOffice: string;
        ChkSalesRep: string;
        ChkStatus: string;
        LeadCount: string;
        LeadPer: string;
    }
}