namespace GCPL.Model {

    export class LeadCountModel {
        constructor()
        { }
        Allocated: string;
        Deferred: string;
        Delayed: string;
        Inprocess: string;
        ActivityCreated: string;
        ActivityCompleted: string;
        Converted: string;
    }

    export class OpportunityCountModel {
        constructor()
        { }
        Identification: string;
        Qualification: string;
        Development: string;
        Proposal: string;
        Won: string;
        Lost: string;
        NoDeal: string;
    }
}