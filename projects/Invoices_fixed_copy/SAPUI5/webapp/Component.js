sap.ui.define([
    "sap/ui/core/UIComponent",
    "clara/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"  //carga el HelloDialog.js y lo almacena en this._helloDialog y llama a su función "open" por ej

], 
/**
 * @param {typeof sap.ui.core.UIComponent} UIComponent
 */
 function(UIComponent, Models, ResourceModel, HelloDialog){

    return UIComponent.extend("clara.SAPUI5.Component", {

        metadata: {
            manifest: "json"
            // "rootView": {
            //     "viewName": "clara.SAPUI5.view.App",
            //     "type": "XML",
            //     "async": true,
            //     "id": "app"
            
            // }
        },

        init: function () {
            //call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model on the view
            this.setModel(Models.createRecipient());

            //set i18n model on the view
            // var i18nModel = new ResourceModel({ bundleName: "clara.SAPUI5.i18n.i18n" });
            // this.setModel(i18nModel, "i18n");

            this._helloDialog = new HelloDialog(this.getRootControl());

            //create the views based on the url/hash
            this.getRouter().initialize();
        },

        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;            
        },
// en el component se pone la lógica compartida que va a ser usada en varios controladores. Esta función al definirla aquí, puedo
// llamarla en todos los controladores donde quiera implementar este diálogo con:  onOpenDialogHeader: function () {
//                this.getOwnerComponent().openHelloDialog();  }
//          
        openHelloDialog: function () {
            this._helloDialog.open();
        }
    });
});