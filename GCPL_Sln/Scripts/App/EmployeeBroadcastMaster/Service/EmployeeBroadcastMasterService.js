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
        var EmployeeBroadCastListService = /** @class */ (function (_super) {
            __extends(EmployeeBroadCastListService, _super);
            function EmployeeBroadCastListService($http, $q, _cookieStore) {
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
            EmployeeBroadCastListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetEmployeeBroadcastList";
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
            EmployeeBroadCastListService.prototype.GetEmployeeBroadList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        EmployeeBroadcastID: item.EmployeeBroadcastID,
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
            EmployeeBroadCastListService.$inject = ["$http", "$q", "$cookieStore"];
            return EmployeeBroadCastListService;
        }(GCPL.Service.BaseService));
        Service.EmployeeBroadCastListService = EmployeeBroadCastListService;
        app.AddService("EmployeeBroadCastListService", EmployeeBroadCastListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertEmployeeBroadService = /** @class */ (function (_super) {
            __extends(InsertEmployeeBroadService, _super);
            function InsertEmployeeBroadService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "EmployeeBroadcastMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertEmployeeBroadService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertEmployeeBroadService.prototype.PostEmployeeBroad = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertEmployeeBroadService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertEmployeeBroadService;
        }(GCPL.Service.BaseService));
        Service.InsertEmployeeBroadService = InsertEmployeeBroadService;
        app.AddService("InsertEmployeeBroadService", InsertEmployeeBroadService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var EmployeeCastEditService = /** @class */ (function (_super) {
            __extends(EmployeeCastEditService, _super);
            function EmployeeCastEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillEmployeeBroadcastList";
                return _this;
            }
            EmployeeCastEditService.prototype.Find = function (data) {
                var EmployeeBroadcastID;
                if (data == undefined) {
                    EmployeeBroadcastID = "";
                }
                else {
                    EmployeeBroadcastID = data;
                }
                var config = {
                    params: {
                        EmployeeBroadcastID: EmployeeBroadcastID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            EmployeeCastEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditEmployeeCastModel();
                obj.EmployeeBroadcastID = data.EmployeeBroadcastID,
                    obj.Title = data.Title,
                    obj.Description = data.Description,
                    obj.YouTubeLink = data.YouTubeLink,
                    obj.Photo = data.Photo,
                    obj.Video = data.Video,
                    obj.Status = data.Status;
                return obj;
            };
            EmployeeCastEditService.$inject = ["$http", "$q"];
            return EmployeeCastEditService;
        }(GCPL.Service.BaseService));
        Service.EmployeeCastEditService = EmployeeCastEditService;
        app.AddService("EmployeeCastEditService", EmployeeCastEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=EmployeeBroadcastMasterService.js.map