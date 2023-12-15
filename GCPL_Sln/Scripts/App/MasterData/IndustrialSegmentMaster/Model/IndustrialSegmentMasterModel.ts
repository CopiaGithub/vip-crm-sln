namespace GCPL.Model {
    export class IndustrialListModel {
        constructor() {
        }
        IndustrialSegmentID: string;
        IndustrialSegment: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;
    }
    export class IndustrialSearchModel {
        constructor() {
        }
        SearchText: string;
        Status: string;
    }
    export class InsertIndustrialModel {
        constructor() {
        }
        IndustrialSegmentID: number;
        IndustrialSegment: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;
    }
    export class EditIndustriallistModel {
        constructor() {
        }
        IndustrialSegmentID: string;
        IndustrialSegment: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;
    }
}