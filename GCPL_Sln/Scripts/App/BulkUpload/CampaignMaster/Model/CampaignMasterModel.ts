namespace GCPL.Model {
    export class InsertCampaignMaster {
        constructor() {
        }
        CampaignID: number;
        CampaignName: string;
        Description: string;
        SAPID: string;
        LeadSourceID: string;
        StartDate: string;
        EndDate: string;
        Status: string;
        TargetedLeads: string;
        EstimatedCost: string;
       
    }
    
    export class CamlistModel {
        constructor() {

        }      
        CampaignID: string;
        CampaignName: string;
        Description: string;
        SAPID: string;
        LeadSourceID: string;
        StartDate: string;
        EndDate: string;
        Status: string;
        LeadSource: string;
        WhenEntered: string;
        TargetedLeads: string;
        EstimatedCost: string;
    }
    
    export class CampaignSearchModel {
        constructor() {
        }
        SearchText: string;     
        LeadSourceID: string;
        StatusID: string;
    }
    export class EditCamlistModel {
        constructor() {

        }
        CampaignID: string;
        CampaignName: string;
        Description: string;
        SAPID: string;
        LeadSourceID: string;
        StartDate: string;
        EndDate: string;
        Status: string;
        TargetedLeads: string;
        EstimatedCost: string;
    }
}