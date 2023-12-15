namespace GCPL.Model {
    export class DistributionChannelListModel {
        constructor() {

        }
        DistributionChannelID: string;
        DistributionChannel: string;
        SAPID: string;
        WhenEntered: string;
        IsActive: string;

    }

    export class DistributionChannelSearchModel {

        constructor() {

        }

        SearchText: string;
        Status: string;
    }

    export class InsertDistributionChannelModel {

        constructor() {

        }
        DistributionChannelID: string;
        DistributionChannel: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;
    }

    export class EditDistributionChannelModel {
        constructor() {

        }
        DistributionChannelID: string;
        DistributionChannel: string;
        SAPID: string;
        WhenEntered: string;
        Status: string;



    }
}