function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId53(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId53.opts || {};
        var models = __alloyId52.models;
        var len = models.length;
        var __alloyId48 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId49 = models[i];
            __alloyId49.__transform = doTransform(__alloyId49);
            var __alloyId51 = {
                template: "undefined" != typeof __alloyId49.__transform["template"] ? __alloyId49.__transform["template"] : __alloyId49.get("template"),
                name: {
                    text: "undefined" != typeof __alloyId49.__transform["name"] ? __alloyId49.__transform["name"] : __alloyId49.get("name")
                },
                dollarSign: {
                    text: "undefined" != typeof __alloyId49.__transform["dollarSign"] ? __alloyId49.__transform["dollarSign"] : __alloyId49.get("dollarSign")
                },
                cityState: {
                    text: "undefined" != typeof __alloyId49.__transform["cityState"] ? __alloyId49.__transform["cityState"] : __alloyId49.get("cityState")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId49.__transform["name"] ? __alloyId49.__transform["name"] : __alloyId49.get("name")
                }
            };
            __alloyId48.push(__alloyId51);
        }
        opts.animation ? $.__views.section.setItems(__alloyId48, opts.animation) : $.__views.section.setItems(__alloyId48);
    }
    function doTransform(model) {
        var o = model.toJSON();
        assets = o.TotalIdentifiedAssets;
        switch (assets) {
          case "0-0":
            res_text = "$";
            break;

          case "$100,000-$499,999":
            res_text = "$$";
            break;

          case "$500,000-$999,999":
            res_text = "$$$";
            break;

          case "$1,000,000-$4,999,999":
            res_text = "$$$$";
            break;

          case "$5,000,000-$9,999,999":
            res_text = "$$$$$";
            break;

          case "$10,000,000-$24,999,999":
            res_text = "$$$$$$";
            break;

          case "$25,000,000+":
            res_text = "$$$$$$$";
            break;

          default:
            res_text = "$";
        }
        o.name = o.FirstName + " " + o.LastName;
        o.cityState = o.City + ", " + o.State;
        o.dollarSign = res_text;
        o.template = o.CheckedIn ? "checkedInTemplate" : "notCheckedInTemplate";
        return o;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listtab";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("donor");
    $.__views.__alloyId32 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "United Zombie College Funds",
        id: "__alloyId32"
    });
    $.__views.__alloyId33 = Ti.UI.createSearchBar({
        barColor: "#000",
        id: "__alloyId33"
    });
    var __alloyId34 = {};
    var __alloyId36 = [];
    var __alloyId37 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            left: 60,
            color: "black",
            top: 10,
            font: {
                fontWeight: "bold",
                fontFamily: "Helvetica Neue",
                fontSize: 15
            },
            bindId: "name"
        }
    };
    __alloyId36.push(__alloyId37);
    var __alloyId38 = {
        type: "Ti.UI.Label",
        bindId: "cityState",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bottom: 5,
            font: {
                fontFamily: "Helvetica Neue",
                fontSize: 12
            },
            bindId: "cityState"
        }
    };
    __alloyId36.push(__alloyId38);
    var __alloyId40 = {
        type: "Ti.UI.Label",
        bindId: "dollarSign",
        properties: {
            left: 220,
            color: "#008000",
            font: {
                fontSize: 20
            },
            bindId: "dollarSign"
        }
    };
    __alloyId36.push(__alloyId40);
    var __alloyId35 = {
        properties: {
            height: "80",
            name: "checkedInTemplate",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
        },
        childTemplates: __alloyId36
    };
    __alloyId34["checkedInTemplate"] = __alloyId35;
    var __alloyId43 = [];
    var __alloyId44 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            left: 60,
            color: "black",
            top: 10,
            font: {
                fontWeight: "bold",
                fontFamily: "Helvetica Neue",
                fontSize: 15
            },
            bindId: "name"
        }
    };
    __alloyId43.push(__alloyId44);
    var __alloyId45 = {
        type: "Ti.UI.Label",
        bindId: "cityState",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bottom: 5,
            font: {
                fontFamily: "Helvetica Neue",
                fontSize: 12
            },
            bindId: "cityState"
        }
    };
    __alloyId43.push(__alloyId45);
    var __alloyId47 = {
        type: "Ti.UI.Label",
        bindId: "dollarSign",
        properties: {
            left: 220,
            color: "#008000",
            font: {
                fontSize: 20
            },
            bindId: "dollarSign"
        }
    };
    __alloyId43.push(__alloyId47);
    var __alloyId42 = {
        properties: {
            name: "notCheckedInTemplate",
            height: "80"
        },
        childTemplates: __alloyId43
    };
    __alloyId34["notCheckedInTemplate"] = __alloyId42;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId52 = Alloy.Collections["donor"] || donor;
    __alloyId52.on("fetch destroy change add remove reset", __alloyId53);
    var __alloyId54 = [];
    __alloyId54.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId54,
        templates: __alloyId34,
        searchView: $.__views.__alloyId33,
        id: "list",
        defaultItemTemplate: "checkedInTemplate"
    });
    $.__views.__alloyId32.add($.__views.list);
    $.__views.listtab = Ti.UI.createTab({
        icon: "KS_nav_views.png",
        window: $.__views.__alloyId32,
        title: "AllList",
        id: "listtab"
    });
    $.__views.listtab && $.addTopLevelView($.__views.listtab);
    exports.destroy = function() {
        __alloyId52.off("fetch destroy change add remove reset", __alloyId53);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;