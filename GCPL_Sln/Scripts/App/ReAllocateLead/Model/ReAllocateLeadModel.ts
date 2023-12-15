namespace GCPL.Model {
    export class ReallocateListModel {
        constructor() {
        }
        LeadType: string;
        Companyname: string;
        BusinessPartnerNo: string;
        WhenEntered: string;
        Product: string;
        ModelNo: string;
        Title: string;
        Status: string;
        FirstName: string;
        FullName: string;
        MobileNo: string;
        LeadID: string;
        CustomerID: string;
        ContactID: string;
    }

    export class ReallocateLeadSearchModel {
        constructor() {
        }     
        LeadID: string;
        SearchInput: string;
      
    }
    export class InsertReallocateLeadModel {
        constructor() {
        }
        LeadID: string;
        UserID: string;        
    }
    export class GetEmpCodeModel {
        constructor() {
        }
        EmployeeCode: string;
       
    }
}