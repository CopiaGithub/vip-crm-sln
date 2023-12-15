namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import WinLossHeatHeader = GCPL.Model.WinLossHeatHeaderModel;


    interface IWinLossHeatController {
        DivisionDropDown: Array<Model.DivisionModel>
        ProductDropDown: Array<Model.ProductddlModel>
        WinLossHeatHeaderModel: WinLossHeatHeader;
        ModelDropDown: Array<Model.ModelDDModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        UserDropDown: Array<Model.UserDDModel>;
        DistributionChannelDD: ng.IPromise<Utility.Ajax.IResponse>;
        SalesOfficeDropDown: Array<Model.SalesOfficeddlModel>
        LeadSourceDropDown: Array<Model.LeadSourceddModel>
        ZoneDD: Array<Model.ZoneDDModel>
        OppTypeDropDown: Array<Model.OppTypeddlModel>
        SalesOfficewDropDown: Array<Model.SalesOfficewpModel>
        SalesRepwDropDown: Array<Model.UserNamewpModel>
    }
    class WinLossHeatController implements IWinLossHeatController {
      
        DivisionDropDown = null;
        ProductDropDown = null;
        ModelDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        UserDropDown = null;
        WinLossHeatHeaderModel = null;
        DistributionChannelDD = null;
        SalesOfficeDropDown = null;
        LeadSourceDropDown = null;
        ZoneDD = null;
        FillWinLossGrid = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        OppTypeDropDown = null;
        SalesOfficewDropDown = null;
        SalesRepwDropDown = null;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService;
        private DivisionService: Service.IDivisionService;
        private StateService: Service.IStateddPService;
        private DistrictService: Service.IDistrictddService;
        private UserDDService: Service.IUserddService;
        private DistributionChannelDDService: Service.IDistributionChannelDDService;
        private SalesOfficeService: Service.ISalesOfficeService;
        private LSService: Service.ILeadSourceddWPService;
        private ZoneDDService: Service.IZoneDDService;
        private WinLossService: Service.IWinLossReportGridService;
        private OppTypeService: Service.IOpportunityTypeddService;
        private SalesOfficewService: Service.ISalesOfficeDDwpService;
        private SalesRepwService: Service.IUserNameDDwpService;

        static $inject = ["ProductddService", "LeadTypeProductService", "DivisionService", "StateddPService", "DistrictddService", "UserddService", "DistributionChannelDDService", "SalesOfficeService", "LeadSourceddWPService", "ZoneDDService", "WinLossReportGridService", "OpportunityTypeddService",
            "SalesOfficeDDwpService", "UserNameDDwpService"];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_ProductService: Service.IProductddService, _ModelService: Service.ILeadTypeProductService, _DivisionService: Service.IDivisionService, _StateService: Service.IStateddPService,
            _DistrictService: Service.IDistrictddService, _UserDDService: Service.IUserddService, DistributionChannelDDService: Service.IDistributionChannelDDService, _SalesOfficeService: Service.ISalesOfficeService, _LSService: Service.ILeadSourceddWPService,
            _ZoneDDService: Service.IZoneDDService, _WinLossService: Service.IWinLossReportGridService, _OppTypeService: Service.IOpportunityTypeddService, _SalesOfficewService: Service.ISalesOfficeDDwpService, _SalesRepwService: Service.IUserNameDDwpService) {
            
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.DivisionService = _DivisionService;
            this.StateService = _StateService;
            this.DistrictService = _DistrictService;
            this.UserDDService = _UserDDService;
            this.DistributionChannelDDService = DistributionChannelDDService;
            this.SalesOfficeService = _SalesOfficeService;
            this.LSService = _LSService;
            this.ZoneDDService = _ZoneDDService;
            this.WinLossService = _WinLossService;
            this.WinLossHeatHeaderModel = new GCPL.Model.WinLossHeatHeaderModel();
            this.OppTypeService = _OppTypeService;
            this.SalesOfficewService = _SalesOfficewService;
            this.SalesRepwService = _SalesRepwService;
        }

        $onInit() {
            $("#errorclose").hide();
            $("#close").hide();
            let that = this;
            this.Init();
            $("#txtFromDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectFromDate
            });
            $("#txtToDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectToDate
            });


        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }
        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            debugger;
            var n = new Date();
            n.setDate(n.getDate() - 7);
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m = months[n.getMonth()];
            var d = n.getDate();
            var y = n.getFullYear();
            (<HTMLInputElement>document.getElementById("txtFromDate")).innerHTML = d + "-" + m + "-" + y;
            $('#txtFromDate').val(d + "-" + m + "-" + y);
            (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            $("#txtFromDate").datepicker({
                dateFormat: 'dd M yy', changeMonth: true,
                changeYear: true,
                onSelect: this.selectFromDate
            });

            var n1 = new Date();
            var y1 = n1.getFullYear();
            var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m1 = months1[n1.getMonth()];
            var d1 = n1.getDate();
            (<HTMLInputElement>document.getElementById("txtToDate")).innerHTML = d1 + "-" + m1 + "-" + y1;
            $('#txtToDate').val(d1 + "-" + m1 + "-" + y1);
            (<HTMLInputElement>document.getElementById("txtToDate")).value;
            $("#txtToDate").datepicker({
                dateFormat: 'dd M yy',
                changeMonth: true,
                changeYear: true,
                onSelect: this.selectToDate
            });

            let that = this;
            
            this.StateDropDown = this.StateService.Find().then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);

            }));

            this.UserDropDown = this.UserDDService.Find().then((response => {
                this.UserDropDown = this.UserDDService.GetUserDD(response.data.Result);

            }));

            this.DistributionChannelDD = this.DistributionChannelDDService.Find().then((response => {
                this.DistributionChannelDD = this.DistributionChannelDDService.GetDistributionChannelDDnew(response.data.Result);


            }));

            this.SalesOfficeDropDown = this.SalesOfficeService.Find().then((response => {
                this.SalesOfficeDropDown = this.SalesOfficeService.GetSalesOfficeName(response.data.Result);

            }));

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));

            this.OppTypeDropDown = this.OppTypeService.Find().then((response => {
                this.OppTypeDropDown = this.OppTypeService.GetOppTypeName(response.data.Result);
            }));

        }

        Product(): void {
            debugger;
            this.ProductDropDown = this.ProductService.Find(this.WinLossHeatHeaderModel.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));
        }
        Division(): void {

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);

            }));
        }
        Model(): void {
            this.WinLossHeatHeaderModel.ID = this.OppTypeDropDown[0].ID;
            this.ModelDropDown = this.ModelService.Find(this.WinLossHeatHeaderModel).then((response => {
                this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }
        District(): void {

            this.DistrictDropDown = this.DistrictService.Find(this.WinLossHeatHeaderModel.StateID).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        LeadSource(): void {
            this.LeadSourceDropDown = this.LSService.Find(this.WinLossHeatHeaderModel.Channel).then((response => {
                this.LeadSourceDropDown = this.LSService.GetLeadSourceDD(response.data.Result);


            }));
        }

        SalesOffice(): void {

            this.SalesOfficewDropDown = this.SalesOfficewService.Find(this.WinLossHeatHeaderModel.Zone).then((response => {
                this.SalesOfficewDropDown = this.SalesOfficewService.GetSalesOfficewp(response.data.Result);
            }));
        }

        SalesRep(): void {
            debugger;
            this.SalesRepwDropDown = this.SalesRepwService.Find(this.WinLossHeatHeaderModel.SalesOffice).then((response => {
                this.SalesRepwDropDown = this.SalesRepwService.GetUserNamewp(response.data.Result);
            }));
        }

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Search(): void {
            debugger;
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            debugger;
            this.WinLossHeatHeaderModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.WinLossHeatHeaderModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.FillWinLossGrid = this.WinLossService.FindGrid(this.WinLossHeatHeaderModel).then((response => {
                this.FillWinLossGrid = this.WinLossService.GetWinLossGrid(response.data.Result);
                $('#page-loader').hide();
                $('#search-btn-loader').hide();

                if (this.FillWinLossGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillWinLossGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.FillWinLossGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillWinLossGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.FillWinLossGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillWinLossGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.FillWinLossGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillWinLossGrid.slice(0, that.numRecords);
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
            this.shownItems = this.FillWinLossGrid.slice(begin, end);
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
            this.shownItems = this.FillWinLossGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {
            this.WinLossHeatHeaderModel.LeadSource = "";
            this.WinLossHeatHeaderModel.DivisionID = "";
            this.WinLossHeatHeaderModel.ProductID = "";
            this.WinLossHeatHeaderModel.ModelID = "";
            this.WinLossHeatHeaderModel.LeadTypeID = "";
            this.WinLossHeatHeaderModel.State = "";
            this.WinLossHeatHeaderModel.District = "";
            this.WinLossHeatHeaderModel.Zone = "";
            this.WinLossHeatHeaderModel.Channel = "";
            this.WinLossHeatHeaderModel.SalesOffice = "";
            this.WinLossHeatHeaderModel.Salesrep = "";          
           
            
        }

    }
    class WinLossHeatComponentController implements ng.IComponentOptions {
        static Name: string = "winlossheatcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = WinLossHeatController;
            this.templateUrl = "/Scripts/App/WinLossHeatReport/Template/WinLossHeatReport.html";
        }
    }
    app.AddComponent(WinLossHeatComponentController.Name, new WinLossHeatComponentController());

}