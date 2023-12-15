namespace GCPL.Model {
    export class ActivityOverrideListModel {
        constructor() {
        }
        CompanyName: string;
        EmployeeCode: string;
        WhenEntered: string;
        Product: string;
        ModelNo: string;
        CustomerID: string;
        ContactID: string;
        LeadID: string;
        Title: string;
        Status: string;
        FirstName: string;
        MobileNo: string;
        AllocatedTo: string;
        AllocatedToID: string;
        OpportunityAssessmentID: string;
        Comments: string;
        IsLess: string;
        IsMeet: string;
        Latitude: string;
        Longitude: string;
        LeadSource: string;
    }

    export class ActivityOverrideListDetailsModel {
        constructor() {
        }
        IsBypassed: string;
        UserID: string;
        IDs: string;
    }

    export class ActivityOverrideSearchModel {
        constructor() {
        }

        SearchText: string;
        LeadID: string;

    }
    export class InsertActivityOverrideModel {
        constructor() {
        }
        IsBypassed: string;
        UserID: string;
        //IDs: string;
        Details: Array<Model.ActivityOverrideListModel>
    }
}