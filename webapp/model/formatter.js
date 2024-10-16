sap.ui.define([
    "urlproducts/model/productModel"
], function (
    productModel
) {
    "use strict";

    return {

        formatterSupplierName: function(sSuppliersID) {
            return productModel.getDetails("Suppliers", sSuppliersID, "CompanyName")
        }

    };
});