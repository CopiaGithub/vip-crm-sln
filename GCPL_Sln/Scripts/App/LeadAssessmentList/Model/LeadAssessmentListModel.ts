namespace GCPL.Model {
    export class AssessmentListModel {
        constructor() {
        }
        CompanyName: string;
        EmployeeCode: string;
        WhenEntered: string;
        Product: string;
        ModelNo: string;
        CustomerID: string;
        Title: string;
        StatusID: string;
        FirstName: string;
        MobileNo: string;
        LeadID: string;
        ContactID: string;
        LeadSource: string;
        AllocatedToID: string;
        AllocatedTo: string;
        OpportunityAssessmentID: string;
        Comments: string;
        IsLess: string;
        IsMeet: string;

    }
    export class AssessmentSearchModel {

        constructor() {
        }

        SearchInput: string;
        StatusID: string;
        CustomerID: string
        RoleID: string;
        LeadID: string;
    }
    
   
    
}