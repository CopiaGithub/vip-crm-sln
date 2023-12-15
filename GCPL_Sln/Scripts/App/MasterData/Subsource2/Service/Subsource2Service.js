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
//SubSource dd 
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SubSourceDDwpService = /** @class */ (function (_super) {
            __extends(SubSourceDDwpService, _super);
            function SubSourceDDwpService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "SubSourceDDwp";
                return _this;
            }
            SubSourceDDwpService.prototype.Find = function (data) {
                var config = {
                    params: {
                        LeadSourceID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            SubSourceDDwpService.prototype.GetSubSourceName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        SubsourceID: item.SubsourceID.toString(),
                        Subsource: item.Subsource,
                    });
                }
                return list;
            };
            SubSourceDDwpService.$inject = ["$http", "$q"];
            return SubSourceDDwpService;
        }(GCPL.Service.BaseService));
        Service.SubSourceDDwpService = SubSourceDDwpService;
        app.AddService("SubSourceDDwpService", SubSourceDDwpService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Search
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var SubSource2ListService = /** @class */ (function (_super) {
            __extends(SubSource2ListService, _super);
            function SubSource2ListService($http, $q, _cookieStore) {
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
            SubSource2ListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/Subsource2";
                //var SearchText;
                var Subsource2;
                debugger;
                if (data.Subsource2 == undefined) {
                    Subsource2 = '';
                }
                else {
                    Subsource2 = data.Subsource2;
                }
                var config = {
                    params: {
                        //SearchText: SearchText,
                        Subsource2: Subsource2
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            SubSource2ListService.prototype.GetSubSource2ListData = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        Subsource2ID: item.Subsource2ID,
                        LeadSource: item.LeadSource,
                        LeadSourceID: item.LeadSourceID,
                        Subsource2: item.Subsource2,
                        SubsourceID: item.SubsourceID,
                        Subsource: item.Subsource,
                        Description: item.Description,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            SubSource2ListService.$inject = ["$http", "$q", "$cookieStore"];
            return SubSource2ListService;
        }(GCPL.Service.BaseService));
        Service.SubSource2ListService = SubSource2ListService;
        app.AddService("SubSource2ListService", SubSource2ListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertSubsource2Service = /** @class */ (function (_super) {
            __extends(InsertSubsource2Service, _super);
            function InsertSubsource2Service($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertSubsource2";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertSubsource2Service.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertSubsource2Service.prototype.PostSubsource2 = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertSubsource2Service.$inject = ["$http", "$q", "$cookieStore"];
            return InsertSubsource2Service;
        }(GCPL.Service.BaseService));
        Service.InsertSubsource2Service = InsertSubsource2Service;
        app.AddService("InsertSubsource2Service", InsertSubsource2Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var Subsource2EditService = /** @class */ (function (_super) {
            __extends(Subsource2EditService, _super);
            function Subsource2EditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillSubsource2";
                return _this;
            }
            Subsource2EditService.prototype.Find = function (data) {
                var Subsource2ID;
                if (data == undefined) {
                    Subsource2ID = "";
                }
                else {
                    Subsource2ID = data;
                }
                var config = {
                    params: {
                        Subsource2ID: Subsource2ID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Subsource2EditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditSubsource2Model();
                obj.Subsource2ID = data.Subsource2ID,
                    obj.SubsourceID = data.SubsourceID,
                    obj.LeadSourceID = data.LeadSourceID,
                    obj.LeadSource = data.LeadSource,
                    obj.Subsource2 = data.Subsource2,
                    //obj.Subsource = data.Subsource,
                    obj.Description = data.Description,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            Subsource2EditService.$inject = ["$http", "$q"];
            return Subsource2EditService;
        }(GCPL.Service.BaseService));
        Service.Subsource2EditService = Subsource2EditService;
        app.AddService("Subsource2EditService", Subsource2EditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=Subsource2Service.js.map