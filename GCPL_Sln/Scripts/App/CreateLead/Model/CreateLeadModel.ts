namespace GCPL.Model {
    export class CreateLeadListModel {
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
    }
    export class CreateLeadSearchModel {

        constructor() {
        }
        SearchInput: string;
        StatusID: string;
        UserID: string;
       
    }
    export class LeadStatusddlModel {
        constructor() {

        }
        LeadStatusID: number;
        Status: string;
    }
    export class CustomerViewModel {
        constructor() {
        }
        CompanyName: string;
        CustomerID: string;
        BusinessPartnerNo: string;
        SalesOfficeID: string;
        SalesOffice: string;
        Email: string;
        MobileNo: string;
        Address1: string;
        Address2: string;
        Pincode: string;
        PhoneNo: string;
        Fax: string;
        DistrictID: string;
        StateID: string;
        CountryID: string;
        City: string;

        ContactID: string;
        ContactName: string;
        SAPID: string;
        PostalCode: string;
        ConEmail: string;
         ConMobileNo: string;
        Address: string;
         ConPhoneNo: string;
         ConDistrictID: string;
         ConStateID: string;
         ConCountryID: string;
         ConCity: string;
        Designation: string;
        Department: string;
        DepartmentID: string;
        FOPID: string;
        FOP: string;

        ModelNo: string;
        Quantity: string;
        Title: string;
        Comments: string;
        LeadCategory: string;
        LeadCategoryID: string;
        LeadID: string;
        CampaignName: string;
        CreatedBy: string;
        CreateComment: string;
        SourceID: string;
        WhenCreated: string;
        ValidatedBy: string;
        ValidComment: string;
        WhenValidated: string;
        Allocated: string;
        WhenAllocated: string;
        AssessmentComment: string;
        AssessmentDate: string;
        Status: string;
        IsLess: string;
        IsMeet: string;
        LeadSource: string;
        ReturnComment: string
        ReturnUserID: string;
        ReturnUserName: string;
        DateReturn: string;
        ProjectName: string;
    }

    //export class SearchModel {

    //    constructor() {
    //    }
    //    ContactID: string;
    //    CustomerID: string;
    //    LeadID: string;

    //}

    //export class ContactViewModel {
    //    constructor() {
    //    }
    //    ContactID: string;
    //    ContactName: string;
    //    SAPID: string;
    //    PostalCode: string;
    //    Email: string;
    //    MobileNo: string;
    //    Address: string;
    //    PhoneNo: string;
    //    DistrictID: string;
    //    StateID: string;
    //    CountryID: string;
    //    City: string;
    //    Designation: string;
    //    Department: string;
    //    DepartmentID: string;
    //    FOPID: string;
    //    FOP: string;
    //}

}