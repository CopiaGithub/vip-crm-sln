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
//LeadSource dropdown
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadSourceDDService = /** @class */ (function (_super) {
            __extends(LeadSourceDDService, _super);
            function LeadSourceDDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "LeadSourceDD";
                return _this;
            }
            LeadSourceDDService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            LeadSourceDDService.prototype.GetLeadSourceDDnew = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    debugger;
                    list.push({
                        LeadSourceID: item.LeadSourceID,
                        LeadSource: item.LeadSource
                    });
                }
                return list;
            };
            LeadSourceDDService.$inject = ["$http", "$q"];
            return LeadSourceDDService;
        }(GCPL.Service.BaseService));
        Service.LeadSourceDDService = LeadSourceDDService;
        app.AddService("LeadSourceDDService", LeadSourceDDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Search
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SubSourceListService = /** @class */ (function (_super) {
            __extends(SubSourceListService, _super);
            function SubSourceListService($http, $q, _cookieStore) {
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
            SubSourceListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/SubSource";
                //var SearchText;
                var Subsource;
                var LeadSource;
                var Status;
                debugger;
                if (data.Subsource == undefined) {
                    Subsource = '';
                }
                else {
                    Subsource = data.Subsource;
                }
                if (data.LeadSource == undefined) {
                    LeadSource = '';
                }
                else {
                    LeadSource = data.LeadSource;
                }
                if (data.Status == undefined) {
                    Status = '';
                }
                else {
                    Status = data.Status;
                }
                var config = {
                    params: {
                        //SearchText: SearchText,
                        Subsource: Subsource,
                        LeadSource: LeadSource,
                        Status: Status
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            SubSourceListService.prototype.GetSubSourceListData = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        SubsourceID: item.SubsourceID,
                        LeadSource: item.LeadSource,
                        LeadsourceId: item.LeadsourceId,
                        Subsource: item.Subsource,
                        Description: item.Description,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            SubSourceListService.$inject = ["$http", "$q", "$cookieStore"];
            return SubSourceListService;
        }(GCPL.Service.BaseService));
        Service.SubSourceListService = SubSourceListService;
        app.AddService("SubSourceListService", SubSourceListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertSubSourceService = /** @class */ (function (_super) {
            __extends(InsertSubSourceService, _super);
            function InsertSubSourceService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertSubSource";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertSubSourceService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertSubSourceService.prototype.PostSubSource = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertSubSourceService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertSubSourceService;
        }(GCPL.Service.BaseService));
        Service.InsertSubSourceService = InsertSubSourceService;
        app.AddService("InsertSubSourceService", InsertSubSourceService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var SubSourceEditService = /** @class */ (function (_super) {
            __extends(SubSourceEditService, _super);
            function SubSourceEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillSubSource";
                return _this;
            }
            SubSourceEditService.prototype.Find = function (data) {
                var SubsourceID;
                if (data == undefined) {
                    SubsourceID = "";
                }
                else {
                    SubsourceID = data;
                }
                var config = {
                    params: {
                        SubsourceID: SubsourceID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SubSourceEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditSubSourceModel();
                obj.SubsourceID = data.SubsourceID,
                    obj.LeadSourceID = data.LeadSourceID,
                    obj.Subsource = data.Subsource,
                    obj.Description = data.Description,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            SubSourceEditService.$inject = ["$http", "$q"];
            return SubSourceEditService;
        }(GCPL.Service.BaseService));
        Service.SubSourceEditService = SubSourceEditService;
        app.AddService("SubSourceEditService", SubSourceEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=SubSourceService.js.map