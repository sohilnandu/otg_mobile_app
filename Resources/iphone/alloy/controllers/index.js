function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId27 = [];
    $.__views.listtab = Alloy.createController("listtab", {
        id: "listtab"
    });
    __alloyId27.push($.__views.listtab.getViewEx({
        recurse: true
    }));
    $.__views.checkedintab = Alloy.createController("checkedintab", {
        id: "checkedintab"
    });
    __alloyId27.push($.__views.checkedintab.getViewEx({
        recurse: true
    }));
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId27,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if (!Ti.App.Properties.hasProperty("last_checked_time")) {
        var d = new Date();
        var last_checked = d.getTime();
        Ti.App.Properties.setString("last_checked_time", last_checked);
    }
    Alloy.Collections.donor.deleteAll();
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("Received text: " + this.responseText);
        var users = [];
        var old_last_checked = Ti.App.Properties.getString("last_checked_time");
        Ti.API.info("old_last_checked_time: " + old_last_checked);
        var d = new Date();
        var new_last_checked = d.getTime();
        Ti.API.info("new: " + new_last_checked + " " + d + " " + (parseInt(new_last_checked) - parseInt(old_last_checked)));
        Alloy.Collections.donor.deleteAll();
        var names = JSON.parse(this.responseText);
        for (var i = 0, j = names.length; j > i; i++) {
            var defaults = {
                ImportId: names[i].ImportID,
                FirstName: names[i].FirstName,
                LastName: names[i].LastName,
                Addr1: names[i].Addr1,
                Addr2: names[i].Addr2,
                City: names[i].City,
                State: names[i].State,
                DonorCategory: names[i].DonorCategory,
                NextAskAmount: names[i].NextAskAmount,
                TotalIdentifiedAssets: names[i].TotalIdentifiedAssets,
                CurrentMajor1kDonor: names[i].CurrentMajor1kDonor,
                MajorDonorWith1MMinAssets: names[i].MajorDonorWith1MMAssets,
                MajorUnderPerformer: names[i].MajorUnderPerformer,
                MajorUnderPerformingByAmount: names[i].MajorUnderPerformingByAmount,
                AnnualDonorWith1MMinAssets: names[i].AnnualDonorWith1MMinAssets,
                AnnualUnderPerformer: names[i].AnnualUnderPerformer,
                AnnualUnderPerformingByAmount: names[i].AnnualUnderPerformingByAmount,
                CheckedIn: names[i].checked_in
            };
            if (names[i].checked_in) {
                var record_date = Date.parse(names[i].checked_in_time);
                record_date >= parseInt(old_last_checked) && alert(names[i].FirstName + " " + names[i].LastName + " is here!!!");
            }
            users.push(defaults);
        }
        Alloy.Collections.donor.reset(users);
        Alloy.Collections.donor.saveAll();
        Ti.App.Properties.setString("last_checked_time", new_last_checked);
    };
    var fetch = function() {
        xhr.open("GET", "http://172.20.38.98:3000/event_registrants.json");
        xhr.send();
    };
    setInterval(function() {
        fetch();
    }, 1e4);
    fetch();
    Ti.App.Properties.setString("seeded", "yuppers");
    Alloy.Collections.donor.fetch();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;