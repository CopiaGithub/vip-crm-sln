namespace GCPL.Model {
    export class EmployeeCastListModel {
        constructor() {
        }
        EmployeeBroadcastID: string;
        Title: string;
        Description: string;
        YouTubeLink: string;
        Photo: string;
        Video: string;
        Status: string;
        WhenEntered: string;

    }
    export class EmployeeCastSearchModel {
        constructor() {
        }
        SearchText: string;
    }
    export class InsertEmployeeCastModel {
        constructor() {
        }
        EmployeeBroadcastID: number;
        Title: string;
        Description: string;
        YouTubeLink: string;
        Photo: string;
        Video: string;
        Status: string;

    }
    export class EditEmployeeCastModel {
        constructor() {
        }
        EmployeeBroadcastID: string;
        Title: string;
        Description: string;
        YouTubeLink: string;
        Photo: string;
        Video: string;
        Status: string;

    }
}