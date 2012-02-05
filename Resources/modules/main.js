(function(){
	// inject this code into app.modules
	app.modules.main={};

	app.modules.main.getMainWindow=function(){
		// create window instance
		var win=Ti.UI.createWindow({
			backgroundColor:'#fff',
			navBarHidden:(Ti.Platform.osname=='android')?true:false,
			exitOnClose:true,
			orientationModes:[Titanium.UI.PORTRAIT,
    			Titanium.UI.UPSIDE_PORTRAIT,
    			Titanium.UI.LANDSCAPE_LEFT,
    			Titanium.UI.LANDSCAPE_RIGHT]
		});
		
		// open window
		win.open();
	}
})()
