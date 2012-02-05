/*
 * This file is part of MOBAT.
 * 
 * MOBAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 * 
 * MOBAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 *   
 * Name: 			main.js
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
