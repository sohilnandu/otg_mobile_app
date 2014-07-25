function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    var last_time = Date();
    Ti.App.Properties.setString("last_checked_in_time", last_time);
    Ti.API.info("last checked in:" + last_time);
    Alloy.Collections.donor.deleteAll();
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("Received text: " + this.responseText);
        var users = [];
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
                CheckedIn: names[i].checked_in,
                checked_in_time: names[i].checked_in_time
            };
            users.push(defaults);
        }
        Alloy.Collections.donor.reset(users);
        Alloy.Collections.donor.saveAll();
    };
    var fetch = function() {
        xhr.open("GET", "http://172.20.38.98:3000/event_registrants.json");
        xhr.send();
    };
    setTimeout(function() {
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