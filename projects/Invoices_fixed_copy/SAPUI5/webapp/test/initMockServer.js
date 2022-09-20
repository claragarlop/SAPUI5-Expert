//@ts-nocheck
sap.ui.define([
 "../localService/mockserver",
 "sap/m/MessageBox"

], function(mockserver,MessageBox){
    "use strict";

    var aMockservers = [];

    //añadimos el servidor al array de servers recien creado con js "push"
    aMockservers.push(mockserver.init());

    Promise.all(aMockservers).catch( function (oError) { 
        MessageBox.error(oError.message);
    }).finally(function () {
        sap.ui.require(["sap/ui/core/ComponentSupport"]);
    })
});