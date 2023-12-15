//Search

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IRegistrationContactListService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetRegistrationContactData(data: any): Array<model.RegistrationContactListModel>;

    }
    export class RegistrationContactListService extends GCPL.Service.BaseService implements IRegistrationContactListService {
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {

            super($http, $q);
            this.apiUrl = `${this.url}`;
            this.Cookie = _cookieStore;
        }

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var url = this.apiUrl + "/RegistrationContact";
            var SearchInput;
            var StatusID;
            debugger;

            if (data.SearchInput == undefined) {
                SearchInput = '';
            }
            else {
                SearchInput = data.SearchInput;

            }


            if (data.StatusID == undefined) {
                StatusID = '';
            }
            else {
                StatusID = data.StatusID;

            }



            let config = {
                params: {
                    SearchInput: SearchInput,
                    StatusID: StatusID
                }
            };
            return this.ajaXUtility.Get({
                Url: url,
                Config: config
            });
        }
        GetRegistrationContactData(data: any): Array<model.RegistrationContactListModel> {
            let list = Array<model.RegistrationContactListModel>();

            for (let item of data) {
                list.push({

                    AppContactID: item.AppContactID,
                    ContactName: item.ContactName,
                    ContactMobileNo: item.ContactMobileNo,
                    Email: item.Email,
                    Companyname: item.Companyname,
                    MobileNo: item.MobileNo,
                    Address1: item.Address1,
                    District: item.District,
                    Password: item.Password,
                    CustStatus: item.CustStatus,
                    //IsACtive: item.IsACtive,
                    WhenEntered: item.WhenEntered,

                    IsACtive: ((item.Status == "True") ? "Active" : "Inactive")

                });
            }
            return list;
        }

    }
    app.AddService("RegistrationContactListService", RegistrationContactListService);
}


