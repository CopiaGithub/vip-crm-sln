namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IWinLossReportGridService {



        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;//FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
        GetWinLossGrid(data: any): Array<model.WinLossHeatGridModel>;

    }
    export class WinLossReportGridService extends GCPL.Service.BaseService implements IWinLossReportGridService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            var url = this.apiUrl + "WinLossHeat";
            var State;
            var District;
            var Zone;
            var Channel;
            var LeadSource;
            var SalesOffice;
            var Salesrep;
            var FromDate;
            var ToDate;
            var DivisionID;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            

            if (data.State == undefined) {
                State = '';
            }
            else {

                State = data.State
            }
            if (data.District == undefined) {
                District = '';
            }
            else {

                District = data.District
            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {

                Zone = data.Zone
            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {

                Channel = data.Channel
            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {

                LeadSource = data.LeadSource
            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {

                SalesOffice = data.SalesOffice
            }
            if (data.Salesrep == undefined) {
                Salesrep = '';
            }
            else {

                Salesrep = data.Salesrep
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
            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {

                DivisionID = data.DivisionID
            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {

                ProductID = data.ProductID
            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {

                ModelID = data.ModelID
            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {

                LeadTypeID = data.LeadTypeID
            }

            

            let config = {
                params: {

                    State: State,
                    District: District,
                    Zone: Zone,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    SalesOffice: SalesOffice,
                    Salesrep: Salesrep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    Division: DivisionID,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID
                   

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetWinLossGrid(data: any): Array<model.WinLossHeatGridModel> {

            let list = Array<model.WinLossHeatGridModel>();

            for (let item of data) {
                list.push({

                    State: item.State,
                    District: item.District,
                    Zone: item.Zone,
                    SalesOffice: item.SalesOffice,
                    LeadType: item.LeadType,
                    Model: item.Model,
                    Channel: item.Channel,
                    LeadSource: item.LeadSource,
                    NoOfLeads: item.NoOfLeads,
                    NoOfOpportunities: item.NoOfOpportunities,
                    Won: item.Won,
                    Lost: item.Lost,
                    NoDeal: item.NoDeal
                    
                });
            }

            return list;
        }

    }
    app.AddService("WinLossReportGridService", WinLossReportGridService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserDD(data: any): Array<model.UserDDModel>;
    }
    export class UserddService extends GCPL.Service.BaseService implements IUserddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"UsernameDD"}`;
        }


        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetUserDD(data: any): Array<model.UserDDModel> {
            let list = Array<model.UserDDModel>();
            for (let item of data) {
                list.push({
                    UserID: item.UserID,
                    UserName: item.UserName,
                });
            }
            return list;
        }
    }

    app.AddService("UserddService", UserddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadSourceddWPService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadSourceDD(data: any): Array<model.LeadSourceddModel>;
    }
    export class LeadSourceddWPService extends GCPL.Service.BaseService implements ILeadSourceddWPService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadSourceddl"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ChannelID;

            if (data == undefined) {
                ChannelID = "";
            }
            else {
                ChannelID = data;
            }

            let config = {
                params: {
                    ChannelID: ChannelID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetLeadSourceDD(data: any): Array<model.LeadSourceddModel> {
            let list = Array<model.LeadSourceddModel>();
            for (let item of data) {
                list.push({
                    LeadSourceID: item.LeadSourceID.toString(),
                    LeadSource: item.LeadSource,
                });
            }
            return list;
        }
    }

    app.AddService("LeadSourceddWPService", LeadSourceddWPService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOfficeDDwpService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesOfficewp(data: any): Array<model.SalesOfficewpModel>;
    }
    export class SalesOfficeDDwpService extends GCPL.Service.BaseService implements ISalesOfficeDDwpService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SalesOfficeDDwp"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    ZoneID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetSalesOfficewp(data: any): Array<model.SalesOfficewpModel> {
            let list = Array<model.SalesOfficewpModel>();
            for (let item of data) {
                list.push({
                    SalesOfficeID: item.SalesOfficeID.toString(),
                    SalesOffice: item.SalesOffice,
                });
            }
            return list;
        }
    }

    app.AddService("SalesOfficeDDwpService", SalesOfficeDDwpService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUserNameDDwpService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetUserNamewp(data: any): Array<model.UserNamewpModel>;
    }
    export class UserNameDDwpService extends GCPL.Service.BaseService implements IUserNameDDwpService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"UserDDwp"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    SalesOfficeID: data
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetUserNamewp(data: any): Array<model.UserNamewpModel> {
            let list = Array<model.UserNamewpModel>();
            for (let item of data) {
                list.push({
                    UserID: item.UserID.toString(),
                    UserName: item.UserName,
                });
            }
            return list;
        }
    }

    app.AddService("UserNameDDwpService", UserNameDDwpService);
}

//OpportunityType  dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOpportunityTypeddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetOppTypeName(data: any): Array<model.OppTypeddlModel>;
    }
    export class OpportunityTypeddService extends GCPL.Service.BaseService implements IOpportunityTypeddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OpportunityTypeModel"}`;
        }


        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetOppTypeName(data: any): Array<model.OppTypeddlModel> {
            debugger;
            let list = Array<model.OppTypeddlModel>();
            for (let item of data) {
                list.push({

                    ID: item.ID.toString(),
                    OpportunityType: item.OpportunityType,
                });
            }
            return list;
        }
    }

    app.AddService("OpportunityTypeddService", OpportunityTypeddService);
}

