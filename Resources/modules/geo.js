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
 * Returns:
 * 	latitude
 * 	longitude
 * 	altitude
 * 	heading
 * 	accuracy
 * 	speed
 * 	timestamp
 * 	altitudeAccuracy
 * 
 */
(function(){
	// inject this code into app.modules
	app.modules.geo={};
	
	app.modules.geo.getCurrentPosition=function(args){
		var outData={};
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
		Titanium.Geolocation.distanceFilter = 10;
		Titanium.Geolocation.getCurrentPosition(function(e){
			if (!e.success || e.error){
				alert('error ' + JSON.stringify(e.error));
				return;
			}
	
			var longitude = e.coords.longitude;
			var latitude = e.coords.latitude;
			var altitude = e.coords.altitude;
			var heading = e.coords.heading;
			var accuracy = e.coords.accuracy;
			var speed = e.coords.speed;
			var timestamp = e.coords.timestamp;
			var altitudeAccuracy = e.coords.altitudeAccuracy;
			
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
})()
