namespace GCPL.Model {

    //search
    export class LeadChangeListModel {
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

    export class LeadChangeSearchModel {

        constructor() {

        }

        LeadID: string;
        CustomerName: string;
        //User: string
    }
}