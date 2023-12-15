var GCPL;
(function (GCPL) {
    var MyWidget;
    (function (MyWidget) {
        var Dropdown;
        (function (Dropdown) {
            var DropdownWidgetComponentController = /** @class */ (function () {
                function DropdownWidgetComponentController() {
                    this.data = null;
                    this.selecteditem = "";
                    this.height = null;
                    this.width = null;
                    this.class = null;
                }
                DropdownWidgetComponentController.prototype.$onInit = function () {
                    this.Init();
                };
                DropdownWidgetComponentController.prototype.Init = function () {
                };
                return DropdownWidgetComponentController;
            }());
            var DropdownWidgetComponent = /** @class */ (function () {
                function DropdownWidgetComponent() {
                    this.bindings = {
                        data: '<',
                        selecteditem: '='
                    };
                    this.controller = DropdownWidgetComponentController;
                    this.template = [
                        '<select ng-model="$ctrl.selecteditem">',
                        '<option ng-repeat="item in $ctrl.data" ng-value="{{item.Id}}">',
                        '{{item.Name}}',
                        '</option>',
                        '</select>'
                    ].join("");
                }
                DropdownWidgetComponent.Name = "dropdownWidgetComponent";
                return DropdownWidgetComponent;
            }());
            GCPL.app.AddComponent(DropdownWidgetComponent.Name, new DropdownWidgetComponent());
        })(Dropdown = MyWidget.Dropdown || (MyWidget.Dropdown = {}));
    })(MyWidget = GCPL.MyWidget || (GCPL.MyWidget = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DropdownComponent.js.map