namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import RealloacteLeadlist = GCPL.Model.ReallocateListModel;
    import Search = GCPL.Model.ReallocateLeadSearchModel;
    import CustomerValidate = GCPL.Model.CustomerViewModel;  
    import InsertReallocateLead = GCPL.Model.InsertReallocateLeadModel;
    import EmployeeCodeDetails = GCPL.Model.GetEmpCodeModel;

    interface IReAllocateLeadController {
        RealloacteLeadList: Array<Model.ReallocateListModel>;
        SearchRealloacteLeadList(): void;
        Validate(data: any): void;
        CustomerView: Array<Model.CustomerViewModel>;
        InsertReallocate: InsertReallocateLead;
        Submit(): void;
        Search(data: any): void;
        EmpCode: EmployeeCodeDetails;
        LeadID: any;
    }
    class ReAllocateLeadController implements IReAllocateLeadController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        RealloacteLeadList = null;
        ReallocateSearch: GCPL.Model.ReallocateLeadSearchModel = null;
        CustomerView = null;
        InsertReallocate:any;
        EmpCode = null;
        LeadID = null;
        //UserID = null;

        private Cookie: any = null;
        private ListService: Service.IReallocateLeadListService;
        private CustomerViewService: Service.ICustomerViewService;
        private getAutoSalesrep1: Service.IEmployeeAtofillService;
        private InsertService: Service.IInsertReallocateLeadsService;
        private EmployeeCodeService: Service.IGetEmployeeCodeService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;

        static $inject = ["ReallocateLeadListService", "CustomerViewService", "EmployeeAtofillService", "InsertReallocateLeadsService", "GetEmployeeCodeService", "CustomerSapIdAutoFillService", "$cookieStore"];

        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_ListService: Service.IReallocateLeadListService, _CustomerViewService: Service.ICustomerViewService, _getAutoSalesrep1: Service.IEmployeeAtofillService,
            _InsertService: Service.IInsertReallocateLeadsService, _EmployeeCodeService: Service.IGetEmployeeCodeService, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, private _cookieStore: any) {

            this.ListService = _ListService;
            this.ReallocateSearch = new Search();
            this.CustomerViewService = _CustomerViewService;
            this.CustomerView = new CustomerValidate();
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.InsertService = _InsertService;
            this.InsertReallocate = new InsertReallocateLead();
            this.EmployeeCodeService = _EmployeeCodeService;
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.Cookie = _cookieStore;
            //this.UserID = this.Cookie.get('UserInfo')['UserID'];
        }

        $onInit() {
            /* Sorting */

            var th = document.getElementsByTagName('th')
            for (let c = 0; c < th.length; c++) {
                th[c].addEventListener('click', item(c))

            }
            function item(c) {
                return function () {
                    console.log(c)
                    sortTable(c)
                }
            }
            function sortTable(c) {
                var table, rows, switching, i, x, y, shouldSwitch;
                table = document.getElementById("dataTable");
                switching = true;
                /*Make a loop that will continue until
                no switching has been done:*/
                while (switching) {
                    //start by saying: no switching is done:
                    switching = false;
                    rows = table.rows;
                    /*Loop through all table rows (except the
                    first, which contains table headers):*/
                    for (i = 1; i < (rows.length - 1); i++) {
                        //start by saying there should be no switching:
                        shouldSwitch = false;
                        /*Get the two elements you want to compare,
                        one from current row and one from the next:*/
                        x = rows[i].getElementsByTagName("TD")[c];
                        y = rows[i + 1].getElementsByTagName("TD")[c];
                        //check if the two rows should switch place:
                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                            //if so, mark as a switch and break the loop:
                            shouldSwitch = true;
                            break;
                        }
                    }
                    if (shouldSwitch) {
                        /*If a switch has been marked, make the switch
                        and mark that a switch has been done:*/
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
                }
            }
            /*sorting end*/
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();

        }

        //Page Load Define Values//
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

            //this.Validate(this.LeadID);

            let that = this;
            
            $("#txtUserName").autocomplete({

                source: function (request, res) {
                    that.getAutoSalesrep1.FilterAutoComplete(request).then((response => {

                        let data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);

                        res($.map(data, function (item, index) {
                            
                            return {

                                label: item.Name,
                                value: item.Name,
                                id: item.userid,
                                

                            }
                        }));

                    }));

                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    

                    that.InsertReallocate.UserID = ui.item.id;
                  //  $('#txtEmpCode').val(ui.item.value);
                    that.Search(ui.item.id);
                    //console.log(that.InsertReallocate.RefUserName);

                },
                change: function () {

                }
            });

            $("#txtCustomer").autocomplete({
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
                    that.ReallocateSearch.SearchInput = ui.item.id;
              
                },
                change: function () {
                }
            });  
        }

        SearchRealloacteLeadList(): void {
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
            
            this.RealloacteLeadList = this.ListService.Find(this.ReallocateSearch).then((response => {
                this.RealloacteLeadList = this.ListService.GetReallocateList(response.data.Result);
                this.LeadID = this.RealloacteLeadList.LeadID;
                $('#search-btn-loader').hide();
                

                if (this.RealloacteLeadList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.RealloacteLeadList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.RealloacteLeadList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.RealloacteLeadList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.RealloacteLeadList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.RealloacteLeadList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.RealloacteLeadList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.RealloacteLeadList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }


            }));
        }

        Validate(data: any): void {
                        
            $('#txtUserName').val("");
            $('#txtEmpCode').val("");
            this.CustomerViewService.Find(data).then((response => {
                this.CustomerView = this.CustomerViewService.GetCustomerView(response.data.Result);

                
                $('#txtCustName').val(this.CustomerView.CompanyName);
                $('#txtCustEmail').val(this.CustomerView.Email);
                $('#txtCustMobile').val(this.CustomerView.MobileNo);
                $('#txtCustPhone').val(this.CustomerView.PhoneNo);
                $('#txtCustAddress').val(this.CustomerView.Address1);

                $('#txtConName').val(this.CustomerView.ContactName);
                $('#txtConEmail').val(this.CustomerView.ConEmail);
                $('#txtConPhone').val(this.CustomerView.ConPhoneNo);
                $('#txtConMobile').val(this.CustomerView.ConMobileNo);
                $('#txtConAddress').val(this.CustomerView.Address);


                $('#txtmodel').val(this.CustomerView.ModelNo);
                //$('#txtpurchase').val(this.CustomerView.Quantity);
                $('#txtpurchase').val(this.CustomerView.Title);
                $('#txtcomm').val(this.CustomerView.Comments);
                $('#txtleadcat').val(this.CustomerView.LeadCategory);
                //$('#txtConName').val(this.CustomerView.LeadCategoryID);
                //$('#txtConName').val(this.CustomerView.LeadID);
                // $('#txtConName').val(this.CustomerView.CampaignName);
                $('#txtcreate').val(this.CustomerView.CreatedBy);
                $('#txtspeci').val(this.CustomerView.CreateComment);
                $('#txtsource').val(this.CustomerView.SourceID);
                //$('#txtsource').val(this.CustomerView.LeadSource);
                $('#txtwhen').val(this.CustomerView.WhenCreated);
                $('#txtvalid').val(this.CustomerView.ValidatedBy);
                $('#txtvalidcomm').val(this.CustomerView.ValidComment);
                $('#txtvaliddate').val(this.CustomerView.WhenValidated);
                $('#txtalloc').val(this.CustomerView.Allocated);
                $('#txtdateallo').val(this.CustomerView.WhenAllocated);
                $('#txtasscomments').val(this.CustomerView.AssessmentComment);
                $('#txtasses').val(this.CustomerView.AssessmentDate);
                $('#txtleadstatus').val(this.CustomerView.Status);
                $('#txtless').val(this.CustomerView.IsLess);
                $('#txtmet').val(this.CustomerView.IsMeet);
                $('#txtReturnID').val(this.CustomerView.ReturnUserID);
                $('#txtReturnComment').val(this.CustomerView.ReturnComment);
                $('#txtReturnBy').val(this.CustomerView.ReturnUserName);
              

                this.InsertReallocate.LeadID = this.CustomerView.LeadID;
                //this.LeadID = this.CustomerView.LeadID;

                $("reAllocateModal").show();

            }));



        }

        public Search(data: any): void {
            
            this.EmployeeCodeService.Find(data).then((response => {
                this.EmpCode = this.EmployeeCodeService.GetEmpCodeInfo(response.data.Result);
                console.log(this.EmpCode);
                
                //this.inse.EmployeeCode = this.EmpCode.EmployeeCode;

                $('#txtEmpCode').val(this.EmpCode.EmployeeCode);
            }));



        }
        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }
        popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
            $("#message-text").html(Message);
            $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
            $(ShowImg).show();
            $(HideImg).hide();
            $("#succeess-message-box").modal("show");
        }
        Submit(): void {
            
            this.InsertReallocate.LeadID = this.CustomerView.LeadID;
            if (this.InsertReallocate.UserID != "") {

                this.InsertService.PostReallocate(this.InsertReallocate).then((response => {

                    console.log(this.InsertReallocate);

                    if (response.data.Result != 0) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Lead Re-Allocated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        
                        $('#re-allocate').click();


                        this.InsertReallocate = {};
                        $("#txtUserName").val("");
                        $("#txtEmpCode").val("");
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                    }

                    
                }));
            }

            else {
                this.HideShow();
                this.popupMessage("Please select a user.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                
            }
        }
     
        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.RealloacteLeadList.slice(begin, end);
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
            this.shownItems = this.RealloacteLeadList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {
            this.ReallocateSearch.LeadID = "";
            this.ReallocateSearch.SearchInput = "";
            $("#txtCustomer").val("");           
        }

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        Close(): void {

            location.href = "#!/ReAllocateLead";

        }

        ErrorClose(): void {
            location.href = "#!/ReAllocateLead";

        }
    }
    class ReAllocateLeadComponentController implements ng.IComponentOptions {
        static Name: string = "reallocateleadcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = ReAllocateLeadController;
            this.templateUrl = "/Scripts/App/ReAllocateLead/Template/ReAllocateLead.html";
        }
    }
    app.AddComponent(ReAllocateLeadComponentController.Name, new ReAllocateLeadComponentController());

}