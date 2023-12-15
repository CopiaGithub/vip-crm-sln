namespace GCPL.Model {
    export class CreateDARUploadModel {
        constructor() {

        }
        CustomerName: string;
        OpportunityID: string;
        OppStatusID: string;
        OppStatus: string;
        CustomerID: string;
        DARID: string;
        StatusID: string;
        Status: string;
        PreStatusID: string;
        ApplicationForm: string;
        PanFormNo16: string;
        IDAddProof: string;
        Photograph: string;
        BankNo: string;
        FleetList: string;
        ExistingVehicleReg: string;
        ExistingLoanScheduleTrack: string;
        ITRandAuditReport_CY: string;
        ITRandAuditReport_CY_1: string;
        WorkOrder_IfAvailable: string;
        CertiIncorp: string;
        MemoandArticle: string;
        PANofCompany: string;
        ExtractRegiComp: string;
        ResolutionBoard: string;
        LegalSuits: string;
        Doc1Pic: string;
        Doc2Pic: string;
        Doc3Pic: string;
        Doc1Text: string;
        Doc2Text: string;
        Doc3Text: string;
        CreatedBy: string;
        CatQuoteRef: string;
        CustomerType: string;
    }

    export class GetDetailsModel {
        constructor() { }
        CustomerID: string;
        CustomerName: string;
        DARNo: string;
        CreatedBy: string;
        SubmittedBy: string;
        OpportunityID: string;
        StatusID: string;
        Status: string;
        ApprovedBy: string;
        ApprovedByName: string;
        ApprovedDate: string;
        ApproverComments: string;
    }

    export class EditDARModel {
        constructor() {

        }
        CustomerName: string;
        OpportunityID: string;
        OpportunityNo: string;
        OppStatus: string;
        CustomerID: string;
        DARStatus: string;
        DARID: string;
    }

    export class InsertDARModel {
        constructor() { }

        DARHeaderID: string;
        ApplicationForm: string;
        PanFormNo16: string;
        IDAddProof: string;
        Photograph: string;
        BankNo: string;
        FleetList: string;
        ExistingVehicleReg: string;
        ExistingLoanScheduleTrack: string;
        ITRandAuditReport_CY: string;
        ITRandAuditReport_CY_1: string;
        WorkOrder_IfAvailable: string;
        CertiIncorp: string;
        MemoandArticle: string;
        PANofCompany: string;
        ExtractRegiComp: string;
        ResolutionBoard: string;
        LegalSuits: string;
        Doc1Pic: string;
        Doc2Pic: string;
        Doc3Pic: string;
        Doc1Text: string;
        Doc2Text: string;
        Doc3Text: string;
        CustomerID: string;
        Status: string;
        CreatedBy: string;
        OpportunityNo: string;
        CustomerType: string;
        CatQuoteRef: string;
     //   Type: string;
        //ApplicationFormpdf: string;
        //PanFormNo16pdf: string;
        //IDAddProofpdf: string;
        //Photographpdf: string;
        //BankNopdf: string;
        //FleetListpdf: string;
        //ExistingVehicleRegpdf: string;
        //ExistingLoanScheduleTrackpdf: string;
        //ITRandAuditReport_CYpdf: string;
        //ITRandAuditReport_CY_1pdf: string;
        //WorkOrder_IfAvailablepdf: string;
        //CertiIncorppdf: string;
        //MemoandArticlepdf: string;
        //PANofCompanypdf: string;
        //ExtractRegiComppdf: string;
        //ResolutionBoardpdf: string;
        //LegalSuitspdf: string;
        //Doc1Picpdf: string;
        //Doc2Picpdf: string;
        //Doc3Picpdf: string;
      //  StatusID: string;
        
    }

    export class SearchDetailsModel {
        constructor() {

        }
        UserID: string;
        CustomerID: string;
        DARID: string;
    }

    export class RejectCommentModel {
        constructor() {

        }
        ID: string;
        ApproverComments: string;
        
    }

    export class ViewDARUploadModel {
        constructor() {

        }
        CustomerName: string;
        OpportunityID: string;
        OppStatusID: string;
        OppStatus: string;
        CustomerID: string;
        DARID: string;
        StatusID: string;
        Status: string;
        PreStatusID: string;
        ApplicationForm: string;
        PanFormNo16: string;
        IDAddProof: string;
        Photograph: string;
        BankNo: string;
        FleetList: string;
        ExistingVehicleReg: string;
        ExistingLoanScheduleTrack: string;
        ITRandAuditReport_CY: string;
        ITRandAuditReport_CY_1: string;
        WorkOrder_IfAvailable: string;
        CertiIncorp: string;
        MemoandArticle: string;
        PANofCompany: string;
        ExtractRegiComp: string;
        ResolutionBoard: string;
        LegalSuits: string;
        Doc1Pic: string;
        Doc2Pic: string;
        Doc3Pic: string;
        Doc1Text: string;
        Doc2Text: string;
        Doc3Text: string;
        CreatedBy: string;
        CatQuoteRef: string;
        CustomerType: string;
    }

}