// Edit

namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadOverrideEditService {
        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetEdit(data: any): model.EditLeadOverrideModel;
    }
    export class LeadOverrideEditService extends GCPL.Service.BaseService implements ILeadOverrideEditService {
        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            super($http, $q);
            this.apiUrl = `${this.url}/${"FillLeadOverride"}`;
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
        GetEdit(data: any): model.EditLeadOverrideModel {
            debugger;
            let obj = new model.EditLeadOverrideModel();

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
            obj.SalesAreaID= data.SalesAreaID;
            obj.LeadSourceID = data.LeadSourceID;
            obj.SpecifyMore = data.SpecifyMore;
            obj.RefUserID = data.RefUserID;
            obj.RefUserName = data.RefUserName;
            obj.CampaignID = data.CampaignID;
            obj.ProjectID = data.ProjectID;
            obj.ProjectName = data.ProjectName;
            return obj;

        }
    }


    app.AddService("LeadOverrideEditService", LeadOverrideEditService);
}

//Reason for Lead dd
namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IReasonForLeadDDService {

        Find(): ng.IPromise<Utility.Ajax.IResponse>;
        GetReason(data: any): Array<model.ReasonForLeadDDModel>;
    }
    export class ReasonForLeadDDService extends GCPL.Service.BaseService implements IReasonForLeadDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"ReasonForLeadDD"}`;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            return this.ajaXUtility.Get({ Url: this.apiUrl });
        }
        GetReason(data: any): Array<model.ReasonForLeadDDModel> {
            debugger;
            let list = Array<model.ReasonForLeadDDModel>();
            for (let item of data) {
                debugger;
                list.push({
                    ID: item.ID,
                    Reason: item.Reason
                });
            }
            
            return list;
        }
    }
    app.AddService("ReasonForLeadDDService", ReasonForLeadDDService);
}

//lead for closer
namespace GCPL.Service {

    import app = GCPL.app;
    import model = GCPL.Model;

    export interface ILeadStatusForCloserDDService {

        Find(data: any): ng.IPromise<Utility.Ajax.IResponse>;
        GetLeadCloser(data: any): Array<model.LeadStatusForCloserDDModel>;
    }
    export class LeadStatusForCloserDDService extends GCPL.Service.BaseService implements ILeadStatusForCloserDDService {

        private apiUrl: string = "";
        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

            super($http, $q);
            this.apiUrl = `${this.url}/${"LeadStatusForCloser"}`;
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
        GetLeadCloser(data: any): Array<model.LeadStatusForCloserDDModel> {
            debugger;
            let list = Array<model.LeadStatusForCloserDDModel>();
            for (let item of data) {
                debugger;
                list.push({
                    LeadStatusID: item.LeadStatusID,
                    Status: item.Status
                });
            }

            return list;
        }
    }
    app.AddService("LeadStatusForCloserDDService", LeadStatusForCloserDDService);
}


namespace GCPL.Service {
    import app = GCPL.app;
    import model = GCPL.Model;

    export interface IUpdateLeadOverrideService {
        PostLeadOverride(data: any): ng.IPromise<Utility.Ajax.IResponse>;
    }
    export class UpdateLeadOverrideService extends GCPL.Service.BaseService implements IUpdateLeadOverrideService {
    
        private apiUrl: string = "";
        private Cookie: any = null;
        static $inject = ["$http", "$q", "$cookieStore"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private _cookieStore: any) {
            super($http, $q);
          
            this.apiUrl = `${this.url}/${"UpdateSLeadOverride"}`;
            this.Cookie = _cookieStore;
        }
        Find(): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            return this.ajaXUtility.Get({ Url: this.apiUrl });

        }
        PostLeadOverride(data: any): ng.IPromise<Utility.Ajax.IResponse> {
            debugger;
            let url = this.apiUrl;
            // console.log(url);
            return this.ajaXUtility.Post({ Url: url, data: data });
        }
    }

    app.AddService("UpdateLeadOverrideService", UpdateLeadOverrideService);
}