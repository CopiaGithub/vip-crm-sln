var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ModelMaster = GCPL.Model.InsertModelMaster;
            var ModelMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ModelMasterController(_ListService, _LeadTypeService, _DivisionService, _ProductService, _InsertService, _EditService, _ProductddService, _cookieStore) {
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
                    this.ModelList = null;
                    this.ModelSearch = null;
                    this.LeadTypeDropDown = null;
                    this.DivisionDropDown = null;
                    this.ProductDropDown = null;
                    this.InsertModel = null;
                    this.EditModel = null;
                    this.ProductddDropDown = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.ModelSearch = Array();
                    this.LeadTypeService = _LeadTypeService;
                    this.DivisionService = _DivisionService;
                    this.ProductService = _ProductService;
                    this.InsertService = _InsertService;
                    this.InsertModel = new ModelMaster();
                    this.EditService = _EditService;
                    this.ProductddService = _ProductddService;
                    this.Cookie = _cookieStore;
                }
                ModelMasterController.prototype.$onInit = function () {
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
                    this.Init();
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                ModelMasterController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                    }));
                    this.LeadTypeDropDown = this.LeadTypeService.Find().then((function (response) {
                        _this.LeadTypeDropDown = _this.LeadTypeService.GetLeadTypeName(response.data.Result);
                    }));
                    this.ProductddDropDown = this.ProductddService.Find().then((function (response) {
                        _this.ProductddDropDown = _this.ProductddService.GetProduct(response.data.Result);
                    }));
                };
                ModelMasterController.prototype.Product = function () {
                    var _this = this;
                    this.ProductDropDown = this.ProductService.Find(this.InsertModel.DivisionID).then((function (response) {
                        _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                    }));
                };
                ModelMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                ModelMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                ModelMasterController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertModel.DivisionID == undefined || this.InsertModel.DivisionID == null || this.InsertModel.DivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertModel.ProductID == undefined || this.InsertModel.ProductID == null || this.InsertModel.ProductID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertModel.ModelNo == undefined || this.InsertModel.ModelNo == null || this.InsertModel.ModelNo == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Model No", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertModel.leadTypeID == undefined || this.InsertModel.leadTypeID == null || this.InsertModel.leadTypeID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter LeadType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertModel.Description == undefined || this.InsertModel.Description == null || this.InsertModel.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter System Model ID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertModel.Value == undefined || this.InsertModel.Value == null || this.InsertModel.Value == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Value", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertModel.Eligible == undefined || this.InsertModel.Eligible == null || this.InsertModel.Eligible == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Eligible For Quotation", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertModel.Status == undefined || this.InsertModel.Status == null || this.InsertModel.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostModel(this.InsertModel).then((function (response) {
                            console.log(_this.InsertModel);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Model saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertModel = null;
                                //this.InsertModel.DivsionID = "";
                                //this.InsertModel.ProductID = "";
                                //this.InsertModel.ModelNo = "";
                                //this.InsertModel.leadTypeID = "";
                                //this.InsertModel.Description = "";
                                //this.InsertModel.Value = "";
                                //this.InsertModel.Eligible = "";
                                //this.InsertModel.Status = "";
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                };
                ModelMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertModel = _this.EditService.GetEdit(response.data.Result);
                        if (_this.InsertModel.Status == "True") {
                            _this.InsertModel.Status = "1";
                        }
                        else {
                            _this.InsertModel.Status = "0";
                        }
                        if (_this.InsertModel.Eligible == "True") {
                            _this.InsertModel.Eligible = "1";
                        }
                        else {
                            _this.InsertModel.Eligible = "0";
                        }
                        var temp = _this.InsertModel.ProductID;
                        _this.ProductDropDown = _this.ProductService.Find(_this.InsertModel.DivisionID).then((function (response) {
                            _this.ProductDropDown = _this.ProductService.GetProductName(response.data.Result);
                            _this.InsertModel.ProductID = temp;
                        }));
                        $("myModalAddNew").show();
                    }));
                };
                ModelMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.ModelList = this.ListService.Find(this.ModelSearch).then((function (response) {
                        _this.ModelList = _this.ListService.GetModelList(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.ModelList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.ModelList.forEach(function (value, key) {
                                that.incre = parseInt(key) + that.numRecords;
                            });
                            console.log(_this.ModelList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.ModelList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.ModelList.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                    }));
                };
                ModelMasterController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                ModelMasterController.prototype.SearchModelList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                ModelMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ModelList.slice(begin, end);
                    if (this.page + 2 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                ModelMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ModelList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                ModelMasterController.prototype.Clear = function () {
                    this.ModelSearch.SearchText = "";
                    this.ModelSearch.Status = "";
                    this.ModelSearch.Product = "";
                    this.ModelSearch.LeadType = "";
                    $("#txtModel").val("");
                    $("#txtStatus").val("");
                    $("#txtProd").val("");
                    $("#txtLead").val("");
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                ModelMasterController.prototype.exportTableToCSV = function (filename) {
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
                ModelMasterController.prototype.downloadCSV = function (csv, filename) {
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
                ModelMasterController.prototype.Close = function () {
                    location.href = "#!/ModelMaster";
                };
                ModelMasterController.prototype.ErrorClose = function () {
                    location.href = "#!/ModelMaster";
                };
                ModelMasterController.$inject = ["ModelListService", "LeadTypeddService", "DivisionService", "ProductddService", "InsertModelService", "ModelEditService", "ProductDDLService", "$cookieStore"];
                return ModelMasterController;
            }());
            var ModelMasterComponentController = /** @class */ (function () {
                function ModelMasterComponentController() {
                    this.controller = ModelMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/ModelMaster/Template/_ModelMaster.html";
                }
                ModelMasterComponentController.Name = "modelmastercomponent";
                return ModelMasterComponentController;
            }());
            app.AddComponent(ModelMasterComponentController.Name, new ModelMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ModelMasterComponent.js.map