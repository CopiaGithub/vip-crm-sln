namespace GCPL.Model {
    export class AllLeadsGridModel {
        constructor() { }
        LeadID: string;
        CompanyName: string;
        Product: string;
        ModelNo: string;
        PurchaseWithin: string;
        Region: string;
        CreatedBy: string;
        CreatedDate: string;
        ValidatedBy: string;
        AllocatedTo: string;
        Status: string;
        ContactID: string;
        CustomerID: string;
        AssessmentDate: string;
        LeadSource: string;
        CustMobNo: string;
        CustPhnNo: string;
        ContactPerName: string;
        ContactPerNo: string;
        ContactPerMob: string;
        SAPID: string;
        Latitude: string;
        Longitude: string;
        LeadType: string;
        LeadOrigin: string;
        Zone: string;
        ValidateDate: string;
        Division: string;
        AssessmentComments: string;
        OpportunityNo: string;
        Quantity: string;
        RefUserName: string;
        CampaignName: string;
        State: string;
        District: string;
        EmpCode: string;
        EmployeeCode: string;
        ProjectName: string;
        VLEID: string;
        Description: string;
        VLELeadID: string;
        VLEName: string;
        ProjectNo: string;
        InvalidReasonID: string;
        DisqualificationReasonID: string;
        SalesWithin: string;
        Que1: string; 
        QueAns1: string; 
        Que2: string;  
        QueAns2: string; 
        Que3: string;  
        QueAns3: string; 
    }

    export class ProjNameAutofill {
        ProjectID: string;
        ProjectName: string;
    }

    export class ProjNoAutofill {
        ID: string;
        ProjectNo: string;
    }
    export class Modelno {

        constructor() {
        }
        ModelNo: string;
    }

    export class Product {
        constructor() {
        }
        Product: string;
    }

    export class AllLeadsHeaderModel {
        constructor() { }
        LeadTypeID: string;
      //  DivisionID: string;
      //  ZoneID: string;
      //  ProductID: string;
        ModelID: string;
        ManagerName: string;
        CustomerMobile: string;
        LeadID: string;
        FromDate: string;
        ToDate: string;
        CustomerName: string;
        ProductID: string;
        SourceID: string;
        DivisionID: string;
        StatusID: string;
        RegionID: string;
        StateIDs: string;
        UserID: string;
        CampaignID: string;
        DistrictID: string;
        LeadSourceID: string;
        Createdby: string;
        AllocatedTo: string;
        SubsourceID: string;
        Subsource2ID: string;
        ModelId: string;
        Campaign: string;
        LeadOrigin: string;
        SAPID: string;
        UserID1: string;
        LeadType: string;
        CustomerID: string;
        Opportunity: string;
        ProjectID: string;

    }

    export class LeadSourceddModel {
        constructor() { }
        LeadSourceID: string;
        LeadSource: string;
    }

    export class AllLeadReportViewModel {
        constructor() { }
        LeadID: string;
        CustName: string;
        CustEmail: string;
        CustMobNo: string;
        CustPhnNo: string;
        CustAddress: string;
        ContName: string;
        ContEmail: string;
        ContMobNo: string;
        ContPhnNo: string;
        ContAddress: string;
        LeadModel: string;
        PurchaseWithin: string;
        SpecifyMore: string;
        Quantity: string;
        CreatedBy: string;
        CreatedDate: string;
        Source: string;
        Campaign: string;
        LeadCreationComments: string;
        ValidatedBy: string;
        DateValidated: string;
        ValidationComment: string;
        AllocatedTo: string;
        AllocatedDate: string;
        AssessmentDate: string;
        Lessthan90days: string;
        MetCustomer: string;
        AssessmentComments: string;
        LeadStatus: string;
        ClosedBy: string;
        ClosedDate: string;
        ClosedComments: string;
        RefUserName: string;
        LeadReportView: string;
        OpportunityNo: string;
        LeadOrigin: string;
        ReturnUserID: string;
        ReturnComment: string;
        ReturnUserName: string;
        DateReturn: string;
        ProjectName: string;
        InvalidReasonID: string;
        DisqualificationReasonID: string;
    }

    export class ValidateLeadInfoModel {
        constructor() {
        }
        RefUserID: string;
        RefUserName: string;
        CustomerID: string;
        LeadStatusId: string;
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
    }

    export class CampaignAutofillModel {
        constructor() { }
        CampaignID: string;
        CampaignName: string;
    }

    export class UserNameAutofillModel {
        constructor() { }
        userid: string;
        ManagerEmployeeCode: string;
        ManagerName: string;
    }

    export class ModelDDwpModel {
        constructor() { }
        ModelID: string;
        ModelNo: string;
    }

    export class LeadStatusModel {
        constructor() { }
        Allocated: string;
        Deferred: string;
        Delayed: string;
        Inprocess: string;
        ActivityCreated: string;
        ActivityCompleted: string;
        Converted: string;
    }
 }
