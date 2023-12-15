namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Edit = GCPL.Model.EditQuoteModel;
    import Search = GCPL.Model.SearchEditModel;
    import GSTCalculation = GCPL.Model.TotalPriceModel;
    import TermsConditions = GCPL.Model.TermsCModel;
    import UpdateQuote = GCPL.Model.UpdateQuotationModel;
    import ProductFeatures = GCPL.Model.ProductFModel;

    interface IEditQuotationController {
        OpportunitySAPNo: any;
        // QuotationRefernce: any;
        EditQuote(data: any): void;
        Accessory1DropDown: Array<Model.Accessory1ddlModel>
        Option1DropDown: Array<Model.Option1ddlModel>
        Accessory2DropDown: Array<Model.Accessory2ddlModel>
        Option2DropDown: Array<Model.Option2ddlModel>
        Accessory3DropDown: Array<Model.Accessory3ddlModel>
        Option3DropDown: Array<Model.Option3ddlModel>
        Accessory4DropDown: Array<Model.Accessory4ddlModel>
        Option4DropDown: Array<Model.Option4ddlModel>
        Accessory5DropDown: Array<Model.Accessory5ddlModel>
        Option5DropDown: Array<Model.Option5ddlModel>
        Accessory6DropDown: Array<Model.Accessory6ddlModel>
        Option6DropDown: Array<Model.Option6ddlModel>
        TotalPriceModel: GSTCalculation;
        ViewTC: TermsConditions;
        Update: UpdateQuote;
        Submit(): void;
        ViewPF: ProductFeatures;
        ViewProdF: Array<Model.ProdFModel>
    }

    class EditQuotationController implements IEditQuotationController {
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        Accessory1DropDown = null;
        Option1DropDown = null;
        Accessory2DropDown = null;
        Option2DropDown = null;
        Accessory3DropDown = null;
        Option3DropDown = null;
        Accessory4DropDown = null;
        Option4DropDown = null;
        Accessory5DropDown = null;
        Option5DropDown = null;
        Accessory6DropDown = null;
        Option6DropDown = null;
        EditQuotation = null;
        private Cookie: any = null;
        ViewTC = null;
        //QuotationRefernce = null;
        OpportunitySAPNo = null;
        UserID = null;
        SearchEdit: GCPL.Model.SearchEditModel = null;
        Total = null;
        Update = null;
        ViewPF = null;
        ModelID = null;
        ViewProdF = null;
        TotalPriceModel: GCPL.Model.TotalPriceModel = null;

        private EditService: Service.IEditQuotationService;
        private Accessory1Service: Service.IAccessory1DDService;
        private Option1Service: Service.IOption1DDService;
        private Accessory2Service: Service.IAccessory2DDService;
        private Option2Service: Service.IOption2DDService;
        private Accessory3Service: Service.IAccessory3DDService;
        private Option3Service: Service.IOption3DDService;
        private Accessory4Service: Service.IAccessory4DDService;
        private Option4Service: Service.IOption4DDService;
        private Accessory5Service: Service.IAccessory5DDService;
        private Option5Service: Service.IOption5DDService;
        private Accessory6Service: Service.IAccessory6DDService;
        private Option6Service: Service.IOption6DDService;
        private TotalPriceCalService: Service.ITotalPriceService;
        private TCService: Service.ITermsConditionInfoService;
        private UpdateService: Service.IUpdateQuotationService;
        private PFService: Service.IProductFeaturesInfoService;
        private ProdFService: Service.IProdFeatService;

        static $inject = ["EditQuotationService", "Accessory1DDService", "Option1Service", "Accessory2DDService", "Option2Service", "Accessory3DDService", "Option3Service", "Accessory4DDService", "Option4Service", "Accessory5DDService", "Option5Service", "Accessory6DDService", "Option6Service", "TotalPriceService", "TermsConditionInfoService", "UpdateQuotationService", "ProductFeaturesInfoService", "ProdFeatService", "$location", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_EditService: Service.IEditQuotationService, _Accessory1Service: Service.IAccessory1DDService, _Option1Service: Service.IOption1DDService, _Accessory2Service: Service.IAccessory2DDService, _Option2Service: Service.IOption2DDService,
            _Accessory3Service: Service.IAccessory3DDService, _Option3Service: Service.IOption3DDService,
            _Accessory4Service: Service.IAccessory4DDService, _Option4Service: Service.IOption4DDService,
            _Accessory5Service: Service.IAccessory5DDService, _Option5Service: Service.IOption5DDService,
            _Accessory6Service: Service.IAccessory6DDService, _Option6Service: Service.IOption6DDService, _TotalPriceCalService: Service.ITotalPriceService, _TCService: Service.ITermsConditionInfoService, _UpdateService: Service.IUpdateQuotationService, _PFService: Service.IProductFeaturesInfoService, _ProdFService: Service.IProdFeatService, private $location: ng.ILocationService, private _cookieStore: any) {


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



        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();

        }

        //Page Load Define Values//
        Init(): void {

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
            (<HTMLInputElement>document.getElementById("txtFromDate")).innerHTML = d1 + " " + m1 + " " + y1;
            $('#txtFromDate').val(d1 + " " + m1 + " " + y1);
            //$("#txtFromDate").datepicker({ maxDate: 0 });
            (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            $("#txtFromDate").datepicker({
                dateFormat: 'dd M yy',
                changeMonth: true,
                changeYear: true,
                maxDate: 0,
                onSelect: this.selectFromDate
            });


        }
        selectFromDate(e) {
            (<HTMLInputElement>document.getElementById("txtFromDate")).value = e;
        }
        Calculate(): void {

            this.Update.TotalPrice = null;
            this.Update.TotalTax = null;
        }
        Calculate1(): void {

            this.Update.TotalPrice = null;
            this.Update.TotalTax = null;
        }
        CheckPrice(): void {

            this.Update.TotalPrice = null;
            this.Update.TotalTax = null;
            this.TotalPriceModel.Price = this.Update.Price;
            this.TotalPriceModel.Quantity = this.Update.Quantity;
            this.TotalPriceModel.GSTRate = this.Update.GSTRate;
            this.Total = this.TotalPriceCalService.FindChange(this.TotalPriceModel).then((response => {
                this.Total = this.TotalPriceCalService.GetTotalPriceChange(response.data.Result);
                this.Update.Price = null;
                this.Update.Quantity = null;
                this.Update.GSTRate = null;

                this.Update.Price = this.Total.Price;
                this.Update.TotalPrice = this.Total.TotalPrice;
                this.Update.TotalTax = this.Total.TotalTax;
                this.Update.Quantity = this.Total.Quantity;
                this.Update.GSTRate = this.Total.GSTRate;
                //this.TotalPriceModel.Quantity = this.Total.Quantity;
                // this.TotalPriceModel.ConvertedGST = this.Total.ConvertedGST;


            }));
        }
        EditQuote(data: any): void {


            // this.SearchEdit.OpportunitySAPNo = this.OpportunitySAPNo;
            //this.SearchEdit.QuotationRefernce = this.QuotationRefernce;
            this.EditService.Find(this.OpportunitySAPNo).then((response => {
                this.EditQuotation = this.EditService.EditQuote(response.data.Result);

                console.log(this.EditQuotation.Accessory1ID);

                this.Update.QuoteRange = this.EditQuotation.QuotationRefernce.toString();
                this.Update.Price = this.EditQuotation.Price;
                this.Update.Quantity = this.EditQuotation.Quantity;
                this.Update.GSTRate = this.EditQuotation.GSTRate;
                this.Update.ModelID = this.EditQuotation.ModelID;
                this.Update.TotalPrice = this.EditQuotation.TotalInvestment;
                this.Update.TotalTax = this.EditQuotation.GSTAmount;
                this.Update.QuoteDate = this.EditQuotation.QuotationDate;



                this.Update.Accessory1ID = this.EditQuotation.Accessory1ID;
                this.Update.Accessory2ID = this.EditQuotation.Accessory2ID;
                this.Update.Accessory3ID = this.EditQuotation.Accessory3ID;
                this.Update.Accessory4ID = this.EditQuotation.Accessory4ID;
                this.Update.Accessory5ID = this.EditQuotation.Accessory5ID;
                this.Update.Accessory6ID = this.EditQuotation.Accessory6ID;

                this.Update.ModelID = this.EditQuotation.ModelID.toString();


                this.Accessory1DropDown = this.Accessory1Service.Find(this.Update.ModelID).then((response => {
                    this.Accessory1DropDown = this.Accessory1Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory1ID = this.Accessory1DropDown[0].Accessory1ID.toString();
                }));
                this.Accessory2DropDown = this.Accessory2Service.Find(this.Update.ModelID).then((response => {
                    this.Accessory2DropDown = this.Accessory2Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory2ID = this.Accessory2DropDown[0].Accessory2ID.toString();
                }));
                this.Accessory3DropDown = this.Accessory3Service.Find(this.Update.ModelID).then((response => {
                    this.Accessory3DropDown = this.Accessory3Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory3ID = this.Accessory3DropDown[0].Accessory3ID.toString();
                }));
                this.Accessory4DropDown = this.Accessory4Service.Find(this.Update.ModelID).then((response => {
                    this.Accessory4DropDown = this.Accessory4Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory4ID = this.Accessory4DropDown[0].Accessory4ID.toString();
                }));
                this.Accessory5DropDown = this.Accessory5Service.Find(this.Update.ModelID).then((response => {
                    this.Accessory5DropDown = this.Accessory5Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory5ID = this.Accessory5DropDown[0].Accessory5ID.toString();
                }));
                this.Accessory6DropDown = this.Accessory6Service.Find(this.Update.ModelID).then((response => {
                    this.Accessory6DropDown = this.Accessory6Service.GetAccessoryName(response.data.Result);
                    // this.Update.Accessory6ID = this.Accessory6DropDown[0].Accessory6ID.toString();
                }));

                this.GetOption1(this.Update.Accessory1ID);
                this.GetOption2(this.Update.Accessory2ID);
                this.GetOption3(this.Update.Accessory3ID);
                this.GetOption4(this.Update.Accessory4ID);
                this.GetOption5(this.Update.Accessory5ID);
                this.GetOption6(this.Update.Accessory6ID);



                this.Update.Option1ID = this.EditQuotation.Option1ID;
                this.Update.Option2ID = this.EditQuotation.Option2ID;
                this.Update.Option3ID = this.EditQuotation.Option3ID;
                this.Update.Option4ID = this.EditQuotation.Option4ID;
                this.Update.Option5ID = this.EditQuotation.Option5ID;
                this.Update.Option6ID = this.EditQuotation.Option6ID;


                $('.CP-class').click(function () {
                    //window.alert($('.pf-class').index(this));
                    var ino = $('.CP-class').index(this) + 1;
                    $(this).attr('id', 'chkCapability' + ino);
                })
                this.Update.Capability1 = this.EditQuotation.C1.toString();
                this.Update.Capability2 = this.EditQuotation.C2.toString();
                this.Update.Capability3 = this.EditQuotation.C3.toString();
                this.Update.Capability4 = this.EditQuotation.C4.toString();
                this.Update.Capability5 = this.EditQuotation.C5.toString();
                this.Update.Capability6 = this.EditQuotation.C6.toString();


                $('.OF-class').click(function () {
                    //window.alert($('.pf-class').index(this));
                    var ino = $('.OF-class').index(this) + 1;
                    $(this).attr('id', 'chkOffer' + ino);
                })

                this.Update.Offer1 = this.EditQuotation.OF1.toString();
                this.Update.Offer2 = this.EditQuotation.OF2.toString();
                this.Update.Offer3 = this.EditQuotation.OF3.toString();
                this.Update.Offer4 = this.EditQuotation.OF4.toString();
                this.Update.Offer5 = this.EditQuotation.OF5.toString();
                this.Update.Offer6 = this.EditQuotation.OF6.toString();

                if (this.Update.ModelID == "8") {
                    $('.pf-class').click(function () {
                        //window.alert($('.pf-class').index(this));
                        var ino = $('.pf-class').index(this) + 1;
                        $(this).attr('id', 'chkPF' + ino);
                    })
                } else if (this.Update.ModelID == "53") {
                    $('.pf-class').click(function () {
                        //window.alert($('.pf-class').index(this));
                        var ino = $('.pf-class').index(this) + 8;
                        $(this).attr('id', 'chkPF' + ino);
                    })
                } else if (this.Update.ModelID == "4") {
                    $('.pf-class').click(function () {
                        //window.alert($('.pf-class').index(this));
                        var ino = $('.pf-class').index(this) + 13;
                        $(this).attr('id', 'chkPF' + ino);
                    })
                } else if (this.Update.ModelID == "5") {
                    $('.pf-class').click(function () {
                        //window.alert($('.pf-class').index(this));
                        var ino = $('.pf-class').index(this) + 17;
                        $(this).attr('id', 'chkPF' + ino);
                    })
                }

                this.Update.PF1 = this.EditQuotation.PF1.toString();
                this.Update.PF2 = this.EditQuotation.PF2.toString();
                this.Update.PF3 = this.EditQuotation.PF3.toString();
                this.Update.PF4 = this.EditQuotation.PF4.toString();
                this.Update.PF5 = this.EditQuotation.PF5.toString();
                this.Update.PF6 = this.EditQuotation.PF6.toString();
                this.Update.PF7 = this.EditQuotation.PF7.toString();



                if (this.EditQuotation.TC1 != "NA" || this.EditQuotation.TC2 != "NA" || this.EditQuotation.TC3 != "NA" || this.EditQuotation.TC4 != "NA" || this.EditQuotation.TC5 == "NA" || this.EditQuotation.TC6 != "NA" || this.EditQuotation.TC7 != "NA" || this.EditQuotation.TC8 != "NA") {
                    this.Update.TC1 = this.EditQuotation.TC1.toString();
                    this.Update.TC2 = this.EditQuotation.TC2.toString();
                    this.Update.TC3 = this.EditQuotation.TC3.toString();
                    this.Update.TC4 = this.EditQuotation.TC4.toString();
                    this.Update.TC5 = this.EditQuotation.TC5.toString();
                    this.Update.TC6 = this.EditQuotation.TC6.toString();
                    this.Update.TC7 = this.EditQuotation.TC7.toString();
                    this.Update.TC8 = this.EditQuotation.TC8.toString();




                }
                else {
                    this.TCService.Find().then((response => {
                        this.ViewTC = this.TCService.GetTC(response.data.Result);

                        for (var i = 0; i < this.ViewTC.length; i++) {
                            if (i === 0) {

                                this.Update.TC1 = this.ViewTC[0].Description.toString();
                                //var TAC1 = this.ViewTC[0].TACID;
                            }
                            if (i === 1) {

                                this.Update.TC2 = this.ViewTC[1].Description.toString();
                                //var TAC2 = this.ViewTC[1].TACID;
                            }
                            if (i === 2) {

                                this.Update.TC3 = this.ViewTC[2].Description.toString();
                                //var TAC3 = this.ViewTC[2].TACID;
                            }
                            if (i === 3) {

                                this.Update.TC4 = this.ViewTC[3].Description.toString();
                                //var TAC4 = this.ViewTC[3].TACID;
                            }
                            if (i === 4) {

                                this.Update.TC5 = this.ViewTC[4].Description.toString();
                                //var TAC5 = this.ViewTC[4].TACID;
                            }
                            if (i === 5) {

                                this.Update.TC6 = this.ViewTC[5].Description.toString();
                                //var TAC6 = this.ViewTC[5].TACID;
                            }
                            if (i === 6) {

                                this.Update.TC7 = this.ViewTC[6].Description.toString();
                                //var TAC7 = this.ViewTC[6].TACID;
                            }
                            if (i === 7) {

                                this.Update.TC8 = this.ViewTC[7].Description.toString();
                                //var TAC8 = this.ViewTC[7].TACID;
                            }
                        }

                    }));
                }

                if
                    (this.EditQuotation.PF1Heading == "NA" || this.EditQuotation.PF1Heading == undefined || this.EditQuotation.PF1Heading == null) {
                    $("#txtProd1").hide();
                }
                if
                    (this.EditQuotation.PF2Heading == "NA" || this.EditQuotation.PF2Heading == undefined || this.EditQuotation.PF2Heading == null) {
                    $("#txtProd2").hide();
                }
                if
                    (this.EditQuotation.PF3Heading == "NA" || this.EditQuotation.PF3Heading == undefined || this.EditQuotation.PF3Heading == null) {
                    $("#txtProd3").hide();
                }
                if
                    (this.EditQuotation.PF4Heading == "NA" || this.EditQuotation.PF4Heading == undefined || this.EditQuotation.PF4Heading == null) {
                    $("#txtProd4").hide();
                }
                if
                    (this.EditQuotation.PF5Heading == "NA" || this.EditQuotation.PF5Heading == undefined || this.EditQuotation.PF5Heading == null) {
                    $("#txtProd5").hide();
                }
                if
                    (this.EditQuotation.PF6Heading == "NA" || this.EditQuotation.PF6Heading == undefined || this.EditQuotation.PF6Heading == null) {
                    $("#txtProd6").hide();
                }
                if
                    (this.EditQuotation.PF7Heading == "NA" || this.EditQuotation.PF7Heading == undefined || this.EditQuotation.PF7Heading == null) {
                    $("#txtProd7").hide();
                }





            }));
        }

        Submit(): void {

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
            this.Update.QuoteDate = (<HTMLInputElement>document.getElementById("txtFromDate")).value;
            this.UpdateService.PostQuote(this.Update).then((response => {

                if (response.data.Result != null) {
                    $("#errorclose").hide();
                    $("#close").show();
                    this.popupMessage("Quotation Reference - " + this.Update.QuoteRange + "  Updated Successfully.", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    this.Update = null;
                }
                else {
                    this.HideShow();
                    this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                }
                //$('#myModalAddNew').click();


            }));

        }
        HideShow() {
            $("#errorclose").show();
            $("#close").hide();
        }
        popupMessage(Message: string, AddClass: string, RemoveClass: string, ShowImg: string, HideImg: string): void {
            $("#message-text").html(Message);
            $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
            $(ShowImg).show();
            $(HideImg).hide();
            $("#succeess-message-box").modal("show");
        }
        GetOption1(data: any): void {
            this.Option1DropDown = this.Option1Service.Find(this.EditQuotation.Accessory1ID).then((response => {
                this.Option1DropDown = this.Option1Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption2(data: any): void {
            this.Option2DropDown = this.Option2Service.Find(this.EditQuotation.Accessory2ID).then((response => {
                this.Option2DropDown = this.Option2Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption3(data: any): void {
            this.Option3DropDown = this.Option3Service.Find(this.EditQuotation.Accessory3ID).then((response => {
                this.Option3DropDown = this.Option3Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption4(data: any): void {
            this.Option4DropDown = this.Option4Service.Find(this.EditQuotation.Accessory4ID).then((response => {
                this.Option4DropDown = this.Option4Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption5(data: any): void {
            this.Option5DropDown = this.Option5Service.Find(this.EditQuotation.Accessory5ID).then((response => {
                this.Option5DropDown = this.Option5Service.GetAccessory(response.data.Result);

            }));
        }
        GetOption6(data: any): void {
            this.Option6DropDown = this.Option6Service.Find(this.EditQuotation.Accessory6ID).then((response => {
                this.Option6DropDown = this.Option6Service.GetAccessory(response.data.Result);

            }));
        }

        Close(): void {

            location.href = "#!/QuotationList";

        }

    }
    class EditQuotationComponentController implements ng.IComponentOptions {
        static Name: string = "editquotationcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = EditQuotationController;
            this.templateUrl = "/Scripts/App/EditQuotation/Template/EditQuotation.html";
        }
    }
    app.AddComponent(EditQuotationComponentController.Name, new EditQuotationComponentController());


}