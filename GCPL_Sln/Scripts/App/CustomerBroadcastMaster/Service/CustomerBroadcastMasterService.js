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
        var CustomerBroadCastListService = /** @class */ (function (_super) {
            __extends(CustomerBroadCastListService, _super);
            function CustomerBroadCastListService($http, $q, _cookieStore) {
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
            CustomerBroadCastListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetCustomerBroadcastList";
                var SearchText;
                debugger;
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                var config = {
                    params: {
                        SearchText: SearchText
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CustomerBroadCastListService.prototype.GetCustomerBroadList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CustomerBroadcastID: item.CustomerBroadcastID,
                        Title: item.Title,
                        Description: item.Description,
                        YouTubeLink: item.YouTubeLink,
                        Photo: item.Photo,
                        Video: item.Video,
                        Status: ((item.Status == "True") ? "Active" : "Inactive"),
                        WhenEntered: item.WhenEntered
                    });
                }
                return list;
            };
            CustomerBroadCastListService.$inject = ["$http", "$q", "$cookieStore"];
            return CustomerBroadCastListService;
        }(GCPL.Service.BaseService));
        Service.CustomerBroadCastListService = CustomerBroadCastListService;
        app.AddService("CustomerBroadCastListService", CustomerBroadCastListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertCustomerBroadService = /** @class */ (function (_super) {
            __extends(InsertCustomerBroadService, _super);
            function InsertCustomerBroadService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CustomerBroadcastMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertCustomerBroadService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertCustomerBroadService.prototype.PostCustomerBroad = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertCustomerBroadService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertCustomerBroadService;
        }(GCPL.Service.BaseService));
        Service.InsertCustomerBroadService = InsertCustomerBroadService;
        app.AddService("InsertCustomerBroadService", InsertCustomerBroadService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CustomerCastEditService = /** @class */ (function (_super) {
            __extends(CustomerCastEditService, _super);
            function CustomerCastEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillCustomerBroadcastList";
                return _this;
            }
            CustomerCastEditService.prototype.Find = function (data) {
                var CustomerBroadcastID;
                if (data == undefined) {
                    CustomerBroadcastID = "";
                }
                else {
                    CustomerBroadcastID = data;
                }
                var config = {
                    params: {
                        CustomerBroadcastID: CustomerBroadcastID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CustomerCastEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditCustomerCastModel();
                obj.CustomerBroadcastID = data.CustomerBroadcastID,
                    obj.Title = data.Title,
                    obj.Description = data.Description,
                    obj.YouTubeLink = data.YouTubeLink,
                    obj.Photo = data.Photo,
                    obj.Video = data.Video,
                    obj.Status = data.Status;
                return obj;
            };
            CustomerCastEditService.$inject = ["$http", "$q"];
            return CustomerCastEditService;
        }(GCPL.Service.BaseService));
        Service.CustomerCastEditService = CustomerCastEditService;
        app.AddService("CustomerCastEditService", CustomerCastEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CustomerBroadcastMasterService.js.map