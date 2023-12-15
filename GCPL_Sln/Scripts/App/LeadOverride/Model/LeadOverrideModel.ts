namespace GCPL.Model {

    //search
    export class LeadOverrideListModel {
        constructor() {

        }
        LeadID: string;
        CompanyName: string;
        Product: string;
        ModelNo: string;
        Quantity: string;
        Title: string;
        FirstName: string;
        Status: string;
        SourceID: string;
        WhenEntered: string;
        LeadSource: string
    }

    export class LeadOverrideSearchModel {

        constructor() {

        }

        LeadID: string;
        CustomerName: string;
        User: string
    }
}