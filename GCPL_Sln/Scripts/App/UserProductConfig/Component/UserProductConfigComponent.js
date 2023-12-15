var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var insert = GCPL.Model.AllocationMatrixEditModel;
            var UserProductConfigController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function UserProductConfigController(_AService, _EAservice, _CategoryService, _DivisionPService, _InsertAllocationService, _ProductService, _CountryService, _StateDDService, _DistrictService, _getAutoSalesrep1, _LeadTypeService) {
                    this.AllocationMatrixGrid = null;
                    this.DivisionDropDownP = null;
                    this.CategoryDropDown = null;
                    //DivisionDropDown = null;
                    this.ProductDropDown = null;
                    this.CountryDropDown = null;
                    this.StateDropDown = null;
                    this.DistrictDropDown = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.LeadTypeDropDown = null;
                    this.AllocationMatrixHeaderModel = null;
                    this.CategoryDropDown1 = null;
                    this.DivisionDropDownP1 = null;
                    this.ProductDropDown1 = null;
                    this.StateDropDown1 = null;
                    this.DistrictDropDown1 = null;
                    this.InsertAllocation = null;
                    this.AService = _AService;
                    this.AllocationMatrixHeaderModel = new GCPL.Model.AllocationMatrixHeaderModel();
                    this.EAservice = _EAservice;
                    this.DivisionPService = _DivisionPService;
                    this.CategoryService = _CategoryService;
                    //this.DivisionService = _DivisionService;
                    this.InsertAllocationService = _InsertAllocationService;
                    this.ProductService = _ProductService;
                    this.CountryService = _CountryService;
                    this.StateDDService = _StateDDService;
                    this.DistrictService = _DistrictService;
                    this.getAutoSalesrep1 = _getAutoSalesrep1;
                    this.LeadTypeService = _LeadTypeService;
                    this.InsertAllocation = new insert();
                }
                UserProductConfigController.prototype.$onInit = function () {
                    this.Init();
                    $('#search-btn-loader').hide();
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
                };
                //Page Load Define Values//
                UserProductConfigController.prototype.Init = function () {
                    var _this = this;
                    var that = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    // this.Search();
                    this.CategoryDropDown = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.CategoryDropDown1 = this.CategoryService.Find().then((function (response) {
                        _this.CategoryDropDown1 = _this.CategoryService.GetCategoryName(response.data.Result);
                    }));
                    this.CountryDropDown = this.CountryService.Find().then((function (response) {
                        _this.CountryDropDown = _this.CountryService.GetCountryName(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.StateDropDown = this.StateDDService.Find().then((function (response) {
                        _this.StateDropDown = _this.StateDDService.GetState(response.data.Result);
                    }));
                    this.StateDropDown1 = this.StateDDService.Find().then((function (response) {
                        _this.StateDropDown1 = _this.StateDDService.GetState(response.data.Result);
                    }));
                    $("#txtSalesRep1").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value: item.Name,
                                        id: item.userid
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.InsertAllocation.UserID = ui.item.id;
                            console.log(that.InsertAllocation.UserID);
                        },
                        change: function () {
                        }
                    });
                    $("#txtbysearch").autocomplete({
                        source: function (request, res) {
                            that.getAutoSalesrep1.FilterAutoComplete(request).then((function (response) {
                                var data = that.getAutoSalesrep1.GetAutEmployee(response.data.Result);
                                res($.map(data, function (item, index) {
                                    return {
                                        label: item.Name,
                                        value: item.Name,
                                        id: item.userid
                                    };
                                }));
                            }));
                        },
                        minLength: 2,
                        focus: function (event, ui) {
                            event.preventDefault();
                        },
                        select: function (e, ui) {
                            that.AllocationMatrixHeaderModel.SearchInput = ui.item.id;
                            //$(this).val("");
                            //return false;
                        },
                        change: function () {
                        }
                    });
                };
                UserProductConfigController.prototype.Division = function (data) {
                    var _this = this;
                    this.DivisionDropDownP = this.DivisionPService.Find(this.InsertAllocation.CategoryID).then((function (response) {
                        _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                };
                UserProductConfigController.prototype.Division1 = function (data) {
                    var _this = this;
                    this.DivisionDropDownP1 = this.DivisionPService.Find(this.AllocationMatrixHeaderModel.CategoryID).then((function (response) {
                        _this.DivisionDropDownP1 = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                    }));
                };
                UserProductConfigController.prototype.Product = function (data) {
                    var _this = this;
                    this.ProductDropDown = this.ProductService.Find(this.InsertAllocation.divisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                UserProductConfigController.prototype.Product1 = function (data) {
                    var _this = this;
                    this.ProductDropDown1 = this.ProductService.Find(this.AllocationMatrixHeaderModel.DivisionID).then((function (response) {
                        _this.ProductDropDown1 = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                UserProductConfigController.prototype.District = function (data) {
                    var _this = this;
                    this.DistrictDropDown = this.DistrictService.Find(this.InsertAllocation.StateID).then((function (response) {
                        _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                UserProductConfigController.prototype.District1 = function (data) {
                    var _this = this;
                    this.DistrictDropDown1 = this.DistrictService.Find(this.AllocationMatrixHeaderModel.StateID).then((function (response) {
                        _this.DistrictDropDown1 = _this.DistrictService.GetDistrictName(response.data.Result);
                    }));
                };
                UserProductConfigController.prototype.Search = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#search-btn-loader').show();
                };
                UserProductConfigController.prototype.Refresh = function () {
                    $('#search-btn-loader').show();
                    this.FillGrid(this.NoOfRds);
                };
                UserProductConfigController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.AllocationMatrixGrid.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                UserProductConfigController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.AllocationMatrixGrid.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                UserProductConfigController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.AllocationMatrixGrid = this.AService.FindGrid(this.AllocationMatrixHeaderModel).then((function (response) {
                        console.log(_this.AllocationMatrixHeaderModel);
                        $('#search-btn-loader').hide();
                        _this.AllocationMatrixGrid = _this.AService.GetAllocationGrid(response.data.Result);
                        if (_this.AllocationMatrixGrid.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.AllocationMatrixGrid.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.AllocationMatrixGrid);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.AllocationMatrixGrid.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        _this.maxPages = (that.incre / that.numRecords);
                        _this.ShowBack = false;
                        _this.ShowNext = that.maxPages > 1 ? true : false;
                        _this.shownItems = _this.AllocationMatrixGrid.slice(0, that.numRecords);
                    }));
                };
                UserProductConfigController.prototype.Add = function () {
                    this.InsertAllocation.UserID = "";
                    this.InsertAllocation.UserName = "";
                    this.InsertAllocation.ID = "";
                    this.InsertAllocation.LeadType = "";
                    this.InsertAllocation.CategoryID = "";
                    this.InsertAllocation.divisionID = "";
                    this.InsertAllocation.ProductID = "";
                    this.InsertAllocation.CountryID = "";
                    this.InsertAllocation.StateID = "";
                    this.InsertAllocation.DistrictID = "";
                    this.InsertAllocation.Status = "";
                };
                UserProductConfigController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertAllocation.UserName == undefined || this.InsertAllocation.UserName == null || this.InsertAllocation.UserName == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter UserName", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertAllocation.LeadType == undefined || this.InsertAllocation.LeadType == null || this.InsertAllocation.LeadType == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertAllocation.divisionID == undefined || this.InsertAllocation.divisionID == null || this.InsertAllocation.divisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertAllocation.ProductID == undefined || this.InsertAllocation.ProductID == null || this.InsertAllocation.ProductID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertAllocation.StateID == undefined || this.InsertAllocation.StateID == null || this.InsertAllocation.StateID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter State", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertAllocation.DistrictID == undefined || this.InsertAllocation.DistrictID == null || this.InsertAllocation.DistrictID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter District", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertAllocation.Status == undefined || this.InsertAllocation.Status == null || this.InsertAllocation.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertAllocation.CountryID = '95';
                        this.InsertAllocationService.PostAllocationMatrix(this.InsertAllocation).then(function (response) {
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Allocation Data saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertAllocation = null;
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
                UserProductConfigController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                UserProductConfigController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                UserProductConfigController.prototype.Clear = function () {
                    document.getElementById("txtbysearch").value = "";
                    this.AllocationMatrixHeaderModel.CategoryID = "";
                    this.AllocationMatrixHeaderModel.DivisionID = "";
                    this.AllocationMatrixHeaderModel.ProductID = "";
                    this.AllocationMatrixHeaderModel.StateID = "";
                    this.AllocationMatrixHeaderModel.SearchDistrict = "";
                    this.AllocationMatrixHeaderModel.DistrictID = "";
                    this.AllocationMatrixHeaderModel.LeadTypeID = "";
                    this.AllocationMatrixHeaderModel.SearchInput = "";
                    $("#txtModel").val("");
                    $("#txtPhone").val("");
                    $("#ddlstatus").val("");
                    $("#txtLeadType").val("");
                    //$("#SearchInput").val("");
                };
                UserProductConfigController.prototype.EditAllocation = function (data) {
                    var _this = this;
                    this.EAservice.Find(data).then((function (response) {
                        _this.InsertAllocation = _this.EAservice.GetAllocationEdit(response.data.Result);
                        //$('#txtSalesRep1').val(this.InsertAllocation.UserID);
                        //$('#txtLeadType').val(this.InsertAllocation.ID);
                        //$('#txtCategory').val(this.InsertAllocation.CategoryID);
                        //$('#txtProduct').val(this.InsertAllocation.ProductID);
                        //this.Product(this.InsertAllocation.divisionID);
                        //$('#txtCountry').val(this.InsertAllocation.CountryID);
                        //$('#txtState').val(this.InsertAllocation.StateID);
                        //this.DivisionDropDownP = this.DivisionPService.Find(this.InsertAllocation.CategoryID).then((response => {
                        //    this.DivisionDropDownP = this.DivisionPService.GetDivisionDDP(response.data.Result);
                        //    this.InsertAllocation.divisionID = this.InsertAllocation.divisionID.toString();
                        //}));
                        //this.InsertAllocation.StateID = this.InsertAllocation.StateID.toString();
                        //this.DistrictDropDown = this.DistrictService.Find(this.InsertAllocation.StateID).then((response => {
                        //    this.DistrictDropDown = this.DistrictService.GetDistrictName(response.data.Result);
                        //}));
                        var div = _this.InsertAllocation.divisionID;
                        _this.DivisionDropDownP = _this.DivisionPService.Find(_this.InsertAllocation.CategoryID).then((function (response) {
                            _this.DivisionDropDownP = _this.DivisionPService.GetDivisionDDP(response.data.Result);
                            _this.InsertAllocation.divisionID = div;
                        }));
                        var prod = _this.InsertAllocation.ProductID;
                        _this.ProductDropDown = _this.ProductService.Find(_this.InsertAllocation.divisionID).then((function (response) {
                            _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                            _this.InsertAllocation.ProductID = prod;
                        }));
                        var dist = _this.InsertAllocation.DistrictID;
                        _this.DistrictDropDown = _this.DistrictService.Find(_this.InsertAllocation.StateID).then((function (response) {
                            _this.DistrictDropDown = _this.DistrictService.GetDistrictName(response.data.Result);
                            _this.InsertAllocation.DistrictID = dist;
                        }));
                        if (_this.InsertAllocation.Status == "True") {
                            _this.InsertAllocation.Status = "1";
                        }
                        else {
                            _this.InsertAllocation.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                UserProductConfigController.prototype.Close = function () {
                    location.href = "#!/UserProductConfig";
                };
                UserProductConfigController.prototype.downloadCSV = function (csv, filename) {
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
                UserProductConfigController.prototype.exportTableToCSV = function (filename) {
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
                UserProductConfigController.$inject = ["AllocationMatrixService", "AllocationMatrixEditService", "CategoryddService", "DivisionDDPService", "AllocationMatrixInsertService",
                    "ProductddService", "CountryService", "StateDDService", "DistrictddService", "EmployeeAtofillService", "LeadTypeddService"];
                return UserProductConfigController;
            }());
            var UserProductConfigComponentController = /** @class */ (function () {
                function UserProductConfigComponentController() {
                    this.controller = UserProductConfigController;
                    this.templateUrl = "/Scripts/App/UserProductConfig/Template/_UserProductConfig.html";
                }
                UserProductConfigComponentController.Name = "userproductconfigcomponent";
                return UserProductConfigComponentController;
            }());
            app.AddComponent(UserProductConfigComponentController.Name, new UserProductConfigComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UserProductConfigComponent.js.map