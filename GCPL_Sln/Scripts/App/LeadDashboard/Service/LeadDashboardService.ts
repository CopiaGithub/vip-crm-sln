//State with region dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IStateRegionDDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetStateName(data: any): Array<model.StateddlModel>;
    }
    export class StateRegionDDService extends GCPL.Service.BaseService implements IStateRegionDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"StateDD1"}`;

        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Region;

            if (data == undefined) {
                Region = '';
            }
            else {

                Region = data
            }
            let config = {
                params: {
                    RegionID: Region
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetStateName(data: any): Array<model.StateddlModel> {
            let list = Array<model.StateddlModel>();
            for (let item of data) {
                list.push({
                    StateID: item.StateID.toString(),
                    State: item.State,
                });
            }
            return list;
        }
    }

    app.AddService("StateRegionDDService", StateRegionDDService);
}
//sales rep dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesRepddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesRep(data: any): Array<model.UserNamewpModel>;
    }
    export class SalesRepddService extends GCPL.Service.BaseService implements ISalesRepddService {

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

        GetSalesRep(data: any): Array<model.UserNamewpModel> {
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

    app.AddService("SalesRepddService", SalesRepddService);
}
//snapshot count
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITodaysSnapshotService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetSnapshot(data: any): model.LeadSnapshotModel;

    }
    export class TodaysSnapshotService extends GCPL.Service.BaseService implements ITodaysSnapshotService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadDashboard"}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
          
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
        GetSnapshot(data: any): model.LeadSnapshotModel {
            console.log(data);
            let obj = new model.LeadSnapshotModel();
            {
                obj.Allocated = data.Allocated;
                obj.Created = data.Created;
                obj.Converted = data.Converted;
                
            }
            return obj;
        }


    }
    app.AddService("TodaysSnapshotService", TodaysSnapshotService);
}
//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadDashboardListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        Getlist(data: any): Array<model.LeadDashListModel>;
        FindData(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetlistData(data: any): Array<model.LeadDashSearchDataModel>;

    }
    export class LeadDashboardListService extends GCPL.Service.BaseService implements ILeadDashboardListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']
                   
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        Getlist(data: any): Array<model.LeadDashListModel> {
            let list = Array<model.LeadDashListModel>();

            for (let item of data) {
                list.push({

                    LeadID: item.LeadID,
                    ChannelID: item.ChannelID,
                    Channel: item.Channel,
                    LeadSourceID: item.LeadSourceID,
                    LeadSource: item.LeadSource,
                    SalesOfficeID: item.SalesOfficeID,
                    SalesOffice: item.SalesOffice,
                    ZoneID: item.ZoneID,
                    ZoneName: item.ZoneName,
                    RegionID: item.RegionID,
                    Region: item.Region,
                    ModelID: item.ModelID,
                    ModelNo: item.ModelNo,
                    ProductID: item.ProductID,
                    Product: item.Product,
                    DivisionID: item.DivisionID,
                    Division: item.Division,
                    UserID: item.UserID,
                    SalesRep: item.SalesRep,
                    LeadType: item.LeadType,
                    LeadTypeDesc: item.LeadTypeDesc,
                    LeadStatusID: item.LeadStatusID,
                    Status: item.Status,
                    LeadCount: item.LeadCount,
                    LeadPer: item.LeadPer,
                    StateID: item.StateID,
                    DistrictID: item.DistrictID
                });
            }
            return list;
        }

        FindData(data: any): ng.IPromise<Utility.Ajax.IResponse> {
           
            var url = this.apiUrl + "/LeadDashboardListData";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate;
            var ChkRegion;
            var ChkZone;
            var ChkDivision;
            var ChkProduct;
            var ChkModel;
            var ChkChannel;
            var ChkLeadSource;
            var ChkLeadType;
            var ChkSalesOffice;
            var ChkSalesRep;
            var ChkStatus;

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            if (data.ChkRegion == '') {
                ChkRegion = '';
            }
            else {
                ChkRegion = data.ChkRegion;
            }
            if (data.ChkZone == '') {
                ChkZone = '';
            }
            else {
                ChkZone = data.ChkZone;
            }
            if (data.ChkDivision == '') {
                ChkDivision = '';
            }
            else {
                ChkDivision = data.ChkDivision;
            }
            if (data.ChkProduct == '') {
                ChkProduct = '';
            }
            else {
                ChkProduct = data.ChkProduct;
            }
            if (data.ChkModel == '') {
                ChkModel = '';
            }
            else {
                ChkModel = data.ChkModel;
            }
            if (data.ChkChannel == '') {
                ChkChannel = '';
            }
            else {
                ChkChannel = data.ChkChannel;
            }
            if (data.ChkLeadSource == '') {
                ChkLeadSource = '';
            }
            else {
                ChkLeadSource = data.ChkLeadSource;
            }
            if (data.ChkLeadType == '') {
                ChkLeadType = '';
            }
            else {
                ChkLeadType = data.ChkLeadType;
            }
            if (data.ChkSalesOffice == '') {
                ChkSalesOffice = '';
            }
            else {
                ChkSalesOffice = data.ChkSalesOffice;
            }
            if (data.ChkSalesRep == '') {
                ChkSalesRep = '';
            }
            else {
                ChkSalesRep = data.ChkSalesRep;
            }
            if (data.ChkStatus == '') {
                ChkStatus = '';
            }
            else {
                ChkStatus = data.ChkStatus;
            }

            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadTypeDesc: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID'],
                    ChkRegion: ChkRegion,
                    ChkZone: ChkZone,
                    ChkDivision: ChkDivision,
                    ChkProduct: ChkProduct,
                    ChkModel: ChkModel,
                    ChkChannel: ChkChannel,
                    ChkLeadSource: ChkLeadSource,
                    ChkLeadType: ChkLeadType,
                    ChkSalesOffice: ChkSalesOffice,
                    ChkSalesRep: ChkSalesRep,
                    ChkStatus: ChkStatus
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetlistData(data: any): Array<model.LeadDashSearchDataModel> {
            
            let list = Array<model.LeadDashSearchDataModel>();

            for (let item of data) {
                list.push({
                    FromDate: item.FromDate,
                    ToDate: item.ToDate,
                    Division: item.Division,
                    Product: item.Product,
                    Status: item.Status,
                    ModelNo: item.ModelNo,
                    LeadTypeDesc: item.LeadTypeDesc,
                    Region: item.Region,
                    State: item.State,
                    District: item.District,
                    Channel: item.Channel,
                    LeadSource: item.LeadSource,
                    ZoneName: item.ZoneName,
                    SalesOffice: item.SalesOffice,
                    SalesRep: item.SalesRep,
                    RoleID: item.RoleID,
                    UserID: item.UserID,
                    ChkRegion: item.ChkRegion,
                    ChkZone: item.ChkZone,
                    ChkDivision: item.ChkDivision,
                    ChkProduct: item.ChkProduct,
                    ChkModel: item.ChkModel,
                    ChkChannel: item.ChkChannel,
                    ChkLeadSource: item.ChkLeadSource,
                    ChkLeadType: item.ChkLeadType,
                    ChkSalesOffice: item.ChkSalesOffice,
                    ChkSalesRep: item.ChkSalesRep,
                    ChkStatus: item.ChkStatus,
                    LeadCount: item.LeadCount,
                    LeadPer: item.LeadPer
                });
            }
            return list;
        }

    }
    app.AddService("LeadDashboardListService", LeadDashboardListService);
}

//division piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDivisionPiechartListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDivisionPie(data: any): Array<model.StatePieModel>;

    }
    export class DivisionPiechartListService extends GCPL.Service.BaseService implements IDivisionPiechartListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DivisionPiechart"}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetDivisionPie(data: any): Array<model.StatePieModel> {
            console.log(data);
            let list = Array<model.StatePieModel>();
            for (let item of data) {
                list.push({


                    Label: item.Division,
                    Value: item.LeadCount,
                    Color: item.ColorName
                });
            }

            return list;
        }


    }
    app.AddService("DivisionPiechartListService", DivisionPiechartListService);
}

//region piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IRegionPiechartListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetRegionPie(data: any): Array<model.StatePieModel>;

    }
    export class RegionPiechartListService extends GCPL.Service.BaseService implements IRegionPiechartListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"RegionPiechart"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetRegionPie(data: any): Array<model.StatePieModel> {
            console.log(data);
            let list = Array<model.StatePieModel>();
            for (let item of data) {
                list.push({

                    Label: item.Region,
                    Value: item.LeadCount,
                    Color: item.ColorName

                });
            }

            return list;
        }


    }
    app.AddService("RegionPiechartListService", RegionPiechartListService);
}

//zone piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IZonePiechartListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetZonePie(data: any): Array<model.StatePieModel>;

    }
    export class ZonePiechartListService extends GCPL.Service.BaseService implements IZonePiechartListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ZonePiechart"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetZonePie(data: any): Array<model.StatePieModel> {
            console.log(data);
            let list = Array<model.StatePieModel>();
            for (let item of data) {
                list.push({

                    Label: item.Zone,
                    Value: item.LeadCount,
                    Color: item.ColorName

                });
            }

            return list;
        }


    }
    app.AddService("ZonePiechartListService", ZonePiechartListService);
}

//product piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductPiechartListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetProductPie(data: any): Array<model.StatePieModel>;

    }
    export class ProductPiechartListService extends GCPL.Service.BaseService implements IProductPiechartListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ProductPiechart"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetProductPie(data: any): Array<model.StatePieModel> {
            console.log(data);
            let list = Array<model.StatePieModel>();
            for (let item of data) {
                list.push({

                    Label: item.Product,
                    Value: item.LeadCount,
                    Color: item.ColorName

                });
            }

            return list;
        }


    }
    app.AddService("ProductPiechartListService", ProductPiechartListService);
}

//channel piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IChannelPieListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetChannelPie(data: any): Array<model.ChannelPie1Model>;

    }
    export class ChannelPieListService extends GCPL.Service.BaseService implements IChannelPieListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ChannelPiechart1"}`;
            this.Cookie = _cookieStore;
        } Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
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
    app.AddService("ChannelPieListService", ChannelPieListService);
}

