namespace GCPL.Model {
    export class InsertUpCampModel {
        constructor() {
        }
        Email: string;
        Designation: string;
        MobileNo: string;
        Address1: string;
        Address2: string;
        District: string;
        City: string;
        Pincode: string;
        ContactName: string;
        ContactEmail: string;
        ContactMobileNo: string;
        Department: string;
        Language: string;
        ContactAddress: string;
        ContactDistrict: string;
        ContactCity: string;
        ContactPincode: string;
        Model: string;
        PurchaseWithin: string;
        IsCommunication: string;
        Comments: string;
        CustomerName: string;
        CampaignID: string;
        CampaignDesc: string;
        SAPID: string;
        FOP: string;
        CustomerPhoneNo: string;
        ContactPhoneNo: string;
        CustomerFax: string;
        Status: string;
        CreatedBy: string;
    }

    export class UpCampistModel {
        constructor() {
        }
        CampaignID: string;
        CampaignName: string;
        Description: string;
        SAPID: string;
        LeadSourceID: string;
        StartDate: string;
        EndDate: string;
        Status: string;
        LeadSource: string;
        WhenEntered: string;

    }
    export class UpCampSearchModel {
        constructor() {
        }
        SearchText: string;
     
    }

    export class CampaignddModel {
        constructor() {

        }
        CampaignID: number;
        CampaignName: string;
    }
}