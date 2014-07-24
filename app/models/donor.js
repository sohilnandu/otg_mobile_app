exports.definition = {
	config: {
		columns: {
		    "ImportId": "integer",
		    "FirstName": "string",
		    "LastName": "string",
		    "Addr1": "string",
		    "Addr2": "string",
		    "City": "string",
		    "State": "string",
		    "DonorCategory": "string",
		    "NextAskAmount": "string",
		    "TotalIdentifiedAssets": "string",
		    "CurrentMajor1kDonor": "integer",
		    "MajorDonorWith1MMinAssets": "integer",
		    "MajorUnderPerformer": "integer",
		    "MajorUnderPerformingByAmount": "integer",
		    "AnnualDonorWith1MMinAssets": "integer",
		    "AnnualUnderPerformer": "integer",
		    "AnnualUnderPerformingByAmount": "integer",
		    "CheckedIn": "boolean"
		},
		defaults: {
            "ImportId": 0,
            "FirstName": "",
            "LastName": "",
            "Addr1": "",
            "Addr2": "",
            "City": "",
            "State": "",
            "DonorCategory": "",
            "NextAskAmount": "",
            "TotalIdentifiedAssets": "",
            "CurrentMajor1kDonor": 0,
            "MajorDonorWith1MMinAssets": 0,
            "MajorUnderPerformer": 0,
            "MajorUnderPerformingByAmount": 0,
            "AnnualDonorWith1MMinAssets": 0,
            "AnnualUnderPerformer": 0,
            "AnnualUnderPerformingByAmount": 0,
            "CheckedIn": false
        },
		adapter: {
			type: "sql",
			collection_name: "donor"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};