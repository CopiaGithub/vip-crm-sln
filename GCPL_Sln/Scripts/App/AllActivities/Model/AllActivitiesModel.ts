namespace GCPL.Model {
    export class AllActModel {
        constructor() {

        }


        ActivityID: string;
        CustomerID: string;
        CompanyName: string;
        CustomerSAPID: string;
        ContactID: string;
        ContactName: string;
        ContactSAPID: string;
        Note: string;
        ActivityName: string;
        ActivityDate: string;
        Status: string;
        IsActive: string;
        Purpose: string;
        Mode: string;
        Location: string;
        ReferenceType: string;
        ReferenceLead: string;
        ReferenceOpportunity: string;
        StartDate: string;
        EndDate: string;
        ActivityNumber: string;
        ActivityAgainst: string;
        ActivityType: string;
        CreatedBy: string;


    }
    export class AllActSearchModel {

        constructor() {

        }
        LeadID: string;
        OpportunityID: string;
        CreatedBy: string;
        ActivityType: string;
        FromDate: string;
        ToDate: string;
        UserID: string;
        ActivityID: string;
    }

    export class AllActSAPSearchModel {

        constructor() {
        }
        UserID: string;
    }

    //export class InsertActModel {

    //    constructor() {

    //    }

    //    actid: string;
    //    custid: string;           //BusinessPartnerNo
    //    conid: string;            //SAPID
    //    ptype: string;           //ActivityType
    //    date: string;
    //    cate: string;             //Category
    //    ActivityStatus: string;  //Activity Status
    //    purid: string;            //Purpose
    //    loc: string;             //Location
    //    note: string;            //Note comment
    //    erpid: string;            //EmployeeCode
    //    ftime: string;           //"141516"
    //    ttime: string;           //"101010"
    //    sorg: string;           //"O 50000002"
    //    sofc: string;           //"SOFF1001"
    //    dchnl: string;         //"10"
    //    div: string;            //"20"
    //    reftyp: string;         //Null
    //    refid: string;           //Null
    //    lat: string;            //"0"
    //    location: string;       //Null
    //    agnst: string;          //Null
    //    ltter: string;         //Null
    //    UserID: string;        //Null
    //    CustomerID: string;    //CustomerID
    //    ContactID: string;     //ContactId


    //}

    export class EditAllActModel {
        constructor() {

        }
        CustomerID: string;
        CompanyName: string;
        CustomerSAPID: string;
        CustomerMobileNo: string;
        ContactID: string;
        ContactName: string;
        ContactSAPID: string;
        ContactMobileNo: string;
        FOPID: string;
        FOP: string;
        note: string;
        ActivityStatus: string;
        ptype: string;
        cate: string;
        loc: string;
        purid: string;
        date: string;
        actid: string;
        agnst: string
        ltter: string;
        EndDate: string;
    }

    //export class UserInfoModel {
    //    constructor() {

    //    }
    //    UserID: string;
    //    EmployeeCode: string;
    //    SalesOfficeID: string;
    //}

    //export class ActivityType {
    //    constructor() {

    //    }
    //    PurposeID: string;
    //    Purpose: string;
    //    IsActive: string;

    //}

    //export class EditContact {
    //    constructor() {

    //    }

    //    ContactID: string;
    //    ContactName: string;
    //    ContactMobileNo: string;
    //    ContactSAPID: string;
    //    FOP: string;
    //}
}