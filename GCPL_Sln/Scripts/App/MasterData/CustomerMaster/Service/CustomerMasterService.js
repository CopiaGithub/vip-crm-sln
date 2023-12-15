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
        var CustomerListService = /** @class */ (function (_super) {
            __extends(CustomerListService, _super);
            function CustomerListService($http, $q, _cookieStore) {
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
            CustomerListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CustomerMaster";
                var SearchText;
                var SearchSAP;
                var SearchDistrict;
                var SearchMobileNo;
                var Status;
                debugger;
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                if (data.SearchSAP == undefined) {
                    SearchSAP = '';
                }
                else {
                    SearchSAP = data.SearchSAP;
                }
                if (data.SearchDistrict == undefined) {
                    SearchDistrict = '';
                }
                else {
                    SearchDistrict = data.SearchDistrict;
                }
                if (data.SearchMobileNo == undefined) {
                    SearchMobileNo = '';
                }
                else {
                    SearchMobileNo = data.SearchMobileNo;
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
                        SearchSAP: SearchSAP,
                        SearchDistrict: SearchDistrict,
                        SearchMobileNo: SearchMobileNo,
                        Status: Status
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CustomerListService.prototype.GetCustomerlist = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CompanyName: item.CompanyName,
                        IsNational: ((item.IsNational == "True") ? "Yes" : "No"),
                        BusinessPartnerNo: item.BusinessPartnerNo,
                        MobileNo: item.MobileNo,
                        Email: item.Email,
                        District: item.District,
                        SalesOffice: item.SalesOffice,
                        SalesArea: item.SalesArea,
                        Status: ((item.Status == "True") ? "Active" : "Inactive"),
                        PinCode: item.PinCode,
                        DistrictID: item.DistrictID
                    });
                }
                return list;
            };
            CustomerListService.$inject = ["$http", "$q", "$cookieStore"];
            return CustomerListService;
        }(GCPL.Service.BaseService));
        Service.CustomerListService = CustomerListService;
        app.AddService("CustomerListService", CustomerListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//deleteCustomerList
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteCustomerService = /** @class */ (function (_super) {
            __extends(DeleteCustomerService, _super);
            function DeleteCustomerService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteCustomerMaster";
                return _this;
            }
            DeleteCustomerService.prototype.Find = function (data) {
                var config = {
                    params: {
                        CustomerID: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteCustomerService.prototype.postCustomerDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteCustomerService.$inject = ["$http", "$q"];
            return DeleteCustomerService;
        }(GCPL.Service.BaseService));
        Service.DeleteCustomerService = DeleteCustomerService;
        app.AddService("DeleteCustomerService", DeleteCustomerService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CustomerMasterService.js.map