var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var GSTCalculation = GCPL.Model.TotalPriceModel;
            var UpdateQuote = GCPL.Model.UpdateQuotationModel;
            var EditQuotationController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function EditQuotationController(_EditService, _Accessory1Service, _Option1Service, _Accessory2Service, _Option2Service, _Accessory3Service, _Option3Service, _Accessory4Service, _Option4Service, _Accessory5Service, _Option5Service, _Accessory6Service, _Option6Service, _TotalPriceCalService, _TCService, _UpdateService, _PFService, _ProdFService, $location, _cookieStore) {
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
                    this.Accessory1DropDown = null;
                    this.Option1DropDown = null;
                    this.Accessory2DropDown = null;
                    this.Option2DropDown = null;
                    this.Accessory3DropDown = null;
                    this.Option3DropDown = null;
                    this.Accessory4DropDown = null;
                    this.Option4DropDown = null;
                    this.Accessory5DropDown = null;
                    this.Option5DropDown = null;
                    this.Accessory6DropDown = null;
                    this.Option6DropDown = null;
                    this.EditQuotation = null;
                    this.Cookie = null;
                    this.ViewTC = null;
                    //QuotationRefernce = null;
                    this.OpportunitySAPNo = null;
                    this.UserID = null;
                    this.SearchEdit = null;
                    this.Total = null;
                    this.Update = null;
                    this.ViewPF = null;
                    this.ModelID = null;
                    this.ViewProdF = null;
                    this.TotalPriceModel = null;
                    this.EditService = _EditService;
                    this.Accessory1Service = _Accessory1Service;
                    this.Option1Service = _Option1Service;
                    this.Accessory2Service = _Accessory2Service;
                    this.Option2Service = _Option2Service;
                    this.Accessory3Service = _Accessory3Service;
                    this.Option3Service = _Option3Service;
                    this.Accessory4Service = _Accessory4Service;
                    this.Option4Service = _Option4Service;
                    this.Accessory5Service = _Accessory5Service;
                    this.Option5Service = _Option5Service;
                    this.Accessory6Service = _Accessory6Service;
                    this.Option6Service = _Option6Service;
                    this.TotalPriceCalService = _TotalPriceCalService;
                    this.TCService = _TCService;
                    this.TotalPriceModel = new GSTCalculation();
                    this.UpdateService = _UpdateService;
                    this.Update = new UpdateQuote();
                    this.OpportunitySAPNo = $location.search().OpportunitySAPNo;
                    this.PFService = _PFService;
                    this.ProdFService = _ProdFService;
                    this.Cookie = _cookieStore;
                    this.UserID = this.Cookie.get('UserInfo')['UserID'];
                    console.log(this.OpportunitySAPNo);
                }
                EditQuotationController.prototype.$onInit = function () {
                    this.Init();
                    $("#errorclose").hide();
                    $("#close").hide();
                };
                //Page Load Define Values//
                EditQuotationController.prototype.Init = function () {
                    if (this.OpportunitySAPNo != undefined || this.OpportunitySAPNo != null || this.OpportunitySAPNo != "") {
                        this.EditQuote(this.OpportunitySAPNo);
                        //$('#Heading').hide();
                    }
                    $("#errorclose").hide();
                    $("#close").hide();
                    var n1 = new Date();
                    var y1 = n1.getFullYear();
                    var months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    var m1 = months1[n1.getMonth()];
                    var d1 = n1.getDate();
                    document.getElementById("txtFromDate").innerHTML = d1 + " " + m1 + " " + y1;
                    $('#txtFromDate').val(d1 + " " + m1 + " " + y1);
                    //$("#txtFromDate").datepicker({ maxDate: 0 });
                    document.getElementById("txtFromDate").value;
                    $("#txtFromDate").datepicker({
                        dateFormat: 'dd M yy',
                        changeMonth: true,
                        changeYear: true,
                        maxDate: 0,
                        onSelect: this.selectFromDate
                    });
                };
                EditQuotationController.prototype.selectFromDate = function (e) {
                    document.getElementById("txtFromDate").value = e;
                };
                EditQuotationController.prototype.Calculate = function () {
                    this.Update.TotalPrice = null;
                    this.Update.TotalTax = null;
                };
                EditQuotationController.prototype.Calculate1 = function () {
                    this.Update.TotalPrice = null;
                    this.Update.TotalTax = null;
                };
                EditQuotationController.prototype.CheckPrice = function () {
                    var _this = this;
                    this.Update.TotalPrice = null;
                    this.Update.TotalTax = null;
                    this.TotalPriceModel.Price = this.Update.Price;
                    this.TotalPriceModel.Quantity = this.Update.Quantity;
                    this.TotalPriceModel.GSTRate = this.Update.GSTRate;
                    this.Total = this.TotalPriceCalService.FindChange(this.TotalPriceModel).then((function (response) {
                        _this.Total = _this.TotalPriceCalService.GetTotalPriceChange(response.data.Result);
                        _this.Update.Price = null;
                        _this.Update.Quantity = null;
                        _this.Update.GSTRate = null;
                        _this.Update.Price = _this.Total.Price;
                        _this.Update.TotalPrice = _this.Total.TotalPrice;
                        _this.Update.TotalTax = _this.Total.TotalTax;
                        _this.Update.Quantity = _this.Total.Quantity;
                        _this.Update.GSTRate = _this.Total.GSTRate;
                        //this.TotalPriceModel.Quantity = this.Total.Quantity;
                        // this.TotalPriceModel.ConvertedGST = this.Total.ConvertedGST;
                    }));
                };
                EditQuotationController.prototype.EditQuote = function (data) {
                    var _this = this;
                    // this.SearchEdit.OpportunitySAPNo = this.OpportunitySAPNo;
                    //this.SearchEdit.QuotationRefernce = this.QuotationRefernce;
                    this.EditService.Find(this.OpportunitySAPNo).then((function (response) {
                        _this.EditQuotation = _this.EditService.EditQuote(response.data.Result);
                        console.log(_this.EditQuotation.Accessory1ID);
                        _this.Update.QuoteRange = _this.EditQuotation.QuotationRefernce.toString();
                        _this.Update.Price = _this.EditQuotation.Price;
                        _this.Update.Quantity = _this.EditQuotation.Quantity;
                        _this.Update.GSTRate = _this.EditQuotation.GSTRate;
                        _this.Update.ModelID = _this.EditQuotation.ModelID;
                        _this.Update.TotalPrice = _this.EditQuotation.TotalInvestment;
                        _this.Update.TotalTax = _this.EditQuotation.GSTAmount;
                        _this.Update.QuoteDate = _this.EditQuotation.QuotationDate;
                        _this.Update.Accessory1ID = _this.EditQuotation.Accessory1ID;
                        _this.Update.Accessory2ID = _this.EditQuotation.Accessory2ID;
                        _this.Update.Accessory3ID = _this.EditQuotation.Accessory3ID;
                        _this.Update.Accessory4ID = _this.EditQuotation.Accessory4ID;
                        _this.Update.Accessory5ID = _this.EditQuotation.Accessory5ID;
                        _this.Update.Accessory6ID = _this.EditQuotation.Accessory6ID;
                        _this.Update.ModelID = _this.EditQuotation.ModelID.toString();
                        _this.Accessory1DropDown = _this.Accessory1Service.Find(_this.Update.ModelID).then((function (response) {
                            _this.Accessory1DropDown = _this.Accessory1Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory1ID = this.Accessory1DropDown[0].Accessory1ID.toString();
                        }));
                        _this.Accessory2DropDown = _this.Accessory2Service.Find(_this.Update.ModelID).then((function (response) {
                            _this.Accessory2DropDown = _this.Accessory2Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory2ID = this.Accessory2DropDown[0].Accessory2ID.toString();
                        }));
                        _this.Accessory3DropDown = _this.Accessory3Service.Find(_this.Update.ModelID).then((function (response) {
                            _this.Accessory3DropDown = _this.Accessory3Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory3ID = this.Accessory3DropDown[0].Accessory3ID.toString();
                        }));
                        _this.Accessory4DropDown = _this.Accessory4Service.Find(_this.Update.ModelID).then((function (response) {
                            _this.Accessory4DropDown = _this.Accessory4Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory4ID = this.Accessory4DropDown[0].Accessory4ID.toString();
                        }));
                        _this.Accessory5DropDown = _this.Accessory5Service.Find(_this.Update.ModelID).then((function (response) {
                            _this.Accessory5DropDown = _this.Accessory5Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory5ID = this.Accessory5DropDown[0].Accessory5ID.toString();
                        }));
                        _this.Accessory6DropDown = _this.Accessory6Service.Find(_this.Update.ModelID).then((function (response) {
                            _this.Accessory6DropDown = _this.Accessory6Service.GetAccessoryName(response.data.Result);
                            // this.Update.Accessory6ID = this.Accessory6DropDown[0].Accessory6ID.toString();
                        }));
                        _this.GetOption1(_this.Update.Accessory1ID);
                        _this.GetOption2(_this.Update.Accessory2ID);
                        _this.GetOption3(_this.Update.Accessory3ID);
                        _this.GetOption4(_this.Update.Accessory4ID);
                        _this.GetOption5(_this.Update.Accessory5ID);
                        _this.GetOption6(_this.Update.Accessory6ID);
                        _this.Update.Option1ID = _this.EditQuotation.Option1ID;
                        _this.Update.Option2ID = _this.EditQuotation.Option2ID;
                        _this.Update.Option3ID = _this.EditQuotation.Option3ID;
                        _this.Update.Option4ID = _this.EditQuotation.Option4ID;
                        _this.Update.Option5ID = _this.EditQuotation.Option5ID;
                        _this.Update.Option6ID = _this.EditQuotation.Option6ID;
                        $('.CP-class').click(function () {
                            //window.alert($('.pf-class').index(this));
                            var ino = $('.CP-class').index(this) + 1;
                            $(this).attr('id', 'chkCapability' + ino);
                        });
                        _this.Update.Capability1 = _this.EditQuotation.C1.toString();
                        _this.Update.Capability2 = _this.EditQuotation.C2.toString();
                        _this.Update.Capability3 = _this.EditQuotation.C3.toString();
                        _this.Update.Capability4 = _this.EditQuotation.C4.toString();
                        _this.Update.Capability5 = _this.EditQuotation.C5.toString();
                        _this.Update.Capability6 = _this.EditQuotation.C6.toString();
                        $('.OF-class').click(function () {
                            //window.alert($('.pf-class').index(this));
                            var ino = $('.OF-class').index(this) + 1;
                            $(this).attr('id', 'chkOffer' + ino);
                        });
                        _this.Update.Offer1 = _this.EditQuotation.OF1.toString();
                        _this.Update.Offer2 = _this.EditQuotation.OF2.toString();
                        _this.Update.Offer3 = _this.EditQuotation.OF3.toString();
                        _this.Update.Offer4 = _this.EditQuotation.OF4.toString();
                        _this.Update.Offer5 = _this.EditQuotation.OF5.toString();
                        _this.Update.Offer6 = _this.EditQuotation.OF6.toString();
                        if (_this.Update.ModelID == "8") {
                            $('.pf-class').click(function () {
                                //window.alert($('.pf-class').index(this));
                                var ino = $('.pf-class').index(this) + 1;
                                $(this).attr('id', 'chkPF' + ino);
                            });
                        }
                        else if (_this.Update.ModelID == "53") {
                            $('.pf-class').click(function () {
                                //window.alert($('.pf-class').index(this));
                                var ino = $('.pf-class').index(this) + 8;
                                $(this).attr('id', 'chkPF' + ino);
                            });
                        }
                        else if (_this.Update.ModelID == "4") {
                            $('.pf-class').click(function () {
                                //window.alert($('.pf-class').index(this));
                                var ino = $('.pf-class').index(this) + 13;
                                $(this).attr('id', 'chkPF' + ino);
                            });
                        }
                        else if (_this.Update.ModelID == "5") {
                            $('.pf-class').click(function () {
                                //window.alert($('.pf-class').index(this));
                                var ino = $('.pf-class').index(this) + 17;
                                $(this).attr('id', 'chkPF' + ino);
                            });
                        }
                        _this.Update.PF1 = _this.EditQuotation.PF1.toString();
                        _this.Update.PF2 = _this.EditQuotation.PF2.toString();
                        _this.Update.PF3 = _this.EditQuotation.PF3.toString();
                        _this.Update.PF4 = _this.EditQuotation.PF4.toString();
                        _this.Update.PF5 = _this.EditQuotation.PF5.toString();
                        _this.Update.PF6 = _this.EditQuotation.PF6.toString();
                        _this.Update.PF7 = _this.EditQuotation.PF7.toString();
                        if (_this.EditQuotation.TC1 != "NA" || _this.EditQuotation.TC2 != "NA" || _this.EditQuotation.TC3 != "NA" || _this.EditQuotation.TC4 != "NA" || _this.EditQuotation.TC5 == "NA" || _this.EditQuotation.TC6 != "NA" || _this.EditQuotation.TC7 != "NA" || _this.EditQuotation.TC8 != "NA") {
                            _this.Update.TC1 = _this.EditQuotation.TC1.toString();
                            _this.Update.TC2 = _this.EditQuotation.TC2.toString();
                            _this.Update.TC3 = _this.EditQuotation.TC3.toString();
                            _this.Update.TC4 = _this.EditQuotation.TC4.toString();
                            _this.Update.TC5 = _this.EditQuotation.TC5.toString();
                            _this.Update.TC6 = _this.EditQuotation.TC6.toString();
                            _this.Update.TC7 = _this.EditQuotation.TC7.toString();
                            _this.Update.TC8 = _this.EditQuotation.TC8.toString();
                        }
                        else {
                            _this.TCService.Find().then((function (response) {
                                _this.ViewTC = _this.TCService.GetTC(response.data.Result);
                                for (var i = 0; i < _this.ViewTC.length; i++) {
                                    if (i === 0) {
                                        _this.Update.TC1 = _this.ViewTC[0].Description.toString();
                                        //var TAC1 = this.ViewTC[0].TACID;
                                    }
                                    if (i === 1) {
                                        _this.Update.TC2 = _this.ViewTC[1].Description.toString();
                                        //var TAC2 = this.ViewTC[1].TACID;
                                    }
                                    if (i === 2) {
                                        _this.Update.TC3 = _this.ViewTC[2].Description.toString();
                                        //var TAC3 = this.ViewTC[2].TACID;
                                    }
                                    if (i === 3) {
                                        _this.Update.TC4 = _this.ViewTC[3].Description.toString();
                                        //var TAC4 = this.ViewTC[3].TACID;
                                    }
                                    if (i === 4) {
                                        _this.Update.TC5 = _this.ViewTC[4].Description.toString();
                                        //var TAC5 = this.ViewTC[4].TACID;
                                    }
                                    if (i === 5) {
                                        _this.Update.TC6 = _this.ViewTC[5].Description.toString();
                                        //var TAC6 = this.ViewTC[5].TACID;
                                    }
                                    if (i === 6) {
                                        _this.Update.TC7 = _this.ViewTC[6].Description.toString();
                                        //var TAC7 = this.ViewTC[6].TACID;
                                    }
                                    if (i === 7) {
                                        _this.Update.TC8 = _this.ViewTC[7].Description.toString();
                                        //var TAC8 = this.ViewTC[7].TACID;
                                    }
                                }
                            }));
                        }
                        if (_this.EditQuotation.PF1Heading == "NA" || _this.EditQuotation.PF1Heading == undefined || _this.EditQuotation.PF1Heading == null) {
                            $("#txtProd1").hide();
                        }
                        if (_this.EditQuotation.PF2Heading == "NA" || _this.EditQuotation.PF2Heading == undefined || _this.EditQuotation.PF2Heading == null) {
                            $("#txtProd2").hide();
                        }
                        if (_this.EditQuotation.PF3Heading == "NA" || _this.EditQuotation.PF3Heading == undefined || _this.EditQuotation.PF3Heading == null) {
                            $("#txtProd3").hide();
                        }
                        if (_this.EditQuotation.PF4Heading == "NA" || _this.EditQuotation.PF4Heading == undefined || _this.EditQuotation.PF4Heading == null) {
                            $("#txtProd4").hide();
                        }
                        if (_this.EditQuotation.PF5Heading == "NA" || _this.EditQuotation.PF5Heading == undefined || _this.EditQuotation.PF5Heading == null) {
                            $("#txtProd5").hide();
                        }
                        if (_this.EditQuotation.PF6Heading == "NA" || _this.EditQuotation.PF6Heading == undefined || _this.EditQuotation.PF6Heading == null) {
                            $("#txtProd6").hide();
                        }
                        if (_this.EditQuotation.PF7Heading == "NA" || _this.EditQuotation.PF7Heading == undefined || _this.EditQuotation.PF7Heading == null) {
                            $("#txtProd7").hide();
                        }
                    }));
                };
                EditQuotationController.prototype.Submit = function () {
                    var _this = this;
                    if ($("#chkPF1").prop('checked') == false) {
                        this.Update.PF1 = "0";
                    }
                    else if ($("#chkPF1").prop('checked') == true) {
                        this.Update.PF1 = "1";
                    }
                    if ($("#chkPF2").prop('checked') == false) {
                        this.Update.PF2 = "0";
                    }
                    else if ($("#chkPF2").prop('checked') == true) {
                        this.Update.PF2 = "2";
                    }
                    if ($("#chkPF3").prop('checked') == false) {
                        this.Update.PF3 = "0";
                    }
                    else if ($("#chkPF3").prop('checked') == true) {
                        this.Update.PF3 = "3";
                    }
                    if ($("#chkPF4").prop('checked') == false) {
                        this.Update.PF4 = "0";
                    }
                    else if ($("#chkPF4").prop('checked') == true) {
                        this.Update.PF4 = "4";
                    }
                    if ($("#chkPF5").prop('checked') == false) {
                        this.Update.PF5 = "0";
                    }
                    else if ($("#chkPF5").prop('checked') == true) {
                        this.Update.PF5 = "5";
                    }
                    if ($("#chkPF6").prop('checked') == false) {
                        this.Update.PF6 = "0";
                    }
                    else if ($("#chkPF6").prop('checked') == true) {
                        this.Update.PF6 = "6";
                    }
                    if ($("#chkPF7").prop('checked') == false) {
                        this.Update.PF7 = "0";
                    }
                    else if ($("#chkPF7").prop('checked') == true) {
                        this.Update.PF7 = "7";
                    }
                    if ($("#chkPF8").prop('checked') == false) {
                        this.Update.PF1 = "0";
                    }
                    else if ($("#chkPF8").prop('checked') == true) {
                        this.Update.PF1 = "8";
                    }
                    if ($("#chkPF9").prop('checked') == false) {
                        this.Update.PF2 = "0";
                    }
                    else if ($("#chkPF9").prop('checked') == true) {
                        this.Update.PF2 = "9";
                    }
                    if ($("#chkPF10").prop('checked') == false) {
                        this.Update.PF3 = "0";
                    }
                    else if ($("#chkPF10").prop('checked') == true) {
                        this.Update.PF3 = "10";
                    }
                    if ($("#chkPF11").prop('checked') == false) {
                        this.Update.PF4 = "0";
                    }
                    else if ($("#chkPF11").prop('checked') == true) {
                        this.Update.PF4 = "11";
                    }
                    if ($("#chkPF12").prop('checked') == false) {
                        this.Update.PF5 = "0";
                    }
                    else if ($("#chkPF12").prop('checked') == true) {
                        this.Update.PF5 = "12";
                    }
                    if ($("#chkPF13").prop('checked') == false) {
                        this.Update.PF1 = "0";
                    }
                    else if ($("#chkPF13").prop('checked') == true) {
                        this.Update.PF1 = "13";
                    }
                    if ($("#chkPF14").prop('checked') == false) {
                        this.Update.PF2 = "0";
                    }
                    else if ($("#chkPF14").prop('checked') == true) {
                        this.Update.PF2 = "14";
                    }
                    if ($("#chkPF15").prop('checked') == false) {
                        this.Update.PF3 = "0";
                    }
                    else if ($("#chkPF15").prop('checked') == true) {
                        this.Update.PF3 = "15";
                    }
                    if ($("#chkPF16").prop('checked') == false) {
                        this.Update.PF4 = "0";
                    }
                    else if ($("#chkPF16").prop('checked') == true) {
                        this.Update.PF4 = "16";
                    }
                    if ($("#chkPF17").prop('checked') == false) {
                        this.Update.PF1 = "0";
                    }
                    else if ($("#chkPF17").prop('checked') == true) {
                        this.Update.PF1 = "17";
                    }
                    if ($("#chkPF18").prop('checked') == false) {
                        this.Update.PF2 = "0";
                    }
                    else if ($("#chkPF18").prop('checked') == true) {
                        this.Update.PF2 = "18";
                    }
                    if ($("#chkPF19").prop('checked') == false) {
                        this.Update.PF3 = "0";
                    }
                    else if ($("#chkPF19").prop('checked') == true) {
                        this.Update.PF3 = "19";
                    }
                    if ($("#chkPF20").prop('checked') == false) {
                        this.Update.PF4 = "0";
                    }
                    else if ($("#chkPF20").prop('checked') == true) {
                        this.Update.PF4 = "20";
                    }
                    if ($("#chkPF21").prop('checked') == false) {
                        this.Update.PF5 = "0";
                    }
                    else if ($("#chkPF21").prop('checked') == true) {
                        this.Update.PF5 = "21";
                    }
                    if ($("#chkPF22").prop('checked') == false) {
                        this.Update.PF6 = "0";
                    }
                    else if ($("#chkPF22").prop('checked') == true) {
                        this.Update.PF6 = "22";
                    }
                    //if ($("#chkPF22").prop('checked') == false) {
                    //    this.Update.PF4 = "0";
                    //}
                    //if ($("#chkPF23").prop('checked') == false) {
                    //    this.Update.PF5 = "0";
                    //}
                    //if ($("#chkPF24").prop('checked') == false) {
                    //    this.Update.PF6 = "0";
                    //}
                    if ($("#chkTC1").prop('checked') == true) {
                        this.Update.TC1 = $("#txtTC1").val();
                        this.Update.TC1ID = 1;
                    }
                    else {
                        this.Update.TC1 = null;
                        this.Update.TC1ID = null;
                    }
                    if ($("#chkTC2").prop('checked') == true) {
                        this.Update.TC2 = $("#txtTC2").val();
                        this.Update.TC2ID = 2;
                    }
                    else {
                        this.Update.TC2 = null;
                        this.Update.TC2ID = null;
                    }
                    if ($("#chkTC3").prop('checked') == true) {
                        this.Update.TC3 = $("#txtTC3").val();
                        this.Update.TC3ID = 3;
                    }
                    else {
                        this.Update.TC3 = null;
                        this.Update.TC3ID = null;
                    }
                    if ($("#chkTC4").prop('checked') == true) {
                        this.Update.TC4 = $("#txtTC4").val();
                        this.Update.TC4ID = 4;
                    }
                    else {
                        this.Update.TC4 = null;
                        this.Update.TC4ID = null;
                    }
                    if ($("#chkTC5").prop('checked') == true) {
                        this.Update.TC5 = $("#txtTC5").val();
                        this.Update.TC5ID = 5;
                    }
                    else {
                        this.Update.TC5 = null;
                        this.Update.TC5ID = null;
                    }
                    if ($("#chkTC6").prop('checked') == true) {
                        this.Update.TC6 = $("#txtTC6").val();
                        this.Update.TC6ID = 6;
                    }
                    else {
                        this.Update.TC6 = null;
                        this.Update.TC6ID = null;
                    }
                    if ($("#chkTC7").prop('checked') == true) {
                        this.Update.TC7 = $("#txtTC7").val();
                        this.Update.TC7ID = 7;
                    }
                    else {
                        this.Update.TC7 = null;
                        this.Update.TC7ID = null;
                    }
                    if ($("#chkTC8").prop('checked') == true) {
                        this.Update.TC8 = $("#txtTC8").val();
                        this.Update.TC8ID = 8;
                    }
                    else {
                        this.Update.TC8 = null;
                        this.Update.TC8ID = null;
                    }
                    if ($("#chkOffer1").prop('checked') == true) {
                        this.Update.Offer1 = "1";
                    }
                    else {
                        this.Update.Offer1 = null;
                    }
                    if ($("#chkOffer2").prop('checked') == true) {
                        this.Update.Offer2 = "2";
                    }
                    else {
                        this.Update.Offer2 = null;
                    }
                    if ($("#chkOffer3").prop('checked') == true) {
                        this.Update.Offer3 = "3";
                    }
                    else {
                        this.Update.Offer3 = null;
                    }
                    if ($("#chkOffer4").prop('checked') == true) {
                        this.Update.Offer4 = "4";
                    }
                    else {
                        this.Update.Offer4 = null;
                    }
                    if ($("#chkOffer5").prop('checked') == true) {
                        this.Update.Offer5 = "5";
                    }
                    else {
                        this.Update.Offer5 = null;
                    }
                    if ($("#chkOffer6").prop('checked') == true) {
                        this.Update.Offer6 = "6";
                    }
                    else {
                        this.Update.Offer6 = null;
                    }
                    if ($("#chkCapability1").prop('checked') == true) {
                        this.Update.Capability1 = "1";
                    }
                    else {
                        this.Update.Capability1 = null;
                    }
                    if ($("#chkCapability2").prop('checked') == true) {
                        this.Update.Capability2 = "2";
                    }
                    else {
                        this.Update.Capability2 = null;
                    }
                    if ($("#chkCapability3").prop('checked') == true) {
                        this.Update.Capability3 = "3";
                    }
                    else {
                        this.Update.Capability3 = null;
                    }
                    if ($("#chkCapability4").prop('checked') == true) {
                        this.Update.Capability4 = "4";
                    }
                    else {
                        this.Update.Capability4 = null;
                    }
                    if ($("#chkCapability5").prop('checked') == true) {
                        this.Update.Capability5 = "5";
                    }
                    else {
                        this.Update.Capability5 = null;
                    }
                    if ($("#chkCapability6").prop('checked') == true) {
                        this.Update.Capability6 = "6";
                    }
                    else {
                        this.Update.Capability6 = null;
                    }
                    this.Update.OpportunitySAPNo = this.EditQuotation.OpportunitySAPNo;
                    this.Update.QuoteDate = document.getElementById("txtFromDate").value;
                    this.UpdateService.PostQuote(this.Update).then((function (response) {
                        if (response.data.Result != null) {
                            $("#errorclose").hide();
                            $("#close").show();
                            _this.popupMessage("Quotation Reference - " + _this.Update.QuoteRange + "  Updated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            _this.Update = null;
                        }
                        else {
                            _this.HideShow();
                            _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                        //$('#myModalAddNew').click();
                    }));
                };
                EditQuotationController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                EditQuotationController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                EditQuotationController.prototype.GetOption1 = function (data) {
                    var _this = this;
                    this.Option1DropDown = this.Option1Service.Find(this.EditQuotation.Accessory1ID).then((function (response) {
                        _this.Option1DropDown = _this.Option1Service.GetAccessory(response.data.Result);
                    }));
                };
                EditQuotationController.prototype.GetOption2 = function (data) {
                    var _this = this;
                    this.Option2DropDown = this.Option2Service.Find(this.EditQuotation.Accessory2ID).then((function (response) {
                        _this.Option2DropDown = _this.Option2Service.GetAccessory(response.data.Result);
                    }));
                };
                EditQuotationController.prototype.GetOption3 = function (data) {
                    var _this = this;
                    this.Option3DropDown = this.Option3Service.Find(this.EditQuotation.Accessory3ID).then((function (response) {
                        _this.Option3DropDown = _this.Option3Service.GetAccessory(response.data.Result);
                    }));
                };
                EditQuotationController.prototype.GetOption4 = function (data) {
                    var _this = this;
                    this.Option4DropDown = this.Option4Service.Find(this.EditQuotation.Accessory4ID).then((function (response) {
                        _this.Option4DropDown = _this.Option4Service.GetAccessory(response.data.Result);
                    }));
                };
                EditQuotationController.prototype.GetOption5 = function (data) {
                    var _this = this;
                    this.Option5DropDown = this.Option5Service.Find(this.EditQuotation.Accessory5ID).then((function (response) {
                        _this.Option5DropDown = _this.Option5Service.GetAccessory(response.data.Result);
                    }));
                };
                EditQuotationController.prototype.GetOption6 = function (data) {
                    var _this = this;
                    this.Option6DropDown = this.Option6Service.Find(this.EditQuotation.Accessory6ID).then((function (response) {
                        _this.Option6DropDown = _this.Option6Service.GetAccessory(response.data.Result);
                    }));
                };
                EditQuotationController.prototype.Close = function () {
                    location.href = "#!/QuotationList";
                };
                EditQuotationController.$inject = ["EditQuotationService", "Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService", "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService", "Option6Service", "TotalPriceService", "TermsConditionInfoService", "UpdateQuotationService", "ProductFeaturesInfoService", "ProdFeatService", "$location", "$cookieStore"];
                return EditQuotationController;
            }());
            var EditQuotationComponentController = /** @class */ (function () {
                function EditQuotationComponentController() {
                    this.controller = EditQuotationController;
                    this.templateUrl = "/Scripts/App/EditQuotation/Template/EditQuotation.html";
                }
                EditQuotationComponentController.Name = "editquotationcomponent";
                return EditQuotationComponentController;
            }());
            app.AddComponent(EditQuotationComponentController.Name, new EditQuotationComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=EditQuotationComponent.js.map