namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import RewardSearchReport = GCPL.Model.RewardSearchModel;

    interface IVLERewardReportMasterController {
        RewardListSearch: RewardSearchReport;
        RewardListReport: Array<Model.RewardReportListModel>


    }
    class VLERewardReportMasterController implements IVLERewardReportMasterController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;

        RewardListSearch = null;
        RewardListReport = null;
        private Cookie: any = null;

        private RewardListReportService: Service.IRewardReportListService;
        private getAutoVLEName: Service.IgetAutoVLENameService;
        static $inject = ["RewardReportListService", "getAutoVLENameService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_RewardListReportService: Service.IRewardReportListService, _getAutoVLEName: Service.IgetAutoVLENameService, private _cookieStore: any) {

            this.RewardListReportService = _RewardListReportService;
            this.getAutoVLEName = _getAutoVLEName;
            this.Cookie = _cookieStore;
            this.RewardListSearch = new GCPL.Model.RewardSearchModel();

        }



        $onInit() {
            this.Init();
            $('#search-btn-loader').hide();
            $("#errorclose").hide();
            $("#close").hide();
        }

        //Page Load Define Values//
        Init(): void {

            let that = this;
            $("#SearchText").autocomplete({
                source: function (request, res) {
                    that.getAutoVLEName.FilterAutoComplete(request).then((response => {
                        let data = that.getAutoVLEName.GetAutoVLEName(response.data.Result);
                        res($.map(data, function (item, index) {
                            return {
                                label: item.ContactName,
                                value: item.ContactName,
                                id: item.VLEID
                            }
                        }));
                    }));
                },
                minLength: 2,
                focus: (event, ui) => {
                    event.preventDefault();
                },
                select: function (e, ui) {
                    that.RewardListSearch.SearchText = ui.item.value;
                },
                change: function () {

                }
            });
        }

        Refresh() {
            $('#search-btn-loader').show();
            this.FillGrid(this.NoOfRds);

        }
        SearchReward(): void {
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

            this.RewardListSearch.LeadID = this.RewardListSearch.LeadID;

            this.RewardListReport = this.RewardListReportService.Find(this.RewardListSearch).then((response => {
                debugger;
                this.RewardListReport = this.RewardListReportService.GetRewardReportList(response.data.Result);
                $('#page-loader').hide();
                $('#search-btn-loader').hide();

                if (this.RewardListReport.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.RewardListReport.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });

                    $('#search-btn-loader').hide();
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.RewardListReport.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }

                if (this.RewardListReport.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.RewardListReport.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.RewardListReport);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.RewardListReport.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        Clear() {

            this.RewardListSearch.SearchText = "";
            this.RewardListSearch.LeadID = "";
            this.RewardListSearch.PaidConverted = "";
            this.RewardListSearch.WonPoints = "";
            $("#ddlPaidConverted").val("");
            $("#ddlPaidWon").val("");
            $("#LeadID").val("");
            $("#SearchText").val("");

        }

        next() {
            this.ShowBack = true;
            this.ShowNext = true;
            this.page += 1;
            var begin = this.page * this.numRecords;
            var end = begin + this.numRecords;
            this.shownItems = this.RewardListReport.slice(begin, end);
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
            this.shownItems = this.RewardListReport.slice(begin, end);
            if (this.page < 1) {
                this.ShowBack = false;
            }
        };
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
    class VLERewardReportMasterComponentController implements ng.IComponentOptions {
        static Name: string = "vlerewardreportmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = VLERewardReportMasterController;
            this.templateUrl = "/Scripts/App/RewardReport/Template/RewardReport.html";
        }
    }
    app.AddComponent(VLERewardReportMasterComponentController.Name, new VLERewardReportMasterComponentController());


}


