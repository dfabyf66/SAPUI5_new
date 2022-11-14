sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // "sap/m/MessageToast"
    /**,
    "DFFspace/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
    */
],

    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller // definimos el parametro para poder usar el intelligents y poder acceder a sus metodos
     * param {typeof sap.m.MessageToast} MessageToast 
     * param {typeof sap.model.resource.ResourceModel} ResourceModel 
     */

    function (Controller) {
        "use strict";
        return Controller.extend("DFFspace.SAPUI5.controller.App", {

           onInit: function () {

           },

           onOpenDialogHeader: function() {
              this.getOwnerComponent().openHelloDialog();
           }
           
        });
    });