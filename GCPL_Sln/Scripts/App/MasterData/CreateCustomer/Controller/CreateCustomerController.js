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
        var CreateCustomerController = /** @class */ (function (_super) {
            __extends(CreateCustomerController, _super);
            function CreateCustomerController() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CreateCustomerController;
        }(GCPL.Controller.CoockiesBaseController));
        Controller.CreateCustomerController = CreateCustomerController;
        app.AddController("CreateCustomerController", CreateCustomerController);
    })(Controller = GCPL.Controller || (GCPL.Controller = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CreateCustomerController.js.map