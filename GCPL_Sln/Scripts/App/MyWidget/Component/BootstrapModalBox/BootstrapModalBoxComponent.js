///// <reference path="../../../../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///// <reference path="../../../../typings/jqueryui/jqueryui.d.ts" />
var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var BootstrapModalBoxComponentController = /** @class */ (function () {
                function BootstrapModalBoxComponentController(_window) {
                    this._window = _window;
                    //overlay...
                    $('#myModalBox').addClass('in'); //old way..
                    $('#myModalBox').show();
                }
                BootstrapModalBoxComponentController.prototype.$onInit = function () {
                };
                BootstrapModalBoxComponentController.prototype.Close = function () {
                    //send to consumer comp....              
                    this.onPopupClose({
                        item: true
                    });
                    $('#myModalBox').removeClass('in'); //old way..
                    $('#myModalBox').hide();
                    $('.modal-backdrop').remove();
                };
                BootstrapModalBoxComponentController.$inject = ["$window"];
                return BootstrapModalBoxComponentController;
            }());
            var BootstrapModalBoxComponent = /** @class */ (function () {
                function BootstrapModalBoxComponent() {
                    this.controller = BootstrapModalBoxComponentController;
                    this.bindings = {
                        onPopupClose: '&',
                        modalBoxId: '@'
                        //data => > one way
                        //data => = two way
                    };
                    this.templateUrl = "/Scripts/App/MyWidget/Template/_basicModalBox.html";
                }
                BootstrapModalBoxComponent.Name = "bootstrapBasicModalBoxWidget";
                return BootstrapModalBoxComponent;
            }());
            app.AddComponent(BootstrapModalBoxComponent.Name, new BootstrapModalBoxComponent());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=BootstrapModalBoxComponent.js.map