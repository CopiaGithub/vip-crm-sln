var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var RegionMasterController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function RegionMasterController() {
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
                RegionMasterController.prototype.$onInit = function () {
                    var that = this;
                    $('#search-btn-loader').hide();
                };
                //Page Load Define Values//
                RegionMasterController.prototype.Init = function () {
                };
                RegionMasterController.prototype.next = function () {
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
                RegionMasterController.prototype.back = function () {
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
                RegionMasterController.$inject = [];
                return RegionMasterController;
            }());
            var RegionMasterComponentController = /** @class */ (function () {
                function RegionMasterComponentController() {
                    this.controller = RegionMasterController;
                    this.templateUrl = "/Scripts/App/MasterData/RegionMaster/Template/_RegionMaster.html";
                }
                RegionMasterComponentController.Name = "regionmastercomponent";
                return RegionMasterComponentController;
            }());
            app.AddComponent(RegionMasterComponentController.Name, new RegionMasterComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
3;
//# sourceMappingURL=RegionMasterComponent.js.map