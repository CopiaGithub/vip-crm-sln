namespace GCPL.Model {
    //search
    export class RegistrationContactListModel {
        constructor() {

        }
        AppContactID: string;
        ContactName: string;
        ContactMobileNo: string;
        Email: string;
        Companyname: string;
        MobileNo: string;
        Address1: string;
        //DistrictID: string;
        District: string;
        Password: string;
        CustStatus: string;
        IsACtive: string;
        WhenEntered: string
    }

    export class RegistrationContactSearchModel {

        constructor() {

        }

        SearchInput: string;
        StatusID: string;
    }

  
}