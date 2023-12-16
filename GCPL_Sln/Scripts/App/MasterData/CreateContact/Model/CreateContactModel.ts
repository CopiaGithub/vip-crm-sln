namespace GCPL.Model {
    export class DesignationddlModel {
        constructor() {

        }
        FOPID: number;
        FOP: string;
    }
    export class InsertContactMaster {
        constructor() {
        }
        ContactID: number;
        CustomerID: number;
        ContactName: string;
        CompanyName: string;
        MobileNo: string;
        Email: string;
        Address: string;
        PostalCode: string;
        City: string;
        DistrictID: string;
        Language: string;
        Status: string;
        Designation: string;
        FOPID: string;
        DepartmentID: string;
        PhoneNo: string;
        RetContactID: number;
        SAPID: string;
        StateID: string;
        CountryID: string;
        AssistantName: string;
        AssistantPhone: string;
        HomePhone: string;
        BirthDate: string;
        MaritalStatus: string;
        Spouse: string;
        AnniversaryDate: string;
        SpouseBirthDate: string;
        Children: string;
        SmokingPreference: string;
        DrinkingPreference: string;
        MealPreference: string;
        Comments: string;
        UserID: string;
        CustomerSAPID: string;
    }
    export class DepartmentddlModel {
        constructor() {

        }
        DepartmentID: number;
        Department: string;
    }
    export class CustomerAutoModel {
        constructor() {
        }
        CustomerID: number;
        CompanyName: string;
    }
    export class ProductAutoModel {
        constructor() {
        }
        ProductID: number;
        Product: string;
        ProductDesc: string;
    }
    export class ProductModel {
        constructor() {
        }
        ProductID: number;
        Product: string;
    }
    export class CustomersapAutoModel {
        constructor() {
        }
        CustomerID: number;
        CustomerName: string;
    }
    export class CustomerSAPIDModel {
        constructor() {
        }
        CustomerSAPID: string;
    }

    export class EditContactModel {
        constructor() {
        }
        ContactID: string;
        SAPID: string;
        CustomerID: string;
        ContactName: string;
        CompanyName: string;
        MobileNo: string;
        PhoneNo: string;
        Email: string;
        Address: string;
        PostalCode: string;
        Status: string;
        DistrictID: string;
        District: string;
        City: string;
        FOPID: string;
        FOP: string;
        DepartmentID: string;
        Department: string;
        StateID: string;
        State: string;
        CountryID: string;
        Country: string;
        AssistantName: string;
        AssistantPhone: string;
        HomePhone: string;
        BirthDate: string;
        MaritalStatus: string;
        Spouse: string;
        AnniversaryDate: string;
        SpouseBirthDate: string;
        Children: string;
        SmokingPreference: string;
        DrinkingPreference: string;
        MealPreference: string;
        Comments: string;
        Language: string;
        CustomerSAPID: string;
    }

    export class PrimaryContactModel {
        constructor() {
        }
        CustomerID: string;
        ContactPerson: string; 
        Designation: string;
        PhoneNo: string;
        MobileNo: string;
        Email: string;
        Department: string;
    }
}