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
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ManagerLeadsCountService = /** @class */ (function (_super) {
            __extends(ManagerLeadsCountService, _super);
            function ManagerLeadsCountService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "TeamDashboard";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ManagerLeadsCountService.prototype.FindGrid = function () {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                //var url = this.apiUrl + "HomeDashboard";
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ManagerLeadsCountService.prototype.GetLeadsCountGrid = function (data) {
                console.log(data);
                var list = new model.LeadCountModel();
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
            };
            ManagerLeadsCountService.$inject = ["$http", "$q", "$cookieStore"];
            return ManagerLeadsCountService;
        }(GCPL.Service.BaseService));
        Service.ManagerLeadsCountService = ManagerLeadsCountService;
        app.AddService("ManagerLeadsCountService", ManagerLeadsCountService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ManagerOpportunityCountService = /** @class */ (function (_super) {
            __extends(ManagerOpportunityCountService, _super);
            function ManagerOpportunityCountService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "TeamOpportunityDashboard";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ManagerOpportunityCountService.prototype.FindGrid = function () {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                //var url = this.apiUrl + "HomeDashboard";
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ManagerOpportunityCountService.prototype.GetOpportunityCountGrid = function (data) {
                console.log(data);
                var list = new model.OpportunityCountModel();
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
            };
            ManagerOpportunityCountService.$inject = ["$http", "$q", "$cookieStore"];
            return ManagerOpportunityCountService;
        }(GCPL.Service.BaseService));
        Service.ManagerOpportunityCountService = ManagerOpportunityCountService;
        app.AddService("ManagerOpportunityCountService", ManagerOpportunityCountService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ManagerLeadDelayedListService = /** @class */ (function (_super) {
            __extends(ManagerLeadDelayedListService, _super);
            function ManagerLeadDelayedListService($http, $q, _cookieStore) {
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
            ManagerLeadDelayedListService.prototype.Find = function () {
                var url = this.apiUrl + "/DelayedLeadDetails";
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ManagerLeadDelayedListService.prototype.GetDelayList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
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
            };
            ManagerLeadDelayedListService.$inject = ["$http", "$q", "$cookieStore"];
            return ManagerLeadDelayedListService;
        }(GCPL.Service.BaseService));
        Service.ManagerLeadDelayedListService = ManagerLeadDelayedListService;
        app.AddService("ManagerLeadDelayedListService", ManagerLeadDelayedListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ManagerTopOpportunityListService = /** @class */ (function (_super) {
            __extends(ManagerTopOpportunityListService, _super);
            function ManagerTopOpportunityListService($http, $q, _cookieStore) {
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
            ManagerTopOpportunityListService.prototype.Find = function () {
                var url = this.apiUrl + "/OpportunityDetails";
                var config = {
                    params: {
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ManagerTopOpportunityListService.prototype.GetOppList = function (data) {
                var list = Array();
                var expdate = "";
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
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
            };
            ManagerTopOpportunityListService.$inject = ["$http", "$q", "$cookieStore"];
            return ManagerTopOpportunityListService;
        }(GCPL.Service.BaseService));
        Service.ManagerTopOpportunityListService = ManagerTopOpportunityListService;
        app.AddService("ManagerTopOpportunityListService", ManagerTopOpportunityListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ChannelPiechartListManagerService = /** @class */ (function (_super) {
            __extends(ChannelPiechartListManagerService, _super);
            function ChannelPiechartListManagerService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ChannelPiechartTeam";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ChannelPiechartListManagerService.prototype.Find = function (data) {
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
                    LeadType = data.LeadType;
                }
                if (data.Division == undefined) {
                    Division = '';
                }
                else {
                    Division = data.Division;
                }
                if (data.Model == undefined) {
                    Model = '';
                }
                else {
                    Model = data.Model;
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
                });
            };
            ChannelPiechartListManagerService.prototype.GetChannelPie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        Sales: item.Sales,
                        Marketing: item.Marketing
                    });
                }
                return list;
            };
            ChannelPiechartListManagerService.$inject = ["$http", "$q", "$cookieStore"];
            return ChannelPiechartListManagerService;
        }(GCPL.Service.BaseService));
        Service.ChannelPiechartListManagerService = ChannelPiechartListManagerService;
        app.AddService("ChannelPiechartListManagerService", ChannelPiechartListManagerService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SourcePiechartListManagerService = /** @class */ (function (_super) {
            __extends(SourcePiechartListManagerService, _super);
            function SourcePiechartListManagerService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadSourcePiechartTeam";
                _this.Cookie = _cookieStore;
                return _this;
            }
            SourcePiechartListManagerService.prototype.Find = function (data) {
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
                    LeadType = data.LeadType;
                }
                if (data.Division == undefined) {
                    Division = '';
                }
                else {
                    Division = data.Division;
                }
                if (data.Model == undefined) {
                    Model = '';
                }
                else {
                    Model = data.Model;
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
                });
            };
            SourcePiechartListManagerService.prototype.GetSourcePie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
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
            };
            SourcePiechartListManagerService.$inject = ["$http", "$q", "$cookieStore"];
            return SourcePiechartListManagerService;
        }(GCPL.Service.BaseService));
        Service.SourcePiechartListManagerService = SourcePiechartListManagerService;
        app.AddService("SourcePiechartListManagerService", SourcePiechartListManagerService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ManagerDashboardService.js.map