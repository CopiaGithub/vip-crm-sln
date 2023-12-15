var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//State with region dd
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var StateRegionDDService = /** @class */ (function (_super) {
            __extends(StateRegionDDService, _super);
            function StateRegionDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "StateDD1";
                return _this;
            }
            StateRegionDDService.prototype.Find = function (data) {
                var Region;
                if (data == undefined) {
                    Region = '';
                }
                else {
                    Region = data;
                }
                var config = {
                    params: {
                        RegionID: Region
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            StateRegionDDService.prototype.GetStateName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        StateID: item.StateID.toString(),
                        State: item.State,
                    });
                }
                return list;
            };
            StateRegionDDService.$inject = ["$http", "$q"];
            return StateRegionDDService;
        }(GCPL.Service.BaseService));
        Service.StateRegionDDService = StateRegionDDService;
        app.AddService("StateRegionDDService", StateRegionDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//sales rep dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesRepddService = /** @class */ (function (_super) {
            __extends(SalesRepddService, _super);
            function SalesRepddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "UsernameDD";
                return _this;
            }
            SalesRepddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesRepddService.prototype.GetSalesRep = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        UserID: item.UserID.toString(),
                        UserName: item.UserName,
                    });
                }
                return list;
            };
            SalesRepddService.$inject = ["$http", "$q"];
            return SalesRepddService;
        }(GCPL.Service.BaseService));
        Service.SalesRepddService = SalesRepddService;
        app.AddService("SalesRepddService", SalesRepddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//snapshot count
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var TodaysSnapshotService = /** @class */ (function (_super) {
            __extends(TodaysSnapshotService, _super);
            function TodaysSnapshotService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadDashboard";
                _this.Cookie = _cookieStore;
                return _this;
            }
            TodaysSnapshotService.prototype.Find = function () {
                var config = {
                    params: {
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            TodaysSnapshotService.prototype.GetSnapshot = function (data) {
                console.log(data);
                var obj = new model.LeadSnapshotModel();
                {
                    obj.Allocated = data.Allocated;
                    obj.Created = data.Created;
                    obj.Converted = data.Converted;
                }
                return obj;
            };
            TodaysSnapshotService.$inject = ["$http", "$q", "$cookieStore"];
            return TodaysSnapshotService;
        }(GCPL.Service.BaseService));
        Service.TodaysSnapshotService = TodaysSnapshotService;
        app.AddService("TodaysSnapshotService", TodaysSnapshotService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//List
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadDashboardListService = /** @class */ (function (_super) {
            __extends(LeadDashboardListService, _super);
            function LeadDashboardListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = "" + _this.url;
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadDashboardListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            LeadDashboardListService.prototype.Getlist = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
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
            };
            LeadDashboardListService.prototype.FindData = function (data) {
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
                var config = {
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
            };
            LeadDashboardListService.prototype.GetlistData = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
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
            };
            LeadDashboardListService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadDashboardListService;
        }(GCPL.Service.BaseService));
        Service.LeadDashboardListService = LeadDashboardListService;
        app.AddService("LeadDashboardListService", LeadDashboardListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//division piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DivisionPiechartListService = /** @class */ (function (_super) {
            __extends(DivisionPiechartListService, _super);
            function DivisionPiechartListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "DivisionPiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            DivisionPiechartListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            DivisionPiechartListService.prototype.GetDivisionPie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        Label: item.Division,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            DivisionPiechartListService.$inject = ["$http", "$q", "$cookieStore"];
            return DivisionPiechartListService;
        }(GCPL.Service.BaseService));
        Service.DivisionPiechartListService = DivisionPiechartListService;
        app.AddService("DivisionPiechartListService", DivisionPiechartListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//region piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var RegionPiechartListService = /** @class */ (function (_super) {
            __extends(RegionPiechartListService, _super);
            function RegionPiechartListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "RegionPiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            RegionPiechartListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            RegionPiechartListService.prototype.GetRegionPie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        Label: item.Region,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            RegionPiechartListService.$inject = ["$http", "$q", "$cookieStore"];
            return RegionPiechartListService;
        }(GCPL.Service.BaseService));
        Service.RegionPiechartListService = RegionPiechartListService;
        app.AddService("RegionPiechartListService", RegionPiechartListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//zone piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ZonePiechartListService = /** @class */ (function (_super) {
            __extends(ZonePiechartListService, _super);
            function ZonePiechartListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ZonePiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ZonePiechartListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            ZonePiechartListService.prototype.GetZonePie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        Label: item.Zone,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            ZonePiechartListService.$inject = ["$http", "$q", "$cookieStore"];
            return ZonePiechartListService;
        }(GCPL.Service.BaseService));
        Service.ZonePiechartListService = ZonePiechartListService;
        app.AddService("ZonePiechartListService", ZonePiechartListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//product piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProductPiechartListService = /** @class */ (function (_super) {
            __extends(ProductPiechartListService, _super);
            function ProductPiechartListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ProductPiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ProductPiechartListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            ProductPiechartListService.prototype.GetProductPie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    list.push({
                        Label: item.Product,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            ProductPiechartListService.$inject = ["$http", "$q", "$cookieStore"];
            return ProductPiechartListService;
        }(GCPL.Service.BaseService));
        Service.ProductPiechartListService = ProductPiechartListService;
        app.AddService("ProductPiechartListService", ProductPiechartListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//channel piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ChannelPieListService = /** @class */ (function (_super) {
            __extends(ChannelPieListService, _super);
            function ChannelPieListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ChannelPiechart1";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ChannelPieListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            ChannelPieListService.prototype.GetChannelPie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                    var item = data_9[_i];
                    list.push({
                        Label: item.Channel,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            ChannelPieListService.$inject = ["$http", "$q", "$cookieStore"];
            return ChannelPieListService;
        }(GCPL.Service.BaseService));
        Service.ChannelPieListService = ChannelPieListService;
        app.AddService("ChannelPieListService", ChannelPieListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//source1 piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SourcePieListService = /** @class */ (function (_super) {
            __extends(SourcePieListService, _super);
            function SourcePieListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadSourcePiechart1";
                _this.Cookie = _cookieStore;
                return _this;
            }
            SourcePieListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            SourcePieListService.prototype.GetSourcePie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_10 = data; _i < data_10.length; _i++) {
                    var item = data_10[_i];
                    list.push({
                        Label: item.LeadSource,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            SourcePieListService.$inject = ["$http", "$q", "$cookieStore"];
            return SourcePieListService;
        }(GCPL.Service.BaseService));
        Service.SourcePieListService = SourcePieListService;
        app.AddService("SourcePieListService", SourcePieListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//state piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var StatePieListService = /** @class */ (function (_super) {
            __extends(StatePieListService, _super);
            function StatePieListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "StatePiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            StatePieListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            StatePieListService.prototype.GetStatePie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_11 = data; _i < data_11.length; _i++) {
                    var item = data_11[_i];
                    list.push({
                        Label: item.State,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            StatePieListService.$inject = ["$http", "$q", "$cookieStore"];
            return StatePieListService;
        }(GCPL.Service.BaseService));
        Service.StatePieListService = StatePieListService;
        app.AddService("StatePieListService", StatePieListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//SalesOffice piechart
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesOfficePieListService = /** @class */ (function (_super) {
            __extends(SalesOfficePieListService, _super);
            function SalesOfficePieListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "SalesOfficePiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            SalesOfficePieListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            SalesOfficePieListService.prototype.GetSalesOffPie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_12 = data; _i < data_12.length; _i++) {
                    var item = data_12[_i];
                    list.push({
                        Label: item.SalesOffice,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            SalesOfficePieListService.$inject = ["$http", "$q", "$cookieStore"];
            return SalesOfficePieListService;
        }(GCPL.Service.BaseService));
        Service.SalesOfficePieListService = SalesOfficePieListService;
        app.AddService("SalesOfficePieListService", SalesOfficePieListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//SalesRep piechart
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesRepPieListService = /** @class */ (function (_super) {
            __extends(SalesRepPieListService, _super);
            function SalesRepPieListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "SalesRepPiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            SalesRepPieListService.prototype.Find = function (data) {
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
                var ToDate;
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
                var config = {
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
            };
            SalesRepPieListService.prototype.GetSalesRepPie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_13 = data; _i < data_13.length; _i++) {
                    var item = data_13[_i];
                    list.push({
                        Label: item.SalesPer,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            SalesRepPieListService.$inject = ["$http", "$q", "$cookieStore"];
            return SalesRepPieListService;
        }(GCPL.Service.BaseService));
        Service.SalesRepPieListService = SalesRepPieListService;
        app.AddService("SalesRepPieListService", SalesRepPieListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadDashboardService.js.map