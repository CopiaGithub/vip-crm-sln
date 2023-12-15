namespace GCPL.Model {
    //sales org
    export class SalesOrgDDmModel {
        constructor() { }
        SalesOrgID: string;
        SalesOrg: string;
    }

     //Distribution channel dropdown
    export class DistributionChannelDDModel {
        constructor() { }
        DistributionChannelID: string;
        DistributionChannel: string;
    }

    //Distribution channel dropdown
    export class CustomerDivisionDDModel {
        constructor() { }
        CustomerDivisionID: string;
        CustomerDivision: string;
    }

    //search
    export class SalesAreaListModel {
        constructor() {

        }
        SalesAreaID: string;
        SalesOrg: string;
        CustomerDivision: string;
        DistributionChannel: string;
        IsActive: string;
       
    }

    export class  SalesAreaSearchModel {

        constructor() {

        }

        //SearchText: string;
        Status: string;
    }

    export class InsertSalesAreaModel {

        constructor() {

        }
        SalesAreaID: string;
        SalesOrgID: string;
        CustomerDivisionID: string;
        DistributionChannelID: string;

        Status: string;


    }

    export class EditSalesAreaModel {
        constructor() {

        }
        SalesAreaID: string;
        SalesOrgID: string;
       
        DistributionChannelID: string;
        CustomerDivisionID: string;
        Status: string;



    }
}