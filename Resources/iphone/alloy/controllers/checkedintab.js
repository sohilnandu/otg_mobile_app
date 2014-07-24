function Controller() {
    function __alloyId23(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId23.opts || {};
        var models = __alloyId22.models;
        var len = models.length;
        var __alloyId18 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId19 = models[i];
            __alloyId19.__transform = doTransform(__alloyId19);
            var __alloyId21 = {
                template: "undefined" != typeof __alloyId19.__transform["template"] ? __alloyId19.__transform["template"] : __alloyId19.get("template"),
                name: {
                    text: "undefined" != typeof __alloyId19.__transform["name"] ? __alloyId19.__transform["name"] : __alloyId19.get("name")
                },
                dollarSign: {
                    text: "undefined" != typeof __alloyId19.__transform["dollarSign"] ? __alloyId19.__transform["dollarSign"] : __alloyId19.get("dollarSign")
                },
                cityState: {
                    text: "undefined" != typeof __alloyId19.__transform["cityState"] ? __alloyId19.__transform["cityState"] : __alloyId19.get("cityState")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId19.__transform["name"] ? __alloyId19.__transform["name"] : __alloyId19.get("name")
                }
            };
            __alloyId18.push(__alloyId21);
        }
        opts.animation ? $.__views.section.setItems(__alloyId18, opts.animation) : $.__views.section.setItems(__alloyId18);
    }
    function doTransform(model) {
        var o = model.toJSON();
        res_text = "$";
        for (var j = 0; 5 > j; j++) res_text += "$";
        o.name = o.FirstName + " " + o.LastName;
        o.cityState = o.City + ", " + o.State;
        o.dollarSign = res_text;
        o.template = o.checkedIn ? "checkedInTemplate" : "notCheckedInTemplate";
        return o;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "checkedintab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("donor");
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "United Zombie College Funds",
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Ti.UI.createSearchBar({
        barColor: "#000",
        id: "__alloyId3"
    });
    var __alloyId4 = {};
    var __alloyId6 = [];
    var __alloyId7 = {
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
    __alloyId6.push(__alloyId7);
    var __alloyId8 = {
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
    __alloyId6.push(__alloyId8);
    var __alloyId10 = {
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
    __alloyId6.push(__alloyId10);
    var __alloyId5 = {
        properties: {
            height: "80",
            name: "checkedInTemplate",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
        },
        childTemplates: __alloyId6
    };
    __alloyId4["checkedInTemplate"] = __alloyId5;
    var __alloyId13 = [];
    var __alloyId14 = {
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
    __alloyId13.push(__alloyId14);
    var __alloyId15 = {
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
    __alloyId13.push(__alloyId15);
    var __alloyId17 = {
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
    __alloyId13.push(__alloyId17);
    var __alloyId12 = {
        properties: {
            name: "notCheckedInTemplate",
            height: "80"
        },
        childTemplates: __alloyId13
    };
    __alloyId4["notCheckedInTemplate"] = __alloyId12;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId22 = Alloy.Collections["donor"] || donor;
    __alloyId22.on("fetch destroy change add remove reset", __alloyId23);
    var __alloyId24 = [];
    __alloyId24.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId24,
        templates: __alloyId4,
        searchView: $.__views.__alloyId3,
        id: "list",
        defaultItemTemplate: "checkedInTemplate"
    });
    $.__views.__alloyId2.add($.__views.list);
    $.__views.checkedintab = Ti.UI.createTab({
        icon: "KS_nav_views.png",
        window: $.__views.__alloyId2,
        title: "Checked In",
        id: "checkedintab"
    });
    $.__views.checkedintab && $.addTopLevelView($.__views.checkedintab);
    exports.destroy = function() {
        __alloyId22.off("fetch destroy change add remove reset", __alloyId23);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;