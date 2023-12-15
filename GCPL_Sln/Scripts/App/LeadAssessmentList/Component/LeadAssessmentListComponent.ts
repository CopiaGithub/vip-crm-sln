namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Assesslist = GCPL.Model.AssessmentListModel;
    import Search = GCPL.Model.AssessmentSearchModel;
    import ContactMaster = GCPL.Model.InsertContactMaster;

    interface ILeadAssessmentListController {

        Assessmentlist: Array<Model.AssessmentListModel>;
        SearchAssessmentList(): void;
        InsertContact: ContactMaster;
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>;
        AssessmentSearch: GCPL.Model.AssessmentSearchModel;
        UserID: GCPL.Model.UserIDModel;
        RoleID: GCPL.Model.RoleIDModel;
    }

    class LeadAssessmentListController implements ILeadAssessmentListController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        Assessmentlist = null;
        AssessmentSearch = null;
        InsertContact = null;
        LeadStatusDropDown = null;
        UserID = null;
        RoleID = null;

        private Cookie: any = null;
        private ListService: Service.IAssessmentListService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private LeadStatusService: Service.ILeadStatusAssessmentddService;



        static $inject = ["AssessmentListService", "CustomerSapIdAutoFillService", "LeadStatusAssessmentddService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_ListService: Service.IAssessmentListService, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _LeadStatusService: Service.ILeadStatusAssessmentddService, private _cookieStore: any) {

            this.ListService = _ListService;
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.LeadStatusService = _LeadStatusService;
            this.Cookie = _cookieStore;
            this.AssessmentSearch = Array<GCPL.Model.AssessmentSearchModel>();
            this.InsertContact = new ContactMaster();
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
            $('#search-btn-loader').hide();
            $("#errorclose").hide();
            $("#close").hide();


        }

        //Page Load Define Values//
        Init(): void {
            $('#search-btn-loader').show();
            $("#errorclose").hide();
            $("#close").hide();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            this.LeadStatusDropDown = this.LeadStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadStatusService.GetLeadStatusAssessmentName(response.data.Result);

            })); 

            let that = this;
            $("#txtCustomerrName").autocomplete({
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
                    that.AssessmentSearch.CustomerID = ui.item.id;
                    that.Search1(ui.item.id);
                    console.log(that.AssessmentSearch.CustomerID);
                },
                change: function () {
                }
            });  

        }

        SearchAssessmentList(): void {
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
            
            this.Assessmentlist = this.ListService.Find(this.AssessmentSearch).then((response => {
                this.Assessmentlist = this.ListService.GetAssessmentList(response.data.Result);
                $('#search-btn-loader').hide();
       
                $('#search-btn-loader').hide();
                

                if (this.Assessmentlist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.Assessmentlist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.Assessmentlist);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.Assessmentlist.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.Assessmentlist.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.Assessmentlist.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.Assessmentlist);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.Assessmentlist.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }


            }));
        }

        public Search1(data: any): void {
            this.CustomerSapAutofill.FindCustomerSAPID(data).then((response => {

                this.InsertContact.CustomerSAPID = this.CustomerSapAutofill.GetCustomerSAPID(response.data.Result);
            }));
        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.Assessmentlist.slice(begin, end);
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
            this.shownItems = this.Assessmentlist.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Refresh() {
            this.FillGrid(this.NoOfRds);
        }

        Clear() {

            this.AssessmentSearch.SearchInput = "";
            this.AssessmentSearch.StatusID = "";
            this.AssessmentSearch.CustomerID = "";
            this.AssessmentSearch.LeadID = "";
            $("#txtCustomerName").val("");
            $("#txtLeadID").val("");
        }

    }
    class LeadAssessmentListComponentController implements ng.IComponentOptions {
        static Name: string = "leadassessmentlistcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {

            this.controller = LeadAssessmentListController;
            this.templateUrl = "/Scripts/App/LeadAssessmentList/Template/LeadAssessmentList.html";
        }
    }
    app.AddComponent(LeadAssessmentListComponentController.Name, new LeadAssessmentListComponentController());


}




