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
//List
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ReallocateLeadListService = /** @class */ (function (_super) {
            __extends(ReallocateLeadListService, _super);
            function ReallocateLeadListService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.Cookie = _cookieStore;
                _this.apiUrl = "" + _this.url;
                return _this;
            }
            ReallocateLeadListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetReAllocateLead";
                var LeadID;
                var SearchInput;
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                if (data.SearchInput == undefined) {
                    SearchInput = '';
                }
                else {
                    SearchInput = data.SearchInput;
                }
                var config = {
                    params: {
                        LeadID: LeadID,
                        SearchInput: SearchInput
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ReallocateLeadListService.prototype.GetReallocateList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        LeadType: item.LeadType,
                        Companyname: item.Companyname,
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        WhenEntered: item.WhenEntered,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        Title: item.Title,
                        Status: item.Status,
                        FirstName: item.FirstName,
                        FullName: item.FullName,
                        MobileNo: item.MobileNo,
                        LeadID: item.LeadID,
                        CustomerID: item.CustomerID,
                        ContactID: item.ContactID
                    });
                }
                return list;
            };
            ReallocateLeadListService.$inject = ["$http", "$q", "$cookieStore"];
            return ReallocateLeadListService;
        }(GCPL.Service.BaseService));
        Service.ReallocateLeadListService = ReallocateLeadListService;
        app.AddService("ReallocateLeadListService", ReallocateLeadListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertReallocateLeadsService = /** @class */ (function (_super) {
            __extends(InsertReallocateLeadsService, _super);
            function InsertReallocateLeadsService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertReAllocateLead";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertReallocateLeadsService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertReallocateLeadsService.prototype.PostReallocate = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertReallocateLeadsService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertReallocateLeadsService;
        }(GCPL.Service.BaseService));
        Service.InsertReallocateLeadsService = InsertReallocateLeadsService;
        app.AddService("InsertReallocateLeadsService", InsertReallocateLeadsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var GetEmployeeCodeService = /** @class */ (function (_super) {
            __extends(GetEmployeeCodeService, _super);
            //static $inject = ["$http", "$q"];
            function GetEmployeeCodeService($http, $q, _cookieStore) {
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
            GetEmployeeCodeService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetUserEmpCode";
                var UserID;
                if (data == undefined) {
                    UserID = "";
                }
                else {
                    UserID = data;
                }
                var config = {
                    params: {
                        UserID: UserID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            GetEmployeeCodeService.prototype.GetEmpCodeInfo = function (data) {
                var obj = new model.GetEmpCodeModel;
                obj.EmployeeCode = data.EmployeeCode;
                return obj;
            };
            GetEmployeeCodeService.$inject = ["$http", "$q", "$cookieStore"];
            return GetEmployeeCodeService;
        }(GCPL.Service.BaseService));
        Service.GetEmployeeCodeService = GetEmployeeCodeService;
        app.AddService("GetEmployeeCodeService", GetEmployeeCodeService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ReAllocateLeadService.js.map