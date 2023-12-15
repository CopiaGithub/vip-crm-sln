namespace GCPL.Model {
    //sales org
    export class ZoneDDModel {
        constructor() { }
        ID: number;
        ZoneName: string;
    }

    //search
    export class SalesOfficeListModel {
        constructor() {

        }
        SalesOfficeID: string;
        SalesOffice: string;
        SalesOfficeEmail: string;
        ZoneID: string;
        ZoneName: string;
        SAPID: string;
        WhenEntered: string;
        IsActive: string;
        SOAddress: string;

    }

    export class SalesOfficeSearchModel {

        constructor() {

        }

        SearchText: string;
        Status: string;
        Zone: string;
    }

    export class InsertSalesOfficeModel {

        constructor() {

        }
        SalesOfficeID: string;
        SalesOffice: string;
        SalesOfficeEmail: string;
        ZoneID: string;
        SAPID: string;
        WhenEntered: string;
        Mode: string;
        Status: string;
        SOAddress1: string;
        SOAddress2: string;
        SOAddress3: string;
        SOAddress4: string;

        }

    export class EditSalesOfficeModel {
        constructor() {

        }
        SalesOfficeID: string;
        SalesOffice: string;
        SalesOfficeEmail: string;
        ZoneID: string;
        SAPID: string;
        WhenEntered: string;
        
        Status: string;
        SOAddress1: string;
        SOAddress2: string;
        SOAddress3: string;
        SOAddress4: string;


    }
}