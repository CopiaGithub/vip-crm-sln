//Search
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
        var RegistrationContactListService = /** @class */ (function (_super) {
            __extends(RegistrationContactListService, _super);
            function RegistrationContactListService($http, $q, _cookieStore) {
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
            RegistrationContactListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/RegistrationContact";
                var SearchInput;
                var StatusID;
                debugger;
                if (data.SearchInput == undefined) {
                    SearchInput = '';
                }
                else {
                    SearchInput = data.SearchInput;
                }
                if (data.StatusID == undefined) {
                    StatusID = '';
                }
                else {
                    StatusID = data.StatusID;
                }
                var config = {
                    params: {
                        SearchInput: SearchInput,
                        StatusID: StatusID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            RegistrationContactListService.prototype.GetRegistrationContactData = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        AppContactID: item.AppContactID,
                        ContactName: item.ContactName,
                        ContactMobileNo: item.ContactMobileNo,
                        Email: item.Email,
                        Companyname: item.Companyname,
                        MobileNo: item.MobileNo,
                        Address1: item.Address1,
                        District: item.District,
                        Password: item.Password,
                        CustStatus: item.CustStatus,
                        //IsACtive: item.IsACtive,
                        WhenEntered: item.WhenEntered,
                        IsACtive: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            RegistrationContactListService.$inject = ["$http", "$q", "$cookieStore"];
            return RegistrationContactListService;
        }(GCPL.Service.BaseService));
        Service.RegistrationContactListService = RegistrationContactListService;
        app.AddService("RegistrationContactListService", RegistrationContactListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RegistrationContactService.js.map