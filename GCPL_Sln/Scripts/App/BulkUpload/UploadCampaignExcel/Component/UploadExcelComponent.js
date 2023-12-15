var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var UploadExcelController = /** @class */ (function () {
                function UploadExcelController(_CampaignService, _cookieStore, _service) {
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
                    this.CampaignDropDown = null;
                    this.showLoader = false;
                    this.Cookie = null;
                    this.CampaignService = _CampaignService;
                    this.Cookie = _cookieStore;
                    this.service = _service;
                    this.UploadExcelModel = new GCPL.Model.UploadExcelModel();
                }
                UploadExcelController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                UploadExcelController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.CampaignDropDown = this.CampaignService.Find().then((function (response) {
                        _this.CampaignDropDown = _this.CampaignService.GetCampaignName(response.data.Result);
                    }));
                };
                //ExcelUpload(): void {
                //    let formData: FormData = new FormData(),
                //        xhr: XMLHttpRequest = new XMLHttpRequest();
                //    this.file = (<HTMLInputElement>document.getElementById("inputGroupFile03")).files[0];
                //}
                UploadExcelController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    this.showLoader = true;
                    this.UploadExcelModel.UserID = this.Cookie.get('UserInfo')['UserID'];
                    var formData = new FormData(), xhr = new XMLHttpRequest();
                    this.file = document.getElementById("inputGroupFile03").files[0];
                    console.log(this.file);
                    console.log($("#inputGroupFile03").val());
                    if (this.file != null) {
                        //var size = (<HTMLInputElement>document.getElementById("inputGroupFile03")).files[0].size;
                        formData.append("fileData", this.file);
                        this.service.UploadImage(formData).then(function (response) {
                            _this.UploadExcelModel.FileName = response.data.Result;
                            console.log(_this.UploadExcelModel);
                            _this.service.postVRPExcelData(_this.UploadExcelModel).then(function (response) {
                                console.log(response.data.result);
                                if (response.data.Result == "Success") {
                                    // this.showTemplateList();
                                    _this.UploadExcelModel = null;
                                    $("#errorclose").hide();
                                    $("#close").show();
                                    _this.popupMessage("Data saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                                    document.getElementById("inputGroupFile03").value = null;
                                    _this.showLoader = false;
                                }
                                else {
                                    _this.HideShow();
                                    _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                    _this.showLoader = false;
                                }
                            }, function (error) {
                                _this.HideShow();
                                _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                                _this.showLoader = false;
                            });
                        });
                    }
                };
                UploadExcelController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                UploadExcelController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                UploadExcelController.prototype.exportTableToCSV = function (filename) {
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
                UploadExcelController.prototype.downloadCSV = function (csv, filename) {
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
                UploadExcelController.prototype.Close = function () {
                    location.href = "#!/UploadCampaignData";
                };
                UploadExcelController.$inject = ["CampaignddService", "$cookieStore", "UploadVRPExcelService"];
                return UploadExcelController;
            }());
            var UploadExcelComponentController = /** @class */ (function () {
                function UploadExcelComponentController() {
                    this.controller = UploadExcelController;
                    this.templateUrl = "/Scripts/App/BulkUpload/UploadCampaignExcel/Template/_UploadExcel.html";
                }
                UploadExcelComponentController.Name = "uploadexcelcomponent";
                return UploadExcelComponentController;
            }());
            app.AddComponent(UploadExcelComponentController.Name, new UploadExcelComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=UploadExcelComponent.js.map