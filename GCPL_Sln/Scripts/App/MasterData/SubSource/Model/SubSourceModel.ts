namespace GCPL.Model {
    //Distribution channel dropdown
    export class LeadSourceDDModel {
        constructor() { }
        LeadSourceID: number;
        LeadSource: string;
    }

    //search
    export class SubSourceListModel {
        constructor() {

        }
        SubsourceID: string;
        LeadSource: string;
        LeadsourceId: string;
        Subsource: string;
        Description: string;
        IsActive: string;

    }

    export class SubSourceSearchModel {

        constructor() {

        }

        Subsource: string;
        LeadSource: string;
        Status: string;
    }

    export class InsertSubSourceModel {

        constructor() {

        }
        SubsourceID: string;
        LeadSourceID: string;
        Subsource: string;
        Description: string;
        Operation: string;
        Status: string;
                
    }

    export class EditSubSourceModel {
        constructor() {

        }
        SubsourceID: string;
        LeadSourceID: string;
        Subsource: string;
        Description: string;
        //Operation: string;
        Status: string;




    }

}