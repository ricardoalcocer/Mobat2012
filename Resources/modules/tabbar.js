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
 * Name: 			tabbar.js
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
	app.ui.tabbar={};
	
	var buttons=[];
	
	var mainView=Ti.UI.createView({
		top:'0dp',
		height:'50dp',
		backgroundColor: 'yellow',
	});
	
	app.ui.tabbar.load=function(){
		var totalButtons=3;
		var buttonPadding=5;
		var deviceWidth=app.modules.system.getDeviceDimensions().width-15;
		var buttonWidth=(deviceWidth/totalButtons) - (buttonPadding * totalButtons);
		
		for (var i=0;i<totalButtons;i++){
			
			var button=Ti.UI.createView({
				width: buttonWidth +'dp',
				height: '40dp',
				backgroundColor:'#000',
				//right: '2dp',
				left: ((buttonWidth * i) + buttonPadding) + 'dp',
				top: '4dp',
				ordinal:i
			});
			
			mainView.add(button);
		}	
		return mainView;
	}
	
	app.ui.tabbar.resize=function(args){
/*		if (args == 'portrait') {
			var deviceWidth=app.modules.system.getDeviceDimensions().width-15;	
		}else{
			var deviceWidth=app.modules.system.getDeviceDimensions().width-15;
		}
		//alert(deviceWidth);
		mainView.layout='horizontal';
		
		for (var i=0;i<=2;i++){
			buttons[i].width=deviceWidth/3 + 'dp';
			buttons[i].left='2dp';
			buttons[i].right='2dp';
		}*/
	}
})()
