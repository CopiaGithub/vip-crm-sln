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
        var Accessory1DDService = /** @class */ (function (_super) {
            __extends(Accessory1DDService, _super);
            function Accessory1DDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AccessoryDD";
                return _this;
            }
            Accessory1DDService.prototype.Find = function (data) {
                var ModelID;
                if (data == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data;
                }
                var config = {
                    params: {
                        ModelID: ModelID,
                        SequenceNo: "1"
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Accessory1DDService.prototype.GetAccessoryName = function (data) {
                var list = Array();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    list.push({
                        Accessory1ID: item.AccessoryID,
                        Accessory1Name: item.Accessory,
                    });
                }
                return list;
            };
            Accessory1DDService.$inject = ["$http", "$q"];
            return Accessory1DDService;
        }(GCPL.Service.BaseService));
        Service.Accessory1DDService = Accessory1DDService;
        app.AddService("Accessory1DDService", Accessory1DDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Option1Service = /** @class */ (function (_super) {
            __extends(Option1Service, _super);
            function Option1Service($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "OptionDD";
                return _this;
            }
            Option1Service.prototype.Find = function (data) {
                var Accessory1ID;
                if (data == undefined) {
                    Accessory1ID = "";
                }
                else {
                    Accessory1ID = data;
                }
                var config = {
                    params: {
                        AccessoryID: Accessory1ID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Option1Service.prototype.GetAccessory = function (data) {
                var list = Array();
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    list.push({
                        Option1ID: item.OptionID,
                        Option1Name: item.OptionName,
                    });
                }
                return list;
            };
            Option1Service.$inject = ["$http", "$q"];
            return Option1Service;
        }(GCPL.Service.BaseService));
        Service.Option1Service = Option1Service;
        app.AddService("Option1Service", Option1Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Accessory2DDService = /** @class */ (function (_super) {
            __extends(Accessory2DDService, _super);
            function Accessory2DDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AccessoryDD";
                return _this;
            }
            Accessory2DDService.prototype.Find = function (data) {
                var ModelID;
                if (data == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data;
                }
                var config = {
                    params: {
                        ModelID: ModelID,
                        SequenceNo: "2"
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Accessory2DDService.prototype.GetAccessoryName = function (data) {
                var list = Array();
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    list.push({
                        Accessory2ID: item.AccessoryID,
                        Accessory2Name: item.Accessory,
                    });
                }
                return list;
            };
            Accessory2DDService.$inject = ["$http", "$q"];
            return Accessory2DDService;
        }(GCPL.Service.BaseService));
        Service.Accessory2DDService = Accessory2DDService;
        app.AddService("Accessory2DDService", Accessory2DDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Option2Service = /** @class */ (function (_super) {
            __extends(Option2Service, _super);
            function Option2Service($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "OptionDD";
                return _this;
            }
            Option2Service.prototype.Find = function (data) {
                var Accessory2ID;
                if (data == undefined) {
                    Accessory2ID = "";
                }
                else {
                    Accessory2ID = data;
                }
                var config = {
                    params: {
                        AccessoryID: Accessory2ID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Option2Service.prototype.GetAccessory = function (data) {
                var list = Array();
                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                    var item = data_4[_i];
                    list.push({
                        Option2ID: item.OptionID,
                        Option2Name: item.OptionName,
                    });
                }
                return list;
            };
            Option2Service.$inject = ["$http", "$q"];
            return Option2Service;
        }(GCPL.Service.BaseService));
        Service.Option2Service = Option2Service;
        app.AddService("Option2Service", Option2Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Accessory3DDService = /** @class */ (function (_super) {
            __extends(Accessory3DDService, _super);
            function Accessory3DDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AccessoryDD";
                return _this;
            }
            Accessory3DDService.prototype.Find = function (data) {
                var ModelID;
                if (data == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data;
                }
                var config = {
                    params: {
                        ModelID: ModelID,
                        SequenceNo: "3"
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Accessory3DDService.prototype.GetAccessoryName = function (data) {
                var list = Array();
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var item = data_5[_i];
                    list.push({
                        Accessory3ID: item.AccessoryID,
                        Accessory3Name: item.Accessory,
                    });
                }
                return list;
            };
            Accessory3DDService.$inject = ["$http", "$q"];
            return Accessory3DDService;
        }(GCPL.Service.BaseService));
        Service.Accessory3DDService = Accessory3DDService;
        app.AddService("Accessory3DDService", Accessory3DDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Option3Service = /** @class */ (function (_super) {
            __extends(Option3Service, _super);
            function Option3Service($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "OptionDD";
                return _this;
            }
            Option3Service.prototype.Find = function (data) {
                var Accessory3ID;
                if (data == undefined) {
                    Accessory3ID = "";
                }
                else {
                    Accessory3ID = data;
                }
                var config = {
                    params: {
                        AccessoryID: Accessory3ID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Option3Service.prototype.GetAccessory = function (data) {
                var list = Array();
                for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                    var item = data_6[_i];
                    list.push({
                        Option3ID: item.OptionID,
                        Option3Name: item.OptionName,
                    });
                }
                return list;
            };
            Option3Service.$inject = ["$http", "$q"];
            return Option3Service;
        }(GCPL.Service.BaseService));
        Service.Option3Service = Option3Service;
        app.AddService("Option3Service", Option3Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Accessory4DDService = /** @class */ (function (_super) {
            __extends(Accessory4DDService, _super);
            function Accessory4DDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AccessoryDD";
                return _this;
            }
            Accessory4DDService.prototype.Find = function (data) {
                var ModelID;
                if (data == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data;
                }
                var config = {
                    params: {
                        ModelID: ModelID,
                        SequenceNo: "4"
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Accessory4DDService.prototype.GetAccessoryName = function (data) {
                var list = Array();
                for (var _i = 0, data_7 = data; _i < data_7.length; _i++) {
                    var item = data_7[_i];
                    list.push({
                        Accessory4ID: item.AccessoryID,
                        Accessory4Name: item.Accessory,
                    });
                }
                return list;
            };
            Accessory4DDService.$inject = ["$http", "$q"];
            return Accessory4DDService;
        }(GCPL.Service.BaseService));
        Service.Accessory4DDService = Accessory4DDService;
        app.AddService("Accessory4DDService", Accessory4DDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Option4Service = /** @class */ (function (_super) {
            __extends(Option4Service, _super);
            function Option4Service($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "OptionDD";
                return _this;
            }
            Option4Service.prototype.Find = function (data) {
                var Accessory4ID;
                if (data == undefined) {
                    Accessory4ID = "";
                }
                else {
                    Accessory4ID = data;
                }
                var config = {
                    params: {
                        AccessoryID: Accessory4ID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Option4Service.prototype.GetAccessory = function (data) {
                var list = Array();
                for (var _i = 0, data_8 = data; _i < data_8.length; _i++) {
                    var item = data_8[_i];
                    list.push({
                        Option4ID: item.OptionID,
                        Option4Name: item.OptionName,
                    });
                }
                return list;
            };
            Option4Service.$inject = ["$http", "$q"];
            return Option4Service;
        }(GCPL.Service.BaseService));
        Service.Option4Service = Option4Service;
        app.AddService("Option4Service", Option4Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Accessory5DDService = /** @class */ (function (_super) {
            __extends(Accessory5DDService, _super);
            function Accessory5DDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AccessoryDD";
                return _this;
            }
            Accessory5DDService.prototype.Find = function (data) {
                var ModelID;
                if (data == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data;
                }
                var config = {
                    params: {
                        ModelID: ModelID,
                        SequenceNo: "5"
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Accessory5DDService.prototype.GetAccessoryName = function (data) {
                var list = Array();
                for (var _i = 0, data_9 = data; _i < data_9.length; _i++) {
                    var item = data_9[_i];
                    list.push({
                        Accessory5ID: item.AccessoryID,
                        Accessory5Name: item.Accessory,
                    });
                }
                return list;
            };
            Accessory5DDService.$inject = ["$http", "$q"];
            return Accessory5DDService;
        }(GCPL.Service.BaseService));
        Service.Accessory5DDService = Accessory5DDService;
        app.AddService("Accessory5DDService", Accessory5DDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Option5Service = /** @class */ (function (_super) {
            __extends(Option5Service, _super);
            function Option5Service($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "OptionDD";
                return _this;
            }
            Option5Service.prototype.Find = function (data) {
                var Accessory5ID;
                if (data == undefined) {
                    Accessory5ID = "";
                }
                else {
                    Accessory5ID = data;
                }
                var config = {
                    params: {
                        AccessoryID: Accessory5ID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Option5Service.prototype.GetAccessory = function (data) {
                var list = Array();
                for (var _i = 0, data_10 = data; _i < data_10.length; _i++) {
                    var item = data_10[_i];
                    list.push({
                        Option5ID: item.OptionID,
                        Option5Name: item.OptionName,
                    });
                }
                return list;
            };
            Option5Service.$inject = ["$http", "$q"];
            return Option5Service;
        }(GCPL.Service.BaseService));
        Service.Option5Service = Option5Service;
        app.AddService("Option5Service", Option5Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Accessory6DDService = /** @class */ (function (_super) {
            __extends(Accessory6DDService, _super);
            function Accessory6DDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "AccessoryDD";
                return _this;
            }
            Accessory6DDService.prototype.Find = function (data) {
                var ModelID;
                if (data == undefined) {
                    ModelID = "";
                }
                else {
                    ModelID = data;
                }
                var config = {
                    params: {
                        ModelID: ModelID,
                        SequenceNo: "6"
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Accessory6DDService.prototype.GetAccessoryName = function (data) {
                var list = Array();
                for (var _i = 0, data_11 = data; _i < data_11.length; _i++) {
                    var item = data_11[_i];
                    list.push({
                        Accessory6ID: item.AccessoryID,
                        Accessory6Name: item.Accessory,
                    });
                }
                return list;
            };
            Accessory6DDService.$inject = ["$http", "$q"];
            return Accessory6DDService;
        }(GCPL.Service.BaseService));
        Service.Accessory6DDService = Accessory6DDService;
        app.AddService("Accessory6DDService", Accessory6DDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Option6Service = /** @class */ (function (_super) {
            __extends(Option6Service, _super);
            function Option6Service($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "OptionDD";
                return _this;
            }
            Option6Service.prototype.Find = function (data) {
                var Accessory6ID;
                if (data == undefined) {
                    Accessory6ID = "";
                }
                else {
                    Accessory6ID = data;
                }
                var config = {
                    params: {
                        AccessoryID: Accessory6ID
                    }
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Option6Service.prototype.GetAccessory = function (data) {
                var list = Array();
                for (var _i = 0, data_12 = data; _i < data_12.length; _i++) {
                    var item = data_12[_i];
                    list.push({
                        Option6ID: item.OptionID,
                        Option6Name: item.OptionName,
                    });
                }
                return list;
            };
            Option6Service.$inject = ["$http", "$q"];
            return Option6Service;
        }(GCPL.Service.BaseService));
        Service.Option6Service = Option6Service;
        app.AddService("Option6Service", Option6Service);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Configuration1 dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Configuration1DDService = /** @class */ (function (_super) {
            __extends(Configuration1DDService, _super);
            function Configuration1DDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "Configuration1DD";
                return _this;
            }
            Configuration1DDService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Configuration1DDService.prototype.GetConfig = function (data) {
                var list = Array();
                for (var _i = 0, data_13 = data; _i < data_13.length; _i++) {
                    var item = data_13[_i];
                    list.push({
                        Config1ID: item.Config1ID.toString(),
                        ConfigName: item.ConfigName,
                    });
                }
                return list;
            };
            Configuration1DDService.$inject = ["$http", "$q"];
            return Configuration1DDService;
        }(GCPL.Service.BaseService));
        Service.Configuration1DDService = Configuration1DDService;
        app.AddService("Configuration1DDService", Configuration1DDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Configuration2 dd
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var Configuration2DDService = /** @class */ (function (_super) {
            __extends(Configuration2DDService, _super);
            function Configuration2DDService($http, $q) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this.apiUrl = "";
                _this.apiUrl = _this.url + "/" + "Configuration2DD";
                return _this;
            }
            Configuration2DDService.prototype.Find = function () {
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: this.apiUrl,
                    Config: config
                });
            };
            Configuration2DDService.prototype.GetConfigName = function (data) {
                var list = Array();
                for (var _i = 0, data_14 = data; _i < data_14.length; _i++) {
                    var item = data_14[_i];
                    list.push({
                        Config2ID: item.Config2ID.toString(),
                        ConfigurationName: item.ConfigurationName,
                    });
                }
                return list;
            };
            Configuration2DDService.$inject = ["$http", "$q"];
            return Configuration2DDService;
        }(GCPL.Service.BaseService));
        Service.Configuration2DDService = Configuration2DDService;
        app.AddService("Configuration2DDService", Configuration2DDService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//SOS View
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var ScopeofSupplyService = /** @class */ (function (_super) {
            __extends(ScopeofSupplyService, _super);
            function ScopeofSupplyService($http, $q, _cookieStore) {
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
            ScopeofSupplyService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CreateQuotation";
                var OpportunitySAPNo;
                if (data == undefined) {
                    OpportunitySAPNo = "";
                }
                else {
                    OpportunitySAPNo = data;
                }
                var config = {
                    params: {
                        OpportunitySAPNo: OpportunitySAPNo
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ScopeofSupplyService.prototype.GetSOS = function (data) {
                var obj = new model.SOSModel();
                obj.ModelDescription = data.ModelDescription;
                obj.ModelID = data.ModelID;
                obj.ModelNo = data.ModelNo;
                obj.StdConfiguration = data.StdConfiguration;
                obj.GSTRate = data.GSTRate;
                obj.Price = data.Price;
                obj.Quantity = data.Quantity;
                return obj;
            };
            ScopeofSupplyService.$inject = ["$http", "$q", "$cookieStore"];
            return ScopeofSupplyService;
        }(GCPL.Service.BaseService));
        Service.ScopeofSupplyService = ScopeofSupplyService;
        app.AddService("ScopeofSupplyService", ScopeofSupplyService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//CL View
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var CoveringLetterInfoService = /** @class */ (function (_super) {
            __extends(CoveringLetterInfoService, _super);
            function CoveringLetterInfoService($http, $q, _cookieStore) {
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
            CoveringLetterInfoService.prototype.Find = function (data) {
                var url = this.apiUrl + "/CoveringLetter";
                var OpportunitySAPNo;
                if (data == undefined) {
                    OpportunitySAPNo = "";
                }
                else {
                    OpportunitySAPNo = data;
                }
                var config = {
                    params: {
                        OpportunitySAPNo: OpportunitySAPNo,
                        UserID: this.Cookie.get('UserInfo')['UserID']
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CoveringLetterInfoService.prototype.GetCL = function (data) {
                var obj = new model.COLModel();
                obj.OpportunitySAPNo = data.OpportunitySAPNo;
                obj.CustomerID = data.CustomerID;
                obj.CustomerName = data.CustomerName;
                obj.Address = data.Address;
                obj.SOAddress1 = data.SOAddress1;
                obj.SOAddress2 = data.SOAddress2;
                obj.SOAddress3 = data.SOAddress3;
                obj.SOAddress4 = data.SOAddress4;
                obj.UserName = data.UserName;
                obj.Role = data.Role;
                obj.Email = data.Email;
                obj.PhoneNo = data.PhoneNo;
                obj.QuoteRange = data.QuoteRange;
                obj.Subject = data.Subject;
                obj.ContactName = data.ContactName;
                return obj;
            };
            CoveringLetterInfoService.$inject = ["$http", "$q", "$cookieStore"];
            return CoveringLetterInfoService;
        }(GCPL.Service.BaseService));
        Service.CoveringLetterInfoService = CoveringLetterInfoService;
        app.AddService("CoveringLetterInfoService", CoveringLetterInfoService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//PF View
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var ProductFeaturesInfoService = /** @class */ (function (_super) {
            __extends(ProductFeaturesInfoService, _super);
            function ProductFeaturesInfoService($http, $q, _cookieStore) {
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
            ProductFeaturesInfoService.prototype.Find = function (data) {
                var url = this.apiUrl + "/ProductFeatures";
                var OpportunitySAPNo;
                if (data == undefined) {
                    OpportunitySAPNo = "";
                }
                else {
                    OpportunitySAPNo = data;
                }
                var config = {
                    params: {
                        OpportunitySAPNo: OpportunitySAPNo
                    }
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            ProductFeaturesInfoService.prototype.GetPF = function (data) {
                var list = Array();
                for (var _i = 0, data_15 = data; _i < data_15.length; _i++) {
                    var item = data_15[_i];
                    list.push({
                        OpportunitySAPNo: item.OpportunitySAPNo,
                        FeatureDescription: item.FeatureDescription,
                        ModelID: item.ModelID,
                        FeatureName: item.FeatureName,
                        ProductFeaturesID: item.ProductFeaturesID,
                        PictureID: item.PictureID
                    });
                }
                return list;
            };
            ProductFeaturesInfoService.$inject = ["$http", "$q", "$cookieStore"];
            return ProductFeaturesInfoService;
        }(GCPL.Service.BaseService));
        Service.ProductFeaturesInfoService = ProductFeaturesInfoService;
        app.AddService("ProductFeaturesInfoService", ProductFeaturesInfoService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Terms Conditions View
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var TermsConditionInfoService = /** @class */ (function (_super) {
            __extends(TermsConditionInfoService, _super);
            function TermsConditionInfoService($http, $q, _cookieStore) {
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
            TermsConditionInfoService.prototype.Find = function () {
                var url = this.apiUrl + "/TermsConditions";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            TermsConditionInfoService.prototype.GetTC = function (data) {
                var list = Array();
                for (var _i = 0, data_16 = data; _i < data_16.length; _i++) {
                    var item = data_16[_i];
                    list.push({
                        TACID: item.TACID,
                        Description: item.Description,
                        TACName: item.TACName
                    });
                }
                return list;
            };
            TermsConditionInfoService.$inject = ["$http", "$q", "$cookieStore"];
            return TermsConditionInfoService;
        }(GCPL.Service.BaseService));
        Service.TermsConditionInfoService = TermsConditionInfoService;
        app.AddService("TermsConditionInfoService", TermsConditionInfoService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Offering View
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var OfferingInfoService = /** @class */ (function (_super) {
            __extends(OfferingInfoService, _super);
            function OfferingInfoService($http, $q, _cookieStore) {
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
            OfferingInfoService.prototype.Find = function () {
                var url = this.apiUrl + "/OfferingList";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            OfferingInfoService.prototype.GetOffer = function (data) {
                var list = Array();
                for (var _i = 0, data_17 = data; _i < data_17.length; _i++) {
                    var item = data_17[_i];
                    list.push({
                        OfferingID: item.OfferingID,
                        Description: item.Description,
                        OfferingName: item.OfferingName,
                        PictureID: item.PictureID
                    });
                }
                return list;
            };
            OfferingInfoService.$inject = ["$http", "$q", "$cookieStore"];
            return OfferingInfoService;
        }(GCPL.Service.BaseService));
        Service.OfferingInfoService = OfferingInfoService;
        app.AddService("OfferingInfoService", OfferingInfoService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//Capabilities View
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var CapabilitiesInfoService = /** @class */ (function (_super) {
            __extends(CapabilitiesInfoService, _super);
            function CapabilitiesInfoService($http, $q, _cookieStore) {
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
            CapabilitiesInfoService.prototype.Find = function () {
                var url = this.apiUrl + "/CapabilitiesList";
                var config = {
                    params: {}
                };
                return this.ajaXUtility.Get({
                    Url: url,
                    Config: config
                });
            };
            CapabilitiesInfoService.prototype.GetCapability = function (data) {
                var list = Array();
                for (var _i = 0, data_18 = data; _i < data_18.length; _i++) {
                    var item = data_18[_i];
                    list.push({
                        CapabilityID: item.CapabilityID,
                        CapabilityName: item.CapabilityName,
                        CapabilityDetails: item.CapabilityDetails,
                        PictureID: item.PictureID
                    });
                }
                return list;
            };
            CapabilitiesInfoService.$inject = ["$http", "$q", "$cookieStore"];
            return CapabilitiesInfoService;
        }(GCPL.Service.BaseService));
        Service.CapabilitiesInfoService = CapabilitiesInfoService;
        app.AddService("CapabilitiesInfoService", CapabilitiesInfoService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var model = GCPL.Model;
        var TotalPriceService = /** @class */ (function (_super) {
            __extends(TotalPriceService, _super);
            function TotalPriceService($http, $q, _cookieStore) {
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
            TotalPriceService.prototype.FindChange = function (TotalPriceModel) {
                var url = this.url + "/" + "GetTotalPrice";
                var config = {
                    params: {
                        dto: TotalPriceModel,
                    }
                };
                return this.ajaXUtility.Post({
                    Url: url,
                    data: TotalPriceModel
                });
            };
            TotalPriceService.prototype.GetTotalPriceChange = function (data) {
                var list = new model.TotalPriceModel();
                list.TotalPrice = data.TotalPrice;
                list.TotalTax = data.TotalTax;
                list.Quantity = data.Quantity;
                list.ConvertedGST = data.ConvertedGST;
                list.GSTRate = data.GSTRate;
                list.Price = data.Price;
                return list;
            };
            TotalPriceService.$inject = ["$http", "$q", "$cookieStore"];
            return TotalPriceService;
        }(GCPL.Service.BaseService));
        Service.TotalPriceService = TotalPriceService;
        app.AddService("TotalPriceService", TotalPriceService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Service;
    (function (Service) {
        var app = GCPL.app;
        var InsertQuotationService = /** @class */ (function (_super) {
            __extends(InsertQuotationService, _super);
            function InsertQuotationService($http, $q, _cookieStore) {
                var _this = _super.call(this, $http, $q) || this;
                _this.$http = $http;
                _this.$q = $q;
                _this._cookieStore = _cookieStore;
                _this.apiUrl = "";
                _this.Cookie = null;
                _this.apiUrl = _this.url + "/" + "InsertQuotationMaster";
                _this.Cookie = _cookieStore;
                return _this;
            }
            InsertQuotationService.prototype.Find = function () {
                return this.ajaXUtility.Get({ Url: this.apiUrl });
            };
            InsertQuotationService.prototype.PostQuote = function (data) {
                var url = this.apiUrl;
                // console.log(url);
                return this.ajaXUtility.Post({ Url: url, data: data });
            };
            InsertQuotationService.$inject = ["$http", "$q", "$cookieStore"];
            return InsertQuotationService;
        }(GCPL.Service.BaseService));
        Service.InsertQuotationService = InsertQuotationService;
        app.AddService("InsertQuotationService", InsertQuotationService);
    })(Service = GCPL.Service || (GCPL.Service = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateQuotationService.js.map