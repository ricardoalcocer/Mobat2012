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
 * Name: 			geo.js
 * Description: 	
 * Date:			
 * Author:			
 * Company:			
 * Version:			
 * 
 * Notes:
 * 
 */
(function(){
	// inject this code into app.modules
	app.modules.geo={};
	
	var longitude = 0;
	var latitude = 0;
	var altitude = 0;
	var heading = 0;
	var accuracy = 0;
	var speed = 0;
	var timestamp = 0;
	var altitudeAccuracy = 0;
	
	if (typeof(Number.prototype.toRad) === "undefined") {
	  Number.prototype.toRad = function() {
	    return this * Math.PI / 180;
	  }
	}

	Titanium.Geolocation.addEventListener('location',function(e){
		if (e.error){
        	// manage the error
			return;
		}
 
		longitude = e.coords.longitude;
		latitude = e.coords.latitude;
		altitude = e.coords.altitude;
		heading = e.coords.heading;
		accuracy = e.coords.accuracy;
		speed = e.coords.speed;
		timestamp = e.coords.timestamp;
		altitudeAccuracy = e.coords.altitudeAccuracy;
      });
	
	app.modules.geo.getCurrentPosition=function(args){
		var outData={};
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
		Titanium.Geolocation.distanceFilter = 10;
		Titanium.Geolocation.getCurrentPosition(function(e){
			if (!e.success || e.error){
				alert('error ' + JSON.stringify(e.error));
				return;
			}
	
			longitude = e.coords.longitude;
			latitude = e.coords.latitude;
			altitude = e.coords.altitude;
			heading = e.coords.heading;
			accuracy = e.coords.accuracy;
			speed = e.coords.speed;
			timestamp = e.coords.timestamp;
			altitudeAccuracy = e.coords.altitudeAccuracy;
			
			outData={
				latitude:latitude,
				longitude:longitude,
				altitude:altitude,
				heading:heading,
				accuracy:accuracy,
				speed:speed,
				timestamp:timestamp,
				altitudeAccuracy:altitudeAccuracy
			}
		});	
		return outData;
	}
	
	app.modules.geo.getDistance=function(lat1,lon1,lat2,lon2){
		var R = 6371; // km
		var dLat = (lat2-lat1).toRad();
		var dLon = (lon2-lon1).toRad();
		var lat1 = lat1.toRad();
		var lat2 = lat2.toRad();
		
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c;
		return d;
	}
})()
