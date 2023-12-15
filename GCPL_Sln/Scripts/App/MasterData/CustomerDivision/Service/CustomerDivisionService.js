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
        var CustomerDivisionService = /** @class */ (function (_super) {
            __extends(CustomerDivisionService, _super);
            function CustomerDivisionService($http, $q, _cookieStore) {
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
            CustomerDivisionService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CustomerDivision";
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
            CustomerDivisionService.prototype.GetCustomerDivisionData = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CustomerDivisionID: item.CustomerDivisionID,
                        CustomerDivision: item.CustomerDivision,
                        SAPID: item.SAPID,
                        WhenEntered: item.WhenEntered,
                        IsActive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            CustomerDivisionService.$inject = ["$http", "$q", "$cookieStore"];
            return CustomerDivisionService;
        }(GCPL.Service.BaseService));
        Service.CustomerDivisionService = CustomerDivisionService;
        app.AddService("CustomerDivisionService", CustomerDivisionService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//INSERT
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertCustomerDivisionService = /** @class */ (function (_super) {
            __extends(InsertCustomerDivisionService, _super);
            function InsertCustomerDivisionService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertCustomerDivision";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertCustomerDivisionService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertCustomerDivisionService.prototype.PostCustomerDivision = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertCustomerDivisionService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertCustomerDivisionService;
        }(GCPL.Service.BaseService));
        Service.InsertCustomerDivisionService = InsertCustomerDivisionService;
        app.AddService("InsertCustomerDivisionService", InsertCustomerDivisionService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CustomerDivisionEditService = /** @class */ (function (_super) {
            __extends(CustomerDivisionEditService, _super);
            function CustomerDivisionEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillCustomerDivision";
                return _this;
            }
            CustomerDivisionEditService.prototype.Find = function (data) {
                var CustomerDivisionID;
                if (data == undefined) {
                    CustomerDivisionID = "";
                }
                else {
                    CustomerDivisionID = data;
                }
                var config = {
                    params: {
                        CustomerDivisionID: CustomerDivisionID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CustomerDivisionEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditCustomerDivisionModel();
                obj.CustomerDivisionID = data.CustomerDivisionID,
                    obj.CustomerDivision = data.CustomerDivision,
                    obj.SAPID = data.SAPID,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            CustomerDivisionEditService.$inject = ["$http", "$q"];
            return CustomerDivisionEditService;
        }(GCPL.Service.BaseService));
        Service.CustomerDivisionEditService = CustomerDivisionEditService;
        app.AddService("CustomerDivisionEditService", CustomerDivisionEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CustomerDivisionService.js.map