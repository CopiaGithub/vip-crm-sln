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
        var model = GCPL.Model;
        var ViewQuotationService = /** @class */ (function (_super) {
            __extends(ViewQuotationService, _super);
            function ViewQuotationService($http, $q, _cookieStore) {
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
            ViewQuotationService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ViewQuotation";
                var OpportunityNo;
                if (data == undefined) {
                    OpportunityNo = "";
                }
                else {
                    OpportunityNo = data;
                }
                var config = {
                    params: {
                        OpportunityNo: OpportunityNo
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ViewQuotationService.prototype.GetQuote = function (data) {
                var obj = new model.ViewQuoteModel();
                obj.OpportunitySAPNo = data.OpportunityNo;
                ;
                obj.CompanyName = data.CompanyName;
                obj.Address = data.Address;
                obj.SOAddress1 = data.SOAddress1;
                obj.SOAddress2 = data.SOAddress2;
                obj.SOAddress3 = data.SOAddress3;
                obj.SOAddress4 = data.SOAddress4;
                obj.UserName = data.UserName;
                obj.Role = data.Role;
                obj.Email = data.Email;
                obj.PhoneNo = data.PhoneNo;
                obj.Subject = data.Subject;
                obj.QuotationDate = data.QuotationDate;
                obj.QuotationRefernce = data.QuotationRefernce;
                obj.Quantity = data.Quantity;
                obj.Price = data.Price;
                obj.GSTRate = data.GSTRate;
                obj.GSTAmount = data.GSTAmount;
                obj.TotalInvestment = data.TotalInvestment;
                obj.StdConfig = data.StdConfig;
                obj.ModelNo = data.ModelNo;
                obj.Accessory1ID = data.Accessory1ID;
                obj.Option1ID = data.Option1ID;
                obj.Accessory2ID = data.Accessory2ID;
                obj.Option2ID = data.Option2ID;
                obj.Accessory3ID = data.Accessory3ID;
                obj.Option3ID = data.Option3ID;
                obj.Accessory4ID = data.Accessory4ID;
                obj.Option4ID = data.Option4ID;
                obj.Accessory5ID = data.Accessory5ID;
                obj.Option5ID = data.Option5ID;
                obj.Accessory6ID = data.Accessory6ID;
                obj.Option6ID = data.Option6ID;
                obj.TC1Heading = data.TC1Heading;
                obj.TC1 = data.TC1;
                obj.TC2Heading = data.TC2Heading;
                obj.TC2 = data.TC2;
                obj.TC3Heading = data.TC3Heading;
                obj.TC3 = data.TC3;
                obj.TC4Heading = data.TC4Heading;
                obj.TC4 = data.TC4;
                obj.TC5Heading = data.TC5Heading;
                obj.TC5 = data.TC5;
                obj.TC6Heading = data.TC6Heading;
                obj.TC6 = data.TC6;
                obj.TC7Heading = data.TC7Heading;
                obj.TC7 = data.TC7;
                obj.TC8Heading = data.TC8Heading;
                obj.TC8 = data.TC8;
                obj.PF1Heading = data.PF1Heading;
                obj.PF1 = data.PF1;
                obj.PF1Desc = data.PF1Desc;
                obj.PF1Pic = data.PF1Pic;
                obj.PF2Heading = data.PF2Heading;
                obj.PF2 = data.PF2;
                obj.PF2Desc = data.PF2Desc;
                obj.PF2Pic = data.PF2Pic;
                obj.PF3Heading = data.PF3Heading;
                obj.PF3 = data.PF3;
                obj.PF3Desc = data.PF3Desc;
                obj.PF3Pic = data.PF3Pic;
                obj.PF4Heading = data.PF4Heading;
                obj.PF4 = data.PF4;
                obj.PF4Desc = data.PF4Desc;
                obj.PF4Pic = data.PF4Pic;
                obj.PF5Heading = data.PF5Heading;
                obj.PF5 = data.PF5;
                obj.PF5Desc = data.PF5Desc;
                obj.PF5Pic = data.PF5Pic;
                obj.PF6Heading = data.PF6Heading;
                obj.PF6 = data.PF6;
                obj.PF6Desc = data.PF6Desc;
                obj.PF6Pic = data.PF6Pic;
                obj.PF7Heading = data.PF7Heading;
                obj.PF7 = data.PF7;
                obj.PF7Desc = data.PF7Desc;
                obj.PF7Pic = data.PF7Pic;
                obj.OF1Heading = data.OF1Heading;
                obj.OF1 = data.OF1;
                obj.OF1Desc = data.OF1Desc;
                obj.OF2Heading = data.OF2Heading;
                obj.OF2 = data.OF2;
                obj.OF2Desc = data.OF2Desc;
                obj.OF3Heading = data.OF3Heading;
                obj.OF3 = data.OF3;
                obj.OF3Desc = data.OF3Desc;
                obj.OF4Heading = data.OF4Heading;
                obj.OF4 = data.OF4;
                obj.OF4Desc = data.OF4Desc;
                obj.OF5Heading = data.OF5Heading;
                obj.OF5 = data.OF5;
                obj.OF5Desc = data.OF5Desc;
                obj.OF6Heading = data.OF6Heading;
                obj.OF6 = data.OF6;
                obj.OF6Desc = data.OF6Desc;
                obj.C1Heading = data.C1Heading;
                obj.C1 = data.C1;
                obj.C1Desc = data.C1Desc;
                obj.C2Heading = data.C2Heading;
                obj.C2 = data.C2;
                obj.C2Desc = data.C2Desc;
                obj.C3Heading = data.C3Heading;
                obj.C3 = data.C3;
                obj.C3Desc = data.C3Desc;
                obj.C4Heading = data.C4Heading;
                obj.C4 = data.C4;
                obj.C4Desc = data.C4Desc;
                obj.ModelDescription = data.ModelDescription;
                obj.ContactName = data.ContactName;
                obj.ModelID = data.ModelID;
                obj.C1Pic = data.C1Pic;
                obj.C2Pic = data.C2Pic;
                obj.C3Pic = data.C3Pic;
                obj.C4Pic = data.C4Pic;
                obj.OF1Pic = data.OF1Pic;
                obj.OF2Pic = data.OF2Pic;
                obj.OF3Pic = data.OF3Pic;
                obj.OF4Pic = data.OF4Pic;
                obj.OF5Pic = data.OF5Pic;
                obj.OF6Pic = data.OF6Pic;
                obj.C5Heading = data.C5Heading;
                obj.C5 = data.C5;
                obj.C5Desc = data.C5Desc;
                obj.C5Pic = data.C5Pic;
                obj.C6Heading = data.C6Heading;
                obj.C6 = data.C6;
                obj.C6Desc = data.C6Desc;
                obj.C6Pic = data.C6Pic;
                return obj;
            };
            ViewQuotationService.$inject = ["$http", "$q", "$cookieStore"];
            return ViewQuotationService;
        }(GCPL.Service.BaseService));
        Service.ViewQuotationService = ViewQuotationService;
        app.AddService("ViewQuotationService", ViewQuotationService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ViewQuotationService.js.map