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
    var Model;
    (function (Model) {
        var MainModuleDDModel = /** @class */ (function () {
            function MainModuleDDModel() {
            }
            return MainModuleDDModel;
        }());
        Model.MainModuleDDModel = MainModuleDDModel;
        var SubMainModuleModel = /** @class */ (function () {
            function SubMainModuleModel() {
            }
            return SubMainModuleModel;
        }());
        Model.SubMainModuleModel = SubMainModuleModel;
        var MenuGridModel = /** @class */ (function () {
            function MenuGridModel() {
            }
            return MenuGridModel;
        }());
        Model.MenuGridModel = MenuGridModel;
        var InsertRoleAccess = /** @class */ (function (_super) {
            __extends(InsertRoleAccess, _super);
            function InsertRoleAccess() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return InsertRoleAccess;
        }(MenuGridModel));
        Model.InsertRoleAccess = InsertRoleAccess;
    })(Model = GCPL.Model || (GCPL.Model = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AccessModuleMasterModel.js.map