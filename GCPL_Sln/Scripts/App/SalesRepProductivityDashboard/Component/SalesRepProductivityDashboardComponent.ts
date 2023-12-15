namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import SalesRepProductivity = GCPL.Model.SalesRepProductHeadermodel;


    interface ISalesRepProductivityDashboardController {
        UserDropDown: Array<Model.EmpUserDropDownModel>
        ZoneDD: ng.IPromise<Utility.Ajax.IResponse>
        SalesRepProdSearch: SalesRepProductivity;
        DivisionDropDown: Array<Model.DivisionModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        YearDropdown: Array<Model.YearDDModel>
       // EmpCodeDropdown: Array<Model.UserCodeAutofillDTO>
        SalesRepProductivityList: Array<Model.SalesRepProductivityGridListModel>
    }
    class SalesRepProductivityDashboardController implements ISalesRepProductivityDashboardController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        private Cookie: any = null;
        UserDropDown = null;
        ZoneDD = null;
        SalesRepProdSearch = null;
        ProductDropDown = null;
        ModelDropDown = null;
        YearDropdown = null;
        DivisionDropDown = null;
        LeadTypeDropDown = null;
        RoleID = null;
        UserID = null;
        SalesRepProductivityList = null;
       
        private SalesRepProductivityService: Service.ISalesRepProductivityListService;
        private ZoneDDService: Service.IZoneDDService;
        private ZoneWiseEMPUserService: Service.IZoneWiseEMPUserService;
        private YearService: Service.IYearddService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService;
        private LeadTypeService: Service.ILeadTypeddService;
        private DivisionService: Service.IDivisionService;

        static $inject = ["SalesRepProductivityListService", "ZoneDDService", "ZoneWiseEMPUserService", "YearddService", "ProductddService", "LeadTypeProductService", "LeadTypeddService", "DivisionService", "$cookieStore"];

        constructor( _SalesRepProductivityService: Service.ISalesRepProductivityListService, _ZoneDDService: Service.IZoneDDService, _ZoneWiseEMPUserService: Service.IZoneWiseEMPUserService,
            _YearService: Service.IYearddService, _ProductService: Service.IProductddService, _ModelService: Service.ILeadTypeProductService, _Service: Service.ILeadTypeddService, _DivisionService: Service.IDivisionService, private _cookieStore: any) {

            this.SalesRepProductivityService = _SalesRepProductivityService;
            this.ZoneDDService = _ZoneDDService;
            this.ZoneWiseEMPUserService = _ZoneWiseEMPUserService;           
            this.YearService = _YearService;
            this.SalesRepProdSearch = new GCPL.Model.SalesRepProductHeadermodel();           
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.LeadTypeService = _Service;
            this.DivisionService = _DivisionService;
            //this.EmpCodeDDService = _EmpCodeDDService;
            this.Cookie = _cookieStore;
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
        }



        $onInit() {
            let that = this;
            this.Init();
            var splTab = document.getElementsByClassName("spl-tab");
            $('#search-btn-loader').hide();
            for (var i = 0; i < splTab.length; i++) {
                splTab[i].addEventListener("click", function () {
                    this.classList.toggle("toggle-spl-minus");
                })
            }

        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            debugger;
            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));
            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));
           
            this.YearDropdown = this.YearService.Find().then((response => {
                this.YearDropdown = this.YearService.GetYearDD(response.data.Result);
            }));
            
        }

        ZoneWiseUser(): void {
            debugger;
            this.UserDropDown = this.ZoneWiseEMPUserService.Find(this.SalesRepProdSearch.ZoneID).then((response => {
                this.UserDropDown = this.ZoneWiseEMPUserService.GetUserName(response.data.Result);
            }));
        }

        
        SearchSalesRepProductivityList(): void {
            debugger;
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            $('#search-btn-loader').show();

        }
        Product(): void {
            debugger;
            this.ProductDropDown = this.ProductService.Find(this.SalesRepProdSearch.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));
        }
        Division(): void {

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);

            }));
        }
        Model(): void {
            debugger;
            this.SalesRepProdSearch.ID = this.LeadTypeDropDown[0].ID;
            debugger;
            this.ModelDropDown = this.ModelService.Find(this.SalesRepProdSearch).then((response => {
                this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            debugger;
            
            this.SalesRepProductivityList = this.SalesRepProductivityService.Find(this.SalesRepProdSearch).then((response => {
                this.SalesRepProductivityList = this.SalesRepProductivityService.GetSalesRepProductivityList(response.data.Result);
                $('#page-loader').hide();
                $('#search-btn-loader').hide();

                if (this.SalesRepProductivityList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.SalesRepProductivityList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.SalesRepProductivityList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.SalesRepProductivityList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.SalesRepProductivityList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.SalesRepProductivityList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.SalesRepProductivityList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.SalesRepProductivityList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.SalesRepProductivityList.slice(begin, end);
            if (this.page + 1 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.SalesRepProductivityList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);
        }

        Clear() {

            this.SalesRepProdSearch.ZoneID = "";
            this.SalesRepProdSearch.Year = "";
            this.SalesRepProdSearch.DivisionID = "";
            this.SalesRepProdSearch.ProductID = "";
            this.SalesRepProdSearch.UserID = "";
            this.SalesRepProdSearch.ModelID = "";
            this.SalesRepProdSearch.LeadTypeID = "";
            
        }

    }
    class SalesRepProductivityDashboardComponentController implements ng.IComponentOptions {
        static Name: string = "salesrepproductivitydashboardcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = SalesRepProductivityDashboardController;
            this.templateUrl = "/Scripts/App/SalesRepProductivityDashboard/Template/SalesRepProductivityDashboard.html";
        }
    }
    app.AddComponent(SalesRepProductivityDashboardComponentController.Name, new SalesRepProductivityDashboardComponentController());


}