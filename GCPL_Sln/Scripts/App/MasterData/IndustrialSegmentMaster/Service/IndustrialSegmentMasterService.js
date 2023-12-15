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
        var IndustrialSegmentListService = /** @class */ (function (_super) {
            __extends(IndustrialSegmentListService, _super);
            function IndustrialSegmentListService($http, $q, _cookieStore) {
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
            IndustrialSegmentListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/IndustrialSegmentMaster";
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
            IndustrialSegmentListService.prototype.GetIndustrialList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        IndustrialSegmentID: item.IndustrialSegmentID,
                        IndustrialSegment: item.IndustrialSegment,
                        SAPID: item.SAPID,
                        WhenEntered: item.WhenEntered,
                        Status: ((item.Status == "True") ? "Active" : "Inactive")
                    });
                }
                return list;
            };
            IndustrialSegmentListService.$inject = ["$http", "$q", "$cookieStore"];
            return IndustrialSegmentListService;
        }(GCPL.Service.BaseService));
        Service.IndustrialSegmentListService = IndustrialSegmentListService;
        app.AddService("IndustrialSegmentListService", IndustrialSegmentListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertIndustrialService = /** @class */ (function (_super) {
            __extends(InsertIndustrialService, _super);
            function InsertIndustrialService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertIndustrialSegment";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertIndustrialService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertIndustrialService.prototype.PostIndustrial = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertIndustrialService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertIndustrialService;
        }(GCPL.Service.BaseService));
        Service.InsertIndustrialService = InsertIndustrialService;
        app.AddService("InsertIndustrialService", InsertIndustrialService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Edit
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var IndustrialEditService = /** @class */ (function (_super) {
            __extends(IndustrialEditService, _super);
            function IndustrialEditService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "FillIndustrialSegment";
                return _this;
            }
            IndustrialEditService.prototype.Find = function (data) {
                var IndustrialSegmentID;
                if (data == undefined) {
                    IndustrialSegmentID = "";
                }
                else {
                    IndustrialSegmentID = data;
                }
                var config = {
                    params: {
                        IndustrialSegmentID: IndustrialSegmentID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            IndustrialEditService.prototype.GetEdit = function (data) {
                debugger;
                var obj = new model.EditIndustriallistModel();
                obj.IndustrialSegmentID = data.IndustrialSegmentID,
                    obj.IndustrialSegment = data.IndustrialSegment,
                    obj.SAPID = data.SAPID,
                    obj.WhenEntered = data.WhenEntered,
                    obj.Status = data.Status;
                //obj.Status = ((data.IsActive == "1") ? "Active" : "Inactive")
                return obj;
            };
            IndustrialEditService.$inject = ["$http", "$q"];
            return IndustrialEditService;
        }(GCPL.Service.BaseService));
        Service.IndustrialEditService = IndustrialEditService;
        app.AddService("IndustrialEditService", IndustrialEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=IndustrialSegmentMasterService.js.map