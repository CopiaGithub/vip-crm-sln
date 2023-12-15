namespace GCPL.Model {
    export class CreateNewProject {
        constructor() {
        }

        ProjectID: string;
        ProjectName: string;
        ProjectNo: string;
        ProjectType: string;
        ProjectStage: string;
        Cost: string;
        Ownership: string;
        ProjectStartDate: string;
        CompletionDate: string;
        ProjectSource: string;
        Comments: string;
        Industry: string;
        UserID: string;
        ZoneID: string;
    }
    export class GetProjectTypeDDModel {
        constructor() {
        }

        ProjectTypeID: string;
        ProjectType: string;
    }
    export class UserMasterddlModel {
        constructor() {
        }
        ID: number;
        UserName: string;
        IsChecked: boolean;
    }
    export class GetCustProjectTypeDDModel {
        constructor() {
        }

        ProjectID: string;
        ProjectType: string;
    }
    export class GetAddCustProjectTypeDDModel {
        constructor() {
        }

        ProjectID: string;
        ProjectName: string;
    }
    export class GetProjectStageDDModel {
        constructor() {
        }

        ProjectStageID: string;
        ProjectStage: string;
    }

    export class GetIndustryDDModel {
        constructor() {
        }

        ProjectIndustryID: string;
        ProjectIndustry: string;
    }

    export class GetOwnershipModel {
        constructor() {
        }

        ProjectOwnershipID: string;
        ProjectOwnership: string;
    }

    export class GetProjectSourceModel {
        constructor() {
        }

        ProjectSourceID: string;
        ProjectSource: string;
    }


    export class GetProjectNameDDModel {
        constructor() {
        }
        ProjectID: string;
        ProjectName: string;
    }

}