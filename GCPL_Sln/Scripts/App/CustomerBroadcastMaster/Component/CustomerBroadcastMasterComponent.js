var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var CustomerBroadMaster = GCPL.Model.InsertCustomerCastModel;
            var CustomerBroadcastMasterController = /** @class */ (function () {
                function CustomerBroadcastMasterController(_Listservice, _InsertService, _EditService, _cookieStore) {
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
                    this.CustomerBroadList = null;
                    this.CustomerBroadSearch = null;
                    this.InsertCustomerBroad = null;
                    this.EditCustBroad = null;
                    this.YOUTUBE_REGEXP = null;
                    this.base64 = null;
                    this.file = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.CustomerBroadSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertCustomerBroad = new CustomerBroadMaster();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                CustomerBroadcastMasterController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                CustomerBroadcastMasterController.prototype.Init = function () {
                    this.YOUTUBE_REGEXP = /http:\/\/(?:www\.)?youtube.*watch\?v=([a-zA-Z0-9\-_]+)/;
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#lbltipAddedComment').hide();
                };
                CustomerBroadcastMasterController.prototype.SearchCustomerCastList = function () {
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                    $('#search-btn-loader').show();
                };
                CustomerBroadcastMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    debugger;
                    this.CustomerBroadList = this.Listservice.Find(this.CustomerBroadSearch).then((function (response) {
                        _this.CustomerBroadList = _this.Listservice.GetCustomerBroadList(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.CustomerBroadList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.CustomerBroadList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.CustomerBroadList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.CustomerBroadList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                CustomerBroadcastMasterController.prototype.Add = function () {
                    debugger;
                    this.InsertCustomerBroad.CustomerBroadcastID = "";
                    this.InsertCustomerBroad.Title = "";
                    this.InsertCustomerBroad.Description = "";
                    this.InsertCustomerBroad.YouTubeLink = "";
                    this.InsertCustomerBroad.Photo = "";
                    this.InsertCustomerBroad.Video = "";
                    this.InsertCustomerBroad.Status = "";
                    document.getElementById("input-image-hidden").value = "";
                    $('#image-preview').attr('src', '');
                    document.getElementById("base64textarea").value = "";
                    $("#lbltipAddedComment").hide();
                    $("#chkimg").prop("checked", false);
                };
                CustomerBroadcastMasterController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    this.InsertCustomerBroad.Photo = document.getElementById("base64textarea").value;
                    if (this.InsertCustomerBroad.Title == undefined || this.InsertCustomerBroad.Title == null || this.InsertCustomerBroad.Title == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Title", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomerBroad.Description == undefined || this.InsertCustomerBroad.Description == null || this.InsertCustomerBroad.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertCustomerBroad.YouTubeLink == undefined || this.InsertCustomerBroad.YouTubeLink == null || this.InsertCustomerBroad.YouTubeLink == "" || !(this.YOUTUBE_REGEXP.test(this.InsertCustomerBroad.YouTubeLink))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid YouTube Link", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        this.InsertService.PostCustomerBroad(this.InsertCustomerBroad).then((function (response) {
                            console.log(_this.InsertCustomerBroad);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Customer BroadCast saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#emp-broadcast').click();
                                _this.InsertCustomerBroad = null;
                                document.getElementById("input-image-hidden").value = "";
                                $('#image-preview').attr('src', '');
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
                CustomerBroadcastMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertCustomerBroad = _this.EditService.GetEdit(response.data.Result);
                        debugger;
                        $("image-preview").show();
                        $('#txtTitle').val(_this.InsertCustomerBroad.Title);
                        $('#txtlink').val(_this.InsertCustomerBroad.YouTubeLink);
                        $('#txtdesc').val(_this.InsertCustomerBroad.Description);
                        $('#txtVideo').val(_this.InsertCustomerBroad.Video);
                        // $('#txtPhoto').val(this.InsertCustomerBroad.Photo);                
                        $("#image-preview").show();
                        $("#image-preview").attr("src", _this.InsertCustomerBroad.Photo);
                        if (_this.InsertCustomerBroad.Status == "True") {
                            _this.InsertCustomerBroad.Status = "1";
                        }
                        else {
                            _this.InsertCustomerBroad.Status = "0";
                        }
                        $("#emp-broadcast").show();
                    }));
                };
                CustomerBroadcastMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                CustomerBroadcastMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                CustomerBroadcastMasterController.prototype.loadImageFileAsURL = function () {
                    debugger;
                    var filedata = document.getElementById("input-image-hidden").files[0];
                    console.log(filedata);
                    var reader = new FileReader();
                    var dataURL;
                    reader.onload = function (readerEvt) {
                        var binaryString = readerEvt.target.result;
                        document.getElementById("base64textarea").value = btoa(binaryString);
                    };
                    reader.readAsBinaryString(filedata);
                    $("#image-preview").show();
                    $("#image-preview").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden").files[0]));
                    $("#lbltipAddedComment").show();
                    $("#lbltipAddedComment").text("Image select successfully!");
                };
                CustomerBroadcastMasterController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                CustomerBroadcastMasterController.prototype.Clear = function () {
                    this.CustomerBroadSearch.SearchText = "";
                    $("#txtnews").val("");
                };
                CustomerBroadcastMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CustomerBroadList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                CustomerBroadcastMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.CustomerBroadList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                CustomerBroadcastMasterController.prototype.Close = function () {
                    location.href = "#!/CustomerBroadcastMaster";
                };
                CustomerBroadcastMasterController.$inject = ["CustomerBroadCastListService", "InsertCustomerBroadService", "CustomerCastEditService", "$cookieStore"];
                return CustomerBroadcastMasterController;
            }());
            var CustomerBroadcastMasterComponentController = /** @class */ (function () {
                function CustomerBroadcastMasterComponentController() {
                    this.controller = CustomerBroadcastMasterController;
                    this.templateUrl = "/Scripts/App/CustomerBroadcastMaster/Template/CustomerBroadcastMaster.html";
                }
                CustomerBroadcastMasterComponentController.Name = "customerbroadcastmastercomponent";
                return CustomerBroadcastMasterComponentController;
            }());
            app.AddComponent(CustomerBroadcastMasterComponentController.Name, new CustomerBroadcastMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CustomerBroadcastMasterComponent.js.map