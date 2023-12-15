namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import QuotationReportlist = GCPL.Model.QuotationReportModel;
    import QuotationSearch = GCPL.Model.QuotationSearchModel;
   


    interface IQuotationReportController {
        QuotationReport: Array<Model.QuotationReportModel>;
        QuotationDataHeaderID: any;
    }

    class QuotationReportController implements IQuotationReportController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        QuoteSearch = null;
        QuotationReport = null;
        CustomerID = null;      
        UserID = null;
        RoleID = null;
        QuotationDataHeaderID = null;
        private Cookie: any = null;
        private Listservice: Service.IQuotationReportlistService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
        private getAutoModel: Service.IModelAutoFillService;

        static $inject = ["QuotationReportlistService", "CustomerSapIdAutoFillService", "EmployeeAtofillService", "ModelAutoFillService", "$location", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_Listservice: Service.IQuotationReportlistService, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _getAutoSalesrep1: Service.IEmployeeAtofillService,
            _getAutoModel: Service.IModelAutoFillService, private $location: ng.ILocationService, private _cookieStore: any) {
            this.Listservice = _Listservice;
            this.QuoteSearch = Array<GCPL.Model.SearchQuoteModel>();
            this.CustomerSapAutofill = _CustomerSapAutofill;          
            this.QuotationDataHeaderID = $location.search().QuotationDataHeaderID;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.getAutoModel = _getAutoModel;
            this.Cookie = _cookieStore;
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
        }



        $onInit() {
            this.Init();
            $('#search-btn-loader').hide();
        }

        //Page Load Define Values//
        Init(): void {
            let that = this;
            $("#txtCustomerName").autocomplete({
                //  source:['1a0','anjali','archana'],
                source: function (request, res) {
                    that.CustomerSapAutofill.FilterAutoComplete(request).then((response => {

                        let data = that.CustomerSapAutofill.GetAutoCustSAPID(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.CustomerName,
                                value: item.CustomerName,
                                id: item.CustomerID

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {
                    // Don't populate input field with selected value (pxid)
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.QuoteSearch.CustomerID = ui.item.id;                  
                    console.log(that.QuoteSearch.CustomerID);
                },
                change: function () {
                }
            });

            $("#txtSalesRep").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            
                            return {

                                label: item.Name,
                                value: item.Name,
                                id: item.userid

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    

                    that.QuoteSearch.CreatedBy = ui.item.id;
                    console.log(that.QuoteSearch.CreatedBy);

                },
                change: function () {

                }
            });

            $("#txtModelNo").autocomplete({

                source: function (request, res) {
                    that.getAutoModel.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoModel.GetAutoModel(response.data.Result);

                        res($.map(data, function (item, index) {
                            
                            return {

                                label: item.ModelNo,
                                value: item.ModelNo,
                                id: item.ModelID

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    

                    that.QuoteSearch.ModelID = ui.item.id;
                    console.log(that.QuoteSearch.ModelID);

                },
                change: function () {

                }
            });
        }
        SearchQuoteList(): void {
            $('#search-btn-loader').show();


            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            

        }
        FillGrid(NoOfRecords): void {
            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            console.log("Drpdown value text : " + that.numRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            
            this.QuotationReport = this.Listservice.Find(this.QuoteSearch).then((response => {
                this.QuotationReport = this.Listservice.GetQuotelist(response.data.Result);

                $('#search-btn-loader').hide();
                console.log(this.QuotationReport);
                //$('#txtID').val(this.Quotationlist.QuotationDataHeaderID);
                
                if (this.QuotationReport.length > 0) {

                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.QuotationReport.forEach(function (value, key) {
                        console.log("Key : " + key);
                        that.incre = parseInt(key) + that.numRecords;
                    });
                    this.maxPages = (that.incre / that.numRecords);
                    this.maxPages.toFixed();
                    console.log(" Max Page : " + this.maxPages);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.QuotationReport.slice(0, that.numRecords);


                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.QuotationReport.length < that.numRecords) {
                    this.ShowNext = false;
                    this.ShowBack = false;
                }
                
                
            }));
        }
        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            console.log("this page : " + this.page);
            console.log("Max Page : " + this.maxPages);
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.QuotationReport.slice(begin, end);
            // this.ProductList.slice(begin, end);
            if (this.page + 2 >= parseInt(this.maxPages.toFixed())) {
                console.log("Inside this page : " + this.page);
                this.ShowNext = false;
            }
        };

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.QuotationReport.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.QuoteSearch.CustomerID = "";
            this.QuoteSearch.ModelID = "";
            this.QuoteSearch.CreatedBy = "";
            // this.QuotationSearch.UserID = "";
            //this.numRecords = this.NoOfRds;
            //this.FillGrid(this.numRecords);

            $("#txtCustomerName").val("");
            $("#txtSalesRep").val("");
            $("#txtModelNo").val("");

        }
        

    }
    class QuotationReportComponentController implements ng.IComponentOptions {
        static Name: string = "quotationreportcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = QuotationReportController;
            this.templateUrl = "/Scripts/App/QuotationReport/Template/_QuotationReport.html";
        }
    }
    app.AddComponent(QuotationReportComponentController.Name, new QuotationReportComponentController());


}