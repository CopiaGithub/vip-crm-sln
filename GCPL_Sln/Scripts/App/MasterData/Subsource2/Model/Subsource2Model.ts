namespace GCPL.Model {
    //subsource
    export class SubSourceDDwpModel {
        constructor() { }
        SubsourceID: number;
        Subsource: string;
    }


    //search
    export class SubSource2ListModel {
        constructor() {

        }
        Subsource2ID: string;
        LeadSourceID: string;
        LeadSource: string;
        SubsourceID: string;
              
        Subsource: string;
        Subsource2: string;
        Description: string;
        IsActive: string;

    }

    export class SubSource2SearchModel {

        constructor() {

        }

        Subsource2: string;
    }
    export class InsertSubsource2Model {

        constructor() {

        }

        Subsource2ID: string;
        SubsourceID: string;
        LeadSourceID: string;
        Subsource2: string;
       
        Description: string;
        Operation: string;
        Status: string;

    }

    export class EditSubsource2Model {
        constructor() {

        }
        Subsource2ID: string;
        SubsourceID: string;
        LeadSourceID: string;
        LeadSource: string;
        Subsource: string;
        Description: string;
        Subsource2: string;
        Operation: string;
        Status: string;

    }
}