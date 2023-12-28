
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccessory1DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessoryName(data: any): Array<model.Accessory1ddlModel>;
    }
    export class Accessory1DDService extends GCPL.Service.BaseService implements IAccessory1DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AccessoryDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ModelID;
            if (data == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data;
            }
            let config = {
                params: {
                    ModelID: ModelID,
                    SequenceNo: "1"
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessoryName(data: any): Array<model.Accessory1ddlModel> {
            let list = Array<model.Accessory1ddlModel>();
            for (let item of data) {
                list.push({
                    Accessory1ID: item.AccessoryID,
                    Accessory1Name: item.Accessory,
                });
            }
            return list;
        }
    }

    app.AddService("Accessory1DDService", Accessory1DDService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOption1DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessory(data: any): Array<model.Option1ddlModel>;
    }
    export class Option1Service extends GCPL.Service.BaseService implements IOption1DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OptionDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Accessory1ID;
            if (data == undefined) {
                Accessory1ID = "";
            }
            else {
                Accessory1ID = data;
            }
            let config = {
                params: {
                    AccessoryID: Accessory1ID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessory(data: any): Array<model.Option1ddlModel> {
            let list = Array<model.Option1ddlModel>();
            for (let item of data) {
                list.push({
                    Option1ID: item.OptionID,
                    Option1Name: item.OptionName,
                });
            }
            return list;
        }
    }

    app.AddService("Option1Service", Option1Service);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccessory2DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessoryName(data: any): Array<model.Accessory2ddlModel>;
    }
    export class Accessory2DDService extends GCPL.Service.BaseService implements IAccessory2DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AccessoryDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ModelID;
            if (data == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data;
            }
            let config = {
                params: {
                    ModelID: ModelID,
                    SequenceNo: "2"
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessoryName(data: any): Array<model.Accessory2ddlModel> {
            let list = Array<model.Accessory2ddlModel>();
            for (let item of data) {
                list.push({
                    Accessory2ID: item.AccessoryID,
                    Accessory2Name: item.Accessory,
                });
            }
            return list;
        }
    }

    app.AddService("Accessory2DDService", Accessory2DDService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOption2DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessory(data: any): Array<model.Option2ddlModel>;
    }
    export class Option2Service extends GCPL.Service.BaseService implements IOption2DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OptionDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Accessory2ID;
            if (data == undefined) {
                Accessory2ID = "";
            }
            else {
                Accessory2ID = data;
            }
            let config = {
                params: {
                    AccessoryID: Accessory2ID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessory(data: any): Array<model.Option2ddlModel> {
            let list = Array<model.Option2ddlModel>();
            for (let item of data) {
                list.push({
                    Option2ID: item.OptionID,
                    Option2Name: item.OptionName,
                });
            }
            return list;
        }
    }

    app.AddService("Option2Service", Option2Service);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccessory3DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessoryName(data: any): Array<model.Accessory3ddlModel>;
    }
    export class Accessory3DDService extends GCPL.Service.BaseService implements IAccessory3DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AccessoryDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ModelID;
            if (data == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data;
            }
            let config = {
                params: {
                    ModelID: ModelID,
                    SequenceNo: "3"
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessoryName(data: any): Array<model.Accessory3ddlModel> {
            let list = Array<model.Accessory3ddlModel>();
            for (let item of data) {
                list.push({
                    Accessory3ID: item.AccessoryID,
                    Accessory3Name: item.Accessory,
                });
            }
            return list;
        }
    }

    app.AddService("Accessory3DDService", Accessory3DDService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOption3DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessory(data: any): Array<model.Option3ddlModel>;
    }
    export class Option3Service extends GCPL.Service.BaseService implements IOption3DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OptionDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Accessory3ID;
            if (data == undefined) {
                Accessory3ID = "";
            }
            else {
                Accessory3ID = data;
            }
            let config = {
                params: {
                    AccessoryID: Accessory3ID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessory(data: any): Array<model.Option3ddlModel> {
            let list = Array<model.Option3ddlModel>();
            for (let item of data) {
                list.push({
                    Option3ID: item.OptionID,
                    Option3Name: item.OptionName,
                });
            }
            return list;
        }
    }

    app.AddService("Option3Service", Option3Service);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccessory4DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessoryName(data: any): Array<model.Accessory4ddlModel>;
    }
    export class Accessory4DDService extends GCPL.Service.BaseService implements IAccessory4DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AccessoryDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ModelID;
            if (data == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data;
            }
            let config = {
                params: {
                    ModelID: ModelID,
                    SequenceNo: "4"
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessoryName(data: any): Array<model.Accessory4ddlModel> {
            let list = Array<model.Accessory4ddlModel>();
            for (let item of data) {
                list.push({
                    Accessory4ID: item.AccessoryID,
                    Accessory4Name: item.Accessory,
                });
            }
            return list;
        }
    }

    app.AddService("Accessory4DDService", Accessory4DDService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOption4DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessory(data: any): Array<model.Option4ddlModel>;
    }
    export class Option4Service extends GCPL.Service.BaseService implements IOption4DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OptionDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Accessory4ID;
            if (data == undefined) {
                Accessory4ID = "";
            }
            else {
                Accessory4ID = data;
            }
            let config = {
                params: {
                    AccessoryID: Accessory4ID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessory(data: any): Array<model.Option4ddlModel> {
            let list = Array<model.Option4ddlModel>();
            for (let item of data) {
                list.push({
                    Option4ID: item.OptionID,
                    Option4Name: item.OptionName,
                });
            }
            return list;
        }
    }

    app.AddService("Option4Service", Option4Service);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccessory5DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessoryName(data: any): Array<model.Accessory5ddlModel>;
    }
    export class Accessory5DDService extends GCPL.Service.BaseService implements IAccessory5DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AccessoryDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ModelID;
            if (data == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data;
            }
            let config = {
                params: {
                    ModelID: ModelID,
                    SequenceNo: "5"
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessoryName(data: any): Array<model.Accessory5ddlModel> {
            let list = Array<model.Accessory5ddlModel>();
            for (let item of data) {
                list.push({
                    Accessory5ID: item.AccessoryID,
                    Accessory5Name: item.Accessory,
                });
            }
            return list;
        }
    }

    app.AddService("Accessory5DDService", Accessory5DDService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOption5DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessory(data: any): Array<model.Option5ddlModel>;
    }
    export class Option5Service extends GCPL.Service.BaseService implements IOption5DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OptionDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Accessory5ID;
            if (data == undefined) {
                Accessory5ID = "";
            }
            else {
                Accessory5ID = data;
            }
            let config = {
                params: {
                    AccessoryID: Accessory5ID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessory(data: any): Array<model.Option5ddlModel> {
            let list = Array<model.Option5ddlModel>();
            for (let item of data) {
                list.push({
                    Option5ID: item.OptionID,
                    Option5Name: item.OptionName,
                });
            }
            return list;
        }
    }

    app.AddService("Option5Service", Option5Service);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IAccessory6DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessoryName(data: any): Array<model.Accessory6ddlModel>;
    }
    export class Accessory6DDService extends GCPL.Service.BaseService implements IAccessory6DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"AccessoryDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var ModelID;
            if (data == undefined) {
                ModelID = "";
            }
            else {
                ModelID = data;
            }
            let config = {
                params: {
                    ModelID: ModelID,
                    SequenceNo: "6"
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessoryName(data: any): Array<model.Accessory6ddlModel> {
            let list = Array<model.Accessory6ddlModel>();
            for (let item of data) {
                list.push({
                    Accessory6ID: item.AccessoryID,
                    Accessory6Name: item.Accessory,
                });
            }
            return list;
        }
    }

    app.AddService("Accessory6DDService", Accessory6DDService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOption6DDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetAccessory(data: any): Array<model.Option6ddlModel>;
    }
    export class Option6Service extends GCPL.Service.BaseService implements IOption6DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"OptionDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Accessory6ID;
            if (data == undefined) {
                Accessory6ID = "";
            }
            else {
                Accessory6ID = data;
            }
            let config = {
                params: {
                    AccessoryID: Accessory6ID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetAccessory(data: any): Array<model.Option6ddlModel> {
            let list = Array<model.Option6ddlModel>();
            for (let item of data) {
                list.push({
                    Option6ID: item.OptionID,
                    Option6Name: item.OptionName,
                });
            }
            return list;
        }
    }

    app.AddService("Option6Service", Option6Service);
}

//Configuration1 dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IConfiguration1DDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetConfig(data: any): Array<model.Config1ddlModel>;
    }
    export class Configuration1DDService extends GCPL.Service.BaseService implements IConfiguration1DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"Configuration1DD"}`;
        }


        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetConfig(data: any): Array<model.Config1ddlModel> {
            let list = Array<model.Config1ddlModel>();
            for (let item of data) {
                list.push({
                    Config1ID: item.Config1ID.toString(),
                    ConfigName: item.ConfigName,
                });
            }
            return list;
        }
    }

    app.AddService("Configuration1DDService", Configuration1DDService);
}

//Configuration2 dd
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IConfiguration2DDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetConfigName(data: any): Array<model.Config2ddlModel>;
    }
    export class Configuration2DDService extends GCPL.Service.BaseService implements IConfiguration2DDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"Configuration2DD"}`;
        }


        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetConfigName(data: any): Array<model.Config2ddlModel> {
            let list = Array<model.Config2ddlModel>();
            for (let item of data) {
                list.push({
                    Config2ID: item.Config2ID.toString(),
                    ConfigurationName: item.ConfigurationName,
                });
            }
            return list;
        }
    }

    app.AddService("Configuration2DDService", Configuration2DDService);
}

//SOS View

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IScopeofSupplyService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetSOS(data: any): model.SOSModel;

    }
    export class ScopeofSupplyService extends GCPL.Service.BaseService implements IScopeofSupplyService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CreateQuotation";
            var OpportunitySAPNo;



            if (data == undefined) {
                OpportunitySAPNo = "";
            }
            else {
                OpportunitySAPNo = data;

            }


            let config = {
                params: {
                    OpportunitySAPNo: OpportunitySAPNo

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetSOS(data: any): model.SOSModel {
            let obj = new model.SOSModel();

            obj.ModelDescription = data.ModelDescription;
            obj.ModelID = data.ModelID;
            obj.ModelNo = data.ModelNo;
            obj.StdConfiguration = data.StdConfiguration;
            obj.GSTRate = data.GSTRate;
            obj.Price = data.Price;
            obj.Quantity = data.Quantity;
            return obj;

        }

    }
    app.AddService("ScopeofSupplyService", ScopeofSupplyService);
}

