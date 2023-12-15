namespace GCPL.Model {

    export class LeadSummaryListModel {
        constructor() {
        }
        ID: string;
        ModelNo: string;
        ZoneName: string;
        EmailTO: string;
        EmailCC: string;
        Status: string;

    }
    export class InsertLeadSummModel {
        constructor() {
        }
        ID: number;
        ModelID: string;
        ZoneID: string;
        EmailTO: string;
        EmailCC: string;
        Status: string;

    }
    export class EditLeadSummlistModel {
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
    export class ModeldModel {
        constructor() {

        }
        ModelID: number;
        ModelNo: string;
    }
}