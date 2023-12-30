namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Quotationlist = GCPL.Model.QuotationlistdetailsModel;
    import QuotationSearch = GCPL.Model.QuotationSearchModel;
    import ContactMaster = GCPL.Model.InsertContactMaster;


    interface IQuotationListController {
        Quotationlist: Array<Model.QuotationlistdetailsModel>;
        InsertContact: ContactMaster;
        //SearchProductList(): void;
        QuotationDataHeaderID: any;
        shownItems
    }

    class QuotationListController implements IQuotationListController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        QuotationSearch = null;
        Quotationlist = null;
        CustomerID = null;
        InsertContact = null;
        UserID = null;
        QuotationDataHeaderID = null;
        private Cookie: any = null;
        private Listservice: Service.IQuotationlistService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        static $inject = ["QuotationlistService", "CustomerSapIdAutoFillService", "$location", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_Listservice: Service.IQuotationlistService, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, private $location: ng.ILocationService, private _cookieStore: any) {
            this.Listservice = _Listservice;
            this.QuotationSearch = Array<GCPL.Model.QuotationSearchModel>();

            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.InsertContact = new ContactMaster();
            this.QuotationDataHeaderID = $location.search().QuotationDataHeaderID;
            this.Cookie = _cookieStore;
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
                    that.QuotationSearch.CustomerID = ui.item.id;
                    that.Search1(ui.item.id);
                    console.log(that.QuotationSearch.CustomerID);
                },
                change: function () {
                }
            });
        }
        SearchQuotationList(): void {
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

            this.Quotationlist = this.Listservice.Find(this.QuotationSearch).then((response => {
                this.Quotationlist = this.Listservice.GetQuotationlist(response.data.Result);

                $('#search-btn-loader').hide();
                console.log(this.Quotationlist);
                //$('#txtID').val(this.Quotationlist.QuotationDataHeaderID);

                if (this.Quotationlist.length > 0) {

                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.Quotationlist.forEach(function (value, key) {
                        console.log("Key : " + key);
                        that.incre = parseInt(key) + that.numRecords;
                    });
                    this.maxPages = (that.incre / that.numRecords);
                    this.maxPages.toFixed();
                    console.log(" Max Page : " + this.maxPages);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.Quotationlist.slice(0, that.numRecords);


                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.Quotationlist.length < that.numRecords) {
                    this.ShowNext = false;
                    this.ShowBack = false;
                }

                //if (this.QuotationDataHeaderID > 0) {
                //    $("#HideCreate").hide();
                //}
                //else {

                //    $("#HideCreate").show();
                //}
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
            this.shownItems = this.Quotationlist.slice(begin, end);
            // this.ProductList.slice(begin, end);
            if (this.page + 2 >= parseInt(this.maxPages.toFixed())) {
                console.log("Inside this page : " + this.page);
                this.ShowNext = false;
            }
        };

        //sendMail() {
        //    window.open("mailto:?subject=GCPL%20Quotation");
        //}

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.Quotationlist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.QuotationSearch.CustomerID = "";
            this.QuotationSearch.OppNumber = "";
            this.QuotationSearch.QuotationNo = "";
            // this.QuotationSearch.UserID = "";
            //this.numRecords = this.NoOfRds;
            //this.FillGrid(this.numRecords);

            $("#txtCustomerName").val("");
            $("#txtOppNumber").val("");
            $("#txtQuotationNo").val("");

        }
        public Search1(data: any): void {
            this.CustomerSapAutofill.FindCustomerSAPID(data).then((response => {

                this.InsertContact.CustomerSAPID = this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
            }));
        }

        PDF(data): void {

            this.Listservice.PDFView(data).then((response => {
                this.Quotationlist = this.Listservice.GetPDF(response.data.Result);

            }));
        }

    }
    class QuotationListComponentController implements ng.IComponentOptions {
        static Name: string = "quotationlistcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = QuotationListController;
            this.templateUrl = "/Scripts/App/QuotationList/Template/QuotationList.html";
        }
    }
    app.AddComponent(QuotationListComponentController.Name, new QuotationListComponentController());


}