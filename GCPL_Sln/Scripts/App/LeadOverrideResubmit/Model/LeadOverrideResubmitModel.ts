namespace GCPL.Model {

    export class EditLeadOverrideModel {
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
        ProjectName: string;
    }

    export class SearchRefUserModel {

        constructor() {
        }
        RefUserName: string;
        RefUserID: string;
    }
    export class GetSalesAreaModel {
        constructor() { }
        SalesAreaID: string;

    }
    export class CheckSalesAreaModel {

        constructor() {
        }
        CountryID: string;
        CategoryID: string;
        LeadCategoryID: string;
    }
    export class RegionCheckModel {

        constructor() {
        }
        StateID: string;
        DistrictID: string;
    }
    export class InsertRegionModel {
        constructor() {
        }
        RegionID: string;
        StateID: string;
        DistrictID: string;
    }
    export class ReasonForLeadDDModel {
        constructor() { }
        ID: number;
        Reason: string;
    }
    export class LeadStatusForCloserDDModel {
        constructor() { }
        LeadStatusID: number;
        Status: string;
    }
    //export class SalesAreaModel {
    //    constructor() { }

    //    SalesAreaID: number;
    
    //}
    
    export class UpdateLeadOverrideModel {

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
        LeadReason: string;
        ProjectID: string;
    }
}