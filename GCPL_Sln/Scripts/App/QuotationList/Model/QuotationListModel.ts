namespace GCPL.Model {
    export class QuotationlistdetailsModel {
        constructor() {

        }
        OpportunityID: string;
        OpportunitySAPNo: string;
        OpportunityDate: string;
        CustomerID: string;
        CustomerName: string;
        OppStatus: string;
        OppStage: string;
        ModelNo: string;
        UserID: string;
        CreatedBy: string;
        QuotationRefernce: string;
        QuotationDate: string;
       
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