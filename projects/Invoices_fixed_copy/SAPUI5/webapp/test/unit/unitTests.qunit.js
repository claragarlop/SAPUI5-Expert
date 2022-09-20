//@ts-nocheck
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
    "use Strict";

    sap.ui.require([
        "clara/SAPUI5/test/unit/AllTests"
    ], function () {

        QUnit.start();

    });
});