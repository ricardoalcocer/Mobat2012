![Mobat Logo](http://ricardoalcocer.com/wp-content/uploads/2012/02/logo.png)


MOBAT is a Titanium Application Template designed to make coding in Titanium less like web-based coding and more like traditional object oriented desktop coding.

The idea is to have all code separated into modules, while intantiating them in a single Javascript context.

This project was initiated after many Titanium courses offered in Puerto Rico (http://facebook.com/intelica) and many hours of Titanium Hacking for TainoApp (http://gettainoapp.com)

Hope you find it useful and you can help make the code better.


Installation
------------
Create a new Titanium Project and replace the *Resources* folder

In Titanium Studio, select Import - Git - Git Repository as New Project

	Path: git://github.com/ricardoalcocer/Mobat2012.gif
	
Enter your local project path and wait a few seconds until the repository gets cloned.

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
The code is released as Open Source under the terms of the MIT license.

Copyright (C) 2012 Ricardo Alcocer

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Contributors
------------
  * [Ricardo Alcocer] (https://about.me/ricardoalcocer)
 