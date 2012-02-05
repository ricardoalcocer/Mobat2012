(function(){
	// inject this code into app.modules
	app.modules.db={};
	
	app.modules.db.load=function(args){
		alert('This can be the constructor of the db module');
	}
})()
