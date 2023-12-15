/// <reference path="../../typings/angularjs/angular.d.ts" />
//https://fromjami.com/2015/11/15/custom-ajax-service-calls-using-http-in-angular-js-and-typescript/
var GCPL;
(function (GCPL) {
    var Utility;
    (function (Utility) {
        var Ajax;
        (function (Ajax) {
            var AjaxUtility = /** @class */ (function () {
                function AjaxUtility(_http, _q) {
                    this.$http = _http;
                    this.$q = _q;
                }
                AjaxUtility.prototype.Get = function (requestParameter) {
                    return this.$http.get(requestParameter.Url, requestParameter.Config);
                };
                AjaxUtility.prototype.Post = function (requestParameter) {
                    return this.$http.post(requestParameter.Url, requestParameter.data, requestParameter.Config);
                };
                return AjaxUtility;
            }());
            Ajax.AjaxUtility = AjaxUtility;
        })(Ajax = Utility.Ajax || (Utility.Ajax = {}));
    })(Utility = GCPL.Utility || (GCPL.Utility = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=AjaxUtility.js.map