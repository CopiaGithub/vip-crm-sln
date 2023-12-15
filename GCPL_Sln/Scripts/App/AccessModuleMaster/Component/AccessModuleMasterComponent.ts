namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import Insert = GCPL.Model.InsertRoleAccess;



    interface IAccessModuleMasterController {

        RoleDropDown: Array<Model.RoleDDModel>
        MainModuleDropDown: Array<Model.MainModuleDDModel>
        MainModuleParentID: any;
        SubModuleDropDown: Array<Model.SubMainModuleModel>
        SubModule(): void;
        ParentID: any;
        InsertRoleAccess: Insert;
        Submit(): void;
    }

    class AccessModuleMasterController implements IAccessModuleMasterController {

        private RoleService: Service.IRoleddService;
        RoleDropDown = null;
        MainModuleDropDown = null;
        MainModuleParentID = null;
        SubModuleDropDown = null;
        ParentID = null;
        alert = null;
        i = 0;
        FillModuleGrid = null;
        private Cookie: any = null;
        private MMService: Service.IMainModuleddService;
        private SMService: Service.ISubMainModuleddService;
        InsertRoleAccess: Model.InsertRoleAccess = null;
        private RoleAccessRelation: Service.IMenuGridService;
        private RoleAccessMService: Service.IInsertAccessRoleService;

        static $inject = ["RoleddService", "MainModuleddService", "SubMainModuleddService", "MenuGridService", "InsertAccessRoleService", "$cookieStore"];


        //constructor define with Serivce _Name:Service.IServiceName//

        constructor(_RoleService: Service.IRoleddService, _MMService: Service.IMainModuleddService, _SMService: Service.ISubMainModuleddService, _RoleAccessRelation: Service.IMenuGridService,
            _RoleAccessMService: Service.IInsertAccessRoleService, private _cookieStore: any) {


            this.RoleService = _RoleService;
            this.MMService = _MMService;
            this.SMService = _SMService;
            this.RoleAccessRelation = _RoleAccessRelation;
            this.RoleAccessMService = _RoleAccessMService;
            this.InsertRoleAccess = new Insert();
            this.Cookie = _cookieStore;
        }



        $onInit() {
            $('#search-btn-loader').hide();
            $("#errorclose").hide();
            $("#close").hide();
            this.Init();
            //this.MainModuleParentID = "";
            //this.ParentID = "";

        }
        Init(): void {
            $("#errorclose").hide();
            $("#close").hide();
            this.RoleDropDown = this.RoleService.Find().then((response => {
                this.RoleDropDown = this.RoleService.GetRole(response.data.Result);

            }));
            debugger;
            this.MainModuleDropDown = this.MMService.Find().then((response => {
                this.MainModuleDropDown = this.MMService.GetMainModule(response.data.Result);
                this.MainModuleDropDown.forEach(function (value, key) {
                    if (value.MainModuleID == 0) {
                        //value.Remove();

                    }
                });
            }));
        }
        SubModule(): void {
            this.SubModuleDropDown = this.SMService.Find(this.MainModuleParentID).then((response => {
                this.SubModuleDropDown = this.SMService.GetSubMainModule(response.data.Result);

            }));
        }
        FillGrid() {
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
                this.FillModuleGrid = this.RoleAccessRelation.FindGrid(this.ParentID, this.InsertRoleAccess.RoleID).then((response => {

                    this.FillModuleGrid = this.RoleAccessRelation.GetGrid(response.data.Result);
                    debugger;
                    this.FillModuleGrid.forEach(function AddFunction(element, index, array) {
                        if (element.IsWeb == "true") {
                            element.Status = true;
                        }

                    });
                    $("#errorclose").hide();
                    $("#close").show();
                    this.alert = "All records are retrieve successfully ";

                }), function (err) {
                    console.log(err);
                });
                // this.ParentID = this.FillModuleGrid.ParentMenuID;
                //this.MainModuleParentID = this.FillModuleGrid.SubMenuID;

                console.log(this.FillModuleGrid);
            }
        }

        Clear() {
            debugger;
            this.FillModuleGrid = "";
        }

        Submit(): void {

            debugger;
            this.InsertRoleAccess.RoleID = this.InsertRoleAccess.RoleID;
            this.InsertRoleAccess.InsertDetails = this.FindSelectedRole();
            debugger;
            this.RoleAccessMService.PostRoleAccessRelation(this.InsertRoleAccess).then((response => {
                //$('#search-btn-loader').hide();
                debugger;
                if (response.data != null || response.data != 0) {
                    $("#errorclose").hide();
                    $("#close").show();
                    this.popupMessage("Data Updated Successfully .", "success-modal-head", "error-modal-head", "#success-img-id", "#error-img-id");
                    this.FillModuleGrid = "";
                    this.ParentID = null;
                    this.MainModuleParentID = null;
                    this.InsertRoleAccess.RoleID = null;

                }
                else {
                    this.HideShow();
                    this.popupMessage("Oops Some Error Occured", "error-modal-head", "success-modal-head", "#error-img-id", "#success-img-id");
                }


            }));



            //}
        }
        Refresh() {
            this.FillGrid();

        }
        private FindSelectedRole() {
            debugger;
            let listOfSelectedRole = [];
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

    }
    class AccessModuleMasterComponentController implements ng.IComponentOptions {
        static Name: string = "accessmodulemastercomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = AccessModuleMasterController;
            this.templateUrl = "/Scripts/App/AccessModuleMaster/Template/_AccessModuleMaster.html";
        }
    }
    app.AddComponent(AccessModuleMasterComponentController.Name, new AccessModuleMasterComponentController());


}
