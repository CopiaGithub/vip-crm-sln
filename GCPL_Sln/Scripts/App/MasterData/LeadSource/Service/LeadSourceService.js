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
//Channel dropdown
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ChannelDDService = /** @class */ (function (_super) {
            __extends(ChannelDDService, _super);
            function ChannelDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ChannelDD";
                return _this;
            }
            ChannelDDService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            ChannelDDService.prototype.GetChannelDDnew = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ID: item.ID,
                        Channel: item.Channel
                    });
                }
                return list;
            };
            ChannelDDService.$inject = ["$http", "$q"];
            return ChannelDDService;
        }(GCPL.Service.BaseService));
        Service.ChannelDDService = ChannelDDService;
        app.AddService("ChannelDDService", ChannelDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Search
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadSourceListService = /** @class */ (function (_super) {
            __extends(LeadSourceListService, _super);
            function LeadSourceListService($http, $q, _cookieStore) {
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
            LeadSourceListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/LeadSource";
                var SearchText;
                var Status;
                var Channel;
                debugger;
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                if (data.Status == undefined) {
                    Status = '';
                }
                else {
                    Status = data.Status;
                }
                if (data.Channel == undefined) {
                    Channel = '';
                }
                else {
                    Channel = data.Channel;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        Status: Status,
                        Channel: Channel
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadSourceListService.prototype.GetLeadSourceListData = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        LeadSourceID: item.LeadSourceID,
                        LeadSource: item.LeadSource,
                        ChannelName: item.ChannelName,
                        Description: item.Description,
                        WhenEntered: item.WhenEntered,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            LeadSourceListService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadSourceListService;
        }(GCPL.Service.BaseService));
        Service.LeadSourceListService = LeadSourceListService;
        app.AddService("LeadSourceListService", LeadSourceListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadSourceService = /** @class */ (function (_super) {
            __extends(InsertLeadSourceService, _super);
            function InsertLeadSourceService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertLeadSource";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadSourceService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadSourceService.prototype.PostLeadSource = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadSourceService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadSourceService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadSourceService = InsertLeadSourceService;
        app.AddService("InsertLeadSourceService", InsertLeadSourceService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var LeadSourceEditService = /** @class */ (function (_super) {
            __extends(LeadSourceEditService, _super);
            function LeadSourceEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillLeadSource";
                return _this;
            }
            LeadSourceEditService.prototype.Find = function (data) {
                var LeadSourceID;
                debugger;
                if (data == undefined) {
                    LeadSourceID = "";
                }
                else {
                    LeadSourceID = data;
                }
                var config = {
                    params: {
                        LeadSourceID: LeadSourceID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadSourceEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditLeadSourceModel();
                obj.LeadSourceID = data.LeadSourceID,
                    obj.LeadSource = data.LeadSource,
                    obj.ID = data.ChannelID,
                    obj.Description = data.Description,
                    obj.Status = data.Status;
                return obj;
            };
            LeadSourceEditService.$inject = ["$http", "$q"];
            return LeadSourceEditService;
        }(GCPL.Service.BaseService));
        Service.LeadSourceEditService = LeadSourceEditService;
        app.AddService("LeadSourceEditService", LeadSourceEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadSourceService.js.map