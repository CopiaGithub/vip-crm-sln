namespace GCPL.Model {
    export class QuotationReportModel {
        constructor() {

        }
        OpportunityNo: string;
        ModelID: string;
        CreationDate: string;
        CustomerName: string;
        OppStatus: string;
        OppStage: string;
        ModelNo: string;
        UserID: string;
        CreatedBy: string;
        QuotationRefernce: string;
        QuotationDate: string;
        CustomerID: string;

    }

    export class SearchQuoteModel {
        constructor() {
        }
        CustomerID: string;
        ModelID: string;
        CreatedBy: string;
      
    }
    export class ModelAutofill {
        ModelID: number;
        ModelNo: string;
        
    }
}