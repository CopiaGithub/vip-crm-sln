namespace GCPL.Model {
    export class ProductlistModel {
        constructor() {

        }
        ProductID: string;
        Product: string;
        DivisionID: string;
        Division: string;
        Description: string;
        IsActive: string;

    }
    export class DivisionddlModel {
        constructor() {

        }
        DivisionID: number;
        Division: string;



    }

    export class ProductSearchModel {

        constructor() {

        }

        SearchText: string;
        Status: string;
        Division: string;
    }
    export class InsertProductModel {

        constructor() {

        }
        ProductID: string;
        Product: string;
        DivisionID: string;
        Division: string;
        Description: string;
        Status: string;
    }
    export class EditProductModel {
        constructor() {

        }
        ProductID: string;
        Product: string;
        DivisionID: string;
        Division: string;
        Description: string;
        Status: string;

    }
}