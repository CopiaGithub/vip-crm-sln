/// <reference path="../../../typings/angularjs/angular.d.ts" />

namespace GCPL.Component.Home {
    import app = GCPL.app;
    import LoginModel = GCPL.Model.ILoginPut;
    import Service = GCPL.Service;
    import OtpUserDtlsModel = GCPL.Model.IGetOTPResponse;
    import OtpCRMUserDtlsModel = GCPL.Model.IGetValidCRMResponse;
    import CRMUserModel = GCPL.Model.GetCRMUserModel;

    interface ILoginComponentController {
        Login: Array<Model.ILoginResponse>;
        CRMLogindd: Array<Model.ICRMLoginResponse>;
        LoginForm: LoginModel;
        Submit(): void;
        GetOTP(): void;
        ChangePassword(): void;
        OtpUserDtls: OtpUserDtlsModel;
        OtpCRMUserDtls: OtpCRMUserDtlsModel;
        changePwdStatus: any;
        SalesRepDropDown: Array<Model.UserNamewpModel>
        CRMUser: CRMUserModel;
    }

    class LoginComponentController implements ILoginComponentController {
        OtpUserDtls: GCPL.Model.IGetOTPResponse = null;
        OtpCRMUserDtls: GCPL.Model.IGetValidCRMResponse = null;
        changePwdStatus = null;
        Login = null;
        CRMLogindd = null;
        accountID = null;
        Product = null;
        Userid = null;
        SecurityCode = null;
        SalesRepDropDown = null;
        CRMUser = null;
        User = null;
        LoginForm: GCPL.Model.ILoginPut = null;
        private CTService: Service.ICreateTicketService;
        private Service: Service.ILoginPageService;
        private Cookie: any = null;
        private LOGIN_COOKIE_KEY: string = "UserInfo";
        private OTPService: Service.IChangePwdService;
        private CRMSalesRepddService: Service.ICRMSalesRepddService;
        private CRMCordinatorddService: Service.ICRMCordinatorddService;
        private CRMService: Service.ICRMLoginPageService;
        private InsertService: Service.IInsertCRMService;
        //inject inbuild service and other services
        static $inject = ["LoginPageService", "ChangePwdService", "CRMSalesRepddService", "CRMCordinatorddService", "CRMLoginPageService", "InsertCRMService", "CookieService", "$window", "$scope", "$timeout", "$rootScope","CreateTicketService"];

        constructor(_service: Service.ILoginPageService,
            _otpService: Service.IChangePwdService, _CRMSalesRepddService: Service.ICRMSalesRepddService, _CRMCordinatorddService: Service.ICRMCordinatorddService, _crmservice: Service.ICRMLoginPageService, _InsertService: Service.IInsertCRMService, private _cookieService: any, private _window, private _scope, private _timeout, private _rootScope: any, _CTService: Service.ICreateTicketService) {
            this.Service = _service;
            this.OTPService = _otpService;
            this.CRMSalesRepddService = _CRMSalesRepddService;
            this.CRMCordinatorddService = _CRMCordinatorddService;
            this.CRMService = _crmservice;
            this.InsertService = _InsertService;
            this.LoginForm = new LoginModel();
            this.CRMUser = new CRMUserModel();
            this.CTService = _CTService;
            //set root scope to enable login view...
            this._rootScope.IsDisplayLoginView = true;
        }

        $onInit() {
            this.Init();
            $('#dvProgressBar').hide();
            $('#myButton1').show();
            $('#myButton2').show();
            $('#login-id-loader').hide();
        }

        Init(): void {
            /* ==================== Login Page Toggle Section Started ======================== */
            /* Varible Declaration Started */
            var forgotPasswordBtn = document.getElementById("forgot-password-link");
            var loginPanel = document.getElementById("login-panel");
            var otpPanel = document.getElementById("otp-panel");
            var CRMCor = document.getElementById("CRM-Cordinator-link");
            var crmpanel = document.getElementById("crmlogin-panel");
            //var resetPasswordPanel = document.getElementById("reset-panel");
            //var getOtpBtn = document.getElementById("get-otp-btn");
            //var resetPasswordBtn = document.getElementById("reset-password-btn");
            /* Varible Declaration Ended */
            forgotPasswordBtn.addEventListener("click", function () {
                loginPanel.style.display = "none";
                otpPanel.style.display = "block";
                // resetPasswordPanel.style.display = "none";
            })

            CRMCor.addEventListener("click", function () {
                loginPanel.style.display = "none";
                crmpanel.style.display = "block";
            })


            this.SalesRepDropDown = this.CRMSalesRepddService.Find().then((response => {
                this.SalesRepDropDown = this.CRMSalesRepddService.GetSalesRep(response.data.Result);
            }));

            //getOtpBtn.addEventListener("click", function () {
            //    resetPasswordPanel.style.display = "block";
            //    otpPanel.style.display = "none";
            //    loginPanel.style.display = "none";
            //})

            //resetPasswordBtn.addEventListener("click", function () {
            //    loginPanel.style.display = "block";
            //    otpPanel.style.display = "none";
            //    resetPasswordPanel.style.display = "none";
            //})
            /* ====================== Login Page Toggle Section Ended ========================== */
        }

