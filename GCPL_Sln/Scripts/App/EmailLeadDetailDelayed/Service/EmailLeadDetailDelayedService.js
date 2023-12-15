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
        var EmailLeadListService = /** @class */ (function (_super) {
            __extends(EmailLeadListService, _super);
            function EmailLeadListService($http, $q, _cookieStore) {
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
            EmailLeadListService.prototype.Find = function () {
                var url = this.apiUrl + "/GetEmailLeadDelayedList";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            EmailLeadListService.prototype.GetEmailLeadList = function (data) {
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
            EmailLeadListService.$inject = ["$http", "$q", "$cookieStore"];
            return EmailLeadListService;
        }(GCPL.Service.BaseService));
        Service.EmailLeadListService = EmailLeadListService;
        app.AddService("EmailLeadListService", EmailLeadListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertEmailLeadService = /** @class */ (function (_super) {
            __extends(InsertEmailLeadService, _super);
            function InsertEmailLeadService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "EmailLeadDetailDelayed";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertEmailLeadService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertEmailLeadService.prototype.PostEmailLead = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertEmailLeadService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertEmailLeadService;
        }(GCPL.Service.BaseService));
        Service.InsertEmailLeadService = InsertEmailLeadService;
        app.AddService("InsertEmailLeadService", InsertEmailLeadService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var EmailLeadEditService = /** @class */ (function (_super) {
            __extends(EmailLeadEditService, _super);
            function EmailLeadEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillEmailLeadDelayedList";
                return _this;
            }
            EmailLeadEditService.prototype.Find = function (data) {
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
            EmailLeadEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditEmailLeadListModel();
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
            EmailLeadEditService.$inject = ["$http", "$q"];
            return EmailLeadEditService;
        }(GCPL.Service.BaseService));
        Service.EmailLeadEditService = EmailLeadEditService;
        app.AddService("EmailLeadEditService", EmailLeadEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=EmailLeadDetailDelayedService.js.map