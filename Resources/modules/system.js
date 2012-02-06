/*
 * Name: 			system.js
 * Description: 	
 * Date:			
 * Author:			
 * Company:			
 * Version:			
 * 
 * Notes:
 * 
 * 
 */
(function(){
	app.modules.system={};
	
//	var deviceWidth=0;
//	var deviceHeight=0;
	
	app.modules.system.getDeviceDimensions=function(){
		var width=Titanium.Platform.displayCaps.platformWidth
		var height=Titanium.Platform.displayCaps.platformHeight		
		return{
			width:width,
			height:height
		}
	}
	
	app.modules.system.getOrientation=function(args){
	    switch (args) {
	        case Titanium.UI.PORTRAIT: {return 'portrait';}
	        case Titanium.UI.UPSIDE_PORTRAIT: {return 'portrait';}
	        case Titanium.UI.LANDSCAPE_LEFT: {return 'landscape';}
	        case Titanium.UI.LANDSCAPE_RIGHT: {return 'landscape';}
	        default : return 'unknown'
	    }
	}
	
	app.modules.system.removeDp=function(value){
		var str=String(value);
		var newstr=str.replace('dp','')
		//Ti.API.info(value + ' - ' + newstr);
		return Number(newstr);	
	}
	
	app.modules.system.getStatusBarHeight=function(){
		// according to: http://developer.appcelerator.com/question/122481/height-of-status-bar
		var barHeight=0;
		
		// taken from: http://developer.appcelerator.com/question/122481/height-of-status-bar
		if (Ti.Platform.osname=='android'){
			switch (app.modules.system.getDeviceDimensions().height){
				case 480:
					barHeight=38;
					break;
				case 320:
					barHeight=25;
					break;
				case 800:
					barHeight=20;
					break;
			}			
		}else{
			barHeight=20
		}
		
		return barHeight;
	}
	
	app.modules.system.setSessionObject=function(args){
		/* Implement this: http://developer.appcelerator.com/blog/2010/06/how-to-persist-complex-javascript-objects.html
		 	~~~
			var myList =[];
			myList.push({param1:”First”, param2:”Second”, param3:”Third”});
			myList.push({param1:”1st”, param2:”2nd”, param3:”3rd”});
			Titanium.App.Properties.setList (“myListProp”, myList);
			~~~
			Then to retreive the data:
			~~~
			var newList = Titanium.App.Properties.getList (“myListProp”);
			Ti.API.info(‘should return “2nd… : ” ‘+ newList[1].param2);
			~~~
		 */
	}
	
	app.modules.system.getSessionObject=function(args){
		/* Implement this: http://developer.appcelerator.com/blog/2010/06/how-to-persist-complex-javascript-objects.html
		 	~~~
			var myList =[];
			myList.push({param1:”First”, param2:”Second”, param3:”Third”});
			myList.push({param1:”1st”, param2:”2nd”, param3:”3rd”});
			Titanium.App.Properties.setList (“myListProp”, myList);
			~~~
			Then to retreive the data:
			~~~
			var newList = Titanium.App.Properties.getList (“myListProp”);
			Ti.API.info(‘should return “2nd… : ” ‘+ newList[1].param2);
			~~~
		 */
	}
	
	// this is a temp funciton
	app.modules.system.calculateRemainingSpace=function(){
		// pixel values
		var val1px=50;
		var val2px=50;
		var val3px=75
		var totalSizepx=app.modules.system.getDeviceDimensions().height;
		
		// dp values
		var totalSizedp=app.modules.system.pixelsToDPUnits(totalSizepx);
		var val1dp=app.modules.system.pixelsToDPUnits(val1px);
		var val2dp=app.modules.system.pixelsToDPUnits(val1px);
		var val3dp=app.modules.system.pixelsToDPUnits(val1px);
		
		var calc1=totalSizedp - (val1dp + val2dp + val3dp);
		alert(calc1);
		alert(app.modules.system.dPUnitsToPixels(calc1));
		return app.modules.system.dPUnitsToPixels(calc1);
	}
	
	app.modules.system.getFromSession = function(args){
		
	}
	
	app.modules.system.pixelsToDPUnits=function(ThePixels){
		return (ThePixels / (Titanium.Platform.displayCaps.dpi / 160));
	}
 
	app.modules.system.dPUnitsToPixels=function(TheDPUnits){
  		return (TheDPUnits * (Titanium.Platform.displayCaps.dpi / 160));
	}
})()