//CL View

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICoveringLetterInfoService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCL(data: any): model.COLModel;

    }
    export class CoveringLetterInfoService extends GCPL.Service.BaseService implements ICoveringLetterInfoService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CoveringLetter";
            var OpportunitySAPNo;



            if (data == undefined) {
                OpportunitySAPNo = "";
            }
            else {
                OpportunitySAPNo = data;

            }

            let config = {
                params: {
                    OpportunitySAPNo: OpportunitySAPNo,
                    UserID: this.Cookie.get('UserInfo')['UserID']

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCL(data: any): model.COLModel {
            let obj = new model.COLModel();

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

        }

    }
    app.AddService("CoveringLetterInfoService", CoveringLetterInfoService);
}

//PF View

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IProductFeaturesInfoService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetPF(data: any): Array<model.ProductFModel>;

    }
    export class ProductFeaturesInfoService extends GCPL.Service.BaseService implements IProductFeaturesInfoService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ProductFeatures";
            var OpportunitySAPNo;



            if (data == undefined) {
                OpportunitySAPNo = "";
            }
            else {
                OpportunitySAPNo = data;

            }

            let config = {
                params: {
                    OpportunitySAPNo: OpportunitySAPNo

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetPF(data: any): Array<model.ProductFModel> {

            let list = Array<model.ProductFModel>();
            for (let item of data) {
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
        }

    }
    app.AddService("ProductFeaturesInfoService", ProductFeaturesInfoService);
}

//Terms Conditions View

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITermsConditionInfoService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetTC(data: any): Array<model.TermsCModel>;

    }
    export class TermsConditionInfoService extends GCPL.Service.BaseService implements ITermsConditionInfoService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/TermsConditions";

            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }

        GetTC(data: any): Array<model.TermsCModel> {

            let list = Array<model.TermsCModel>();
            for (let item of data) {
                list.push({
                    TACID: item.TACID,
                    Description: item.Description,
                    TACName: item.TACName

                });
            }
            return list;
        }

    }
    app.AddService("TermsConditionInfoService", TermsConditionInfoService);
}

