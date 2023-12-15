var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var EmployeeBroadMaster = GCPL.Model.InsertEmployeeCastModel;
            var EmployeeBroadcastMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function EmployeeBroadcastMasterController(_Listservice, _InsertService, _EditService, _cookieStore) {
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
                    this.EmployeeBroadList = null;
                    this.EmployeeBroadSearch = null;
                    this.InsertEmployeeBroad = null;
                    this.EditEmpBroad = null;
                    this.YOUTUBE_REGEXP = null;
                    this.base64 = null;
                    this.file = null;
                    this.Cookie = null;
                    this.Listservice = _Listservice;
                    this.EmployeeBroadSearch = Array();
                    this.InsertService = _InsertService;
                    this.InsertEmployeeBroad = new EmployeeBroadMaster();
                    this.EditService = _EditService;
                    this.Cookie = _cookieStore;
                }
                EmployeeBroadcastMasterController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                EmployeeBroadcastMasterController.prototype.Init = function () {
                    this.YOUTUBE_REGEXP = /http:\/\/(?:www\.)?youtube.*watch\?v=([a-zA-Z0-9\-_]+)/;
                    $("#errorclose").hide();
                    $("#close").hide();
                    $('#lbltipAddedComment').hide();
                };
                EmployeeBroadcastMasterController.prototype.SearchEmployeeCastList = function () {
                    $('#search-btn-loader').show();
                    this.numRecords = this.NoOfRds;
                    this.FillGrid(this.numRecords);
                };
                EmployeeBroadcastMasterController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    this.EmployeeBroadList = this.Listservice.Find(this.EmployeeBroadSearch).then((function (response) {
                        _this.EmployeeBroadList = _this.Listservice.GetEmployeeBroadList(response.data.Result);
                        $('#search-btn-loader').hide();
                        if (_this.EmployeeBroadList.length > 0) {
                            $("#nullDataDiv").hide();
                            $("#dataTable").show();
                            _this.EmployeeBroadList.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.EmployeeBroadList);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.EmployeeBroadList.slice(0, that.numRecords);
                        }
                        else {
                            $("#nullDataDiv").show();
                            $("#dataTable").hide();
                        }
                    }));
                };
                EmployeeBroadcastMasterController.prototype.Add = function () {
                    this.InsertEmployeeBroad.EmployeeBroadcastID = "";
                    this.InsertEmployeeBroad.Title = "";
                    this.InsertEmployeeBroad.Description = "";
                    this.InsertEmployeeBroad.YouTubeLink = "";
                    this.InsertEmployeeBroad.Photo = "";
                    this.InsertEmployeeBroad.Video = "";
                    this.InsertEmployeeBroad.Status = "";
                    document.getElementById("input-image-hidden").value = "";
                    $('#image-preview').attr('src', '');
                    document.getElementById("base64textarea").value = "";
                    $("#lbltipAddedComment").hide();
                    $("#chkimg").prop("checked", false);
                };
                EmployeeBroadcastMasterController.prototype.Submit = function () {
                    var _this = this;
                    this.InsertEmployeeBroad.Photo = document.getElementById("base64textarea").value;
                    if (this.InsertEmployeeBroad.Title == undefined || this.InsertEmployeeBroad.Title == null || this.InsertEmployeeBroad.Title == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Title", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertEmployeeBroad.Description == undefined || this.InsertEmployeeBroad.Description == null || this.InsertEmployeeBroad.Description == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Description", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertEmployeeBroad.YouTubeLink == undefined || this.InsertEmployeeBroad.YouTubeLink == null || this.InsertEmployeeBroad.YouTubeLink == "" || !(this.YOUTUBE_REGEXP.test(this.InsertEmployeeBroad.YouTubeLink))) {
                        this.HideShow();
                        this.popupMessage("Please Enter Valid YouTube Link", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        this.InsertService.PostEmployeeBroad(this.InsertEmployeeBroad).then((function (response) {
                            console.log(_this.InsertEmployeeBroad);
                            if (response.data.Result != null) {
                                $("#errorclose").hide();
                                $("#close").show();
                                _this.popupMessage("Employee BroadCast saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                $('#emp-broadcast').click();
                                _this.InsertEmployeeBroad = null;
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
                EmployeeBroadcastMasterController.prototype.loadImageFileAsURL = function () {
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
                EmployeeBroadcastMasterController.prototype.Edit = function (data) {
                    var _this = this;
                    this.EditService.Find(data).then((function (response) {
                        _this.InsertEmployeeBroad = _this.EditService.GetEdit(response.data.Result);
                        $("image-preview").show();
                        $('#txtTitle').val(_this.InsertEmployeeBroad.Title);
                        $('#txtlink').val(_this.InsertEmployeeBroad.YouTubeLink);
                        $('#txtdesc').val(_this.InsertEmployeeBroad.Description);
                        $('#txtVideo').val(_this.InsertEmployeeBroad.Video);
                        // $('#txtPhoto').val(this.InsertEmployeeBroad.Photo);
                        $("#image-preview").show();
                        $("#image-preview").attr("src", _this.InsertEmployeeBroad.Photo);
                        if (_this.InsertEmployeeBroad.Status == "True") {
                            _this.InsertEmployeeBroad.Status = "1";
                        }
                        else {
                            _this.InsertEmployeeBroad.Status = "0";
                        }
                        $("#emp-broadcast").show();
                    }));
                };
                EmployeeBroadcastMasterController.prototype.ShowHidePopUp = function (Message) {
                    $("#errorclose").show();
                    $("#close").hide();
                    this.alert = Message;
                };
                EmployeeBroadcastMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                EmployeeBroadcastMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                EmployeeBroadcastMasterController.prototype.Clear = function () {
                    this.EmployeeBroadSearch.SearchText = "";
                    $("#txtEmp").val("");
                };
                EmployeeBroadcastMasterController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.EmployeeBroadList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                EmployeeBroadcastMasterController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.EmployeeBroadList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                EmployeeBroadcastMasterController.prototype.Close = function () {
                    location.href = "#!/EmployeeBroadcastMaster";
                };
                EmployeeBroadcastMasterController.$inject = ["EmployeeBroadCastListService", "InsertEmployeeBroadService", "EmployeeCastEditService", "$cookieStore"];
                return EmployeeBroadcastMasterController;
            }());
            var EmployeeBroadcastMasterComponentController = /** @class */ (function () {
                function EmployeeBroadcastMasterComponentController() {
                    this.controller = EmployeeBroadcastMasterController;
                    this.templateUrl = "/Scripts/App/EmployeeBroadcastMaster/Template/EmployeeBroadcastMaster.html";
                }
                EmployeeBroadcastMasterComponentController.Name = "employeebroadcastmastercomponent";
                return EmployeeBroadcastMasterComponentController;
            }());
            app.AddComponent(EmployeeBroadcastMasterComponentController.Name, new EmployeeBroadcastMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=EmployeeBroadcastMasterComponent.js.map