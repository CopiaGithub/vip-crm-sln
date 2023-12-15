var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var model = GCPL.Model.MenuRequest;
            var MenuController = /** @class */ (function () {
                function MenuController(_MenuService, _cookieStore) {
                    this._cookieStore = _cookieStore;
                    this.MenuGroup = null;
                    this.SubMenu = null;
                    this.name = null;
                    this.submenushow = false;
                    this.childsubmenushow = false;
                    this.MenuRequest = null;
                    this.Cookie = null;
                    this.Menuservice = _MenuService;
                    this.MenuRequest = new model();
                    this.Cookie = _cookieStore;
                    this.MenuRequest.RoleId = this.Cookie.get('UserInfo')['RoleID'];
                    this.MenuRequest.BusinessEntityID = this.Cookie.get('UserInfo')['BusinessEntityID'];
                }
                ;
                MenuController.prototype.$onInit = function () {
                    this.Init();
                };
                MenuController.prototype.Init = function () {
                    var _this = this;
                    this.MenuGroup = this.Menuservice.Find(this.MenuRequest).then((function (response) {
                        _this.MenuGroup = _this.Menuservice.GetMenuGroup(response.data.Result);
                        console.log(_this.MenuGroup);
                        _this.groupname(_this.MenuGroup.GroupName);
                    }));
                };
                MenuController.prototype.abc = function (data) {
                    console.log(data);
                    this.mainmenuindex = data;
                    this.submenushow = this.submenushow == true ? false : true;
                };
                MenuController.prototype.groupname = function (item) {
                    this.name = item;
                };
                ;
                MenuController.$inject = ["MenuService", "$cookieStore"];
                return MenuController;
            }());
            var MenuComponent = /** @class */ (function () {
                function MenuComponent() {
                    this.controller = MenuController;
                    this.templateUrl = "/Scripts/App/Menu/Template/_Menu.html";
                }
                MenuComponent.Name = "menucomponent";
                return MenuComponent;
            }());
            app.AddComponent(MenuComponent.Name, new MenuComponent());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=MenuComponent.js.map