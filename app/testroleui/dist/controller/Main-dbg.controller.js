sap.ui.define([
	"sap/ui/core/mvc/Controller",
	
], function (Controller) {
	"use strict";
	return Controller.extend("com.test.testroleui.controller.Main", {
        onInit:function(){
this.getOwnerComponent().getModel().read("/getEmpInfo",{
    success:(oResp)=>{
       var oMsg= new sap.m.Messagebox();
       oMsg.show(oResp);
    },
    error:(oError)=>{}
});
        }
    });

});