namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import CustBroadlist = GCPL.Model.CustomerCastListModel;
    import Search = GCPL.Model.CustomerCastSearchModel;
    import CustomerBroadMaster = GCPL.Model.InsertCustomerCastModel;
    import EditCust = GCPL.Model.EditCustomerCastModel;

    interface ICustomerBroadcastMasterController {
        CustomerBroadList: Array<Model.CustomerCastListModel>;
        SearchCustomerCastList(): void;
        InsertCustomerBroad: CustomerBroadMaster;
        Submit(): void;
        Edit(data: any): void;
        EditCustBroad: Array<Model.EditCustomerCastModel>;
        loadImageFileAsURL(): void;
    }
    class CustomerBroadcastMasterController implements ICustomerBroadcastMasterController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        CustomerBroadList = null;
        CustomerBroadSearch = null;
        InsertCustomerBroad = null;
        EditCustBroad = null;
        YOUTUBE_REGEXP = null;
        base64: any = null;
        file: any = null;

        private Cookie: any = null;
        private Listservice: Service.ICustomerBroadCastListService;
        private InsertService: Service.IInsertCustomerBroadService;
        private EditService: Service.ICustomerCastEditService;

        static $inject = ["CustomerBroadCastListService", "InsertCustomerBroadService", "CustomerCastEditService", "$cookieStore"];


        constructor(_Listservice: Service.ICustomerBroadCastListService, _InsertService: Service.IInsertCustomerBroadService, _EditService: Service.ICustomerCastEditService, private _cookieStore: any) {
           
            this.Listservice = _Listservice;
            this.CustomerBroadSearch = Array<GCPL.Model.CustomerCastSearchModel>();
            this.InsertService = _InsertService;
            this.InsertCustomerBroad = new CustomerBroadMaster();
            this.EditService = _EditService;
            this.Cookie = _cookieStore;
        }


        $onInit() {


            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
            $('#search-btn-loader').hide();            
           
        }

        //Page Load Define Values//
        Init(): void {
            this.YOUTUBE_REGEXP = /http:\/\/(?:www\.)?youtube.*watch\?v=([a-zA-Z0-9\-_]+)/;
            $("#errorclose").hide();
            $("#close").hide();
            $('#lbltipAddedComment').hide();
           
        }

        SearchCustomerCastList(): void {
           
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
            $('#search-btn-loader').show();
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            debugger;
            this.CustomerBroadList = this.Listservice.Find(this.CustomerBroadSearch).then((response => {
                this.CustomerBroadList = this.Listservice.GetCustomerBroadList(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.CustomerBroadList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.CustomerBroadList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.CustomerBroadList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.CustomerBroadList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        Add() {
            debugger;
            this.InsertCustomerBroad.CustomerBroadcastID = "";
            this.InsertCustomerBroad.Title = "";
            this.InsertCustomerBroad.Description = "";
            this.InsertCustomerBroad.YouTubeLink = "";
            this.InsertCustomerBroad.Photo = "";
            this.InsertCustomerBroad.Video = "";
            this.InsertCustomerBroad.Status = "";
            (<HTMLInputElement>document.getElementById("input-image-hidden")).value = "";
            $('#image-preview').attr('src', '');
            (<HTMLInputElement>document.getElementById("base64textarea")).value = "";
            $("#lbltipAddedComment").hide();
            $("#chkimg").prop("checked", false);
        }

        Submit(): void {
            debugger;
            this.InsertCustomerBroad.Photo = (<HTMLInputElement>document.getElementById("base64textarea")).value;
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
                this.InsertService.PostCustomerBroad(this.InsertCustomerBroad).then((response => {

                    console.log(this.InsertCustomerBroad);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Customer BroadCast saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#emp-broadcast').click();

                        this.InsertCustomerBroad = null;
                        (<HTMLInputElement>document.getElementById("input-image-hidden")).value = "";
                        $('#image-preview').attr('src', '');
                        this.numRecords = this.NoOfRds;
                        this.FillGrid(this.numRecords);
                    }
                    else {
                        this.HideShow();
                        this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                    }

                }));

            }

        }

        Edit(data: any): void {
            debugger;
            this.EditService.Find(data).then((response => {
                this.InsertCustomerBroad = this.EditService.GetEdit(response.data.Result);
                debugger;
                $("image-preview").show();
                $('#txtTitle').val(this.InsertCustomerBroad.Title);
                $('#txtlink').val(this.InsertCustomerBroad.YouTubeLink);
                $('#txtdesc').val(this.InsertCustomerBroad.Description);
                $('#txtVideo').val(this.InsertCustomerBroad.Video);
               // $('#txtPhoto').val(this.InsertCustomerBroad.Photo);                
                $("#image-preview").show();
                $("#image-preview").attr("src", this.InsertCustomerBroad.Photo);

                if (this.InsertCustomerBroad.Status == "True") {
                    this.InsertCustomerBroad.Status = "1";
                }
                else {
                    this.InsertCustomerBroad.Status = "0";
                }
              
                $("#emp-broadcast").show();


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
        loadImageFileAsURL(): void {
            debugger;

            var filedata = (<HTMLInputElement>document.getElementById("input-image-hidden")).files[0];

            console.log(filedata);
            var reader = new FileReader();
            var dataURL;

            reader.onload = function (readerEvt: any) {
                var binaryString = readerEvt.target.result;
                (<HTMLInputElement>document.getElementById("base64textarea")).value = btoa(binaryString);



            };
            reader.readAsBinaryString(filedata);
            $("#image-preview").show();
            $("#image-preview").attr("src", window.URL.createObjectURL((<HTMLInputElement>document.getElementById("input-image-hidden")).files[0]));

            $("#lbltipAddedComment").show();
            $("#lbltipAddedComment").text("Image select successfully!");

        }
        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
        }
                
        Clear() {

            this.CustomerBroadSearch.SearchText = "";
            $("#txtnews").val("");

        }

        next() {
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

        back() {
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

        Close(): void {

            location.href = "#!/CustomerBroadcastMaster";

        }

        
    }
    class CustomerBroadcastMasterComponentController implements ng.IComponentOptions {
        static Name: string = "customerbroadcastmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = CustomerBroadcastMasterController;
            this.templateUrl = "/Scripts/App/CustomerBroadcastMaster/Template/CustomerBroadcastMaster.html";
        }
    }
    app.AddComponent(CustomerBroadcastMasterComponentController.Name, new CustomerBroadcastMasterComponentController());

}