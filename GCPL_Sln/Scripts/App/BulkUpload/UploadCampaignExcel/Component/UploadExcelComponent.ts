namespace GCPL.Component.Home {
    import app = GCPL.app;
    import Service = GCPL.Service;
    import UploadExcelModel = GCPL.Model.UploadExcelModel;


    interface IUploadExcelController {
        CampaignDropDown: Array<Model.CampaignddModel>


    }
    class UploadExcelController implements IUploadExcelController {
        file: any = null;
        numRecords: number = 10;
        page: number = 0;
        incre: number = 0;
        shownItems = [];
        maxPages: number = 0;
        ShowNext: boolean = true;
        ShowBack: boolean = true;
        NoOfRds: number = 10;
        alert = null;
        CampaignDropDown = null;
        showLoader = false;
        private Cookie: any = null;
        private CampaignService: Service.ICampaignddService;
        private service: Service.IUploadVRPExcelService;
        UploadExcelModel: GCPL.Model.UploadExcelModel;

        static $inject = ["CampaignddService", "$cookieStore", "UploadVRPExcelService"];



        constructor(_CampaignService: Service.ICampaignddService, private _cookieStore: any, _service: Service.IUploadVRPExcelService) {

            this.CampaignService = _CampaignService;
            this.Cookie = _cookieStore;
            this.service = _service;
            this.UploadExcelModel = new GCPL.Model.UploadExcelModel();
        }


        $onInit() {
            this.Init();
            $("#errorclose").hide();
            $("#close").hide();
        }

     
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();


            this.CampaignDropDown = this.CampaignService.Find().then((response => {
                this.CampaignDropDown = this.CampaignService.GetCampaignName(response.data.Result);

            }));

        }

        //ExcelUpload(): void {
        //    let formData: FormData = new FormData(),
        //        xhr: XMLHttpRequest = new XMLHttpRequest();
        //    this.file = (<HTMLInputElement>document.getElementById("inputGroupFile03")).files[0];

        //}
        Submit(): void {
            debugger;
            this.showLoader = true;
            this.UploadExcelModel.UserID = this.Cookie.get('UserInfo')['UserID'];
            
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();
            this.file = (<HTMLInputElement>document.getElementById("inputGroupFile03")).files[0];
            console.log(this.file);
            console.log($("#inputGroupFile03").val());
            if (this.file != null) {
                //var size = (<HTMLInputElement>document.getElementById("inputGroupFile03")).files[0].size;
                formData.append("fileData", this.file);
                this.service.UploadImage(formData).then(response => {

                    this.UploadExcelModel.FileName = response.data.Result;
                    console.log(this.UploadExcelModel);
                    this.service.postVRPExcelData(this.UploadExcelModel).then(response => {
                        console.log(response.data.result);
                        if (response.data.Result == "Success") {
                           // this.showTemplateList();
                            this.UploadExcelModel = null;
                            $("#errorclose").hide();
                            $("#close").show();
                            this.popupMessage("Data saved Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            (<HTMLInputElement>document.getElementById("inputGroupFile03")).value = null;
                            
                            this.showLoader = false;
                        }
                        else {
                            this.HideShow();
                            this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            this.showLoader = false;
                        }
                    },
                        error => {
                            this.HideShow();
                            this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                            this.showLoader = false;
                        });
                });
            }

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
        exportTableToCSV(filename) {
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
        }

        downloadCSV(csv, filename) {
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
        }

        Close(): void {

            location.href = "#!/UploadCampaignData";

        }

        
    }
    class UploadExcelComponentController implements ng.IComponentOptions {
        static Name: string = "uploadexcelcomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = UploadExcelController;
            this.templateUrl = "/Scripts/App/BulkUpload/UploadCampaignExcel/Template/_UploadExcel.html";
        }
    }
    app.AddComponent(UploadExcelComponentController.Name, new UploadExcelComponentController());

}