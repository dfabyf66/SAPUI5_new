sap.ui.define([
   "sap/ui/core/ComponentContainer" 
 
],

    /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer // definimos el parametro para poder usar el intelligents y poder acceder a sus metodos
     * param {typeof sap.ui.core.XMLView} XMLView
      */

 function (ComponentContainer) {

        new ComponentContainer({ 
            name: "DFFspace.SAPUI5",
           settings: {
                id: "SAPUI5"
    
            },
            async: true
    
        }).placeAt("content");
    

 /**       function (XMLView) {

        XMLView.create({
            viewName: "DFFspace.SAPUI5.view.App"
        }).then(function (oView) {
            oView.placeAt("content");
        });
        */
     

    });