namespace GCPL.Model {
    export class AllocationOverrideListModel {
        constructor() {
        }
        Companyname: string;
        BusinessPartnerNo: string;
        WhenEntered: string;
        Product: string;
        ModelNo: string;
        Title: string;
        Status: string;
        CreatedBy: string;
        FullNameCreatedBy: string;
        MobileNo: string;
        LeadID: string;
        AllocatedTo: string;
        FullNameAllocatedTo: string;
        CustomerID: string;
        ContactID: string;
    }
    export class AllocationOverrideSearchModel {
        constructor() {
        }

        SearchInput: string;
        LeadID: string;

    }
    export class InsertAllocationOverrideModel {
        constructor() {
        }
        LeadID: string;
        UserID: string;
    }
}