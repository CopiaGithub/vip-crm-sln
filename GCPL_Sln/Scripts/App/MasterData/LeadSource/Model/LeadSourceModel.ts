namespace GCPL.Model {

    //channel Dropdown
    export class ChannelDDModel {
        constructor() { }
        ID: string;
        Channel: string;
    }
    //search
    export class LeadSourceListModel {
        constructor() {

        }
        LeadSourceID: string;
        LeadSource: string;
        ChannelName: string;
        Description: string;
        WhenEntered: string;
        IsActive: string;
      
    }

    export class LeadSourceSearchModel {

        constructor() {

        }

        SearchText: string;
        Status: string;
        Channel: string;
    }

    export class InsertLeadSourceModel {

        constructor() {

        }
        LeadSourceID: string;
        LeadSource: string;
        ID: string;
        Description: string;
        Mode: string;
        Status: string;
       
    }

    export class EditLeadSourceModel {
        constructor() {

        }
        LeadSourceID: string;
        LeadSource: string;
        ID: string;
        Description: string;
        Status: string;

    }
}