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
//Insert
var GCPL;
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertCampaignService = /** @class */ (function (_super) {
            __extends(InsertCampaignService, _super);
            function InsertCampaignService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "CampaignMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertCampaignService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertCampaignService.prototype.PostCampaign = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertCampaignService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertCampaignService;
        }(GCPL.Service.BaseService));
        Service.InsertCampaignService = InsertCampaignService;
        app.AddService("InsertCampaignService", InsertCampaignService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//List
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CampaignListService = /** @class */ (function (_super) {
            __extends(CampaignListService, _super);
            function CampaignListService($http, $q, _cookieStore) {
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
            CampaignListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/GetCampaignMasterList";
                var SearchText;
                var LeadSourceID;
                var StatusID;
                debugger;
                if (data.SearchText == undefined) {
                    SearchText = '';
                }
                else {
                    SearchText = data.SearchText;
                }
                if (data.LeadSourceID == undefined) {
                    LeadSourceID = '';
                }
                else {
                    LeadSourceID = data.LeadSourceID;
                }
                if (data.StatusID == undefined) {
                    StatusID = '';
                }
                else {
                    StatusID = data.StatusID;
                }
                var config = {
                    params: {
                        SearchText: SearchText,
                        LeadSourceID: LeadSourceID,
                        StatusID: StatusID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CampaignListService.prototype.GetCampaignList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CampaignID: item.CampaignID,
                        CampaignName: item.CampaignName,
                        Description: item.Description,
                        SAPID: item.SAPID,
                        LeadSourceID: item.LeadSourceID,
                        StartDate: item.StartDate,
                        EndDate: item.EndDate,
                        Status: ((item.Status == "True") ? "Active" : "Inactive"),
                        LeadSource: item.LeadSource,
                        WhenEntered: item.WhenEntered,
                        TargetedLeads: item.TargetedLeads,
                        EstimatedCost: item.EstimatedCost
                    });
                }
                return list;
            };
            CampaignListService.$inject = ["$http", "$q", "$cookieStore"];
            return CampaignListService;
        }(GCPL.Service.BaseService));
        Service.CampaignListService = CampaignListService;
        app.AddService("CampaignListService", CampaignListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CampaignEditService = /** @class */ (function (_super) {
            __extends(CampaignEditService, _super);
            function CampaignEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillCampaignMasterList";
                return _this;
            }
            CampaignEditService.prototype.Find = function (data) {
                var CampaignID;
                if (data == undefined) {
                    CampaignID = "";
                }
                else {
                    CampaignID = data;
                }
                var config = {
                    params: {
                        CampaignID: CampaignID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            CampaignEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditCamlistModel();
                obj.CampaignID = data.CampaignID,
                    obj.CampaignName = data.CampaignName,
                    obj.Description = data.Description,
                    obj.SAPID = data.SAPID,
                    obj.LeadSourceID = data.LeadSourceID,
                    obj.StartDate = data.StartDate,
                    obj.EndDate = data.EndDate,
                    obj.Status = data.Status,
                    obj.TargetedLeads = data.TargetedLeads,
                    obj.EstimatedCost = data.EstimatedCost;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            CampaignEditService.$inject = ["$http", "$q"];
            return CampaignEditService;
        }(GCPL.Service.BaseService));
        Service.CampaignEditService = CampaignEditService;
        app.AddService("CampaignEditService", CampaignEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CampaignMasterService.js.map