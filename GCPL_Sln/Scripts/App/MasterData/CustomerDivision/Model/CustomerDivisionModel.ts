namespace GCPL.Model {
    export class CustomerDivisionListModel {
        constructor() {

        }
        CustomerDivisionID: string;
        CustomerDivision: string;
        SAPID: string;
        WhenEntered: string;
        IsActive: string;

    }

    export class CustomerDivisionSearchModel {

        constructor() {

        }

        SearchText: string;
        Status: string;
    }
    export class InsertCustomerDivisionModel {

        constructor() {

        }
        CustomerDivisionID: string;
        CustomerDivision: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;
    }

    export class EditCustomerDivisionModel {
        constructor() {

        }
        CustomerDivisionID: string;
        CustomerDivision: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;



    }
}