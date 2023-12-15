var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var ProductMaster = GCPL.Model.InsertProductModel;
            var ProductMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ProductMasterController(_DivisionService, _Listservice, _InsertService, _EditService, _cookieStore) {
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
                    this.DivisionDropDown = null;
                    this.ProductList = null;
                    this.ProductSearch = null;
                    this.InsertProduct = null;
                    this.EditProduct = null;
                    this.Cookie = null;
                    this.DivisionService = _DivisionService;
                    this.Listservice = _Listservice;
                    this.ProductSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertProduct = new ProductMaster();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                ProductMasterController.prototype.$onInit = function () {
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
                ProductMasterController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    var that = this;
                    this.InsertProduct.Status = "";
                    this.DivisionDropDown = this.DivisionService.Find().then((function (response) {
                        _this.DivisionDropDown = _this.DivisionService.GetDivisionName(response.data.Result);
                        //this.DivisionID = this.DivisionDropDown[0].DivisionID.toString();
                    }));
                };
                ProductMasterController.prototype.SearchProductList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                ProductMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                ProductMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                ProductMasterController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertProduct.DivisionID == undefined || this.InsertProduct.DivisionID == null || this.InsertProduct.DivisionID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Division", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProduct.Product == undefined || this.InsertProduct.Product == null || this.InsertProduct.Product == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Product", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProduct.Description == undefined || this.InsertProduct.Description == null || this.InsertProduct.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertProduct.Status == undefined || this.InsertProduct.Status == null || this.InsertProduct.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostProduct(this.InsertProduct).then((function (response) {
                            console.log(_this.InsertProduct);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Product saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertProduct = null;
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
                ProductMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertProduct = _this.EditService.GetEdit(response.data.Result);
                        //$('#txtCategory').val(this.InsertCategory.Category);
                        //$('#txtDesc').val(this.InsertCategory.Description);
                        //$('#txtStatus').val(this.InsertProduct.Status);
                        if (_this.InsertProduct.Status == "True") {
                            _this.InsertProduct.Status = "1";
                        }
                        else {
                            _this.InsertProduct.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                ProductMasterController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                ProductMasterController.prototype.exportTableToCSV = function (filename) {
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
                ProductMasterController.prototype.downloadCSV = function (csv, filename) {
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
                ProductMasterController.prototype.Add = function () {
                    //this.InsertCategory.CategoryID = "";
                    this.InsertProduct.DivisionID = "";
                    this.InsertProduct.Product = "";
                    this.InsertProduct.Description = "";
                    this.InsertProduct.Status = "";
                };
                ProductMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    console.log("Drpdown value text : " + that.numRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.ProductList = this.Listservice.Find(this.ProductSearch).then((function (response) {
                        _this.ProductList = _this.Listservice.GetProductList(response.data.Result);
                        $('#search-btn-loader').hide();
                        console.log(_this.ProductList);
                        if (_this.ProductList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.ProductList.forEach(function (value, key) {
                                console.log("Key : " + key);
                                that.incre = parseInt(key) + that.numRecords;
                            });
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.maxPages.toFixed();
                            console.log(" Max Page : " + _this.maxPages);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.ProductList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                        if (_this.ProductList.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                    }));
                };
                ProductMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    console.log("this page : " + this.page);
                    console.log("Max Page : " + this.maxPages);
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ProductList.slice(begin, end);
                    // this.ProductList.slice(begin, end);
                    if (this.page + 2 >= parseInt(this.maxPages.toFixed())) {
                        console.log("Inside this page : " + this.page);
                        this.ShowNext = false;
                    }
                };
                ;
                ProductMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ProductList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                ProductMasterController.prototype.Clear = function () {
                    this.ProductSearch.SearchText = "";
                    this.ProductSearch.Status = "";
                    this.ProductSearch.Division = "";
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    //this.CategorySearch = "";
                    $("#txtProduct").val("");
                    $("#txtStatus").val("");
                    $("#txtDiv").val("");
                };
                ProductMasterController.prototype.Close = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    location.href = "#!/ProductMaster";
                };
                ProductMasterController.prototype.ErrorClose = function () {
                    location.href = "#!/ProductMaster";
                };
                ProductMasterController.$inject = ["DivisionService", "ProductListService", "InsertProductService", "ProductEditService", "$cookieStore"];
                return ProductMasterController;
            }());
            var ProductMasterComponentController = /** @class */ (function () {
                function ProductMasterComponentController() {
                    this.controller = ProductMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/ProductMaster/Template/_ProductMaster.html";
                }
                ProductMasterComponentController.Name = "productmastercomponent";
                return ProductMasterComponentController;
            }());
            app.AddComponent(ProductMasterComponentController.Name, new ProductMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ProductMasterComponent.js.map