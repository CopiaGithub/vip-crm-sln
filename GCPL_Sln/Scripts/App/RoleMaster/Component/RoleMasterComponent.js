var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var RoleMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function RoleMasterController(_RoleMService, _Eservice, _InsertService) {
                    this.InserRoleMaster = null;
                    this.RoleMasterHeaderModel = null;
                    this.FillRoleMasterGrid = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.RoleMService = _RoleMService;
                    this.RoleMasterHeaderModel = new Array();
                    this.Eservice = _Eservice;
                    this.InsertService = _InsertService;
                }
                RoleMasterController.prototype.$onInit = function () {
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
                    /*sorting end*/
                    this.Init();
                    $('#search-btn-loader').hide();
                };
                RoleMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.FillRoleMasterGrid = this.RoleMService.FindGrid(this.RoleMasterHeaderModel).then((function (response) {
                        _this.FillRoleMasterGrid = _this.RoleMService.GetRoleGrid(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.FillRoleMasterGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.FillRoleMasterGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.FillRoleMasterGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.FillRoleMasterGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        _this.maxPages = (that.incre / that.numRecords);
                        _this.ShowBack = false;
                        _this.ShowNext = that.maxPages > 1 ? true : false;
                        _this.shownItems = _this.FillRoleMasterGrid.slice(0, that.numRecords);
                    }));
                };
                RoleMasterController.prototype.Search = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#search-btn-loader').show();
                };
                RoleMasterController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                RoleMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillRoleMasterGrid.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                RoleMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.FillRoleMasterGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                RoleMasterController.prototype.Clear = function () {
                    this.RoleMasterHeaderModel.SearchText = "";
                    this.RoleMasterHeaderModel.Status = "";
                    //this.CategorySearch = "";
                    $("#txtModel").val("");
                    $("#txtPhone").val("");
                    $("#ddlstatus").val("");
                };
                RoleMasterController.prototype.Add = function () {
                    this.InserRoleMaster.Title = "";
                    this.InserRoleMaster.Status = "";
                };
                RoleMasterController.prototype.EditRoleMaster = function (data) {
                    var _this = this;
                    this.Eservice.Find(data).then((function (response) {
                        _this.InserRoleMaster = _this.Eservice.GetRoleMasterEdit(response.data.Result);
                        //$('#txtDivision').val(this.InserUserMaster.CustDivision);
                        //$('#txtSalesOffice').val(this.InserUserMaster.SalesOfficeID);
                        //this.State();
                        //this.District();
                        //$('#txtState').val(this.InserUserMaster.StateID);
                        //$('#txtDistrict').val(this.InserUserMaster.DistrictID);
                        if (_this.InserRoleMaster.Status == "True") {
                            _this.InserRoleMaster.Status = "1";
                        }
                        else {
                            _this.InserRoleMaster.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                RoleMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                RoleMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                RoleMasterController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InserRoleMaster.Title == undefined || this.InserRoleMaster.Title == null || this.InserRoleMaster.Title == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Title", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InserRoleMaster.Status == undefined || this.InserRoleMaster.Status == null || this.InserRoleMaster.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostRoleMaster(this.InserRoleMaster).then(function (response) {
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Role saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InserRoleMaster = null;
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        });
                    }
                };
                //Page Load Define Values//
                RoleMasterController.prototype.Init = function () {
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                RoleMasterController.prototype.downloadCSV = function (csv, filename) {
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
                RoleMasterController.prototype.exportTableToCSV = function (filename) {
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
                };
                RoleMasterController.$inject = ["RoleMasterService", "RoleMasterEditService", "InsertRoleService"];
                return RoleMasterController;
            }());
            var RoleMasterComponentController = /** @class */ (function () {
                function RoleMasterComponentController() {
                    this.controller = RoleMasterController;
                    this.templateUrl = "/Scripts/App/RoleMaster/Template/_RoleMaster.html";
                }
                RoleMasterComponentController.Name = "rolemastercomponent";
                return RoleMasterComponentController;
            }());
            app.AddComponent(RoleMasterComponentController.Name, new RoleMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=RoleMasterComponent.js.map