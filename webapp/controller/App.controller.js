sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("app.miningapp05.controller.App", {
      onInit() {
        //creating an empty JSON model to load data into.
        var oMod1=new sap.ui.model.json.JSONModel()
                  //This loads the data from table.json into the model.
                  oMod1.loadData("/model/table.json")
                  //This makes the data available to your view for binding.
                  this.getView().setModel(oMod1)
      }
  });
});