namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import AllLeadsHeader = GCPL.Model.AllLeadsHeaderModel;
    import WlLeadListCount = GCPL.Model.MyLeadsDashboardStatusCount;
    import LeadReportViewDetails = GCPL.Model.AllLeadReportViewModel;


    interface IMyLeadsDashboardController {
        AllLeadsHeaderModel: AllLeadsHeader;
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        DivisionDropDown: Array<Model.DivisionModel>
        RegionDropDown: Array<Model.RegionDDModel>
        StateDropDown: Array<Model.StateddlModel>
        LeadSourceDropDown: Array<Model.LeadSourceddModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        LeadReportView: Array<Model.AllLeadReportViewModel>;
        getAllLeadCount: Array<Model.LeadStatusModel>;
    }


    class MyLeadsDashboardController implements IMyLeadsDashboardController {
        LeadStatusDropDown = null;
        DivisionDropDown = null;
        RegionDropDown = null;
        StateDropDown = null;
        LeadSourceDropDown = null;
        ProductDropDown = null;
        ModelDropDown = null;
        DistrictDropDown = null;
        AllLeadsHeaderModel = null;
        FillMyLeadsSGrid = null;
        getAllLeadCount = null; 
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadReportView = null;
        private getAutoSalesrep1: Service.IUserNameAtofillService;
        private getAutoCampaign: Service.ICampaignAtofillService;
        private LeadStatusService: Service.ILeadStatusddService;
        private DivisionService: Service.IDivisionDDService;
        private RegionService: Service.IRegionddService;
        private StateService: Service.IStateddPService;
        private LSService: Service.ILeadSourceddService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.IModelDDService;
        private DistrictService: Service.IDistrictddService;
        private MyLeadsService: Service.IMyLeadsReportGridService;
        private MyLeadCountService: Service.IMyLeadsDashboardStatusCountService;
        private AllLeadReportViewService: Service.IAllLeadReportService;
        private AllLeadCountService: Service.ILeadsCountService;
        getWLLeadCount: GCPL.Model.MyLeadsDashboardStatusCount = null;

        static $inject = ["UserNameAtofillService", "CampaignAtofillService", "LeadStatusddService", "DivisionDDService", "RegionddService", "StateddPService", "LeadSourceddService", "ProductddService", "ModelDDService", "DistrictddService", "MyLeadsReportGridService", "MyLeadsDashboardStatusCountService",
            "AllLeadReportService","LeadsCountService"];


        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_getAutoSalesrep1: Service.IUserNameAtofillService, _getAutoCampaign: Service.ICampaignAtofillService, _LeadStatusService: Service.ILeadStatusddService, _DivisionService: Service.IDivisionDDService,
            _RegionService: Service.IRegionddService, _StateService: Service.IStateddPService, _LSService: Service.ILeadSourceddService, _ProductService: Service.IProductddService, _ModelService: Service.IModelDDService, _DistrictService: Service.IDistrictddService,
            _MyLeadsService: Service.IMyLeadsReportGridService, _MyLeadCountService: Service.IMyLeadsDashboardStatusCountService, _AllLeadReportViewService: Service.IAllLeadReportService, _AllLeadCountService: Service.ILeadsCountService) {
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.getAutoCampaign = _getAutoCampaign;
            this.LeadStatusService = _LeadStatusService;
            this.DivisionService = _DivisionService;
            this.RegionService = _RegionService;
            this.StateService = _StateService;
            this.LSService = _LSService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.DistrictService = _DistrictService;
            this.MyLeadsService = _MyLeadsService;
            this.MyLeadCountService = _MyLeadCountService;
            this.getWLLeadCount = new WlLeadListCount();
            this.AllLeadReportViewService = _AllLeadReportViewService;
            this.AllLeadCountService = _AllLeadCountService;           
            this.LeadReportView = new LeadReportViewDetails(); 
            this.AllLeadsHeaderModel = new GCPL.Model.AllLeadsHeaderModel();
        }

        $onInit() {
           
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
            $('#search-btn-loader').hide();
            let that = this;

            var n = new Date();
            n.setDate(n.getDate() - 7);
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var m = months[n.getMonth()];
            var d = n.getDate();
            var y = n.getFullYear();
            (<HTMLInputElement>document.getElementById("txtFromDate")).innerHTML = d + " " + m + " " + y;
            $('#txtFromDate').val(d + " " + m + " " + y);
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
            (<HTMLInputElement>document.getElementById("txtToDate")).innerHTML = d1 + " " + m1 + " " + y1;
            $('#txtToDate').val(d1 + " " + m1 + " " + y1);
            (<HTMLInputElement>document.getElementById("txtToDate")).value;
            $("#txtToDate").datepicker({
                dateFormat: 'dd M yy',
                changeMonth: true,
                changeYear: true,
                onSelect: this.selectToDate
            });

          

            $("#txtSalesRep1").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            return {
                                label: item.ManagerName,
                                value: item.ManagerName,
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


                    that.AllLeadsHeaderModel.AllocatedTo = ui.item.id;

                },
                change: function () {

                }
            });

            $("#txtCampaign").autocomplete({

                source: function (request, res) {
                    that.getAutoCampaign.FilterCampaignAutoComplete(request).then((response => {

                        let data = that.getAutoCampaign.GetCampaignAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            return {
                                label: item.CampaignName,
                                value: item.CampaignName,
                                id: item.CampaignID

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {


                    that.AllLeadsHeaderModel.Campaign = ui.item.id;

                },
                change: function () {

                }
            });

            this.LeadStatusDropDown = this.LeadStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadStatusService.GetLeadStatusName(response.data.Result);
                //for (var i = 0; i < this.LeadStatusDropDown.length; i++) {
                //    let that = this;

                //    //this.SalesPriceForCustomerList[i].FromDate = that.InsertSalesPrice.FromDate;
                //    //this.SalesPriceForCustomerList[i].ToDate = that.InsertSalesPrice.ToDate;
                //    this.LeadStatusDropDown[i].StatusID = that.InsertSalesPrice.CustomerID;
                //    this.LeadStatusDropDown[i].Status = this.InsertSalesPrice.DealerID;
                //}
                //this.LeadStatusDropDown = this.temp();

            }));

            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivision(response.data.Result);

            }));

            this.RegionDropDown = this.RegionService.Find().then((response => {
                this.RegionDropDown = this.RegionService.GetRegion(response.data.Result);

            }));

            this.StateDropDown = this.StateService.Find().then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);

            }));

            debugger;
            this.LeadSourceDropDown = this.LSService.Find().then((response => {
                this.LeadSourceDropDown = this.LSService.GetLeadSource(response.data.Result);
            }));

            this.getAllLeadCount = this.AllLeadCountService.FindGrid().then((response => {
                this.getAllLeadCount = this.AllLeadCountService.GetLeadsCountGrid(response.data.Result);
            }));

           
        }

        Product(): void {
            debugger;
            this.ProductDropDown = this.ProductService.Find(this.AllLeadsHeaderModel.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);

            }));
        }

        Model(): void {

            this.ModelDropDown = this.ModelService.Find(this.AllLeadsHeaderModel.ProductID).then((response => {
                this.ModelDropDown = this.ModelService.GetModelDD(response.data.Result);
            }));
        }

        District(): void {

            this.DistrictDropDown = this.DistrictService.Find(this.AllLeadsHeaderModel.StateIDs).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.FillMyLeadsSGrid.slice(begin, end);
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
            this.shownItems = this.FillMyLeadsSGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        Search(): void {
            debugger;
            $('#search-btn-loader').show();
            let that = this;
            this.AllLeadsHeaderModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllLeadsHeaderModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.FillMyLeadsSGrid = this.MyLeadsService.FindGrid(this.AllLeadsHeaderModel).then((response => {
                this.FillMyLeadsSGrid = this.MyLeadsService.GetMyLeadsGrid(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.FillMyLeadsSGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillMyLeadsSGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.FillMyLeadsSGrid);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillMyLeadsSGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
                this.maxPages = (that.incre / that.numRecords);
                this.ShowBack = false;
                this.ShowNext = that.maxPages > 1 ? true : false;

                this.shownItems = this.FillMyLeadsSGrid.slice(0, that.numRecords);
                debugger;
                this.MyLeadCountService.FindGrid(this.AllLeadsHeaderModel).then((response => {

                    this.getWLLeadCount = this.MyLeadCountService.GetMyLeadsStatusCountGrid(response.data.Result);

                }));
            }));


        }

        Clear() {
            this.AllLeadsHeaderModel.CustomerName = "";
            this.AllLeadsHeaderModel.Createdby = "";
            this.AllLeadsHeaderModel.LeadID = "";
            this.AllLeadsHeaderModel.CustomerMobile = "";
            this.AllLeadsHeaderModel.SAPID = "";
            this.AllLeadsHeaderModel.ProductID = "";
            this.AllLeadsHeaderModel.SourceID = "";
            this.AllLeadsHeaderModel.DivisionID = "";
            this.AllLeadsHeaderModel.StatusID = "";
            this.AllLeadsHeaderModel.RegionID = "";
            this.AllLeadsHeaderModel.StateIDs = "";
            this.AllLeadsHeaderModel.UserID = "";
            this.AllLeadsHeaderModel.CampaignID = "";
            this.AllLeadsHeaderModel.DistrictID = "";
            this.AllLeadsHeaderModel.LeadSourceID = "";
            this.AllLeadsHeaderModel.AllocatedTo = "";
            this.AllLeadsHeaderModel.SubsourceID = "";
            this.AllLeadsHeaderModel.Subsource2ID = "";
            this.AllLeadsHeaderModel.ModelId = "";
            this.AllLeadsHeaderModel.Campaign = "";
           // (<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
           // (<HTMLInputElement>document.getElementById("txtToDate")).value = "";

        }

        ViewDetails(data: any): void {
            debugger;
            this.AllLeadReportViewService.Find(data).then((response => {
                this.LeadReportView = this.AllLeadReportViewService.GetAllLeadReportView(response.data.Result);
                console.log(this.LeadReportView);
                debugger;
                $('#txtCustName').val(this.LeadReportView.CustName);
                $('#txtCustEmail').val(this.LeadReportView.CustEmail);
                $('#txtCustMobNo').val(this.LeadReportView.CustMobNo);
                $('#txtCustPhnNo').val(this.LeadReportView.CustPhnNo);
                $('#txtCustAddress').val(this.LeadReportView.CustAddress);

                $('#txtContName').val(this.LeadReportView.ContName);
                $('#txtContEmail').val(this.LeadReportView.ContEmail);
                $('#txtContMobNo').val(this.LeadReportView.ContMobNo);
                $('#txtContPhnNo').val(this.LeadReportView.ContPhnNo);
                $('#txtContAddress').val(this.LeadReportView.ContAddress);


                $('#txtLeadModel').val(this.LeadReportView.LeadModel);
                $('#txtPurchaseWithin').val(this.LeadReportView.PurchaseWithin);
                $('#txtSpecifyMore').val(this.LeadReportView.SpecifyMore);
                $('#txtQuantity').val(this.LeadReportView.Quantity);
                $('#txtCreatedBy').val(this.LeadReportView.CreatedBy);
                $('#txtCreatedDate').val(this.LeadReportView.CreatedDate);
                $('#txtSource').val(this.LeadReportView.Source);

                $('#txtCampaign').val(this.LeadReportView.Campaign);
                $('#txtLeadCreationComments').val(this.LeadReportView.LeadCreationComments);
                $('#txtValidatedBy').val(this.LeadReportView.ValidatedBy);
                $('#txtDateValidated').val(this.LeadReportView.DateValidated);
                $('#txtValidationComment').val(this.LeadReportView.ValidationComment);
                $('#txtAllocatedTo').val(this.LeadReportView.AllocatedTo);
                $('#txtAllocatedDate').val(this.LeadReportView.AllocatedDate);
                $('#txtAssessmentDate').val(this.LeadReportView.AssessmentDate);
                $('#txtLessthan90days').val(this.LeadReportView.Lessthan90days);
                $('#txtMetCustomer').val(this.LeadReportView.MetCustomer);
                $('#txtAssessmentComments').val(this.LeadReportView.AssessmentComments);
                $('#txtLeadStatus').val(this.LeadReportView.LeadStatus);
                if (this.LeadReportView.MetCustomer == "False") {
                    this.LeadReportView.MetCustomer = "No";
                }
                if (this.LeadReportView.MetCustomer == "True") {
                    this.LeadReportView.MetCustomer = "Yes";
                }
                if (this.LeadReportView.Lessthan90days == "False") {
                    this.LeadReportView.Lessthan90days = "No";
                }
                if (this.LeadReportView.Lessthan90days == "True") {
                    this.LeadReportView.Lessthan90days = "Yes";
                }

                $("detailModal").show();

            }));



        }

        downloadCSV(csv, filename) {
            var csvFile;
            var downloadLink;

            // CSV file
            csvFile = new Blob([csv], { type: "text/csv" });

            // Download link
            downloadLink = document.createElement("a");

            // File name
            downloadLink.download = filename;

            // Create a link to the file
            downloadLink.href = window.URL.createObjectURL(csvFile);

            // Hide download link
            downloadLink.style.display = "none";

            // Add the link to DOM
            document.body.appendChild(downloadLink);

            // Click download link
            downloadLink.click();
        }

        exportTableToCSV(filename) {
            var csv = [];
            var rows = document.querySelectorAll("#excelDownload tr");

            for (var i = 0; i < rows.length; i++) {
                var row = [], cols = rows[i].querySelectorAll("td, th");

                for (var j = 0; j < cols.length; j++)
                    row.push(cols[j].innerHTML);

                csv.push(row.join(","));
            }

            // Download CSV file
            this.downloadCSV(csv.join("\n"), filename);
        }
    }
    class MyLeadsDashboardComponentController implements ng.IComponentOptions {
        static Name: string = "myleadsdashboardcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = MyLeadsDashboardController;
            this.templateUrl = "/Scripts/App/MyLeadsDashboard/Template/MyLeadsDashboard.html";
        }
    }
    app.AddComponent(MyLeadsDashboardComponentController.Name, new MyLeadsDashboardComponentController());

}