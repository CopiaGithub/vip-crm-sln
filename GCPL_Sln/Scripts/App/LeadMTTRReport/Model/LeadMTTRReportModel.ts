namespace GCPL.Model {
    export class LeadsMTTRHeaderModel {
        constructor() {
        }
        FromDate: string;
        ToDate: string;
        CustomerID: string;
        CustSAPID: string;
        LeadID: string;
        AllocatedTo: string;
        StatusID: string;
        UserID: string;
        RoleID: string;
    }

    export class LeadsMTTRGridModel {
        constructor() {
        }
        CompanyName: string;
        BusinessPartnerNo: string;
        LeadID: string;
        Status: string;
        AgeingCreationValidation: string;
        AgeingValidationAssessment: string;
        AgeingAssessmentConversion: string;
        AgeingCreationConversion: string;
        AgeingCreationClosure: string;
        OpenLeadsAgeing: string;
        UserID: string;
        AllocatedTo: string;
    }
}