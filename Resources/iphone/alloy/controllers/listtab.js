function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

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
    this.__controllerPath = "listtab";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("donor");
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "ListView",
        id: "__alloyId5"
    });
    var __alloyId6 = {};
    var __alloyId8 = [];
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "dollarSign",
        properties: {
            left: 60,
            color: "black",
            right: 300,
            top: 6,
            width: 48,
            height: 48,
            bindId: "dollarSign"
        }
    };
    __alloyId8.push(__alloyId9);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            left: 60,
            color: "black",
            top: 5,
            font: {
                fontWeight: "bold"
            },
            bindId: "name"
        }
    };
    __alloyId8.push(__alloyId10);
    var __alloyId11 = {
        type: "Ti.UI.Label",
        bindId: "cityState",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "cityState"
        }
    };
    __alloyId8.push(__alloyId11);
    var __alloyId7 = {
        properties: {
            height: "60",
            name: "checkedInTemplate",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
        },
        childTemplates: __alloyId8
    };
    __alloyId6["checkedInTemplate"] = __alloyId7;
    var __alloyId14 = [];
    var __alloyId15 = {
        type: "Ti.UI.Label",
        bindId: "dollarSign",
        properties: {
            left: 60,
            color: "black",
            right: 300,
            top: 6,
            width: 48,
            height: 48,
            bindId: "dollarSign"
        }
    };
    __alloyId14.push(__alloyId15);
    var __alloyId16 = {
        type: "Ti.UI.Label",
        bindId: "name",
        properties: {
            left: 60,
            color: "black",
            top: 5,
            font: {
                fontWeight: "bold"
            },
            bindId: "name"
        }
    };
    __alloyId14.push(__alloyId16);
    var __alloyId17 = {
        type: "Ti.UI.Label",
        bindId: "cityState",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "cityState"
        }
    };
    __alloyId14.push(__alloyId17);
    var __alloyId13 = {
        properties: {
            name: "notCheckedInTemplate",
            height: "60"
        },
        childTemplates: __alloyId14
    };
    __alloyId6["notCheckedInTemplate"] = __alloyId13;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId22 = Alloy.Collections["donor"] || donor;
    __alloyId22.on("fetch destroy change add remove reset", __alloyId23);
    var __alloyId24 = [];
    __alloyId24.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId24,
        templates: __alloyId6,
        id: "list",
        defaultItemTemplate: "odd"
    });
    $.__views.__alloyId5.add($.__views.list);
    $.__views.listtab = Ti.UI.createTab({
        icon: "KS_nav_views.png",
        window: $.__views.__alloyId5,
        title: "ListView",
        id: "listtab"
    });
    $.__views.listtab && $.addTopLevelView($.__views.listtab);
    exports.destroy = function() {
        __alloyId22.off("fetch destroy change add remove reset", __alloyId23);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;