        GetOTP(): void {
            if ((<HTMLInputElement>document.getElementById("txtEmAILotp")).value == undefined || (<HTMLInputElement>document.getElementById("txtEmAILotp")).value == null || (<HTMLInputElement>document.getElementById("txtEmAILotp")).value == "") {
                alert("enter email");

            } else {
                var email = (<HTMLInputElement>document.getElementById("txtEmAILotp")).value;
                this.OTPService.FindOTP(email).then((response => {
                    this.OtpUserDtls = this.OTPService.GetOTPDtls(response.data.Result);
                    console.log(this.OtpUserDtls);
                    this.Userid = this.OtpUserDtls.UserID.toString();
                    this.SecurityCode = this.OtpUserDtls.SecurityCode.toString();
                    if (response.data.Result != null) {

                        var loginPanel = document.getElementById("login-panel");
                        var otpPanel = document.getElementById("otp-panel");
                        var resetPasswordPanel = document.getElementById("reset-panel");

                        resetPasswordPanel.style.display = "block";
                        otpPanel.style.display = "none";
                        loginPanel.style.display = "none";
                        (<HTMLInputElement>document.getElementById("txtEmAILotp")).value = "";
                    }
                }));
            }

        }

        ChangePassword(): void {


            if ((<HTMLInputElement>document.getElementById("TxtreOTP")).value == undefined || (<HTMLInputElement>document.getElementById("TxtreOTP")).value == null || (<HTMLInputElement>document.getElementById("TxtreOTP")).value == "") {
                alert("enter OTP");

            } else if ((<HTMLInputElement>document.getElementById("txtPwdNew")).value == undefined || (<HTMLInputElement>document.getElementById("txtPwdNew")).value == null || (<HTMLInputElement>document.getElementById("txtPwdNew")).value == "") {
                alert("enter new pwd");

            } else if ((<HTMLInputElement>document.getElementById("txtPwdNewCnf")).value == undefined || (<HTMLInputElement>document.getElementById("txtPwdNewCnf")).value == null || (<HTMLInputElement>document.getElementById("txtPwdNewCnf")).value == "") {
                alert("enter cnf pwd");

            } else if ((<HTMLInputElement>document.getElementById("txtPwdNew")).value == (<HTMLInputElement>document.getElementById("txtPwdNewCnf")).value == null || (<HTMLInputElement>document.getElementById("txtPwdNewCnf")).value == "") {
                alert("pwd must be same");

            } else if ((<HTMLInputElement>document.getElementById("TxtreOTP")).value !== this.SecurityCode) {
                alert("enter correct otp");
            } else {
                var otp = (<HTMLInputElement>document.getElementById("TxtreOTP")).value;
                var pwd = (<HTMLInputElement>document.getElementById("txtPwdNew")).value;
                var cnfpwd = (<HTMLInputElement>document.getElementById("txtPwdNewCnf")).value;
                debugger;
                this.OTPService.FindPWDStatus(otp, pwd, this.Userid).then((response => {
                    this.changePwdStatus = this.OTPService.GetChangePWDStatus(response.data.Result);
                    console.log(this.OtpUserDtls);
                    debugger;
                    if (this.changePwdStatus == "1") {
                        alert("pwd change successfully");
                        var loginPanel = document.getElementById("login-panel");
                        var otpPanel = document.getElementById("otp-panel");
                        var resetPasswordPanel = document.getElementById("reset-panel");
                        loginPanel.style.display = "block";
                        otpPanel.style.display = "none";
                        resetPasswordPanel.style.display = "none";
                        (<HTMLInputElement>document.getElementById("TxtreOTP")).value = "";
                        (<HTMLInputElement>document.getElementById("txtPwdNew")).value = "";
                        (<HTMLInputElement>document.getElementById("txtPwdNewCnf")).value = "";
                    } else {
                        alert("pwd not change successfully");
                    }

                }));


            }

        }

