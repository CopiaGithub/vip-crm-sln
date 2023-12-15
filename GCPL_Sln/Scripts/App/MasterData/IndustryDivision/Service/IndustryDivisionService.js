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
        var IndustryDivisionListService = /** @class */ (function (_super) {
            __extends(IndustryDivisionListService, _super);
            function IndustryDivisionListService($http, $q, _cookieStore) {
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
            IndustryDivisionListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/IndustryDivision";
                var SearchText;
                var Status;
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
                var config = {
                    params: {
                        SearchText: SearchText,
                        Status: Status
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            IndustryDivisionListService.prototype.GetIndustryDivisionList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        IndustryDivisionID: item.IndustryDivisionID,
                        IndustryDivision: item.IndustryDivision,
                        SAPID: item.SAPID,
                        WhenEntered: item.WhenEntered,
                        Status: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            IndustryDivisionListService.$inject = ["$http", "$q", "$cookieStore"];
            return IndustryDivisionListService;
        }(GCPL.Service.BaseService));
        Service.IndustryDivisionListService = IndustryDivisionListService;
        app.AddService("IndustryDivisionListService", IndustryDivisionListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertIndustryService = /** @class */ (function (_super) {
            __extends(InsertIndustryService, _super);
            function InsertIndustryService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertIndustryDivision";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertIndustryService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertIndustryService.prototype.PostIndustry = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertIndustryService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertIndustryService;
        }(GCPL.Service.BaseService));
        Service.InsertIndustryService = InsertIndustryService;
        app.AddService("InsertIndustryService", InsertIndustryService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var IndustryEditService = /** @class */ (function (_super) {
            __extends(IndustryEditService, _super);
            function IndustryEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillIndustryDivision";
                return _this;
            }
            IndustryEditService.prototype.Find = function (data) {
                var IndustryDivisionID;
                if (data == undefined) {
                    IndustryDivisionID = "";
                }
                else {
                    IndustryDivisionID = data;
                }
                var config = {
                    params: {
                        IndustryDivisionID: IndustryDivisionID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            IndustryEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditIndustrylistModel();
                obj.IndustryDivisionID = data.IndustryDivisionID,
                    obj.IndustryDivision = data.IndustryDivision,
                    obj.SAPID = data.SAPID,
                    obj.Status = data.Status,
                    obj.WhenEntered = data.WhenEntered;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            IndustryEditService.$inject = ["$http", "$q"];
            return IndustryEditService;
        }(GCPL.Service.BaseService));
        Service.IndustryEditService = IndustryEditService;
        app.AddService("IndustryEditService", IndustryEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=IndustryDivisionService.js.map