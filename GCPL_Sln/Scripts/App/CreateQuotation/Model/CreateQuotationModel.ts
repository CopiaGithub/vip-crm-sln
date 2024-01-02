namespace GCPL.Model {
    export class Accessory1ddlModel {
        constructor() {

        }
        Accessory1ID: number;
        Accessory1Name: string;
    }
    export class Option1ddlModel {
        constructor() {

        }
        Option1ID: number;
        Option1Name: string;
    }
    export class Accessory2ddlModel {
        constructor() {

        }
        Accessory2ID: number;
        Accessory2Name: string;
    }
    export class Option2ddlModel {
        constructor() {

        }
        Option2ID: number;
        Option2Name: string;
    }
    export class Accessory3ddlModel {
        constructor() {

        }
        Accessory3ID: number;
        Accessory3Name: string;
    }
    export class Option3ddlModel {
        constructor() {

        }
        Option3ID: number;
        Option3Name: string;
    }
    export class Accessory4ddlModel {
        constructor() {

        }
        Accessory4ID: number;
        Accessory4Name: string;
    }
    export class Option4ddlModel {
        constructor() {

        }
        Option4ID: number;
        Option4Name: string;
    }
    export class Accessory5ddlModel {
        constructor() {

        }
        Accessory5ID: number;
        Accessory5Name: string;
    }
    export class Option5ddlModel {
        constructor() {

        }
        Option5ID: number;
        Option5Name: string;
    }
    export class Accessory6ddlModel {
        constructor() {

        }
        Accessory6ID: number;
        Accessory6Name: string;
    }
    export class Option6ddlModel {
        constructor() {

        }
        Option6ID: number;
        Option6Name: string;
    }
    export class Config1ddlModel {
        constructor() {

        }
        Config1ID: number;
        ConfigName: string;
    }
    export class Config2ddlModel {
        constructor() {

        }
        Config2ID: number;
        ConfigurationName: string;
    }
    export class SOSModel {
        constructor() {
        }

        ModelDescription: string;
        ModelID: string;
        ModelNo: string;
        StdConfiguration: string;
        GSTRate: string;
        Price: string;
        Quantity: string;


    }
    export class InsertQuotationModel {
        constructor() {
        }
        ID: string;
        LeadId: number;
        CustomerName: string;
        ContactName: string;
        CustomerID: string;
        ContactID: string;
        TCDetails: string;
        SPName: string;
        SPMobileNo: string;
        SPEmail: string;
        SPDesignation: string;
        CreatedBy: string;
        ModifiedBy: string;
        WhenCreated: string;
        WhenModified: string;

    }
    export class COLModel {
        constructor() {
        }
        OpportunitySAPNo: string;
        CustomerID: string;
        CustomerName: string;
        Address: string;
        SOAddress1: string;
        SOAddress2: string;
        SOAddress3: string;
        SOAddress4: string;
        UserName: string;
        Role: string;
        Email: string;
        PhoneNo: string;
        QuoteRange: string;
        Subject: string;
        ContactName: string;

    }
    export class ProductFModel {
        constructor() {
        }
        OpportunitySAPNo: string;
        FeatureDescription: string;
        ModelID: string;
        FeatureName: string;
        ProductFeaturesID: string;
        PictureID: string;


    }
    export class ProdFModel {
        constructor() {
        }
        FeatureDescription: string;
        FeatureName: string;
        ProductFeaturesID: string;
        PictureID: string;


    }
    export class TermsCModel {
        constructor() {
        }
        TACID: string;
        Description: string;
        
    }
    export class OfferModel {
        constructor() {
        }
        OfferingID: string;
        Description: string;
        OfferingName: string;
        PictureID: string;
    }
    export class CapabilityModel {
        constructor() {
        }
        CapabilityID: string;
        CapabilityName: string;
        CapabilityDetails: string;
        PictureID: string;
    }
    export class TotalPriceModel {
        constructor() {
        }       
        Quantity: number;      
        MRPUnit: number;
        GST: number;
        HSN: number;
        Discount: number;
        DiscountedPricePerUnit: number;
        TotalPrice: number;
        TotalGST: number;
        NetAmount: number;
    }


}