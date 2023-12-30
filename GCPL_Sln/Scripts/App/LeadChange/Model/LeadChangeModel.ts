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