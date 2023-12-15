namespace GCPL.Model {
    export class CustomerListModel {
        constructor() {
        }
        CustomerID: string;
        CompanyName: string;
        IsNational: string;
        BusinessPartnerNo: string;
        MobileNo: string;
        Email: string;
        District: string;
        SalesOffice: string;
        SalesArea: string;
        Status: string;
        PinCode: string;
        DistrictID: string;
    }
    export class CustomerSearchModel {

        constructor() {
        }
        SearchText: string;
        SearchSAP: string;
        SearchDistrict: string;
        SearchMobileNo: string;
        Status: string;
    }
    export class DeleteCustomerModel {
        constructor() {

        }
        CustomerID: string;
    }

   
   
}