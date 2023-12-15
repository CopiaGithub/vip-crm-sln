namespace GCPL.Model {

    export class RewardReportListModel {
        constructor() {
        }
        LeadID: string;
        VLELeadID: string;
        OpportunityID: string;
        ModelNo: string;
        Status: string;
        VLEID: string;
        VLEName: string;
        CustomerName: string;
        CustomerSAPID: string;
        ConversionPoints: string;
        WonPoints: string;
        LeadCreatedDate: string;
        PaidConverted: string;
        PaidWon: string;
        OppStatus: string;
    }
    export class RewardSearchModel {
        constructor() {
        }
        LeadID: string;
        SearchText: string;
        RewardStatus: string;

    }
    export class VLENameAutofill {
        VLEID: string;
        ContactName: string;
    }

}