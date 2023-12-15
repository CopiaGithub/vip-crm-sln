namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import EmpBroadlist = GCPL.Model.EmployeeCastListModel;
    import Search = GCPL.Model.EmployeeCastSearchModel;
    import EmployeeBroadMaster = GCPL.Model.InsertEmployeeCastModel;
    import EditEmp = GCPL.Model.EditEmployeeCastModel;

    interface IEmployeeBroadcastMasterController {
        EmployeeBroadList: Array<Model.EmployeeCastListModel>;
        SearchEmployeeCastList(): void;
        InsertEmployeeBroad: EmployeeBroadMaster;
        Submit(): void;
        Edit(data: any): void;
        EditEmpBroad: Array<Model.EditEmployeeCastModel>;
        loadImageFileAsURL(): void;
    }
    class EmployeeBroadcastMasterController implements IEmployeeBroadcastMasterController {

        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        EmployeeBroadList = null;
        EmployeeBroadSearch = null;
        InsertEmployeeBroad = null;
        EditEmpBroad = null;
        YOUTUBE_REGEXP = null;
        base64: any = null;
        file: any = null;

        private Cookie: any = null;
        private Listservice: Service.IEmployeeBroadCastListService;
        private InsertService: Service.IInsertEmployeeBroadService;
        private EditService: Service.IEmployeeCastEditService;

        static $inject = ["EmployeeBroadCastListService", "InsertEmployeeBroadService", "EmployeeCastEditService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//
        constructor(_Listservice: Service.IEmployeeBroadCastListService, _InsertService: Service.IInsertEmployeeBroadService, _EditService: Service.IEmployeeCastEditService, private _cookieStore: any) {

            this.Listservice = _Listservice;
            this.EmployeeBroadSearch = Array<GCPL.Model.EmployeeCastSearchModel>();
            this.InsertService = _InsertService;
            this.InsertEmployeeBroad = new EmployeeBroadMaster();
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
            this.YOUTUBE_REGEXP = /http:\/\/(?:www\.)?youtube.*watch\?v=([a-zA-Z0-9\-_]+)/ ;
            $("#errorclose").hide();
            $("#close").hide();
            $('#lbltipAddedComment').hide();
           
        }
        SearchEmployeeCastList(): void {
            $('#search-btn-loader').show();
            this.numRecords = this.NoOfRds;
            this.FillGrid(this.numRecords);
        }

        FillGrid(NoOfRecords): void {

            let that = this;
            that.incre = 0;
            that.numRecords = parseInt(NoOfRecords);
            that.page = 0;
            that.maxPages = 0;
            that.shownItems = [];
            
            this.EmployeeBroadList = this.Listservice.Find(this.EmployeeBroadSearch).then((response => {
                this.EmployeeBroadList = this.Listservice.GetEmployeeBroadList(response.data.Result);
                $('#search-btn-loader').hide();
                if (this.EmployeeBroadList.length > 0) {
                    $("#nullDataDiv").hide();
                    $("#dataTable").show();
                    this.EmployeeBroadList.forEach(function (value, key) {
                        that.incre = parseInt(key) + 1;
                    });
                    console.log(this.EmployeeBroadList);
                    this.maxPages = (that.incre / that.numRecords);
                    this.ShowBack = false;
                    this.ShowNext = that.maxPages > 1 ? true : false;
                    this.shownItems = this.EmployeeBroadList.slice(0, that.numRecords);
                }
                else {
                    $("#nullDataDiv").show();
                    $("#dataTable").hide();
                }
            }));
        }

        Add() {
            
            this.InsertEmployeeBroad.EmployeeBroadcastID = "";
            this.InsertEmployeeBroad.Title = "";
            this.InsertEmployeeBroad.Description = "";
            this.InsertEmployeeBroad.YouTubeLink = "";
            this.InsertEmployeeBroad.Photo = "";
            this.InsertEmployeeBroad.Video = "";
            this.InsertEmployeeBroad.Status = "";
            (<HTMLInputElement>document.getElementById("input-image-hidden")).value = "";
            $('#image-preview').attr('src', '');
            (<HTMLInputElement>document.getElementById("base64textarea")).value = "";
            $("#lbltipAddedComment").hide();
            $("#chkimg").prop("checked", false);
        }

        Submit(): void {
            
            this.InsertEmployeeBroad.Photo = (<HTMLInputElement>document.getElementById("base64textarea")).value;
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

                
                this.InsertService.PostEmployeeBroad(this.InsertEmployeeBroad).then((response => {

                    console.log(this.InsertEmployeeBroad);
                    if (response.data.Result != null) {
                        $("#errorclose").hide();
                        $("#close").show();
                        this.popupMessage("Employee BroadCast saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                        $('#emp-broadcast').click();

                        this.InsertEmployeeBroad = null;
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
        loadImageFileAsURL(): void {
            

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

        Edit(data: any): void {
            
            this.EditService.Find(data).then((response => {
                this.InsertEmployeeBroad = this.EditService.GetEdit(response.data.Result);
                
                $("image-preview").show();
                $('#txtTitle').val(this.InsertEmployeeBroad.Title);
                $('#txtlink').val(this.InsertEmployeeBroad.YouTubeLink);
                $('#txtdesc').val(this.InsertEmployeeBroad.Description);
                $('#txtVideo').val(this.InsertEmployeeBroad.Video);
               // $('#txtPhoto').val(this.InsertEmployeeBroad.Photo);

                $("#image-preview").show();
                $("#image-preview").attr("src", this.InsertEmployeeBroad.Photo);

                if (this.InsertEmployeeBroad.Status == "True") {
                    this.InsertEmployeeBroad.Status = "1";
                }
                else {
                    this.InsertEmployeeBroad.Status = "0";
                }

                $("#emp-broadcast").show();


            }));
        }

        ShowHidePopUp(Message): void {
            $("#errorclose").show();
            $("#close").hide();
            this.alert = Message;
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

        Clear() {

            this.EmployeeBroadSearch.SearchText = "";
            $("#txtEmp").val("");

        }

        next() {
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

        back() {
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

        Close(): void {

            location.href = "#!/EmployeeBroadcastMaster";

        }


    }
    class EmployeeBroadcastMasterComponentController implements ng.IComponentOptions {
        static Name: string = "employeebroadcastmastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = EmployeeBroadcastMasterController;
            this.templateUrl = "/Scripts/App/EmployeeBroadcastMaster/Template/EmployeeBroadcastMaster.html";
        }
    }
    app.AddComponent(EmployeeBroadcastMasterComponentController.Name, new EmployeeBroadcastMasterComponentController());

}