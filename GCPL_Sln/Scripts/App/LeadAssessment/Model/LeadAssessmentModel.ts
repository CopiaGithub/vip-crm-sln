namespace GCPL.Model {

    export class LeadAssessmentModel {
        constructor() {
        }

        BusinessPartnerNo: string;
        RefUserID: string;
        RefUserName: string;
        LeadID: number;
        LeadStatusID: string;
        SalesAreaID: string;
        IndustryDivisionID: string;
        Comments: string;
        UserID: number;
        CustomerID: string;
        CompanyName: string;
        Email: string;
        MobileNo: string;
        Address1: string;
        Address2: string;
        DistrictID: string;
        City: string;
        Pincode: string;
        ContactID: string;
        ContactName: string;
        ContactEmail: string;
        ContactMobileNo: string;
        ContactAddress: string;
        ContactDistrictID: string;
        ContactStateID: string;
        ContactCountryID: string;
        ContactCity: string;
        ContactPincode: string;
        Language: string;
        Designation: string;
        DepartmentID: string;
        FOPID: string;
        ModelID: string;
        PurchaseTimelineID: string;
        SpecifyMore: string;
        ProductID: string;
        PhoneNo: string;
        Fax: string;
        ContactPhoneNo: string;
        LeadCategoryID: string;
        SalesOfficeID: string;
        CallbackDate: string;
        LeadSourceID: string;
        ManagerID: string;
        Quantity: string;
        LeadType: string;
        IndustrySegment: string;
        CampaignID: string;
        CustomerRatingID: string;
        ChannelID: string;
        RegionID: string;
        CategoryID: string;
        DivisionID: string;
        StateID: string;
        CountryID: string;
        //OASSID: number;
        Product: string;
        ModelNo1: string;
        
    }
    export class ValidateContactListModel {
        constructor() {
        }
        ContactID: string;
        ContactName: string;
        ContactEmailID: string;
        ContactMobileNo: string;
        SAPID: string;
        //PostalCode: string; 
        //StateID: string; 
        //DistrictID: string; 
        //City: string; 
        //DesignationID: string; 
        //DepartmentID: string; 
        //FOPID: string; 
        //PhoneNo: string; 
        //Address: string; 
        //Comments: string; 
    }

    export class LeadAssessmentInfoModel {
        constructor() {
        }
        RefUserID: string;
        RefUser: string;
        CustomerID: string;
        LeadStatusId: string;
        SalesStage: string;
        ContactID: string;
        ModelID: string;
        PurchaseTimelineID: string;
        Comments: string;
        CompanyName: string;
        MobileNo: string;
        Email: string;
        Address1: string;
        Address2: string;
        DistrictID: string;
        Pincode: string;
        City: string;
        ContactName: string;
        ContactMobileNo: string;
        ContactEmail: string;
        DepartmentID: string;
        Department: string;
        FOPID: string;
        FOP: string;
        StateID: string;
        State: string;
        CountryID: string;
        Country: string;
        District: string;
        ContactDistrictID: string;
        ContactStateID: string;
        ContactCountryID: string;
        ContactCity: string;
        Address: string;

        ContactState: string;
        ContactDistrict: string;
        CategoryID: string;
        DivisionID: string;
        ProductID: string;
        PhoneNo: string;
        Fax: string;
        ContactPhoneNo: string;
        SalesOfficeID: string;
        SalesOffice: string;
        LeadCategoryID: string;
        LeadSourceID: string;
        IsNational: string;
        BusinessPartnerNo: string;
        SAPID: string;
        Quantity: string;
        LeadType: string;
        CampaignNameID: string;
        CustomerRatingID: string;
        CustomerRating: string;
        ChannelID: string;
        LeadID: string;
        RegionID: string;
        IndustryDivisionID: string;
        IndustrialSegmentID: string;
        UserID: string;
        SalesAreaID: string;
        Product: string;
        EmployeeCode: string;
        PostalCode: string;
        ConStateSAPID: string;
        ModelNo: string;
        ProjectID: string;
        Description: string;
        Notes: string;
    }

    export class CrtAssessmtModel {
        constructor() {
        }
        ID: string;
        UserID: string;
        LeadID: string;
        Comments: string;
        IsLess: string;
        ConversionProbabilityID: string;
        PlatformProbabilityID: string;
        KeepAllocatedTimeID: string;
        IsMeet: string;
        Lat: string;
        Long: string;
        LeadStatus: string;
        Allocated1: string;
        DisqualificationID: string;
    }

    export class UpdateLeadDataModel {
        constructor() {
        }
        userID: string;
        leadID: string;
        salesStage: string;
        status: string;
        notes: string;
        reason: string;
        description: string;
    }

    export class ReturnModel {
        constructor() {
        }

        UserID: string;
        LeadID: string;
       
    }

    export class InsertLeadActivity {
        constructor() {
        }
        ID: string;
        UserID: string;
        LeadID: string;
        ModeeID: string;
        StatusID: string;
        Purpose: string;
        Location: string;
        note: string;
        AnsID1: string;
        AnsID2: string;
        AnsID3: string;
        ActivityDate: string;
        Mode: string;
        CustomerID: string;
        ContactID: string;
        ReferenceType: string;

    }

    export class Activity {
        constructor() {
        }
        ActivityID: string;
        LeadID: string;
        UserID: string;
        CustomerID: string;
        ContactID: string;
        loc: string;
        cate: string;
        date: string;
        purid: string;
        ptype: string;
        ActivityStatus: string;
        note: string;
        ActivityNumber: string;
        ftime: string;
        ttime: string;
        sorg: string;
        sofc: string;
        dchnl: string;
        erpid: string;
        location: string;
        div: string;
        QueOne: string;
        AnsOne: string;
        QueTwo: string;
        AnsTwo: string;
        QueThree: string;
        AnsThree: string;
        OpportunityID: string;
        OpportunityStageID: string;
        QueFour: string;
        AnsFour: string;
        refid: string;
        reftyp: string;
        SAPID: string;
        BusinessPartnerNo: string;
        
    }

     export class EditActivityModel {
        constructor() {
        }
        //CustomerID: string;
        //CompanyName: string;
        //CustomerSAPID: string;
        //ContactID: string;
        //ContactName: string;
        //ContactSAPID: string;
        //note: string;
        //ActivityID: string;
        //ActivityName: string;
        //ActivityDate: string;
        //ActivityStatus: string;
        //IsActive: string;
        //purid: string;
        //cate: string;
        //loc: string;
        //ReferenceType: string;
        //ReferenceLead: string;
        //ReferenceOpportunity: string;
        //date: string;
        //EndDate: string;
        //ActivityNumber: string;

         CustomerID: string;
         CompanyName: string;
         CustomerSAPID: string;
         ContactID: string;
         ContactName: string;
         ContactSAPID: string;
         ActivityNote: string;
         ActivityID: string;
         ActivityName: string;
         ActivityDate: string;
         ActivityStatus: string;
         IsActive: string;
         ActivityPurpose: string;
         ActivityCategory: string;
         LocationID: string;
         ReferenceType: string;
         ReferenceLead: string;
         ReferenceOpportunity: string;
         date: string;
         EndDate: string;
         ActivityNumber: string;
    }
    export class LeadActivityModel {
        constructor() {
        }
        ID: string;
        CustomerID: string;
        CompanyName: string;
        CustomerSAPID: string;
        ContactID: string;
        ContactName: string;
        ContactSAPID: string;
        Note: string;
        ActivityID: string;
        ActivityName: string;
        ActivityDate: string;
        Status: string;
        IsActive: string;
        Purpose: string;
        Mode: string;
        Location: string;
        ReferenceType: string;
        ReferenceLead: string;
        ReferenceOpportunity: string;
        StartDate: string;
        EndDate: string;
        ActivityNumber: string;
    }
   
    export class LeadQueAnsModel {
        constructor() {
        }
        UserID: string;
        LeadID: string;
        OpportunityID: string;
        OpportunityStageID: string;
        QueID: string;
        Question: string;
        AnsID: string;
        Answer: string;
        LeadSource: string;
    }
    export class LeadItemModel {
        constructor() {
        }
        ItemID: string;
        Status: string;
        Quantity: string;
        ProductID: string;
        ProductDesc: string;
        LeadID: string;
    }
    export class LeadOpportunityModel {
        constructor() {
        }
       
        UserID: string;
        LeadID: string;
        Comnt: string; 
        CretOpp: string; 
        ConversionProbabilityID: string; 
        PlatformProbabilityID: string; 
        KeepAllocatedTimeID: string; 
        Allocated: string;
        LeadStatus: string; 
        ExpDate: string;
    }

    export class LeadActivitySearchModel {
        constructor() {
        }
        UserID: string;
        LeadID: string;
    }

    export class ModeActivityModel {
        constructor() { }
        ModeID: string;
        Mode: string;
    }

    export class LeadActivityStatusModel {
        constructor() { }
        StatusID: string;
        Status: string;
    }

    export class Ans1DDLModel {
        constructor() { }
        AnsID: string;
        QueID: string;
        Answer: string;
    }

    export class Ans2DDLModel {
        constructor() { }
        AnsID: string;
        QueID: string;
        Answer: string;
    }

    export class Ans3DDLModel {
        constructor() { }
        AnsID: string;
        QueID: string;
        Answer: string;
    }

    export class  LeadActivityPurposeModel {
        constructor() { }
        Description: string;
        LeadSourceID: string;
        LeadSource: string;
    }

    export class LeadActivityLocationModel {
        constructor() { }
        LocationID: string;
        Location: string;
    }
    export class GetDisqualificationReasonDDModel {
        constructor() {
        }
        DisqualificationID: string;
        Description: string;
    }

    export class SalesStageDDModel {
        constructor() { }
        ID: number;
        Stage: string;
    }

    export class LeadStatusDDModel {
        constructor() {

        }
        LeadStatusID: number;
        Status: string;
    }
}