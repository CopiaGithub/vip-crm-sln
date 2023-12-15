var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var CampaignMaster = GCPL.Model.InsertCampaignMaster;
            var CampaignMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function CampaignMasterController(_InsertService, _LeadSourceDDService, _Listservice, _EditService, _LSService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.InsertCampaign = null;
                    this.LeadSourceDD = null;
                    this.CampaignList = null;
                    this.CampaignSearch = null;
                    this.EditCampaign = null;
                    this.LeadSourceDropDown = null;
                    this.Cookie = null;
                    this.InsertService = _InsertService;
                    this.InsertCampaign = new CampaignMaster();
                    this.LeadSourceDDService = _LeadSourceDDService;
                    this.Listservice = _Listservice;
                    this.CampaignSearch = Array();
                    this.EditService = _EditService;
                    this.LSService = _LSService;
                    this.Cookie = _cookieStore;
                }
                CampaignMasterController.prototype.$onInit = function () {
                    /* Sorting */
                    var th = document.getElementsByTagName('th');
                    for (var c = 0; c < th.length; c++) {
                        th[c].addEventListener('click', item(c));
                    }
                    function item(c) {
                        return function () {
                            console.log(c);
                            sortTable(c);
                        };
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
                    $('#search-btn-loader').hide();
                    var that = this;
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $("#txtFromDate").datepicker({
                        dateFormat: 'yy-mm-dd', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectFromDate
                    });
                    $("#txtToDate").datepicker({
                        dateFormat: 'yy-mm-dd', changeMonth: true,
                        changeYear: true,
                        onSelect: this.selectToDate
                    });
                };
                CampaignMasterController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                CampaignMasterController.prototype.selectToDate = function (e) {
                    document.getElementById("txtToDate").value = e;
                };
                //Page Load Define Values//
                CampaignMasterController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.LeadSourceDD = this.LeadSourceDDService.Find().then((function (response) {
                        _this.LeadSourceDD = _this.LeadSourceDDService.GetLeadSourceDDnew(response.data.Result);
                    }));
                    this.LeadSourceDropDown = this.LSService.Find().then((function (response) {
                        _this.LeadSourceDropDown = _this.LSService.GetLeadSource(response.data.Result);
                    }));
                };
                CampaignMasterController.prototype.SearchCampaignList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                CampaignMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CampaignMasterController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                CampaignMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CampaignMasterController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    this.InsertCampaign.StartDate = document.getElementById("txtFromDate").value;
                    this.InsertCampaign.EndDate = document.getElementById("txtToDate").value;
                    if (this.InsertCampaign.LeadSourceID == undefined || this.InsertCampaign.LeadSourceID == null || this.InsertCampaign.LeadSourceID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Lead Source", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCampaign.CampaignName == undefined || this.InsertCampaign.CampaignName == null || this.InsertCampaign.CampaignName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Campaign Name", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCampaign.Description == undefined || this.InsertCampaign.Description == null || this.InsertCampaign.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Campaign Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCampaign.SAPID == undefined || this.InsertCampaign.SAPID == null || this.InsertCampaign.SAPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SAP ID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCampaign.StartDate == undefined || this.InsertCampaign.StartDate == null || this.InsertCampaign.StartDate == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Start Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCampaign.EndDate == undefined || this.InsertCampaign.EndDate == null || this.InsertCampaign.EndDate == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter End Date", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCampaign.Status == undefined || this.InsertCampaign.Status == null || this.InsertCampaign.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCampaign.TargetedLeads == undefined || this.InsertCampaign.TargetedLeads == null || this.InsertCampaign.TargetedLeads == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Targeted Leads", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCampaign.EstimatedCost == undefined || this.InsertCampaign.EstimatedCost == null || this.InsertCampaign.EstimatedCost == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Estimated Cost of Campaign ", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.InsertService.PostCampaign(this.InsertCampaign).then((function (response) {
                            console.log(_this.InsertCampaign);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Campaign saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertCampaign = null;
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                //this.IsDisplayModalPopupError = true;
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                CampaignMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertCampaign = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        //$('#txtCampaignnm').val(this.InsertCampaign.CampaignName);
                        //$('#txtCampaignDesc').val(this.InsertCampaign.Description);
                        //$('#txtCampaignSAP').val(this.InsertCampaign.SAPID);
                        //(<HTMLInputElement>document.getElementById("txtFromDate")).value = this.InsertCampaign.StartDate;
                        //(<HTMLInputElement>document.getElementById("txtToDate")).value = this.InsertCampaign.EndDate;
                        //$('#txtTargetedLeads').val(this.InsertCampaign.TargetedLeads);
                        //$('#txtEstimatedCost').val(this.InsertCampaign.EstimatedCost);
                        if (_this.InsertCampaign.Status == "True") {
                            _this.InsertCampaign.Status = "1";
                        }
                        else {
                            _this.InsertCampaign.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                CampaignMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.CampaignList = this.Listservice.Find(this.CampaignSearch).then((function (response) {
                        _this.CampaignList = _this.Listservice.GetCampaignList(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.CampaignList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.CampaignList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.CampaignList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.CampaignList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                CampaignMasterController.prototype.Add = function () {
                    this.InsertCampaign.LeadSourceID = "";
                    this.InsertCampaign.CampaignName = "";
                    this.InsertCampaign.Description = "";
                    this.InsertCampaign.SAPID = "";
                    this.InsertCampaign.StartDate = "";
                    this.InsertCampaign.EndDate = "";
                    this.InsertCampaign.Status = "";
                    this.InsertCampaign.TargetedLeads = "";
                    this.InsertCampaign.EstimatedCost = "";
                };
                CampaignMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CampaignList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                CampaignMasterController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                CampaignMasterController.prototype.Clear = function () {
                    this.CampaignSearch.SearchText = "";
                    this.CampaignSearch.LeadSourceID = "";
                    this.CampaignSearch.StatusID = "";
                    $("#txtCampaign").val("");
                    $("#txtLeadSource").val("");
                    $("#txtstatus").val("");
                };
                CampaignMasterController.prototype.downloadCSV = function (csv, filename) {
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
                };
                CampaignMasterController.prototype.exportTableToCSV = function (filename) {
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
                };
                CampaignMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CampaignList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                CampaignMasterController.prototype.Close = function () {
                    location.href = "#!/CampaignMaster";
                };
                CampaignMasterController.$inject = ["InsertCampaignService", "LeadSourceDDService", "CampaignListService", "CampaignEditService", "LeadSourceddService", "$cookieStore"];
                return CampaignMasterController;
            }());
            var CampaignMasterComponentController = /** @class */ (function () {
                function CampaignMasterComponentController() {
                    this.controller = CampaignMasterController;
                    this.templateUrl = "/Scripts/App/BulkUpload/CampaignMaster/Template/_CampaignMaster.html";
                }
                CampaignMasterComponentController.Name = "campaignmastercomponent";
                return CampaignMasterComponentController;
            }());
            app.AddComponent(CampaignMasterComponentController.Name, new CampaignMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
3;
//# sourceMappingURL=CampaignMasterComponent.js.map