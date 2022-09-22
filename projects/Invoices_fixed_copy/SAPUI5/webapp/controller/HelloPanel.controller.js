sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/base/Log"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param {typeof sap.ui.core.Fragment} Fragment
     *                 
     */
    function (Controller, MessageToast, Log) {
        "use strict";
        
        return Controller.extend("clara.SAPUI5.controller.HelloPanel", {

            onInit: function () {
 
            },

            onBeforeRendering: function () {
                window.message = 'Log message - onBeforeRendering';
                Log.info(window.message);
                Log.error(window.message);
            },

            onAfterRendering: function () {
               // debugger;
            },

            onShowHello: function () {
                //read text from i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },
            onOpenDialog: function () {
// llamamos a la función que nos devuelve el componente. Se puede llamar desde cualquier controlador
// para acceder al component.js                
                this.getOwnerComponent().openHelloDialog();
            },


        });
    });