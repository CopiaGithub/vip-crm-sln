namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import SearchFollow = GCPL.Model.ReportFollowupSearchModel;

    interface ILeadFollowUpController {
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        SearchList: SearchFollow;
        Search(): void;
    }

    class LeadFollowUpController implements ILeadFollowUpController {
        LeadStatusDropDown = null;
        SearchList = null;
        private Cookie: any = null;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        numRecords: number = 10;
        List = null;
        UserID = null;
        RoleID = null;
        private LeadListService: Service.IFollowUpReportService;
        private LeadFollupStatusService: Service.ILeadFollupStatusService;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private getAutoUser: Service.IUserCodeAutoFillService;
        static $inject = ["FollowUpReportService", "LeadFollupStatusService", "CustomerSapIdAutoFillService", "UserCodeAutoFillService","$cookieStore"]

        constructor(_LeadListService: Service.IFollowUpReportService, _LeadStatusService: Service.ILeadFollupStatusService, _CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _getAutoUser: Service.IUserCodeAutoFillService, private _cookieStore: any) {
            this.LeadListService = _LeadListService;
            this.LeadFollupStatusService = _LeadStatusService;
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.getAutoUser = _getAutoUser;
            this.SearchList = new SearchFollow();
            this.Cookie = _cookieStore;
            this.UserID = this.Cookie.get('UserInfo')['UserID'];
            this.RoleID = this.Cookie.get('UserInfo')['RoleID'];
        }

        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();
        }

        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();



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


            this.SearchList.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.SearchList.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;


            this.LeadStatusDropDown = this.LeadFollupStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadFollupStatusService.GetLeadStatusFollup(response.data.Result);
            }));

            let that = this;
            $("#txtAllocated").autocomplete({
                source: function (request, res) {
                    that.getAutoUser.FilterAutoComplete(request).then((response => {
                        let data = that.getAutoUser.GetAutoUser(response.data.Result);
                        res($.map(data, function (item, index) {
                            
                            return {
                                label: item.UserName,
                                value: item.UserName,
                                id: item.UserID
                            }
                        }));
                    }));
                },
                minLength: 2,
                focus: (event, ui) => {

                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.SearchList.AllocatedTo = ui.item.id;
                },
                change: function () {

                }
            });
            $("#txtCustomerName").autocomplete({
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
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.SearchList.CustomerName = ui.item.id;
                },
                change: function () {

                }
            });
        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        selectToDate(e) {
            (<HTMLInputElement>document.getElementById("txtToDate")).value = e;
        }
        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            
            this.List = this.LeadListService.Find(this.SearchList).then((response => {
                this.List = this.LeadListService.Getlist(response.data.Result);
                $('#search-btn-loader').hide();
                

                if (this.List.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.List.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.List);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.List.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }


            }));
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

        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }

        Search(): void {
            $('#search-btn-loader').show();
            this.SearchList.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.SearchList.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }

        Clear() {
            this.SearchList.LeadID = "";
            this.SearchList.StatusID = "";
            this.SearchList.CustomerName = "";
            this.SearchList.AllocatedTo = "";
            this.SearchList.FromDate = "";
            this.SearchList.ToDate = "";
            $("#txtCustomerName").val("");
            $("#txtLead").val("");
            $("#txtAllocated").val("");
            $("#txtleadstatus").val("");
            (<HTMLInputElement>document.getElementById("txtToDate")).value = "";
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = "";
        }

        back() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page -= 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.List.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.List.slice(begin, end);
            if (this.page + 1 >= this.maxPages) {
                this.ShowNext = false;
            }
        };
        
    }
    
    class LeadFollowUpComponentController implements ng.IComponentOptions {
        static Name: string = "leadfollowupcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadFollowUpController;
            this.templateUrl = "/Scripts/App/LeadFollowUp/Template/LeadFollowUp.html";
        }
    }
    app.AddComponent(LeadFollowUpComponentController.Name, new LeadFollowUpComponentController());
}