function isiOS4Plus() {
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0], 10);
    if (major >= 4) return true;
    return false;
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

if (isiOS4Plus()) {
    var service = Ti.App.iOS.registerBackgroundService({
        url: "alerts.js"
    });
    Ti.API.info("registered background service = " + service);
    Ti.App.iOS.addEventListener("notification", function(e) {
        Ti.API.info("local notification received: " + JSON.stringify(e));
    });
    Ti.App.addEventListener("resume", function() {
        Ti.API.info("app is resuming from the background");
    });
    Ti.App.addEventListener("resumed", function() {
        Ti.API.info("app has resumed from the background");
    });
    Ti.App.addEventListener("pause", function() {
        Ti.API.info("app was paused from the foreground");
    });
}

Alloy.createController("index");