namespace GCPL.Model {

    export class EmailLeadListModel {
        constructor() {
        }

        ID: string;
        ModelNo: string;
        ZoneName: string;
        EmailTO: string;
        EmailCC: string;
        Status: string;
    }
    export class InsertEmailLeadModel {
        constructor() {
        }
        ID: number;
        ModelID: string;
        ZoneID: string;
        Mode: string;
        EmailTO: string;
        EmailCC: string;
        Status: string;

    }
    export class EditEmailLeadListModel {
        constructor() {
        }

        ID: string;
        ModelNo: string;
        ZoneName: string;
        EmailTO: string;
        EmailCC: string;
        Status: string;
        ModelID: string;
        ZoneID: string;
    }

}