//Offering View

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IOfferingInfoService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetOffer(data: any): Array<model.OfferModel>;

    }
    export class OfferingInfoService extends GCPL.Service.BaseService implements IOfferingInfoService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/OfferingList";

            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetOffer(data: any): Array<model.OfferModel> {

            let list = Array<model.OfferModel>();
            for (let item of data) {
                list.push({
                    OfferingID: item.OfferingID,
                    Description: item.Description,
                    OfferingName: item.OfferingName,
                    PictureID: item.PictureID

                });
            }
            return list;
        }

    }
    app.AddService("OfferingInfoService", OfferingInfoService);
}

//Capabilities View

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICapabilitiesInfoService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCapability(data: any): Array<model.CapabilityModel>;

    }
    export class CapabilitiesInfoService extends GCPL.Service.BaseService implements ICapabilitiesInfoService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CapabilitiesList";

            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCapability(data: any): Array<model.CapabilityModel> {

            let list = Array<model.CapabilityModel>();
            for (let item of data) {
                list.push({
                    CapabilityID: item.CapabilityID,
                    CapabilityName: item.CapabilityName,
                    CapabilityDetails: item.CapabilityDetails,
                    PictureID: item.PictureID

                });
            }
            return list;
        }

    }
    app.AddService("CapabilitiesInfoService", CapabilitiesInfoService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ITotalPriceService {

        FindChange(TotalPriceModel: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetTotalPriceChange(data: any): model.TotalPriceModel;

    }
    export class TotalPriceService extends GCPL.Service.BaseService implements ITotalPriceService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        FindChange(TotalPriceModel: any): ng.IPromise<Utility.Ajax.IResponse> {

            let url = `${this.url}/${"GetTotalPrice"}`;

            let config = {
                params: {

                    dto: TotalPriceModel,

                }
            };
            return this.ajaXUtility.Post({

                Url: url,
                data: TotalPriceModel

            });

        }
        GetTotalPriceChange(data: any): model.TotalPriceModel {

            let list = new model.TotalPriceModel();


            list.TotalPrice = data.TotalPrice;
            list.TotalTax = data.TotalTax;
            list.Quantity = data.Quantity;
            list.ConvertedGST = data.ConvertedGST;
            list.GSTRate = data.GSTRate;
            list.Price = data.Price;

            return list;

        }


    }
    app.AddService("TotalPriceService", TotalPriceService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertQuotationService {
        PostQuote(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertQuotationService extends GCPL.Service.BaseService implements IInsertQuotationService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertQuotation"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostQuote(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            console.log(data);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertQuotationService", InsertQuotationService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICountryddService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetCountryName(data: any): Array<model.CountryddlModel>;
    }
    export class CountryddService extends GCPL.Service.BaseService implements ICountryddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"CountryDD"}`;
        }


        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            let config = {
                params: {

                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetCountryName(data: any): Array<model.CountryddlModel> {
            let list = Array<model.CountryddlModel>();
            for (let item of data) {
                list.push({
                    CountryID: item.CountryID.toString(),
                    Country: item.Country,
                });
            }
            return list;
        }
    }

    app.AddService("CountryddService", CountryddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IStateddService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetStateName(data: any): Array<model.StateddlModel>;
    }
    export class StateddService extends GCPL.Service.BaseService implements IStateddService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"StateDDWP"}`;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var CountryID;
            if (data == undefined) {
                CountryID = '95';
            }
            else {
                CountryID = data;
            }
            let config = {
                params: {
                    CountryID: '95'
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetStateName(data: any): Array<model.StateddlModel> {
            let list = Array<model.StateddlModel>();
            for (let item of data) {
                list.push({
                    StateID: item.StateID.toString(),
                    State: item.State,
                });
            }
            return list;
        }
    }

    app.AddService("StateddService", StateddService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDistrictService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDistrictName(data: any): Array<model.DistrictddlModel>;
    }
    export class DistrictService extends GCPL.Service.BaseService implements IDistrictService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"DistrictDD"}`;
        }


        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var StateID;

            if (data == undefined) {
                StateID = "";
            }
            else {
                StateID = data;
            }
            let config = {
                params: {
                    StateID: StateID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }

        GetDistrictName(data: any): Array<model.DistrictddlModel> {
            let list = Array<model.DistrictddlModel>();
            for (let item of data) {
                list.push({
                    DistrictID: item.DistrictID.toString(),
                    District: item.District,
                });
            }
            return list;
        }
    }

    app.AddService("DistrictService", DistrictService);
}