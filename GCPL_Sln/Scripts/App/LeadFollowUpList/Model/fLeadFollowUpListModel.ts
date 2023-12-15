namespace GCPL.Model {
    export class FollowupSearchModel {
        constructor() { }
        
        LeadTypeID: string;
        //  DivisionID: string;
        //  ZoneID: string;
        //  ProductID: string;
        ModelID: string;
        ManagerName: string;
        CustomerMobile: string;
        LeadID: string;
        FromDate: string;
        ToDate: string;
        CustomerName: string;
        ProductID: string;
        SourceID: string;
        DivisionID: string;
        StatusID: string;
        RegionID: string;
        StateIDs: string;
        UserID: string;
        CampaignID: string;
        DistrictID: string;
        LeadSourceID: string;
        Createdby: string;
        AllocatedTo: string;
        SubsourceID: string;
        Subsource2ID: string;
        ModelId: string;
        Campaign: string;
        LeadOrigin: string;
        SAPID: string;
        UserID1: string;
        LeadType: string;
        CustomerID: string;
        Opportunity: string;

        

    }
    export class FollowupListModel {
        constructor() {
        }
        LeadID: string;
        CompanyName: string;
        Product: string;
        ModelNo: string;
        PurchaseWithin: string;
        Region: string;
        CreatedBy: string;
        CreatedDate: string;
        ValidatedBy: string;
        AllocatedTo: string;
        Status: string;
        ContactID: string;
        CustomerID: string;
        AssessmentDate: string;
        LeadSource: string;
        CustMobNo: string;
        CustPhnNo: string;
        ContactPerName: string;
        ContactPerNo: string;
        ContactPerMob: string;
        SAPID: string;
        Latitude: string;
        Longitude: string;
        LeadType: string;
        LeadOrigin: string;
        Zone: string;
        ValidateDate: string;
        Division: string;
        AssessmentComments: string;
        OpportunityNo: string;
        Quantity: string;
        RefUserName: string;
        CampaignName: string;
        State: string;
        District: string;
        EmpCode: string;
        EmployeeCode: string;
        FollowUpCount: string;
      
        
    }
    export class LeadFUQuestionsModel {
        constructor() { }
        QuestionID: string;
        Question: string;

    }
    export class LeadFUAnswersModel {
        constructor() { }
        QuestionID: string;
        AnswerID: string;
        Answer: string;
    }
    export class InsertFUQueAnsModel {
        constructor() {
        }
        QueID1: string;
        AnsID1: string;
        QueID2: string;
        AnsID2: string;
        QueID3: string;
        AnsID3: string;
        QueID4: string;
        AnsID4: string;
        QueID5: string;
        AnsID5: string;
        QueID6: string;
        AnsID6: string;
        AnsweredBy: string;
        LeadID: string;
        AnswerText: string;
        SpokeTo: string;
        PhoneNo: string;
        FollowupStatus: string;
        RefMobileNo: string;
        RefName: string; 
        CustomerID: string;
    }


    export class FolloupHistListModel {
        constructor() {
        }
        LeadID: string;
        SpokeTo: string;
        PhoneNo: string;
        Question1: string;
        Question2: string;
        Question3: string;
        Question4: string;
        Question5: string;
        Question6: string;
        Answer1: string;
        Answer2: string;
        Answer3: string;
        Answer4: string;
        Answer5: string;
        Answer6: string;
        FollowupDate: string; 
        CustomerID: string;
        FollowupStatus: string;
        AnswerText: string;
        FollowupBy: string;
        BusinessPartnerNo: string;

    }
    
}