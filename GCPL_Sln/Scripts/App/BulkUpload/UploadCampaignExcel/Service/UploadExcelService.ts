namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;
    export interface IUploadVRPExcelService {
        UploadImage(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postVRPExcelData(data: any): ng.IPromise<Utility.Ajax.IResponse>;

        PostModifyExcelData(data: any): ng.IPromise<Utility.Ajax.IResponse>;

    }

    export class UploadVRPExcelService extends GCPL.Service.BaseService implements IUploadVRPExcelService {
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
            let url = `${this.url}/${"ImageUpload"}`;
            return this.ajaXUtility.Post({
                Url: url,
                data: data,
                Config: config
            });
        }

        postVRPExcelData(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let url = `${this.url}/${"UploadExcelCampaignData"}`;
            return this.ajaXUtility.Post({
                Url: url,
                data: data

            });
        }


        

        //Modify Excel Data Post
        PostModifyExcelData(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            let url = `${this.url}/${"ModifyVRPExcel"}`;
            return this.ajaXUtility.Post({
                Url: url,
                data: data
            });
        }


    }

    //inject service
    app.AddService("UploadVRPExcelService", UploadVRPExcelService);
}