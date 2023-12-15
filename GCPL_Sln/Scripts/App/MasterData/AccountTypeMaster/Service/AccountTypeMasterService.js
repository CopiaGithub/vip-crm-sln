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
        var AccountTypeListService = /** @class */ (function (_super) {
            __extends(AccountTypeListService, _super);
            function AccountTypeListService($http, $q, _cookieStore) {
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
            AccountTypeListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/AccountTypeMaster";
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
            AccountTypeListService.prototype.GetAccountTypeList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        AccountTypeID: item.AccountTypeID,
                        AccountType: item.AccountType,
                        WhenEntered: item.WhenEntered,
                        Status: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            AccountTypeListService.$inject = ["$http", "$q", "$cookieStore"];
            return AccountTypeListService;
        }(GCPL.Service.BaseService));
        Service.AccountTypeListService = AccountTypeListService;
        app.AddService("AccountTypeListService", AccountTypeListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertAccountService = /** @class */ (function (_super) {
            __extends(InsertAccountService, _super);
            function InsertAccountService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertAccountType";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertAccountService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertAccountService.prototype.PostAccount = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertAccountService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertAccountService;
        }(GCPL.Service.BaseService));
        Service.InsertAccountService = InsertAccountService;
        app.AddService("InsertAccountService", InsertAccountService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var AccountEditService = /** @class */ (function (_super) {
            __extends(AccountEditService, _super);
            function AccountEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillAccountType";
                return _this;
            }
            AccountEditService.prototype.Find = function (data) {
                var AccountTypeID;
                if (data == undefined) {
                    AccountTypeID = "";
                }
                else {
                    AccountTypeID = data;
                }
                var config = {
                    params: {
                        AccountTypeID: AccountTypeID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            AccountEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditAccountlistModel();
                obj.AccountTypeID = data.AccountTypeID,
                    obj.AccountType = data.AccountType,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            AccountEditService.$inject = ["$http", "$q"];
            return AccountEditService;
        }(GCPL.Service.BaseService));
        Service.AccountEditService = AccountEditService;
        app.AddService("AccountEditService", AccountEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AccountTypeMasterService.js.map