/*
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