namespace GCPL.Model {
    export class ContactListModel {
        constructor() {
        }
        ContactID: string;      
        SAPID: string;  
        ContactName: string;  
        MobileNo: string;  
        PhoneNo: string;  
        Email: string;  
        Status: string;  
        CompanyName: string;  
        FOP: string;  
        Department: string;  
        CustSAPID: string;

    }
    export class ContactSearchModel {

        constructor() {
        }
        SearchText: string;
        SearchCompanyName: string;
        SearchPhoneNo: string;
        Status: string;
        ContactSAPID: string;
        CustSAPID: string;
    }

}