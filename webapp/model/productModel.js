sap.ui.define([
    "sap/ui/model/json/JSONModel"
], 
    function (JSONModel) {
        "use strict";

        return {

            getDetails: function(sEntity, sID, sField) {
                const sUrl = `https://cors-anywhere.herokuapp.com/https://services.odata.org/Northwind/Northwind.svc/${sEntity}(${sID})?$format=json`;

                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: sUrl,
                        method: "GET",
                        success: function(oData) {
                            resolve(sField ? oData[sField] : oData);
                        },
                        error: function() {
                            reject("Error on get product")
                        }
                    });
                })
            }
    };
});