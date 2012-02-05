MOBAT - Module-based Application Template
=============

MOBAT is a Titanium Application Template designed to make coding in Titanium less like web-based coding and more like traditional object oriented desktop coding.

The idea is to have all code separated into modules, while intantiating them in a single Javascript context.

This project was initiated after many Titanium courses offered in Puerto Rico (http://facebook.com/intelica) and many hours of Titanium Hacking for TainoApp (http://gettainoapp.com)

Hope you find it useful and you can help make the code better.


Installation
------------
Create a new Titanium Project and replace the *Resources* folder


Usage
------------

The general idea is to have a main namespace called app, and within app, two namespaces: app.ui and app.modules.

On app.js, the namespaces are created, modules are included and a main function is called:


	var app={};
	app.ui={};
	app.modules={};

	// add modules
	Ti.include('modules/main.js');
	//

	app.modules.main.getMainWindow();


Each module is a self-calling annonymous function which inserts itself into any of these two namespaces.  The function can have private and public members.

	(function(){
		// add this module into one of the namespaces
		app.modules.main={};
		
		// private var and functions can be somewhere here
		// also, public methods to get access to private vars
		
		// create a public method
		app.modules.main.getMainWindow=function(){
			var win=Ti.UI.createWindow();
			
			return win;
		}
	})()


Notes
------------
In the future, I would like to evaluate the benefits of adding support to Klass (http://dustindiaz.com/klass)


License
------------
The code is released as Open Source under the GPL3 license.


Contributors
------------
  * [Ricardo Alcocer] (https://about.me/ricardoalcocer)
 