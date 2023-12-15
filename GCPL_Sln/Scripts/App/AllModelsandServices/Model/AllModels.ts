namespace GCPL.Model {
    export class EditInsertModel {
        constructor() { }
        TicketID: string;
        TicketTitle: string;
        CreationDate: string;
        CreatedBy: string;
        CreatedFor: string;
        PriorityID: string;
        CategoryID: string;
        SubCategoryID: string;
        IssueDescription: string;
        Attachment1: string;
        Attachment2: string;
        Attachment3: string;
        AssignedTo: string;
        EmailsTo: string;
        PageLink: string;
        ChangeType: string;
        UploadFileNames: string;
        UploadFile1: string;
        UploadFile2: string;
        UploadFile3: string;
        UploadFile4: string;
        UploadFile5: string;
        DatabaseChanges: string;
        ApprovalForQA: string;
        TargetForQA: string;
        QAApprovedBy: string;
        QAApprovedDate: string;
        QAApproverComments: string;
        ApprovalForProd: string;
        ProdApprovalBy: string;
        ProdApprovalDate: string;
        CustomerTested: string;
        CustomerApproved: string;
        ProdApproverComments: string;
        TicketClosureDate: string;
        TicketClosedBy: string;
        TicketClosedReason: string;
        TicketClosureComments: string;
        ProjectID: string;
        TaskID: string;
        SubTaskID: string;
        Status: string;
        TicketNo: string;
        CreatedByName: string;
        CreatedForName: string;
        CustomerID: string;
        TestedOn: string;
        UploadInstructions: string;
        ChangeRequest: string;
        IssueUpdate: string;
        EmailsName: string;
        UserID: string;
        AssignedOn: string;
        TicketClosedByName: string;
        IssueDescriptionHistory: string;
        IssueDescriptionNew: string;
        ApprovalTypeID: string;
        ApplicationID: string;
        DBAQAid: string;
        QAMigrationdate: string;
        ChangesMigrateQAID: string;
        ApprovedOn: string;
        ApprovedByID: string;
        ApprovedfordevelopmentID: string;
        ProdMigrateDate: string;
        QADBAApproverComments: string;
        DBAProdid: string;
        UATID: string;
        WorkStartDate: string;
        WorkStartedID: string;
        DevCompletedID: string;
        ApproverID: string;
        ProdDBAApproverComments: string;
        ChangesMigrateProdID: string;
        ApprovedByName: string;
        DevelopmentCompletedDate: string;
        TransactionID: string;
        list: Array<GCPL.Model.TestCycleModel>;
        IssueDescriptionHistoryList: Array<GCPL.Model.IssueDescriptionHist>;
    }
    export class IssueDescriptionHist {
        constructor() { }
        IssueDescriptionHistory: string;
        index: number;
    }
    export class TestCycleModel {
        constructor() { }
        ID: string;
        TestedInSystem: string;
        TestedBy: string;
        TestingCycleno: string;
        TestComments: string;
        TicketID: string;
        TestedOn: string;
        TestResult: string;
        CustomerID: string;
        Attachment1: string;
        Attachment2: string;
        Attachment3: string;
        Attachment4: string;
        Attachment5: string;
        index: number;
        TestedInSysName: string;
        TestedByName: string;
    }
    export class TicketSODto {
        constructor() { }
        list: Array<TestCycleModel>;
        sodto: TestCycleModel;
        EditId: number;
        Type: string;
    }
    export class TicketSOAttachmentsModel {
        constructor() { }
        ID: string;
        Attachment: Array<GCPL.Model.InsertAttchmentsModel>;
        UserID: string;
        CustomerID: string;
        Section: string;
        TicketNo: string;
    }
    export class InsertAttchmentsModel {
        constructor() { }
        baseUrlString: string;
        imageName: string;
    }
    export class AttachmentsModel {
        constructor() { }
        ID: string;
        Attachment: Array<GCPL.Model.InsertAttchmentsModel>;
        UserID: string;
        CustomerID: string;
        Section: string;
        TicketNo: string;
    }
    export class RemoveAttachmentModel {
        constructor() { }
        ID: string;
        TicketID: string;
    }
    export class ProjectDDModel {
        constructor() {
        }
        ProjectID: string;
        ProjectName: string;
    }
    export class CustomerDDModel {
        constructor() {

        }
        CustomerID: string;
        CustomerName: string;
    }
    export class TaskDDModel {
        constructor() {
        }
        TaskID: string;
        TaskName: string;
    }
    export class TicketStatusDD {
        constructor() {
        }
        TicketStatusID: string;
        TicketStatus: string;
    }
    export class PriorityDD {
        constructor() {
        }
        PriorityID: string;
        Priority: string;
    }
    export class CategoryDD {
        constructor() {
        }
        CategoryID: string;
        CategoryName: string;
    }
    export class SubTaskDD {
        constructor() {

        }
        SubTaskID: string;
        SubTask: string;
    }
    export class SubCategoryDD {
        constructor() {
        }
        SubCategoryID: string;
        SubCategory: string;
    }
    export class ChangeTypeDD {
        constructor() { }
        ID: string;
        ChangeType: string;
    }
    export class ClosureDD {
        constructor() { }
        ID: string;
        ClosureReason: string;
    }
    export class ApplicationDD {
        constructor() { }
        ApplicationID: string;
        AppDescription: string;
    }
    export class TicketListModel {
        constructor() { }
        TicketID: string;
        CustomerName: string;
        ProjectName: string;
        TaskName: string;
        SubTask: string;
        TicketNo: string;
        TicketTitle: string;
        Createdon: string;
        CreatedBy: string;
        CreatedFor: string;
        AssignedTo: string;
        TicketStatus: string;
        Category: string;
        SubCategory: string;
        ClosureToDate: string;
        ApprovalTypeID: string;
        ApprovalType: string;
        ApplicationName: string;
        AssignedOn: string;
        ProjectID: string;
        AppID: string;
        StatusID: string;
        AssignedOntime: string;
        WorkStartDate: string;
        WorkStarttime: string;
        DevelopmentCompletedDate: string;
        DevelopmentCompletedtime: string;
        QAMigrationdate: string;
        QAMigrationtime: string;
        ProdMigrateDate: string;
        ProdMigratetime: string;
        QAApprovedDate: string;
        QAApprovedtime: string;
        ProdApprovalDate: string;
        ProdApprovaltime: string;
        UATCompleteDate: string;
        UATCompletetime: string;
        Creationtime: string;
        TicketClosureDate: string;
        TicketClosureTime: string;
    }
    export class StatusCodeModel {
        constructor() { }
        TicketStatusCode: string;
    }
    export class TicketListHeader {
        constructor() { }
        CustomerID: string;
        ProjectID: string;
        TaskID: string;
        SubTaskID: string;
        StatusID: string;
        CategoryID: string;
        SubCategoryID: string;
        ChangeType: string;
        TicketNo: string;
        CreatedBy: string;
        FromDate: string;
        ToDate: string;
        ApplicationID: string;
        UserID: string;
        AssignedTo: string;

    }
    export class UserNameDDModel {
        constructor() { }
        UserID: string;
        UserName: string;
    }
    export class InsertCreateTicket {
        constructor() { }
        CustomerID: string;
        Status: string;
        TaskID: string;
        SubTaskID: string;
        CategoryID: string;
        SubCategoryID: string;
        ProjectID: string;
        PriorityID: string;
        CreatedFor: string;
        TicketTitle: string;
        CreationDate: string;
        CreatedBy: string;
        IssueDescription: string;
        Attachment1: string;
        Attachment2: string;
        Attachment3: string;
        EmailsTo: string;
        PageLink: string;
        UserID: string;
        ID: string;
        EmailID: string;
        EmailName: string;
        ApplicationID: string;
        ObjectID: string;
        LoginCustomerID: string;


    }
    export class CustRangeObjectModel {
        constructor() { }
        ObjectTypeID: string;
    }
    export class TaskList {
        constructor() {
        }
        TaskID: string;
        TaskName: string;
        CustomerID: string;
        ProjectID: string;
        ProjectName: string;
        StartDate: string;
        EndDate: string;
        TaskStatus: string;
        CustomerName: string;
        ApplicationName: string;
    }
    export class InsertTask {
        constructor() {
        }
        TaskID: string;
        TaskName: string;
        TaskStatus: string;
        CustomerID: string;
        UserID: string;
        ProjectID: string;
        StartDate: string;
        EndDate: string;
        ApplicationID: string;
    }
    export class ProjectList {
        constructor() {
        }
        ProjectID: string;
        ProjectName: string;
        CustomerID: string;
        CustomerName: string;
        StartDate: string;
        EndDate: string;
        ApplicationName: string;
    }
    export class InsertProjectModel {
        constructor() {
        }
        CustomerID: string;
        StartDate: string;
        EndDate: string;
        ProjectName: string;
        CustomerName: string;
        UserID: string;
        ProjectID: string;
        ApplicationID: string;
    }
    export class SubTaskList {
        constructor() {
        }
        SubTaskID: string;
        CustomerID: string;
        CustomerName: string;
        ProjectName: string;
        TaskName: string;
        SubTask: string;
        StartDate: string;
        EndDate: string;
        SubTaskStatus: string;
        ApplicationName: string;
    }
    export class InsertSubTask {
        constructor() {
        }

        SubTaskID: string;
        CustomerID: string;
        ProjectID: string;
        TaskID: string;
        SubTask: string;
        UserID: string;
        StartDate: string;
        EndDate: string;
        SubTaskStatus: string;
        ApplicationID: string;
    }
    export class SODto {
        constructor() { }
        list: Array<SalesOrderDetails>;
        sodto: SalesOrderDetails;
        soheader: SaleOrderHeader;
        EditId: number;
        Type: string;
    }
    export class StatusCodeList {
        constructor() { }
        TicketStatusCode: string;
    }
    export class ApprovalTypeDD {
        constructor() { }
        ID: string;
        ApprovalType: string;
    }
    export class ApprovalMatrixInsert {
        constructor() { }
        ID: string;
        CustomerID: string;
        AppName: string;
        ProjectID: string;
        ApprovalTypeID: string;
        ApproverName: string;
        QAApprover: string;
        ProdApprover: string;
        UserID: string;
        UserName: string;
    }
    export class ApprovalMatrixList {
        constructor() { }
        ID: string;
        CustomerName: string;
        AppDescription: string;
        QAApprover: string;
        ProdApprover: string;
        ProjectName: string;
        ApprovalType: string;
        ApproverName: string;
    }
    export class ApplicationList {
        constructor() { }
        ApplicationID: string;
        ApplicationName: string;
        AppDescription: string;
        CustomerName: string;
    }
    export class InsertApplication {
        constructor() { }
        ApplicationID: string;
        ApplicationName: string;
        AppDescription: string;
        CustomerID: string;
        CustomerName: string;
        UserID: string;
    }
    export class TimeSODto {
        constructor() { }
        list: Array<TimeSheetInsert>;
        sodto: TimeSheetInsert;
        EditId: number;
        Type: string;
    }
    export class TSApprovalList {
        constructor() { }
        ID: string;
        UserName: string;
        Date: string;
        TotalTime: string;
        Status: string;
        CustomerName: string;
        ProjectName: string;
        ApplicationName: string;
        TaskName: string;
        SubTask: string;
        FromTime: string;
        ToTime: string;
    }
    export class TimeSheetInsert {
        constructor() { }
        ID: string;
        Date: string;
        CustomerID: string;
        CustomerName: string;
        ApplicationID: string;
        ApplicationName: string;
        ProjectID: string;
        ProjectName: string;
        TaskID: string;
        TaskName: string;
        SubTaskID: string;
        SubTaskName: string;
        FromTime: string;
        ToTime: string;
        index: number;
        UserID: string;
        TotalTime: string;
    }
    export class AttachmentEditModel {
        constructor() { }
        ID: string;
        imageName: string;
        status: string;
        fileType: string;
        baseUrl: string;
    }
    export class TimeSheetList {
        constructor() { }
        ID: string;
        Date: string;
        CustomerName: string;
        ApplicationName: string;
        ProjectName: string;
        TaskName: string;
        SubTask: string;
        FromTime: string;
        ToTime: string;
        Status: string;
    }
    export class SalesOrderDetails {
        constructor() { }
        Baarcode: string;
        QuotationItemID: number;
        SEZCustomer: string;
        Description: string;
        index: number
        IGST: string;
        CGST: string;
        SGST: string;
        UGST: string;

        IGSTQty: string;
        CGSTQty: string;
        SGSTQty: string;
        UGSTQty: string;

        IGSTValue: string;
        CGSTValue: string;
        SGSTValue: string;
        UGSTValue: string;

        IGSTValueQty: string;
        CGSTValueQty: string;
        SGSTValueQty: string;
        UGSTValueQty: string;

        TotalCGSTValue: string;
        TotalSGSTValue: string;
        TotalIGSTValue: string;
        TotalUGSTValue: string;
        GSTSetoff: string;
        QuantityInKG: string;
        Basicprice: string;
        SalesPrice: string;
        NetPrice: string;
        MRPValue: string;
        SubTotal: string;
        totaltax: string;
        TotalDiscount: string;
        ItemPrice: string;
        UOMID: string;
        Quantity: string;
        DealerDiscountAmount: string;
        DiscountAmount: string;
        DiscountValue: string;
        MFPLDiscId: string;
        DiscountType: string;
        DealerDiscValue: string;
        Dealerdisctype: string;
        MRP: string;
        ItemID: number;
        ItemNo: string;
        SalesOrderItemID: number;
        TotalPrice: number;
        PriceGroup: string;
        DealerStateID: number;
        CustomerID: number;
        CustomerState: number;
        DealerID: number;
        CityID: string;
        TotalNetAmount: number;
        SalesPriceID: number;
        BaseUOM: string;
        BPAD: string;
    }
    export class SaleOrderHeader {
        constructor() { }
        Currency: string;
        CustomerName: string;
        HeaderComment: string;
        Validity: string;
        QuotationID: string;
        SalesOrderDetails: Array<Model.SalesOrderDetails>
        CustomerID: number;
        ShipToCustomerID: number;
        ShipToID: number;
        SOTypeID: number;
        PONumber: string;
        PODate: string;
        SODate: string;
        DeliveryDate: string;
        PaymentTerms: string;
        DueDate: string;
        DealerID: number;
        StateID: string;
        SalesOrderID: number;
        BillID: number;
        QuantityInKG: number;
        SalesPrice: number;
        TotalNetAmount: number;
        Taxamt: number;
        TotalDiscount: number;
        TotalPrice: number;
        CGSTValueQty: number;
        SGSTValueQty: number;
        IGSTValueQty: number;
        UserID: number;
        ItemNo: string;
        ShiptCustomerName: string;
        BillToAddress: string;
        ShipToAddress: string;
        CreationDate: string;
        WHID: string;
        ItemID: string;
        LeadID: string;
        POID: string;
        Description: string;
        type: string;

    }
    export class InsertStatusNewModel {
        constructor() { }
        TicketStatusCode: string;
    }

    export class MyTicketListModel {
        constructor() { }
        TicketID: string;
        CustomerName: string;
        ProjectName: string;
        TaskName: string;
        SubTask: string;
        TicketNo: string;
        TicketTitle: string;
        Createdon: string;
        CreatedBy: string;
        CreatedFor: string;
        AssignedTo: string;
        TicketStatus: string;
        Category: string;
        SubCategory: string;
        ClosureToDate: string;
        ApprovalTypeID: string;
        ApprovalType: string;
        ApplicationName: string;
        AssignedOn: string;
        ProjectID: string;
        AppID: string;
        StatusID: string;
        AssignedOntime: string;
        WorkStartDate: string;
        WorkStarttime: string;
        DevelopmentCompletedDate: string;
        DevelopmentCompletedtime: string;
        QAMigrationdate: string;
        QAMigrationtime: string;
        ProdMigrateDate: string;
        ProdMigratetime: string;
        QAApprovedDate: string;
        QAApprovedtime: string;
        ProdApprovalDate: string;
        ProdApprovaltime: string;
        UATCompleteDate: string;
        UATCompletetime: string;
        Creationtime: string;
        TicketClosureDate: string;
        TicketClosureTime: string;
    }

    export class UserNameModel {
        constructor() { }
        UserID: string;
        UserName: string;
    }
    export class ApproverID {
        constructor() { }
        ApproverNameID: string;
    }
}
