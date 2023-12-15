namespace GCPL.Model {


    export class ProjectGridListModel {
        constructor() {
        }
        ProjectID: string;
        ProjectName: string;
        ProjectNo: string;
        ProjectType: string;
        ProjectStage: string;
        Cost: string;
        ProjectOwnership: string;
        ProjectStartDate: string;
        CompletionDate: string;
        ProjectSource: string;
        Comments: string;
        ProjectIndustry: string;
        ID: string;
        //ZoneName: string;
        //ProjectAssign: string;
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

    export class ProjectLeadCustomerListModel {
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

    export class ProjNameAutofill {
        ProjectID: string;
        ProjectName: string;
    }


    export class ProjNoAutofill {
        ID: string;
        ProjectNo: string;
    }
}
