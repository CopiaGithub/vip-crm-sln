namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICreateDARUploadService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetData(data: any): model.CreateDARUploadModel;

        FindComments(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetComments(data: any): model.RejectCommentModel;
    }
    export class CreateDARUploadService extends GCPL.Service.BaseService implements ICreateDARUploadService {
        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CreateDAR";
            var DARNo;

            if (data == undefined) {
                DARNo = "";
            }
            else {
                DARNo = data;
            }

            let config = {
                params: {
                    DARNo: DARNo


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetData(data: any): model.CreateDARUploadModel {
            debugger;
            let obj = new model.CreateDARUploadModel();

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
                obj.CustomerType = data.CustomerType



            return obj;
        }

        FindComments(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/RejectedComments";
            var DARNo;

            if (data == undefined) {
                DARNo = "";
            }
            else {
                DARNo = data;
            }

            let config = {
                params: {
                    DARNo: DARNo


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetComments(data: any): model.RejectCommentModel {
            debugger;
            let obj = new model.RejectCommentModel();

            obj.ID = data.ID,
                obj.ApproverComments = data.ApproverComments


            return obj;
        }
    }
    app.AddService("CreateDARUploadService", CreateDARUploadService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IGetDARDetails {

        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetDAR(data: any): Array<model.GetDetailsModel>;
    }
    export class GetDARDetails extends GCPL.Service.BaseService implements IGetDARDetails {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}/`;
            this.Cookie = _cookieStore;
        }


        FindGrid(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var Url = this.apiUrl + "GetDARDetails"
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
            let config = {
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
        }

        GetDAR(data: any): Array<model.GetDetailsModel> {
            var list = new Array<model.GetDetailsModel>();

            for (let item of data) {
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
                })
            }
            return list;
        }

    }
    app.AddService("GetDARDetails", GetDARDetails);
}
//Insert Update DAR

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IInsertUpdateDARService {
        PostDAR(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class InsertUpdateDARService extends GCPL.Service.BaseService implements IInsertUpdateDARService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"InsertDARDetails"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostDAR(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("InsertUpdateDARService", InsertUpdateDARService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    export interface IUploadPDFService {
        UploadImage(data: any): ng.IPromise<Utility.Ajax.IResponse>;

    }

    export class UploadPDFService extends GCPL.Service.BaseService implements IUploadPDFService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            //this.apiUrl = `${this.url}/${"APIPutProductReview"}`;
        }

        UploadImage(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            };
            let url = `${this.url}/${"PDFUpload"}`;
            return this.ajaXUtility.Post({
                Url: url,
                data: data,
                Config: config
            });
        }


    }

    //inject service
    app.AddService("UploadPDFService", UploadPDFService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IEditDARDetailsService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEditData(data: any): model.EditDARModel;
    }
    export class EditDARDetailsService extends GCPL.Service.BaseService implements IEditDARDetailsService {
        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/EditDAR";
            var OpportunityNo;

            if (data == undefined) {
                OpportunityNo = "";
            }
            else {
                OpportunityNo = data;
            }

            let config = {
                params: {
                    OpportunityNo: OpportunityNo


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetEditData(data: any): model.EditDARModel {
            debugger;
            let obj = new model.EditDARModel();

            obj.OpportunityID = data.OpportunityID,
                obj.OpportunityNo = data.OpportunityNo,
                obj.OppStatus = data.OppStatus,
                obj.CustomerName = data.CustomerName,
                obj.CustomerID = data.CustomerID,
                obj.DARStatus = data.DARStatus,
                obj.DARID = data.DARID


            return obj;
        }
    }
    app.AddService("EditDARDetailsService", EditDARDetailsService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IViewDARDetailsService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetViewData(data: any): model.ViewDARUploadModel;
    }
    export class ViewDARDetailsService extends GCPL.Service.BaseService implements IViewDARDetailsService {
        private apiUrl: string = "";
        private Cookie: any = null;

        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ViewDAR";
            var DARNo;

            if (data == undefined) {
                DARNo = "";
            }
            else {
                DARNo = data;
            }

            let config = {
                params: {
                    DARNo: DARNo


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetViewData(data: any): model.ViewDARUploadModel {
            debugger;
            let obj = new model.ViewDARUploadModel();
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
                obj.CustomerType = data.CustomerType
            return obj;
        }
    }
    app.AddService("ViewDARDetailsService", ViewDARDetailsService);
}

