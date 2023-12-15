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
        var BaseHomeService = /** @class */ (function (_super) {
            __extends(BaseHomeService, _super);
            function BaseHomeService($http, $q, _cookieStore) {
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
            BaseHomeService.prototype.Find = function (BusinessEntityID, RoleID) {
                var BusinessEntityID;
                if (BusinessEntityID == undefined) {
                    BusinessEntityID = '';
                }
                else {
                    BusinessEntityID = BusinessEntityID;
                }
                var config = {
                    params: {
                        BusinessEntityID: BusinessEntityID,
                        RoleID: RoleID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/CheckProduct",
                    Config: config
                });
            };
            BaseHomeService.prototype.Get = function (data) {
                var list = new Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        Title: item.Title,
                        IsIcon: item.IsIcon,
                        IsColor: item.IsColor,
                        PageUrl: item.PageUrl
                    });
                }
                return list;
            };
            BaseHomeService.prototype.FindFav = function (DealerID) {
                var config = {
                    params: {
                        DealerID: DealerID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl + "/FavouritTran",
                    Config: config
                });
            };
            BaseHomeService.prototype.GetFav = function (data) {
                var list = new Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        Title: item.Title,
                        IsIcon: item.IsIcon,
                        IsColor: item.IsColor,
                        PageUrl: item.PageUrl
                    });
                }
                return list;
            };
            BaseHomeService.prototype.InsertTran = function (data) {
                var url = this.apiUrl + "/RemoveFavouritTran";
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            BaseHomeService.$inject = ["$http", "$q", "$cookieStore"];
            return BaseHomeService;
        }(GCPL.Service.BaseService));
        Service.BaseHomeService = BaseHomeService;
        //inject service
        app.AddService("BaseHomeService", BaseHomeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//lead count
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var LeadsCountService = /** @class */ (function (_super) {
            __extends(LeadsCountService, _super);
            function LeadsCountService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "HomeDashboard";
                _this.Cookie = _cookieStore;
                return _this;
            }
            LeadsCountService.prototype.FindGrid = function () {
                // FromDate: any, ToDate: any, SoNumber: any, ObjectTpe: any, CustName: any, Status: any
                //var url = this.apiUrl + "HomeDashboard";
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
            LeadsCountService.prototype.GetLeadsCountGrid = function (data) {
                console.log(data);
                var list = new model.LeadStatusModel();
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
            LeadsCountService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadsCountService;
        }(GCPL.Service.BaseService));
        Service.LeadsCountService = LeadsCountService;
        app.AddService("LeadsCountService", LeadsCountService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//opportunity count
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var OpportunityCountService = /** @class */ (function (_super) {
            __extends(OpportunityCountService, _super);
            function OpportunityCountService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "OpportunityCount";
                _this.Cookie = _cookieStore;
                return _this;
            }
            OpportunityCountService.prototype.FindGrid = function () {
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
            OpportunityCountService.prototype.GetOppCountGrid = function (data) {
                console.log(data);
                var list = new model.OppStatusModel();
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
            OpportunityCountService.$inject = ["$http", "$q", "$cookieStore"];
            return OpportunityCountService;
        }(GCPL.Service.BaseService));
        Service.OpportunityCountService = OpportunityCountService;
        app.AddService("OpportunityCountService", OpportunityCountService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//leaddelayedlist
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadDelayedListService = /** @class */ (function (_super) {
            __extends(LeadDelayedListService, _super);
            function LeadDelayedListService($http, $q, _cookieStore) {
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
            LeadDelayedListService.prototype.Find = function () {
                var url = this.apiUrl + "/DelayedLeadList";
                var config = {
                    params: {
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadDelayedListService.prototype.GetDelayList = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
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
            LeadDelayedListService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadDelayedListService;
        }(GCPL.Service.BaseService));
        Service.LeadDelayedListService = LeadDelayedListService;
        app.AddService("LeadDelayedListService", LeadDelayedListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Top Opportunity list
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var TopOpportunityListService = /** @class */ (function (_super) {
            __extends(TopOpportunityListService, _super);
            function TopOpportunityListService($http, $q, _cookieStore) {
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
            TopOpportunityListService.prototype.Find = function () {
                var url = this.apiUrl + "/TopOpportunityList";
                var config = {
                    params: {
                        RoleID: this.Cookie.get('UserInfo')['RoleID'],
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            TopOpportunityListService.prototype.GetOppList = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
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
            TopOpportunityListService.$inject = ["$http", "$q", "$cookieStore"];
            return TopOpportunityListService;
        }(GCPL.Service.BaseService));
        Service.TopOpportunityListService = TopOpportunityListService;
        app.AddService("TopOpportunityListService", TopOpportunityListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//channel piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ChannelPiechartListService = /** @class */ (function (_super) {
            __extends(ChannelPiechartListService, _super);
            function ChannelPiechartListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "ChannelPiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            ChannelPiechartListService.prototype.Find = function (data) {
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
                    LeadTypeID = data.LeadTypeID;
                }
                if (data.DivisionID == undefined) {
                    DivisionID = '';
                }
                else {
                    DivisionID = data.DivisionID;
                }
                if (data.ModelID == undefined) {
                    ModelID = '';
                }
                else {
                    ModelID = data.ModelID;
                }
                if (data.ProductID == undefined) {
                    ProductID = '';
                }
                else {
                    ProductID = data.ProductID;
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
                });
            };
            ChannelPiechartListService.prototype.GetChannelPie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        Label: item.Channel,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            ChannelPiechartListService.$inject = ["$http", "$q", "$cookieStore"];
            return ChannelPiechartListService;
        }(GCPL.Service.BaseService));
        Service.ChannelPiechartListService = ChannelPiechartListService;
        app.AddService("ChannelPiechartListService", ChannelPiechartListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//source piechart 
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SourcePiechartListService = /** @class */ (function (_super) {
            __extends(SourcePiechartListService, _super);
            function SourcePiechartListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadSourcePiechart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            SourcePiechartListService.prototype.Find = function (data) {
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
                    LeadTypeID = data.LeadTypeID;
                }
                if (data.DivisionID == undefined) {
                    DivisionID = '';
                }
                else {
                    DivisionID = data.DivisionID;
                }
                if (data.ModelID == undefined) {
                    ModelID = '';
                }
                else {
                    ModelID = data.ModelID;
                }
                if (data.ProductID == undefined) {
                    ProductID = '';
                }
                else {
                    ProductID = data.ProductID;
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
                });
            };
            SourcePiechartListService.prototype.GetSourcePie = function (data) {
                console.log(data);
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        Label: item.LeadSource,
                        Value: item.LeadCount,
                        Color: item.ColorName
                    });
                }
                return list;
            };
            SourcePiechartListService.$inject = ["$http", "$q", "$cookieStore"];
            return SourcePiechartListService;
        }(GCPL.Service.BaseService));
        Service.SourcePiechartListService = SourcePiechartListService;
        app.AddService("SourcePiechartListService", SourcePiechartListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=BaseHomeService.js.map