var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GCPL;
(function (GCPL) {
    var Controller;
    (function (Controller) {
        var app = GCPL.app;
        var OtherMachineController = /** @class */ (function (_super) {
            __extends(OtherMachineController, _super);
            function OtherMachineController() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OtherMachineController;
        }(GCPL.Controller.CoockiesBaseController));
        Controller.OtherMachineController = OtherMachineController;
        app.AddController("OtherMachineController", OtherMachineController);
    })(Controller = GCPL.Controller || (GCPL.Controller = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=OtherMachineController.js.map