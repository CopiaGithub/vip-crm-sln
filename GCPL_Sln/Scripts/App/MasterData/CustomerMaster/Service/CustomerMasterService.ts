//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ICustomerListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetCustomerlist(data: any): Array<model.CustomerListModel>;
        
    }
    export class CustomerListService extends GCPL.Service.BaseService implements ICustomerListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/CustomerMaster";
            var SearchText;
            var SearchSAP;
            var SearchDistrict;
            var SearchMobileNo;
            var Status;

            debugger;

            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }
            if (data.SearchSAP == undefined) {
                SearchSAP = '';
            }
            else {
                SearchSAP = data.SearchSAP;

            }
            if (data.SearchDistrict == undefined) {
                SearchDistrict = '';
            }
            else {
                SearchDistrict = data.SearchDistrict;

            }
            if (data.SearchMobileNo == undefined) {
                SearchMobileNo = '';
            }
            else {
                SearchMobileNo = data.SearchMobileNo;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }

            let config = {
                params: {
                    SearchText: SearchText,
                    SearchSAP: SearchSAP,
                    SearchDistrict: SearchDistrict,
                    SearchMobileNo: SearchMobileNo,
                    Status: Status
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetCustomerlist(data: any): Array<model.CustomerListModel> {
            let list = Array<model.CustomerListModel>();

            for (let item of data) {
                list.push({

                    CustomerID: item.CustomerID,
                    CompanyName: item.CompanyName,
                    IsNational: ((item.IsNational == "True") ? "Yes" : "No"),
                    BusinessPartnerNo: item.BusinessPartnerNo,
                    MobileNo: item.MobileNo,
                    Email: item.Email,
                    District: item.District,
                    SalesOffice: item.SalesOffice,
                    SalesArea: item.SalesArea,
                    Status: ((item.Status == "True") ? "Active" : "Inactive"),
                    PinCode: item.PinCode,
                    DistrictID: item.DistrictID
                                     
                });
            }
            return list;
        }

        
      
    }
    app.AddService("CustomerListService", CustomerListService);
}

//deleteCustomerList
namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteCustomerService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postCustomerDelete(data: any): void;
    }
    export class DeleteCustomerService extends GCPL.Service.BaseService implements IDeleteCustomerService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteCustomerMaster"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    CustomerID: data
                }
            };
            return this.ajaXUtility.Post({

                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postCustomerDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });

        }
    }

    app.AddService("DeleteCustomerService", DeleteCustomerService);
}

