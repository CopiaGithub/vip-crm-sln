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
        var AllocationOverrideListService = /** @class */ (function (_super) {
            __extends(AllocationOverrideListService, _super);
            function AllocationOverrideListService($http, $q, _cookieStore) {
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
            AllocationOverrideListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/AllocationOverride";
                var SearchInput;
                var LeadID;
                debugger;
                if (data.SearchInput == undefined) {
                    SearchInput = '';
                }
                else {
                    SearchInput = data.SearchInput;
                }
                if (data.LeadID == undefined) {
                    LeadID = '';
                }
                else {
                    LeadID = data.LeadID;
                }
                debugger;
                var config = {
                    params: {
                        SearchInput: SearchInput,
                        LeadID: LeadID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            AllocationOverrideListService.prototype.GetAllocationOverList = function (data) {
                var list = Array();
                debugger;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        Companyname: item.Companyname,
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        WhenEntered: item.WhenEntered,
                        Product: item.Product,
                        ModelNo: item.ModelNo,
                        Title: item.Title,
                        Status: item.Status,
                        CreatedBy: item.CreatedBy,
                        FullNameCreatedBy: item.FullNameCreatedBy,
                        MobileNo: item.MobileNo,
                        LeadID: item.LeadID,
                        AllocatedTo: item.AllocatedTo,
                        FullNameAllocatedTo: item.FullNameAllocatedTo,
                        CustomerID: item.CustomerID,
                        ContactID: item.ContactID
                    });
                }
                return list;
            };
            AllocationOverrideListService.$inject = ["$http", "$q", "$cookieStore"];
            return AllocationOverrideListService;
        }(GCPL.Service.BaseService));
        Service.AllocationOverrideListService = AllocationOverrideListService;
        app.AddService("AllocationOverrideListService", AllocationOverrideListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertAllocationOverrideService = /** @class */ (function (_super) {
            __extends(InsertAllocationOverrideService, _super);
            function InsertAllocationOverrideService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertAllocationOverride";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertAllocationOverrideService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertAllocationOverrideService.prototype.PostAllocation = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertAllocationOverrideService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertAllocationOverrideService;
        }(GCPL.Service.BaseService));
        Service.InsertAllocationOverrideService = InsertAllocationOverrideService;
        app.AddService("InsertAllocationOverrideService", InsertAllocationOverrideService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AllocationOverrideService.js.map