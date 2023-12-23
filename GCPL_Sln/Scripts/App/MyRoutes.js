/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/angularjs/angular-ui-router.d.ts" />
var GCPL;
(function (GCPL) {
    var MyRoute;
    (function (MyRoute) {
        var Route = /** @class */ (function () {
            function Route() {
            }
            Route.configureRoutes = function ($routeProvider) {
                $routeProvider
                    .when("/Login", {
                    templateUrl: "/Scripts/App/Login/Template/_ParentLoginPage.html",
                })
                    .when("/logout", {
                    templateUrl: "/Scripts/App/Logout/Template/_Logout.html",
                })
                    .when("/home", {
                    templateUrl: "/Scripts/App/Home/Template/ParentHome.html",
                })
                    .when("/ChangePassword", {
                    templateUrl: "/Scripts/App/Otp/Template/ParentOtp.html",
                })
                    .when("/FaultyLead", {
                    templateUrl: "/Scripts/App/FaultyLead/Template/_ParentFaultyLead.html",
                })
                    .when("/FaultyLeadManagement", {
                    templateUrl: "/Scripts/App/FaultyLeadManagement/Template/_ParentFaultyLeadManagement.html",
                })
                    .when("/CampaignMaster", {
                    templateUrl: "/Scripts/App/BulkUpload/CampaignMaster/Template/_ParentCampaignMaster.html",
                })
                    .when("/CategoryMaster", {
                    templateUrl: "/Scripts/App/MasterData/CategoryMaster/Template/_ParentCategoryMaster.html",
                })
                    .when("/ProductMaster", {
                    templateUrl: "/Scripts/App/MasterData/ProductMaster/Template/_ParentProductMaster.html",
                })
                    .when("/ModelMaster", {
                    templateUrl: "/Scripts/App/MasterData/ModelMaster/Template/_ParentModelMaster.html",
                })
                    .when("/DivisionMaster", {
                    templateUrl: "/Scripts/App/MasterData/DivisionMaster/Template/_ParentDivisionMaster.html",
                })
                    .when("/IndustryDivision", {
                    templateUrl: "/Scripts/App/MasterData/IndustryDivision/Template/_ParentIndustryDivision.html",
                })
                    .when("/AccountTypeMaster", {
                    templateUrl: "/Scripts/App/MasterData/AccountTypeMaster/Template/_ParentAccountTypeMaster.html",
                })
                    .when("/IndustrialSegmentMaster", {
                    templateUrl: "/Scripts/App/MasterData/IndustrialSegmentMaster/Template/_ParentIndustrialSegmentMaster.html",
                })
                    .when("/CatMachines", {
                    templateUrl: "/Scripts/App/MasterData/CatMachines/Template/_ParentCatMachines.html",
                })
                    .when("/CompetitorData", {
                    templateUrl: "/Scripts/App/MasterData/OtherMachine/Template/_ParentOtherMachine.html",
                })
                    .when("/CatMerchandise", {
                    templateUrl: "/Scripts/App/MasterData/CatMerchandise/Template/_ParentCatMerchandise.html",
                })
                    .when("/CatProduct", {
                    templateUrl: "/Scripts/App/MasterData/CatProduct/Template/_ParentCatProduct.html",
                })
                    .when("/CatLocations", {
                    templateUrl: "/Scripts/App/MasterData/CatLocations/Template/_ParentCatLocations.html",
                })
                    .when("/SalesAreaData", {
                    templateUrl: "/Scripts/App/MasterData/SalesAreaData/Template/_ParentSalesAreaData.html",
                })
                    .when("/SalesOrg", {
                    templateUrl: "/Scripts/App/MasterData/SalesOrg/Template/_ParentSalesOrg.html",
                })
                    .when("/DistributionChannel", {
                    templateUrl: "/Scripts/App/MasterData/DistributionChannel/Template/_ParentDistributionChannel.html",
                })
                    .when("/CustomerDivision", {
                    templateUrl: "/Scripts/App/MasterData/CustomerDivision/Template/_ParentCustomerDivision.html",
                })
                    .when("/RegionMaster", {
                    templateUrl: "/Scripts/App/MasterData/RegionMaster/Template/_ParentRegionMaster.html",
                })
                    .when("/LeadSource", {
                    templateUrl: "/Scripts/App/MasterData/LeadSource/Template/_ParentLeadSource.html",
                })
                    .when("/SubSource", {
                    templateUrl: "/Scripts/App/MasterData/SubSource/Template/_ParentSubSource.html",
                })
                    .when("/Subsource2", {
                    templateUrl: "/Scripts/App/MasterData/Subsource2/Template/_ParentSubsource2.html",
                })
                    .when("/LeadCategory", {
                    templateUrl: "/Scripts/App/MasterData/LeadCategory/Template/_ParentLeadCategory.html",
                })
                    .when("/ContactMaster", {
                    templateUrl: "/Scripts/App/MasterData/ContactMaster/Template/_ParentContactMaster.html",
                })
                    .when("/CreateContact", {
                    templateUrl: "/Scripts/App/MasterData/CreateContact/Template/_ParentCreateContact.html",
                })
                    .when("/ItemDetails", {
                    templateUrl: "/Scripts/App/ItemDetails/Template/ParentItemDetails.html",
                })
                    .when("/CustomerMaster", {
                    templateUrl: "/Scripts/App/MasterData/CustomerMaster/Template/_ParentCustomerMaster.html",
                })
                    .when("/CreateCustomer", {
                    templateUrl: "/Scripts/App/MasterData/CreateCustomer/Template/_ParentCreateCustomer.html",
                })
                    .when("/CreateLead", {
                    templateUrl: "/Scripts/App/CreateLead/Template/ParentCreateLead.html",
                })
                    .when("/CreateLeadForm", {
                    templateUrl: "/Scripts/App/CreateLeadForm/Template/ParentCreateLeadForm.html",
                })
                    .when("/ValidateLead", {
                    templateUrl: "/Scripts/App/ValidateLead/Template/ParentValidateLead.html",
                })
                    .when("/ReAllocateLead", {
                    templateUrl: "/Scripts/App/ReAllocateLead/Template/ParentReAllocateLead.html",
                })
                    .when("/ValidateLeadForm", {
                    templateUrl: "/Scripts/App/ValidateLeadForm/Template/ParentValidateLeadForm.html",
                })
                    .when("/AssessmentMaster", {
                    templateUrl: "/Scripts/App/AssessmentMaster/Template/ParentAssessmentMaster.html",
                })
                    .when("/OpportunityUpdate", {
                    templateUrl: "/Scripts/App/OpportunityUpdate/Template/ParentOpportunityUpdate.html",
                })
                    .when("/AllLeads", {
                    templateUrl: "/Scripts/App/AllLead/Template/ParentAllLead.html",
                })
                    .when("/AllActivities", {
                    templateUrl: "Scripts/App/AllActivities/Template/ParentAllActivities.html",
                })
                    .when("/AllocationOverride", {
                    templateUrl: "/Scripts/App/AllocationOverride/Template/ParentAllocationOverride.html",
                })
                    .when("/DuplicateLead", {
                    templateUrl: "/Scripts/App/DuplicateLead/Template/ParentDuplicateLead.html",
                })
                    .when("/FaultySAPLeads", {
                    templateUrl: "/Scripts/App/FaultySAPLeads/Template/ParentFaultySAPLeads.html",
                })
                    .when("/OpportunityValidationList", {
                    templateUrl: "/Scripts/App/OpportunityValidationList/Template/ParentOpportunityValidationList.html",
                })
                    .when("/KitListView", {
                    templateUrl: "/Scripts/App/KitListView/Template/ParentKitListView.html",
                })
                    .when("/KitListViewTrasfer", {
                    templateUrl: "/Scripts/App/KitListViewTrasfer/Template/ParentKitListViewTrasfer.html",
                })
                    .when("/KitTrasferApproval", {
                    templateUrl: "/Scripts/App/KitTrasferApproval/Template/ParentKitTrasferApproval.html",
                })
                    .when("/KitListViewSalesRep", {
                    templateUrl: "/Scripts/App/KitListViewSalesRep/Template/ParentKitListViewSalesRep.html",
                })
                    .when("/KitListViewCoustomer", {
                    templateUrl: "/Scripts/App/KitListViewCoustomer/Template/ParentKitListViewCoustomer.html",
                })
                    .when("/MyLeads", {
                    templateUrl: "/Scripts/App/MyLeads/Template/ParentMyLeads.html",
                })
                    .when("/TeamLead", {
                    templateUrl: "/Scripts/App/TeamLead/Template/ParentTeamLead.html",
                })
                    .when("/UserDashboard", {
                    templateUrl: "/Scripts/App/UserDashboard/Template/ParentUserDashboard.html",
                })
                    .when("/ManagerDashboard", {
                    templateUrl: "/Scripts/App/ManagerDashboard/Template/ParentManagerDashboard.html",
                })
                    .when("/OverallDashboard", {
                    templateUrl: "/Scripts/App/OverallDashboard/Template/ParentOverallDashboard.html",
                })
                    .when("/FaultySAPLeadsResubmit", {
                    templateUrl: "/Scripts/App/FaultySAPLeadsResubmit/Template/ParentFaultySAPLeadsResubmit.html",
                })
                    .when("/OpportunityValidation", {
                    templateUrl: "/Scripts/App/OpportunityValidation/Template/ParentOpportunityValidation.html",
                })
                    .when("/MyLeadsDashboard", {
                    templateUrl: "/Scripts/App/MyLeadsDashboard/Template/ParentMyLeadsDashboard.html",
                })
                    .when("/MyTeamsLeadDashboard", {
                    templateUrl: "/Scripts/App/MyTeamsLeadDashboard/Template/ParentMyTeamsLeadDashboard.html",
                })
                    .when("/OpportunityList", {
                    templateUrl: "/Scripts/App/OpportunityList/Template/ParentOpportunityList.html",
                })
                    .when("/Ratio", {
                    templateUrl: "/Scripts/App/Ratio/Template/ParentRatio.html",
                })
                    .when("/MyOpportunities", {
                    templateUrl: "/Scripts/App/MyOpportunities/Template/ParentMyOpportunities.html",
                })
                    .when("/TeamOpportunities", {
                    templateUrl: "/Scripts/App/TeamOpportunities/Template/ParentTeamOpportunities.html",
                })
                    .when("/ActivityOverride", {
                    templateUrl: "/Scripts/App/ActivityOverride/Template/ParentActivityOverride.html",
                })
                    .when("/LeadOverride", {
                    templateUrl: "/Scripts/App/LeadOverride/Template/ParentLeadOverride.html",
                })
                    .when("/LeadOverrideResubmit", {
                    templateUrl: "/Scripts/App/LeadOverrideResubmit/Template/ParentLeadOverrideResubmit.html",
                })
                    .when("/UploadCampaignData", {
                    templateUrl: "/Scripts/App/UploadCampaignData/Template/_ParentUploadCampaignData.html",
                })
                    .when("/OpportunityStatus", {
                    templateUrl: "/Scripts/App/OpportunityStatus/Template/_ParentOpportunityStatus.html",
                })
                    .when("/TrackMeConfiguration", {
                    templateUrl: "/Scripts/App/TrackMeConfig/Template/_ParentTrackMeConfig.html",
                })
                    .when("/StateRegionMatrix", {
                    templateUrl: "/Scripts/App/StateRegionMatrix/Template/_ParentStateRegionMatrix.html",
                })
                    .when("/SalesOffice", {
                    templateUrl: "/Scripts/App/SalesOffice/Template/_ParentSalesOffice.html",
                })
                    .when("/SalesAreaDetermination", {
                    templateUrl: "/Scripts/App/SalesAreaDetermination/Template/_ParentSalesAreaDetermination.html",
                })
                    .when("/AccessModuleMaster", {
                    templateUrl: "/Scripts/App/AccessModuleMaster/Template/_ParentAccessModuleMaster.html",
                })
                    .when("/RoleMaster", {
                    templateUrl: "/Scripts/App/RoleMaster/Template/_ParentRoleMaster.html",
                })
                    .when("/RoleAccessManagement", {
                    templateUrl: "/Scripts/App/RoleAccessManagement/Template/_ParentRoleAccessManagement.html",
                })
                    .when("/UserProductConfig", {
                    templateUrl: "/Scripts/App/UserProductConfig/Template/_ParentUserProductConfig.html",
                })
                    .when("/DelegationMatrix", {
                    templateUrl: "/Scripts/App/DelegationMatrix/Template/_ParentDelegationMatrix.html",
                })
                    .when("/UserLog", {
                    templateUrl: "/Scripts/App/UserLog/Template/_ParentUserLog.html",
                })
                    .when("/CustomerSAPLog", {
                    templateUrl: "/Scripts/App/CustomerSAPLog/Template/_ParentCustomerSAPLog.html",
                })
                    .when("/ContactSAPLog", {
                    templateUrl: "/Scripts/App/ContactSAPLog/Template/_ParentContactSAPLog.html",
                })
                    .when("/OpportunitySAPLog", {
                    templateUrl: "/Scripts/App/OpportunitySAPLog/Template/_ParentOpportunitySAPLog.html",
                })
                    .when("/SparePartRequest", {
                    templateUrl: "/Scripts/App/SparePartRequest/Template/_ParentSparePartRequest.html",
                })
                    .when("/LMSSOSAdmin", {
                    templateUrl: "/Scripts/App/LMSSOSAdmin/Template/_ParentLMSSOSAdmin.html",
                })
                    .when("/UpdatePartReqStatus", {
                    templateUrl: "/Scripts/App/UpdatePartReqStatus/Template/_ParentUpdatePartReqStatus.html",
                })
                    .when("/TrackMe", {
                    templateUrl: "/Scripts/App/TrackMe/Template/_ParentTrackMe.html",
                })
                    .when("/CreateSparePartRequest", {
                    templateUrl: "/Scripts/App/CreateSparePartRequest/Template/_ParentCreateSparePartRequest.html",
                })
                    .when("/CampaignLeads", {
                    templateUrl: "/Scripts/App/CampaignLeads/Template/_ParentCampaignLeads.html",
                })
                    .when("/ForgotPasswordRequest", {
                    templateUrl: "/Scripts/App/ForgotPasswordRequest/Template/_ParentForgotPasswordRequest.html",
                })
                    .when("/UserMaster", {
                    templateUrl: "/Scripts/App/UserMaster/Template/_ParentUserMaster.html",
                })
                    .when("/NewContactRegistration", {
                    templateUrl: "/Scripts/App/MobileApps/NewContactRegistration/Template/_ParentNewContactRegistration.html",
                })
                    .when("/CreateNewContactRegistration", {
                    templateUrl: "/Scripts/App/MobileApps/CreateNewContactRegistration/Template/_ParentCreateNewContactRegistration.html",
                })
                    .when("/KitRecive", {
                    templateUrl: "/Scripts/App/KitRecive/Template/ParentKitRecive.html",
                })
                    .when("/KitTransfer", {
                    templateUrl: "/Scripts/App/KitTransfer/Template/ParentKitTransfer.html",
                })
                    .when("/KitApproval", {
                    templateUrl: "/Scripts/App/KitApproval/Template/ParentKitApproval.html",
                })
                    .when("/KitAllocationSalesRep", {
                    templateUrl: "/Scripts/App/KitAllocationSalesRep/Template/ParentKitAllocationSalesRep.html",
                })
                    .when("/KitCustomer", {
                    templateUrl: "/Scripts/App/KitCustomer/Template/ParentKitCustomer.html",
                })
                    .when("/KitAdjestment", {
                    templateUrl: "/Scripts/App/KitAdjestment/Template/ParentKitAdjestment.html",
                })
                    .when("/KitAdjustApproval", {
                    templateUrl: "/Scripts/App/KitAdjustApproval/Template/ParentKitAdjustApproval.html",
                })
                    .when("/EmailLeadDetailDelayed", {
                    templateUrl: "/Scripts/App/EmailLeadDetailDelayed/Template/ParentEmailLeadDetailDelayed.html",
                })
                    .when("/EmployeeBroadcastMaster", {
                    templateUrl: "/Scripts/App/EmployeeBroadcastMaster/Template/ParentEmployeeBroadcastMaster.html",
                })
                    .when("/CustomerBroadcastMaster", {
                    templateUrl: "/Scripts/App/CustomerBroadcastMaster/Template/ParentCustomerBroadcastMaster.html",
                })
                    .when("/RegistrationContact", {
                    templateUrl: "/Scripts/App/RegistrationContact/Template/ParentRegistrationContact.html",
                })
                    .when("/RegistrationContactNew", {
                    templateUrl: "/Scripts/App/RegistrationContactNew/Template/ParentRegistrationContactNew.html",
                })
                    .when("/RegistrationContactUpdate", {
                    templateUrl: "/Scripts/App/RegistrationContactUpdate/Template/ParentRegistrationContactUpdate.html",
                })
                    .when("/LeadSummaryEmails", {
                    templateUrl: "/Scripts/App/LeadSummaryEmails/Template/ParentLeadSummaryEmails.html",
                })
                    .when("/ShowDuplicateLeads", {
                    templateUrl: "/Scripts/App/ShowDuplicateLeads/Template/ParentShowDuplicateLeads.html",
                })
                    .when("/AppForgotPasswordRequest", {
                    templateUrl: "/Scripts/App/AppForgotPasswordRequest/Template/ParentAppForgotPassword.html",
                })
                    .when("/UploadExcel", {
                    templateUrl: "/Scripts/App/BulkUpload/UploadCampaignExcel/Template/_UploadExcelParent.html",
                })
                    .when("/WinLossHeatReport", {
                    templateUrl: "/Scripts/App/WinLossHeatReport/Template/ParentWinLossHeatReport.html",
                })
                    .when("/IQDPDashboard", {
                    templateUrl: "/Scripts/App/IQDPDashboard/Template/ParentIQDPDashboard.html",
                })
                    .when("/TargetList", {
                    templateUrl: "/Scripts/App/TargetList/Template/ParentTargetList.html",
                })
                    .when("/LeadDashboard", {
                    templateUrl: "/Scripts/App/LeadDashboard/Template/ParentLeadDashboard.html",
                })
                    .when("/SalesRepProductivityDashboard", {
                    templateUrl: "/Scripts/App/SalesRepProductivityDashboard/Template/ParentSalesRepProductivityDashboard.html",
                })
                    .when("/CreateQuotation", {
                    templateUrl: "/Scripts/App/CreateQuotation/Template/ParentCreateQuotation.html",
                })
                    .when("/QuotationList", {
                    templateUrl: "/Scripts/App/QuotationList/Template/ParentQuotationList.html",
                })
                    .when("/EditQuotation", {
                    templateUrl: "/Scripts/App/EditQuotation/Template/ParentEditQuotation.html",
                })
                    .when("/QuotationReport", {
                    templateUrl: "/Scripts/App/QuotationReport/Template/_ParentQuotationReport.html",
                })
                    .when("/ViewQuotation", {
                    templateUrl: "/Scripts/App/ViewQuotation/Template/_ParentViewQuotation.html",
                })
                    .when("/IQDPDashboard1", {
                    templateUrl: "/Scripts/App/IQDPDashboard1/Template/ParentIQDPDashboard1.html",
                })
                    .when("/IQDPDashboard2", {
                    templateUrl: "/Scripts/App/IQDPDashboard2/Template/ParentIQDPDashboard2.html",
                })
                    .when("/UploadDocuments", {
                    templateUrl: "/Scripts/App/UploadDocuments/Template/ParentUploadDocuments.html",
                })
                    .when("/DisplayDocuments", {
                    templateUrl: "/Scripts/App/DisplayDocuments/Template/ParentDisplayDocuments.html",
                })
                    .when("/ApproveDocumentRequest", {
                    templateUrl: "/Scripts/App/ApproveDocumentRequest/Template/ParentApproveDocumentRequest.html",
                })
                    .when("/EditApproveDocumentRequest", {
                    templateUrl: "/Scripts/App/EditApproveDocumentRequest/Template/ParentEditApproveDocumentRequest.html",
                })
                    .when("/SalesRepDocumentList", {
                    templateUrl: "/Scripts/App/SalesRepDocumentList/Template/ParentSalesRepDocumentList.html",
                })
                    .when("/LeadFollowUpList", {
                    templateUrl: "/Scripts/App/LeadFollowUpList/Template/PrentLeadFollowUpList.html",
                })
                    .when("/FollowUpLead1", {
                    templateUrl: "/Scripts/App/FollowUpLead1/Template/ParentFollowUpLead1.html",
                })
                    .when("/OpportunityFollowUpList", {
                    templateUrl: "/Scripts/App/OpportunityFollowUpList/Template/ParentOpportunityFollowUpList.html",
                })
                    .when("/FollowUpOpp", {
                    templateUrl: "/Scripts/App/FollowUpOpp/Template/ParentFollowUpOpp.html",
                })
                    .when("/LeadAssessment", {
                    templateUrl: "/Scripts/App/LeadAssessment/Template/ParentLeadAssessment.html",
                })
                    .when("/Opportunity", {
                    templateUrl: "/Scripts/App/Opportunity/Template/ParentOpportunity.html",
                })
                    .when("/CreateOpp", {
                    templateUrl: "/Scripts/App/CreateOpp/Template/ParentCreateOpp.html",
                })
                    .when("/LeadAssessmentList", {
                    templateUrl: "/Scripts/App/LeadAssessmentList/Template/ParentLeadAssessmentList.html",
                })
                    .when("/ActivitiesList", {
                    templateUrl: "/Scripts/App/ActivitiesList/Template/ParentActivitiesList.html",
                })
                    .when("/LeadFollowUp", {
                    templateUrl: "/Scripts/App/LeadFollowUp/Template/PrentLeadFollowUp.html",
                })
                    .when("/OpportunityFollowUpReport", {
                    templateUrl: "/Scripts/App/OpportunityFollowUpReport/Template/ParentOpportunityFollowUpReport.html",
                })
                    .when("/BackFeedLogList", {
                    templateUrl: "/Scripts/App/BackFeedLogList/Template/_ParentBackFeedLogList.html",
                })
                    .when("/BackFeedContactLogList", {
                    templateUrl: "/Scripts/App/BackFeedContactLogList/Template/_ParentBackFeedContactLogList.html",
                })
                    .when("/CalendarPage", {
                    templateUrl: "/Scripts/App/CalendarPage/Template/ParentCalendarPage.html",
                })
                    .when("/PARTargets", {
                    templateUrl: "/Scripts/App/PARTargets/Template/ParentPARTarget.html",
                })
                    .when("/PARTargetReport", {
                    templateUrl: "/Scripts/App/PARTargetReport/Template/ParentPARTargetReport.html",
                })
                    .when("/UploadPARTargetExcel", {
                    templateUrl: "/Scripts/App/UploadPARTargetExcel/Template/ParentUploadPARTargetExcel.html",
                })
                    .when("/ProjectTracker", {
                    templateUrl: "/Scripts/App/ProjectTracker/Template/ParentProjectTracker.html",
                })
                    .when("/ProjectTrackerList", {
                    templateUrl: "/Scripts/App/ProjectTrackerList/Template/ParentProjectTrackerList.html",
                })
                    .when("/ProjectList", {
                    templateUrl: "/Scripts/App/ProjectList/Template/ParentProjectList.html",
                })
                    .when("/CreateProject", {
                    templateUrl: "/Scripts/App/CreateProjectTracker/Template/ParentCreateProject.html",
                })
                    .when("/DeliverySchedule", {
                    templateUrl: "/Scripts/App/DeliverySchedule/Template/ParentDeliverySchedule.html",
                })
                    .when("/DeliveryScheduleEdit", {
                    templateUrl: "/Scripts/App/DeliveryScheduleEdit/Template/ParentDeliveryScheduleEdit.html",
                })
                    .when("/LeadChange", {
                    templateUrl: "/Scripts/App/LeadChange/Template/ParentLeadChange.html",
                })
                    .when("/LeadChangeList", {
                    templateUrl: "/Scripts/App/LeadChangeList/Template/ParentLeadChangeList.html",
                })
                    .when("/ProjectTrackerDashboard", {
                    templateUrl: "/Scripts/App/ProjectTrackerDashboard/Template/ParentProjectTrackerDashboard.html",
                })
                    .when("/ProjectTrackerZoneWise", {
                    templateUrl: "/Scripts/App/ProjectTrackerZoneWise/Template/ParentProjectTrackerZoneWise.html",
                })
                    .when("/RewardReport", {
                    templateUrl: "/Scripts/App/RewardReport/Template/ParentRewardReport.html",
                })
                    .when("/EmitraAppRequest", {
                    templateUrl: "/Scripts/App/MobileApps/EmitraAppRequest/Template/ParentEmitraAppRequest.html",
                })
                    .when("/SAPCustomer", {
                    templateUrl: "/Scripts/App/SAPCustomer/Template/ParentSAPCustomer.html",
                })
                    .when("/SAPContact", {
                    templateUrl: "/Scripts/App/SAPContact/Template/ParentSAPContact.html",
                })
                    .when("/LeadMTTRReport", {
                    templateUrl: "/Scripts/App/LeadMTTRReport/Template/ParentLeadMTTRReport.html",
                })
                    .otherwise({ redirectTo: "/home" });
            };
            //static $inject = ["$stateProvider", "$urlRouterProvider"];
            Route.$inject = ["$routeProvider"];
            return Route;
        }());
        MyRoute.Route = Route;
    })(MyRoute = GCPL.MyRoute || (GCPL.MyRoute = {}));
})(GCPL || (GCPL = {}));
//# sourceMappingURL=MyRoutes.js.map