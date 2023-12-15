namespace GCPL.Model {
    export class LeadCategoryListModel {
        constructor() {

        }
        LeadCategoryID: string;
        LeadCategory: string;
        Description: string;
        WhenEntered: string;
        IsActive: string;

    }

    export class LeadCategorySearchModel {

        constructor() {

        }

        SearchText: string;
        Status: string;
    }

    //insert
    export class InsertLeadCategoryModel {

        constructor() {

        }
        LeadCategoryID: string;
        LeadCategory: string;
        Description: string;
        Mode: string;
        Status: string;
      
    }

    export class EditLeadCategoryModel {
        constructor() {

        }
        LeadCategoryID: string;
        LeadCategory: string;
        Description: string;
        WhenEntered: string;
        Status: string;

    }
}