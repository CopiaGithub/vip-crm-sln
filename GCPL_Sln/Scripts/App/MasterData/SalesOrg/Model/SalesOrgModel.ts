namespace GCPL.Model {
    export class SalesorgListModel {
        constructor() {

        }
        SalesOrgID: string;
        SalesOrg: string;
        SAPID: string;
        WhenEntered: string;
        IsActive: string;

    }

    export class SalesorgSearchModel {

        constructor() {

        }

        SearchText: string;
        Status: string;
    }


    export class InsertSalesOrgModel {

        constructor() {

        }
        SalesOrgID: string;
        SalesOrg: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;
    }

    export class EditSalesOrgModel {
        constructor() {

        }
        SalesOrgID: string;
        SalesOrg: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;



    }
}