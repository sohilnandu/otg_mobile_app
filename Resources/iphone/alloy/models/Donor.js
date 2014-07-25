exports.definition = {
    config: {
        columns: {
            ImportId: "integer",
            FirstName: "string",
            LastName: "string",
            Addr1: "string",
            Addr2: "string",
            City: "string",
            State: "string",
            DonorCategory: "string",
            NextAskAmount: "string",
            TotalIdentifiedAssets: "string",
            CurrentMajor1kDonor: "integer",
            MajorDonorWith1MMinAssets: "integer",
            MajorUnderPerformer: "integer",
            MajorUnderPerformingByAmount: "integer",
            AnnualDonorWith1MMinAssets: "integer",
            AnnualUnderPerformer: "integer",
            AnnualUnderPerformingByAmount: "integer",
            CheckedIn: "boolean"
        },
        defaults: {
            ImportId: 0,
            FirstName: "",
            LastName: "",
            Addr1: "",
            Addr2: "",
            City: "",
            State: "",
            DonorCategory: "",
            NextAskAmount: "",
            TotalIdentifiedAssets: "",
            CurrentMajor1kDonor: 0,
            MajorDonorWith1MMinAssets: 0,
            MajorUnderPerformer: 0,
            MajorUnderPerformingByAmount: 0,
            AnnualDonorWith1MMinAssets: 0,
            AnnualUnderPerformer: 0,
            AnnualUnderPerformingByAmount: 0,
            CheckedIn: false
        },
        adapter: {
            type: "sql",
            collection_name: "donor"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        function S4() {
            return (0 | 65536 * (1 + Math.random())).toString(16).substring(1);
        }
        function guid() {
            return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
        }
        _.extend(Collection.prototype, {
            deleteAll: function() {
                var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger("sync");
            },
            saveAll: function() {
                var collection = this;
                var dbName = collection.config.adapter.db_name;
                var table = collection.config.adapter.collection_name;
                var columns = collection.config.columns;
                db = Ti.Database.open(dbName);
                db.execute("BEGIN;");
                collection.each(function(model) {
                    if (!model.id) {
                        model.id = guid();
                        model.attributes[model.idAttribute] = model.id;
                    }
                    var names = [], values = [], q = [];
                    for (var k in columns) {
                        names.push(k);
                        values.push(model.get(k));
                        q.push("?");
                    }
                    var sqlInsert = "INSERT INTO " + table + " (" + names.join(",") + ") VALUES (" + q.join(",") + ");";
                    db.execute(sqlInsert, values);
                });
                db.execute("COMMIT;");
                db.close();
                collection.trigger("sync");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("donor", exports.definition, []);

collection = Alloy.C("donor", exports.definition, model);

exports.Model = model;

exports.Collection = collection;