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
        var WinLossReportGridService = /** @class */ (function (_super) {
            __extends(WinLossReportGridService, _super);
            function WinLossReportGridService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/";
                _this.Cookie = _cookieStore;
                return _this;
            }
            WinLossReportGridService.prototype.FindGrid = function (data) {
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
                    State = data.State;
                }
                if (data.District == undefined) {
                    District = '';
                }
                else {
                    District = data.District;
                }
                if (data.Zone == undefined) {
                    Zone = '';
                }
                else {
                    Zone = data.Zone;
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
                if (data.SalesOffice == undefined) {
                    SalesOffice = '';
                }
                else {
                    SalesOffice = data.SalesOffice;
                }
                if (data.Salesrep == undefined) {
                    Salesrep = '';
                }
                else {
                    Salesrep = data.Salesrep;
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
                if (data.DivisionID == undefined) {
                    DivisionID = '';
                }
                else {
                    DivisionID = data.DivisionID;
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
                var config = {
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
            };
            WinLossReportGridService.prototype.GetWinLossGrid = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
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
            };
            WinLossReportGridService.$inject = ["$http", "$q", "$cookieStore"];
            return WinLossReportGridService;
        }(GCPL.Service.BaseService));
        Service.WinLossReportGridService = WinLossReportGridService;
        app.AddService("WinLossReportGridService", WinLossReportGridService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UserddService = /** @class */ (function (_super) {
            __extends(UserddService, _super);
            function UserddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "UsernameDD";
                return _this;
            }
            UserddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            UserddService.prototype.GetUserDD = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        UserID: item.UserID,
                        UserName: item.UserName,
                    });
                }
                return list;
            };
            UserddService.$inject = ["$http", "$q"];
            return UserddService;
        }(GCPL.Service.BaseService));
        Service.UserddService = UserddService;
        app.AddService("UserddService", UserddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadSourceddWPService = /** @class */ (function (_super) {
            __extends(LeadSourceddWPService, _super);
            function LeadSourceddWPService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadSourceddl";
                return _this;
            }
            LeadSourceddWPService.prototype.Find = function (data) {
                var ChannelID;
                if (data == undefined) {
                    ChannelID = "";
                }
                else {
                    ChannelID = data;
                }
                var config = {
                    params: {
                        ChannelID: ChannelID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadSourceddWPService.prototype.GetLeadSourceDD = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        LeadSourceID: item.LeadSourceID.toString(),
                        LeadSource: item.LeadSource,
                    });
                }
                return list;
            };
            LeadSourceddWPService.$inject = ["$http", "$q"];
            return LeadSourceddWPService;
        }(GCPL.Service.BaseService));
        Service.LeadSourceddWPService = LeadSourceddWPService;
        app.AddService("LeadSourceddWPService", LeadSourceddWPService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SalesOfficeDDwpService = /** @class */ (function (_super) {
            __extends(SalesOfficeDDwpService, _super);
            function SalesOfficeDDwpService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "SalesOfficeDDwp";
                return _this;
            }
            SalesOfficeDDwpService.prototype.Find = function (data) {
                var config = {
                    params: {
                        ZoneID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SalesOfficeDDwpService.prototype.GetSalesOfficewp = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        SalesOfficeID: item.SalesOfficeID.toString(),
                        SalesOffice: item.SalesOffice,
                    });
                }
                return list;
            };
            SalesOfficeDDwpService.$inject = ["$http", "$q"];
            return SalesOfficeDDwpService;
        }(GCPL.Service.BaseService));
        Service.SalesOfficeDDwpService = SalesOfficeDDwpService;
        app.AddService("SalesOfficeDDwpService", SalesOfficeDDwpService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UserNameDDwpService = /** @class */ (function (_super) {
            __extends(UserNameDDwpService, _super);
            function UserNameDDwpService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "UserDDwp";
                return _this;
            }
            UserNameDDwpService.prototype.Find = function (data) {
                var config = {
                    params: {
                        SalesOfficeID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            UserNameDDwpService.prototype.GetUserNamewp = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        UserID: item.UserID.toString(),
                        UserName: item.UserName,
                    });
                }
                return list;
            };
            UserNameDDwpService.$inject = ["$http", "$q"];
            return UserNameDDwpService;
        }(GCPL.Service.BaseService));
        Service.UserNameDDwpService = UserNameDDwpService;
        app.AddService("UserNameDDwpService", UserNameDDwpService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//OpportunityType  dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var OpportunityTypeddService = /** @class */ (function (_super) {
            __extends(OpportunityTypeddService, _super);
            function OpportunityTypeddService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "OpportunityTypeModel";
                return _this;
            }
            OpportunityTypeddService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            OpportunityTypeddService.prototype.GetOppTypeName = function (data) {
                debugger;
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        ID: item.ID.toString(),
                        OpportunityType: item.OpportunityType,
                    });
                }
                return list;
            };
            OpportunityTypeddService.$inject = ["$http", "$q"];
            return OpportunityTypeddService;
        }(GCPL.Service.BaseService));
        Service.OpportunityTypeddService = OpportunityTypeddService;
        app.AddService("OpportunityTypeddService", OpportunityTypeddService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=WinLossHeatService.js.map