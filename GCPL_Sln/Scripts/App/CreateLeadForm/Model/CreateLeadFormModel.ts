namespace GCPL.Model {
    export class LeadSourceDetailsModel {
        constructor() {
        }
        LeadSourceID: number;
        LeadSource: string;
    }
    export class LeadCatergoryWPModel {
        constructor() {
        }
        LeadCategoryID: number;
        LeadCategory: string;
    }
    export class ContactInfoModel {
        constructor() {
        }
        ContactID: number;
        ContactName: string;
    }
    export class InsertSubmitModel {
        constructor() {

        }
        ContactName: string;
        MobileNo: string;
        ConEmail: string;
        ConPhoneNo: string;
        DesignationID: string;
        DepartmentID: string;
        FOPID: string;
        ConAddress: string;
        ConCountryID: string;
        ConStateID: string;
        ConDistrictID: string;
        ConCity: string;
        ConPinCode: string;
        CategoryID: string;
        DivisionID: string;
        ProductID: string;
        ModelID: string;
        Quantity: string;
        Plantopurchase: string;
        LeadCategory: string;
        SalesArea: string;
        ExpectedEndDate: string;
        ChannelID: string;
        LeadSourceID: string
        Specify: string;
        CampaignID: string;
        UserID: string;
        IndustryDivision: string;
        Comments: string;
        CustMobNo: string;
        CustPhoneNo: string;
        CustSalesOfficeID: string;
        CustEmail: string;
        Fax: string;
        CustAddress1: string;
        CustAddress2: string;
        CustCountry: string;
        CustState: string;
        CustDistrict: string;
        CustRegion: string;
        CustCity: string;
        CustPinCode: string;
        IndustrySeg: string;
        CustomerName: string;
        CustomerID: string;
        BusinessPartnerNo: string;
        SAPID: string;
        EmployeeCode: string;
        ContactID: string;
        StateSAPID: string;
        LeadID: string;
        ModelSAPID: string;
        DivisionSAPID: string;
        LeadType: string;
        Description: string;
        ProjectID: string;

    }
    export class ReferredEmpModel {

        constructor() {
        }
        UserID: number;
    }
    
    export class CampaignDetailsModel {
        constructor() {
        }
        CampaignID: number;
        CampaignName: string;
    }
    export class InsertLeadModel {
        constructor() {
        }

        RefUserID: string;
        CustomerID: string;
        SalesOfficeID: string;
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
        ContactCity: string;
        ContactPincode: string;
        Designation: string;
        DepartmentID: string;
        FOPID: string;
        ModelID: string;
        PurchaseTimelineID: string;
        Comments: string;
        UserID: string;
        PhoneNo: string;
        Fax: string;
        ContactPhoneNo: string;
        LeadCategoryID: string;
        BusinessPartnerNo: string;
        CampaignID: string;
        LeadSourceID: string;
        Quantity: string;
        SubsourceID: string;
        Subsource2ID: string;
        LeadType: string;
        RefUserName: string;
        ChannelID: string;
        LeadID: number;
        IsNational: string;
        CountryID: string;
        StateID: string;
        Area: string;
        CategoryID: string;
        DivisionID: string;
        ProductID: string;
        ProjectID: string;
    }

    export class AddToCartModel {
        constructor() {
        }
        SalesOfficeID: string;
        LeadType: string;
        IndustryDivisionID: string;
        IndustrialSegmentID: string;
        PurchaseTimelineID: string;
        Quantity: string;
        CategoryID: string;
        DivisionID: string;
        ProductID: string;
        ModelID: string;
        ChannelID: string;
        LeadSourceID: string;
    }


    export class PurchaseTimelineModel {
        constructor() {

        }
        PurchaseTimelineID: number;
        Title: string;
    }

    export class LeadCustomerListModel {
        constructor() {
        }
        CompanyName: string;
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
        CustomerID: string;
        CustomerRatingID: string;
    }

    export class LeadContactListModel {
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
    }

    export class ContactDetailsModel {
        constructor() {
        }
        ContactID: string;
        ContactName: string;
        ContactEmail: string;
        ContactMobileNo: string;
        ContactAddress: string;
        ContactDistrictID: string;
        ContactCity: string;
        ContactPincode: string;
        Designation: string;
        DepartmentID: string;
        FOPID: string;
        ContactPhoneNo: string;
        ContactStateID: string;
        ContactCountryID: string;

    }

    export class GetCustomerModel {
        constructor()
        {

        }
        CustomerID: string;
        CompanyName: string;
        Email: string;
        MobileNo: string;
        
    }

    export class CustomerHeader {
        constructor() {
        }
        Email: string;
        MobileNo: string;
    }

    export class GetCustomerNewModel {
        constructor() {

        }
        CompanyName: string;
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
        CustomerID: string;
        Comments: string;
        IsNational: string;
        Area: string;  

    }
    export class LeadDetailsListModel {
        constructor() {
        }
      
        Email: string;
        MobileNo: string;
        CompanyName: string;
        LeadID: string;
        ModelNo: string;
        Status: string;
        AllocatedTO: string;
        LeadCreationDate: string;
        CustomerID: string;
      


    }
}