//source1 piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISourcePieListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSourcePie(data: any): Array<model.ChannelPie1Model>;

    }
    export class SourcePieListService extends GCPL.Service.BaseService implements ISourcePieListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadSourcePiechart1"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
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
    app.AddService("SourcePieListService", SourcePieListService);
}

//state piechart 
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IStatePieListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetStatePie(data: any): Array<model.StatePieModel>;

    }
    export class StatePieListService extends GCPL.Service.BaseService implements IStatePieListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"StatePiechart"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetStatePie(data: any): Array<model.StatePieModel> {
            console.log(data);
            let list = Array<model.StatePieModel>();
            for (let item of data) {
                list.push({


                    Label: item.State,
                    Value: item.LeadCount,
                    Color: item.ColorName
                });
            }

            return list;
        }


    }
    app.AddService("StatePieListService", StatePieListService);
}

//SalesOffice piechart
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesOfficePieListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesOffPie(data: any): Array<model.StatePieModel>;

    }
    export class SalesOfficePieListService extends GCPL.Service.BaseService implements ISalesOfficePieListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SalesOfficePiechart"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSalesOffPie(data: any): Array<model.StatePieModel> {
            console.log(data);
            let list = Array<model.StatePieModel>();
            for (let item of data) {
                list.push({


                    Label: item.SalesOffice,
                    Value: item.LeadCount,
                    Color: item.ColorName
                });
            }

            return list;
        }


    }
    app.AddService("SalesOfficePieListService", SalesOfficePieListService);
}

