// assign a ListItem template based on the contents of the model
Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
//determine if the database needs to be seeded
Alloy.Collections.donor.deleteAll();
var fileName = 'seed_data.json'; 
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);  
var json, object_name, id;   
var preParseData = (file.read().text); 
var response = JSON.parse(preParseData);
Alloy.Collections.donor.reset(response);
// save all of the elements
Alloy.Collections.donor.saveAll();
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

