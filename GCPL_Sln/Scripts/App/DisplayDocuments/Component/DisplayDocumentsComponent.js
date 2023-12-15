var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var DisplayDocumentsController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function DisplayDocumentsController() {
                }
                DisplayDocumentsController.prototype.$onInit = function () {
                    this.Init();
                    $(".date-pick").datepicker();
                    $("#display-container").hide();
                };
                //Page Load Define Values//
                DisplayDocumentsController.prototype.Init = function () {
                    var dImageContainer = document.getElementsByClassName("documents-img-container");
                    for (var i = 0; i < dImageContainer.length; i++) {
                        dImageContainer[i].addEventListener("click", function () {
                            $("#display-container").slideDown();
                        });
                    }
                    $("#close").click(function () {
                        $("#display-container").hide();
                    });
                };
                DisplayDocumentsController.$inject = [];
                return DisplayDocumentsController;
            }());
            var DisplayDocumentsComponentController = /** @class */ (function () {
                function DisplayDocumentsComponentController() {
                    this.controller = DisplayDocumentsController;
                    this.templateUrl = "/Scripts/App/DisplayDocuments/Template/DisplayDocuments.html";
                }
                DisplayDocumentsComponentController.Name = "displaydocumentscomponent";
                return DisplayDocumentsComponentController;
            }());
            app.AddComponent(DisplayDocumentsComponentController.Name, new DisplayDocumentsComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=DisplayDocumentsComponent.js.map