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
        var AddToCartDsService = /** @class */ (function (_super) {
            __extends(AddToCartDsService, _super);
            function AddToCartDsService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertDsInCart";
                _this.Cookie = _cookieStore;
                return _this;
            }
            AddToCartDsService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            AddToCartDsService.prototype.PostDeliveryScheduleToCart = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            AddToCartDsService.$inject = ["$http", "$q", "$cookieStore"];
            return AddToCartDsService;
        }(GCPL.Service.BaseService));
        Service.AddToCartDsService = AddToCartDsService;
        app.AddService("AddToCartDsService", AddToCartDsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Delivery Schedule List
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeliveryScheduleListService = /** @class */ (function (_super) {
            __extends(DeliveryScheduleListService, _super);
            function DeliveryScheduleListService($http, $q, _cookieStore) {
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
            DeliveryScheduleListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/DeliveryScheduleList";
                var config = {
                    params: {
                        // UserID: this.Cookie.get('UserInfo')['UserID'],
                        ItemID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            DeliveryScheduleListService.prototype.GetLeadItemList = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        ID: item.ID,
                        ItemID: item.ItemID,
                        ProductID: item.ProductID,
                        ProductCode: item.ProductCode,
                        ProductDesc: item.ProductDesc,
                        UserID: item.UserID,
                        LeadID: item.LeadID,
                        DeliveryDate: item.DeliveryDate,
                        DeliveryQty: item.DeliveryQty,
                        EditState: item.EditState,
                        index: item.index
                    });
                }
                return list;
            };
            DeliveryScheduleListService.$inject = ["$http", "$q", "$cookieStore"];
            return DeliveryScheduleListService;
        }(GCPL.Service.BaseService));
        Service.DeliveryScheduleListService = DeliveryScheduleListService;
        app.AddService("DeliveryScheduleListService", DeliveryScheduleListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteDsFromAddToCartService = /** @class */ (function (_super) {
            __extends(DeleteDsFromAddToCartService, _super);
            function DeleteDsFromAddToCartService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteDs";
                return _this;
            }
            DeleteDsFromAddToCartService.prototype.Find = function (data) {
                var config = {
                    params: {
                        DsID: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteDsFromAddToCartService.prototype.postDsDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteDsFromAddToCartService.$inject = ["$http", "$q"];
            return DeleteDsFromAddToCartService;
        }(GCPL.Service.BaseService));
        Service.DeleteDsFromAddToCartService = DeleteDsFromAddToCartService;
        app.AddService("DeleteDsFromAddToCartService", DeleteDsFromAddToCartService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertDsDetailsService = /** @class */ (function (_super) {
            __extends(InsertDsDetailsService, _super);
            function InsertDsDetailsService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertDsDetails";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertDsDetailsService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertDsDetailsService.prototype.PostDS = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertDsDetailsService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertDsDetailsService;
        }(GCPL.Service.BaseService));
        Service.InsertDsDetailsService = InsertDsDetailsService;
        app.AddService("InsertDsDetailsService", InsertDsDetailsService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertDsDetailsEditService = /** @class */ (function (_super) {
            __extends(InsertDsDetailsEditService, _super);
            function InsertDsDetailsEditService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertDsDetailsEdit";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertDsDetailsEditService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertDsDetailsEditService.prototype.PostDSEdit = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertDsDetailsEditService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertDsDetailsEditService;
        }(GCPL.Service.BaseService));
        Service.InsertDsDetailsEditService = InsertDsDetailsEditService;
        app.AddService("InsertDsDetailsEditService", InsertDsDetailsEditService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var EditDSListService = /** @class */ (function (_super) {
            __extends(EditDSListService, _super);
            function EditDSListService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DSListEdit";
                return _this;
            }
            EditDSListService.prototype.Find = function (data) {
                var ID;
                if (data == undefined) {
                    ID = "";
                }
                else {
                    ID = data;
                }
                var config = {
                    params: {
                        ID: ID
                    }
                };
                console.log(config);
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            EditDSListService.prototype.GetDSEdit = function (data) {
                var obj = new model.DeliveryScheduleModel();
                obj.ID = data.ID,
                    obj.ItemID = data.ItemID,
                    obj.ProductID = data.ProductID,
                    obj.ProductCode = data.ProductCode,
                    obj.ProductDesc = data.ProductDesc,
                    obj.UserID = data.UserID,
                    obj.LeadID = data.LeadID,
                    obj.DeliveryDate = data.DeliveryDate,
                    obj.DeliveryQty = data.DeliveryQty;
                obj.EditState = data.EditState;
                console.log("EditDSListService", obj);
                return obj;
            };
            EditDSListService.$inject = ["$http", "$q"];
            return EditDSListService;
        }(GCPL.Service.BaseService));
        Service.EditDSListService = EditDSListService;
        app.AddService("EditDSListService", EditDSListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var LeadItemNewDSListService = /** @class */ (function (_super) {
            __extends(LeadItemNewDSListService, _super);
            function LeadItemNewDSListService($http, $q, _cookieStore) {
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
            LeadItemNewDSListService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ItemListNewDS";
                var config = {
                    params: {
                        // UserID: this.Cookie.get('UserInfo')['UserID'],
                        LeadID: data
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            LeadItemNewDSListService.prototype.GetLeadItemNewDSList = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        LeadID: item.LeadID,
                        ItemID: item.ItemID,
                        ProductDesc: item.ProductDesc,
                        Quantity: item.Quantity,
                        Status: item.Status,
                        ModelID: item.ModelID,
                        ItemStatus: item.ItemStatus,
                        ItemCode: item.ProductCode,
                        MRPUnit: item.MRPUnit,
                        GST: item.GST,
                        NetAmount: item.NetAmount,
                        DeliveryStatus: item.DeliveryStatus,
                        index: item.index
                    });
                }
                return list;
            };
            LeadItemNewDSListService.$inject = ["$http", "$q", "$cookieStore"];
            return LeadItemNewDSListService;
        }(GCPL.Service.BaseService));
        Service.LeadItemNewDSListService = LeadItemNewDSListService;
        app.AddService("LeadItemNewDSListService", LeadItemNewDSListService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var DeleteDSItemService = /** @class */ (function (_super) {
            __extends(DeleteDSItemService, _super);
            function DeleteDSItemService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "DeleteDSItem";
                return _this;
            }
            DeleteDSItemService.prototype.Find = function (data) {
                var config = {
                    params: {
                        ItemID: data
                    }
                };
                return this.ajaXUtility.Post({
                    Url: this.apiUrl,
                    data: data,
                    Config: config
                });
            };
            DeleteDSItemService.prototype.postDSItemDelete = function (data) {
                var url = this.apiUrl;
                this.$http.post(url, data).then(function (response) {
                });
            };
            DeleteDSItemService.$inject = ["$http", "$q"];
            return DeleteDSItemService;
        }(GCPL.Service.BaseService));
        Service.DeleteDSItemService = DeleteDSItemService;
        app.AddService("DeleteDSItemService", DeleteDSItemService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DeliveryScheduleService.js.map