        Submit(): void {
            $('#dvProgressBar').show();
            $('#myButton1').hide();
            $('#login-id-loader').show();
            if (this.LoginForm.UserName == undefined || this.LoginForm.UserName == null || this.LoginForm.UserName == "") {
                alert("please enter username");
                $('#myButton1').show();
                $('#login-id-loader').hide();

            } else if (this.LoginForm.Password == undefined || this.LoginForm.Password == null || this.LoginForm.Password == "") {
                alert("please enter Password");
                $('#myButton1').show();
                $('#login-id-loader').hide();

            } else {
                console.log(this.LoginForm);
                // if (this.LoginForm == undefined) {
                this.Service.Find(this.LoginForm).then((response => {
                    this.Login = this.Service.GetLogin(response.data.Result);
                    if (response.data.Result != null) {
                       
                    this.Login.CustomerID = '1';
                    this.CTService.FindUserFine(this.Login.UserID).then((response => {
                       
                        this.User = this.CTService.GetUserFine(response.data.Result);
                        
                        console.log(this.User);
                        this.Login.CopiaUserID = this.User.UserID.toString();
                        if (response.data.Result != null) {
                           
                        if (response.data.Result.Status == null) {
                            if (this.Login != null) {
                                this._cookieService.Put(this.LOGIN_COOKIE_KEY, this.Login);
                                this.SetLoginInformation(this.Login);
                                //redirect to MyAccount
                                //set root scope
                                let that = this;
                                // this._timeout(function () {
                                that._rootScope.IsDisplayLoginView = false;
                                that._window.location.href = "#!/home";
                                //that._window.location.href = "#!/QuickMenulist";
                                that._window.location.reload();
                                $('#dvProgressBar').hide();
                                $('#login-id-loader').hide();
                                $('#myButton1').show();
                                $('#login-id-loader').hide();
                            }
                            else {
                                alert("Invalid Credentials");
                                $('#dvProgressBar').hide();
                                $('#myButton1').show();
                                $('#login-id-loader').hide();
                            }
                        }
                        else {
                            this.accountID = response.data.Result.AccountID;
                            /// this.Product = response.data.Result.Product;
                            alert("Your Account Has been " + response.data.Result.Status + " Please Renew your Account");
                            $("#renewlink").show();
                            $('#dvProgressBar').hide();
                            $('#myButton1').show();
                            $('#login-id-loader').hide();
                        }
                    }
                    else {
                        alert("Invalid Credentials");
                        $('#dvProgressBar').hide();
                        $('#myButton1').show();
                        $('#login-id-loader').hide();
                        }
                    }));
                    }
                    else {
                        alert("Invalid Credentials");
                        $('#dvProgressBar').hide();
                        $('#myButton1').show();
                        $('#login-id-loader').hide();
                    }
                }));
                //}
                //else {
                //    $('#dvProgressBar').hide();
                //    $('#myButton1').show();g
                //}
            }
        }

        GetValidCRMLogin(): void {
            debugger;
            if ((<HTMLInputElement>document.getElementById("txtCorEmail")).value == undefined || (<HTMLInputElement>document.getElementById("txtCorEmail")).value == null || (<HTMLInputElement>document.getElementById("txtCorEmail")).value == "") {
                alert("Enter Email");
            }
            else {
                var email = (<HTMLInputElement>document.getElementById("txtCorEmail")).value;
                var password = "";
                this.OTPService.FindValidCRMUser(email, password).then((response => {
                    this.OtpCRMUserDtls = this.OTPService.GetValidCRMUserDtls(response.data.Result);
                    console.log(this.OtpCRMUserDtls);
                    this.Userid = this.OtpCRMUserDtls.UserID.toString();
                    this.SecurityCode = this.OtpCRMUserDtls.SecurityCode.toString();
                    if (response.data.Result != null) {

                        var loginPanel = document.getElementById("login-panel");
                        var crmPanel = document.getElementById("crm-panel");
                        var crmloginPanel = document.getElementById("crmlogin-panel");

                        crmloginPanel.style.display = "block";
                        crmPanel.style.display = "none";
                        loginPanel.style.display = "none";
                        (<HTMLInputElement>document.getElementById("txtCorEmail")).value = "";
                    }
                    else {
                        alert("Not Valid User");
                    }
                }));
            }

        }

