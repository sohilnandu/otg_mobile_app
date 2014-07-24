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
        FirstName: "Brady",
        LastName: "Foster",
        Addr1: "Ap #744-1400 Donec Road",
        City: "South Burlington",
        State: "VT",
        Addr2: null,
        DonorCategory: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0,
        CheckedIn: true
    }, {
        ImportID: 117665,
        FirstName: "Gannon",
        LastName: "Beasley",
        Addr1: "P.O. Box 531, 8389 Cras Road",
        City: "Lafayette",
        State: "Louisiana",
        Addr2: null,
        DonorCategory: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0,
        CheckedIn: false
    }, {
        ImportID: 117674,
        FirstName: "Alfonso",
        LastName: "Cochran",
        Addr1: "Ap #115-3259 Mollis Ave",
        City: "Columbia",
        State: "Maryland",
        Addr2: null,
        DonorCategory: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0,
        CheckedIn: false
    }, {
        ImportID: 117675,
        FirstName: "Ivor",
        LastName: "Williams",
        Addr1: "699-7334 Sit Av.",
        City: "Cleveland",
        State: "OH",
        Addr2: null,
        DonorCategory: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0,
        CheckedIn: true
    }, {
        ImportID: 117676,
        FirstName: "Oleg",
        LastName: "Santana",
        Addr1: "6576 Tempus Rd.",
        City: "Savannah",
        State: "Georgia",
        Addr2: null,
        DonorCategory: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0,
        CheckedIn: false
    }, {
        ImportID: 117693,
        FirstName: "Ainsley",
        LastName: "Richards",
        Addr1: "Ap #214-5792 Viverra. Road",
        City: "Meridian",
        State: "ID",
        Addr2: null,
        DonorCategory: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0,
        CheckedIn: false
    }, {
        ImportID: 117698,
        FirstName: "Carissa",
        LastName: "Parks",
        Addr1: "P.O. Box 526, 9013 Nec St.",
        City: "Tulsa",
        State: "OK",
        Addr2: null,
        DonorCategory: "A",
        NextAskAmount: "$1-$250",
        TotalIdentifiedAssets: "0-0",
        CurrentMajor1kDonor: 0,
        MajorDonorWith1MMinAssets: 0,
        MajorUnderPerformer: 0,
        MajorUnderPerformingByAmount: 0,
        AnnualDonorWith1MMinAssets: 0,
        AnnualUnderPerformer: 0,
        AnnualUnderPerformingByAmount: 0,
        CheckedIn: true
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