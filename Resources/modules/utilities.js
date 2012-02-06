/*
 * Name: 			utilities.js
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
	app.modules.utilities={};
	
	app.modules.utilities.load=function(args){
		alert('This can be the constructor of the utilities');
	}	
	
	app.modules.utilities.fixHTMLMarkup=function(args){
		var str=String(args);
		str=str.replace('&lt;','<');
		str=str.replace('&gt;','>');
		str=str.replace('&amp;','&');
		str=str.replace('&lt;del&gt;','');
		str=str.replace('<del>','');
		str=str.replace('&lt;/del&gt;','');
		return str;
	}
})()