//SalesRep piechart
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ISalesRepPieListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSalesRepPie(data: any): Array<model.StatePieModel>;

    }
    export class SalesRepPieListService extends GCPL.Service.BaseService implements ISalesRepPieListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"SalesRepPiechart"}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/LeadDashboardList";
            var DivisionID;
            var Status;
            var ProductID;
            var ModelID;
            var LeadTypeID;
            var Region;
            var State;
            var District;
            var Channel;
            var LeadSource;
            var Zone;
            var SalesOffice;
            var SalesRep;
            var FromDate;
            var ToDate

            

            if (data.DivisionID == undefined) {
                DivisionID = '';
            }
            else {
                DivisionID = data.DivisionID;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ProductID == undefined) {
                ProductID = '';
            }
            else {
                ProductID = data.ProductID;

            }
            if (data.ModelID == undefined) {
                ModelID = '';
            }
            else {
                ModelID = data.ModelID;

            }
            if (data.LeadTypeID == undefined) {
                LeadTypeID = '';
            }
            else {
                LeadTypeID = data.LeadTypeID;

            }
            if (data.Region == undefined) {
                Region = '';
            }
            else {
                Region = data.Region;

            }
            if (data.State == undefined) {
                State = '';
            }
            else {
                State = data.State;

            }

            if (data.District == undefined) {
                District = '';
            }
            else {
                District = data.District;

            }
            if (data.Channel == undefined) {
                Channel = '';
            }
            else {
                Channel = data.Channel;

            }
            if (data.LeadSource == undefined) {
                LeadSource = '';
            }
            else {
                LeadSource = data.LeadSource;

            }
            if (data.Zone == undefined) {
                Zone = '';
            }
            else {
                Zone = data.Zone;

            }
            if (data.SalesOffice == undefined) {
                SalesOffice = '';
            }
            else {
                SalesOffice = data.SalesOffice;

            }
            if (data.SalesRep == undefined) {
                SalesRep = '';
            }
            else {
                SalesRep = data.SalesRep;

            }
            if (data.FromDate == undefined) {
                FromDate = '';
            }
            else {
                FromDate = data.FromDate;

            }
            if (data.ToDate == undefined) {
                ToDate = '';
            }
            else {
                ToDate = data.ToDate;

            }
            let config = {
                params: {
                    Division: DivisionID,
                    Status: Status,
                    Product: ProductID,
                    Model: ModelID,
                    LeadType: LeadTypeID,
                    Region: Region,
                    State: State,
                    District: District,
                    Channel: Channel,
                    LeadSource: LeadSource,
                    Zone: Zone,
                    SalesOffice: SalesOffice,
                    SalesRep: SalesRep,
                    FromDate: FromDate,
                    ToDate: ToDate,
                    RoleID: this.Cookie.get('UserInfo')['RoleID'],
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSalesRepPie(data: any): Array<model.StatePieModel> {
            console.log(data);
            let list = Array<model.StatePieModel>();
            for (let item of data) {
                list.push({


                    Label: item.SalesPer,
                    Value: item.LeadCount,
                    Color: item.ColorName
                });
            }

            return list;
        }


    }
    app.AddService("SalesRepPieListService", SalesRepPieListService);
}