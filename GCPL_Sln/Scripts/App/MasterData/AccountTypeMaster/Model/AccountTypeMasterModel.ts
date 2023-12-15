namespace GCPL.Model {
    export class AccountTypeListModel {
        constructor() {
        }       
        AccountTypeID: string;
        AccountType: string;
        WhenEntered: string;
        Status: string;
    }
    export class AccountSearchModel {
        constructor() {
        }
        SearchText: string;
        Status: string;
    }
    export class InsertAccountModel {

        constructor() {

        }
       
        AccountTypeID: number;
        AccountType: string;       
        Status: string;
    }
    export class EditAccountlistModel {
        constructor() {

        }
        AccountTypeID: string;
        AccountType: string;
        Status: string;
        WhenEntered: string;


    }
}