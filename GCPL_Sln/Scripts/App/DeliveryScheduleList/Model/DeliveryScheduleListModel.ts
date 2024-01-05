namespace GCPL.Model {
    export class DeliveryScheduleListModel {
        constructor() {

        }
        ID: string;
        LeadID: string;
        ItemID: string;
        DSNO: string;
        CustomerName: string;
        UserID: string;
        ItemQty: string;
        DeliveryDate: string; 
        DeliveryQty: string;
        ProductID: string;
        ProductCode: string;
        ProductDesc: string;
    }

    export class DSSearchModel {

        constructor() {

        }
        FromDate: string;
        ToDate: string;
        DsID: string;
        LeadID: string;
        ProductID: string;
        CustomerID: string;
    }
}