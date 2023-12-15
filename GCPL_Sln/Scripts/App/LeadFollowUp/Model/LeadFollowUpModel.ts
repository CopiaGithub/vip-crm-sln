namespace GCPL.Model {
    export class ReportFollowupSearchModel {
        constructor() { }
        FromDate: string;
        ToDate: string;
        LeadID: string;
        BusinessPartnerNo: string;
        PhoneNo: string;
        StatusID: string;
    }
   
    export class ReportFollowupListModel {
        constructor() {
        }
        LeadID: string;
        SpokeTo: string;
        PhoneNo: string;
        Question1: string;
        Question2: string;
        Question3: string;
        Question4: string;
        Question5: string;
        Question6: string;
        Answer1: string;
        Answer2: string;
        Answer3: string;
        Answer4: string;
        Answer5: string;
        Answer6: string;
        FollowupDate: string;
        CustomerID: string;
        FollowupStatus: string;
        AnswerText: string;
        FollowupBy: string;
        BusinessPartnerNo: string;

    }
}