namespace GCPL.Model {

    export class TargetHeadermodel {
        constructor() {
        }
        ID: string;
        DivisionID: string;
        ZoneID: string;
        ProductID: string;
        ModelID: string;
        UserID: string;
        Year: string;
        Month: string;
    }

    export class TargetGridListModel {
        constructor() {
        }
        TargetID: string;
        LeadTypeDesc: string;
        Division: string;
        Zone: string;
        Product: string;
        ModelNo: string;
        FirstName: string;
        Year: string;
        Month: string;
        Quantity: string;
        EmpCode: string;
        TotalCount: string;
        //IsActive: string;
    }

    export class InsertTargetModel{
        constructor(){
        }
        
        //TargetID: string;
        ID: string;
        DivisionID: string;
        ZoneID: string;
        ProductID: string;
        ModelID: string;
        UserID: string;
        Year: string;
        Month: string;
        Quantity: string;


    }

    export class EditTargetModel {
        constructor() {
        }
        TargetID: string;
        ID: string;
        DivisionID: string;
        ZoneID: string;
        ProductID: string;
        ModelID: string;
        UserID: string;
        Year: string;
        Month: string;
        Quantity: string;
        LeadTypeDesc: string;
        Division: string;
        Zone: string;
        Product: string;
        ModelNo: string;
        FirstName: string;
        YearID: string;
        MonthID: string;
      
       
    }

    export class EmpUserDropDownModel {
        constructor() {
    }
        UserID: string;
        FirstName: string;

    }
    export class CheckTargetModel {
        constructor() {
        }
        Count: number;
        //MobileNo: string;
    }

    export class OpportunityTypeDropDownModel {
        constructor() {
        }
        ID: string;
        OpportunityType: string;

    }
    export class CheckParameterModel {
        constructor() { }
        ID: string;      
        ModelID: string;
        UserID: string;
        Year: string;
        Month: string;
      
    }
}