


	var   Application 	= require( "./app" );



	// print logo
	[ "","","","                                                              __        ","                                     ____ ______   _____     |__| ______","                                    /    \\\\____ \\ /     \\    |  |/  ___/","                                   |   |  \\  |_> >  Y Y  \\   |  |\\___ \\ ","                                   |___|  /   __/|__|_|  /\\__|  /____  >","                                        \\/|__|         \\/\\______|    \\/ ","", "","",].forEach( function( line ){
		console.log( line.red.bold );
	} );


	// start application
	var app = new Application();