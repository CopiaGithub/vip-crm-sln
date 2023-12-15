var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var UploadCampaignDataController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function UploadCampaignDataController(_InsertService, _ListService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.file = null;
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = 10;
                    this.alert = null;
                    this.InsertUpCamp = null;
                    this.UpCampList = null;
                    this.UpCampSearch = null;
                    this.Cookie = null;
                    this.InsertService = _InsertService;
                    this.ListService = _ListService;
                    this.UpCampSearch = Array();
                    this.Cookie = _cookieStore;
                }
                UploadCampaignDataController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
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
                };
                //Page Load Define Values//
                UploadCampaignDataController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Submit(): void {
                //    debugger;
                //    if (this.InsertVLE.VLECode == undefined || this.InsertVLE.VLECode == null || this.InsertVLE.VLECode == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter VLE Code";
                //    }
                //    else if (this.InsertVLE.VLEName == undefined || this.InsertVLE.VLEName == null || this.InsertVLE.VLEName == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter VLE Name";
                //    }
                //    else if (this.InsertVLE.City == undefined || this.InsertVLE.City == null || this.InsertVLE.City == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter City";
                //    }
                //    else if (this.InsertVLE.Address == undefined || this.InsertVLE.Address == null || this.InsertVLE.Address == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter Address";
                //    }
                //    //else if (this.InsertVLE.Password == undefined || this.InsertVLE.Password == null || this.InsertVLE.Password == "") {
                //    //    $("#errorclose").show();
                //    //    $("#close").hide();
                //    //    this.alert = "Please Enter Password";
                //    //}
                //    else if (this.InsertVLE.CountryID == undefined || this.InsertVLE.CountryID == null || this.InsertVLE.CountryID == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter Country";
                //    }
                //    else if (this.InsertVLE.StateID == undefined || this.InsertVLE.StateID == null || this.InsertVLE.StateID == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter State";
                //    }
                //    else if (this.InsertVLE.DistrictID == undefined || this.InsertVLE.DistrictID == null || this.InsertVLE.DistrictID == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter District";
                //    }
                //    else if (this.InsertVLE.RegionId == undefined || this.InsertVLE.RegionId == null || this.InsertVLE.RegionId == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter Region";
                //    }
                //    else if (this.InsertVLE.BlockID == undefined || this.InsertVLE.BlockID == null || this.InsertVLE.BlockID == "") {
                //        $("#errorclose").show();
                //        $("#close").hide();
                //        this.alert = "Please Enter Block";
                //    }
                //    else if (this.IsValidPinCode(this.InsertVLE.Postalcode).Result == "False") {
                //        this.ShowHidePopUp(this.IsValidPinCode(this.InsertVLE.Postalcode).Message);
                //    }
                //    else if (this.IsValidMobile(this.InsertVLE.MobileNo).Result == "False") {
                //        this.ShowHidePopUp(this.IsValidMobile(this.InsertVLE.MobileNo).Message);
                //    }
                //    else if (this.IsValidPhone(this.InsertVLE.PhoneNo).Result == "False") {
                //        this.ShowHidePopUp(this.IsValidPhone(this.InsertVLE.PhoneNo).Message);
                //    }
                //    else if (this.IsValidEmail(this.InsertVLE.Email).Result == "False") {
                //        this.ShowHidePopUp(this.IsValidEmail(this.InsertVLE.Email).Message);
                //    }
                //    else {
                //        debugger;
                //        this.InsertService.PostVLE(this.InsertVLE).then((response => {
                //            console.log(this.InsertVLE);
                //            if (response.data.Result != null) {
                //                this.alert = " VLE Registration saved Successfully ";
                //                $("#errorclose").hide();
                //                $("#close").show();
                //                $('#myModalAddNew').click();
                //                this.InsertVLE = null;
                //            }
                //            else {
                //                //this.IsDisplayModalPopupError = true;
                //                this.alert = 'Oops Some Error Occured';
                //                $("#errorclose").hide();
                //                $("#close").show();
                //            }
                //            this.numRecords = this.NoOfRds;
                //            this.FillGrid(this.numRecords);
                //        }));
                //    }
                //}
                UploadCampaignDataController.prototype.SearchUpCampList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                UploadCampaignDataController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.UpCampList = this.ListService.Find(this.UpCampSearch).then((function (response) {
                        _this.UpCampList = _this.ListService.GetUpCampList(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.UpCampList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.UpCampList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.UpCampList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.UpCampList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                UploadCampaignDataController.prototype.Clear = function () {
                    this.UpCampSearch.SearchText = "";
                    $("#txtbysearchCampN").val("");
                };
                UploadCampaignDataController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.UpCampList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                UploadCampaignDataController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.UpCampList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                UploadCampaignDataController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                UploadCampaignDataController.prototype.Close = function () {
                    location.href = "#!/UploadCampaignData";
                };
                UploadCampaignDataController.prototype.ErrorClose = function () {
                    location.href = "#!/UploadCampaignData";
                };
                UploadCampaignDataController.$inject = ["InsertUploadCampaignService", "UploadCampService", "$cookieStore"];
                return UploadCampaignDataController;
            }());
            var UploadCampaignDataComponentController = /** @class */ (function () {
                function UploadCampaignDataComponentController() {
                    this.controller = UploadCampaignDataController;
                    this.templateUrl = "/Scripts/App/UploadCampaignData/Template/_UploadCampaignData.html";
                }
                UploadCampaignDataComponentController.Name = "uploadcampaigndatacomponent";
                return UploadCampaignDataComponentController;
            }());
            app.AddComponent(UploadCampaignDataComponentController.Name, new UploadCampaignDataComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UploadCampaignDataComponent.js.map