namespace GCPL.Model {
    export class CustomerCastListModel {
        constructor() {
        }
        CustomerBroadcastID: string;
        Title: string;
        Description: string;
        YouTubeLink: string;
        Photo: string;
        Video: string;
        Status: string;
        WhenEntered: string;

    }
    export class CustomerCastSearchModel {
        constructor() {
        }
        SearchText: string;
    }
    export class InsertCustomerCastModel {
        constructor() {
        }
        CustomerBroadcastID: number;
        Title: string;
        Description: string;
        YouTubeLink: string;
        Photo: string;
        Video: string;
        Status: string;

    }
    export class EditCustomerCastModel {
        constructor() {
        }
        CustomerBroadcastID: string;
        Title: string;
        Description: string;
        YouTubeLink: string;
        Photo: string;
        Video: string;
        Status: string;

    }
}