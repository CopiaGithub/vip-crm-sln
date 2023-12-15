namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import AllLeadsHeader = GCPL.Model.AllLeadsHeaderModel;
    import LeadReportViewDetails = GCPL.Model.AllLeadReportViewModel;
    import getAllLeadCount = GCPL.Model.LeadStatusModel;
    import ContactMaster = GCPL.Model.InsertContactMaster;



    interface IAllLeadController {
        AllLeadsHeaderModel: AllLeadsHeader;
        Search(): void;
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        DivisionDropDown: Array<Model.DivisionModel>
        ProductDropDown: Array<Model.ProductddlModel>
        ModelDropDown: Array<Model.ModelDDModel>
        ZoneDD: ng.IPromise<Utility.Ajax.IResponse>;
        RegionDropDown: Array<Model.RegionDDModel>
        StateDropDown: Array<Model.StateddlModel>
        DistrictDropDown: Array<Model.DistrictddlModel>
        LeadSourceDropDown: Array<Model.LeadSourceddModel>
        LeadReportView: Array<Model.AllLeadReportViewModel>;
        ViewDetails(data: any): void;
        LeadTypeDropDown: Array<Model.LeadTypeddlModel>
        InsertContact: ContactMaster;
        LeadID: any;
    }
    class AllLeadController implements IAllLeadController {
        AllStatus = null;
        FillAllLeadsSGrid = null;
        AllLeadsHeaderModel = null;
        numRecords: number = 10;
        static statusDropdownList = [];
        static leadTypeDropdownList = [];
        static divisionDropdownList = [];
        static productDrpodownList = [];
        static modelDrpodownList = [];
        static leadSourceIDDropdownList = [];
        static leadOriginDropdownList = [];
        static zoneDropdownList = [];
        static regionDropdownList = [];
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        LeadStatusDropDown = null;
        DivisionDropDown = null;
        ProductDropDown = null;
        ModelDropDown = null;
        ZoneDD = null;
        RegionDropDown = null;
        StateDropDown = null;
        DistrictDropDown = null;
        LeadSourceDropDown = null;
        LeadReportView = null;
        LeadTypeDropDown = null;
        CustomerID = null;
        InsertContact = null;
        LeadID=null;
        //RoleID = null;
        private Cookie: any = null;
        private getAutoProjectName: Service.IgetAutoProjectNameService;
        private AllLeadsService: Service.IAllLeadsReportGridService;
        private LeadStatusService: Service.ILeadStatusddService;
        private DivisionService: Service.IDivisionService;
        private ProductService: Service.IProductddService;
        private ModelService: Service.ILeadTypeProductService;
        private ZoneDDService: Service.IZoneDDService;
        private RegionService: Service.IRegionddService;
        private StateService: Service.IStateddPService;
        private DistrictService: Service.IDistrictddService;
        private LSService: Service.ILeadSourceddService;
        private getAutoSalesrep1: Service.IUserNameAtofillService;
        private getAutoSalesrep2: Service.IEmployeeAtofillService;
        private AllLeadReportViewService: Service.IAllLeadReportService;
        private getAutoCampaign: Service.ICampaignAtofillService;
        private LeadTypeService: Service.ILeadTypeddService;
        private AllLeadCountService: Service.ILeadsStatusCountService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        getAllLeadCount: GCPL.Model.LeadStatusModel = null;


        static $inject = ["AllLeadsReportGridService", "LeadStatusddService", "DivisionService",
                          "ProductddService", "LeadTypeProductService", "ZoneDDService",
                          "RegionddService", "StateddPService", "DistrictddService",
                          "LeadSourceddService", "UserNameAtofillService", "EmployeeAtofillService",
                          "AllLeadReportService", "CampaignAtofillService", "LeadTypeddService",
                          "LeadsStatusCountService", "CustomerSapIdAutoFillService", "getAutoProjectNameService",
                          "$cookieStore"];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_AllLeadsService: Service.IAllLeadsReportGridService, _LeadStatusService: Service.ILeadStatusddService,
                    _DivisionService: Service.IDivisionService, _ProductService: Service.IProductddService,
                    _ModelService: Service.ILeadTypeProductService, _ZoneDDService: Service.IZoneDDService,
                    _RegionService: Service.IRegionddService, _StateService: Service.IStateddPService,
                    _DistrictService: Service.IDistrictddService, _LSService: Service.ILeadSourceddService,
                    _getAutoSalesrep1: Service.IUserNameAtofillService, _getAutoSalesrep2: Service.IEmployeeAtofillService,
                    _AllLeadReportViewService: Service.IAllLeadReportService, _getAutoCampaign: Service.ICampaignAtofillService,
                    _LeadTypeService: Service.ILeadTypeddService, _AllLeadCountService: Service.ILeadsStatusCountService,
                    _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService,
                    _getAutoProjectName: Service.IgetAutoProjectNameService, private _cookieStore: any) {
            this.AllLeadsService = _AllLeadsService;
            this.AllLeadsHeaderModel = new GCPL.Model.AllLeadsHeaderModel();
            this.getAutoProjectName = _getAutoProjectName;
            this.LeadStatusService = _LeadStatusService;
            this.DivisionService = _DivisionService;
            this.ProductService = _ProductService;
            this.ModelService = _ModelService;
            this.ZoneDDService = _ZoneDDService;
            this.RegionService = _RegionService;
            this.StateService = _StateService;
            this.DistrictService = _DistrictService;
            this.LSService = _LSService;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.getAutoSalesrep2 = _getAutoSalesrep2;
            this.AllLeadReportViewService = _AllLeadReportViewService;
            this.LeadReportView = new LeadReportViewDetails();
            this.getAutoCampaign = _getAutoCampaign;
            this.LeadTypeService = _LeadTypeService;
            this.AllLeadCountService = _AllLeadCountService;
            this.getAllLeadCount = new getAllLeadCount();
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.InsertContact = new ContactMaster();
            //this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
        }

        $onInit() {
            this.Init();
            $('#search-btn-loader').hide();
            $("#errorclose").hide();
            $("#close").hide();

            let that = this;
        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }

        //Page Load Define Values//
        Init(): void {

           
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

            
            this.AllLeadsHeaderModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllLeadsHeaderModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
           


            $("#errorclose").hide();
            $("#close").hide();
            let that = this;

            $("#txtProjectName").autocomplete({
                source: function (request, res) {
                    that.getAutoProjectName.FilterAutoComplete(request).then((response => {
                        let data = that.getAutoProjectName.GetAutProjName(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.ProjectName,
                                value: item.ProjectName,
                                id: item.ProjectID
                            }
                        }));
                    }));
                },
                minLength: 2,
                focus: (event, ui) => {
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.AllLeadsHeaderModel.ProjectID = ui.item.id;
                },
                change: function () {

                }
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
                   
                    //that.InsertLead.RefUserName = ui.item.id;
                    console.log(that.AllLeadsHeaderModel.AllocatedTo);

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

            $("#txtUserName").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep2.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep2.GetAutEmployee(response.data.Result);

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
                    

                    that.AllLeadsHeaderModel.Createdby = ui.item.id;
                    console.log(that.AllLeadsHeaderModel.Createdby);

                },
                change: function () {

                }
            });
           
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
                    that.AllLeadsHeaderModel.CustomerID = ui.item.id;
                    that.Search1(ui.item.id);
                    console.log(that.AllLeadsHeaderModel.CustomerID);
                },
                change: function () {
                }
            });  

            

            this.LeadStatusDropDown = this.LeadStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadStatusService.GetLeadStatusName(response.data.Result);
            }));

            this.LeadTypeDropDown = this.LeadTypeService.Find().then((response => {
                this.LeadTypeDropDown = this.LeadTypeService.GetLeadTypeName(response.data.Result);
            }));

           

            this.ZoneDD = this.ZoneDDService.Find().then((response => {
                this.ZoneDD = this.ZoneDDService.Getzonenew(response.data.Result);
            }));

            this.RegionDropDown = this.RegionService.Find().then((response => {
                this.RegionDropDown = this.RegionService.GetRegion(response.data.Result);
            }));

            this.StateDropDown = this.StateService.Find().then((response => {
                this.StateDropDown = this.StateService.GetStateName(response.data.Result);
            }));

            
            this.LeadSourceDropDown = this.LSService.Find().then((response => {
                this.LeadSourceDropDown = this.LSService.GetLeadSource(response.data.Result);
            }));

            
        }

        addStatus(abc: string): void {
           
           AllLeadController.statusDropdownList.push(abc);
            
        }

        addLeadType(abc: string): void {
            AllLeadController.leadTypeDropdownList.push(abc);
            this.Division();

        }

        addDivision(abc: string): void {
            AllLeadController.divisionDropdownList.push(abc);
            this.Product();
        }

        addProduct(abc: string): void {
            AllLeadController.productDrpodownList.push(abc);
            this.Model();
        }

        addModel(abc: string): void {
            AllLeadController.modelDrpodownList.push(abc);
        }

        addLeadSource(abc: string): void {
            AllLeadController.leadSourceIDDropdownList.push(abc);
        }

        addLeadOrigin(abc: string): void {
            AllLeadController.leadOriginDropdownList.push(abc);
        }
        addRegion(abc: string): void {
            AllLeadController.regionDropdownList.push(abc);
        }

        addZone(abc: string): void {
            AllLeadController.zoneDropdownList.push(abc);
        }

       

        ViewDetails(data: any): void {
            
            this.AllLeadReportViewService.Find(data).then((response => {
                this.LeadReportView = this.AllLeadReportViewService.GetAllLeadReportView(response.data.Result);
                console.log(this.LeadReportView);
                

                this.LeadID = this.LeadReportView.LeadID;
                $('#LeadOrigin').val(this.LeadReportView.LeadOrigin);
                $('#txtProjectName').val(this.LeadReportView.ProjectName);
                $('#Opportunity').val(this.LeadReportView.Opportunity);
                $('#LeadID').val(this.LeadReportView.LeadID);
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
                $('#txtRefUserName').val(this.LeadReportView.RefUserName);

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
                $('#txtClosedBy').val(this.LeadReportView.ClosedBy);
                if (this.LeadReportView.MetCustomer == "False") {
                    this.LeadReportView.MetCustomer = "No";
                }
                else if (this.LeadReportView.MetCustomer == "True") {
                    this.LeadReportView.MetCustomer = "Yes";
                }
                if (this.LeadReportView.Lessthan90days == "False") {
                    this.LeadReportView.Lessthan90days = "No";
                }
               else if (this.LeadReportView.Lessthan90days == "True") {
                    this.LeadReportView.Lessthan90days = "Yes";
                }
                $("detailModal").show();
            }));
        }

        Division(): void {
            this.DivisionDropDown = this.DivisionService.Find().then((response => {
                this.DivisionDropDown = this.DivisionService.GetDivisionName(response.data.Result);
            }));
        }
        Product(): void {
            
            this.AllLeadsHeaderModel.DivisionID = AllLeadController.divisionDropdownList.toString();
            this.ProductDropDown = this.ProductService.Find(this.AllLeadsHeaderModel.DivisionID).then((response => {
                this.ProductDropDown = this.ProductService.GetProductName(response.data.Result);
            }));
        }
        Model(): void {
            
            this.AllLeadsHeaderModel.ProductID = AllLeadController.productDrpodownList.toString();
            this.ModelDropDown = this.ModelService.Find(this.AllLeadsHeaderModel).then((response => {
                this.ModelDropDown = this.ModelService.GetLeadTypeProduct(response.data.Result);
            }));
        }
        District(): void {
            this.DistrictDropDown = this.DistrictService.Find(this.AllLeadsHeaderModel.StateIDs).then((response => {
                this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
            }));
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            this.AllLeadsHeaderModel.StatusID = AllLeadController.statusDropdownList.toString();
            this.AllLeadsHeaderModel.LeadType = AllLeadController.leadTypeDropdownList.toString();
            this.AllLeadsHeaderModel.ModelId = AllLeadController.modelDrpodownList.toString();
            this.AllLeadsHeaderModel.LeadSourceID = AllLeadController.leadSourceIDDropdownList.toString();
            this.AllLeadsHeaderModel.LeadOrigin = AllLeadController.leadOriginDropdownList.toString();
            this.AllLeadsHeaderModel.ZoneID = AllLeadController.zoneDropdownList.toString();
            this.AllLeadsHeaderModel.RegionID = AllLeadController.regionDropdownList.toString();

            this.AllLeadsHeaderModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.AllLeadsHeaderModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.FillAllLeadsSGrid = this.AllLeadsService.FindGrid(this.AllLeadsHeaderModel).then((response => {
                this.FillAllLeadsSGrid = this.AllLeadsService.GetAllLeadsGrid(response.data.Result);
                $('#search-btn-loader').hide();

                if (this.FillAllLeadsSGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillAllLeadsSGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + that.numRecords;
                    });

                    $('#search-btn-loader').hide();
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillAllLeadsSGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.FillAllLeadsSGrid.length < that.numRecords) {
                    this.ShowNext = false;
                    this.ShowBack = false;
                }

                this.AllLeadCountService.FindGrid(this.AllLeadsHeaderModel).then((response => {
                    this.getAllLeadCount = this.AllLeadCountService.GetLeadsStatusCountGrid(response.data.Result);
                }));
            }));
        }


        Search(): void {
            $('#search-btn-loader').show();
            $('.chkBox').prop('checked', false);
            
            this.FillGrid(this.numRecords);
            AllLeadController.statusDropdownList = [];
            AllLeadController.leadTypeDropdownList = [];
            AllLeadController.divisionDropdownList = [];
            AllLeadController.productDrpodownList = [];
            AllLeadController.leadSourceIDDropdownList = [];
            AllLeadController.leadOriginDropdownList = [];
            AllLeadController.zoneDropdownList = [];
            AllLeadController.regionDropdownList = [];
        }

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.FillAllLeadsSGrid.slice(begin, end);
            if (this.page + 2 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.FillAllLeadsSGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();

            $("#ErrClose").show();
            $("#submitClose").hide();
            this.alert = Message;
        }

        Clear() {
           // this.FillGrid(this.numRecords);
            this.AllLeadsHeaderModel.CustomerID = "";
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
            this.AllLeadsHeaderModel.LeadOrigin = "";
            this.AllLeadsHeaderModel.LeadTypeID = "";
            this.AllLeadsHeaderModel.ZoneID = "";
            this.AllLeadsHeaderModel.Opportunity = "";
            this.AllLeadsHeaderModel.ProjectID = "";
            (<HTMLInputElement>document.getElementById("txtUserName")).value = "";
            (<HTMLInputElement>document.getElementById("txtCustomerName")).value = "";
            (<HTMLInputElement>document.getElementById("txtSalesRep1")).value = "";
            (<HTMLInputElement>document.getElementById("txtProjectName")).value = "";
         
        }

        Close(): void {
            location.href = "#!/AllLeads";
        }
        ErrorClose(): void {
            location.href = "#!/AllLeads";
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
                row.push('"' + cols[j].innerHTML + '"');
                csv.push(row.join(","));
               
            }
            // Download CSV file
            this.downloadCSV(csv.join("\n"), filename);
        }

        public Search1(data: any): void {
            this.CustomerSapAutofill.FindCustomerSAPID(data).then((response => {

                this.InsertContact.CustomerSAPID = this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
            }));
        }
    }
    class AllLeadComponentController implements ng.IComponentOptions {
        static Name: string = "allleadcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = AllLeadController;
            this.templateUrl = "/Scripts/App/AllLead/Template/AllLead.html";
        }
    }
    app.AddComponent(AllLeadComponentController.Name, new AllLeadComponentController());

}