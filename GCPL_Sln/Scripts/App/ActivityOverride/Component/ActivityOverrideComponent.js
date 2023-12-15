var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Search = GCPL.Model.ActivityOverrideSearchModel;
            var InsertActivity = GCPL.Model.InsertActivityOverrideModel;
            var ActivityOverrideController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function ActivityOverrideController(_ListService, _InsertService, _cookieStore) {
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
                    this.ActivityOverrideList = null;
                    this.ActivitySearch = null;
                    this.InsertActivityOverride = null;
                    this.IsSelected = null;
                    this.Cookie = null;
                    this.ListService = _ListService;
                    this.ActivitySearch = new Search();
                    this.InsertService = _InsertService;
                    this.InsertActivityOverride = new InsertActivity();
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                ActivityOverrideController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                ActivityOverrideController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.IsSelected = false;
                };
                ActivityOverrideController.prototype.SearchActivityLeadList = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#search-btn-loader').show();
                };
                ActivityOverrideController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.ActivityOverrideList = this.ListService.Find(this.ActivitySearch).then((function (response) {
                        _this.ActivityOverrideList = _this.ListService.GetActivityOverrideList(response.data.Result);
                        // this.LeadID = this.ActivityOverrideList.LeadID;
                        $('#search-btn-loader').hide();
                        if (_this.ActivityOverrideList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.ActivityOverrideList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.ActivityOverrideList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.ActivityOverrideList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                ActivityOverrideController.prototype.FindSelectedcheckbox = function () {
                    debugger;
                    var listOfSelectedLeadID = [];
                    $.each(this.ActivityOverrideList, function (key, item) {
                        if (item.IsSelected == true) {
                            item.LeadID = this.LeadID;
                            listOfSelectedLeadID.push(item);
                        }
                    });
                    return listOfSelectedLeadID;
                };
                ActivityOverrideController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                ActivityOverrideController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                ActivityOverrideController.prototype.Submit = function () {
                    var _this = this;
                    if (this.UserID != null || this.UserID != "") {
                        this.InsertActivityOverride.UserID = this.UserID;
                    }
                    if (!$("input[name=Activity]:checked").val()) {
                        this.HideShow();
                        this.popupMessage("Please select any Lead", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertActivityOverride.UserID != "") {
                        debugger;
                        debugger;
                        this.InsertActivityOverride.Details = this.FindSelectedcheckbox();
                        this.InsertActivityOverride.IsBypassed = "1";
                        console.log("this.InsertActivityOverride = " + this.InsertActivityOverride);
                        this.InsertService.PostActivity(this.InsertActivityOverride).then((function (response) {
                            //this.InsertService.PostActivity(this.ActivityOverrideList).then((response => {
                            console.log(_this.InsertActivityOverride);
                            debugger;
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Lead Ids are Bypassed.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                _this.InsertActivityOverride = null;
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }
                            else {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            }
                        }));
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Please select a user.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                };
                ActivityOverrideController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ActivityOverrideList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                ActivityOverrideController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.ActivityOverrideList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                ActivityOverrideController.prototype.Refresh = function () {
                    this.FillGrid(this.NoOfRds);
                };
                ActivityOverrideController.prototype.Clear = function () {
                    this.ActivitySearch.SearchText = "";
                    this.ActivitySearch.LeadID = "";
                    $("#txtCustomer").val("");
                    $("#txtLeadID").val("");
                };
                ActivityOverrideController.prototype.Close = function () {
                    location.href = "#!/ActivityOverride";
                };
                ActivityOverrideController.prototype.ErrorClose = function () {
                    location.href = "#!/ActivityOverride";
                };
                ActivityOverrideController.$inject = ["ActivityOverrideListService", "InsertActivityOverrideService", "$cookieStore"];
                return ActivityOverrideController;
            }());
            var ActivityOverrideComponentController = /** @class */ (function () {
                function ActivityOverrideComponentController() {
                    this.controller = ActivityOverrideController;
                    this.templateUrl = "/Scripts/App/ActivityOverride/Template/ActivityOverride.html";
                }
                ActivityOverrideComponentController.Name = "activityoverridecomponent";
                return ActivityOverrideComponentController;
            }());
            app.AddComponent(ActivityOverrideComponentController.Name, new ActivityOverrideComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=ActivityOverrideComponent.js.map