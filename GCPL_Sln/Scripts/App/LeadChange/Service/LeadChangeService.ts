// Edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadChangeEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditLeadChangeModel;
    }
    export class LeadChangeEditService extends GCPL.Service.BaseService implements ILeadChangeEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillLeadChange"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var LeadID;

            if (data == undefined) {
                LeadID = "";
            }
            else {
                LeadID = data;
            }

            let config = {
                params: {
                    LeadID: LeadID


                }
            };
            console.log(config);
            return this.ajaXUtility.Get({

                Url: this.apiUrl,
                Config: config
            }


            );

        }
        GetEdit(data: any): model.EditLeadChangeModel {

            let obj = new model.EditLeadChangeModel();

            obj.LeadID = data.LeadID;
            obj.LeadStatusID = data.LeadStatusID;
            obj.LeadReason = data.LeadReason;
            obj.CompanyName = data.CompanyName;
            obj.SalesOfficeID = data.SalesOfficeID;
            obj.MobileNo = data.MobileNo;
            obj.PhoneNo = data.PhoneNo;
            obj.Fax = data.Fax;
            obj.Email = data.Email;
            obj.Address1 = data.Address1;
            obj.Address2 = data.Address2;
            obj.CountryID = data.CountryID;
            obj.StateID = data.StateID;
            obj.DistrictID = data.DistrictID;
            obj.RegionID = data.RegionID;
            obj.City = data.City;
            obj.PinCode = data.PinCode;
            obj.ContactName = data.ContactName;
            obj.ContactEmail = data.ContactEmail;
            obj.ContactMobileNo = data.ContactMobileNo;
            obj.ContactPhoneNo = data.ContactPhoneNo;
            obj.Designation = data.Designation;
            obj.DepartmentID = data.DepartmentID;
            obj.FOPID = data.FOPID;
            obj.Address = data.Address;
            obj.ContactCountryID = data.ContactCountryID;
            obj.ContactStateID = data.ContactStateID;
            obj.ContactDistrictID = data.ContactDistrictID;
            obj.ContactCity = data.ContactCity;
            obj.PostalCode = data.PostalCode;
            obj.LeadType = data.LeadType;
            obj.CategoryID = data.CategoryID;
            obj.DivisionID = data.DivisionID;
            obj.ProductID = data.ProductID;
            obj.ModelID = data.ModelID;
            obj.Quantity = data.Quantity;
            obj.PurchaseTimelineID = data.PurchaseTimelineID;
            obj.LeadCategoryID = data.LeadCategoryID;
            obj.ChannelID = data.ChannelID;
            obj.SalesAreaID = data.SalesAreaID;
            obj.LeadSourceID = data.LeadSourceID;
            obj.SpecifyMore = data.SpecifyMore;
            obj.RefUserID = data.RefUserID;
            obj.RefUserName = data.RefUserName;
            obj.CampaignID = data.CampaignID;
            obj.ProjectID = data.ProjectID;
            obj.WhenEntered = data.WhenEntered;
            obj.Description = data.Description;
            obj.Notes = data.Notes;

            return obj;

        }
    }


    app.AddService("LeadChangeEditService", LeadChangeEditService);
}

namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadStatusForOpenDDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadOpen(data: any): Array<model.LeadStatusForOpenDDModel>;
    }
    export class LeadStatusForOpenDDService extends GCPL.Service.BaseService implements ILeadStatusForOpenDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadStatusForOpen"}`;
        }
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            var LeadID;
            if (data == undefined) {
                LeadID = "";
            }
            else {
                LeadID = data;
            }
            let config = {
                params: {
                    LeadID: LeadID
                }
            };
            return this.ajaXUtility.Get({
                Url: this.apiUrl,
                Config: config
            });
        }
        GetLeadOpen(data: any): Array<model.LeadStatusForOpenDDModel> {
            
            let list = Array<model.LeadStatusForOpenDDModel>();
            for (let item of data) {
                
                list.push({
                    LeadStatusID: item.LeadStatusID,
                    Status: item.Status
                });
            }

            return list;
        }
    }
    app.AddService("LeadStatusForOpenDDService", LeadStatusForOpenDDService);
}

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUpdateLeadChangeService {
        PostLeadChange(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class UpdateLeadChangeService extends GCPL.Service.BaseService implements IUpdateLeadChangeService {

        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);

            this.apiUrl = `${this.url}/${"UpdateSLeadChange"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {

            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLeadChange(data: any): ng.IPromise<Utility.Ajax.IResponse> {

            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("UpdateLeadChangeService", UpdateLeadChangeService);
}

namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IReasonForLeadOpenDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetReason(data: any): Array<model.ReasonForLeadOpenDDModel>;
    }
    export class ReasonForLeadOpenDDService extends GCPL.Service.BaseService implements IReasonForLeadOpenDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ReasonForLeadOpenDD"}`;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }
        GetReason(data: any): Array<model.ReasonForLeadOpenDDModel> {

            let list = Array<model.ReasonForLeadOpenDDModel>();
            for (let item of data) {

                list.push({
                    ID: item.ID,
                    Reason: item.Reason
                });
            }

            return list;
        }
    }
    app.AddService("ReasonForLeadOpenDDService", ReasonForLeadOpenDDService);
}