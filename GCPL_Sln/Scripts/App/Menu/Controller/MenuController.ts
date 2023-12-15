module GCPL.Controller {
    import app = GCPL.app;
    export class MenuController extends GCPL.Controller.CoockiesBaseController{
        //constructor() {
        //    console.log("MenuController initialized...");
        //}
    }
    app.AddController("MenuController", MenuController);
}