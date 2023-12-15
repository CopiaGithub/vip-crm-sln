var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var FaultyLeadController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function FaultyLeadController() {
                    this.numRecords = 10;
                    this.page = 0;
                    this.incre = 0;
                    this.shownItems = [];
                    this.maxPages = 0;
                    this.ShowNext = true;
                    this.ShowBack = true;
                    this.NoOfRds = "10";
                    this.alert = null;
                }
                FaultyLeadController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                FaultyLeadController.prototype.Init = function () {
                };
                FaultyLeadController.prototype.next = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page += 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    //this.shownItems = this.ContactPersonList.slice(begin, end);
                    if (this.page + 1 >= this.maxPages) {
                        this.ShowNext = false;
                    }
                };
                ;
                FaultyLeadController.prototype.back = function () {
                    this.ShowBack = true;
                    this.ShowNext = true;
                    this.page -= 1;
                    var begin = this.page * this.numRecords;
                    var end = begin + this.numRecords;
                    //this.shownItems = this.ContactPersonList.slice(begin, end);
                    if (this.page < 1) {
                        this.ShowBack = false;
                    }
                };
                ;
                FaultyLeadController.$inject = [];
                return FaultyLeadController;
            }());
            var FaultyLeadComponentController = /** @class */ (function () {
                function FaultyLeadComponentController() {
                    this.controller = FaultyLeadController;
                    this.templateUrl = "/Scripts/App/FaultyLead/Template/_FaultyLead.html";
                }
                FaultyLeadComponentController.Name = "faultyleadcomponent";
                return FaultyLeadComponentController;
            }());
            app.AddComponent(FaultyLeadComponentController.Name, new FaultyLeadComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=FaultyLeadComponent.js.map