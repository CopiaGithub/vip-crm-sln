namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IManagerLeadsCountService {

        FindGrid(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadsCountGrid(data: any): model.LeadCountModel;

    }
    export class ManagerLeadsCountService extends GCPL.Service.BaseService implements IManagerLeadsCountService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"TeamDashboard"}`;
            this.Cookie = _cookieStore;
        }

        FindGrid(): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            //var url = this.apiUrl + "HomeDashboard";

            let config = {
                params: {

                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetLeadsCountGrid(data: any): model.LeadCountModel {
            console.log(data);
            let list = new model.LeadCountModel();
            {
                list.Allocated = data.Allocated;
                list.Deferred = data.Deferred;
                list.Delayed = data.Delayed;
                list.Inprocess = data.Inprocess;
                list.ActivityCreated = data.ActivityCreated;
                list.ActivityCompleted = data.ActivityCompleted;
                list.Converted = data.Converted;

            }
            return list;
        }


    }
    app.AddService("ManagerLeadsCountService", ManagerLeadsCountService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IManagerOpportunityCountService {

        FindGrid(): ng.IPromise<Utility.Ajax.IResponse>;
        GetOpportunityCountGrid(data: any): model.OpportunityCountModel;

    }
    export class ManagerOpportunityCountService extends GCPL.Service.BaseService implements IManagerOpportunityCountService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"TeamOpportunityDashboard"}`;
            this.Cookie = _cookieStore;
        }

        FindGrid(): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            //var url = this.apiUrl + "HomeDashboard";

            let config = {
                params: {

                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetOpportunityCountGrid(data: any): model.OpportunityCountModel {
            console.log(data);
            let list = new model.OpportunityCountModel();
            {
                list.Identification = data.Identification;
                list.Qualification = data.Qualification;
                list.Development = data.Development;
                list.Proposal = data.Proposal;
                list.Won = data.Won;
                list.Lost = data.Lost;
                list.NoDeal = data.NoDeal;


            }
            return list;
        }


    }
    app.AddService("ManagerOpportunityCountService", ManagerOpportunityCountService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IManagerLeadDelayedListService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDelayList(data: any): Array<model.LeadDelaylistModel>;

    }
    export class ManagerLeadDelayedListService extends GCPL.Service.BaseService implements IManagerLeadDelayedListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/DelayedLeadDetails";

            let config = {
                params: {

                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetDelayList(data: any): Array<model.LeadDelaylistModel> {
            let list = Array<model.LeadDelaylistModel>();

            for (let item of data) {
                list.push({

                    LeadID: item.LeadID,
                    LeadType: item.LeadType,
                    CustomerName: item.CustomerName,
                    SalesRep: item.SalesRep,
                    Quantity: item.Quantity,
                    Model: item.Model,
                    AgeOldDays: item.AgeOldDays

                });
            }
            return list;
        }

    }
    app.AddService("ManagerLeadDelayedListService", ManagerLeadDelayedListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IManagerTopOpportunityListService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetOppList(data: any): Array<model.OpplistModel>;

    }
    export class ManagerTopOpportunityListService extends GCPL.Service.BaseService implements ManagerTopOpportunityListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/OpportunityDetails";

            let config = {
                params: {

                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetOppList(data: any): Array<model.OpplistModel> {
            let list = Array<model.OpplistModel>();
            var expdate = "";
            for (let item of data) {
                list.push({

                    OpportunitySAPNo: item.OpportunitySAPNo,
                    OpportunityType: item.OpportunityType,
                    CustomerName: item.CustomerName,
                    SalesRep: item.SalesRep,
                    Quantity: item.Quantity,
                    Model: item.Model,
                    ExpEndDate: item.ExpEndDate.length == 8 ? item.ExpEndDate.slice(0, 4) + "-" + item.ExpEndDate.slice(4, 6) + "-" + item.ExpEndDate.slice(6, 8) : item.ExpEndDate

                });
            }
            return list;
        }

    }
    app.AddService("ManagerTopOpportunityListService", ManagerTopOpportunityListService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IChannelPiechartListManagerService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetChannelPie(data: any): Array<model.ChannelPieModel>;

    }
    export class ChannelPiechartListManagerService extends GCPL.Service.BaseService implements IChannelPiechartListManagerService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ChannelPiechartTeam"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            //var url = this.apiUrl + "HomeDashboard";           
            var LeadType;
            var Division;
            var Model;
            var FromDate;
            var ToDate;

            if (data.LeadType == undefined) {
                LeadType = '';
            }
            else {

                LeadType = data.LeadType
            }
            if (data.Division == undefined) {
                Division = '';
            }
            else {

                Division = data.Division
            }
            if (data.Model == undefined) {
                Model = '';
            }
            else {

                Model = data.Model
            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {

                FromDate = data.FromDate
            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {

                ToDate = data.ToDate
            }

            let config = {
                params: {
                    LeadType: LeadType,
                    Division: Division,
                    Model: Model,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetChannelPie(data: any): Array<model.ChannelPieModel> {
            console.log(data);
            let list = Array<model.ChannelPieModel>();
            for (let item of data) {
                list.push({

                    Sales: item.Sales,
                    Marketing: item.Marketing
                });
            }

            return list;
        }


    }
    app.AddService("ChannelPiechartListManagerService", ChannelPiechartListManagerService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISourcePiechartListManagerService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSourcePie(data: any): Array<model.SourcePieModel>;

    }
    export class SourcePiechartListManagerService extends GCPL.Service.BaseService implements ISourcePiechartListManagerService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadSourcePiechartTeam"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            //var url = this.apiUrl + "HomeDashboard";           
            var LeadType;
            var Division;
            var Model;
            var FromDate;
            var ToDate;

            if (data.LeadType == undefined) {
                LeadType = '';
            }
            else {

                LeadType = data.LeadType
            }
            if (data.Division == undefined) {
                Division = '';
            }
            else {

                Division = data.Division
            }
            if (data.Model == undefined) {
                Model = '';
            }
            else {

                Model = data.Model
            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {

                FromDate = data.FromDate
            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {

                ToDate = data.ToDate
            }

            let config = {
                params: {
                    LeadType: LeadType,
                    Division: Division,
                    Model: Model,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    RoleID: this.Cookie.get('UserInfo')['RoleID']
                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetSourcePie(data: any): Array<model.SourcePieModel> {
            console.log(data);
            let list = Array<model.SourcePieModel>();
            for (let item of data) {
                list.push({

                    Advertisement: item.Advertisement,
                    Inhouse: item.Inhouse,
                    ColdCall: item.ColdCall,
                    DealerSales: item.DealerSales,
                    FinancerReferral: item.FinancerReferral,
                    CustomerEnquiry: item.CustomerEnquiry,
                    Spotters: item.Spotters,
                    CustomerReferral: item.CustomerReferral,
                    FieldService: item.FieldService,
                    MarketingCamp: item.MarketingCamp,
                    CustomerTenders: item.CustomerTenders,
                    TeleMarketing: item.TeleMarketing,
                    Demo: item.Demo,
                    RoadShow: item.RoadShow,
                    WalkIn: item.WalkIn,
                    CATWebsite: item.CATWebsite,
                    ProductSupport: item.ProductSupport,
                    OtherMisc: item.OtherMisc,
                    TIPLWebsite: item.TIPLWebsite,
                    CATTradeshow: item.CATTradeshow,
                    Events: item.Events,
                    ThroughAgency: item.ThroughAgency,
                    CATLeadOnline: item.CATLeadOnline,
                    DigitalMarketing: item.DigitalMarketing
                });
            }

            return list;
        }


    }
    app.AddService("SourcePiechartListManagerService", SourcePiechartListManagerService);
}