namespace GCPL.Model {
        export class InsertCustomerMaster {
            constructor() {
            }
            CustomerID: string;
            SearchText: string;
            CompanyName: string;
            MobileNo: string;
            Email: string;
            Address1: string;
            Address2: string;
            DistrictID: string;
            IndustryDivisionID: string;
            CreatedBy: string;
            PinCode: string;
            AccountTypeID: string;
            IndustrialSegmentID: string;
            SalesAreaID: string;
            PhoneNo: string;
            Fax: string;
            SalesOfficeID: string;
            BusinessPartnerNO: string;
            Status: string;
            RetCustomerID: string;
            IsNational: string;
            CustomerRatingID: string;
            StateID: string;
            City: string;
            UpdatedBy: string;
            CountryID: string;
            CustomerSizeID: string;
            SiteAddress: string;
            Area: string;
            Comments: string;
            DivisionID: string;
            DesignationID: number;
            ContactName: string;
            ConPhoneNo: string;
            ConMobileNo: string;
            ConFax: string;
            ConEmail: string;
            ContactID: string; 
            BillingAddress: string; 
            IndustryCodeID: string; 
            ParentCustomerID: string;
            ParentCustomerName: string;
            UserID: string;
            RoleID: string;
            DepartmentID: number;
            ConStateID: string;
            ConDistrictID: string;
            ConCity: string;
            ConCountryID: string;
            ConAddress: string;
            ConPincode: string;

           
        }
        export class CountryddlModel {
            constructor() {

            }
            CountryID: number;
            Country: string;
        }
        export class StateddlModel {
            constructor() {
            }
            StateID: number;
            State: string;
        }
        export class DistrictddlModel {
            constructor() {
            }
            DistrictID: number;
            District: string;
        }
        export class IndustryDivisionddlModel {
            constructor() {

            }
            IndustryDivisionID: number;
            IndustryDivision: string;
        }
        export class SalesAreaddlModel {
            constructor() {

            }
            SalesAreaID: number;
            SalesArea: string;
        }
        export class AccountTypeddlModel {
            constructor() {

            }
            AccountTypeID: number;
            AccountType: string;
        }
        export class IndustrialSegmentddlModel {
            constructor() {

            }
            IndustrialSegmentID: number;
            IndustrialSegment: string;
        }
        export class SalesOfficeddlModel {
            constructor() {

            }
            SalesOfficeID: number;
            SalesOffice: string;
        }
        export class EditCustomerModel {
            constructor() {
            }
            CustomerID: string;
            SearchText: string;
            CompanyName: string;
            MobileNo: string;
            Email: string;
            Address1: string;
            Address2: string;
            CustomerStatusID: string;
            CustomerStatus: string;
            DistrictID: string;
            District: string;
            IndustryDivisionID: string;
            IndustryDivision: string;
            CreatedBy: string;
            PinCode: string;
            AccountTypeID: string;
            AccountType: string;
            IndustrialSegmentID: string;
            IndustrialSegment: string;
            SalesAreaID: string;
            SalesArea: string;
            PhoneNo: string;
            Fax: string;
            SalesOfficeID: string;
            SalesOffice: string;
            BusinessPartnerNO: string;
            Status: string;
            IsNational: string;
            CustomerRatingID: string;
            CustomerRating: string;
            StateID: string;
            State: string;
            City: string;
            UpdatedBy: string;
            CountryID: string;
            Country: string;
            ParentCustomerID: string;
            ParentCustomerName: string;
            Customersize: string;
            SiteAddress: string;
            Area: string;
            Comments: string;
            DivisionID: string;
            Division: string;
            DesignationID: string;
            Designation: string;
            ContactName: string;
            ConPhoneNo: string;
            ConMobileNo: string;
            ConFax: string;
            ConEmail: string;
            DepartmentID: string;
            ContactID: string; 
            ConStateID: string; 
            ConDistrictID: string; 
            ConCity: string; 
            ConAddress: string;
            ConPincode: string;
        }
        export class CheckMobileModel {
            constructor() {
            }
            Count: number;
            //MobileNo: string;
        }
        export class DivisionModel {
            constructor() {
            }
            DivisionID: number;
            Division: string;
    }
    export class UserIDModel {
        constructor() {
        }
        UserID: string;
        }
    export class LeadStatusIDModel {
        constructor() {
        }
        LeadStatusID: string;
    }

    
    export class RoleIDModel {
        constructor() {
        }
        RoleID: string;
    }

    export class IndustryCodeddlModel {
        constructor() {

        }
        IndustryCodeID: number;
        IndustryCodeName: string;
    }

    export class CustomerSizeddlModel {
        constructor() {

        }
        CustomerSizeID: number;
        CustomerSize: string;
    }

    //export class SAPAutoModel {
    //    constructor() {
    //    }
       
    //    SAPID: string;
    //    ParentCustID: number;
    //}

    //export class GetSapIdModel {
    //    constructor() {
    //    }
    //    BusinessPartnerNo: string;
    //}

    export class CustomerStatusModel {
        constructor()
        { }
        CustomerStatusID: string;
        Status: string;
    }

    export class CustomerClassModel {
        constructor()
        { }
        ID: string;
        Description: string;
    }
}