        ChangeUserLogin(): void {
            this.SalesRepDropDown = this.CRMCordinatorddService.Find(this.CRMUser.UserID).then((response => {
                this.SalesRepDropDown = this.CRMCordinatorddService.GetSalesRep(response.data.Result);
            }));
        }

        private SetLoginInformation(data: any) {
            this.Service.ManageHeaderAfterLogin(data.UserName);
            //let that = this;
            //that._timeout(function () {
            //    that._scope.$parent.$parent.Name = data.VisitorName;
            //    console.log(that._scope.$parent.$parent.Name);                
            //});
        }

        private SetLoginInformation1(data: any) {
            this.CRMService.ManageHeaderAfterLogin(data.UserName);
        }

        CRMLogin(): void {
            if (this.CRMUser.UserName == undefined || this.CRMUser.UserName == null || this.CRMUser.UserName == "") {
                alert("please Enter Username");
                $('#myButton2').show();
                $('#login-id-loader').hide();

            } else if (this.CRMUser.Password == undefined || this.CRMUser.Password == null || this.CRMUser.Password == "") {
                alert("please Enter Password");
                $('#myButton2').show();
                $('#login-id-loader').hide();
            }
            else if (this.CRMUser.UserID == undefined || this.CRMUser.UserID == null || this.CRMUser.UserID == "") {
                alert("please Select User");
                $('#myButton2').show();
                $('#login-id-loader').hide();
            }
            else if (this.CRMUser.Comment == undefined || this.CRMUser.Comment == null || this.CRMUser.Comment == "") {
                alert("please Enter Comment");
                $('#myButton2').show();
                $('#login-id-loader').hide();
            }
            else {
                console.log(this.CRMUser);
                var email = (<HTMLInputElement>document.getElementById("txtParentUserEmail")).value;
                var Password = (<HTMLInputElement>document.getElementById("txtParentUserPass")).value;
                this.OTPService.FindValidCRMUser(email,Password).then((response => {
                    this.OtpCRMUserDtls = this.OTPService.GetValidCRMUserDtls(response.data.Result);
                    if (response.data.Result != null) {
                        this.CRMService.FindCRM(this.CRMUser).then((response => {
                            this.CRMLogindd = this.CRMService.GetCRMLogin(response.data.Result);
                            if (response.data.Result != null) {
                                if (response.data.Result.Status == null) {
                                    if (this.CRMLogindd != null) {
                                        this._cookieService.Put(this.LOGIN_COOKIE_KEY, this.CRMLogindd);
                                        this.SetLoginInformation1(this.CRMLogindd);
                                        let that = this;
                                        that._rootScope.IsDisplayLoginView = false;
                                        that._window.location.href = "#!/home";
                                        that._window.location.reload();
                                        $('#dvProgressBar').hide();
                                        $('#login-id-loader').hide();
                                        $('#myButton2').show();
                                        $('#login-id-loader').hide();
                                    }
                                    else {
                                        alert("Invalid Credentials");
                                        $('#dvProgressBar').hide();
                                        $('#myButton2').show();
                                        $('#login-id-loader').hide();
                                    }
                                }
                                else {
                                    this.accountID = response.data.Result.AccountID;
                                    alert("Your Account Has been " + response.data.Result.Status + " Please Renew your Account");
                                    $("#renewlink").show();
                                    $('#dvProgressBar').hide();
                                    $('#myButton2').show();
                                    $('#login-id-loader').hide();
                                }
                            }
                            else {
                                alert("Invalid Credentials");
                                $('#dvProgressBar').hide();
                                $('#myButton2').show();
                                $('#login-id-loader').hide();
                            }
                        }));
                        this.InsertService.PostCRMUserData(this.CRMUser).then((response => {
                            if (response.data.Result != false) {
                                let that = this;
                                that._window.location.href = "#!/home";
                            }
                            else {
                                alert("Invalid Credentials");
                            }
                        }));
                    }
                    else {
                        alert("Invalid User Authentication..!!");
                    }
                }));
            }
        }
    }


    class LoginComponent implements ng.IComponentOptions {
        static Name: string = "loginComponent"
        public bindings: any;
        public controller: any;
        // public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = LoginComponentController;
            this.templateUrl = "/Scripts/App/Login/Template/_LoginPage.html";
        }
    }

    app.AddComponent(LoginComponent.Name, new LoginComponent());
}
