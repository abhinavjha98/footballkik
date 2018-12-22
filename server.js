const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const flash = require('flash');
const container = require('./container');

container.resolve(function(users){

	const app = SetupExpress();

	function SetupExpress(){
		const app = express();
		const server = http.createServer(app);
		server.listen(3000,function(){
			console.log('Listening on port 3000');
		});
		ConfigureExpress(app);
		//Setup router
		const router = require('express-promise-router')();
		users.SetRouting(router);

		app.use(router);
	}
	

	function ConfigureExpress(app){
		app.use(express.static('pubic'));
		app.use(cookieParser());
		app.set('view engine','ejs');
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({extended: true}));
	}


});