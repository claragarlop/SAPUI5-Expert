sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     *
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createRecipient: function () {
                var oData = {
                    recipient : {
                        name: "world"
                    }
                };
                return new JSONModel(oData);
            },

            createDeviceModel: function() {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            }
        }

    })