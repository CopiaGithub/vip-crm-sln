namespace GCPL.Model {
    export class ProjectDataInfoModel {
        constructor() {
        }
        ProjectID: string;
        ProjectName: string;
        ProjectNo: string;
        ProjectTypeID: string;
        ProjectType: string;
        ProjectStageID: string;
        ProjectStage: string;
        Cost: string;
        ProjectOwnershipID: string;
        ProjectOwnership: string;
        ProjectStartDate: string;
        CompletionDate: string;
        ProjectSourceID: string;
        ProjectSource: string;
        Comments: string;
        ProjectIndustryID: string;
        ProjectIndustry: string;
        CustProjectType: string;
        ProjectOwner: string;
        ProjectManager: string;
        ProjectAssign: string;
        ProjectManagerID: string;
        ProjectAssignID: string;
        ID: string;
        ZoneID: string;
    }
    export class ProjectHeadermodel {
        constructor() {
        }
        ProjectID: string;
        ProjectName: string;
        ID: string;
        ProjectType: string;
        ProjectStage: string;
        ProjectStartDate: string;
        CompletionDate: string;
        ProjectSource: string;
        ProjectIndustry: string;

    }

    export class GetProjectCustomerModel {
        constructor() {

        }
        CustomerID: string;
        CompanyName: string;
        Email: string;
        MobileNo: string;

    }

    export class ProjCustomerListModel {
        constructor() {
        }
        CustomerID: string;
        CompanyName: string;
        IsNational: string;
        BusinessPartnerNo: string;
        MobileNo: string;
        Email: string;
        District: string;
        SalesOffice: string;
        SalesArea: string;
        Status: string;
        PinCode: string;
        DistrictID: string;
        CustAddress: string;
    }

    export class InsertProjectDataDetailsModel {
        constructor() {
        }
        ProjectID: string
        ProjectName: string
        ProjectNo: string
        ProjectTypeID: string
        ProjectType: string
        ProjectStageID: string
        ProjectStage: string
        Cost: string
        ProjectOwnershipID: string
        ProjectOwnership: string
        ProjectStartDate: string
        CompletionDate: string
        ProjectSourceID: string
        ProjectSource: string
        Comments: string
        ProjectIndustryID: string
        ProjectIndustry: string

    }

    export class ProjectCreateLeadListModel {
        constructor() {
        }
        CompanyName: string;
        WhenEntered: string;
        Product: string;
        ModelNo: string;
        Title: string;
        Status: string;
        FirstName: string;
        MobileNo: string;
        LeadID: string;
        CustomerID: string;
        ContactID: string;
        LeadSource: string;
        Quantity: string;
        Channel: string;
        RefEmp: string;
        CampaignName: string;
        ProjectNo: string;
        ProjectName: string;
        Allocated: string;
        ProjectType: string;
    }
    export class ProjectContactCustomerModel {
        constructor() {
        }

        ContactID: string;
        SAPID: string;
        ContactName: string;
        CustomerID: string;
        BusinessPartnerNo: string;
        MobileNo: string;
        PhoneNo: string;
        Address: string;
        Email: string;
        Department: string;
        ProjectType: string;
    }

    export class ProjectCustomerModel {
        constructor() {
        }

        ProjectID: string;
        CustomerID: string;
        BusinessPartnerNo: string;
        CompanyName: string;
        MobileNo: string;
        Address1: string;
        Address2: string;
        State: string;
        District: string;
        City: string;
        ProjectType: string;
        ContactID: string;
    }

    export class ProjectContactDetailsListModel {
        constructor() {
        }
        ContactName: string;
        Email: string;
        MobileNo: string;
        PhoneNo: string;
        Designation: string;
        Department: string;
        FOP: string;
        Address: string;
        Country: string;
        State: string;
        District: string;
        City: string;
        PostalCode: string;
        CustomerID: string;
        ContactID: string;
        BusinessPartnerNo: string;
        CustomerSAPID: string;
    }

    export class ProjectActSearchModel {

        constructor() {

        }
        ProjectID: string;
        ProjectStartDate: string;
    }

  

    export class ProjectActlistModel {
        constructor() {
        }
        ActivityID: string;
        CustomerID: string;
        CompanyName: string;
        CustomerSAPID: string;
        ContactID: string;
        ContactName: string;
        ContactSAPID: string;
        Note: string;
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
        ProjectID: string;
        ProjectStartDate: string;
        CompletionDate: string;
        SalesRep: string;
    }

}