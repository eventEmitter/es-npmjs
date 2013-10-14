


	var   Class 			= require( "ee-class" )
		, Webservice 		= require( "ee-webservice" )
		, Rest 				= require( "em-rest" )
		, log 				= require( "ee-log" )
		, project 			= require( "ee-project" );



	module.exports = new Class( {


		init: function( options ){

			// load the webservice
			this.service = new Webservice( project.config );

			this.service.listen();


			this.service.use( { request: function( request, response, next ){
				log( request.method, request.pathname, request.query, request.getHeaders() );
				response.send( 500 );
			} } );
		}



		
	} );