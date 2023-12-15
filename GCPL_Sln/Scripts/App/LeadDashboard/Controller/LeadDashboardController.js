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
        var LeadDashboardController = /** @class */ (function (_super) {
            __extends(LeadDashboardController, _super);
            function LeadDashboardController() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LeadDashboardController;
        }(GCPL.Controller.CoockiesBaseController));
        Controller.LeadDashboardController = LeadDashboardController;
        app.AddController("LeadDashboardController", LeadDashboardController);
    })(Controller = GCPL.Controller || (GCPL.Controller = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=LeadDashboardController.js.map