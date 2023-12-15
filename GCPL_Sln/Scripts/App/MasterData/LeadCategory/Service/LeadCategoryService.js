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
//search
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadCategoryService = /** @class */ (function (_super) {
            __extends(LeadCategoryService, _super);
            function LeadCategoryService($http, $q, _cookieStore) {
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
            LeadCategoryService.prototype.Find = function (data) {
                var url = this.apiUrl + "/LeadCategory";
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
            LeadCategoryService.prototype.GetLeadCategoryData = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadCategoryID: item.LeadCategoryID,
                        LeadCategory: item.LeadCategory,
                        Description: item.Description,
                        WhenEntered: item.WhenEntered,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            LeadCategoryService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadCategoryService;
        }(GCPL.Service.BaseService));
        Service.LeadCategoryService = LeadCategoryService;
        app.AddService("LeadCategoryService", LeadCategoryService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertLeadCategoryService = /** @class */ (function (_super) {
            __extends(InsertLeadCategoryService, _super);
            function InsertLeadCategoryService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertLeadCategory";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertLeadCategoryService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertLeadCategoryService.prototype.PostLeadCategory = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertLeadCategoryService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertLeadCategoryService;
        }(GCPL.Service.BaseService));
        Service.InsertLeadCategoryService = InsertLeadCategoryService;
        app.AddService("InsertLeadCategoryService", InsertLeadCategoryService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var LeadCategoryEditService = /** @class */ (function (_super) {
            __extends(LeadCategoryEditService, _super);
            function LeadCategoryEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillLeadCategory";
                return _this;
            }
            LeadCategoryEditService.prototype.Find = function (data) {
                var LeadCategoryID;
                if (data == undefined) {
                    LeadCategoryID = "";
                }
                else {
                    LeadCategoryID = data;
                }
                var config = {
                    params: {
                        LeadCategoryID: LeadCategoryID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            LeadCategoryEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditLeadCategoryModel();
                obj.LeadCategoryID = data.LeadCategoryID,
                    obj.LeadCategory = data.LeadCategory,
                    obj.Description = data.Description,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            LeadCategoryEditService.$inject = ["$http", "$q"];
            return LeadCategoryEditService;
        }(GCPL.Service.BaseService));
        Service.LeadCategoryEditService = LeadCategoryEditService;
        app.AddService("LeadCategoryEditService", LeadCategoryEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadCategoryService.js.map