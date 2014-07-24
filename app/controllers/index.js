// assign a ListItem template based on the contents of the model

Alloy.Collections.donor.reset([
	{"ImportID":117644,"FirstName":"Christopher","LastName":"Schlitt","Addr1":"199 Crystal Avenue","Addr2":null,"City":"Staten Island","State":"NY","DonorCategoryA":"A","NextAskAmount":"$1-$250","TotalIdentifiedAssets":"0-0","CurrentMajor1kDonor":0,"MajorDonorWith1MMinAssets":0,"MajorUnderPerformer":0,"MajorUnderPerformingByAmount":0,"AnnualDonorWith1MMinAssets":0,"AnnualUnderPerformer":0,"AnnualUnderPerformingByAmount":0},
	{"ImportID":117665,"FirstName":"Michael","LastName":"Trombetta","Addr1":"279 McBaine Avenue","Addr2":null,"City":"Staten Island","State":"NY","DonorCategoryA":"A","NextAskAmount":"$1-$250","TotalIdentifiedAssets":"0-0","CurrentMajor1kDonor":0,"MajorDonorWith1MMinAssets":0,"MajorUnderPerformer":0,"MajorUnderPerformingByAmount":0,"AnnualDonorWith1MMinAssets":0,"AnnualUnderPerformer":0,"AnnualUnderPerformingByAmount":0},
	{"ImportID":117674,"FirstName":"Vanessa","LastName":"Grigoli","Addr1":"15 E Pine Branch Dr","Addr2":null,"City":"Millstone Twp","State":"NJ","DonorCategoryA":"A","NextAskAmount":"$1-$250","TotalIdentifiedAssets":"0-0","CurrentMajor1kDonor":0,"MajorDonorWith1MMinAssets":0,"MajorUnderPerformer":0,"MajorUnderPerformingByAmount":0,"AnnualDonorWith1MMinAssets":0,"AnnualUnderPerformer":0,"AnnualUnderPerformingByAmount":0},
	{"ImportID":117675,"FirstName":"Nadiyah","LastName":"McCarroll","Addr1":"97 Bond Street","Addr2":null,"City":"Staten Island","State":"NY","DonorCategoryA":"A","NextAskAmount":"$1-$250","TotalIdentifiedAssets":"0-0","CurrentMajor1kDonor":0,"MajorDonorWith1MMinAssets":0,"MajorUnderPerformer":0,"MajorUnderPerformingByAmount":0,"AnnualDonorWith1MMinAssets":0,"AnnualUnderPerformer":0,"AnnualUnderPerformingByAmount":0},
	{"ImportID":117676,"FirstName":"Antonio","LastName":"Vavallo","Addr1":"1661  66th Street","Addr2":null,"City":"Brooklyn","State":"NY","DonorCategoryA":"A","NextAskAmount":"$1-$250","TotalIdentifiedAssets":"0-0","CurrentMajor1kDonor":0,"MajorDonorWith1MMinAssets":0,"MajorUnderPerformer":0,"MajorUnderPerformingByAmount":0,"AnnualDonorWith1MMinAssets":0,"AnnualUnderPerformer":0,"AnnualUnderPerformingByAmount":0},
	{"ImportID":117693,"FirstName":"Kirsten","LastName":"Elefterakis","Addr1":"44 Tarring Street","Addr2":null,"City":"Staten Island","State":"NY","DonorCategoryA":"A","NextAskAmount":"$1-$250","TotalIdentifiedAssets":"0-0","CurrentMajor1kDonor":0,"MajorDonorWith1MMinAssets":0,"MajorUnderPerformer":0,"MajorUnderPerformingByAmount":0,"AnnualDonorWith1MMinAssets":0,"AnnualUnderPerformer":0,"AnnualUnderPerformingByAmount":0},
	{"ImportID":117698,"FirstName":"Fallon","LastName":"Daniels","Addr1":"317 Colt Place","Addr2":null,"City":"Manchester","State":"NJ","DonorCategoryA":"A","NextAskAmount":"$1-$250","TotalIdentifiedAssets":"0-0","CurrentMajor1kDonor":0,"MajorDonorWith1MMinAssets":0,"MajorUnderPerformer":0,"MajorUnderPerformingByAmount":0,"AnnualDonorWith1MMinAssets":0,"AnnualUnderPerformer":0,"AnnualUnderPerformingByAmount":0}
	]);

// save all of the elements
Alloy.Collections.donor.each(function(_m) {
    _m.save();
});
Alloy.Collections.donor.fetch();


// for(var i=0; i<500; i++) {
	// res_text = '$';
	// for(var j=0; j<i%5; j++){
		// res_text += '$';
	// }
    // var item = {
        // name: {text: "name " + i},
        // cityState: {text: "City, State" + i},
        // dollarSign: {text: res_text},
        // template: (i%2) ? 'checkedInTemplate' : 'notCheckedInTemplate',
    // };
    // data.push(item);
// }
// $.section.setItems(data);



$.index.open();

