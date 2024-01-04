namespace GCPL.Model {

    export class EditLeadChangeModel {
        constructor() {

        }

        LeadID: string;
        LeadStatusID: string;
        LeadReason: string;
        CompanyName: string;
        SalesOfficeID: string;
        MobileNo: string;
        PhoneNo: string;
        Fax: string;
        Email: string;
        Address1: string;
        Address2: string;
        CountryID: string;
        StateID: string;
        DistrictID: string;
        RegionID: string;
        City: string;
        PinCode: string;

        ContactName: string;
        ContactEmail: string
        ContactMobileNo: string
        ContactPhoneNo: string;
        Designation: string;
        DepartmentID: string;
        FOPID: string;
        Address: string;
        ContactCountryID: string;
        ContactStateID: string;
        ContactDistrictID: string;
        ContactCity: string;
        PostalCode: string;

        LeadType: string;
        CategoryID: string;
        DivisionID: string;
        ProductID: string;
        ModelID: string;
        Quantity: string
        PurchaseTimelineID: string;
        LeadCategoryID: string;
        SalesAreaID: string;
        ChannelID: string;
        LeadSourceID: string;
        SpecifyMore: string;
        RefUserID: string;
        RefUserName: string;
        CampaignID: string;
        ProjectID: string;
        WhenEntered: string;
        Description: string;
        Notes: string;

        TC1Heading: string;
        TC1ID: string;
        TC2Heading: string;
        TC2ID: string;
        TC3Heading: string;
        TC3ID: string;
        TC4Heading: string;
        TC4ID: string;
        TC5Heading: string;
        TC5ID: string;
        TC6Heading: string;
        TC6ID: string;
        TC7Heading: string;
        TC7ID: string;
        TC8Heading: string;
        TC8ID: string;
        TC1: string;
        TC2: string;
        TC3: string;
        TC4: string;
        TC5: string;
        TC6: string;
        TC7: string;
        TC8: string;
        QID: string;
        SPName: string;
        SPMobileNo: string;
        SPEmail: string;
        SPDesignation: string;
    }

   
    export class LeadStatusForOpenDDModel {
        constructor() { }
        LeadStatusID: number;
        Status: string;
    }
    export class ReasonForLeadOpenDDModel {
        constructor() { }
        ID: number;
        Reason: string;
    }

    export class UpdateLeadChangeModel {

        constructor() {

        }

        LeadID: string;
        LeadSourceID: string;
        RefUserName: string;
        LeadStatusID: string;
        ChannelID: string;
        CampaignID: string;
        RefUserID: string;
        Comments: string;
        LeadOpenReason: string;
        LeadType: string;
        ModelID: string;
        Quantity: string
        PurchaseTimelineID: string;
        LeadCategoryID: string;
        SpecifyMore: string;
        ProjectID: string;


    }
}