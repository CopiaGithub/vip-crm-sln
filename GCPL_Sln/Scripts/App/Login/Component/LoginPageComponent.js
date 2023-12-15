/// <reference path="../../../typings/angularjs/angular.d.ts" />
var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var LoginModel = GCPL.Model.ILoginPut;
            var CRMUserModel = GCPL.Model.GetCRMUserModel;
            var LoginComponentController = /** @class */ (function () {
                function LoginComponentController(_service, _otpService, _CRMSalesRepddService, _CRMCordinatorddService, _crmservice, _InsertService, _cookieService, _window, _scope, _timeout, _rootScope, _CTService) {
                    this._cookieService = _cookieService;
                    this._window = _window;
                    this._scope = _scope;
                    this._timeout = _timeout;
                    this._rootScope = _rootScope;
                    this.OtpUserDtls = null;
                    this.OtpCRMUserDtls = null;
                    this.changePwdStatus = null;
                    this.Login = null;
                    this.CRMLogindd = null;
                    this.accountID = null;
                    this.Product = null;
                    this.Userid = null;
                    this.SecurityCode = null;
                    this.SalesRepDropDown = null;
                    this.CRMUser = null;
                    this.User = null;
                    this.LoginForm = null;
                    this.Cookie = null;
                    this.LOGIN_COOKIE_KEY = "UserInfo";
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
                LoginComponentController.prototype.$onInit = function () {
                    this.Init();
                    $('#dvProgressBar').hide();
                    $('#myButton1').show();
                    $('#myButton2').show();
                    $('#login-id-loader').hide();
                };
                LoginComponentController.prototype.Init = function () {
                    var _this = this;
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
                    });
                    CRMCor.addEventListener("click", function () {
                        loginPanel.style.display = "none";
                        crmpanel.style.display = "block";
                    });
                    this.SalesRepDropDown = this.CRMSalesRepddService.Find().then((function (response) {
                        _this.SalesRepDropDown = _this.CRMSalesRepddService.GetSalesRep(response.data.Result);
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
                };
                LoginComponentController.prototype.GetOTP = function () {
                    var _this = this;
                    if (document.getElementById("txtEmAILotp").value == undefined || document.getElementById("txtEmAILotp").value == null || document.getElementById("txtEmAILotp").value == "") {
                        alert("enter email");
                    }
                    else {
                        var email = document.getElementById("txtEmAILotp").value;
                        this.OTPService.FindOTP(email).then((function (response) {
                            _this.OtpUserDtls = _this.OTPService.GetOTPDtls(response.data.Result);
                            console.log(_this.OtpUserDtls);
                            _this.Userid = _this.OtpUserDtls.UserID.toString();
                            _this.SecurityCode = _this.OtpUserDtls.SecurityCode.toString();
                            if (response.data.Result != null) {
                                var loginPanel = document.getElementById("login-panel");
                                var otpPanel = document.getElementById("otp-panel");
                                var resetPasswordPanel = document.getElementById("reset-panel");
                                resetPasswordPanel.style.display = "block";
                                otpPanel.style.display = "none";
                                loginPanel.style.display = "none";
                                document.getElementById("txtEmAILotp").value = "";
                            }
                        }));
                    }
                };
                LoginComponentController.prototype.ChangePassword = function () {
                    var _this = this;
                    if (document.getElementById("TxtreOTP").value == undefined || document.getElementById("TxtreOTP").value == null || document.getElementById("TxtreOTP").value == "") {
                        alert("enter OTP");
                    }
                    else if (document.getElementById("txtPwdNew").value == undefined || document.getElementById("txtPwdNew").value == null || document.getElementById("txtPwdNew").value == "") {
                        alert("enter new pwd");
                    }
                    else if (document.getElementById("txtPwdNewCnf").value == undefined || document.getElementById("txtPwdNewCnf").value == null || document.getElementById("txtPwdNewCnf").value == "") {
                        alert("enter cnf pwd");
                    }
                    else if (document.getElementById("txtPwdNew").value == document.getElementById("txtPwdNewCnf").value == null || document.getElementById("txtPwdNewCnf").value == "") {
                        alert("pwd must be same");
                    }
                    else if (document.getElementById("TxtreOTP").value !== this.SecurityCode) {
                        alert("enter correct otp");
                    }
                    else {
                        var otp = document.getElementById("TxtreOTP").value;
                        var pwd = document.getElementById("txtPwdNew").value;
                        var cnfpwd = document.getElementById("txtPwdNewCnf").value;
                        debugger;
                        this.OTPService.FindPWDStatus(otp, pwd, this.Userid).then((function (response) {
                            _this.changePwdStatus = _this.OTPService.GetChangePWDStatus(response.data.Result);
                            console.log(_this.OtpUserDtls);
                            debugger;
                            if (_this.changePwdStatus == "1") {
                                alert("pwd change successfully");
                                var loginPanel = document.getElementById("login-panel");
                                var otpPanel = document.getElementById("otp-panel");
                                var resetPasswordPanel = document.getElementById("reset-panel");
                                loginPanel.style.display = "block";
                                otpPanel.style.display = "none";
                                resetPasswordPanel.style.display = "none";
                                document.getElementById("TxtreOTP").value = "";
                                document.getElementById("txtPwdNew").value = "";
                                document.getElementById("txtPwdNewCnf").value = "";
                            }
                            else {
                                alert("pwd not change successfully");
                            }
                        }));
                    }
                };
                LoginComponentController.prototype.Submit = function () {
                    var _this = this;
                    $('#dvProgressBar').show();
                    $('#myButton1').hide();
                    $('#login-id-loader').show();
                    if (this.LoginForm.UserName == undefined || this.LoginForm.UserName == null || this.LoginForm.UserName == "") {
                        alert("please enter username");
                        $('#myButton1').show();
                        $('#login-id-loader').hide();
                    }
                    else if (this.LoginForm.Password == undefined || this.LoginForm.Password == null || this.LoginForm.Password == "") {
                        alert("please enter Password");
                        $('#myButton1').show();
                        $('#login-id-loader').hide();
                    }
                    else {
                        console.log(this.LoginForm);
                        // if (this.LoginForm == undefined) {
                        this.Service.Find(this.LoginForm).then((function (response) {
                            _this.Login = _this.Service.GetLogin(response.data.Result);
                            if (response.data.Result != null) {
                                _this.Login.CustomerID = '1';
                                _this.CTService.FindUserFine(_this.Login.UserID).then((function (response) {
                                    _this.User = _this.CTService.GetUserFine(response.data.Result);
                                    console.log(_this.User);
                                    _this.Login.CopiaUserID = _this.User.UserID.toString();
                                    if (response.data.Result != null) {
                                        if (response.data.Result.Status == null) {
                                            if (_this.Login != null) {
                                                _this._cookieService.Put(_this.LOGIN_COOKIE_KEY, _this.Login);
                                                _this.SetLoginInformation(_this.Login);
                                                //redirect to MyAccount
                                                //set root scope
                                                var that = _this;
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
                                            _this.accountID = response.data.Result.AccountID;
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
                };
                LoginComponentController.prototype.GetValidCRMLogin = function () {
                    var _this = this;
                    debugger;
                    if (document.getElementById("txtCorEmail").value == undefined || document.getElementById("txtCorEmail").value == null || document.getElementById("txtCorEmail").value == "") {
                        alert("Enter Email");
                    }
                    else {
                        var email = document.getElementById("txtCorEmail").value;
                        var password = "";
                        this.OTPService.FindValidCRMUser(email, password).then((function (response) {
                            _this.OtpCRMUserDtls = _this.OTPService.GetValidCRMUserDtls(response.data.Result);
                            console.log(_this.OtpCRMUserDtls);
                            _this.Userid = _this.OtpCRMUserDtls.UserID.toString();
                            _this.SecurityCode = _this.OtpCRMUserDtls.SecurityCode.toString();
                            if (response.data.Result != null) {
                                var loginPanel = document.getElementById("login-panel");
                                var crmPanel = document.getElementById("crm-panel");
                                var crmloginPanel = document.getElementById("crmlogin-panel");
                                crmloginPanel.style.display = "block";
                                crmPanel.style.display = "none";
                                loginPanel.style.display = "none";
                                document.getElementById("txtCorEmail").value = "";
                            }
                            else {
                                alert("Not Valid User");
                            }
                        }));
                    }
                };
                LoginComponentController.prototype.ChangeUserLogin = function () {
                    var _this = this;
                    this.SalesRepDropDown = this.CRMCordinatorddService.Find(this.CRMUser.UserID).then((function (response) {
                        _this.SalesRepDropDown = _this.CRMCordinatorddService.GetSalesRep(response.data.Result);
                    }));
                };
                LoginComponentController.prototype.SetLoginInformation = function (data) {
                    this.Service.ManageHeaderAfterLogin(data.UserName);
                    //let that = this;
                    //that._timeout(function () {
                    //    that._scope.$parent.$parent.Name = data.VisitorName;
                    //    console.log(that._scope.$parent.$parent.Name);                
                    //});
                };
                LoginComponentController.prototype.SetLoginInformation1 = function (data) {
                    this.CRMService.ManageHeaderAfterLogin(data.UserName);
                };
                LoginComponentController.prototype.CRMLogin = function () {
                    var _this = this;
                    if (this.CRMUser.UserName == undefined || this.CRMUser.UserName == null || this.CRMUser.UserName == "") {
                        alert("please Enter Username");
                        $('#myButton2').show();
                        $('#login-id-loader').hide();
                    }
                    else if (this.CRMUser.Password == undefined || this.CRMUser.Password == null || this.CRMUser.Password == "") {
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
                        var email = document.getElementById("txtParentUserEmail").value;
                        var Password = document.getElementById("txtParentUserPass").value;
                        this.OTPService.FindValidCRMUser(email, Password).then((function (response) {
                            _this.OtpCRMUserDtls = _this.OTPService.GetValidCRMUserDtls(response.data.Result);
                            if (response.data.Result != null) {
                                _this.CRMService.FindCRM(_this.CRMUser).then((function (response) {
                                    _this.CRMLogindd = _this.CRMService.GetCRMLogin(response.data.Result);
                                    if (response.data.Result != null) {
                                        if (response.data.Result.Status == null) {
                                            if (_this.CRMLogindd != null) {
                                                _this._cookieService.Put(_this.LOGIN_COOKIE_KEY, _this.CRMLogindd);
                                                _this.SetLoginInformation1(_this.CRMLogindd);
                                                var that = _this;
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
                                            _this.accountID = response.data.Result.AccountID;
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
                                _this.InsertService.PostCRMUserData(_this.CRMUser).then((function (response) {
                                    if (response.data.Result != false) {
                                        var that = _this;
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
                };
                //inject inbuild service and other services
                LoginComponentController.$inject = ["LoginPageService", "ChangePwdService", "CRMSalesRepddService", "CRMCordinatorddService", "CRMLoginPageService", "InsertCRMService", "CookieService", "$window", "$scope", "$timeout", "$rootScope", "CreateTicketService"];
                return LoginComponentController;
            }());
            var LoginComponent = /** @class */ (function () {
                function LoginComponent() {
                    this.controller = LoginComponentController;
                    this.templateUrl = "/Scripts/App/Login/Template/_LoginPage.html";
                }
                LoginComponent.Name = "loginComponent";
                return LoginComponent;
            }());
            app.AddComponent(LoginComponent.Name, new LoginComponent());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LoginPageComponent.js.map