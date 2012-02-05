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
 * Name: 			http.js
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
var http = function(){
        return{
			getData: function(value, callback){
			        var xhr = Titanium.Network.createHTTPClient();
			        
			        xhr.onload = function(){
						htmlData = this.responseData;
						callback(htmlData);
					};	        
			        xhr.onerror = function(e){
			                Ti.API.info('Error:' + e.error);
					};	        
			        xhr.open("GET", value, false);		
			        xhr.send();
				},
			get: function(value, callback){
			        var xhr = Titanium.Network.createHTTPClient();
			        
			        xhr.onload = function(){
						htmlSource=this.responseText;
						callback(htmlSource);
			        };
			        
			        xhr.onerror = function(e){
					        Ti.API.info('Error:' + e.error);
					};	        
			        xhr.open("GET",value,false );		
			        xhr.send();
				},
			post: function(value, payload, callback){
			        var xhr = Titanium.Network.createHTTPClient();
			        
			        xhr.onload = function(){
						htmlSource=this.responseText;
						callback(htmlSource);				
					};
			        xhr.onerror = function(e){
					        Ti.API.info('Error:' + e.error);
					};
			        xhr.open("POST",value,false);
					xhr.send(payload);		
				}
        };
}();