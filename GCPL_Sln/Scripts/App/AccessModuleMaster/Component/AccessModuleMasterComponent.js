var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var Insert = GCPL.Model.InsertRoleAccess;
            var AccessModuleMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function AccessModuleMasterController(_RoleService, _MMService, _SMService, _RoleAccessRelation, _RoleAccessMService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.RoleDropDown = null;
                    this.MainModuleDropDown = null;
                    this.MainModuleParentID = null;
                    this.SubModuleDropDown = null;
                    this.ParentID = null;
                    this.alert = null;
                    this.i = 0;
                    this.FillModuleGrid = null;
                    this.Cookie = null;
                    this.InsertRoleAccess = null;
                    this.RoleService = _RoleService;
                    this.MMService = _MMService;
                    this.SMService = _SMService;
                    this.RoleAccessRelation = _RoleAccessRelation;
                    this.RoleAccessMService = _RoleAccessMService;
                    this.InsertRoleAccess = new Insert();
                    this.Cookie = _cookieStore;
                }
                AccessModuleMasterController.prototype.$onInit = function () {
                    $('#search-btn-loader').hide();
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.Init();
                    //this.MainModuleParentID = "";
                    //this.ParentID = "";
                };
                AccessModuleMasterController.prototype.Init = function () {
                    var _this = this;
                    $("#errorclose").hide();
                    $("#close").hide();
                    this.RoleDropDown = this.RoleService.Find().then((function (response) {
                        _this.RoleDropDown = _this.RoleService.GetRole(response.data.Result);
                    }));
                    debugger;
                    this.MainModuleDropDown = this.MMService.Find().then((function (response) {
                        _this.MainModuleDropDown = _this.MMService.GetMainModule(response.data.Result);
                        _this.MainModuleDropDown.forEach(function (value, key) {
                            if (value.MainModuleID == 0) {
                                //value.Remove();
                            }
                        });
                    }));
                };
                AccessModuleMasterController.prototype.SubModule = function () {
                    var _this = this;
                    this.SubModuleDropDown = this.SMService.Find(this.MainModuleParentID).then((function (response) {
                        _this.SubModuleDropDown = _this.SMService.GetSubMainModule(response.data.Result);
                    }));
                };
                AccessModuleMasterController.prototype.FillGrid = function () {
                    var _this = this;
                    $('#search-btn-loader').show();
                    debugger;
                    if (this.InsertRoleAccess.RoleID == undefined || this.InsertRoleAccess.RoleID == "" || this.InsertRoleAccess.RoleID == null) {
                        $("#errorclose").show();
                        $("#close").hide();
                        this.alert = "Please Select Role";
                    }
                    else if (this.MainModuleParentID == undefined || this.MainModuleParentID == "" || this.MainModuleParentID == null) {
                        $("#errorclose").show();
                        $("#close").hide();
                        this.alert = "Please Select Main Module ";
                    }
                    else if (this.ParentID == undefined || this.ParentID == "" || this.ParentID == null) {
                        $("#errorclose").show();
                        $("#close").hide();
                        this.alert = "Please Select Sub Module ";
                    }
                    else {
                        debugger;
                        this.FillModuleGrid = this.RoleAccessRelation.FindGrid(this.ParentID, this.InsertRoleAccess.RoleID).then((function (response) {
                            _this.FillModuleGrid = _this.RoleAccessRelation.GetGrid(response.data.Result);
                            debugger;
                            _this.FillModuleGrid.forEach(function AddFunction(element, index, array) {
                                if (element.IsWeb == "true") {
                                    element.Status = true;
                                }
                            });
                            $("#errorclose").hide();
                            $("#close").show();
                            _this.alert = "All records are retrieve successfully ";
                        }), function (err) {
                            console.log(err);
                        });
                        // this.ParentID = this.FillModuleGrid.ParentMenuID;
                        //this.MainModuleParentID = this.FillModuleGrid.SubMenuID;
                        console.log(this.FillModuleGrid);
                    }
                };
                AccessModuleMasterController.prototype.Clear = function () {
                    debugger;
                    this.FillModuleGrid = "";
                };
                AccessModuleMasterController.prototype.Submit = function () {
                    var _this = this;
                    debugger;
                    this.InsertRoleAccess.RoleID = this.InsertRoleAccess.RoleID;
                    this.InsertRoleAccess.InsertDetails = this.FindSelectedRole();
                    debugger;
                    this.RoleAccessMService.PostRoleAccessRelation(this.InsertRoleAccess).then((function (response) {
                        //$('#search-btn-loader').hide();
                        debugger;
                        if (response.data != null || response.data != 0) {
                            $("#errorclose").hide();
                            $("#close").show();
                            _this.popupMessage("Data Updated Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                            _this.FillModuleGrid = "";
                            _this.ParentID = null;
                            _this.MainModuleParentID = null;
                            _this.InsertRoleAccess.RoleID = null;
                        }
                        else {
                            _this.HideShow();
                            _this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                        }
                    }));
                    //}
                };
                AccessModuleMasterController.prototype.Refresh = function () {
                    this.FillGrid();
                };
                AccessModuleMasterController.prototype.FindSelectedRole = function () {
                    debugger;
                    var listOfSelectedRole = [];
                    debugger;
                    $.each(this.FillModuleGrid, function (key, item) {
                        console.log(item);
                        if (item.IsWeb == true && item.IsMobile == false) {
                            listOfSelectedRole.push(item);
                        }
                        else if (item.IsWeb == false && item.IsMobile == true) {
                            listOfSelectedRole.push(item);
                        }
                        else if (item.IsWeb == true && item.IsMobile == true) {
                            listOfSelectedRole.push(item);
                        }
                        else {
                            listOfSelectedRole.push(item);
                        }
                        //if (item.IsMobile == true) {
                        //    listOfSelectedRole.push(item);
                        //}
                        //if (item.IsMobile == false) {
                        //    listOfSelectedRole.push(item);
                        //}
                    });
                    console.log(listOfSelectedRole);
                    return listOfSelectedRole;
                };
                AccessModuleMasterController.prototype.HideShow = function () {
                    $("#errorclose").show();
                    $("#close").hide();
                };
                AccessModuleMasterController.prototype.popupMessage = function (Message, AddClass, RemoveClass, ShowImg, HideImg) {
                    $("#message-text").html(Message);
                    $("#success-modal-head").addClass(AddClass).removeClass(RemoveClass);
                    $(ShowImg).show();
                    $(HideImg).hide();
                    $("#succeess-message-box").modal("show");
                };
                AccessModuleMasterController.$inject = ["RoleddService", "MainModuleddService", "SubMainModuleddService", "MenuGridService", "InsertAccessRoleService", "$cookieStore"];
                return AccessModuleMasterController;
            }());
            var AccessModuleMasterComponentController = /** @class */ (function () {
                function AccessModuleMasterComponentController() {
                    this.controller = AccessModuleMasterController;
                    this.templateUrl = "/Scripts/App/AccessModuleMaster/Template/_AccessModuleMaster.html";
                }
                AccessModuleMasterComponentController.Name = "accessmodulemastercomponent";
                return AccessModuleMasterComponentController;
            }());
            app.AddComponent(AccessModuleMasterComponentController.Name, new AccessModuleMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AccessModuleMasterComponent.js.map