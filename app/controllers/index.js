// assign a ListItem template based on the contents of the model
var last_time=Date();
Ti.App.Properties.setString('last_checked_in_time', last_time);
//determine if the database needs to be seeded
Ti.API.info("last checked in:" + last_time);
Alloy.Collections.donor.deleteAll();


var xhr = Ti.Network.createHTTPClient();
xhr.onload = function() {
  // do something with the response payload
  Ti.API.info("Received text: " + this.responseText);

  var users = [];
  Alloy.Collections.donor.deleteAll();
  
  var names = JSON.parse(this.responseText);
   for(var i=0,j=names.length;i<j;i++) {       
       var defaults = {
            "ImportId": names[i].ImportID,
            "FirstName": names[i].FirstName,
            "LastName": names[i].LastName,
            "Addr1": names[i].Addr1,
            "Addr2": names[i].Addr2,
            "City": names[i].City,
            "State": names[i].State,
            "DonorCategory": names[i].DonorCategory,
            "NextAskAmount": names[i].NextAskAmount,
            "TotalIdentifiedAssets": names[i].TotalIdentifiedAssets,
            "CurrentMajor1kDonor": names[i].CurrentMajor1kDonor,
            "MajorDonorWith1MMinAssets": names[i].MajorDonorWith1MMAssets,
            "MajorUnderPerformer": names[i].MajorUnderPerformer,
            "MajorUnderPerformingByAmount": names[i].MajorUnderPerformingByAmount,
            "AnnualDonorWith1MMinAssets": names[i].AnnualDonorWith1MMinAssets,
            "AnnualUnderPerformer": names[i].AnnualUnderPerformer,
            "AnnualUnderPerformingByAmount": names[i].AnnualUnderPerformingByAmount,
            "CheckedIn": names[i].checked_in,
       };
       
        users.push(defaults);       
    }
    Alloy.Collections.donor.reset(users);  
    Alloy.Collections.donor.saveAll();
};

var fetch = function() {
  xhr.open('GET', 'http://172.20.38.98:3000/event_registrants.json');
  xhr.send();
};

setTimeout(function()
{
  fetch();
}, 10000 );

fetch();



// save all of the elements

Ti.App.Properties.setString('seeded', 'yuppers');

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

