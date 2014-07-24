function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId26(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId26.opts || {};
        var models = checkedInFilter(__alloyId25);
        var len = models.length;
        var __alloyId21 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId22 = models[i];
            __alloyId22.__transform = doTransform(__alloyId22);
            var __alloyId24 = {
                template: "undefined" != typeof __alloyId22.__transform["template"] ? __alloyId22.__transform["template"] : __alloyId22.get("template"),
                name: {
                    text: "undefined" != typeof __alloyId22.__transform["name"] ? __alloyId22.__transform["name"] : __alloyId22.get("name")
                },
                dollarSign: {
                    text: "undefined" != typeof __alloyId22.__transform["dollarSign"] ? __alloyId22.__transform["dollarSign"] : __alloyId22.get("dollarSign")
                },
                cityState: {
                    text: "undefined" != typeof __alloyId22.__transform["cityState"] ? __alloyId22.__transform["cityState"] : __alloyId22.get("cityState")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId22.__transform["name"] ? __alloyId22.__transform["name"] : __alloyId22.get("name")
                }
            };
            __alloyId21.push(__alloyId24);
        }
        opts.animation ? $.__views.section.setItems(__alloyId21, opts.animation) : $.__views.section.setItems(__alloyId21);
    }
    function doTransform(model) {
        var o = model.toJSON();
        res_text = "$";
        for (var j = 0; 5 > j; j++) res_text += "$";
        o.name = o.FirstName + " " + o.LastName;
        o.cityState = o.City + ", " + o.State;
        o.dollarSign = res_text;
        o.template = o.CheckedIn ? "checkedInTemplate" : "notCheckedInTemplate";
        return o;
    }
    function checkedInFilter(collection) {
        return collection.where({
            CheckedIn: 1
        });
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
        title: "United Zombie College Funds",
        id: "__alloyId5"
    });
    $.__views.__alloyId6 = Ti.UI.createSearchBar({
        barColor: "#000",
        id: "__alloyId6"
    });
    var __alloyId7 = {};
    var __alloyId9 = [];
    var __alloyId10 = {
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
    __alloyId9.push(__alloyId10);
    var __alloyId11 = {
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
    __alloyId9.push(__alloyId11);
    var __alloyId13 = {
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
    __alloyId9.push(__alloyId13);
    var __alloyId8 = {
        properties: {
            height: "80",
            name: "checkedInTemplate",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
        },
        childTemplates: __alloyId9
    };
    __alloyId7["checkedInTemplate"] = __alloyId8;
    var __alloyId16 = [];
    var __alloyId17 = {
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
    __alloyId16.push(__alloyId17);
    var __alloyId18 = {
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
    __alloyId16.push(__alloyId18);
    var __alloyId20 = {
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
    __alloyId16.push(__alloyId20);
    var __alloyId15 = {
        properties: {
            name: "notCheckedInTemplate",
            height: "80"
        },
        childTemplates: __alloyId16
    };
    __alloyId7["notCheckedInTemplate"] = __alloyId15;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId25 = Alloy.Collections["donor"] || donor;
    __alloyId25.on("fetch destroy change add remove reset", __alloyId26);
    var __alloyId27 = [];
    __alloyId27.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId27,
        templates: __alloyId7,
        searchView: $.__views.__alloyId6,
        id: "list",
        defaultItemTemplate: "checkedInTemplate"
    });
    $.__views.__alloyId5.add($.__views.list);
    $.__views.listtab = Ti.UI.createTab({
        icon: "KS_nav_views.png",
        window: $.__views.__alloyId5,
        title: "AllList",
        id: "listtab"
    });
    $.__views.listtab && $.addTopLevelView($.__views.listtab);
    exports.destroy = function() {
        __alloyId25.off("fetch destroy change add remove reset", __alloyId26);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;