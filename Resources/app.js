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
 * Name: 			app.js
 * Description: 	Entry point script
 * Date:			
 * Author:			
 * Company:			RicardoAlcocer.com
 * Version:			
 * 
 * Notes:
 * 
 * 
 */

var app={};
app.ui={};
app.modules={};

// add modules
Ti.include('modules/main.js');
//

app.modules.main.getMainWindow();

