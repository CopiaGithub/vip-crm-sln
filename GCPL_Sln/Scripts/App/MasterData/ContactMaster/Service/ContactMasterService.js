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
        var ContactListService = /** @class */ (function (_super) {
            __extends(ContactListService, _super);
            function ContactListService($http, $q, _cookieStore) {
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
            ContactListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ContactMaster";
                var SearchText;
                var SearchCompanyName;
                var SearchPhoneNo;
                var Status;
                var ContactSAPID;
                var CustSAPID;
                debugger;
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                if (data.SearchCompanyName == undefined) {
                    SearchCompanyName = '';
                }
                else {
                    SearchCompanyName = data.SearchCompanyName;
                }
                if (data.SearchPhoneNo == undefined) {
                    SearchPhoneNo = '';
                }
                else {
                    SearchPhoneNo = data.SearchPhoneNo;
                }
                if (data.Status == undefined) {
                    Status = '';
                }
                else {
                    Status = data.Status;
                }
                if (data.ContactSAPID == undefined) {
                    ContactSAPID = '';
                }
                else {
                    ContactSAPID = data.ContactSAPID;
                }
                if (data.CustSAPID == undefined) {
                    CustSAPID = '';
                }
                else {
                    CustSAPID = data.CustSAPID;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        SearchCompanyName: SearchCompanyName,
                        SearchPhoneNo: SearchPhoneNo,
                        Status: Status,
                        ContactSAPID: ContactSAPID,
                        CustSAPID: CustSAPID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ContactListService.prototype.GetContactlist = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ContactID: item.ContactID,
                        SAPID: item.SAPID,
                        ContactName: item.ContactName,
                        MobileNo: item.MobileNo,
                        PhoneNo: item.PhoneNo,
                        Email: item.Email,
                        Status: ((item.Status == "True") ? "Active" : "Inactive"),
                        CompanyName: item.CompanyName,
                        FOP: item.FOP,
                        Department: item.Department,
                        CustSAPID: item.CustSAPID
                    });
                }
                return list;
            };
            ContactListService.$inject = ["$http", "$q", "$cookieStore"];
            return ContactListService;
        }(GCPL.Service.BaseService));
        Service.ContactListService = ContactListService;
        app.AddService("ContactListService", ContactListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Delete Contact
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteContactservice = /** @class */ (function (_super) {
            __extends(DeleteContactservice, _super);
            function DeleteContactservice($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteContactMaster";
                return _this;
            }
            DeleteContactservice.prototype.Find = function (data) {
                var config = {
                    params: {
                        ContactID: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteContactservice.prototype.postContactDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteContactservice.$inject = ["$http", "$q"];
            return DeleteContactservice;
        }(GCPL.Service.BaseService));
        Service.DeleteContactservice = DeleteContactservice;
        app.AddService("DeleteContactservice", DeleteContactservice);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ContactMasterService.js.map