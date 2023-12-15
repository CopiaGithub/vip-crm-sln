namespace GCPL.Model {
    export class CatlistModel {
        constructor() {

        }
        CategoryID: string;
        Category: string;
        Description: string;
        IsActive: string;



    }
    export class CategorySearchModel {

        constructor() {

        }

        SearchText: string;
        Status: string;
    }
    export class InsertCategoryModel {

        constructor() {

        }
        CategoryID: string;
        Category: string;
        Description: string;
        Status: string;
    }
    export class EditCatlistModel {
        constructor() {

        }
        CategoryID: string;
        Category: string;
        Description: string;
        Status: string;



    }
}