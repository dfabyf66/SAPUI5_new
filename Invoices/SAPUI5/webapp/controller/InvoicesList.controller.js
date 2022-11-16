// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter',
    // 'sap/ui/model/Filter',
], 
/**
 * 
 * @param { typeof sap.ui.core.mvc.Controller } Controller 
 * @param { typeof sap.ui.model.json.JSONModel } JSONModel
 * param { typeof sap.ui.model.Filter } Filter
 * param { typeof sap.ui.model.FilterOperator } FilterOperator
 *
 **/
function (Controller, JSONModel, InvoicesFormatter) {

    return Controller.extend("DFFspace.SAPUI5.controller.InvoicesList", {
        
        formatter: InvoicesFormatter,
        
        onInit: function () {
            var oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });
            this.getView().setModel(oViewModel, "currency");
        }

    });
});