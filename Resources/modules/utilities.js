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
