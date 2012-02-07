/*
 * Name: 			TainoApp - alertbox.js
 * Description: 	
 * Date:			
 * Author:			Ricardo Alcocer
 * Company:			TainoApp, Inc.
 * 
 * Notes:
 */

(function(){
	app.ui.alertDialog={};
	
	var alertDialog = Ti.UI.createAlertDialog({
        title: "Alert",
        message: 'Alert',
        buttonNames: ['OK'],
        cancel:0
    });
    
    app.ui.alertDialog.show=function(args){
    	alertDialog.message=args.message;
   		alertDialog.show();
    }
})()
