namespace GCPL.Model {
    export class IndustryDivlistModel {
        constructor() {
        }       
        IndustryDivisionID: string;
        IndustryDivision: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;
    }
    export class IndustrySearchModel {
        constructor() {
        }
        SearchText: string;
        Status: string;
    }
    export class InsertIndustryModel {

        constructor() {

        }
        IndustryDivisionID: number;
        IndustryDivision: string;
        SAPID: string;
        Status: string;
    }
    export class EditIndustrylistModel {
        constructor() {

        }
        IndustryDivisionID: string;
        IndustryDivision: string;
        SAPID: string;
        Status: string;
        WhenEntered: string;


    }
}