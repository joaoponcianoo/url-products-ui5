sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "urlproducts/model/productModel",
    "urlproducts/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, productModel, formatter) {
        "use strict";

        return Controller.extend("urlproducts.controller.main", {
            formatter: formatter,

            onInit: function () {

            },

            onColumnListItemPress: function (oEvent) {
                const oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteDetail", {
                    prodID: oEvent.getSource().getBindingContext().getObject().ProductID
                })
            }
        });
    });
