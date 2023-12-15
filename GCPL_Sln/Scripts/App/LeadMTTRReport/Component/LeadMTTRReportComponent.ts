namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import LeadsMTTRHeader = GCPL.Model.LeadsMTTRHeaderModel;

    interface ILeadMTTRReportController {
        LeadStatusDropDown: Array<Model.LeadStatusddlModel>
        LeadsMTTRHeaderModel: LeadsMTTRHeader;
    }
    class LeadMTTRReportController implements ILeadMTTRReportController {
        FillAllMTTRLeadsSGrid = null;
        LeadsMTTRHeaderModel = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        static statusDropdownList = [];
        LeadStatusDropDown = null;
        private CustomerSapAutofill: Service.ICustomerSapIdAutoFillService;
        private getAutoSalesrep1: Service.IUserNameAtofillService;
        private LeadStatusService: Service.ILeadStatusddService;
        private AllLeadMTTRService: Service.IAllLeadMTTRService;
        static $inject = ["CustomerSapIdAutoFillService", "UserNameAtofillService", "LeadStatusddService","AllLeadMTTRService"];
        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_CustomerSapAutofill: Service.ICustomerSapIdAutoFillService, _getAutoSalesrep1: Service.IUserNameAtofillService, _LeadStatusService: Service.ILeadStatusddService, _AllLeadMTTRService: Service.IAllLeadMTTRService) {
            this.CustomerSapAutofill = _CustomerSapAutofill;
            this.getAutoSalesrep1 = _getAutoSalesrep1;
            this.LeadsMTTRHeaderModel = new GCPL.Model.LeadsMTTRHeaderModel();
            this.LeadStatusService = _LeadStatusService;
            this.AllLeadMTTRService = _AllLeadMTTRService;
        }

        $onInit() {
            this.Init()
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

        addStatus(abc: string): void {
            LeadMTTRReportController.statusDropdownList.push(abc);
        }
        
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
            $("#errorclose").hide();
            $("#close").hide();

            let that = this;
            $("#txtCustomer").autocomplete({
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
                    that.LeadsMTTRHeaderModel.CustomerID = ui.item.id;
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
                    that.LeadsMTTRHeaderModel.AllocatedTo = ui.item.id;
                    console.log(that.LeadsMTTRHeaderModel.AllocatedTo);
                },
                change: function () {

                }
            });

            this.LeadStatusDropDown = this.LeadStatusService.Find().then((response => {
                this.LeadStatusDropDown = this.LeadStatusService.GetLeadStatusName(response.data.Result);
            }));
        }

        FillGrid(NoOfRecords): void {
            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            this.LeadsMTTRHeaderModel.FromDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.LeadsMTTRHeaderModel.ToDate = (<HTMLInputElement>document.getElementById("txtToDate")).value;
            this.LeadsMTTRHeaderModel.StatusID = LeadMTTRReportController.statusDropdownList.toString();
            this.FillAllMTTRLeadsSGrid = this.AllLeadMTTRService.FindGrid(this.LeadsMTTRHeaderModel).then((response => {
                this.FillAllMTTRLeadsSGrid = this.AllLeadMTTRService.GetAllLeadsGrid(response.data.Result);
                $('#search-btn-loader').hide();

                if (this.FillAllMTTRLeadsSGrid.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.FillAllMTTRLeadsSGrid.forEach(function (value, key) {
                        that.incre = parseInt(key) + that.numRecords;
                    });

                    $('#search-btn-loader').hide();
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.FillAllMTTRLeadsSGrid.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.FillAllMTTRLeadsSGrid.length < that.numRecords) {
                    this.ShowNext = false;
                    this.ShowBack = false;
                }
            }));
        }

        Search(): void {
            $('#search-btn-loader').show();
            this.FillGrid(this.numRecords);
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
            this.shownItems = this.FillAllMTTRLeadsSGrid.slice(begin, end);
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
            this.shownItems = this.FillAllMTTRLeadsSGrid.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };

        Clear() {
            this.LeadsMTTRHeaderModel.CustSAPID = "";
            this.LeadsMTTRHeaderModel.LeadID = "";
            this.LeadsMTTRHeaderModel.StatusID = "";
            (<HTMLInputElement>document.getElementById("txtCustomer")).value = "";
            (<HTMLInputElement>document.getElementById("txtSalesRep1")).value = "";
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
       
    }
    class AllLeadComponentController implements ng.IComponentOptions {
        static Name: string = "leadmttrreportcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LeadMTTRReportController;
            this.templateUrl = "/Scripts/App/LeadMTTRReport/Template/LeadMTTRReport.html";
        }
    }
    app.AddComponent(AllLeadComponentController.Name, new AllLeadComponentController());

}