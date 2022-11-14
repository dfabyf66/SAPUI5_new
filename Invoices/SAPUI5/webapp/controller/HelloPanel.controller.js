sap.ui.define([
    "sap/ui/core/mvc/Controller"
    // ,
    // "sap/m/MessageToast",
    // "sap/ui/core/Fragment"

    
],

    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller // definimos el parametro para poder usar el intelligents y poder acceder a sus metodos
     * @param {typeof sap.m.MessageToast} MessageToast 
     * param {typeof sap.ui.core.Fragment} Fragment
     */

    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("DFFspace.SAPUI5.controller.HelloPanel", {

           onInit: function () {},

            onShowHello: function () {
                /**      alert("Hola Mundo"); */
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);

            },

            onOpenDialog: function() {

                this.getOwnerComponent().onOpenDialog();

                // const oView = this.getView();

                // if (!this.byId("helloDialog")) {
                //     Fragment.load({
                //         id: oView.getId(),
                //         name: "DFFspace.SAPUI5.view.HelloDialog",
                //         controller: this
                //     }).then(function (oDialog) {
                //         oView.addDependent(oDialog);
                //         oDialog.open();
                //     })
                // } else {
                //     this.byId("helloDialog").open();
                // }

            },
           
         });
    });