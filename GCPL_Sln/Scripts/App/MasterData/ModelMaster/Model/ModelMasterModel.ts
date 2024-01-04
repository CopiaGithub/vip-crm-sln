namespace GCPL.Model {

    export class LeadTypeddlModel {
        constructor() {
        }
        ID: number;
        LeadTypeDesc: string;
    }
    
    export class ProductddlModel {
        constructor() {
        }
        ProductID: number;
        Product: string;
        ProductDesc: string;
    }
    export class ModelListModel {
        constructor() {
        }
        ModelID: string;
        ModelNo: string;
        ProductID: string;
        Product: string;
        Description: string;
        IsActive: string;
        WhenEntered: string;
        Value: string;
        ID: string;
        LeadTypeDesc: string;
        DivisionID: string;
    }
    export class ModelSearchModel {

        constructor() {
        }
        SearchText: string;
        Status: string;
        Product: string;
        LeadType: string;
    }
    export class InsertModelMaster {
        constructor() {
        }
        ModelID: string;
        ModelNo: string;
        ProductID: string;
        Description: string;
        Status: string;
        Mode: string;
        Value: string;
        leadTypeID: string;
        DivisionID: string;
        Eligible: string;
    }
    export class EditModel {
        constructor() {

        }
        ModelID: string;
        ModelNo: string;
        ProductID: string;
        Description: string;
        Status: string;
        Mode: string;
        Value: string;
        leadTypeID: string;
        DivisionID: string;
        Eligible: string;
    }
    export class ProductddModel {
        constructor() {
        }
        ProductID: number;
        Product: string;
    }
}