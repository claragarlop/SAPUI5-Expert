sap.ui.define([
    "sap/ui/core/mvc/Controller"

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     *
     */
    function (Controller) {
        "use strict";
        
        return Controller.extend("clara.SAPUI5.controller.App", {

            onInit: function () {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            },

            onOpenDialogHeader: function () {
                this.getOwnerComponent().openHelloDialog();
            }
        });
    });