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
        var IProduct = /** @class */ (function () {
            function IProduct() {
            }
            return IProduct;
        }());
        Model.IProduct = IProduct;
    })(Model = GCPL.Model || (GCPL.Model = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Model;
    (function (Model) {
        var IPopularProduct = /** @class */ (function (_super) {
            __extends(IPopularProduct, _super);
            function IPopularProduct() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return IPopularProduct;
        }(Model.IProduct));
        Model.IPopularProduct = IPopularProduct;
    })(Model = GCPL.Model || (GCPL.Model = {}));
})(GCPL || (GCPL = {}));
(function (GCPL) {
    var Model;
    (function (Model) {
        var IRentedProduct = /** @class */ (function (_super) {
            __extends(IRentedProduct, _super);
            function IRentedProduct() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return IRentedProduct;
        }(Model.IProduct));
        Model.IRentedProduct = IRentedProduct;
    })(Model = GCPL.Model || (GCPL.Model = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=PopularProduct.js.map