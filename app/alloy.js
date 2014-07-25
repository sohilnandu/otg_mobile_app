// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

function isiOS4Plus()
{
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS')
	{
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0],10);
		
		// can only test this support on a 3.2+ device
		if (major >= 4)
		{
			return true;
		}
	}
	return false;
}
 
if (isiOS4Plus())
{
	// register a background service. this JS will run when the app is backgrounded but screen is OFF!!!
	var service = Ti.App.iOS.registerBackgroundService({url:'alerts.js'});
 
	Ti.API.info("registered background service = "+service);
 
	// listen for a local notification event
	Ti.App.iOS.addEventListener('notification',function(e)
	{
		Ti.API.info("local notification received: "+JSON.stringify(e));
	});
 
	// fired when an app resumes for suspension
	Ti.App.addEventListener('resume',function(e){
		Ti.API.info("app is resuming from the background");
	});
	Ti.App.addEventListener('resumed',function(e){
		Ti.API.info("app has resumed from the background");
	});
 
	//This event determines that the app it was just paused
	Ti.App.addEventListener('pause',function(e){
		Ti.API.info("app was paused from the foreground");
	});
}
