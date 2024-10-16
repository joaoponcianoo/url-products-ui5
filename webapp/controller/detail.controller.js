sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"urlproducts/model/productModel",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,
	productsModels,
	JSONModel
) {
	"use strict";

	return Controller.extend("urlproducts.controller.detail", {
		/**
		 * @override
		 */
		onInit: function() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("RouteDetail").attachPatternMatched(this.onDetailMatched, this);
		},
		onDetailMatched: function(oEvent) {
			const prodID = oEvent.getParameter("arguments").prodID;
			//const oProduct = productsModels.getDetails("Products", prodID, null);
			productsModels.getDetails("Products", prodID, null).then((oProduct) => {
				const oDetailModel = new JSONModel({
					product: oProduct
				});
				this.getView().setModel(oDetailModel, "oViewDetail");
			});
		}
	});
});