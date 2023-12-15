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
        var CreateDARUploadService = /** @class */ (function (_super) {
            __extends(CreateDARUploadService, _super);
            function CreateDARUploadService($http, $q, _cookieStore) {
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
            CreateDARUploadService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CreateDAR";
                var DARNo;
                if (data == undefined) {
                    DARNo = "";
                }
                else {
                    DARNo = data;
                }
                var config = {
                    params: {
                        DARNo: DARNo
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateDARUploadService.prototype.GetData = function (data) {
                debugger;
                var obj = new model.CreateDARUploadModel();
                obj.OpportunityID = data.OpportunityID,
                    obj.OppStatusID = data.OppStatusID,
                    obj.OppStatus = data.OppStatus,
                    obj.CustomerName = data.CustomerName,
                    obj.CustomerID = data.CustomerID,
                    obj.DARID = data.DARID,
                    obj.Status = data.Status,
                    obj.StatusID = data.StatusID,
                    obj.ApplicationForm = data.ApplicationForm,
                    obj.PanFormNo16 = data.PanFormNo16,
                    obj.IDAddProof = data.IDAddProof,
                    obj.Photograph = data.Photograph,
                    obj.BankNo = data.BankNo,
                    obj.FleetList = data.FleetList,
                    obj.ExistingVehicleReg = data.ExistingVehicleReg,
                    obj.ExistingLoanScheduleTrack = data.ExistingLoanScheduleTrack,
                    obj.ITRandAuditReport_CY = data.ITRandAuditReport_CY,
                    obj.ITRandAuditReport_CY_1 = data.ITRandAuditReport_CY_1,
                    obj.WorkOrder_IfAvailable = data.WorkOrder_IfAvailable,
                    obj.CertiIncorp = data.CertiIncorp,
                    obj.MemoandArticle = data.MemoandArticle,
                    obj.PANofCompany = data.PANofCompany,
                    obj.ExtractRegiComp = data.ExtractRegiComp,
                    obj.ResolutionBoard = data.ResolutionBoard,
                    obj.LegalSuits = data.LegalSuits,
                    obj.Doc1Pic = data.Doc1Pic,
                    obj.Doc2Pic = data.Doc2Pic,
                    obj.Doc3Pic = data.Doc3Pic,
                    obj.Doc1Text = data.Doc1Text,
                    obj.Doc2Text = data.Doc2Text,
                    obj.Doc3Text = data.Doc3Text,
                    obj.CreatedBy = data.CreatedBy,
                    obj.CatQuoteRef = data.CatQuoteRef,
                    obj.CustomerType = data.CustomerType;
                return obj;
            };
            CreateDARUploadService.prototype.FindComments = function (data) {
                var url = this.apiUrl + "/RejectedComments";
                var DARNo;
                if (data == undefined) {
                    DARNo = "";
                }
                else {
                    DARNo = data;
                }
                var config = {
                    params: {
                        DARNo: DARNo
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CreateDARUploadService.prototype.GetComments = function (data) {
                debugger;
                var obj = new model.RejectCommentModel();
                obj.ID = data.ID,
                    obj.ApproverComments = data.ApproverComments;
                return obj;
            };
            CreateDARUploadService.$inject = ["$http", "$q", "$cookieStore"];
            return CreateDARUploadService;
        }(GCPL.Service.BaseService));
        Service.CreateDARUploadService = CreateDARUploadService;
        app.AddService("CreateDARUploadService", CreateDARUploadService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var GetDARDetails = /** @class */ (function (_super) {
            __extends(GetDARDetails, _super);
            function GetDARDetails($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/";
                _this.Cookie = _cookieStore;
                return _this;
            }
            GetDARDetails.prototype.FindGrid = function (data) {
                var Url = this.apiUrl + "GetDARDetails";
                var CustomerID;
                var UserID;
                var DARID;
                if (data.CustomerID == undefined) {
                    CustomerID = '';
                }
                else {
                    CustomerID = data.CustomerID;
                }
                if (data.DARID == undefined) {
                    DARID = '';
                }
                else {
                    DARID = data.DARID;
                }
                var config = {
                    params: {
                        CustomerID: CustomerID,
                        DARID: DARID,
                        UserID: this.Cookie.get('UserInfo')['UserID'],
                        RoleID: this.Cookie.get('UserInfo')['RoleID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: Url,
                    Config: config
                });
            };
            GetDARDetails.prototype.GetDAR = function (data) {
                var list = new Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        CustomerID: item.CustomerID,
                        CustomerName: item.CustomerName,
                        DARNo: item.DARNo,
                        CreatedBy: item.CreatedBy,
                        SubmittedBy: item.SubmittedBy,
                        OpportunityID: item.OpportunityID,
                        StatusID: item.StatusID,
                        Status: item.Status,
                        ApprovedBy: item.ApprovedBy,
                        ApprovedByName: item.ApprovedByName,
                        ApprovedDate: item.ApprovedDate,
                        ApproverComments: item.ApproverComments
                    });
                }
                return list;
            };
            GetDARDetails.$inject = ["$http", "$q", "$cookieStore"];
            return GetDARDetails;
        }(GCPL.Service.BaseService));
        Service.GetDARDetails = GetDARDetails;
        app.AddService("GetDARDetails", GetDARDetails);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Insert Update DAR
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertUpdateDARService = /** @class */ (function (_super) {
            __extends(InsertUpdateDARService, _super);
            function InsertUpdateDARService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertDARDetails";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertUpdateDARService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertUpdateDARService.prototype.PostDAR = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertUpdateDARService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertUpdateDARService;
        }(GCPL.Service.BaseService));
        Service.InsertUpdateDARService = InsertUpdateDARService;
        app.AddService("InsertUpdateDARService", InsertUpdateDARService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var UploadPDFService = /** @class */ (function (_super) {
            __extends(UploadPDFService, _super);
            function UploadPDFService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                return _this;
                //this.apiUrl = `${this.url}/${"APIPutProductReview"}`;
            }
            UploadPDFService.prototype.UploadImage = function (data) {
                var config = {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                };
                var url = this.url + "/" + "PDFUpload";
                return this.ajaXUtility.Post({
                    Url: url,
                    data: data,
                    Config: config
                });
            };
            UploadPDFService.$inject = ["$http", "$q"];
            return UploadPDFService;
        }(GCPL.Service.BaseService));
        Service.UploadPDFService = UploadPDFService;
        //inject service
        app.AddService("UploadPDFService", UploadPDFService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var EditDARDetailsService = /** @class */ (function (_super) {
            __extends(EditDARDetailsService, _super);
            function EditDARDetailsService($http, $q, _cookieStore) {
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
            EditDARDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/EditDAR";
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
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            EditDARDetailsService.prototype.GetEditData = function (data) {
                debugger;
                var obj = new model.EditDARModel();
                obj.OpportunityID = data.OpportunityID,
                    obj.OpportunityNo = data.OpportunityNo,
                    obj.OppStatus = data.OppStatus,
                    obj.CustomerName = data.CustomerName,
                    obj.CustomerID = data.CustomerID,
                    obj.DARStatus = data.DARStatus,
                    obj.DARID = data.DARID;
                return obj;
            };
            EditDARDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return EditDARDetailsService;
        }(GCPL.Service.BaseService));
        Service.EditDARDetailsService = EditDARDetailsService;
        app.AddService("EditDARDetailsService", EditDARDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ViewDARDetailsService = /** @class */ (function (_super) {
            __extends(ViewDARDetailsService, _super);
            function ViewDARDetailsService($http, $q, _cookieStore) {
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
            ViewDARDetailsService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ViewDAR";
                var DARNo;
                if (data == undefined) {
                    DARNo = "";
                }
                else {
                    DARNo = data;
                }
                var config = {
                    params: {
                        DARNo: DARNo
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ViewDARDetailsService.prototype.GetViewData = function (data) {
                debugger;
                var obj = new model.ViewDARUploadModel();
                obj.OpportunityID = data.OpportunityID,
                    obj.OppStatusID = data.OppStatusID,
                    obj.OppStatus = data.OppStatus,
                    obj.CustomerName = data.CustomerName,
                    obj.CustomerID = data.CustomerID,
                    obj.DARID = data.DARID,
                    obj.Status = data.Status,
                    obj.StatusID = data.StatusID,
                    obj.ApplicationForm = data.ApplicationForm,
                    obj.PanFormNo16 = data.PanFormNo16,
                    obj.IDAddProof = data.IDAddProof,
                    obj.Photograph = data.Photograph,
                    obj.BankNo = data.BankNo,
                    obj.FleetList = data.FleetList,
                    obj.ExistingVehicleReg = data.ExistingVehicleReg,
                    obj.ExistingLoanScheduleTrack = data.ExistingLoanScheduleTrack,
                    obj.ITRandAuditReport_CY = data.ITRandAuditReport_CY,
                    obj.ITRandAuditReport_CY_1 = data.ITRandAuditReport_CY_1,
                    obj.WorkOrder_IfAvailable = data.WorkOrder_IfAvailable,
                    obj.CertiIncorp = data.CertiIncorp,
                    obj.MemoandArticle = data.MemoandArticle,
                    obj.PANofCompany = data.PANofCompany,
                    obj.ExtractRegiComp = data.ExtractRegiComp,
                    obj.ResolutionBoard = data.ResolutionBoard,
                    obj.LegalSuits = data.LegalSuits,
                    obj.Doc1Pic = data.Doc1Pic,
                    obj.Doc2Pic = data.Doc2Pic,
                    obj.Doc3Pic = data.Doc3Pic,
                    obj.Doc1Text = data.Doc1Text,
                    obj.Doc2Text = data.Doc2Text,
                    obj.Doc3Text = data.Doc3Text,
                    obj.CreatedBy = data.CreatedBy,
                    obj.CatQuoteRef = data.CatQuoteRef,
                    obj.CustomerType = data.CustomerType;
                return obj;
            };
            ViewDARDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return ViewDARDetailsService;
        }(GCPL.Service.BaseService));
        Service.ViewDARDetailsService = ViewDARDetailsService;
        app.AddService("ViewDARDetailsService", ViewDARDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UploadDocumentsService.js.map