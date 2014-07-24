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
    this.__controllerPath = "listtab";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "ListView",
        id: "__alloyId2"
    });
    var __alloyId3 = {};
    var __alloyId5 = [];
    var __alloyId6 = {
        type: "Ti.UI.Label",
        bindId: "dollarSign",
        properties: {
            left: 6,
            color: "black",
            top: 6,
            width: 48,
            height: 48,
            bindId: "dollarSign"
        }
    };
    __alloyId5.push(__alloyId6);
    var __alloyId7 = {
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
    __alloyId5.push(__alloyId7);
    var __alloyId8 = {
        type: "Ti.UI.Label",
        bindId: "cityState",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "cityState"
        }
    };
    __alloyId5.push(__alloyId8);
    var __alloyId4 = {
        properties: {
            height: "60",
            name: "checkedInTemplate",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
        },
        childTemplates: __alloyId5
    };
    __alloyId3["checkedInTemplate"] = __alloyId4;
    var __alloyId11 = [];
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "dollarSign",
        properties: {
            left: 6,
            color: "black",
            top: 6,
            width: 48,
            height: 48,
            bindId: "dollarSign"
        }
    };
    __alloyId11.push(__alloyId12);
    var __alloyId13 = {
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
    __alloyId11.push(__alloyId13);
    var __alloyId14 = {
        type: "Ti.UI.Label",
        bindId: "cityState",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "cityState"
        }
    };
    __alloyId11.push(__alloyId14);
    var __alloyId10 = {
        properties: {
            name: "notCheckedInTemplate",
            height: "60"
        },
        childTemplates: __alloyId11
    };
    __alloyId3["notCheckedInTemplate"] = __alloyId10;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId16 = [];
    __alloyId16.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId16,
        templates: __alloyId3,
        id: "list",
        defaultItemTemplate: "odd"
    });
    $.__views.__alloyId2.add($.__views.list);
    $.__views.listtab = Ti.UI.createTab({
        icon: "KS_nav_views.png",
        window: $.__views.__alloyId2,
        title: "ListView",
        id: "listtab"
    });
    $.__views.listtab && $.addTopLevelView($.__views.listtab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (var i = 0; 500 > i; i++) {
        res_text = "$";
        for (var j = 0; i % 5 > j; j++) res_text += "$";
        var item = {
            name: {
                text: "name " + i
            },
            cityState: {
                text: "City, State" + i
            },
            dollarSign: {
                text: res_text
            },
            template: i % 2 ? "checkedInTemplate" : "notCheckedInTemplate"
        };
        data.push(item);
    }
    $.section.setItems(data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;