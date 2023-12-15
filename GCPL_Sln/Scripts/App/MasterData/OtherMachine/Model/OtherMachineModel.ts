namespace GCPL.Model {
    export class OtherMachinesGridModel {
        constructor() { }
        MachineId: string;
        CustomerId: string;
        CompanyName: string;
        Manufacturer: string;
        Model: string;
        SrNo: string;
        ProductName: string;
        DateOfPurchase: string;
        WarrentyEnded: string;
        NextServicesDueDate: string;
        IsActive: string;
        YearOfManufacture: string;
        Quantity: string;
        Type: string;
        ModelID: string;
        OpportunityType: string;
        CompitatorName: string;
        CompetitorNameID: string;
    }

    export class OtherMachinesHeaderModel {
        constructor() { }

        CustomerName: string;      
        CompetitorNameID: string;      
        ProductID: string;      
        ModelID: string;      
    }

    export class OtherMachinesEditModel {
        constructor() { }
        MachineId: string;
        CustomerId: string;
        CompanyName: string;
        Manufacturer: string;
        Model: string;
        SrNo: string;
        DateOfPurchase: string;
        WarrentyEnded: string;
        NextServicesDueDate: string;
        Product: string;
        ProductName: string;
        YearOfManufacture: string;
        Quantity: string;
        Type: string;
        CompetitorNameID: string;
        ModelID: string;
    }

    export class OtherMachinesInsertModel {
        constructor() { }

        CustomerId: string;
        CompanyName: string;
        Manufacturer: string;
        ModelID: string;
        SrNo: string;
        DateOfPurchase: string;
        WarrentyEnded: string;
        NextServicesDueDate: string;
        Product: string;
        YearOfManufacture: string;
        Quantity: string;
        Type: string;
        CompetitorNameID: string;

    }


    export class ModelDDModel {
        constructor() { }
        ModelID: string;
        ModelNo: string;
    }

    export class CompetitorNameddlModel {
        constructor() { }
        ID: string;
        SAPID: string;
        CompitatorName: string;
    }

    export class CompProductDDModel {
        constructor() { }
        ID: string;
        OppCompitatorProductFamily: string;
    }

    export class CompModelDDModel {
        constructor() { }
        ID: string;
        Model: string;
    }
}