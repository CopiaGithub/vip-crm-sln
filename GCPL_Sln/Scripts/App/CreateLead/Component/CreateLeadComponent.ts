namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import CreateLeadlist = GCPL.Model.CreateLeadListModel;
    import Search = GCPL.Model.CreateLeadSearchModel;
    import CustomerValidate = GCPL.Model.CustomerViewModel;    

    interface ICreateLeadController {
        CreateLeadList: Array<Model.CreateLeadListModel>;
        SearchCreateLeadList(): void;
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        UserID: GCPL.Model.UserIDModel
        Validate(data:any): void;
        CustomerView: Array<Model.CustomerViewModel>;
        
    }
    class CreateLeadController implements ICreateLeadController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        RoleID = null;

        alert = null;
        CreateLeadList = null;
        LeadStatusDropDown = null;
        CreateLeadSearch: GCPL.Model.CreateLeadSearchModel = null;
        UserID = null;
        CustomerView = null;
       
        private Cookie: any = null;
        private ListService: Service.ICreateLeadListService;
        private LeadStatusService: Service.ILeadStatusddService;
        private CustomerViewService: Service.ICustomerViewService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;

        static $inject = ["CreateLeadListService", "LeadStatusddService", "CustomerViewService", "CustomerSapIdAutoFillService", "$cookieStore"];



        constructor(_ListService: Service.ICreateLeadListService, _LeadStatusService: Service.ILeadStatusddService, _CustomerViewService: Service.ICustomerViewService, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService,
             private _cookieStore: any) {

            this.ListService = _ListService;
            this.CreateLeadSearch = new Search();
            this.LeadStatusService = _LeadStatusService;
            this.CustomerViewService = _CustomerViewService;
            this.CustomerView = new CustomerValidate();  
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
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
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();

        }
    
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();

            this.LeadStatusDropDown = this.LeadStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadStatusService.GetLeadStatusName(response.data.Result);

            }));
            let that = this;
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
                    that.CreateLeadSearch.SearchInput = ui.item.id;

                },
                change: function () {
                }
            });  
        }

        SearchCreateLeadList(): void {
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
           
            this.CreateLeadList = this.ListService.Find(this.CreateLeadSearch).then((response => {
                this.CreateLeadList = this.ListService.GetCreateLeadlist(response.data.Result);
                $('#search-btn-loader').hide();
                            

                if (this.CreateLeadList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.CreateLeadList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.CreateLeadList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.CreateLeadList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
                
               
            }));
        }

        Validate(data:any): void {
            
            this.CustomerViewService.Find(data).then((response => {
                this.CustomerView = this.CustomerViewService.GetCustomerView(response.data.Result);
              
                
                $('#txtCustName').val(this.CustomerView.CompanyName);
                $('#txtProjectName').val(this.CustomerView.ProjectName);
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
                
                $("reAllocateModal").show();

            }));

           

        }
        

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.CreateLeadList.slice(begin, end);
            if (this.page + 1 >= this.maxPages) {
                this.ShowNext = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);

        }

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.CreateLeadList.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {

            this.CreateLeadSearch.SearchInput = "";
            this.CreateLeadSearch.StatusID = "";
            this.CreateLeadSearch.UserID = "";           

            //this.CategorySearch = "";
            $("#txtLeadStatus").val("");
            $("#txtCustomer").val("");
           
        }

    }
    class CreateLeadComponentController implements ng.IComponentOptions {
        static Name: string = "createleadcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CreateLeadController;
            this.templateUrl = "/Scripts/App/CreateLead/Template/CreateLead.html";
        }
    }
    app.AddComponent(CreateLeadComponentController.Name, new CreateLeadComponentController());

}