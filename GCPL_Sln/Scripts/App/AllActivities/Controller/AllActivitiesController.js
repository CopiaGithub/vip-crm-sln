var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
        var AllActivitiesController = /** @class */ (function (_super) {
            __extends(AllActivitiesController, _super);
            function AllActivitiesController() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AllActivitiesController;
        }(GCPL.Controller.CoockiesBaseController));
        Controller.AllActivitiesController = AllActivitiesController;
        app.AddController("AllActivitiesController", AllActivitiesController);
    })(Controller = GCPL.Controller || (GCPL.Controller = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AllActivitiesController.js.map