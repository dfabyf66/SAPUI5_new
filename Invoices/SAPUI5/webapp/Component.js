sap.ui.define([
    "sap/ui/core/UIComponent",
    "DFFspace/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"

],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {DFFspace.}
     * @param {typeof sap.ui.core.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {



       return UIComponent.extend("DFFspace.SAPUI5.Component", {

             metadata: {
                 manifest : "json"
                // "rootView":  {
                // "viewname": "DFFspace.SAPUI5.view.App",
                // "type": "XML",
                // "async": true,
                // "id": "app"

                // }
            },

           init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "DFFspace.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");


            } 

        })
 }

)