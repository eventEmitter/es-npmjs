


	var Webservice = require( "ee-webservice" );

	
	module.exports = {
		http: {
			  port: 					12001
			, interface:				Webservice.Webserver.IF_ANY
		}
		, model: {
			  name: 					"npm"
			, database: 				"npmjs"
			, hosts: [ {
				  host: 				"10.0.100.1"
				, port: 				3306
				, user: 				"root"
				, password: 			"3customize4system"
				, weight: 				1
				, writable: 			true
				, maxConnections: 		20
				} ]
		}
		, defaultLanguage: 				"en"
	};