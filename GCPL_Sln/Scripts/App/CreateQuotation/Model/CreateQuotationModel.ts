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
        OpportunitySAPNo: string;
        ModelID: number;
        ModelDescription: string;
        StdConfiguration: string;
        Accessory1ID: string;
        Option1ID: string;
        Accessory2ID: string;
        Option2ID: string;
        Accessory3ID: string;
        Option3ID: string;
        Accessory4ID: string;
        Option4ID: string;
        Accessory5ID: string;
        Option5ID: string;
        Accessory6ID: string;
        Option6ID: string;
        GSTRate: string;
        Price: string;
        Quantity: number;
        QuotationID: number;
        QuoteRange: string;
        TC1: string;
        TC2: string;
        TC3: string;
        TC4: string;
        TC5: string;
        TC6: string;
        TC7: string;
        TC8: string;
        PF1: string;
        PF2: string;
        PF3: string;
        PF4: string;
        PF5: string;
        PF6: string;
        PF7: string;
        Offer1: string;
        Offer2: string;
        Offer3: string;
        Offer4: string;
        Offer5: string;
        Offer6: string;
        Capability1: string;
        Capability2: string;
        Capability3: string;
        Capability4: string;
        TotalPrice: string;
        QuoteDate: string;
        TotalTax: string;
        UserID: number;
        ContactName: string;
        CustomerAddress: string;
        Capability5: string;
        Capability6: string;
        TC1ID: string;
        TC2ID: string;
        TC3ID: string;
        TC4ID: string;
        TC5ID: string;
        TC6ID: string;
        TC7ID: string;
        TC8ID: string;
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
        TACName: string;
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
        Price: number;
        Quantity: number;
        GSTRate: number;
        ConvertedGST: number;
        TotalPrice: string;
        TotalTax: string;
    }

   
}