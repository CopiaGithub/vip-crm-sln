var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var IndustrialSegmentMaster = GCPL.Model.InsertIndustrialModel;
            var IndustrialSegmentMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function IndustrialSegmentMasterController(_Listservice, _InsertService, _EditService, _cookieStore) {
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
                    this.IndustrialSegmentList = null;
                    this.IndustrialSearch = null;
                    this.InsertIndustrial = null;
                    this.EditIndustrialSegment = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.IndustrialSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertIndustrial = new IndustrialSegmentMaster();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                IndustrialSegmentMasterController.prototype.$onInit = function () {
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
                IndustrialSegmentMasterController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                IndustrialSegmentMasterController.prototype.SearchIndustrialList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                IndustrialSegmentMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.IndustrialSegmentList = this.Listservice.Find(this.IndustrialSearch).then((function (response) {
                        _this.IndustrialSegmentList = _this.Listservice.GetIndustrialList(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.IndustrialSegmentList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.IndustrialSegmentList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.IndustrialSegmentList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.IndustrialSegmentList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                IndustrialSegmentMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                IndustrialSegmentMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                IndustrialSegmentMasterController.prototype.Submit = function () {
                    var _this = this;
                    if (this.InsertIndustrial.IndustrialSegment == undefined || this.InsertIndustrial.IndustrialSegment == null || this.InsertIndustrial.IndustrialSegment == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter IndustrialSegment", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertIndustrial.SAPID == undefined || this.InsertIndustrial.SAPID == null || this.InsertIndustrial.SAPID == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter SAPID", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostIndustrial(this.InsertIndustrial).then((function (response) {
                            console.log(_this.InsertIndustrial);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Industrial Segment saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#myModalAddNew').click();
                                _this.InsertIndustrial = null;
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
                IndustrialSegmentMasterController.prototype.Add = function () {
                    //this.InsertCategory.CategoryID = "";
                    this.InsertIndustrial.IndustrialSegment = "";
                    this.InsertIndustrial.SAPID = "";
                    this.InsertIndustrial.Status = "";
                };
                IndustrialSegmentMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertIndustrial = _this.EditService.GetEdit(response.data.Result);
                        //$('#txtStatus').val(this.InsertIndustrial.Status);
                        if (_this.InsertIndustrial.Status == "True") {
                            _this.InsertIndustrial.Status = "1";
                        }
                        else {
                            _this.InsertIndustrial.Status = "0";
                        }
                        $("myModalAddNew").show();
                    }));
                };
                IndustrialSegmentMasterController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                IndustrialSegmentMasterController.prototype.Clear = function () {
                    this.IndustrialSearch.SearchText = "";
                    this.IndustrialSearch.Status = "";
                    //this.CategorySearch = "";
                    $("#txtIndustrial").val("");
                    $("#txtStatus").val("");
                };
                IndustrialSegmentMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.IndustrialSegmentList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                IndustrialSegmentMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.IndustrialSegmentList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                IndustrialSegmentMasterController.prototype.Close = function () {
                    location.href = "#!/IndustrialSegmentMaster";
                };
                IndustrialSegmentMasterController.prototype.ErrorClose = function () {
                    location.href = "#!/IndustrialSegmentMaster";
                };
                IndustrialSegmentMasterController.$inject = ["IndustrialSegmentListService", "InsertIndustrialService", "IndustrialEditService", "$cookieStore"];
                return IndustrialSegmentMasterController;
            }());
            var IndustrialSegmentMasterComponentController = /** @class */ (function () {
                function IndustrialSegmentMasterComponentController() {
                    this.controller = IndustrialSegmentMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/IndustrialSegmentMaster/Template/_IndustrialSegmentMaster.html";
                }
                IndustrialSegmentMasterComponentController.Name = "industrialsegmentmastercomponent";
                return IndustrialSegmentMasterComponentController;
            }());
            app.AddComponent(IndustrialSegmentMasterComponentController.Name, new IndustrialSegmentMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
3;
//# sourceMappingURL=IndustrialSegmentMasterComponent.js.map