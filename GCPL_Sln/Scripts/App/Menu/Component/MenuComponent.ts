

namespace GCPL.Component.Home {

    import app = GCPL.app;
    import Service = GCPL.Service;
    import model = GCPL.Model.MenuRequest;


    interface IMenuController {
        MenuGroup: Array<Model.MenuGroupResponse>
        MenuRequest: model;
        SubMenu: Array<Model.MenuSubResponse>;
        groupname(item: any): void;
        name: any;
    }

    class MenuController implements IMenuController {
        MenuGroup = null;
        SubMenu = null;
        name = null;
        mainmenuindex: number;
        submenushow: boolean = false;
        childsubmenushow: boolean = false;
        MenuRequest: GCPL.Model.MenuRequest = null;;
        private Cookie: any = null;
        private Menuservice: Service.IMenuService;
        static $inject = ["MenuService", "$cookieStore"];
        constructor(_MenuService: Service.IMenuService, private _cookieStore: any) {
            this.Menuservice = _MenuService;
            this.MenuRequest = new model();
            this.Cookie = _cookieStore;
            this.MenuRequest.RoleId = this.Cookie.get('UserInfo')['RoleID'];
            this.MenuRequest.BusinessEntityID = this.Cookie.get('UserInfo')['BusinessEntityID'];
        }

        $onInit() {
            this.Init();
        }
        Init(): void {
            this.MenuGroup = this.Menuservice.Find(this.MenuRequest).then((response => {
                this.MenuGroup = this.Menuservice.GetMenuGroup(response.data.Result);
                
                console.log(this.MenuGroup);
                this.groupname(this.MenuGroup.GroupName);
            }));

        }
        abc(data) {

            console.log(data);
            this.mainmenuindex = data;
            this.submenushow = this.submenushow == true ? false : true;
        }

        public groupname(item: any): void {

            this.name = item;
        };
    }



    class MenuComponent implements ng.IComponentOptions {

        static Name: string = "menucomponent"
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        constructor() {
            this.controller = MenuController;
            this.templateUrl = "/Scripts/App/Menu/Template/_Menu.html";
        }
    }
    app.AddComponent(MenuComponent.Name, new MenuComponent());
}


