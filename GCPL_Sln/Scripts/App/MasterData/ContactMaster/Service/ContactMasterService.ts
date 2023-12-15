//List

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IContactListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetContactlist(data: any): Array<model.ContactListModel>;

    }
    export class ContactListService extends GCPL.Service.BaseService implements IContactListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/ContactMaster";
            var SearchText;
            var SearchCompanyName;       
            var SearchPhoneNo;
            var Status;
            var ContactSAPID;
            var CustSAPID;
                   
            debugger;

            if (data.SearchText == undefined) {
                SearchText = '';
            }
            else {
                SearchText = data.SearchText;

            }
            if (data.SearchCompanyName == undefined) {
                SearchCompanyName = '';
            }
            else {
                SearchCompanyName = data.SearchCompanyName;

            }
           
            if (data.SearchPhoneNo == undefined) {
                SearchPhoneNo = '';
            }
            else {
                SearchPhoneNo = data.SearchPhoneNo;

            }
            if (data.Status == undefined) {
                Status = '';
            }
            else {
                Status = data.Status;

            }
            if (data.ContactSAPID == undefined) {
                ContactSAPID = '';
            }
            else {
                ContactSAPID = data.ContactSAPID;

            }
            if (data.CustSAPID == undefined) {
                CustSAPID = '';
            }
            else {
                CustSAPID = data.CustSAPID;

            }

            let config = {
                params: {
                    SearchText: SearchText,
                    SearchCompanyName: SearchCompanyName,
                    SearchPhoneNo: SearchPhoneNo,
                    Status: Status,
                    ContactSAPID: ContactSAPID,
                    CustSAPID: CustSAPID
                  
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetContactlist(data: any): Array<model.ContactListModel> {
            let list = Array<model.ContactListModel>();

            for (let item of data) {
                list.push({

                    ContactID: item.ContactID, 
                    SAPID: item.SAPID,        
                    ContactName: item.ContactName, 
                    MobileNo: item.MobileNo, 
                    PhoneNo: item.PhoneNo, 
                    Email: item.Email, 
                    Status: ((item.Status == "True") ? "Active" : "Inactive"),       
                    CompanyName: item.CompanyName,      
                    FOP: item.FOP,        
                    Department: item.Department,
                    CustSAPID: item.CustSAPID

                    

                });
            }
            return list;
        }

    }
    app.AddService("ContactListService", ContactListService);
}

//Delete Contact

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IDeleteContactservice {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        postContactDelete(data: any): void;
    }
    export class DeleteContactservice extends GCPL.Service.BaseService implements IDeleteContactservice {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"DeleteContactMaster"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let config = {
                params: {
                    ContactID: data
                }
            };
            return this.ajaXUtility.Post({

                Url: this.apiUrl,
                data,
                Config: config
            });
        }

        postContactDelete(data): void {
            let url = this.apiUrl;
            this.$http.post(url, data).then(function (response) {
            });

        }
    }

    app.AddService("DeleteContactservice", DeleteContactservice);
}