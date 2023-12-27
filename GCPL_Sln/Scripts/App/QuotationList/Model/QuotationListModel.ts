namespace GCPL.Model {
    export class QuotationlistdetailsModel {
        constructor() {

        }
        ID: string;
        LeadID: string;
        CustomerName: string;
        ContactName: string;
        SPName: string;
        SPMobileNo: string;
        SPDesignation: string;
        CreatedBy: string;
        WhenCreated: string;
       
    }

    export class QuotationSearchModel {
        constructor() {
        }
        CustomerID: string;
        OppNumber: string;
        QuotationNo: string;
        //UserID: string;
    }
}