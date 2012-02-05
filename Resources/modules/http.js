/**
 * Titanium HTTP GET Wrapper Class
 *
 * To use this class should use a block of code like this:
 *
 * Ti.include('../libs/http.js');
 * http.get('<<insert URL to call>>',function(htmlSource){
 * 	// Insert code that relies on the output of the HTTP Call
 *             // Output is in the htmlSource variable
 * });
 *
 * @author Ricardo ALcocer
 * @version 1.0
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