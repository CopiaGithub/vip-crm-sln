namespace GCPL.Model {
    export class InsertRegistrationContactModel {

        constructor() {

        }
        AppCustomerID: number;
        AppContactID: number;
        CompanyName: string;
        Email: string;
        Designation: string;
        MobileNo: string;
        Address1: string;
        Address2: string;
        DistrictID: string;
        City: string;

        PinCode: string;
        ContactEmail: string;
        ContactMobileNo: string;
        Address: string;
        ContactDistrictID: string;
        ContactCity: string;
        PostalCode: string;
        Language: string;
        DepartmentID: string;
        FOPID: string;

        PhoneNo: string;
        Fax: string;
        ContactID: string;
        CustomerID: string;
        ContactPhoneNo: string;
        ContactName: string;
        PasswordResetCode: string;
        Password: string;
        IsActive: string;

    }

    export class ContactInfo1Model {
        constructor() {
        }
        ContactID: number;
        ContactName: string;
    }

    export class ExistingCustomerDetailsListModel {
        constructor() {
        }

        CustomerID: string;
        CustomerName: string;
        Email: string;
        MobileNo: string;
        PhoneNo: string;
        Fax: string;
        Address1: string;
        Address2: string;
        CountryID: string;
        StateID: string;
        DistrictID: string;
        City: string;
        PinCode: string;
       
    }

    export class ExistingContactDetailsListModel {
        constructor() {
        }
        ContactName: string;
        ContactEmail: string;
        ContactMobileNo: string;
        ContactPhoneNo: string;
        Designation: string;
        DepartmentID: string;
        FOPID: string;
        Address: string;
        ContactCountryID: string;
        ContactStateID: string;
        ContactDistrictID: string;
        ContactCity: string;
        PostalCode: string;
        CustomerID: string;
        ContactID: string;
        IsActive: string;
    }

    export class EditRegistrationContactModel {
        constructor() {

        }

        AppContactID: string;
        AppCustomerID: string;
        CompanyName: string;
        MobileNo: string;
        PhoneNo: string;
        Email: string;
        Fax: string;
        Address1: string;
        Address2: string;
        CountryID: string;
        StateID: string;
        DistrictID: string;
        City: string;
        PinCode: string;

        ContactEmail: string;
        ContactMobileNo: string;
        Designation: string;
        DepartmentID: string;
        FOPID: string;
        FOP: string;
        Address: string;
        ContactCountryID: string;
        ContactStateID: string;
        ContactDistrictID: string;
        ContactCity: string;
        PostalCode: string;
                         
        ContactPhoneNo: string;
        ContactID: string;
        ContactName: string;
        CustomerID: string;
        PasswordResetCode: string;
        Password: string;
        IsActive: string;
        
    }

    export class stateDDModel {
        constructor() {

        }
        StateID: number;
        State: string;
    }

}