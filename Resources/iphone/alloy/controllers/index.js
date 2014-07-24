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
    var __alloyId2 = [];
    $.__views.listtab = Alloy.createController("listtab", {
        id: "listtab"
    });
    __alloyId2.push($.__views.listtab.getViewEx({
        recurse: true
    }));
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId2,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.donor.reset([ {
        ImportID: 117644,
        FirstName: "Christopher",
        LastName: "Schlitt",
        Addr1: "199 Crystal Avenue",
        Addr2: null,
        City: "Staten Island",
        State: "NY",
        DonorCategoryA: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0
    }, {
        ImportID: 117665,
        FirstName: "Michael",
        LastName: "Trombetta",
        Addr1: "279 McBaine Avenue",
        Addr2: null,
        City: "Staten Island",
        State: "NY",
        DonorCategoryA: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0
    }, {
        ImportID: 117674,
        FirstName: "Vanessa",
        LastName: "Grigoli",
        Addr1: "15 E Pine Branch Dr",
        Addr2: null,
        City: "Millstone Twp",
        State: "NJ",
        DonorCategoryA: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0
    }, {
        ImportID: 117675,
        FirstName: "Nadiyah",
        LastName: "McCarroll",
        Addr1: "97 Bond Street",
        Addr2: null,
        City: "Staten Island",
        State: "NY",
        DonorCategoryA: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0
    }, {
        ImportID: 117676,
        FirstName: "Antonio",
        LastName: "Vavallo",
        Addr1: "1661  66th Street",
        Addr2: null,
        City: "Brooklyn",
        State: "NY",
        DonorCategoryA: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0
    }, {
        ImportID: 117693,
        FirstName: "Kirsten",
        LastName: "Elefterakis",
        Addr1: "44 Tarring Street",
        Addr2: null,
        City: "Staten Island",
        State: "NY",
        DonorCategoryA: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0
    }, {
        ImportID: 117698,
        FirstName: "Fallon",
        LastName: "Daniels",
        Addr1: "317 Colt Place",
        Addr2: null,
        City: "Manchester",
        State: "NJ",
        DonorCategoryA: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0
    } ]);
    Alloy.Collections.donor.each(function(_m) {
        _m.save();
    });
    Alloy.Collections.donor.fetch();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;