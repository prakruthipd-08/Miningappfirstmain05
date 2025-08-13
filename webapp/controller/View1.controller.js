sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment"
], (Controller,Filter,FilterOperator,Fragment) => {
    "use strict";

    return Controller.extend("app.miningapp05.controller.View1", {

    //It sets the selected item into the input field and filters the data based on that choice.
        onConfirm:function(oEvent){
          var oItem=oEvent.getParameter("selectedItem")
          var sItem=oItem.mProperties.title
          var oInpt=this.getView().byId(this.idInpt)
          oInpt.setValue(sItem)
          this.onFilter()
        },

        

    //It opens a popup to help the user pick a value and remembers which input field to update with the selected value.    
        onF4Help: function (oEvent) {
            this.idInpt=oEvent.getSource().getId()
            if (!this.dialog) {
                Fragment.load({
                    name: "app.miningapp05.fragments.popup",
                    controller: this
                }).then(function (oDialog) {
                    this.dialog = oDialog;
                    this.getView().addDependent(this.dialog);
                    this.dialog.open();
                }.bind(this));
            } else {
                this.dialog.open();
            }
        },
        //The onRowPress function opens the detail view (View2) for the row you clicked, using its index from the list.
        onRowPress:function(oEvent){
            var oItem=oEvent.getParameter("listItem")
            var id=oItem.getBindingContextPath()
            var aItem=id.split("/")
            let sIndex=aItem[aItem.length-1]
            var oRouter=this.getOwnerComponent().getRouter()
                oRouter.navTo("RouteView2",{
                    id:sIndex
                })
        },


       onFilter: function(){
            //Get refrence to input fields
            var oLocationInput = this.byId("idLocFilter");
            var oNameInput=this.byId("idNameFilter");



            //Get their values
            var sLocationValue = oLocationInput.getValue();
            var sNameValue=oNameInput.getValue();



            //Prepare filters
            var aFilters = [];
            if(sLocationValue) {
                aFilters.push(new Filter("id", FilterOperator.Contains, sLocationValue));
            }
            if(sNameValue) {
                aFilters.push(new Filter("name", FilterOperator.Contains, sNameValue));
            }
            

         // Apply filters to the table's binding 
         //Find the table, get its data, and apply some filters to show only the matching rows.
         var oTable = this.byId("idTable");
         var oBinding = oTable.getBinding("items");
         oBinding.filter(aFilters);
       }
        
    });
}); 