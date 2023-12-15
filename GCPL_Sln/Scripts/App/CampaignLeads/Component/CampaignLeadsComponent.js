var GCPL;
(function (GCPL) {
    var Component;
    (function (Component) {
        var Home;
        (function (Home) {
            var app = GCPL.app;
            var CampaignLeadsController = /** @class */ (function () {
                //constructor define with Serivce _Name:Service.IServiceName//
                function CampaignLeadsController() {
                }
                CampaignLeadsController.prototype.$onInit = function () {
                    this.Init();
                };
                //Page Load Define Values//
                CampaignLeadsController.prototype.Init = function () {
                };
                CampaignLeadsController.$inject = [];
                return CampaignLeadsController;
            }());
            var CampaignLeadsComponentController = /** @class */ (function () {
                function CampaignLeadsComponentController() {
                    this.controller = CampaignLeadsController;
                    this.templateUrl = "/Scripts/App/CampaignLeads/Template/_CampaignLeads.html";
                }
                CampaignLeadsComponentController.Name = "campaignleadscomponent";
                return CampaignLeadsComponentController;
            }());
            app.AddComponent(CampaignLeadsComponentController.Name, new CampaignLeadsComponentController());
        })(Home = Component.Home || (Component.Home = {}));
    })(Component = GCPL.Component || (GCPL.Component = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=CampaignLeadsComponent.js.map