
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;


    export interface IBaseHomeService {

        Find(BusinessEntityID, RoleID): ng.IPromise<Utility.Ajax.IResponse>;
        Get(data: any): Array<model.IHomeModel>;

        
        FindFav(DealerID): ng.IPromise<Utility.Ajax.IResponse>;
        GetFav(data: any): Array<model.IHomeModel>;


        InsertTran(data: any): ng.IPromise<Utility.Ajax.IResponse>;

    }


    export class BaseHomeService extends GCPL.Service.BaseService implements IBaseHomeService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;

        }
        
        Find(BusinessEntityID, RoleID): ng.IPromise<Utility.Ajax.IResponse> {
            
            var BusinessEntityID;
            if (BusinessEntityID == undefined) {
                BusinessEntityID = '';
            } else {
                BusinessEntityID = BusinessEntityID;
            }
            let config = {
                params: {

                    BusinessEntityID: BusinessEntityID,
                    RoleID: RoleID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/CheckProduct",
                Config: config
            });
        }

        Get(data: any): Array<model.IHomeModel> {
            
            
            let list = new Array<model.IHomeModel>();
            for (let item of data) {
                list.push({

                    Title: item.Title,
                    IsIcon: item.IsIcon,
                    IsColor: item.IsColor,
                    PageUrl: item.PageUrl
                });
            }
            return list;
        }


        FindFav(DealerID): ng.IPromise<Utility.Ajax.IResponse> {
            
            let config = {
                params: {

                    DealerID: DealerID
                 
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl + "/FavouritTran",
                Config: config
            });
        }

        GetFav(data: any): Array<model.IHomeModel> {
            

            let list = new Array<model.IHomeModel>();
            for (let item of data) {
                list.push({

                    Title: item.Title,
                    IsIcon: item.IsIcon,
                    IsColor: item.IsColor,
                    PageUrl: item.PageUrl
                });
            }
            return list;
        }


        InsertTran(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl + "/RemoveFavouritTran";
            return this.ajaXUtility.Post({ Url: url, data: data });

        }

    }


    //inject service
    app.AddService("BaseHomeService", BaseHomeService);


}

//lead count
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadsCountService {

        FindGrid(): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadsCountGrid(data: any): model.LeadStatusModel;

    }
    export class LeadsCountService extends GCPL.Service.BaseService implements ILeadsCountService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"HomeDashboard"}`;
            this.Cookie = _cookieStore;
        }

        FindGrid(): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            //var url = this.apiUrl + "HomeDashboard";
           
            let config = {
                params: {
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetLeadsCountGrid(data: any): model.LeadStatusModel {
            console.log(data);
            let list = new model.LeadStatusModel();
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
    app.AddService("LeadsCountService", LeadsCountService);
}


//opportunity count
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOpportunityCountService {

        FindGrid(): ng.IPromise<Utility.Ajax.IResponse>;
        GetOppCountGrid(data: any): model.OppStatusModel;

    }
    export class OpportunityCountService extends GCPL.Service.BaseService implements IOpportunityCountService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OpportunityCount"}`;
            this.Cookie = _cookieStore;
        }

        FindGrid(): ng.IPromise<Utility.Ajax.IResponse> {
           

            let config = {
                params: {
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetOppCountGrid(data: any): model.OppStatusModel {
            console.log(data);
            let list = new model.OppStatusModel();
            {
                list.Identification= data.Identification;
                list.Qualification= data.Qualification;
                list.Development= data.Development;
                list.Proposal= data.Proposal;
                list.Won = data.Won;
                list.Lost = data.Lost;
                list.NoDeal = data.NoDeal;

            }
            return list;
        }


    }
    app.AddService("OpportunityCountService", OpportunityCountService);
}

//leaddelayedlist

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadDelayedListService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetDelayList(data: any): Array<model.LeadDelaylistModel>;

    }
    export class LeadDelayedListService extends GCPL.Service.BaseService implements ILeadDelayedListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/DelayedLeadList";
            
            let config = {
                params: {
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
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
    app.AddService("LeadDelayedListService", LeadDelayedListService);
}

//Top Opportunity list

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITopOpportunityListService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetOppList(data: any): Array<model.OpplistModel>;

    }
    export class TopOpportunityListService extends GCPL.Service.BaseService implements ITopOpportunityListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/TopOpportunityList";

            let config = {
                params: {
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetOppList(data: any): Array<model.OpplistModel> {
            let list = Array<model.OpplistModel>();

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
    app.AddService("TopOpportunityListService", TopOpportunityListService);
}

//channel piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IChannelPiechartListService {

        Find(data:any): ng.IPromise<Utility.Ajax.IResponse>;
        GetChannelPie(data: any): Array<model.ChannelPie1Model>;

    }
    export class ChannelPiechartListService extends GCPL.Service.BaseService implements IChannelPiechartListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ChannelPiechart"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            //var url = this.apiUrl + "HomeDashboard";           
            var LeadTypeID;
            var DivisionID;
            var ModelID;
            var ProductID;
            var FromDate;
            var ToDate;

            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {

                LeadTypeID = data.LeadTypeID
            }
            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {

                DivisionID = data.DivisionID
            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {

                ModelID = data.ModelID
            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {

                ProductID = data.ProductID
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
                    LeadType: LeadTypeID,
                    Division: DivisionID,
                    Model: ModelID,
                    Product: ProductID,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetChannelPie(data: any): Array<model.ChannelPie1Model> {
            console.log(data);
            let list = Array<model.ChannelPie1Model>();
            for (let item of data) {
                list.push({

                    Label: item.Channel,
                    Value: item.LeadCount,
                    Color: item.ColorName
                });
            }

            return list;
        }


    }
    app.AddService("ChannelPiechartListService", ChannelPiechartListService);
}

//source piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISourcePiechartListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSourcePie(data: any): Array<model.ChannelPie1Model>;

    }
    export class SourcePiechartListService extends GCPL.Service.BaseService implements ISourcePiechartListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadSourcePiechart"}`;
            this.Cookie = _cookieStore;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
            //var url = this.apiUrl + "HomeDashboard";           
            var LeadTypeID;
            var DivisionID;
            var ModelID;
            var ProductID;
            var FromDate;
            var ToDate;

            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {

                LeadTypeID = data.LeadTypeID
            }
            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {

                DivisionID = data.DivisionID
            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {

                ModelID = data.ModelID
            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {

                ProductID = data.ProductID
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
                    LeadType: LeadTypeID,
                    Division: DivisionID,
                    Model: ModelID,
                    Product: ProductID,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                }
            };

            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }
            );
        }
        GetSourcePie(data: any): Array<model.ChannelPie1Model> {
            console.log(data);
            let list = Array<model.ChannelPie1Model>();
            for (let item of data) {
                list.push({

                    Label: item.LeadSource,
                    Value: item.LeadCount,
                    Color: item.ColorName
                });
            }

            return list;
        }


    }
    app.AddService("SourcePiechartListService", SourcePiechartListService);
}