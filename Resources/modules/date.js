(function(){
	// inject this code into app.modules
	app.modules.date={};
	
	/*
	 * Add "daysBetween" to Date Object
	 * usage:
	 * var d1 = new Date("06/10/2005");  
	 * var d2 = new Date("01/13/2007"); 
	 * d1.DaysBetween(d2)
	 */
	Date.prototype.DaysBetween = function(){  
		var intMilDay = 24 * 60 * 60 * 1000;  
		var intMilDif = arguments[0] - this;  
		var intDays = Math.floor(intMilDif/intMilDay);  
		return intDays;  
	}  
	
	/*
	 * Add "Monthsbetween" to Date Object  
	 * usage:
	 * var d1 = new Date("06/10/2005");  
	 * var d2 = new Date("01/13/2007"); 
	 * d1.MonthsBetween(d2)
	 */
	Date.prototype.monthsBetween = function(){  
	    var date1,date2,negPos;  
	    if(arguments[0] > this){  
			date1 = this;  
			date2 = arguments[0];  
			negPos = 1;  
	    }  else{  
			date2 = this;  
			date1 = arguments[0];  
	      	negPos = -1;  
	    }  
	    
	    if(date1.getFullYear() == date2.getFullYear()){  
	    	return negPos * (date2.getMonth() - date1.getMonth());  
	    }else{  
	    	var mT = 11 - date1.getMonth();  
	     	mT += date2.getMonth() + 1;  
	      	mT += (date2.getFullYear() - date1.getFullYear() - 1) * 12;  
	      	return negPos * mT;        
	    }           
	}  
	
	// Add "createFromMysql" to Date Object
	Date.prototype.createFromMysql = function(mysql_string){ 
	   if(typeof mysql_string === 'string'){
	      var t = mysql_string.split(/[- :]/);
	
	      //when t[3], t[4] and t[5] are missing they defaults to zero
	      return new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0);          
	   }
	   return null;   
	}

	app.modules.date.getMonthsPassed = function (m1,y1,m2,y2){
		var d1 = new Date(m1 + "/01/" + y1);  
	 	var d2 = new Date(m2 + "/31/" + y2);  
	 	return d1.MonthsBetween(d2);
	}
		
	app.modules.date.mysqlTimeStampToDate = function (timestamp) {
	    //function parses mysql datetime string and returns javascript Date object
	    //input has to be in this format: 2007-06-05 15:26:02
	    var regex=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
	    var parts=timestamp.replace(regex,"$1 $2 $3 $4 $5 $6").split(' ');
	    return new Date(parts[0],parts[1]-1,parts[2],parts[3],parts[4],parts[5]);
	}
		
		
	app.modules.date.daysInFeb = function (theYear){
		var dateObject = new Date(theYear,2,0);
		var daysInMonth = dateObject.getDate(); 
		return daysInMonth;
	}
		
	app.modules.date.isLeapYear = function (theYear){
		/*
		 * another way:
		 * return (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)); 
		 */
		var theDate= new Date(theYear,1,29).getDate() == 29;
		return(theDate);
	}
})();