var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var InsertDARMaster = GCPL.Model.InsertDARModel;
            var UploadDocumentsController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function UploadDocumentsController(_CreateDARService, _GetDARService, _InsertUpdateDARService, _UploadPDFService, _EditDARDetailsService, _ViewDARDetailsService, $location, _cookieStore) {
                    this.$location = $location;
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
                    this.Cookie = null;
                    this.OpportunityNo = null;
                    this.Status = null;
                    this.CreateDAR = null;
                    this.EditDAR = null;
                    this.ViewDAR = null;
                    this.CustomerID = null;
                    this.GetDAR = null;
                    this.base64 = null;
                    this.UserID = null;
                    this.Comment = null;
                    this.DARID = null;
                    this.CreateDARService = _CreateDARService;
                    this.CreateDAR = new Array();
                    this.GetDARService = _GetDARService;
                    this.Search = Array();
                    this.InsertUpdateDARService = _InsertUpdateDARService;
                    this.InsertDAR = new InsertDARMaster();
                    this.UploadPDFService = _UploadPDFService;
                    this.EditDARDetailsService = _EditDARDetailsService;
                    this.ViewDARDetailsService = _ViewDARDetailsService;
                    this.EditDAR = new Array();
                    this.ViewDAR = new Array();
                    this.OpportunityNo = $location.search().OpportunityNo;
                    this.Status = $location.search().Status;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                }
                UploadDocumentsController.prototype.$onInit = function () {
                    this.Init();
                    $(".date-pick").datepicker();
                    $("#err-msg").hide();
                    $("#c-records").hide();
                    $("#retail-container").hide();
                    $("#stratigic-container").hide();
                    $("#display-container").hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    debugger;
                    $("#img-container1").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container2").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container3").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container4").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container5").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container6").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container7").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container8").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container9").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container10").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container11").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container12").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container13").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container14").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container15").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container16").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container17").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container18").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container19").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#img-container20").click(function () {
                        $("#display-container").show();
                        var imgHolder = $(this).html();
                        console.log("Img Holder : " + imgHolder);
                        $("#img-preview").html(imgHolder);
                    });
                    $("#close1").click(function () {
                        $("#display-container").hide();
                    });
                };
                //Page Load Define Values//
                UploadDocumentsController.prototype.Init = function () {
                    $("#errorclose").hide();
                    $("#close").hide();
                    $("#MainContainer").hide();
                    $('#search-btn-loader').hide();
                    $('#search-btn-loader1').hide();
                    if (this.OpportunityNo != "" || this.OpportunityNo != undefined || this.OpportunityNo != null) {
                        this.Edit(this.OpportunityNo);
                    }
                    if (this.OpportunityNo != "" && this.Status == "Approved") {
                        this.View(this.OpportunityNo);
                    }
                };
                UploadDocumentsController.prototype.View = function (data) {
                    debugger;
                    this.ViewDocuments(data);
                    //this.numRecords = this.NoOfRds;
                    //this.FillGrid(this.numRecords);
                };
                UploadDocumentsController.prototype.Edit = function (data) {
                    var _this = this;
                    debugger;
                    $('#search-btn-loader1').show();
                    this.EditDARDetailsService.Find(data).then((function (response) {
                        _this.EditDAR = _this.EditDARDetailsService.GetEditData(response.data.Result);
                        debugger;
                        $('#search-btn-loader1').hide();
                        _this.CustomerID = _this.EditDAR.CustomerID;
                        _this.Search.CustomerID = _this.CustomerID;
                        _this.Search.DARID = _this.EditDAR.DARID;
                        _this.DARID = _this.EditDAR.DARID;
                        _this.numRecords = _this.NoOfRds;
                        _this.FillGrid(_this.numRecords);
                        if (_this.EditDAR.DARID != null && _this.EditDAR.DARID != "") {
                            $('#createdar').hide();
                        }
                        else {
                            $('#createdar').show();
                        }
                    }));
                };
                UploadDocumentsController.prototype.ViewDocuments = function (data) {
                    var _this = this;
                    debugger;
                    this.ViewDARDetailsService.Find(data).then((function (response) {
                        _this.ViewDAR = _this.ViewDARDetailsService.GetViewData(response.data.Result);
                    }));
                    $("#Doc1Text").prop("disabled", true);
                    $("#Doc2Text").prop("disabled", true);
                    $("#Doc3Text").prop("disabled", true);
                    $("#input-image-hidden1").prop("disabled", true);
                    $("#input-image-hidden2").prop("disabled", true);
                    $("#input-image-hidden3").prop("disabled", true);
                    $("#input-image-hidden4").prop("disabled", true);
                    $("#input-image-hidden5").prop("disabled", true);
                    $("#input-image-hidden6").prop("disabled", true);
                    $("#input-image-hidden7").prop("disabled", true);
                    $("#input-image-hidden8").prop("disabled", true);
                    $("#input-image-hidden9").prop("disabled", true);
                    $("#input-image-hidden10").prop("disabled", true);
                    $("#input-image-hidden11").prop("disabled", true);
                    $("#input-image-hidden12").prop("disabled", true);
                    $("#input-image-hidden13").prop("disabled", true);
                    $("#input-image-hidden14").prop("disabled", true);
                    $("#input-image-hidden15").prop("disabled", true);
                    $("#input-image-hidden16").prop("disabled", true);
                    $("#input-image-hidden17").prop("disabled", true);
                    $("#input-image-hidden18").prop("disabled", true);
                    $("#input-image-hidden19").prop("disabled", true);
                    $("#input-image-hidden20").prop("disabled", true);
                    $("#input-image-hidden21").prop("disabled", true);
                    $("#input-image-hidden22").prop("disabled", true);
                    $("#input-image-hidden23").prop("disabled", true);
                    $("#input-image-hidden24").prop("disabled", true);
                    $("#btnUpload1").prop("disabled", true);
                    $("#btnUpload1").prop("disabled", true);
                    $("#btnUpload2").prop("disabled", true);
                    $("#btnUpload3").prop("disabled", true);
                    $("#btnUpload4").prop("disabled", true);
                    $("#btnUpload5").prop("disabled", true);
                    $("#btnUpload6").prop("disabled", true);
                    $("#btnUpload7").prop("disabled", true);
                    $("#btnUpload8").prop("disabled", true);
                    $("#btnUpload9").prop("disabled", true);
                    $("#btnUpload10").prop("disabled", true);
                    $("#btnUpload11").prop("disabled", true);
                    $("#btnUpload12").prop("disabled", true);
                    $("#btnUpload13").prop("disabled", true);
                    $("#btnUpload14").prop("disabled", true);
                    $("#btnUpload15").prop("disabled", true);
                    $("#btnUpload16").prop("disabled", true);
                    $("#btnUpload17").prop("disabled", true);
                    $("#btnUpload18").prop("disabled", true);
                    $("#btnUpload19").prop("disabled", true);
                    $("#btnUpload20").prop("disabled", true);
                    $("#btnUpload21").prop("disabled", true);
                    $("#btnUpload22").prop("disabled", true);
                    $("#btnUpload23").prop("disabled", true);
                    $("#btnUpload24").prop("disabled", true);
                    $("#ctype-dropdown").prop("disabled", true);
                    $("#txtCATQref").prop("disabled", true);
                    $("#ddldarstatus").hide();
                    $('#btnFinalSubmit').hide();
                    $('#divsubmit').hide();
                    $('#btnreset').hide();
                };
                UploadDocumentsController.prototype.GetDocuments = function (data) {
                    var _this = this;
                    debugger;
                    if (this.OpportunityNo != "" || this.OpportunityNo != undefined || this.OpportunityNo != null) {
                        data = $('#messageCheckbox:checked').val();
                        if (!$("input[name=DARID]:checked").val()) {
                            this.HideShow();
                            this.popupMessage("Please select any one Customer Details.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                        else {
                            $('#search-btn-loader').show();
                            $('#MainContainer').show();
                            $("#createdar").prop("disabled", true);
                            $("#btnGetDocuments").prop("disabled", true);
                            this.CreateDARService.Find(data).then((function (response) {
                                _this.CreateDAR = _this.CreateDARService.GetData(response.data.Result);
                                debugger;
                                $('#search-btn-loader').hide();
                                //this.InsertDAR.DARHeaderID = this.CreateDAR.DARID;
                                // this.InsertDAR.OppStatusID = this.CreateDAR.OppStatusID;
                                // this.InsertDAR.Status = this.CreateDAR.StatusID;
                                if (_this.CreateDAR.StatusID == "1" || _this.CreateDAR.StatusID == "4") {
                                    _this.InsertDAR.CreatedBy = _this.CreateDAR.CreatedBy;
                                    _this.InsertDAR.DARHeaderID = _this.CreateDAR.DARID;
                                    _this.InsertDAR.CustomerID = _this.CreateDAR.CustomerID;
                                    _this.InsertDAR.OpportunityNo = _this.CreateDAR.OpportunityID;
                                    _this.InsertDAR.ApplicationForm = _this.CreateDAR.ApplicationForm;
                                    _this.InsertDAR.PanFormNo16 = _this.CreateDAR.PanFormNo16;
                                    _this.InsertDAR.IDAddProof = _this.CreateDAR.IDAddProof;
                                    _this.InsertDAR.Photograph = _this.CreateDAR.Photograph;
                                    _this.InsertDAR.BankNo = _this.CreateDAR.BankNo;
                                    _this.InsertDAR.FleetList = _this.CreateDAR.FleetList;
                                    _this.InsertDAR.ExistingVehicleReg = _this.CreateDAR.ExistingVehicleReg;
                                    _this.InsertDAR.ExistingLoanScheduleTrack = _this.CreateDAR.ExistingLoanScheduleTrack;
                                    _this.InsertDAR.ITRandAuditReport_CY = _this.CreateDAR.ITRandAuditReport_CY;
                                    _this.InsertDAR.ITRandAuditReport_CY_1 = _this.CreateDAR.ITRandAuditReport_CY_1;
                                    _this.InsertDAR.WorkOrder_IfAvailable = _this.CreateDAR.WorkOrder_IfAvailable;
                                    _this.InsertDAR.CertiIncorp = _this.CreateDAR.CertiIncorp;
                                    _this.InsertDAR.MemoandArticle = _this.CreateDAR.MemoandArticle;
                                    _this.InsertDAR.PANofCompany = _this.CreateDAR.PANofCompany;
                                    _this.InsertDAR.ExtractRegiComp = _this.CreateDAR.ExtractRegiComp;
                                    _this.InsertDAR.ResolutionBoard = _this.CreateDAR.ResolutionBoard;
                                    _this.InsertDAR.LegalSuits = _this.CreateDAR.LegalSuits;
                                    _this.InsertDAR.CatQuoteRef = _this.CreateDAR.CatQuoteRef;
                                    _this.InsertDAR.Doc1Pic = _this.CreateDAR.Doc1Pic;
                                    _this.InsertDAR.Doc2Pic = _this.CreateDAR.Doc2Pic;
                                    _this.InsertDAR.Doc3Pic = _this.CreateDAR.Doc3Pic;
                                    _this.InsertDAR.Doc1Text = _this.CreateDAR.Doc1Text;
                                    _this.InsertDAR.Doc2Text = _this.CreateDAR.Doc2Text;
                                    _this.InsertDAR.Doc3Text = _this.CreateDAR.Doc3Text;
                                    _this.InsertDAR.CustomerType = _this.CreateDAR.CustomerType;
                                }
                                else if (_this.CreateDAR.StatusID == "3") {
                                    _this.InsertDAR.CreatedBy = _this.UserID;
                                    _this.InsertDAR.DARHeaderID = "0";
                                    _this.InsertDAR.ApplicationForm = _this.CreateDAR.ApplicationForm;
                                    _this.InsertDAR.PanFormNo16 = _this.CreateDAR.PanFormNo16;
                                    _this.InsertDAR.IDAddProof = _this.CreateDAR.IDAddProof;
                                    _this.InsertDAR.Photograph = _this.CreateDAR.Photograph;
                                    _this.InsertDAR.BankNo = _this.CreateDAR.BankNo;
                                    _this.InsertDAR.FleetList = _this.CreateDAR.FleetList;
                                    _this.InsertDAR.ExistingVehicleReg = _this.CreateDAR.ExistingVehicleReg;
                                    _this.InsertDAR.ExistingLoanScheduleTrack = _this.CreateDAR.ExistingLoanScheduleTrack;
                                    _this.InsertDAR.ITRandAuditReport_CY = _this.CreateDAR.ITRandAuditReport_CY;
                                    _this.InsertDAR.ITRandAuditReport_CY_1 = _this.CreateDAR.ITRandAuditReport_CY_1;
                                    _this.InsertDAR.WorkOrder_IfAvailable = _this.CreateDAR.WorkOrder_IfAvailable;
                                    _this.InsertDAR.CertiIncorp = _this.CreateDAR.CertiIncorp;
                                    _this.InsertDAR.MemoandArticle = _this.CreateDAR.MemoandArticle;
                                    _this.InsertDAR.PANofCompany = _this.CreateDAR.PANofCompany;
                                    _this.InsertDAR.ExtractRegiComp = _this.CreateDAR.ExtractRegiComp;
                                    _this.InsertDAR.ResolutionBoard = _this.CreateDAR.ResolutionBoard;
                                    _this.InsertDAR.LegalSuits = _this.CreateDAR.LegalSuits;
                                    _this.InsertDAR.Doc1Pic = _this.CreateDAR.Doc1Pic;
                                    _this.InsertDAR.Doc2Pic = _this.CreateDAR.Doc2Pic;
                                    _this.InsertDAR.Doc3Pic = _this.CreateDAR.Doc3Pic;
                                    _this.InsertDAR.Doc1Text = _this.CreateDAR.Doc1Text;
                                    _this.InsertDAR.Doc2Text = _this.CreateDAR.Doc2Text;
                                    _this.InsertDAR.Doc3Text = _this.CreateDAR.Doc3Text;
                                    _this.InsertDAR.CatQuoteRef = _this.CreateDAR.CatQuoteRef;
                                    _this.InsertDAR.CustomerType = _this.CreateDAR.CustomerType;
                                }
                                if (_this.InsertDAR.CustomerType == "1") {
                                    //   $("#ctype-dropdown").prop("disabled", true);
                                    $("#ctype-dropdown").val(_this.InsertDAR.CustomerType);
                                    $("#btnCussubmit").show();
                                    $("#retail-container").show();
                                    $("#stratigic-container").hide();
                                    if (_this.CreateDAR.FleetList != null || _this.CreateDAR.FleetList != "") {
                                        var string9 = _this.CreateDAR.FleetList;
                                        var xyz9 = string9.substring(string9.length - 3, string9.length);
                                        if (xyz9 == "jpg") {
                                            $("#image-preview9").show();
                                            $("#image-preview9").attr("src", _this.CreateDAR.FleetList);
                                        }
                                        else if (xyz9 == "pdf") {
                                            $("#image-preview9").show();
                                            document.getElementById("image-preview9").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ExistingVehicleReg != null || _this.CreateDAR.ExistingVehicleReg != "") {
                                        var string10 = _this.CreateDAR.ExistingVehicleReg;
                                        var xyz10 = string10.substring(string10.length - 3, string10.length);
                                        if (xyz10 == "jpg") {
                                            $("#image-preview10").show();
                                            $("#image-preview10").attr("src", _this.CreateDAR.ExistingVehicleReg);
                                        }
                                        else if (xyz10 == "pdf") {
                                            $("#image-preview10").show();
                                            document.getElementById("image-preview10").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ExistingLoanScheduleTrack != null || _this.CreateDAR.ExistingLoanScheduleTrack != "") {
                                        var string11 = _this.CreateDAR.ExistingLoanScheduleTrack;
                                        var xyz11 = string11.substring(string11.length - 3, string11.length);
                                        if (xyz11 == "jpg") {
                                            $("#image-preview11").show();
                                            $("#image-preview11").attr("src", _this.CreateDAR.ExistingLoanScheduleTrack);
                                        }
                                        else if (xyz11 == "pdf") {
                                            $("#image-preview11").show();
                                            document.getElementById("image-preview11").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ITRandAuditReport_CY != null || _this.CreateDAR.ITRandAuditReport_CY != "") {
                                        var string12 = _this.CreateDAR.ITRandAuditReport_CY;
                                        var xyz12 = string12.substring(string12.length - 3, string12.length);
                                        if (xyz12 == "jpg") {
                                            $("#image-preview12").show();
                                            $("#image-preview12").attr("src", _this.CreateDAR.ITRandAuditReport_CY);
                                        }
                                        else if (xyz12 == "pdf") {
                                            $("#image-preview12").show();
                                            document.getElementById("image-preview12").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ITRandAuditReport_CY_1 != null || _this.CreateDAR.ITRandAuditReport_CY_1 != "") {
                                        var string13 = _this.CreateDAR.ITRandAuditReport_CY_1;
                                        var xyz13 = string13.substring(string13.length - 3, string13.length);
                                        if (xyz13 == "jpg") {
                                            $("#image-preview13").show();
                                            $("#image-preview13").attr("src", _this.CreateDAR.ITRandAuditReport_CY_1);
                                        }
                                        else if (xyz13 == "pdf") {
                                            $("#image-preview13").show();
                                            document.getElementById("image-preview13").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.WorkOrder_IfAvailable != null || _this.CreateDAR.WorkOrder_IfAvailable != "") {
                                        var string14 = _this.CreateDAR.WorkOrder_IfAvailable;
                                        var xyz14 = string14.substring(string14.length - 3, string14.length);
                                        if (xyz14 == "jpg") {
                                            $("#image-preview14").show();
                                            $("#image-preview14").attr("src", _this.CreateDAR.WorkOrder_IfAvailable);
                                        }
                                        else if (xyz14 == "pdf") {
                                            $("#image-preview14").show();
                                            document.getElementById("image-preview14").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                }
                                else if (_this.InsertDAR.CustomerType == "2") {
                                    //  $("#ctype-dropdown").prop("disabled", true);
                                    $("#ctype-dropdown").val(_this.InsertDAR.CustomerType);
                                    $("#btnCussubmit").show();
                                    $("#retail-container").hide();
                                    $("#stratigic-container").show();
                                    if (_this.CreateDAR.CertiIncorp != null || _this.CreateDAR.CertiIncorp != "") {
                                        var string15 = _this.CreateDAR.CertiIncorp;
                                        var xyz15 = string15.substring(string15.length - 3, string15.length);
                                        if (xyz15 == "jpg") {
                                            $("#image-preview15").show();
                                            $("#image-preview15").attr("src", _this.CreateDAR.CertiIncorp);
                                        }
                                        else if (xyz15 == "pdf") {
                                            $("#image-preview15").show();
                                            document.getElementById("image-preview15").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.MemoandArticle != null || _this.CreateDAR.MemoandArticle != "") {
                                        var string16 = _this.CreateDAR.MemoandArticle;
                                        var xyz16 = string16.substring(string16.length - 3, string16.length);
                                        if (xyz16 == "jpg") {
                                            $("#image-preview16").show();
                                            $("#image-preview16").attr("src", _this.CreateDAR.MemoandArticle);
                                        }
                                        else if (xyz16 == "pdf") {
                                            $("#image-preview16").show();
                                            document.getElementById("image-preview16").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.PANofCompany != null || _this.CreateDAR.PANofCompany != "") {
                                        var string17 = _this.CreateDAR.PANofCompany;
                                        var xyz17 = string17.substring(string17.length - 3, string15.length);
                                        if (xyz17 == "jpg") {
                                            $("#image-preview17").show();
                                            $("#image-preview17").attr("src", _this.CreateDAR.PANofCompany);
                                        }
                                        else if (xyz17 == "pdf") {
                                            $("#image-preview17").show();
                                            document.getElementById("image-preview17").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ExtractRegiComp != null || _this.CreateDAR.ExtractRegiComp != "") {
                                        var string18 = _this.CreateDAR.ExtractRegiComp;
                                        var xyz18 = string18.substring(string18.length - 3, string18.length);
                                        if (xyz18 == "jpg") {
                                            $("#image-preview18").show();
                                            $("#image-preview18").attr("src", _this.CreateDAR.ExtractRegiComp);
                                        }
                                        else if (xyz18 == "pdf") {
                                            $("#image-preview18").show();
                                            document.getElementById("image-preview18").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ResolutionBoard != null || _this.CreateDAR.ResolutionBoard != "") {
                                        var string19 = _this.CreateDAR.ResolutionBoard;
                                        var xyz19 = string19.substring(string19.length - 3, string19.length);
                                        if (xyz19 == "jpg") {
                                            $("#image-preview19").show();
                                            $("#image-preview19").attr("src", _this.CreateDAR.ResolutionBoard);
                                        }
                                        else if (xyz19 == "pdf") {
                                            $("#image-preview19").show();
                                            document.getElementById("image-preview19").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.LegalSuits != null || _this.CreateDAR.LegalSuits != "") {
                                        var string20 = _this.CreateDAR.LegalSuits;
                                        var xyz20 = string20.substring(string20.length - 3, string20.length);
                                        if (xyz20 == "jpg") {
                                            $("#image-preview20").show();
                                            $("#image-preview20").attr("src", _this.CreateDAR.LegalSuits);
                                        }
                                        else if (xyz20 == "pdf") {
                                            $("#image-preview20").show();
                                            document.getElementById("image-preview20").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.WorkOrder_IfAvailable != null || _this.CreateDAR.WorkOrder_IfAvailable != "") {
                                        var string21 = _this.CreateDAR.WorkOrder_IfAvailable;
                                        var xyz21 = string21.substring(string21.length - 3, string21.length);
                                        if (xyz21 == "jpg") {
                                            $("#image-preview21").show();
                                            $("#image-preview21").attr("src", _this.CreateDAR.WorkOrder_IfAvailable);
                                        }
                                        else if (xyz21 == "pdf") {
                                            $("#image-preview21").show();
                                            document.getElementById("image-preview21").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.FleetList != null || _this.CreateDAR.FleetList != "") {
                                        var string22 = _this.CreateDAR.FleetList;
                                        var xyz22 = string22.substring(string22.length - 3, string22.length);
                                        if (xyz22 == "jpg") {
                                            $("#image-preview22").show();
                                            $("#image-preview22").attr("src", _this.CreateDAR.FleetList);
                                        }
                                        else if (xyz22 == "pdf") {
                                            $("#image-preview22").show();
                                            document.getElementById("image-preview22").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ITRandAuditReport_CY != null || _this.CreateDAR.ITRandAuditReport_CY != "") {
                                        var string23 = _this.CreateDAR.ITRandAuditReport_CY;
                                        var xyz23 = string23.substring(string23.length - 3, string23.length);
                                        if (xyz23 == "jpg") {
                                            $("#image-preview23").show();
                                            $("#image-preview23").attr("src", _this.CreateDAR.ITRandAuditReport_CY);
                                        }
                                        else if (xyz23 == "pdf") {
                                            $("#image-preview23").show();
                                            document.getElementById("image-preview23").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ITRandAuditReport_CY_1 != null || _this.CreateDAR.ITRandAuditReport_CY_1 != "") {
                                        var string24 = _this.CreateDAR.ITRandAuditReport_CY_1;
                                        var xyz24 = string24.substring(string24.length - 3, string24.length);
                                        if (xyz24 == "jpg") {
                                            $("#image-preview24").show();
                                            $("#image-preview24").attr("src", _this.CreateDAR.ITRandAuditReport_CY_1);
                                        }
                                        else if (xyz24 == "pdf") {
                                            $("#image-preview24").show();
                                            document.getElementById("image-preview24").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                    if (_this.CreateDAR.ExistingVehicleReg != null || _this.CreateDAR.ExistingVehicleReg != "") {
                                        var string25 = _this.CreateDAR.ExistingVehicleReg;
                                        var xyz25 = string25.substring(string25.length - 3, string25.length);
                                        if (xyz25 == "jpg") {
                                            $("#image-preview25").show();
                                            $("#image-preview25").attr("src", _this.CreateDAR.ExistingVehicleReg);
                                        }
                                        else if (xyz25 == "pdf") {
                                            $("#image-preview25").show();
                                            document.getElementById("image-preview25").src = "../../../../Content/assets/img/pdf-128.png";
                                        }
                                    }
                                }
                                else {
                                    $("#ctype-dropdown").prop("disabled", false);
                                    $("#btnCussubmit").show();
                                    // $("#stratigic-container").hide();
                                    //  $("#retail-container").hide();
                                }
                                console.log(_this.InsertDAR);
                                $("#img-container1").attr("href", _this.CreateDAR.ApplicationForm);
                                $("#img-container2").attr("href", _this.CreateDAR.PanFormNo16);
                                $("#img-container3").attr("href", _this.CreateDAR.IDAddProof);
                                $("#img-container4").attr("href", _this.CreateDAR.Photograph);
                                $("#img-container5").attr("href", _this.CreateDAR.BankNo);
                                $("#img-container6").attr("href", _this.CreateDAR.Doc1Pic);
                                $("#img-container7").attr("href", _this.CreateDAR.Doc2Pic);
                                $("#img-container8").attr("href", _this.CreateDAR.Doc3Pic);
                                $("#img-container9").attr("href", _this.CreateDAR.FleetList);
                                $("#img-container10").attr("href", _this.CreateDAR.ExistingVehicleReg);
                                $("#img-container11").attr("href", _this.CreateDAR.ExistingLoanScheduleTrack);
                                $("#img-container12").attr("href", _this.CreateDAR.ITRandAuditReport_CY);
                                $("#img-container13").attr("href", _this.CreateDAR.ITRandAuditReport_CY_1);
                                $("#img-container14").attr("href", _this.CreateDAR.WorkOrder_IfAvailable);
                                $("#img-container15").attr("href", _this.CreateDAR.CertiIncorp);
                                $("#img-container16").attr("href", _this.CreateDAR.MemoandArticle);
                                $("#img-container17").attr("href", _this.CreateDAR.PANofCompany);
                                $("#img-container18").attr("href", _this.CreateDAR.ExtractRegiComp);
                                $("#img-container19").attr("href", _this.CreateDAR.ResolutionBoard);
                                $("#img-container20").attr("href", _this.CreateDAR.LegalSuits);
                                $("#img-container21").attr("href", _this.CreateDAR.WorkOrder_IfAvailable);
                                $("#img-container22").attr("href", _this.CreateDAR.FleetList);
                                $("#img-container23").attr("href", _this.CreateDAR.ITRandAuditReport_CY);
                                $("#img-container24").attr("href", _this.CreateDAR.ITRandAuditReport_CY_1);
                                $("#img-container25").attr("href", _this.CreateDAR.ExistingVehicleReg);
                                if (_this.CreateDAR.ApplicationForm != null || _this.CreateDAR.ApplicationForm != "") {
                                    var string1 = _this.CreateDAR.ApplicationForm;
                                    var xyz1 = string1.substring(string1.length - 3, string1.length);
                                    if (xyz1 == "jpg") {
                                        $("#image-preview1").show();
                                        $("#image-preview1").attr("src", _this.CreateDAR.ApplicationForm);
                                    }
                                    else if (xyz1 == "pdf") {
                                        $("#image-preview1").show();
                                        document.getElementById("image-preview1").src = "../../../../Content/assets/img/pdf-128.png";
                                    }
                                }
                                if (_this.CreateDAR.PanFormNo16 != null || _this.CreateDAR.PanFormNo16 != "") {
                                    var string2 = _this.CreateDAR.PanFormNo16;
                                    var xyz2 = string2.substring(string2.length - 3, string2.length);
                                    if (xyz2 == "jpg") {
                                        $("#image-preview2").show();
                                        $("#image-preview2").attr("src", _this.CreateDAR.PanFormNo16);
                                    }
                                    else if (xyz2 == "pdf") {
                                        $("#image-preview2").show();
                                        document.getElementById("image-preview2").src = "../../../../Content/assets/img/pdf-128.png";
                                    }
                                }
                                if (_this.CreateDAR.IDAddProof != null || _this.CreateDAR.IDAddProof != "") {
                                    var string3 = _this.CreateDAR.IDAddProof;
                                    var xyz3 = string3.substring(string3.length - 3, string3.length);
                                    if (xyz3 == "jpg") {
                                        $("#image-preview3").show();
                                        $("#image-preview3").attr("src", _this.CreateDAR.IDAddProof);
                                    }
                                    else if (xyz3 == "pdf") {
                                        $("#image-preview3").show();
                                        document.getElementById("image-preview3").src = "../../../../Content/assets/img/pdf-128.png";
                                    }
                                }
                                if (_this.CreateDAR.Photograph != null || _this.CreateDAR.Photograph != "") {
                                    var string4 = _this.CreateDAR.Photograph;
                                    var xyz4 = string4.substring(string4.length - 3, string4.length);
                                    if (xyz4 == "jpg") {
                                        $("#image-preview4").show();
                                        $("#image-preview4").attr("src", _this.CreateDAR.Photograph);
                                    }
                                    else if (xyz4 == "pdf") {
                                        $("#image-preview4").show();
                                        document.getElementById("image-preview4").src = "../../../../Content/assets/img/pdf-128.png";
                                    }
                                }
                                if (_this.CreateDAR.BankNo != null || _this.CreateDAR.BankNo != "") {
                                    var string5 = _this.CreateDAR.BankNo;
                                    var xyz5 = string5.substring(string5.length - 3, string5.length);
                                    if (xyz5 == "jpg") {
                                        $("#image-preview5").show();
                                        $("#image-preview5").attr("src", _this.CreateDAR.BankNo);
                                    }
                                    else if (xyz5 == "pdf") {
                                        $("#image-preview5").show();
                                        document.getElementById("image-preview5").src = "../../../../Content/assets/img/pdf-128.png";
                                    }
                                }
                                if (_this.CreateDAR.Doc1Pic != null || _this.CreateDAR.Doc1Pic != "") {
                                    var string6 = _this.CreateDAR.Doc1Pic;
                                    var xyz6 = string6.substring(string6.length - 3, string6.length);
                                    if (xyz6 == "jpg") {
                                        $("#image-preview6").show();
                                        $("#image-preview6").attr("src", _this.CreateDAR.Doc1Pic);
                                    }
                                    else if (xyz6 == "pdf") {
                                        $("#image-preview6").show();
                                        document.getElementById("image-preview6").src = "../../../../Content/assets/img/pdf-128.png";
                                    }
                                }
                                if (_this.CreateDAR.Doc2Pic != null || _this.CreateDAR.Doc2Pic != "") {
                                    var string7 = _this.CreateDAR.Doc2Pic;
                                    var xyz7 = string7.substring(string7.length - 3, string7.length);
                                    if (xyz7 == "jpg") {
                                        $("#image-preview7").show();
                                        $("#image-preview7").attr("src", _this.CreateDAR.Doc2Pic);
                                    }
                                    else if (xyz7 == "pdf") {
                                        $("#image-preview7").show();
                                        document.getElementById("image-preview7").src = "../../../../Content/assets/img/pdf-128.png";
                                    }
                                }
                                if (_this.CreateDAR.Doc3Pic != null || _this.CreateDAR.Doc3Pic != "") {
                                    var string8 = _this.CreateDAR.Doc3Pic;
                                    var xyz8 = string8.substring(string8.length - 3, string8.length);
                                    if (xyz8 == "jpg") {
                                        $("#image-preview8").show();
                                        $("#image-preview8").attr("src", _this.CreateDAR.Doc3Pic);
                                    }
                                    else if (xyz8 == "pdf") {
                                        $("#image-preview8").show();
                                        document.getElementById("image-preview8").src = "../../../../Content/assets/img/pdf-128.png";
                                    }
                                }
                                //$("#image-preview1").show();
                                //$("#image-preview1").attr("src", this.InsertDAR.ApplicationForm);
                                //$("#image-preview2").show();
                                //$("#image-preview2").attr("src", this.InsertDAR.PanFormNo16);
                                //$("#image-preview3").show();
                                //$("#image-preview3").attr("src", this.InsertDAR.IDAddProof);
                                //$("#image-preview4").show();
                                //$("#image-preview4").attr("src", this.InsertDAR.Photograph);
                                //$("#image-preview5").show();
                                //$("#image-preview5").attr("src", this.InsertDAR.BankNo);
                                //$("#image-preview6").show();
                                //$("#image-preview6").attr("src", this.InsertDAR.Doc1Pic);
                                //$("#image-preview7").show();
                                //$("#image-preview7").attr("src", this.InsertDAR.Doc2Pic);
                                //$("#image-preview8").show();
                                //$("#image-preview8").attr("src", this.InsertDAR.Doc3Pic);
                                //$("#image-preview9").show();
                                //$("#image-preview9").attr("src", this.InsertDAR.FleetList);
                                //$("#image-preview10").show();
                                //$("#image-preview10").attr("src", this.InsertDAR.ExistingVehicleReg);
                                //$("#image-preview11").show();
                                //$("#image-preview11").attr("src", this.InsertDAR.ExistingLoanScheduleTrack);
                                //$("#image-preview12").show();
                                //$("#image-preview12").attr("src", this.InsertDAR.ITRandAuditReport_CY);
                                //$("#image-preview13").show();
                                //$("#image-preview13").attr("src", this.InsertDAR.ITRandAuditReport_CY_1);
                                //$("#image-preview14").show();
                                //$("#image-preview14").attr("src", this.InsertDAR.WorkOrder_IfAvailable);
                                //$("#image-preview15").show();
                                //$("#image-preview15").attr("src", this.InsertDAR.CertiIncorp);
                                //$("#image-preview16").show();
                                //$("#image-preview16").attr("src", this.InsertDAR.MemoandArticle);
                                //$("#image-preview17").show();
                                //$("#image-preview17").attr("src", this.InsertDAR.PANofCompany);
                                //$("#image-preview18").show();
                                //$("#image-preview18").attr("src", this.InsertDAR.ExtractRegiComp);
                                //$("#image-preview19").show();
                                //$("#image-preview19").attr("src", this.InsertDAR.ResolutionBoard);
                                //$("#image-preview20").show();
                                //$("#image-preview20").attr("src", this.InsertDAR.LegalSuits);
                                //$("#image-preview21").show();
                                //$("#image-preview21").attr("src", this.InsertDAR.WorkOrder_IfAvailable);
                                //$("#image-preview22").show();
                                //$("#image-preview22").attr("src", this.InsertDAR.FleetList);
                                //$("#image-preview23").show();
                                //$("#image-preview23").attr("src", this.InsertDAR.ITRandAuditReport_CY);
                                //$("#image-preview24").show();
                                //$("#image-preview24").attr("src", this.InsertDAR.ITRandAuditReport_CY_1);
                                //$("#image-preview25").show();
                                //$("#image-preview25").attr("src", this.InsertDAR.ExistingVehicleReg);
                            }));
                        }
                    }
                };
                //search(): void {
                //    $('#search-btn-loader').show();
                //    $("#c-records").hide();
                //    this.Search.CustomerID = this.CustomerID;
                //    this.numRecords = this.NoOfRds;
                //    this.FillGrid(this.numRecords);
                //}
                UploadDocumentsController.prototype.Rejected = function (data) {
                    var _this = this;
                    debugger;
                    this.CreateDARService.FindComments(data).then((function (response) {
                        _this.Comment = _this.CreateDARService.GetComments(response.data.Result);
                    }));
                };
                UploadDocumentsController.prototype.FillGrid = function (NoOfRecords) {
                    var _this = this;
                    debugger;
                    var that = this;
                    that.incre = 0;
                    that.numRecords = parseInt(NoOfRecords);
                    that.page = 0;
                    that.maxPages = 0;
                    that.shownItems = [];
                    $('#search-btn-loader1').show();
                    this.GetDAR = this.GetDARService.FindGrid(this.Search).then(function (response) {
                        _this.GetDAR = _this.GetDARService.GetDAR(response.data.Result);
                        $('#rejectcomment').val(_this.GetDAR.ApproverComments);
                        $('#page-loader').hide();
                        $('#search-btn-loader1').hide();
                        if (_this.GetDAR.length > 0) {
                            $("#err-msg").hide();
                            $("#c-records").show();
                            $('#Buttons').show();
                            //  $('#createdar').show();
                            $('#btnGetDocuments').show();
                            _this.GetDAR.forEach(function (value, key) {
                                that.incre = parseInt(key) + 1;
                            });
                            console.log(_this.GetDAR);
                            _this.maxPages = (that.incre / that.numRecords);
                            _this.ShowBack = false;
                            _this.ShowNext = that.maxPages > 1 ? true : false;
                            _this.shownItems = _this.GetDAR.slice(0, that.numRecords);
                        }
                        else {
                            $("#err-msg").show();
                            $("#c-records").hide();
                            //  $('#createdar').show();
                            $('#Buttons').show();
                            $('#btnGetDocuments').hide();
                        }
                        if (_this.GetDAR.length < that.numRecords) {
                            _this.ShowNext = false;
                            _this.ShowBack = false;
                        }
                    });
                };
                UploadDocumentsController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.GetDAR.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                UploadDocumentsController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    this.shownItems = this.GetDAR.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                UploadDocumentsController.prototype.customerType = function () {
                    $("#ctype-dropdown").prop("disabled", true);
                    if ($("#ctype-dropdown").val() == "1") {
                        $("#retail-container").show();
                        $("#stratigic-container").hide();
                    }
                    if ($("#ctype-dropdown").val() == "2") {
                        $("#retail-container").hide();
                        $("#stratigic-container").show();
                    }
                };
                UploadDocumentsController.prototype.Add = function () {
                    debugger;
                    $('#MainContainer').show();
                    $("#btnGetDocuments").prop("disabled", true);
                    this.InsertDAR.ApplicationForm = "";
                    this.InsertDAR.PanFormNo16 = "";
                    this.InsertDAR.IDAddProof = "";
                    this.InsertDAR.Photograph = "";
                    this.InsertDAR.BankNo = "";
                    this.InsertDAR.FleetList = "";
                    this.InsertDAR.ExistingVehicleReg = "";
                    this.InsertDAR.ExistingLoanScheduleTrack = "";
                    this.InsertDAR.ITRandAuditReport_CY = "";
                    this.InsertDAR.ITRandAuditReport_CY_1 = "";
                    this.InsertDAR.WorkOrder_IfAvailable = "";
                    this.InsertDAR.CertiIncorp = "";
                    this.InsertDAR.MemoandArticle = "";
                    this.InsertDAR.PANofCompany = "";
                    this.InsertDAR.ExtractRegiComp = "";
                    this.InsertDAR.ResolutionBoard = "";
                    this.InsertDAR.LegalSuits = "";
                    this.InsertDAR.Doc1Pic = "";
                    this.InsertDAR.Doc2Pic = "";
                    this.InsertDAR.Doc3Pic = "";
                    this.InsertDAR.Doc1Text = "";
                    this.InsertDAR.Doc2Text = "";
                    this.InsertDAR.Doc3Text = "";
                    this.InsertDAR.DARHeaderID = "";
                    this.InsertDAR.CustomerID = "";
                    this.InsertDAR.CustomerType = "";
                    this.InsertDAR.CatQuoteRef = "";
                    this.InsertDAR.OpportunityNo = "";
                    this.InsertDAR.CreatedBy = "";
                    this.InsertDAR.Status = "";
                    document.getElementById("input-image-hidden1").value = "";
                    $('#image-preview1').attr('src', '');
                    document.getElementById("ApplicationForm").value = "";
                    document.getElementById("input-image-hidden2").value = "";
                    $('#image-preview2').attr('src', '');
                    document.getElementById("PanFormNo16").value = "";
                    document.getElementById("input-image-hidden3").value = "";
                    $('#image-preview3').attr('src', '');
                    document.getElementById("IDAddProof").value = "";
                    document.getElementById("input-image-hidden4").value = "";
                    $('#image-preview4').attr('src', '');
                    document.getElementById("Photograph").value = "";
                    document.getElementById("input-image-hidden5").value = "";
                    $('#image-preview5').attr('src', '');
                    document.getElementById("BankNo").value = "";
                    document.getElementById("input-image-hidden6").value = "";
                    $('#image-preview6').attr('src', '');
                    document.getElementById("Doc1Pic").value = "";
                    document.getElementById("input-image-hidden7").value = "";
                    $('#image-preview7').attr('src', '');
                    document.getElementById("Doc2Pic").value = "";
                    document.getElementById("input-image-hidden8").value = "";
                    $('#image-preview8').attr('src', '');
                    document.getElementById("Doc3Pic").value = "";
                    document.getElementById("input-image-hidden9").value = "";
                    $('#image-preview9').attr('src', '');
                    document.getElementById("FleetList").value = "";
                    document.getElementById("input-image-hidden10").value = "";
                    $('#image-preview10').attr('src', '');
                    document.getElementById("ExistingVehicleReg").value = "";
                    document.getElementById("input-image-hidden11").value = "";
                    $('#image-preview11').attr('src', '');
                    document.getElementById("ExistingLoanScheduleTrack").value = "";
                    document.getElementById("input-image-hidden12").value = "";
                    $('#image-preview12').attr('src', '');
                    document.getElementById("ITRandAuditReport_CY").value = "";
                };
                UploadDocumentsController.prototype.Reset = function () {
                    $("#stratigic-container").hide();
                    $("#retail-container").show();
                    $("#ctype-dropdown").prop("disabled", false);
                    $("#ctype-dropdown").val("");
                    this.InsertDAR.CustomerType = "";
                    this.InsertDAR.FleetList = "";
                    this.InsertDAR.ExistingVehicleReg = "";
                    this.InsertDAR.ExistingLoanScheduleTrack = "";
                    this.InsertDAR.ITRandAuditReport_CY = "";
                    this.InsertDAR.ITRandAuditReport_CY_1 = "";
                    this.InsertDAR.WorkOrder_IfAvailable = "";
                    this.InsertDAR.CertiIncorp = "";
                    this.InsertDAR.MemoandArticle = "";
                    this.InsertDAR.PANofCompany = "";
                    this.InsertDAR.ExtractRegiComp = "";
                    this.InsertDAR.ResolutionBoard = "";
                    this.InsertDAR.LegalSuits = "";
                    document.getElementById("image-preview9").src = "";
                    document.getElementById("image-preview10").src = "";
                    document.getElementById("image-preview11").src = "";
                    document.getElementById("image-preview12").src = "";
                    document.getElementById("image-preview13").src = "";
                    document.getElementById("image-preview14").src = "";
                    document.getElementById("image-preview15").src = "";
                    document.getElementById("image-preview16").src = "";
                    document.getElementById("image-preview17").src = "";
                    document.getElementById("image-preview18").src = "";
                    document.getElementById("image-preview19").src = "";
                    document.getElementById("image-preview20").src = "";
                    document.getElementById("image-preview21").src = "";
                    document.getElementById("image-preview22").src = "";
                    document.getElementById("image-preview23").src = "";
                    document.getElementById("image-preview24").src = "";
                    document.getElementById("image-preview25").src = "";
                };
                UploadDocumentsController.prototype.PostParameters = function () {
                    debugger;
                    if (this.InsertDAR.Status == "2") {
                        if (this.InsertDAR.Doc1Pic == "" || this.InsertDAR.Doc1Pic == undefined || this.InsertDAR.Doc1Pic == null) {
                            this.InsertDAR.Doc1Pic = document.getElementById("Doc1Pic").value;
                        }
                        if (this.InsertDAR.Doc2Pic == "" || this.InsertDAR.Doc2Pic == undefined || this.InsertDAR.Doc2Pic == null) {
                            this.InsertDAR.Doc2Pic = document.getElementById("Doc2Pic").value;
                        }
                        if (this.InsertDAR.Doc3Pic == "" || this.InsertDAR.Doc3Pic == undefined || this.InsertDAR.Doc3Pic == null) {
                            this.InsertDAR.Doc3Pic = document.getElementById("Doc3Pic").value;
                        }
                        if (this.InsertDAR.FleetList == "" || this.InsertDAR.FleetList == undefined || this.InsertDAR.FleetList == null) {
                            this.InsertDAR.FleetList = document.getElementById("FleetList").value;
                        }
                        if (this.InsertDAR.ExistingVehicleReg == "" || this.InsertDAR.ExistingVehicleReg == undefined || this.InsertDAR.ExistingVehicleReg == null) {
                            this.InsertDAR.ExistingVehicleReg = document.getElementById("ExistingVehicleReg").value;
                        }
                        if (this.InsertDAR.ExistingLoanScheduleTrack == "" || this.InsertDAR.ExistingLoanScheduleTrack == undefined || this.InsertDAR.ExistingLoanScheduleTrack == null) {
                            this.InsertDAR.ExistingLoanScheduleTrack = document.getElementById("ExistingLoanScheduleTrack").value;
                        }
                        if (this.InsertDAR.ITRandAuditReport_CY == "" || this.InsertDAR.ITRandAuditReport_CY == undefined || this.InsertDAR.ITRandAuditReport_CY == null) {
                            this.InsertDAR.ITRandAuditReport_CY = document.getElementById("ITRandAuditReport_CY").value;
                        }
                        if (this.InsertDAR.ITRandAuditReport_CY_1 == "" || this.InsertDAR.ITRandAuditReport_CY_1 == undefined || this.InsertDAR.ITRandAuditReport_CY_1 == null) {
                            this.InsertDAR.ITRandAuditReport_CY_1 = document.getElementById("ITRandAuditReport_CY_1").value;
                        }
                        if (this.InsertDAR.WorkOrder_IfAvailable == "" || this.InsertDAR.WorkOrder_IfAvailable == undefined || this.InsertDAR.WorkOrder_IfAvailable == null) {
                            this.InsertDAR.WorkOrder_IfAvailable = document.getElementById("WorkOrder_IfAvailable").value;
                        }
                        if (this.InsertDAR.CertiIncorp == "" || this.InsertDAR.CertiIncorp == undefined || this.InsertDAR.CertiIncorp == null) {
                            this.InsertDAR.CertiIncorp = document.getElementById("CertiIncorp").value;
                        }
                        if (this.InsertDAR.MemoandArticle == "" || this.InsertDAR.MemoandArticle == undefined || this.InsertDAR.MemoandArticle == null) {
                            this.InsertDAR.MemoandArticle = document.getElementById("MemoandArticle").value;
                        }
                        if (this.InsertDAR.PANofCompany == "" || this.InsertDAR.PANofCompany == undefined || this.InsertDAR.PANofCompany == null) {
                            this.InsertDAR.PANofCompany = document.getElementById("PANofCompany").value;
                        }
                        if (this.InsertDAR.ExtractRegiComp == "" || this.InsertDAR.ExtractRegiComp == undefined || this.InsertDAR.ExtractRegiComp == null) {
                            this.InsertDAR.ExtractRegiComp = document.getElementById("ExtractRegiComp").value;
                        }
                        if (this.InsertDAR.ResolutionBoard == "" || this.InsertDAR.ResolutionBoard == undefined || this.InsertDAR.ResolutionBoard == null) {
                            this.InsertDAR.ResolutionBoard = document.getElementById("ResolutionBoard").value;
                        }
                        if (this.InsertDAR.LegalSuits == "" || this.InsertDAR.LegalSuits == undefined || this.InsertDAR.LegalSuits == null) {
                            this.InsertDAR.LegalSuits = document.getElementById("LegalSuits").value;
                        }
                        if (this.InsertDAR.ApplicationForm == "" || this.InsertDAR.ApplicationForm == undefined || this.InsertDAR.ApplicationForm == null) {
                            this.InsertDAR.ApplicationForm = document.getElementById("ApplicationForm").value;
                        }
                        if (this.InsertDAR.PanFormNo16 == "" || this.InsertDAR.PanFormNo16 == undefined || this.InsertDAR.PanFormNo16 == null) {
                            this.InsertDAR.PanFormNo16 = document.getElementById("PanFormNo16").value;
                        }
                        if (this.InsertDAR.IDAddProof == "" || this.InsertDAR.IDAddProof == undefined || this.InsertDAR.IDAddProof == null) {
                            this.InsertDAR.IDAddProof = document.getElementById("IDAddProof").value;
                        }
                        if (this.InsertDAR.Photograph == "" || this.InsertDAR.Photograph == undefined || this.InsertDAR.Photograph == null) {
                            this.InsertDAR.Photograph = document.getElementById("Photograph").value;
                        }
                        if (this.InsertDAR.BankNo == "" || this.InsertDAR.BankNo == undefined || this.InsertDAR.BankNo == null) {
                            this.InsertDAR.BankNo = document.getElementById("BankNo").value;
                        }
                        if (this.InsertDAR.ApplicationForm == undefined || this.InsertDAR.ApplicationForm == null || this.InsertDAR.ApplicationForm == "") {
                            $("#errorclose").show();
                            $("#close").hide();
                            alert("Please Enter ApplicationForm");
                        }
                        else if (this.InsertDAR.PanFormNo16 == undefined || this.InsertDAR.PanFormNo16 == null || this.InsertDAR.PanFormNo16 == "") {
                            $("#errorclose").show();
                            $("#close").hide();
                            alert("Please Enter PanFormNo16");
                        }
                        else if (this.InsertDAR.IDAddProof == undefined || this.InsertDAR.IDAddProof == null || this.InsertDAR.IDAddProof == "") {
                            $("#errorclose").show();
                            $("#close").hide();
                            alert("Please Enter IDAddProof");
                        }
                        else if (this.InsertDAR.Photograph == undefined || this.InsertDAR.Photograph == null || this.InsertDAR.Photograph == "") {
                            $("#errorclose").show();
                            $("#close").hide();
                            alert("Please Enter Photograph");
                        }
                        else if (this.InsertDAR.BankNo == undefined || this.InsertDAR.BankNo == null || this.InsertDAR.BankNo == "") {
                            $("#errorclose").show();
                            $("#close").hide();
                            alert("Please Enter BankNo");
                        }
                        else if (this.InsertDAR.CatQuoteRef == undefined || this.InsertDAR.CatQuoteRef == null || this.InsertDAR.CatQuoteRef == "") {
                            $("#errorclose").show();
                            $("#close").hide();
                            alert("Please Enter CatQuoteRef");
                        }
                    }
                    else {
                        if (this.InsertDAR.ApplicationForm == "" || this.InsertDAR.ApplicationForm == undefined || this.InsertDAR.ApplicationForm == null) {
                            this.InsertDAR.ApplicationForm = document.getElementById("ApplicationForm").value;
                        }
                        if (this.InsertDAR.PanFormNo16 == "" || this.InsertDAR.PanFormNo16 == undefined || this.InsertDAR.PanFormNo16 == null) {
                            this.InsertDAR.PanFormNo16 = document.getElementById("PanFormNo16").value;
                        }
                        if (this.InsertDAR.IDAddProof == "" || this.InsertDAR.IDAddProof == undefined || this.InsertDAR.IDAddProof == null) {
                            this.InsertDAR.IDAddProof = document.getElementById("IDAddProof").value;
                        }
                        if (this.InsertDAR.Photograph == "" || this.InsertDAR.Photograph == undefined || this.InsertDAR.Photograph == null) {
                            this.InsertDAR.Photograph = document.getElementById("Photograph").value;
                        }
                        if (this.InsertDAR.BankNo == "" || this.InsertDAR.BankNo == undefined || this.InsertDAR.BankNo == null) {
                            this.InsertDAR.BankNo = document.getElementById("BankNo").value;
                        }
                        if (this.InsertDAR.Doc1Pic == "" || this.InsertDAR.Doc1Pic == undefined || this.InsertDAR.Doc1Pic == null) {
                            this.InsertDAR.Doc1Pic = document.getElementById("Doc1Pic").value;
                        }
                        if (this.InsertDAR.Doc2Pic == "" || this.InsertDAR.Doc2Pic == undefined || this.InsertDAR.Doc2Pic == null) {
                            this.InsertDAR.Doc2Pic = document.getElementById("Doc2Pic").value;
                        }
                        if (this.InsertDAR.Doc3Pic == "" || this.InsertDAR.Doc3Pic == undefined || this.InsertDAR.Doc3Pic == null) {
                            this.InsertDAR.Doc3Pic = document.getElementById("Doc3Pic").value;
                        }
                        if (this.InsertDAR.FleetList == "" || this.InsertDAR.FleetList == undefined || this.InsertDAR.FleetList == null) {
                            this.InsertDAR.FleetList = document.getElementById("FleetList").value;
                        }
                        if (this.InsertDAR.ExistingVehicleReg == "" || this.InsertDAR.ExistingVehicleReg == undefined || this.InsertDAR.ExistingVehicleReg == null) {
                            this.InsertDAR.ExistingVehicleReg = document.getElementById("ExistingVehicleReg").value;
                        }
                        if (this.InsertDAR.ExistingLoanScheduleTrack == "" || this.InsertDAR.ExistingLoanScheduleTrack == undefined || this.InsertDAR.ExistingLoanScheduleTrack == null) {
                            this.InsertDAR.ExistingLoanScheduleTrack = document.getElementById("ExistingLoanScheduleTrack").value;
                        }
                        if (this.InsertDAR.ITRandAuditReport_CY == "" || this.InsertDAR.ITRandAuditReport_CY == undefined || this.InsertDAR.ITRandAuditReport_CY == null) {
                            this.InsertDAR.ITRandAuditReport_CY = document.getElementById("ITRandAuditReport_CY").value;
                        }
                        if (this.InsertDAR.ITRandAuditReport_CY_1 == "" || this.InsertDAR.ITRandAuditReport_CY_1 == undefined || this.InsertDAR.ITRandAuditReport_CY_1 == null) {
                            this.InsertDAR.ITRandAuditReport_CY_1 = document.getElementById("ITRandAuditReport_CY_1").value;
                        }
                        if (this.InsertDAR.WorkOrder_IfAvailable == "" || this.InsertDAR.WorkOrder_IfAvailable == undefined || this.InsertDAR.WorkOrder_IfAvailable == null) {
                            this.InsertDAR.WorkOrder_IfAvailable = document.getElementById("WorkOrder_IfAvailable").value;
                        }
                        if (this.InsertDAR.CertiIncorp == "" || this.InsertDAR.CertiIncorp == undefined || this.InsertDAR.CertiIncorp == null) {
                            this.InsertDAR.CertiIncorp = document.getElementById("CertiIncorp").value;
                        }
                        if (this.InsertDAR.MemoandArticle == "" || this.InsertDAR.MemoandArticle == undefined || this.InsertDAR.MemoandArticle == null) {
                            this.InsertDAR.MemoandArticle = document.getElementById("MemoandArticle").value;
                        }
                        if (this.InsertDAR.PANofCompany == "" || this.InsertDAR.PANofCompany == undefined || this.InsertDAR.PANofCompany == null) {
                            this.InsertDAR.PANofCompany = document.getElementById("PANofCompany").value;
                        }
                        if (this.InsertDAR.ExtractRegiComp == "" || this.InsertDAR.ExtractRegiComp == undefined || this.InsertDAR.ExtractRegiComp == null) {
                            this.InsertDAR.ExtractRegiComp = document.getElementById("ExtractRegiComp").value;
                        }
                        if (this.InsertDAR.ResolutionBoard == "" || this.InsertDAR.ResolutionBoard == undefined || this.InsertDAR.ResolutionBoard == null) {
                            this.InsertDAR.ResolutionBoard = document.getElementById("ResolutionBoard").value;
                        }
                        if (this.InsertDAR.LegalSuits == "" || this.InsertDAR.LegalSuits == undefined || this.InsertDAR.LegalSuits == null) {
                            this.InsertDAR.LegalSuits = document.getElementById("LegalSuits").value;
                        }
                    }
                };
                UploadDocumentsController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    if (this.InsertDAR.ApplicationForm == "" || this.InsertDAR.ApplicationForm == undefined || this.InsertDAR.ApplicationForm == null) {
                        this.InsertDAR.ApplicationForm = document.getElementById("ApplicationForm").value;
                    }
                    else {
                        this.InsertDAR.ApplicationForm = this.InsertDAR.ApplicationForm;
                    }
                    if (this.InsertDAR.PanFormNo16 == "" || this.InsertDAR.PanFormNo16 == undefined || this.InsertDAR.PanFormNo16 == null) {
                        this.InsertDAR.PanFormNo16 = document.getElementById("PanFormNo16").value;
                    }
                    else {
                        this.InsertDAR.PanFormNo16 = this.InsertDAR.PanFormNo16;
                    }
                    if (this.InsertDAR.IDAddProof == "" || this.InsertDAR.IDAddProof == undefined || this.InsertDAR.IDAddProof == null) {
                        this.InsertDAR.IDAddProof = document.getElementById("IDAddProof").value;
                    }
                    else {
                        this.InsertDAR.IDAddProof = this.InsertDAR.IDAddProof;
                    }
                    if (this.InsertDAR.Photograph == "" || this.InsertDAR.Photograph == undefined || this.InsertDAR.Photograph == null) {
                        this.InsertDAR.Photograph = document.getElementById("Photograph").value;
                    }
                    else {
                        this.InsertDAR.Photograph = this.InsertDAR.Photograph;
                    }
                    if (this.InsertDAR.BankNo == "" || this.InsertDAR.BankNo == undefined || this.InsertDAR.BankNo == null) {
                        this.InsertDAR.BankNo = document.getElementById("BankNo").value;
                    }
                    else {
                        this.InsertDAR.BankNo = this.InsertDAR.BankNo;
                    }
                    if (this.InsertDAR.Doc1Pic == "" || this.InsertDAR.Doc1Pic == undefined || this.InsertDAR.Doc1Pic == null) {
                        this.InsertDAR.Doc1Pic = document.getElementById("Doc1Pic").value;
                    }
                    else {
                        this.InsertDAR.Doc1Pic = this.InsertDAR.Doc1Pic;
                    }
                    if (this.InsertDAR.Doc2Pic == "" || this.InsertDAR.Doc2Pic == undefined || this.InsertDAR.Doc2Pic == null) {
                        this.InsertDAR.Doc2Pic = document.getElementById("Doc2Pic").value;
                    }
                    else {
                        this.InsertDAR.Doc2Pic = this.InsertDAR.Doc2Pic;
                    }
                    if (this.InsertDAR.Doc3Pic == "" || this.InsertDAR.Doc3Pic == undefined || this.InsertDAR.Doc3Pic == null) {
                        this.InsertDAR.Doc3Pic = document.getElementById("Doc3Pic").value;
                    }
                    else {
                        this.InsertDAR.Doc3Pic = this.InsertDAR.Doc3Pic;
                    }
                    if (this.InsertDAR.FleetList == "" || this.InsertDAR.FleetList == undefined || this.InsertDAR.FleetList == null) {
                        this.InsertDAR.FleetList = document.getElementById("FleetList").value;
                    }
                    else {
                        this.InsertDAR.FleetList = this.InsertDAR.FleetList;
                    }
                    if (this.InsertDAR.ExistingVehicleReg == "" || this.InsertDAR.ExistingVehicleReg == undefined || this.InsertDAR.ExistingVehicleReg == null) {
                        this.InsertDAR.ExistingVehicleReg = document.getElementById("ExistingVehicleReg").value;
                    }
                    else {
                        this.InsertDAR.ExistingVehicleReg = this.InsertDAR.ExistingVehicleReg;
                    }
                    if (this.InsertDAR.ExistingLoanScheduleTrack == "" || this.InsertDAR.ExistingLoanScheduleTrack == undefined || this.InsertDAR.ExistingLoanScheduleTrack == null) {
                        this.InsertDAR.ExistingLoanScheduleTrack = document.getElementById("ExistingLoanScheduleTrack").value;
                    }
                    else {
                        this.InsertDAR.ExistingLoanScheduleTrack = this.InsertDAR.ExistingLoanScheduleTrack;
                    }
                    if (this.InsertDAR.ITRandAuditReport_CY == "" || this.InsertDAR.ITRandAuditReport_CY == undefined || this.InsertDAR.ITRandAuditReport_CY == null) {
                        this.InsertDAR.ITRandAuditReport_CY = document.getElementById("ITRandAuditReport_CY").value;
                    }
                    else {
                        this.InsertDAR.ITRandAuditReport_CY = this.InsertDAR.ITRandAuditReport_CY;
                    }
                    if (this.InsertDAR.ITRandAuditReport_CY_1 == "" || this.InsertDAR.ITRandAuditReport_CY_1 == undefined || this.InsertDAR.ITRandAuditReport_CY_1 == null) {
                        this.InsertDAR.ITRandAuditReport_CY_1 = document.getElementById("ITRandAuditReport_CY_1").value;
                    }
                    else {
                        this.InsertDAR.ITRandAuditReport_CY_1 = this.InsertDAR.ITRandAuditReport_CY_1;
                    }
                    if (this.InsertDAR.WorkOrder_IfAvailable == "" || this.InsertDAR.WorkOrder_IfAvailable == undefined || this.InsertDAR.WorkOrder_IfAvailable == null) {
                        this.InsertDAR.WorkOrder_IfAvailable = document.getElementById("WorkOrder_IfAvailable").value;
                    }
                    else {
                        this.InsertDAR.WorkOrder_IfAvailable = this.InsertDAR.WorkOrder_IfAvailable;
                    }
                    if (this.InsertDAR.CertiIncorp == "" || this.InsertDAR.CertiIncorp == undefined || this.InsertDAR.CertiIncorp == null) {
                        this.InsertDAR.CertiIncorp = document.getElementById("CertiIncorp").value;
                    }
                    else {
                        this.InsertDAR.CertiIncorp = this.InsertDAR.CertiIncorp;
                    }
                    if (this.InsertDAR.MemoandArticle == "" || this.InsertDAR.MemoandArticle == undefined || this.InsertDAR.MemoandArticle == null) {
                        this.InsertDAR.MemoandArticle = document.getElementById("MemoandArticle").value;
                    }
                    else {
                        this.InsertDAR.MemoandArticle = this.InsertDAR.MemoandArticle;
                    }
                    if (this.InsertDAR.PANofCompany == "" || this.InsertDAR.PANofCompany == undefined || this.InsertDAR.PANofCompany == null) {
                        this.InsertDAR.PANofCompany = document.getElementById("PANofCompany").value;
                    }
                    else {
                        this.InsertDAR.PANofCompany = this.InsertDAR.PANofCompany;
                    }
                    if (this.InsertDAR.ExtractRegiComp == "" || this.InsertDAR.ExtractRegiComp == undefined || this.InsertDAR.ExtractRegiComp == null) {
                        this.InsertDAR.ExtractRegiComp = document.getElementById("ExtractRegiComp").value;
                    }
                    else {
                        this.InsertDAR.ExtractRegiComp = this.InsertDAR.ExtractRegiComp;
                    }
                    if (this.InsertDAR.ResolutionBoard == "" || this.InsertDAR.ResolutionBoard == undefined || this.InsertDAR.ResolutionBoard == null) {
                        this.InsertDAR.ResolutionBoard = document.getElementById("ResolutionBoard").value;
                    }
                    else {
                        this.InsertDAR.ResolutionBoard = this.InsertDAR.ResolutionBoard;
                    }
                    if (this.InsertDAR.LegalSuits == "" || this.InsertDAR.LegalSuits == undefined || this.InsertDAR.LegalSuits == null) {
                        this.InsertDAR.LegalSuits = document.getElementById("LegalSuits").value;
                    }
                    else {
                        this.InsertDAR.LegalSuits = this.InsertDAR.LegalSuits;
                    }
                    if (this.InsertDAR.Doc1Text == "" || this.InsertDAR.Doc1Text == undefined || this.InsertDAR.Doc1Text == null) {
                        this.InsertDAR.Doc1Text = document.getElementById("Doc1Text").value;
                    }
                    else {
                        this.InsertDAR.Doc1Text = this.InsertDAR.Doc1Text;
                    }
                    if (this.InsertDAR.Doc2Text == "" || this.InsertDAR.Doc2Text == undefined || this.InsertDAR.Doc2Text == null) {
                        this.InsertDAR.Doc2Text = document.getElementById("Doc2Text").value;
                    }
                    else {
                        this.InsertDAR.Doc2Text = this.InsertDAR.Doc2Text;
                    }
                    if (this.InsertDAR.Doc3Text == "" || this.InsertDAR.Doc3Text == undefined || this.InsertDAR.Doc3Text == null) {
                        this.InsertDAR.Doc3Text = document.getElementById("Doc3Text").value;
                    }
                    else {
                        this.InsertDAR.Doc3Text = this.InsertDAR.Doc3Text;
                    }
                    if (this.InsertDAR.Status == undefined || this.InsertDAR.Status == null || this.InsertDAR.Status == "") {
                        this.HideShow();
                        this.popupMessage("Please Enter Status", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDAR.Status == "2" && (this.InsertDAR.ApplicationForm == "" || this.InsertDAR.ApplicationForm == undefined || this.InsertDAR.ApplicationForm == null)) {
                        this.HideShow();
                        this.popupMessage("Please Enter ApplicationForm", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDAR.Status == "2" && (this.InsertDAR.PanFormNo16 == "" || this.InsertDAR.PanFormNo16 == undefined || this.InsertDAR.PanFormNo16 == null)) {
                        this.HideShow();
                        this.popupMessage("Please Enter PanFormNo16", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDAR.Status == "2" && (this.InsertDAR.IDAddProof == "" || this.InsertDAR.IDAddProof == undefined || this.InsertDAR.IDAddProof == null)) {
                        this.HideShow();
                        this.popupMessage("Please Enter IDAddProof", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDAR.Status == "2" && (this.InsertDAR.Photograph == "" || this.InsertDAR.Photograph == undefined || this.InsertDAR.Photograph == null)) {
                        this.HideShow();
                        this.popupMessage("Please Enter Photograph", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDAR.Status == "2" && (this.InsertDAR.BankNo == "" || this.InsertDAR.BankNo == undefined || this.InsertDAR.BankNo == null)) {
                        this.HideShow();
                        this.popupMessage("Please Enter BankNo", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDAR.Status == "2" && (this.InsertDAR.CatQuoteRef == "" || this.InsertDAR.CatQuoteRef == undefined || this.InsertDAR.CatQuoteRef == null)) {
                        this.HideShow();
                        this.popupMessage("Please Enter CatQuoteRef", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else if (this.InsertDAR.Status == "2" && (this.InsertDAR.CustomerType == "" || this.InsertDAR.CustomerType == undefined || this.InsertDAR.CustomerType == null)) {
                        this.HideShow();
                        this.popupMessage("Please Enter CustomerType", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }
                    else {
                        debugger;
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                        $("#pg-load").show();
                        if (this.InsertDAR.Status == "2") {
                            if (confirm("Once you submit the DAR, it will be sent for approval and you will not be able to make any changes")) {
                                if (this.InsertDAR.CreatedBy == null || this.InsertDAR.CreatedBy == "" || this.InsertDAR.CreatedBy == undefined) {
                                    this.InsertDAR.CreatedBy = this.UserID;
                                }
                                if (this.InsertDAR.DARHeaderID == null || this.InsertDAR.DARHeaderID == "" || this.InsertDAR.DARHeaderID == undefined) {
                                    this.InsertDAR.DARHeaderID = "0";
                                }
                                this.InsertDAR.CustomerID = this.CustomerID;
                                this.InsertDAR.OpportunityNo = this.OpportunityNo;
                                this.InsertUpdateDARService.PostDAR(this.InsertDAR).then((function (response) {
                                    $("#pg-load").hide();
                                    debugger;
                                    console.log(_this.InsertDAR);
                                    if (response.data.Result != null) {
                                        if (_this.DARID > 0) {
                                            $("#errorclose").hide();
                                            $("#close").show();
                                            _this.popupMessage("DAR NO : " + _this.DARID + " Updated Successfully ", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                        }
                                        else {
                                            $("#errorclose").hide();
                                            $("#close").show();
                                            _this.popupMessage("DAR NO : " + response.data.Result + " Created Successfully ", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                        }
                                        _this.InsertDAR = {};
                                        document.getElementById("input-image-hidden1").value = "";
                                        $('#image-preview1').attr('src', '');
                                        document.getElementById("input-image-hidden2").value = "";
                                        $('#image-preview2').attr('src', '');
                                        document.getElementById("input-image-hidden3").value = "";
                                        $('#image-preview3').attr('src', '');
                                        document.getElementById("input-image-hidden4").value = "";
                                        $('#image-preview4').attr('src', '');
                                        document.getElementById("input-image-hidden5").value = "";
                                        $('#image-preview5').attr('src', '');
                                        document.getElementById("input-image-hidden6").value = "";
                                        $('#image-preview6').attr('src', '');
                                        document.getElementById("input-image-hidden7").value = "";
                                        $('#image-preview7').attr('src', '');
                                        document.getElementById("input-image-hidden8").value = "";
                                        $('#image-preview8').attr('src', '');
                                        document.getElementById("input-image-hidden9").value = "";
                                        $('#image-preview9').attr('src', '');
                                        document.getElementById("input-image-hidden10").value = "";
                                        $('#image-preview10').attr('src', '');
                                        document.getElementById("input-image-hidden11").value = "";
                                        $('#image-preview11').attr('src', '');
                                        document.getElementById("input-image-hidden12").value = "";
                                        $('#image-preview12').attr('src', '');
                                        document.getElementById("input-image-hidden13").value = "";
                                        $('#image-preview13').attr('src', '');
                                        document.getElementById("input-image-hidden14").value = "";
                                        $('#image-preview14').attr('src', '');
                                        document.getElementById("input-image-hidden15").value = "";
                                        $('#image-preview15').attr('src', '');
                                        document.getElementById("input-image-hidden16").value = "";
                                        $('#image-preview16').attr('src', '');
                                        document.getElementById("input-image-hidden17").value = "";
                                        $('#image-preview17').attr('src', '');
                                        document.getElementById("input-image-hidden18").value = "";
                                        $('#image-preview18').attr('src', '');
                                        document.getElementById("input-image-hidden19").value = "";
                                        $('#image-preview19').attr('src', '');
                                        document.getElementById("input-image-hidden20").value = "";
                                        $('#image-preview20').attr('src', '');
                                    }
                                    else {
                                        _this.HideShow();
                                        _this.popupMessage("Please choose Previous Documents.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                    }
                                    _this.numRecords = _this.NoOfRds;
                                    _this.FillGrid(_this.numRecords);
                                }));
                            }
                            else {
                                location.href = "/#!/SalesRepDocumentList";
                            }
                        }
                        else {
                            if (this.InsertDAR.CreatedBy == null || this.InsertDAR.CreatedBy == "" || this.InsertDAR.CreatedBy == undefined) {
                                this.InsertDAR.CreatedBy = this.UserID;
                            }
                            if (this.InsertDAR.DARHeaderID == null || this.InsertDAR.DARHeaderID == "" || this.InsertDAR.DARHeaderID == undefined) {
                                this.InsertDAR.DARHeaderID = "0";
                            }
                            this.InsertDAR.CustomerID = this.CustomerID;
                            this.InsertDAR.OpportunityNo = this.OpportunityNo;
                            this.InsertUpdateDARService.PostDAR(this.InsertDAR).then((function (response) {
                                $("#pg-load").hide();
                                debugger;
                                console.log(_this.InsertDAR);
                                if (response.data.Result != null) {
                                    if (_this.DARID > 0) {
                                        $("#errorclose").hide();
                                        $("#close").show();
                                        _this.popupMessage("DAR NO : " + _this.DARID + " Updated Successfully ", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                    }
                                    else {
                                        $("#errorclose").hide();
                                        $("#close").show();
                                        _this.popupMessage("DAR NO : " + response.data.Result + " Created Successfully ", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                    }
                                    _this.InsertDAR = {};
                                    document.getElementById("input-image-hidden1").value = "";
                                    $('#image-preview1').attr('src', '');
                                    document.getElementById("input-image-hidden2").value = "";
                                    $('#image-preview2').attr('src', '');
                                    document.getElementById("input-image-hidden3").value = "";
                                    $('#image-preview3').attr('src', '');
                                    document.getElementById("input-image-hidden4").value = "";
                                    $('#image-preview4').attr('src', '');
                                    document.getElementById("input-image-hidden5").value = "";
                                    $('#image-preview5').attr('src', '');
                                    document.getElementById("input-image-hidden6").value = "";
                                    $('#image-preview6').attr('src', '');
                                    document.getElementById("input-image-hidden7").value = "";
                                    $('#image-preview7').attr('src', '');
                                    document.getElementById("input-image-hidden8").value = "";
                                    $('#image-preview8').attr('src', '');
                                    document.getElementById("input-image-hidden9").value = "";
                                    $('#image-preview9').attr('src', '');
                                    document.getElementById("input-image-hidden10").value = "";
                                    $('#image-preview10').attr('src', '');
                                    document.getElementById("input-image-hidden11").value = "";
                                    $('#image-preview11').attr('src', '');
                                    document.getElementById("input-image-hidden12").value = "";
                                    $('#image-preview12').attr('src', '');
                                    document.getElementById("input-image-hidden13").value = "";
                                    $('#image-preview13').attr('src', '');
                                    document.getElementById("input-image-hidden14").value = "";
                                    $('#image-preview14').attr('src', '');
                                    document.getElementById("input-image-hidden15").value = "";
                                    $('#image-preview15').attr('src', '');
                                    document.getElementById("input-image-hidden16").value = "";
                                    $('#image-preview16').attr('src', '');
                                    document.getElementById("input-image-hidden17").value = "";
                                    $('#image-preview17').attr('src', '');
                                    document.getElementById("input-image-hidden18").value = "";
                                    $('#image-preview18').attr('src', '');
                                    document.getElementById("input-image-hidden19").value = "";
                                    $('#image-preview19').attr('src', '');
                                    document.getElementById("input-image-hidden20").value = "";
                                    $('#image-preview20').attr('src', '');
                                }
                                else {
                                    _this.HideShow();
                                    _this.popupMessage("Please choose Previous Documents.", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                }
                                _this.numRecords = _this.NoOfRds;
                                _this.FillGrid(_this.numRecords);
                            }));
                        }
                        //  }
                    }
                };
                UploadDocumentsController.prototype.Close = function () {
                    location.href = "#!/SalesRepDocumentList";
                };
                UploadDocumentsController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                UploadDocumentsController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                UploadDocumentsController.prototype.loadImageFileAsURL1 = function () {
                    debugger;
                    this.filedata1 = document.getElementById("input-image-hidden1").files[0];
                    if (this.filedata1.type == "image/jpeg" || this.filedata1.type == "image/png") {
                        var reader1 = new FileReader();
                        var dataURL;
                        reader1.onload = function (readerEvt) {
                            var binaryString1 = readerEvt.target.result;
                            document.getElementById("ApplicationForm").value = btoa(binaryString1);
                        };
                        reader1.readAsBinaryString(this.filedata1);
                        // this.InsertDAR.ApplicationForm = (<HTMLInputElement>document.getElementById("ApplicationForm")).value;
                        $("#image-preview1").show();
                        $("#image-preview1").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden1").files[0]));
                        $("#img-container1").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden1").files[0]));
                        this.InsertDAR.ApplicationForm = document.getElementById("ApplicationForm").value;
                        $("#lbltipAddedComment1").text("ApplicationForm selected successfully!");
                    }
                    else if (this.filedata1.type == "application/pdf") {
                        debugger;
                        var reader1 = new FileReader();
                        reader1.onload = function (readerEvt) {
                            var binaryString1 = readerEvt.target.result;
                            document.getElementById("ApplicationForm").value = btoa(binaryString1);
                        };
                        reader1.readAsBinaryString(this.filedata1);
                        $("#image-preview1").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden1").files[0]));
                        debugger;
                        $("#img-container1").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden1").files[0]));
                        this.InsertDAR.ApplicationForm = document.getElementById("ApplicationForm").value;
                        $("#image-preview1").show();
                        document.getElementById("image-preview1").src = "../../../../Content/assets/img/pdf-128.png";
                        $("#lbltipAddedComment1").text("ApplicationForm selected successfully!");
                        //let formData: FormData = new FormData(),
                        //    xhr: XMLHttpRequest = new XMLHttpRequest();
                        //    console.log($("#input-image-hidden1").val());
                        //    if (this.filedata1 != null) {
                        //        //var size = (<HTMLInputElement>document.getElementById("inputGroupFile03")).files[0].size;
                        //        formData.append("fileData", this.filedata1);
                        //        this.UploadPDFService.UploadImage(formData).then(response => {
                        //            this.InsertDAR.ApplicationFormpdf = response.data.Result;
                        //            console.log(this.InsertDAR);
                        //        });
                        //        $("#image-preview1").hide();
                        //        $("#btnView").show();
                        //        $("#lbltipAddedComment1").text("ApplicationForm selected successfully!");
                        //    }
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL2 = function () {
                    debugger;
                    this.filedata2 = document.getElementById("input-image-hidden2").files[0];
                    debugger;
                    if (this.filedata2.type == "image/jpeg" || this.filedata2.type == "image/png") {
                        console.log(this.filedata2);
                        var reader2 = new FileReader();
                        var dataURL;
                        debugger;
                        reader2.onload = function (readerEvt) {
                            var binaryString2 = readerEvt.target.result;
                            document.getElementById("PanFormNo16").value = btoa(binaryString2);
                        };
                        reader2.readAsBinaryString(this.filedata2);
                        $("#image-preview2").show();
                        $("#image-preview2").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden2").files[0]));
                        $("#img-container2").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden2").files[0]));
                        this.InsertDAR.PanFormNo16 = document.getElementById("PanFormNo16").value;
                        $("#lbltipAddedComment2").show();
                        $("#lbltipAddedComment2").text("PanFormNo16 select successfully!");
                    }
                    else if (this.filedata2.type == "application/pdf") {
                        debugger;
                        var reader2 = new FileReader();
                        var dataURL;
                        debugger;
                        reader2.onload = function (readerEvt) {
                            var binaryString2 = readerEvt.target.result;
                            document.getElementById("PanFormNo16").value = btoa(binaryString2);
                        };
                        reader2.readAsBinaryString(this.filedata2);
                        $("#image-preview2").show();
                        $("#image-preview2").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden2").files[0]));
                        $("#img-container2").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden2").files[0]));
                        this.InsertDAR.PanFormNo16 = document.getElementById("PanFormNo16").value;
                        $("#lbltipAddedComment2").show();
                        $("#lbltipAddedComment2").text("PanFormNo16 select successfully!");
                        document.getElementById("image-preview2").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL3 = function () {
                    this.filedata3 = document.getElementById("input-image-hidden3").files[0];
                    if (this.filedata3.type == "image/jpeg" || this.filedata3.type == "image/png") {
                        var reader3 = new FileReader();
                        var dataURL;
                        reader3.onload = function (readerEvt) {
                            var binaryString3 = readerEvt.target.result;
                            document.getElementById("IDAddProof").value = btoa(binaryString3);
                        };
                        reader3.readAsBinaryString(this.filedata3);
                        $("#image-preview3").show();
                        $("#image-preview3").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden3").files[0]));
                        $("#img-container3").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden3").files[0]));
                        this.InsertDAR.IDAddProof = document.getElementById("IDAddProof").value;
                        $("#lbltipAddedComment3").show();
                        $("#lbltipAddedComment3").text("IDAddProof select successfully!");
                    }
                    else if (this.filedata3.type == "application/pdf") {
                        var reader3 = new FileReader();
                        var dataURL;
                        reader3.onload = function (readerEvt) {
                            var binaryString3 = readerEvt.target.result;
                            document.getElementById("IDAddProof").value = btoa(binaryString3);
                        };
                        reader3.readAsBinaryString(this.filedata3);
                        $("#image-preview3").show();
                        $("#image-preview3").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden3").files[0]));
                        $("#img-container3").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden3").files[0]));
                        this.InsertDAR.IDAddProof = document.getElementById("IDAddProof").value;
                        $("#lbltipAddedComment3").show();
                        $("#lbltipAddedComment3").text("IDAddProof select successfully!");
                        document.getElementById("image-preview3").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL4 = function () {
                    this.filedata4 = document.getElementById("input-image-hidden4").files[0];
                    if (this.filedata4.type == "image/jpeg" || this.filedata4.type == "image/png") {
                        var reader4 = new FileReader();
                        var dataURL;
                        reader4.onload = function (readerEvt) {
                            var binaryString4 = readerEvt.target.result;
                            document.getElementById("Photograph").value = btoa(binaryString4);
                        };
                        reader4.readAsBinaryString(this.filedata4);
                        $("#image-preview4").show();
                        $("#image-preview4").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden4").files[0]));
                        $("#img-container4").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden4").files[0]));
                        this.InsertDAR.Photograph = document.getElementById("Photograph").value;
                        $("#lbltipAddedComment4").show();
                        $("#lbltipAddedComment4").text("Photograph select successfully!");
                    }
                    else if (this.filedata4.type == "application/pdf") {
                        var reader4 = new FileReader();
                        var dataURL;
                        reader4.onload = function (readerEvt) {
                            var binaryString4 = readerEvt.target.result;
                            document.getElementById("Photograph").value = btoa(binaryString4);
                        };
                        reader4.readAsBinaryString(this.filedata4);
                        $("#image-preview4").show();
                        $("#image-preview4").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden4").files[0]));
                        $("#img-container4").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden4").files[0]));
                        this.InsertDAR.Photograph = document.getElementById("Photograph").value;
                        $("#lbltipAddedComment4").show();
                        $("#lbltipAddedComment4").text("Photograph select successfully!");
                        document.getElementById("image-preview4").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL5 = function () {
                    this.filedata5 = document.getElementById("input-image-hidden5").files[0];
                    if (this.filedata5.type == "image/jpeg" || this.filedata5.type == "image/png") {
                        var reader5 = new FileReader();
                        var dataURL;
                        reader5.onload = function (readerEvt) {
                            var binaryString5 = readerEvt.target.result;
                            document.getElementById("BankNo").value = btoa(binaryString5);
                        };
                        reader5.readAsBinaryString(this.filedata5);
                        $("#image-preview5").show();
                        $("#image-preview5").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden5").files[0]));
                        $("#img-container5").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden5").files[0]));
                        this.InsertDAR.BankNo = document.getElementById("BankNo").value;
                        $("#lbltipAddedComment5").show();
                        $("#lbltipAddedComment5").text("BankNo select successfully!");
                    }
                    else if (this.filedata5.type == "application/pdf") {
                        var reader5 = new FileReader();
                        var dataURL;
                        reader5.onload = function (readerEvt) {
                            var binaryString5 = readerEvt.target.result;
                            document.getElementById("BankNo").value = btoa(binaryString5);
                        };
                        reader5.readAsBinaryString(this.filedata5);
                        $("#image-preview5").show();
                        $("#image-preview5").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden5").files[0]));
                        $("#img-container5").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden5").files[0]));
                        this.InsertDAR.BankNo = document.getElementById("BankNo").value;
                        $("#lbltipAddedComment5").show();
                        $("#lbltipAddedComment5").text("BankNo select successfully!");
                        document.getElementById("image-preview5").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL6 = function () {
                    this.filedata6 = document.getElementById("input-image-hidden6").files[0];
                    if (this.filedata6.type == "image/jpeg" || this.filedata6.type == "image/png") {
                        var reader6 = new FileReader();
                        var dataURL;
                        reader6.onload = function (readerEvt) {
                            var binaryString6 = readerEvt.target.result;
                            document.getElementById("Doc1Pic").value = btoa(binaryString6);
                        };
                        reader6.readAsBinaryString(this.filedata6);
                        $("#image-preview6").show();
                        $("#image-preview6").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden6").files[0]));
                        $("#img-container6").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden6").files[0]));
                        this.InsertDAR.Doc1Pic = document.getElementById("Doc1Pic").value;
                        $("#lbltipAddedComment6").show();
                        $("#lbltipAddedComment6").text("Doc1Pic select successfully!");
                    }
                    else if (this.filedata6.type == "application/pdf") {
                        var reader6 = new FileReader();
                        var dataURL;
                        reader6.onload = function (readerEvt) {
                            var binaryString6 = readerEvt.target.result;
                            document.getElementById("Doc1Pic").value = btoa(binaryString6);
                        };
                        reader6.readAsBinaryString(this.filedata6);
                        $("#image-preview6").show();
                        $("#image-preview6").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden6").files[0]));
                        $("#img-container6").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden6").files[0]));
                        this.InsertDAR.Doc1Pic = document.getElementById("Doc1Pic").value;
                        $("#lbltipAddedComment6").show();
                        $("#lbltipAddedComment6").text("Doc1Pic select successfully!");
                        document.getElementById("image-preview6").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL7 = function () {
                    this.filedata7 = document.getElementById("input-image-hidden7").files[0];
                    if (this.filedata7.type == "image/jpeg" || this.filedata7.type == "image/png") {
                        var reader7 = new FileReader();
                        var dataURL;
                        reader7.onload = function (readerEvt) {
                            var binaryString7 = readerEvt.target.result;
                            document.getElementById("Doc2Pic").value = btoa(binaryString7);
                        };
                        reader7.readAsBinaryString(this.filedata7);
                        $("#image-preview7").show();
                        $("#image-preview7").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden7").files[0]));
                        $("#img-container7").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden7").files[0]));
                        this.InsertDAR.Doc2Pic = document.getElementById("Doc2Pic").value;
                        $("#lbltipAddedComment7").show();
                        $("#lbltipAddedComment7").text("Doc2Pic select successfully!");
                    }
                    else if (this.filedata7.type == "application/pdf") {
                        var reader7 = new FileReader();
                        var dataURL;
                        reader7.onload = function (readerEvt) {
                            var binaryString7 = readerEvt.target.result;
                            document.getElementById("Doc2Pic").value = btoa(binaryString7);
                        };
                        reader7.readAsBinaryString(this.filedata7);
                        $("#image-preview7").show();
                        $("#image-preview7").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden7").files[0]));
                        $("#img-container7").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden7").files[0]));
                        this.InsertDAR.Doc2Pic = document.getElementById("Doc2Pic").value;
                        $("#lbltipAddedComment7").show();
                        $("#lbltipAddedComment7").text("Doc2Pic select successfully!");
                        document.getElementById("image-preview7").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL8 = function () {
                    debugger;
                    this.filedata8 = document.getElementById("input-image-hidden8").files[0];
                    if (this.filedata8.type == "image/jpeg" || this.filedata8.type == "image/png") {
                        var reader8 = new FileReader();
                        var dataURL;
                        reader8.onload = function (readerEvt) {
                            var binaryString8 = readerEvt.target.result;
                            document.getElementById("Doc3Pic").value = btoa(binaryString8);
                        };
                        reader8.readAsBinaryString(this.filedata8);
                        $("#image-preview8").show();
                        $("#image-preview8").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden8").files[0]));
                        $("#img-container8").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden8").files[0]));
                        this.InsertDAR.Doc3Pic = document.getElementById("Doc3Pic").value;
                        $("#lbltipAddedComment8").show();
                        $("#lbltipAddedComment8").text("Doc3Pic select successfully!");
                    }
                    else if (this.filedata8.type == "application/pdf") {
                        var reader8 = new FileReader();
                        var dataURL;
                        reader8.onload = function (readerEvt) {
                            var binaryString8 = readerEvt.target.result;
                            document.getElementById("Doc3Pic").value = btoa(binaryString8);
                        };
                        reader8.readAsBinaryString(this.filedata8);
                        $("#image-preview8").show();
                        $("#image-preview8").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden8").files[0]));
                        $("#img-container8").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden8").files[0]));
                        this.InsertDAR.Doc3Pic = document.getElementById("Doc3Pic").value;
                        $("#lbltipAddedComment8").show();
                        $("#lbltipAddedComment8").text("Doc3Pic select successfully!");
                        document.getElementById("image-preview8").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL9 = function () {
                    this.filedata9 = document.getElementById("input-image-hidden9").files[0];
                    if (this.filedata9.type == "image/jpeg" || this.filedata9.type == "image/png") {
                        var reader9 = new FileReader();
                        var dataURL;
                        reader9.onload = function (readerEvt) {
                            var binaryString9 = readerEvt.target.result;
                            document.getElementById("FleetList").value = btoa(binaryString9);
                        };
                        reader9.readAsBinaryString(this.filedata9);
                        $("#image-preview9").show();
                        $("#image-preview9").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden9").files[0]));
                        $("#img-container9").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden9").files[0]));
                        this.InsertDAR.FleetList = document.getElementById("FleetList").value;
                        $("#lbltipAddedComment9").show();
                        $("#lbltipAddedComment9").text("FleetList select successfully!");
                    }
                    else if (this.filedata9.type == "application/pdf") {
                        var reader9 = new FileReader();
                        var dataURL;
                        reader9.onload = function (readerEvt) {
                            var binaryString9 = readerEvt.target.result;
                            document.getElementById("FleetList").value = btoa(binaryString9);
                        };
                        reader9.readAsBinaryString(this.filedata9);
                        $("#image-preview9").show();
                        $("#image-preview9").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden9").files[0]));
                        $("#img-container9").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden9").files[0]));
                        this.InsertDAR.FleetList = document.getElementById("FleetList").value;
                        $("#lbltipAddedComment9").show();
                        $("#lbltipAddedComment9").text("FleetList select successfully!");
                        document.getElementById("image-preview9").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL10 = function () {
                    this.filedata10 = document.getElementById("input-image-hidden10").files[0];
                    if (this.filedata10.type == "image/jpeg" || this.filedata10.type == "image/png") {
                        var reader10 = new FileReader();
                        var dataURL;
                        reader10.onload = function (readerEvt) {
                            var binaryString10 = readerEvt.target.result;
                            document.getElementById("ExistingVehicleReg").value = btoa(binaryString10);
                        };
                        reader10.readAsBinaryString(this.filedata10);
                        $("#image-preview10").show();
                        $("#image-preview10").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden10").files[0]));
                        $("#img-container10").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden10").files[0]));
                        this.InsertDAR.ExistingVehicleReg = document.getElementById("ExistingVehicleReg").value;
                        $("#lbltipAddedComment10").show();
                        $("#lbltipAddedComment10").text("ExistingVehicleReg select successfully!");
                    }
                    else if (this.filedata10.type == "application/pdf") {
                        var reader10 = new FileReader();
                        var dataURL;
                        reader10.onload = function (readerEvt) {
                            var binaryString10 = readerEvt.target.result;
                            document.getElementById("ExistingVehicleReg").value = btoa(binaryString10);
                        };
                        reader10.readAsBinaryString(this.filedata10);
                        $("#image-preview10").show();
                        $("#image-preview10").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden10").files[0]));
                        $("#img-container10").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden10").files[0]));
                        this.InsertDAR.ExistingVehicleReg = document.getElementById("ExistingVehicleReg").value;
                        $("#lbltipAddedComment10").show();
                        $("#lbltipAddedComment10").text("ExistingVehicleReg select successfully!");
                        document.getElementById("image-preview10").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL11 = function () {
                    this.filedata11 = document.getElementById("input-image-hidden11").files[0];
                    if (this.filedata11.type == "image/jpeg" || this.filedata11.type == "image/png") {
                        var reader11 = new FileReader();
                        var dataURL;
                        reader11.onload = function (readerEvt) {
                            var binaryString11 = readerEvt.target.result;
                            document.getElementById("ExistingLoanScheduleTrack").value = btoa(binaryString11);
                        };
                        reader11.readAsBinaryString(this.filedata11);
                        $("#image-preview11").show();
                        $("#image-preview11").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden11").files[0]));
                        $("#img-container11").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden11").files[0]));
                        this.InsertDAR.ExistingLoanScheduleTrack = document.getElementById("ExistingLoanScheduleTrack").value;
                        $("#lbltipAddedComment11").show();
                        $("#lbltipAddedComment11").text("ExistingLoanScheduleTrack select successfully!");
                    }
                    else if (this.filedata11.type == "application/pdf") {
                        var reader11 = new FileReader();
                        var dataURL;
                        reader11.onload = function (readerEvt) {
                            var binaryString11 = readerEvt.target.result;
                            document.getElementById("ExistingLoanScheduleTrack").value = btoa(binaryString11);
                        };
                        reader11.readAsBinaryString(this.filedata11);
                        $("#image-preview11").show();
                        $("#image-preview11").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden11").files[0]));
                        $("#img-container11").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden11").files[0]));
                        this.InsertDAR.ExistingLoanScheduleTrack = document.getElementById("ExistingLoanScheduleTrack").value;
                        $("#lbltipAddedComment11").show();
                        $("#lbltipAddedComment11").text("ExistingLoanScheduleTrack select successfully!");
                        document.getElementById("image-preview11").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL12 = function () {
                    this.filedata12 = document.getElementById("input-image-hidden12").files[0];
                    if (this.filedata12.type == "image/jpeg" || this.filedata12.type == "image/png") {
                        var reader12 = new FileReader();
                        var dataURL;
                        reader12.onload = function (readerEvt) {
                            var binaryString12 = readerEvt.target.result;
                            document.getElementById("ITRandAuditReport_CY").value = btoa(binaryString12);
                        };
                        reader12.readAsBinaryString(this.filedata12);
                        $("#image-preview12").show();
                        $("#image-preview12").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden12").files[0]));
                        $("#img-container12").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden12").files[0]));
                        this.InsertDAR.ITRandAuditReport_CY = document.getElementById("ITRandAuditReport_CY").value;
                        $("#lbltipAddedComment12").show();
                        $("#lbltipAddedComment12").text("ITRandAuditReport_CY select successfully!");
                    }
                    else if (this.filedata12.type == "application/pdf") {
                        var reader12 = new FileReader();
                        var dataURL;
                        reader12.onload = function (readerEvt) {
                            var binaryString12 = readerEvt.target.result;
                            document.getElementById("ITRandAuditReport_CY").value = btoa(binaryString12);
                        };
                        reader12.readAsBinaryString(this.filedata12);
                        $("#image-preview12").show();
                        $("#image-preview12").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden12").files[0]));
                        $("#img-container12").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden12").files[0]));
                        this.InsertDAR.ITRandAuditReport_CY = document.getElementById("ITRandAuditReport_CY").value;
                        $("#lbltipAddedComment12").show();
                        $("#lbltipAddedComment12").text("ITRandAuditReport_CY select successfully!");
                        document.getElementById("image-preview12").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL13 = function () {
                    this.filedata13 = document.getElementById("input-image-hidden13").files[0];
                    if (this.filedata13.type == "image/jpeg" || this.filedata13.type == "image/png") {
                        var reader13 = new FileReader();
                        var dataURL;
                        reader13.onload = function (readerEvt) {
                            var binaryString13 = readerEvt.target.result;
                            document.getElementById("ITRandAuditReport_CY_1").value = btoa(binaryString13);
                        };
                        reader13.readAsBinaryString(this.filedata13);
                        $("#image-preview13").show();
                        $("#image-preview13").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden13").files[0]));
                        $("#img-container13").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden13").files[0]));
                        this.InsertDAR.ITRandAuditReport_CY_1 = document.getElementById("ITRandAuditReport_CY_1").value;
                        $("#lbltipAddedComment13").show();
                        $("#lbltipAddedComment13").text("ITRandAuditReport_CY_1 select successfully!");
                    }
                    else if (this.filedata13.type == "application/pdf") {
                        var reader13 = new FileReader();
                        var dataURL;
                        reader13.onload = function (readerEvt) {
                            var binaryString13 = readerEvt.target.result;
                            document.getElementById("ITRandAuditReport_CY_1").value = btoa(binaryString13);
                        };
                        reader13.readAsBinaryString(this.filedata13);
                        $("#image-preview13").show();
                        $("#image-preview13").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden13").files[0]));
                        $("#img-container13").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden13").files[0]));
                        this.InsertDAR.ITRandAuditReport_CY_1 = document.getElementById("ITRandAuditReport_CY_1").value;
                        $("#lbltipAddedComment13").show();
                        $("#lbltipAddedComment13").text("ITRandAuditReport_CY_1 select successfully!");
                        document.getElementById("image-preview13").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL14 = function () {
                    this.filedata14 = document.getElementById("input-image-hidden14").files[0];
                    if (this.filedata14.type == "image/jpeg" || this.filedata14.type == "image/png") {
                        var reader14 = new FileReader();
                        var dataURL;
                        reader14.onload = function (readerEvt) {
                            var binaryString14 = readerEvt.target.result;
                            document.getElementById("WorkOrder_IfAvailable").value = btoa(binaryString14);
                        };
                        reader14.readAsBinaryString(this.filedata14);
                        $("#image-preview14").show();
                        $("#image-preview14").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden14").files[0]));
                        $("#img-container14").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden14").files[0]));
                        this.InsertDAR.WorkOrder_IfAvailable = document.getElementById("WorkOrder_IfAvailable").value;
                        $("#lbltipAddedComment14").show();
                        $("#lbltipAddedComment14").text("WorkOrder_IfAvailable select successfully!");
                    }
                    else if (this.filedata14.type == "application/pdf") {
                        var reader14 = new FileReader();
                        var dataURL;
                        reader14.onload = function (readerEvt) {
                            var binaryString14 = readerEvt.target.result;
                            document.getElementById("WorkOrder_IfAvailable").value = btoa(binaryString14);
                        };
                        reader14.readAsBinaryString(this.filedata14);
                        $("#image-preview14").show();
                        $("#image-preview14").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden14").files[0]));
                        $("#img-container14").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden14").files[0]));
                        this.InsertDAR.WorkOrder_IfAvailable = document.getElementById("WorkOrder_IfAvailable").value;
                        $("#lbltipAddedComment14").show();
                        $("#lbltipAddedComment14").text("WorkOrder_IfAvailable select successfully!");
                        document.getElementById("image-preview14").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL15 = function () {
                    this.filedata15 = document.getElementById("input-image-hidden15").files[0];
                    if (this.filedata15.type == "image/jpeg" || this.filedata15.type == "image/png") {
                        var reader15 = new FileReader();
                        var dataURL;
                        reader15.onload = function (readerEvt) {
                            var binaryString15 = readerEvt.target.result;
                            document.getElementById("CertiIncorp").value = btoa(binaryString15);
                        };
                        reader15.readAsBinaryString(this.filedata15);
                        $("#image-preview15").show();
                        $("#image-preview15").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden15").files[0]));
                        $("#img-container15").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden15").files[0]));
                        this.InsertDAR.CertiIncorp = document.getElementById("CertiIncorp").value;
                        $("#lbltipAddedComment15").show();
                        $("#lbltipAddedComment15").text("CertiIncorp select successfully!");
                    }
                    else if (this.filedata15.type == "application/pdf") {
                        var reader15 = new FileReader();
                        var dataURL;
                        reader15.onload = function (readerEvt) {
                            var binaryString15 = readerEvt.target.result;
                            document.getElementById("CertiIncorp").value = btoa(binaryString15);
                        };
                        reader15.readAsBinaryString(this.filedata15);
                        $("#image-preview15").show();
                        $("#image-preview15").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden15").files[0]));
                        $("#img-container15").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden15").files[0]));
                        this.InsertDAR.CertiIncorp = document.getElementById("CertiIncorp").value;
                        $("#lbltipAddedComment15").show();
                        $("#lbltipAddedComment15").text("CertiIncorp select successfully!");
                        document.getElementById("image-preview15").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL16 = function () {
                    this.filedata16 = document.getElementById("input-image-hidden16").files[0];
                    if (this.filedata16.type == "image/jpeg" || this.filedata16.type == "image/png") {
                        var reader16 = new FileReader();
                        var dataURL;
                        reader16.onload = function (readerEvt) {
                            var binaryString16 = readerEvt.target.result;
                            document.getElementById("MemoandArticle").value = btoa(binaryString16);
                        };
                        reader16.readAsBinaryString(this.filedata16);
                        $("#image-preview16").show();
                        $("#image-preview16").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden16").files[0]));
                        $("#img-container16").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden16").files[0]));
                        this.InsertDAR.MemoandArticle = document.getElementById("MemoandArticle").value;
                        $("#lbltipAddedComment16").show();
                        $("#lbltipAddedComment16").text("MemoandArticle select successfully!");
                    }
                    else if (this.filedata16.type == "application/pdf") {
                        var reader16 = new FileReader();
                        var dataURL;
                        reader16.onload = function (readerEvt) {
                            var binaryString16 = readerEvt.target.result;
                            document.getElementById("MemoandArticle").value = btoa(binaryString16);
                        };
                        reader16.readAsBinaryString(this.filedata16);
                        $("#image-preview16").show();
                        $("#image-preview16").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden16").files[0]));
                        $("#img-container16").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden16").files[0]));
                        this.InsertDAR.MemoandArticle = document.getElementById("MemoandArticle").value;
                        $("#lbltipAddedComment16").show();
                        $("#lbltipAddedComment16").text("MemoandArticle select successfully!");
                        document.getElementById("image-preview16").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL17 = function () {
                    this.filedata17 = document.getElementById("input-image-hidden17").files[0];
                    if (this.filedata17.type == "image/jpeg" || this.filedata17.type == "image/png") {
                        var reader17 = new FileReader();
                        var dataURL;
                        reader17.onload = function (readerEvt) {
                            var binaryString17 = readerEvt.target.result;
                            document.getElementById("PANofCompany").value = btoa(binaryString17);
                        };
                        reader17.readAsBinaryString(this.filedata17);
                        $("#image-preview17").show();
                        $("#image-preview17").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden17").files[0]));
                        $("#img-container17").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden17").files[0]));
                        this.InsertDAR.PANofCompany = document.getElementById("PANofCompany").value;
                        $("#lbltipAddedComment17").show();
                        $("#lbltipAddedComment17").text("PANofCompany select successfully!");
                    }
                    else if (this.filedata17.type == "application/pdf") {
                        var reader17 = new FileReader();
                        var dataURL;
                        reader17.onload = function (readerEvt) {
                            var binaryString17 = readerEvt.target.result;
                            document.getElementById("PANofCompany").value = btoa(binaryString17);
                        };
                        reader17.readAsBinaryString(this.filedata17);
                        $("#image-preview17").show();
                        $("#image-preview17").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden17").files[0]));
                        $("#img-container17").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden17").files[0]));
                        this.InsertDAR.PANofCompany = document.getElementById("PANofCompany").value;
                        $("#lbltipAddedComment17").show();
                        $("#lbltipAddedComment17").text("PANofCompany select successfully!");
                        document.getElementById("image-preview17").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL18 = function () {
                    this.filedata18 = document.getElementById("input-image-hidden18").files[0];
                    if (this.filedata18.type == "image/jpeg" || this.filedata18.type == "image/png") {
                        var reader18 = new FileReader();
                        var dataURL;
                        reader18.onload = function (readerEvt) {
                            var binaryString18 = readerEvt.target.result;
                            document.getElementById("ExtractRegiComp").value = btoa(binaryString18);
                        };
                        reader18.readAsBinaryString(this.filedata18);
                        $("#image-preview18").show();
                        $("#image-preview18").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden18").files[0]));
                        $("#img-container18").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden18").files[0]));
                        this.InsertDAR.ExtractRegiComp = document.getElementById("ExtractRegiComp").value;
                        $("#lbltipAddedComment18").show();
                        $("#lbltipAddedComment18").text("ExtractRegiComp select successfully!");
                    }
                    else if (this.filedata18.type == "application/pdf") {
                        var reader18 = new FileReader();
                        var dataURL;
                        reader18.onload = function (readerEvt) {
                            var binaryString18 = readerEvt.target.result;
                            document.getElementById("ExtractRegiComp").value = btoa(binaryString18);
                        };
                        reader18.readAsBinaryString(this.filedata18);
                        $("#image-preview18").show();
                        $("#image-preview18").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden18").files[0]));
                        $("#img-container18").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden18").files[0]));
                        this.InsertDAR.ExtractRegiComp = document.getElementById("ExtractRegiComp").value;
                        $("#lbltipAddedComment18").show();
                        $("#lbltipAddedComment18").text("ExtractRegiComp select successfully!");
                        document.getElementById("image-preview18").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL19 = function () {
                    this.filedata19 = document.getElementById("input-image-hidden19").files[0];
                    if (this.filedata19.type == "image/jpeg" || this.filedata19.type == "image/png") {
                        var reader19 = new FileReader();
                        var dataURL;
                        reader19.onload = function (readerEvt) {
                            var binaryString19 = readerEvt.target.result;
                            document.getElementById("ResolutionBoard").value = btoa(binaryString19);
                        };
                        reader19.readAsBinaryString(this.filedata19);
                        $("#image-preview19").show();
                        $("#image-preview19").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden19").files[0]));
                        $("#img-container19").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden19").files[0]));
                        this.InsertDAR.ResolutionBoard = document.getElementById("ResolutionBoard").value;
                        $("#lbltipAddedComment19").show();
                        $("#lbltipAddedComment19").text("ResolutionBoard select successfully!");
                    }
                    else if (this.filedata19.type == "application/pdf") {
                        var reader19 = new FileReader();
                        var dataURL;
                        reader19.onload = function (readerEvt) {
                            var binaryString19 = readerEvt.target.result;
                            document.getElementById("ResolutionBoard").value = btoa(binaryString19);
                        };
                        reader19.readAsBinaryString(this.filedata19);
                        $("#image-preview19").show();
                        $("#image-preview19").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden19").files[0]));
                        $("#img-container19").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden19").files[0]));
                        this.InsertDAR.ResolutionBoard = document.getElementById("ResolutionBoard").value;
                        $("#lbltipAddedComment19").show();
                        $("#lbltipAddedComment19").text("ResolutionBoard select successfully!");
                        document.getElementById("image-preview19").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL20 = function () {
                    this.filedata20 = document.getElementById("input-image-hidden20").files[0];
                    if (this.filedata20.type == "image/jpeg" || this.filedata20.type == "image/png") {
                        var reader20 = new FileReader();
                        var dataURL;
                        reader20.onload = function (readerEvt) {
                            var binaryString20 = readerEvt.target.result;
                            document.getElementById("LegalSuits").value = btoa(binaryString20);
                        };
                        reader20.readAsBinaryString(this.filedata20);
                        $("#image-preview20").show();
                        $("#image-preview20").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden20").files[0]));
                        $("#img-container20").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden20").files[0]));
                        this.InsertDAR.LegalSuits = document.getElementById("LegalSuits").value;
                        $("#lbltipAddedComment20").show();
                        $("#lbltipAddedComment20").text("LegalSuits select successfully!");
                    }
                    else if (this.filedata20.type == "application/pdf") {
                        var reader20 = new FileReader();
                        var dataURL;
                        reader20.onload = function (readerEvt) {
                            var binaryString20 = readerEvt.target.result;
                            document.getElementById("LegalSuits").value = btoa(binaryString20);
                        };
                        reader20.readAsBinaryString(this.filedata20);
                        $("#image-preview20").show();
                        $("#image-preview20").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden20").files[0]));
                        $("#img-container20").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden20").files[0]));
                        this.InsertDAR.LegalSuits = document.getElementById("LegalSuits").value;
                        $("#lbltipAddedComment20").show();
                        $("#lbltipAddedComment20").text("LegalSuits select successfully!");
                        document.getElementById("image-preview20").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL21 = function () {
                    debugger;
                    this.filedata21 = document.getElementById("input-image-hidden21").files[0];
                    if (this.filedata21.type == "image/jpeg" || this.filedata21.type == "image/png") {
                        var reader14 = new FileReader();
                        var dataURL;
                        reader14.onload = function (readerEvt) {
                            var binaryString14 = readerEvt.target.result;
                            document.getElementById("WorkOrder_IfAvailable").value = btoa(binaryString14);
                        };
                        reader14.readAsBinaryString(this.filedata21);
                        $("#image-preview21").show();
                        $("#image-preview21").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden21").files[0]));
                        $("#img-container21").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden21").files[0]));
                        this.InsertDAR.WorkOrder_IfAvailable = document.getElementById("WorkOrder_IfAvailable").value;
                        $("#lbltipAddedComment14").show();
                        $("#lbltipAddedComment14").text("WorkOrder_IfAvailable select successfully!");
                    }
                    else if (this.filedata21.type == "application/pdf") {
                        var reader14 = new FileReader();
                        var dataURL;
                        reader14.onload = function (readerEvt) {
                            var binaryString14 = readerEvt.target.result;
                            document.getElementById("WorkOrder_IfAvailable").value = btoa(binaryString14);
                        };
                        reader14.readAsBinaryString(this.filedata21);
                        $("#image-preview21").show();
                        $("#image-preview21").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden21").files[0]));
                        $("#img-container21").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden21").files[0]));
                        this.InsertDAR.WorkOrder_IfAvailable = document.getElementById("WorkOrder_IfAvailable").value;
                        $("#lbltipAddedComment14").show();
                        $("#lbltipAddedComment14").text("WorkOrder_IfAvailable select successfully!");
                        document.getElementById("image-preview21").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL22 = function () {
                    debugger;
                    this.filedata22 = document.getElementById("input-image-hidden22").files[0];
                    if (this.filedata22.type == "image/jpeg" || this.filedata22.type == "image/png") {
                        var reader9 = new FileReader();
                        var dataURL;
                        reader9.onload = function (readerEvt) {
                            var binaryString9 = readerEvt.target.result;
                            document.getElementById("FleetList").value = btoa(binaryString9);
                        };
                        reader9.readAsBinaryString(this.filedata22);
                        $("#image-preview22").show();
                        $("#image-preview22").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden22").files[0]));
                        $("#img-container22").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden22").files[0]));
                        this.InsertDAR.FleetList = document.getElementById("FleetList").value;
                        $("#lbltipAddedComment9").show();
                        $("#lbltipAddedComment9").text("FleetList select successfully!");
                    }
                    else if (this.filedata22.type == "application/pdf") {
                        var reader9 = new FileReader();
                        var dataURL;
                        reader9.onload = function (readerEvt) {
                            var binaryString9 = readerEvt.target.result;
                            document.getElementById("FleetList").value = btoa(binaryString9);
                        };
                        reader9.readAsBinaryString(this.filedata22);
                        $("#image-preview22").show();
                        $("#image-preview22").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden22").files[0]));
                        $("#img-container22").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden22").files[0]));
                        this.InsertDAR.FleetList = document.getElementById("FleetList").value;
                        $("#lbltipAddedComment9").show();
                        $("#lbltipAddedComment9").text("FleetList select successfully!");
                        document.getElementById("image-preview22").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL23 = function () {
                    debugger;
                    this.filedata23 = document.getElementById("input-image-hidden23").files[0];
                    if (this.filedata23.type == "image/jpeg" || this.filedata23.type == "image/png") {
                        var reader12 = new FileReader();
                        var dataURL;
                        reader12.onload = function (readerEvt) {
                            var binaryString12 = readerEvt.target.result;
                            document.getElementById("ITRandAuditReport_CY").value = btoa(binaryString12);
                        };
                        reader12.readAsBinaryString(this.filedata23);
                        $("#image-preview23").show();
                        $("#image-preview23").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden23").files[0]));
                        $("#img-container23").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden23").files[0]));
                        this.InsertDAR.ITRandAuditReport_CY = document.getElementById("ITRandAuditReport_CY").value;
                        $("#lbltipAddedComment12").show();
                        $("#lbltipAddedComment12").text("ITRandAuditReport_CY select successfully!");
                    }
                    else if (this.filedata23.type == "application/pdf") {
                        var reader12 = new FileReader();
                        var dataURL;
                        reader12.onload = function (readerEvt) {
                            var binaryString12 = readerEvt.target.result;
                            document.getElementById("ITRandAuditReport_CY").value = btoa(binaryString12);
                        };
                        reader12.readAsBinaryString(this.filedata23);
                        $("#image-preview23").show();
                        $("#image-preview23").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden23").files[0]));
                        $("#img-container23").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden23").files[0]));
                        this.InsertDAR.ITRandAuditReport_CY = document.getElementById("ITRandAuditReport_CY").value;
                        $("#lbltipAddedComment12").show();
                        $("#lbltipAddedComment12").text("ITRandAuditReport_CY select successfully!");
                        document.getElementById("image-preview23").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL24 = function () {
                    debugger;
                    this.filedata24 = document.getElementById("input-image-hidden24").files[0];
                    if (this.filedata24.type == "image/jpeg" || this.filedata24.type == "image/png") {
                        var reader13 = new FileReader();
                        var dataURL;
                        reader13.onload = function (readerEvt) {
                            var binaryString13 = readerEvt.target.result;
                            document.getElementById("ITRandAuditReport_CY_1").value = btoa(binaryString13);
                        };
                        reader13.readAsBinaryString(this.filedata24);
                        $("#image-preview24").show();
                        $("#image-preview24").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden24").files[0]));
                        $("#img-container24").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden24").files[0]));
                        this.InsertDAR.ITRandAuditReport_CY_1 = document.getElementById("ITRandAuditReport_CY_1").value;
                        $("#lbltipAddedComment13").show();
                        $("#lbltipAddedComment13").text("ITRandAuditReport_CY_1 select successfully!");
                    }
                    else if (this.filedata24.type == "application/pdf") {
                        var reader13 = new FileReader();
                        var dataURL;
                        reader13.onload = function (readerEvt) {
                            var binaryString13 = readerEvt.target.result;
                            document.getElementById("ITRandAuditReport_CY_1").value = btoa(binaryString13);
                        };
                        reader13.readAsBinaryString(this.filedata24);
                        $("#image-preview24").show();
                        $("#image-preview24").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden24").files[0]));
                        $("#img-container24").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden24").files[0]));
                        this.InsertDAR.ITRandAuditReport_CY_1 = document.getElementById("ITRandAuditReport_CY_1").value;
                        $("#lbltipAddedComment13").show();
                        $("#lbltipAddedComment13").text("ITRandAuditReport_CY_1 select successfully!");
                        document.getElementById("image-preview24").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.prototype.loadImageFileAsURL25 = function () {
                    this.filedata25 = document.getElementById("input-image-hidden25").files[0];
                    if (this.filedata25.type == "image/jpeg" || this.filedata25.type == "image/png") {
                        var reader10 = new FileReader();
                        var dataURL;
                        reader10.onload = function (readerEvt) {
                            var binaryString10 = readerEvt.target.result;
                            document.getElementById("ExistingVehicleReg").value = btoa(binaryString10);
                        };
                        reader10.readAsBinaryString(this.filedata25);
                        $("#image-preview25").show();
                        $("#image-preview25").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden25").files[0]));
                        $("#img-container25").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden25").files[0]));
                        this.InsertDAR.ExistingVehicleReg = document.getElementById("ExistingVehicleReg").value;
                        $("#lbltipAddedComment10").show();
                        $("#lbltipAddedComment10").text("ExistingVehicleReg select successfully!");
                    }
                    else if (this.filedata25.type == "application/pdf") {
                        var reader10 = new FileReader();
                        var dataURL;
                        reader10.onload = function (readerEvt) {
                            var binaryString10 = readerEvt.target.result;
                            document.getElementById("ExistingVehicleReg").value = btoa(binaryString10);
                        };
                        reader10.readAsBinaryString(this.filedata25);
                        $("#image-preview25").show();
                        $("#image-preview25").attr("src", window.URL.createObjectURL(document.getElementById("input-image-hidden25").files[0]));
                        $("#img-container25").attr("href", window.URL.createObjectURL(document.getElementById("input-image-hidden25").files[0]));
                        this.InsertDAR.ExistingVehicleReg = document.getElementById("ExistingVehicleReg").value;
                        $("#lbltipAddedComment10").show();
                        $("#lbltipAddedComment10").text("ExistingVehicleReg select successfully!");
                        document.getElementById("image-preview25").src = "../../../../Content/assets/img/pdf-128.png";
                    }
                };
                UploadDocumentsController.$inject = ["CreateDARUploadService", "GetDARDetails", "InsertUpdateDARService", "UploadPDFService", "EditDARDetailsService", "ViewDARDetailsService", "$location", "$cookieStore"];
                return UploadDocumentsController;
            }());
            var UploadDocumentsComponentController = /** @class */ (function () {
                function UploadDocumentsComponentController() {
                    this.controller = UploadDocumentsController;
                    this.templateUrl = "/Scripts/App/UploadDocuments/Template/UploadDocuments.html";
                }
                UploadDocumentsComponentController.Name = "uploaddocumentscomponent";
                return UploadDocumentsComponentController;
            }());
            app.AddComponent(UploadDocumentsComponentController.Name, new UploadDocumentsComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UploadDocumentsComponent.js.map