sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
   
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("app.miningapp05.controller.View2", {
        onInit() {
            var oRouter=this.getOwnerComponent().getRouter()
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this)
            
        },
        onRouteMatched: function (oEvent) {
            var id = oEvent.mParameters.arguments.id; // Get the ID from the route parameters
            
            let sPath="/mineoperations/"+id
            let oView2 =this.getView(); // Binding from View2
            oView2.bindElement(sPath);
           

            
            
          
        }
        
       
    });
});