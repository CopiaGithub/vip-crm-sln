//List
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
        var LeadSummaryListService = /** @class */ (function (_super) {
            __extends(LeadSummaryListService, _super);
            function LeadSummaryListService($http, $q, _cookieStore) {
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
            LeadSummaryListService.prototype.Find = function () {
                var url = this.apiUrl + "/GetSummaryEmailsList";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadSummaryListService.prototype.GetLeadSummList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ID: item.ID,
                        ModelNo: item.ModelNo,
                        ZoneName: item.ZoneName,
                        EmailTO: item.EmailTO,
                        EmailCC: item.EmailCC,
                        Status: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            LeadSummaryListService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadSummaryListService;
        }(GCPL.Service.BaseService));
        Service.LeadSummaryListService = LeadSummaryListService;
        app.AddService("LeadSummaryListService", LeadSummaryListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadSummaryService = /** @class */ (function (_super) {
            __extends(InsertLeadSummaryService, _super);
            function InsertLeadSummaryService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "LeadSummaryEmails";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadSummaryService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadSummaryService.prototype.PostLeadSumm = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadSummaryService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadSummaryService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadSummaryService = InsertLeadSummaryService;
        app.AddService("InsertLeadSummaryService", InsertLeadSummaryService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var LeadSummEditService = /** @class */ (function (_super) {
            __extends(LeadSummEditService, _super);
            function LeadSummEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillSummaryEmailsList";
                return _this;
            }
            LeadSummEditService.prototype.Find = function (data) {
                var ID;
                debugger;
                if (data == undefined) {
                    ID = "";
                }
                else {
                    ID = data;
                }
                var config = {
                    params: {
                        ID: ID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadSummEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditLeadSummlistModel();
                obj.ID = data.ID,
                    obj.ModelNo = data.ModelNo,
                    obj.ZoneName = data.ZoneName,
                    obj.EmailTO = data.EmailTO,
                    obj.EmailCC = data.EmailCC,
                    obj.Status = data.Status,
                    obj.ModelID = data.ModelID,
                    obj.ZoneID = data.ZoneID;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            LeadSummEditService.$inject = ["$http", "$q"];
            return LeadSummEditService;
        }(GCPL.Service.BaseService));
        Service.LeadSummEditService = LeadSummEditService;
        app.AddService("LeadSummEditService", LeadSummEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Model dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ModelService = /** @class */ (function (_super) {
            __extends(ModelService, _super);
            function ModelService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "ModelDD1";
                return _this;
            }
            ModelService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            ModelService.prototype.GetModel = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        ModelID: item.ModelID.toString(),
                        ModelNo: item.ModelNo,
                    });
                }
                return list;
            };
            ModelService.$inject = ["$http", "$q"];
            return ModelService;
        }(GCPL.Service.BaseService));
        Service.ModelService = ModelService;
        app.AddService("ModelService", ModelService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadSummaryEmailsService.js.map